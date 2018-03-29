self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('yubisites-v1').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/css/fontawesome-all.min.css',
       '/css/fontawesome.css',
       '/css/materialize.min.css',
       'css/style.css',
       '/js/init.js',
       '/js/materialize.js',
       '/js/jquery-2.1.1.min.js',
       '/webfonts/fa-brands-400.eot',
       '/webfonts/fa-brands-400.svg',
       '/webfonts/fa-brands-400.ttf',
       '/webfonts/fa-brands-400.woff',
       '/webfonts/fa-brands-400.woff2',
       '/webfonts/fa-regular-400.eot',
       '/webfonts/fa-regular-400.svg',
       '/webfonts/fa-regular-400.ttf',
       '/webfonts/fa-regular-400.woff',
       '/webfonts/fa-regular-400.woff2',
       '/webfonts/fa-solid-900.eot',
       '/webfonts/fa-solid-900.svg',
       '/webfonts/fa-solid-900.ttf',
       '/webfonts/fa-solid-900.woff',
       '/webfonts/fa-solid-900.woff2',
       '/site.webmanifest',
       '/img/logo.svg',
       '/img/favicon-32x32.png',
       '/img/favicon-16x16.png',
       '/img/android-chrome-192x192.png',
       '/img/android-chrome-512x512.png',
       'https://fonts.googleapis.com/icon?family=Material+Icons'
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {

   event.respondWith(
    
    caches.match(event.request).then(function(response) {
      console.log('Fetching: ' + event.request.url )
      return response || fetch(event.request);
    
   })
    
  );
    
});
