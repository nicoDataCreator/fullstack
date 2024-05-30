/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports contact.model
/**
/**
 * Este archivo contiene funciones para interactuar con la base de datos relacionadas con la tabla de contactos.
 * @memberof models
 */

const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/contact.queries.js"); 

/**
 * Crea un nuevo contacto en la tabla de contactos.
 * @param {Object} contact - Objeto que contiene los detalles del contacto.
 * @param {string} contact.nombre - Nombre del contacto.
 * @param {string} contact.apellido - Apellido del contacto.
 * @param {string} contact.correo - Correo electrónico del contacto.
 * @param {string} contact.telefono - Número de teléfono del contacto.
 * @param {string} contact.nombre_estudiante - Nombre del estudiante relacionado con el contacto.
 * @param {string} contact.fecha_nacimiento - Fecha de nacimiento del contacto (formato YYYY-MM-DD).
 * @param {string} contact.orientacion_vocacional - Orientación vocacional del contacto.
 * @param {string} contact.seleccion_aplicacion_coles - Selección de aplicación a colegios del contacto.
 * @param {string} contact.aplicacion_grados_univ - Aplicación a grados universitarios del contacto.
 * @param {string} contact.seleccion_aplicacion_masters - Selección de aplicación a másters del contacto.
 * @param {string} contact.cursos_preuniv - Cursos preuniversitarios del contacto.
 * @param {string} contact.campamentos_verano - Campamentos de verano del contacto.
 * @param {string} contact.orientacion_prof - Orientación profesional del contacto.
 * @param {string} contact.preparacion_SATs - Preparación para los SATs del contacto.
 * @param {string} contact.acceso_univs_esp_prot - Acceso a universidades específicas y programas protegidos del contacto.
 * @param {string} contact.llegada_esp_port - Llegada a España y portafolio del contacto.
 * @param {string} contact.observaciones - Observaciones sobre el contacto.
 * @param {string} contact.conociste - Cómo conociste al contacto.
 * @returns {Promise<Object>} El objeto del contacto creado.
 */
const createContact = async (contact) => {
    const {
        nombre,
        apellido,
        correo,
        telefono,
        nombre_estudiante,
        fecha_nacimiento,
        orientacion_vocacional,
        seleccion_aplicacion_coles,
        aplicacion_grados_univ,
        seleccion_aplicacion_masters,
        cursos_preuniv,
        campamentos_verano,
        orientacion_prof,
        preparacion_SATs,
        acceso_univs_esp_prot,
        llegada_esp_port,
        observaciones,
        conociste
    } = contact;
    let client, result;

    try {
        client = await pool.connect();
        const values = [
            nombre,
            apellido,
            correo,
            telefono,
            nombre_estudiante,
            fecha_nacimiento,
            orientacion_vocacional,
            seleccion_aplicacion_coles,
            aplicacion_grados_univ,
            seleccion_aplicacion_masters,
            cursos_preuniv,
            campamentos_verano,
            orientacion_prof,
            preparacion_SATs,
            acceso_univs_esp_prot,
            llegada_esp_port,
            observaciones,
            conociste
        ];
        const res = await client.query(queries.createContact, values);
        result = res.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    createContact
};
