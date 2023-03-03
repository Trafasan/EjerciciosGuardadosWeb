'use strict';
// Funciones para el ejercicio 2
let mostrarFormulario = () => document.querySelector('form').style.display = "flex";
let ocultarFormulario = () => document.querySelector('form').style.display = "none";
let validarTextArea = (nodo) => nodo.setCustomValidity((nodo.value == "") ? "Este campo no puede estar vacío" : "");

function addElemento(lista) {
    let elemento = document.createElement('li');
    elemento.appendChild(document.createTextNode(document.form2.texto.value));
    lista.appendChild(elemento);
}

let eliminarElemento = (lista) => (lista.childElementCount>1) ? lista.removeChild(lista.lastElementChild) : alert("No se puede eliminar ningún elemento");

// Funciones para el ejercicio 3
function modificarParrafo(limite, op, tope) {
    let parrafoSeleccionado = document.getElementById(document.form3.id_parrafo.value);
    let sizeParrafo = (parrafoSeleccionado.style.fontSize != "") ? parrafoSeleccionado.style.fontSize : "1em";
    (sizeParrafo!=limite+"em" && sizeParrafo!="calc("+limite+"em)") ?
        parrafoSeleccionado.style.fontSize= "calc("+sizeParrafo+" "+op+" 0.05em)" : alert("Se ha llegado al "+tope);
}

let revertirCambios = () => document.getElementById(document.form3.id_parrafo.value).style.fontSize = "1em";

window.onload = function() {
    // Ejercicio 2
    ocultarFormulario();
    let lista = document.querySelector('ol');
    document.getElementById("add").onclick = mostrarFormulario;
    let areaTexto = document.form2.texto;
    areaTexto.setAttribute("placeholder", "Contenido del nuevo elemento");
    areaTexto.setAttribute("cols", "26");
    areaTexto.setAttribute("rows", "6");
    areaTexto.setCustomValidity("Este campo no puede estar vacío");
    areaTexto.oninput = function() {
        validarTextArea(this);
    }
    document.form2.onsubmit = function(){
        addElemento(lista);
        areaTexto.value = "";
        ocultarFormulario();
        return false;
    }
    document.getElementById("eliminar").onclick = function(){
        eliminarElemento(lista);
    }
    // Ejercicio 3
    let parrafos = document.querySelectorAll("#resultado3 > p");
    for (let i=0; i<parrafos.length; i++) parrafos[i].setAttribute("id", (i+1));
    document.form3.id_parrafo.setAttribute("value", 1);
    document.form3.id_parrafo.setAttribute("min", 1);
    document.form3.id_parrafo.setAttribute("max", parrafos.length);
    document.form3.agrandar.onclick = function() {
        modificarParrafo(2, "+", "máximo");
    }
    document.form3.reducir.onclick = function() {
        modificarParrafo(0.9, "-", "mínimo");
    }
    document.form3.original.onclick = revertirCambios;
}