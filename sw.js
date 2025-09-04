const CACHE_NAME = "anagram-solver-v4";
const urlsToCache = [
  "./",
  "./index.html",
  "./words.js",
  "./manifest.json",
  "./robots.txt",
  // Add fallback for offline
  "./sw.js",
];

// Install event - cache resources
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Opened cache");
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log("All resources cached");
        // Take control immediately
        return self.skipWaiting();
      })
  );
});

// Fetch event - serve from cache when offline with improved strategy
self.addEventListener("fetch", (event) => {
  // Only handle same-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version if available
      if (response) {
        console.log("Serving from cache:", event.request.url);
        return response;
      }

      // Fetch from network and cache the response
      return fetch(event.request)
        .then((response) => {
          // Don't cache non-successful responses
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          // Clone the response as it can only be consumed once
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        })
        .catch(() => {
          // Return offline page for navigation requests
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          throw error;
        });
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("Service Worker activated");
        // Take control of all open clients
        return self.clients.claim();
      })
  );
});

// Background sync for better offline experience (if supported)
self.addEventListener("sync", (event) => {
  console.log("Background sync event:", event.tag);
  // Could be used for syncing data when back online
});

// Push notifications support (for future enhancements)
self.addEventListener("push", (event) => {
  console.log("Push event received");
  // Could be used for notifications about new features
});
