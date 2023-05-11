const bcrypt = require('bcrypt'); // This is to load the bcrypt module
const jwt = require('jsonwebtoken'); // This is to load the jsonwebtoken module
const db_login = require('../routes/db-login-config'); // This is to load the db-config module

require('dotenv').config(); // This is to load the .env file

const login = (req, res) => {
    // This is to get the username and password from the request body
    const { username, password, remember } = req.body;
    console.log(req.body);
    // This is to check if the username and password are empty
    if (!username || !password) {
        return res.status(400).json({status:"error", text:"Por favor preencha todos os campos"});
    }

    // This is to check if the username exists in the database
    db_login.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
        if (err) {
            return res.status(500).json({status:"error", text:"Erro interno do servidor"});
        };

        // This is to check if the username exists in the database
        if (!row) {
            return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"});
        };

        // This is to check if the password is correct
        bcrypt.compare(password, row.password, (err, result) => {
            if (err) {
                return res.status(500).json({status:"error", text:"Erro interno do servidor"});
            };

            // This is to check if the password is correct
            if (!result) {
                return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"});
            };


            var expiryDate = new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000);

            // This is to create a JWT token IF the box was ticked
            if (remember) {
                // This is to create a JWT token
                const token = jwt.sign({id: row.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

                // This is to create a cookie with the JWT token
                res.cookie('remember-login', token, {
                    httpOnly: true,
                    expiresIn: expiryDate
                });
            };

            // This is to send a response to the client
            res.status(200).json({status:"success", text:"Login efetuado com sucesso"});
            console.log("Login efetuado com sucesso")
        });
    });
}

module.exports = login;