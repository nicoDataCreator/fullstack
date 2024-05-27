const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/newsletter.queries.js"); // Queries SQL

// AÑADIR CAMPO LOGGED A (TABLA log_in)
const createSubscriber = async(email) => {
    let client, result;
    try{
        client = await pool.connect();
        const data = await client.query(queries.createSubscriber, [email]);
        result = data.rowCount;
    }catch(err){
        console.log(err);
        throw(err);
    }finally{
        client.release();
    }
    return result
};

const newsletter = {
    createSubscriber,
};

module.exports = newsletter;