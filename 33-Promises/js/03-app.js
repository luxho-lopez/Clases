const aplicarDescuento = new Promise( (resolve, reject) => {
    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }

});


console.log(aplicarDescuento);

aplicarDescuento
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));


// Hay 3 valores posibles
// fulfilled - El promise se cumplio
// rejected - El promise no se cumplio
// pending - No se ha cumplido y tampoco se ha rechazado