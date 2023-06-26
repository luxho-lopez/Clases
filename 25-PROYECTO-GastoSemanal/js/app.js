// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');




// Eventos
eventListener();
function eventListener() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}



// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto),
        this.restante = Number(presupuesto),
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0 );

        this.restante = this.presupuesto - gastado;

        // console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id != id );
        
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extrayendo el valor
        const { presupuesto, restante } = cantidad;

        // Agregando al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // crear el DIV
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Agregar el mensaje
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, formulario);

        // Quitar el alert
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos) {
        this.limpiarHTML();

        // Iterar sobre los gastos
        gastos.forEach( gasto => {
            
            const { nombre, cantidad, id} = gasto;

            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-item-center';
            nuevoGasto.dataset.id = id;

            // Agregar el HTML
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> ${cantidad} </span>`;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            btnBorrar.textContent = 'Borrar X';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            } 
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);

        })
    }

    // Limpia el HTML de la lista
    limpiarHTML() {
        while(gastoListado.firstChild) {
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    // Actualiza la cantidad restante
    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    // Comprueba el presupuesto para cambiar la setiquetas
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;

        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25%
        if( (presupuesto / 4) > restante ) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');

        } else if( (presupuesto / 2 ) > restante ) {
            restanteDiv.classList.remove('alerte-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }


        // Alerta de presupuesto agotado
        if(restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');

            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

// Instanciar 
const ui = new UI();

let presupuesto;


// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    // console.log( Number(presupuestoUsuario) );


    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);


    ui.insertarPresupuesto( presupuesto);
}


// Agregar gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida.', 'error');

        return;
    }

    // Generar un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    
    presupuesto.nuevoGasto(gasto);

    // Alerta Correcto
    ui.imprimirAlerta('Agregado correctamente.');


    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    // Actualiza el restante del presupuesto
    ui.actualizarRestante(restante);

    // Comprobar presupuesto para cambiar de diseño las etiquetas
    ui.comprobarPresupuesto(presupuesto);

    // Reiniciar el formulario
    formulario.reset();
}

function eliminarGasto(id) {
    // Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);


    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    // Actualiza el restante del presupuesto
    ui.actualizarRestante(restante);

    // Comprobar presupuesto para cambiar de diseño las etiquetas
    ui.comprobarPresupuesto(presupuesto);
}