'use strict';

let validarCampo = (nodo, texto) => nodo.setCustomValidity((nodo.value == "") ? texto : "");

function validarNif() { // En vez de esta función, se podría implementar el pattern "[0-9]{8}[A-Z]{1}"
  if (this.value == "") this.setCustomValidity("El campo del NIF no puede estar vacío");
  else if (this.value.length != 9) this.setCustomValidity("El NIF introducido no es válido");
  else {
    let parteNum = this.value.substr(0, 8);
    let letra = this.value.charAt(8);
    if(isNaN(+parteNum)) this.setCustomValidity("La parte numérica del NIF no es válida");
    else if (letra.search("[A-Z]")==-1) this.setCustomValidity("La letra del NIF no es válida.");
    /* Se utilizó una expresión regular para comprobar que la letra fuese una letra:
      · [A-Z] se refiere a todas las letras mayúsculas sin signos ortográficos
    */
    else this.setCustomValidity("");
  }
}

function formatearFecha(fecha, formateo) {
  let dd = (fecha.getDate() < 10) ?'0' + fecha.getDate() : fecha.getDate();
  let mm = (fecha.getMonth()+1 < 10) ? '0' + (fecha.getMonth()+1) : fecha.getMonth()+1;
  let yyyy = fecha.getFullYear();
  switch (formateo) {
    case "yyyy/mm/dd": return yyyy + '-' + mm + '-' + dd;
    case "dd/mm/yyyy": return dd + '-' + mm + '-' + yyyy;
  }
}

function validarCampoNumerico(nodo, nombreNodo, longitud) {
  if (nodo.value == "") nodo.setCustomValidity("El campo del "+nombreNodo+" no puede estar vacío");
  else if (nodo.value.length != longitud) nodo.setCustomValidity("El "+nombreNodo+" no es válido");
  else nodo.setCustomValidity((isNaN(+nodo.value)) ? "Se debe introducir un número en este campo" : "");
}

let validarGenero = () => document.querySelector('[value="nc"]').setCustomValidity((this.value == "") ? "Debe elegir una opción" : "");

let obtenerPreferencias = (nodo, colores) => (nodo.checked) ? colores.push(nodo.value) : colores.splice(colores.indexOf(nodo.value), 1);

function validarPassword() {
  let password = document.form.password;
  let c_password =  document.form.c_password;
  if (password.value == "") password.setCustomValidity("El campo de la contraseña no puede estar vacío");
  else if (password.value.length<5) password.setCustomValidity("La contraseña debe constar de 5 caracteres mínimo");
  else {
    if (password.value.search("[A-Za-z]")==-1 || password.value.search("\\d")==-1)
      password.setCustomValidity("La contraseña debe ser una combinación de letras y números");
    /* Se utilizaron dos expresiones regulares para comprobar que la contraseña fuese una combinación de letras y números:
      · [A-Za-z] se refiere a todas las letras sin signos ortográficos, tanto mayúsculas como minúsculas
      · \d se refiere a los números
    */
    else if (password.value != c_password.value) c_password.setCustomValidity("Este campo debe ser igual que el anterior");
    else {
      password.setCustomValidity("");
      c_password.setCustomValidity("");
    }
  }
}

function parrafoCampo(tipoCampo, texto) {
  let campo = document.createElement("p");
  let datoCampo = document.createElement("b");
  datoCampo.appendChild(document.createTextNode(tipoCampo+":"));
  campo.appendChild(datoCampo);
  campo.appendChild(document.createTextNode(" "+texto));
  return campo;
}

function obtenerPais(valorNodo){
  switch(valorNodo) {
    case "esp": return "España";
      case "fra": return "Francia";
      case "ale": return "Alemania";
      case "uk": return "Reino Unido";
      case "irl": return "Irlanda";
      case "pol": return "Polonia";
  }
}

function obtenerGenero(valorNodo){
  switch(valorNodo) {
    case "nc": return "Prefiere no responder";
      case "m": return "Masculino";
      case "f": return "Femenino";
  }
}


function datosFormulario(nodo, colores) {
  let ejercicio = document.querySelector("#resultado1 div");

  ejercicio.appendChild(parrafoCampo("Nombre", nodo.name.value+" "+nodo.surname1.value+
    ((nodo.surname2.value=="")?"":" "+nodo.surname2.value)));
  ejercicio.appendChild(parrafoCampo("Dirección", nodo.address.value));
  ejercicio.appendChild(parrafoCampo("NIF", nodo.nif.value));
  ejercicio.appendChild(parrafoCampo("Fecha de nacimiento", formatearFecha(new Date(nodo.date_of_birth.value), "dd/mm/yyyy")));
  ejercicio.appendChild(parrafoCampo("Código postal", nodo.postal_code.value));
  ejercicio.appendChild(parrafoCampo("País", obtenerPais(nodo.country.value)));
  ejercicio.appendChild(parrafoCampo("Género", obtenerGenero(nodo.gender.value)));
  ejercicio.appendChild(parrafoCampo("Preferencias", colores.join(", ")));
  ejercicio.appendChild(parrafoCampo("Teléfono", nodo.phone_number.value));
  ejercicio.appendChild(parrafoCampo("Correo electrónico", nodo.mail.value));
  ejercicio.appendChild(parrafoCampo("Contraseña", nodo.password.value));
}

window.onload = function() {
  let formulario = document.form;
  // Para el nombre:
  formulario.name.setCustomValidity((formulario.name.value == "") ? "El campo del nombre no puede estar vacío" : "");
  formulario.name.setAttribute("size", "10");
  formulario.name.oninput = function() {
    validarCampo(this, "El campo del nombre no puede estar vacío");
  };
  // Para el primer apellido:
  formulario.surname1.setCustomValidity((formulario.surname1.value == "") ? "El campo del primer apellido no puede estar vacío" : "");
  formulario.surname1.setAttribute("size", "10");
  formulario.surname1.oninput = function() {
    validarCampo(this, "El campo del primer apellido no puede estar vacío");
  };
  // Para el segundo apellido:
  formulario.surname2.setAttribute("size", "10");
  // Para la dirección:
  formulario.address.setCustomValidity((formulario.address.value == "") ? "El campo de la dirección no puede estar vacío" : "");
  formulario.address.setAttribute("placeholder", "C/ San Francisco, 61");
  formulario.address.oninput = function() {
    validarCampo(this, "El campo de la dirección no puede estar vacío");
  };
  // Para el NIF:
  formulario.nif.setCustomValidity((formulario.nif.value == "") ? "El campo del NIF no puede estar vacío" : "");
  formulario.nif.setAttribute("size", "6");
  formulario.nif.setAttribute("placeholder", "12345678A");
  formulario.nif.oninput = validarNif;
  // Para la fecha de nacimiento:
  formulario.date_of_birth.setCustomValidity((this.value == "") ? "El campo de la fecha de nacimiento no puede estar vacío" : "");
  formulario.date_of_birth.setAttribute("max", formatearFecha(new Date(), "yyyy/mm/dd"));
  formulario.date_of_birth.oninput = function() {
    validarCampo(this, "El campo de la fecha de nacimiento no puede estar vacío");
  };
  // Para el código postal:
  formulario.postal_code.setCustomValidity((formulario.postal_code.value == "") ? "El campo del código postal no puede estar vacío" : "");
  formulario.postal_code.setAttribute("size", "2");
  formulario.postal_code.setAttribute("placeholder", "03001");
  formulario.postal_code.oninput = function() {
    validarCampoNumerico(this, "código postal", 5);
  };
  // Para el país:
  formulario.country.querySelector('[value=""]').hidden = true;
  formulario.country.setCustomValidity((formulario.country.value == "") ? "Debe elegir un país" : "");
  formulario.country.oninput = function() {
    validarCampo(this, "Debe elegir un país");
  };
  // Para el género:
  formulario.querySelector('[value="nc"]').setCustomValidity(( formulario.querySelector('[value="nc"]').value == "") ? "Debe elegir una opción" : "");
  for (let opcion of formulario.gender) opcion.onclick = validarGenero;
  // Para las preferencias:
  let colores = new Array();
  for (let opcion of formulario.colors) opcion.onclick = function(){
    obtenerPreferencias(this, colores);
  };
  // Para el teléfono:
  formulario.phone_number.setCustomValidity((formulario.phone_number.value == "") ? "El campo del teléfono no puede estar vacío" : "");
  formulario.phone_number.setAttribute("size", "6");
  formulario.phone_number.setAttribute("placeholder", "987654321");
  formulario.phone_number.oninput = function() {
    validarCampoNumerico(this, "teléfono", 9);
  };
  // Para el correo electrónico:
  formulario.mail.setCustomValidity((formulario.mail.value == "") ? "El campo del correo electrónico no puede estar vacío" : "");
  formulario.mail.setAttribute("placeholder", "ejemplo@gmail.com");
  formulario.mail.oninput = function() {
    validarCampo(this, "El campo del correo electrónico no puede estar vacío");
    // Como se ha declarado este input de tipo email, se han implementado automáticamente otras validaciones
  };
  // Para la contraseña:
  formulario.password.setCustomValidity("El campo de la contraseña no puede estar vacío");
  formulario.password.setAttribute("placeholder", "Contraseña");
  formulario.password.setAttribute("autocomplete", "off");
  formulario.password.oninput = validarPassword;
  // Para confirmar la contraseña:
  formulario.c_password.setCustomValidity("Este campo debe ser igual que el anterior");
  formulario.c_password.setAttribute("placeholder", "Contraseña");
  formulario.c_password.setAttribute("autocomplete", "off");
  formulario.c_password.oninput = validarPassword;
  // Impresion de la información
  formulario.onreset = function() {
    colores = new Array(); // Esto vacía el array
  }
  formulario.onsubmit = function() {
    datosFormulario(this, colores);
    return false;
  }
}