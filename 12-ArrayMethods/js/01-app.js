const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un array

meses.forEach( mes => {
    if(mes == 'Abril') {
        console.log(mes);
    }
});

// Includes solo funciona con arreglos de un solo valor
const resultado = meses.includes('Abril');
console.log(resultado);


// para un arreglo de objetos se utiliza .some
const existe = carrito.some((producto) => {
    return producto.nombre === 'Celular';
})

console.log(existe);