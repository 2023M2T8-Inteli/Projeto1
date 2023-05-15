const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function graphsE (req, res) {
    const db = require(DB_PATH).db();

    const id = req.params.id;// Diferencia entre CHOQUE 1 e 2
    const ocur = req.params.ocur; // Escolhe uma ocorrência (ACT, PEG_PSI, etc).

    if(ocur == 1){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            res.json(rows)
        })
    }
    if(ocur == 2){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            res.json(rows)
        })
    }

    if(ocur == 3){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            res.json(rows)
        })
    }


    require(DB_PATH).db_close(db)
}

module.exports = graphsE;