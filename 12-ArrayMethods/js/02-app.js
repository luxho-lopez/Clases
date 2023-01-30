const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes, i) => {
    if(mes === 'Abril'){
        console.log(`Encontrado en el Indice: ${i}`);
    }
})

// Encontrar el indice de un dato en el arreglo
const indice = meses.findIndex(mes => mes === 'Enero');
console.log(indice);

// Comprobar un valor de un arreglo de objetos
const indice2 = carrito.findIndex(producto => producto.nombre === 'Teclado');
console.log(indice2);
