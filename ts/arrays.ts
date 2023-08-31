let numAleatorio = (min:number, max:number):number => Math.floor(Math.random() * (max - min + 1) + min);

function arrays1() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado1");
    let numeros:number[] = [], pares:number[] = [], impares:number[] = [];
    let n:number = numAleatorio(1, 10);
    let num:string|null, mult:number, mult_string:HTMLLIElement;
    let multiplicaciones:HTMLDivElement = document.createElement("div"), lista:HTMLUListElement = document.createElement("ul");
    multiplicaciones.appendChild(document.createTextNode(`Las multiplicaciones de los números introducidos con el número
    aleatorio (${n}) son las siguientes:`));
    for (let i = 0; i < 5; i++) {
        mult_string = document.createElement("li");
        num = window.prompt(`Introduzca un número (${(i + 1)}/5): `)
        numeros[i] = num ? +num : 0;
        mult_string.appendChild(document.createTextNode(`${numeros[i]} x ${n} = ${mult = n * numeros[i]}`));
        (mult % 2 == 0) ? pares.push(mult) : impares.push(mult);
        lista.appendChild(mult_string);
    }
    multiplicaciones.appendChild(lista);
    ejercicio.appendChild(multiplicaciones);
    let pares_impares:HTMLDivElement = document.createElement("div");
    pares_impares.innerHTML = `<b>Números pares:</b> ${pares.length ? pares.join(", ") : "No hay números pares"}<br>
  <b>Números impares:</b> ${impares.length ? impares.join(", ") : "No hay números impares"}`;
    ejercicio.appendChild(pares_impares);
}
function arrays2() {
  let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado2");
  let resultado:HTMLDivElement = document.createElement("div");
  const vocales:string[] = ['a','e','i','o','u','á','é','í','ó','ú','ü'];
  let c_consonantes:number = 0, c_vocales:number = 0;
  let palabra:string|null = window.prompt("Introduzca una palabra: ");
  if (palabra) {
    for (let i=0; i<palabra.length; i++) (vocales.includes(palabra[i].toLowerCase())) ? c_vocales++ : c_consonantes++;
    resultado.innerHTML = `<b>Palabra:</b> ${palabra}<br><b>Número de consonantes:</b> ${c_consonantes}<br>
    <b>Número de vocales:</b> ${c_vocales}<br><b>Longitud de la palabra:</b> ${palabra.length}`;
    ejercicio.appendChild(resultado);
  }
}

function arrays3() {
  let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado3");
  let resultado:HTMLDivElement = document.createElement("div");
  const colores:string[] = ['azul', 'amarillo', 'rojo', 'verde', 'rosa'];
  let color = window.prompt("Introduzca un color:")?.toLowerCase();
  if (color) {
    resultado.appendChild(document.createTextNode(`El color ${color}
    ${colores.includes(color) ? "" : "no "}se encuentra en el array.`));
    ejercicio.appendChild(resultado);
  }
}

window.onload = function() {
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]')).onclick = arrays1;
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio2"]')).onclick = arrays2;
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio3"]')).onclick = arrays3;
}