import{S as t,i as e,s,e as a,t as n,a as o,c as r,f as l,g as c,b as h,d as i,h as f,k as u,j as m,l as d,q as g,n as p,m as b}from"./client.78b573ee.js";function v(t,e,s){const a=t.slice();return a[1]=e[s],a}function D(t){let e,s,g,p,b,v,D,E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",w=t[1].fmData.attributes.title+"";return{c(){e=a("li"),s=a("a"),g=n(E),p=o(),b=n(w),v=o(),this.h()},l(t){e=r(t,"LI",{});var a=l(e);s=r(a,"A",{rel:!0,href:!0});var n=l(s);g=c(n,E),p=h(n),b=c(n,w),v=h(n),n.forEach(i),a.forEach(i),this.h()},h(){f(s,"rel","prefetch"),f(s,"href",D="blog/"+t[1].slug)},m(t,a){u(t,e,a),m(e,s),m(s,g),m(s,p),m(s,b),m(s,v)},p(t,e){1&e&&E!==(E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&d(g,E),1&e&&w!==(w=t[1].fmData.attributes.title+"")&&d(b,w),1&e&&D!==(D="blog/"+t[1].slug)&&f(s,"href",D)},d(t){t&&i(e)}}}function E(t){let e,s,d,E,w,j,x,L=t[0],A=[];for(let e=0;e<L.length;e+=1)A[e]=D(v(t,L,e));return{c(){e=a("meta"),s=a("meta"),d=o(),E=a("h1"),w=n("Recent posts"),j=o(),x=a("ul");for(let t=0;t<A.length;t+=1)A[t].c();this.h()},l(t){const a=g('[data-svelte="svelte-1gnxrov"]',document.head);e=r(a,"META",{name:!0,content:!0}),s=r(a,"META",{name:!0,content:!0}),a.forEach(i),d=h(t),E=r(t,"H1",{});var n=l(E);w=c(n,"Recent posts"),n.forEach(i),j=h(t),x=r(t,"UL",{class:!0});var o=l(x);for(let t=0;t<A.length;t+=1)A[t].l(o);o.forEach(i),this.h()},h(){document.title="GzhiYi's blog",f(e,"name","description"),f(e,"content","web前端工程师，编程是一份兴趣，热爱着生活。"),f(s,"name","keywords"),f(s,"content","frontend开发者，熟悉web前端，vue，React，svelte，小程序等等。"),f(x,"class","svelte-1ect80f")},m(t,a){m(document.head,e),m(document.head,s),u(t,d,a),u(t,E,a),m(E,w),u(t,j,a),u(t,x,a);for(let t=0;t<A.length;t+=1)A[t].m(x,null)},p(t,[e]){if(1&e){let s;for(L=t[0],s=0;s<L.length;s+=1){const a=v(t,L,s);A[s]?A[s].p(a,e):(A[s]=D(a),A[s].c(),A[s].m(x,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=L.length}},i:p,o:p,d(t){i(e),i(s),t&&i(d),t&&i(E),t&&i(j),t&&i(x),b(A,t)}}}function w({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function j(t,e,s){let{posts:a}=e;return t.$set=t=>{"posts"in t&&s(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),e(this,t,j,E,s,{posts:0})}}export{w as preload};