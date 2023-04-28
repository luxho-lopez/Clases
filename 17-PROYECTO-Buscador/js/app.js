const resultado = document.querySelector('#resultado');


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
});


function mostrarAutos() {
    autos.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHtml = document.createElement('p');

        autoHtml.textContent = `
            ${ marca } -
            ${ modelo } -
            ${ year } -
            ${ puertas } Puertas -
            Transmision: ${ transmision } -
            Precio: ${ precio } -
            ${ color }
        `;

        // Insertar en el HTML
        resultado.appendChild(autoHtml);
    });
};