const user = require('../models/infoClient.model');

// Create a new user
const createClient = async (req, res) => {
    const newUser = req.body; // {nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino}
    const response = await user.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}

const getClients = async (req, res) => { }

const updateClient = async (req, res) => { }

const deleteClient = async (req, res) => { }

module.exports = {
    createClient,
    getClients,
    updateClient,
    deleteClient
};  