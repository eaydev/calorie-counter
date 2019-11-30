class DonutChart{
  constructor(dataValues, domPlacement){
    this.dataValues = dataValues;
    this.domPlacement = domPlacement;

  }
  output(){
    console.log(this.dataValues);
  }
  generateBackGroundColors(){
    console.log(this.dataValues.length);
  }
}

let newDiagram = new DonutChart([
  {protein: 220},
  {fats: 150},
  {carbohydrates: 160}
]);

newDiagram.output();
newDiagram.generateBackGroundColors();
