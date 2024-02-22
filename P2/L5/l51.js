console.log("Ejecutando js...")
//--leer el display del boton 1
const dsp1 = document.getElementById('disp1')

//-- Leer el boton identificado como bt1
//--el id del button en html es bt1 asi q lo ponemos
const btn1 = document.getElementById('bt1')

//--leer el boton 2 identificado como bt2
const btn2 = document.getElementById('bt2')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
btn1.onclick = () => {
  //console.log("Click sobre el botón 1...")
  //dsp1.innerHTML = "Click sobre el botón 1..."
    dsp1.innerHTML += " 1"
    //dsp1.style.backgroundColor = "yellow"

        if (dsp1.style.backgroundColor == "") {
            dsp1.style.backgroundColor = "yellow";
        }
        else {
            dsp1.style.backgroundColor = "";
        }


}

btn2.onclick = () => {
    dsp1.innerHTML += " 2"
    dsp1.style.backgroundColor = "red"
}