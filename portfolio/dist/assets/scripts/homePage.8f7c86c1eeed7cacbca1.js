!function(){var e,t,r,o={399:function(e,t,r){"use strict";var o=r(848),n=r.n(o),i=(r(81),r(652));/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(0,i.UN)(document.body,{});var a=document.querySelectorAll(".slide-in-trigger"),c=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target.querySelector(".slide-in");r.style.opacity=1,r.style.transform="translate3d(0, 0, 0)",t.unobserve(r)}}))}),{threshold:.5});a.forEach((function(e){return c.observe(e)}));r(959);var s=document.querySelector(".header__nav-btn"),l=document.querySelector(".header__links-list"),u=document.querySelectorAll(".header__list-item > *"),d=!1;function f(){d=!1,s.classList.remove("header__nav-btn--active"),l.classList.remove("header__links-list--active"),setTimeout((function(){l.style.visibility="hidden"}),350),document.body.classList.remove("no-scroll"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(document.querySelector("html").setAttribute("data-overlayscrollbars-overflow-y","scroll"),document.querySelector("body > .os-scrollbar-vertical").style.opacity=1)}function p(){u.forEach((function(e){e.style.visibility="visible"}))}function m(){u.forEach((function(e){e.style.visibility="hidden"}))}s.addEventListener("click",(function(){d?(f(),setTimeout((function(){m()}),350)):(d=!0,s.classList.add("header__nav-btn--active"),l.classList.add("header__links-list--active"),l.style.visibility="visible",document.body.classList.add("no-scroll"),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(document.querySelector("html").setAttribute("data-overlayscrollbars-overflow-y","hidden"),document.querySelector("body > .os-scrollbar-vertical").style.opacity=0),p())})),window.innerWidth<=1024&&m(),window.addEventListener("resize",(function(){window.innerWidth>1024?d?f():p():window.innerWidth<=1024&&!d&&m()}));var y=r(358),h=new(r(595).ZP)(".intro.splide",{type:"loop",pagination:!1,autoplay:!0}),v=h.root.querySelector(".my-carousel-progress-bar");h.on("mounted move",(function(){var e=h.Components.Controller.getEnd()+1,t=Math.min((h.index+1)/e,1);v.style.width=String(100*t)+"%"})),h.mount();var b=document.querySelectorAll(".intro-item"),g=function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target;r.timeline.play(),t.unobserve(r)}}))},w={threshold:.5};b.forEach((function(e){var t=e.querySelector(".intro-item__descr"),r=e.querySelector(".intro-item__links"),o=y.p8.timeline({paused:!0}).from(t,{y:100,opacity:0,duration:.75}).from(r,{y:100,opacity:0,duration:.5});e.timeline=o,new IntersectionObserver(g,w).observe(e)}));var _=r(92);y.p8.registerPlugin(_.Z);var S=y.p8.utils.toArray(".bio__title-hey span"),O=y.p8.utils.toArray(".bio__paragraph span"),E=document.querySelector(".bio__title").offsetWidth;S.forEach((function(e){y.p8.set(e,{x:function(){return E/2-e.offsetLeft},opacity:0,scale:3})})),O.forEach((function(e){y.p8.set(e,{x:300,opacity:0})})),y.p8.timeline({scrollTrigger:{trigger:".bio__title",start:"50px 70%",end:"+=500 100%",scrub:2}}).to(S,{scale:1,opacity:1,stagger:.5,delay:.5,ease:"power4.out"}).to(S,{x:0,stagger:.5,delay:.5},"<").to(O,{x:0,opacity:1,stagger:1,delay:.5,ease:"power4.out"}),n()(".title, .subtitle, .paragraph, .list__item",{watch:!0}),window.addEventListener("DOMContentLoaded",(function(){!function(){document.body.style.overflow="visible";var e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((function(){e.remove(),document.querySelector("#loadingPlaceholderStyles").remove()}),350)}(),function(){var e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var o=e.target,n=o.getAttribute("data-src");r(886)("./".concat(n)).then((function(e){o.setAttribute("src",e.default),o.addEventListener("load",(function(){o.parentNode.classList.add("image-loaded")}))})),t.unobserve(o)}}))}),{threshold:.2});e.forEach((function(e){return t.observe(e)}))}()}))},959:function(){var e,t=document.body,r=document.querySelector(".theme-toggle"),o=document.querySelector('meta[name="theme-color"]');function n(){"dark-theme"===e?(r.classList.add("theme-toggle--toggled"),o.setAttribute("content","#141414")):(r.classList.remove("theme-toggle--toggled"),o.setAttribute("content","#d9d9d9"))}localStorage.getItem("color-theme")?e=localStorage.getItem("color-theme"):(localStorage.setItem("color-theme","dark-theme"),e="dark-theme"),t.classList.add(e),n(),r.addEventListener("click",(function(){t.classList.remove(e),e="dark-theme"===e?"light-theme":"dark-theme",t.classList.add(e),n(),localStorage.setItem("color-theme",e)}))},886:function(e,t,r){var o={"./home-intro/intro-aquarium.webp":418,"./home-intro/intro-brume.webp":729,"./home-intro/intro-ddd.webp":985,"./home-intro/intro-findscan.webp":21,"./tcotsmap.jpg":962,"./tcotsmap.webp":825};function n(e){return i(e).then((function(e){return r.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!r.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}))}n.keys=function(){return Object.keys(o)},n.resolve=i,n.id=886,e.exports=n},418:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-aquarium.webp"},729:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-brume.webp"},985:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-ddd.webp"},21:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-findscan.webp"},962:function(e,t,r){"use strict";e.exports=r.p+"assets/images/tcotsmap.jpg"},825:function(e,t,r){"use strict";e.exports=r.p+"assets/images/tcotsmap.webp"}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,i),r.exports}i.m=o,e=[],i.O=function(t,r,o,n){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],n=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((function(e){return i.O[e](r[s])}))?r.splice(s--,1):(c=!1,n<a&&(a=n));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);i.r(n);var a={};t=t||[null,r({}),r([]),r(r)];for(var c=2&o&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(n,a),n},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={424:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],c=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)i.o(c,o)&&(i.m[o]=c[o]);if(s)var u=s(i)}for(t&&t(r);l<a.length;l++)n=a[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=i.O(void 0,[712],(function(){return i(399)}));a=i.O(a)}();
//# sourceMappingURL=homePage.8f7c86c1eeed7cacbca1.js.map