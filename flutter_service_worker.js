'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ba370f0454d3a206abb00aac003835fa",
".git/config": "114938ef9923360c4a69adba60b12c65",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8933aa8df0ef724578dbe682d0cb690e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "60182dac124f16153a1426517c4abe41",
".git/logs/refs/heads/main": "c39212d49e864f555b78e9287f597d37",
".git/logs/refs/remotes/origin/main": "e2dfeab403113b5788500003bad3f1c1",
".git/objects/02/98b1a1785e312ea67aba0f68c3ec9d41e1d0b8": "7894c05849505866e20246d20b9b3915",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/82fb55a42ea4a3498bf86908e1db996407a56b": "b8b1810f077da3b72c38edbaa457909d",
".git/objects/0a/4ec6148c5fea2cdc467baba467c8f05608eb7d": "d6f52f3752ec3f83777e7970c63f4e6e",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/9638ff826ca705945972039b3bf56f742778fa": "5d68d05a34dbcb24d1b118aebfa45bbc",
".git/objects/16/56af972150491d407c3bc59b1cb3b842364d40": "bfe37491d964cf62f903cb8379360747",
".git/objects/19/3c20d053acc10d069dba751617c1dd4a644e97": "20a0b8de3b8f12c71d3ea72bca15d4bb",
".git/objects/19/d99466e2f127bc16618c13dee25d89839bb8a8": "81012235540c10f244c1d84b5c6b714c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/28/302abf1aef53d4bd4c57cf7a37d289354fc76d": "17ae550df7df9d62f7338e11109a802f",
".git/objects/29/6849ea4ddd06540e1887f43a3793d520bd269f": "1c69d02247004f2316f5fe9bdb196f31",
".git/objects/34/d56722d67cf8cff7571f7124f42024f47f602b": "3f795a3d7d2b70b823c09ac7431d60e5",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/43/4f5564de56217c73511fedf881efacfe7ecdbc": "563749a15309687df44ac845ebac62b8",
".git/objects/46/1e44a6fce36124f9be5bf562b40b73ab0d69ba": "dd5bdf1c5a06517f7976636700778690",
".git/objects/46/35bc7917a4ca4ae5a856283ba3945098f62d35": "ff3146f5e1feaa6c1c5c9aa8bdd6f385",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/4bcb44ed0ea498631a5acfabd0dcbe4ba1a44f": "913a326d830b4628d0f73506b6c1ff29",
".git/objects/50/9f59a7bab41965b8cc5c7349bbb86f3b7fd1ce": "a21efb65f09751b8cf1c6bb3b116d064",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/58/cf6d090163e570ce31eec5db83afa38e821f3d": "ad8a31e516483805bee02758100c4f9c",
".git/objects/5d/2516db0f423c6eeb47db9dca35059261a6b183": "5f092f5cc9ccf9ec124b2f7acbf50dd9",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/029d4086682a92b04942f4731db70d935109ce": "a36a19ec2ff75dcc83ea5e5c0d1c04ca",
".git/objects/68/3dcc2ae5c2e016e07958ebe03c79c73f8a7c5d": "15c580eaacee7041bbd7daab29031cb8",
".git/objects/6d/68042ecbf5e7200dc8ec3bb50bf0bd375d57d8": "6ab1c2c06f9948c56a4a85de0805246f",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/839b91a5c726951ec6104835335bc63e034192": "ed2ee7c9570e8c8585a39306d3832f62",
".git/objects/77/b7d79da558de817a7c64e64b1228567ab90ff0": "5c56bc8879c18c686f83d4971d618dba",
".git/objects/7e/205ea9e06be5853d01e2337c34c5b8b686a951": "1d60fb6a75fb02c5df766a965d0300a1",
".git/objects/7e/c9865b14cb7d0388dbe8e1c623c11ed556f20a": "da29fba6678a65c0374682d4e8ab8fd1",
".git/objects/81/0287a40e5057b70e520da1971fa60db387525a": "f8eae3862028c3c2f27536aafbadf729",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/30c8550d3d79eccec7cd45db672f8001a13819": "72a81c2d7b69d121db7db6a3985ea344",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/a647d317cb464e7be275bf31d45b54733c653c": "33689b4b20c8f60f2a12eb84a6aca755",
".git/objects/8f/f53f946d16c23b48adc209b97c8cc1b14ecb04": "b0b99cda7f90a1e38c65f78df15b21c2",
".git/objects/93/0fc00b82694e5ec8c0dbb874d4264c43f84305": "80dc32509f52aae712c4bf3736641a2a",
".git/objects/9e/1ead12bbe2094b0b32ac7012d8233d1f52a415": "764efccb291dbd773c9db7856f927620",
".git/objects/9f/edca4c39525c53ef4d433b3f3904fa214bbda9": "d6af193239a6997f53013df88f46ae3d",
".git/objects/9f/fdf97b23977f4cf0b4a92790fa085156da6629": "2d226613055c7f671bcd5539f021156b",
".git/objects/ad/ee8da1d9c33554c723f4d1db06e7c2332d4d3e": "38e758e39cfd68da2899dc4038eb1956",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/c7e757e3c7fe3f5613d9e37ee40a5bc6b3199b": "3b89b853ea82ab8ee430a15d2ae9e5d3",
".git/objects/b4/7b62d4cb4abccdf5420f02dbd46c405d7159c4": "8b1192fa3ba563300bf6193bb5f654f0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/f215897a90ede488582133592457a71d188b1f": "1caa7212bdee240c3480eb791faf87f0",
".git/objects/c4/d05be1544a456b13b05b66f88ce30bca4f1a45": "bee942fd261018d9916f696e5a15a5cf",
".git/objects/c8/b015756494634c5ba089d888872091ca998dae": "9fc1828b1a0d0b7253e8cb5aff9f4c15",
".git/objects/c9/5ec53b85f2770588f847a076e849a13318c895": "277de7d2622eb5b16398e0fe576ca02e",
".git/objects/cd/225ead091b19aa240bb9f3257b5c22b8c1413a": "2308745c72ebaab6409e81c5879e9781",
".git/objects/cd/a7a6ff03da40b0dcf931a762e9ab77b5313ada": "fe24f3fa7c9345ff7954642d82c53e9b",
".git/objects/cf/d7ca890e1dee8d6648f35b0fc8d9e036d231b5": "e2b8c2fb4e1e3f22ca85cf704fa7294b",
".git/objects/d2/c7e0899fefff5dd1a7bce63e3135caaf387d6d": "de1a3b589cef3fa5ef8871e6d44b65fa",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/00ac4753e1e65823fc46f2f07b080ad8bf5326": "31ec088c850d2668ea27f40a051f0ba0",
".git/objects/d8/7fb16bbac22733044e6cea561cb48f0bdf5d08": "931c5a9ca8dc519d179809945df98004",
".git/objects/dc/2fff8c0c4dc0a06b149f39b874c1d7b55c3de2": "79cb3cdc2dcbede57dff4df984a550e3",
".git/objects/dc/6190ff0370401290e92fe362fb0173983bc644": "03958ceba1743c586f87dff0a004cfa1",
".git/objects/de/14f3f1e5bbf87cef9b86342eb0000f1b2a95c9": "5390d32f0ee81437773108698e6fcf87",
".git/objects/e0/d62289568a914e7e1ef5fef21ae12ee9f5e8c4": "12a64cdc102a5723b133e5501feb9451",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e7/b9dfe64103f68308dc570b80f64991a9aabdde": "163b3b55af9ae96371057afbd868d8dd",
".git/objects/ea/24036b12c0890aaf73ef35d8cd0714f6f5e195": "c7567e74f623457c7fd12b78da54fe05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/326803ecac4eba8b5e1610a047cf401f3ff314": "493fa9f8dc222a6fe0f87d856b9fbf4e",
".git/objects/ed/0ba335f664ffd00b9fee43b49fa170c2ac03cc": "2a867fd8b4a3dd9b916cea95877a7970",
".git/objects/ee/d774deb10b64b6337a2aea07f1e5289eb7c0a9": "3d6ed9cb624cb2d2b4ae75807844db59",
".git/objects/f6/b12f18fdbb0824824e3ebabab849cde664a96c": "99ae1a95f05242c7ad902cd9aa75b203",
".git/refs/heads/main": "10145a83e4da378c86bfb35ebb806510",
".git/refs/remotes/origin/main": "10145a83e4da378c86bfb35ebb806510",
"assets/AssetManifest.bin": "ee40f684e77703b0ea0b96581481f137",
"assets/AssetManifest.json": "053bb1c93b05f2df89d167d28d98328e",
"assets/assets/aaa.png": "89b9f0a129ab4446a2f6a2231c79974f",
"assets/assets/dog.png": "b50c41b866891915f881e66dd15708ec",
"assets/assets/goseam1.png": "2ea85d7448475a744c1485c2eac3d3d1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b4f4119560c4634d651c58bf36b28ac7",
"assets/NOTICES": "1c6ce2ac4e9a0c07babdd29f23401687",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c8efbd9710304201976925e2f53ee21",
"/": "5c8efbd9710304201976925e2f53ee21",
"main.dart.js": "20b1a6f4f1efe26fc693a33262703aa2",
"manifest.json": "915d55787ceeab70ecf35a90282498df",
"README.md": "5f09bd7aaed6b3f1fa28c17247c7fe5e",
"version.json": "9d79f08caaa14468f2c2435bea576bde"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
