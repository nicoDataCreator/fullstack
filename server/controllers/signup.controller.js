/**
 * @author Adrián Terciado, Gema Millán, Pablo Rubio, Verónica Parra 
 * @exports signup.controller
 * @namespace controllers
 */
/**
 * Este archivo conmodeltiene funciones para interactuar con la base de datos relacionadas con la tabla de usuarios.
 * @memberof controllers
 */

const signup = require('../models/signup.model');
const regex = require('../utils/regex');

/**
 * Crea un nuevo usuario.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const createUser = async(req, res) => {
    let data;
    try {
        // Validar el formato del correo electrónico y la contraseña antes de crear el usuario
        if(regex.validateEmail(req.body.email) && regex.validatePassword(req.body.password)){
            data = await signup.createUser(req.body.id_alumno, req.body.email, req.body.password, req.body.log_in_status);
            res.status(201).json(data);
        } else {
            res.status(400).json({msg: 'Correo electrónico o contraseña inválidos'});
        }  
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

/**
 * Actualiza la información de un usuario.
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {void}
 */
const updateUser = async(req, res) => {
    let data;
    try {
        // Validar el formato del correo electrónico y la contraseña antes de actualizar el usuario
        if(regex.validateEmail(req.body.usuario) && regex.validatePassword(req.body.contraseña)){
            data = await signup.updateUser(req.body.usuario, req.body.contraseña);
            res.status(201).json(data)
        } else {
            res.status(400).json({msg: 'Correo electrónico o contraseña inválidos'});
        }  
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

module.exports = {
    createUser,
    updateUser
}; 
