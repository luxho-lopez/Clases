const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const url = 'data/datos.txt';

    fetch(url)
        .then((result) => {
            console.log(result);
            console.log(result.status);

            return result.text();

        }).then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        });
}