// Offline support: every file the site loads is saved as it's fetched, and served from that copy when
// there's no connection (at the table, say). Online, the network always wins, so updates show up at once.
// The cache name has the build id, so a new deploy starts a fresh cache and clears old ones.
const CACHE = "dm-prep-b82cc3cd0161bf856693e7d96a929ee424ba4d84";
const START = ["./", "app.js?v=b82cc3cd0161bf856693e7d96a929ee424ba4d84", "styles.css?v=b82cc3cd0161bf856693e7d96a929ee424ba4d84"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(START)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith("dm-prep-") && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((hit) => hit ?? (event.request.mode === "navigate" ? caches.match("./") : undefined)).then((hit) => hit ?? Response.error())),
  );
});
