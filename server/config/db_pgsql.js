const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false
    }
 });

 pool.connect(function (err) {
    if (err) {
        console.error('Error connecting to PostgreSQL database:', err);
        process.exit(1); 
    }
    console.log(`Connected to 'beyond-education' on PostgreSQL at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} on ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
});

module.exports = pool;
