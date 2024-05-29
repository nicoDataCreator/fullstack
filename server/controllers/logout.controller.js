const login = require('../models/login.model');
const regex = require('../utils/regex')


// Create a new client (segundo formulario)
const logoutUser = async(req, res) => {
    let data;
    try {
        if(regex.validateEmail(req.body.email) && regex.validatePassword(req.body.password)){

            data = await login.loginUser(req.body.id_alumno, req.body.email, req.body.password, req.body.log_in_status);
            res.status(201).json(data);
        }else{
            res.status(400).json({msg: 'Invalid email or password'});
        }  
    } catch (error) {
        res.status(400).json({"error":error});
    }
};

const getUsers = async (req, res) => { }

const deleteUser = async (req, res) => { }

module.exports = {
    logoutUser,
    getUsers,
    deleteUser
}; 