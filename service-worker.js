// Evento de instalación del Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './manifest.json',
          './service-worker.js',
          './Image/web-app-manifest-192x192.png',
          './Image/web-app-manifest-512x512.png',
          './Image/favicon-96x96.png',
          './Image/logo.jpeg' // Asegúrate que la imagen esté en la carpeta correcta
        ]);
      })
    );
  });
  
  // Evento de fetch (para interceptar las solicitudes y servir desde el caché si es posible)
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Si hay algo en caché, lo responde, si no, hace el fetch normal
        return response || fetch(event.request);
      })
    );
  });
  