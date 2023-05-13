
// Conecta com o banco de dados
const sqlite3 = require('sqlite3').verbose();

const db_path = require('path').resolve(__dirname, '../databases/Banco de dados.db');

const db = new sqlite3.Database(db_path, (err) =>{
    if(err){
        console.error(err.message)
    } else {
    console.log('Conectado à DB');
    }
});

module.exports = db;