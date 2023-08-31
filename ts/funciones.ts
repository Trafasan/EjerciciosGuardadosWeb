function compararStr (str1:string, str2:string):string {
    if (str1.length>str2.length) return `La cadena más larga es ${str1}.`;
    else if (str2.length>str1.length) return `La cadena más larga es ${str2}.`;
    else return "La dos cadenas tienen la misma longitud.";
}
function funciones1() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado1");
    let resultado:HTMLDivElement = document.createElement("div");
    let str1:string|null = window.prompt("Introduzca la primera cadena:");
    let str2:string|null = window.prompt("Introduzca la segunda cadena:");
    let respuesta = (!str1 || !str2 || !isNaN(+str1) || !isNaN(+str2)) ?
    "No se pudo obtener el resultado porque al menos uno de los datos es nulo o un número." : compararStr(str1, str2);
    resultado.appendChild(document.createTextNode(respuesta));
    if (!str1 || !str2 || !isNaN(+str1) || !isNaN(+str2)) resultado.className = "text-danger fw-bold";
    ejercicio.appendChild(resultado);
}

function funciones2() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado2");
    let resultado:HTMLDivElement = document.createElement("div");
    let n:string|null = prompt("Introduzca un número:"), rep:string|null = prompt("Introduzca el número de repeticiones:");
    if (n && rep) {
        let num:number = +n, numeros:number[] = [num];
        for (let i=1; i<+rep; i++) numeros.push(num*=2);
        resultado.appendChild(document.createTextNode(numeros.join(" - ")));
        ejercicio.appendChild(resultado);
  }
  else alert("No se pudo obtener el resultado porque al menos uno de los datos no es un número.")
}

function contarChar(str:string, letra:string) {
    let contador:number = 0;
    for (let i = 0; i<str.length; i++) if (str[i]==letra) contador++;
    return contador;
}
function funciones3() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado3");
    let resultado:HTMLDivElement = document.createElement("div");
    let str:string|null = window.prompt("Introduzca una cadena: ");
    let letra:string|null = window.prompt("Introduzca una letra: ");
    let contador:number;
    let respuesta = (!str || !letra || !isNaN(+str) || !isNaN(+letra)) ?
    "No se pudo obtener el resultado porque al menos uno de los datos es nulo o un número." :
    `La letra ${letra=letra.charAt(0)} aparece ${contador=contarChar(str.toLowerCase(), letra.toLowerCase())}
    ve${contador!=1 ? "ces" : "z"} en la cadena ${str}.`
    resultado.appendChild(document.createTextNode(respuesta));
    if (!str || !letra || !isNaN(+str) || !isNaN(+letra)) resultado.className = "text-danger fw-bold";
    ejercicio.appendChild(resultado);
}

let datosCorrectos = (precio:string, impuesto:string) => precio && impuesto && !isNaN(+precio) && !isNaN(+impuesto);
function funciones4() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado4");
    let resultado:HTMLDivElement = document.createElement("div");
    let nombre:string|null = window.prompt("Introduzca el nombre del producto:");
    if (!nombre || nombre == "") nombre = "Producto genérico";
    let precio:string|null = window.prompt("Introduzca el precio:");
    if (!precio || precio=="") precio = "100";
    let impuesto:string|null = window.prompt("Introduzca el impuesto (sobre 100):");
    if (!impuesto || impuesto=="") impuesto = "21";
    let respuesta = datosCorrectos(precio, impuesto) ? `${nombre}: ${+precio*(1+(+impuesto)/100)}€` :
    "No se pudo obtener el resultado porque al menos uno de los parámetros introducidos no es correcto."
    resultado.appendChild(document.createTextNode(respuesta));
    if (!datosCorrectos(precio, impuesto)) resultado.className = "text-danger fw-bold";
    ejercicio.appendChild(resultado);
}

let coincidencia = (str:string, substr:string) => `${str.indexOf(substr)==-1 ? "No s" : "S"}e ha encontrado coincidencia.`;
function funciones5() {
    let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado5");
    let resultado:HTMLDivElement = document.createElement("div");
    let str:string|null = window.prompt("Introduzca la cadena:");
    let substr:string|null = window.prompt("Introduzca el trozo de cadena a buscar:");
    let respuesta = (!str || !substr || !isNaN(+str) || !isNaN(+substr)) ?
    "No se pudo obtener el resultado porque al menos uno de los datos es nulo o un número." :
    coincidencia(str.toUpperCase(), substr.toUpperCase());
    resultado.appendChild(document.createTextNode(respuesta));
    if (!str || !substr || !isNaN(+str) || !isNaN(+substr)) resultado.className = "text-danger fw-bold";
    ejercicio.appendChild(resultado);
}

window.onload = function() {
    (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]')).onclick = funciones1;
    (<HTMLButtonElement> document.querySelector('button[name="ejercicio2"]')).onclick = funciones2;
    (<HTMLButtonElement> document.querySelector('button[name="ejercicio3"]')).onclick = funciones3;
    (<HTMLButtonElement> document.querySelector('button[name="ejercicio4"]')).onclick = funciones4;
    (<HTMLButtonElement> document.querySelector('button[name="ejercicio5"]')).onclick = funciones5;
}