const loginQueries = {
    // se insertan todos los datos del cliente en la bbdd
    // quitar la ñ por si da problemas?
    loginUser: `
    INSERT INTO log_in(id_alumno, email, password, log_in_status)
    VALUES ($1, $2, $3, $4)
    `
};

module.exports = loginQueries;