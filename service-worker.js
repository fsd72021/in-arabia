if(!self.define){let e,n={};const i=(i,o)=>(i=new URL(i+".js",o).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let l={};const t=e=>i(e,s),u={module:{uri:s},exports:l,require:t};n[s]=Promise.all(o.map((e=>u[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"arabia"}),self.skipWaiting(),e.precacheAndRoute([{url:"/css/app.ea10cc3d.css",revision:null},{url:"/fonts/bootstrap-icons.51e2826a.woff",revision:null},{url:"/fonts/bootstrap-icons.988b20fa.woff2",revision:null},{url:"/img/blank.aad363d0.png",revision:null},{url:"/img/contact-bg.0ffe282b.png",revision:null},{url:"/img/logo.7f740894.png",revision:null},{url:"/img/person.3e3f2ba6.jpg",revision:null},{url:"/index.html",revision:"a0ee5db812429ce4f86dbc14c6545b28"},{url:"/js/app.491ae7ac.js",revision:null},{url:"/js/chunk-vendors.9a86eb89.js",revision:null},{url:"/manifest.json",revision:"3547b585d99433198918825681392048"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
