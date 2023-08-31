let getId = ():string => (<HTMLInputElement> document.querySelector('[type="number"]')).value

function modificarParrafo(op:string) {
    let limite:number = op == "+" ? 2 : 0.9;
    let tope:string = op == "+" ? "máximo" : "mínimo";
    let parrafo:HTMLDivElement = <HTMLDivElement> document.getElementById(getId());
    let size = parrafo.style.fontSize != "" ? parrafo.style.fontSize : "1em";
    size!=limite+"em" && size!="calc("+limite+"em)" ?
        parrafo.style.fontSize= `calc(${size} ${op} 0.05em)` : alert(`Se ha llegado al ${tope}`);
}

let revertirCambios = () => document.getElementById(getId())!.style.fontSize = "1em";

window.onload = function() {
    const pagination:HTMLDivElement = <HTMLDivElement> document.querySelector(".pagination");
    if(window.innerWidth>=768) pagination.classList.add("pagination-lg");
    let input_id:HTMLInputElement = <HTMLInputElement> document.querySelector('[type="number"]');
    let parrafos = document.querySelectorAll("#parrafos > div");
    for (let i=0; i<parrafos.length; i++) parrafos[i].setAttribute("id", `${i+1}`);
    input_id.setAttribute("value", `${1}`);
    input_id.setAttribute("min", `${1}`);
    input_id.setAttribute("max", `${parrafos.length}`);
    (<HTMLButtonElement> document.querySelector(".btn-success")).onclick = function() {
        modificarParrafo("+");
    };
    (<HTMLButtonElement> document.querySelector(".btn-danger")).onclick = function() {
        modificarParrafo("-");
    };
    (<HTMLButtonElement> document.querySelector(".btn-primary")).onclick = revertirCambios;
}