const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function graphsF (req, res) {
    const db = require(DB_PATH).db("Rel1.db");

    const id = req.params.id; // Diferencia entre CHOQUE 1 e 2
    const ocur = req.params.ocur; //Escolhe uma ocorrência (ACT, PEG_PSI, etc).

    if(ocur == 1){ // ACT
        var sql = `SELECT f_max FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE tipo_choque = '${id}' AND tipo_vagao = "F" ORDER BY OCORRENCIA.data_hora ASC`;
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            console.log(rows)
            res.json(rows)
        })
    }
    if(ocur == 2) {// PEG_PSI
        var sql = `SELECT act FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE tipo_choque = '${id}' AND tipo_vagao = "F" ORDER BY OCORRENCIA.data_hora ASC`;
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            console.log(rows)
            res.json(rows)
        })
    }

    if(ocur == 3) { // F_MAX
        var sql = `SELECT peg_psi FROM CHOQUE INNER JOIN OCORRENCIA ON CHOQUE.ID_OC = OCORRENCIA.ID_OC WHERE tipo_choque = '${id}' AND tipo_vagao = "F" ORDER BY OCORRENCIA.data_hora ASC`;
        db.all(sql, function(err,rows){
            if(err){
                throw err;
            }
            console.log(rows)
            res.json(rows)
        })
    }


    require(DB_PATH).db_close(db)
}

module.exports = graphsF;