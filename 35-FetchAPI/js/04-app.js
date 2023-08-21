const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            mostrarHTML(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

function mostrarHTML(elementos) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    elementos.forEach(element => {
        const {id, author, author_url} = element;

        html += `
            <p>ID: ${id}</p>
            <p>Autor: ${author}</p>
            <a href='${author_url}' target='_blank' >Ver Imagen</a>
        `;
    });

    contenido.innerHTML = html;
}