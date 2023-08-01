const paises = [];

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregando: ${pais}`);
    }, 3000);
});

nuevoPais('Alemamia').then((result) => {
    console.log(result);
    console.log(paises);
    return nuevoPais('Francia');
}).then((result) => {
    console.log(result);
    console.log(paises);
})