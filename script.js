const mychart = document.getElementById('macroChart').getContext('2d');

var myDoughnutChart = new Chart(mychart, {
    type: 'doughnut',
    data: {
    datasets: [
      {
        data: [2000 ,120, 70, 90],
        backgroundColor: [
            '#ecf0f1',
            '#e74c3c',
            '#f39c12',
            '#9b59b6'
          ],
        borderWidth: 0,
        weight: 0.5
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Calories remaining',
        'Protein',
        'Carbohydrates',
        'Fat'
      ]
    },
    options: {
      legend:{
        position:'right',
        align: 'center'
      }
    }
});

console.log(myDoughnutChart);

//Pasted JavaScript
const donutChart = document.getElementById("'" + this.domPlacement + "'").getContext('2d');

var myDoughnutChart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
    datasets: [
      {
        data: this.getData(),
        backgroundColor: this.getBg(),
        borderWidth: 0,
        weight: 0.5
      }
    ],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: this.getLabels(),
    },
    options: {
      legend:{
        position:'right',
        align: 'center'
      }
    }
});
