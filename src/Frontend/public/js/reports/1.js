/* globals Chart:false, feather:false */
let map

async function initMap () {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -11.455206520983609, lng: -34.499763669180325 },
        zoom: 6,
    });

	var points

    fetch('/api/mapE/1', {
    	method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		  },
    }).then(response=>{
		return response.json()
	}).then(json => {

	
		points = json
		console.log(points)
		var path = []
		for (var i = 0; i < points.length; i++) {
			console.log(points[i].lat, points[i].lon)
			path.push(new google.maps.LatLng(points[i].lat, points[i].lon));
	}
		var polyline = new google.maps.Polyline({
			path: path,
			geodesic: true,
			strokeColor: '#FF0000',
			strokeOpacity: 1.0,
			strokeWeight: 2
	});
		for(var i = 0; i < points.length; i++){
			var marker = new google.maps.Marker({
                position: {lat: points[i].lat, lng: points[i].lon},
                map: map,
                title: 'Posição 1',
                icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            });

		}
		// Adicione a polilinha ao mapa
		polyline.setMap(map);

	
	}).catch(err => {
		throw err
	})

	//fetch('/api/')
}

initMap();


(() => {
    'use strict'

    feather.replace({ 'aria-hidden': 'true' })

    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '---',
          '---',
          '---',
          '---',
          '---',
          '---',
          '---',
		  '---'
        ],

		
        datasets: [{
          data: [
            1,
            2,
            10,
            4,
            5,
            4,
            3
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    })
  })()


function force(){
	
}