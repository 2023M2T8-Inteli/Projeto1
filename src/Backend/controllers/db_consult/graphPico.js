const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('src\Backend\databases\Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    } else {
        console.log('Conectado ao DB');
    }
});

const graphPico = (req,res) =>{
    const id = req.params.id;
    const ocur = req.params.ocur;

    if(id === 1){
        var table = "OCORRENCIAS_PICO1"
        if(ocur === 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
    if(id === 2){
        var table = "FROM OCORRENCIAS_PICO2"
        if(ocur === 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
}

module.exports = graphPico;