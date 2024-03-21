console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");
const range = document.getElementById("range");
const range1 = document.getElementById("range1");
const range_disp = document.getElementById("range_disp");
const range1_disp = document.getElementById("range1_disp");


 



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

cuadrado.beginPath();

//distancia x,y, ancho,alto
cuadrado.rect(50, 530, 60, 60);

        //-- Dibujar
        cuadrado.fillStyle = 'green';
        cuadrado.strokeStyle = 'blue';

        //-- Rellenar
        cuadrado.fill();

        //-- Dibujar el trazo
        cuadrado.stroke()
cuadrado.closePath();

range.oninput = () => {
    range_disp.innerHTML = range.value;
}

range1.oninput = () => {
  range1_disp.innerHTML = range1.value;
}
