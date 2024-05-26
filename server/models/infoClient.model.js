const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/user.queries.js"); // Queries SQL

// Create a new user
const createUser = async (user) => {
    const { nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino } = user;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createUser, [ // add SQL query in file
            nombre,
            apellidos,
            fecha_nac,
            dni,
            nacionalidad,
            domicilio,
            ciudad,
            provincia,
            id_pais_origen,
            cp,
            telefono,
            email,
            colegio,
            curso,
            id_servicio,
            id_pais_destino
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


const users = {
    createUser,
};

module.exports = users;