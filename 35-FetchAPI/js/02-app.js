const cargarJSONBtb = document.querySelector('#cargarJSON');

cargarJSONBtb.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then((result) => {
            // console.log(result);
            console.log(result.status); 
            
            return result.json();
        })
        .then((data) => {
            console.log(data);
            mostrarHTML(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

function mostrarHTML( { id, nombre, empresa, trabajo } ) {
    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>ID: ${id}</p>
        <p>Empleado: ${nombre}</p>
        <p>Empresa: ${empresa}</p>
        <p>Trabajo: ${trabajo}</p>
    `;
}