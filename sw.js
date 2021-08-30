self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./" , "./images/logo192.png"]);
        })
    );
});


self.addEventListener("fetch" , e => {
    e.respondWait(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});