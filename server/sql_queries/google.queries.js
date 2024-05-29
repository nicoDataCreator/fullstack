const googleQueries = {
    userGoogleExists: `
    SELECT *
    WHERE email = $1
    `,
    createGoogleUser: `
    INSERT into alumnos (email, password)
    VALUES ($1, $2)`
}

module.exports = googleQueries;