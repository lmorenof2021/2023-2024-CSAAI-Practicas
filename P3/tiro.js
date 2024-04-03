console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const range = document.getElementById("range");
const range1 = document.getElementById("range1");
const range_disp = document.getElementById("range_disp");
const range1_disp = document.getElementById("range1_disp");
const disparar = document.getElementById("disparar");
const iniciar = document.getElementById("iniciar");



//-- Definir el tamaño del canvas
canvas.width = 1800;
canvas.height = 600;

//-- Obtener el contexto del canvas
const circulo = canvas.getContext("2d");
const cuadrado = canvas.getContext("2d");


const maxx = canvas.width - 50



function getRandomInt(min,max) {
return Math.floor(Math.random() * (max-min +1)+min);
}

x = getRandomInt(300,maxx);
 //(max - min) +  max

 function dibujarCirculo(x) {
    circulo.beginPath();
    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final

    circulo.arc(x, 555, 40, 0, 2 * Math.PI);
    circulo.strokeStyle = 'blue';
    circulo.lineWidth = 3;
    circulo.fillStyle = 'red';

    //-- Dibujar el trazo
    circulo.stroke()

    //-- Dibujar el relleno
    circulo.fill()
    
    
    circulo.closePath()
 }

dibujarCirculo(x);

function dibujarCuadrado(x,y,lx,ly,color) {

        cuadrado.beginPath();

        //distancia x,y, ancho,alto
        cuadrado.rect(x, y, lx, ly);

        //-- Dibujar
        cuadrado.fillStyle = color;
        cuadrado.strokeStyle = 'blue';

        //-- Rellenar
        cuadrado.fill();

        //-- Dibujar el trazo
        cuadrado.stroke()
        cuadrado.closePath();

}

//-- Coordenadas iniciales del proyectil
let xop = 50;
let yop = 530;
let xp = xop;
let yp = yop;
dibujarCuadrado(xop, yop, 60, 60, "green");


let velp = 5;

function lanzar() 
{
  //-- Implementación del algoritmo de animación:

  //-- 1) Actualizar posición de los elementos
  xp = xp + velp;

  //-- 2) Borrar el canvas
  cuadrado.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Pintar los elementos en el canvas
  dibujarCuadrado(xp, yp, 60, 60, "blue"); // Pintar el proyectil
  dibujarCirculo(x);
  //-- 4) Repetir
  requestAnimationFrame(lanzar);
}


//-- Función de retrollamada del botón de disparo
disparar.onclick = () => {
  lanzar();
}

range.oninput = () => {
    range_disp.innerHTML = range.value;
}

range1.oninput = () => {
  range1_disp.innerHTML = range1.value;
}








//-- Definir un objeto cronómetro
const crono = new Crono(display);


//-- Arranque del cronometro
// disparar.onclick = () => {
//   console.log("Start!!");
//   crono.start();
// }

//-- Función de retrollamada del botón iniciar
iniciar.onclick = () => {
  location.reload();
}