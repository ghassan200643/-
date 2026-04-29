const CACHE_NAME = 'yaqeen-final-v34'; // نسخة جديدة لنسف القديم

const ASSETS = [
    './',
    './index.html',
    './settings.html',
    './dua.html',
    './azkar_salah.html', 
    './hisn.html',        
    './istikhara.html', 
    './sunnah.html',
    './adhksr.html',      
    './contact.html',
    './style.css',
    './app.js',
    './prayers.js',
    './manifest.json',
    './logo.png',     
    './audio/click.mp3',
    './audio/adhan.mp3'
];

self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return Promise.all(
                ASSETS.map(url => {
                    // السحر هنا: إذا لم يجد ملفاً، سيتجاوزه ولن يعطل باقي التطبيق!
                    return cache.add(url).catch(err => console.log('❌ ملف مفقود لا يعمل أوفلاين:', url));
                })
            );
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => { if (key !== CACHE_NAME) return caches.delete(key); })
        )).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).then(fetchRes => {
                return caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, fetchRes.clone());
                    return fetchRes;
                });
            });
        }).catch(() => caches.match('./index.html'))
    );
});