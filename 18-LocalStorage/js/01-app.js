localStorage.setItem('nombre', 'luxho');

const persona = {
    nombre: 'luxho',
    apellido: 'lopez',
    edad: 26
}


// JSON.strinify transforma un arreglo u objeto a un string
const personaString = JSON.stringify(persona);
localStorage.setItem('persona', personaString);