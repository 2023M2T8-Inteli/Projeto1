const bcrypt = require('bcrypt'); // This is to load the bcrypt module
const jwt = require('jsonwebtoken'); // This is to load the jsonwebtoken module
const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

require('dotenv').config(); // This is to load the .env file

const login = (req, res) => {
    const db = require(DB_PATH).db("userprefs.sqlite");

    // This is to get the username and password from the request body
    const { username, password, remember } = req.body;

    // This is to check if the username and password are empty
    if (!username || !password) {
        return res.status(400).json({status:"error", text:"Por favor preencha todos os campos"});
    }

    // This is to check if the username exists in the database
    db.get("SELECT * FROM users WHERE username = ?", username, (err, row) => {
        if (err) {
            return res.status(500).json({status:"error", text:"Erro interno do servidor de database"});
        };

        // This is to check if the username exists in the database
        if (!row) {
            return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"});
        };

        // This is to check if the password is correct
        bcrypt.compare(password, row.password, (err, result) => {
            if (err) {
                return res.status(500).json({status:"error", text:"Erro interno do servidor de bcrypt"});
            };

            // This is to check if the password is correct
            if (!result) {
                return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"});
            };


            var expiryDate = new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000);

            // This is to create a JWT token IF the box was ticked
            if (true) { // if (remember) {
                // This is to create a JWT token
                const token = jwt.sign({id: row.id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});

                // This is to create a cookie with the JWT token
                res.cookie('remember-login', token, {
                    httpOnly: true,
                    expiresIn: expiryDate
                });
                console.log("cookie created")
            };

            // This is to send a response to the client
            console.log("Login efetuado com sucesso")
            return res.json({status:"success", text:"Login efetuado com sucesso"});
        });
    });


    require(DB_PATH).db_close(db)
}

module.exports = login;