function descargandoDatos() {
    //Este es el codigo que se encarga de realizar la peticion a los servidores y obtener los datos.
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error) {
                resolve('Datos obtenidos');
            } else {
                reject(new Error('Error en la conexión'));
            }
        }, 3000);
    })
}


// Asyc Await
// Function declaration
async function descargar() {

    try {
        const respuesta = await descargandoDatos();

        console.log( 2 + 2 );
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }

}

descargar();