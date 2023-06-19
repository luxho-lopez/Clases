// Class Declaration
class Cliente {
    // Para hacer privado un atributo
    #nombre;

    constructor(nombre, saldo) {
        this.#nombre = nombre,
        this.saldo = saldo
    };

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, Saldo: ${this.saldo}`;
    }

    static saludo() {
        return 'Bienvenido al Espacio...'
    }
};


const alfredo = new Cliente('Alfredo', 4500);
console.log(alfredo);
