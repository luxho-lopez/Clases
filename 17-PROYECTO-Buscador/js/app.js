const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); //Muentras los resultados al cargar

    // Llena el select de los años
    llenarSelect();
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


// Genra los años del select
function llenarSelect () {
    
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }

}