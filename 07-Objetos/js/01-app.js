const producto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

console.log(producto.apellido)


// EXTRAER VALORES CON DESTRUCTURING
const { nombre } = producto;
console.log(nombre);