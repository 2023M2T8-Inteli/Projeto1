const express = require('express'); // This is to load the express module
const loggedIn = require("../controllers/loggedIn")
const logout = require("../controllers/logout")
const router = express.Router(); // This is to create a router object

// Home Page Route
router.get("/", (req, res) => {
    if (req.user) {
        // res.json({status : true, user: req.user})
        res.sendFile('index.html', {root: './public'});
        // console.log(req.user, "user found")
    } else {
        // res.json({status : false, user: req.user})
        res.sendFile('index.html', {root: './public'});
        // console.log(req.user, "user not found")
    }
})

// Register Page Route
router.get("/register", (req, res) => {
    if (!req.cookies.userRegistered) {
        res.sendFile('register.html', {root: './public'});
    } else {
        res.redirect("/");
    }
})

// Login Page Route
router.get("/login", (req, res) => {
    if (!req.cookies.userRegistered) {
        res.sendFile('login.html', {root: './public'});
    } else {
        res.redirect("/");

    }
})

// Logout Page Route
router.get("/logout", logout)

// Profile Page Route
router.get("/profile", loggedIn, (req, res) => {
    // if a cookie called userRegistered exists, then render the profile page
    if (req.cookies.userRegistered) {
        res.render('profile', {user: req.user});
        console.log("cookie found")
    } else {
        res.redirect("/login");
        console.log("cookie not found")
    }
})

module.exports = router;