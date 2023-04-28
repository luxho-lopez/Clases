const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let itemsCarrito = []; // Arreglo para guardar los cursos que el usuario agrega al carrito

cargarEventListeners();
function cargarEventListeners() {
    // Cuando agregas un items presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        itemsCarrito = []; // Reseteamos el arreglo

        limpiarHTML(); // Eliminamos todo el HTML
    });
};


// Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    };
};

// Elimina un curso del carrito
function eliminarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // Elimina del arreglo de carrito
        itemsCarrito = itemsCarrito.filter( curso => curso.Id !== cursoId );

        carritoHTML();
    };
};

function leerDatosCurso(curso) {
    // console.log(curso);

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        Imagen: curso.querySelector('img').src,
        Titulo: curso.querySelector('h4').textContent,
        Precio: curso.querySelector('.precio span').textContent,
        Id: curso.querySelector('a').getAttribute('data-id'),
        Cantidad: 1
    };

    // Revisa si un elemento ya existe en el carrito
    const existe = itemsCarrito.some( curso => curso.Id === infoCurso.Id );
    if(existe) {
        // Actualizamos la cantidad
        const cursos = itemsCarrito.map( curso => {
            if(curso.Id === infoCurso.Id) {
                curso.Cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna los objetos que no son duplicados
            }
        });
        itemsCarrito = [...cursos];
    } else {
        // Agregamos el Items al carrito
        itemsCarrito = [...itemsCarrito, infoCurso];
    }

    console.log(itemsCarrito);

    carritoHTML();
}

// Ahora que ya tenemos los datos del curso que el usuario selecciona, vamos a crear una función que nos permita agregar los curso al carrito.
function carritoHTML() {
    limpiarHTML();

    itemsCarrito.forEach( curso => {
        const { Imagen, Titulo, Precio, Cantidad, Id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${Imagen}" width="80">
            <td>
            <td>${Titulo}</td>
            <td>${Precio}</td>
            <td>${Cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${Id}">X</a>
            </td>
        `;

        contenedorCarrito.appendChild(row);
    });
};

function limpiarHTML() {
    // Forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    };
};