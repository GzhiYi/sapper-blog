!function(){"use strict";const e=["client/client.c7e18bc4.js","client/index.0277943a.js","client/about.23ad2e1a.js","client/index.a7de237e.js","client/[slug].3d3c34b2.js","client/medium-zoom.esm.eccdde9e.js"].concat(["service-worker-index.html","atom-one-light.min.css","clap.png","favicon.png","global.css","index.css","main.css","manifest.json","medium-zoom.esm.js","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593332527172").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593332527172"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593332527172").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
