// Mediator

function Vendedor(nombre) {
    this.nombre = nombre,
    this.sala = null
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`El articulo, ${articulo} se inicia con un precio de $${precio}`);
    },

    vendido: nombre => {
        console.log(`Producto vendido a ${nombre}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre,
    this.sala = null
}

Comprador.prototype = {
    oferta: (cantidad, comprador ) => {
        console.log(`Comprador: ${comprador} - Oferta: $${cantidad}`);
    }
}

function Subasta() {
    let compradores = {};

    return {
        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}


// Crear Objetos
const cliente1 = new Comprador("Luxho");
const cliente2 = new Comprador("Mateo");
const vendedor1 = new Vendedor("Vendedor de autos");
const subasta1 = new Subasta();


// Tienes que registrar con los mediadores
subasta1.registrar(cliente1.nombre);
subasta1.registrar(cliente2.nombre);
subasta1.registrar(vendedor1.nombre);


vendedor1.oferta("Mazda 2", 200 );


cliente1.oferta(220, cliente1.nombre);
cliente2.oferta(230, cliente2.nombre);
cliente1.oferta(250, cliente1.nombre);
cliente2.oferta(280, cliente2.nombre);

vendedor1.vendido(cliente2.nombre)