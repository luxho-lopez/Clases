const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 701;

if(efectivo >= totalPagar || credito >= totalPagar || disponible >= totalPagar) {
    console.log('Si cuentas con el dinero disponible');
} else {
    console.log('Fondos insuficientes');
}