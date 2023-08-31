function changeColor() {
    let parrafos:NodeListOf<HTMLDivElement> = document.querySelectorAll("#resultado1 > div");
    let active:string|null = (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]'))
    .getAttribute('hidden');
    if (active) {
        for (let i=0; i<parrafos.length; i++) parrafos[i].classList.remove(`text-${i%2 == 0 ? "primary" :"secondary"}`);
        (<HTMLButtonElement> document.querySelector('button[name="revertir"]')).setAttribute('hidden', "true");
        (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]')).removeAttribute('hidden');
    }
    else {
        for (let i=0; i<parrafos.length; i++) parrafos[i].classList.add(`text-${i%2 == 0 ? "primary" :"secondary"}`);
        (<HTMLButtonElement> document.querySelector('button[name="revertir"]')).removeAttribute('hidden');
        (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]')).setAttribute('hidden', "true");
    }
}

function passwordsIguales(){
  let password:HTMLInputElement = <HTMLInputElement> document.querySelector('input[name="password"]');
  let c_password:HTMLInputElement = <HTMLInputElement> document.querySelector('input[name="c_password"]');
  let enviar:HTMLButtonElement = <HTMLButtonElement> document.querySelector('button[name="ejercicio2"]');
  if (password.value == c_password.value) enviar.removeAttribute('hidden');
  else enviar.setAttribute('hidden', "true");
}

function getPassword() {
  let ejercicio:HTMLDivElement = <HTMLDivElement> document.getElementById("resultado2");
  let resultado:HTMLDivElement = document.createElement("div");
  let password:HTMLInputElement = <HTMLInputElement> document.querySelector('input[name="password"]');
  resultado.innerHTML = `<b>Contraseña:</b> ${password.value}`;
  ejercicio.appendChild(resultado);
}

function limitarFecha() {
  const mayoriaEdad:number = 18;
  let today:Date = new Date();
  today.setFullYear(today.getFullYear() - mayoriaEdad);
  let older:string = today.toISOString().slice(0, 10);
  let input_fecha:HTMLInputElement = <HTMLInputElement> document.querySelector('input[name="birth_date"]');
  input_fecha.setAttribute("value", older);
  input_fecha.setAttribute("max", older);
}

window.onload = function() {
  (<HTMLButtonElement> document.querySelector('button[name="revertir"]')).setAttribute('hidden', "true");
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio1"]')).onclick = changeColor;
  (<HTMLButtonElement> document.querySelector('button[name="revertir"]')).onclick = changeColor;
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio2"]')).setAttribute('hidden', "true");
  (<HTMLButtonElement> document.querySelector('input[name="c_password"]')).onkeyup = passwordsIguales;
  (<HTMLButtonElement> document.querySelector('button[name="ejercicio2"]')).onclick = getPassword;
  limitarFecha();
}