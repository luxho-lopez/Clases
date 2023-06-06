function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};


// Crear un prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
};

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombresaldoCliente = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
};


// Retirar saldo
Cliente.prototype.retirarSaldo = function(retirar) {
    this.saldo -= retirar;    
};






// Heredar constructor de Clientes a Personas

function Personas(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);

    this. telefono = telefono
}

// Heredar el prototype de Clientes a Personas
Personas.prototype = Object.create( Cliente.prototype );

// Para agregar el constructor
Personas.prototype.constructor = Cliente;

const juan = new Personas('Juan', 5000, 987654);

console.log(juan);

// Agregar un proto exclusive para Personas
Personas.prototype.mostrarTelefono = function() {
    return `El telefono de ${this.nombre} es ${this.telefono}`;
};

console.log(juan.mostrarTelefono());