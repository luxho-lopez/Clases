// Singleton

let instancia = null;

class Persona {
    constructor( nombre, email ) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}


const persona = new Persona("Luxho", "dj_97@outlook.com");
console.log(persona);

const persona2 = new Persona("alfredo", "dj_97@outlook.com");
console.log(persona2);