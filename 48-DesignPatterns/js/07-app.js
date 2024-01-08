// Namespaces

const restaurantApp = {};


restaurantApp.platillos = [
    {
        nombre: 'Pizza',
        precio: 25
    },
    {
        nombre: 'Hamburguesa',
        precio: 20
    },
    {
        nombre: 'Hot dog',
        precio: 18
    }
];

restaurantApp.funciones = {
    mostrarMenu: platillos => {
        console.log("Bienvenidos a nuestro menú");

        platillos.forEach( (platillo, index) => {
            console.log(`${index} : ${platillo.nombre} - $${platillo.precio}`);
        });
    },

    ordenar: id => {
        console.log(`Tu platillo, ${restaurantApp.platillos[id].nombre}, estara listo en breve...`)
    },

    agregarPlatillo: ( nombre, precio ) => {
        const nuevoPlatillo = { nombre, precio };
    
        restaurantApp.platillos.push(nuevoPlatillo);
    }
    
}


restaurantApp.funciones.ordenar(2);

restaurantApp.funciones.agregarPlatillo("Torta", 15);


const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);