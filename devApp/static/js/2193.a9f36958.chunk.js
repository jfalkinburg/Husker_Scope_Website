/*! For license information please see 2193.a9f36958.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkhusker_scope=self.webpackChunkhusker_scope||[]).push([[2193,571,2918,8838,2874,5700],{571:(t,e,r)=>{r.r(e),r.d(e,{C:()=>s,a:()=>o,d:()=>a});var i=r(9354),n=r(7275),o=function(t,e,r,o,a,s){return(0,i.sH)(void 0,void 0,void 0,(function(){var d,l;return(0,i.YH)(this,(function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(e,r,a,o)];if(!s&&"string"!==typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return l="string"===typeof r?null===(d=e.ownerDocument)||void 0===d?void 0:d.createElement(r):r,o&&o.forEach((function(t){return l.classList.add(t)})),a&&Object.assign(l,a),e.appendChild(l),[4,new Promise((function(t){return(0,n.c)(l,t)}))];case 1:return i.sent(),[2,l]}}))}))},a=function(t,e){if(e){if(t){var r=e.parentElement;return t.removeViewFromDom(r,e)}e.remove()}return Promise.resolve()},s=function(){var t,e;return{attachViewToDom:function(r,o,a,s){return void 0===a&&(a={}),void 0===s&&(s=[]),(0,i.sH)(void 0,void 0,void 0,(function(){var d,l,c,p,h;return(0,i.YH)(this,(function(i){switch(i.label){case 0:return t=r,o?(c="string"===typeof o?null===(d=t.ownerDocument)||void 0===d?void 0:d.createElement(o):o,s.forEach((function(t){return c.classList.add(t)})),Object.assign(c,a),t.appendChild(c),[4,new Promise((function(t){return(0,n.c)(c,t)}))]):[3,2];case 1:return i.sent(),[3,3];case 2:t.children.length>0&&(t.children[0].classList.contains("ion-delegate-host")||((p=null===(l=t.ownerDocument)||void 0===l?void 0:l.createElement("div")).classList.add("ion-delegate-host"),s.forEach((function(t){return p.classList.add(t)})),p.append.apply(p,t.children),t.appendChild(p))),i.label=3;case 3:return h=document.querySelector("ion-app")||document.body,e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),h.appendChild(t),[2,t]}}))}))},removeViewFromDom:function(){return t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve()}}}},2918:(t,e,r)=>{r.r(e),r.d(e,{a:()=>a,b:()=>o,p:()=>n});var i=r(9354),n=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.warn.apply(console,(0,i.fX)(["[Ionic Warning]: ".concat(t)],e,!1))},o=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.error.apply(console,(0,i.fX)(["[Ionic Error]: ".concat(t)],e,!1))},a=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return console.error("<".concat(t.tagName.toLowerCase(),"> must be used inside ").concat(e.join(" or "),"."))}},8838:(t,e,r)=>{r.r(e),r.d(e,{I:()=>a,a:()=>p,b:()=>s,c:()=>f,d:()=>b,f:()=>h,g:()=>c,i:()=>l,p:()=>m,r:()=>g,s:()=>u});var i=r(9354),n=r(7275),o=r(2918),a="ion-content",s=".ion-content-scroll-host",d="".concat(a,", ").concat(s),l=function(t){return"ION-CONTENT"===t.tagName},c=function(t){return(0,i.sH)(void 0,void 0,void 0,(function(){return(0,i.YH)(this,(function(e){switch(e.label){case 0:return l(t)?[4,new Promise((function(e){return(0,n.c)(t,e)}))]:[3,2];case 1:return e.sent(),[2,t.getScrollElement()];case 2:return[2,t]}}))}))},p=function(t){var e=t.querySelector(s);return e||t.querySelector(d)},h=function(t){return t.closest(d)},u=function(t,e){return l(t)?t.scrollToTop(e):Promise.resolve(t.scrollTo({top:0,left:0,behavior:e>0?"smooth":"auto"}))},f=function(t,e,r,i){return l(t)?t.scrollByPoint(e,r,i):Promise.resolve(t.scrollBy({top:r,left:e,behavior:i>0?"smooth":"auto"}))},m=function(t){return(0,o.a)(t,a)},b=function(t){if(l(t)){var e=t,r=e.scrollY;return e.scrollY=!1,r}return t.style.setProperty("overflow","hidden"),!0},g=function(t,e){l(t)?t.scrollY=e:t.style.removeProperty("overflow")}},2193:(t,e,r)=>{r.r(e),r.d(e,{ion_modal:()=>L});var i,n,o=r(9354),a=r(8225),s=r(9336),d=r(8838),l=r(571),c=r(7275),p=r(2874),h=r(2918),u=r(513),f=r(1678),m=r(5700),b=r(8718),g=r(9780),v=r(9449),w=r(1452);r(190);(n=i||(i={})).Dark="DARK",n.Light="LIGHT",n.Default="DEFAULT";var y={getEngine:function(){var t;return(null===(t=null===u.w||void 0===u.w?void 0:u.w.Capacitor)||void 0===t?void 0:t.isPluginAvailable("StatusBar"))&&(null===u.w||void 0===u.w?void 0:u.w.Capacitor.Plugins.StatusBar)},supportsDefaultStatusBarStyle:function(){var t;return!!(null===(t=null===u.w||void 0===u.w?void 0:u.w.Capacitor)||void 0===t?void 0:t.PluginHeaders)},setStyle:function(t){var e=this.getEngine();e&&e.setStyle(t)},getStyle:function(){return(0,o.sH)(this,void 0,void 0,(function(){var t;return(0,o.YH)(this,(function(e){switch(e.label){case 0:return(t=this.getEngine())?[4,t.getInfo()]:[2,i.Default];case 1:return[2,e.sent().style]}}))}))}},k=function(t,e){if(1===e)return 0;var r=1/(1-e);return t*r+-e*r},x=function(){!u.w||u.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:i.Dark})},D=function(t){void 0===t&&(t=i.Default),!u.w||u.w.innerWidth>=768||!y.supportsDefaultStatusBarStyle()||y.setStyle({style:t})},E=function(t,e){return(0,o.sH)(void 0,void 0,void 0,(function(){return(0,o.YH)(this,(function(r){switch(r.label){case 0:return"function"!==typeof t.canDismiss?[2]:[4,t.canDismiss(void 0,f.G)];case 1:return r.sent()?(e.isRunning()?e.onFinish((function(){t.dismiss(void 0,"handler")}),{oneTimeCallback:!0}):t.dismiss(void 0,"handler"),[2]):[2]}}))}))},S=function(t){return.00255275*Math.pow(2.71828,-14.9619*t)-1.00255*Math.pow(2.71828,-.0380968*t)+1},A=.93,B=function(t,e,r,i){var n=.5,o=t.offsetHeight,a=!1,s=!1,l=null,p=null,h=!0,u=0,f=(0,w.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:function(t){var e=t.event.target;if(null===e||!e.closest)return!0;if(l=(0,d.f)(e)){if((0,d.i)(l)){var r=(0,c.g)(l);p=r.querySelector(".inner-scroll")}else p=l;return!!!l.querySelector("ion-refresher")&&0===p.scrollTop}return null===e.closest("ion-footer")},onStart:function(r){var i=r.deltaY;h=!l||!(0,d.i)(l)||l.scrollY,s=void 0!==t.canDismiss&&!0!==t.canDismiss,i>0&&l&&(0,d.d)(l),e.progressStart(!0,a?1:0)},onMove:function(t){t.deltaY>0&&l&&(0,d.d)(l);var i=t.deltaY/o,a=i>=0&&s,p=a?.2:.9999,h=a?S(i/p):i,f=(0,c.l)(1e-4,h,p);e.progressStep(f),f>=n&&u<n?D(r):f<n&&u>=n&&x(),u=f},onEnd:function(r){var p=r.velocityY,u=r.deltaY/o,m=u>=0&&s,b=m?.2:.9999,g=m?S(u/b):u,w=(0,c.l)(1e-4,g,b),y=(r.deltaY+1e3*p)/o,k=!m&&y>=n,x=k?-.001:.001;k?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),x+=(0,v.g)([0,0],[.32,.72],[0,1],[1,1],w)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),x+=(0,v.g)([0,0],[1,0],[.68,.28],[1,1],w)[0]);var D=C(k?u*o:(1-w)*o,p);a=k,f.enable(!1),l&&(0,d.r)(l,h),e.onFinish((function(){k||f.enable(!0)})).progressEnd(k?1:0,x,D),m&&w>b/4?E(t,e):k&&i()}});return f},C=function(t,e){return(0,c.l)(400,t/Math.abs(1.1*e),500)},T=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,i=void 0===r||r<e,n=i?"calc(var(--backdrop-opacity) * ".concat(e,")"):"0",o=(0,g.c)("backdropAnimation").fromTo("opacity",0,n);return i&&o.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,g.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-100*e,"%)")}]),backdropAnimation:o}},Y=function(t){var e=t.currentBreakpoint,r=t.backdropBreakpoint,i="calc(var(--backdrop-opacity) * ".concat(k(e,r),")"),n=[{offset:0,opacity:i},{offset:1,opacity:0}],o=[{offset:0,opacity:i},{offset:r,opacity:0},{offset:1,opacity:0}],a=(0,g.c)("backdropAnimation").keyframes(0!==r?o:n);return{wrapperAnimation:(0,g.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-100*e,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:a}},P=function(t,e){var r=e.presentingEl,i=e.currentBreakpoint,n=(0,c.g)(t),o=void 0!==i?T(e):{backdropAnimation:(0,g.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,g.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")},a=o.wrapperAnimation,s=o.backdropAnimation;s.addElement(n.querySelector("ion-backdrop")),a.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=(0,g.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(a);if(r){var l=window.innerWidth<768,p="ION-MODAL"===r.tagName&&void 0!==r.presentingElement,h=(0,c.g)(r),u=(0,g.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),f=document.body;if(l){var m=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",b=A,v="translateY(".concat(p?"-10px":m,") scale(").concat(b,")");u.afterStyles({transform:v}).beforeAddWrite((function(){return f.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:v,borderRadius:"10px 10px 0 0"}]),d.addAnimation(u)}else if(d.addAnimation(s),p){v="translateY(-10px) scale(".concat(b=p?A:1,")");u.afterStyles({transform:v}).addElement(h.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:v}]);var w=(0,g.c)().afterStyles({transform:v}).addElement(h.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:v}]);d.addAnimation([u,w])}else a.fromTo("opacity","0","1")}else d.addAnimation(s);return d},O=function(t,e,r){void 0===r&&(r=500);var i=e.presentingEl,n=e.currentBreakpoint,o=(0,c.g)(t),a=void 0!==n?Y(e):{backdropAnimation:(0,g.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,g.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")},s=a.wrapperAnimation,d=a.backdropAnimation;d.addElement(o.querySelector("ion-backdrop")),s.addElement(o.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=(0,g.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(i){var p=window.innerWidth<768,h="ION-MODAL"===i.tagName&&void 0!==i.presentingElement,u=(0,c.g)(i),f=(0,g.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(t){if(1===t){i.style.setProperty("overflow","");var e=Array.from(m.querySelectorAll("ion-modal")).filter((function(t){return void 0!==t.presentingElement})).length;e<=1&&m.style.setProperty("background-color","")}})),m=document.body;if(p){var b=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",v=A,w="translateY(".concat(h?"-10px":b,") scale(").concat(v,")");f.addElement(i).keyframes([{offset:0,filter:"contrast(0.85)",transform:w,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),l.addAnimation(f)}else if(l.addAnimation(d),h){w="translateY(-10px) scale(".concat(v=h?A:1,")");f.addElement(u.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:w},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var y=(0,g.c)().addElement(u.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:w},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([f,y])}else s.fromTo("opacity","1","0")}else l.addAnimation(d);return l},H=function(t,e){var r=e.currentBreakpoint,i=(0,c.g)(t),n=void 0!==r?T(e):{backdropAnimation:(0,g.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,g.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])},o=n.wrapperAnimation,a=n.backdropAnimation;return a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelector(".modal-wrapper")),(0,g.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([a,o])},M=function(t,e){var r=e.currentBreakpoint,i=(0,c.g)(t),n=void 0!==r?Y(e):{backdropAnimation:(0,g.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,g.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])},o=n.wrapperAnimation,a=n.backdropAnimation;return a.addElement(i.querySelector("ion-backdrop")),o.addElement(i.querySelector(".modal-wrapper")),(0,g.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([a,o])},L=function(){function t(t){var e=this;(0,a.r)(this,t),this.didPresent=(0,a.e)(this,"ionModalDidPresent",7),this.willPresent=(0,a.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,a.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,a.e)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,a.e)(this,"didPresent",7),this.willPresentShorthand=(0,a.e)(this,"willPresent",7),this.willDismissShorthand=(0,a.e)(this,"willDismiss",7),this.didDismissShorthand=(0,a.e)(this,"didDismiss",7),this.modalIndex=R++,this.coreDelegate=(0,l.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.presented=!1,this.hasController=!1,this.keyboardClose=!0,this.backdropBreakpoint=0,this.handleBehavior="none",this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.isOpen=!1,this.keepContentsMounted=!1,this.configureTriggerInteraction=function(){var t=e,r=t.trigger,i=t.el,n=t.destroyTriggerInteraction;if(n&&n(),void 0!==r){var o=void 0!==r?document.getElementById(r):null;if(o){e.destroyTriggerInteraction=function(t,e){var r=function(){e.present()};return t.addEventListener("click",r),function(){t.removeEventListener("click",r)}}(o,i)}else(0,h.p)('A trigger element with the ID "'.concat(r,'" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-modal.'),e.el)}},this.onHandleClick=function(){var t=e,r=t.sheetTransition;"cycle"===t.handleBehavior&&void 0===r&&e.moveToNextBreakpoint()},this.onBackdropTap=function(){void 0===e.sheetTransition&&e.dismiss(void 0,f.B)},this.onLifecycle=function(t){var r=e.usersElement,i=I[t.type];if(r&&i){var n=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:t.detail});r.dispatchEvent(n)}}}return t.prototype.onIsOpenChange=function(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()},t.prototype.onTriggerChange=function(){this.configureTriggerInteraction()},t.prototype.swipeToCloseChanged=function(t){return(0,o.sH)(this,void 0,void 0,(function(){return(0,o.YH)(this,(function(e){return this.gesture?this.gesture.enable(t):t&&this.initSwipeToClose(),[2]}))}))},t.prototype.breakpointsChanged=function(t){void 0!==t&&(this.sortedBreakpoints=t.sort((function(t,e){return t-e})))},t.prototype.connectedCallback=function(){var t=this.configureTriggerInteraction,e=this.el;(0,f.e)(e),t()},t.prototype.disconnectedCallback=function(){var t=this.destroyTriggerInteraction;t&&t()},t.prototype.componentWillLoad=function(){var t=this,e=t.breakpoints,r=t.initialBreakpoint,i=t.swipeToClose,n=t.el;this.inheritedAttributes=(0,c.j)(n,["aria-label","role"]),this.modalId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-modal-".concat(this.modalIndex),(this.isSheetModal=void 0!==e&&void 0!==r)&&(this.currentBreakpoint=this.initialBreakpoint),void 0===e||void 0===r||e.includes(r)||(0,h.p)("Your breakpoints array must include the initialBreakpoint value."),i&&(0,h.p)("swipeToClose has been deprecated in favor of canDismiss.\n\nIf you want a card modal to be swipeable, set canDismiss to `true`. In the next major release of Ionic, swipeToClose will be removed, and all card modals will be swipeable by default.")},t.prototype.componentDidLoad=function(){var t=this;!0===this.isOpen&&(0,c.r)((function(){return t.present()})),this.breakpointsChanged(this.breakpoints)},t.prototype.getDelegate=function(t){if(void 0===t&&(t=!1),this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};var e=this.el.parentNode,r=this.inline=null!==e&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}},t.prototype.checkCanDismiss=function(t,e){return(0,o.sH)(this,void 0,void 0,(function(){var r;return(0,o.YH)(this,(function(i){return void 0===(r=this.canDismiss)?[2,!0]:"function"===typeof r?[2,r(t,e)]:[2,r]}))}))},t.prototype.present=function(){return(0,o.sH)(this,void 0,void 0,(function(){var t,e,r,i,n,d,h=this;return(0,o.YH)(this,(function(o){switch(o.label){case 0:return this.presented?[2]:void 0===this.currentTransition?[3,2]:[4,this.currentTransition];case 1:o.sent(),o.label=2;case 2:return this.currentBreakpoint=this.initialBreakpoint,t=this.getDelegate(!0),e=t.inline,r=t.delegate,i=this,[4,(0,l.a)(r,this.el,this.component,["ion-page"],this.componentProps,e)];case 3:return i.usersElement=o.sent(),[4,(0,b.e)(this.usersElement)];case 4:return o.sent(),(0,a.c)((function(){return h.el.classList.add("show-modal")})),this.currentTransition=(0,f.d)(this,"modalEnter",P,H,{presentingEl:this.presentingElement,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),"undefined"!==typeof window&&(this.keyboardOpenCallback=function(){h.gesture&&(h.gesture.enable(!1),(0,c.r)((function(){h.gesture&&h.gesture.enable(!0)})))},window.addEventListener(p.KEYBOARD_DID_OPEN,this.keyboardOpenCallback)),(n=void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss))&&"ios"===(0,s.b)(this)?(d=this,[4,y.getStyle()]):[3,6];case 5:d.statusBarStyle=o.sent(),x(),o.label=6;case 6:return[4,this.currentTransition];case 7:return o.sent(),this.isSheetModal?this.initSheetGesture():n&&this.initSwipeToClose(),this.currentTransition=void 0,[2]}}))}))},t.prototype.initSwipeToClose=function(){var t,e=this;if("ios"===(0,s.b)(this)){var r=this.el,n=this.leaveAnimation||s.c.get("modalLeave",O),a=this.animation=n(r,{presentingEl:this.presentingElement});if((0,d.a)(r)){var l=null!==(t=this.statusBarStyle)&&void 0!==t?t:i.Default;this.gesture=B(r,a,l,(function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((function(){return(0,o.sH)(e,void 0,void 0,(function(){return(0,o.YH)(this,(function(t){switch(t.label){case 0:return[4,this.dismiss(void 0,f.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))})),this.gesture.enable(!0)}else(0,d.p)(r)}},t.prototype.initSheetGesture=function(){var t=this,e=this,r=e.wrapperEl,i=e.initialBreakpoint,n=e.backdropBreakpoint;if(r&&void 0!==i){var a=this.enterAnimation||s.c.get("modalEnter",P),d=this.animation=a(this.el,{presentingEl:this.presentingElement,currentBreakpoint:i,backdropBreakpoint:n});d.progressStart(!0,1);var l=function(t,e,r,i,n,a,s,d,l,p){void 0===s&&(s=[]);var h={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==n?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-n,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},u=t.querySelector("ion-content"),f=r.clientHeight,m=i,b=0,g=!1,v=a.childAnimations.find((function(t){return"wrapperAnimation"===t.id})),y=a.childAnimations.find((function(t){return"backdropAnimation"===t.id})),x=s[s.length-1],D=s[0],A=function(){t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},B=function(){t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};v&&y&&(v.keyframes((0,o.fX)([],h.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,o.fX)([],h.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-m),m>n?A():B()),u&&m!==x&&(u.scrollY=!1);var C=function(e){var r=e.breakpoint,i=e.canDismiss,d=e.breakpointOffset,f=i&&0===r,b=f?m:r,g=0!==b;return m=0,v&&y&&(v.keyframes([{offset:0,transform:"translateY(".concat(100*d,"%)")},{offset:1,transform:"translateY(".concat(100*(1-b),"%)")}]),y.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(k(1-d,n),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(k(b,n),")")}]),a.progressStep(0)),T.enable(!1),f?E(t,a):g||l(),new Promise((function(t){a.onFinish((function(){g?v&&y?(0,c.r)((function(){v.keyframes((0,o.fX)([],h.WRAPPER_KEYFRAMES,!0)),y.keyframes((0,o.fX)([],h.BACKDROP_KEYFRAMES,!0)),a.progressStart(!0,1-b),p(m=b),u&&m===s[s.length-1]&&(u.scrollY=!0),m>n?A():B(),T.enable(!0),t()})):(T.enable(!0),t()):t()}),{oneTimeCallback:!0}).progressEnd(1,0,500)}))},T=(0,w.createGesture)({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:function(t){var e=t.event.target.closest("ion-content");return 1!==(m=d())||!e},onStart:function(){g=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===D,u&&(u.scrollY=!1),(0,c.r)((function(){t.focus()})),a.progressStart(!0,1-m)},onMove:function(t){var e=1-m,r=s.length>1?1-s[1]:void 0,i=e+t.deltaY/f,n=void 0!==r&&i>=r&&g,o=n?.95:.9999,d=n&&void 0!==r?r+S((i-r)/(o-r)):i;b=(0,c.l)(1e-4,d,o),a.progressStep(b)},onEnd:function(t){var e=t.velocityY,r=(t.deltaY+350*e)/f,i=m-r,n=s.reduce((function(t,e){return Math.abs(e-i)<Math.abs(t-i)?e:t}));C({breakpoint:n,breakpointOffset:b,canDismiss:g})}});return{gesture:T,moveSheetToBreakpoint:C}}(this.el,this.backdropEl,r,i,n,d,this.sortedBreakpoints,(function(){var e;return null!==(e=t.currentBreakpoint)&&void 0!==e?e:0}),(function(){return t.sheetOnDismiss()}),(function(e){t.currentBreakpoint!==e&&(t.currentBreakpoint=e,t.ionBreakpointDidChange.emit({breakpoint:e}))})),p=l.gesture,h=l.moveSheetToBreakpoint;this.gesture=p,this.moveSheetToBreakpoint=h,this.gesture.enable(!0)}},t.prototype.sheetOnDismiss=function(){var t=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((function(){return(0,o.sH)(t,void 0,void 0,(function(){return(0,o.YH)(this,(function(t){switch(t.label){case 0:return this.currentBreakpoint=0,this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint}),[4,this.dismiss(void 0,f.G)];case 1:return t.sent(),this.gestureAnimationDismissing=!1,[2]}}))}))}))},t.prototype.dismiss=function(t,e){return(0,o.sH)(this,void 0,void 0,(function(){var r,i,n,d,c,h=this;return(0,o.YH)(this,(function(o){switch(o.label){case 0:return this.gestureAnimationDismissing&&e!==f.G?[2,!1]:(i="handler"!==e)?[4,this.checkCanDismiss(t,e)]:[3,2];case 1:i=!o.sent(),o.label=2;case 2:return i?[2,!1]:(void 0!==this.presentingElement&&(this.swipeToClose||void 0!==this.canDismiss)&&"ios"===(0,s.b)(this)&&D(this.statusBarStyle),"undefined"!==typeof window&&this.keyboardOpenCallback&&(window.removeEventListener(p.KEYBOARD_DID_OPEN,this.keyboardOpenCallback),this.keyboardOpenCallback=void 0),void 0===this.currentTransition?[3,4]:[4,this.currentTransition]);case 3:o.sent(),o.label=4;case 4:return n=f.h.get(this)||[],this.currentTransition=(0,f.f)(this,t,e,"modalLeave",O,M,{presentingEl:this.presentingElement,currentBreakpoint:null!==(r=this.currentBreakpoint)&&void 0!==r?r:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint}),[4,this.currentTransition];case 5:return(d=o.sent())?(c=this.getDelegate().delegate,[4,(0,l.d)(c,this.usersElement)]):[3,7];case 6:o.sent(),(0,a.c)((function(){return h.el.classList.remove("show-modal")})),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),n.forEach((function(t){return t.destroy()})),o.label=7;case 7:return this.currentBreakpoint=void 0,this.currentTransition=void 0,this.animation=void 0,[2,d]}}))}))},t.prototype.onDidDismiss=function(){return(0,f.g)(this.el,"ionModalDidDismiss")},t.prototype.onWillDismiss=function(){return(0,f.g)(this.el,"ionModalWillDismiss")},t.prototype.setCurrentBreakpoint=function(t){return(0,o.sH)(this,void 0,void 0,(function(){var e,r,i,n,a;return(0,o.YH)(this,(function(o){switch(o.label){case 0:return this.isSheetModal?this.breakpoints.includes(t)?(r=(e=this).currentBreakpoint,i=e.moveSheetToBreakpoint,n=e.canDismiss,a=e.breakpoints,r===t?[2]:i?(this.sheetTransition=i({breakpoint:t,breakpointOffset:1-r,canDismiss:void 0!==n&&!0!==n&&0===a[0]}),[4,this.sheetTransition]):[3,2]):((0,h.p)("Attempted to set invalid breakpoint value ".concat(t,". Please double check that the breakpoint value is part of your defined breakpoints.")),[2]):((0,h.p)("setCurrentBreakpoint is only supported on sheet modals."),[2]);case 1:o.sent(),this.sheetTransition=void 0,o.label=2;case 2:return[2]}}))}))},t.prototype.getCurrentBreakpoint=function(){return(0,o.sH)(this,void 0,void 0,(function(){return(0,o.YH)(this,(function(t){return[2,this.currentBreakpoint]}))}))},t.prototype.moveToNextBreakpoint=function(){return(0,o.sH)(this,void 0,void 0,(function(){var t,e,r,i,n,a,s;return(0,o.YH)(this,(function(o){switch(o.label){case 0:return e=(t=this).breakpoints,r=t.currentBreakpoint,e&&null!=r?(i=e.filter((function(t){return 0!==t})),n=i.indexOf(r),a=(n+1)%i.length,s=i[a],[4,this.setCurrentBreakpoint(s)]):[2,!1];case 1:return o.sent(),[2,!0]}}))}))},t.prototype.render=function(){var t,e=this,r=this,i=r.handle,n=r.isSheetModal,o=r.presentingElement,d=r.htmlAttributes,l=r.handleBehavior,c=r.inheritedAttributes,p=!1!==i&&n,h=(0,s.b)(this),u=this.modalId,f=void 0!==o&&"ios"===h,b="cycle"===l;return(0,a.h)(a.H,Object.assign({"no-router":!0,tabindex:"-1"},d,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},t[h]=!0,t["modal-default"]=!f&&!n,t["modal-card"]=f,t["modal-sheet"]=n,t["overlay-hidden"]=!0,t),(0,m.g)(this.cssClass)),id:u,onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,a.h)("ion-backdrop",{ref:function(t){return e.backdropEl=t},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===h&&(0,a.h)("div",{class:"modal-shadow"}),(0,a.h)("div",Object.assign({role:"dialog"},c,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(t){return e.wrapperEl=t}}),p&&(0,a.h)("button",{class:"modal-handle",tabIndex:b?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:b?this.onHandleClick:void 0,part:"handle"}),(0,a.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["onTriggerChange"],swipeToClose:["swipeToCloseChanged"]}},enumerable:!1,configurable:!0}),t}(),I={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"},R=0;L.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: 1px){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: 1px){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;margin-left:auto;margin-right:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.modal-handle::before{padding-left:4px;padding-right:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.modal-handle::before{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},2874:(t,e,r)=>{r.r(e),r.d(e,{KEYBOARD_DID_CLOSE:()=>n,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>w,keyboardDidClose:()=>m,keyboardDidOpen:()=>u,keyboardDidResize:()=>f,resetKeyboardAssist:()=>d,setKeyboardClose:()=>h,setKeyboardOpen:()=>p,startKeyboardAssist:()=>l,trackViewportChanges:()=>v});var i="ionKeyboardDidShow",n="ionKeyboardDidHide",o={},a={},s=!1,d=function(){o={},a={},s=!1},l=function(t){c(t),t.visualViewport&&(a=w(t.visualViewport),t.visualViewport.onresize=function(){v(t),u()||f(t)?p(t):m(t)&&h(t)})},c=function(t){t.addEventListener("keyboardDidShow",(function(e){return p(t,e)})),t.addEventListener("keyboardDidHide",(function(){return h(t)}))},p=function(t,e){b(t,e),s=!0},h=function(t){g(t),s=!1},u=function(){var t=(o.height-a.height)*a.scale;return!s&&o.width===a.width&&t>150},f=function(t){return s&&!m(t)},m=function(t){return s&&a.height===t.innerHeight},b=function(t,e){var r=e?e.keyboardHeight:t.innerHeight-a.height,n=new CustomEvent(i,{detail:{keyboardHeight:r}});t.dispatchEvent(n)},g=function(t){var e=new CustomEvent(n);t.dispatchEvent(e)},v=function(t){o=Object.assign({},a),a=w(t.visualViewport)},w=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}},5700:(t,e,r)=>{r.r(e),r.d(e,{c:()=>o,g:()=>a,h:()=>n,o:()=>d});var i=r(9354),n=function(t,e){return null!==e.closest(t)},o=function(t,e){var r;return"string"===typeof t&&t.length>0?Object.assign(((r={"ion-color":!0})["ion-color-".concat(t)]=!0,r),e):e},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,r,n){return(0,i.sH)(void 0,void 0,void 0,(function(){var o;return(0,i.YH)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,r,n)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=2193.a9f36958.chunk.js.map