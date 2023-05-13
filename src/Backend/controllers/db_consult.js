const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');

const db = new sqlite3.Database('./Banco de dados.db', (err) =>{
    if(err){
        console.error(err.message)
    }
    console.log('Conectado ao DB');
});

const tableE = (req,res) => {
    const impact = req.params.impact;
    var sql;
    if(impact === 1){
        sql = 'SELECT * FROM E_OCORRENCIA_CHOQUE1 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIA_CHOQUE1'
    }
    if(impact === 2){
        sql = 'SELECT * FROM E_OCORRENCIA_CHOQUE2 INNER JOIN E_IDENTIFICACAO ON E_OCORRENCIA_CHOQUE2'
    }
    db.all(sql, function(err,rows){
        if(err){
            console.error(err.message)
        }
        res.json(rows)
    })
}

const graphsE = (req, res) => {
    const id = req.params.id;
    const ocur = req.params.ocur;


    if(ocur === 1){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
    if(ocur === 2){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }

    if(ocur === 3){
        var ocorrencia = "E_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN E_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
}

const tableF = (req,res) => {
    const impact = req.params.impact;
    var sql;
    if(impact === 1){
        sql = 'SELECT * FROM F_OCORRENCIA_CHOQUE1 INNER JOIN F_IDENTIFICACAO ON F_OCORRENCIA_CHOQUE1'
    }
    if(impact === 2){
        sql = 'SELECT * FROM F_OCORRENCIA_CHOQUE2 INNER JOIN F_IDENTIFICACAO ON F_OCORRENCIA_CHOQUE2'
    }
    db.all(sql, function(err,rows){
        if(err){
            console.error(err.message)
        }
        res.json(rows)
    })
}

const graphsF = (req, res) => {
    const id = req.params.id;
    const ocur = req.params.ocur;


    if(ocur === 1){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT F_MAX FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
    if(ocur === 2){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT ACT FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }

    if(ocur === 3){
        var ocorrencia = "F_OCORRENCIAS_CHOQUE" + id
        var sql = "SELECT PEG_PSI FROM " + ocorrencia + " INNER JOIN F_IDENTIFICACAO ON " + ocorrencia;
        db.all(sql, function(err,rows){
            if(err){
                console.error(err.message)
            }
            res.json(rows)
        })
    }
}

const graphPico = (req,res) =>{
    const id = req.params.id;
    const ocur = req.params.ocur;

    if(id === 1){
        var table = "OCORRENCIAS_PICO1"
        if(ocur === 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
    if(id === 2){
        var table = "FROM OCORRENCIAS_PICO2"
        if(ocur === 1){
            var sql = "SELECT F_MAX FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 2){
            var sql = "SELECT ACT FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
        if(ocur === 3){
            var sql = "SELECT PEG_PSI FROM " + table + " INNER JOIN E_IDENTIFICACAO ON " + table;
            db.all(sql, function(err,rows){
                if(err){
                    console.error(err.message);
                }
                res.json(rows)
            })
        }
    }
}