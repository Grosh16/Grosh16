const pg = require('pg-promise')()

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: {
        rejectUnauthorized: false,
    }
}

const databaseConnection = pg(dbConfig);

module.exports = databaseConnection;