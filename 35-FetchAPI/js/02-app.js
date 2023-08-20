const cargarJSONBtb = document.querySelector('#cargarJSON');

cargarJSONBtb.addEventListener('click', obtenerDatos);


function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then((result) => {
            // console.log(result);
            console.log(result.status); 
            
            return result.json();
        })
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
}