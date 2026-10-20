const CACHE = "igospiral-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => {
      return c.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  
  // Sla verzoeken naar browser-extensies over
  if (!e.request.url.startsWith('http')) return;

  e.respondWith(
    Promise.race([
      fetch(e.request).then((response) => {
        // Sla de nieuwste versie op in de cache
        const clone = response.clone();
        caches.open(CACHE).then((cache) => cache.put(e.request, clone));
        return response;
      }),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("timeout")), 3000)
      )
    ])
    .catch(() => {
      return caches.match(e.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;
        
        // Als de pagina niet in de cache staat en de browser vraagt om een navigatie
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
