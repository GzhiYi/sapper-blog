import{w as t,x as n,_ as e,a as r,b as a,c as s,i as c,s as o,d as i,S as u,f,e as l,j as p,k as h,g as d,h as m,r as v,m as y,o as b,p as g,y as x,z as k}from"./client.857e2828.js";function j(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,s=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return a(this,e)}}function w(t){var n,e,r,a=t[0].html+"";return{c:function(){n=f("div"),e=l(),r=f("div"),this.h()},l:function(t){n=p(t,"DIV",{class:!0}),h(n).forEach(d),e=m(t),r=p(t,"DIV",{id:!0}),h(r).forEach(d),this.h()},h:function(){v(n,"class","content svelte-1dlbxyy"),v(r,"id","gitalk-container")},m:function(t,s){y(t,n,s),n.innerHTML=a,y(t,e,s),y(t,r,s)},p:function(t,e){1&b(e,1)[0]&&a!==(a=t[0].html+"")&&(n.innerHTML=a)},i:g,o:g,d:function(t){t&&d(n),t&&d(e),t&&d(r)}}}function z(t){return D.apply(this,arguments)}function D(){return(D=t(n.mark((function t(e){var r,a,s;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,e.query,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(s=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:s});case 11:this.error(a.status,s.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function R(t,n,e){var r=null;x((function(){try{import("./medium-zoom.esm.f9ac00a1.js").then((function(t){r=t.default("[data-zoomable]")}))}catch(t){console.log("import error",t)}new Gitalk({clientID:"1ceb416f2f4ca6ba6c84",clientSecret:"9feefebe3e29a96416c667fc8f2f633edf3c51da",repo:"sapper-blog",owner:"GzhiYi",admin:["GzhiYi"],id:location.pathname,distractionFreeMode:!1}).render("gitalk-container")})),k((function(){r&&r.detach()}));var a=n.post;return t.$set=function(t){"post"in t&&e(0,a=t.post)},[a]}var G=function(t){e(r,u);var n=j(r);function r(t){var e;return s(this,r),e=n.call(this),c(i(e),t,R,w,o,{post:0}),e}return r}();export default G;export{z as preload};