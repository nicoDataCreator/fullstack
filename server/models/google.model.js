const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/google.queries.js");

const checkCallback = async (payload) => {

    const {
        email,
        password
      } = payload;

    let client, result;

    try {
        client = await pool.connect();
        const values = [
            email,
            password,
          ];
        const res = await client.query(queries.userGoogleExists, values);
        result = res.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// se utiliza el email y el id unico del usuario que ofrece google para guardarlo en el campo de contraseña
const createGoogleUser = async (email, password) => {

    let client, result;

    try {
        client = await pool.connect();
        const values = [
            email,
            password,
          ];
        const res = await client.query(queries.createGoogleUser, values);
        result = res.rows[0];
    } catch (err) {
        console.log("Error in google.model.js /->/ createGoogleUser")
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    checkCallback,
    createGoogleUser
};