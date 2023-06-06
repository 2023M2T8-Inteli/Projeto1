//Arquivo padrão para gerar outros relatorios, então 1.js, será para o relatorio 1, contudo ele será apenas utilizado como padrão para os outros relatorios!!!!!!

/* //////////////////////////////////// */
/*                MAPAS                 */
/* //////////////////////////////////// */

let map;

// Esperando automatização
let id = 1;
let vagao = "E";
let viagem = 1;



// De acordo com o input do botão, o mapa recebe pontos diferentes
function choque(a) {
	id = a;
	// recarregar a pagina e iniciar o mapa após o carregamento da pagina
	$.ajax({
		url: window.location.href,
		type: 'GET',
		dataType: 'html',
		success: function(data) {
			document.documentElement.innerHTML = data;
			initMap(true);
			// recarregar a pagina e iniciar o mapa após o carregamento da pagina
		},
		error: function(error) {
			console.error('Erro ao recarregar o conteúdo:', error);
		}
	});
}

// De acordo com o input do botão, o mapa recebe pontos diferentes
function vagoes(vagaoSelecionado) {
	vagao = vagaoSelecionado;
	// recarregar a pagina e iniciar o mapa após o carregamento da pagina
	$.ajax({
		url: window.location.href,
		type: 'GET',
		dataType: 'html',
		success: function(data) {
			document.documentElement.innerHTML = data;
			initMap(true);
			// recarregar a pagina e iniciar o mapa após o carregamento da pagina
		},
		error: function(error) {
			console.error('Erro ao recarregar o conteúdo:', error);
		}
	});
}

// iniciando mapa utilizando api do google maps
async function initMap() {
	const { Map } = await google.maps.importLibrary("maps");
	map = new Map(document.getElementById("map"), {
		center: { lat: -11.455206520983609, lng: -34.499763669180325 },
		zoom: 6,
	});

	try {
		// esperando fetch que devolve os pontos do mapa
		var points = await fetch('/api/path', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(response => response.json()); // transformando a resposta em json

		var path = [];
		// adicionando os pontos ao caminho
		for (var i = 0; i < points.length; i++) {
			path.push(new google.maps.LatLng(points[i].lat, points[i].lon));
		}

		// definindo caminho no mapa
		var polyline = new google.maps.Polyline({
			path: path,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});
		polyline.setMap(map);

		// definindo marcadores
		var url = '/api/map' + vagao + "/" + id;

		// esperando fetch que devolve os pontos do mapa
		var json = await fetch(url, {
			method: 'GET',
		}).then(response =>{
			return response.json()
		}).then(json => {
			// chamando função de adcionar marcadores no mapa de forma assincrona
			addMarkersToMap(json);
		})
	} catch (error) {
		console.error('Erro ao inicializar o mapa:', error);
	}
}

// adicionando marcadores no mapa
function addMarkersToMap(points) {
	// para cada ponto no array de pontos
	for (var i = 0; i < points.length; i++) {
		// criando marcador
		var marker = new google.maps.Marker({
			position: { lat: points[i].lat, lng: points[i].lon },
			map: map,
			title: 'Posição 1',
			icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
		});
	}
}

// iniciando mapa
initMap(false);


/* /////////////////////////////////// */
/*              GRÁFICOS               */
/* /////////////////////////////////// */


let extViagem = 1
let extRelnum = 1
let extVagao = "E"
let extOcur = 1

document.onload = (function() {
	'use strict'; // iniciando modo estrito

	initGraph(1, 1, "E", 1)
})();

function initGraph(viagem = extViagem, relnum = extRelnum, vagao = extVagao, ocur = extOcur) {
	if (viagem != extViagem) {extViagem = viagem}
	if (relnum != extRelnum) {extRelnum = relnum}
	if (vagao != extVagao) {extVagao = vagao}
	if (ocur != extOcur) {extOcur = ocur}


	fetch(`/api/graphs${vagao}/${viagem}/${relnum}/${ocur}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			// transformando a resposta em json
			return response.json();
		})
		.then(json => {
			const value = json;

			let values = [];
			const columns = [];

			// adicionando os valores e colunas
			for (let i = 0; i < value.length; i++) {
				values.push(value[i].f_max);
				columns.push(value[i].data_hora);
			}


			// configurando o gráfico
			const ctx = document.getElementById('myChart');//Referencia o gráfico
			// deletes the ctx element
			ctx.remove();
			// creates a new element as the child of id chartFather (looks like <canvas class="my-4 w-100 pb-5" id="myChart" width="900" height="380"></canvas>)
			let ctx2 = document.createElement('canvas')
			ctx2.setAttribute('id', 'myChart')
			ctx2.setAttribute('width', '900')
			ctx2.setAttribute('height', '380')
			ctx2.setAttribute('class', 'my-4 w-100 pb-5');

			document.getElementById('chartFather').appendChild(ctx2);



			const myChart = new Chart(ctx2, {
				type: 'line',
				data: {
					labels: values, // inserindo as colunas
					datasets: [
						{
							data: values, // inserindo as linhas
							lineTension: 0,
							backgroundColor: 'transparent',
							borderColor: '#007bff',
							borderWidth: 4,
							pointBackgroundColor: '#007bff'
						}
					]
				},
				options: {
					plugins: { // configurando o gráfico
						legend: {
							display: false
						},
						tooltip: {
							boxPadding: 3
						}
					}
				}
			});
		});
}

