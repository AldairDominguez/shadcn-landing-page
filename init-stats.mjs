// Script para inicializar contadores en Upstash Redis
// Ejecutar con: node init-stats.mjs

const UPSTASH_URL = "https://adapting-mudfish-26173.upstash.io";
const UPSTASH_TOKEN = "AWY9AAIncDJhY2NkYWY0YzNmZDM0MjUxYTRkZWNjM2FkNTQzZWMzN3AyMjYxNzM";

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
        const error = await response.text();
        throw new Error(`Redis command failed: ${response.statusText} - ${error}`);
    }

    const data = await response.json();
    return data.result;
}

async function initializeStats() {
    console.log('🚀 Inicializando estadísticas...\n');

    try {
        // Establecer 500 visitas
        await redisCommand(['SET', 'rutalegal:visits', '500']);
        console.log('✅ Visitas inicializadas: 500');

        // Establecer 300 me gustas
        await redisCommand(['SET', 'rutalegal:likes', '300']);
        console.log('✅ Me gustas inicializados: 300');

        // Verificar
        const visits = await redisCommand(['GET', 'rutalegal:visits']);
        const likes = await redisCommand(['GET', 'rutalegal:likes']);

        console.log('\n📊 Estadísticas actuales:');
        console.log(`   Visitas: ${visits}`);
        console.log(`   Me gustas: ${likes}`);
        console.log('\n🎉 ¡Listo! Los contadores están configurados.');
        console.log('\n🔄 Refresca tu sitio para ver los cambios.');

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

initializeStats();
