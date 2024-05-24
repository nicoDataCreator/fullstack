const { Pool } = require("pg");
require('dotenv').config();

// prueba

const poolHost = (`${process.env.poolHost}`);
const poolUser = (`${process.env.poolUser}`);
const poolPassword = (`${process.env.poolPassword}`);
const poolPort = (`${process.env.poolPort}`);
const poolDatabase = (`${process.env.poolDatabase}`);


const pool = new Pool({
    host: poolHost,
    ssl: true,
    port: poolPort,
    user: poolUser,
    database: poolDatabase,
    password: poolPassword
 });

pool.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log(`Connected to 'beyond-education' on PostgreSQL at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} on ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
});
module.exports = pool;