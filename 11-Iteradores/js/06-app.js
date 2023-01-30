const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach( (pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);
});


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

// ForEach no retorna nada, no se puede usar en un nuevo arreglo
carrito.forEach((producto, indice) => {
    console.log(`${indice} : ${producto.nombre} - Precio: ${producto.precio}`);
});


// Map crea un nuevo arreglo con los resultados
const nuevoArreglo = carrito.map( (producto, indice) => `${indice} : ${producto.nombre} - Precio: ${producto.precio}`);

console.log(nuevoArreglo);