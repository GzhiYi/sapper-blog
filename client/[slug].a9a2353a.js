import{S as e,i as t,s,e as a,a as o,b as i,f as n,d as r,c,k as l,h as d,n as h,o as f,p}from"./client.ad91b439.js";function m(e){let t,s,f,p=e[0].html+"";return{c(){t=a("div"),s=o(),f=a("div"),this.h()},l(e){t=i(e,"DIV",{class:!0}),n(t).forEach(r),s=c(e),f=i(e,"DIV",{id:!0}),n(f).forEach(r),this.h()},h(){l(t,"class","content svelte-1dlbxyy"),l(f,"id","gitalk-container")},m(e,a){d(e,t,a),t.innerHTML=p,d(e,s,a),d(e,f,a)},p(e,[s]){1&s&&p!==(p=e[0].html+"")&&(t.innerHTML=p)},i:h,o:h,d(e){e&&r(t),e&&r(s),e&&r(f)}}}async function u({params:e,query:t}){const s=await this.fetch(`blog/${e.slug}.json`),a=await s.json();if(200===s.status)return{post:a};this.error(s.status,a.message)}function b(e,t,s){let a=null;f(()=>{try{import("./medium-zoom.esm.eccdde9e.js").then(e=>{a=e.default("[data-zoomable]")})}catch(e){console.log("import error",e)}new Gitalk({clientID:"1ceb416f2f4ca6ba6c84",clientSecret:"9feefebe3e29a96416c667fc8f2f633edf3c51da",repo:"sapper-blog",owner:"GzhiYi",admin:["GzhiYi"],id:decodeURI(location.pathname),distractionFreeMode:!1}).render("gitalk-container")}),p(()=>{a&&a.detach()});let{post:o}=t;return e.$set=e=>{"post"in e&&s(0,o=e.post)},[o]}export default class extends e{constructor(e){super(),t(this,e,b,m,s,{post:0})}}export{u as preload};
