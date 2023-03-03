'use strict';

let numAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function ejercicio1() {
  let ejercicio = document.getElementById("resultado1");
  let numeros = [], pares = [], impares = [];
  let n = numAleatorio(1, 10);
  let resultado;
  let multiplicaciones = document.createElement("p");
  multiplicaciones.appendChild(document.createTextNode("Las multiplicaciones de los números introducidos con el número aleatorio ("+n+") son las siguientes:"));
  for (let i=0; i<5; i++) {
    multiplicaciones.appendChild(document.createElement("br"));
    numeros[i] = +window.prompt("Introduzca un número ("+(i+1)+"/5): ");
    resultado=n*numeros[i];
    multiplicaciones.appendChild(document.createTextNode("· "+numeros[i]+" x "+n+" = "+resultado));
    (resultado%2==0) ? pares.push(resultado) : impares.push(resultado);
  }
  ejercicio.appendChild(multiplicaciones);
  let nPares = document.createElement("p");
  nPares.appendChild(document.createTextNode("Números pares: "+pares.join(", ")));
  ejercicio.appendChild(nPares);
  let nImpares = document.createElement("p");
  nImpares.appendChild(document.createTextNode("Números impares: "+impares.join(", ")));
  ejercicio.appendChild(nImpares);
}

function ejercicio2() {
  let ejercicio = document.getElementById("resultado2");
  let resultado = document.createElement("p");
  const vocales=['a','e','i','o','u','á','é','í','ó','ú','ü'];
  let c_consonantes=0, c_vocales=0;
  let palabra = window.prompt("Introduzca una palabra: ");
  for (let i=0; i<palabra.length; i++) {
    (vocales.includes(palabra[i].toLowerCase())) ? c_vocales++ : c_consonantes++;
  }
  resultado.appendChild(document.createTextNode("Palabra: "+palabra));
  resultado.appendChild(document.createElement("br"));
  resultado.appendChild(document.createTextNode("Número de consonantes: "+c_consonantes));
  resultado.appendChild(document.createElement("br"));
  resultado.appendChild(document.createTextNode("Número de vocales: "+c_vocales));
  resultado.appendChild(document.createElement("br"));
  resultado.appendChild(document.createTextNode("Longitud de la palabra: "+palabra.length));
  ejercicio.appendChild(resultado);
}

function ejercicio3() {
  let ejercicio = document.getElementById("resultado3");
  let resultado = document.createElement("p");
  const colores = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];
  let color=window.prompt("Introduzca un color:").toLowerCase();
  let respuesta = (colores.includes(color)) ? "" : " no";
  resultado.appendChild(document.createTextNode("El color "+color+respuesta+" se encuentra en el array."));
  ejercicio.appendChild(resultado);
}

window.onload = function() {
  document.querySelector('button[name="ejercicio1"]').onclick = ejercicio1;
  document.querySelector('button[name="ejercicio2"]').onclick = ejercicio2;
  document.querySelector('button[name="ejercicio3"]').onclick = ejercicio3;
}