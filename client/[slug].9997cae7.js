import{S as t,i as e,s,e as n,t as o,c as a,a as c,b as l,d as i,f as r,g as d,h as f,j as h,k as u,q as m,l as v,n as p,m as g,o as b}from"./client.ab57a19f.js";import{c as y}from"./config.026ad977.js";function _(t,e,s){const n=t.slice();return n[3]=e[s],n}function E(t){let e,s,u=t[3]+"";return{c(){e=n("div"),s=o(u),this.h()},l(t){e=a(t,"DIV",{class:!0});var n=c(e);s=l(n,u),n.forEach(i),this.h()},h(){r(e,"class","label")},m(t,n){d(t,e,n),f(e,s)},p(t,e){1&e&&u!==(u=t[3]+"")&&h(s,u)},d(t){t&&i(e)}}}function w(t){let e,s,b,y,w,z,j,k,x,I,P,S,T,$,A,D,G=t[0].title+"",M=t[0].date+"",V=t[0].html+"";document.title=e=t[0].title+"-GzhiYi's blog";let Y=t[0].labels,N=[];for(let e=0;e<Y.length;e+=1)N[e]=E(_(t,Y,e));return{c(){s=n("meta"),y=n("meta"),z=u(),j=n("div");for(let t=0;t<N.length;t+=1)N[t].c();k=u(),x=n("div"),I=o(G),P=u(),S=n("span"),T=o("GzhiYi · "),$=o(M),A=u(),D=n("div"),this.h()},l(t){const e=m('[data-svelte="svelte-2vncnt"]',document.head);s=a(e,"META",{name:!0,content:!0}),y=a(e,"META",{name:!0,content:!0}),e.forEach(i),z=v(t),j=a(t,"DIV",{class:!0});var n=c(j);for(let t=0;t<N.length;t+=1)N[t].l(n);k=v(n),x=a(n,"DIV",{class:!0});var o=c(x);I=l(o,G),o.forEach(i),P=v(n),S=a(n,"SPAN",{class:!0});var r=c(S);T=l(r,"GzhiYi · "),$=l(r,M),r.forEach(i),n.forEach(i),A=v(t),D=a(t,"DIV",{class:!0}),c(D).forEach(i),this.h()},h(){r(s,"name","description"),r(s,"content",b=t[0].description||t[1].description),r(y,"name","keywords"),r(y,"content",w=t[0].keywords||t[1].keywords),r(x,"class","title svelte-23vme9"),r(S,"class","author svelte-23vme9"),r(j,"class","base svelte-23vme9"),r(D,"class","content svelte-23vme9")},m(t,e){f(document.head,s),f(document.head,y),d(t,z,e),d(t,j,e);for(let t=0;t<N.length;t+=1)N[t].m(j,null);f(j,k),f(j,x),f(x,I),f(j,P),f(j,S),f(S,T),f(S,$),d(t,A,e),d(t,D,e),D.innerHTML=V},p(t,[n]){if(1&n&&e!==(e=t[0].title+"-GzhiYi's blog")&&(document.title=e),1&n&&b!==(b=t[0].description||t[1].description)&&r(s,"content",b),1&n&&w!==(w=t[0].keywords||t[1].keywords)&&r(y,"content",w),1&n){let e;for(Y=t[0].labels,e=0;e<Y.length;e+=1){const s=_(t,Y,e);N[e]?N[e].p(s,n):(N[e]=E(s),N[e].c(),N[e].m(j,k))}for(;e<N.length;e+=1)N[e].d(1);N.length=Y.length}1&n&&G!==(G=t[0].title+"")&&h(I,G),1&n&&M!==(M=t[0].date+"")&&h($,M),1&n&&V!==(V=t[0].html+"")&&(D.innerHTML=V)},i:p,o:p,d(t){i(s),i(y),t&&i(z),t&&i(j),g(N,t),t&&i(A),t&&i(D)}}}var z=function(t,e,s,n){return new(s||(s=Promise))((function(o,a){function c(t){try{i(n.next(t))}catch(t){a(t)}}function l(t){try{i(n.throw(t))}catch(t){a(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(c,l)}i((n=n.apply(t,e||[])).next())}))};function j({params:t}){return z(this,void 0,void 0,(function*(){const e=yield this.fetch(`blog/${t.slug}.json`);console.log(e);const s=yield e.json();if(200===e.status)return{post:s};this.error(e.status,s.message)}))}function k(t,e,s){let n=null;b((()=>{try{Promise.all([import("./medium-zoom.esm.eccdde9e.js"),]).then((function(t){return t[0]})).then((t=>{n=t.default("[data-zoomable]")}))}catch(t){console.log("import zoom error",t)}}));let{post:o}=e;console.log(o);const a=y.site;return t.$$set=t=>{"post"in t&&s(0,o=t.post)},[o,a]}export default class extends t{constructor(t){super(),e(this,t,k,w,s,{post:0,site:1})}get site(){return this.$$.ctx[1]}}export{j as preload};