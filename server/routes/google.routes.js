const router = require("express").Router();
const passport = require("passport");
const googleController = require('../controllers/google.controller');

const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
  };

router.get("/auth/google", passport.authenticate("google", {
    scope: ["email", "profile"],
}));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/auth/failure",}), googleController.checkCallback);

router.get("/protected", isLoggedIn, (req, res) => {
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