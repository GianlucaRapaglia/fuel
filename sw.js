// bump this value each time you deploy to force clients to refresh caches
const CACHE_NAME = 'fuel-v3';
const ASSETS = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap'
];

// helper to fetch-index-fallback (avoids serving stale index when online)
function fetchAndCache(request) {
  if (request.method !== 'GET') {
    return fetch(request);
  }

  return fetch(request).then(res => {
    const copy = res.clone();
    caches.open(CACHE_NAME).then(c => c.put(request, copy));
    return res;
  });
}

// Install: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // always try network for navigations to pick up new index.html
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetchAndCache(event.request).catch(() => caches.match('./index.html'))
    );
    return;
  }
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetchAndCache(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
