const signup = require('../models/signup.model');

// Create a new client (segundo formulario)
const createUser = async (req, res) => {
    const client = req.body; // { usuario, contraseña }
    try {
        const response = await signup.createUser(client);
        res.status(201).json({
            "user_created": response,
            data: client
        });
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