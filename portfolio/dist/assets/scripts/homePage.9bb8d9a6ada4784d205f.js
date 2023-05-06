!function(){var e,t,r,n={859:function(e,t,r){"use strict";var n=r(358),o=r(92);n.ZP.registerPlugin(o.Z);r(959);var i=document.querySelector(".header__nav-btn"),s=document.querySelector(".header__links-list"),a=!1;function c(){a=!1,i.classList.remove("header__nav-btn--active"),s.classList.remove("header__links-list--active"),setTimeout((function(){s.style.visibility="hidden"}),350)}i.addEventListener("click",(function(){a?c():(a=!0,i.classList.add("header__nav-btn--active"),s.classList.add("header__links-list--active"),s.style.visibility="visible")})),window.addEventListener("resize",(function(){window.innerWidth>1024?(c(),setTimeout((function(){s.style.visibility="visible"}),350)):setTimeout((function(){s.style.visibility="hidden"}),355)}));var u=new(r(595).ZP)(".intro.splide",{type:"loop",pagination:!1,autoplay:!0}),l=u.root.querySelector(".my-carousel-progress-bar");u.on("mounted move",(function(){var e=u.Components.Controller.getEnd()+1,t=Math.min((u.index+1)/e,1);l.style.width=String(100*t)+"%"})),u.mount();var d=document.querySelectorAll(".intro-item"),f=function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target;r.timeline.play(),t.unobserve(r)}}))},m={threshold:.5};d.forEach((function(e){var t=e.querySelector(".intro-item__descr"),r=e.querySelector(".intro-item__links"),o=n.p8.timeline({paused:!0,defaults:{y:100,opacity:0}}).from(t,{duration:.75}).from(r,{duration:.5});e.timeline=o,new IntersectionObserver(f,m).observe(e)}));var p=document.querySelector(".bio"),v=n.ZP.utils.toArray(".bio .title span"),g=n.ZP.utils.toArray(".bio .subtitle span"),h=n.ZP.timeline({scrollTrigger:{trigger:p,start:"top 100",end:"+=6000",scrub:1,pin:!0},defaults:{ease:"linear",x:400,opacity:0}});h.from(v,{duration:8,stagger:4}),h.from(g,{duration:8,stagger:10}),n.ZP.utils.toArray(".slide-in").forEach((function(e){n.ZP.from(e,{x:-300,opacity:0,duration:.5,delay:.25,scrollTrigger:{trigger:e,start:"top 95%"}})})),window.addEventListener("DOMContentLoaded",(function(){var e,t;e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target,o=n.getAttribute("data-src");r(886)("./".concat(o)).then((function(e){n.setAttribute("src",e.default),n.addEventListener("load",(function(){n.parentNode.classList.add("image-loaded")}))})),t.unobserve(n)}}))}),{threshold:.2}),e.forEach((function(e){return t.observe(e)})),function(){document.body.style.overflow="auto";var e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((function(){e.remove()}),350)}()}))},959:function(){window.addEventListener("DOMContentLoaded",(function(){var e,t=document.body,r=document.querySelector(".theme-toggle"),n=document.querySelector('meta[name="theme-color"]');function o(){"dark-theme"===e?(r.classList.add("theme-toggle--toggled"),n.setAttribute("content","#141414")):(r.classList.remove("theme-toggle--toggled"),n.setAttribute("content","#d9d9d9"))}localStorage.getItem("color-theme")?e=localStorage.getItem("color-theme"):(localStorage.setItem("color-theme","dark-theme"),e="dark-theme"),t.classList.add(e),o(),r.addEventListener("click",(function(){t.classList.remove(e),e="dark-theme"===e?"light-theme":"dark-theme",t.classList.add(e),o(),localStorage.setItem("color-theme",e)}))}))},886:function(e,t,r){var n={"./home-intro/intro-aquarium.webp":418,"./home-intro/intro-brume.webp":729,"./home-intro/intro-ddd.webp":985,"./home-intro/intro-findscan.webp":21,"./tcotsmap.webp":825};function o(e){return i(e).then((function(e){return r.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}))}o.keys=function(){return Object.keys(n)},o.resolve=i,o.id=886,e.exports=o},418:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-aquarium.webp"},729:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-brume.webp"},985:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-ddd.webp"},21:function(e,t,r){"use strict";e.exports=r.p+"assets/images/intro-findscan.webp"},825:function(e,t,r){"use strict";e.exports=r.p+"assets/images/tcotsmap.webp"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=function(t,r,n,o){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],o=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,n,o]},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,r({}),r([]),r(r)];for(var a=2&n&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((function(t){s[t]=function(){return e[t]}}));return s.default=function(){return e},i.d(o,s),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={424:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,s=r[0],a=r[1],c=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(c)var l=c(i)}for(t&&t(r);u<s.length;u++)o=s[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},r=self.webpackChunkportfolio=self.webpackChunkportfolio||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var s=i.O(void 0,[712],(function(){return i(859)}));s=i.O(s)}();
//# sourceMappingURL=homePage.9bb8d9a6ada4784d205f.js.map