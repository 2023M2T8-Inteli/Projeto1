const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')
const jwt = require('jsonwebtoken');

const loggedIn = (req, res, next) => {
    const db = require(DB_PATH).db("userprefs.sqlite");

    if (req.cookies['remember-login'] == undefined) {
        next();
    } else {
        const token = req.cookies['remember-login'];

        const decoded = jwt.verify(req.cookies['remember-login'], process.env.JWT_SECRET)

        db.get("SELECT * FROM users WHERE id = ?", decoded.id, (err, row) => {
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


    require(DB_PATH).db_close(db)
}

module.exports = loggedIn;