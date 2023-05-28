// Requisitando o banco de dados
const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

//Função que pega todos os pontos de ocorrências (para fazer o caminho no mapa).
function path (req,res){
    const db = require(DB_PATH).db("Rel1.db");

    var sql = "SELECT lat,lon FROM OCORRENCIA ORDER BY data_hora";
    
    db.all(sql, function(err,rows){
        if(err){
            throw err;
        }
        res.json(rows)
    })
}

//Torna a função utilizável em todo o código.
module.exports = path