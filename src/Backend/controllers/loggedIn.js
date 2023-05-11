const db = require('../routes/db-login-config');
const jwt = require('jsonwebtoken');
const loggedIn = (req, res, next) => {
    const token = req.cookies['remember-login'];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.redirect('/login');
            res.clearCookie('remember-login');
        } else {
            const user_id = decoded.id;

            db.get('SELECT * FROM users WHERE id = ?', [user_id], (err, user) => {
                if (err) {
                    res.redirect('/login');
                    res.clearCookie('remember-login');
                } else {
                    console.log(user)
                    req.user = user;
                    next();
                }
            });
        }
    });
}

module.exports = loggedIn;