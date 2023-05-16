const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function deleteFav (req, res) {
    const db = require(DB_PATH).db("userprefs.sqlite");

    const rel = req.params.id; // Seleciona o favorito desejado
    const id = req.user.id; // Seleciona o usuário logado

    // deletes from favoritos where rel_num = rel and id_user = id
    db.all(`DELETE FROM favs WHERE rel_num = ${rel} AND id_user = ${id}`, function(err) {
        if(err) {
            res.json({status: "error", text: "Erro interno do servidor"})
            throw err
        }

        console.log("Favorito deletado.");
        res.json({status: "success", text: "Favorito deletado com sucesso!"})
    })


    require(DB_PATH).db_close(db)
}

module.exports = deleteFav;