
/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports logout.controller
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof controllers
 */

const login = require('../models/login.model');
const regex = require('../utils/regex');

/**
 * Cierra la sesión de un usuario.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const logoutUser = async(req, res) => {
    let data;
    try {
        // Validar el formato del correo electrónico y la contraseña antes de cerrar la sesión del usuario
        if(regex.validateEmail(req.body.email) && regex.validatePassword(req.body.password)){
            data = await login.loginUser(req.body.id_alumno, req.body.email, req.body.password, req.body.log_in_status);
            res.status(201).json(data);
        } else {
            res.status(400).json({msg: 'Correo electrónico o contraseña inválidos'});
        }  
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

/**
 * Obtiene información sobre un usuario o todos los usuarios.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const getUsers = async (req, res) => {
    // Implementar la lógica para obtener información sobre un usuario o todos los usuarios
}

/**
 * Elimina un usuario.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const deleteUser = async (req, res) => {
    // Implementar la lógica para eliminar un usuario
}

module.exports = {
    logoutUser,
    getUsers,
    deleteUser
}; 
