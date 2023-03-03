'use strict';

function columnaVacia(colspan, rowspan) {
  let td = document.createElement("td");
  if (colspan != 0) td.setAttribute("colspan", colspan);
  if (rowspan != 0) td.setAttribute("rowspan", rowspan);
  return td;
}

function divColumna(texto) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(texto));
  return div;
}

function columnaClase(asignatura, profesor, aula, colspan, rowspan) {
  let td = document.createElement("td");
  td.setAttribute("class", asignatura);
  td.appendChild(divColumna(asignatura));
  let divCentrado = divColumna(profesor);
  divCentrado.setAttribute("class", "middle-text");
  td.appendChild(divCentrado);
  let divAlineado = divColumna(aula);
  divAlineado.setAttribute("class", "right-text");
  td.appendChild(divAlineado);
  if (colspan != 0) td.setAttribute("colspan", colspan);
  if (rowspan != 0) td.setAttribute("rowspan", rowspan);
  return td;
}

function crearPrimeraFila() {
  let th = document.createElement("th");
  th.setAttribute("colspan", 6);
  th.appendChild(document.createTextNode("2-DAW"));
  return document.createElement("tr").appendChild(th);
}

function crearSegundaFila() {
  let tr = document.createElement("tr");
  tr.appendChild(document.createElement("th"));
  let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  let th;
  for (let dia of diasSemana) {
    th = document.createElement("th");
    th.setAttribute("class", "align-left");
    th.appendChild(document.createTextNode(dia));
    tr.appendChild(th);
  }
  return tr;
}

function crearTerceraFila() {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.appendChild(document.createTextNode("15:00h - 15:55h"));
  tr.appendChild(td);
  tr.appendChild(columnaVacia(2, 0));
  tr.appendChild(columnaClase("DIW", "Jordi", "LAB1", 0, 0));
  tr.appendChild(columnaVacia(0, 0));
  tr.appendChild(columnaVacia(0, 3));
  return tr;
}

function crearCuartaFila() {
  let tr = document.createElement("tr");
  let td = document.createElement("td");
  td.appendChild(document.createTextNode("15:55h - 16:50h"));
  tr.appendChild(td);
  tr.appendChild(columnaClase("DIW", "Jordi", "LAB1", 0, 2));
  tr.appendChild(columnaVacia(0, 2));
  tr.appendChild(columnaVacia(0, 0));
  tr.appendChild(columnaClase("DWC", "Pepe", "Inf4", 0, 0));
  return tr;
}

function crearQuintaFila() {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.appendChild(document.createTextNode("16:50h - 17:45h"));
  tr.appendChild(td1);
  tr.appendChild(columnaClase("DIW", "Jordi", "LAB1", 0, 0));
  tr.appendChild(columnaVacia(0, 0));
  return tr;
}

function crearTabla() {
  let contenedor = document.querySelector("#resultado1");
  let tabla = document.createElement("table");
  tabla.appendChild(crearPrimeraFila());
  tabla.appendChild(crearSegundaFila());
  tabla.appendChild(crearTerceraFila());
  tabla.appendChild(crearCuartaFila());
  tabla.appendChild(crearQuintaFila());
  contenedor.insertBefore(tabla, contenedor.firstElementChild);
  document.getElementById("crear").setAttribute('hidden', "true");
  document.getElementById("eliminar").removeAttribute('hidden');
  document.getElementById("add").removeAttribute('hidden');
}

function eliminarTabla() {
  document.querySelector("#resultado1").removeChild(document.querySelector("#resultado1").firstElementChild);
  document.getElementById("eliminar").setAttribute('hidden', "true");
  document.getElementById("crear").removeAttribute('hidden');
  document.getElementById("add").setAttribute('hidden', "true");
}

function addMargenes() {
  for (let elemento of document.querySelectorAll("td")) elemento.style.border = "2px solid black";
  document.getElementById("add").setAttribute('hidden', "true");
  document.getElementById("quitar").removeAttribute('hidden');
  document.getElementById("eliminar").setAttribute('hidden', "true");
}

function quitarMargenes() {
  for (let elemento of document.querySelectorAll("td")) elemento.style.border = "initial";
  for (let elemento of document.querySelectorAll("td:first-child, .DWC, .DIW")) elemento.style.border = "2px solid black";
  document.getElementById("quitar").setAttribute('hidden', "true");
  document.getElementById("add").removeAttribute('hidden');
  document.getElementById("eliminar").removeAttribute('hidden');
}

window.onload = function() {
  document.getElementById("eliminar").setAttribute('hidden', "true");
  document.getElementById("crear").onclick = crearTabla;
  document.getElementById("eliminar").onclick = eliminarTabla;
  document.getElementById("add").setAttribute('hidden', "true");
  document.getElementById("quitar").setAttribute('hidden', "true");
  document.querySelector("#add button").onclick = addMargenes;
  document.querySelector("#quitar button").onclick = quitarMargenes;
}