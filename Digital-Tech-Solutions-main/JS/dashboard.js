 const ctx1 = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['2016', '2017', '2018', '2019'],
        datasets: [
          {
            label: 'JAN',
            data: [50, 100, 150, 200],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: true
          },
          {
            label: 'FEV',
            data: [100, 130, 160, 180],
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderColor: 'rgba(255, 159, 64, 1)',
            fill: true
          },
          {
            label: 'MAR',
            data: [70, 90, 170, 220],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });

    const ctx2 = document.getElementById('statsChart').getContext('2d');
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['KFC', 'FIAT', 'KLIM', 'Aeroflot', 'Lukoil', 'Amex', 'Daimler'],
        datasets: [{
          data: [10, 15, 20, 10, 15, 20, 10],
          backgroundColor: [
            '#ff6384', '#ffcd56', '#4bc0c0', '#9966ff', '#36a2eb', '#c9cbcf', '#ff9f40'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });