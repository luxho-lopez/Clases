const carrito = [
    { nombre: "lapiz", precio: 7 },
    { nombre: "sarten", precio: 350 },
    { nombre: "televisor", precio: 7500 },
    { nombre: "Bocina", precio: 2200 },
    { nombre: "Motor", precio: 17800 },
    { nombre: "Celurar", precio: 11300 }
]
// .MAP, crea un nuevo arreglo con los datos en una nueva variable
const nuevoArreglo = carrito.map( function(producto) {
    return `${ producto.nombre } - ${ producto.precio }`;
})

console.log(nuevoArreglo);


// .FOREACH solo lee los datos en el arreglo que se le pasa
const nuevoArreglo2 = carrito.forEach( function(producto) {
    console.log(`${ producto.nombre } - ${ producto.precio }`);
})




// Lo mismo con ARROW FUNCTION

const nuevoArreglo3 = carrito.map( producto => `${ producto.nombre } - ${ producto.precio }`);
console.log(nuevoArreglo3);



carrito.forEach( producto => console.log(`${ producto.nombre } - ${ producto.precio }`))