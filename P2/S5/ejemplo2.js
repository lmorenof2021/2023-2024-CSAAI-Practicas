console.log("Ejecutando JS...");

const elemento = document.getElementById("elemento");
const boton = document.getElementById("boton");

boton.onclick = () => {
  console.log("Clic!");

  //-- Cambiar color
  if (elemento.style.backgroundColor == "") { //"red"
    elemento.style.backgroundColor = "pink";
}
//-- Si ya tiene color se lo quitamos
    else {
    elemento.style.backgroundColor = ""; //"red"
}  
}

function random_color () {
    //calcula los valores rgb de manera aleatoria por separado
    //combina en un único color hexadecimal valico que es rcolor
    return color
}