function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):p(e)}function y(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return y(t," ")}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let S;function w(t){S=t}function N(){if(!S)throw new Error("Function called outside component initialization");return S}function P(t){N().$$.on_mount.push(t)}const A=[],R=[],j=[],L=[],C=Promise.resolve();let I=!1;function O(t){j.push(t)}let k=!1;const T=new Set;function U(){if(!k){k=!0;do{for(let t=0;t<A.length;t+=1){const e=A[t];w(e),q(e.$$)}for(w(null),A.length=0;R.length;)R.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];T.has(e)||(T.add(e),e())}j.length=0}while(A.length);for(;L.length;)L.pop()();I=!1,k=!1,T.clear()}}function q(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const J=new Set;let B;function K(){B={r:0,c:[],p:B}}function M(){B.r||o(B.c),B=B.p}function V(t,e){t&&t.i&&(J.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),B.c.push((()=>{J.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function H(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function z(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r,c){const{fragment:a,on_mount:i,on_destroy:l,after_update:u}=t.$$;a&&a.m(e,r),c||O((()=>{const e=i.map(n).filter(s);l?l.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(O)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(A.push(t),I||(I=!0,C.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,c,a,i,l=[-1]){const u=S;w(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),p&&X(e,t)),n})):[],d.update(),p=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&V(e.$$.fragment),G(e,n.target,n.anchor,n.customElement),U()}w(u)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const nt={};function rt(e){let n,r,o,s,c,a,i,d,g,E,x,S,w,N,P,A;return{c(){n=p("nav"),r=p("ul"),o=p("li"),s=p("a"),c=h("home"),i=m(),d=p("li"),g=p("a"),E=h("about"),S=m(),w=p("li"),N=p("a"),P=h("blog"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=v(n);r=b(e,"UL",{class:!0});var a=v(r);o=b(a,"LI",{class:!0});var l=v(o);s=b(l,"A",{"aria-current":!0,href:!0,class:!0});var u=v(s);c=y(u,"home"),u.forEach(f),l.forEach(f),i=_(a),d=b(a,"LI",{class:!0});var p=v(d);g=b(p,"A",{"aria-current":!0,href:!0,class:!0});var h=v(g);E=y(h,"about"),h.forEach(f),p.forEach(f),S=_(a),w=b(a,"LI",{class:!0});var m=v(w);N=b(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var $=v(N);P=y($,"blog"),$.forEach(f),m.forEach(f),a.forEach(f),e.forEach(f),this.h()},h(){$(s,"aria-current",a=void 0===e[0]?"page":void 0),$(s,"href","."),$(s,"class","svelte-1dbd5up"),$(o,"class","svelte-1dbd5up"),$(g,"aria-current",x="about"===e[0]?"page":void 0),$(g,"href","about"),$(g,"class","svelte-1dbd5up"),$(d,"class","svelte-1dbd5up"),$(N,"rel","prefetch"),$(N,"aria-current",A="blog"===e[0]?"page":void 0),$(N,"href","blog"),$(N,"class","svelte-1dbd5up"),$(w,"class","svelte-1dbd5up"),$(r,"class","svelte-1dbd5up"),$(n,"class","svelte-1dbd5up")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,c),l(r,i),l(r,d),l(d,g),l(g,E),l(r,S),l(r,w),l(w,N),l(N,P)},p(t,[e]){1&e&&a!==(a=void 0===t[0]?"page":void 0)&&$(s,"aria-current",a),1&e&&x!==(x="about"===t[0]?"page":void 0)&&$(g,"aria-current",x),1&e&&A!==(A="blog"===t[0]?"page":void 0)&&$(N,"aria-current",A)},i:t,o:t,d(t){t&&f(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class st extends Z{constructor(t){super(),Q(this,t,ot,rt,c,{segment:0})}}function ct(t){let e,n,r,o;e=new st({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){z(e.$$.fragment),n=m(),r=p("main"),c&&c.c(),this.h()},l(t){F(e.$$.fragment,t),n=_(t),r=b(t,"MAIN",{class:!0});var o=v(r);c&&c.l(o),o.forEach(f),this.h()},h(){$(r,"class","svelte-1uhnsl8")},m(t,s){G(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&(!o||2&n)&&i(c,s,t,t[1],n,null,null)},i(t){o||(V(e.$$.fragment,t),V(c,t),o=!0)},o(t){D(e.$$.fragment,t),D(c,t),o=!1},d(t){W(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function at(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class it extends Z{constructor(t){super(),Q(this,t,at,ct,c,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=y(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&E(n,r)},d(t){t&&f(e)}}}function ut(e){let n,r,o,s,c,a,i,d,S,w=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&lt(e);return{c(){r=m(),o=p("h1"),s=h(e[0]),c=m(),a=p("p"),i=h(w),d=m(),N&&N.c(),S=g(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=b(t,"H1",{class:!0});var n=v(o);s=y(n,e[0]),n.forEach(f),c=_(t),a=b(t,"P",{class:!0});var l=v(a);i=y(l,w),l.forEach(f),d=_(t),N&&N.l(t),S=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(a,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,d,e),N&&N.m(t,e),u(t,S,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&E(s,t[0]),2&e&&w!==(w=t[1].message+"")&&E(i,w),t[2]&&t[1].stack?N?N.p(t,e):(N=lt(t),N.c(),N.m(S.parentNode,S)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(d),N&&N.d(t),t&&f(S)}}}function ft(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class dt extends Z{constructor(t){super(),Q(this,t,ft,ut,c,{status:0,error:1})}}function pt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&z(n.$$.fragment),r=g()},l(t){n&&F(n.$$.fragment,t),r=g()},m(t,e){n&&G(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?H(s,[Y(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){K();const t=n;D(t.$$.fragment,1,0,(()=>{W(t,1)})),M()}c?(n=new c(a()),z(n.$$.fragment),V(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&V(n.$$.fragment,t),o=!0)},o(t){n&&D(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function ht(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){z(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(V(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function mt(t){let e,n,r,o;const s=[ht,pt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(K(),D(c[i],1,1,(()=>{c[i]=null})),M(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),V(n,1),n.m(r.parentNode,r))},i(t){o||(V(n),o=!0)},o(t){D(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function gt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new it({props:s}),{c(){z(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?H(o,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(V(n.$$.fragment,t),r=!0)},o(t){D(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function $t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,d;return u=l,N().$$.after_update.push(u),f=nt,d=r,N().$$.context.set(f,d),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class vt extends Z{constructor(t){super(),Q(this,t,$t,gt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const bt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],yt=[{js:()=>Promise.all([import("./index.df4ed71f.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.26794cd2.js"),__inject_styles(["client-e118e612.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.2be55ccc.js"),__inject_styles(["client-e118e612.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].9af4de7d.js"),__inject_styles(["client-e118e612.css"])]).then((function(t){return t[0]}))}],_t=(Et=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:Et(t[1])})}]}]);var Et;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function xt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{i(r.next(t))}catch(t){s(t)}}function a(t){try{i(r.throw(t))}catch(t){s(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,a)}i((r=r.apply(t,e||[])).next())}))}function St(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let wt,Nt=1;const Pt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},At={};let Rt,jt;function Lt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ct(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt))return null;let e=t.pathname.slice(Rt.length);if(""===e&&(e="/"),!bt.some((t=>t.test(e))))for(let n=0;n<_t.length;n+=1){const r=_t[n],o=r.pattern.exec(e);if(o){const n=Lt(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function It(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=St(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ct(o);if(s){Tt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Pt.pushState({id:wt},"",o.href)}}function Ot(){return{x:pageXOffset,y:pageYOffset}}function kt(t){if(At[wt]=Ot(),t.state){const e=Ct(new URL(location.href));e?Tt(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){wt=t}(Nt),Pt.replaceState({id:wt},"",location.href)}function Tt(t,e,n,r){return xt(this,void 0,void 0,(function*(){const o=!!e;if(o)wt=e;else{const t=Ot();At[wt]=t,wt=e=++Nt,At[wt]=n?t:{x:0,y:0}}if(yield jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=At[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),At[wt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ut(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let qt,Jt=null;function Bt(t){const e=St(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ct(new URL(t,Ut(document)));if(e)Jt&&t===Jt.href||(Jt={href:t,promise:re(e)}),Jt.promise}(e.href)}function Kt(t){clearTimeout(qt),qt=setTimeout((()=>{Bt(t)}),20)}function Mt(t,e={noscroll:!1,replaceState:!1}){const n=Ct(new URL(t,Ut(document)));return n?(Pt[e.replaceState?"replaceState":"pushState"]({id:wt},"",t),Tt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Dt,Ht,Yt,zt=!1,Ft=[],Gt="{}";const Wt={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:et(null),session:et(Vt&&Vt.session)};let Xt,Qt,Zt;function te(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ee(t){return xt(this,void 0,void 0,(function*(){Dt&&Wt.preloading.set(!0);const e=function(t){return Jt&&Jt.href===t.href?Jt.promise:re(t)}(t),n=Ht={},r=yield e,{redirect:o}=r;if(n===Ht)if(o)yield Mt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ne(n,e,te(e,t.page))}}))}function ne(t,e,n){return xt(this,void 0,void 0,(function*(){Wt.page.set(n),Wt.preloading.set(!1),Dt?Dt.$set(e):(e.stores={page:{subscribe:Wt.page.subscribe},preloading:{subscribe:Wt.preloading.subscribe},session:Wt.session},e.level0={props:yield Yt},e.notify=Wt.page.notify,Dt=new vt({target:Zt,props:e,hydrate:!0})),Ft=t,Gt=JSON.stringify(n.query),zt=!0,Qt=!1}))}function re(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Yt){const t=()=>({});Yt=Vt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Xt)}let a,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>xt(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Gt)return!0;const o=Ft[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const d=i++;if(!Qt&&!u&&Ft[a]&&Ft[a].part===e.i)return Ft[a];u=!1;const{default:p,preload:h}=yield yt[e.i].js();let m;return m=zt||!Vt.preloaded[a+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Xt):{}:Vt.preloaded[a+1],s[`level${d}`]={component:p,props:m,segment:f,match:l,part:e.i}})))))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}))}var oe,se,ce;Wt.session.subscribe((t=>xt(void 0,void 0,void 0,(function*(){if(Xt=t,!zt)return;Qt=!0;const e=Ct(new URL(location.href)),n=Ht={},{redirect:r,props:o,branch:s}=yield re(e);n===Ht&&(r?yield Mt(r.location,{replaceState:!0}):yield ne(s,o,te(o,e.page)))})))),oe={target:document.querySelector("#sapper")},se=oe.target,Zt=se,ce=Vt.baseUrl,Rt=ce,jt=ee,"scrollRestoration"in Pt&&(Pt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{Pt.scrollRestoration="auto"})),addEventListener("load",(()=>{Pt.scrollRestoration="manual"})),addEventListener("click",It),addEventListener("popstate",kt),addEventListener("touchstart",Bt),addEventListener("mousemove",Kt),Vt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Vt;Yt||(Yt=o&&o[0]);const a={error:c,status:s,session:r,level0:{props:Yt},level1:{props:{status:s,error:c},component:dt},segments:o},i=Lt(n);ne([],a,{host:t,path:e,query:i,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;Pt.replaceState({id:Nt},"",e);const n=Ct(new URL(location.href));if(n)return Tt(n,Nt,!0,t)}));export{Z as S,v as a,y as b,b as c,f as d,p as e,$ as f,u as g,l as h,Q as i,E as j,m as k,_ as l,d as m,t as n,P as o,x as q,c as s,h as t};

import __inject_styles from './inject_styles.5607aec6.js';