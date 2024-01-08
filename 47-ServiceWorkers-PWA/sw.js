const nombreCache = 'apv-v1';
const archivos = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]

// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log("Instalado el service worker...");

    e.waitUntil(
        caches.open(nombreCache)
            .then( cache => {
                console.log('Cacheando...');
                cache.addAll(archivos);
            })
    );
})


// Metodo para activar el service worker
self.addEventListener('activate', e => {
    console.log("Activando el service worker...");

    console.log(e);
})


// Evento fetch para descarga rarchivos estaticos
self.addEventListener('fetch', e => {
    console.log('Fetch', e);

    e.respondWith(
        caches.match(e.request)
            .then( respuestaCache => {
                return respuestaCache;
            })
    )
})