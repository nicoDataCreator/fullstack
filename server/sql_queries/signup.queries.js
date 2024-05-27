const signUpQueries = {
    // se insertan todos los datos del cliente en la bbdd
    // quitar la ñ por si da problemas?
    createUser: `
    INSERT INTO log_in(usuario, contraseña)
    VALUES ($1, $2)
    `,
    getUser: `
    SELECT *
    FROM alumnos
    WHERE email = $1
    `,
    updateUser: `
    UPDATE (usuario, contraseña)
    VALUES ($1, $2)
    `
    // needs a (GET) select from (user that is logged in)
};

module.exports = signUpQueries;