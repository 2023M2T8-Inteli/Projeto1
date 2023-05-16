const cookie = require('cookie-parser');

const logout = (req, res) => {
    res.clearCookie('remember-login');
    res.redirect('/login');
}

module.exports = logout;