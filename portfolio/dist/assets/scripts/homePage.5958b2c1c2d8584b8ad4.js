!function(){var e,t,n,r={189:function(e,t,n){"use strict";var r=document.querySelectorAll(".slide-in-trigger"),o=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target.querySelector(".slide-in");n.style.opacity=1,n.style.transform="translate3d(0, 0, 0)",t.unobserve(n)}}))}),{threshold:.5});r.forEach((function(e){return o.observe(e)}));n(959);var i=document.querySelector(".header__nav-btn"),c=document.querySelector(".header__links-list"),s=document.querySelectorAll(".header__list-item > *"),a=!1;function u(){a=!1,i.classList.remove("header__nav-btn--active"),c.classList.remove("header__links-list--active"),setTimeout((function(){c.style.visibility="hidden"}),350)}function l(){s.forEach((function(e){e.style.visibility="visible"}))}function d(){s.forEach((function(e){e.style.visibility="hidden"}))}i.addEventListener("click",(function(){a?(u(),setTimeout((function(){d()}),350)):(a=!0,i.classList.add("header__nav-btn--active"),c.classList.add("header__links-list--active"),c.style.visibility="visible",l())})),window.innerWidth<=1024&&d(),window.addEventListener("resize",(function(){window.innerWidth>1024?a?u():l():window.innerWidth<=1024&&!a&&d()}));var f=n(358),p=new(n(595).ZP)(".intro.splide",{type:"loop",pagination:!1,autoplay:!0}),m=p.root.querySelector(".my-carousel-progress-bar");p.on("mounted move",(function(){var e=p.Components.Controller.getEnd()+1,t=Math.min((p.index+1)/e,1);m.style.width=String(100*t)+"%"})),p.mount();var h=document.querySelectorAll(".intro-item"),v=function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target;n.timeline.play(),t.unobserve(n)}}))},g={threshold:.5};h.forEach((function(e){var t=e.querySelector(".intro-item__descr"),n=e.querySelector(".intro-item__links"),r=f.p8.timeline({paused:!0}).to(t,{y:0,opacity:1,duration:.75}).to(n,{y:0,opacity:1,duration:.5});e.timeline=r,new IntersectionObserver(v,g).observe(e)}));var b=n(92);f.p8.registerPlugin(b.Z);f.p8.utils.toArray(".bio__title-hey span"),f.p8.utils.toArray(".bio__paragraph span");window.addEventListener("DOMContentLoaded",(function(){!function(){var e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target,o=r.getAttribute("data-src");n(886)("./".concat(o)).then((function(e){r.setAttribute("src",e.default),r.addEventListener("load",(function(){r.parentNode.classList.add("image-loaded")}))})),t.unobserve(r)}}))}),{threshold:.2});e.forEach((function(e){return t.observe(e)}))}(),function(){document.body.style.overflow="auto";var e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((function(){e.remove()}),350)}()}))},959:function(){window.addEventListener("DOMContentLoaded",(function(){var e,t=document.body,n=document.querySelector(".theme-toggle"),r=document.querySelector('meta[name="theme-color"]');function o(){"dark-theme"===e?(n.classList.add("theme-toggle--toggled"),r.setAttribute("content","#141414")):(n.classList.remove("theme-toggle--toggled"),r.setAttribute("content","#d9d9d9"))}localStorage.getItem("color-theme")?e=localStorage.getItem("color-theme"):(localStorage.setItem("color-theme","dark-theme"),e="dark-theme"),t.classList.add(e),o(),n.addEventListener("click",(function(){t.classList.remove(e),e="dark-theme"===e?"light-theme":"dark-theme",t.classList.add(e),o(),localStorage.setItem("color-theme",e)}))}))},886:function(e,t,n){var r={"./home-intro/intro-aquarium.webp":418,"./home-intro/intro-brume.webp":729,"./home-intro/intro-ddd.webp":985,"./home-intro/intro-findscan.webp":21,"./tcotsmap.jpg":962,"./tcotsmap.webp":825};function o(e){return i(e).then((function(e){return n.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}))}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=886,e.exports=o},418:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-aquarium.webp"},729:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-brume.webp"},985:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-ddd.webp"},21:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-findscan.webp"},962:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.jpg"},825:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.webp"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(s=!1,o<c&&(c=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={424:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],s=n[1],a=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var l=a(i)}for(t&&t(n);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=i.O(void 0,[712],(function(){return i(189)}));c=i.O(c)}();
//# sourceMappingURL=homePage.5958b2c1c2d8584b8ad4.js.map