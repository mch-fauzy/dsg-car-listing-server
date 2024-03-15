const { Pool } = require('pg');
const CONFIG = require('../configs');
const { logger } = require('../utils');

let dbConfig;

if (CONFIG.SERVER.ENV === 'development') {
    dbConfig = {
        host: CONFIG.POSTGRES.HOST,
        port: CONFIG.POSTGRES.PORT,
        database: CONFIG.POSTGRES.NAME,
        user: CONFIG.POSTGRES.USER,
        password: CONFIG.POSTGRES.PASSWORD,
        max: 5,
        connectionTimeoutMillis: 10000,
    };
} else {
    logger.error('[postgres] Server environtment is not defined');
    process.exit(1);
}

const pool = new Pool(dbConfig);

// Function to ping the database to check the connection
const providePostgresConn = async () => {
    try {
        const client = await pool.connect();
        await client.query('SELECT 1');
        client.release();
        logger.info(`Connected to the ${CONFIG.SERVER.ENV} database, dbName=${dbConfig.database}, host=${dbConfig.host}, port=${dbConfig.port}`);
    } catch (err) {
        logger.error('[providePostgresConn] Failed connecting to the database:', err);
        process.exit(1); // Exit the application if the database connection fails
    }
};

module.exports = {
    pool,
    providePostgresConn,
};
