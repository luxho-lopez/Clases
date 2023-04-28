const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    console.log('Click en Card');
    e.stopPropagation(); // Detiene la propagación del evento
});

infoDiv.addEventListener('click', (e) => {
    console.log('Click en Info');
    e.stopPropagation(); // Detiene la propagación del evento
});

titulo.addEventListener('click', (e) => {
    console.log('Click en Titulo');
    e.stopPropagation(); // Detiene la propagación del evento
});