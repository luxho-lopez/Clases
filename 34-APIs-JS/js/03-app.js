window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Con conexion a internet...')
    } else {
        console.log('Sin conexion a internet...')
    }
}