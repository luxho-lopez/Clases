const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');

cargarJSONArrayBtn.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then((result) => {
            console.log(result);
            return result.json();
        })
        .then((data) => {
            console.log(data);
            mostrarHTML(data);
        })
        .catch((err) => {
            console.log(err)
        });
}

function mostrarHTML(empleados) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach(empleado => {
        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>ID: ${id}</p>
            <p>Empleado: ${nombre}</p>
            <p>Empresa: ${empresa}</p>
            <p>Trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;
}