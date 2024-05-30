const router = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const google = require('../controllers/google.controller');

const SECRET = `${process.env.SECRET}`;


const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
};

router.get("/auth/google", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

router.get("/google/callback", passport.authenticate('google', { failureRedirect: '/auth/failure' }), (req, res) => {

    let email = req.user.email;
    let password = req.user.id;

    console.log(email);
    console.log(password);

    //Estos son los pasos para crear un token si la autenticación es exitosa
    const payload = {
        check: true
    };
    const token = jwt.sign(payload, SECRET, {
        expiresIn: "20s"
    });

    console.log(token);
    //Almacenamos el token en las cookies
    res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict",
    }).redirect("http://localhost:3000/contact");
});

// http://localhost:3000/api/authorize/passport
router.get("/dashboard", (req, res) => {
    res.send("Welcome to your dashboard! You are now authenticated with google! <br><br> <a href='/logout'>Click here to logout!</a>");

})

router.get('/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy();
        res.clearCookie("access-token").send('Goodbye! <br><br> <a href="/auth/google">Authenticate again</a>');
    });
});

router.get("/contact", isLoggedIn, (req, res) => {
    const userInfo = {
        email: req.user.email,
        password: req.user.id
    };
    return userInfo;
})

router.get("/auth/failure", (req, res) => {
    res.send("Authentication failed");
})

module.exports = router;