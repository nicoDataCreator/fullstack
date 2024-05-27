const clientQueries = {
    // se insertan todos los datos del cliente en la bbdd
    createClient: `
    INSERT INTO alumnos (nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)
    `,
    getClient: `
    SELECT *
    FROM alumnos
    WHERE email = $1`
    // needs a (GET) select from (user that is logged in)
};

module.exports = clientQueries;