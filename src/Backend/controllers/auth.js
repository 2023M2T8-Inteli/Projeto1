const express = require('express'); // This is to load the express module
const router = express.Router(); // This is to create a router object

const login = require('./login');
const logout = require('./logout');

const tableE = require('./db_consult/tableE');
const tableF = require('./db_consult/tableF');
const graphE = require('./db_consult/graphsE');
const graphF = require('./db_consult/graphsF');
const graphPico = require('./db_consult/graphPico');

const deleteFav = require('./deleteFav')
const addFav = require('./addFav')

const urlencoderParser = express.urlencoded({extended: false});

router.post("/login", login)  // um
router.get("/logout", logout) // dois


router.get('/tableE/:impact', urlencoderParser, tableE); // tres
router.get('/tableF/:impact', urlencoderParser, tableF); // quatro
router.get('/graphsE/:ocur/:id', urlencoderParser, graphE); // cinco
router.get('/graphsF/:ocur/:id', urlencoderParser, graphF); // seis
router.get('/graphPico/:ocur/:id',urlencoderParser, graphPico); // sete

router.post('/addFav', urlencoderParser, addFav);

router.delete('/deleteFav/:id', urlencoderParser, deleteFav); // nove??


module.exports = router;