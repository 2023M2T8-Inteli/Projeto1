const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const urlencoderParser = express.urlencoded({extended: false});

const db = require('../routes/db-config')


// Página inicial
router.get("/", function(req,res){
    res.sendFile("index.html", {root: './Frontend/public'});
});

router.get("/reports/:id", (req, res) => {
    res.sendFile(`${req.params.id}.html`, {root: './Frontend/public/reports'});
})


// Página das informações sobre o pico, podendo ser em relação à tabela E (com o ID 1), e à tabela F(com o ID 2).
router.get('/graphPico/:id/:ocur', (req,res) =>{
    const id = req.params.id; // Diferencia o E do F.
    const ocur = req.params.ocur; //Escolhe a ocorrência específica (ACT, PEG_PSI, etc)

    if(id == 1){
        var table = "OCORRENCIAS_PICO1"
        if(ocur == 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur == 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur == 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
    if(id == 2){
        var table = "FROM OCORRENCIAS_PICO2"
        if(ocur == 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur == 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur == 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
})

// Pega e mostra dados específicos da Tabela E
router.get('/graphsE/:ocur/:id', (req, res) => {
    const id = req.params.id;// Diferencia entre CHOQUE 1 e 2
    const ocur = req.params.ocur; // Escolhe uma ocorrência (ACT, PEG_PSI, etc).

    if(ocur == 1){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia+ ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
    if(ocur == 2){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }

    if(ocur == 3){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
})


// Pega e mostra dados específicos da Tabela F
router.get('/graphsF/:ocur/:id', (req, res) => {
    const id = req.params.id; // Diferencia entre CHOQUE 1 e 2
    const ocur = req.params.ocur; //Escolhe uma ocorrência (ACT, PEG_PSI, etc).

    if(ocur == 1){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia+ ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
    if(ocur == 2){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }

    if(ocur == 3){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia + ".ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO";
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
})


// Mostra todos os dados da tabela E
router.get('/tableE/:impact', (req,res)=>{
    const impact = req.params.impact; // Seleciona entre CHOQUE 1 e 2
    var sql;
    if(impact == 1){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE1 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE1.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    if(impact == 2){
        sql = 'SELECT * FROM E_OCORRENCIAS_CHOQUE2 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIAS_CHOQUE2.ID_OCORRENCIA = E_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    db.all(sql, function(err,rows){
        if(err){
            console.error(err.message)
        }
        res.json(rows)
    });
})


// Seleciona todos os dados da tabela F
router.get('/tableF/:impact', (req,res)=>{
    const impact = req.params.impact; // Seleciona entre CHOQUE 1 e 2
    var sql;
    if(impact == 1){
        sql = 'SELECT * FROM F_OCORRENCIAS_CHOQUE1 INNER JOIN F_IDENTIFICACAO ON F_OCORRENCIAS_CHOQUE1.ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    if(impact == 2){
        sql = 'SELECT * FROM F_OCORRENCIAS_CHOQUE2 INNER JOIN F_IDENTIFICACAO ON F_OCORRENCIAS_CHOQUE2.ID_OCORRENCIA = F_IDENTIFICACAO.ID_IDENTIFICACAO'
    }
    db.all(sql, function(err,rows){
        if(err){
            console.error(err.message)
        }
        res.json(rows)
    });
})


// Adiciona um relatório aos favoritos
router.post("/addFav",(req,res) => {

    const fav = req.body.relatorio

    db.all("INSERT INTO FAVORITOS(FAVORITO) VALUES(?)", fav, function(err) {
        if(err){
            console.error(err.message);
        }
        console.log("Add completed")
    })
})

// Vizualiza os favoritos atuais.
router.get("/seeFav", (req, res) => {
    db.all("SELECT * FROM FAVORITOS", function(err, rows) {;
        if(err) {
            console.error(err.message);
        }

        console.log("Favoritos retornados.");
        res.json(rows);
    })
})

// Deleta o registro de favorito selecionado.
router.delete('/deleteFav/:id', (req,res) => {
    const id = req.params.id; // Seleciona o favorito desejado

    db.all("DELETE FROM FAVORITOS WHERE ID_FAV = ?", id, function(err, rows) {
        if(err){
            console.error(err.message);
        }
        console.log("Deleted")
    })
})

module.exports = router;