import{x as t,_ as n,a as e,b as o,c as a,i as r,d as c,e as s,S as i,s as f,f as l,t as u,g as h,h as d,j as v,k as m,l as p,m as g,n as b,o as y,p as z,q as E,r as _,u as k,v as w,w as x,y as j}from"./client.c6fed283.js";import{c as I}from"./config.026ad977.js";function R(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,r=e(t);if(n){var c=e(this).constructor;a=Reflect.construct(r,arguments,c)}else a=r.apply(this,arguments);return o(this,a)}}function A(t,n,e){var o=t.slice();return o[3]=n[e],o}function D(t){var n,e,o=t[3]+"";return{c:function(){n=l("div"),e=u(o),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var a=d(n);e=v(a,o),a.forEach(m),this.h()},h:function(){p(n,"class","label")},m:function(t,o){g(t,n,o),b(n,e)},p:function(t,n){1&n&&o!==(o=t[3]+"")&&y(e,o)},d:function(t){t&&m(n)}}}function P(t){var n,e,o,a,r,c,s,i,f,j,I,R,P,V,S,T,G,M,Y,$,B,N,C,H,L,O,q,J,F,K=t[0].title+"",Q=t[0].date+"",U=t[0].html+"";document.title=n=t[0].title+"-GzhiYi's blog";for(var W=t[0].labels,X=[],Z=0;Z<W.length;Z+=1)X[Z]=D(A(t,W,Z));return{c:function(){e=l("meta"),a=l("meta"),c=z(),s=l("div");for(var t=0;t<X.length;t+=1)X[t].c();i=z(),f=l("div"),j=u(K),I=z(),R=l("span"),P=u("GzhiYi · "),V=u(Q),S=z(),T=l("div"),G=z(),M=l("div"),Y=l("div"),$=u("如果你对这页内容有疑问，欢迎联系我！"),B=z(),N=l("a"),C=u("邮箱"),L=z(),O=l("br"),q=z(),J=l("a"),F=u("github"),this.h()},l:function(t){var n=E('[data-svelte="svelte-2vncnt"]',document.head);e=h(n,"META",{name:!0,content:!0}),a=h(n,"META",{name:!0,content:!0}),n.forEach(m),c=_(t),s=h(t,"DIV",{class:!0});for(var o=d(s),r=0;r<X.length;r+=1)X[r].l(o);i=_(o),f=h(o,"DIV",{class:!0});var l=d(f);j=v(l,K),l.forEach(m),I=_(o),R=h(o,"SPAN",{class:!0});var u=d(R);P=v(u,"GzhiYi · "),V=v(u,Q),u.forEach(m),o.forEach(m),S=_(t),T=h(t,"DIV",{class:!0}),d(T).forEach(m),G=_(t),M=h(t,"DIV",{class:!0});var p=d(M);Y=h(p,"DIV",{});var g=d(Y);$=v(g,"如果你对这页内容有疑问，欢迎联系我！"),g.forEach(m),B=_(p),N=h(p,"A",{target:!0,href:!0});var b=d(N);C=v(b,"邮箱"),b.forEach(m),L=_(p),O=h(p,"BR",{}),q=_(p),J=h(p,"A",{target:!0,href:!0});var y=d(J);F=v(y,"github"),y.forEach(m),p.forEach(m),this.h()},h:function(){p(e,"name","description"),p(e,"content",o=t[0].description||t[1].description),p(a,"name","keywords"),p(a,"content",r=t[0].keywords||t[1].keywords),p(f,"class","title svelte-1cnt1lz"),p(R,"class","author svelte-1cnt1lz"),p(s,"class","base svelte-1cnt1lz"),p(T,"class","content svelte-1cnt1lz"),p(N,"target","_blank"),p(N,"href",H="mailto:zhiyi.gong@outlook.com?subject=【重要】"+t[0].title+"&body=gzhiyi.top/blog/"+t[0].slug),p(J,"target","_blank"),p(J,"href","https://github.com/gzhiyi"),p(M,"class","contact svelte-1cnt1lz")},m:function(t,n){b(document.head,e),b(document.head,a),g(t,c,n),g(t,s,n);for(var o=0;o<X.length;o+=1)X[o].m(s,null);b(s,i),b(s,f),b(f,j),b(s,I),b(s,R),b(R,P),b(R,V),g(t,S,n),g(t,T,n),T.innerHTML=U,g(t,G,n),g(t,M,n),b(M,Y),b(Y,$),b(M,B),b(M,N),b(N,C),b(M,L),b(M,O),b(M,q),b(M,J),b(J,F)},p:function(t,c){var f=k(c,1)[0];if(1&f&&n!==(n=t[0].title+"-GzhiYi's blog")&&(document.title=n),1&f&&o!==(o=t[0].description||t[1].description)&&p(e,"content",o),1&f&&r!==(r=t[0].keywords||t[1].keywords)&&p(a,"content",r),1&f){var l;for(W=t[0].labels,l=0;l<W.length;l+=1){var u=A(t,W,l);X[l]?X[l].p(u,f):(X[l]=D(u),X[l].c(),X[l].m(s,i))}for(;l<X.length;l+=1)X[l].d(1);X.length=W.length}1&f&&K!==(K=t[0].title+"")&&y(j,K),1&f&&Q!==(Q=t[0].date+"")&&y(V,Q),1&f&&U!==(U=t[0].html+"")&&(T.innerHTML=U),1&f&&H!==(H="mailto:zhiyi.gong@outlook.com?subject=【重要】"+t[0].title+"&body=gzhiyi.top/blog/"+t[0].slug)&&p(N,"href",H)},i:w,o:w,d:function(t){m(e),m(a),t&&m(c),t&&m(s),x(X,t),t&&m(S),t&&m(T),t&&m(G),t&&m(M)}}}var V=function(t,n,e,o){return new(e||(e=Promise))((function(a,r){function c(t){try{i(o.next(t))}catch(t){r(t)}}function s(t){try{i(o.throw(t))}catch(t){r(t)}}function i(t){var n;t.done?a(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(c,s)}i((o=o.apply(t,n||[])).next())}))};function S(n){var e=n.params;return V(this,void 0,void 0,t.mark((function n(){var o,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetch("blog/".concat(e.slug,".json"));case 2:return o=t.sent,t.next=5,o.json();case 5:if(a=t.sent,200!==o.status){t.next=10;break}return t.abrupt("return",{post:a});case 10:this.error(o.status,a.message);case 11:case"end":return t.stop()}}),n,this)})))}function T(t,n,e){j((function(){try{Promise.all([import("./medium-zoom.esm.f9ac00a1.js"),]).then((function(t){return t[0]})).then((function(t){t.default("[data-zoomable]")}))}catch(t){console.log("import zoom error",t)}}));var o=n.post,a=I.site;return t.$$set=function(t){"post"in t&&e(0,o=t.post)},[o,a]}var G=function(t){n(o,i);var e=R(o);function o(t){var n;return a(this,o),n=e.call(this),r(c(n),t,T,P,f,{post:0,site:1}),n}return s(o,[{key:"site",get:function(){return this.$$.ctx[1]}}]),o}();export default G;export{S as preload};
