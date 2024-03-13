console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 300;
canvas.height = 200;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Cada objeto a dibujar lo delimitaremos 
//-- por los métodos beginPath() y closePath()
ctx.beginPath();
  //-- Definir un rectángulo de dimensiones 100x50,
  //-- cuya esquina superior izquierda está en (5,5) coordenadas donde empieza
  //--desde la esquina superior izquierda
  ctx.rect(5,5, 150, 75);

  //-- Color de relleno del rectángulo
  ctx.fillStyle = 'green';

  //-- Cambiar el tamaño de la línea del trazo
  ctx.lineWidth = 3;


  //-- Mostrar el relleno
  ctx.fill();

  //-- Mostrar el trazo del rectángulo
  ctx.stroke();
ctx.closePath();