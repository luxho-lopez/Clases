const usuario = false;
const puedePagar = false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
} else if(!usuario){
    console.log('Inicia sesión para comprar');
} else if(!puedePagar){
    console.log('Fondos insuficientes');
} else {
    console.log('No puedes comprar');
}