const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/contact.queries.js"); // Queries SQL

// Create a new user
const createContact = async (user) => {
    const { nombre, apellido,correo, telefono, nombre_estudiante, fecha_nacimiento, orientacion_vocacional, seleccion_aplicacion_coles, aplicacion_grados_univ, seleccion_aplicacion_masters, cursos_preuniv, campamentos_verano, orientacion_prof, preparacion_sats, acceso_univs_esp_prot, llegada_esp_port, observaciones, conociste } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createContact, [
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
            preparacion_sats,
            acceso_univs_esp_prot,
            llegada_esp_port,
            observaciones,
            conociste
        ]);
        result = data.rowCount;
        console.log(result);
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

module.exports = {
    createContact,
};