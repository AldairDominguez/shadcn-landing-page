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

// Get client IP for tracking unique likes
function getClientIP(headers) {
    return headers['x-forwarded-for']?.split(',')[0] ||
        headers['x-real-ip'] ||
        'unknown';
}

exports.handler = async (event) => {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Content-Type': 'application/json',
    };

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    try {
        const clientIP = getClientIP(event.headers);
        const action = event.queryStringParameters?.action || 'get';

        // Initialize counters if they don't exist
        const visitsKey = 'rutalegal:visits';
        const likesKey = 'rutalegal:likes';
        const likedIPsKey = 'rutalegal:liked_ips';

        switch (action) {
            case 'get': {
                // Get current stats
                const [visits, likes, hasLiked] = await Promise.all([
                    redisCommand(['GET', visitsKey]),
                    redisCommand(['GET', likesKey]),
                    redisCommand(['SISMEMBER', likedIPsKey, clientIP]),
                ]);

                const response = {
                    visits: parseInt(visits || '0'),
                    likes: parseInt(likes || '0'),
                    hasLiked: hasLiked === 1,
                };

                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(response),
                };
            }

            case 'visit': {
                // Increment visit count
                const newVisits = await redisCommand(['INCR', visitsKey]);
                const likes = await redisCommand(['GET', likesKey]);
                const hasLiked = await redisCommand(['SISMEMBER', likedIPsKey, clientIP]);

                const response = {
                    visits: parseInt(newVisits),
                    likes: parseInt(likes || '0'),
                    hasLiked: hasLiked === 1,
                };

                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(response),
                };
            }

            case 'like': {
                // Check if user already liked
                const hasLiked = await redisCommand(['SISMEMBER', likedIPsKey, clientIP]);

                if (hasLiked === 1) {
                    return {
                        statusCode: 400,
                        headers,
                        body: JSON.stringify({ error: 'Already liked' }),
                    };
                }

                // Add like
                await Promise.all([
                    redisCommand(['INCR', likesKey]),
                    redisCommand(['SADD', likedIPsKey, clientIP]),
                ]);

                const [visits, likes] = await Promise.all([
                    redisCommand(['GET', visitsKey]),
                    redisCommand(['GET', likesKey]),
                ]);

                const response = {
                    visits: parseInt(visits || '0'),
                    likes: parseInt(likes),
                    hasLiked: true,
                };

                return {
                    statusCode: 200,
                    headers,
                    body: JSON.stringify(response),
                };
            }

            default:
                return {
                    statusCode: 400,
                    headers,
                    body: JSON.stringify({ error: 'Invalid action' }),
                };
        }
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ error: 'Internal server error', details: error.message }),
        };
    }
};
