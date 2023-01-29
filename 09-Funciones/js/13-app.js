const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion: ${ id }`),

    pausar: id => console.log(`Pausando... ${ id }`)
}

reproductor.reproducir("Lady Gaga");
reproductor.pausar("Lady Gaga");