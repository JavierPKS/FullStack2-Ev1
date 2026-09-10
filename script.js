function limpiar_errores() {
    const lista_errores = document.getElementsByClassName("mensaje_error");
    for (const elemento of lista_errores) {
        elemento.innerHTML = "";
    }
}

function validar_nombre(nombre_ingresado) {
    if (!nombre_ingresado) return false;
    nombre_ingresado = nombre_ingresado.trim();
    var valido = (nombre_ingresado.length > 2);
    valido = valido && isNaN(nombre_ingresado);
    return valido;
}

function validar_correo(correo_ingresado) {
    if (!correo_ingresado) return false;
    correo_ingresado = correo_ingresado.trim();
    return correo_ingresado.includes("@") && correo_ingresado.includes(".");
}

function validar_telefono(telefono_ingresado) {
    if (!telefono_ingresado) return false;
    telefono_ingresado = telefono_ingresado.trim();
    return (telefono_ingresado.length >= 8) && !isNaN(telefono_ingresado);
}

function validar_fecha(fecha_ingresada) {
    if (!fecha_ingresada) return false;
    return fecha_ingresada.trim() !== "";
}

function validar_hora(hora_ingresada) {
    if (!hora_ingresada) return false;
    return hora_ingresada.trim() !== "";
}

function validar_cantidad(cantidad_ingresada) {
    if (cantidad_ingresada === "" || cantidad_ingresada === null || cantidad_ingresada === undefined) {
        return false;
    }
    var numero = Number(cantidad_ingresada);
    return !isNaN(numero) && numero >= 0;
}

function validar_password(password_ingresada) {
    if (!password_ingresada) return false;
    return password_ingresada.trim().length >= 4;
}

function validar_run(rutCompleto) {
    if (!rutCompleto) return false;
    rutCompleto = rutCompleto.replace(/^0+|[\s.]+/g, '');

    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;

    const tmp = rutCompleto.split('-');
    let digv = tmp[1];
    const rut = tmp[0];

    if (digv == 'K') digv = 'k';

    return calcular_dv(rut) == digv;
}

function calcular_dv(T) {
    let suma = 0;
    let multiplicador = 2;

    for (let i = 1; i <= T.length; i++) {
        suma += parseInt(T.charAt(T.length - i)) * multiplicador;
        multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
    }

    const resto = suma % 11;
    const dvCalculado = 11 - resto;

    if (dvCalculado == 11) return '0';
    if (dvCalculado == 10) return 'k';
    return dvCalculado.toString();
}

function procesar_reserva(evento) {
    if (evento) evento.preventDefault();
    limpiar_errores();

    const formulario = document.getElementById("reservaForm");
    const datos_formulario = new FormData(formulario);

    var nombre = datos_formulario.get("campo_nombre");
    var correo = datos_formulario.get("campo_correo");
    var telefono = datos_formulario.get("campo_telefono");
    var fecha = datos_formulario.get("campo_fecha");
    var hora = datos_formulario.get("campo_hora");
    var perros = datos_formulario.get("campo_perros");

    let valido = true;

    if (!validar_nombre(nombre)) {
        let caja_error = document.getElementById("mensaje_nombre");
        caja_error.innerHTML = "El nombre ingresado no es válido (mínimo 3 letras y sin números)";
        valido = false;
    }

    if (!validar_correo(correo)) {
        let caja_error = document.getElementById("mensaje_correo");
        caja_error.innerHTML = "El correo ingresado no es válido (debe incluir @ y .)";
        valido = false;
    }

    if (!validar_telefono(telefono)) {
        let caja_error = document.getElementById("mensaje_telefono");
        caja_error.innerHTML = "El teléfono debe contener solo números y al menos 8 dígitos";
        valido = false;
    }

    if (!validar_fecha(fecha)) {
        let caja_error = document.getElementById("mensaje_fecha");
        caja_error.innerHTML = "Por favor, seleccione una fecha para el evento";
        valido = false;
    }

    if (!validar_hora(hora)) {
        let caja_error = document.getElementById("mensaje_hora");
        caja_error.innerHTML = "Por favor, seleccione una hora de inicio";
        valido = false;
    }

    if (!validar_cantidad(perros)) {
        let caja_error = document.getElementById("mensaje_perros");
        caja_error.innerHTML = "Ingresa una cantidad válida (número mayor o igual a 0)";
        valido = false;
    }

    if (valido) {
        alert("¡Formulario de reserva completado y enviado con éxito!");
        formulario.reset();
    }
}

function procesar_login(evento) {
    if (evento) evento.preventDefault();
    limpiar_errores();

    const formulario = document.getElementById("loginForm");
    const datos_formulario = new FormData(formulario);

    var email = datos_formulario.get("campo_email");
    var password = datos_formulario.get("campo_password");

    let valido = true;

    if (!email || email.trim() === "") {
        let caja_error = document.getElementById("mensaje_email");
        caja_error.innerHTML = "Por favor, ingresa tu correo electrónico o usuario";
        valido = false;
    } else if (email.trim() !== "admin" && !validar_correo(email)) {
        let caja_error = document.getElementById("mensaje_email");
        caja_error.innerHTML = "Ingresa un correo electrónico válido (ej: usuario@correo.com)";
        valido = false;
    }

    if (!validar_password(password)) {
        let caja_error = document.getElementById("mensaje_password");
        caja_error.innerHTML = "La contraseña debe tener al menos 4 caracteres";
        valido = false;
    }

    if (valido) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "index.html";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const formularioReserva = document.getElementById("reservaForm");
    if (formularioReserva) {
        formularioReserva.addEventListener("submit", procesar_reserva);
    }

    const formularioLogin = document.getElementById("loginForm");
    if (formularioLogin) {
        formularioLogin.addEventListener("submit", procesar_login);
    }
});
