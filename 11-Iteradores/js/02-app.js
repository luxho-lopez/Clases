// for(let i = 0; i <= 10; i++) {
//     if(i === 5) {
//         console.log('Cinco');
//         continue; // continue: salta a la siguiente iteración
//         // break; // break: rompe el ciclo
//     }
//     console.log(i);
// }


const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200, descuento: true},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(`${carrito[i].nombre}`);
}