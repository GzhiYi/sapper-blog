import{S as t,i as e,s,e as a,t as l,a as r,b as n,f as o,g as h,c,d as f,k as i,h as u,j as g,l as p,q as d,n as m,m as b}from"./client.df1dd67c.js";function D(t,e,s){const a=t.slice();return a[1]=e[s],a}function v(t){let e,s,d,m,b,D,v,E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"",j=t[1].fmData.attributes.title+"";return{c(){e=a("li"),s=a("a"),d=l(E),m=r(),b=l(j),D=r(),this.h()},l(t){e=n(t,"LI",{});var a=o(e);s=n(a,"A",{rel:!0,href:!0});var l=o(s);d=h(l,E),m=c(l),b=h(l,j),D=c(l),l.forEach(f),a.forEach(f),this.h()},h(){i(s,"rel","prefetch"),i(s,"href",v="blog/"+t[1].slug)},m(t,a){u(t,e,a),g(e,s),g(s,d),g(s,m),g(s,b),g(s,D)},p(t,e){1&e&&E!==(E=new Date(t[1].fmData.attributes.date).toLocaleDateString()+"")&&p(d,E),1&e&&j!==(j=t[1].fmData.attributes.title+"")&&p(b,j),1&e&&v!==(v="blog/"+t[1].slug)&&i(s,"href",v)},d(t){t&&f(e)}}}function E(t){let e,s,p,E,j,L=t[0],x=[];for(let e=0;e<L.length;e+=1)x[e]=v(D(t,L,e));return{c(){e=r(),s=a("h1"),p=l("Recent posts"),E=r(),j=a("ul");for(let t=0;t<x.length;t+=1)x[t].c();this.h()},l(t){d('[data-svelte="svelte-hfp9t8"]',document.head).forEach(f),e=c(t),s=n(t,"H1",{});var a=o(s);p=h(a,"Recent posts"),a.forEach(f),E=c(t),j=n(t,"UL",{class:!0});var l=o(j);for(let t=0;t<x.length;t+=1)x[t].l(l);l.forEach(f),this.h()},h(){document.title="Blog",i(j,"class","svelte-1ect80f")},m(t,a){u(t,e,a),u(t,s,a),g(s,p),u(t,E,a),u(t,j,a);for(let t=0;t<x.length;t+=1)x[t].m(j,null)},p(t,[e]){if(1&e){let s;for(L=t[0],s=0;s<L.length;s+=1){const a=D(t,L,s);x[s]?x[s].p(a,e):(x[s]=v(a),x[s].c(),x[s].m(j,null))}for(;s<x.length;s+=1)x[s].d(1);x.length=L.length}},i:m,o:m,d(t){t&&f(e),t&&f(s),t&&f(E),t&&f(j),b(x,t)}}}function j({params:t,query:e}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function L(t,e,s){let{posts:a}=e;return t.$set=t=>{"posts"in t&&s(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),e(this,t,L,E,s,{posts:0})}}export{j as preload};
