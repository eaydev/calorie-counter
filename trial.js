class Button{
  constructor(name){
    this.name =  name;
  }

  display(){
    return(
      `<button id="trial" onclick='hello()'>${this.name}</button>`)
    }
}

let tryoutButton = new Button("Hello");

document.getElementById('App').innerHTML = tryoutButton.display();

function hello(){
  console.log('boomer');
}
