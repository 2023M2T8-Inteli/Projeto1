const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js') // caminho para o banco de dados
const jwt = require('jsonwebtoken'); // importando jsonwebtoken

// funcao que retorna se o usuario esta logado ou nao
const loggedIn = (req, res) => {
    // importando banco de dados
    const db = require(DB_PATH).db("userprefs.sqlite");

    // se o usuario nao estiver logado, continua
    if (req.cookies['remember-login'] == undefined) {
        console.log("nao logado (COOKIE UNDEFINED)")
        return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"}); // erro de usuario ou senha incorretos
    } else {
        const token = req.cookies['remember-login']; // token do usuario

        const decoded = jwt.verify(req.cookies['remember-login'], process.env.JWT_SECRET) // decodificando token

        // seleciona o usuario de acordo com o id do token
        db.get("SELECT * FROM users WHERE id = ?", decoded.id, (err, row) => {
            if (err) {
                return res.status(500).json({status:"error", text:"Erro interno do servidor"}); // erro interno do servidor
            };

            // se o usuario nao existir, retorna erro
            if (!row) {
                console.log("nao logado (USUARIO NAO EXISTE)")
                return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"}); // erro de usuario ou senha incorretos
            };

            req.user = row; // usuario logado
            return res.status(200).json({status:"success", text:"Usuário logado", user:row});
        });
    }

    // fechando banco de dados
    require(DB_PATH).db_close(db)
}

// exportando funcao
module.exports = loggedIn;