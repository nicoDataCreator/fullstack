/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports login.model
**/
/**
 * Este archivo contiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof models
 */

const pool = require("../config/db_pgsql.js");
const queries = require("../sql_queries/login.queries.js");

/**
 * Inicia sesión de un usuario en la tabla de usuarios.
 * @param {string} id_alumno - ID del alumno.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {boolean} log_in_status - Estado de inicio de sesión del usuario.
 * @returns {Promise<number>} El número de filas afectadas en la base de datos.
 */
const loginUser = async (id_alumno, email, password, log_in_status) => {
    let client, result;
    try {
        client = await pool.connect();

        console.log(`Executing query: ${queries.userExists}`);
        console.log(`With id_alumno: ${id_alumno}`);
        const userExists = await client.query(queries.userExists, [email]);

        if (userExists.rows.length === 0) {
            console.log(`Executing query: ${queries.loginUser}`);
            console.log(`With id_alumno: ${id_alumno}`);
            const data = await client.query(queries.loginUser, [
                id_alumno,
                email,
                password,
                log_in_status
            ]);
            result = data.rowCount;
        } else {
            console.log("Sorry, this email is already in the database")
        }

    } catch (err) {
        console.log(err);
        throw (err);
    } finally {
        client.release();
    }
    return result
};

/**
 * Encuentra un usuario por su correo electrónico.
 * @param {string} email - Correo electrónico del usuario.
 * @returns {Promise<Object>} El usuario correspondiente al correo electrónico especificado.
 */
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
