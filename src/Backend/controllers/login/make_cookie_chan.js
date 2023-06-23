const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')
const jwt = require('jsonwebtoken');

function make_cookie_chan(req, res) {
	const db = require(DB_PATH).db("userprefs.sqlite");

	const token = req.cookies['remember-login'];
	const decoded = jwt.verify(token, process.env.JWT_SECRET)

	db.get("SELECT * FROM users WHERE id = ?", decoded.id, (err, row) => {
		if (err) {
			return res.status(500).json({status:"error", text:"Erro interno do servidor"}); // erro interno do servidor
		};

		// se o usuario nao existir, retorna erro
		if (!row) {
			console.log("nao logado (USUARIO NAO EXISTE)")
			return res.status(400).json({status:"error", text:"Nome de usuário ou senha incorretos"}); // erro de usuario ou senha incorretos
		};

		const user = row; // usuario logado

		// cria novo chan na tabela chan, inserindo user_type como user.username
		db.run("INSERT INTO chans (user_type) VALUES (?)", user.username, function (err) {
			if (err) {
				console.log(err)
				return res.status(500).json({status:"error", text:"Erro interno do servidor 1"}); // erro interno do servidor
			};

			// pega o id do chan criado
			const chan_id = this.lastID; // this is returning undefined because it's inside a callback function. to fix this we need to use an arrow function

			console.log("THIS IS THE CHAN ID: " + chan_id)

			const token = jwt.sign({id: chan_id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN}); // cria token

			// cria um cookie com o id do chan
			res.cookie('chan_id', token, {
				// maxage = 400 dias (capado em 400 dias)
				maxAge: 400 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			});

			return res.status(200).json({status:"success", text:"Chan criado", chan_id:chan_id});
		});
	});

	require(DB_PATH).db_close(db)
}

module.exports = make_cookie_chan;