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
    datosBusqueda.puertas = parseInt(e.target.value);


    filtrarAuto();
})
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;


    filtrarAuto();
})
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;


    filtrarAuto();
})
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;


    filtrarAuto();
})
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    
    filtrarAuto();
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
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);

    // console.log(resultado)
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intente con otros valores...';
    resultado.appendChild(noResultado);
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

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas
    }

    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if(color) {
        return auto.color === color;
    }

    return auto;
}