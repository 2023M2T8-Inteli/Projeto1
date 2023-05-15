const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function seeFav (req, res) {
    const db = require(DB_PATH).db();

    db.all("SELECT * FROM FAVORITOS", function(err, rows) {;
        if(err) {
            res.json({status: "error", text: "Erro interno do servidor"})
            throw err
        }

        console.log("Favoritos retornados.");
        res.json(rows);
    })


    require(DB_PATH).db_close(db)
}

module.exports = seeFav;