const persona = localStorage.getItem('persona');


// JSON.parse transforma un string a un arreglo u objeto, siempre y cuando tenga la estructura adecuada
console.log(JSON.parse(persona))