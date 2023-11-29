let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: 'Comida',
    2: 'Bebidas',
    3: 'Postres'
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click', guardarCliente);


function guardarCliente() {
    // code to save the client data
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Revisar si hay campos vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');

    if (camposVacios) {

        const existeAlerta = document.querySelector('.invalid-feedback');

        if (!existeAlerta) {

            const alerta = document.createElement('DIV');
            alerta.textContent = 'Todos los campos son obligatorios';
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');

            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);

        }

        return;
    }

    // Asigna los valores al objeto
    cliente = { ...cliente, mesa, hora };

    // Ocultar el modal del formulario
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
    
    // Limpiar el formulario
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.value = '';
    });

    console.log(cliente);

    // Mostrar secciones ocultas
    mostrarSecciones();

    // Obtener platillos de la API de JSON-Server
    obtenerPlatilos();

}


function mostrarSecciones() {
    // Code to show/hide sections based on client data
    const secciones = document.querySelectorAll('.d-none');
    
    secciones.forEach(seccion => seccion.classList.remove('d-none'));
}


function obtenerPlatilos() {
    // Code to get platillos from the API
    const url = 'http://localhost:4000/platillos';
    
    fetch(url)
    .then(response => response.json())
    .then(data => mostrarPlatillos(data));
}


function mostrarPlatillos(platillos) {
    
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach(platillo => {
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');
        
        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;
        
        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;
        
        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[platillo.categoria];
        
        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = '0';
        inputCantidad.value = '0';
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control', 'cantidad');

        // Funcion que detecta la cantidad y el platillo que se esta agregando
        inputCantidad.onchange = function() {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad});
        };

        
        const cantidad = document.createElement('DIV');
        cantidad.classList.add('col-md-2');
        cantidad.appendChild(inputCantidad);

        
        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(cantidad);
        
        contenido.appendChild(row);
    });
    
}


function agregarPlatillo(producto) {
    // Extraer el pedido actual
    let { pedido } = cliente;

    
    // Detectar si la cantidad es mayor a 0
    if(producto.cantidad > 0) {

        // Comprueba si el elemento ya existe en el arreglo
        if( pedido.some( articulo => articulo.id === producto.id ) ) {
            // Como el articulo ya existe, actualizar la cantidad
            const pedidoActualizado = pedido.map( articulo =>  {
                if( articulo.id === producto.id ) {
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            cliente.pedido = [...pedidoActualizado];
        } else {   
            // Agregar al pedido
            cliente.pedido = [...pedido, producto];
        }
    } else {
        // Eliminar elementos cuando la cantidad es 0
        const resultado = pedido.filter( articulo => articulo.id !== producto.id );
        cliente.pedido = [...resultado];
    
    }

    // Limpiar HTML
    limpiarHTML();
    
    if( cliente.pedido.length ) {
        // Actualizar el resumen
        actualizarResumen();
    } else {
        // Mostrar mensaje de que no hay nada para mostrar
        mensajePedidoVacio();
    }

}


function actualizarResumen() {
    const contenido  = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Informacion de la mesa
    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add( 'fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');
    
    // Informacion de la hora
    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);


    // Seccion de consumo
    const heading = document.createElement('H3');
    heading.textContent = "Platillos consumidos";
    heading.classList.add('my-4', 'text-center');


    // Iterar sobre el array del resumen
    const grupo = document.createElement('UL');
    grupo.classList.add('list-group', 'mb-2');

    const { pedido } = cliente;
    pedido.forEach( articulo => {
        const { nombre, cantidad, precio, id } = articulo;

        const item = document.createElement('LI');
        item.classList.add('list-group-item');

        // Nombre del Articulo
        const nombreElemento = document.createElement('H4');
        nombreElemento.classList.add('my-4');
        nombreElemento.textContent = nombre;

        // Cantidad del Articulo
        const cantidadElemento = document.createElement('P');
        cantidadElemento.classList.add('fw-bold');
        cantidadElemento.textContent = "Cantidad: ";

        const cantidadSpan = document.createElement('SPAN');
        cantidadSpan.classList.add('fw-normal');
        cantidadSpan.textContent = `${cantidad}`;

        
        // Precio del Articulo
        const precioElemento = document.createElement('P');
        precioElemento.classList.add('fw-bold');
        precioElemento.textContent = "Precio: ";

        const precioSpan = document.createElement('SPAN');
        precioSpan.classList.add('fw-normal');
        precioSpan.textContent = `$${precio}`;
        

        // Subtotal del Articulo
        const subtotalElemento = document.createElement('P');
        subtotalElemento.classList.add('fw-bold');
        subtotalElemento.textContent = "Subtotal: ";

        const subtotalSpan = document.createElement('SPAN');
        subtotalSpan.classList.add('fw-normal');
        subtotalSpan.textContent = calcularSubtotal( precio, cantidad );
        

        // Creamos el boton para eliminar elemento
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger', 'me-3');
        btnEliminar.textContent = "Eliminar";
        // Funcion eliminar del pedido
        btnEliminar.onclick = function() {
            eliminarProducto(id);
        }


        cantidadElemento.appendChild(cantidadSpan)
        precioElemento.appendChild(precioSpan)
        subtotalElemento.appendChild(subtotalSpan)

        // Agregar elementos a la lista
        item.appendChild(nombreElemento);
        item.appendChild(cantidadElemento);
        item.appendChild(precioElemento);
        item.appendChild(subtotalElemento);
        item.appendChild(btnEliminar);


        // Agregar lista al grupo principal
        grupo.appendChild(item)
    })


    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);


    // Mostrar formulario de propinas
    formularioPropina();
}


function limpiarHTML() {
    const contenido = document.querySelector('#resumen .contenido');

    while( contenido.firstChild ) {
        contenido.removeChild(contenido.firstChild);
    }
}


function calcularSubtotal(cantidad, precio) {
    // return (cantidad * precio).toFixed(2);
    return `$${ cantidad * precio }`;
}


function eliminarProducto(id) {
    const { pedido } = cliente;
    const resultado = pedido.filter( articulo => articulo.id !== id );
    cliente.pedido = [...resultado];

    // Limpiamos el HTML
    limpiarHTML();

    if( cliente.pedido.length ) {
        // Actualizar el resumen
        actualizarResumen();
    } else {
        // Mostrar mensaje de que no hay nada para mostrar
        mensajePedidoVacio();
    }

    // El producto se eliminao por lo tanto debemos regresar a cero el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}


function mensajePedidoVacio() {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('P');
    texto.classList.add('text-center')
    texto.textContent = "Añade los elementos del pedido";

    contenido.appendChild(texto);
}


function formularioPropina() {
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('DIV');
    divFormulario.classList.add('card', 'py-5', 'px-3', 'shadow');

    // Seccion de propina
    const heading = document.createElement('H3');
    heading.textContent = "Propina";
    heading.classList.add('my-4', 'text-center');

    // Radio Button
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10label = document.createElement('LABEL');
    radio10label.textContent = '10%';
    radio10label.classList.add('form-check-label');

    const radio10div = document.createElement('DIV');
    radio10div.classList.add('form-check');
    radio10div.appendChild(radio10);
    radio10div.appendChild(radio10label);
    
    
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25label = document.createElement('LABEL');
    radio25label.textContent = '25%';
    radio25label.classList.add('form-check-label');

    const radio25div = document.createElement('DIV');
    radio25div.classList.add('form-check');
    radio25div.appendChild(radio25);
    radio25div.appendChild(radio25label);
    
    
    const radio50 = document.createElement('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50label = document.createElement('LABEL');
    radio50label.textContent = '50%';
    radio50label.classList.add('form-check-label');

    const radio50div = document.createElement('DIV');
    radio50div.classList.add('form-check');
    radio50div.appendChild(radio50);
    radio50div.appendChild(radio50label);
    
    // Radio Button


    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10div);
    divFormulario.appendChild(radio25div);
    divFormulario.appendChild(radio50div);

    formulario.appendChild(divFormulario);
    
    contenido.appendChild(formulario);
}


function calcularPropina() {
    
    const { pedido } = cliente;

    let subtotal = 0;

    // Calcular el subtotal a pagar
    pedido.forEach( articulo => {
        subtotal += (articulo.precio * articulo.cantidad) ;
    })

    // Seleccionar el radio buton con la propina del cliente
    const propinaSeleccionada = document.querySelector(`[name="propina"]:checked`).value;

    // Calcular la propina
    const propina = (( subtotal * parseInt(propinaSeleccionada) ) / 100 );

    // Calcular el total a pagar
    const totalPagar = subtotal + propina;

    // Mostrar los resultados en pantalla
    mostrarTotalHTML( subtotal, propina, totalPagar );
}


function mostrarTotalHTML( subtotal, propina, totalPagar) {

    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar', 'my-5');

    // Subtotal
    const subtotalParrafo = document.createElement('P');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = 'Subtotal: ';

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    // Propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'Propina: ';

    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    // Total a Pagar
    const totalPagarParrafo = document.createElement('P');
    totalPagarParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalPagarParrafo.textContent = 'Total a pagar: ';

    const totalPagarSpan = document.createElement('SPAN');
    totalPagarSpan.classList.add('fw-normal');
    totalPagarSpan.textContent = `$${totalPagar}`;

    totalPagarParrafo.appendChild(totalPagarSpan);


    // Limpia el ultimo resultado
    const lastResult = document.querySelector('.total-pagar');
    // nst ultimoResultado = document.querySelector('.total-pagar:last-child');
    if ( lastResult ) {
        lastResult.remove();
    }



    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalPagarParrafo);

    const formulario = document.querySelector('.formulario > div');
    formulario.appendChild(divTotales);
}