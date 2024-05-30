
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports db_pgsql
 * @namespace config
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @module db_pgsql
 * @memberof config
 */
const { Pool } = require("pg");
require('dotenv').config(); // Importa dotenv para cargar las variables de entorno

// Obtiene los valores de las variables de entorno para la conexión a la base de datos
const poolHost = process.env.poolHost;
const poolUser = process.env.poolUser;
const poolPassword = process.env.poolPassword;
const poolPort = process.env.poolPort;
const poolDatabase = process.env.poolDatabase;

// Crea una instancia de Pool para gestionar la conexión a la base de datos
const pool = new Pool({
    host: poolHost, // Dirección del servidor de la base de datos
    ssl: true, // Habilita SSL para conexiones seguras (puedes ajustarlo según tu configuración)
    port: poolPort, // Puerto de la base de datos
    user: poolUser, // Nombre de usuario para la conexión
    database: poolDatabase, // Nombre de la base de datos
    password: poolPassword // Contraseña para la conexión
});

// Establece la conexión a la base de datos y maneja los errores
pool.connect(function (err) {
    if (err) {
        throw err; // Lanza un error si la conexión falla
    }
    // Muestra un mensaje de conexión exitosa junto con la fecha y la hora actual
    console.log(`Connected to 'beyond-education' on PostgreSQL at ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} on ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
});

module.exports = pool; // Exporta la instancia de Pool para usarla en otros archivos
