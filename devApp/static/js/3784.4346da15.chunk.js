/*! For license information please see 3784.4346da15.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhusker_scope=self.webpackChunkhusker_scope||[]).push([[3784],{3784:(e,s,t)=>{t.r(s),t.d(s,{startFocusVisible:()=>r});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let s=[],t=!0;const r=e?e.shadowRoot:document,c=e||document.body,i=e=>{s.forEach((e=>e.classList.remove(o))),e.forEach((e=>e.classList.add(o))),s=e},d=()=>{t=!1,i([])},a=e=>{t=n.includes(e.key),t||i([])},u=e=>{if(t&&void 0!==e.composedPath){const s=e.composedPath().filter((e=>!!e.classList&&e.classList.contains("ion-focusable")));i(s)}},v=()=>{r.activeElement===c&&i([])};r.addEventListener("keydown",a),r.addEventListener("focusin",u),r.addEventListener("focusout",v),r.addEventListener("touchstart",d),r.addEventListener("mousedown",d);return{destroy:()=>{r.removeEventListener("keydown",a),r.removeEventListener("focusin",u),r.removeEventListener("focusout",v),r.removeEventListener("touchstart",d),r.removeEventListener("mousedown",d)},setFocus:i}}}}]);
//# sourceMappingURL=3784.4346da15.chunk.js.map