!function(){"use strict";const e=["client/client.4bba36f4.js","client/index.982c6d06.js","client/about.84b155de.js","client/index.d4e7b9f2.js","client/[slug].87dc41fd.js","client/medium-zoom.esm.eccdde9e.js"].concat(["service-worker-index.html","atom-one-light.min.css","clap.png","favicon.png","global.css","index.css","main.css","manifest.json","medium-zoom.esm.js","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593420284813").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593420284813"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593420284813").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
