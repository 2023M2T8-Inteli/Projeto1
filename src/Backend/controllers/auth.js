const express = require('express'); // This is to load the express module
const router = express.Router(); // This is to create a router object

const login = require('./login');
const logout = require('./logout');

router.post("/login", login)
router.get("/logout", logout)



module.exports = router;