const db = require('../routes/db-login-config');
const jwt = require('jsonwebtoken');

const loggedIn = (req, res, next) => {
    console.log(req.cookies['remember-login'])
    if (req.cookies['remember-login'] == undefined) {
        next();
    } else {
        const token = req.cookies['remember-login'];

        console.log(token);

        const decoded = jwt.verify(req.cookies['remember-login'], process.env.JWT_SECRET)

        console.log(decoded);

        db.get("SELECT * FROM users WHERE id = ?", [decoded.id], (err, row) => {
            if (err) {
                return res.status(500).json({status:"error", text:"Erro interno do servidor"});
            };

            if (!row) {
                return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"});
            };

            req.user = row;
            next();
        });
    }
}

module.exports = loggedIn;