!function(){"use strict";const e=["client/client.34d3e2bd.js","client/index.a5ef07ee.js","client/about.bfa1401c.js","client/[slug].19700f15.js","client/medium-zoom.esm.eccdde9e.js"].concat(["service-worker-index.html","atom-one-light.min.css","clap.png","favicon.png","global.css","index.css","main.css","manifest.json","medium-zoom.esm.js","robots.txt","sitemap.xml","tailwind.css"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1593875856267").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1593875856267"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1593875856267").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
