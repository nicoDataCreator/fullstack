// models/user.model.js
const pool = require("../config/db_pgsql.js");
const queries = require("../sql_queries/user.queries.js");



// Find a user by email
const findUserByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.findUserByEmail, [email]);
        result = data.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

module.exports = findUserByEmail