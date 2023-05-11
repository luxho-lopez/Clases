const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;


// Generar un objeto con los datos de busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    puertas: '',
    transmision: '',
    minimo: '',
    maximo: '',
    color: ''
}


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //Muentras los resultados al cargar

    // Llena el select de los años
    llenarSelect();
});


//EvenListener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;


    filtrarAuto();
})
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);


    filtrarAuto();
})
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    console.log(datosBusqueda)
})


function mostrarAutos(autos) {

    limpiarHTML();  // Elimina el contenido del HTML

    autos.forEach( auto => {

        const { marca, year, puertas, transmision, precio, color } = auto;
        const autoHtml = document.createElement('p');

        autoHtml.textContent = `
            ${ marca } -
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

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Genra los años del select
function llenarSelect () {
    
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion)
    }
}


// Funcion qu efiltra en base a la busqueda
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear);

    // console.log(resultado)

    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca === marca
    }

    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if(year) {
        return auto.year === year;
    }

    return auto;
}