// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets')

let tweets = [];

// EventListeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets')) || [];

        console.log(tweets);

        crearHTML();
    });
}


// Functions
function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe...
    const tweet = document.querySelector('#tweet').value;

    // Validacion del formulario
    if(tweet === '') {
        mostrarError('El contenido no debe estar vacio...');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // Añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];

    // Una vez agregado se crea el HTML
    crearHTML();

    // Reiniciar el formulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.classList.add('error');
    mensajeError.textContent = error;

    // Insertarlo en el ID contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina el mensaje de error despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach( tweet => {

            //Agregar un Boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'x';

            // Añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }


            //Creamos el HTML
            const li = document.createElement('li');

            //Añadir el text
            li.textContent = tweet.tweet;

            // Añadir el boton
            li.appendChild(btnEliminar);

            //Agregarlo al HTMl
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//Agregar los tweets actuales a localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina el Tweet
function borrarTweet(id) {
    tweets = tweets.filter( tweet => tweet.id !== id);

    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}