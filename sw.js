// bump this value each time you deploy to force clients to refresh caches
const CACHE_NAME = 'fuel-v23';
const ASSETS = [
  './index.html',
  './manifest.json',
  './zxing.min.js',
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

self.addEventListener('fetch', event => {
  const reqUrl = new URL(event.request.url);

  // Always fetch external APIs directly — never cache them
  if (
    reqUrl.origin !== self.location.origin ||
    reqUrl.pathname.includes('openfoodfacts') ||
    reqUrl.hostname.includes('openfoodfacts.org')
  ) {
    event.respondWith(fetch(event.request).catch(() => {
      return new Response(JSON.stringify({ status: 0 }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }));
    return;
  }

  // Always try network first for navigation (index.html)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetchAndCache(event.request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Cache-first for static assets (zxing.min.js, icons, fonts, etc.)
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetchAndCache(event.request).catch(() => undefined);
    })
  );
});
