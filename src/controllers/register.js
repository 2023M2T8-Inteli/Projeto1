const db = require('../routes/db-config');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { email, password:Npassword } = req.body

    if (!email || !Npassword) return res.json({status: "error", error: "Invalid email/password."});
    else {
        console.log(email);
        db.serialize(() => {
            db.get('SELECT email FROM users WHERE email = ?', [email], (err, row) => {
                if (err) {
                    if (err) throw err;
                }
                if (row) {
                    return res.json({status: "error", error: "Email already in use."});
                }

                const hashedPassword = bcrypt.hashSync(Npassword, 8);

                db.run('INSERT INTO users (email, password) VALUES (?, ?)', email, hashedPassword, (err) => {
                    if (err) {
                        if (err) throw err;
                    }
                    return res.json({status: "success", success: "User registered successfully."});
                });
            });
        });
    }
}

module.exports = register;