"use strict";(self.webpackChunkhusker_scope=self.webpackChunkhusker_scope||[]).push([[571],{571:(e,n,r)=>{r.r(n),r.d(n,{C:()=>c,a:()=>i,d:()=>s});var t=r(9354),o=r(7275),i=function(e,n,r,i,s,c){return(0,t.sH)(void 0,void 0,void 0,(function(){var a,u;return(0,t.YH)(this,(function(t){switch(t.label){case 0:if(e)return[2,e.attachViewToDom(n,r,s,i)];if(!c&&"string"!==typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"===typeof r?null===(a=n.ownerDocument)||void 0===a?void 0:a.createElement(r):r,i&&i.forEach((function(e){return u.classList.add(e)})),s&&Object.assign(u,s),n.appendChild(u),[4,new Promise((function(e){return(0,o.c)(u,e)}))];case 1:return t.sent(),[2,u]}}))}))},s=function(e,n){if(n){if(e){var r=n.parentElement;return e.removeViewFromDom(r,n)}n.remove()}return Promise.resolve()},c=function(){var e,n;return{attachViewToDom:function(r,i,s,c){return void 0===s&&(s={}),void 0===c&&(c=[]),(0,t.sH)(void 0,void 0,void 0,(function(){var a,u,d,l,f;return(0,t.YH)(this,(function(t){switch(t.label){case 0:return e=r,i?(d="string"===typeof i?null===(a=e.ownerDocument)||void 0===a?void 0:a.createElement(i):i,c.forEach((function(e){return d.classList.add(e)})),Object.assign(d,s),e.appendChild(d),[4,new Promise((function(e){return(0,o.c)(d,e)}))]):[3,2];case 1:return t.sent(),[3,3];case 2:e.children.length>0&&(e.children[0].classList.contains("ion-delegate-host")||((l=null===(u=e.ownerDocument)||void 0===u?void 0:u.createElement("div")).classList.add("ion-delegate-host"),c.forEach((function(e){return l.classList.add(e)})),l.append.apply(l,e.children),e.appendChild(l))),t.label=3;case 3:return f=document.querySelector("ion-app")||document.body,n=document.createComment("ionic teleport"),e.parentNode.insertBefore(n,e),f.appendChild(e),[2,e]}}))}))},removeViewFromDom:function(){return e&&n&&(n.parentNode.insertBefore(e,n),n.remove()),Promise.resolve()}}}}}]);
//# sourceMappingURL=571.229e2a4b.chunk.js.map