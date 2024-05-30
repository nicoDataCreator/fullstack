const jwt = require("jsonwebtoken");
const google = require('../models/google.model')

const SECRET = process.env.GOOGLE_JWT_SECRET;

const checkCallback = async (req, res) => {

    const { email, password } = req.user;
    try {
        // se forma el token con el email, la password y el secreto JWT
        const token = jwt.sign({ email: req.user.email, password: req.user.password }, SECRET);
        return res
        .cookie("access-token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        })
        .redirect("/dashboard/user")
        .send("Usuario logeado con Google con éxito");

        // una vez logeados los usuarios y habiendo recibido su cookie tokenizada,
        // pasamos el email y la password al modelo para ver si existe en la base de datos
        const result = await google.checkCallback(payload);

        // si no hay filas que enseñar, el usuario no existe en la base de datos,
        // llama a google.createGoogleUser para crear el usuario
        if (result.rows.length === 0) {
            const data = await google.createGoogleUser({ email, password });
            console.log(data);
            console.log("Nuevo usuario registrado en BBDD")
        } else {
            console.log("Usuario ya registrado en BBDD")
        }
        res.status(201).json({ message: 'Usuario logeado con Google con éxito', result });
    } catch {
        console.log("Error in google.controller.js /->/ checkCallback")
        res.status(500).json({ error: 'Error al iniciar sesión con Google' });
    }
}

module.exports = {
    checkCallback
};


// guardamos en el objeto userInfo el email e id "password" del usuario en la request
