const express = require('express'); 
const app = express();
const bodyParser = require('body-parser')
const urlencoderParser = express.urlencoded({extended: false});

//Conectar com banco de dados
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../databases/Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    }
    console.log('Conectado à DB');
});

app.use(express.static("Frontend/public/")) // Mostrando onde está todo o frontend


//Página inicial
app.get("/", function(req,res){
    res.sendFile(__dirname+"index.html");
});


//Página das informações sobre o pico
app.get('/graphPico/:id/:ocur', (req,res) =>{
    const id = req.params.id;
    const ocur = req.params.ocur;

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

app.get('/graphsE/:ocur/:id', (req, res) => {
    const id = req.params.id;
    const ocur = req.params.ocur;

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

app.get('/graphsF/:ocur/:id', (req, res) => {
    const id = req.params.id;
    const ocur = req.params.ocur;

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

app.get('/tableE/:impact', (req,res)=>{
    const impact = req.params.impact;
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

app.get('/tableF/:impact', (req,res)=>{
    const impact = req.params.impact;
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

app.post("/addFav",(req,res) => {

    const fav = req.body.relatorio

    db.all("INSERT INTO FAVORITOS(FAVORITO) VALUES(?)", fav, function(err) {
        if(err){
            console.error(err.message);
        }
        console.log("Add completed")
    })
})


app.listen(3000, ()=>{
    console.log("http://localhost:3000")
})