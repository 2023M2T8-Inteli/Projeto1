const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

// funcao que pega tabela de todas as ocorrências do vagão tipo E
function tableE (req, res) {
    const db = require(DB_PATH).db("Rel1.db");

    const impact = req.params.impact; // Seleciona entre CHOQUE 1 e 2

    var sql = "SELECT * FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE tipo_choque = " + impact;
    db.all(sql, function(err,rows){
        if(err){
            throw err;
        }
        res.json(rows)
    });


    require(DB_PATH).db_close(db)
}

module.exports = tableE;