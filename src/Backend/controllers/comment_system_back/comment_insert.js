const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function comment_insert(req, res) {
	const { chan_id, rel_id, content } = req.body;

	const db = require(DB_PATH).db("userprefs.sqlite");

	db.all("INSERT INTO comments (chan_id, rel_id, content) VALUES (?, ?, ?)", [chan_id, rel_id, content], (err, row) => {
		if (err) {
			return res.status(500).json({status:"error", text:"Erro interno do servidor de database"});
		};

		return res.json({status:"success", text:"Comentário enviado com sucesso"});
	});

	require(DB_PATH).db_close(db)
}

module.exports = comment_insert;