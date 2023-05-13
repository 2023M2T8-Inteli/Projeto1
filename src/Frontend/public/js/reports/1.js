/* globals Chart:false, feather:false */
let map

async function initMap () {
    const { Map } = await google.maps.importLibrary("maps");
    map = new Map(document.getElementById("map"), {
        center: { lat: -14.766578, lng: -50.890985 },
        zoom: 6,
    });
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
