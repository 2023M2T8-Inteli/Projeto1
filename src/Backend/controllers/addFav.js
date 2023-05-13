const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const db = new sqlite3.Database('src\Backend\databases\Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    } else {
        console.log('Conectado ao DB');
    }

});

const addFav = (req,res) => {

    const fav = req.body.relatorio

    db.all("INSERT INTO FAVORITOS(FAVORITO) VALUES(?)", fav, function(err) {
        if(err){
            console.error(err.message);
        }
        console.log("Add completed")
    })
}

module.exports = addFav