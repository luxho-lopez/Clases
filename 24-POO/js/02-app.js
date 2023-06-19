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

const alfredo = new Cliente('Alfredo', 2000);
console.log(alfredo);
console.log(alfredo.mostrarInformacion());

console.log(Cliente.saludo());
