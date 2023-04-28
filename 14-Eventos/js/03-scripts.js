const busqueda = document.querySelector('.busqueda');

// Eventos de Input y Textarea
busqueda.addEventListener('input', leerTexto);

function leerTexto(e) {
    console.log(e.target.value);
}