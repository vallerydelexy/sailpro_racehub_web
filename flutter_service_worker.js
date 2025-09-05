'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0a497bc9ec6e75302d39d68c8fb3e262",
"assets/AssetManifest.bin.json": "a1be4d31610c532c019ef802b72eefc0",
"assets/AssetManifest.json": "e667acc89e10ab474de72b8b3db8a8f5",
"assets/assets/arrow_direction.png": "9d4d4a07f1cb4da82f16531a322227f9",
"assets/assets/arrow_gray.png": "b82e749db02f8e8a4f0a1fbd3cb94624",
"assets/assets/background-image-registration.jpg": "08c60e02aee43504b02c88487d6bc54f",
"assets/assets/back_rounded.png": "409aadbe17d62a98b32b9d8d83aeec75",
"assets/assets/banner.png": "6b5672541c18c36d09cb446d92a81384",
"assets/assets/bg.png": "cd81a298a3589ae6e20bf15780b54904",
"assets/assets/bg_new.png": "54ad06489ac19be747acfea1ebb71df0",
"assets/assets/bg_phone.png": "7adac6a4411406cf76a14571586b8bc8",
"assets/assets/blue_circle.png": "b06f0622908ea2685b8a6dee7985c847",
"assets/assets/blue_line.png": "be642f6e00f9e6ccc43d06f2a8cafdf0",
"assets/assets/center_point.png": "c0c4aea39e088048c2fd841e5bb921a3",
"assets/assets/compass.png": "05fb1bb30b33a0c845a91951f2a82386",
"assets/assets/compass2.png": "86be52af56e01096c659661a7a1ab993",
"assets/assets/expanded_black.png": "7e7fa5893eaa900fc5a505844e132bb5",
"assets/assets/expanded_white.png": "b620a2a57e12f717881bf9e7a6b8bf67",
"assets/assets/expand_black.png": "3ac2dd4d773cb1145619b3f5de5b2c00",
"assets/assets/expand_white.png": "85ddd2e563915f42721907107a328d32",
"assets/assets/fallback_android.json": "00e02a3fcf003893620c1d2c719368d2",
"assets/assets/fallback_ios.json": "da575ec832638cd66d759e942a26059e",
"assets/assets/flag.png": "f3d1646aa36a43127545f2c20638a72c",
"assets/assets/flags/abandonement1.png": "55f5376beeeace83b0dfa989b403f58c",
"assets/assets/flags/abandonement2.png": "867af8b5afac2bfdd8fb604e0f60eccc",
"assets/assets/flags/abandonement3.png": "ce93ffddaa9d457042ef4556424e37f2",
"assets/assets/flags/changing_the_next_log1.png": "8c34ec4f10436e7e4348d2bf9cb439ef",
"assets/assets/flags/changing_the_next_log2.png": "d5e00a7b0012eac85f6cc325330e6ea1",
"assets/assets/flags/changing_the_next_log3.png": "7f9fb81a32033fae3f036525b7ba3ec3",
"assets/assets/flags/changing_the_next_log4.png": "960d5ece035bb0fda46f36937c642c8b",
"assets/assets/flags/changing_the_next_log5.png": "49000ea0f4447d4f93b6da97acd2f37f",
"assets/assets/flags/other_signals1.png": "65f188c6cf429a5fc2b28e5793ee73c3",
"assets/assets/flags/other_signals2.png": "5923707d2a28ca9c3e3a91e702ea03c8",
"assets/assets/flags/other_signals3.png": "df3da40f823c659865fa9c50e062ac74",
"assets/assets/flags/other_signals4.png": "1cc3564705242d9d28e45a6b9c4a4b2f",
"assets/assets/flags/other_signals5.png": "c39e8d6eb4ca61881041445fdf240f0f",
"assets/assets/flags/postponement1.png": "7a279a5aaecf4056016179c46ab029ea",
"assets/assets/flags/postponement2.png": "b03a433d3afc7a8d8961f5d1dccb7708",
"assets/assets/flags/postponement3.png": "e2602200c627a1f91234dc2f93c52e49",
"assets/assets/flags/preparatory1.png": "5968a7b5e231bb15dae4ef261743e926",
"assets/assets/flags/preparatory2.png": "490d923d9c5151f3f1084cb179dd4146",
"assets/assets/flags/preparatory3.png": "ab067fc47628b8ec8ac0a852047839e9",
"assets/assets/flags/preparatory4.png": "edc04dfda7fabe3ddc053cc64fc7054f",
"assets/assets/flags/preparatory5.png": "c945680fad8a16393757ec54dcc3b75d",
"assets/assets/flags/recall1.png": "37dd8d3bf91e48404c4e01f493b319c7",
"assets/assets/flags/recall2.png": "dd8c2caadca55bbf12e2fddfb988fe6a",
"assets/assets/flags/recall3.png": "daaa14b25dd52cd339c7193d0a8dfa59",
"assets/assets/flags/safety.png": "f14f487303396feb4d1fa61e10b1fc58",
"assets/assets/flags.png": "4cab27eae24aba55b5159e8a8c283e75",
"assets/assets/heart.png": "5198529a72756a5efcae89af565cf871",
"assets/assets/icon.png": "a751ba60142b5c016ced2017d3617620",
"assets/assets/icon2.png": "a751ba60142b5c016ced2017d3617620",
"assets/assets/join.png": "65a131bcf93e57f202cc8e4c37dd41e8",
"assets/assets/landing.png": "25cb61dd6981d004b7319d75fb9f13ff",
"assets/assets/locationpermission.png": "34f52a272717179daa44d4c5273c1181",
"assets/assets/location_icon_black.png": "9cb5e19fbebe168f5862e1f3c236966d",
"assets/assets/location_icon_black_pressed.png": "2ca5990f1f067ac7ece8b194d2a12851",
"assets/assets/location_icon_green.png": "7d6ff36c72d4ae21cd4423741eabaaf0",
"assets/assets/location_icon_green_pressed.png": "6693a11feafdf20035920473e16421cf",
"assets/assets/login-logo.png": "776d76f5882d35962fbae6340e278234",
"assets/assets/login.png": "25094fe1a6d38c68889322b28129f35f",
"assets/assets/new-bg.png": "3196ee3b81b5246000484db6db388ef6",
"assets/assets/p1.png": "002f49d64f13d51334d044f72b57d840",
"assets/assets/p2.png": "f51c0380dfd3fdaae605ccfbad9a7b75",
"assets/assets/p3.png": "a6c7f1df3c6d0f7cc19d18313c99ebbd",
"assets/assets/phone.png": "18ad1f21254a4fdbfeb4c41c5829153f",
"assets/assets/phone2.png": "bb2379b5b2ae53b560a0ad9fd4d4cc4d",
"assets/assets/pulse.png": "06638e83e4b2d552186500e774b8fe02",
"assets/assets/racehub.png": "76208cef6eb271b0072a70d4723d29ea",
"assets/assets/record_icon.png": "19cf92627aa9ce345bc3eaf53cb4f211",
"assets/assets/record_icon.psd": "3f152a35e6d15c9d54fc8763b95c9316",
"assets/assets/record_icon_pressed.png": "b9cf1f0046ad920c48dab562f69dc591",
"assets/assets/red_dot.png": "147ed5359daf79ab5b2a0610e53b7632",
"assets/assets/red_line.png": "60b781c4794c20c97aa5adb213c5c662",
"assets/assets/reset.png": "7d664df893edb1316868057a038e9d7a",
"assets/assets/reset_black.png": "1017d39704613d97c380a89cb56fe694",
"assets/assets/reset_block.png": "bdede0b7f9f1d69d09cd0e14d5b64681",
"assets/assets/reset_green.png": "338792bbec75193a25e2dcc8763c5196",
"assets/assets/rules.pdf": "686c378ea76e8c2f87793679c4517a09",
"assets/assets/rules.png": "7595a0fdbfea05daad4d6ec707a64383",
"assets/assets/sail.png": "e8f18c5bc725339a3e6a12fd442427a2",
"assets/assets/sailpro-buy-sailprox-new.png": "129c4e2d2a7cdd39961ada15fe734b7c",
"assets/assets/sailpro-buy-sailprox.png": "043820b0fdc61ce5dcac9ccadffbd02b",
"assets/assets/sailpro-x.png": "666fefb582b21181139dbf195ae2db28",
"assets/assets/sailpro-yacht-club.png": "cf23bc66c5a4ba03090877133f0169b8",
"assets/assets/sailpro_splash192.png": "2a8393c25cb8031fe94fdf99502eff3b",
"assets/assets/sail_black.png": "cb6810f0466c1fe7042c0832a9486916",
"assets/assets/sail_green.png": "933495d95b9a82f0a89406120a99d104",
"assets/assets/save_block.png": "19f3eba58383034dfd731ae2ba49d8b2",
"assets/assets/save_rounded.png": "4907c748b4582527c72aa97e33e77c19",
"assets/assets/settings.png": "fef8b739fb890009b4b593c1e7bab0a5",
"assets/assets/settings_black.png": "303221f93f845714497bfc0981018057",
"assets/assets/settings_block.png": "b3b40ad054b6dd791de56e667ce278c6",
"assets/assets/settings_green.png": "9f7bc07d86ddc4fa9b9fa77f7aa72281",
"assets/assets/speak_icon_black.png": "9f0558e88b3eef2c0e3ddaebd09f30cc",
"assets/assets/speak_icon_black_pressed.png": "01d3c4e33a93066f37da355e690083cc",
"assets/assets/speak_icon_green.png": "1f8a0d5e0623e49a6f22d7d4b557ee8c",
"assets/assets/speak_icon_green_pressed.png": "5d9ef9a7ff638420493b1e7c42557c6c",
"assets/assets/speed.png": "cc0f46587322be513b8656e293206be6",
"assets/assets/speed_icon.png": "297bc73a828a78ae6c73a7b3aaf8cc24",
"assets/assets/speed_icon_pressed.png": "643f07c55ca985d24ca05e2c55740f24",
"assets/assets/splashscreen.png": "4f4b169f91ec5cb110b7e0923dc13069",
"assets/assets/splash_icon.png": "1c74bd6513d252aca006883334ebff62",
"assets/assets/splash_screen_image.jpg": "eaa196dbaf05ea44fbecc127a6d4b57b",
"assets/assets/splash_screen_image.png": "29372febb6bc609a99c159702b9e7279",
"assets/assets/splash_small_icon.png": "b4706615a98807100793d3e5f34199e6",
"assets/assets/start.png": "ee282858890b3f3451f07e3c37d6d6ea",
"assets/assets/startsync.png": "f67c7073c56853a482f8917959bf5b3e",
"assets/assets/start_block.png": "1f93ed0bf401a2bd7a0a411980dee5e0",
"assets/assets/start_green.png": "de2c9b4fe6e75d72c5e7c9d65bda43a6",
"assets/assets/start_rounded.png": "8d7a7e2351ba8f96091e0f62fe830144",
"assets/assets/stop.png": "3b7d5b9e2c059106a4024295a66da04e",
"assets/assets/stop_block.png": "85659200f0460b1d3dff1379bceeac62",
"assets/assets/stop_green.png": "7cd9cd27fa9e68f496fc2ed9715db6b8",
"assets/assets/stop_rounded.png": "0b1973888b4e4671bc5f4ca9bf38de03",
"assets/assets/stop_rounded_green.png": "d605341a146bab5fc064f2659c35fe58",
"assets/assets/synthesis.wav": "50e9d93c63bf22b4c1731f61fa55d741",
"assets/assets/timer.png": "274be37a9cc3c59647a60f3381ac0e30",
"assets/assets/timer_black.png": "8594580a9e0e9d7708d6aff2b97ef804",
"assets/assets/timer_green.png": "c76d0a1014dd4dc84c2a4b44682b43d3",
"assets/assets/timer_red.png": "75d1c5a02a0ff4c07796cc7326b909a9",
"assets/assets/waterproof_phone_cases.png": "d4e86351e7bbbe83a6e1917269374130",
"assets/FontManifest.json": "be5da34b2e6eba2e016d4e1e77bc62b0",
"assets/fonts/Digital.ttf": "58045dabdc3a361cb9bb9faf2f1dd1f3",
"assets/fonts/MaterialIcons-Regular.otf": "995eddad6cc4a8ffa64b5c0e5b1da27c",
"assets/fonts/Montserrat.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/fonts/Rigelstar.otf": "331bc04ebb5eee21c5410e740155adc4",
"assets/fonts/RigelstarItalic.otf": "013c54603585a357ffc400640eab7d43",
"assets/NOTICES": "ae82f14b88343dc70b4de3870ee64d7a",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "2e5b76cc61faf74ef2cac27445a3e626",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a41aef940cb7bc40006ddfd0cdcf107",
"/": "0a41aef940cb7bc40006ddfd0cdcf107",
"main.dart.js": "89cc474c8b2b079e6ed68887a23d9d2b",
"manifest.json": "b9a74c20735222d874614593fefab2a2",
"splash/img/dark-1x.png": "f16772a01787660ac2fe122b2282e0ee",
"splash/img/dark-2x.png": "ef6969d128ef739f59448d5099661d58",
"splash/img/dark-3x.png": "6aa1d61eed530b4e033dc1e64ae89233",
"splash/img/dark-4x.png": "195d7eb1389ebce6fd28ca32ec1e1f8b",
"splash/img/light-1x.png": "f16772a01787660ac2fe122b2282e0ee",
"splash/img/light-2x.png": "ef6969d128ef739f59448d5099661d58",
"splash/img/light-3x.png": "6aa1d61eed530b4e033dc1e64ae89233",
"splash/img/light-4x.png": "195d7eb1389ebce6fd28ca32ec1e1f8b",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "e92ff50681931a40f3828f68843eb24f",
"version.json": "923392a2420cca2fc4f794fac4e34d88"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
