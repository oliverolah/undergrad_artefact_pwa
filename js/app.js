// checker for the service worker browser support
// navigator = object in JS representing the browser
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker is registered', reg))
        .catch((err) => console.log('service worker is not registered', err));
}