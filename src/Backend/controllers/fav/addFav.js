const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function addFav (req, res) {
    const db = require(DB_PATH).db("userprefs.sqlite");

    const rel_num = req.params.rel
    const id = req.user.id
    

    // checks if this rel num is already inside the favs table for the user id
    db.all(`SELECT * FROM favs WHERE rel_num = ${rel_num} AND id_user = ${id}`, function(err, rows) {
        if(err) {
            res.json({status: "error", text: "Erro interno do servidor"})
            throw err
        }

        if(rows.length > 0) {
            res.json({status: "error", text: "Esse relatório já está nos seus favoritos"})
            return
        } else {
            db.all("INSERT INTO favs(id_user, rel_num) VALUES(?, ?)", id, rel_num, function(err) {
                if(err){
                    res.json({status: "error", text: "Erro interno do servidor"})
                    throw err
                }
                console.log("Add completed")
                res.json({status: "success", text: "Favorito adicionado com sucesso!"})
            })
        }

    })

    require(DB_PATH).db_close(db)
}

module.exports = addFav;