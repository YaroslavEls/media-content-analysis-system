/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "fad644836e9d1415145aca951ed4ac10"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.efa03b7c.css",
    "revision": "cce82a92ba46b9b013a02caf133253e9"
  },
  {
    "url": "assets/img/1.72eb230e.png",
    "revision": "72eb230e63cea9b0b57b76f7e84521b2"
  },
  {
    "url": "assets/img/10.79b01583.png",
    "revision": "79b01583117aad6d637aa271999fc124"
  },
  {
    "url": "assets/img/11.363fb740.png",
    "revision": "363fb74010e1cd152026947a938607fc"
  },
  {
    "url": "assets/img/12.7b98541f.png",
    "revision": "7b98541f2488941f3e4ac6b3cfa58550"
  },
  {
    "url": "assets/img/13.b71fc8fa.png",
    "revision": "b71fc8faaf9f4814df4c3bdb5c5a6ed0"
  },
  {
    "url": "assets/img/14.9ce0490f.png",
    "revision": "9ce0490f980f8de76b2cc91e48ffe5ac"
  },
  {
    "url": "assets/img/15.bf0c4167.png",
    "revision": "bf0c41676f66c699f61a9ff9daa94bfb"
  },
  {
    "url": "assets/img/16.e8618fac.png",
    "revision": "e8618fac75a5ef2c344230bafd94c436"
  },
  {
    "url": "assets/img/17.209a4035.png",
    "revision": "209a40356f3d913d3f4b5c0968b8f689"
  },
  {
    "url": "assets/img/2.e46b97fc.png",
    "revision": "e46b97fce1f2625df95745f4788c9147"
  },
  {
    "url": "assets/img/3.4ec67fac.png",
    "revision": "4ec67facef3f721de79c0b4f76f7d8e6"
  },
  {
    "url": "assets/img/4.5bb03444.png",
    "revision": "5bb03444f33e11450b3d71d333a893f4"
  },
  {
    "url": "assets/img/5.db4d61b7.png",
    "revision": "db4d61b79b660f98d354f6ca7e3ef00f"
  },
  {
    "url": "assets/img/6.3206c8e2.png",
    "revision": "3206c8e22107aa441ea9bd7be8442534"
  },
  {
    "url": "assets/img/7.b2a65f3a.png",
    "revision": "b2a65f3a161cc07c89cac3c30745203e"
  },
  {
    "url": "assets/img/8.11275e45.png",
    "revision": "11275e455422b63c4a2575099c29b621"
  },
  {
    "url": "assets/img/9.475c2c40.png",
    "revision": "475c2c40345a8c2069897e773915e848"
  },
  {
    "url": "assets/img/EER-diagram.c3eca197.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e1273895.js",
    "revision": "9d9d293cdd1d8bbbc4485a4173518689"
  },
  {
    "url": "assets/js/11.be4bd6c2.js",
    "revision": "9eb56cb4328fdf7b3b5720e1fe3f60c6"
  },
  {
    "url": "assets/js/12.70c24ba1.js",
    "revision": "b1c6f64a43140d2e63312895ebe0a483"
  },
  {
    "url": "assets/js/13.35dbf460.js",
    "revision": "cae6139d4b5ea94d517cb4e618a2af12"
  },
  {
    "url": "assets/js/14.964b466c.js",
    "revision": "70e2a57777d21dde9d07160140d4e156"
  },
  {
    "url": "assets/js/15.da78077e.js",
    "revision": "79690cb2d6b3c27f55f75cfbe8486ec4"
  },
  {
    "url": "assets/js/16.129affc0.js",
    "revision": "736b18fb7cfad7aae039e7cf814221e7"
  },
  {
    "url": "assets/js/17.39907893.js",
    "revision": "2876a86e211ac016ebbf9bdaea19d442"
  },
  {
    "url": "assets/js/18.d1ef6edd.js",
    "revision": "ee54c41ba9a8a21d3d94bcd7a4e9aabc"
  },
  {
    "url": "assets/js/19.b0c97371.js",
    "revision": "a5ac429eb1f1e0fee87185fde20e7123"
  },
  {
    "url": "assets/js/2.5c2943dc.js",
    "revision": "4a788ed2ec3bb40852a4cdeed12e52f6"
  },
  {
    "url": "assets/js/20.76966545.js",
    "revision": "bc6a7790dd6930f5dd59f3415c68e2c3"
  },
  {
    "url": "assets/js/21.443080df.js",
    "revision": "26c621459461bbc9f559601c97208e38"
  },
  {
    "url": "assets/js/22.45cec1f3.js",
    "revision": "903e09306a3e60cdc6a44efdf71df57b"
  },
  {
    "url": "assets/js/23.033199f8.js",
    "revision": "d5defe9a1a6fb43bd8cd524ff90e0960"
  },
  {
    "url": "assets/js/24.6a0e2a44.js",
    "revision": "e3c8657cb6c326285fe21f7ec7742429"
  },
  {
    "url": "assets/js/26.b038f0f8.js",
    "revision": "3cd3fa2cd5856af626304a2e0bc91950"
  },
  {
    "url": "assets/js/3.b03a749a.js",
    "revision": "db0695f5e638c0cbee88f30e1313e4df"
  },
  {
    "url": "assets/js/4.f73397c3.js",
    "revision": "8dbb81d335ab579ccc62b2f9d4e48276"
  },
  {
    "url": "assets/js/5.e5c73bc2.js",
    "revision": "6e9dc463d419debcb226ca15a1956da4"
  },
  {
    "url": "assets/js/6.a686ffc5.js",
    "revision": "9a54e5d721c4c3303c758866399c6ef0"
  },
  {
    "url": "assets/js/7.4b40673a.js",
    "revision": "85e7959873e23d249778893171bc5598"
  },
  {
    "url": "assets/js/8.5ec70271.js",
    "revision": "8dd03f848535124ab797932c03bafea2"
  },
  {
    "url": "assets/js/9.78ec9992.js",
    "revision": "d6fb10b59c593ff1ce1cf846714da527"
  },
  {
    "url": "assets/js/app.a1148733.js",
    "revision": "7d987985a27f673a41d89374c72d5af9"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8ec4d57bcc925549f67d91a518d78635"
  },
  {
    "url": "design/index.html",
    "revision": "e94cd118c5d8fdd3d25ccbf33ad6db8c"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "5f733f1e86977572fd5819d285fa9111"
  },
  {
    "url": "intro/index.html",
    "revision": "68462def72a4c2c96388b92d395dca58"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "915fc723a7966f3f480f51ccc4b15bc8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f7fe58870cd0787cba369db53a2362c3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "301e35c6226e8074b1cc311a103c0007"
  },
  {
    "url": "software/index.html",
    "revision": "a2c7cebcba09bd797767dc21b30906c7"
  },
  {
    "url": "test/index.html",
    "revision": "0765f15308a4e75d31d9b4d999d18585"
  },
  {
    "url": "tests/1.png",
    "revision": "72eb230e63cea9b0b57b76f7e84521b2"
  },
  {
    "url": "tests/10.png",
    "revision": "79b01583117aad6d637aa271999fc124"
  },
  {
    "url": "tests/11.png",
    "revision": "363fb74010e1cd152026947a938607fc"
  },
  {
    "url": "tests/12.png",
    "revision": "7b98541f2488941f3e4ac6b3cfa58550"
  },
  {
    "url": "tests/13.png",
    "revision": "b71fc8faaf9f4814df4c3bdb5c5a6ed0"
  },
  {
    "url": "tests/14.png",
    "revision": "9ce0490f980f8de76b2cc91e48ffe5ac"
  },
  {
    "url": "tests/15.png",
    "revision": "bf0c41676f66c699f61a9ff9daa94bfb"
  },
  {
    "url": "tests/16.png",
    "revision": "e8618fac75a5ef2c344230bafd94c436"
  },
  {
    "url": "tests/17.png",
    "revision": "209a40356f3d913d3f4b5c0968b8f689"
  },
  {
    "url": "tests/2.png",
    "revision": "e46b97fce1f2625df95745f4788c9147"
  },
  {
    "url": "tests/3.png",
    "revision": "4ec67facef3f721de79c0b4f76f7d8e6"
  },
  {
    "url": "tests/4.png",
    "revision": "5bb03444f33e11450b3d71d333a893f4"
  },
  {
    "url": "tests/5.png",
    "revision": "db4d61b79b660f98d354f6ca7e3ef00f"
  },
  {
    "url": "tests/6.png",
    "revision": "3206c8e22107aa441ea9bd7be8442534"
  },
  {
    "url": "tests/7.png",
    "revision": "b2a65f3a161cc07c89cac3c30745203e"
  },
  {
    "url": "tests/8.png",
    "revision": "11275e455422b63c4a2575099c29b621"
  },
  {
    "url": "tests/9.png",
    "revision": "475c2c40345a8c2069897e773915e848"
  },
  {
    "url": "use cases/index.html",
    "revision": "f4ae01b71e07953cb595dc827063f3e2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
