
function emptyCol(colspan:number, rowspan:number) {
    let td:HTMLElement = document.createElement("td");
    if (colspan != 0) td.setAttribute("colspan", `${colspan}`);
    if (rowspan != 0) td.setAttribute("rowspan", `${rowspan}`);
    td.className = "bg-white";
    return td;
}
  
function crearDiv(texto:string):HTMLDivElement {
    let div:HTMLDivElement = document.createElement("div");
    div.appendChild(document.createTextNode(texto));
    return div;
}
  
function classCol(asignatura:string, colspan:number, rowspan:number) {
    const profesor:string = asignatura == "DIW" ? "Jordi" : "Pepe", aula:string = asignatura == "DIW" ? "LAB1" : "Inf4",
    background:string = asignatura == "DIW" ? "warning" : "info";
    let td:HTMLElement = document.createElement("td");
    td.className = `bg-${background} text-black`;
    let divAsig:HTMLDivElement = crearDiv(asignatura);
    divAsig.className = `fw-bolder`;
    td.appendChild(divAsig);
    let divProfe:HTMLDivElement = crearDiv(profesor);
    divProfe.className = `fst-italic text-center`;
    td.appendChild(divProfe);
    let divAula = crearDiv(aula);
    divAula.className = `text-end`;
    td.appendChild(divAula);
    if (colspan != 0) td.setAttribute("colspan", `${colspan}`);
    if (rowspan != 0) td.setAttribute("rowspan", `${rowspan}`);
    if (rowspan > 1) td.classList.add("align-middle");
    return td;
}
  
function firstTr():HTMLElement {
    let tr:HTMLElement = document.createElement("tr");
    tr.className = "table-light text-center";
    let th:HTMLElement = document.createElement("th");
    th.setAttribute("scope", "col");
    th.setAttribute("colspan", "6");
    th.className = "text-black fw-bold";
    th.appendChild(document.createTextNode("2-DAW"));
    tr.appendChild(th);
    return tr;
}
  
function secondTr() {
    let tr:HTMLElement = document.createElement("tr");
    tr.className = "table-light";
    let th_empty:HTMLElement = document.createElement("th");
    th_empty.setAttribute("scope", "col");
    tr.appendChild(th_empty);
    let diasSemana:string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    for (let dia of diasSemana) {
      let th:HTMLElement = document.createElement("th");
      th.setAttribute("scope", "col");
      th.className = "text-black fw-bold";
      th.appendChild(document.createTextNode(dia));
      tr.appendChild(th);
    }
    return tr;
}

function thirdTr() {
    let tr:HTMLElement = document.createElement("tr");
    let th:HTMLElement = document.createElement("th");
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
    let tr:HTMLElement = document.createElement("tr");
    let th:HTMLElement = document.createElement("th");
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
    let tr:HTMLElement = document.createElement("tr");
    let th:HTMLElement = document.createElement("th");
    th.setAttribute("scope", "row");
    th.className = "table-light text-secondary text-center align-middle";
    th.appendChild(document.createTextNode("16:50h - 17:45h"));
    tr.appendChild(th);
    tr.appendChild(classCol("DIW", 0, 0));
    tr.appendChild(emptyCol(0, 0));
    return tr;
}
  
function crearTabla() {
    let contenedor:HTMLDivElement = <HTMLDivElement> document.getElementById("tablajs");
    let tabla:HTMLTableElement = document.createElement("table");
    tabla.className = "table table-borderless";
    let thead:HTMLElement = document.createElement("thead");
    let tbody:HTMLElement = document.createElement("tbody");
    thead.appendChild(firstTr());
    thead.appendChild(secondTr());
    tbody.appendChild(thirdTr());
    tbody.appendChild(fourthTr());
    tbody.appendChild(fifthTr());
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    contenedor.insertBefore(tabla, contenedor.firstElementChild);
    (<HTMLButtonElement> document.querySelector('button[name="crear"]')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).removeAttribute('hidden');
    (<HTMLButtonElement> document.getElementById('add')).removeAttribute('hidden');
}
  
function eliminarTabla() {
    let contenedor:HTMLDivElement = <HTMLDivElement> document.getElementById("tablajs");
    if(contenedor.firstElementChild) contenedor.removeChild(contenedor.firstElementChild);
    (<HTMLButtonElement> document.querySelector('button[name="crear"]')).removeAttribute('hidden');
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.getElementById('add')).setAttribute('hidden', "true");
}
  
function addMargenes() {
    for (let elemento of document.querySelectorAll("td")) elemento.style.border = "2px solid black";
    (<HTMLButtonElement> document.getElementById('add')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.getElementById('remove')).removeAttribute('hidden');
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).setAttribute('hidden', "true");
}
  
function quitarMargenes() {
    for (let elemento of document.querySelectorAll("td")) elemento.style.border = "initial";
    let elementos:string = "table, thead, th, td:first-child, td.bg-warning, td.bg-info";
    let elemento_borde:NodeListOf<HTMLTableCellElement> = document.querySelectorAll(elementos);
    for (let elemento of elemento_borde) elemento.style.border = "2px solid black";
    (<HTMLButtonElement> document.getElementById('add')).removeAttribute('hidden');
    (<HTMLButtonElement> document.getElementById('remove')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).removeAttribute('hidden');
}
  
window.onload = function() {
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.querySelector('button[name="crear"]')).onclick = crearTabla;
    (<HTMLButtonElement> document.querySelector('button[name="eliminar"]')).onclick = eliminarTabla;
    (<HTMLButtonElement> document.getElementById('add')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.getElementById('remove')).setAttribute('hidden', "true");
    (<HTMLButtonElement> document.querySelector("#add button")).onclick = addMargenes;
    (<HTMLButtonElement> document.querySelector("#remove button")).onclick = quitarMargenes;
}