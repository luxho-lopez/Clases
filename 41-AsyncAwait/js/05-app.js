const URL = "https://picsum.photos/list";

document.addEventListener('DOMContentLoaded', obtenerDatos);


function obtenerDatos() {
    fetch(URL)
        .then( respuesta => respuesta.json() )
        .then( resultado => console.log(resultado) )
        .catch( error => console.log(error) );
}

async function obtenerDatos() {
    
    try {
        const respuesta = await fetch(URL);
        const resultado = respuesta.json();
        console.log(resultado);   
    } catch (error) {
        console.log(error);
    }

}