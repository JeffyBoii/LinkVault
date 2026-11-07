// LinkVault service worker: makes the app installable and lets it open offline.
const VERSION = 'linkvault-v1.1.0';
const SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
const LIBS = [
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18.3.1/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone@7.26.4/babel.min.js',
];
const IMG_CACHE = VERSION + '-img';
const IMG_MAX = 80;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await c.addAll(SHELL);
    // libraries are cross-origin; fetch them in no-cors mode so they can be cached
    await Promise.all(LIBS.map(u => fetch(new Request(u, { mode: 'no-cors' })).then(r => c.put(u, r)).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Page: network first so updates show up, cache when offline
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { caches.open(VERSION).then(c => c.put('index.html', r.clone())); return r; })
      .catch(() => caches.match('index.html')));
    return;
  }
  // Images (banners, site logos): show cached copy fast, refresh in background, keep the cache small
  if (req.destination === 'image' && url.origin !== location.origin) {
    e.respondWith((async () => {
      const c = await caches.open(IMG_CACHE);
      const hit = await c.match(req);
      const net = fetch(req).then(async r => {
        await c.put(req, r.clone());
        const ks = await c.keys();
        if (ks.length > IMG_MAX) await c.delete(ks[0]);
        return r;
      }).catch(() => hit);
      return hit || net;
    })());
    return;
  }
  // Everything else (app files, libraries): cache first
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
