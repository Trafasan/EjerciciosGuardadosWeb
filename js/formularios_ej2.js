"use strict";
let ocultar = (formulario) => formulario.classList.add("d-none");
let mostrar = (formulario) => formulario.classList.remove("d-none");
function validarTextArea() {
    this.setCustomValidity(this.value == "" ? "Este campo no puede estar vacío" : "");
}
let deleteLi = (lista) => (lista.childElementCount > 1 && lista.lastElementChild) ?
    lista.removeChild(lista.lastElementChild) : alert("No se puede eliminar ningún elemento");
function addLi(lista, texto) {
    let elemento = document.createElement('li');
    elemento.appendChild(document.createTextNode(texto));
    lista.appendChild(elemento);
}
window.onload = function () {
    const pagination = document.querySelector(".pagination");
    if (window.innerWidth >= 768)
        pagination.classList.add("pagination-lg");
    const formulario = document.forms[0];
    let lista = document.querySelector('ol');
    document.querySelector(".btn-success").onclick = function () {
        mostrar(formulario);
    };
    document.querySelector(".btn-danger").onclick = function () {
        deleteLi(lista);
    };
    let areaTexto = document.querySelector("textarea");
    areaTexto.setAttribute("placeholder", "Contenido del nuevo elemento");
    areaTexto.setAttribute("rows", "4");
    areaTexto.setCustomValidity("Este campo no puede estar vacío");
    areaTexto.oninput = validarTextArea;
    formulario.onsubmit = function () {
        addLi(lista, areaTexto.value);
        areaTexto.value = "";
        ocultar(formulario);
        return false;
    };
};
