"use strict";(self.webpackChunkbet_game=self.webpackChunkbet_game||[]).push([[177],{99776:function(e,t,n){n.r(t);var r=n(4942),i=n(74165),o=n(15861),a=n(29439),s=n(75101),l=n(73324),u=n(37112),c=n(84090),d=n(26038),v=n(46123),f=n.n(v),p=n(47313),m=n(75590),h=n(58467),x=n(1667),b=n(46417);function g(e){var t,n=e.task,s=(0,m.$G)().t,d=(0,c.uF)().intlCurrency,v=(0,h.s0)(),g=(0,l.E)(),y=g.receive,w=g.data,Z=g.loading,j=(0,p.useState)(0),k=(0,a.Z)(j,2),N=k[0],C=k[1],S=(0,p.useState)(!1),q=(0,a.Z)(S,2),E=q[0],M=q[1];(0,p.useLayoutEffect)((function(){function e(){if("question"===(null===n||void 0===n?void 0:n.type)){var e=n.userTaskRecords[0];("finished"===e.status||100===e.progress||u.Xb.get("has-completed-learn-deposit-questions"))&&C(100)}}return e(),window.addEventListener("storage",e,!1),function(){window.removeEventListener("storage",e)}}),[n]);var O=(0,p.useMemo)((function(){return null===n||void 0===n?void 0:n.userTaskRecords[0]}),[n]),A=(0,p.useMemo)((function(){return"question"===(null===n||void 0===n?void 0:n.type)?N:null===O||void 0===O?void 0:O.progress}),[n,O,N]),J=(0,p.useCallback)((0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:if(100!==A){e.next=8;break}return e.next=5,y(n.id);case 5:return M(!0),"deposit"===n.type&&u.Xb.remove("has-completed-learn-deposit-questions"),e.abrupt("return");case 8:"question"===n.type?v("/learn-deposit"):"deposit"===n.type?v("/deposit"):"home"===n.type?v("/"):"invite"===n.type&&v("/invite");case 9:case"end":return e.stop()}}),e)}))),[n,A,y,v]);return(0,b.jsxs)("div",{className:"relative bg-mb-gray-10 rounded-md px-3.5 pt-6 pb-3.5 mb-3",children:[(0,b.jsxs)("div",{className:"flex mb-4",children:[(0,b.jsxs)("div",{className:f()("shrink-0 flex-center w-10 h-10 rounded-full mr-2",(t={},(0,r.Z)(t,"bg-mb-orange","question"===(null===n||void 0===n?void 0:n.type)),(0,r.Z)(t,"bg-mb-gold","deposit"===(null===n||void 0===n?void 0:n.type)),(0,r.Z)(t,"bg-mb-green","home"===(null===n||void 0===n?void 0:n.type)),(0,r.Z)(t,"bg-mb-purple","invite"===(null===n||void 0===n?void 0:n.type)),t)),children:["question"===(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(c.JO.Task2,{className:"w-6 h-6 text-white"}),"deposit"===(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(c.JO.Coin,{className:"w-6 h-6 text-white"}),"home"===(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(c.JO.Order,{className:"w-6 h-6 text-white"}),"invite"===(null===n||void 0===n?void 0:n.type)&&(0,b.jsx)(c.JO.Invite,{className:"w-6 h-6 text-white"})]}),(0,b.jsxs)("div",{className:"grow",children:[(0,b.jsxs)("div",{className:"flex flex-wrap justify-between mb-1.5",children:[(0,b.jsx)("div",{className:"flex-1 mr-3 text-base font-500 break-all",children:null===n||void 0===n?void 0:n.title}),n&&(0,b.jsx)("div",{className:"shrink-0 text-base font-500 text-mb-red",children:"+".concat(d({amount:null===O||void 0===O?void 0:O.rewardAmount,currency:null===O||void 0===O?void 0:O.rewardSymbol}))})]}),(0,b.jsx)("div",{className:"text-sm leading-4 text-mb-gray-80",children:null===n||void 0===n?void 0:n.description})]})]}),(0,b.jsx)(c.Ex,{value:A,className:"mb-3.5",color:100===A?"!bg-mb-yellow":""}),(0,b.jsxs)("div",{className:"relative",children:[(0,b.jsx)(c.zx,{block:!0,color:100===A?"gradient":0===A?"blue":"green",onClick:J,loading:Z,disabled:"finished"===(null===O||void 0===O?void 0:O.status)||E,children:"finished"===(null===O||void 0===O?void 0:O.status)?s("Received"):s(100===A?"Receive":0===A?"Start task":"Go")}),(0,b.jsx)(x.Z,{data:w})]})]})}t.default=function(){var e=(0,d.a)(["query-task-list"],(function(){return u.dJ.post("/activity/task/mobile/list/",{appId:"mobile"},{silence:!0})})),t=e.data;return e.isLoading?(0,b.jsx)(c.gb,{className:"fix-center"}):(0,b.jsx)(c.SC,{children:(0,b.jsx)(c.pf,{className:"px-6 pt-4",children:t?t.map((function(e){return(0,b.jsx)(g,{task:e},e.id)})):(0,b.jsx)(s.T,{})})})}},44897:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(93433),i=n(4942),o=n(29439),a=n(37112),s=n(84090),l=n(46123),u=n.n(l),c=n(54778),d=n(85485),v=n(21150),f=n(77603),p=n(64251),m=n(99154);var h=function(e){return"string"==typeof e||!(0,p.Z)(e)&&(0,m.Z)(e)&&"[object String]"==(0,f.Z)(e)},x=n(7112),b=n(8699);var g=function(e,t){return(0,b.Z)(t,(function(t){return e[t]}))},y=n(17476);var w=function(e){return null==e?[]:g(e,(0,y.Z)(e))},Z=Math.max;var j=function(e,t,n,r){e=(0,v.Z)(e)?e:w(e),n=n&&!r?(0,x.Z)(n):0;var i=e.length;return n<0&&(n=Z(i+n,0)),h(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&(0,d.Z)(e,t,n)>-1},k=n(35210);var N=function(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1},C=n(91801),S=n(94948),q=Array.prototype.splice;var E=function(e,t,n,r){var i=r?N:d.Z,o=-1,a=t.length,s=e;for(e===t&&(t=(0,S.Z)(t)),n&&(s=(0,b.Z)(e,(0,C.Z)(n)));++o<a;)for(var l=0,u=t[o],c=n?n(u):u;(l=i(s,c,l,r))>-1;)s!==e&&q.call(s,l,1),q.call(e,l,1);return e};var M=function(e,t){return e&&e.length&&t&&t.length?E(e,t):e},O=(0,k.Z)(M),A=n(47313),J=n(75590),L=n(58467),R=n(46417);var T=function(){var e=(0,J.$G)().t,t=(0,A.useState)([]),n=(0,o.Z)(t,2),l=n[0],d=n[1],v=(0,A.useState)(0),f=(0,o.Z)(v,2),p=f[0],m=f[1],h=(0,L.s0)(),x=(0,A.useMemo)((function(){return[{title:e("Which of the following descriptions is correct?"),options:[e("Every deposit needs to create a new transaction order"),e("You can transfer directly to the last account"),e("Canceled orders cannot continue to pay")],answer:[0]},{title:e("What are the steps involved in a complete deposit?"),options:[e('Click the "Deposit" button'),e("Select the payment method and click to open the APP"),e("Paste account number and pay")],answer:[0,1,2]}]}),[e]),b=x[p],g=(0,A.useMemo)((function(){return p===x.length-1}),[x.length,p]),y=(0,A.useCallback)((function(){s.FN.open({content:e("You are right!"),duration:1500,onDestroy:function(){g?(a.Xb.set("has-completed-learn-deposit-questions",!0),window.dispatchEvent(new Event("storage")),h(-1)):(d([]),m((function(e){return e+1})))}})}),[g,h,e]),w=(0,A.useMemo)((function(){return(0,c.Z)(b.answer,l)}),[l,b]);return(0,R.jsxs)(s.pf,{className:"px-6",children:[(0,R.jsx)("div",{className:"mb-4 text-base font-600 uppercase text-center",children:b.title}),b.options.map((function(e,t){var n=j(l,t);return(0,R.jsx)("div",{className:u()("mb-3 px-6 py-3 rounded-md text-sm text-center font-400 bg-mb-gray-10",(0,i.Z)({},"outline outline-2 outline-mb-green !font-500",n)),onClick:function(){1===b.answer.length?d([t]):d((function(e){return n?(0,r.Z)(O(e,t)):e.concat(t).sort()}))},children:e},e)})),(0,R.jsx)(s.zx,{block:!0,className:"mt-8",onClick:y,disabled:!w,children:e("Next")})]})}},35210:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67755);var i=function(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)},o=Math.max;var a=function(e,t,n){return t=o(void 0===t?e.length-1:t,0),function(){for(var r=arguments,a=-1,s=o(r.length-t,0),l=Array(s);++a<s;)l[a]=r[t+a];a=-1;for(var u=Array(t+1);++a<t;)u[a]=r[a];return u[t]=n(l),i(e,this,u)}};var s=function(e){return function(){return e}},l=n(20815),u=l.Z?function(e,t){return(0,l.Z)(e,"toString",{configurable:!0,enumerable:!1,value:s(t),writable:!0})}:r.Z,c=Date.now;var d=function(e){var t=0,n=0;return function(){var r=c(),i=16-(r-n);if(n=r,i>0){if(++t>=800)return arguments[0]}else t=0;return e.apply(void 0,arguments)}},v=d(u);var f=function(e,t){return v(a(e,t,r.Z),e+"")}}}]);