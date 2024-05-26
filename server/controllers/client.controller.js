const user = require('../models/client.model');

// Create a new client (segundo formulario)
const createClient = async (req, res) => {
    const client = req.body; // { nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino }
    const response = await user.createClient(client);
    res.status(201).json({
        "user_created": response,
        data: client
    });
}

// Get client
const getClient = async (req, res) => {
    const client = req.body; // { email } se filtra por email para acceder a los datos previamente introducidos
    const response = await user.createUser(client);
    res.status(201).json({
        "user_created": response,
        data: client
    });
}

const updateClient = async (req, res) => { }

const deleteClient = async (req, res) => { }

module.exports = {
    createClient,
    getClient,
    updateClient,
    deleteClient,
};  