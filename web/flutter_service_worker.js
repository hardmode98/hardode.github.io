'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "qrcode.min.js": "517b55d3688ce9ef1085a3d9632bcb97",
"alignpat.js": "1e58b6d563d49987403280b50692757a",
"bmparser.js": "c48502b57f83ec17935d44b4ac699657",
"index.html": "96961d4ad4694ee83a8420416030de4b",
"/": "96961d4ad4694ee83a8420416030de4b",
"qrcode.js": "3b02a98d308685a61a412aa80632091b",
"js/webcodecamjquery.js": "47f4408751f9d5a6af050430861adc2f",
"js/DecoderWorker.js": "7d84d4f5c21cb6326d1c0d88e7a6a767",
"js/main.js": "a42590bd0b752b1545bfb7b3bf0223ef",
"js/webcodecamjs.js": "73b10bbfa3ecfbb1933eb6fd0c6554cd",
"js/filereader.js": "f8c965292aa4aba4117c7f3f81612427",
"js/mainjquery.js": "c8253109fda819c18d818d435924b5fa",
"js/qrcodelib.js": "9bf8929f6a630a14bd68a061f2e75ce3",
"js/jquery.js": "7a7b18606448bded22cd1cf48d4712cc",
"main.dart.js": "5b8ae1f531f2151d398c4a7ba96e3327",
"grid.js": "ec988e2a66b879dc30fd910f14d379f6",
"decoder.js": "b22aa6107398adbd4f7d1799140fa220",
"detector.js": "73167abbf5eff25aa531a7f962639b65",
"qr-scanner.min.js": "596802f59486878108562cfedf549be8",
"version.js": "c6d740362454336c31fe55a4831d5fb1",
"datablock.js": "bf08eb72b68af0d3cf2c4306826922c3",
"databr.js": "c7c8686a15dfb619aabe541784158304",
"instascan.min.js": "4befa7049ff55d6f3992f654f3c74147",
"bitmat.js": "8d18b552d807dcfe97f7848f85e5702a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"formatinf.js": "0ff81bda127209367866acb50bdbe2af",
"qcode-decoder.min.js": "cde1950a90a876683992477cc18789a2",
"qr-scanner-worker.min.js": "55993a808d55c8ad7c33cc79e691e03e",
"errorlevel.js": "cc72521fc177b9749df02ec2096ed4e2",
"gf256.js": "ce071e03220ec42160beb0d6c9c16105",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c1ca6730772bb18f3c61f1eddaf881",
"rsdecoder.js": "581cddc2a35f03f70439ad0bb952847a",
"html5-qrcode.min.js": "b04d740aac40ebcd7bd346fab1b4ebca",
"findpat.js": "0f617abf6371d9f1456da913e6acc4f8",
"assets/LICENSE": "35042a20bc475ad7068425ad5704e972",
"assets/AssetManifest.json": "4a6b8934a2b1544f66afbc7ba7e16651",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/loginback.jpg": "fdd9274c60dfced03fcb983f976400a6",
"assets/assets/images/face.png": "abf5e01fa622d6fbe049de264c9c0882",
"assets/assets/images/qrblack.png": "2d5e046276700a38e45ad952d555ed9d",
"assets/assets/images/qrscan.png": "70a106014cdc69c45b0f28adfee326ba",
"assets/assets/images/google.png": "bdf33e93921a5ccf8eb43b44e6cb22a2",
"datamask.js": "020dfd456422ce34013656e9fd2c71b8",
"gf256poly.js": "5a496ca11ae528d1988f2936b02c534b",
"app.js": "343e4ac905a8801393ec9d139ef8d3b0",
"qcode-decoder.js": "e31adbdc2249ad61399146b2f117ecde"
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
