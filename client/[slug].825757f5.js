import{S as t,i as s,s as a,a as e,e as o,q as n,d as r,c as i,b as l,f as c,k as u,h as d,n as m,o as h,p as f}from"./client.df1dd67c.js";function p(t){let s,a,h,f=t[0].html+"";return document.title=s=t[0].fmData.attributes.title,{c(){a=e(),h=o("div"),this.h()},l(t){n('[data-svelte="svelte-14uz9zo"]',document.head).forEach(r),a=i(t),h=l(t,"DIV",{class:!0}),c(h).forEach(r),this.h()},h(){u(h,"class","content svelte-1dlbxyy")},m(t,s){d(t,a,s),d(t,h,s),h.innerHTML=f},p(t,[a]){1&a&&s!==(s=t[0].fmData.attributes.title)&&(document.title=s),1&a&&f!==(f=t[0].html+"")&&(h.innerHTML=f)},i:m,o:m,d(t){t&&r(a),t&&r(h)}}}async function b({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function y(t,s,a){let e=null;h(()=>{try{import("./medium-zoom.esm.4064db81.js").then(t=>{e=t.default("[data-zoomable]")})}catch(t){console.log("import error",t)}}),f(()=>{e&&e.detach()});let{post:o}=s;return t.$set=t=>{"post"in t&&a(0,o=t.post)},[o]}export default class extends t{constructor(t){super(),s(this,t,y,p,a,{post:0})}}export{b as preload};
