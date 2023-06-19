// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre,
        this.saldo = saldo
    };

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
    }

    static saludo() {
        return 'Bienvenido al Espacio...'
    }
};


// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        
        super(nombre, saldo)

        this.telefono = telefono,
        this.categoria = categoria
    }


    mostrarInformacion() {
        return `Empresa: ${this.nombre}, Saldo: ${this.saldo}, Telefono: ${this.telefono}, Categoria: ${this.categoria}`;
    }
}

const alfredo = new Cliente('Alfredo', 2000);
console.log(alfredo.mostrarInformacion());

const theLux = new Empresa('The Lux', 10000, '9321694856', 'Electronic');
console.log(theLux);
console.log(theLux.mostrarInformacion());