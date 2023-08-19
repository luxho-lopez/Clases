const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then((result) => {
            console.log('Resukltado', result);
        }).catch((err) => {
            console.log('Bloquear', err)
        });
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: 'img/logo.jpg',
            body: 'Tecnology TheLux'
        });

        notificacion.onclick = function() {
            window.open('https://luxho-lopez.github.io/')
        }
    }
});