"use strict";
let getId = () => document.querySelector('[type="number"]').value;
function modificarParrafo(op) {
    let limite = op == "+" ? 2 : 0.9;
    let tope = op == "+" ? "máximo" : "mínimo";
    let parrafo = document.getElementById(getId());
    let size = parrafo.style.fontSize != "" ? parrafo.style.fontSize : "1em";
    size != limite + "em" && size != "calc(" + limite + "em)" ?
        parrafo.style.fontSize = `calc(${size} ${op} 0.05em)` : alert(`Se ha llegado al ${tope}`);
}
let revertirCambios = () => document.getElementById(getId()).style.fontSize = "1em";
window.onload = function () {
    const pagination = document.querySelector(".pagination");
    if (window.innerWidth >= 768)
        pagination.classList.add("pagination-lg");
    let input_id = document.querySelector('[type="number"]');
    let parrafos = document.querySelectorAll("#parrafos > div");
    for (let i = 0; i < parrafos.length; i++)
        parrafos[i].setAttribute("id", `${i + 1}`);
    input_id.setAttribute("value", `${1}`);
    input_id.setAttribute("min", `${1}`);
    input_id.setAttribute("max", `${parrafos.length}`);
    document.querySelector(".btn-success").onclick = function () {
        modificarParrafo("+");
    };
    document.querySelector(".btn-danger").onclick = function () {
        modificarParrafo("-");
    };
    document.querySelector(".btn-primary").onclick = revertirCambios;
};
