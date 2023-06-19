function comment_delete(req, res) {
	const { comment_id } = req.body;

	const db = require(DB_PATH).db("userprefs.sqlite");

	db.put("DELETE FROM comments WHERE id = ?", [comment_id], (err, row) => {
		if (err) {
			return res.status(500).json({status:"error", text:"Erro interno do servidor de database"});
		};

		return res.json({status:"success", text:"Comentário deletado com sucesso"});
	});
}

module.exports = comment_delete;