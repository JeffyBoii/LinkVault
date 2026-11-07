// LinkVault service worker: makes the app installable and lets it open offline.
const VERSION = 'linkvault-v1.1.1';
const SHELL = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png'];
const IMG_CACHE = VERSION + '-img';
const IMG_MAX = 80;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
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
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); return r; })
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
  // Libraries and app files: cache first. Each file is saved from the page's own request,
  // so what we serve back always matches what the page asked for.
  e.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    const r = await fetch(req);
    if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })());
});
