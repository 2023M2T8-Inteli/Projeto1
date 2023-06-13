function downloadPDF(rel) {
  const pdfUrl = "Relatorio.pdf"; // Substitua pela URL real do arquivo ZIP
  
  fetch(`/api/downloadpdf/${rel}`)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "Relatorio.pdf"; // Nome do arquivo ZIP
      // a.style.display = "none";
      // document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    });
}


// function downloadPdf(rel) {
//   const zipUrl = "Relatorio.pdf"; // Substitua pela URL real do arquivo ZIP

//   fetch(`/api/download/${rel}`)
//     .then(response => response.blob())
//     .then(blob => {
//       // Cria um link para o arquivo ZIP
//       const url = window.URL.createObjectURL(blob);

//       // Cria um link e clica nele
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = "Relatorio.pdf"; // Nome do arquivo ZIP
//       // a.style.display = "none";
//       // document.body.appendChild(a);
//       a.click();
//       window.URL.revokeObjectURL(url);
//       // document.body.removeChild(a);
//     });
// }


// function downloadPDF() {
//     const PDFUrl = "Relatório.pdf"; // Substitua pela URL real do arquivo ZIP
    
//     fetch(PDFUrl)
//       .then(response => response.blob())
//       .then(blob => {
//         const url = window.URL.createObjectURL(blob);
  
//         const a = document.createElement("a");
//         a.href = url;
//         a.download = "Relatório.pdf"; // Nome do arquivo ZIP
//         a.style.display = "none";
//         document.body.appendChild(a);
//         a.click();
//         window.URL.revokeObjectURL(url);
//         document.body.removeChild(a);
//       });
//   }
  