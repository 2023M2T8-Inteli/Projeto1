const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('src\Backend\databases\Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    } else {
        console.log('Conectado ao DB');
    }
});

const graphsE = (req, res) => {
    const id = req.params.id;
    const ocur = req.params.ocur;

    if(ocur == 1){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
    if(ocur == 2){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }

    if(ocur == 3){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
}

module.exports = graphsE;