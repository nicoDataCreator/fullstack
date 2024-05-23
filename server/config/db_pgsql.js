const { Pool } = require("pg");
require('dotenv').config();

// prueba123123123

const poolHost = (`${process.env.poolHost}`);
const poolUser = (`${process.env.poolUser}`);
const poolDatabase = (`${process.env.poolDatabase}`);
const poolPassword = (`${process.env.poolPassword}`);


const pool = new Pool({
    host: poolHost,
    ssl: true,
    port: 5432,
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