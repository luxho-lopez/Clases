const paises = ['Mexico', 'Francia', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 5000);
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 2000);
}

mostrarPaises();

nuevoPais("Alemania", mostrarPaises)