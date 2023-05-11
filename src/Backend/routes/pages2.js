const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.sendFile('index.html',{root: './Front End/public'})
});

router.get('/favoritos', (req,res) =>{
    res.sendFile('favoritos.html',{root: './Front End/public'})
});

router.get('/login', (req,res) =>{
    res.sendFile('login.html',{root: './Front End/public'})
});

router.get('/relatorio', (req,res) =>{
    res.sendFile('relatorio.html',{root: './Front End/public'})
});

module.exports = router