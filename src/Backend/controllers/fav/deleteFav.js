const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function deleteFav (req, res) {
    const db = require(DB_PATH).db();

    const id = req.params.id; // Seleciona o favorito desejado

    db.all("DELETE FROM FAVORITOS WHERE ID_FAV = ?", id, function(err, rows) {
        if(err){
            res.json({status: "error", text: "Erro interno do servidor"})
            throw err
        }
        console.log("Deleted")
        res.json({status: "success", text: "Favorito removido com sucesso!"})
    })


    require(DB_PATH).db_close(db)
}

module.exports = deleteFav;