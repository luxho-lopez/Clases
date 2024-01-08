// Mixin pattern

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

class Empleado {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion() {
        console.log(`Nombre: ${this.nombre}, Email: ${this.email}`);
    },

    mostrarNombre() {
        console.log(`Mi nombre: ${this.nombre}`);
    }
}


// Añadir funciones persona a la clase de Persona
Object.assign(Persona.prototype, funcionesPersona);
Object.assign(Empleado.prototype, funcionesPersona);



const cliente = new Persona("Luxho", "dj_97@outlook.com");
console.log(cliente);

cliente.mostrarInformacion();
cliente.mostrarNombre();


const empleado = new Empleado("Alfredo", "alfredo@outlook.com");
console.log(empleado);

empleado.mostrarInformacion();
empleado.mostrarNombre();