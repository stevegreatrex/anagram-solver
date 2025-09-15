const CACHE_NAME = "anagram-solver-v7";
const TAILWIND_CDN = "https://cdn.tailwindcss.com";
const ASSETS = [
  // Precache only the assets you need for offline. You can include index.html
  // so you have an offline fallback, but DO NOT serve it cache-first for navigations.
  "./index.html",
  "./words.js",
  "./letter-tile.js",
  "./manifest.json",
  "./robots.txt",
];

// Install: precache assets and activate immediately
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches and take control
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((names) =>
        Promise.all(
          names.map((n) => (n !== CACHE_NAME ? caches.delete(n) : undefined))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Fetch: network-first for navigations; SWR for other same-origin GETs
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Always allow caching of Tailwind CDN for offline
  if (req.method === "GET" && req.url.startsWith(TAILWIND_CDN)) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Only same-origin GET requests beyond this point
  if (req.method !== "GET" || !req.url.startsWith(self.location.origin)) return;

  // Network-first for navigations (HTML documents)
  if (req.mode === "navigate" || req.destination === "document") {
    event.respondWith(networkFirst(req));
    return;
  }

  // Stale-while-revalidate for scripts/styles/images/fonts
  if (["script", "style", "image", "font"].includes(req.destination)) {
    event.respondWith(staleWhileRevalidate(req));
    return;
  }

  // Default: try cache, fall back to network
  event.respondWith(caches.match(req).then((cached) => cached || fetch(req)));
});

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (e) {
    // Offline: serve cached request or fallback to index.html for navigations
    return (
      (await caches.match(request)) || (await caches.match("./index.html"))
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((response) => {
      if (
        response &&
        response.status === 200 &&
        (response.type === "basic" || response.type === "opaque")
      ) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => undefined);

  return cached || networkPromise || fetch(request);
}
