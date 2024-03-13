

display = document.getElementById("display"),
start = document.getElementById("start"),
stop = document.getElementById("stop"),
reset = document.getElementById("reset"),

clave1 = document.getElementById("clave_1"), 
clave2 = document.getElementById("clave_2"), 
clave3 = document.getElementById("clave_3"),  
clave4 = document.getElementById("clave_4"), 
numeros = document.getElementsByClassName("numero")
inicio = document.getElementById("inicio")


clave1.innerHTML = "*"
clave2.innerHTML = "*"
clave3.innerHTML = "*"
clave4.innerHTML = "*"

console.log("Ejecutando JS...");
const max = 9

var clavesecreta = []
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

clave1Value = getRandomInt(max);
clave2Value = getRandomInt(max);
clave3Value = getRandomInt(max);
clave4Value = getRandomInt(max);
clavesecreta.push(clave1Value,clave2Value,clave3Value,clave4Value);

console.log(clavesecreta)



//-- Estados de la calculadora
const ESTADO = {
INIT: 0,
JUEGO: 1,
FINAL: 2,

}
//-- Variable de estado
//-- Por defecto su valor será el del estado inicial
let estado = ESTADO.INIT;



function number(num)
{

if (estado ==ESTADO.INIT) {
  crono.start()
  inicio.innerHTML = "COMIENZO!!"
  clave1.style.color = "red"
  clave2.style.color = "red"
  clave3.style.color = "red"
  clave4.style.color = "red"
}

estado = ESTADO.JUEGO;


//-- Segun el estado hacemos una cosa u otra
if (estado == ESTADO.JUEGO) {
  if (clave1Value == num.target.value) {
    clave1.innerHTML = clave1Value
    clave1.style.color = "green";

  } 
 
   if (clave2Value == num.target.value) {
    clave2.innerHTML = clave2Value
    clave2.style.color = "green"

  } 
   if (clave3Value == num.target.value) {
    clave3.innerHTML = clave3Value
    clave3.style.color = "green"

  } 
   if (clave4Value == num.target.value) {
    clave4.innerHTML = clave4Value
    clave4.style.color = "green"

  } 

}

estado = ESTADO.FINAL;
if(estado = ESTADO.FINAL){
if (clave1.innerHTML == clave1Value && clave2.innerHTML ==clave2Value && clave3.innerHTML == clave3Value && clave4.innerHTML == clave4Value){
  crono.stop()
  crono.reset()
  inicio.innerHTML = "HAS GANADO!!!"
} 
}

}



for (let boton of numeros) {

  boton.onclick = (num) => {
    number(num);
  }
}


//-- Definir un objeto cronómetro
const crono = new Crono(display);


//-- Arranque del cronometro
start.onclick = () => {
  console.log("Start!!");
  crono.start();


}

//-- Detener el cronómetro
stop.onclick = () => {
  console.log("Stop!");
  crono.stop();
}

//-- Reset del cronómetro
reset.onclick = () => {
crono.reset();
  estado = ESTADO.INIT;
  console.log("Reset!");

}


