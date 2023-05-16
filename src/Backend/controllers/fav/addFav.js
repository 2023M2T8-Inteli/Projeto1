const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function addFav (req, res) {
    const db = require(DB_PATH).db();

    const fav = req.body.relatorio

    db.all("INSERT INTO FAVORITOS(FAVORITO) VALUES(?)", fav, function(err) {
        if(err){
            res.json({status: "error", text: "Erro interno do servidor"})
            throw err
        }
        console.log("Add completed")
        res.json({status: "success", text: "Favorito adicionado com sucesso!"})
    })


    require(DB_PATH).db_close(db)
}

module.exports = addFav;