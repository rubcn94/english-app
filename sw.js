const CACHE = 'eng-app-v13';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './data/blue.js',
  './data/green.js',
  './data/vocab.js',
  './data/sherlock.js',
  './data/templates.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first: always try to fetch the latest version first, so updates
// show up immediately without needing to clear the browser cache. Only fall
// back to the cached copy when there's no connection (offline use), or when
// the network hangs past FETCH_TIMEOUT_MS instead of failing outright (a
// bare fetch() never times out on its own — a stalled connection would
// otherwise leave the page loading forever instead of falling back).
const FETCH_TIMEOUT_MS = 8000;

function fetchWithTimeout(request) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('fetch timeout')), FETCH_TIMEOUT_MS);
    fetch(request).then(
      res => { clearTimeout(timer); resolve(res); },
      err => { clearTimeout(timer); reject(err); }
    );
  });
}

self.addEventListener('fetch', e => {
  e.respondWith(
    fetchWithTimeout(e.request)
      .then(res => {
        // Only cache genuinely successful responses — caching a 404/500
        // would make that error the "offline fallback" for this asset
        // from then on, until the next successful online fetch overwrites it.
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
