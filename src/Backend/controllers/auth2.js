const express = require('express');
const bodyParser = require('body-parser');
const urlencoderParser = bodyParser.urlencoded({extended: false});

const router = express.Router();

router.get('/graphs/:id', urlencoderParser, (req, res) => {
    res.send("graphs");
});


router.post('/addFav', urlencoderParser, (req, res) => {
    res.send("add");
});

router.delete('/deleteFav/:id', urlencoderParser, (req, res) => {
    res.send("delete");
});

router.get('/login', urlencoderParser, (req, res) => {
    res.send("login");
});

router.get('/log-out', urlencoderParser, (req, res) => {
    res.send("logout");
});

module.exports = router