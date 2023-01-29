const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion: ${ id }`);
    },

    pausar: function(id) {
        console.log(`Pausando... ${ id }`);
    }
}

reproductor.reproducir("Lady Gaga");
reproductor.pausar("Lady Gaga");