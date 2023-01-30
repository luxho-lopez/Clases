const autenticado = true;

if(autenticado){
    console.log('El usuario está autenticado');
}


// IF en una función
const puntaje = 499;

function revisarPuntaje() {
    if(puntaje >= 800) {
        console.log('Excelente');
        return;
    }

    if(puntaje >= 500) {
        console.log('Buen trabajo');
        return;
    }

    console.log('Vuelve a intentarlo');
}

revisarPuntaje();