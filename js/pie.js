var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Mobile views,%", "Desktop,%"],
      datasets: [{
        backgroundColor: [
          "#E786D7",
          "#7F7FD5",
        ],
        data: [16, 84]
      }]

    },
    maintainAspectRatio: false,
    options: {
      responsive: true,
        maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            font: {
              size: 10
            },
            boxWidth: 15,
            color: '#cacaca',
            padding: 10
          }
        }
      }
    }
  });