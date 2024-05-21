const { Pool } = require("pg");

const pool = new Pool({
    host: "dpg-cp5l3ra1hbls73fhevj0-a.frankfurt-postgres.render.com",
    user: "beyond_education_user",
    port: "5432",
    database: "beyond_education",
    password: "hOs40vt17OJo50ZDXYzQ9QEJrN982xzb",
});

pool.connect(function(err) {
    if (err) throw err;
    console.log(`Connected to 'beyond-education' on PostgreSQL at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} on ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
})
module.exports = pool;