const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function tableE (req, res) {
    const db = require(DB_PATH).db();

    const impact = req.params.impact; // Seleciona entre CHOQUE 1 e 2
    var sql;
    if(impact == 1){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE1 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE1.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    if(impact == 2){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE2 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE2.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    db.all(sql, function(err,rows){
        if(err){
            throw err;
        }
        res.json(rows)
    });


    require(DB_PATH).db_close(db)
}

module.exports = tableE;