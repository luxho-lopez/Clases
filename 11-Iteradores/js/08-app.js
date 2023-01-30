const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
};

// FOR IN itera sobre objetos
for(let item in persona){
    console.log(item);
}

// ECMAScript 7 - incluye FOR OF para iterar sobre objetos
for([key, value] of Object.entries(persona)){
    console.log(`${key}: ${value}`);
}