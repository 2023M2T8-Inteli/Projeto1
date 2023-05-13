const express = require('express'); // This is to load the express module
const router = express.Router(); // This is to create a router object

const loggedIn = require('../controllers/loggedIn');

// Home Page Route
router.get("/", loggedIn, (req, res) => {
    console.log(req.user)
    if (req.user) {
        res.sendFile('index.html', {root: './Frontend/public'});
    } else {
        res.redirect("/login")
    }
})

// Login Page Route
router.get("/login", (req, res) => {
    res.sendFile('login.html', {root: './Frontend/public'});
})

router.get('/', (req,res) =>{
    res.sendFile('index.html',{root: './Front End/public'})
});

router.get('/favoritos', (req,res) =>{
    res.sendFile('favoritos.html',{root: './Front End/public'})
});

router.get('/login', (req,res) =>{
    res.sendFile('login.html',{root: './Front End/public'})
});

router.get('/relatorio', (req,res) =>{
    res.sendFile('relatorio.html',{root: './Front End/public'})
});



module.exports = router;