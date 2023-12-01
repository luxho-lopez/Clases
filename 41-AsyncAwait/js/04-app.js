function descargarNuevosCliente() {
    return new Promise( (resolve) => {

        console.log('Descargando clientes...');
        
        setTimeout(() => {
            resolve('Clientes descargados.');
        }, 5000);
    });
}

function descargarNuevosPedidos() {
    return new Promise( (resolve) => {

        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Pedidos descargados.')
        }, 3000);
    });
}


const app = async () => {

    try {
        const respuesta = await Promise.all([ descargarNuevosCliente(), descargarNuevosPedidos() ]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error)
    }

};

app();