workbox.skipWaiting();
workbox.clientsClaim();
workbox.routing.registerRoute(
  new RegExp("/users"),
  workbox.strategies.NetworkFirst()
);
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
