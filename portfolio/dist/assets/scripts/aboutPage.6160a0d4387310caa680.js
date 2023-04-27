!function(){var e,t,n,r={872:function(e,t,n){"use strict";var r=n(848),o=n.n(r);setTimeout((function(){var e=document.querySelectorAll(".slide-in-trigger"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target.querySelector(".slide-in");n.style.opacity=1,n.style.transform="translate3d(0, 0, 0)",t.unobserve(n)}}))}),{threshold:.5});e.forEach((function(e){return t.observe(e)}))}),500);n(959);setTimeout((function(){var e=document.querySelector(".header__nav-btn"),t=document.querySelector(".header__links-list"),n=document.querySelectorAll(".header__list-item > *"),r=!1;function o(){r=!1,e.classList.remove("header__nav-btn--active"),t.classList.remove("header__links-list--active"),setTimeout((function(){t.style.visibility="hidden"}),350),document.body.classList.remove("no-scroll")}function i(){n.forEach((function(e){e.style.visibility="visible"}))}function c(){n.forEach((function(e){e.style.visibility="hidden"}))}e.addEventListener("click",(function(){r?(o(),setTimeout((function(){c()}),350)):(r=!0,e.classList.add("header__nav-btn--active"),t.classList.add("header__links-list--active"),t.style.visibility="visible",document.body.classList.add("no-scroll"),i())})),window.innerWidth<=1024&&c(),window.addEventListener("resize",(function(){window.innerWidth>1024?r?o():i():window.innerWidth<=1024&&!r&&c()}))}),500),o()(".title, .subtitle, .paragraph, .list__item",{watch:!0}),window.addEventListener("DOMContentLoaded",(function(){var e,t;!function(){document.body.style.overflow="auto";var e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((function(){e.remove()}),350)}(),e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target,o=r.getAttribute("data-src");n(886)("./".concat(o)).then((function(e){r.setAttribute("src",e.default),r.addEventListener("load",(function(){r.parentNode.classList.add("image-loaded")}))})),t.unobserve(r)}}))}),{threshold:.2}),e.forEach((function(e){return t.observe(e)}))}))},959:function(){window.addEventListener("DOMContentLoaded",(function(){var e,t=document.body,n=document.querySelector(".theme-toggle"),r=document.querySelector('meta[name="theme-color"]');function o(){"dark-theme"===e?(n.classList.add("theme-toggle--toggled"),r.setAttribute("content","#141414")):(n.classList.remove("theme-toggle--toggled"),r.setAttribute("content","#d9d9d9"))}localStorage.getItem("color-theme")?e=localStorage.getItem("color-theme"):(localStorage.setItem("color-theme","dark-theme"),e="dark-theme"),t.classList.add(e),o(),n.addEventListener("click",(function(){t.classList.remove(e),e="dark-theme"===e?"light-theme":"dark-theme",t.classList.add(e),o(),localStorage.setItem("color-theme",e)}))}))},886:function(e,t,n){var r={"./home-intro/intro-aquarium.webp":418,"./home-intro/intro-brume.webp":729,"./home-intro/intro-ddd.webp":985,"./home-intro/intro-findscan.webp":21,"./tcotsmap.jpg":962,"./tcotsmap.webp":825};function o(e){return i(e).then((function(e){return n.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}))}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=886,e.exports=o},418:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-aquarium.webp"},729:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-brume.webp"},985:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-ddd.webp"},21:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-findscan.webp"},962:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.jpg"},825:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.webp"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e].call(n.exports,n,n.exports,i),n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var s=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(s=!1,o<c&&(c=o));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var c={};t=t||[null,n({}),n([]),n(n)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((function(t){c[t]=function(){return e[t]}}));return c.default=function(){return e},i.d(o,c),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={170:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,c=n[0],s=n[1],a=n[2],u=0;if(c.some((function(t){return 0!==e[t]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(a)var l=a(i)}for(t&&t(n);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var c=i.O(void 0,[712],(function(){return i(872)}));c=i.O(c)}();
//# sourceMappingURL=aboutPage.6160a0d4387310caa680.js.map