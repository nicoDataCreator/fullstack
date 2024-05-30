const login = require('../models/login.model');
const regex = require('../utils/regex')

const loginUser = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await login.loginUser(email, password);
        if (user.length > 0) {
            const token = createToken({ email: user[0].email, role: user[0].role });
            res.status(200)
                .set('Authorization', `Bearer ${token}`)
                .cookie('access_token', token)
                .json({ role: user[0].role })
                .send()
        } else {
            res.status(400).json({ msg: "wrong credentials" });
        }

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const getUsers = async (req, res) => { }

const deleteUser = async (req, res) => { }

module.exports = {
    loginUser,
    getUsers,
    deleteUser
}; 