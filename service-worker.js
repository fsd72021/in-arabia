if(!self.define){let a,n={};const i=(i,e)=>(i=new URL(i+".js",e).href,n[i]||new Promise((n=>{if("document"in self){const a=document.createElement("script");a.src=i,a.onload=n,document.head.appendChild(a)}else a=i,importScripts(i),n()})).then((()=>{let a=n[i];if(!a)throw new Error(`Module ${i} didn’t register its module`);return a})));self.define=(e,r)=>{const s=a||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const t=a=>i(a,s),l={module:{uri:s},exports:o,require:t};n[s]=Promise.all(e.map((a=>l[a]||t(a)))).then((a=>(r(...a),o)))}}define(["./workbox-29b31176"],(function(a){"use strict";a.setCacheNameDetails({prefix:"arabia"}),self.addEventListener("message",(a=>{a.data&&"SKIP_WAITING"===a.data.type&&self.skipWaiting()})),a.precacheAndRoute([{url:"/taha/in-arabia/en/css/app.b500016e.css",revision:null},{url:"/taha/in-arabia/en/fonts/bootstrap-icons.51e2826a.woff",revision:null},{url:"/taha/in-arabia/en/fonts/bootstrap-icons.988b20fa.woff2",revision:null},{url:"/taha/in-arabia/en/img/01.f6def376.jpg",revision:null},{url:"/taha/in-arabia/en/img/blank.aad363d0.png",revision:null},{url:"/taha/in-arabia/en/img/contact-bg.0ffe282b.png",revision:null},{url:"/taha/in-arabia/en/img/logo.97291cd8.png",revision:null},{url:"/taha/in-arabia/en/index.html",revision:"59ac4a6acdcd2aae940a27629e8a5ec6"},{url:"/taha/in-arabia/en/js/app.0ce64b83.js",revision:null},{url:"/taha/in-arabia/en/js/chunk-vendors.58b8aa0d.js",revision:null},{url:"/taha/in-arabia/en/manifest.json",revision:"3547b585d99433198918825681392048"},{url:"/taha/in-arabia/en/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
