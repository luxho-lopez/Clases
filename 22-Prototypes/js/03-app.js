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


const juan = new Cliente('Juan', 10000);

console.log(juan.tipoCliente());

console.log(juan.nombresaldoCliente());

juan.retirarSaldo(5000);

console.log(juan.nombresaldoCliente());


console.log(juan);
