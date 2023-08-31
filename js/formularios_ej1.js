"use strict";
let validarCampo = (nodo, texto) => nodo.setCustomValidity((nodo.value == "") ? texto : "");
function validarNif() {
    if (this.value == "")
        this.setCustomValidity("El campo del NIF no puede estar vacío");
    else if (this.value.length != 9)
        this.setCustomValidity("El NIF introducido no es válido");
    else {
        if (isNaN(+this.value.substring(0, 8)))
            this.setCustomValidity("La parte numérica del NIF no es válida");
        else if (this.value.charAt(8).search("[A-Z]") == -1)
            this.setCustomValidity("La letra del NIF no es válida.");
        // Se utilizó la expresión regular [A-Z] para comprobar que el último caracter es una letra mayúscula sin signos ortográficos
        else
            this.setCustomValidity("");
    }
    if (this.validity.valid && this.classList.contains("is-invalid"))
        this.classList.remove("is-invalid");
}
function formatearFecha(fecha, formateo) {
    let dd = (fecha.getDate() < 10) ? `0${fecha.getDate()}` : fecha.getDate();
    let mm = (fecha.getMonth() + 1 < 10) ? `0${fecha.getMonth() + 1}` : fecha.getMonth() + 1;
    let yyyy = fecha.getFullYear();
    switch (formateo) {
        case "yyyy/mm/dd": return `${yyyy}-${mm}-${dd}`;
        case "dd/mm/yyyy": return `${dd}-${mm}-${yyyy}`;
        default: return "No se ha reconocido el formato de la fecha";
    }
}
function validarCampoNumerico(nodo, nombreNodo, longitud) {
    if (nodo.value == "")
        nodo.setCustomValidity("El campo del " + nombreNodo + " no puede estar vacío");
    else if (nodo.value.length != longitud)
        nodo.setCustomValidity("El " + nombreNodo + " no es válido");
    else
        nodo.setCustomValidity((isNaN(+nodo.value)) ? "Se debe introducir un número en este campo" : "");
}
function validarGenero() {
    const input = document.querySelector('[value="nc"]');
    input === null || input === void 0 ? void 0 : input.setCustomValidity(this.value == "" ? "Debe elegir una opción" : "");
}
function obtenerPreferencias(lista) {
    let colors = new Array();
    lista.forEach(e => colors.push(e.getAttribute("value")));
    return colors;
}
function validarPassword() {
    let password = document.forms[0].elements.namedItem("password");
    let c_password = document.forms[0].elements.namedItem("c_password");
    if (password.value == "")
        password.setCustomValidity("El campo de la contraseña no puede estar vacío");
    else if (password.value.length < 5)
        password.setCustomValidity("La contraseña debe constar de 5 caracteres mínimo");
    else {
        if (password.value.search("[A-Za-z]") == -1 || password.value.search("\\d") == -1)
            password.setCustomValidity("La contraseña debe ser una combinación de letras y números");
        /* Se utilizaron dos expresiones regulares para comprobar que la contraseña fuese una combinación de letras y números:
        · [A-Za-z] se refiere a todas las letras sin signos ortográficos, tanto mayúsculas como minúsculas
        · \d se refiere a los números
        */
        else if (password.value != c_password.value)
            c_password.setCustomValidity("Este campo debe ser igual que el anterior");
        else {
            password.setCustomValidity("");
            c_password.setCustomValidity("");
        }
    }
    if (password.validity.valid && password.classList.contains("is-invalid"))
        password.classList.remove("is-invalid");
    if (c_password.validity.valid && c_password.classList.contains("is-invalid"))
        c_password.classList.remove("is-invalid");
}
function parrafoCampo(tipoCampo, texto) {
    let campo = document.createElement("div");
    campo.innerHTML = `<b>${tipoCampo}:</b> ${texto}`;
    return campo;
}
function obtenerPais(valorNodo) {
    switch (valorNodo) {
        case "esp": return "España";
        case "fra": return "Francia";
        case "ale": return "Alemania";
        case "uk": return "Reino Unido";
        case "irl": return "Irlanda";
        case "pol": return "Polonia";
        default: return "No se ha reconocido el país";
    }
}
function obtenerGenero(valorNodo) {
    switch (valorNodo) {
        case "m": return "Masculino";
        case "f": return "Femenino";
        default: return "Prefiere no responder";
    }
}
let getInput = (formulario, name) => formulario.elements.namedItem(name);
function datosFormulario(formulario, colores) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    resultado.appendChild(parrafoCampo("Nombre", `${getInput(formulario, "name").value} ${getInput(formulario, "surname").value}`));
    resultado.appendChild(parrafoCampo("Dirección", getInput(formulario, "address").value));
    resultado.appendChild(parrafoCampo("NIF", getInput(formulario, "nif").value));
    resultado.appendChild(parrafoCampo("Fecha de nacimiento", formatearFecha(getInput(formulario, "date_of_birth").valueAsDate, "dd/mm/yyyy")));
    resultado.appendChild(parrafoCampo("Código postal", getInput(formulario, "postal_code").value));
    resultado.appendChild(parrafoCampo("País", obtenerPais(getInput(formulario, "country").value)));
    resultado.appendChild(parrafoCampo("Género", obtenerGenero(getInput(formulario, "gender").value)));
    resultado.appendChild(parrafoCampo("Preferencias", colores.length ? colores.join(", ") : "No se ha elegido ningún color"));
    resultado.appendChild(parrafoCampo("Teléfono", getInput(formulario, "phone_number").value));
    resultado.appendChild(parrafoCampo("Correo electrónico", getInput(formulario, "mail").value));
    resultado.appendChild(parrafoCampo("Contraseña", getInput(formulario, "password").value));
}
function setInvalid() {
    this.classList.add("is-invalid");
}
window.onload = function () {
    const pagination = document.querySelector(".pagination");
    if (window.innerWidth >= 768)
        pagination.classList.add("pagination-lg");
    let formulario = document.forms[0];
    const nombre = getInput(formulario, "name");
    nombre.setCustomValidity(nombre.value == "" ? "El campo del nombre no puede estar vacío" : "");
    nombre.oninvalid = setInvalid;
    nombre.oninput = function () {
        if (this.validity.valid && this.classList.contains("is-invalid"))
            this.classList.remove("is-invalid");
        validarCampo(this, "El campo del nombre no puede estar vacío");
    };
    const apellidos = getInput(formulario, "surname");
    apellidos.setCustomValidity(apellidos.value == "" ? "El campo del primer apellido no puede estar vacío" : "");
    apellidos.oninvalid = setInvalid;
    apellidos.oninput = function () {
        if (this.validity.valid && this.classList.contains("is-invalid"))
            this.classList.remove("is-invalid");
        validarCampo(this, "El campo del primer apellido no puede estar vacío");
    };
    const direccion = getInput(formulario, "address");
    direccion.setCustomValidity(direccion.value == "" ? "El campo de la dirección no puede estar vacío" : "");
    direccion.setAttribute("placeholder", "C/ San Francisco, 61");
    direccion.oninvalid = setInvalid;
    direccion.oninput = function () {
        if (this.validity.valid && this.classList.contains("is-invalid"))
            this.classList.remove("is-invalid");
        validarCampo(this, "El campo de la dirección no puede estar vacío");
    };
    const nif = getInput(formulario, "nif");
    nif.setCustomValidity(nif.value == "" ? "El campo del NIF no puede estar vacío" : "");
    nif.setAttribute("placeholder", "12345678A");
    nif.oninvalid = setInvalid;
    nif.oninput = validarNif;
    const fecha_nacimiento = getInput(formulario, "date_of_birth");
    fecha_nacimiento.setCustomValidity(fecha_nacimiento.value == "" ?
        "El campo de la fecha de nacimiento no puede estar vacío" : "");
    fecha_nacimiento.setAttribute("max", formatearFecha(new Date(), "yyyy/mm/dd"));
    fecha_nacimiento.oninvalid = setInvalid;
    fecha_nacimiento.oninput = function () {
        if (this.value != '')
            this.classList.remove("is-invalid");
        validarCampo(this, "El campo de la fecha de nacimiento no puede estar vacío");
    };
    const codigo_postal = getInput(formulario, "postal_code");
    codigo_postal.setCustomValidity(codigo_postal.value == "" ? "El campo del código postal no puede estar vacío" : "");
    codigo_postal.setAttribute("placeholder", "03001");
    codigo_postal.oninvalid = setInvalid;
    codigo_postal.oninput = function () {
        if (this.validity.valid && this.classList.contains("is-invalid"))
            this.classList.remove("is-invalid");
        validarCampoNumerico(this, "código postal", 5);
    };
    const pais = getInput(formulario, "country");
    pais.querySelector('[value=""]').hidden = true;
    pais.setCustomValidity(pais.value == "" ? "Debe elegir un país" : "");
    pais.oninvalid = setInvalid;
    pais.oninput = function () {
        if (this.value != '')
            this.classList.remove("is-invalid");
        validarCampo(this, "Debe elegir un país");
    };
    const genero = getInput(formulario, "gender");
    document.querySelector('[value="nc"]').setCustomValidity(genero.value == "" ?
        "Debe elegir una opción" : "");
    for (let opcion of genero)
        opcion.onclick = validarGenero;
    const telefono = getInput(formulario, "phone_number");
    telefono.setCustomValidity(telefono.value == "" ? "El campo del teléfono no puede estar vacío" : "");
    telefono.setAttribute("placeholder", "987654321");
    telefono.oninput = function () {
        validarCampoNumerico(this, "teléfono", 9);
    };
    const correo = getInput(formulario, "mail");
    correo.setCustomValidity(correo.value == "" ? "El campo del correo electrónico no puede estar vacío" : "");
    correo.setAttribute("placeholder", "ejemplo@gmail.com");
    correo.oninvalid = setInvalid;
    correo.oninput = function () {
        if (this.validity.valid && this.classList.contains("is-invalid"))
            this.classList.remove("is-invalid");
        validarCampo(this, "El campo del correo electrónico no puede estar vacío");
        // Como se ha declarado este input de tipo email, se han implementado automáticamente otras validaciones
    };
    const password = getInput(formulario, "password");
    password.setCustomValidity("El campo de la contraseña no puede estar vacío");
    password.setAttribute("placeholder", "Contraseña");
    password.setAttribute("autocomplete", "off");
    password.oninvalid = setInvalid;
    password.oninput = validarPassword;
    const c_password = getInput(formulario, "c_password");
    c_password.setCustomValidity("Este campo debe ser igual que el anterior");
    c_password.setAttribute("placeholder", "Contraseña");
    c_password.setAttribute("autocomplete", "off");
    c_password.oninvalid = setInvalid;
    c_password.oninput = validarPassword;
    formulario.onreset = function () {
        if (nombre.classList.contains("is-invalid"))
            nombre.classList.remove("is-invalid");
        if (apellidos.classList.contains("is-invalid"))
            apellidos.classList.remove("is-invalid");
        if (direccion.classList.contains("is-invalid"))
            direccion.classList.remove("is-invalid");
        if (nif.classList.contains("is-invalid"))
            nif.classList.remove("is-invalid");
        if (fecha_nacimiento.classList.contains("is-invalid"))
            fecha_nacimiento.classList.remove("is-invalid");
        if (codigo_postal.classList.contains("is-invalid"))
            codigo_postal.classList.remove("is-invalid");
        if (pais.classList.contains("is-invalid"))
            pais.classList.remove("is-invalid");
        if (telefono.classList.contains("is-invalid"))
            telefono.classList.remove("is-invalid");
        if (correo.classList.contains("is-invalid"))
            correo.classList.remove("is-invalid");
        if (password.classList.contains("is-invalid"))
            password.classList.remove("is-invalid");
        if (c_password.classList.contains("is-invalid"))
            c_password.classList.remove("is-invalid");
    };
    formulario.onsubmit = function () {
        datosFormulario(this, obtenerPreferencias(document.querySelectorAll('[name="colors"]:checked')));
        return false;
    };
};
