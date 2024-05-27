// models/user.model.js
const pool = require("../config/db_pgsql.js");
const queries = require("../sql_queries/login.queries.js");

const loginUser = async(id_alumno, email, password, log_in_status) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.loginUser, [
            id_alumno,
            email,
            password,
            log_in_status
        ]);
        result = data.rowCount;
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release();
    }
    return result
};


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

module.exports = {
    loginUser,
    findUserByEmail
}; 