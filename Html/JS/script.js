function validarNombre(nombre) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,20}$/.test(nombre)) {
        return 'El nombre ingresado es inválido.';
    }
    return ''; // El nombre es válido
}

function validarApellido(apellido) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚ\s]{3,20}$/.test(apellido)) {
        return 'El apellido ingresado es inválido.';
    }
    return ''; // El apellido paterno es válido
}

function validarEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'El correo electrónico ingresado es inválido.';
    }
    return ''; // El correo electrónico es válido
}

function validarCelular(celular) {
    if (!/^[0-9]{9,12}$/.test(celular)) {
        return 'El número de celular ingresado es inválido.';
    }
    return ''; // El número de celular es válido
}
function validarReclamo(reclamo) {
    if (reclamo.trim() === '') {
        return 'Por favor, ingrese su reclamo/sugerencia.';
    }
    if (reclamo.length < 20) {
        return 'El reclamo debe tener al menos 20 caracteres.';
    }
    return ''; // La motivación es válida
}

function validarTipo() {
    var tipo = document.getElementById('tipo');
    if (tipo.value === '') {
        return 'Por favor, seleccione tipo.';
    }
    return ''; // El tipo es válido
}

function validarPan(hallulla, marraqueta) {
    var marNum = parseInt(marraqueta);
    var halNum = parseInt(hallulla);
    
    // Validar si ambas cantidades son números válidos
    if (isNaN(marNum) && isNaN(halNum)) {
        return 'Debe ingresar la cantidad de pan.';
    }
    
    // Validar si ninguna cantidad es menor que cero
    if (marNum < 0 || halNum < 0) {
        return 'No puede ingresar valores negativos.';
    }

    // Validar si al menos una cantidad es mayor que cero
    if (marNum <= 0 && halNum <= 0) {
        return 'Debe ingresar la cantidad de pan.';
    }

    

    return ''; // La cantidad de pan es válida
}




function validarReserva(){
    var nombre = document.getElementById('nombre').value;
    var celular = document.getElementById('celular').value;
    var marNum = document.getElementById('marraqueta').value;
    var halNum = document.getElementById('hallulla').value;

    var mensajeError = '';

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarPan(halNum,marNum);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    var aviso = "Estimado/a cliente del almacén Daniella,\n" +
                "su reserva fue ingresada exitosamente.\n" +
                "Su reserva es de "+marNum+" marraquetas y "+halNum+" hallullas.\n\n" +
                "Nos comunicaremos con usted al número indicado para confirmar su reserva.\n" +
                "¡Muchas gracias por preferirnos!\n\n" +
                "Atentamente, almacén Daniella.";
    alert(aviso);
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido= document.getElementById('apellido').value;
    var tipo = document.getElementById('tipo').value;
    var email = document.getElementById('email').value;
    var celular = document.getElementById('celular').value;
    var reclamo = document.getElementById('reclamo').value;

    var mensajeError = '';

    mensajeError = validarNombre(nombre);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarApellido(apellido);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarTipo();
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarEmail(email);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarCelular(celular);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    mensajeError = validarReclamo(reclamo);
    if (mensajeError !== '') {
        alert(mensajeError);
        return false;
    }

    var aviso = "Estimado/a cliente del almacén Daniella,\n" +
                "su " + tipo + " fue ingresado exitosamente.\n" +
                "La solicitud será revisada lo antes posible.\n" +
                "¡Muchas gracias por preferirnos!\n\n" +
                "Atentamente, almacén Daniella.";
    alert(aviso);

    return true; // Si todas las validaciones pasan, retornar true
}

// Función para obtener una imagen aleatoria de Unsplash relacionada con un supermercado y establecerla como fondo del cuerpo
function setBackgroundImage() {
    fetch('https://api.unsplash.com/photos/random?query=supermarket&client_id=Muo0DxdFOriFaeLk_RX10rENykezs5IhvdzNANHRIv8')
    .then(response => response.json())
    .then(data => {
        const imageUrl = data.urls.regular;
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    })
    .catch(error => console.error('Error al obtener la imagen:', error));
}

// Llama a setBackgroundImage() al cargar la página y luego cada 10 segundos
window.onload = function() {
    setBackgroundImage();
    setInterval(setBackgroundImage, 10000);
};
