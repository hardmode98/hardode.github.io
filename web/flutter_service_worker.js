'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "dc09005dce28096ac7f65c93d3fe78fd",
"/": "dc09005dce28096ac7f65c93d3fe78fd",
"main.dart.js": "e18953adfe496b1957a5db538cc8a7f5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c1ca6730772bb18f3c61f1eddaf881",
"assets/LICENSE": "53b06669cf57fe3859798359f1d4fd4d",
"assets/AssetManifest.json": "4a6b8934a2b1544f66afbc7ba7e16651",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/loginback.jpg": "fdd9274c60dfced03fcb983f976400a6",
"assets/assets/images/face.png": "abf5e01fa622d6fbe049de264c9c0882",
"assets/assets/images/qrblack.png": "2d5e046276700a38e45ad952d555ed9d",
"assets/assets/images/qrscan.png": "70a106014cdc69c45b0f28adfee326ba",
"assets/assets/images/google.png": "bdf33e93921a5ccf8eb43b44e6cb22a2"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
