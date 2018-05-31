module.exports = {
    secretKey: process.env.SECRET_KEY || 'default secret key',
    db: {
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '5432',
        database: process.env.DB_NAME || 'database',
        username: process.env.DB_USERNAME || 'username',
        password: process.env.DB_PASSWORD || 'password'
    }
}
