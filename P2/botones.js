

//-- Elementos de la gui
const gui = {
  clave1 : document.getElementById("clave1"), 
  clave2 : document.getElementById("clave2"), 
  clave3 : document.getElementById("clave3"),  
  clave4 : document.getElementById("clave4"), 
  // claves: document.getElementsByClassName("claves"),
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset"),
  botones: document.getElementsByClassName("numero")

};
console.log(gui)
console.log("Ejecutando JS...");
const max = 9

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// clave1 = console.log(getRandomInt(max));
// clave2 = console.log(getRandomInt(max));
// clave3 = console.log(getRandomInt(max));
// clave4 = console.log(getRandomInt(max));

const clave1Value = getRandomInt(max);
const clave2Value = getRandomInt(max);
const clave3Value = getRandomInt(max);
const clave4Value = getRandomInt(max);

gui.clave1.innerHTML = clave1Value;
gui.clave2.innerHTML = clave2Value;
gui.clave3.innerHTML = clave3Value;
gui.clave4.innerHTML = clave4Value;


// caleatoria = ["clave1","clave2","clave3","clave4"];
// console.log(caleatoria);


gui.boton1.onclick = () => {
  console.log("click 1")
  gui.clave1.innerHTML = "hola";
}






//-- Definir un objeto cronómetro
const crono = new Crono(gui.display);

//---- Configurar las funciones de retrollamada


//-- Arranque del cronometro
gui.start.onclick = () => {
    console.log("Start!!");
    crono.start();
}
  
//-- Detener el cronómetro
gui.stop.onclick = () => {
    console.log("Stop!");
    crono.stop();
}

//-- Reset del cronómetro
gui.reset.onclick = () => {
    console.log("Reset!");
    crono.reset();
}

  
