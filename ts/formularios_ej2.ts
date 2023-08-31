let ocultar = (formulario:HTMLElement) => formulario.classList.add("d-none");

let mostrar = (formulario:HTMLElement) => formulario.classList.remove("d-none");

function validarTextArea(this:any) {
    this.setCustomValidity(this.value == ""?"Este campo no puede estar vacío":"");
}

let deleteLi = (lista:HTMLOListElement) => (lista.childElementCount>1 && lista.lastElementChild) ?
lista.removeChild(lista.lastElementChild) : alert("No se puede eliminar ningún elemento");

function addLi(lista:HTMLOListElement, texto:string) {
    let elemento:HTMLLIElement = document.createElement('li');
    elemento.appendChild(document.createTextNode(texto));
    lista.appendChild(elemento);
}

window.onload = function() {
    const pagination:HTMLDivElement = <HTMLDivElement> document.querySelector(".pagination");
    if(window.innerWidth>=768) pagination.classList.add("pagination-lg");
    const formulario = document.forms[0];
    let lista:HTMLOListElement = <HTMLOListElement> document.querySelector('ol');
    (<HTMLButtonElement>document.querySelector(".btn-success")).onclick = function() {
        mostrar(formulario);
    };
    (<HTMLButtonElement> document.querySelector(".btn-danger")).onclick = function(){
        deleteLi(lista);
    };
    let areaTexto:HTMLTextAreaElement = <HTMLTextAreaElement> document.querySelector("textarea");
    areaTexto.setAttribute("placeholder", "Contenido del nuevo elemento");
    areaTexto.setAttribute("rows", "4");
    areaTexto.setCustomValidity("Este campo no puede estar vacío");
    areaTexto.oninput = validarTextArea;
    formulario.onsubmit = function(){
        addLi(lista, areaTexto.value);
        areaTexto.value = "";
        ocultar(formulario);
        return false;
    }
}