/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports newsletter.model;
 */
/**
 * Este archivo contiene funciones para interactuar con la base de datos relacionadas con la tabla de suscriptores de la newsletter.
 * @memberof models
 */

const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/newsletter.queries.js"); // Queries SQL

/**
 * Crea un nuevo suscriptor en la tabla de suscriptores de la newsletter.
 * @param {string} email - Correo electrónico del suscriptor.
 * @returns {Promise<number>} El número de filas afectadas en la base de datos.
 */
const createSubscriber = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createSubscriber, [
            email
        ]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw (err);
    } finally {
        client.release();
    }
    return result
};

/**
 * Obtiene un suscriptor de la newsletter por su correo electrónico.
 * @param {string} email - Correo electrónico del suscriptor.
 * @returns {Promise<undefined>} El suscriptor correspondiente al correo electrónico especificado.
 */
const getSubscriberByEmail = async (email) => { };

/**
 * Obtiene todos los suscriptores de la newsletter.
 * @returns {Promise<undefined>} Todos los suscriptores de la newsletter.
 */
const getAllSubscribers = async () => { };

/**
 * Elimina un suscriptor de la newsletter por su correo electrónico.
 * @param {string} email - Correo electrónico del suscriptor a eliminar.
 * @returns {Promise<number>} El número de filas afectadas en la base de datos.
 */
const deleteSubscriberByEmail = async (email) => { };

/**
 * Objeto que contiene las funciones relacionadas con la gestión de suscriptores de la newsletter.
 * @type {object}
 */
const newsletter = {
    createSubscriber,
    getSubscriberByEmail,
    getAllSubscribers,
    deleteSubscriberByEmail
};

module.exports = newsletter;
