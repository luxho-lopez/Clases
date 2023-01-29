
iniciarApp()

function iniciarApp() {
    console.log("Iniciando App...");
    
    cargandoDatos();
}


function cargandoDatos() {
    console.log("Cargando Datos....");

    personaData("Luxho");
}

function personaData(perosna) {
    console.log(`Usuario Correcto: ${ perosna }`);
}