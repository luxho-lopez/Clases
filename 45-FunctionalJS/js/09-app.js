// Currying y Partials

const suma = (a, b, c) => a + b + c;

const parcial = a => b => c => suma(a, b, c);

const resultadoParcial = parcial(5)(3)(1);

console.log(resultadoParcial);