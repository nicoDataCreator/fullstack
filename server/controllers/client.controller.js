const user = require('../models/client.model');

// Create a new client (segundo formulario)
const createClient = async (req, res) => {
    const client = req.body; // { nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino }
    try {
        const response = await user.createClient(client);
        res.status(201).json({
            "client_created": response,
            data: client
        });
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

// Get client by email
const getClient = async (req, res) => {
    const client = req.body; // { email } se filtra por email para acceder a los datos previamente introducidos
    const response = await user.getClient(client);
    res.status(201).json({
        "client_fetched": response,
        data: client
    });
};

const updateClient = async (req, res) => { };

const deleteClient = async (req, res) => { };

module.exports = {
    createClient,
    getClient,
    updateClient,
    deleteClient,
};  