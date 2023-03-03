'use strict';

function cambioColor() {
  let parrafos = document.querySelectorAll("#resultado1 > p");
  for (let i=0; i<parrafos.length; i++) parrafos[i].style.color = (i%2==0) ? "darkcyan" :"darkorchid";
  let revertir = document.querySelector('button[name="revertirEj1"]');
  revertir.removeAttribute('hidden');
  document.querySelector('button[name="ejercicio1"]').setAttribute('hidden', "true");

}

function revertirColor() {
  let parrafos = document.querySelectorAll("#resultado1 > p");
  for (let p of parrafos) p.style.color = "initial";
  let probar = document.querySelector('button[name="ejercicio1"]');
  probar.removeAttribute('hidden');
  document.querySelector('button[name="revertirEj1"]').setAttribute('hidden', "true");

}

function validarPassword(){
  let password = document.getElementById("password");
  let c_password = document.getElementById("c_password");
  let enviar = document.querySelector('button[name="ejercicio2"]');
  
  if (password.value == c_password.value) enviar.removeAttribute('hidden');
  else enviar.setAttribute('hidden', "true");
}

function passwordsIguales() {
  let ejercicio = document.getElementById("resultado2");
  let resultado = document.createElement("p");
  resultado.appendChild(document.createTextNode("Contraseña: "+document.getElementById("password").value));
  ejercicio.appendChild(resultado);
}

function limitarFecha() {
  const mayoriaEdad = 18;
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //Enero es el mes 0
  let yyyy = today.getFullYear() - mayoriaEdad;
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  // Esto es para que el día (o mes) 7, por ejemplo, aparezca como 07
  let older = yyyy + '-' + mm + '-' + dd; // Solo reconoce los valores de fecha en formato yyyy-mm-dd
  document.getElementById("birth_date").setAttribute("value", older);
  document.getElementById("birth_date").setAttribute("max", older);
}

let openPopUp = () => document.getElementById("resultado4").style.display = "block";
let closePopUp = () => document.getElementById("resultado4").style.display = "none";

window.onload = function() {
  document.querySelector('button[name="revertirEj1"]').setAttribute('hidden', "true");
  document.querySelector('button[name="ejercicio1"]').onclick = cambioColor;
  document.querySelector('button[name="revertirEj1"]').onclick = revertirColor;
  document.querySelector('button[name="ejercicio2"]').setAttribute('hidden', "true");
  document.getElementById("c_password").onkeyup = validarPassword;
  document.querySelector('button[name="ejercicio2"]').onclick = passwordsIguales;
  limitarFecha();
  document.querySelector('button[name="ejercicio4"]').onclick = openPopUp;
  document.querySelector("#cerrar").onclick = closePopUp;
}