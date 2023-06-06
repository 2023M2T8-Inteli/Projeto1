


//função para download do relatório
function downloadZip(rel) {
    const zipUrl = "Rel.zip"; // Substitua pela URL real do arquivo ZIP
    
    fetch(`/api/download/${rel}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
  
        const a = document.createElement("a");
        a.href = url;
        a.download = "Rel.zip"; // Nome do arquivo ZIP
        // a.style.display = "none";
        // document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        // document.body.removeChild(a);
      });
  }