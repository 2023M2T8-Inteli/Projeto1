const express = require('express');
const app = express();
const cookie = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
app.use('/js', express.static(__dirname + "/Frontend/public/js"));
app.use('/css', express.static(__dirname + "/Frontend/public/css"));
app.use('/assets', express.static(__dirname + "/Frontend/public/assets"))
app.use(cookie());
app.use(express.json());
app.use('/', require('./Backend/routes/pages'));
app.use('/api', require('./Backend/controllers/auth'));
app.listen(PORT);
console.log(`Listening on port ${PORT}`);