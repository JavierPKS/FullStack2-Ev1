document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('reservaForm');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();
        let esValido = true;

        // Nombre
        const campoNombre = document.getElementById('campo_nombre');
        const mensajeNombre = document.getElementById('mensaje_nombre');
        mensajeNombre.textContent = '';

        if (campoNombre.value.trim() === '') {
            mensajeNombre.textContent = 'Por favor, ingresa tu nombre.';
            esValido = false;
        }

        // Correo
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

        // Teléfono
        const campoTelefono = document.getElementById('campo_telefono');
        const mensajeTelefono = document.getElementById('mensaje_telefono');
        mensajeTelefono.textContent = '';

        if (campoTelefono.value.trim() === '') {
            mensajeTelefono.textContent = 'Por favor, ingresa tu teléfono.';
            esValido = false;
        }

        // Fecha
        const campoFecha = document.getElementById('campo_fecha');
        const mensajeFecha = document.getElementById('mensaje_fecha');
        mensajeFecha.textContent = '';

        if (campoFecha.value === '') {
            mensajeFecha.textContent = 'Por favor, selecciona una fecha.';
            esValido = false;
        }

        // Hora
        const campoHora = document.getElementById('campo_hora');
        const mensajeHora = document.getElementById('mensaje_hora');
        mensajeHora.textContent = '';

        if (campoHora.value === '') {
            mensajeHora.textContent = 'Por favor, selecciona la hora de inicio.';
            esValido = false;
        }

        // Cantidad de perros
        const campoPerros = document.getElementById('campo_perros');
        const mensajePerros = document.getElementById('mensaje_perros');
        mensajePerros.textContent = '';

        if (campoPerros.value === '' || Number(campoPerros.value) < 0) {
            mensajePerros.textContent = 'Ingresa una cantidad válida (mínimo 0).';
            esValido = false;
        }

        // Envío exitoso
        if (esValido) {
            alert('¡Formulario completado y enviado con éxito!');
            formulario.reset();
        }
    });
});
