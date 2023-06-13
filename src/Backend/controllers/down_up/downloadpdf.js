const { dir } = require("console");
const path = require("path")
const fs = require('fs')
//função para baixar o arquivo zip
function downloadpdf(req,res){
    const Num = req.params.id;


    //caminho do arquivo zip(num é o numero do relatorio)
    const filePath = path.join(__dirname ,"../", "../", 'archives', "Rel"+Num, "Relatorio.pdf");

    
	console.log(filePath)

    if (fs.existsSync(filePath)) {
        console.log('O caminho existe.');
      } else {
        console.log('O caminho não existe.');
      }

    // baixando o arquivo
    res.download(filePath, (err) => {
        if (err) {
        // Trate os erros adequados aqui
        res.status(404).send('Arquivo não encontrado');
    }
  });
}

module.exports = downloadpdf