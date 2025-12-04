const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

// Helper function to make Redis REST API calls
async function redisCommand(command) {
    const response = await fetch(`${UPSTASH_URL}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${UPSTASH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(command),
    });

    if (!response.ok) {
        throw new Error(`Redis command failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.result;
}

// Get client IP
function getClientIP(headers) {
    return headers['x-forwarded-for']?.split(',')[0] ||
        headers['x-real-ip'] ||
        'unknown';
}

exports.handler = async (event) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json',
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            headers,
            body: JSON.stringify({ error: 'Method not allowed' }),
        };
    }

    try {
        const clientIP = getClientIP(event.headers);
        const body = JSON.parse(event.body || '{}');
        const { name, email } = body;

        if (!name || !email) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Name and email are required' }),
            };
        }

        // Check if IP already registered
        const registeredIPsKey = 'rutalegal:registered_ips';
        const isRegistered = await redisCommand(['SISMEMBER', registeredIPsKey, clientIP]);

        if (isRegistered === 1) {
            return {
                statusCode: 400,
                headers,
                body: JSON.stringify({ error: 'Already registered' }),
            };
        }

        // Store registration
        const registrationKey = `rutalegal:registration:${Date.now()}:${clientIP}`;
        const registrationData = JSON.stringify({
            name,
            email,
            ip: clientIP,
            date: new Date().toISOString(),
        });

        await Promise.all([
            redisCommand(['SET', registrationKey, registrationData]),
            redisCommand(['SADD', registeredIPsKey, clientIP]),
            redisCommand(['LPUSH', 'rutalegal:registrations', registrationData]),
        ]);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, message: 'Registration successful' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message }),
        };
    }
};
