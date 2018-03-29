const publicKey = 'BDNcdR7b5w_zVUNsmmKbZoKn-IKNSvqdhIBSKHc75Iy8k7UXfZZG9dzUnHasP9TQYW__X13rj5NuysQsQATu1Ig';

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
  }); // end of document ready
})(jQuery); // end of jQuery name space


self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['yubisites-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
// Register Service Workers & Push Notification
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('service-worker.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

