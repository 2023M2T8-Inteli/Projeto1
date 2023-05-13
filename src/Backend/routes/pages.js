const express = require('express'); // This is to load the express module
const router = express.Router(); // This is to create a router object

const loggedIn = require('../controllers/loggedIn');

// Home Page Route
router.get("/", loggedIn, (req, res) => {
    console.log(req.user)
    if (req.cookies['remember-login']) {
        console.log("User is logged in")
        res.sendFile('index.html', {root: './Frontend/public'});
    } else {
        console.log("Tried to access home page without being logged in")
        res.redirect("/login")
    }
})

// Login Page Route
router.get("/login", (req, res) => {
    res.sendFile('login.html', {root: './Frontend/public'});
})

router.get("/reports/:id", loggedIn, (req, res) => {
    if (req.cookies['remember-login']) {
        res.sendFile(`${req.params.id}.html`, {root: './Frontend/public/reports'});
    } else {
        res.redirect("/login")
    }
})

router.get('/favoritos', (req,res) =>{
    res.sendFile('favoritos.html',{root: './Front End/public'})
});

router.get('/relatorio', (req,res) =>{
    res.sendFile('relatorio.html',{root: './Front End/public'})
});



module.exports = router;