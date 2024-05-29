const jwt = require("jsonwebtoken");
const google = require('../models/google.model')
const jasonwebtoken = require('../config/jsonWebToken')

const checkCallback = async (req, res) => {
    console.log("Bien, estas en checkCallback, en controlador");

    const email = req.user.email;
    const password = req.user.password;

    // creamos el objeto { req.user } con los campos email y password
    const payload = {
        "email": email,
        "password": password
    }

    try {
        // const userInfoString = JSON.stringify(userInfo);
        const token = jasonwebtoken.createToken(payload)

        res.cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
        }).redirect("/dashboard/user");

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
