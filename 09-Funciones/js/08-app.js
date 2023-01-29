function sumar(a, b) {
    return a + b;
}

const operacion = sumar(2, 45);

console.log(operacion);




// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularimpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(250);
total = agregarCarrito(720);

const totalPagar = calcularimpuesto(total);

console.log(total)
console.log(`El total a pagar es de: ${ totalPagar }`);