const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('src\Backend\databases\Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    } else {
        console.log('Conectado ao DB');
    }
});

const tableE = (req,res) => {
    const impact = req.params.impact;
    var sql;
    if(impact == 1){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE1 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE1.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    if(impact == 2){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE2 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE2.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    db.all(sql, function(err,rows){
        if(err){
            console.error(err.message)
        }
        res.json(rows)
    })
}

module.exports = tableE;