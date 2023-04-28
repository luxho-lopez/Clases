document.addEventListener('DOMContentLoaded', function () {

    // Campos Datos Usuario
    const email = document.querySelector('#email');
    const emailCopy = document.querySelector('#emailCopy');
    const asunto = document.querySelector('#asunto');
    const mensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnEnviar = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner')


    // Asignar un evento a cada input
    email.addEventListener('input', validar);
    asunto.addEventListener('input', validar);
    mensaje.addEventListener('input', validar);
    emailCopy.addEventListener('input', comprovarCC);

    // Enviar el formulario
    formulario.addEventListener('submit', enviarEmail);


    //Resetear el formulario
    btnReset.addEventListener('click', function (evento) {
        evento.preventDefault();

        resetFormulario();
    });

    // Validar el formulario
    const formEmail = {
        email: '',
        asunto: '',
        mensaje: ''
    };


    function enviarEmail(evento) {
        evento.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');

            resetFormulario();

            // Crea el alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Enviado correctamente!!!';

            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    };


    function validar(evento) {
        
        if (evento.target.value.trim() === '') {
            errorAlert(`El ${evento.target.id} es requerido...`, evento.target.parentElement);
            formEmail[evento.target.id] = '';
            evaluarFomrulario();
            return;
        }

        if (evento.target.id === 'email' && !validarEmail(evento.target.value)) {
            errorAlert('El email no es valido', evento.target.parentElement);
            formEmail[evento.target.id] = '';
            evaluarFomrulario();
            return;
        };

        limpiarAlerta(evento.target.parentElement);

        formEmail[evento.target.id] = evento.target.value.trim().toLowerCase();

        evaluarFomrulario();
    };

    function errorAlert(mensaje, referencia) {
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        //Prueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    };

    function validarEmail(email) {
        const expresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const result = expresion.test(email);
        return result;
    };

    function evaluarFomrulario() {
        if (Object.values(formEmail).includes('')) {
            btnEnviar.disabled = true;
            btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');

            return;
        }

        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
        // console.log(Object.values(formEmail).includes(''));
    };

    function resetFormulario() {
        formEmail.email = '';
        formEmail.asunto = '';
        formEmail.mensaje = '';

        formulario.reset();

        evaluarFomrulario();
    };
});