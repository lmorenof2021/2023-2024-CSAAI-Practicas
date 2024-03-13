console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "35px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texto sólido", 10, 30);

//-- Texto trazo
ctx.font = "35px Arial";
ctx.strokeStyle = 'blue';
ctx.strokeText("Texto trazo", 5, 80);