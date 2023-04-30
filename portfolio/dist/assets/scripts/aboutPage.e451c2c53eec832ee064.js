!function(){var e,t,n,r={872:function(e,t,n){"use strict";var r=document.querySelectorAll(".slide-in-trigger"),o=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var n=e.target.querySelector(".slide-in");n.style.opacity=1,n.style.transform="translate3d(0, 0, 0)",t.unobserve(n)}}))}),{threshold:.5});r.forEach((function(e){return o.observe(e)}));n(959);var i=document.querySelector(".header__nav-btn"),s=document.querySelector(".header__links-list"),c=!1;function a(){c=!1,i.classList.remove("header__nav-btn--active"),s.classList.remove("header__links-list--active"),setTimeout((function(){s.style.visibility="hidden"}),350)}i.addEventListener("click",(function(){c?a():(c=!0,i.classList.add("header__nav-btn--active"),s.classList.add("header__links-list--active"),s.style.visibility="visible")})),window.addEventListener("resize",(function(){window.innerWidth>1024?(a(),setTimeout((function(){s.style.visibility="visible"}),350)):setTimeout((function(){s.style.visibility="hidden"}),355)})),window.addEventListener("DOMContentLoaded",(function(){!function(){document.body.style.overflow="auto";var e=document.querySelector(".loadingPlaceholder");e.classList.add("loadingPlaceholder-hidden"),setTimeout((function(){e.remove()}),350)}(),function(){var e=document.querySelectorAll(".lazy-image"),t=new IntersectionObserver((function(e,t){e.forEach((function(e){if(e.isIntersecting){var r=e.target,o=r.getAttribute("data-src");n(886)("./".concat(o)).then((function(e){r.setAttribute("src",e.default),r.addEventListener("load",(function(){r.parentNode.classList.add("image-loaded")}))})),t.unobserve(r)}}))}),{threshold:.2});e.forEach((function(e){return t.observe(e)}))}()}))},959:function(){window.addEventListener("DOMContentLoaded",(function(){var e,t=document.body,n=document.querySelector(".theme-toggle"),r=document.querySelector('meta[name="theme-color"]');function o(){"dark-theme"===e?(n.classList.add("theme-toggle--toggled"),r.setAttribute("content","#141414")):(n.classList.remove("theme-toggle--toggled"),r.setAttribute("content","#d9d9d9"))}localStorage.getItem("color-theme")?e=localStorage.getItem("color-theme"):(localStorage.setItem("color-theme","dark-theme"),e="dark-theme"),t.classList.add(e),o(),n.addEventListener("click",(function(){t.classList.remove(e),e="dark-theme"===e?"light-theme":"dark-theme",t.classList.add(e),o(),localStorage.setItem("color-theme",e)}))}))},886:function(e,t,n){var r={"./home-intro/intro-aquarium.webp":418,"./home-intro/intro-brume.webp":729,"./home-intro/intro-ddd.webp":985,"./home-intro/intro-findscan.webp":21,"./tcotsmap.jpg":962,"./tcotsmap.webp":825};function o(e){return i(e).then((function(e){return n.t(e,1)}))}function i(e){return Promise.resolve().then((function(){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}))}o.keys=function(){return Object.keys(r)},o.resolve=i,o.id=886,e.exports=o},418:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-aquarium.webp"},729:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-brume.webp"},985:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-ddd.webp"},21:function(e,t,n){"use strict";e.exports=n.p+"assets/images/intro-findscan.webp"},962:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.jpg"},825:function(e,t,n){"use strict";e.exports=n.p+"assets/images/tcotsmap.webp"}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,i),n.exports}i.m=r,e=[],i.O=function(t,n,r,o){if(!n){var s=1/0;for(l=0;l<e.length;l++){n=e[l][0],r=e[l][1],o=e[l][2];for(var c=!0,a=0;a<n.length;a++)(!1&o||s>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[a])}))?n.splice(a--,1):(c=!1,o<s&&(s=o));if(c){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var s={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((function(t){s[t]=function(){return e[t]}}));return s.default=function(){return e},i.d(o,s),o},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../../"}(),function(){var e={170:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,o,s=n[0],c=n[1],a=n[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var l=a(i)}for(t&&t(n);u<s.length;u++)o=s[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},n=self.webpackChunkportfolio=self.webpackChunkportfolio||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var s=i.O(void 0,[712],(function(){return i(872)}));s=i.O(s)}();
//# sourceMappingURL=aboutPage.e451c2c53eec832ee064.js.map