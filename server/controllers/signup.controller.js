const signup = require('../models/signup.model');
const regex = require('../utils/regex')

// Create a new client (segundo formulario)
const createUser = async(req, res) => {
    let data;
    try {
        if(regex.validateEmail(req.body.email) && regex.validatePassword(req.body.password)){

            data = await signup.createUser(req.body.id_alumno, req.body.email, req.body.password, req.body.log_in_status);
            res.status(201).json(data);
        }else{
            res.status(400).json({msg: 'Invalid email or password'});
        }  
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

const updateUser = async(req, res) => {
    let data;
    try {
        if(regex.validateEmail(req.body.usuario) && regex.validatePassword(req.body.contraseña)){
            data = await signup.updateUser(req.body.usuario, req.body.contraseña);
            res.status(201).json(data)
        }else{
            res.status(400).json({msg: 'Invalid email or password'});
        }  
    } catch (error) {
        res.status(400).json({"error":error})
    }
};

module.exports = {
    createUser,
    updateUser
}; 