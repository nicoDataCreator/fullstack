
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports signup.model;
 * @namespace models
*/
/** 
 * Este archivo contiene funciones para interactuar con la base de datos relacionadas con la tabla de inicio de sesión.
 * @memberof models
 */

const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/signup.queries.js"); // Queries SQL

/**
 * Crea un nuevo usuario en la tabla de inicio de sesión.
 * @param {string} id_alumno - ID del alumno.
 * @param {string} email - Correo electrónico del usuario.
 * @param {string} password - Contraseña del usuario.
 * @param {boolean} log_in_status - Estado de inicio de sesión del usuario.
 * @returns {Promise<number>} El número de filas afectadas en la base de datos.
 */
const createUser = async(id_alumno, email, password, log_in_status) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.createUser, [
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

/**
 * Actualiza el usuario en la tabla de inicio de sesión.
 * @param {string} usuario - Usuario a actualizar.
 * @param {string} contraseña - Nueva contraseña del usuario.
 * @returns {Promise<number>} El número de filas afectadas en la base de datos.
 */
const updateUser = async(usuario, contraseña) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.updateUser, [
            usuario,
            contraseña,
        ]);
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

/**
 * Objeto que contiene las funciones relacionadas con la creación y actualización de usuarios.
 * @type {object}
 */
const signup = {
    createUser,
    updateUser
};

module.exports = signup;
