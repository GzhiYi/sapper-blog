import{S as t,i as e,s,e as n,t as o,c as a,a as l,b as r,d as c,f as h,g as i,h as u,j as f,k as d,q as m,l as g,m as p,n as v,o as E}from"./client.505ae8a1.js";import{c as j}from"./config.026ad977.js";function x(t,e,s){const n=t.slice();return n[2]=e[s],n}function b(t){let e,s,d,m,g=t[2].title+"";return{c(){e=n("li"),s=n("a"),d=o(g),this.h()},l(t){e=a(t,"LI",{});var n=l(e);s=a(n,"A",{rel:!0,href:!0});var o=l(s);d=r(o,g),o.forEach(c),n.forEach(c),this.h()},h(){h(s,"rel","prefetch"),h(s,"href",m="blog/"+t[2].slug)},m(t,n){i(t,e,n),u(e,s),u(s,d)},p(t,e){1&e&&g!==(g=t[2].title+"")&&f(d,g),1&e&&m!==(m="blog/"+t[2].slug)&&h(s,"href",m)},d(t){t&&c(e)}}}function k(t){let e,s,f,j,k,y,$,A,w,I;document.title=e=t[1].title;let L=t[0],M=[];for(let e=0;e<L.length;e+=1)M[e]=b(x(t,L,e));return{c(){s=n("meta"),f=n("meta"),j=d(),k=n("ul");for(let t=0;t<M.length;t+=1)M[t].c();y=d(),$=n("div"),A=o("Push your changes"),this.h()},l(t){const e=m('[data-svelte="svelte-4iu3x1"]',document.head);s=a(e,"META",{name:!0,content:!0}),f=a(e,"META",{name:!0,content:!0}),e.forEach(c),j=g(t),k=a(t,"UL",{class:!0});var n=l(k);for(let t=0;t<M.length;t+=1)M[t].l(n);n.forEach(c),y=g(t),$=a(t,"DIV",{class:!0});var o=l($);A=r(o,"Push your changes"),o.forEach(c),this.h()},h(){h(s,"name","description"),h(s,"content",t[1].description),h(f,"name","keywords"),h(f,"content",t[1].keywords),h(k,"class","svelte-1frg2tf"),h($,"class","push")},m(t,e){u(document.head,s),u(document.head,f),i(t,j,e),i(t,k,e);for(let t=0;t<M.length;t+=1)M[t].m(k,null);i(t,y,e),i(t,$,e),u($,A),w||(I=p($,"click",pushCode),w=!0)},p(t,[s]){if(2&s&&e!==(e=t[1].title)&&(document.title=e),1&s){let e;for(L=t[0],e=0;e<L.length;e+=1){const n=x(t,L,e);M[e]?M[e].p(n,s):(M[e]=b(n),M[e].c(),M[e].m(k,null))}for(;e<M.length;e+=1)M[e].d(1);M.length=L.length}},i:v,o:v,d(t){c(s),c(f),t&&c(j),t&&c(k),E(M,t),t&&c(y),t&&c($),w=!1,I()}}}function y(){return this.fetch("./blog.json").then((t=>t.json())).then((t=>({posts:t})))}function $(t,e,s){let{posts:n}=e;const o=j.site;return t.$$set=t=>{"posts"in t&&s(0,n=t.posts)},[n,o]}export default class extends t{constructor(t){super(),e(this,t,$,k,s,{posts:0,site:1})}get site(){return this.$$.ctx[1]}}export{y as preload};
