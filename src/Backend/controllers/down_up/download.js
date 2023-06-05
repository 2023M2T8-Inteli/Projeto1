const path = require("path")

function download(req,res){
    const Num = req.params.id;

    const filePath = path.join('./','Backend', 'archives', "Rel"+Num, "Rel.zip");
	console.log(filePath)
    res.download(filePath, (err) => {
        if (err) {
        // Trate os erros adequados aqui
        res.status(404).send('Arquivo não encontrado');
    }
  });
}

module.exports = download