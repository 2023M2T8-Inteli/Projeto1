const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function graphsE (req, res) {
    const RelNum = req.params.RelNum; // Escolhe o relatório específico (1, 2, 3, etc)
    const db = require(DB_PATH).db(`Rel${RelNum}.db`);

    const id = req.params.id;// Diferencia entre CHOQUE 1 e 2
    const ocur = req.params.ocur; // Escolhe uma ocorrência (ACT, PEG_PSI, etc).
    const viagem = req.params.viagem; // Escolhe uma viagem (1, 2, 3, etc).\

    if(ocur == 1){ // MAX
        var sql = `SELECT "f_max", "data_hora" FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE "tipo_choque" = '${id}' AND "tipo_vagao" = "E" AND viagem = '${viagem}' ORDER BY data_hora`;
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            res.json(rows)
        })
    }
    if(ocur == 2){ // ACT
        var sql = `SELECT "act", "data_hora" FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE "tipo_choque" = '${id}' AND "tipo_vagao" = "E" AND viagem = '${viagem}' ORDER BY data_hora`;
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            res.json(rows)
        })
    }

    if(ocur == 3){ // PEG_PSI
        var sql = `SELECT "peg_psi", "data_hora" FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE "tipo_choque" = '${id}' AND "tipo_vagao" = "E" AND viagem = '${viagem}' ORDER BY data_hora`;
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