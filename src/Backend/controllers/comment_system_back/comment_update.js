function comment_update(req, res) {
	const { comment_id, content } = req.body;

	const db = require(DB_PATH).db("userprefs.sqlite");

	db.put("UPDATE comments SET content = ? WHERE id = ?", [content, comment_id], (err, row) => {
		if (err) {
			return res.status(500).json({status:"error", text:"Erro interno do servidor de database"});
		};

		return res.json({status:"success", text:"Comentário atualizado com sucesso"});
	});
}

module.exports = comment_update;