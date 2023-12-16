// Closures
// A closure is a function that has access to its own scope, the outer (enclosing) function’s variables and parameters. In other



// const cliente = "Luxho";

// function mostrarCliente() {
//     const cliente = "Alfredo";

//     console.log(cliente);
// }

// mostrarCliente();

// console.log(cliente);


// ======================================================= //

const obtenerCliente = () => {
    const cliente = "Luxho";

    function mostrarCliente() {
        console.log(cliente)
    }

    return mostrarCliente;
}

const cliente = obtenerCliente();

cliente()