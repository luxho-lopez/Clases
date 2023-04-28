const formulario = document.querySelector('#formulario');

// Eventos de Input y Textarea
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log('Enviando formulario...');
}