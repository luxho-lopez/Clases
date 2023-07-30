const paises = ['Mexico', 'Francia', 'Australia', 'Inglaterra'];

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        })
    }, 5000);
}

mostrarPaises();