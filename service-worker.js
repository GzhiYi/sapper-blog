!function(){"use strict";const e=1626663980883,t=`cache${e}`,s=["/client/client.796a17e3.js","/client/inject_styles.5607aec6.js","/client/index.db60e2b4.js","/client/config.026ad977.js","/client/about.dcc4ef1a.js","/client/index.acc06f4f.js","/client/[slug].9001d1d3.js","/client/medium-zoom.esm.eccdde9e.js"].concat(["/service-worker-index.html","/atom-one-light.min.css","/favicon.png","/global.css","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/medium-zoom.esm.js","/robots.txt","/sitemap.xml"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),c=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&n.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
