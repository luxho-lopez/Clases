// Funcion como argumento
const suma = (a, b) => a + b;

const multiplicar = (a, b) => a * b;


const sumarOMultiplicar = fn => fn(3, 7);

console.log( sumarOMultiplicar(suma) );
console.log( sumarOMultiplicar(multiplicar) );