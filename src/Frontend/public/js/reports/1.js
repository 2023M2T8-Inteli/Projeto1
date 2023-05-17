/* globals Chart:false, feather:false */
let map

async function initMap () {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -20.5, lng: -50.890985 },
        zoom: 6,
    });

    var points = [
      {lat: -20.4435,lng: -54.6478},
      {lat: -21.2115, lng: -50.4261},
      {lat: -22.0154, lng: -47.8911},
      {lat: -22.9064, lng: -47.0616},
      {lat: -23.5489, lng: -46.6388},
      {lat: -23.9618, lng: -46.3322}
  ];

  var path = [];
  for (var i = 0; i < points.length; i++) {
    path.push(new google.maps.LatLng(points[i].lat, points[i].lng));
}
var polyline = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
});

// Adicione a polilinha ao mapa
polyline.setMap(map);


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
          '---'
        ],
        datasets: [{
          data: [
            1,
            2,
            6,
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
