const express = require('express'); // This is to load the express module
const router = express.Router(); // This is to create a router object

const login = require('./login');
const logout = require('./logout');
const { urlencoded } = require('body-parser');

router.post("/login", login)
router.get("/logout", logout)

router.get('/tableE/:impact', urlencoderParser, tableE);

router.get('/graphsE/:ocur/:id', urlencoderParser, graphE);

router.get('/graphsF/:ocur/:id', urlencoderParser, graphF);

router.get('/graphPico/:ocur/:id',urlencoderParser, graphPico);

router.post('/addFav', urlencoderParser, (req, res) => {
    res.send("add");
});

router.delete('/deleteFav/:id', urlencoderParser, (req, res) => {
    res.send("delete");
});




module.exports = router;