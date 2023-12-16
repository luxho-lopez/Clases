// Compositions se utilizaca cuando hay funciones que se pueden compartir entre objetos

// Si una función es reutilizable en varios lugares, podemos crearla como composición de otras funciones.
const  obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const agregarCorreo = info => ({
    guardarCorreo(correo) {
        info.correo = correo;
    },
});

const  obtenerCorreo = info => ({
    mostrarCorreo() {
        console.log(`Correo: ${info.correo}`);
    }
});




function Cliente(nombre, correo, empresa) {
    const info = {
        nombre,
        correo,
        empresa
    }

    return Object.assign(
        info,
            obtenerNombre(info),
            agregarCorreo(info),
            obtenerCorreo(info)
    )
}

function Empleado(nombre, correo, puesto) {
    const info = {
        nombre,
        correo,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        obtenerCorreo(info)
    )
}


// const cliente = Cliente("Luxho", "dj@dj.com", "The Luxho");
const cliente = Cliente("Luxho", null, "The Luxho");

cliente.mostrarNombre();
cliente.guardarCorreo("dj_97@outlook.com");
cliente.mostrarCorreo();



console.log("=============================");

const empleado = Empleado("Alfredo", "ald@ald.com", "Development");

empleado.mostrarNombre();
empleado.mostrarCorreo();
