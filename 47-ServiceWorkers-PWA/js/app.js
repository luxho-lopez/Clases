if( 'serviceWorker' in navigator ) {
    navigator.serviceWorker.register('./sw.js')
    .then( registradp => console.log("Se instalo correctamente..."))
    .catch( error => console.log("Fallo la instalacion...", error));
} else {
    console.log("Service Worker no soportado...");
}