// Requisitando o banco de dados
const DB_PATH = require('path').resolve(__dirname, '../../routes/db-config.js')

//Função que pega a localização das ocorrências do vagão tipo F de acordo com o ID.
function mapF (req,res){
    const db = require(DB_PATH).db("Rel1.db");
    var sql;
    const id = req.params.id;
    const viagem = req.params.viagem;

    if (id == 1 || id == 2){ // Se for choque
        sql = "SELECT lat,lon FROM OCORRENCIA AS OC INNER JOIN CHOQUE ON OC.ID_OC = CHOQUE.ID_OC WHERE OC.tipo_oc = 'C' AND OC.tipo_vagao = 'F' AND CHOQUE.tipo_choque = "+id+ " AND OC.viagem = "+viagem;

    } else if (id == 3) { // se for pico
        sql = "SELECT lat,lon FROM OCORRENCIA AS OC INNER JOIN PICO ON OC.ID_OC = PICO.ID_OC WHERE OC.tipo_oc = 'P'  AND OC.tipo_vagao = 'F'";
    }

    db.all(sql, function(err,rows){
        if(err){
            throw err;
        }
        res.json(rows)
    })
}


//Torna a função utilizável em todo o código.
module.exports = mapF