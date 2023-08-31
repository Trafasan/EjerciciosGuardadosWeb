"use strict";
function changeColor() {
    let parrafos = document.querySelectorAll("#resultado1 > div");
    let active = document.querySelector('button[name="ejercicio1"]')
        .getAttribute('hidden');
    if (active) {
        for (let i = 0; i < parrafos.length; i++)
            parrafos[i].classList.remove(`text-${i % 2 == 0 ? "primary" : "secondary"}`);
        document.querySelector('button[name="revertir"]').setAttribute('hidden', "true");
        document.querySelector('button[name="ejercicio1"]').removeAttribute('hidden');
    }
    else {
        for (let i = 0; i < parrafos.length; i++)
            parrafos[i].classList.add(`text-${i % 2 == 0 ? "primary" : "secondary"}`);
        document.querySelector('button[name="revertir"]').removeAttribute('hidden');
        document.querySelector('button[name="ejercicio1"]').setAttribute('hidden', "true");
    }
}
function passwordsIguales() {
    let password = document.querySelector('input[name="password"]');
    let c_password = document.querySelector('input[name="c_password"]');
    let enviar = document.querySelector('button[name="ejercicio2"]');
    if (password.value == c_password.value)
        enviar.removeAttribute('hidden');
    else
        enviar.setAttribute('hidden', "true");
}
function getPassword() {
    let ejercicio = document.getElementById("resultado2");
    let resultado = document.createElement("div");
    let password = document.querySelector('input[name="password"]');
    resultado.innerHTML = `<b>Contraseña:</b> ${password.value}`;
    ejercicio.appendChild(resultado);
}
function limitarFecha() {
    const mayoriaEdad = 18;
    let today = new Date();
    today.setFullYear(today.getFullYear() - mayoriaEdad);
    let older = today.toISOString().slice(0, 10);
    let input_fecha = document.querySelector('input[name="birth_date"]');
    input_fecha.setAttribute("value", older);
    input_fecha.setAttribute("max", older);
}
window.onload = function () {
    document.querySelector('button[name="revertir"]').setAttribute('hidden', "true");
    document.querySelector('button[name="ejercicio1"]').onclick = changeColor;
    document.querySelector('button[name="revertir"]').onclick = changeColor;
    document.querySelector('button[name="ejercicio2"]').setAttribute('hidden', "true");
    document.querySelector('input[name="c_password"]').onkeyup = passwordsIguales;
    document.querySelector('button[name="ejercicio2"]').onclick = getPassword;
    limitarFecha();
};
