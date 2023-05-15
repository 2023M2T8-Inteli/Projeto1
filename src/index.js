// HIGHEST PRIORITY
require('dotenv').config();

// HIGH PRIORITY
const express = require('express');
const app = express();
const cookie = require('cookie-parser');

// LOW PRIORITY
app.use(express.json());
app.use(cookie());


// LOWEST PRIORITY
app.use('/api', require('./Backend/controllers/auth')); // Pega o auth.js da pasta Backend/controllers\
app.use('/', require('./Backend/routes/pages'));

app.use('/js', express.static(__dirname + "/Frontend/public/js")); // Pega os arquivos JS
app.use('/css', express.static(__dirname + "/Frontend/public/css")); // Pega os arquivos CSS
app.use('/assets', express.static(__dirname + "/Frontend/public/assets")); // Pega os arquivos de imagem

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening on port ${PORT}`);