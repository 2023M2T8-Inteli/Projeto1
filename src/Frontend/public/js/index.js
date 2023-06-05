(() => {
    feather.replace({ 'aria-hidden': 'true' })
})()

function newFav(a){
    fetch ("api/addFav/"+a, {
        method: 'POST'
    }).then(response =>{
        return response.json()
    }).catch(console.error())
}

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

async function relatorios(){
    console.log("ola")
    fetch('/api/quantity', {
        method: 'GET'
    }).then(response=>{
        return response.json()
    }).then(json=>{
        var num = json
        console.log(json)

        for(i = 0; i < num.length; i++){

            let rel = i+1;

            var divElement = document.createElement('div');
            divElement.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3';

            // Cria o elemento div com a classe "col"
            var colElement = document.createElement('div');
            colElement.className = 'col';

            // Cria o elemento div com a classe "card shadow-sm"
            var cardElement = document.createElement('div');
            cardElement.className = 'card shadow-sm';

            // Cria o elemento svg com os atributos necessários
            var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('class', 'bd-placeholder-img card-img-top');
            svgElement.setAttribute('width', '100%');
            svgElement.setAttribute('height', '225');
            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgElement.setAttribute('role', 'img');
            svgElement.setAttribute('aria-label', 'Placeholder: Prévia do Mapa');
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid slice');
            svgElement.setAttribute('focusable', 'false');

            // Cria o elemento rect dentro do svg
            var rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.setAttribute('width', '100%');
            rectElement.setAttribute('height', '100%');
            rectElement.setAttribute('fill', '#55595c');

            // Cria o elemento text dentro do svg
            var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textElement.setAttribute('x', '50%');
            textElement.setAttribute('y', '50%');
            textElement.setAttribute('fill', '#eceeef');
            textElement.setAttribute('dy', '.3em');
            textElement.textContent = 'Prévia do Mapa';

            // Adiciona o elemento rect e text como filhos do svg
            svgElement.appendChild(rectElement);
            svgElement.appendChild(textElement);

            // Cria o elemento div com a classe "card-body"
            var cardBodyElement = document.createElement('div');
            cardBodyElement.className = 'card-body';

            // Cria o elemento h5 com o texto "Relatório #1"
            var h5Element = document.createElement('h5');
            h5Element.textContent = 'Relatório #' + rel;

            // Cria o elemento p com o texto do resumo do relatório
            var pElement = document.createElement('p');
            pElement.className = 'card-text';
            pElement.textContent = 'Este é o exemplo de um relatório. Aqui irá um breve resumo dos dados no relatório.';

            // Cria o elemento div com as classes "d-flex justify-content-between align-items-center"
            var divGroupElement = document.createElement('div');
            divGroupElement.className = 'd-flex justify-content-between align-items-center';

            // Cria o elemento div com a classe "btn-group"
            var btnGroupElement = document.createElement('div');
            btnGroupElement.className = 'btn-group';

            // Cria o elemento "a" com o atributo href="/reports/1" e o texto "Ver"
            var aElement = document.createElement('a');
            aElement.setAttribute('type', 'button');
            aElement.className = 'btn btn-sm btn-outline-secondary';
            aElement.href = '/reports/'+rel;
            aElement.textContent = 'Ver'

            // Cria o elemento button com o texto "Favoritar"
            var buttonElement = document.createElement('button');
            buttonElement.setAttribute('type', 'button');
            buttonElement.setAttribute('onclick', 'newFav(' + rel + ')');
            buttonElement.className = 'btn btn-sm btn-outline-secondary';
            buttonElement.textContent = 'Favoritar';
            
            // teste Cria o elemento button com o texto "Baixar"
            var buttElement = document.createElement('button');
            buttElement.setAttribute('type', 'button');
            buttElement.setAttribute('onclick', `downloadZip(${rel})`);
            buttElement.className = 'btn btn-sm btn-outline-secondary';
            buttElement.textContent = 'Baixar';
            

            // Cria o elemento small com o texto "Data do Relatório"
            var smallElement = document.createElement('small');
            smallElement.className = 'text-body-secondary';
            smallElement.textContent = 'Data do Relatório';

            // Adiciona o elemento "a" e o elemento button como filhos do div btnGroupElement
            btnGroupElement.appendChild(aElement);
            btnGroupElement.appendChild(buttonElement);
            btnGroupElement.appendChild(buttElement);

            // Adiciona o elemento btnGroupElement e o elemento smallElement como filhos do div divGroupElement
            divGroupElement.appendChild(btnGroupElement);
            divGroupElement.appendChild(smallElement);

            // Adiciona o elemento h5Element, o elemento pElement, o elemento divGroupElement e o elemento svgElement como filhos do elemento cardBodyElement
            cardBodyElement.appendChild(h5Element);
            cardBodyElement.appendChild(pElement);
            cardBodyElement.appendChild(divGroupElement);

            // Adiciona o elemento svgElement e o elemento cardBodyElement como filhos do elemento cardElement
            cardElement.appendChild(svgElement);
            cardElement.appendChild(cardBodyElement);

            // Adiciona o elemento cardElement como filho do elemento colElement
            colElement.appendChild(cardElement);

            // Adiciona o elemento colElement como filho do elemento divElement
            divElement.appendChild(colElement);

            // Obtém o elemento pai onde você deseja adicionar os elementos
            var parentElement = document.getElementById('content-rels'); // Substitua 'id-do-elemento-pai' pelo ID correto do elemento pai

            // Adiciona o elemento divElement como filho do elemento pai
            parentElement.appendChild(divElement);
        }
    })
}

async function seeFav(){
    console.log("FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOI")

    fetch('/api/seeFav', {
        method: 'GET'
    }).then(response =>{
        return response.json()
    }).then(json=>{
        var data = json

        for (i = 0; i < data.length; i++){
            let rel = data[i].rel_num;

            var divElement = document.createElement('div');
            divElement.className = 'row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3';

            // Cria o elemento div com a classe "col"
            var colElement = document.createElement('div');
            colElement.className = 'col';

            // Cria o elemento div com a classe "card shadow-sm"
            var cardElement = document.createElement('div');
            cardElement.className = 'card shadow-sm';

            // Cria o elemento svg com os atributos necessários
            var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('class', 'bd-placeholder-img card-img-top');
            svgElement.setAttribute('width', '100%');
            svgElement.setAttribute('height', '225');
            svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
            svgElement.setAttribute('role', 'img');
            svgElement.setAttribute('aria-label', 'Placeholder: Prévia do Mapa');
            svgElement.setAttribute('preserveAspectRatio', 'xMidYMid slice');
            svgElement.setAttribute('focusable', 'false');

            // Cria o elemento rect dentro do svg
            var rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rectElement.setAttribute('width', '100%');
            rectElement.setAttribute('height', '100%');
            rectElement.setAttribute('fill', '#55595c');

            // Cria o elemento text dentro do svg
            var textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textElement.setAttribute('x', '50%');
            textElement.setAttribute('y', '50%');
            textElement.setAttribute('fill', '#eceeef');
            textElement.setAttribute('dy', '.3em');
            textElement.textContent = 'Prévia do Mapa';

            // Adiciona o elemento rect e text como filhos do svg
            svgElement.appendChild(rectElement);
            svgElement.appendChild(textElement);

            // Cria o elemento div com a classe "card-body"
            var cardBodyElement = document.createElement('div');
            cardBodyElement.className = 'card-body';

            // Cria o elemento h5 com o texto "Relatório #1"
            var h5Element = document.createElement('h5');
            h5Element.textContent = 'Relatório #' + rel;

            // Cria o elemento p com o texto do resumo do relatório
            var pElement = document.createElement('p');
            pElement.className = 'card-text';
            pElement.textContent = 'Este é o exemplo de um relatório. Aqui irá um breve resumo dos dados no relatório.';

            // Cria o elemento div com as classes "d-flex justify-content-between align-items-center"
            var divGroupElement = document.createElement('div');
            divGroupElement.className = 'd-flex justify-content-between align-items-center';

            // Cria o elemento div com a classe "btn-group"
            var btnGroupElement = document.createElement('div');
            btnGroupElement.className = 'btn-group';

            // Cria o elemento "a" com o atributo href="/reports/1" e o texto "Ver"
            var aElement = document.createElement('a');
            aElement.setAttribute('type', 'button');
            aElement.className = 'btn btn-sm btn-outline-secondary';
            aElement.href = '/reports/'+rel;
            aElement.textContent = 'Ver'

            

            // Cria o elemento small com o texto "Data do Relatório"
            var smallElement = document.createElement('small');
            smallElement.className = 'text-body-secondary';
            smallElement.textContent = 'Data do Relatório';

            // Adiciona o elemento "a" e o elemento button como filhos do div btnGroupElement
            btnGroupElement.appendChild(aElement);

            // Adiciona o elemento btnGroupElement e o elemento smallElement como filhos do div divGroupElement
            divGroupElement.appendChild(btnGroupElement);
            divGroupElement.appendChild(smallElement);

            // Adiciona o elemento h5Element, o elemento pElement, o elemento divGroupElement e o elemento svgElement como filhos do elemento cardBodyElement
            cardBodyElement.appendChild(h5Element);
            cardBodyElement.appendChild(pElement);
            cardBodyElement.appendChild(divGroupElement);

            // Adiciona o elemento svgElement e o elemento cardBodyElement como filhos do elemento cardElement
            cardElement.appendChild(svgElement);
            cardElement.appendChild(cardBodyElement);

            // Adiciona o elemento cardElement como filho do elemento colElement
            colElement.appendChild(cardElement);

            // Adiciona o elemento colElement como filho do elemento divElement
            divElement.appendChild(colElement);

            // Obtém o elemento pai onde você deseja adicionar os elementos
            var parentElement = document.getElementById('content-rels'); // Substitua 'id-do-elemento-pai' pelo ID correto do elemento pai

            // Adiciona o elemento divElement como filho do elemento pai
            parentElement.appendChild(divElement);  
        }
    })
}
