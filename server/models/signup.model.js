const pool = require("../config/db_pgsql.js");
const queries = require("../sql_queries/user.queries.js");

// Create a new user
const createUser = async (user) => {
    const { nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino } = user;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createUser, [
            nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino
        ]);
        result = data.rows[0];
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};

module.exports = createUser

