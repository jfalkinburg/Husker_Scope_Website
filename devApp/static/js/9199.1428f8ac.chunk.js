"use strict";(self.webpackChunkhusker_scope=self.webpackChunkhusker_scope||[]).push([[9199],{1580:(e,t,r)=>{r.r(t),r.d(t,{createSwipeBackGesture:()=>a});var n=r(7275),i=r(1399),u=r(1452),a=(r(190),function(e,t,r,a,c){var o=e.ownerDocument.defaultView,s=(0,i.i)(e),h=function(e){return s?-e.deltaX:e.deltaX},f=function(e){return s?-e.velocityX:e.velocityX};return(0,u.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(r){return s=(0,i.i)(e),function(e){var t=e.startX;return s?t>=o.innerWidth-50:t<=50}(r)&&t()},onStart:r,onMove:function(e){var t=h(e)/o.innerWidth;a(t)},onEnd:function(e){var t=h(e),r=o.innerWidth,i=t/r,u=f(e),a=u>=0&&(u>.2||t>r/2),s=(a?1-i:i)*r,l=0;if(s>5){var d=s/Math.abs(u);l=Math.min(d,540)}c(a,i<=0?.01:(0,n.l)(0,i,.9999),l)}})})}}]);
//# sourceMappingURL=9199.1428f8ac.chunk.js.map