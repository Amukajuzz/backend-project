const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',        // Type: String (Your PostgreSQL username)
    host: 'localhost',       // Type: String (Your database server address, typically 'localhost' for local development)
    database: 'user_auth_system',  // Type: String (The name of your PostgreSQL database)
    password: 'gforce18',     // Type: String (Your PostgreSQL password)
    port: 5432                // Type: Number (The port PostgreSQL is running on, usually 5432 by default)
});

module.exports = pool;
