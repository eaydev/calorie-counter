//Setting default styling for global charts

class DonutChart{
  constructor(dataValues, domPlacement, totalCals = undefined){
    this.dataValues = dataValues;
    this.totalCals = totalCals;
    this.domPlacement = domPlacement;


    // Constructing the data to be worked with
    this.labels;
    this.values;
    this.setValues();

  }

  // Setting values for the object
  setValues(){
    let macros = this.dataValues.map(x =>
        Object.keys(x)[0]
    )

    let values = this.dataValues.map(x =>
        Object.values(x)[0]
    )

    this.values = values;
    this.labels = macros;
  }

  //Getting background colors :)
  getBg(){
    const bgChoices = [
      '#fad390', '#f6b93b', '#fa983a', '#e58e26', '#f8c291', '#e55039', '#eb2f06',
      '#b71540', '#6a89cc', '#1e3799', '#4a69bd', '#0c2461', '#82ccdd',
      '#3c6382', '#60a3bc', '#0a3d62'
    ];
    let bg = [];

    //Pick colors from the palette provided above. Ensuring there are no duplicates
    let checkerArray = [];
    for (let i = 0; i < this.values.length; i++) {
      let bgVal;
      if (i === 0){
        bgVal = (Math.floor(Math.random() * bgChoices.length));
      } else {
        bgVal = (Math.floor(Math.random() * bgChoices.length));
        while(checkerArray.includes(bgVal)){
          bgVal = (Math.floor(Math.random() * bgChoices.length));
        }
      }
      checkerArray.push(bgVal);
      bg.push(bgChoices[bgVal])
    }
    //Pop out that array of background colors boi
    return bg;
  }

  //Produce labels for char
  getLabels(){
    let labels = this.labels;
    if (this.totalCals !== undefined) {
      labels.push('Cals Remaining');
    }
    return labels;
  }

  //Produce values for chart
  getData(){
    let convertedToCal = [];
    let calories = this.values;

    for (let i = 0; i < calories.length; i++) {
      if (this.labels[i].toLowerCase() === 'protein' ||
          this.labels[i].toLowerCase() === 'carbohydrates'
        ){
          convertedToCal.push(calories[i] * 4);
        }
      else if(this.labels[i].toLowerCase() === 'fats') {
          convertedToCal.push(calories[i] * 9);
      }
    }

    //Add the totalCals if is present
    if (this.totalCals !== undefined) {
      convertedToCal.push((this.totalCals - convertedToCal.reduce((a, b) => a + b, 0)));
    }

    return convertedToCal;
  }

  display(){
    Chart.defaults.doughnut.cutoutPercentage = 65;
    const donutChart = document.getElementById(this.domPlacement).getContext('2d');

    window.calorieChart = new Chart(donutChart, {
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
  }

  update(){

  }
}


let newDiagram = new DonutChart([
  {Protein: 160},
  {Fats: 30},
  {Carbohydrates: 100}
], 'macroChart'
);

newDiagram.display();
