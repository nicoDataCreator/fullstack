
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports client.model
/**
/**
 * Este archivo contiene funciones para interactuar con la base de datos relacionadas con la gestión de clientes/alumnos.
 * @memberof models
 */

const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/client.queries.js"); // Queries SQL

/**
 * Crea un nuevo cliente en la base de datos.
 * @param {Object} client - Objeto que contiene la información del cliente.
 * @param {string} client.nombre - Nombre del cliente.
 * @param {string} client.apellidos - Apellidos del cliente.
 * @param {string} client.fecha_nac - Fecha de nacimiento del cliente.
 * @param {string} client.dni - DNI del cliente.
 * @param {string} client.nacionalidad - Nacionalidad del cliente.
 * @param {string} client.domicilio - Domicilio del cliente.
 * @param {string} client.ciudad - Ciudad del cliente.
 * @param {string} client.provincia - Provincia del cliente.
 * @param {string} client.cp - Código postal del cliente.
 * @param {string} client.telefono - Teléfono del cliente.
 * @param {string} client.email - Email del cliente.
 * @param {string} client.colegio - Colegio del cliente.
 * @param {string} client.curso - Curso del cliente.
 * @param {Object} client.representante1 - Información del primer representante.
 * @param {Object} client.representante2 - Información del segundo representante.
 * @param {Object} client.datos_facturacion - Información de facturación.
 * @returns {Promise<Object>} Mensaje de éxito.
 */


const createClient = async (client) => {
  const {
    nombre,
    apellidos,
    fecha_nac,
    dni,
    nacionalidad,
    domicilio,
    ciudad,
    provincia,
    cp,
    telefono,
    email,
    colegio,
    curso,
    representante1,
    representante2,
    datos_facturacion,
  } = client;

  let clientConnection;
  try {
    clientConnection = await pool.connect();

    const alumnoResult = await clientConnection.query(queries.createAlumno, [
      nombre,
      apellidos,
      fecha_nac,
      dni,
      nacionalidad,
      domicilio,
      ciudad,
      provincia,
      cp,
      telefono,
      email,
      colegio,
      curso,
    ]);
    const alumnoId = alumnoResult.rows[0].id;

    if (representante1) {
      await clientConnection.query(queries.createRepresentante, [
        representante1.nombre,
        representante1.apellidos,
        representante1.profesion,
        representante1.relacion,
        representante1.email,
        representante1.telefono,
        alumnoId,
      ]);
    }

    if (representante2) {
      await clientConnection.query(queries.createRepresentante, [
        representante2.nombre,
        representante2.apellidos,
        representante2.profesion,
        representante2.relacion,
        representante2.email,
        representante2.telefono,
        alumnoId,
      ]);
    }

    await clientConnection.query(queries.createDatosFacturacion, [
      datos_facturacion.nombre,
      datos_facturacion.domicilio,
      datos_facturacion.cp,
      datos_facturacion.ciudad,
      datos_facturacion.provincia,
      datos_facturacion.pais,
      datos_facturacion.telefono,
      datos_facturacion.dni,
      datos_facturacion.email,
      alumnoId,
    ]);

    return { message: "Cliente creado con éxito" };
  } catch (error) {
    throw error;
  } finally {
    if (clientConnection) clientConnection.release();
  }
};

/**
 * Obtiene un cliente por email.
 * @param {string} email - Email del cliente.
 * @returns {Promise<Object>} Cliente encontrado.
 */
const getClient = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getClient, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

/**
 * Obtiene todos los clientes.
 * @returns {Promise<Array>} Lista de todos los clientes.
 */
const getAllClients = async () => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.getAllClients);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

/**
 * Elimina un cliente por email.
 * @param {string} email - Email del cliente a eliminar.
 * @returns {Promise<Object>} Cliente eliminado.
 */
const deleteClient = async (email) => {
  let client, result;
  try {
    client = await pool.connect();
    const data = await client.query(queries.deleteClient, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

const users = {
  createClient,
  getClient,
  getAllClients,
  deleteClient
};

module.exports = users;
