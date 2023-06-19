// Class Declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre,
        this.saldo = saldo
    };
};

const alfredo = new Cliente('Alfredo', 2000);
console.log(alfredo);



// Class Expression
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre,
        this.saldo = saldo
    };
};

const alfredo2 = new Cliente2('Alfredo', 5000);
console.log(alfredo2)