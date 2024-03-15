const dotenv = require('dotenv');
const { logger } = require('../utils');
const fs = require('fs');

try {
    if (process.env.NODE_ENV === 'development' && fs.existsSync('.env.development')) {
        dotenv.config({ path: '.env.development' });
        logger.info('Using .env.development');
    } else {
        logger.warn('Environtment file is not provided... using platform environtment variables');
    }
} catch (err) {
    logger.error(`[config] Error loading environment variables: ${err.message}`);
    process.exit(1);
}

module.exports = {
    SERVER: {
        PORT: process.env.SERVER_PORT,
        ENV: process.env.SERVER_ENV,
    },
    POSTGRES: {
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
    },
};
