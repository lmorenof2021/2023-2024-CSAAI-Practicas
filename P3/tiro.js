console.log("Ejecutando JS...");
const canvas= document.getElementById("ctiro");
/* const platano = new Image();
function init() {
  platano.src = "platano.jpeg";
  window.requestAnimationFrame(draw);
} */

const ctx = canvas.getContext("2d");

//definir tamaño canvas
canvas.width = 1800;
canvas.height = 500;
const display = document.getElementById("display")
const range = document.getElementById("range");
const range1 = document.getElementById("range1");
const range_disp = document.getElementById("range_disp");
const range1_disp = document.getElementById("range1_disp");
const disparar = document.getElementById("disparar");
const iniciar = document.getElementById("iniciar");

range.oninput = () => {
  range_disp.innerHTML = range.value;
  angulo = range.value;
}

range1.oninput = () => {
  range1_disp.innerHTML = range1.value;
  velp = 0.1*range1.value;
}


function getRandomXO(min,max) {
  return x = Math.floor(Math.random() * (max-min +1)+min);
  }
//-- Coordenadas iniciales del objetivo
let xomin = 200;
let xomax = 770;
let xo = getRandomXO(xomin,xomax);
let yo = 470;

//--Coordenadas iniciales del proyectil
let xop = 5;
let yop = 445;
let xp = xop;
let yp = yop;

//-- función para pintar el proyectil
function dibujarP(x,y,lx,ly,color) {

  //-- Pintando el proyectil
  ctx.beginPath();

  //-- Definir un rectángulo de dimensiones lx x ly,
  ctx.rect(x, y, lx, ly);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = color;

  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();

  ctx.closePath();
}
//-- función para pintar el objetivo
function dibujarO(x,y) {

  //-- Pintando el objetivo
  ctx.beginPath();

  //-- Dibujar un circulo: coordenadas x,y del centro
  //-- Radio, Angulo inicial y angulo final
  ctx.arc(x, y, 25, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'red';

  //-- Dibujar el relleno
  ctx.fill()    

  //-- Dibujar el trazo
  ctx.stroke();

  ctx.closePath();
}

//-- Dibujar el objetivo
dibujarO(xo,yo); // Pintar el objetivo

//-- Dibujar el proyectil
dibujarP(xop, yop, 50, 50, "green"); // Pintar el proyectil

//-- Velocidad del proyectil
let t = 0;


//-- Función principal de actualización
function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  g = 0.1*9.8; //gravedad
    
  velx = velp*Math.cos((angulo*Math.PI)/180); //velocidad en el eje x
  vely = velp*Math.sin((angulo*Math.PI)/180); //velocidad en el eje y

  xp = xp + velx*t;
  yp = yp - vely*t + 0.5*g*t*t;
   
  t += 0.1;


//-- Condición de rebote en extremos verticales del canvas
if (xp < 0 || xp + 50 > canvas.width) {
  velx = -velx;
}

//-- Condición de rebote en extremos horizontales del canvas
if (yp <= 0 || yp + 50 > canvas.height) {
  vely = -vely;
  yp= canvas.height -50;
} 

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarO(xo,yo); // Pintar el objetivo

  dibujarP(xp, yp, 50, 50, "yellow"); // Pintar el proyectil

  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}

//-- Función de retrollamada del botón de disparo
disparar.onclick = () => {
  crono.start()
  lanzar();
}

iniciar.onclick = () => {
  dibujarP(xop, yop, 50, 50, "blue");
  //-recargamos el script
  location.reload();
}


//-- Definir un objeto cronómetro
const crono = new Crono(display);



