const loginQueries = {
    // deberia de hacerse un inner join con la tabla de alumnos para poer relacionar el id_alumno en la tabla de log_in
    loginUser: `
    UPDATE INTO log_in(id_alumno, email, password, log_in_status)
    VALUES ($1, $2, $3, $4)
    `,
    userExists: `
    SELECT *
    FROM log_in
    WHERE email = $1`
};

module.exports = loginQueries;