const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/signup.queries.js"); // Queries SQL

// AÑADIR CAMPO LOGGED A (TABLA log_in)
const createUser = async(usuario, contraseña) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.createUser, [
            usuario,
            contraseña
        ]);
        result = data.rowCount;
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release();
    }
    return result
};

const updateUser = async(usuario, contraseña) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.updateUser, [
            usuario,
            contraseña,
        ]);
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release()
    }
    return result
};

const signup = {
    createUser,
    updateUser
};

module.exports = signup;