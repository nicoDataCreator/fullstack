const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/contact.queries.js"); 

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