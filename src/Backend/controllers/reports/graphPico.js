const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function graphPico (req,res) {
    const db = require(DB_PATH).db();

    const id = req.params.id; // Diferencia o E do F.
    const ocur = req.params.ocur; //Escolhe a ocorrência específica (ACT, PEG_PSI, etc)

    if(id == 1){
        var table = "OCORRENCIAS_PICO1"
        if(ocur == 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    res.json({status: "error", message: "Erro ao buscar dados no banco de dados."})
                    throw err
                }

                res.json(rows)
            })
        }
        if(ocur == 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    throw err;
                }

                res.json(rows)
            })
        }
        if(ocur == 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    throw err;
                }

                res.json(rows)
            })
        }
    }
    if(id == 2){
        var table = "FROM OCORRENCIAS_PICO2"
        if(ocur == 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    throw err;
                }

                res.json(rows)
            })
        }
        if(ocur == 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    throw err;
                }
                res.json(rows)
            })
        }
        if(ocur == 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    throw err;
                }
                res.json(rows)
            })
        }
    }


    require(DB_PATH).db_close(db)
}

module.exports = graphPico