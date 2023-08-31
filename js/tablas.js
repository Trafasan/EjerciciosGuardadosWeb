"use strict";
function emptyCol(colspan, rowspan) {
    let td = document.createElement("td");
    if (colspan != 0)
        td.setAttribute("colspan", `${colspan}`);
    if (rowspan != 0)
        td.setAttribute("rowspan", `${rowspan}`);
    td.className = "bg-white";
    return td;
}
function crearDiv(texto) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(texto));
    return div;
}
function classCol(asignatura, colspan, rowspan) {
    const profesor = asignatura == "DIW" ? "Jordi" : "Pepe", aula = asignatura == "DIW" ? "LAB1" : "Inf4", background = asignatura == "DIW" ? "warning" : "info";
    let td = document.createElement("td");
    td.className = `bg-${background} text-black`;
    let divAsig = crearDiv(asignatura);
    divAsig.className = `fw-bolder`;
    td.appendChild(divAsig);
    let divProfe = crearDiv(profesor);
    divProfe.className = `fst-italic text-center`;
    td.appendChild(divProfe);
    let divAula = crearDiv(aula);
    divAula.className = `text-end`;
    td.appendChild(divAula);
    if (colspan != 0)
        td.setAttribute("colspan", `${colspan}`);
    if (rowspan != 0)
        td.setAttribute("rowspan", `${rowspan}`);
    if (rowspan > 1)
        td.classList.add("align-middle");
    return td;
}
function firstTr() {
    let tr = document.createElement("tr");
    tr.className = "table-light text-center";
    let th = document.createElement("th");
    th.setAttribute("scope", "col");
    th.setAttribute("colspan", "6");
    th.className = "text-black fw-bold";
    th.appendChild(document.createTextNode("2-DAW"));
    tr.appendChild(th);
    return tr;
}
function secondTr() {
    let tr = document.createElement("tr");
    tr.className = "table-light";
    let th_empty = document.createElement("th");
    th_empty.setAttribute("scope", "col");
    tr.appendChild(th_empty);
    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    for (let dia of diasSemana) {
        let th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.className = "text-black fw-bold";
        th.appendChild(document.createTextNode(dia));
        tr.appendChild(th);
    }
    return tr;
}
function thirdTr() {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.className = "table-light text-secondary text-center align-middle";
    th.appendChild(document.createTextNode("15:00h - 15:55h"));
    tr.appendChild(th);
    tr.appendChild(emptyCol(2, 0));
    tr.appendChild(classCol("DIW", 0, 0));
    tr.appendChild(emptyCol(0, 0));
    tr.appendChild(emptyCol(0, 3));
    return tr;
}
function fourthTr() {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.className = "table-light text-secondary text-center align-middle";
    th.appendChild(document.createTextNode("15:55h - 16:50h"));
    tr.appendChild(th);
    tr.appendChild(classCol("DIW", 0, 2));
    tr.appendChild(emptyCol(0, 2));
    tr.appendChild(emptyCol(0, 0));
    tr.appendChild(classCol("DWC", 0, 0));
    return tr;
}
function fifthTr() {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.className = "table-light text-secondary text-center align-middle";
    th.appendChild(document.createTextNode("16:50h - 17:45h"));
    tr.appendChild(th);
    tr.appendChild(classCol("DIW", 0, 0));
    tr.appendChild(emptyCol(0, 0));
    return tr;
}
function crearTabla() {
    let contenedor = document.getElementById("tablajs");
    let tabla = document.createElement("table");
    tabla.className = "table table-borderless";
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    thead.appendChild(firstTr());
    thead.appendChild(secondTr());
    tbody.appendChild(thirdTr());
    tbody.appendChild(fourthTr());
    tbody.appendChild(fifthTr());
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    contenedor.insertBefore(tabla, contenedor.firstElementChild);
    document.querySelector('button[name="crear"]').setAttribute('hidden', "true");
    document.querySelector('button[name="eliminar"]').removeAttribute('hidden');
    document.getElementById('add').removeAttribute('hidden');
}
function eliminarTabla() {
    let contenedor = document.getElementById("tablajs");
    if (contenedor.firstElementChild)
        contenedor.removeChild(contenedor.firstElementChild);
    document.querySelector('button[name="crear"]').removeAttribute('hidden');
    document.querySelector('button[name="eliminar"]').setAttribute('hidden', "true");
    document.getElementById('add').setAttribute('hidden', "true");
}
function addMargenes() {
    let elementos = document.querySelectorAll("td:not(.bg-warning, .bg-info)");
    for (let elemento of elementos)
        elemento.style.border = "2px solid black";
    document.getElementById('add').setAttribute('hidden', "true");
    document.getElementById('remove').removeAttribute('hidden');
    document.querySelector('button[name="eliminar"]').setAttribute('hidden', "true");
}
function quitarMargenes() {
    for (let elemento of document.querySelectorAll("td:not(.bg-warning, .bg-info)"))
        elemento.removeAttribute("style");
    document.getElementById('add').removeAttribute('hidden');
    document.getElementById('remove').setAttribute('hidden', "true");
    document.querySelector('button[name="eliminar"]').removeAttribute('hidden');
}
window.onload = function () {
    document.querySelector('button[name="eliminar"]').setAttribute('hidden', "true");
    document.querySelector('button[name="crear"]').onclick = crearTabla;
    document.querySelector('button[name="eliminar"]').onclick = eliminarTabla;
    document.getElementById('add').setAttribute('hidden', "true");
    document.getElementById('remove').setAttribute('hidden', "true");
    document.querySelector("#add button").onclick = addMargenes;
    document.querySelector("#remove button").onclick = quitarMargenes;
};
