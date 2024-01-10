// Probar dos valores

function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 2);
let esperado = 7;

if( resultado !== esperado ) {
    console.log(`El resultado ${resultado}, es diferente a lo esperado. ${esperado}.`)
} else {
    console.log("La función 'suma' ha devuelto el valor correcto.");
}