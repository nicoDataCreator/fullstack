const pool = require("../config/db_pgsql.js"); // Conexion a la BD
const queries = require("../sql_queries/client.queries.js"); // Queries SQL

// Create a new user
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

// Get  clients by email (admin)
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

// Get all clients (admin)
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


// Delete  client by email (admin)
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
