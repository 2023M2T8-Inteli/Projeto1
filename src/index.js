const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const urlencoderParser = express.urlencoded({extended: false});


app.use('/js', express.static(__dirname + "/Frontend/public/js")); // Pega os arquivos JS
app.use('/css', express.static(__dirname + "/Frontend/public/css")); // Pega os arquivos CSS
app.use('/assets', express.static(__dirname + "/Frontend/public/assets")) // Pega os arquivos de imagem

app.use('/', require('./Backend/controllers/index')); // Pega o index.js da pasta Backend/controllers\

app.use(express.json());

app.listen(3000);
console.log(`Listening on port ${3000}`);