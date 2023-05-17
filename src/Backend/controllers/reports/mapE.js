const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

function mapE (req,res){
    const db = require(DB_PATH).db("Rel1.db");

    const id = req.params.id;

    var sql = "SELECT lat,lon FROM OCORRENCIA ORDER BY data_hora";
    
    db.all(sql, function(err,rows){
        if(err){
            throw err;
        }
        res.json(rows)
    })
}

module.exports = mapE