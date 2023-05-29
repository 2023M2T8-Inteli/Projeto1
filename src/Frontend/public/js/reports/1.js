/* //////////////////////////////////// */
/*                MAPAS                 */
/* //////////////////////////////////// */

let map;

// Esperando automatização
let id = 1;
let vagao = "E";


// De acordo com o input do botão, o mapa recebe pontos diferentes
function choque(a) {
	id = a;
	// recarregar a pagina e iniciar o mapa após o carregamento da pagina
	fetch(`${window.location.href}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'text/html'
		}
	})
		.then(response => response.text()) // transformando a resposta em texto
		.then(data => {
			document.documentElement.innerHTML = data;
			initMap(true);
			// recarregar a pagina e iniciar o mapa após o carregamento da pagina
		})
		.catch(error => {
			console.error('Erro ao recarregar o conteúdo:', error);
		});
}

// De acordo com o input do botão, o mapa recebe pontos diferentes
function vagoes(vagaoSelecionado){
	vagao = vagaoSelecionado;
	// recarregar a pagina e iniciar o mapa após o carregamento da pagina
	fetch(window.location.href, {
		method: 'GET',
		headers: {
			'Content-Type': 'text/html'
		}
	})
		.then(response => response.text()) // transformando a resposta em texto
		.then(data => {
			document.documentElement.innerHTML = data;
			initMap(true);
			// recarregar a pagina e iniciar o mapa após o carregamento da pagina
		})
		.catch(error => {
			console.error('Erro ao recarregar o conteúdo:', error);
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


(() => {
	'use strict'; // iniciando modo estrito

	// requisição para adquirir dados das colunas e linhas
	fetch('/api/graphsE/1/1', {
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

			const values = [];
			const columns = [];

			// adicionando os valores e colunas
			for (let i = 0; i < value.length; i++) {
				values.push(value[i].f_max);
				columns.push(value[i].data_hora);
			}


			feather.replace({ 'aria-hidden': 'true' });

			// configurando o gráfico
			const ctx = document.getElementById('myChart');//Referencia o gráfico
			const myChart = new Chart(ctx, {
				type: 'line',
				data: {
					labels: columns, // inserindo as colunas
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
})();

