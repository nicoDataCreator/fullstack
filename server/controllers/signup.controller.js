const jwt = require('jsonwebtoken');
const signup = require('../models/signup.model');
const regex = require('../utils/regex');

const createUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);

        if (!regex.validateEmail(email) || !regex.validatePassword(password)) {
            return res.status(400).json({ msg: 'Invalid email or password format' });
        }

        console.log(email, password);
        await signup.createUser(email, password);
        res.status(201).json({ msg: "Signed Up" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const updateUser = async(req, res) => {
    /* let data;
    try {
        if(regex.validateEmail(req.body.usuario) && regex.validatePassword(req.body.contraseña)){
            data = await signup.updateUser(req.body.usuario, req.body.contraseña);
            res.status(201).json(data)
        }else{
            res.status(400).json({msg: 'Invalid email or password'});
        }  
    } catch (error) {
        res.status(400).json({"error":error})
    } */
};

module.exports = {
    createUser,
    updateUser
}; 