document.addEventListener('DOMContentLoaded', function () {
    const formularioReserva = document.getElementById('reservaForm');

    if (formularioReserva) {
        formularioReserva.addEventListener('submit', function (evento) {
            evento.preventDefault();
            let esValido = true;

            const campoNombre = document.getElementById('campo_nombre');
            const mensajeNombre = document.getElementById('mensaje_nombre');
            mensajeNombre.textContent = '';

            if (campoNombre.value.trim() === '') {
                mensajeNombre.textContent = 'Por favor, ingresa tu nombre.';
                esValido = false;
            }

            const campoCorreo = document.getElementById('campo_correo');
            const mensajeCorreo = document.getElementById('mensaje_correo');
            mensajeCorreo.textContent = '';

            if (campoCorreo.value.trim() === '') {
                mensajeCorreo.textContent = 'Por favor, ingresa tu correo.';
                esValido = false;
            } else if (!campoCorreo.value.includes('@') || !campoCorreo.value.includes('.')) {
                mensajeCorreo.textContent = 'Ingresa un correo electrónico válido.';
                esValido = false;
            }

            const campoTelefono = document.getElementById('campo_telefono');
            const mensajeTelefono = document.getElementById('mensaje_telefono');
            mensajeTelefono.textContent = '';

            if (campoTelefono.value.trim() === '') {
                mensajeTelefono.textContent = 'Por favor, ingresa tu teléfono.';
                esValido = false;
            }

            const campoFecha = document.getElementById('campo_fecha');
            const mensajeFecha = document.getElementById('mensaje_fecha');
            mensajeFecha.textContent = '';

            if (campoFecha.value === '') {
                mensajeFecha.textContent = 'Por favor, selecciona una fecha.';
                esValido = false;
            }

            const campoHora = document.getElementById('campo_hora');
            const mensajeHora = document.getElementById('mensaje_hora');
            mensajeHora.textContent = '';

            if (campoHora.value === '') {
                mensajeHora.textContent = 'Por favor, selecciona la hora de inicio.';
                esValido = false;
            }

            const campoPerros = document.getElementById('campo_perros');
            const mensajePerros = document.getElementById('mensaje_perros');
            mensajePerros.textContent = '';

            if (campoPerros.value === '' || Number(campoPerros.value) < 0) {
                mensajePerros.textContent = 'Ingresa una cantidad válida (mínimo 0).';
                esValido = false;
            }

            if (esValido) {
                alert('¡Formulario completado y enviado con éxito!');
                formularioReserva.reset();
            }
        });
    }

    const formularioLogin = document.getElementById('loginForm');

    if (formularioLogin) {
        formularioLogin.addEventListener('submit', function (evento) {
            evento.preventDefault();
            let esValido = true;

            const campoEmail = document.getElementById('email');
            const mensajeEmail = document.getElementById('mensaje_email');
            mensajeEmail.textContent = '';

            const valorEmail = campoEmail.value.trim();
            if (valorEmail === '') {
                mensajeEmail.textContent = 'Por favor, ingresa tu correo electrónico o usuario.';
                esValido = false;
            } else if (valorEmail !== 'admin' && (!valorEmail.includes('@') || !valorEmail.includes('.'))) {
                mensajeEmail.textContent = 'Ingresa un correo electrónico válido (ej: usuario@correo.com).';
                esValido = false;
            }

            const campoPassword = document.getElementById('password');
            const mensajePassword = document.getElementById('mensaje_password');
            mensajePassword.textContent = '';

            const valorPassword = campoPassword.value.trim();
            if (valorPassword === '') {
                mensajePassword.textContent = 'Por favor, ingresa tu contraseña.';
                esValido = false;
            } else if (valorPassword.length < 4) {
                mensajePassword.textContent = 'La contraseña debe tener al menos 4 caracteres.';
                esValido = false;
            }

            if (esValido) {
                alert('¡Inicio de sesión exitoso!');
                window.location.href = 'index.html';
            }
        });
    }
});
