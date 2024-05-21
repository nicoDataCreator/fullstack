const user = require('../models/user.model');

// Create a new user
const createUser = async (req, res) => {
    const newUser = req.body; // {nombre, apellidos, fecha_nac, dni, nacionalidad, domicilio, ciudad, provincia, id_pais_origen, cp, telefono, email, colegio, curso, id_servicio, id_pais_destino}
    const response = await user.createUser(newUser);
    res.status(201).json({
        "user_created": response,
        data: newUser
    });
}

module.exports = {
    createUser,
};  