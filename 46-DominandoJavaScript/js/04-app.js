// Implicit Binding - Se usa la palara reservada this, para indicar en donde va a encontrar los datos.

const usuario = {
    nombre: "Luxho",
    edad: 26,
    informacion() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`);
    },

    mascota: {
        nombre: "Mandy",
        edad: 5,
        informacion() {
            console.log(`Hola soy ${this.nombre} y tengo ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();