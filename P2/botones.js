//-- Elementos de la gui
const gui = {
  clave1 : document.getElementById("clave1"), 
  clave2 : document.getElementById("clave2"), 
  clave3 : document.getElementById("clave3"),  
  clave4 : document.getElementById("clave4"), 
  display : document.getElementById("display"),
  start : document.getElementById("start"),
  stop : document.getElementById("stop"),
  reset : document.getElementById("reset")

}

console.log("Ejecutando JS...");

const min = 0
const max = 9

function clavealeatoria(min,max) {
  caleatoria1 = Math.random(min,max);
  document.getElementById("clave1").innerHTML = caleatoria1

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

  
