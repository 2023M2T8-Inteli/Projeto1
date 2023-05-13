const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const db = new sqlite3.Database('src\Backend\databases\Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    } else {
        console.log('Conectado ao DB');
    }

}); // 

const deleteFav = (req,res) => {
    const id = req.params.id;

    db.all("DELETE FROM FAVORITOS WHERE ID_FAV = ?", id, function(err, rows) {
        if(err){
            console.error(err.message);
        }
        console.log("Deleted")
    })
}

module.exports = deleteFav