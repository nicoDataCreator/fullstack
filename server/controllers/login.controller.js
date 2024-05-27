const findUserByEmail = require('../models/login.model');
const bcrypt = require('bcrypt');



const loginUser = async (req, res) => {
const { email, password } = req.body;
    try {
        const user = await findUserByEmail(email);
        if (user) {
            // Comparar la contraseña ingresada con la contraseña almacenada en la base de datos usando bcrypt
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                req.login(user, (err) => {
                    if (err) {
                        return res.status(500).json({ error: err.message });
                    }
                    return res.status(200).json(user);
                });
            } else {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const getUsers = async (req, res) => { }

const deleteUser = async (req, res) => { }

module.exports = {
    loginUser,
    getUsers,
    deleteUser
}; 