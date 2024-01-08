// Explicit Binding

function persona(el1, el2) {
    console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y escucho ${el1} y ${el2}`);
}

const datos = {
    nombre: "Luxho",
    edad: 26
}

const miMusica = ['Rock', 'Electronica'];

// Invocar la función con this que apunta a los datos del objeto
persona.call(datos, miMusica[0], miMusica[1]);  // Para usar CALL se le tiene que pasar los elementos de forma individual
persona.apply(datos, miMusica);  // y APPly si soporta un arreglo y lee los datos de forma individual

const nuevaFn = persona.bind(datos, miMusica[0], miMusica[1]);  // La diferencia de BIND es que q¿crea una nueva funcion
nuevaFn();   // Luego se pueden pasar argumentos adicionales para completar
