// app-shell static assets
const staticCache = 'static-content-v1';

// app-shell dynamic assets
const dynamicCache = 'dynamic-content-v1';

const assets = [    // resources to be cached - requests
    '/',
    // '/html/about-us.html',
    // '/html/contact.html',
    // '/html/courses.html',
    // '/html/faq.html',
    '/html/index.html',
    // '/html/privacy-policy.html',
    // '/html/profile.html',
    // '/css/styles-about-us.css',
    // '/css/styles-contact.css',
    // '/css/styles-courses.css',
    // '/css/styles-faq.css',
    '/css/styles-index.css',
    // '/css/styles-privacy-policy.css',
    // '/css/styles-profile.css',
    '/js/app.js',
    // '/images/contact.png',
    // '/images/down-arrow.png',
    // '/images/fb1-logo.png',
    '/images/GuitarLessonsPWA.png',
    // '/images/instagram1-logo.png',
    '/images/profile-small.png',
    // '/images/shield.png',
    // '/images/twitter1-logo.png',
    // '/images/userProfile.png'
];



// install service worker (while installing SW -> cache assets)
self.addEventListener('install', evt => {
    // console.log('service worker installed');

    evt.waitUntil(
        //adding to cache (pre-caching)
        caches.open(staticCache).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
});

// listening for service worker activation
self.addEventListener('activate', evt => {
    // console.log('service worker activated');

    // deletes old cache and access a new version of cache - via Promise
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(keys 
                .filter(key => key !== staticCache)
                .map(key => caches.delete(key))    
            ) 
        })
    )
});

//fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);

    // run the code if it is not in the request URL
    if(evt.request.url.indexOf('firestore.googleapis.com') === -1){

        // access from the cache not server
        // access cache to match the request - offline function
        evt.respondWith(
            caches.match(evt.request).then(cacheRes => {
                return cacheRes || fetch(evt.request).then(fetchRes => {
                    return caches.open(dynamicCache).then(cache => {
                        cache.put(evt.request.url, fetchRes.clone())
                        return fetchRes;
                    }) 
                });
            }) 
        );
    }
});



// .catch(() => caches.match('/html/oops.html')) ---> line 83 if needed