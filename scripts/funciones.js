'use strict';

function comparaStrings (str1, str2){
   if (str1.length>str2.length) return "La cadena más larga es "+str1+".";
   else if (str2.length>str1.length) return "La cadena más larga es "+str2+".";
   else return "La dos cadenas tienen la misma longitud.";
}
function ejercicio1() {
  let ejercicio = document.getElementById("resultado1");
  let resultado = document.createElement("p");
  let str1 = window.prompt("Introduzca la primera cadena:");
  let str2 = window.prompt("Introduzca la segunda cadena:");
  let respuesta;
  if (!isNaN(str1) || !isNaN(str2)) {
    respuesta = "No se pudo obtener el resultado porque al menos uno de los parámetros introducidos es un número."
    resultado.style.color = "crimson";
  }
  else respuesta = comparaStrings(str1, str2);
  resultado.appendChild(document.createTextNode(respuesta));
  ejercicio.appendChild(resultado);
}

function ejercicio2() {
  let ejercicio = document.getElementById("resultado2");
  let resultado = document.createElement("p");
  let n = +prompt("Inserte un número:");
  let rep = +prompt("Inserte el número de repeticiones:");
  let numeros = [n];
  for (let i=1; i<rep; i++) numeros.push(n*=2);
  resultado.appendChild(document.createTextNode(numeros.join(" - ")));
  ejercicio.appendChild(resultado);
}

function contadorCaracter(str, letra) {
  let contador = 0;
  for (let i = 0; i<str.length; i++) if (str[i]==letra) contador++;
  return contador;
}
function ejercicio3() {
  let ejercicio = document.getElementById("resultado3");
  let resultado = document.createElement("p");
  let str=window.prompt("Introduzca una cadena: ").toLowerCase();
  let letra=window.prompt("Inserte una letra: ").toLowerCase();
  let respuesta;
  if (!isNaN(str) || !isNaN(letra)) {
    respuesta = "No se pudo obtener el resultado porque al menos uno de los parámetros introducidos es un número."
    resultado.style.color = "crimson";
  }
  else {
    let contador = contadorCaracter(str,letra);
    respuesta = "La letra "+letra+" aparece "+contador+" veces en la cadena "+str+".";
  }
  resultado.appendChild(document.createTextNode(respuesta));
  ejercicio.appendChild(resultado);
}

let datosCorrectos = (precio, impuesto) => (isNaN(+precio) || isNaN(+impuesto)) ? false : true;

function ejercicio4() {
  let ejercicio = document.getElementById("resultado4");
  let resultado = document.createElement("p");
  let nombre = window.prompt("Introduzca el nombre del producto:");
  if(nombre==""||nombre==null) nombre="Producto genérico";
  let precio = window.prompt("Introduzca el precio:");
  if(precio==""||precio==null) precio=100;
  let impuesto = window.prompt("Introduzca el impuesto (sobre 100):");
  if(impuesto==""||impuesto==null) impuesto=21;
  let respuesta;
  if (datosCorrectos(precio, impuesto)) respuesta = nombre+": "+(precio*(1+impuesto/100))+"€";
  else {
    respuesta = "No se pudo obtener el resultado porque al menos uno de los parámetros introducidos no es correcto."
    resultado.style.color = "crimson";
  }
  resultado.appendChild(document.createTextNode(respuesta));
  ejercicio.appendChild(resultado);
}

let coincidencia = (string, trozo) => ((string.indexOf(trozo)==-1) ? "No s" : "S")+"e ha encontrado coincidencia."
function ejercicio5() {
  let ejercicio = document.getElementById("resultado5");
  let resultado = document.createElement("p");
  let string = window.prompt("Inserte la cadena:").toUpperCase();
  let trozo = window.prompt("Inserte el trozo de cadena a buscar:").toUpperCase();
  let respuesta;
  if (!isNaN(string) || !isNaN(trozo)) {
    respuesta = "No se pudo obtener el resultado porque al menos uno de los parámetros introducidos es un número o está vacío."
    resultado.style.color = "crimson";
  }
  else respuesta = coincidencia(string, trozo);
  resultado.appendChild(document.createTextNode(respuesta));
  ejercicio.appendChild(resultado);
}

window.onload = function() {
  document.querySelector('button[name="ejercicio1"]').onclick = ejercicio1;
  document.querySelector('button[name="ejercicio2"]').onclick = ejercicio2;
  document.querySelector('button[name="ejercicio3"]').onclick = ejercicio3;
  document.querySelector('button[name="ejercicio4"]').onclick = ejercicio4;
  document.querySelector('button[name="ejercicio5"]').onclick = ejercicio5;
}