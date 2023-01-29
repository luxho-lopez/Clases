const dinero = 150;
const totalPagar = 500;
const tarjeta = true;

if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si tenemos tarjeta');
} else {
    console.log('Fondos insuficientes');
}