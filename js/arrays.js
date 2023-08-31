"use strict";
let numAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
function arrays1() {
    let ejercicio = document.getElementById("resultado1");
    let numeros = [], pares = [], impares = [];
    let n = numAleatorio(1, 10);
    let num, mult, mult_string;
    let multiplicaciones = document.createElement("div"), lista = document.createElement("ul");
    multiplicaciones.appendChild(document.createTextNode(`Las multiplicaciones de los números introducidos con el número
    aleatorio (${n}) son las siguientes:`));
    for (let i = 0; i < 5; i++) {
        mult_string = document.createElement("li");
        num = window.prompt(`Introduzca un número (${(i + 1)}/5): `);
        numeros[i] = num ? +num : 0;
        mult_string.appendChild(document.createTextNode(`${numeros[i]} x ${n} = ${mult = n * numeros[i]}`));
        (mult % 2 == 0) ? pares.push(mult) : impares.push(mult);
        lista.appendChild(mult_string);
    }
    multiplicaciones.appendChild(lista);
    ejercicio.appendChild(multiplicaciones);
    let pares_impares = document.createElement("div");
    pares_impares.innerHTML = `<b>Números pares:</b> ${pares.length ? pares.join(", ") : "No hay números pares"}<br>
  <b>Números impares:</b> ${impares.length ? impares.join(", ") : "No hay números impares"}`;
    ejercicio.appendChild(pares_impares);
}
function arrays2() {
    let ejercicio = document.getElementById("resultado2");
    let resultado = document.createElement("div");
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'ü'];
    let c_consonantes = 0, c_vocales = 0;
    let palabra = window.prompt("Introduzca una palabra: ");
    if (palabra) {
        for (let i = 0; i < palabra.length; i++)
            (vocales.includes(palabra[i].toLowerCase())) ? c_vocales++ : c_consonantes++;
        resultado.innerHTML = `<b>Palabra:</b> ${palabra}<br><b>Número de consonantes:</b> ${c_consonantes}<br>
    <b>Número de vocales:</b> ${c_vocales}<br><b>Longitud de la palabra:</b> ${palabra.length}`;
        ejercicio.appendChild(resultado);
    }
}
function arrays3() {
    var _a;
    let ejercicio = document.getElementById("resultado3");
    let resultado = document.createElement("div");
    const colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];
    let color = (_a = window.prompt("Introduzca un color:")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (color) {
        resultado.appendChild(document.createTextNode(`El color ${color}
    ${colores.includes(color) ? "" : "no "}se encuentra en el array.`));
        ejercicio.appendChild(resultado);
    }
}
window.onload = function () {
    document.querySelector('button[name="ejercicio1"]').onclick = arrays1;
    document.querySelector('button[name="ejercicio2"]').onclick = arrays2;
    document.querySelector('button[name="ejercicio3"]').onclick = arrays3;
};
