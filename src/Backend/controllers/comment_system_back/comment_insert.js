function comment_insert(req, res) {
	const { chan_id, rel_id, content } = req.body;

	const db = require(DB_PATH).db("userprefs.sqlite");

	db.put("INSERT INTO comments (chan_id, rel_id, content) VALUES (?, ?, ?)", [chan_id, rel_id, content], (err, row) => {
		if (err) {
			return res.status(500).json({status:"error", text:"Erro interno do servidor de database"});
		};

		return res.json({status:"success", text:"Comentário enviado com sucesso"});
	});
}

module.exports = comment_insert;