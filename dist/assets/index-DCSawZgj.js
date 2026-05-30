var bS=Object.defineProperty;var AS=(r,e,i)=>e in r?bS(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i;var Qt=(r,e,i)=>AS(r,typeof e!="symbol"?e+"":e,i);import{r as O_,g as RS,a as wS}from"./react-CoqjRzmd.js";import{g as la,S as bs}from"./gsap-a3sj5zmn.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var $f={exports:{}},Do={};var E0;function CS(){if(E0)return Do;E0=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:u}}return Do.Fragment=e,Do.jsx=i,Do.jsxs=i,Do}var T0;function DS(){return T0||(T0=1,$f.exports=CS()),$f.exports}var rt=DS(),un=O_();const US=RS(un);var th={exports:{}},Uo={},eh={exports:{}},nh={};var b0;function LS(){return b0||(b0=1,(function(r){function e(O,K){var k=O.length;O.push(K);t:for(;0<k;){var _t=k-1>>>1,xt=O[_t];if(0<l(xt,K))O[_t]=K,O[k]=xt,k=_t;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var K=O[0],k=O.pop();if(k!==K){O[0]=k;t:for(var _t=0,xt=O.length,wt=xt>>>1;_t<wt;){var Mt=2*(_t+1)-1,Rt=O[Mt],jt=Mt+1,ne=O[jt];if(0>l(Rt,k))jt<xt&&0>l(ne,Rt)?(O[_t]=ne,O[jt]=k,_t=jt):(O[_t]=Rt,O[Mt]=k,_t=Mt);else if(jt<xt&&0>l(ne,k))O[_t]=ne,O[jt]=k,_t=jt;else break t}}return K}function l(O,K){var k=O.sortIndex-K.sortIndex;return k!==0?k:O.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,_=null,x=3,y=!1,E=!1,A=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var K=i(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=O)s(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function P(O){if(A=!1,w(O),!E)if(i(m)!==null)E=!0,z||(z=!0,Z());else{var K=i(p);K!==null&&st(P,K.startTime-O)}}var z=!1,F=-1,X=5,D=-1;function C(){return M?!0:!(r.unstable_now()-D<X)}function G(){if(M=!1,z){var O=r.unstable_now();D=O;var K=!0;try{t:{E=!1,A&&(A=!1,N(F),F=-1),y=!0;var k=x;try{e:{for(w(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var _t=_.callback;if(typeof _t=="function"){_.callback=null,x=_.priorityLevel;var xt=_t(_.expirationTime<=O);if(O=r.unstable_now(),typeof xt=="function"){_.callback=xt,w(O),K=!0;break e}_===i(m)&&s(m),w(O)}else s(m);_=i(m)}if(_!==null)K=!0;else{var wt=i(p);wt!==null&&st(P,wt.startTime-O),K=!1}}break t}finally{_=null,x=k,y=!1}K=void 0}}finally{K?Z():z=!1}}}var Z;if(typeof L=="function")Z=function(){L(G)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ot=at.port2;at.port1.onmessage=G,Z=function(){ot.postMessage(null)}}else Z=function(){g(G,0)};function st(O,K){F=g(function(){O(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var k=x;x=K;try{return O()}finally{x=k}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(O,K){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=x;x=O;try{return K()}finally{x=k}},r.unstable_scheduleCallback=function(O,K,k){var _t=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_t+k:_t):k=_t,O){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=k+xt,O={id:S++,callback:K,priorityLevel:O,startTime:k,expirationTime:xt,sortIndex:-1},k>_t?(O.sortIndex=k,e(p,O),i(m)===null&&O===i(p)&&(A?(N(F),F=-1):A=!0,st(P,k-_t))):(O.sortIndex=xt,e(m,O),E||y||(E=!0,z||(z=!0,Z()))),O},r.unstable_shouldYield=C,r.unstable_wrapCallback=function(O){var K=x;return function(){var k=x;x=K;try{return O.apply(this,arguments)}finally{x=k}}}})(nh)),nh}var A0;function NS(){return A0||(A0=1,eh.exports=LS()),eh.exports}var R0;function OS(){if(R0)return Uo;R0=1;var r=NS(),e=O_(),i=wS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===o)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=f;else{for(var v=!1,b=c.child;b;){if(b===a){v=!0,a=c,o=f;break}if(b===o){v=!0,o=c,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,o=c;break}if(b===o){v=!0,o=f,a=c;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var at=Symbol.for("react.client.reference");function ot(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===at?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case g:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case L:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ot(t.type)||"Memo";case X:n=t._payload,t=t._init;try{return ot(t(n))}catch{}}return null}var st=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_t=[],xt=-1;function wt(t){return{current:t}}function Mt(t){0>xt||(t.current=_t[xt],_t[xt]=null,xt--)}function Rt(t,n){xt++,_t[xt]=t.current,t.current=n}var jt=wt(null),ne=wt(null),ut=wt(null),dt=wt(null);function Nt(t,n){switch(Rt(ut,n),Rt(ne,t),Rt(jt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qg(n),t=Yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Mt(jt),Rt(jt,t)}function Zt(){Mt(jt),Mt(ne),Mt(ut)}function Vt(t){t.memoizedState!==null&&Rt(dt,t);var n=jt.current,a=Yg(n,t.type);n!==a&&(Rt(ne,t),Rt(jt,a))}function ce(t){ne.current===t&&(Mt(jt),Mt(ne)),dt.current===t&&(Mt(dt),Ao._currentValue=k)}var je,I;function Ee(t){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+t+I}var Jt=!1;function qt(t,n){if(!t||Jt)return"";Jt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(it){var tt=it}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(it){tt=it}t.call(pt.prototype)}}else{try{throw Error()}catch(it){tt=it}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(it){if(it&&tt&&typeof it.stack=="string")return[it.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var B=v.split(`
`),J=b.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===J.length)for(o=B.length-1,c=J.length-1;1<=o&&0<=c&&B[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==J[c]){var ct=`
`+B[o].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Jt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ee(a):""}function Pt(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return qt(t.type,!1);case 11:return qt(t.type.render,!1);case 1:return qt(t.type,!0);case 31:return Ee("Activity");default:return""}}function Ne(t){try{var n="",a=null;do n+=Pt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Gt=Object.prototype.hasOwnProperty,re=r.unstable_scheduleCallback,Qe=r.unstable_cancelCallback,Ze=r.unstable_shouldYield,U=r.unstable_requestPaint,T=r.unstable_now,$=r.unstable_getCurrentPriorityLevel,ft=r.unstable_ImmediatePriority,vt=r.unstable_UserBlockingPriority,lt=r.unstable_NormalPriority,Yt=r.unstable_LowPriority,Tt=r.unstable_IdlePriority,kt=r.log,Wt=r.unstable_setDisableYieldValue,yt=null,bt=null;function Kt(t){if(typeof kt=="function"&&Wt(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(yt,t)}catch{}}var Ot=Math.clz32?Math.clz32:V,Ct=Math.log,oe=Math.LN2;function V(t){return t>>>=0,t===0?32:31-(Ct(t)/oe|0)|0}var Et=256,At=262144,zt=4194304;function St(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function mt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?c=St(o):(v&=b,v!==0?c=St(v):a||(a=b&~t,a!==0&&(c=St(a))))):(b=o&~f,b!==0?c=St(b):v!==0?c=St(v):a||(a=o&~t,a!==0&&(c=St(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function se(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var t=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),t}function Te(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ni(t,n,a,o,c,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var b=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=v&~a;0<a;){var ct=31-Ot(a),pt=1<<ct;b[ct]=0,B[ct]=-1;var tt=J[ct];if(tt!==null)for(J[ct]=null,ct=0;ct<tt.length;ct++){var it=tt[ct];it!==null&&(it.lane&=-536870913)}a&=~pt}o!==0&&Fr(t,o,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Fr(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ot(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Mi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ot(a),c=1<<o;c&n|t[o]&n&&(t[o]|=n),a&=~c}}function Cs(t,n){var a=n&-n;return a=(a&42)!==0?1:Ds(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ds(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Us(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ya(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:g0(t.type))}function Hr(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var kn=Math.random().toString(36).slice(2),an="__reactFiber$"+kn,xn="__reactProps$"+kn,ua="__reactContainer$"+kn,Gr="__reactEvents$"+kn,qc="__reactListeners$"+kn,Yc="__reactHandles$"+kn,Qo="__reactResources$"+kn,ja="__reactMarker$"+kn;function R(t){delete t[an],delete t[xn],delete t[Gr],delete t[qc],delete t[Yc]}function W(t){var n=t[an];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ua]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=t0(t);t!==null;){if(a=t[an])return a;t=t0(t)}return n}t=a,a=t.parentNode}return null}function et(t){if(t=t[an]||t[ua]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function nt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Y(t){var n=t[Qo];return n||(n=t[Qo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gt(t){t[ja]=!0}var Dt=new Set,Ft={};function Lt(t,n){$t(t,n),$t(t+"Capture",n)}function $t(t,n){for(Ft[t]=n,t=0;t<n.length;t++)Dt.add(n[t])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},de={};function Ue(t){return Gt.call(de,t)?!0:Gt.call(te,t)?!1:ae.test(t)?de[t]=!0:(te[t]=!0,!1)}function Ve(t,n,a){if(Ue(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Le(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ht(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function be(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Sn(t){if(!t._valueTracker){var n=ke(t)?"checked":"value";t._valueTracker=be(t,n,""+t[n])}}function zi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ke(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Za=/[\n"\\]/g;function _e(t){return t.replace(Za,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Rn(t,n,a,o,c,f,v,b){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ht(n)):t.value!==""+Ht(n)&&(t.value=""+Ht(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?hn(t,v,Ht(n)):a!=null?hn(t,v,Ht(a)):o!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.name=""+Ht(b):t.removeAttribute("name")}function Un(t,n,a,o,c,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Sn(t);return}a=a!=null?""+Ht(a):"",n=n!=null?""+Ht(n):a,b||n===t.value||(t.value=n),t.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=b?t.checked:!!o,t.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Sn(t)}function hn(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function tn(t,n,a,o){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ht(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,o&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ls(t,n,a){if(n!=null&&(n=""+Ht(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ht(a):""}function Ei(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(st(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ht(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Sn(t)}function Ns(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xd(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Sv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function kd(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&Xd(t,c,o)}else for(var f in n)n.hasOwnProperty(f)&&Xd(t,f,n[f])}function jc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Jo(t){return Mv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Zc=null;function Kc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Os=null,zs=null;function Wd(t){var n=et(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Rn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var c=o[xn]||null;if(!c)throw Error(s(90));Rn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&zi(o)}break t;case"textarea":Ls(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(t,!!a.multiple,n,!1)}}}var Qc=!1;function qd(t,n,a){if(Qc)return t(n,a);Qc=!0;try{var o=t(n);return o}finally{if(Qc=!1,(Os!==null||zs!==null)&&(Fl(),Os&&(n=Os,t=zs,zs=Os=null,Wd(n),t)))for(n=0;n<t.length;n++)Wd(t[n])}}function Vr(t,n){var a=t.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Bi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Jc=!1}var fa=null,$c=null,$o=null;function Yd(){if($o)return $o;var t,n=$c,a=n.length,o,c="value"in fa?fa.value:fa.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var v=a-t;for(o=1;o<=v&&n[a-o]===c[f-o];o++);return $o=c.slice(t,1<o?1-o:void 0)}function tl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function jd(){return!1}function zn(t){function n(a,o,c,f,v){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(a=t[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?el:jd,this.isPropagationStopped=jd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=zn(Ka),kr=_({},Ka,{view:0,detail:0}),Ev=zn(kr),tu,eu,Wr,il=_({},kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(tu=t.screenX-Wr.screenX,eu=t.screenY-Wr.screenY):eu=tu=0,Wr=t),tu)},movementY:function(t){return"movementY"in t?t.movementY:eu}}),Zd=zn(il),Tv=_({},il,{dataTransfer:0}),bv=zn(Tv),Av=_({},kr,{relatedTarget:0}),nu=zn(Av),Rv=_({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),wv=zn(Rv),Cv=_({},Ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dv=zn(Cv),Uv=_({},Ka,{data:0}),Kd=zn(Uv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ov[t])?!!n[t]:!1}function iu(){return zv}var Pv=_({},kr,{key:function(t){if(t.key){var n=Lv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=tl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Nv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(t){return t.type==="keypress"?tl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Bv=zn(Pv),Iv=_({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=zn(Iv),Fv=_({},kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),Hv=zn(Fv),Gv=_({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vv=zn(Gv),Xv=_({},il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=zn(Xv),Wv=_({},Ka,{newState:0,oldState:0}),qv=zn(Wv),Yv=[9,13,27,32],au=Bi&&"CompositionEvent"in window,qr=null;Bi&&"documentMode"in document&&(qr=document.documentMode);var jv=Bi&&"TextEvent"in window&&!qr,Jd=Bi&&(!au||qr&&8<qr&&11>=qr),$d=" ",tp=!1;function ep(t,n){switch(t){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function Zv(t,n){switch(t){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return t=n.data,t===$d&&tp?null:t;default:return null}}function Kv(t,n){if(Ps)return t==="compositionend"||!au&&ep(t,n)?(t=Yd(),$o=$c=fa=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Qv[t.type]:n==="textarea"}function ap(t,n,a,o){Os?zs?zs.push(o):zs=[o]:Os=o,n=ql(n,"onChange"),0<n.length&&(a=new nl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Yr=null,jr=null;function Jv(t){Hg(t,0)}function al(t){var n=nt(t);if(zi(n))return t}function sp(t,n){if(t==="change")return n}var rp=!1;if(Bi){var su;if(Bi){var ru="oninput"in document;if(!ru){var op=document.createElement("div");op.setAttribute("oninput","return;"),ru=typeof op.oninput=="function"}su=ru}else su=!1;rp=su&&(!document.documentMode||9<document.documentMode)}function lp(){Yr&&(Yr.detachEvent("onpropertychange",cp),jr=Yr=null)}function cp(t){if(t.propertyName==="value"&&al(jr)){var n=[];ap(n,jr,t,Kc(t)),qd(Jv,n)}}function $v(t,n,a){t==="focusin"?(lp(),Yr=n,jr=a,Yr.attachEvent("onpropertychange",cp)):t==="focusout"&&lp()}function tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return al(jr)}function ex(t,n){if(t==="click")return al(n)}function nx(t,n){if(t==="input"||t==="change")return al(n)}function ix(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:ix;function Zr(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Gt.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,n){var a=up(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=up(a)}}function hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function ou(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ax=Bi&&"documentMode"in document&&11>=document.documentMode,Bs=null,lu=null,Kr=null,cu=!1;function pp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Bs==null||Bs!==gn(o)||(o=Bs,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Kr&&Zr(Kr,o)||(Kr=o,o=ql(lu,"onSelect"),0<o.length&&(n=new nl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Bs)))}function Qa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Is={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},uu={},mp={};Bi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Ja(t){if(uu[t])return uu[t];if(!Is[t])return t;var n=Is[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return uu[t]=n[a];return t}var gp=Ja("animationend"),_p=Ja("animationiteration"),vp=Ja("animationstart"),sx=Ja("transitionrun"),rx=Ja("transitionstart"),ox=Ja("transitioncancel"),xp=Ja("transitionend"),Sp=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function di(t,n){Sp.set(t,n),Lt(n,[t])}var sl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ii=[],Fs=0,hu=0;function rl(){for(var t=Fs,n=hu=Fs=0;n<t;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var c=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,o!==null&&c!==null){var v=o.pending;v===null?c.next=c:(c.next=v.next,v.next=c),o.pending=c}f!==0&&yp(a,c,f)}}function ol(t,n,a,o){ii[Fs++]=t,ii[Fs++]=n,ii[Fs++]=a,ii[Fs++]=o,hu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function du(t,n,a,o){return ol(t,n,a,o),ll(t)}function $a(t,n){return ol(t,null,null,n),ll(t)}function yp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Ot(a),t=f.hiddenUpdates,o=t[c],o===null?t[c]=[n]:o.push(n),n.lane=a|536870912),f):null}function ll(t){if(50<xo)throw xo=0,Ef=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Hs={};function lx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,o){return new lx(t,n,a,o)}function pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ii(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Mp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function cl(t,n,a,o,c,f){var v=0;if(o=t,typeof t=="function")pu(t)&&(v=1);else if(typeof t=="string")v=dS(t,a,jt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case D:return t=qn(31,a,n,c),t.elementType=D,t.lanes=f,t;case A:return ts(a.children,c,f,n);case M:v=8,c|=24;break;case g:return t=qn(12,a,n,c|2),t.elementType=g,t.lanes=f,t;case P:return t=qn(13,a,n,c),t.elementType=P,t.lanes=f,t;case z:return t=qn(19,a,n,c),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:v=10;break t;case N:v=9;break t;case w:v=11;break t;case F:v=14;break t;case X:v=16,o=null;break t}v=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=qn(v,a,n,c),n.elementType=t,n.type=o,n.lanes=f,n}function ts(t,n,a,o){return t=qn(7,t,o,n),t.lanes=a,t}function mu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function Ep(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function gu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tp=new WeakMap;function ai(t,n){if(typeof t=="object"&&t!==null){var a=Tp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ne(n)},Tp.set(t,n),n)}return{value:t,source:n,stack:Ne(n)}}var Gs=[],Vs=0,ul=null,Qr=0,si=[],ri=0,ha=null,Ti=1,bi="";function Fi(t,n){Gs[Vs++]=Qr,Gs[Vs++]=ul,ul=t,Qr=n}function bp(t,n,a){si[ri++]=Ti,si[ri++]=bi,si[ri++]=ha,ha=t;var o=Ti;t=bi;var c=32-Ot(o)-1;o&=~(1<<c),a+=1;var f=32-Ot(n)+c;if(30<f){var v=c-c%5;f=(o&(1<<v)-1).toString(32),o>>=v,c-=v,Ti=1<<32-Ot(n)+c|a<<c|o,bi=f+t}else Ti=1<<f|a<<c|o,bi=t}function _u(t){t.return!==null&&(Fi(t,1),bp(t,1,0))}function vu(t){for(;t===ul;)ul=Gs[--Vs],Gs[Vs]=null,Qr=Gs[--Vs],Gs[Vs]=null;for(;t===ha;)ha=si[--ri],si[ri]=null,bi=si[--ri],si[ri]=null,Ti=si[--ri],si[ri]=null}function Ap(t,n){si[ri++]=Ti,si[ri++]=bi,si[ri++]=ha,Ti=n.id,bi=n.overflow,ha=t}var yn=null,We=null,Se=!1,da=null,oi=!1,xu=Error(s(519));function pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jr(ai(n,t)),xu}function Rp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[an]=t,n[xn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<yo.length;a++)ge(yo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Un(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ei(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||kg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||pa(t,!0)}function wp(t){for(yn=t.return;yn;)switch(yn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:yn=yn.return}}function Xs(t){if(t!==yn)return!1;if(!Se)return wp(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||If(t.type,t.memoizedProps)),a=!a),a&&We&&pa(t),wp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=$g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=$g(t)}else n===27?(n=We,wa(t.type)?(t=Xf,Xf=null,We=t):We=n):We=yn?ci(t.stateNode.nextSibling):null;return!0}function es(){We=yn=null,Se=!1}function Su(){var t=da;return t!==null&&(Fn===null?Fn=t:Fn.push.apply(Fn,t),da=null),t}function Jr(t){da===null?da=[t]:da.push(t)}var yu=wt(null),ns=null,Hi=null;function ma(t,n,a){Rt(yu,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=yu.current,Mt(yu)}function Mu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Eu(t,n,a,o){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var v=c.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=c;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Mu(f.return,a,t),o||(v=null);break t}f=b.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Mu(v,a,t),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===t){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function ks(t,n,a,o){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=c.type;Wn(c.pendingProps.value,v.value)||(t!==null?t.push(b):t=[b])}}else if(c===dt.current){if(v=c.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Ao):t=[Ao])}c=c.return}t!==null&&Eu(n,t,a,o),n.flags|=262144}function fl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function is(t){ns=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return Cp(ns,t)}function hl(t,n){return ns===null&&is(t),Cp(t,n)}function Cp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(s(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ux=r.unstable_scheduleCallback,fx=r.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new cx,data:new Map,refCount:0}}function $r(t){t.refCount--,t.refCount===0&&ux(fx,function(){t.controller.abort()})}var to=null,bu=0,Ws=0,qs=null;function hx(t,n){if(to===null){var a=to=[];bu=0,Ws=Cf(),qs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bu++,n.then(Dp,Dp),n}function Dp(){if(--bu===0&&to!==null){qs!==null&&(qs.status="fulfilled");var t=to;to=null,Ws=0,qs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function dx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Up=O.S;O.S=function(t,n){pg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&hx(t,n),Up!==null&&Up(t,n)};var as=wt(null);function Au(){var t=as.current;return t!==null?t:Xe.pooledCache}function dl(t,n){n===null?Rt(as,as.current):Rt(as,n.pool)}function Lp(){var t=Au();return t===null?null:{parent:sn._currentValue,pool:t}}var Ys=Error(s(460)),Ru=Error(s(474)),pl=Error(s(542)),ml={then:function(){}};function Np(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Op(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=Xe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Pp(t),t}throw rs=n,Ys}}function ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,Ys):a}}var rs=null;function zp(){if(rs===null)throw Error(s(459));var t=rs;return rs=null,t}function Pp(t){if(t===Ys||t===pl)throw Error(s(483))}var js=null,eo=0;function gl(t){var n=eo;return eo+=1,js===null&&(js=[]),Op(js,t,n)}function no(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function _l(t,n){throw n.$$typeof===x?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bp(t){function n(q,H){if(t){var Q=q.deletions;Q===null?(q.deletions=[H],q.flags|=16):Q.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function o(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=Ii(q,H),q.index=0,q.sibling=null,q}function f(q,H,Q){return q.index=Q,t?(Q=q.alternate,Q!==null?(Q=Q.index,Q<H?(q.flags|=67108866,H):Q):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function v(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function b(q,H,Q,ht){return H===null||H.tag!==6?(H=mu(Q,q.mode,ht),H.return=q,H):(H=c(H,Q),H.return=q,H)}function B(q,H,Q,ht){var ee=Q.type;return ee===A?ct(q,H,Q.props.children,ht,Q.key):H!==null&&(H.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===X&&ss(ee)===H.type)?(H=c(H,Q.props),no(H,Q),H.return=q,H):(H=cl(Q.type,Q.key,Q.props,null,q.mode,ht),no(H,Q),H.return=q,H)}function J(q,H,Q,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=gu(Q,q.mode,ht),H.return=q,H):(H=c(H,Q.children||[]),H.return=q,H)}function ct(q,H,Q,ht,ee){return H===null||H.tag!==7?(H=ts(Q,q.mode,ht,ee),H.return=q,H):(H=c(H,Q),H.return=q,H)}function pt(q,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=mu(""+H,q.mode,Q),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case y:return Q=cl(H.type,H.key,H.props,null,q.mode,Q),no(Q,H),Q.return=q,Q;case E:return H=gu(H,q.mode,Q),H.return=q,H;case X:return H=ss(H),pt(q,H,Q)}if(st(H)||Z(H))return H=ts(H,q.mode,Q,null),H.return=q,H;if(typeof H.then=="function")return pt(q,gl(H),Q);if(H.$$typeof===L)return pt(q,hl(q,H),Q);_l(q,H)}return null}function tt(q,H,Q,ht){var ee=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ee!==null?null:b(q,H,""+Q,ht);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===ee?B(q,H,Q,ht):null;case E:return Q.key===ee?J(q,H,Q,ht):null;case X:return Q=ss(Q),tt(q,H,Q,ht)}if(st(Q)||Z(Q))return ee!==null?null:ct(q,H,Q,ht,null);if(typeof Q.then=="function")return tt(q,H,gl(Q),ht);if(Q.$$typeof===L)return tt(q,H,hl(q,Q),ht);_l(q,Q)}return null}function it(q,H,Q,ht,ee){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return q=q.get(Q)||null,b(H,q,""+ht,ee);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case y:return q=q.get(ht.key===null?Q:ht.key)||null,B(H,q,ht,ee);case E:return q=q.get(ht.key===null?Q:ht.key)||null,J(H,q,ht,ee);case X:return ht=ss(ht),it(q,H,Q,ht,ee)}if(st(ht)||Z(ht))return q=q.get(Q)||null,ct(H,q,ht,ee,null);if(typeof ht.then=="function")return it(q,H,Q,gl(ht),ee);if(ht.$$typeof===L)return it(q,H,Q,hl(H,ht),ee);_l(H,ht)}return null}function It(q,H,Q,ht){for(var ee=null,Re=null,Xt=H,ue=H=0,xe=null;Xt!==null&&ue<Q.length;ue++){Xt.index>ue?(xe=Xt,Xt=null):xe=Xt.sibling;var we=tt(q,Xt,Q[ue],ht);if(we===null){Xt===null&&(Xt=xe);break}t&&Xt&&we.alternate===null&&n(q,Xt),H=f(we,H,ue),Re===null?ee=we:Re.sibling=we,Re=we,Xt=xe}if(ue===Q.length)return a(q,Xt),Se&&Fi(q,ue),ee;if(Xt===null){for(;ue<Q.length;ue++)Xt=pt(q,Q[ue],ht),Xt!==null&&(H=f(Xt,H,ue),Re===null?ee=Xt:Re.sibling=Xt,Re=Xt);return Se&&Fi(q,ue),ee}for(Xt=o(Xt);ue<Q.length;ue++)xe=it(Xt,q,ue,Q[ue],ht),xe!==null&&(t&&xe.alternate!==null&&Xt.delete(xe.key===null?ue:xe.key),H=f(xe,H,ue),Re===null?ee=xe:Re.sibling=xe,Re=xe);return t&&Xt.forEach(function(Na){return n(q,Na)}),Se&&Fi(q,ue),ee}function ie(q,H,Q,ht){if(Q==null)throw Error(s(151));for(var ee=null,Re=null,Xt=H,ue=H=0,xe=null,we=Q.next();Xt!==null&&!we.done;ue++,we=Q.next()){Xt.index>ue?(xe=Xt,Xt=null):xe=Xt.sibling;var Na=tt(q,Xt,we.value,ht);if(Na===null){Xt===null&&(Xt=xe);break}t&&Xt&&Na.alternate===null&&n(q,Xt),H=f(Na,H,ue),Re===null?ee=Na:Re.sibling=Na,Re=Na,Xt=xe}if(we.done)return a(q,Xt),Se&&Fi(q,ue),ee;if(Xt===null){for(;!we.done;ue++,we=Q.next())we=pt(q,we.value,ht),we!==null&&(H=f(we,H,ue),Re===null?ee=we:Re.sibling=we,Re=we);return Se&&Fi(q,ue),ee}for(Xt=o(Xt);!we.done;ue++,we=Q.next())we=it(Xt,q,ue,we.value,ht),we!==null&&(t&&we.alternate!==null&&Xt.delete(we.key===null?ue:we.key),H=f(we,H,ue),Re===null?ee=we:Re.sibling=we,Re=we);return t&&Xt.forEach(function(TS){return n(q,TS)}),Se&&Fi(q,ue),ee}function Fe(q,H,Q,ht){if(typeof Q=="object"&&Q!==null&&Q.type===A&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:t:{for(var ee=Q.key;H!==null;){if(H.key===ee){if(ee=Q.type,ee===A){if(H.tag===7){a(q,H.sibling),ht=c(H,Q.props.children),ht.return=q,q=ht;break t}}else if(H.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===X&&ss(ee)===H.type){a(q,H.sibling),ht=c(H,Q.props),no(ht,Q),ht.return=q,q=ht;break t}a(q,H);break}else n(q,H);H=H.sibling}Q.type===A?(ht=ts(Q.props.children,q.mode,ht,Q.key),ht.return=q,q=ht):(ht=cl(Q.type,Q.key,Q.props,null,q.mode,ht),no(ht,Q),ht.return=q,q=ht)}return v(q);case E:t:{for(ee=Q.key;H!==null;){if(H.key===ee)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(q,H.sibling),ht=c(H,Q.children||[]),ht.return=q,q=ht;break t}else{a(q,H);break}else n(q,H);H=H.sibling}ht=gu(Q,q.mode,ht),ht.return=q,q=ht}return v(q);case X:return Q=ss(Q),Fe(q,H,Q,ht)}if(st(Q))return It(q,H,Q,ht);if(Z(Q)){if(ee=Z(Q),typeof ee!="function")throw Error(s(150));return Q=ee.call(Q),ie(q,H,Q,ht)}if(typeof Q.then=="function")return Fe(q,H,gl(Q),ht);if(Q.$$typeof===L)return Fe(q,H,hl(q,Q),ht);_l(q,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(q,H.sibling),ht=c(H,Q),ht.return=q,q=ht):(a(q,H),ht=mu(Q,q.mode,ht),ht.return=q,q=ht),v(q)):a(q,H)}return function(q,H,Q,ht){try{eo=0;var ee=Fe(q,H,Q,ht);return js=null,ee}catch(Xt){if(Xt===Ys||Xt===pl)throw Xt;var Re=qn(29,Xt,null,q.mode);return Re.lanes=ht,Re.return=q,Re}}}var os=Bp(!0),Ip=Bp(!1),ga=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Cu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function _a(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function va(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(De&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ll(t),yp(t,null,a),n}return ol(t,o,n,a),ll(t)}function io(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Mi(t,a)}}function Du(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Uu=!1;function ao(){if(Uu){var t=qs;if(t!==null)throw t}}function so(t,n,a,o){Uu=!1;var c=t.updateQueue;ga=!1;var f=c.firstBaseUpdate,v=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var B=b,J=B.next;B.next=null,v===null?f=J:v.next=J,v=B;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,b=ct.lastBaseUpdate,b!==v&&(b===null?ct.firstBaseUpdate=J:b.next=J,ct.lastBaseUpdate=B))}if(f!==null){var pt=c.baseState;v=0,ct=J=B=null,b=f;do{var tt=b.lane&-536870913,it=tt!==b.lane;if(it?(ve&tt)===tt:(o&tt)===tt){tt!==0&&tt===Ws&&(Uu=!0),ct!==null&&(ct=ct.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var It=t,ie=b;tt=n;var Fe=a;switch(ie.tag){case 1:if(It=ie.payload,typeof It=="function"){pt=It.call(Fe,pt,tt);break t}pt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=ie.payload,tt=typeof It=="function"?It.call(Fe,pt,tt):It,tt==null)break t;pt=_({},pt,tt);break t;case 2:ga=!0}}tt=b.callback,tt!==null&&(t.flags|=64,it&&(t.flags|=8192),it=c.callbacks,it===null?c.callbacks=[tt]:it.push(tt))}else it={lane:tt,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ct===null?(J=ct=it,B=pt):ct=ct.next=it,v|=tt;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;it=b,b=it.next,it.next=null,c.lastBaseUpdate=it,c.shared.pending=null}}while(!0);ct===null&&(B=pt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ct,f===null&&(c.shared.lanes=0),Ea|=v,t.lanes=v,t.memoizedState=pt}}function Fp(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Hp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fp(a[t],n)}var Zs=wt(null),vl=wt(0);function Gp(t,n){t=Ki,Rt(vl,t),Rt(Zs,n),Ki=t|n.baseLanes}function Lu(){Rt(vl,Ki),Rt(Zs,Zs.current)}function Nu(){Ki=vl.current,Mt(Zs),Mt(vl)}var Yn=wt(null),li=null;function xa(t){var n=t.alternate;Rt(en,en.current&1),Rt(Yn,t),li===null&&(n===null||Zs.current!==null||n.memoizedState!==null)&&(li=t)}function Ou(t){Rt(en,en.current),Rt(Yn,t),li===null&&(li=t)}function Vp(t){t.tag===22?(Rt(en,en.current),Rt(Yn,t),li===null&&(li=t)):Sa()}function Sa(){Rt(en,en.current),Rt(Yn,Yn.current)}function jn(t){Mt(Yn),li===t&&(li=null),Mt(en)}var en=wt(0);function xl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,le=null,Be=null,rn=null,Sl=!1,Ks=!1,ls=!1,yl=0,ro=0,Qs=null,px=0;function Je(){throw Error(s(321))}function zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function Pu(t,n,a,o,c,f){return Vi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?bm:Qu,ls=!1,f=a(o,c),ls=!1,Ks&&(f=kp(n,a,o,c)),Xp(t),f}function Xp(t){O.H=co;var n=Be!==null&&Be.next!==null;if(Vi=0,rn=Be=le=null,Sl=!1,ro=0,Qs=null,n)throw Error(s(300));t===null||on||(t=t.dependencies,t!==null&&fl(t)&&(on=!0))}function kp(t,n,a,o){le=t;var c=0;do{if(Ks&&(Qs=null),ro=0,Ks=!1,25<=c)throw Error(s(301));if(c+=1,rn=Be=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Am,f=n(a,o)}while(Ks);return f}function mx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?oo(n):n,t=t.useState()[0],(Be!==null?Be.memoizedState:null)!==t&&(le.flags|=1024),n}function Bu(){var t=yl!==0;return yl=0,t}function Iu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Fu(t){if(Sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Sl=!1}Vi=0,rn=Be=le=null,Ks=!1,ro=yl=0,Qs=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?le.memoizedState=rn=t:rn=rn.next=t,rn}function nn(){if(Be===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var n=rn===null?le.memoizedState:rn.next;if(n!==null)rn=n,Be=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?le.memoizedState=rn=t:rn=rn.next=t}return rn}function Ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(t){var n=ro;return ro+=1,Qs===null&&(Qs=[]),t=Op(Qs,t,n),n=le,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?bm:Qu),t}function El(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return oo(t);if(t.$$typeof===L)return Mn(t)}throw Error(s(438,String(t)))}function Hu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ml(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=C;return n.index++,a}function Xi(t,n){return typeof n=="function"?n(t):n}function Tl(t){var n=nn();return Gu(n,Be,t)}function Gu(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=t.baseQueue,f=o.pending;if(f!==null){if(c!==null){var v=c.next;c.next=f.next,f.next=v}n.baseQueue=c=f,o.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var b=v=null,B=null,J=n,ct=!1;do{var pt=J.lane&-536870913;if(pt!==J.lane?(ve&pt)===pt:(Vi&pt)===pt){var tt=J.revertLane;if(tt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),pt===Ws&&(ct=!0);else if((Vi&tt)===tt){J=J.next,tt===Ws&&(ct=!0);continue}else pt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(b=B=pt,v=f):B=B.next=pt,le.lanes|=tt,Ea|=tt;pt=J.action,ls&&a(f,pt),f=J.hasEagerState?J.eagerState:a(f,pt)}else tt={lane:pt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(b=B=tt,v=f):B=B.next=tt,le.lanes|=pt,Ea|=pt;J=J.next}while(J!==null&&J!==n);if(B===null?v=f:B.next=b,!Wn(f,t.memoizedState)&&(on=!0,ct&&(a=qs,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=B,o.lastRenderedState=f}return c===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Vu(t){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do f=t(f,v.action),v=v.next;while(v!==c);Wn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function Wp(t,n,a){var o=le,c=nn(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((Be||c).memoizedState,a);if(v&&(c.memoizedState=a,on=!0),c=c.queue,Wu(jp.bind(null,o,c,t),[t]),c.getSnapshot!==n||v||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,Js(9,{destroy:void 0},Yp.bind(null,o,c,a,n),null),Xe===null)throw Error(s(349));f||(Vi&127)!==0||qp(o,n,a)}return a}function qp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Ml(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yp(t,n,a,o){n.value=a,n.getSnapshot=o,Zp(n)&&Kp(t)}function jp(t,n,a){return a(function(){Zp(n)&&Kp(t)})}function Zp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Kp(t){var n=$a(t,2);n!==null&&Hn(n,t,2)}function Xu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ls){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},n}function Qp(t,n,a,o){return t.baseState=a,Gu(t,Be,typeof o=="function"?o:Xi)}function gx(t,n,a,o,c){if(Rl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,Jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jp(t,n){var a=n.action,o=n.payload,c=t.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var b=a(c,o),B=O.S;B!==null&&B(v,b),$p(t,n,b)}catch(J){ku(t,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(c,o),$p(t,n,f)}catch(J){ku(t,n,J)}}function $p(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tm(t,n,o)},function(o){return ku(t,n,o)}):tm(t,n,a)}function tm(t,n,a){n.status="fulfilled",n.value=a,em(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jp(t,a)))}function ku(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,em(n),n=n.next;while(n!==o)}t.action=null}function em(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function nm(t,n){return n}function im(t,n){if(Se){var a=Xe.formState;if(a!==null){t:{var o=le;if(Se){if(We){e:{for(var c=We,f=oi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){We=ci(c.nextSibling),o=c.data==="F!";break t}}pa(o)}o=!1}o&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:n},a.queue=o,a=Mm.bind(null,le,o),o.dispatch=a,o=Xu(!1),f=Ku.bind(null,le,!1,o.queue),o=Ln(),c={state:n,dispatch:null,action:t,pending:null},o.queue=c,a=gx.bind(null,le,c,f,a),c.dispatch=a,o.memoizedState=t,[n,a,!1]}function am(t){var n=nn();return sm(n,Be,t)}function sm(t,n,a){if(n=Gu(t,n,nm)[0],t=Tl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=oo(n)}catch(v){throw v===Ys?pl:v}else o=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Js(9,{destroy:void 0},_x.bind(null,c,a),null)),[o,f,t]}function _x(t,n){t.action=n}function rm(t){var n=nn(),a=Be;if(a!==null)return sm(n,a,t);nn(),n=n.memoizedState,a=nn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function Js(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=Ml(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function om(){return nn().memoizedState}function bl(t,n,a,o){var c=Ln();le.flags|=t,c.memoizedState=Js(1|n,{destroy:void 0},a,o===void 0?null:o)}function Al(t,n,a,o){var c=nn();o=o===void 0?null:o;var f=c.memoizedState.inst;Be!==null&&o!==null&&zu(o,Be.memoizedState.deps)?c.memoizedState=Js(n,f,a,o):(le.flags|=t,c.memoizedState=Js(1|n,f,a,o))}function lm(t,n){bl(8390656,8,t,n)}function Wu(t,n){Al(2048,8,t,n)}function vx(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Ml(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function cm(t){var n=nn().memoizedState;return vx({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function um(t,n){return Al(4,2,t,n)}function fm(t,n){return Al(4,4,t,n)}function hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dm(t,n,a){a=a!=null?a.concat([t]):null,Al(4,4,hm.bind(null,n,t),a)}function qu(){}function pm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&zu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function mm(t,n){var a=nn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&zu(n,o[1]))return o[0];if(o=t(),ls){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[o,n],o}function Yu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(ve&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=gg(),le.lanes|=t,Ea|=t,a)}function gm(t,n,a,o){return Wn(a,n)?a:Zs.current!==null?(t=Yu(t,a,o),Wn(t,n)||(on=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(ve&261930)===0?(on=!0,t.memoizedState=a):(t=gg(),le.lanes|=t,Ea|=t,n)}function _m(t,n,a,o,c){var f=K.p;K.p=f!==0&&8>f?f:8;var v=O.T,b={};O.T=b,Ku(t,!1,n,a);try{var B=c(),J=O.S;if(J!==null&&J(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ct=dx(B,o);lo(t,n,ct,Qn(t))}else lo(t,n,o,Qn(t))}catch(pt){lo(t,n,{then:function(){},status:"rejected",reason:pt},Qn())}finally{K.p=f,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function xx(){}function ju(t,n,a,o){if(t.tag!==5)throw Error(s(476));var c=vm(t).queue;_m(t,c,n,k,a===null?xx:function(){return xm(t),a(o)})}function vm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function xm(t){var n=vm(t);n.next===null&&(n=t.alternate.memoizedState),lo(t,n.next.queue,{},Qn())}function Zu(){return Mn(Ao)}function Sm(){return nn().memoizedState}function ym(){return nn().memoizedState}function Sx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=_a(a);var o=va(n,t,a);o!==null&&(Hn(o,n,a),io(o,n,a)),n={cache:Tu()},t.payload=n;return}n=n.return}}function yx(t,n,a){var o=Qn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Rl(t)?Em(n,a):(a=du(t,n,a,o),a!==null&&(Hn(a,t,o),Tm(a,n,o)))}function Mm(t,n,a){var o=Qn();lo(t,n,a,o)}function lo(t,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Rl(t))Em(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,v))return ol(t,n,c,0),Xe===null&&rl(),!1}catch{}if(a=du(t,n,c,o),a!==null)return Hn(a,t,o),Tm(a,n,o),!0}return!1}function Ku(t,n,a,o){if(o={lane:2,revertLane:Cf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Rl(t)){if(n)throw Error(s(479))}else n=du(t,a,o,2),n!==null&&Hn(n,t,2)}function Rl(t){var n=t.alternate;return t===le||n!==null&&n===le}function Em(t,n){Ks=Sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Mi(t,a)}}var co={readContext:Mn,use:El,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};co.useEffectEvent=Je;var bm={readContext:Mn,use:El,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:lm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,bl(4194308,4,hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return bl(4194308,4,t,n)},useInsertionEffect:function(t,n){bl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var o=t();if(ls){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Ln();if(a!==void 0){var c=a(n);if(ls){Kt(!0);try{a(n)}finally{Kt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},o.queue=t,t=t.dispatch=yx.bind(null,le,t),[o.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Xu(t);var n=t.queue,a=Mm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(t,n){var a=Ln();return Yu(a,t,n)},useTransition:function(){var t=Xu(!1);return t=_m.bind(null,le,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=le,c=Ln();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ve&127)!==0||qp(o,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,lm(jp.bind(null,o,f,t),[t]),o.flags|=2048,Js(9,{destroy:void 0},Yp.bind(null,o,f,a,n),null),a},useId:function(){var t=Ln(),n=Xe.identifierPrefix;if(Se){var a=bi,o=Ti;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=px++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Zu,useFormState:im,useActionState:im,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Hu,useCacheRefresh:function(){return Ln().memoizedState=Sx.bind(null,le)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:Mn,use:El,useCallback:pm,useContext:Mn,useEffect:Wu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Tl,useRef:om,useState:function(){return Tl(Xi)},useDebugValue:qu,useDeferredValue:function(t,n){var a=nn();return gm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Tl(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Zu,useFormState:am,useActionState:am,useOptimistic:function(t,n){var a=nn();return Qp(a,Be,t,n)},useMemoCache:Hu,useCacheRefresh:ym};Qu.useEffectEvent=cm;var Am={readContext:Mn,use:El,useCallback:pm,useContext:Mn,useEffect:Wu,useImperativeHandle:dm,useInsertionEffect:um,useLayoutEffect:fm,useMemo:mm,useReducer:Vu,useRef:om,useState:function(){return Vu(Xi)},useDebugValue:qu,useDeferredValue:function(t,n){var a=nn();return Be===null?Yu(a,t,n):gm(a,Be.memoizedState,t,n)},useTransition:function(){var t=Vu(Xi)[0],n=nn().memoizedState;return[typeof t=="boolean"?t:oo(t),n]},useSyncExternalStore:Wp,useId:Sm,useHostTransitionStatus:Zu,useFormState:rm,useActionState:rm,useOptimistic:function(t,n){var a=nn();return Be!==null?Qp(a,Be,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:ym};Am.useEffectEvent=cm;function Ju(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var $u={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=_a(o);c.payload=n,a!=null&&(c.callback=a),n=va(t,c,o),n!==null&&(Hn(n,t,o),io(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Qn(),c=_a(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=va(t,c,o),n!==null&&(Hn(n,t,o),io(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),o=_a(a);o.tag=2,n!=null&&(o.callback=n),n=va(t,o,a),n!==null&&(Hn(n,t,a),io(n,t,a))}};function Rm(t,n,a,o,c,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Zr(a,o)||!Zr(c,f):!0}function wm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&$u.enqueueReplaceState(n,n.state,null)}function cs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function Cm(t){sl(t)}function Dm(t){console.error(t)}function Um(t){sl(t)}function wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Lm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function tf(t,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){wl(t,n)},a}function Nm(t){return t=_a(t),t.tag=3,t}function Om(t,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=o.value;t.payload=function(){return c(f)},t.callback=function(){Lm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Lm(n,a,o),typeof c!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function Mx(t,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Hl():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(t,o,c)),!1;case 22:return a.flags|=65536,o===ml?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(t,o,c)),!1}throw Error(s(435,a.tag))}return Af(t,o,c),Hl(),!1}if(Se)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==xu&&(t=Error(s(422),{cause:o}),Jr(ai(t,a)))):(o!==xu&&(n=Error(s(423),{cause:o}),Jr(ai(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,o=ai(o,a),c=tf(t.stateNode,o,c),Du(t,c),$e!==4&&($e=2)),!1;var f=Error(s(520),{cause:o});if(f=ai(f,a),vo===null?vo=[f]:vo.push(f),$e!==4&&($e=2),n===null)return!0;o=ai(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=tf(a.stateNode,o,t),Du(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Nm(c),Om(c,t,a,o),Du(a,c),!1}a=a.return}while(a!==null);return!1}var ef=Error(s(461)),on=!1;function En(t,n,a,o){n.child=t===null?Ip(n,null,a,o):os(n,t.child,a,o)}function zm(t,n,a,o,c){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var b in o)b!=="ref"&&(v[b]=o[b])}else v=o;return is(n),o=Pu(t,n,a,v,f,c),b=Bu(),t!==null&&!on?(Iu(t,n,c),ki(t,n,c)):(Se&&b&&_u(n),n.flags|=1,En(t,n,o,c),n.child)}function Pm(t,n,a,o,c){if(t===null){var f=a.type;return typeof f=="function"&&!pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bm(t,n,f,o,c)):(t=cl(a.type,null,o,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!uf(t,c)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Zr,a(v,o)&&t.ref===n.ref)return ki(t,n,c)}return n.flags|=1,t=Ii(f,o),t.ref=n.ref,t.return=n,n.child=t}function Bm(t,n,a,o,c){if(t!==null){var f=t.memoizedProps;if(Zr(f,o)&&t.ref===n.ref)if(on=!1,n.pendingProps=o=f,uf(t,c))(t.flags&131072)!==0&&(on=!0);else return n.lanes=t.lanes,ki(t,n,c)}return nf(t,n,a,o,c)}function Im(t,n,a,o){var c=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~f}else o=0,n.child=null;return Fm(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&dl(n,f!==null?f.cachePool:null),f!==null?Gp(n,f):Lu(),Vp(n);else return o=n.lanes=536870912,Fm(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(dl(n,f.cachePool),Gp(n,f),Sa(),n.memoizedState=null):(t!==null&&dl(n,null),Lu(),Sa());return En(t,n,c,a),n.child}function uo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fm(t,n,a,o,c){var f=Au();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&dl(n,null),Lu(),Vp(n),t!==null&&ks(t,n,o,!0),n.childLanes=c,null}function Cl(t,n){return n=Ul({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hm(t,n,a){return os(n,t.child,null,a),t=Cl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function Ex(t,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(o.mode==="hidden")return t=Cl(n,o),n.lanes=536870912,uo(null,t);if(Ou(n),(t=We)?(t=Jg(t,oi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,yn=n,We=null)):t=null,t===null)throw pa(n);return n.lanes=536870912,null}return Cl(n,o)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Ou(n),c)if(n.flags&256)n.flags&=-257,n=Hm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||ks(t,n,a,!1),c=(a&t.childLanes)!==0,on||c){if(o=Xe,o!==null&&(v=Cs(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,$a(t,v),Hn(o,t,v),ef;Hl(),n=Hm(t,n,a)}else t=f.treeContext,We=ci(v.nextSibling),yn=n,Se=!0,da=null,oi=!1,t!==null&&Ap(n,t),n=Cl(n,o),n.flags|=4096;return n}return t=Ii(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function nf(t,n,a,o,c){return is(n),a=Pu(t,n,a,o,void 0,c),o=Bu(),t!==null&&!on?(Iu(t,n,c),ki(t,n,c)):(Se&&o&&_u(n),n.flags|=1,En(t,n,a,c),n.child)}function Gm(t,n,a,o,c,f){return is(n),n.updateQueue=null,a=kp(n,o,a,c),Xp(t),o=Bu(),t!==null&&!on?(Iu(t,n,f),ki(t,n,f)):(Se&&o&&_u(n),n.flags|=1,En(t,n,a,f),n.child)}function Vm(t,n,a,o,c){if(is(n),n.stateNode===null){var f=Hs,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=$u,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):Hs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Ju(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&$u.enqueueReplaceState(f,f.state,null),so(n,o,f,c),ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var b=n.memoizedProps,B=cs(a,b);f.props=B;var J=f.context,ct=a.contextType;v=Hs,typeof ct=="object"&&ct!==null&&(v=Mn(ct));var pt=a.getDerivedStateFromProps;ct=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||J!==v)&&wm(n,f,o,v),ga=!1;var tt=n.memoizedState;f.state=tt,so(n,o,f,c),ao(),J=n.memoizedState,b||tt!==J||ga?(typeof pt=="function"&&(Ju(n,a,pt,o),J=n.memoizedState),(B=ga||Rm(n,a,B,o,tt,J,v))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),f.props=o,f.state=J,f.context=v,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Cu(t,n),v=n.memoizedProps,ct=cs(a,v),f.props=ct,pt=n.pendingProps,tt=f.context,J=a.contextType,B=Hs,typeof J=="object"&&J!==null&&(B=Mn(J)),b=a.getDerivedStateFromProps,(J=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==pt||tt!==B)&&wm(n,f,o,B),ga=!1,tt=n.memoizedState,f.state=tt,so(n,o,f,c),ao();var it=n.memoizedState;v!==pt||tt!==it||ga||t!==null&&t.dependencies!==null&&fl(t.dependencies)?(typeof b=="function"&&(Ju(n,a,b,o),it=n.memoizedState),(ct=ga||Rm(n,a,ct,o,tt,it,B)||t!==null&&t.dependencies!==null&&fl(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,it,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,it,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=it),f.props=o,f.state=it,f.context=B,o=ct):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,Dl(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=os(n,t.child,null,c),n.child=os(n,null,a,c)):En(t,n,a,c),n.memoizedState=f.state,t=n.child):t=ki(t,n,c),t}function Xm(t,n,a,o){return es(),n.flags|=256,En(t,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(t){return{baseLanes:t,cachePool:Lp()}}function rf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function km(t,n,a){var o=n.pendingProps,c=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(en.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?xa(n):Sa(),(t=We)?(t=Jg(t,oi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ha!==null?{id:Ti,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(t),a.return=n,n.child=a,yn=n,We=null)):t=null,t===null)throw pa(n);return Vf(t)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,c?(Sa(),c=n.mode,b=Ul({mode:"hidden",children:b},c),o=ts(o,c,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=sf(a),o.childLanes=rf(t,v,a),n.memoizedState=af,uo(null,o)):(xa(n),of(n,b))}var B=t.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=lf(t,n,a)):n.memoizedState!==null?(Sa(),n.child=t.child,n.flags|=128,n=null):(Sa(),b=o.fallback,c=n.mode,o=Ul({mode:"visible",children:o.children},c),b=ts(b,c,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,os(n,t.child,null,a),o=n.child,o.memoizedState=sf(a),o.childLanes=rf(t,v,a),n.memoizedState=af,n=uo(null,o));else if(xa(n),Vf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var J=v.dgst;v=J,o=Error(s(419)),o.stack="",o.digest=v,Jr({value:o,source:null,stack:null}),n=lf(t,n,a)}else if(on||ks(t,n,a,!1),v=(a&t.childLanes)!==0,on||v){if(v=Xe,v!==null&&(o=Cs(v,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,$a(t,o),Hn(v,t,o),ef;Gf(b)||Hl(),n=lf(t,n,a)}else Gf(b)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,We=ci(b.nextSibling),yn=n,Se=!0,da=null,oi=!1,t!==null&&Ap(n,t),n=of(n,o.children),n.flags|=4096);return n}return c?(Sa(),b=o.fallback,c=n.mode,B=t.child,J=B.sibling,o=Ii(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,J!==null?b=Ii(J,b):(b=ts(b,c,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,uo(null,o),o=n.child,b=t.child.memoizedState,b===null?b=sf(a):(c=b.cachePool,c!==null?(B=sn._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Lp(),b={baseLanes:b.baseLanes|a,cachePool:c}),o.memoizedState=b,o.childLanes=rf(t,v,a),n.memoizedState=af,uo(t.child,o)):(xa(n),a=t.child,t=a.sibling,a=Ii(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function of(t,n){return n=Ul({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ul(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function lf(t,n,a){return os(n,t.child,null,a),t=of(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Mu(t.return,n,a)}function cf(t,n,a,o,c,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=c,v.treeForkCount=f)}function qm(t,n,a){var o=n.pendingProps,c=o.revealOrder,f=o.tail;o=o.children;var v=en.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,Rt(en,v),En(t,n,o,a),o=Se?Qr:0,!b&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wm(t,a,n);else if(t.tag===19)Wm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&xl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),cf(n,!1,c,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&xl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}cf(n,!0,a,null,f,o);break;case"together":cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ki(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ii(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ii(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&fl(t)))}function Tx(t,n,a){switch(n.tag){case 3:Nt(n,n.stateNode.containerInfo),ma(n,sn,t.memoizedState.cache),es();break;case 27:case 5:Vt(n);break;case 4:Nt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?km(t,n,a):(xa(n),t=ki(t,n,a),t!==null?t.sibling:null);xa(n);break;case 19:var c=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ks(t,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return qm(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Rt(en,en.current),o)break;return null;case 22:return n.lanes=0,Im(t,n,a,n.pendingProps);case 24:ma(n,sn,t.memoizedState.cache)}return ki(t,n,a)}function Ym(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)on=!0;else{if(!uf(t,a)&&(n.flags&128)===0)return on=!1,Tx(t,n,a);on=(t.flags&131072)!==0}else on=!1,Se&&(n.flags&1048576)!==0&&bp(n,Qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(t=ss(n.elementType),n.type=t,typeof t=="function")pu(t)?(o=cs(t,o),n.tag=1,n=Vm(null,n,t,o,a)):(n.tag=0,n=nf(null,n,t,o,a));else{if(t!=null){var c=t.$$typeof;if(c===w){n.tag=11,n=zm(null,n,t,o,a);break t}else if(c===F){n.tag=14,n=Pm(null,n,t,o,a);break t}}throw n=ot(t)||t,Error(s(306,n,""))}}return n;case 0:return nf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=cs(o,n.pendingProps),Vm(t,n,o,c,a);case 3:t:{if(Nt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;c=f.element,Cu(t,n),so(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ma(n,sn,o),o!==f.cache&&Eu(n,[sn],a,!0),ao(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xm(t,n,o,a);break t}else if(o!==c){c=ai(Error(s(424)),n),Jr(c),n=Xm(t,n,o,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,We=ci(t.firstChild),yn=n,Se=!0,da=null,oi=!0,a=Ip(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(es(),o===c){n=ki(t,n,a);break t}En(t,n,o,a)}n=n.child}return n;case 26:return Dl(t,n),t===null?(a=a0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,o=Yl(ut.current).createElement(a),o[an]=n,o[xn]=t,Tn(o,a,t),gt(o),n.stateNode=o):n.memoizedState=a0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Vt(n),t===null&&Se&&(o=n.stateNode=e0(n.type,n.pendingProps,ut.current),yn=n,oi=!0,c=We,wa(n.type)?(Xf=c,We=ci(o.firstChild)):We=c),En(t,n,n.pendingProps.children,a),Dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=o=We)&&(o=tS(o,n.type,n.pendingProps,oi),o!==null?(n.stateNode=o,yn=n,We=ci(o.firstChild),oi=!1,c=!0):c=!1),c||pa(n)),Vt(n),c=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,o=f.children,If(c,f)?o=null:v!==null&&If(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Pu(t,n,mx,null,null,a),Ao._currentValue=c),Dl(t,n),En(t,n,o,a),n.child;case 6:return t===null&&Se&&((t=a=We)&&(a=eS(a,n.pendingProps,oi),a!==null?(n.stateNode=a,yn=n,We=null,t=!0):t=!1),t||pa(n)),null;case 13:return km(t,n,a);case 4:return Nt(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=os(n,null,o,a):En(t,n,o,a),n.child;case 11:return zm(t,n,n.type,n.pendingProps,a);case 7:return En(t,n,n.pendingProps,a),n.child;case 8:return En(t,n,n.pendingProps.children,a),n.child;case 12:return En(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ma(n,n.type,o.value),En(t,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,is(n),c=Mn(c),o=o(c),n.flags|=1,En(t,n,o,a),n.child;case 14:return Pm(t,n,n.type,n.pendingProps,a);case 15:return Bm(t,n,n.type,n.pendingProps,a);case 19:return qm(t,n,a);case 31:return Ex(t,n,a);case 22:return Im(t,n,a,n.pendingProps);case 24:return is(n),o=Mn(sn),t===null?(c=Au(),c===null&&(c=Xe,f=Tu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:o,cache:c},wu(n),ma(n,sn,c)):((t.lanes&a)!==0&&(Cu(t,n),so(n,null,null,a),ao()),c=t.memoizedState,f=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ma(n,sn,o)):(o=f.cache,ma(n,sn,o),o!==c.cache&&Eu(n,[sn],a,!0))),En(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Wi(t){t.flags|=4}function ff(t,n,a,o,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Sg())t.flags|=8192;else throw rs=ml,Ru}else t.flags&=-16777217}function jm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!c0(n))if(Sg())t.flags|=8192;else throw rs=ml,Ru}function Ll(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Oe():536870912,t.lanes|=n,nr|=n)}function fo(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function qe(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function bx(t,n,a){var o=n.pendingProps;switch(vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(sn),Zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Xs(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Su())),qe(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(qe(n),jm(n,f)):(qe(n),ff(n,c,null,o,a))):f?f!==t.memoizedState?(Wi(n),qe(n),jm(n,f)):(qe(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Wi(n),qe(n),ff(n,c,t,o,a)),null;case 27:if(ce(n),a=ut.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}t=jt.current,Xs(n)?Rp(n):(t=e0(c,o,a),n.stateNode=t,Wi(n))}return qe(n),null;case 5:if(ce(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=jt.current,Xs(n))Rp(n);else{var v=Yl(ut.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(c,{is:o.is}):v.createElement(c)}}f[an]=n,f[xn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Wi(n)}}return qe(n),ff(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ut.current,Xs(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,c=yn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}t[an]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||kg(t.nodeValue,a)),t||pa(n,!0)}else t=Yl(t).createTextNode(o),t[an]=n,n.stateNode=t}return qe(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Xs(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[an]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),t=!1}else a=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Xs(n),o!==null&&o.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[an]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==c&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ll(n,n.updateQueue),qe(n),null);case 4:return Zt(),t===null&&Nf(n.stateNode.containerInfo),qe(n),null;case 10:return Gi(n.type),qe(n),null;case 19:if(Mt(en),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,f=o.rendering,f===null)if(c)fo(o,!1);else{if($e!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=xl(t),f!==null){for(n.flags|=128,fo(o,!1),t=f.updateQueue,n.updateQueue=t,Ll(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Mp(a,t),a=a.sibling;return Rt(en,en.current&1|2),Se&&Fi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&T()>Bl&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304)}else{if(!c)if(t=xl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ll(n,t),fo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Se)return qe(n),null}else 2*T()-o.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,c=!0,fo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=T(),t.sibling=null,a=en.current,Rt(en,c?a&1|2:a&1),Se&&Fi(n,o.treeForkCount),t):(qe(n),null);case 22:case 23:return jn(n),Nu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Ll(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Mt(as),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ax(t,n){switch(vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),Zt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Mt(en),null;case 4:return Zt(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),Nu(),t!==null&&Mt(as),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function Zm(t,n){switch(vu(n),n.tag){case 3:Gi(sn),Zt();break;case 26:case 27:case 5:ce(n);break;case 4:Zt();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:Mt(en);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),Nu(),t!==null&&Mt(as);break;case 24:Gi(sn)}}function ho(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&t)===t){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==c)}}catch(b){Pe(n,n.return,b)}}function ya(t,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&t)===t){var v=o.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,c=n;var B=a,J=b;try{J()}catch(ct){Pe(c,B,ct)}}}o=o.next}while(o!==f)}}catch(ct){Pe(n,n.return,ct)}}function Km(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hp(n,a)}catch(o){Pe(t,t.return,o)}}}function Qm(t,n,a){a.props=cs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Pe(t,n,o)}}function po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(c){Pe(t,n,c)}}function Ai(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function Jm(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function hf(t,n,a){try{var o=t.stateNode;jx(o,t.type,a,n),o[xn]=n}catch(c){Pe(t,t.return,c)}}function $m(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&wa(t.type)||t.tag===4}function df(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$m(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(o!==4&&(o===27&&wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(pf(t,n,a),t=t.sibling;t!==null;)pf(t,n,a),t=t.sibling}function Nl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Nl(t,n,a),t=t.sibling;t!==null;)Nl(t,n,a),t=t.sibling}function tg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Tn(n,o,a),n[an]=t,n[xn]=a}catch(f){Pe(t,t.return,f)}}var qi=!1,ln=!1,mf=!1,eg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function Rx(t,n){if(t=t.containerInfo,Pf=tc,t=dp(t),ou(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,B=-1,J=0,ct=0,pt=t,tt=null;e:for(;;){for(var it;pt!==a||c!==0&&pt.nodeType!==3||(b=v+c),pt!==f||o!==0&&pt.nodeType!==3||(B=v+o),pt.nodeType===3&&(v+=pt.nodeValue.length),(it=pt.firstChild)!==null;)tt=pt,pt=it;for(;;){if(pt===t)break e;if(tt===a&&++J===c&&(b=v),tt===f&&++ct===o&&(B=v),(it=pt.nextSibling)!==null)break;pt=tt,tt=pt.parentNode}pt=it}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:t,selectionRange:a},tc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var It=cs(a.type,c);t=o.getSnapshotBeforeUpdate(It,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(ie){Pe(a,a.return,ie)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function ng(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),o&4&&ho(5,a);break;case 1:if(ji(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Pe(a,a.return,v)}else{var c=cs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Pe(a,a.return,v)}}o&64&&Km(a),o&512&&po(a,a.return);break;case 3:if(ji(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hp(t,n)}catch(v){Pe(a,a.return,v)}}break;case 27:n===null&&o&4&&tg(a);case 26:case 5:ji(t,a),n===null&&o&4&&Jm(a),o&512&&po(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),o&4&&sg(t,a);break;case 13:ji(t,a),o&4&&rg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Px.bind(null,a),nS(t,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||ln,c=qi;var f=ln;qi=o,(ln=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=c,ln=f}break;case 30:break;default:ji(t,a)}}function ig(t){var n=t.alternate;n!==null&&(t.alternate=null,ig(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&R(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ye=null,Pn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)ag(t,n,a),a=a.sibling}function ag(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:ln||Ai(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||Ai(a,n);var o=Ye,c=Pn;wa(a.type)&&(Ye=a.stateNode,Pn=!1),Yi(t,n,a),Eo(a.stateNode),Ye=o,Pn=c;break;case 5:ln||Ai(a,n);case 6:if(o=Ye,c=Pn,Ye=null,Yi(t,n,a),Ye=o,Pn=c,Ye!==null)if(Pn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ye.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ye!==null&&(Pn?(t=Ye,Kg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ur(t)):Kg(Ye,a.stateNode));break;case 4:o=Ye,c=Pn,Ye=a.stateNode.containerInfo,Pn=!0,Yi(t,n,a),Ye=o,Pn=c;break;case 0:case 11:case 14:case 15:ya(2,a,n),ln||ya(4,a,n),Yi(t,n,a);break;case 1:ln||(Ai(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Qm(a,n,o)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:ln=(o=ln)||a.memoizedState!==null,Yi(t,n,a),ln=o;break;default:Yi(t,n,a)}}function sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ur(t)}catch(a){Pe(n,n.return,a)}}}function rg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ur(t)}catch(a){Pe(n,n.return,a)}}function wx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new eg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new eg),n;default:throw Error(s(435,t.tag))}}function Ol(t,n){var a=wx(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=Bx.bind(null,t,o);o.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],f=t,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){Ye=b.stateNode,Pn=!1;break t}break;case 5:Ye=b.stateNode,Pn=!1;break t;case 3:case 4:Ye=b.stateNode.containerInfo,Pn=!0;break t}b=b.return}if(Ye===null)throw Error(s(160));ag(f,v,c),Ye=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)og(n,t),n=n.sibling}var pi=null;function og(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),In(t),o&4&&(ya(3,t,t.return),ho(3,t),ya(5,t,t.return));break;case 1:Bn(n,t),In(t),o&512&&(ln||a===null||Ai(a,a.return)),o&64&&qi&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=pi;if(Bn(n,t),In(t),o&512&&(ln||a===null||Ai(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){t:{o=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":f=c.getElementsByTagName("title")[0],(!f||f[ja]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(o),c.head.insertBefore(f,c.querySelector("head > title"))),Tn(f,o,a),f[an]=t,gt(f),o=f;break t;case"link":var v=o0("link","href",c).get(o+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;case"meta":if(v=o0("meta","content",c).get(o+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=c.createElement(o),Tn(f,o,a),c.head.appendChild(f);break;default:throw Error(s(468,o))}f[an]=t,gt(f),o=f}t.stateNode=o}else l0(c,t.type,t.stateNode);else t.stateNode=r0(c,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?l0(c,t.type,t.stateNode):r0(c,o,t.memoizedProps)):o===null&&t.stateNode!==null&&hf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),In(t),o&512&&(ln||a===null||Ai(a,a.return)),a!==null&&o&4&&hf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),In(t),o&512&&(ln||a===null||Ai(a,a.return)),t.flags&32){c=t.stateNode;try{Ns(c,"")}catch(It){Pe(t,t.return,It)}}o&4&&t.stateNode!=null&&(c=t.memoizedProps,hf(t,c,a!==null?a.memoizedProps:c)),o&1024&&(mf=!0);break;case 6:if(Bn(n,t),In(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(It){Pe(t,t.return,It)}}break;case 3:if(Kl=null,c=pi,pi=jl(n.containerInfo),Bn(n,t),pi=c,In(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ur(n.containerInfo)}catch(It){Pe(t,t.return,It)}mf&&(mf=!1,lg(t));break;case 4:o=pi,pi=jl(t.stateNode.containerInfo),Bn(n,t),In(t),pi=o;break;case 12:Bn(n,t),In(t);break;case 31:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 13:Bn(n,t),In(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=T()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=qi,ct=ln;if(qi=J||c,ln=ct||B,Bn(n,t),ln=ct,qi=J,In(t),o&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||qi||ln||us(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=B.stateNode;var pt=B.memoizedProps.style,tt=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;b.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(It){Pe(B,B.return,It)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(It){Pe(B,B.return,It)}}}else if(n.tag===18){if(a===null){B=n;try{var it=B.stateNode;c?Qg(it,!0):Qg(B.stateNode,!1)}catch(It){Pe(B,B.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ol(t,a))));break;case 19:Bn(n,t),In(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ol(t,o)));break;case 30:break;case 21:break;default:Bn(n,t),In(t)}}function In(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if($m(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=df(t);Nl(t,f,c);break;case 5:var v=a.stateNode;a.flags&32&&(Ns(v,""),a.flags&=-33);var b=df(t);Nl(t,b,v);break;case 3:case 4:var B=a.stateNode.containerInfo,J=df(t);pf(t,J,B);break;default:throw Error(s(161))}}catch(ct){Pe(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ng(t,n.alternate,n),n=n.sibling}function us(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),us(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qm(n,n.return,a),us(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ai(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ho(4,f);break;case 1:if(Zi(c,f,a),o=f,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Pe(o,o.return,J)}if(o=f,c=o.updateQueue,c!==null){var b=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Fp(B[c],b)}catch(J){Pe(o,o.return,J)}}a&&v&64&&Km(f),po(f,f.return);break;case 27:tg(f);case 26:case 5:Zi(c,f,a),a&&o===null&&v&4&&Jm(f),po(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&v&4&&sg(c,f);break;case 13:Zi(c,f,a),a&&v&4&&rg(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),po(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function gf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&$r(a))}function _f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t))}function mi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)cg(t,n,a,o),n=n.sibling}function cg(t,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,o),c&2048&&ho(9,n);break;case 1:mi(t,n,a,o);break;case 3:mi(t,n,a,o),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&$r(t)));break;case 12:if(c&2048){mi(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Pe(n,n.return,B)}}else mi(t,n,a,o);break;case 31:mi(t,n,a,o);break;case 13:mi(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,o):mo(t,n):f._visibility&2?mi(t,n,a,o):(f._visibility|=2,$s(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&gf(v,n);break;case 24:mi(t,n,a,o),c&2048&&_f(n.alternate,n);break;default:mi(t,n,a,o)}}function $s(t,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,b=a,B=o,J=v.flags;switch(v.tag){case 0:case 11:case 15:$s(f,v,b,B,c),ho(8,v);break;case 23:break;case 22:var ct=v.stateNode;v.memoizedState!==null?ct._visibility&2?$s(f,v,b,B,c):mo(f,v):(ct._visibility|=2,$s(f,v,b,B,c)),c&&J&2048&&gf(v.alternate,v);break;case 24:$s(f,v,b,B,c),c&&J&2048&&_f(v.alternate,v);break;default:$s(f,v,b,B,c)}n=n.sibling}}function mo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,c=o.flags;switch(o.tag){case 22:mo(a,o),c&2048&&gf(o.alternate,o);break;case 24:mo(a,o),c&2048&&_f(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function tr(t,n,a){if(t.subtreeFlags&go)for(t=t.child;t!==null;)ug(t,n,a),t=t.sibling}function ug(t,n,a){switch(t.tag){case 26:tr(t,n,a),t.flags&go&&t.memoizedState!==null&&pS(a,pi,t.memoizedState,t.memoizedProps);break;case 5:tr(t,n,a);break;case 3:case 4:var o=pi;pi=jl(t.stateNode.containerInfo),tr(t,n,a),pi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=go,go=16777216,tr(t,n,a),go=o):tr(t,n,a));break;default:tr(t,n,a)}}function fg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function _o(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,dg(o,t)}fg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hg(t),t=t.sibling}function hg(t){switch(t.tag){case 0:case 11:case 15:_o(t),t.flags&2048&&ya(9,t,t.return);break;case 3:_o(t);break;case 12:_o(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):_o(t);break;default:_o(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,dg(o,t)}fg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ya(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function dg(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:$r(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=t;_n!==null;){o=_n;var c=o.sibling,f=o.return;if(ig(o),o===a){_n=null;break t}if(c!==null){c.return=f,_n=c;break t}_n=f}}}var Cx={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},Dx=typeof WeakMap=="function"?WeakMap:Map,De=0,Xe=null,me=null,ve=0,ze=0,Zn=null,Ma=!1,er=!1,vf=!1,Ki=0,$e=0,Ea=0,fs=0,xf=0,Kn=0,nr=0,vo=null,Fn=null,Sf=!1,Pl=0,pg=0,Bl=1/0,Il=null,Ta=null,dn=0,ba=null,ir=null,Qi=0,yf=0,Mf=null,mg=null,xo=0,Ef=null;function Qn(){return(De&2)!==0&&ve!==0?ve&-ve:O.T!==null?Cf():Ya()}function gg(){if(Kn===0)if((ve&536870912)===0||Se){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===Xe&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(ar(t,0),Aa(t,ve,Kn,!1)),Dn(t,a),((De&2)===0||t!==Xe)&&(t===Xe&&((De&2)===0&&(fs|=a),$e===4&&Aa(t,ve,Kn,!1)),Ri(t))}function _g(t,n,a){if((De&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=o?Nx(t,n):bf(t,n,!0),f=o;do{if(c===0){er&&!o&&Aa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Ux(a)){c=bf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=t;c=vo;var B=b.current.memoizedState.isDehydrated;if(B&&(ar(b,v).flags|=256),v=bf(b,v,!1),v!==2){if(vf&&!B){b.errorRecoveryDisabledLanes|=f,fs|=f,c=4;break t}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=v}if(f=!1,c!==2)continue}}if(c===1){ar(t,0),Aa(t,n,0,!0);break}t:{switch(o=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(o,n,Kn,!Ma);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Pl+300-T(),10<c)){if(Aa(o,n,Kn,!Ma),mt(o,0,!0)!==0)break t;Qi=n,o.timeoutHandle=jg(vg.bind(null,o,a,Fn,Il,Sf,n,Kn,fs,nr,Ma,f,"Throttled",-0,0),c);break t}vg(o,a,Fn,Il,Sf,n,Kn,fs,nr,Ma,f,null,-0,0)}}break}while(!0);Ri(t)}function vg(t,n,a,o,c,f,v,b,B,J,ct,pt,tt,it){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},ug(n,f,pt);var It=(f&62914560)===f?Pl-T():(f&4194048)===f?pg-T():0;if(It=mS(pt,It),It!==null){Qi=f,t.cancelPendingCommit=It(Ag.bind(null,t,n,f,a,o,c,v,b,B,ct,pt,null,tt,it)),Aa(t,f,v,!J);return}}Ag(t,n,f,a,o,c,v,b,B)}function Ux(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(t,n,a,o){n&=~xf,n&=~fs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var c=n;0<c;){var f=31-Ot(c),v=1<<f;o[f]=-1,c&=~v}a!==0&&Fr(t,a,n)}function Fl(){return(De&6)===0?(So(0),!1):!0}function Tf(){if(me!==null){if(ze===0)var t=me.return;else t=me,Hi=ns=null,Fu(t),js=null,eo=0,t=me;for(;t!==null;)Zm(t.alternate,t),t=t.return;me=null}}function ar(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Qx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,Tf(),Xe=t,me=a=Ii(t.current,null),ve=n,ze=0,Zn=null,Ma=!1,er=Bt(t,n),vf=!1,nr=Kn=xf=fs=Ea=$e=0,Fn=vo=null,Sf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var c=31-Ot(o),f=1<<c;n|=t[c],o&=~f}return Ki=n,rl(),a}function xg(t,n){le=null,O.H=co,n===Ys||n===pl?(n=zp(),ze=3):n===Ru?(n=zp(),ze=4):ze=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,me===null&&($e=1,wl(t,ai(n,t.current)))}function Sg(){var t=Yn.current;return t===null?!0:(ve&4194048)===ve?li===null:(ve&62914560)===ve||(ve&536870912)!==0?t===li:!1}function yg(){var t=O.H;return O.H=co,t===null?co:t}function Mg(){var t=O.A;return O.A=Cx,t}function Hl(){$e=4,Ma||(ve&4194048)!==ve&&Yn.current!==null||(er=!0),(Ea&134217727)===0&&(fs&134217727)===0||Xe===null||Aa(Xe,ve,Kn,!1)}function bf(t,n,a){var o=De;De|=2;var c=yg(),f=Mg();(Xe!==t||ve!==n)&&(Il=null,ar(t,n)),n=!1;var v=$e;t:do try{if(ze!==0&&me!==null){var b=me,B=Zn;switch(ze){case 8:Tf(),v=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var J=ze;if(ze=0,Zn=null,sr(t,b,B,J),a&&er){v=0;break t}break;default:J=ze,ze=0,Zn=null,sr(t,b,B,J)}}Lx(),v=$e;break}catch(ct){xg(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Hi=ns=null,De=o,O.H=c,O.A=f,me===null&&(Xe=null,ve=0,rl()),v}function Lx(){for(;me!==null;)Eg(me)}function Nx(t,n){var a=De;De|=2;var o=yg(),c=Mg();Xe!==t||ve!==n?(Il=null,Bl=T()+500,ar(t,n)):er=Bt(t,n);t:do try{if(ze!==0&&me!==null){n=me;var f=Zn;e:switch(ze){case 1:ze=0,Zn=null,sr(t,n,f,1);break;case 2:case 9:if(Np(f)){ze=0,Zn=null,Tg(n);break}n=function(){ze!==2&&ze!==9||Xe!==t||(ze=7),Ri(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Np(f)?(ze=0,Zn=null,Tg(n)):(ze=0,Zn=null,sr(t,n,f,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var b=me;if(v?c0(v):b.stateNode.complete){ze=0,Zn=null;var B=b.sibling;if(B!==null)me=B;else{var J=b.return;J!==null?(me=J,Gl(J)):me=null}break e}}ze=0,Zn=null,sr(t,n,f,5);break;case 6:ze=0,Zn=null,sr(t,n,f,6);break;case 8:Tf(),$e=6;break t;default:throw Error(s(462))}}Ox();break}catch(ct){xg(t,ct)}while(!0);return Hi=ns=null,O.H=o,O.A=c,De=a,me!==null?0:(Xe=null,ve=0,rl(),$e)}function Ox(){for(;me!==null&&!Ze();)Eg(me)}function Eg(t){var n=Ym(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function Tg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Gm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fu(n);default:Zm(a,n),n=me=Mp(n,Ki),n=Ym(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Gl(t):me=n}function sr(t,n,a,o){Hi=ns=null,Fu(n),js=null,eo=0;var c=n.return;try{if(Mx(t,c,n,a,ve)){$e=1,wl(t,ai(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;$e=1,wl(t,ai(a,t.current)),me=null;return}n.flags&32768?(Se||o===1?t=!0:er||(ve&536870912)!==0?t=!1:(Ma=t=!0,(o===2||o===9||o===3||o===6)&&(o=Yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),bg(n,t)):Gl(n)}function Gl(t){var n=t;do{if((n.flags&32768)!==0){bg(n,Ma);return}t=n.return;var a=bx(n.alternate,n,Ki);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);$e===0&&($e=5)}function bg(t,n){do{var a=Ax(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);$e=6,me=null}function Ag(t,n,a,o,c,f,v,b,B){t.cancelPendingCommit=null;do Vl();while(dn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=hu,ni(t,a,f,v,b,B),t===Xe&&(me=Xe=null,ve=0),ir=n,ba=t,Qi=a,yf=f,Mf=c,mg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ix(lt,function(){return Ug(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,c=K.p,K.p=2,v=De,De|=4;try{Rx(t,n,a)}finally{De=v,K.p=c,O.T=o}}dn=1,Rg(),wg(),Cg()}}function Rg(){if(dn===1){dn=0;var t=ba,n=ir,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var c=De;De|=4;try{og(n,t);var f=Bf,v=dp(t.containerInfo),b=f.focusedElem,B=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&hp(b.ownerDocument.documentElement,b)){if(B!==null&&ou(b)){var J=B.start,ct=B.end;if(ct===void 0&&(ct=J),"selectionStart"in b)b.selectionStart=J,b.selectionEnd=Math.min(ct,b.value.length);else{var pt=b.ownerDocument||document,tt=pt&&pt.defaultView||window;if(tt.getSelection){var it=tt.getSelection(),It=b.textContent.length,ie=Math.min(B.start,It),Fe=B.end===void 0?ie:Math.min(B.end,It);!it.extend&&ie>Fe&&(v=Fe,Fe=ie,ie=v);var q=fp(b,ie),H=fp(b,Fe);if(q&&H&&(it.rangeCount!==1||it.anchorNode!==q.node||it.anchorOffset!==q.offset||it.focusNode!==H.node||it.focusOffset!==H.offset)){var Q=pt.createRange();Q.setStart(q.node,q.offset),it.removeAllRanges(),ie>Fe?(it.addRange(Q),it.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),it.addRange(Q))}}}}for(pt=[],it=b;it=it.parentNode;)it.nodeType===1&&pt.push({element:it,left:it.scrollLeft,top:it.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<pt.length;b++){var ht=pt[b];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}tc=!!Pf,Bf=Pf=null}finally{De=c,K.p=o,O.T=a}}t.current=n,dn=2}}function wg(){if(dn===2){dn=0;var t=ba,n=ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=K.p;K.p=2;var c=De;De|=4;try{ng(t,n.alternate,n)}finally{De=c,K.p=o,O.T=a}}dn=3}}function Cg(){if(dn===4||dn===3){dn=0,U();var t=ba,n=ir,a=Qi,o=mg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,ir=ba=null,Dg(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ta=null),Us(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,c=K.p,K.p=2,O.T=null;try{for(var f=t.onRecoverableError,v=0;v<o.length;v++){var b=o[v];f(b.value,{componentStack:b.stack})}}finally{O.T=n,K.p=c}}(Qi&3)!==0&&Vl(),Ri(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===Ef?xo++:(xo=0,Ef=t):xo=0,So(0)}}function Dg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,$r(n)))}function Vl(){return Rg(),wg(),Cg(),Ug()}function Ug(){if(dn!==5)return!1;var t=ba,n=yf;yf=0;var a=Us(Qi),o=O.T,c=K.p;try{K.p=32>a?32:a,O.T=null,a=Mf,Mf=null;var f=ba,v=Qi;if(dn=0,ir=ba=null,Qi=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,hg(f.current),cg(f,f.current,v,a),De=b,So(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{K.p=c,O.T=o,Dg(t,n)}}function Lg(t,n,a){n=ai(a,n),n=tf(t.stateNode,n,2),t=va(t,n,2),t!==null&&(Dn(t,2),Ri(t))}function Pe(t,n,a){if(t.tag===3)Lg(t,t,a);else for(;n!==null;){if(n.tag===3){Lg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ta===null||!Ta.has(o))){t=ai(a,t),a=Nm(2),o=va(n,a,2),o!==null&&(Om(a,o,n,t),Dn(o,2),Ri(o));break}}n=n.return}}function Af(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(vf=!0,c.add(a),t=zx.bind(null,t,n,a),n.then(t,t))}function zx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xe===t&&(ve&a)===a&&($e===4||$e===3&&(ve&62914560)===ve&&300>T()-Pl?(De&2)===0&&ar(t,0):xf|=a,nr===ve&&(nr=0)),Ri(t)}function Ng(t,n){n===0&&(n=Oe()),t=$a(t,n),t!==null&&(Dn(t,n),Ri(t))}function Px(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Ng(t,a)}function Bx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),Ng(t,a)}function Ix(t,n){return re(t,n)}var Xl=null,rr=null,Rf=!1,kl=!1,wf=!1,Ra=0;function Ri(t){t!==rr&&t.next===null&&(rr===null?Xl=rr=t:rr=rr.next=t),kl=!0,Rf||(Rf=!0,Hx())}function So(t,n){if(!wf&&kl){wf=!0;do for(var a=!1,o=Xl;o!==null;){if(t!==0){var c=o.pendingLanes;if(c===0)var f=0;else{var v=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Ot(42|t)+1)-1,f&=c&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bg(o,f))}else f=ve,f=mt(o,o===Xe?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Bt(o,f)||(a=!0,Bg(o,f));o=o.next}while(a);wf=!1}}function Fx(){Og()}function Og(){kl=Rf=!1;var t=0;Ra!==0&&Kx()&&(t=Ra);for(var n=T(),a=null,o=Xl;o!==null;){var c=o.next,f=zg(o,n);f===0?(o.next=null,a===null?Xl=c:a.next=c,c===null&&(rr=a)):(a=o,(t!==0||(f&3)!==0)&&(kl=!0)),o=c}dn!==0&&dn!==5||So(t),Ra!==0&&(Ra=0)}function zg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Ot(f),b=1<<v,B=c[v];B===-1?((b&a)===0||(b&o)!==0)&&(c[v]=se(b,n)):B<=n&&(t.expiredLanes|=b),f&=~b}if(n=Xe,a=ve,a=mt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Qe(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Qe(o),Us(a)){case 2:case 8:a=vt;break;case 32:a=lt;break;case 268435456:a=Tt;break;default:a=lt}return o=Pg.bind(null,t),a=re(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Qe(o),t.callbackPriority=2,t.callbackNode=null,2}function Pg(t,n){if(dn!==0&&dn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Vl()&&t.callbackNode!==a)return null;var o=ve;return o=mt(t,t===Xe?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(_g(t,o,n),zg(t,T()),t.callbackNode!=null&&t.callbackNode===a?Pg.bind(null,t):null)}function Bg(t,n){if(Vl())return null;_g(t,n,!0)}function Hx(){Jx(function(){(De&6)!==0?re(ft,Fx):Og()})}function Cf(){if(Ra===0){var t=Ws;t===0&&(t=Et,Et<<=1,(Et&261888)===0&&(Et=256)),Ra=t}return Ra}function Ig(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Jo(""+t)}function Fg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Gx(t,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var f=Ig((c[xn]||null).action),v=o.submitter;v&&(n=(n=v[xn]||null)?Ig(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new nl("action","action",null,o,c);t.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ra!==0){var B=v?Fg(c,v):new FormData(c);ju(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=v?Fg(c,v):new FormData(c),ju(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var Df=0;Df<fu.length;Df++){var Uf=fu[Df],Vx=Uf.toLowerCase(),Xx=Uf[0].toUpperCase()+Uf.slice(1);di(Vx,"on"+Xx)}di(gp,"onAnimationEnd"),di(_p,"onAnimationIteration"),di(vp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(sx,"onTransitionRun"),di(rx,"onTransitionStart"),di(ox,"onTransitionCancel"),di(xp,"onTransitionEnd"),$t("onMouseEnter",["mouseout","mouseover"]),$t("onMouseLeave",["mouseout","mouseover"]),$t("onPointerEnter",["pointerout","pointerover"]),$t("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yo));function Hg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],c=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var b=o[v],B=b.instance,J=b.currentTarget;if(b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){sl(ct)}c.currentTarget=null,f=B}else for(v=0;v<o.length;v++){if(b=o[v],B=b.instance,J=b.currentTarget,b=b.listener,B!==f&&c.isPropagationStopped())break t;f=b,c.currentTarget=J;try{f(c)}catch(ct){sl(ct)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Gr];a===void 0&&(a=n[Gr]=new Set);var o=t+"__bubble";a.has(o)||(Gg(n,t,2,!1),a.add(o))}function Lf(t,n,a){var o=0;n&&(o|=4),Gg(a,t,o,n)}var Wl="_reactListening"+Math.random().toString(36).slice(2);function Nf(t){if(!t[Wl]){t[Wl]=!0,Dt.forEach(function(a){a!=="selectionchange"&&(kx.has(a)||Lf(a,!1,t),Lf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wl]||(n[Wl]=!0,Lf("selectionchange",!1,n))}}function Gg(t,n,a,o){switch(g0(n)){case 2:var c=vS;break;case 8:c=xS;break;default:c=jf}a=c.bind(null,n,a,t),c=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Of(t,n,a,o,c){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var b=o.stateNode.containerInfo;if(b===c)break;if(v===4)for(v=o.return;v!==null;){var B=v.tag;if((B===3||B===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;b!==null;){if(v=W(b),v===null)return;if(B=v.tag,B===5||B===6||B===26||B===27){o=f=v;continue t}b=b.parentNode}}o=o.return}qd(function(){var J=f,ct=Kc(a),pt=[];t:{var tt=Sp.get(t);if(tt!==void 0){var it=nl,It=t;switch(t){case"keypress":if(tl(a)===0)break t;case"keydown":case"keyup":it=Bv;break;case"focusin":It="focus",it=nu;break;case"focusout":It="blur",it=nu;break;case"beforeblur":case"afterblur":it=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":it=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":it=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":it=Hv;break;case gp:case _p:case vp:it=wv;break;case xp:it=Vv;break;case"scroll":case"scrollend":it=Ev;break;case"wheel":it=kv;break;case"copy":case"cut":case"paste":it=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":it=Qd;break;case"toggle":case"beforetoggle":it=qv}var ie=(n&4)!==0,Fe=!ie&&(t==="scroll"||t==="scrollend"),q=ie?tt!==null?tt+"Capture":null:tt;ie=[];for(var H=J,Q;H!==null;){var ht=H;if(Q=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||Q===null||q===null||(ht=Vr(H,q),ht!=null&&ie.push(Mo(H,ht,Q))),Fe)break;H=H.return}0<ie.length&&(tt=new it(tt,It,null,a,ct),pt.push({event:tt,listeners:ie}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",it=t==="mouseout"||t==="pointerout",tt&&a!==Zc&&(It=a.relatedTarget||a.fromElement)&&(W(It)||It[ua]))break t;if((it||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,it?(It=a.relatedTarget||a.toElement,it=J,It=It?W(It):null,It!==null&&(Fe=u(It),ie=It.tag,It!==Fe||ie!==5&&ie!==27&&ie!==6)&&(It=null)):(it=null,It=J),it!==It)){if(ie=Zd,ht="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(ie=Qd,ht="onPointerLeave",q="onPointerEnter",H="pointer"),Fe=it==null?tt:nt(it),Q=It==null?tt:nt(It),tt=new ie(ht,H+"leave",it,a,ct),tt.target=Fe,tt.relatedTarget=Q,ht=null,W(ct)===J&&(ie=new ie(q,H+"enter",It,a,ct),ie.target=Q,ie.relatedTarget=Fe,ht=ie),Fe=ht,it&&It)e:{for(ie=Wx,q=it,H=It,Q=0,ht=q;ht;ht=ie(ht))Q++;ht=0;for(var ee=H;ee;ee=ie(ee))ht++;for(;0<Q-ht;)q=ie(q),Q--;for(;0<ht-Q;)H=ie(H),ht--;for(;Q--;){if(q===H||H!==null&&q===H.alternate){ie=q;break e}q=ie(q),H=ie(H)}ie=null}else ie=null;it!==null&&Vg(pt,tt,it,ie,!1),It!==null&&Fe!==null&&Vg(pt,Fe,It,ie,!0)}}t:{if(tt=J?nt(J):window,it=tt.nodeName&&tt.nodeName.toLowerCase(),it==="select"||it==="input"&&tt.type==="file")var Re=sp;else if(ip(tt))if(rp)Re=nx;else{Re=tx;var Xt=$v}else it=tt.nodeName,!it||it.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&jc(J.elementType)&&(Re=sp):Re=ex;if(Re&&(Re=Re(t,J))){ap(pt,Re,a,ct);break t}Xt&&Xt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&hn(tt,"number",tt.value)}switch(Xt=J?nt(J):window,t){case"focusin":(ip(Xt)||Xt.contentEditable==="true")&&(Bs=Xt,lu=J,Kr=null);break;case"focusout":Kr=lu=Bs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,pp(pt,a,ct);break;case"selectionchange":if(ax)break;case"keydown":case"keyup":pp(pt,a,ct)}var ue;if(au)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ps?ep(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Jd&&a.locale!=="ko"&&(Ps||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ps&&(ue=Yd()):(fa=ct,$c="value"in fa?fa.value:fa.textContent,Ps=!0)),Xt=ql(J,xe),0<Xt.length&&(xe=new Kd(xe,t,null,a,ct),pt.push({event:xe,listeners:Xt}),ue?xe.data=ue:(ue=np(a),ue!==null&&(xe.data=ue)))),(ue=jv?Zv(t,a):Kv(t,a))&&(xe=ql(J,"onBeforeInput"),0<xe.length&&(Xt=new Kd("onBeforeInput","beforeinput",null,a,ct),pt.push({event:Xt,listeners:xe}),Xt.data=ue)),Gx(pt,t,J,a,ct)}Hg(pt,n)})}function Mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ql(t,n){for(var a=n+"Capture",o=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Vr(t,a),c!=null&&o.unshift(Mo(t,c,f)),c=Vr(t,n),c!=null&&o.push(Mo(t,c,f))),t.tag===3)return o;t=t.return}return[]}function Wx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vg(t,n,a,o,c){for(var f=n._reactName,v=[];a!==null&&a!==o;){var b=a,B=b.alternate,J=b.stateNode;if(b=b.tag,B!==null&&B===o)break;b!==5&&b!==26&&b!==27||J===null||(B=J,c?(J=Vr(a,f),J!=null&&v.unshift(Mo(a,J,B))):c||(J=Vr(a,f),J!=null&&v.push(Mo(a,J,B)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var qx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(qx,`
`).replace(Yx,"")}function kg(t,n){return n=Xg(n),Xg(t)===n}function Ie(t,n,a,o,c,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ns(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ns(t,""+o);break;case"className":Le(t,"class",o);break;case"tabIndex":Le(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(t,a,o);break;case"style":kd(t,o,f);break;case"data":if(n!=="object"){Le(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Jo(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Pi);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Jo(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":ge("beforetoggle",t),ge("toggle",t),Ve(t,"popover",o);break;case"xlinkActuate":pe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ve(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yv.get(a)||a,Ve(t,a,o))}}function zf(t,n,a,o,c,f){switch(a){case"style":kd(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Ns(t,o):(typeof o=="number"||typeof o=="bigint")&&Ns(t,""+o);break;case"onScroll":o!=null&&ge("scroll",t);break;case"onScrollEnd":o!=null&&ge("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ft.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,c);break t}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Ve(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var o=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,f,v,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),o&&Ie(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var b=f=v=c=null,B=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":v=ct;break;case"checked":B=ct;break;case"defaultChecked":J=ct;break;case"value":f=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ie(t,n,o,ct,a,null)}}Un(t,f,b,B,J,v,c,!1);return;case"select":ge("invalid",t),o=v=f=null;for(c in a)if(a.hasOwnProperty(c)&&(b=a[c],b!=null))switch(c){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":o=b;default:Ie(t,n,c,b,a,null)}n=f,a=v,t.multiple=!!o,n!=null?tn(t,!!o,n,!1):a!=null&&tn(t,!!o,a,!0);return;case"textarea":ge("invalid",t),f=c=o=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":o=b;break;case"defaultValue":c=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(t,n,v,b,a,null)}Ei(t,o,c,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Ie(t,n,B,o,a,null));return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(o=0;o<yo.length;o++)ge(yo[o],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(t,n,J,o,a,null)}return;default:if(jc(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&zf(t,n,ct,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Ie(t,n,b,o,a,null))}function jx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,v=null,b=null,B=null,J=null,ct=null;for(it in a){var pt=a[it];if(a.hasOwnProperty(it)&&pt!=null)switch(it){case"checked":break;case"value":break;case"defaultValue":B=pt;default:o.hasOwnProperty(it)||Ie(t,n,it,null,o,pt)}}for(var tt in o){var it=o[tt];if(pt=a[tt],o.hasOwnProperty(tt)&&(it!=null||pt!=null))switch(tt){case"type":f=it;break;case"name":c=it;break;case"checked":J=it;break;case"defaultChecked":ct=it;break;case"value":v=it;break;case"defaultValue":b=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:it!==pt&&Ie(t,n,tt,it,o,pt)}}Rn(t,v,b,B,J,ct,f,c);return;case"select":it=v=b=tt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":it=B;default:o.hasOwnProperty(f)||Ie(t,n,f,null,o,B)}for(c in o)if(f=o[c],B=a[c],o.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":tt=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==B&&Ie(t,n,c,f,o,B)}n=b,a=v,o=it,tt!=null?tn(t,!!a,tt,!1):!!o!=!!a&&(n!=null?tn(t,!!a,n,!0):tn(t,!!a,a?[]:"",!1));return;case"textarea":it=tt=null;for(b in a)if(c=a[b],a.hasOwnProperty(b)&&c!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(t,n,b,null,o,c)}for(v in o)if(c=o[v],f=a[v],o.hasOwnProperty(v)&&(c!=null||f!=null))switch(v){case"value":tt=c;break;case"defaultValue":it=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&Ie(t,n,v,c,o,f)}Ls(t,tt,it);return;case"option":for(var It in a)tt=a[It],a.hasOwnProperty(It)&&tt!=null&&!o.hasOwnProperty(It)&&(It==="selected"?t.selected=!1:Ie(t,n,It,null,o,tt));for(B in o)tt=o[B],it=a[B],o.hasOwnProperty(B)&&tt!==it&&(tt!=null||it!=null)&&(B==="selected"?t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ie(t,n,B,tt,o,it));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)tt=a[ie],a.hasOwnProperty(ie)&&tt!=null&&!o.hasOwnProperty(ie)&&Ie(t,n,ie,null,o,tt);for(J in o)if(tt=o[J],it=a[J],o.hasOwnProperty(J)&&tt!==it&&(tt!=null||it!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ie(t,n,J,tt,o,it)}return;default:if(jc(n)){for(var Fe in a)tt=a[Fe],a.hasOwnProperty(Fe)&&tt!==void 0&&!o.hasOwnProperty(Fe)&&zf(t,n,Fe,void 0,o,tt);for(ct in o)tt=o[ct],it=a[ct],!o.hasOwnProperty(ct)||tt===it||tt===void 0&&it===void 0||zf(t,n,ct,tt,o,it);return}}for(var q in a)tt=a[q],a.hasOwnProperty(q)&&tt!=null&&!o.hasOwnProperty(q)&&Ie(t,n,q,null,o,tt);for(pt in o)tt=o[pt],it=a[pt],!o.hasOwnProperty(pt)||tt===it||tt==null&&it==null||Ie(t,n,pt,tt,o,it)}function Wg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],f=c.transferSize,v=c.initiatorType,b=c.duration;if(f&&b&&Wg(v)){for(v=0,b=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],J=B.startTime;if(J>b)break;var ct=B.transferSize,pt=B.initiatorType;ct&&Wg(pt)&&(B=B.responseEnd,v+=ct*(B<b?1:(b-J)/(B-J)))}if(--o,n+=8*(f+v)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Pf=null,Bf=null;function Yl(t){return t.nodeType===9?t:t.ownerDocument}function qg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function If(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function Kx(){var t=window.event;return t&&t.type==="popstate"?t===Ff?!1:(Ff=t,!0):(Ff=null,!1)}var jg=typeof setTimeout=="function"?setTimeout:void 0,Qx=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch($x)}:jg;function $x(t){setTimeout(function(){throw t})}function wa(t){return t==="head"}function Kg(t,n){var a=n,o=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(c),ur(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Eo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[ja]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Eo(t.ownerDocument.body);a=c}while(a);ur(n)}function Qg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function tS(t,n,a,o){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ja])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function eS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function Jg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ci(t.nextSibling),t===null))return null;return t}function Gf(t){return t.data==="$?"||t.data==="$~"}function Vf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function nS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Xf=null;function $g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ci(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function t0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function e0(t,n,a){switch(n=Yl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Eo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);R(t)}var ui=new Map,n0=new Set;function jl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=K.d;K.d={f:iS,r:aS,D:sS,C:rS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var t=Ji.f(),n=Fl();return t||n}function aS(t){var n=et(t);n!==null&&n.tag===5&&n.type==="form"?xm(n):Ji.r(t)}var or=typeof document>"u"?null:document;function i0(t,n,a){var o=or;if(o&&typeof n=="string"&&n){var c=_e(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),n0.has(c)||(n0.add(c),t={rel:t,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Tn(n,"link",t),gt(n),o.head.appendChild(n)))}}function sS(t){Ji.D(t),i0("dns-prefetch",t,null)}function rS(t,n){Ji.C(t,n),i0("preconnect",t,n)}function oS(t,n,a){Ji.L(t,n,a);var o=or;if(o&&t&&n){var c='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+_e(a.imageSizes)+'"]')):c+='[href="'+_e(t)+'"]';var f=c;switch(n){case"style":f=lr(t);break;case"script":f=cr(t)}ui.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ui.set(f,t),o.querySelector(c)!==null||n==="style"&&o.querySelector(To(f))||n==="script"&&o.querySelector(bo(f))||(n=o.createElement("link"),Tn(n,"link",t),gt(n),o.head.appendChild(n)))}}function lS(t,n){Ji.m(t,n);var a=or;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+_e(o)+'"][href="'+_e(t)+'"]',f=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=cr(t)}if(!ui.has(f)&&(t=_({rel:"modulepreload",href:t},n),ui.set(f,t),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}o=a.createElement("link"),Tn(o,"link",t),gt(o),a.head.appendChild(o)}}}function cS(t,n,a){Ji.S(t,n,a);var o=or;if(o&&t){var c=Y(o).hoistableStyles,f=lr(t);n=n||"default";var v=c.get(f);if(!v){var b={loading:0,preload:null};if(v=o.querySelector(To(f)))b.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ui.get(f))&&kf(t,a);var B=v=o.createElement("link");gt(B),Tn(B,"link",t),B._p=new Promise(function(J,ct){B.onload=J,B.onerror=ct}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Zl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:b},c.set(f,v)}}}function uS(t,n){Ji.X(t,n);var a=or;if(a&&t){var o=Y(a).hoistableScripts,c=cr(t),f=o.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0},n),(n=ui.get(c))&&Wf(t,n),f=a.createElement("script"),gt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function fS(t,n){Ji.M(t,n);var a=or;if(a&&t){var o=Y(a).hoistableScripts,c=cr(t),f=o.get(c);f||(f=a.querySelector(bo(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ui.get(c))&&Wf(t,n),f=a.createElement("script"),gt(f),Tn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(c,f))}}function a0(t,n,a,o){var c=(c=ut.current)?jl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=lr(a.href),a=Y(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=lr(a.href);var f=Y(c).hoistableStyles,v=f.get(t);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=c.querySelector(To(t)))&&!f._p&&(v.instance=f,v.state.loading=5),ui.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(t,a),f||hS(c,t,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=cr(a),a=Y(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function lr(t){return'href="'+_e(t)+'"'}function To(t){return'link[rel="stylesheet"]['+t+"]"}function s0(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function hS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),gt(n),t.head.appendChild(n))}function cr(t){return'[src="'+_e(t)+'"]'}function bo(t){return"script[async]"+t}function r0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+_e(a.href)+'"]');if(o)return n.instance=o,gt(o),o;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),gt(o),Tn(o,"style",c),Zl(o,a.precedence,t),n.instance=o;case"stylesheet":c=lr(a.href);var f=t.querySelector(To(c));if(f)return n.state.loading|=4,n.instance=f,gt(f),f;o=s0(a),(c=ui.get(c))&&kf(o,c),f=(t.ownerDocument||t).createElement("link"),gt(f);var v=f;return v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),Tn(f,"link",o),n.state.loading|=4,Zl(f,a.precedence,t),n.instance=f;case"script":return f=cr(a.src),(c=t.querySelector(bo(f)))?(n.instance=c,gt(c),c):(o=a,(c=ui.get(f))&&(o=_({},a),Wf(o,c)),t=t.ownerDocument||t,c=t.createElement("script"),gt(c),Tn(c,"link",o),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Zl(o,a.precedence,t));return n.instance}function Zl(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,f=c,v=0;v<o.length;v++){var b=o[v];if(b.dataset.precedence===n)f=b;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Kl=null;function o0(t,n,a){if(Kl===null){var o=new Map,c=Kl=new Map;c.set(a,o)}else c=Kl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[ja]||f[an]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var b=o.get(v);b?b.push(f):o.set(v,[f])}}return o}function l0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function dS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function c0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function pS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=lr(o.href),f=n.querySelector(To(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ql.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,gt(f);return}f=n.ownerDocument||n,o=s0(o),(c=ui.get(c))&&kf(o,c),f=f.createElement("link"),gt(f);var v=f;v._p=new Promise(function(b,B){v.onload=b,v.onerror=B}),Tn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ql.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function mS(t,n){return t.stylesheets&&t.count===0&&$l(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&qf===0&&(qf=62500*Zx());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$l(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>qf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function Ql(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$l(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Jl=null;function $l(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Jl=new Map,n.forEach(gS,t),Jl=null,Ql.call(t))}function gS(t,n){if(!(n.state.loading&4)){var a=Jl.get(t);if(a)var o=a.get(null);else{a=new Map,Jl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var v=c[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}c=n.instance,v=c.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,c),a.set(v,c),this.count++,o=Ql.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var Ao={$$typeof:L,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function _S(t,n,a,o,c,f,v,b,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function u0(t,n,a,o,c,f,v,b,B,J,ct,pt){return t=new _S(t,n,a,v,B,J,ct,pt,b),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=Tu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},wu(f),t}function f0(t){return t?(t=Hs,t):Hs}function h0(t,n,a,o,c,f){c=f0(c),o.context===null?o.context=c:o.pendingContext=c,o=_a(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=va(t,o,n),a!==null&&(Hn(a,t,n),io(a,t,n))}function d0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Yf(t,n){d0(t,n),(t=t.alternate)&&d0(t,n)}function p0(t){if(t.tag===13||t.tag===31){var n=$a(t,67108864);n!==null&&Hn(n,t,67108864),Yf(t,67108864)}}function m0(t){if(t.tag===13||t.tag===31){var n=Qn();n=Ds(n);var a=$a(t,n);a!==null&&Hn(a,t,n),Yf(t,n)}}var tc=!0;function vS(t,n,a,o){var c=O.T;O.T=null;var f=K.p;try{K.p=2,jf(t,n,a,o)}finally{K.p=f,O.T=c}}function xS(t,n,a,o){var c=O.T;O.T=null;var f=K.p;try{K.p=8,jf(t,n,a,o)}finally{K.p=f,O.T=c}}function jf(t,n,a,o){if(tc){var c=Zf(o);if(c===null)Of(t,n,o,ec,a),_0(t,o);else if(yS(c,t,n,a,o))o.stopPropagation();else if(_0(t,o),n&4&&-1<SS.indexOf(t)){for(;c!==null;){var f=et(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=St(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var B=1<<31-Ot(v);b.entanglements[1]|=B,v&=~B}Ri(f),(De&6)===0&&(Bl=T()+500,So(0))}}break;case 31:case 13:b=$a(f,2),b!==null&&Hn(b,f,2),Fl(),Yf(f,2)}if(f=Zf(o),f===null&&Of(t,n,o,ec,a),f===c)break;c=f}c!==null&&o.stopPropagation()}else Of(t,n,o,null,a)}}function Zf(t){return t=Kc(t),Kf(t)}var ec=null;function Kf(t){if(ec=null,t=W(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ec=t,null}function g0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case ft:return 2;case vt:return 8;case lt:case Yt:return 32;case Tt:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ca=null,Da=null,Ua=null,Ro=new Map,wo=new Map,La=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _0(t,n){switch(t){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Ro.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Co(t,n,a,o,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[c]},n!==null&&(n=et(n),n!==null&&p0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function yS(t,n,a,o,c){switch(n){case"focusin":return Ca=Co(Ca,t,n,a,o,c),!0;case"dragenter":return Da=Co(Da,t,n,a,o,c),!0;case"mouseover":return Ua=Co(Ua,t,n,a,o,c),!0;case"pointerover":var f=c.pointerId;return Ro.set(f,Co(Ro.get(f)||null,t,n,a,o,c)),!0;case"gotpointercapture":return f=c.pointerId,wo.set(f,Co(wo.get(f)||null,t,n,a,o,c)),!0}return!1}function v0(t){var n=W(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Hr(t.priority,function(){m0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Hr(t.priority,function(){m0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=et(a),n!==null&&p0(n),t.blockedOn=a,!1;n.shift()}return!0}function x0(t,n,a){nc(t)&&a.delete(n)}function MS(){Qf=!1,Ca!==null&&nc(Ca)&&(Ca=null),Da!==null&&nc(Da)&&(Da=null),Ua!==null&&nc(Ua)&&(Ua=null),Ro.forEach(x0),wo.forEach(x0)}function ic(t,n){t.blockedOn===n&&(t.blockedOn=null,Qf||(Qf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,MS)))}var ac=null;function S0(t){ac!==t&&(ac=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ac===t&&(ac=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],c=t[n+2];if(typeof o!="function"){if(Kf(o||a)===null)continue;break}var f=et(a);f!==null&&(t.splice(n,3),n-=3,ju(f,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ur(t){function n(B){return ic(B,t)}Ca!==null&&ic(Ca,t),Da!==null&&ic(Da,t),Ua!==null&&ic(Ua,t),Ro.forEach(n),wo.forEach(n);for(var a=0;a<La.length;a++){var o=La[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)v0(a),a.blockedOn===null&&La.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],f=a[o+1],v=c[xn]||null;if(typeof f=="function")v||S0(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(c=f,v=f[xn]||null)b=v.formAction;else if(Kf(c)!==null)continue}else b=v.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),S0(a)}}}function y0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Jf(t){this._internalRoot=t}sc.prototype.render=Jf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=Qn();h0(a,o,t,n,null,null)},sc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;h0(t.current,2,null,t,null,null),Fl(),n[ua]=null}};function sc(t){this._internalRoot=t}sc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ya();t={blockedOn:null,target:t,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,t),a===0&&v0(t)}};var M0=e.version;if(M0!=="19.2.6")throw Error(s(527,M0,"19.2.6"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var ES={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{yt=rc.inject(ES),bt=rc}catch{}}return Uo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",c=Cm,f=Dm,v=Um;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=u0(t,1,!1,null,null,a,o,null,c,f,v,y0),t[ua]=n.current,Nf(t),new Jf(n)},Uo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,c="",f=Cm,v=Dm,b=Um,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=u0(t,1,!0,n,a??null,o,c,B,f,v,b,y0),n.context=f0(null),a=n.current,o=Qn(),o=Ds(o),c=_a(o),c.callback=null,va(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Ri(n),t[ua]=n.current,Nf(t),new sc(n)},Uo.version="19.2.6",Uo}var w0;function zS(){if(w0)return th.exports;w0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),th.exports=OS(),th.exports}var PS=zS(),C0="1.3.23";function z_(r,e,i){return Math.max(r,Math.min(e,i))}function BS(r,e,i){return(1-i)*r+i*e}function IS(r,e,i,s){return BS(r,e,1-Math.exp(-i*s))}function FS(r,e){return(r%e+e)%e}var HS=class{constructor(){Qt(this,"isRunning",!1);Qt(this,"value",0);Qt(this,"from",0);Qt(this,"to",0);Qt(this,"currentTime",0);Qt(this,"lerp");Qt(this,"duration");Qt(this,"easing");Qt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const i=z_(0,this.currentTime/this.duration,1);e=i>=1;const s=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*s}else this.lerp?(this.value=IS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:i,duration:s,easing:l,onStart:u,onUpdate:h}){this.from=this.value=r,this.to=e,this.lerp=i,this.duration=s,this.easing=l,this.currentTime=0,this.isRunning=!0,u?.(),this.onUpdate=h}};function GS(r,e){let i;return function(...s){clearTimeout(i),i=setTimeout(()=>{i=void 0,r.apply(this,s)},e)}}var VS=class{constructor(r,e,{autoResize:i=!0,debounce:s=250}={}){Qt(this,"width",0);Qt(this,"height",0);Qt(this,"scrollHeight",0);Qt(this,"scrollWidth",0);Qt(this,"debouncedResize");Qt(this,"wrapperResizeObserver");Qt(this,"contentResizeObserver");Qt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Qt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Qt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,i&&(this.debouncedResize=GS(this.resize,s),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},P_=class{constructor(){Qt(this,"events",{})}emit(r,...e){const i=this.events[r]||[];for(let s=0,l=i.length;s<l;s++)i[s]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(i=>e!==i)}}off(r,e){this.events[r]=this.events[r]?.filter(i=>e!==i)}destroy(){this.events={}}};const XS=100/6,Oa={passive:!1};function D0(r,e){return r===1?XS:r===2?e:1}var kS=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){Qt(this,"touchStart",{x:0,y:0});Qt(this,"lastDelta",{x:0,y:0});Qt(this,"window",{width:0,height:0});Qt(this,"emitter",new P_);Qt(this,"onTouchStart",r=>{const{clientX:e,clientY:i}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Qt(this,"onTouchMove",r=>{const{clientX:e,clientY:i}=r.targetTouches?r.targetTouches[0]:r,s=-(e-this.touchStart.x)*this.options.touchMultiplier,l=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=i,this.lastDelta={x:s,y:l},this.emitter.emit("scroll",{deltaX:s,deltaY:l,event:r})});Qt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Qt(this,"onWheel",r=>{let{deltaX:e,deltaY:i,deltaMode:s}=r;const l=D0(s,this.window.width),u=D0(s,this.window.height);e*=l,i*=u,e*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:i,event:r})});Qt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Oa),this.element.addEventListener("touchstart",this.onTouchStart,Oa),this.element.addEventListener("touchmove",this.onTouchMove,Oa),this.element.addEventListener("touchend",this.onTouchEnd,Oa)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Oa),this.element.removeEventListener("touchstart",this.onTouchStart,Oa),this.element.removeEventListener("touchmove",this.onTouchMove,Oa),this.element.removeEventListener("touchend",this.onTouchEnd,Oa)}};const U0=r=>Math.min(1,1.001-2**(-10*r));var WS=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:i=r,smoothWheel:s=!0,syncTouch:l=!1,syncTouchLerp:u=.075,touchInertiaExponent:h=1.7,duration:d,easing:m,lerp:p=.1,infinite:S=!1,orientation:_="vertical",gestureOrientation:x=_==="horizontal"?"both":"vertical",touchMultiplier:y=1,wheelMultiplier:E=1,autoResize:A=!0,prevent:M,virtualScroll:g,overscroll:N=!0,autoRaf:L=!1,anchors:w=!1,autoToggle:P=!1,allowNestedScroll:z=!1,__experimental__naiveDimensions:F=!1,naiveDimensions:X=F,stopInertiaOnNavigate:D=!1}={}){Qt(this,"_isScrolling",!1);Qt(this,"_isStopped",!1);Qt(this,"_isLocked",!1);Qt(this,"_preventNextNativeScrollEvent",!1);Qt(this,"_resetVelocityTimeout",null);Qt(this,"_rafId",null);Qt(this,"isTouching");Qt(this,"time",0);Qt(this,"userData",{});Qt(this,"lastVelocity",0);Qt(this,"velocity",0);Qt(this,"direction",0);Qt(this,"options");Qt(this,"targetScroll");Qt(this,"animatedScroll");Qt(this,"animate",new HS);Qt(this,"emitter",new P_);Qt(this,"dimensions");Qt(this,"virtualScroll");Qt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Qt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Qt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Qt(this,"onClick",r=>{const e=r.composedPath().filter(s=>s instanceof HTMLAnchorElement&&s.href).map(s=>new URL(s.href)),i=new URL(window.location.href);if(this.options.anchors){const s=e.find(l=>i.host===l.host&&i.pathname===l.pathname&&l.hash);if(s){const l=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,u=`#${s.hash.split("#")[1]}`;this.scrollTo(u,l);return}}if(this.options.stopInertiaOnNavigate&&e.some(s=>i.host===s.host&&i.pathname!==s.pathname)){this.reset();return}});Qt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Qt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:i,event:s}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:i,event:s}),s.ctrlKey||s.lenisStopPropagation)return;const l=s.type.includes("touch"),u=s.type.includes("wheel");this.isTouching=s.type==="touchstart"||s.type==="touchmove";const h=e===0&&i===0;if(this.options.syncTouch&&l&&s.type==="touchstart"&&h&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&e===0;if(h||d)return;let m=s.composedPath();m=m.slice(0,m.indexOf(this.rootElement));const p=this.options.prevent,S=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";if(m.find(E=>E instanceof HTMLElement&&(typeof p=="function"&&p?.(E)||E.hasAttribute?.("data-lenis-prevent")||S==="vertical"&&E.hasAttribute?.("data-lenis-prevent-vertical")||S==="horizontal"&&E.hasAttribute?.("data-lenis-prevent-horizontal")||l&&E.hasAttribute?.("data-lenis-prevent-touch")||u&&E.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(E,{deltaX:e,deltaY:i}))))return;if(this.isStopped||this.isLocked){s.cancelable&&s.preventDefault();return}if(!(this.options.syncTouch&&l||this.options.smoothWheel&&u)){this.isScrolling="native",this.animate.stop(),s.lenisStopPropagation=!0;return}let _=i;this.options.gestureOrientation==="both"?_=Math.abs(i)>Math.abs(e)?i:e:this.options.gestureOrientation==="horizontal"&&(_=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(s.lenisStopPropagation=!0),s.cancelable&&s.preventDefault();const x=l&&this.options.syncTouch,y=l&&s.type==="touchend";y&&(_=Math.sign(_)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+_,{programmatic:!1,...x?{lerp:y?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Qt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Qt(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=C0,window.lenis||(window.lenis={}),window.lenis.version=C0,_==="horizontal"&&(window.lenis.horizontal=!0),l===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof d=="number"&&typeof m!="function"?m=U0:typeof m=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:r,content:e,eventsTarget:i,smoothWheel:s,syncTouch:l,syncTouchLerp:u,touchInertiaExponent:h,duration:d,easing:m,lerp:p,infinite:S,gestureOrientation:x,orientation:_,touchMultiplier:y,wheelMultiplier:E,autoResize:A,prevent:M,virtualScroll:g,overscroll:N,autoRaf:L,anchors:w,autoToggle:P,allowNestedScroll:z,naiveDimensions:X,stopInertiaOnNavigate:D},this.dimensions=new VS(r,e,{autoResize:A}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new kS(i,{touchMultiplier:y,wheelMultiplier:E}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:i=!1,lock:s=!1,programmatic:l=!0,lerp:u=l?this.options.lerp:void 0,duration:h=l?this.options.duration:void 0,easing:d=l?this.options.easing:void 0,onStart:m,onComplete:p,force:S=!1,userData:_}={}){if((this.isStopped||this.isLocked)&&!S)return;let x=r,y=e;if(typeof x=="string"&&["top","left","start","#"].includes(x))x=0;else if(typeof x=="string"&&["bottom","right","end"].includes(x))x=this.limit;else{let E=null;if(typeof x=="string"?(E=document.querySelector(x),E||(x==="#top"?x=0:console.warn("Lenis: Target not found",x))):x instanceof HTMLElement&&x?.nodeType&&(E=x),E){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();y-=this.isHorizontal?w.left:w.top}const A=E.getBoundingClientRect(),M=getComputedStyle(E),g=this.isHorizontal?Number.parseFloat(M.scrollMarginLeft):Number.parseFloat(M.scrollMarginTop),N=getComputedStyle(this.rootElement),L=this.isHorizontal?Number.parseFloat(N.scrollPaddingLeft):Number.parseFloat(N.scrollPaddingTop);x=(this.isHorizontal?A.left:A.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(L)?0:L)}}if(typeof x=="number"){if(x+=y,this.options.infinite){if(l){this.targetScroll=this.animatedScroll=this.scroll;const E=x-this.animatedScroll;E>this.limit/2?x-=this.limit:E<-this.limit/2&&(x+=this.limit)}}else x=z_(0,x,this.limit);if(x===this.targetScroll){m?.(this),p?.(this);return}if(this.userData=_??{},i){this.animatedScroll=this.targetScroll=x,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}l||(this.targetScroll=x),typeof h=="number"&&typeof d!="function"?d=U0:typeof d=="function"&&typeof h!="number"&&(h=1),this.animate.fromTo(this.animatedScroll,x,{duration:h,easing:d,lerp:u,onStart:()=>{s&&(this.isLocked=!0),this.isScrolling="smooth",m?.(this)},onUpdate:(E,A)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=E-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=E,this.setScroll(this.scroll),l&&(this.targetScroll=E),A||this.emit(),A&&(this.reset(),this.emit(),p?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:i}){const s=Date.now();r._lenis||(r._lenis={});const l=r._lenis;let u,h,d,m,p,S,_,x,y,E;if(s-(l.time??0)>2e3){l.time=Date.now();const z=window.getComputedStyle(r);if(l.computedStyle=z,u=["auto","overlay","scroll"].includes(z.overflowX),h=["auto","overlay","scroll"].includes(z.overflowY),p=["auto"].includes(z.overscrollBehaviorX),S=["auto"].includes(z.overscrollBehaviorY),l.hasOverflowX=u,l.hasOverflowY=h,!(u||h))return!1;_=r.scrollWidth,x=r.scrollHeight,y=r.clientWidth,E=r.clientHeight,d=_>y,m=x>E,l.isScrollableX=d,l.isScrollableY=m,l.scrollWidth=_,l.scrollHeight=x,l.clientWidth=y,l.clientHeight=E,l.hasOverscrollBehaviorX=p,l.hasOverscrollBehaviorY=S}else d=l.isScrollableX,m=l.isScrollableY,u=l.hasOverflowX,h=l.hasOverflowY,_=l.scrollWidth,x=l.scrollHeight,y=l.clientWidth,E=l.clientHeight,p=l.hasOverscrollBehaviorX,S=l.hasOverscrollBehaviorY;if(!(u&&d||h&&m))return!1;const A=Math.abs(e)>=Math.abs(i)?"horizontal":"vertical";let M,g,N,L,w,P;if(A==="horizontal")M=Math.round(r.scrollLeft),g=_-y,N=e,L=u,w=d,P=p;else if(A==="vertical")M=Math.round(r.scrollTop),g=x-E,N=i,L=h,w=m,P=S;else return!1;return!P&&(M>=g||M<=0)?!0:(N>0?M<g:M>0)&&L&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?FS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const qS="/Deep-RL./assets/architecture-B6Ja8Kd3.webp",YS="/Deep-RL./assets/limits-Dac0oC_V.webp",jS="/Deep-RL./assets/environment-CBHmhQP7.webp",ZS="/Deep-RL./assets/features-C2xZN7mv.webp",KS="/Deep-RL./assets/ppo-DU7EG7QD.webp",QS="/Deep-RL./assets/dqn-BJrbZNAF.webp",JS="/Deep-RL./assets/loop-2CTzq-ig.webp",B_="/Deep-RL./assets/comparison-CVj0Q2Rw.webp",$S="/Deep-RL./assets/final-DHAr6iY1.webp";const wd="180",ty=0,L0=1,ey=2,I_=1,F_=2,sa=3,Wa=0,Vn=1,ra=2,Xa=0,wr=1,N0=2,O0=3,z0=4,ny=5,Ss=100,iy=101,ay=102,sy=103,ry=104,oy=200,ly=201,cy=202,uy=203,Fh=204,Hh=205,fy=206,hy=207,dy=208,py=209,my=210,gy=211,_y=212,vy=213,xy=214,Gh=0,Vh=1,Xh=2,Dr=3,kh=4,Wh=5,qh=6,Yh=7,H_=0,Sy=1,yy=2,ka=0,My=1,Ey=2,Ty=3,by=4,Ay=5,Ry=6,wy=7,G_=300,Ur=301,Lr=302,jh=303,Zh=304,Vc=306,Kh=1e3,Es=1001,Qh=1002,yi=1003,Cy=1004,oc=1005,Di=1006,ih=1007,Ts=1008,Ni=1009,V_=1010,X_=1011,Ho=1012,Cd=1013,As=1014,oa=1015,Wo=1016,Dd=1017,Ud=1018,Go=1020,k_=35902,W_=35899,q_=1021,Y_=1022,Si=1023,Vo=1026,Xo=1027,j_=1028,Ld=1029,Z_=1030,Nd=1031,Od=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,Jh=35840,$h=35841,td=35842,ed=35843,nd=36196,id=37492,ad=37496,sd=37808,rd=37809,od=37810,ld=37811,cd=37812,ud=37813,fd=37814,hd=37815,dd=37816,pd=37817,md=37818,gd=37819,_d=37820,vd=37821,xd=36492,Sd=36494,yd=36495,Md=36283,Ed=36284,Td=36285,bd=36286,Dy=3200,Uy=3201,K_=0,Ly=1,Ga="",ti="srgb",Nr="srgb-linear",Pc="linear",He="srgb",fr=7680,P0=519,Ny=512,Oy=513,zy=514,Q_=515,Py=516,By=517,Iy=518,Fy=519,B0=35044,I0="300 es",Ui=2e3,Bc=2001;class zr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ah=Math.PI/180,Ad=180/Math.PI;function qo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[i&63|128]+wn[i>>8&255]+"-"+wn[i>>16&255]+wn[i>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function ye(r,e,i){return Math.max(e,Math.min(i,r))}function Hy(r,e){return(r%e+e)%e}function sh(r,e,i){return(1-i)*r+i*e}function Lo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,i=0){Ae.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,h=this.y-e.y;return this.x=u*s-h*l+e.x,this.y=u*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yo{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],_=s[l+3];const x=u[h+0],y=u[h+1],E=u[h+2],A=u[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=E,e[i+3]=A;return}if(_!==A||m!==x||p!==y||S!==E){let M=1-d;const g=m*x+p*y+S*E+_*A,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const P=Math.sqrt(L),z=Math.atan2(P,g*N);M=Math.sin(M*z)/P,d=Math.sin(d*z)/P}const w=d*N;if(m=m*M+x*w,p=p*M+y*w,S=S*M+E*w,_=_*M+A*w,M===1-d){const P=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=P,p*=P,S*=P,_*=P}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,u,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],_=u[h],x=u[h+1],y=u[h+2],E=u[h+3];return e[i]=d*E+S*_+m*y-p*x,e[i+1]=m*E+S*x+p*_-d*y,e[i+2]=p*E+S*y+d*x-m*_,e[i+3]=S*E-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),_=d(u/2),x=m(s/2),y=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*S*_+p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_-x*y*E;break;case"YXZ":this._x=x*S*_+p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_+x*y*E;break;case"ZXY":this._x=x*S*_-p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_-x*y*E;break;case"ZYX":this._x=x*S*_-p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_+x*y*E;break;case"YZX":this._x=x*S*_+p*y*E,this._y=p*y*_+x*S*E,this._z=p*S*E-x*y*_,this._w=p*S*_-x*y*E;break;case"XZY":this._x=x*S*_-p*y*E,this._y=p*y*_-x*S*E,this._z=p*S*E+x*y*_,this._w=p*S*_+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],_=i[10],x=s+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(S-m)*y,this._y=(u-p)*y,this._z=(h-l)*y}else if(s>d&&s>_){const y=2*Math.sqrt(1+s-d-_);this._w=(S-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(u+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-s-_);this._w=(u-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+_-s-d);this._w=(h-l)/y,this._x=(u+p)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-u*m,this._y=l*S+h*m+u*d-s*p,this._z=u*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*s+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),_=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=u*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,i=0,s=0){j.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(F0.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(F0.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*s),S=2*(d*i-u*l),_=2*(u*s-h*i);return this.x=i+m*p+h*_-d*S,this.y=s+m*S+d*p-u*_,this.z=l+m*_+u*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-s*m,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(ye(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rh=new j,F0=new Yo;class fe{constructor(e,i,s,l,u,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p)}set(e,i,s,l,u,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=u,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],_=s[7],x=s[2],y=s[5],E=s[8],A=l[0],M=l[3],g=l[6],N=l[1],L=l[4],w=l[7],P=l[2],z=l[5],F=l[8];return u[0]=h*A+d*N+m*P,u[3]=h*M+d*L+m*z,u[6]=h*g+d*w+m*F,u[1]=p*A+S*N+_*P,u[4]=p*M+S*L+_*z,u[7]=p*g+S*w+_*F,u[2]=x*A+y*N+E*P,u[5]=x*M+y*L+E*z,u[8]=x*g+y*w+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-s*u*S+s*d*m+l*u*p-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],_=S*h-d*p,x=d*m-S*u,y=p*u-h*m,E=i*_+s*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(l*p-S*s)*A,e[2]=(d*s-l*h)*A,e[3]=x*A,e[4]=(S*i-l*m)*A,e[5]=(l*u-d*i)*A,e[6]=y*A,e[7]=(s*m-p*i)*A,e[8]=(h*i-s*u)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(oh.makeScale(e,i)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,i){return this.premultiply(oh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oh=new fe;function J_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ic(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gy(){const r=Ic("canvas");return r.style.display="block",r}const H0={};function ko(r){r in H0||(H0[r]=!0,console.warn(r))}function Vy(r,e,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const G0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xy(){const r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===He&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Pc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Nr]:{primaries:e,whitePoint:s,transfer:Pc,toXYZ:G0,fromXYZ:V0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:He,toXYZ:G0,fromXYZ:V0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Ce=Xy();function ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let hr;class ky{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{hr===void 0&&(hr=Ic("canvas")),hr.width=e.width,hr.height=e.height;const l=hr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=hr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ic("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=ca(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ca(i[s]/255)*255):i[s]=ca(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wy=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(lh(l[h].image)):u.push(lh(l[h]))}else u=lh(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function lh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ky.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qy=0;const ch=new j;class Xn extends zr{constructor(e=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Es,l=Es,u=Di,h=Ts,d=Si,m=Ni,p=Xn.DEFAULT_ANISOTROPY,S=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=qo(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ch).x}get height(){return this.source.getSize(ch).y}get depth(){return this.source.getSize(ch).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==G_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kh:e.x=e.x-Math.floor(e.x);break;case Es:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kh:e.y=e.y-Math.floor(e.y);break;case Es:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=G_;Xn.DEFAULT_ANISOTROPY=1;class Ge{constructor(e=0,i=0,s=0,l=1){Ge.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],S=m[4],_=m[8],x=m[1],y=m[5],E=m[9],A=m[2],M=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(_-A)<.01&&Math.abs(E-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+A)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,w=(y+1)/2,P=(g+1)/2,z=(S+x)/4,F=(_+A)/4,X=(E+M)/4;return L>w&&L>P?L<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(L),l=z/s,u=F/s):w>P?w<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),s=z/l,u=X/l):P<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(P),s=F/u,l=X/u),this.set(s,l,u,i),this}let N=Math.sqrt((M-E)*(M-E)+(_-A)*(_-A)+(x-S)*(x-S));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(_-A)/N,this.z=(x-S)/N,this.w=Math.acos((p+y+g-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ye(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yy extends zr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new Ge(0,0,e,i),this.scissorTest=!1,this.viewport=new Ge(0,0,e,i);const l={width:e,height:i,depth:s.depth},u=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new zd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Yy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class $_ extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Xn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=Es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,gi):gi.fromBufferAttribute(u,h),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),lc.copy(s.boundingBox)),lc.applyMatrix4(e.matrixWorld),this.union(lc)}const l=e.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),cc.subVectors(this.max,No),dr.subVectors(e.a,No),pr.subVectors(e.b,No),mr.subVectors(e.c,No),za.subVectors(pr,dr),Pa.subVectors(mr,pr),hs.subVectors(dr,mr);let i=[0,-za.z,za.y,0,-Pa.z,Pa.y,0,-hs.z,hs.y,za.z,0,-za.x,Pa.z,0,-Pa.x,hs.z,0,-hs.x,-za.y,za.x,0,-Pa.y,Pa.x,0,-hs.y,hs.x,0];return!uh(i,dr,pr,mr,cc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,dr,pr,mr,cc))?!1:(uc.crossVectors(za,Pa),i=[uc.x,uc.y,uc.z],uh(i,dr,pr,mr,cc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new j,new j,new j,new j,new j,new j,new j,new j],gi=new j,lc=new jo,dr=new j,pr=new j,mr=new j,za=new j,Pa=new j,hs=new j,No=new j,cc=new j,uc=new j,ds=new j;function uh(r,e,i,s,l){for(let u=0,h=r.length-3;u<=h;u+=3){ds.fromArray(r,u);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=e.dot(ds),p=i.dot(ds),S=s.dot(ds);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const Zy=new jo,Oo=new j,fh=new j;class Xc{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Zy.setFromPoints(e).getCenter(s);let l=0;for(let u=0,h=e.length;u<h;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(fh)),this.expandByPoint(Oo.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new j,hh=new j,fc=new j,Ba=new j,dh=new j,hc=new j,ph=new j;class tv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hh.copy(e).add(i).multiplyScalar(.5),fc.copy(i).sub(e).normalize(),Ba.copy(this.origin).sub(hh);const u=e.distanceTo(i)*.5,h=-this.direction.dot(fc),d=Ba.dot(this.direction),m=-Ba.dot(fc),p=Ba.lengthSq(),S=Math.abs(1-h*h);let _,x,y,E;if(S>0)if(_=h*m-d,x=h*d-m,E=u*S,_>=0)if(x>=-E)if(x<=E){const A=1/S;_*=A,x*=A,y=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x=-u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*u+d)),x=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(_=Math.max(0,-(h*u+d)),x=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+x*(x+2*m)+p);else x=h>0?-u:u,_=Math.max(0,-(h*x+d)),y=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(hh).addScaledVector(fc,x),y}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const s=ta.dot(this.direction),l=ta.dot(ta)-s*s,u=e.radius*e.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(u=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(u=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,s,l,u){dh.subVectors(i,e),hc.subVectors(s,e),ph.crossVectors(dh,hc);let h=this.direction.dot(ph),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,e);const m=d*this.direction.dot(hc.crossVectors(Ba,hc));if(m<0)return null;const p=d*this.direction.dot(dh.cross(Ba));if(p<0||m+p>h)return null;const S=-d*Ba.dot(ph);return S<0?null:this.at(S/h,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,i,s,l,u,h,d,m,p,S,_,x,y,E,A,M){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,h,d,m,p,S,_,x,y,E,A,M)}set(e,i,s,l,u,h,d,m,p,S,_,x,y,E,A,M){const g=this.elements;return g[0]=e,g[4]=i,g[8]=s,g[12]=l,g[1]=u,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=_,g[14]=x,g[3]=y,g[7]=E,g[11]=A,g[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/gr.setFromMatrixColumn(e,0).length(),u=1/gr.setFromMatrixColumn(e,1).length(),h=1/gr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const x=h*S,y=h*_,E=d*S,A=d*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=y+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,y=m*_,E=p*S,A=p*_;i[0]=x+A*d,i[4]=E*d-y,i[8]=h*p,i[1]=h*_,i[5]=h*S,i[9]=-d,i[2]=y*d-E,i[6]=A+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,y=m*_,E=p*S,A=p*_;i[0]=x-A*d,i[4]=-h*_,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*S,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,y=h*_,E=d*S,A=d*_;i[0]=m*S,i[4]=E*p-y,i[8]=x*p+A,i[1]=m*_,i[5]=A*p+x,i[9]=y*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*S,i[4]=A-x*_,i[8]=E*_+y,i[1]=_,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=y*_+E,i[10]=x-A*_}else if(e.order==="XZY"){const x=h*m,y=h*p,E=d*m,A=d*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=x*_+A,i[5]=h*S,i[9]=y*_-E,i[2]=E*_-y,i[6]=d*S,i[10]=A*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ky,e,Qy)}lookAt(e,i,s){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ia.crossVectors(s,Jn),Ia.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ia.crossVectors(s,Jn)),Ia.normalize(),dc.crossVectors(Jn,Ia),l[0]=Ia.x,l[4]=dc.x,l[8]=Jn.x,l[1]=Ia.y,l[5]=dc.y,l[9]=Jn.y,l[2]=Ia.z,l[6]=dc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],_=s[5],x=s[9],y=s[13],E=s[2],A=s[6],M=s[10],g=s[14],N=s[3],L=s[7],w=s[11],P=s[15],z=l[0],F=l[4],X=l[8],D=l[12],C=l[1],G=l[5],Z=l[9],at=l[13],ot=l[2],st=l[6],O=l[10],K=l[14],k=l[3],_t=l[7],xt=l[11],wt=l[15];return u[0]=h*z+d*C+m*ot+p*k,u[4]=h*F+d*G+m*st+p*_t,u[8]=h*X+d*Z+m*O+p*xt,u[12]=h*D+d*at+m*K+p*wt,u[1]=S*z+_*C+x*ot+y*k,u[5]=S*F+_*G+x*st+y*_t,u[9]=S*X+_*Z+x*O+y*xt,u[13]=S*D+_*at+x*K+y*wt,u[2]=E*z+A*C+M*ot+g*k,u[6]=E*F+A*G+M*st+g*_t,u[10]=E*X+A*Z+M*O+g*xt,u[14]=E*D+A*at+M*K+g*wt,u[3]=N*z+L*C+w*ot+P*k,u[7]=N*F+L*G+w*st+P*_t,u[11]=N*X+L*Z+w*O+P*xt,u[15]=N*D+L*at+w*K+P*wt,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],_=e[6],x=e[10],y=e[14],E=e[3],A=e[7],M=e[11],g=e[15];return E*(+u*m*_-l*p*_-u*d*x+s*p*x+l*d*y-s*m*y)+A*(+i*m*y-i*p*x+u*h*x-l*h*y+l*p*S-u*m*S)+M*(+i*p*_-i*d*y-u*h*_+s*h*y+u*d*S-s*p*S)+g*(-l*d*S-i*m*_+i*d*x+l*h*_-s*h*x+s*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],_=e[9],x=e[10],y=e[11],E=e[12],A=e[13],M=e[14],g=e[15],N=_*M*p-A*x*p+A*m*y-d*M*y-_*m*g+d*x*g,L=E*x*p-S*M*p-E*m*y+h*M*y+S*m*g-h*x*g,w=S*A*p-E*_*p+E*d*y-h*A*y-S*d*g+h*_*g,P=E*_*m-S*A*m-E*d*x+h*A*x+S*d*M-h*_*M,z=i*N+s*L+l*w+u*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=N*F,e[1]=(A*x*u-_*M*u-A*l*y+s*M*y+_*l*g-s*x*g)*F,e[2]=(d*M*u-A*m*u+A*l*p-s*M*p-d*l*g+s*m*g)*F,e[3]=(_*m*u-d*x*u-_*l*p+s*x*p+d*l*y-s*m*y)*F,e[4]=L*F,e[5]=(S*M*u-E*x*u+E*l*y-i*M*y-S*l*g+i*x*g)*F,e[6]=(E*m*u-h*M*u-E*l*p+i*M*p+h*l*g-i*m*g)*F,e[7]=(h*x*u-S*m*u+S*l*p-i*x*p-h*l*y+i*m*y)*F,e[8]=w*F,e[9]=(E*_*u-S*A*u-E*s*y+i*A*y+S*s*g-i*_*g)*F,e[10]=(h*A*u-E*d*u+E*s*p-i*A*p-h*s*g+i*d*g)*F,e[11]=(S*d*u-h*_*u-S*s*p+i*_*p+h*s*y-i*d*y)*F,e[12]=P*F,e[13]=(S*A*l-E*_*l+E*s*x-i*A*x-S*s*M+i*_*M)*F,e[14]=(E*d*l-h*A*l-E*s*m+i*A*m+h*s*M-i*d*M)*F,e[15]=(h*_*l-S*d*l+S*s*m-i*_*m-h*s*x+i*d*x)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=e.x,d=e.y,m=e.z,p=u*h,S=u*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,h){return this.set(1,s,u,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,S=h+h,_=d+d,x=u*p,y=u*S,E=u*_,A=h*S,M=h*_,g=d*_,N=m*p,L=m*S,w=m*_,P=s.x,z=s.y,F=s.z;return l[0]=(1-(A+g))*P,l[1]=(y+w)*P,l[2]=(E-L)*P,l[3]=0,l[4]=(y-w)*z,l[5]=(1-(x+g))*z,l[6]=(M+N)*z,l[7]=0,l[8]=(E+L)*F,l[9]=(M-N)*F,l[10]=(1-(x+A))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=gr.set(l[0],l[1],l[2]).length();const h=gr.set(l[4],l[5],l[6]).length(),d=gr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,S=1/h,_=1/d;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=S,_i.elements[5]*=S,_i.elements[6]*=S,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,i.setFromRotationMatrix(_i),s.x=u,s.y=h,s.z=d,this}makePerspective(e,i,s,l,u,h,d=Ui,m=!1){const p=this.elements,S=2*u/(i-e),_=2*u/(s-l),x=(i+e)/(i-e),y=(s+l)/(s-l);let E,A;if(m)E=u/(h-u),A=h*u/(h-u);else if(d===Ui)E=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===Bc)E=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,u,h,d=Ui,m=!1){const p=this.elements,S=2/(i-e),_=2/(s-l),x=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,A;if(m)E=1/(h-u),A=h/(h-u);else if(d===Ui)E=-2/(h-u),A=-(h+u)/(h-u);else if(d===Bc)E=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const gr=new j,_i=new Ke,Ky=new j(0,0,0),Qy=new j(1,1,1),Ia=new j,dc=new j,Jn=new j,X0=new Ke,k0=new Yo;class Oi{constructor(e=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],_=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-S,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return X0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X0,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class ev{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jy=0;const W0=new j,_r=new Yo,ea=new Ke,pc=new j,zo=new j,$y=new j,tM=new Yo,q0=new j(1,0,0),Y0=new j(0,1,0),j0=new j(0,0,1),Z0={type:"added"},eM={type:"removed"},vr={type:"childadded",child:null},mh={type:"childremoved",child:null};class An extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new j,i=new Oi,s=new Yo,l=new j(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new fe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ev,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,i){return _r.setFromAxisAngle(e,i),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(q0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(j0,e)}translateOnAxis(e,i){return W0.copy(e).applyQuaternion(this.quaternion),this.position.add(W0.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(q0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(j0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?pc.copy(e):pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(zo,pc,this.up):ea.lookAt(pc,zo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(ea),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Z0),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(eM),mh.child=e,this.dispatchEvent(mh),mh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Z0),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,$y),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,tM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(e.materials,this.material[m]));l.material=d}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),_=h(e.shapes),x=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}An.DEFAULT_UP=new j(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new j,na=new j,gh=new j,ia=new j,xr=new j,Sr=new j,K0=new j,_h=new j,vh=new j,xh=new j,Sh=new Ge,yh=new Ge,Mh=new Ge;class xi{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){vi.subVectors(l,i),na.subVectors(s,i),gh.subVectors(e,i);const h=vi.dot(vi),d=vi.dot(na),m=vi.dot(gh),p=na.dot(na),S=na.dot(gh),_=h*p-d*d;if(_===0)return u.set(0,0,0),null;const x=1/_,y=(p*m-d*S)*x,E=(h*S-d*m)*x;return u.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,s,l,u,h,d,m){return this.getBarycoord(e,i,s,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(h,ia.y),m.addScaledVector(d,ia.z),m)}static getInterpolatedAttribute(e,i,s,l,u,h){return Sh.setScalar(0),yh.setScalar(0),Mh.setScalar(0),Sh.fromBufferAttribute(e,i),yh.fromBufferAttribute(e,s),Mh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Sh,u.x),h.addScaledVector(yh,u.y),h.addScaledVector(Mh,u.z),h}static isFrontFacing(e,i,s,l){return vi.subVectors(s,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return xi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,u){return xi.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let h,d;xr.subVectors(l,s),Sr.subVectors(u,s),_h.subVectors(e,s);const m=xr.dot(_h),p=Sr.dot(_h);if(m<=0&&p<=0)return i.copy(s);vh.subVectors(e,l);const S=xr.dot(vh),_=Sr.dot(vh);if(S>=0&&_<=S)return i.copy(l);const x=m*_-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(xr,h);xh.subVectors(e,u);const y=xr.dot(xh),E=Sr.dot(xh);if(E>=0&&y<=E)return i.copy(u);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Sr,d);const M=S*E-y*_;if(M<=0&&_-S>=0&&y-E>=0)return K0.subVectors(u,l),d=(_-S)/(_-S+(y-E)),i.copy(l).addScaledVector(K0,d);const g=1/(M+A+x);return h=A*g,d=x*g,i.copy(s).addScaledVector(xr,h).addScaledVector(Sr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Eh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Me{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ce.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ce.workingColorSpace){if(e=Hy(e,1),i=ye(i,0,1),s=ye(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=Eh(h,u,e+1/3),this.g=Eh(h,u,e),this.b=Eh(h,u,e-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(e,i=ti){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ti){const s=nv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ce.workingToColorSpace(Cn.copy(this),e),Math.round(ye(Cn.r*255,0,255))*65536+Math.round(ye(Cn.g*255,0,255))*256+Math.round(ye(Cn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ce.workingColorSpace){Ce.workingToColorSpace(Cn.copy(this),i);const s=Cn.r,l=Cn.g,u=Cn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=S<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-s)/_+2;break;case u:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Ce.workingColorSpace){return Ce.workingToColorSpace(Cn.copy(this),i),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=ti){Ce.workingToColorSpace(Cn.copy(this),e);const i=Cn.r,s=Cn.g,l=Cn.b;return e!==ti?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+e,Fa.s+i,Fa.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(Fa),e.getHSL(mc);const s=sh(Fa.h,mc.h,i),l=sh(Fa.s,mc.s,i),u=sh(Fa.l,mc.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new Me;Me.NAMES=nv;let nM=0;class Pr extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=wr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Hh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Fh&&(s.blendSrc=this.blendSrc),this.blendDst!==Hh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(e.textures),h=l(e.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fc extends Pr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=H_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new j,gc=new Ae;let iM=0;class Li{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=B0,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)gc.fromBufferAttribute(this,i),gc.applyMatrix3(e),this.setXY(i,gc.x,gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(e),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B0&&(e.usage=this.usage),e}}class iv extends Li{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class av extends Li{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class fn extends Li{constructor(e,i,s){super(new Float32Array(e),i,s)}}let aM=0;const fi=new Ke,Th=new An,yr=new j,$n=new jo,Po=new jo,vn=new j;class hi extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J_(e)?av:iv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new fe().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,i,s){return fi.makeTranslation(e,i,s),this.applyMatrix4(fi),this}scale(e,i,s){return fi.makeScale(e,i,s),this.applyMatrix4(fi),this}lookAt(e){return Th.lookAt(e),Th.updateMatrix(),this.applyMatrix4(Th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new fn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Po.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors($n.min,Po.min),$n.expandByPoint(vn),vn.addVectors($n.max,Po.max),$n.expandByPoint(vn)):($n.expandByPoint(Po.min),$n.expandByPoint(Po.max))}$n.getCenter(s);let l=0;for(let u=0,h=e.count;u<h;u++)vn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)vn.fromBufferAttribute(d,p),m&&(yr.fromBufferAttribute(e,p),vn.add(yr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new j,m[X]=new j;const p=new j,S=new j,_=new j,x=new Ae,y=new Ae,E=new Ae,A=new j,M=new j;function g(X,D,C){p.fromBufferAttribute(s,X),S.fromBufferAttribute(s,D),_.fromBufferAttribute(s,C),x.fromBufferAttribute(u,X),y.fromBufferAttribute(u,D),E.fromBufferAttribute(u,C),S.sub(p),_.sub(p),y.sub(x),E.sub(x);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(A.copy(S).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(G),M.copy(_).multiplyScalar(y.x).addScaledVector(S,-E.x).multiplyScalar(G),d[X].add(A),d[D].add(A),d[C].add(A),m[X].add(M),m[D].add(M),m[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,D=N.length;X<D;++X){const C=N[X],G=C.start,Z=C.count;for(let at=G,ot=G+Z;at<ot;at+=3)g(e.getX(at+0),e.getX(at+1),e.getX(at+2))}const L=new j,w=new j,P=new j,z=new j;function F(X){P.fromBufferAttribute(l,X),z.copy(P);const D=d[X];L.copy(D),L.sub(P.multiplyScalar(P.dot(D))).normalize(),w.crossVectors(z,D);const G=w.dot(m[X])<0?-1:1;h.setXYZW(X,L.x,L.y,L.z,G)}for(let X=0,D=N.length;X<D;++X){const C=N[X],G=C.start,Z=C.count;for(let at=G,ot=G+Z;at<ot;at+=3)F(e.getX(at+0)),F(e.getX(at+1)),F(e.getX(at+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new j,u=new j,h=new j,d=new j,m=new j,p=new j,S=new j,_=new j;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),A=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),S.subVectors(h,u),_.subVectors(l,u),S.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),d.add(S),m.add(S),p.add(S),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,u),_.subVectors(l,u),S.cross(_),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)vn.fromBufferAttribute(e,i),vn.normalize(),e.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,_=d.normalized,x=new p.constructor(m.length*S);let y=0,E=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*S;for(let g=0;g<S;g++)x[E++]=p[y++]}return new Li(x,S,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new hi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let S=0,_=p.length;S<_;S++){const x=p[S],y=e(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const u=e.morphAttributes;for(const p in u){const S=[],_=u[p];for(let x=0,y=_.length;x<y;x++)S.push(_[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q0=new Ke,ps=new tv,_c=new Xc,J0=new j,vc=new j,xc=new j,Sc=new j,bh=new j,yc=new j,$0=new j,Mc=new j;class bn extends An{constructor(e=new hi,i=new Fc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(u&&d){yc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const S=d[m],_=u[m];S!==0&&(bh.fromBufferAttribute(_,e),h?yc.addScaledVector(bh,S):yc.addScaledVector(bh.sub(i),S))}i.add(yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),_c.copy(s.boundingSphere),_c.applyMatrix4(u),ps.copy(e.ray).recast(e.near),!(_c.containsPoint(ps.origin)===!1&&(ps.intersectSphere(_c,J0)===null||ps.origin.distanceToSquared(J0)>(e.far-e.near)**2))&&(Q0.copy(u).invert(),ps.copy(e.ray).applyMatrix4(Q0),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ps)))}_computeIntersections(e,i,s){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,S=u.attributes.uv1,_=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],g=h[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let w=N,P=L;w<P;w+=3){const z=d.getX(w),F=d.getX(w+1),X=d.getX(w+2);l=Ec(this,g,e,s,p,S,_,z,F,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let M=E,g=A;M<g;M+=3){const N=d.getX(M),L=d.getX(M+1),w=d.getX(M+2);l=Ec(this,h,e,s,p,S,_,N,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const M=x[E],g=h[M.materialIndex],N=Math.max(M.start,y.start),L=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let w=N,P=L;w<P;w+=3){const z=w,F=w+1,X=w+2;l=Ec(this,g,e,s,p,S,_,z,F,X),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let M=E,g=A;M<g;M+=3){const N=M,L=M+1,w=M+2;l=Ec(this,h,e,s,p,S,_,N,L,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function sM(r,e,i,s,l,u,h,d){let m;if(e.side===Vn?m=s.intersectTriangle(h,u,l,!0,d):m=s.intersectTriangle(l,u,h,e.side===Wa,d),m===null)return null;Mc.copy(d),Mc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Mc);return p<i.near||p>i.far?null:{distance:p,point:Mc.clone(),object:r}}function Ec(r,e,i,s,l,u,h,d,m,p){r.getVertexPosition(d,vc),r.getVertexPosition(m,xc),r.getVertexPosition(p,Sc);const S=sM(r,e,i,s,vc,xc,Sc,$0);if(S){const _=new j;xi.getBarycoord($0,vc,xc,Sc,_),l&&(S.uv=xi.getInterpolatedAttribute(l,d,m,p,_,new Ae)),u&&(S.uv1=xi.getInterpolatedAttribute(u,d,m,p,_,new Ae)),h&&(S.normal=xi.getInterpolatedAttribute(h,d,m,p,_,new j),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new j,materialIndex:0};xi.getNormal(vc,xc,Sc,x.normal),S.face=x,S.barycoord=_}return S}class ws extends hi{constructor(e=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],S=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,s,i,e,h,u,0),E("z","y","x",1,-1,s,i,-e,h,u,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,u,4),E("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new fn(p,3)),this.setAttribute("normal",new fn(S,3)),this.setAttribute("uv",new fn(_,2));function E(A,M,g,N,L,w,P,z,F,X,D){const C=w/F,G=P/X,Z=w/2,at=P/2,ot=z/2,st=F+1,O=X+1;let K=0,k=0;const _t=new j;for(let xt=0;xt<O;xt++){const wt=xt*G-at;for(let Mt=0;Mt<st;Mt++){const Rt=Mt*C-Z;_t[A]=Rt*N,_t[M]=wt*L,_t[g]=ot,p.push(_t.x,_t.y,_t.z),_t[A]=0,_t[M]=0,_t[g]=z>0?1:-1,S.push(_t.x,_t.y,_t.z),_.push(Mt/F),_.push(1-xt/X),K+=1}}for(let xt=0;xt<X;xt++)for(let wt=0;wt<F;wt++){const Mt=x+wt+st*xt,Rt=x+wt+st*(xt+1),jt=x+(wt+1)+st*(xt+1),ne=x+(wt+1)+st*xt;m.push(Mt,Rt,ne),m.push(Rt,jt,ne),k+=6}d.addGroup(y,k,D),y+=k,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function On(r){const e={};for(let i=0;i<r.length;i++){const s=Or(r[i]);for(const l in s)e[l]=s[l]}return e}function rM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function sv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ce.workingColorSpace}const oM={clone:Or,merge:On};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qa extends Pr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class rv extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new j,t_=new Ae,e_=new Ae;class ei extends rv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ah*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(ah*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-e/Ha.z)}getViewSize(e,i){return this.getViewBounds(e,t_,e_),i.subVectors(e_,t_)}setViewOffset(e,i,s,l,u,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ah*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,Er=1;class uM extends An{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ei(Mr,Er,e,i);l.layers=this.layers,this.add(l);const u=new ei(Mr,Er,e,i);u.layers=this.layers,this.add(u);const h=new ei(Mr,Er,e,i);h.layers=this.layers,this.add(h);const d=new ei(Mr,Er,e,i);d.layers=this.layers,this.add(d);const m=new ei(Mr,Er,e,i);m.layers=this.layers,this.add(m);const p=new ei(Mr,Er,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ui)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,S]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,l),e.render(i,S),e.setRenderTarget(_,x,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class ov extends Xn{constructor(e=[],i=Ur,s,l,u,h,d,m,p,S){super(e,i,s,l,u,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Rs{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new ov(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ws(5,5,5),u=new qa({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Xa});u.uniforms.tEquirect.value=i;const h=new bn(l,u),d=i.minFilter;return i.minFilter===Ts&&(i.minFilter=Di),new uM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const u=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(u)}}class Va extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const A of e.hand.values()){const M=i.getJointPose(A,s),g=this._getHandJoint(p,A);M!==null&&(g.matrix.fromArray(M.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=M.radius),g.visible=M!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=S.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Va;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class Pd{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=i}clone(){return new Pd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Rh=new j,pM=new j,mM=new fe;class vs{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Rh.subVectors(s,i).cross(pM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Rh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||mM.getNormalMatrix(e),l=this.coplanarPoint(Rh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Xc,gM=new Ae(.5,.5),Tc=new j;class Bd{constructor(e=new vs,i=new vs,s=new vs,l=new vs,u=new vs,h=new vs){this.planes=[e,i,s,l,u,h]}set(e,i,s,l,u,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Ui,s=!1){const l=this.planes,u=e.elements,h=u[0],d=u[1],m=u[2],p=u[3],S=u[4],_=u[5],x=u[6],y=u[7],E=u[8],A=u[9],M=u[10],g=u[11],N=u[12],L=u[13],w=u[14],P=u[15];if(l[0].setComponents(p-h,y-S,g-E,P-N).normalize(),l[1].setComponents(p+h,y+S,g+E,P+N).normalize(),l[2].setComponents(p+d,y+_,g+A,P+L).normalize(),l[3].setComponents(p-d,y-_,g-A,P-L).normalize(),s)l[4].setComponents(m,x,M,w).normalize(),l[5].setComponents(p-m,y-x,g-M,P-w).normalize();else if(l[4].setComponents(p-m,y-x,g-M,P-w).normalize(),i===Ui)l[5].setComponents(p+m,y+x,g+M,P+w).normalize();else if(i===Bc)l[5].setComponents(m,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const i=gM.distanceTo(e.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends Pr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new j,Gc=new j,n_=new Ke,Bo=new tv,bc=new Xc,wh=new j,i_=new j;class _M extends An{constructor(e=new hi,i=new lv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)Hc.fromBufferAttribute(i,l-1),Gc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Hc.distanceTo(Gc);e.setAttribute("lineDistance",new fn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=u,e.ray.intersectsSphere(bc)===!1)return;n_.copy(l).invert(),Bo.copy(e.ray).applyMatrix4(n_);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,x=s.attributes.position;if(S!==null){const y=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=p){const g=S.getX(A),N=S.getX(A+1),L=Ac(this,e,Bo,m,g,N,A);L&&i.push(L)}if(this.isLineLoop){const A=S.getX(E-1),M=S.getX(y),g=Ac(this,e,Bo,m,A,M,E-1);g&&i.push(g)}}else{const y=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=y,M=E-1;A<M;A+=p){const g=Ac(this,e,Bo,m,A,A+1,A);g&&i.push(g)}if(this.isLineLoop){const A=Ac(this,e,Bo,m,E-1,y,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ac(r,e,i,s,l,u,h){const d=r.geometry.attributes.position;if(Hc.fromBufferAttribute(d,l),Gc.fromBufferAttribute(d,u),i.distanceSqToSegment(Hc,Gc,wh,i_)>s)return;wh.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(wh);if(!(p<e.near||p>e.far))return{distance:p,point:i_.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const a_=new j,s_=new j;class vM extends _M{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)a_.fromBufferAttribute(i,l),s_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+a_.distanceTo(s_);e.setAttribute("lineDistance",new fn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cv extends Xn{constructor(e,i,s=As,l,u,h,d=yi,m=yi,p,S=Vo,_=1){if(S!==Vo&&S!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:_};super(x,l,u,h,d,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class uv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Id extends hi{constructor(e=1,i=1,s=1,l=32,u=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),u=Math.floor(u);const S=[],_=[],x=[],y=[];let E=0;const A=[],M=s/2;let g=0;N(),h===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(S),this.setAttribute("position",new fn(_,3)),this.setAttribute("normal",new fn(x,3)),this.setAttribute("uv",new fn(y,2));function N(){const w=new j,P=new j;let z=0;const F=(i-e)/s;for(let X=0;X<=u;X++){const D=[],C=X/u,G=C*(i-e)+e;for(let Z=0;Z<=l;Z++){const at=Z/l,ot=at*m+d,st=Math.sin(ot),O=Math.cos(ot);P.x=G*st,P.y=-C*s+M,P.z=G*O,_.push(P.x,P.y,P.z),w.set(st,F,O).normalize(),x.push(w.x,w.y,w.z),y.push(at,1-C),D.push(E++)}A.push(D)}for(let X=0;X<l;X++)for(let D=0;D<u;D++){const C=A[D][X],G=A[D+1][X],Z=A[D+1][X+1],at=A[D][X+1];(e>0||D!==0)&&(S.push(C,G,at),z+=3),(i>0||D!==u-1)&&(S.push(G,Z,at),z+=3)}p.addGroup(g,z,0),g+=z}function L(w){const P=E,z=new Ae,F=new j;let X=0;const D=w===!0?e:i,C=w===!0?1:-1;for(let Z=1;Z<=l;Z++)_.push(0,M*C,0),x.push(0,C,0),y.push(.5,.5),E++;const G=E;for(let Z=0;Z<=l;Z++){const ot=Z/l*m+d,st=Math.cos(ot),O=Math.sin(ot);F.x=D*O,F.y=M*C,F.z=D*st,_.push(F.x,F.y,F.z),x.push(0,C,0),z.x=st*.5+.5,z.y=O*.5*C+.5,y.push(z.x,z.y),E++}for(let Z=0;Z<l;Z++){const at=P+Z,ot=G+Z;w===!0?S.push(ot,ot+1,at):S.push(ot+1,ot,at),X+=3}p.addGroup(g,X,w===!0?1:2),g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fd extends Id{constructor(e=1,i=1,s=32,l=1,u=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,u,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Fd(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends hi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,_=e/d,x=i/m,y=[],E=[],A=[],M=[];for(let g=0;g<S;g++){const N=g*x-h;for(let L=0;L<p;L++){const w=L*_-u;E.push(w,-N,0),A.push(0,0,1),M.push(L/d),M.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const L=N+p*g,w=N+p*(g+1),P=N+1+p*(g+1),z=N+1+p*g;y.push(L,w,z),y.push(w,P,z)}this.setIndex(y),this.setAttribute("position",new fn(E,3)),this.setAttribute("normal",new fn(A,3)),this.setAttribute("uv",new fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ko extends hi{constructor(e=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const S=[],_=new j,x=new j,y=[],E=[],A=[],M=[];for(let g=0;g<=s;g++){const N=[],L=g/s;let w=0;g===0&&h===0?w=.5/i:g===s&&m===Math.PI&&(w=-.5/i);for(let P=0;P<=i;P++){const z=P/i;_.x=-e*Math.cos(l+z*u)*Math.sin(h+L*d),_.y=e*Math.cos(h+L*d),_.z=e*Math.sin(l+z*u)*Math.sin(h+L*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),A.push(x.x,x.y,x.z),M.push(z+w,1-L),N.push(p++)}S.push(N)}for(let g=0;g<s;g++)for(let N=0;N<i;N++){const L=S[g][N+1],w=S[g][N],P=S[g+1][N],z=S[g+1][N+1];(g!==0||h>0)&&y.push(L,w,z),(g!==s-1||m<Math.PI)&&y.push(w,P,z)}this.setIndex(y),this.setAttribute("position",new fn(E,3)),this.setAttribute("normal",new fn(A,3)),this.setAttribute("uv",new fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hd extends hi{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],S=new j,_=new j,x=new j;for(let y=0;y<=s;y++)for(let E=0;E<=l;E++){const A=E/l*u,M=y/s*Math.PI*2;_.x=(e+i*Math.cos(M))*Math.cos(A),_.y=(e+i*Math.cos(M))*Math.sin(A),_.z=i*Math.sin(M),d.push(_.x,_.y,_.z),S.x=e*Math.cos(A),S.y=e*Math.sin(A),x.subVectors(_,S).normalize(),m.push(x.x,x.y,x.z),p.push(E/l),p.push(y/s)}for(let y=1;y<=s;y++)for(let E=1;E<=l;E++){const A=(l+1)*y+E-1,M=(l+1)*(y-1)+E-1,g=(l+1)*(y-1)+E,N=(l+1)*y+E;h.push(A,M,N),h.push(M,g,N)}this.setIndex(h),this.setAttribute("position",new fn(d,3)),this.setAttribute("normal",new fn(m,3)),this.setAttribute("uv",new fn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ys extends Pr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K_,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xM extends Pr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SM extends Pr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gd extends An{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Ch=new Ke,r_=new j,o_=new j;class fv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;r_.setFromMatrixPosition(e.matrixWorld),i.position.copy(r_),o_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(o_),i.updateMatrixWorld(),Ch.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Ch)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const l_=new Ke,Io=new j,Dh=new j;class yM extends fv{constructor(){super(new ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new Ge(2,1,1,1),new Ge(0,1,1,1),new Ge(3,1,1,1),new Ge(1,1,1,1),new Ge(3,0,1,1),new Ge(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,i=0){const s=this.camera,l=this.matrix,u=e.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Io.setFromMatrixPosition(e.matrixWorld),s.position.copy(Io),Dh.copy(s.position),Dh.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Dh),s.updateMatrixWorld(),l.makeTranslation(-Io.x,-Io.y,-Io.z),l_.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l_,s.coordinateSystem,s.reversedDepth)}}class Uh extends Gd{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new yM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hv extends rv{constructor(e=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,h=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MM extends fv{constructor(){super(new hv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class EM extends Gd{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new MM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TM extends Gd{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bM extends ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class AM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}class RM extends vM{constructor(e=10,i=10,s=4473924,l=8947848){s=new Me(s),l=new Me(l);const u=i/2,h=e/i,d=e/2,m=[],p=[];for(let x=0,y=0,E=-d;x<=i;x++,E+=h){m.push(-d,0,E,d,0,E),m.push(E,0,-d,E,0,d);const A=x===u?s:l;A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3,A.toArray(p,y),y+=3}const S=new hi;S.setAttribute("position",new fn(m,3)),S.setAttribute("color",new fn(p,3));const _=new lv({vertexColors:!0,toneMapped:!1});super(S,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function c_(r,e,i,s){const l=wM(s);switch(i){case q_:return r*e;case j_:return r*e/l.components*l.byteLength;case Ld:return r*e/l.components*l.byteLength;case Z_:return r*e*2/l.components*l.byteLength;case Nd:return r*e*2/l.components*l.byteLength;case Y_:return r*e*3/l.components*l.byteLength;case Si:return r*e*4/l.components*l.byteLength;case Od:return r*e*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $h:case ed:return Math.max(r,16)*Math.max(e,8)/4;case Jh:case td:return Math.max(r,8)*Math.max(e,8)/2;case nd:case id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ud:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case dd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xd:case Sd:case yd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Md:case Ed:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Td:case bd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function wM(r){switch(r){case Ni:case V_:return{byteLength:1,components:1};case Ho:case X_:case Wo:return{byteLength:2,components:1};case Dd:case Ud:return{byteLength:2,components:4};case As:case Cd:case oa:return{byteLength:4,components:1};case k_:case W_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);function dv(){let r=null,e=!1,i=null,s=null;function l(u,h){i(u,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function CM(r){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,S),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const S=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,S);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];r.bufferSubData(p,A.start*S.BYTES_PER_ELEMENT,S,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var DM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,UM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,GM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,XM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rE="gl_FragColor = linearToOutputTexel( gl_FragColor );",oE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_E=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ME=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$E=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,hT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ST=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ET=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,PT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$T=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ab=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:DM,alphahash_pars_fragment:UM,alphamap_fragment:LM,alphamap_pars_fragment:NM,alphatest_fragment:OM,alphatest_pars_fragment:zM,aomap_fragment:PM,aomap_pars_fragment:BM,batching_pars_vertex:IM,batching_vertex:FM,begin_vertex:HM,beginnormal_vertex:GM,bsdfs:VM,iridescence_fragment:XM,bumpmap_pars_fragment:kM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:YM,clipping_planes_vertex:jM,color_fragment:ZM,color_pars_fragment:KM,color_pars_vertex:QM,color_vertex:JM,common:$M,cube_uv_reflection_fragment:tE,defaultnormal_vertex:eE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:aE,emissivemap_pars_fragment:sE,colorspace_fragment:rE,colorspace_pars_fragment:oE,envmap_fragment:lE,envmap_common_pars_fragment:cE,envmap_pars_fragment:uE,envmap_pars_vertex:fE,envmap_physical_pars_fragment:ME,envmap_vertex:hE,fog_vertex:dE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:_E,lightmap_pars_fragment:vE,lights_lambert_fragment:xE,lights_lambert_pars_fragment:SE,lights_pars_begin:yE,lights_toon_fragment:EE,lights_toon_pars_fragment:TE,lights_phong_fragment:bE,lights_phong_pars_fragment:AE,lights_physical_fragment:RE,lights_physical_pars_fragment:wE,lights_fragment_begin:CE,lights_fragment_maps:DE,lights_fragment_end:UE,logdepthbuf_fragment:LE,logdepthbuf_pars_fragment:NE,logdepthbuf_pars_vertex:OE,logdepthbuf_vertex:zE,map_fragment:PE,map_pars_fragment:BE,map_particle_fragment:IE,map_particle_pars_fragment:FE,metalnessmap_fragment:HE,metalnessmap_pars_fragment:GE,morphinstance_vertex:VE,morphcolor_vertex:XE,morphnormal_vertex:kE,morphtarget_pars_vertex:WE,morphtarget_vertex:qE,normal_fragment_begin:YE,normal_fragment_maps:jE,normal_pars_fragment:ZE,normal_pars_vertex:KE,normal_vertex:QE,normalmap_pars_fragment:JE,clearcoat_normal_fragment_begin:$E,clearcoat_normal_fragment_maps:tT,clearcoat_pars_fragment:eT,iridescence_pars_fragment:nT,opaque_fragment:iT,packing:aT,premultiplied_alpha_fragment:sT,project_vertex:rT,dithering_fragment:oT,dithering_pars_fragment:lT,roughnessmap_fragment:cT,roughnessmap_pars_fragment:uT,shadowmap_pars_fragment:fT,shadowmap_pars_vertex:hT,shadowmap_vertex:dT,shadowmask_pars_fragment:pT,skinbase_vertex:mT,skinning_pars_vertex:gT,skinning_vertex:_T,skinnormal_vertex:vT,specularmap_fragment:xT,specularmap_pars_fragment:ST,tonemapping_fragment:yT,tonemapping_pars_fragment:MT,transmission_fragment:ET,transmission_pars_fragment:TT,uv_pars_fragment:bT,uv_pars_vertex:AT,uv_vertex:RT,worldpos_vertex:wT,background_vert:CT,background_frag:DT,backgroundCube_vert:UT,backgroundCube_frag:LT,cube_vert:NT,cube_frag:OT,depth_vert:zT,depth_frag:PT,distanceRGBA_vert:BT,distanceRGBA_frag:IT,equirect_vert:FT,equirect_frag:HT,linedashed_vert:GT,linedashed_frag:VT,meshbasic_vert:XT,meshbasic_frag:kT,meshlambert_vert:WT,meshlambert_frag:qT,meshmatcap_vert:YT,meshmatcap_frag:jT,meshnormal_vert:ZT,meshnormal_frag:KT,meshphong_vert:QT,meshphong_frag:JT,meshphysical_vert:$T,meshphysical_frag:tb,meshtoon_vert:eb,meshtoon_frag:nb,points_vert:ib,points_frag:ab,shadow_vert:sb,shadow_frag:rb,sprite_vert:ob,sprite_frag:lb},Ut={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ci={basic:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:On([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:On([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:On([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Me(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:On([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:On([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:On([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:On([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:On([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:On([Ut.common,Ut.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:On([Ut.lights,Ut.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Rc={r:0,b:0,g:0},gs=new Oi,cb=new Ke;function ub(r,e,i,s,l,u,h){const d=new Me(0);let m=u===!0?0:1,p,S,_=null,x=0,y=null;function E(L){let w=L.isScene===!0?L.background:null;return w&&w.isTexture&&(w=(L.backgroundBlurriness>0?i:e).get(w)),w}function A(L){let w=!1;const P=E(L);P===null?g(d,m):P&&P.isColor&&(g(P,1),w=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(L,w){const P=E(w);P&&(P.isCubeTexture||P.mapping===Vc)?(S===void 0&&(S=new bn(new ws(1,1,1),new qa({name:"BackgroundCubeMaterial",uniforms:Or(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(z,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),gs.copy(w.backgroundRotation),gs.x*=-1,gs.y*=-1,gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),S.material.uniforms.envMap.value=P,S.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(gs)),S.material.toneMapped=Ce.getTransfer(P.colorSpace)!==He,(_!==P||x!==P.version||y!==r.toneMapping)&&(S.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new bn(new Zo(2,2),new qa({name:"BackgroundMaterial",uniforms:Or(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(P.colorSpace)!==He,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,y=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,w){L.getRGB(Rc,sv(r)),s.buffers.color.setClear(Rc.r,Rc.g,Rc.b,w,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,w=1){d.set(L),m=w,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:A,addToRenderList:M,dispose:N}}function fb(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(C,G,Z,at,ot){let st=!1;const O=_(at,Z,G);u!==O&&(u=O,p(u.object)),st=y(C,at,Z,ot),st&&E(C,at,Z,ot),ot!==null&&e.update(ot,r.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,w(C,G,Z,at),ot!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ot).buffer))}function m(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function S(C){return r.deleteVertexArray(C)}function _(C,G,Z){const at=Z.wireframe===!0;let ot=s[C.id];ot===void 0&&(ot={},s[C.id]=ot);let st=ot[G.id];st===void 0&&(st={},ot[G.id]=st);let O=st[at];return O===void 0&&(O=x(m()),st[at]=O),O}function x(C){const G=[],Z=[],at=[];for(let ot=0;ot<i;ot++)G[ot]=0,Z[ot]=0,at[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Z,attributeDivisors:at,object:C,attributes:{},index:null}}function y(C,G,Z,at){const ot=u.attributes,st=G.attributes;let O=0;const K=Z.getAttributes();for(const k in K)if(K[k].location>=0){const xt=ot[k];let wt=st[k];if(wt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(wt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(wt=C.instanceColor)),xt===void 0||xt.attribute!==wt||wt&&xt.data!==wt.data)return!0;O++}return u.attributesNum!==O||u.index!==at}function E(C,G,Z,at){const ot={},st=G.attributes;let O=0;const K=Z.getAttributes();for(const k in K)if(K[k].location>=0){let xt=st[k];xt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const wt={};wt.attribute=xt,xt&&xt.data&&(wt.data=xt.data),ot[k]=wt,O++}u.attributes=ot,u.attributesNum=O,u.index=at}function A(){const C=u.newAttributes;for(let G=0,Z=C.length;G<Z;G++)C[G]=0}function M(C){g(C,0)}function g(C,G){const Z=u.newAttributes,at=u.enabledAttributes,ot=u.attributeDivisors;Z[C]=1,at[C]===0&&(r.enableVertexAttribArray(C),at[C]=1),ot[C]!==G&&(r.vertexAttribDivisor(C,G),ot[C]=G)}function N(){const C=u.newAttributes,G=u.enabledAttributes;for(let Z=0,at=G.length;Z<at;Z++)G[Z]!==C[Z]&&(r.disableVertexAttribArray(Z),G[Z]=0)}function L(C,G,Z,at,ot,st,O){O===!0?r.vertexAttribIPointer(C,G,Z,ot,st):r.vertexAttribPointer(C,G,Z,at,ot,st)}function w(C,G,Z,at){A();const ot=at.attributes,st=Z.getAttributes(),O=G.defaultAttributeValues;for(const K in st){const k=st[K];if(k.location>=0){let _t=ot[K];if(_t===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor)),_t!==void 0){const xt=_t.normalized,wt=_t.itemSize,Mt=e.get(_t);if(Mt===void 0)continue;const Rt=Mt.buffer,jt=Mt.type,ne=Mt.bytesPerElement,ut=jt===r.INT||jt===r.UNSIGNED_INT||_t.gpuType===Cd;if(_t.isInterleavedBufferAttribute){const dt=_t.data,Nt=dt.stride,Zt=_t.offset;if(dt.isInstancedInterleavedBuffer){for(let Vt=0;Vt<k.locationSize;Vt++)g(k.location+Vt,dt.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Vt=0;Vt<k.locationSize;Vt++)M(k.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let Vt=0;Vt<k.locationSize;Vt++)L(k.location+Vt,wt/k.locationSize,jt,xt,Nt*ne,(Zt+wt/k.locationSize*Vt)*ne,ut)}else{if(_t.isInstancedBufferAttribute){for(let dt=0;dt<k.locationSize;dt++)g(k.location+dt,_t.meshPerAttribute);C.isInstancedMesh!==!0&&at._maxInstanceCount===void 0&&(at._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let dt=0;dt<k.locationSize;dt++)M(k.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Rt);for(let dt=0;dt<k.locationSize;dt++)L(k.location+dt,wt/k.locationSize,jt,xt,wt*ne,wt/k.locationSize*dt*ne,ut)}}else if(O!==void 0){const xt=O[K];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(k.location,xt);break;case 3:r.vertexAttrib3fv(k.location,xt);break;case 4:r.vertexAttrib4fv(k.location,xt);break;default:r.vertexAttrib1fv(k.location,xt)}}}}N()}function P(){X();for(const C in s){const G=s[C];for(const Z in G){const at=G[Z];for(const ot in at)S(at[ot].object),delete at[ot];delete G[Z]}delete s[C]}}function z(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const Z in G){const at=G[Z];for(const ot in at)S(at[ot].object),delete at[ot];delete G[Z]}delete s[C.id]}function F(C){for(const G in s){const Z=s[G];if(Z[C.id]===void 0)continue;const at=Z[C.id];for(const ot in at)S(at[ot].object),delete at[ot];delete Z[C.id]}}function X(){D(),h=!0,u!==l&&(u=l,p(u.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:D,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:M,disableUnusedAttributes:N}}function hb(r,e,i){let s;function l(p){s=p}function u(p,S){r.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,_){_!==0&&(r.drawArraysInstanced(s,p,S,_),i.update(S,s,_))}function d(p,S,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,_);let y=0;for(let E=0;E<_;E++)y+=S[E];i.update(y,s,1)}function m(p,S,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)h(p[E],S[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,S,0,x,0,_);let E=0;for(let A=0;A<_;A++)E+=S[A]*x[A];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function db(r,e,i,s){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Si&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const X=F===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==oa&&!X)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:M,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:w,vertexTextures:P,maxSamples:z}}function pb(r){const e=this;let i=null,s=0,l=!1,u=!1;const h=new vs,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||s!==0||l;return l=x,s=_.length,y},this.beginShadows=function(){u=!0,S(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,g=r.get(_);if(!l||E===null||E.length===0||u&&!M)u?S(null):p();else{const N=u?0:s,L=N*4;let w=g.clippingState||null;m.value=w,w=S(E,x,L,y);for(let P=0;P!==L;++P)w[P]=i[P];g.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,x,y,E){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,E!==!0||M===null){const g=y+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<g)&&(M=new Float32Array(g));for(let L=0,w=y;L!==A;++L,w+=4)h.copy(_[L]).applyMatrix4(N,d),h.normal.toArray(M,w),M[w+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function mb(r){let e=new WeakMap;function i(h,d){return d===jh?h.mapping=Ur:d===Zh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===jh||d===Zh)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new fM(m.height);return p.fromEquirectangularTexture(r,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}const Rr=4,u_=[.125,.215,.35,.446,.526,.582],Ms=20,Lh=new hv,f_=new Me;let Nh=null,Oh=0,zh=0,Ph=!1;const xs=(1+Math.sqrt(5))/2,Tr=1/xs,h_=[new j(-xs,Tr,0),new j(xs,Tr,0),new j(-Tr,0,xs),new j(Tr,0,xs),new j(0,xs,-Tr),new j(0,xs,Tr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)],gb=new j;class d_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=gb}=u;Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nh,Oh,zh),this._renderer.xr.enabled=Ph,e.scissorTest=!1,wc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ur||e.mapping===Lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),zh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:Wo,format:Si,colorSpace:Nr,depthBuffer:!1},l=p_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_b(u)),this._blurMaterial=vb(u,e,i)}return l}_compileMaterial(e){const i=new bn(this._lodPlanes[0],e);this._renderer.compile(i,Lh)}_sceneToCubeUV(e,i,s,l,u){const m=new ei(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(f_),_.toneMapping=ka,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new Fc({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),M=new bn(new ws,A);let g=!1;const N=e.background;N?N.isColor&&(A.color.copy(N),e.background=null,g=!0):(A.color.copy(f_),g=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+S[L],u.y,u.z)):w===1?(m.up.set(0,0,p[L]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+S[L],u.z)):(m.up.set(0,p[L],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+S[L]));const P=this._cubeSize;wc(l,w*P,L>2?P:0,P,P),_.setRenderTarget(l),g&&_.render(M,m),_.render(e,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=y,_.autoClear=x,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Ur||e.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=g_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m_());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new bn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Lh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=h_[(l-u-1)%h_.length];this._blur(e,u-1,u,h,d)}i.autoClear=s}_blur(e,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",u),this._halfBlur(h,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,_=new bn(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Ms-1),A=u/E,M=isFinite(u)?1+Math.floor(S*A):Ms;M>Ms&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ms}`);const g=[];let N=0;for(let F=0;F<Ms;++F){const X=F/A,D=Math.exp(-X*X/2);g.push(D),F===0?N+=D:F<M&&(N+=2*D)}for(let F=0;F<g.length;F++)g[F]=g[F]/N;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const w=this._sizeLods[l],P=3*w*(l>L-Rr?l-L+Rr:0),z=4*(this._cubeSize-w);wc(i,P,z,3*w,2*w),m.setRenderTarget(i),m.render(_,Lh)}}function _b(r){const e=[],i=[],s=[];let l=r;const u=r-Rr+1+u_.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Rr?m=u_[h-r+Rr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,_=1+p,x=[S,S,_,S,_,_,S,S,_,_,S,_],y=6,E=6,A=3,M=2,g=1,N=new Float32Array(A*E*y),L=new Float32Array(M*E*y),w=new Float32Array(g*E*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,X=z>2?0:-1,D=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];N.set(D,A*E*z),L.set(x,M*E*z);const C=[z,z,z,z,z,z];w.set(C,g*E*z)}const P=new hi;P.setAttribute("position",new Li(N,A)),P.setAttribute("uv",new Li(L,M)),P.setAttribute("faceIndex",new Li(w,g)),e.push(P),l>Rr&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function p_(r,e,i){const s=new Rs(r,e,i);return s.texture.mapping=Vc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function vb(r,e,i){const s=new Float32Array(Ms),l=new j(0,1,0);return new qa({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function m_(){return new qa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function g_(){return new qa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Vd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xb(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===jh||m===Zh,S=m===Ur||m===Lr;if(p||S){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new d_(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new d_(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Sb(r){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function yb(r,e,i,s){const l={},u=new WeakMap;function h(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const N=y.array;A=y.version;for(let L=0,w=N.length;L<w;L+=3){const P=N[L+0],z=N[L+1],F=N[L+2];x.push(P,z,z,F,F,P)}}else if(E!==void 0){const N=E.array;A=E.version;for(let L=0,w=N.length/3-1;L<w;L+=3){const P=L+0,z=L+1,F=L+2;x.push(P,z,z,F,F,P)}}else return;const M=new(J_(x)?av:iv)(x,1);M.version=A;const g=u.get(_);g&&e.remove(g),u.set(_,M)}function S(_){const x=u.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:S}}function Mb(r,e,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,y){r.drawElements(s,y,u,x*h),i.update(y,s,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(s,y,u,x*h,E),i.update(y,s,E))}function S(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,E);let M=0;for(let g=0;g<E;g++)M+=y[g];i.update(M,s,1)}function _(x,y,E,A){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let g=0;g<x.length;g++)p(x[g]/h,y[g],A[g]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,A,0,E);let g=0;for(let N=0;N<E;N++)g+=y[N]*A[N];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=_}function Eb(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Tb(r,e,i){const s=new WeakMap,l=new Ge;function u(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let D=function(){F.dispose(),s.delete(d),d.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const y=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,M=d.morphAttributes.position||[],g=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;y===!0&&(L=1),E===!0&&(L=2),A===!0&&(L=3);let w=d.attributes.position.count*L,P=1;w>e.maxTextureSize&&(P=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const z=new Float32Array(w*P*4*_),F=new $_(z,w,P,_);F.type=oa,F.needsUpdate=!0;const X=L*4;for(let C=0;C<_;C++){const G=M[C],Z=g[C],at=N[C],ot=w*P*4*C;for(let st=0;st<G.count;st++){const O=st*X;y===!0&&(l.fromBufferAttribute(G,st),z[ot+O+0]=l.x,z[ot+O+1]=l.y,z[ot+O+2]=l.z,z[ot+O+3]=0),E===!0&&(l.fromBufferAttribute(Z,st),z[ot+O+4]=l.x,z[ot+O+5]=l.y,z[ot+O+6]=l.z,z[ot+O+7]=0),A===!0&&(l.fromBufferAttribute(at,st),z[ot+O+8]=l.x,z[ot+O+9]=l.y,z[ot+O+10]=l.z,z[ot+O+11]=at.itemSize===4?l.w:1)}}x={count:_,texture:F,size:new Ae(w,P)},s.set(d,x),d.addEventListener("dispose",D)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let y=0;for(let A=0;A<p.length;A++)y+=p[A];const E=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function bb(r,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,S=m.geometry,_=e.get(m,S);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const pv=new Xn,__=new cv(1,1),mv=new $_,gv=new jy,_v=new ov,v_=[],x_=[],S_=new Float32Array(16),y_=new Float32Array(9),M_=new Float32Array(4);function Br(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let u=v_[l];if(u===void 0&&(u=new Float32Array(l),v_[l]=u),e!==0){s.toArray(u,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(u,d)}return u}function pn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function kc(r,e){let i=x_[e];i===void 0&&(i=new Int32Array(e),x_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function Ab(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function Rb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2fv(this.addr,e),mn(i,e)}}function wb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;r.uniform3fv(this.addr,e),mn(i,e)}}function Cb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4fv(this.addr,e),mn(i,e)}}function Db(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;M_.set(s),r.uniformMatrix2fv(this.addr,!1,M_),mn(i,s)}}function Ub(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;y_.set(s),r.uniformMatrix3fv(this.addr,!1,y_),mn(i,s)}}function Lb(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(pn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,s))return;S_.set(s),r.uniformMatrix4fv(this.addr,!1,S_),mn(i,s)}}function Nb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function Ob(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2iv(this.addr,e),mn(i,e)}}function zb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3iv(this.addr,e),mn(i,e)}}function Pb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4iv(this.addr,e),mn(i,e)}}function Bb(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function Ib(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;r.uniform2uiv(this.addr,e),mn(i,e)}}function Fb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;r.uniform3uiv(this.addr,e),mn(i,e)}}function Hb(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;r.uniform4uiv(this.addr,e),mn(i,e)}}function Gb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(__.compareFunction=Q_,u=__):u=pv,i.setTexture2D(e||u,l)}function Vb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||gv,l)}function Xb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||_v,l)}function kb(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||mv,l)}function Wb(r){switch(r){case 5126:return Ab;case 35664:return Rb;case 35665:return wb;case 35666:return Cb;case 35674:return Db;case 35675:return Ub;case 35676:return Lb;case 5124:case 35670:return Nb;case 35667:case 35671:return Ob;case 35668:case 35672:return zb;case 35669:case 35673:return Pb;case 5125:return Bb;case 36294:return Ib;case 36295:return Fb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return kb}}function qb(r,e){r.uniform1fv(this.addr,e)}function Yb(r,e){const i=Br(e,this.size,2);r.uniform2fv(this.addr,i)}function jb(r,e){const i=Br(e,this.size,3);r.uniform3fv(this.addr,i)}function Zb(r,e){const i=Br(e,this.size,4);r.uniform4fv(this.addr,i)}function Kb(r,e){const i=Br(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Qb(r,e){const i=Br(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Jb(r,e){const i=Br(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function $b(r,e){r.uniform1iv(this.addr,e)}function t1(r,e){r.uniform2iv(this.addr,e)}function e1(r,e){r.uniform3iv(this.addr,e)}function n1(r,e){r.uniform4iv(this.addr,e)}function i1(r,e){r.uniform1uiv(this.addr,e)}function a1(r,e){r.uniform2uiv(this.addr,e)}function s1(r,e){r.uniform3uiv(this.addr,e)}function r1(r,e){r.uniform4uiv(this.addr,e)}function o1(r,e,i){const s=this.cache,l=e.length,u=kc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||pv,u[h])}function l1(r,e,i){const s=this.cache,l=e.length,u=kc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||gv,u[h])}function c1(r,e,i){const s=this.cache,l=e.length,u=kc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||_v,u[h])}function u1(r,e,i){const s=this.cache,l=e.length,u=kc(i,l);pn(s,u)||(r.uniform1iv(this.addr,u),mn(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||mv,u[h])}function f1(r){switch(r){case 5126:return qb;case 35664:return Yb;case 35665:return jb;case 35666:return Zb;case 35674:return Kb;case 35675:return Qb;case 35676:return Jb;case 5124:case 35670:return $b;case 35667:case 35671:return t1;case 35668:case 35672:return e1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return a1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}class h1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Wb(i.type)}}class d1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=f1(i.type)}}class p1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(e,i[d.id],s)}}}const Bh=/(\w+)(\])?(\[|\.)?/g;function E_(r,e){r.seq.push(e),r.map[e.id]=e}function m1(r,e,i){const s=r.name,l=s.length;for(Bh.lastIndex=0;;){const u=Bh.exec(s),h=Bh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){E_(i,p===void 0?new h1(d,r,e):new d1(d,r,e));break}else{let _=i.map[d];_===void 0&&(_=new p1(d),E_(i,_)),i=_}}}class zc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),h=e.getUniformLocation(i,u.name);m1(u,h,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function T_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const g1=37297;let _1=0;function v1(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const b_=new fe;function x1(r){Ce._getMatrix(b_,Ce.workingColorSpace,r);const e=`mat3( ${b_.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(r)){case Pc:return[e,"LinearTransferOETF"];case He:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function A_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),u=(r.getShaderInfoLog(e)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+v1(r.getShaderSource(e),d)}else return u}function S1(r,e){const i=x1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function y1(r,e){let i;switch(e){case My:i="Linear";break;case Ey:i="Reinhard";break;case Ty:i="Cineon";break;case by:i="ACESFilmic";break;case Ry:i="AgX";break;case wy:i="Neutral";break;case Ay:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new j;function M1(){Ce.getLuminanceCoefficients(Cc);const r=Cc.x.toFixed(4),e=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function T1(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function b1(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(e,l),h=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function Fo(r){return r!==""}function R_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function w_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const A1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(r){return r.replace(A1,w1)}const R1=new Map;function w1(r,e){let i=he[e];if(i===void 0){const s=R1.get(e);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Rd(i)}const C1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(r){return r.replace(C1,D1)}function D1(r,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function D_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===I_?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===F_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sa&&(e="SHADOWMAP_TYPE_VSM"),e}function L1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ur:case Lr:e="ENVMAP_TYPE_CUBE";break;case Vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N1(r){let e="ENVMAP_MODE_REFLECTION";return r.envMap&&r.envMapMode===Lr&&(e="ENVMAP_MODE_REFRACTION"),e}function O1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case H_:e="ENVMAP_BLENDING_MULTIPLY";break;case Sy:e="ENVMAP_BLENDING_MIX";break;case yy:e="ENVMAP_BLENDING_ADD";break}return e}function z1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function P1(r,e,i,s){const l=r.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=U1(i),p=L1(i),S=N1(i),_=O1(i),x=z1(i),y=E1(i),E=T1(u),A=l.createProgram();let M,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),M.length>0&&(M+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Fo).join(`
`),g.length>0&&(g+=`
`)):(M=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),g=[D_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?he.tonemapping_pars_fragment:"",i.toneMapping!==ka?y1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,S1("linearToOutputTexel",i.outputColorSpace),M1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Fo).join(`
`)),h=Rd(h),h=R_(h,i),h=w_(h,i),d=Rd(d),d=R_(d,i),d=w_(d,i),h=C_(h),d=C_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,g=["#define varying in",i.glslVersion===I0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+M+h,w=N+g+d,P=T_(l,l.VERTEX_SHADER,L),z=T_(l,l.FRAGMENT_SHADER,w);l.attachShader(A,P),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(G){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(A)||"",at=l.getShaderInfoLog(P)||"",ot=l.getShaderInfoLog(z)||"",st=Z.trim(),O=at.trim(),K=ot.trim();let k=!0,_t=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,A,P,z);else{const xt=A_(l,P,"vertex"),wt=A_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+st+`
`+xt+`
`+wt)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(O===""||K==="")&&(_t=!1);_t&&(G.diagnostics={runnable:k,programLog:st,vertexShader:{log:O,prefix:M},fragmentShader:{log:K,prefix:g}})}l.deleteShader(P),l.deleteShader(z),X=new zc(l,A),D=b1(l,A)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,g1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=P,this.fragmentShader=z,this}let B1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new F1(e),i.set(e,s)),s}}class F1{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}}function H1(r,e,i,s,l,u,h){const d=new ev,m=new I1,p=new Set,S=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(D){return p.add(D),D===0?"uv":`uv${D}`}function M(D,C,G,Z,at){const ot=Z.fog,st=at.geometry,O=D.isMeshStandardMaterial?Z.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||O),k=K&&K.mapping===Vc?K.image.height:null,_t=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const xt=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,wt=xt!==void 0?xt.length:0;let Mt=0;st.morphAttributes.position!==void 0&&(Mt=1),st.morphAttributes.normal!==void 0&&(Mt=2),st.morphAttributes.color!==void 0&&(Mt=3);let Rt,jt,ne,ut;if(_t){const Te=Ci[_t];Rt=Te.vertexShader,jt=Te.fragmentShader}else Rt=D.vertexShader,jt=D.fragmentShader,m.update(D),ne=m.getVertexShaderID(D),ut=m.getFragmentShaderID(D);const dt=r.getRenderTarget(),Nt=r.state.buffers.depth.getReversed(),Zt=at.isInstancedMesh===!0,Vt=at.isBatchedMesh===!0,ce=!!D.map,je=!!D.matcap,I=!!K,Ee=!!D.aoMap,Jt=!!D.lightMap,qt=!!D.bumpMap,Pt=!!D.normalMap,Ne=!!D.displacementMap,Gt=!!D.emissiveMap,re=!!D.metalnessMap,Qe=!!D.roughnessMap,Ze=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,$=D.iridescence>0,ft=D.sheen>0,vt=D.transmission>0,lt=Ze&&!!D.anisotropyMap,Yt=U&&!!D.clearcoatMap,Tt=U&&!!D.clearcoatNormalMap,kt=U&&!!D.clearcoatRoughnessMap,Wt=$&&!!D.iridescenceMap,yt=$&&!!D.iridescenceThicknessMap,bt=ft&&!!D.sheenColorMap,Kt=ft&&!!D.sheenRoughnessMap,Ot=!!D.specularMap,Ct=!!D.specularColorMap,oe=!!D.specularIntensityMap,V=vt&&!!D.transmissionMap,Et=vt&&!!D.thicknessMap,At=!!D.gradientMap,zt=!!D.alphaMap,St=D.alphaTest>0,mt=!!D.alphaHash,Bt=!!D.extensions;let se=ka;D.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(se=r.toneMapping);const Oe={shaderID:_t,shaderType:D.type,shaderName:D.name,vertexShader:Rt,fragmentShader:jt,defines:D.defines,customVertexShaderID:ne,customFragmentShaderID:ut,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:Vt,batchingColor:Vt&&at._colorsTexture!==null,instancing:Zt,instancingColor:Zt&&at.instanceColor!==null,instancingMorph:Zt&&at.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:dt===null?r.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:Nr,alphaToCoverage:!!D.alphaToCoverage,map:ce,matcap:je,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:k,aoMap:Ee,lightMap:Jt,bumpMap:qt,normalMap:Pt,displacementMap:x&&Ne,emissiveMap:Gt,normalMapObjectSpace:Pt&&D.normalMapType===Ly,normalMapTangentSpace:Pt&&D.normalMapType===K_,metalnessMap:re,roughnessMap:Qe,anisotropy:Ze,anisotropyMap:lt,clearcoat:U,clearcoatMap:Yt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:kt,dispersion:T,iridescence:$,iridescenceMap:Wt,iridescenceThicknessMap:yt,sheen:ft,sheenColorMap:bt,sheenRoughnessMap:Kt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:oe,transmission:vt,transmissionMap:V,thicknessMap:Et,gradientMap:At,opaque:D.transparent===!1&&D.blending===wr&&D.alphaToCoverage===!1,alphaMap:zt,alphaTest:St,alphaHash:mt,combine:D.combine,mapUv:ce&&A(D.map.channel),aoMapUv:Ee&&A(D.aoMap.channel),lightMapUv:Jt&&A(D.lightMap.channel),bumpMapUv:qt&&A(D.bumpMap.channel),normalMapUv:Pt&&A(D.normalMap.channel),displacementMapUv:Ne&&A(D.displacementMap.channel),emissiveMapUv:Gt&&A(D.emissiveMap.channel),metalnessMapUv:re&&A(D.metalnessMap.channel),roughnessMapUv:Qe&&A(D.roughnessMap.channel),anisotropyMapUv:lt&&A(D.anisotropyMap.channel),clearcoatMapUv:Yt&&A(D.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&A(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&A(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&A(D.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&A(D.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&A(D.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&A(D.sheenRoughnessMap.channel),specularMapUv:Ot&&A(D.specularMap.channel),specularColorMapUv:Ct&&A(D.specularColorMap.channel),specularIntensityMapUv:oe&&A(D.specularIntensityMap.channel),transmissionMapUv:V&&A(D.transmissionMap.channel),thicknessMapUv:Et&&A(D.thicknessMap.channel),alphaMapUv:zt&&A(D.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Pt||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:at.isPoints===!0&&!!st.attributes.uv&&(ce||zt),fog:!!ot,useFog:D.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Nt,skinning:at.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Mt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:se,decodeVideoTexture:ce&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===He,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ra,flipSided:D.side===Vn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Bt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&D.extensions.multiDraw===!0||Vt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function g(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(N(C,D),L(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function N(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=E[D.type];let G;if(C){const Z=Ci[C];G=oM.clone(Z.uniforms)}else G=D.uniforms;return G}function P(D,C){let G;for(let Z=0,at=S.length;Z<at;Z++){const ot=S[Z];if(ot.cacheKey===C){G=ot,++G.usedTimes;break}}return G===void 0&&(G=new P1(r,C,D,u),S.push(G)),G}function z(D){if(--D.usedTimes===0){const C=S.indexOf(D);S[C]=S[S.length-1],S.pop(),D.destroy()}}function F(D){m.remove(D)}function X(){m.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:w,acquireProgram:P,releaseProgram:z,releaseShaderCache:F,programs:S,dispose:X}}function G1(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function u(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:u}}function V1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function U_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function L_(){const r=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function h(_,x,y,E,A,M){let g=r[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:M},r[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=y,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=A,g.group=M),e++,g}function d(_,x,y,E,A,M){const g=h(_,x,y,E,A,M);y.transmission>0?s.push(g):y.transparent===!0?l.push(g):i.push(g)}function m(_,x,y,E,A,M){const g=h(_,x,y,E,A,M);y.transmission>0?s.unshift(g):y.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,x){i.length>1&&i.sort(_||V1),s.length>1&&s.sort(x||U_),l.length>1&&l.sort(x||U_)}function S(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:S,sort:p}}function X1(){let r=new WeakMap;function e(s,l){const u=r.get(s);let h;return u===void 0?(h=new L_,r.set(s,[h])):l>=u.length?(h=new L_,u.push(h)):h=u[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function k1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new Me};break;case"SpotLight":i={position:new j,direction:new j,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Me,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":i={color:new Me,position:new j,halfWidth:new j,halfHeight:new j};break}return r[e.id]=i,i}}}function W1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let q1=0;function Y1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function j1(r){const e=new k1,i=W1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const l=new j,u=new Ke,h=new Ke;function d(p){let S=0,_=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,E=0,A=0,M=0,g=0,N=0,L=0,w=0,P=0,z=0,F=0;p.sort(Y1);for(let D=0,C=p.length;D<C;D++){const G=p[D],Z=G.color,at=G.intensity,ot=G.distance,st=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=Z.r*at,_+=Z.g*at,x+=Z.b*at;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],at);F++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const K=G.shadow,k=i.get(G);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,s.directionalShadow[y]=k,s.directionalShadowMap[y]=st,s.directionalShadowMatrix[y]=G.shadow.matrix,N++}s.directional[y]=O,y++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(Z).multiplyScalar(at),O.distance=ot,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[A]=O;const K=G.shadow;if(G.map&&(s.spotLightMap[P]=G.map,P++,K.updateMatrices(G),G.castShadow&&z++),s.spotLightMatrix[A]=K.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,s.spotShadow[A]=k,s.spotShadowMap[A]=st,w++}A++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(Z).multiplyScalar(at),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=O,M++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const K=G.shadow,k=i.get(G);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,s.pointShadow[E]=k,s.pointShadowMap[E]=st,s.pointShadowMatrix[E]=G.shadow.matrix,L++}s.point[E]=O,E++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(at),O.groundColor.copy(G.groundColor).multiplyScalar(at),s.hemi[g]=O,g++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=x;const X=s.hash;(X.directionalLength!==y||X.pointLength!==E||X.spotLength!==A||X.rectAreaLength!==M||X.hemiLength!==g||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==w||X.numSpotMaps!==P||X.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=A,s.rectArea.length=M,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=w+P-z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,X.directionalLength=y,X.pointLength=E,X.spotLength=A,X.rectAreaLength=M,X.hemiLength=g,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=w,X.numSpotMaps=P,X.numLightProbes=F,s.version=q1++)}function m(p,S){let _=0,x=0,y=0,E=0,A=0;const M=S.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const L=p[g];if(L.isDirectionalLight){const w=s.directional[_];w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),_++}else if(L.isSpotLight){const w=s.spot[y];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),y++}else if(L.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),h.identity(),u.copy(L.matrixWorld),u.premultiply(M),h.extractRotation(u),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(M),x++}else if(L.isHemisphereLight){const w=s.hemi[A];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:s}}function N_(r){const e=new j1(r),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function u(S){i.push(S)}function h(S){s.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function Z1(r){let e=new WeakMap;function i(l,u=0){const h=e.get(l);let d;return h===void 0?(d=new N_(r),e.set(l,[d])):u>=h.length?(d=new N_(r),h.push(d)):d=h[u],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function J1(r,e,i){let s=new Bd;const l=new Ae,u=new Ae,h=new Ge,d=new xM({depthPacking:Uy}),m=new SM,p={},S=i.maxTextureSize,_={[Wa]:Vn,[Vn]:Wa,[ra]:ra},x=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new hi;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new bn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I_;let g=this.type;this.render=function(z,F,X){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Xa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const at=g!==sa&&this.type===sa,ot=g===sa&&this.type!==sa;for(let st=0,O=z.length;st<O;st++){const K=z[st],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const _t=k.getFrameExtents();if(l.multiply(_t),u.copy(k.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(u.x=Math.floor(S/_t.x),l.x=u.x*_t.x,k.mapSize.x=u.x),l.y>S&&(u.y=Math.floor(S/_t.y),l.y=u.y*_t.y,k.mapSize.y=u.y)),k.map===null||at===!0||ot===!0){const wt=this.type!==sa?{minFilter:yi,magFilter:yi}:{};k.map!==null&&k.map.dispose(),k.map=new Rs(l.x,l.y,wt),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const xt=k.getViewportCount();for(let wt=0;wt<xt;wt++){const Mt=k.getViewport(wt);h.set(u.x*Mt.x,u.y*Mt.y,u.x*Mt.z,u.y*Mt.w),Z.viewport(h),k.updateMatrices(K,wt),s=k.getFrustum(),w(F,X,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===sa&&N(k,X),k.needsUpdate=!1}g=this.type,M.needsUpdate=!1,r.setRenderTarget(D,C,G)};function N(z,F){const X=e.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Rs(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(F,null,X,x,A,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(F,null,X,y,A,null)}function L(z,F,X,D){let C=null;const G=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=X.isPointLight===!0?m:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=C.uuid,at=F.uuid;let ot=p[Z];ot===void 0&&(ot={},p[Z]=ot);let st=ot[at];st===void 0&&(st=C.clone(),ot[at]=st,F.addEventListener("dispose",P)),C=st}if(C.visible=F.visible,C.wireframe=F.wireframe,D===sa?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:_[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=r.properties.get(C);Z.light=X}return C}function w(z,F,X,D,C){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===sa)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const at=e.update(z),ot=z.material;if(Array.isArray(ot)){const st=at.groups;for(let O=0,K=st.length;O<K;O++){const k=st[O],_t=ot[k.materialIndex];if(_t&&_t.visible){const xt=L(z,_t,D,C);z.onBeforeShadow(r,z,F,X,at,xt,k),r.renderBufferDirect(X,null,at,xt,z,k),z.onAfterShadow(r,z,F,X,at,xt,k)}}}else if(ot.visible){const st=L(z,ot,D,C);z.onBeforeShadow(r,z,F,X,at,st,null),r.renderBufferDirect(X,null,at,st,z,null),z.onAfterShadow(r,z,F,X,at,st,null)}}const Z=z.children;for(let at=0,ot=Z.length;at<ot;at++)w(Z[at],F,X,D,C)}function P(z){z.target.removeEventListener("dispose",P);for(const X in p){const D=p[X],C=z.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const $1={[Gh]:Vh,[Xh]:qh,[kh]:Yh,[Dr]:Wh,[Vh]:Gh,[qh]:Xh,[Yh]:kh,[Wh]:Dr};function tA(r,e){function i(){let V=!1;const Et=new Ge;let At=null;const zt=new Ge(0,0,0,0);return{setMask:function(St){At!==St&&!V&&(r.colorMask(St,St,St,St),At=St)},setLocked:function(St){V=St},setClear:function(St,mt,Bt,se,Oe){Oe===!0&&(St*=se,mt*=se,Bt*=se),Et.set(St,mt,Bt,se),zt.equals(Et)===!1&&(r.clearColor(St,mt,Bt,se),zt.copy(Et))},reset:function(){V=!1,At=null,zt.set(-1,0,0,0)}}}function s(){let V=!1,Et=!1,At=null,zt=null,St=null;return{setReversed:function(mt){if(Et!==mt){const Bt=e.get("EXT_clip_control");mt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Et=mt;const se=St;St=null,this.setClear(se)}},getReversed:function(){return Et},setTest:function(mt){mt?dt(r.DEPTH_TEST):Nt(r.DEPTH_TEST)},setMask:function(mt){At!==mt&&!V&&(r.depthMask(mt),At=mt)},setFunc:function(mt){if(Et&&(mt=$1[mt]),zt!==mt){switch(mt){case Gh:r.depthFunc(r.NEVER);break;case Vh:r.depthFunc(r.ALWAYS);break;case Xh:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case kh:r.depthFunc(r.EQUAL);break;case Wh:r.depthFunc(r.GEQUAL);break;case qh:r.depthFunc(r.GREATER);break;case Yh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}zt=mt}},setLocked:function(mt){V=mt},setClear:function(mt){St!==mt&&(Et&&(mt=1-mt),r.clearDepth(mt),St=mt)},reset:function(){V=!1,At=null,zt=null,St=null,Et=!1}}}function l(){let V=!1,Et=null,At=null,zt=null,St=null,mt=null,Bt=null,se=null,Oe=null;return{setTest:function(Te){V||(Te?dt(r.STENCIL_TEST):Nt(r.STENCIL_TEST))},setMask:function(Te){Et!==Te&&!V&&(r.stencilMask(Te),Et=Te)},setFunc:function(Te,Dn,ni){(At!==Te||zt!==Dn||St!==ni)&&(r.stencilFunc(Te,Dn,ni),At=Te,zt=Dn,St=ni)},setOp:function(Te,Dn,ni){(mt!==Te||Bt!==Dn||se!==ni)&&(r.stencilOp(Te,Dn,ni),mt=Te,Bt=Dn,se=ni)},setLocked:function(Te){V=Te},setClear:function(Te){Oe!==Te&&(r.clearStencil(Te),Oe=Te)},reset:function(){V=!1,Et=null,At=null,zt=null,St=null,mt=null,Bt=null,se=null,Oe=null}}}const u=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},_={},x=new WeakMap,y=[],E=null,A=!1,M=null,g=null,N=null,L=null,w=null,P=null,z=null,F=new Me(0,0,0),X=0,D=!1,C=null,G=null,Z=null,at=null,ot=null;const st=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=K>=2);let _t=null,xt={};const wt=r.getParameter(r.SCISSOR_BOX),Mt=r.getParameter(r.VIEWPORT),Rt=new Ge().fromArray(wt),jt=new Ge().fromArray(Mt);function ne(V,Et,At,zt){const St=new Uint8Array(4),mt=r.createTexture();r.bindTexture(V,mt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<At;Bt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,zt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Et+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return mt}const ut={};ut[r.TEXTURE_2D]=ne(r.TEXTURE_2D,r.TEXTURE_2D,1),ut[r.TEXTURE_CUBE_MAP]=ne(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[r.TEXTURE_2D_ARRAY]=ne(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ut[r.TEXTURE_3D]=ne(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),dt(r.DEPTH_TEST),h.setFunc(Dr),qt(!1),Pt(L0),dt(r.CULL_FACE),Ee(Xa);function dt(V){S[V]!==!0&&(r.enable(V),S[V]=!0)}function Nt(V){S[V]!==!1&&(r.disable(V),S[V]=!1)}function Zt(V,Et){return _[V]!==Et?(r.bindFramebuffer(V,Et),_[V]=Et,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Et),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Vt(V,Et){let At=y,zt=!1;if(V){At=x.get(Et),At===void 0&&(At=[],x.set(Et,At));const St=V.textures;if(At.length!==St.length||At[0]!==r.COLOR_ATTACHMENT0){for(let mt=0,Bt=St.length;mt<Bt;mt++)At[mt]=r.COLOR_ATTACHMENT0+mt;At.length=St.length,zt=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,zt=!0);zt&&r.drawBuffers(At)}function ce(V){return E!==V?(r.useProgram(V),E=V,!0):!1}const je={[Ss]:r.FUNC_ADD,[iy]:r.FUNC_SUBTRACT,[ay]:r.FUNC_REVERSE_SUBTRACT};je[sy]=r.MIN,je[ry]=r.MAX;const I={[oy]:r.ZERO,[ly]:r.ONE,[cy]:r.SRC_COLOR,[Fh]:r.SRC_ALPHA,[my]:r.SRC_ALPHA_SATURATE,[dy]:r.DST_COLOR,[fy]:r.DST_ALPHA,[uy]:r.ONE_MINUS_SRC_COLOR,[Hh]:r.ONE_MINUS_SRC_ALPHA,[py]:r.ONE_MINUS_DST_COLOR,[hy]:r.ONE_MINUS_DST_ALPHA,[gy]:r.CONSTANT_COLOR,[_y]:r.ONE_MINUS_CONSTANT_COLOR,[vy]:r.CONSTANT_ALPHA,[xy]:r.ONE_MINUS_CONSTANT_ALPHA};function Ee(V,Et,At,zt,St,mt,Bt,se,Oe,Te){if(V===Xa){A===!0&&(Nt(r.BLEND),A=!1);return}if(A===!1&&(dt(r.BLEND),A=!0),V!==ny){if(V!==M||Te!==D){if((g!==Ss||w!==Ss)&&(r.blendEquation(r.FUNC_ADD),g=Ss,w=Ss),Te)switch(V){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N0:r.blendFunc(r.ONE,r.ONE);break;case O0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case z0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case N0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case O0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}N=null,L=null,P=null,z=null,F.set(0,0,0),X=0,M=V,D=Te}return}St=St||Et,mt=mt||At,Bt=Bt||zt,(Et!==g||St!==w)&&(r.blendEquationSeparate(je[Et],je[St]),g=Et,w=St),(At!==N||zt!==L||mt!==P||Bt!==z)&&(r.blendFuncSeparate(I[At],I[zt],I[mt],I[Bt]),N=At,L=zt,P=mt,z=Bt),(se.equals(F)===!1||Oe!==X)&&(r.blendColor(se.r,se.g,se.b,Oe),F.copy(se),X=Oe),M=V,D=!1}function Jt(V,Et){V.side===ra?Nt(r.CULL_FACE):dt(r.CULL_FACE);let At=V.side===Vn;Et&&(At=!At),qt(At),V.blending===wr&&V.transparent===!1?Ee(Xa):Ee(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),u.setMask(V.colorWrite);const zt=V.stencilWrite;d.setTest(zt),zt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?dt(r.SAMPLE_ALPHA_TO_COVERAGE):Nt(r.SAMPLE_ALPHA_TO_COVERAGE)}function qt(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function Pt(V){V!==ty?(dt(r.CULL_FACE),V!==G&&(V===L0?r.cullFace(r.BACK):V===ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Nt(r.CULL_FACE),G=V}function Ne(V){V!==Z&&(O&&r.lineWidth(V),Z=V)}function Gt(V,Et,At){V?(dt(r.POLYGON_OFFSET_FILL),(at!==Et||ot!==At)&&(r.polygonOffset(Et,At),at=Et,ot=At)):Nt(r.POLYGON_OFFSET_FILL)}function re(V){V?dt(r.SCISSOR_TEST):Nt(r.SCISSOR_TEST)}function Qe(V){V===void 0&&(V=r.TEXTURE0+st-1),_t!==V&&(r.activeTexture(V),_t=V)}function Ze(V,Et,At){At===void 0&&(_t===null?At=r.TEXTURE0+st-1:At=_t);let zt=xt[At];zt===void 0&&(zt={type:void 0,texture:void 0},xt[At]=zt),(zt.type!==V||zt.texture!==Et)&&(_t!==At&&(r.activeTexture(At),_t=At),r.bindTexture(V,Et||ut[V]),zt.type=V,zt.texture=Et)}function U(){const V=xt[_t];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $(){try{r.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{r.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{r.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{r.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{r.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function kt(){try{r.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Wt(){try{r.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{r.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(V){Rt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Rt.copy(V))}function Kt(V){jt.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),jt.copy(V))}function Ot(V,Et){let At=p.get(Et);At===void 0&&(At=new WeakMap,p.set(Et,At));let zt=At.get(V);zt===void 0&&(zt=r.getUniformBlockIndex(Et,V.name),At.set(V,zt))}function Ct(V,Et){const zt=p.get(Et).get(V);m.get(Et)!==zt&&(r.uniformBlockBinding(Et,zt,V.__bindingPointIndex),m.set(Et,zt))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},_t=null,xt={},_={},x=new WeakMap,y=[],E=null,A=!1,M=null,g=null,N=null,L=null,w=null,P=null,z=null,F=new Me(0,0,0),X=0,D=!1,C=null,G=null,Z=null,at=null,ot=null,Rt.set(0,0,r.canvas.width,r.canvas.height),jt.set(0,0,r.canvas.width,r.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:dt,disable:Nt,bindFramebuffer:Zt,drawBuffers:Vt,useProgram:ce,setBlending:Ee,setMaterial:Jt,setFlipSided:qt,setCullFace:Pt,setLineWidth:Ne,setPolygonOffset:Gt,setScissorTest:re,activeTexture:Qe,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Wt,texImage3D:yt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Tt,texStorage3D:kt,texSubImage2D:ft,texSubImage3D:vt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Yt,scissor:bt,viewport:Kt,reset:oe}}function eA(r,e,i,s,l,u,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ae,S=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,T){return y?new OffscreenCanvas(U,T):Ic("canvas")}function A(U,T,$){let ft=1;const vt=Ze(U);if((vt.width>$||vt.height>$)&&(ft=$/Math.max(vt.width,vt.height)),ft<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const lt=Math.floor(ft*vt.width),Yt=Math.floor(ft*vt.height);_===void 0&&(_=E(lt,Yt));const Tt=T?E(lt,Yt):_;return Tt.width=lt,Tt.height=Yt,Tt.getContext("2d").drawImage(U,0,0,lt,Yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+lt+"x"+Yt+")."),Tt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),U;return U}function M(U){return U.generateMipmaps}function g(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(U,T,$,ft,vt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let lt=T;if(T===r.RED&&($===r.FLOAT&&(lt=r.R32F),$===r.HALF_FLOAT&&(lt=r.R16F),$===r.UNSIGNED_BYTE&&(lt=r.R8)),T===r.RED_INTEGER&&($===r.UNSIGNED_BYTE&&(lt=r.R8UI),$===r.UNSIGNED_SHORT&&(lt=r.R16UI),$===r.UNSIGNED_INT&&(lt=r.R32UI),$===r.BYTE&&(lt=r.R8I),$===r.SHORT&&(lt=r.R16I),$===r.INT&&(lt=r.R32I)),T===r.RG&&($===r.FLOAT&&(lt=r.RG32F),$===r.HALF_FLOAT&&(lt=r.RG16F),$===r.UNSIGNED_BYTE&&(lt=r.RG8)),T===r.RG_INTEGER&&($===r.UNSIGNED_BYTE&&(lt=r.RG8UI),$===r.UNSIGNED_SHORT&&(lt=r.RG16UI),$===r.UNSIGNED_INT&&(lt=r.RG32UI),$===r.BYTE&&(lt=r.RG8I),$===r.SHORT&&(lt=r.RG16I),$===r.INT&&(lt=r.RG32I)),T===r.RGB_INTEGER&&($===r.UNSIGNED_BYTE&&(lt=r.RGB8UI),$===r.UNSIGNED_SHORT&&(lt=r.RGB16UI),$===r.UNSIGNED_INT&&(lt=r.RGB32UI),$===r.BYTE&&(lt=r.RGB8I),$===r.SHORT&&(lt=r.RGB16I),$===r.INT&&(lt=r.RGB32I)),T===r.RGBA_INTEGER&&($===r.UNSIGNED_BYTE&&(lt=r.RGBA8UI),$===r.UNSIGNED_SHORT&&(lt=r.RGBA16UI),$===r.UNSIGNED_INT&&(lt=r.RGBA32UI),$===r.BYTE&&(lt=r.RGBA8I),$===r.SHORT&&(lt=r.RGBA16I),$===r.INT&&(lt=r.RGBA32I)),T===r.RGB&&($===r.UNSIGNED_INT_5_9_9_9_REV&&(lt=r.RGB9_E5),$===r.UNSIGNED_INT_10F_11F_11F_REV&&(lt=r.R11F_G11F_B10F)),T===r.RGBA){const Yt=vt?Pc:Ce.getTransfer(ft);$===r.FLOAT&&(lt=r.RGBA32F),$===r.HALF_FLOAT&&(lt=r.RGBA16F),$===r.UNSIGNED_BYTE&&(lt=Yt===He?r.SRGB8_ALPHA8:r.RGBA8),$===r.UNSIGNED_SHORT_4_4_4_4&&(lt=r.RGBA4),$===r.UNSIGNED_SHORT_5_5_5_1&&(lt=r.RGB5_A1)}return(lt===r.R16F||lt===r.R32F||lt===r.RG16F||lt===r.RG32F||lt===r.RGBA16F||lt===r.RGBA32F)&&e.get("EXT_color_buffer_float"),lt}function w(U,T){let $;return U?T===null||T===As||T===Go?$=r.DEPTH24_STENCIL8:T===oa?$=r.DEPTH32F_STENCIL8:T===Ho&&($=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===As||T===Go?$=r.DEPTH_COMPONENT24:T===oa?$=r.DEPTH_COMPONENT32F:T===Ho&&($=r.DEPTH_COMPONENT16),$}function P(U,T){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==yi&&U.minFilter!==Di?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function z(U){const T=U.target;T.removeEventListener("dispose",z),X(T),T.isVideoTexture&&S.delete(T)}function F(U){const T=U.target;T.removeEventListener("dispose",F),C(T)}function X(U){const T=s.get(U);if(T.__webglInit===void 0)return;const $=U.source,ft=x.get($);if(ft){const vt=ft[T.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(U),Object.keys(ft).length===0&&x.delete($)}s.remove(U)}function D(U){const T=s.get(U);r.deleteTexture(T.__webglTexture);const $=U.source,ft=x.get($);delete ft[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ft=0;ft<6;ft++){if(Array.isArray(T.__webglFramebuffer[ft]))for(let vt=0;vt<T.__webglFramebuffer[ft].length;vt++)r.deleteFramebuffer(T.__webglFramebuffer[ft][vt]);else r.deleteFramebuffer(T.__webglFramebuffer[ft]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ft])}else{if(Array.isArray(T.__webglFramebuffer))for(let ft=0;ft<T.__webglFramebuffer.length;ft++)r.deleteFramebuffer(T.__webglFramebuffer[ft]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ft=0;ft<T.__webglColorRenderbuffer.length;ft++)T.__webglColorRenderbuffer[ft]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ft]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=U.textures;for(let ft=0,vt=$.length;ft<vt;ft++){const lt=s.get($[ft]);lt.__webglTexture&&(r.deleteTexture(lt.__webglTexture),h.memory.textures--),s.remove($[ft])}s.remove(U)}let G=0;function Z(){G=0}function at(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ot(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function st(U,T){const $=s.get(U);if(U.isVideoTexture&&re(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const ft=U.image;if(ft===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ft.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut($,U,T);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,$.__webglTexture,r.TEXTURE0+T)}function O(U,T){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,$.__webglTexture,r.TEXTURE0+T)}function K(U,T){const $=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){ut($,U,T);return}i.bindTexture(r.TEXTURE_3D,$.__webglTexture,r.TEXTURE0+T)}function k(U,T){const $=s.get(U);if(U.version>0&&$.__version!==U.version){dt($,U,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture,r.TEXTURE0+T)}const _t={[Kh]:r.REPEAT,[Es]:r.CLAMP_TO_EDGE,[Qh]:r.MIRRORED_REPEAT},xt={[yi]:r.NEAREST,[Cy]:r.NEAREST_MIPMAP_NEAREST,[oc]:r.NEAREST_MIPMAP_LINEAR,[Di]:r.LINEAR,[ih]:r.LINEAR_MIPMAP_NEAREST,[Ts]:r.LINEAR_MIPMAP_LINEAR},wt={[Ny]:r.NEVER,[Fy]:r.ALWAYS,[Oy]:r.LESS,[Q_]:r.LEQUAL,[zy]:r.EQUAL,[Iy]:r.GEQUAL,[Py]:r.GREATER,[By]:r.NOTEQUAL};function Mt(U,T){if(T.type===oa&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Di||T.magFilter===ih||T.magFilter===oc||T.magFilter===Ts||T.minFilter===Di||T.minFilter===ih||T.minFilter===oc||T.minFilter===Ts)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,_t[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,_t[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,_t[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,xt[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,wt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yi||T.minFilter!==oc&&T.minFilter!==Ts||T.type===oa&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Rt(U,T){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",z));const ft=T.source;let vt=x.get(ft);vt===void 0&&(vt={},x.set(ft,vt));const lt=ot(T);if(lt!==U.__cacheKey){vt[lt]===void 0&&(vt[lt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,$=!0),vt[lt].usedTimes++;const Yt=vt[U.__cacheKey];Yt!==void 0&&(vt[U.__cacheKey].usedTimes--,Yt.usedTimes===0&&D(T)),U.__cacheKey=lt,U.__webglTexture=vt[lt].texture}return $}function jt(U,T,$){return Math.floor(Math.floor(U/$)/T)}function ne(U,T,$,ft){const lt=U.updateRanges;if(lt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,$,ft,T.data);else{lt.sort((yt,bt)=>yt.start-bt.start);let Yt=0;for(let yt=1;yt<lt.length;yt++){const bt=lt[Yt],Kt=lt[yt],Ot=bt.start+bt.count,Ct=jt(Kt.start,T.width,4),oe=jt(bt.start,T.width,4);Kt.start<=Ot+1&&Ct===oe&&jt(Kt.start+Kt.count-1,T.width,4)===Ct?bt.count=Math.max(bt.count,Kt.start+Kt.count-bt.start):(++Yt,lt[Yt]=Kt)}lt.length=Yt+1;const Tt=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),Wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let yt=0,bt=lt.length;yt<bt;yt++){const Kt=lt[yt],Ot=Math.floor(Kt.start/4),Ct=Math.ceil(Kt.count/4),oe=Ot%T.width,V=Math.floor(Ot/T.width),Et=Ct,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,V),i.texSubImage2D(r.TEXTURE_2D,0,oe,V,Et,At,$,ft,T.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Tt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Wt)}}function ut(U,T,$){let ft=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ft=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ft=r.TEXTURE_3D);const vt=Rt(U,T),lt=T.source;i.bindTexture(ft,U.__webglTexture,r.TEXTURE0+$);const Yt=s.get(lt);if(lt.version!==Yt.__version||vt===!0){i.activeTexture(r.TEXTURE0+$);const Tt=Ce.getPrimaries(Ce.workingColorSpace),kt=T.colorSpace===Ga?null:Ce.getPrimaries(T.colorSpace),Wt=T.colorSpace===Ga||Tt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let yt=A(T.image,!1,l.maxTextureSize);yt=Qe(T,yt);const bt=u.convert(T.format,T.colorSpace),Kt=u.convert(T.type);let Ot=L(T.internalFormat,bt,Kt,T.colorSpace,T.isVideoTexture);Mt(ft,T);let Ct;const oe=T.mipmaps,V=T.isVideoTexture!==!0,Et=Yt.__version===void 0||vt===!0,At=lt.dataReady,zt=P(T,yt);if(T.isDepthTexture)Ot=w(T.format===Xo,T.type),Et&&(V?i.texStorage2D(r.TEXTURE_2D,1,Ot,yt.width,yt.height):i.texImage2D(r.TEXTURE_2D,0,Ot,yt.width,yt.height,0,bt,Kt,null));else if(T.isDataTexture)if(oe.length>0){V&&Et&&i.texStorage2D(r.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let St=0,mt=oe.length;St<mt;St++)Ct=oe[St],V?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Kt,Ct.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,bt,Kt,Ct.data);T.generateMipmaps=!1}else V?(Et&&i.texStorage2D(r.TEXTURE_2D,zt,Ot,yt.width,yt.height),At&&ne(T,yt,bt,Kt)):i.texImage2D(r.TEXTURE_2D,0,Ot,yt.width,yt.height,0,bt,Kt,yt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Et&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Ot,oe[0].width,oe[0].height,yt.depth);for(let St=0,mt=oe.length;St<mt;St++)if(Ct=oe[St],T.format!==Si)if(bt!==null)if(V){if(At)if(T.layerUpdates.size>0){const Bt=c_(Ct.width,Ct.height,T.format,T.type);for(const se of T.layerUpdates){const Oe=Ct.data.subarray(se*Bt/Ct.data.BYTES_PER_ELEMENT,(se+1)*Bt/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,se,Ct.width,Ct.height,1,bt,Oe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,bt,Ct.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?At&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,yt.depth,bt,Kt,Ct.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,yt.depth,0,bt,Kt,Ct.data)}else{V&&Et&&i.texStorage2D(r.TEXTURE_2D,zt,Ot,oe[0].width,oe[0].height);for(let St=0,mt=oe.length;St<mt;St++)Ct=oe[St],T.format!==Si?bt!==null?V?At&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Ct.data):i.compressedTexImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,bt,Kt,Ct.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,bt,Kt,Ct.data)}else if(T.isDataArrayTexture)if(V){if(Et&&i.texStorage3D(r.TEXTURE_2D_ARRAY,zt,Ot,yt.width,yt.height,yt.depth),At)if(T.layerUpdates.size>0){const St=c_(yt.width,yt.height,T.format,T.type);for(const mt of T.layerUpdates){const Bt=yt.data.subarray(mt*St/yt.data.BYTES_PER_ELEMENT,(mt+1)*St/yt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,yt.width,yt.height,1,bt,Kt,Bt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,bt,Kt,yt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,yt.width,yt.height,yt.depth,0,bt,Kt,yt.data);else if(T.isData3DTexture)V?(Et&&i.texStorage3D(r.TEXTURE_3D,zt,Ot,yt.width,yt.height,yt.depth),At&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,bt,Kt,yt.data)):i.texImage3D(r.TEXTURE_3D,0,Ot,yt.width,yt.height,yt.depth,0,bt,Kt,yt.data);else if(T.isFramebufferTexture){if(Et)if(V)i.texStorage2D(r.TEXTURE_2D,zt,Ot,yt.width,yt.height);else{let St=yt.width,mt=yt.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(r.TEXTURE_2D,Bt,Ot,St,mt,0,bt,Kt,null),St>>=1,mt>>=1}}else if(oe.length>0){if(V&&Et){const St=Ze(oe[0]);i.texStorage2D(r.TEXTURE_2D,zt,Ot,St.width,St.height)}for(let St=0,mt=oe.length;St<mt;St++)Ct=oe[St],V?At&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,bt,Kt,Ct):i.texImage2D(r.TEXTURE_2D,St,Ot,bt,Kt,Ct);T.generateMipmaps=!1}else if(V){if(Et){const St=Ze(yt);i.texStorage2D(r.TEXTURE_2D,zt,Ot,St.width,St.height)}At&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Kt,yt)}else i.texImage2D(r.TEXTURE_2D,0,Ot,bt,Kt,yt);M(T)&&g(ft),Yt.__version=lt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function dt(U,T,$){if(T.image.length!==6)return;const ft=Rt(U,T),vt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+$);const lt=s.get(vt);if(vt.version!==lt.__version||ft===!0){i.activeTexture(r.TEXTURE0+$);const Yt=Ce.getPrimaries(Ce.workingColorSpace),Tt=T.colorSpace===Ga?null:Ce.getPrimaries(T.colorSpace),kt=T.colorSpace===Ga||Yt===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const Wt=T.isCompressedTexture||T.image[0].isCompressedTexture,yt=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let mt=0;mt<6;mt++)!Wt&&!yt?bt[mt]=A(T.image[mt],!0,l.maxCubemapSize):bt[mt]=yt?T.image[mt].image:T.image[mt],bt[mt]=Qe(T,bt[mt]);const Kt=bt[0],Ot=u.convert(T.format,T.colorSpace),Ct=u.convert(T.type),oe=L(T.internalFormat,Ot,Ct,T.colorSpace),V=T.isVideoTexture!==!0,Et=lt.__version===void 0||ft===!0,At=vt.dataReady;let zt=P(T,Kt);Mt(r.TEXTURE_CUBE_MAP,T);let St;if(Wt){V&&Et&&i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,oe,Kt.width,Kt.height);for(let mt=0;mt<6;mt++){St=bt[mt].mipmaps;for(let Bt=0;Bt<St.length;Bt++){const se=St[Bt];T.format!==Si?Ot!==null?V?At&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,se.width,se.height,Ot,se.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,oe,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,0,0,se.width,se.height,Ot,Ct,se.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt,oe,se.width,se.height,0,Ot,Ct,se.data)}}}else{if(St=T.mipmaps,V&&Et){St.length>0&&zt++;const mt=Ze(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,zt,oe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(yt){V?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,bt[mt].width,bt[mt].height,Ot,Ct,bt[mt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,bt[mt].width,bt[mt].height,0,Ot,Ct,bt[mt].data);for(let Bt=0;Bt<St.length;Bt++){const Oe=St[Bt].image[mt].image;V?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,Oe.width,Oe.height,Ot,Ct,Oe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,oe,Oe.width,Oe.height,0,Ot,Ct,Oe.data)}}else{V?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Ot,Ct,bt[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,oe,Ot,Ct,bt[mt]);for(let Bt=0;Bt<St.length;Bt++){const se=St[Bt];V?At&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,0,0,Ot,Ct,se.image[mt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Bt+1,oe,Ot,Ct,se.image[mt])}}}M(T)&&g(r.TEXTURE_CUBE_MAP),lt.__version=vt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Nt(U,T,$,ft,vt,lt){const Yt=u.convert($.format,$.colorSpace),Tt=u.convert($.type),kt=L($.internalFormat,Yt,Tt,$.colorSpace),Wt=s.get(T),yt=s.get($);if(yt.__renderTarget=T,!Wt.__hasExternalTextures){const bt=Math.max(1,T.width>>lt),Kt=Math.max(1,T.height>>lt);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,lt,kt,bt,Kt,T.depth,0,Yt,Tt,null):i.texImage2D(vt,lt,kt,bt,Kt,0,Yt,Tt,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ft,vt,yt.__webglTexture,0,Ne(T)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ft,vt,yt.__webglTexture,lt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Zt(U,T,$){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ft=T.depthTexture,vt=ft&&ft.isDepthTexture?ft.type:null,lt=w(T.stencilBuffer,vt),Yt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=Ne(T);Gt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt,lt,T.width,T.height):$?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,lt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,lt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Yt,r.RENDERBUFFER,U)}else{const ft=T.textures;for(let vt=0;vt<ft.length;vt++){const lt=ft[vt],Yt=u.convert(lt.format,lt.colorSpace),Tt=u.convert(lt.type),kt=L(lt.internalFormat,Yt,Tt,lt.colorSpace),Wt=Ne(T);$&&Gt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Wt,kt,T.width,T.height):Gt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Wt,kt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,kt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Vt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ft=s.get(T.depthTexture);ft.__renderTarget=T,(!ft.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),st(T.depthTexture,0);const vt=ft.__webglTexture,lt=Ne(T);if(T.depthTexture.format===Vo)Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,vt,0);else if(T.depthTexture.format===Xo)Gt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0,lt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function ce(U){const T=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ft=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ft){const vt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ft.removeEventListener("dispose",vt)};ft.addEventListener("dispose",vt),T.__depthDisposeCallback=vt}T.__boundDepthTexture=ft}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const ft=U.texture.mipmaps;ft&&ft.length>0?Vt(T.__webglFramebuffer[0],U):Vt(T.__webglFramebuffer,U)}else if($){T.__webglDepthbuffer=[];for(let ft=0;ft<6;ft++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ft]),T.__webglDepthbuffer[ft]===void 0)T.__webglDepthbuffer[ft]=r.createRenderbuffer(),Zt(T.__webglDepthbuffer[ft],U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer[ft];r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}else{const ft=U.texture.mipmaps;if(ft&&ft.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Zt(T.__webglDepthbuffer,U,!1);else{const vt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,lt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,lt),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,lt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function je(U,T,$){const ft=s.get(U);T!==void 0&&Nt(ft.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),$!==void 0&&ce(U)}function I(U){const T=U.texture,$=s.get(U),ft=s.get(T);U.addEventListener("dispose",F);const vt=U.textures,lt=U.isWebGLCubeRenderTarget===!0,Yt=vt.length>1;if(Yt||(ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture()),ft.__version=T.version,h.memory.textures++),lt){$.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[Tt]=[];for(let kt=0;kt<T.mipmaps.length;kt++)$.__webglFramebuffer[Tt][kt]=r.createFramebuffer()}else $.__webglFramebuffer[Tt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let Tt=0;Tt<T.mipmaps.length;Tt++)$.__webglFramebuffer[Tt]=r.createFramebuffer()}else $.__webglFramebuffer=r.createFramebuffer();if(Yt)for(let Tt=0,kt=vt.length;Tt<kt;Tt++){const Wt=s.get(vt[Tt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=r.createTexture(),h.memory.textures++)}if(U.samples>0&&Gt(U)===!1){$.__webglMultisampledFramebuffer=r.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Tt=0;Tt<vt.length;Tt++){const kt=vt[Tt];$.__webglColorRenderbuffer[Tt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,$.__webglColorRenderbuffer[Tt]);const Wt=u.convert(kt.format,kt.colorSpace),yt=u.convert(kt.type),bt=L(kt.internalFormat,Wt,yt,kt.colorSpace,U.isXRRenderTarget===!0),Kt=Ne(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,bt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Tt,r.RENDERBUFFER,$.__webglColorRenderbuffer[Tt])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=r.createRenderbuffer(),Zt($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(lt){i.bindTexture(r.TEXTURE_CUBE_MAP,ft.__webglTexture),Mt(r.TEXTURE_CUBE_MAP,T);for(let Tt=0;Tt<6;Tt++)if(T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Nt($.__webglFramebuffer[Tt][kt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,kt);else Nt($.__webglFramebuffer[Tt],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);M(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Yt){for(let Tt=0,kt=vt.length;Tt<kt;Tt++){const Wt=vt[Tt],yt=s.get(Wt);let bt=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(bt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,yt.__webglTexture),Mt(bt,Wt),Nt($.__webglFramebuffer,U,Wt,r.COLOR_ATTACHMENT0+Tt,bt,0),M(Wt)&&g(bt)}i.unbindTexture()}else{let Tt=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Tt=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Tt,ft.__webglTexture),Mt(Tt,T),T.mipmaps&&T.mipmaps.length>0)for(let kt=0;kt<T.mipmaps.length;kt++)Nt($.__webglFramebuffer[kt],U,T,r.COLOR_ATTACHMENT0,Tt,kt);else Nt($.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Tt,0);M(T)&&g(Tt),i.unbindTexture()}U.depthBuffer&&ce(U)}function Ee(U){const T=U.textures;for(let $=0,ft=T.length;$<ft;$++){const vt=T[$];if(M(vt)){const lt=N(U),Yt=s.get(vt).__webglTexture;i.bindTexture(lt,Yt),g(lt),i.unbindTexture()}}}const Jt=[],qt=[];function Pt(U){if(U.samples>0){if(Gt(U)===!1){const T=U.textures,$=U.width,ft=U.height;let vt=r.COLOR_BUFFER_BIT;const lt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Yt=s.get(U),Tt=T.length>1;if(Tt)for(let Wt=0;Wt<T.length;Wt++)i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer);const kt=U.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglFramebuffer);for(let Wt=0;Wt<T.length;Wt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Tt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const yt=s.get(T[Wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,yt,0)}r.blitFramebuffer(0,0,$,ft,0,0,$,ft,vt,r.NEAREST),m===!0&&(Jt.length=0,qt.length=0,Jt.push(r.COLOR_ATTACHMENT0+Wt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Jt.push(lt),qt.push(lt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Jt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Tt)for(let Wt=0;Wt<T.length;Wt++){i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.RENDERBUFFER,Yt.__webglColorRenderbuffer[Wt]);const yt=s.get(T[Wt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Wt,r.TEXTURE_2D,yt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Yt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ne(U){return Math.min(l.maxSamples,U.samples)}function Gt(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(U){const T=h.render.frame;S.get(U)!==T&&(S.set(U,T),U.update())}function Qe(U,T){const $=U.colorSpace,ft=U.format,vt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Nr&&$!==Ga&&(Ce.getTransfer($)===He?(ft!==Si||vt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=at,this.resetTextureUnits=Z,this.setTexture2D=st,this.setTexture2DArray=O,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=je,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Gt}function nA(r,e){function i(s,l=Ga){let u;const h=Ce.getTransfer(l);if(s===Ni)return r.UNSIGNED_BYTE;if(s===Dd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Ud)return r.UNSIGNED_SHORT_5_5_5_1;if(s===k_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===W_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===V_)return r.BYTE;if(s===X_)return r.SHORT;if(s===Ho)return r.UNSIGNED_SHORT;if(s===Cd)return r.INT;if(s===As)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Wo)return r.HALF_FLOAT;if(s===q_)return r.ALPHA;if(s===Y_)return r.RGB;if(s===Si)return r.RGBA;if(s===Vo)return r.DEPTH_COMPONENT;if(s===Xo)return r.DEPTH_STENCIL;if(s===j_)return r.RED;if(s===Ld)return r.RED_INTEGER;if(s===Z_)return r.RG;if(s===Nd)return r.RG_INTEGER;if(s===Od)return r.RGBA_INTEGER;if(s===Uc||s===Lc||s===Nc||s===Oc)if(h===He)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Uc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Uc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jh||s===$h||s===td||s===ed)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$h)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===td)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ed)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nd||s===id||s===ad)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(s===nd||s===id)return h===He?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===ad)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(s===sd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===cd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ud)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===dd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vd)return h===He?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xd||s===Sd||s===yd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(s===xd)return h===He?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Md||s===Ed||s===Td||s===bd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(s===Md)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Td)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const iA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new uv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new qa({vertexShader:iA,fragmentShader:aA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rA extends zr{constructor(e,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,S=null,_=null,x=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",M=new sA,g={},N=i.getContextAttributes();let L=null,w=null;const P=[],z=[],F=new Ae;let X=null;const D=new ei;D.viewport=new Ge;const C=new ei;C.viewport=new Ge;const G=[D,C],Z=new bM;let at=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ut){let dt=P[ut];return dt===void 0&&(dt=new Ah,P[ut]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(ut){let dt=P[ut];return dt===void 0&&(dt=new Ah,P[ut]=dt),dt.getGripSpace()},this.getHand=function(ut){let dt=P[ut];return dt===void 0&&(dt=new Ah,P[ut]=dt),dt.getHandSpace()};function st(ut){const dt=z.indexOf(ut.inputSource);if(dt===-1)return;const Nt=P[dt];Nt!==void 0&&(Nt.update(ut.inputSource,ut.frame,p||h),Nt.dispatchEvent({type:ut.type,data:ut.inputSource}))}function O(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",K);for(let ut=0;ut<P.length;ut++){const dt=z[ut];dt!==null&&(z[ut]=null,P[ut].disconnect(dt))}at=null,ot=null,M.reset();for(const ut in g)delete g[ut];e.setRenderTarget(L),y=null,x=null,_=null,l=null,w=null,ne.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ut){u=ut,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ut){d=ut,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(ut){p=ut},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ut){if(l=ut,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",O),l.addEventListener("inputsourceschange",K),N.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Nt=null,Zt=null,Vt=null;N.depth&&(Vt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Nt=N.stencil?Xo:Vo,Zt=N.stencil?Go:As);const ce={colorFormat:i.RGBA8,depthFormat:Vt,scaleFactor:u};_=this.getBinding(),x=_.createProjectionLayer(ce),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Rs(x.textureWidth,x.textureHeight,{format:Si,type:Ni,depthTexture:new cv(x.textureWidth,x.textureHeight,Zt,void 0,void 0,void 0,void 0,void 0,void 0,Nt),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Nt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Nt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),w=new Rs(y.framebufferWidth,y.framebufferHeight,{format:Si,type:Ni,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),ne.setContext(l),ne.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(ut){for(let dt=0;dt<ut.removed.length;dt++){const Nt=ut.removed[dt],Zt=z.indexOf(Nt);Zt>=0&&(z[Zt]=null,P[Zt].disconnect(Nt))}for(let dt=0;dt<ut.added.length;dt++){const Nt=ut.added[dt];let Zt=z.indexOf(Nt);if(Zt===-1){for(let ce=0;ce<P.length;ce++)if(ce>=z.length){z.push(Nt),Zt=ce;break}else if(z[ce]===null){z[ce]=Nt,Zt=ce;break}if(Zt===-1)break}const Vt=P[Zt];Vt&&Vt.connect(Nt)}}const k=new j,_t=new j;function xt(ut,dt,Nt){k.setFromMatrixPosition(dt.matrixWorld),_t.setFromMatrixPosition(Nt.matrixWorld);const Zt=k.distanceTo(_t),Vt=dt.projectionMatrix.elements,ce=Nt.projectionMatrix.elements,je=Vt[14]/(Vt[10]-1),I=Vt[14]/(Vt[10]+1),Ee=(Vt[9]+1)/Vt[5],Jt=(Vt[9]-1)/Vt[5],qt=(Vt[8]-1)/Vt[0],Pt=(ce[8]+1)/ce[0],Ne=je*qt,Gt=je*Pt,re=Zt/(-qt+Pt),Qe=re*-qt;if(dt.matrixWorld.decompose(ut.position,ut.quaternion,ut.scale),ut.translateX(Qe),ut.translateZ(re),ut.matrixWorld.compose(ut.position,ut.quaternion,ut.scale),ut.matrixWorldInverse.copy(ut.matrixWorld).invert(),Vt[10]===-1)ut.projectionMatrix.copy(dt.projectionMatrix),ut.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Ze=je+re,U=I+re,T=Ne-Qe,$=Gt+(Zt-Qe),ft=Ee*I/U*Ze,vt=Jt*I/U*Ze;ut.projectionMatrix.makePerspective(T,$,ft,vt,Ze,U),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert()}}function wt(ut,dt){dt===null?ut.matrixWorld.copy(ut.matrix):ut.matrixWorld.multiplyMatrices(dt.matrixWorld,ut.matrix),ut.matrixWorldInverse.copy(ut.matrixWorld).invert()}this.updateCamera=function(ut){if(l===null)return;let dt=ut.near,Nt=ut.far;M.texture!==null&&(M.depthNear>0&&(dt=M.depthNear),M.depthFar>0&&(Nt=M.depthFar)),Z.near=C.near=D.near=dt,Z.far=C.far=D.far=Nt,(at!==Z.near||ot!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),at=Z.near,ot=Z.far),Z.layers.mask=ut.layers.mask|6,D.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const Zt=ut.parent,Vt=Z.cameras;wt(Z,Zt);for(let ce=0;ce<Vt.length;ce++)wt(Vt[ce],Zt);Vt.length===2?xt(Z,D,C):Z.projectionMatrix.copy(D.projectionMatrix),Mt(ut,Z,Zt)};function Mt(ut,dt,Nt){Nt===null?ut.matrix.copy(dt.matrixWorld):(ut.matrix.copy(Nt.matrixWorld),ut.matrix.invert(),ut.matrix.multiply(dt.matrixWorld)),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.updateMatrixWorld(!0),ut.projectionMatrix.copy(dt.projectionMatrix),ut.projectionMatrixInverse.copy(dt.projectionMatrixInverse),ut.isPerspectiveCamera&&(ut.fov=Ad*2*Math.atan(1/ut.projectionMatrix.elements[5]),ut.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ut){m=ut,x!==null&&(x.fixedFoveation=ut),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ut)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(ut){return g[ut]};let Rt=null;function jt(ut,dt){if(S=dt.getViewerPose(p||h),E=dt,S!==null){const Nt=S.views;y!==null&&(e.setRenderTargetFramebuffer(w,y.framebuffer),e.setRenderTarget(w));let Zt=!1;Nt.length!==Z.cameras.length&&(Z.cameras.length=0,Zt=!0);for(let I=0;I<Nt.length;I++){const Ee=Nt[I];let Jt=null;if(y!==null)Jt=y.getViewport(Ee);else{const Pt=_.getViewSubImage(x,Ee);Jt=Pt.viewport,I===0&&(e.setRenderTargetTextures(w,Pt.colorTexture,Pt.depthStencilTexture),e.setRenderTarget(w))}let qt=G[I];qt===void 0&&(qt=new ei,qt.layers.enable(I),qt.viewport=new Ge,G[I]=qt),qt.matrix.fromArray(Ee.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(Ee.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),I===0&&(Z.matrix.copy(qt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Zt===!0&&Z.cameras.push(qt)}const Vt=l.enabledFeatures;if(Vt&&Vt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){_=s.getBinding();const I=_.getDepthInformation(Nt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(Vt&&Vt.includes("camera-access")&&A){e.state.unbindTexture(),_=s.getBinding();for(let I=0;I<Nt.length;I++){const Ee=Nt[I].camera;if(Ee){let Jt=g[Ee];Jt||(Jt=new uv,g[Ee]=Jt);const qt=_.getCameraImage(Ee);Jt.sourceTexture=qt}}}}for(let Nt=0;Nt<P.length;Nt++){const Zt=z[Nt],Vt=P[Nt];Zt!==null&&Vt!==void 0&&Vt.update(Zt,dt,p||h)}Rt&&Rt(ut,dt),dt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:dt}),E=null}const ne=new dv;ne.setAnimationLoop(jt),this.setAnimationLoop=function(ut){Rt=ut},this.dispose=function(){}}}const _s=new Oi,oA=new Ke;function lA(r,e){function i(M,g){M.matrixAutoUpdate===!0&&M.updateMatrix(),g.value.copy(M.matrix)}function s(M,g){g.color.getRGB(M.fogColor.value,sv(r)),g.isFog?(M.fogNear.value=g.near,M.fogFar.value=g.far):g.isFogExp2&&(M.fogDensity.value=g.density)}function l(M,g,N,L,w){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(M,g):g.isMeshToonMaterial?(u(M,g),_(M,g)):g.isMeshPhongMaterial?(u(M,g),S(M,g)):g.isMeshStandardMaterial?(u(M,g),x(M,g),g.isMeshPhysicalMaterial&&y(M,g,w)):g.isMeshMatcapMaterial?(u(M,g),E(M,g)):g.isMeshDepthMaterial?u(M,g):g.isMeshDistanceMaterial?(u(M,g),A(M,g)):g.isMeshNormalMaterial?u(M,g):g.isLineBasicMaterial?(h(M,g),g.isLineDashedMaterial&&d(M,g)):g.isPointsMaterial?m(M,g,N,L):g.isSpriteMaterial?p(M,g):g.isShadowMaterial?(M.color.value.copy(g.color),M.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(M,g){M.opacity.value=g.opacity,g.color&&M.diffuse.value.copy(g.color),g.emissive&&M.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.bumpMap&&(M.bumpMap.value=g.bumpMap,i(g.bumpMap,M.bumpMapTransform),M.bumpScale.value=g.bumpScale,g.side===Vn&&(M.bumpScale.value*=-1)),g.normalMap&&(M.normalMap.value=g.normalMap,i(g.normalMap,M.normalMapTransform),M.normalScale.value.copy(g.normalScale),g.side===Vn&&M.normalScale.value.negate()),g.displacementMap&&(M.displacementMap.value=g.displacementMap,i(g.displacementMap,M.displacementMapTransform),M.displacementScale.value=g.displacementScale,M.displacementBias.value=g.displacementBias),g.emissiveMap&&(M.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,M.emissiveMapTransform)),g.specularMap&&(M.specularMap.value=g.specularMap,i(g.specularMap,M.specularMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest);const N=e.get(g),L=N.envMap,w=N.envMapRotation;L&&(M.envMap.value=L,_s.copy(w),_s.x*=-1,_s.y*=-1,_s.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),M.envMapRotation.value.setFromMatrix4(oA.makeRotationFromEuler(_s)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=g.reflectivity,M.ior.value=g.ior,M.refractionRatio.value=g.refractionRatio),g.lightMap&&(M.lightMap.value=g.lightMap,M.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,M.lightMapTransform)),g.aoMap&&(M.aoMap.value=g.aoMap,M.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,M.aoMapTransform))}function h(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform))}function d(M,g){M.dashSize.value=g.dashSize,M.totalSize.value=g.dashSize+g.gapSize,M.scale.value=g.scale}function m(M,g,N,L){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.size.value=g.size*N,M.scale.value=L*.5,g.map&&(M.map.value=g.map,i(g.map,M.uvTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function p(M,g){M.diffuse.value.copy(g.color),M.opacity.value=g.opacity,M.rotation.value=g.rotation,g.map&&(M.map.value=g.map,i(g.map,M.mapTransform)),g.alphaMap&&(M.alphaMap.value=g.alphaMap,i(g.alphaMap,M.alphaMapTransform)),g.alphaTest>0&&(M.alphaTest.value=g.alphaTest)}function S(M,g){M.specular.value.copy(g.specular),M.shininess.value=Math.max(g.shininess,1e-4)}function _(M,g){g.gradientMap&&(M.gradientMap.value=g.gradientMap)}function x(M,g){M.metalness.value=g.metalness,g.metalnessMap&&(M.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,M.metalnessMapTransform)),M.roughness.value=g.roughness,g.roughnessMap&&(M.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,M.roughnessMapTransform)),g.envMap&&(M.envMapIntensity.value=g.envMapIntensity)}function y(M,g,N){M.ior.value=g.ior,g.sheen>0&&(M.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),M.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(M.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,M.sheenColorMapTransform)),g.sheenRoughnessMap&&(M.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,M.sheenRoughnessMapTransform))),g.clearcoat>0&&(M.clearcoat.value=g.clearcoat,M.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(M.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,M.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(M.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Vn&&M.clearcoatNormalScale.value.negate())),g.dispersion>0&&(M.dispersion.value=g.dispersion),g.iridescence>0&&(M.iridescence.value=g.iridescence,M.iridescenceIOR.value=g.iridescenceIOR,M.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(M.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,M.iridescenceMapTransform)),g.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),g.transmission>0&&(M.transmission.value=g.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(M.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,M.transmissionMapTransform)),M.thickness.value=g.thickness,g.thicknessMap&&(M.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=g.attenuationDistance,M.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(M.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(M.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=g.specularIntensity,M.specularColor.value.copy(g.specularColor),g.specularColorMap&&(M.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,M.specularColorMapTransform)),g.specularIntensityMap&&(M.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,g){g.matcap&&(M.matcap.value=g.matcap)}function A(M,g){const N=e.get(g).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function cA(r,e,i,s){let l={},u={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const w=L.program;s.uniformBlockBinding(N,w)}function p(N,L){let w=l[N.id];w===void 0&&(E(N),w=S(N),l[N.id]=w,N.addEventListener("dispose",M));const P=L.program;s.updateUBOMapping(N,P);const z=e.render.frame;u[N.id]!==z&&(x(N),u[N.id]=z)}function S(N){const L=_();N.__bindingPointIndex=L;const w=r.createBuffer(),P=N.__size,z=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,P,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,w),w}function _(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],w=N.uniforms,P=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let z=0,F=w.length;z<F;z++){const X=Array.isArray(w[z])?w[z]:[w[z]];for(let D=0,C=X.length;D<C;D++){const G=X[D];if(y(G,z,D,P)===!0){const Z=G.__offset,at=Array.isArray(G.value)?G.value:[G.value];let ot=0;for(let st=0;st<at.length;st++){const O=at[st],K=A(O);typeof O=="number"||typeof O=="boolean"?(G.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,Z+ot,G.__data)):O.isMatrix3?(G.__data[0]=O.elements[0],G.__data[1]=O.elements[1],G.__data[2]=O.elements[2],G.__data[3]=0,G.__data[4]=O.elements[3],G.__data[5]=O.elements[4],G.__data[6]=O.elements[5],G.__data[7]=0,G.__data[8]=O.elements[6],G.__data[9]=O.elements[7],G.__data[10]=O.elements[8],G.__data[11]=0):(O.toArray(G.__data,ot),ot+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,L,w,P){const z=N.value,F=L+"_"+w;if(P[F]===void 0)return typeof z=="number"||typeof z=="boolean"?P[F]=z:P[F]=z.clone(),!0;{const X=P[F];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return P[F]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function E(N){const L=N.uniforms;let w=0;const P=16;for(let F=0,X=L.length;F<X;F++){const D=Array.isArray(L[F])?L[F]:[L[F]];for(let C=0,G=D.length;C<G;C++){const Z=D[C],at=Array.isArray(Z.value)?Z.value:[Z.value];for(let ot=0,st=at.length;ot<st;ot++){const O=at[ot],K=A(O),k=w%P,_t=k%K.boundary,xt=k+_t;w+=_t,xt!==0&&P-xt<K.storage&&(w+=P-xt),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=w,w+=K.storage}}}const z=w%P;return z>0&&(w+=P-z),N.__size=w,N.__cache={},this}function A(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function M(N){const L=N.target;L.removeEventListener("dispose",M);const w=h.indexOf(L.__bindingPointIndex);h.splice(w,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function g(){for(const N in l)r.deleteBuffer(l[N]);h=[],l={},u={}}return{bind:m,update:p,dispose:g}}class uA{constructor(e={}){const{canvas:i=Gy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=h;const E=new Uint32Array(4),A=new Int32Array(4);let M=null,g=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let P=!1;this._outputColorSpace=ti;let z=0,F=0,X=null,D=-1,C=null;const G=new Ge,Z=new Ge;let at=null;const ot=new Me(0);let st=0,O=i.width,K=i.height,k=1,_t=null,xt=null;const wt=new Ge(0,0,O,K),Mt=new Ge(0,0,O,K);let Rt=!1;const jt=new Bd;let ne=!1,ut=!1;const dt=new Ke,Nt=new j,Zt=new Ge,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function je(){return X===null?k:1}let I=s;function Ee(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wd}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",St,!1),I===null){const W="webgl2";if(I=Ee(W,R),I===null)throw Ee(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Jt,qt,Pt,Ne,Gt,re,Qe,Ze,U,T,$,ft,vt,lt,Yt,Tt,kt,Wt,yt,bt,Kt,Ot,Ct,oe;function V(){Jt=new Sb(I),Jt.init(),Ot=new nA(I,Jt),qt=new db(I,Jt,e,Ot),Pt=new tA(I,Jt),qt.reversedDepthBuffer&&x&&Pt.buffers.depth.setReversed(!0),Ne=new Eb(I),Gt=new G1,re=new eA(I,Jt,Pt,Gt,qt,Ot,Ne),Qe=new mb(w),Ze=new xb(w),U=new CM(I),Ct=new fb(I,U),T=new yb(I,U,Ne,Ct),$=new bb(I,T,U,Ne),yt=new Tb(I,qt,re),Tt=new pb(Gt),ft=new H1(w,Qe,Ze,Jt,qt,Ct,Tt),vt=new lA(w,Gt),lt=new X1,Yt=new Z1(Jt),Wt=new ub(w,Qe,Ze,Pt,$,y,m),kt=new J1(w,$,qt),oe=new cA(I,Ne,qt,Pt),bt=new hb(I,Jt,Ne),Kt=new Mb(I,Jt,Ne),Ne.programs=ft.programs,w.capabilities=qt,w.extensions=Jt,w.properties=Gt,w.renderLists=lt,w.shadowMap=kt,w.state=Pt,w.info=Ne}V();const Et=new rA(w,I);this.xr=Et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=Jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(R){R!==void 0&&(k=R,this.setSize(O,K,!1))},this.getSize=function(R){return R.set(O,K)},this.setSize=function(R,W,et=!0){if(Et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,K=W,i.width=Math.floor(R*k),i.height=Math.floor(W*k),et===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*k,K*k).floor()},this.setDrawingBufferSize=function(R,W,et){O=R,K=W,k=et,i.width=Math.floor(R*et),i.height=Math.floor(W*et),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(G)},this.getViewport=function(R){return R.copy(wt)},this.setViewport=function(R,W,et,nt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,W,et,nt),Pt.viewport(G.copy(wt).multiplyScalar(k).round())},this.getScissor=function(R){return R.copy(Mt)},this.setScissor=function(R,W,et,nt){R.isVector4?Mt.set(R.x,R.y,R.z,R.w):Mt.set(R,W,et,nt),Pt.scissor(Z.copy(Mt).multiplyScalar(k).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(R){Pt.setScissorTest(Rt=R)},this.setOpaqueSort=function(R){_t=R},this.setTransparentSort=function(R){xt=R},this.getClearColor=function(R){return R.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,et=!0){let nt=0;if(R){let Y=!1;if(X!==null){const gt=X.texture.format;Y=gt===Od||gt===Nd||gt===Ld}if(Y){const gt=X.texture.type,Dt=gt===Ni||gt===As||gt===Ho||gt===Go||gt===Dd||gt===Ud,Ft=Wt.getClearColor(),Lt=Wt.getClearAlpha(),$t=Ft.r,ae=Ft.g,te=Ft.b;Dt?(E[0]=$t,E[1]=ae,E[2]=te,E[3]=Lt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=$t,A[1]=ae,A[2]=te,A[3]=Lt,I.clearBufferiv(I.COLOR,0,A))}else nt|=I.COLOR_BUFFER_BIT}W&&(nt|=I.DEPTH_BUFFER_BIT),et&&(nt|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",St,!1),Wt.dispose(),lt.dispose(),Yt.dispose(),Gt.dispose(),Qe.dispose(),Ze.dispose(),$.dispose(),Ct.dispose(),oe.dispose(),ft.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",ni),Et.removeEventListener("sessionend",Fr),Mi.stop()};function At(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const R=Ne.autoReset,W=kt.enabled,et=kt.autoUpdate,nt=kt.needsUpdate,Y=kt.type;V(),Ne.autoReset=R,kt.enabled=W,kt.autoUpdate=et,kt.needsUpdate=nt,kt.type=Y}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function mt(R){const W=R.target;W.removeEventListener("dispose",mt),Bt(W)}function Bt(R){se(R),Gt.remove(R)}function se(R){const W=Gt.get(R).programs;W!==void 0&&(W.forEach(function(et){ft.releaseProgram(et)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,et,nt,Y,gt){W===null&&(W=Vt);const Dt=Y.isMesh&&Y.matrixWorld.determinant()<0,Ft=ua(R,W,et,nt,Y);Pt.setMaterial(nt,Dt);let Lt=et.index,$t=1;if(nt.wireframe===!0){if(Lt=T.getWireframeAttribute(et),Lt===void 0)return;$t=2}const ae=et.drawRange,te=et.attributes.position;let de=ae.start*$t,Ue=(ae.start+ae.count)*$t;gt!==null&&(de=Math.max(de,gt.start*$t),Ue=Math.min(Ue,(gt.start+gt.count)*$t)),Lt!==null?(de=Math.max(de,0),Ue=Math.min(Ue,Lt.count)):te!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,te.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Ct.setup(Y,nt,Ft,et,Lt);let Le,pe=bt;if(Lt!==null&&(Le=U.get(Lt),pe=Kt,pe.setIndex(Le)),Y.isMesh)nt.wireframe===!0?(Pt.setLineWidth(nt.wireframeLinewidth*je()),pe.setMode(I.LINES)):pe.setMode(I.TRIANGLES);else if(Y.isLine){let Ht=nt.linewidth;Ht===void 0&&(Ht=1),Pt.setLineWidth(Ht*je()),Y.isLineSegments?pe.setMode(I.LINES):Y.isLineLoop?pe.setMode(I.LINE_LOOP):pe.setMode(I.LINE_STRIP)}else Y.isPoints?pe.setMode(I.POINTS):Y.isSprite&&pe.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))pe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ht=Y._multiDrawStarts,ke=Y._multiDrawCounts,be=Y._multiDrawCount,Sn=Lt?U.get(Lt).bytesPerElement:1,zi=Gt.get(nt).currentProgram.getUniforms();for(let gn=0;gn<be;gn++)zi.setValue(I,"_gl_DrawID",gn),pe.render(Ht[gn]/Sn,ke[gn])}else if(Y.isInstancedMesh)pe.renderInstances(de,Ve,Y.count);else if(et.isInstancedBufferGeometry){const Ht=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ke=Math.min(et.instanceCount,Ht);pe.renderInstances(de,Ve,ke)}else pe.render(de,Ve)};function Oe(R,W,et){R.transparent===!0&&R.side===ra&&R.forceSinglePass===!1?(R.side=Vn,R.needsUpdate=!0,kn(R,W,et),R.side=Wa,R.needsUpdate=!0,kn(R,W,et),R.side=ra):kn(R,W,et)}this.compile=function(R,W,et=null){et===null&&(et=R),g=Yt.get(et),g.init(W),L.push(g),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),R!==et&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const nt=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gt=Y.material;if(gt)if(Array.isArray(gt))for(let Dt=0;Dt<gt.length;Dt++){const Ft=gt[Dt];Oe(Ft,et,Y),nt.add(Ft)}else Oe(gt,et,Y),nt.add(gt)}),g=L.pop(),nt},this.compileAsync=function(R,W,et=null){const nt=this.compile(R,W,et);return new Promise(Y=>{function gt(){if(nt.forEach(function(Dt){Gt.get(Dt).currentProgram.isReady()&&nt.delete(Dt)}),nt.size===0){Y(R);return}setTimeout(gt,10)}Jt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Te=null;function Dn(R){Te&&Te(R)}function ni(){Mi.stop()}function Fr(){Mi.start()}const Mi=new dv;Mi.setAnimationLoop(Dn),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(R){Te=R,Et.setAnimationLoop(R),R===null?Mi.stop():Mi.start()},Et.addEventListener("sessionstart",ni),Et.addEventListener("sessionend",Fr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(W),W=Et.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,W,X),g=Yt.get(R,L.length),g.init(W),L.push(g),dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),jt.setFromProjectionMatrix(dt,Ui,W.reversedDepth),ut=this.localClippingEnabled,ne=Tt.init(this.clippingPlanes,ut),M=lt.get(R,N.length),M.init(),N.push(M),Et.enabled===!0&&Et.isPresenting===!0){const gt=w.xr.getDepthSensingMesh();gt!==null&&Cs(gt,W,-1/0,w.sortObjects)}Cs(R,W,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(_t,xt),ce=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,ce&&Wt.addToRenderList(M,R),this.info.render.frame++,ne===!0&&Tt.beginShadows();const et=g.state.shadowsArray;kt.render(et,R,W),ne===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=M.opaque,Y=M.transmissive;if(g.setupLights(),W.isArrayCamera){const gt=W.cameras;if(Y.length>0)for(let Dt=0,Ft=gt.length;Dt<Ft;Dt++){const Lt=gt[Dt];Us(nt,Y,R,Lt)}ce&&Wt.render(R);for(let Dt=0,Ft=gt.length;Dt<Ft;Dt++){const Lt=gt[Dt];Ds(M,R,Lt,Lt.viewport)}}else Y.length>0&&Us(nt,Y,R,W),ce&&Wt.render(R),Ds(M,R,W);X!==null&&F===0&&(re.updateMultisampleRenderTarget(X),re.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(w,R,W),Ct.resetDefaultState(),D=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ne===!0&&Tt.setGlobalState(w.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?M=N[N.length-1]:M=null};function Cs(R,W,et,nt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||jt.intersectsSprite(R)){nt&&Zt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(dt);const Dt=$.update(R),Ft=R.material;Ft.visible&&M.push(R,Dt,Ft,et,Zt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||jt.intersectsObject(R))){const Dt=$.update(R),Ft=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Zt.copy(R.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Zt.copy(Dt.boundingSphere.center)),Zt.applyMatrix4(R.matrixWorld).applyMatrix4(dt)),Array.isArray(Ft)){const Lt=Dt.groups;for(let $t=0,ae=Lt.length;$t<ae;$t++){const te=Lt[$t],de=Ft[te.materialIndex];de&&de.visible&&M.push(R,Dt,de,et,Zt.z,te)}}else Ft.visible&&M.push(R,Dt,Ft,et,Zt.z,null)}}const gt=R.children;for(let Dt=0,Ft=gt.length;Dt<Ft;Dt++)Cs(gt[Dt],W,et,nt)}function Ds(R,W,et,nt){const Y=R.opaque,gt=R.transmissive,Dt=R.transparent;g.setupLightsView(et),ne===!0&&Tt.setGlobalState(w.clippingPlanes,et),nt&&Pt.viewport(G.copy(nt)),Y.length>0&&Ya(Y,W,et),gt.length>0&&Ya(gt,W,et),Dt.length>0&&Ya(Dt,W,et),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Us(R,W,et,nt){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[nt.id]===void 0&&(g.state.transmissionRenderTarget[nt.id]=new Rs(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?Wo:Ni,minFilter:Ts,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const gt=g.state.transmissionRenderTarget[nt.id],Dt=nt.viewport||G;gt.setSize(Dt.z*w.transmissionResolutionScale,Dt.w*w.transmissionResolutionScale);const Ft=w.getRenderTarget(),Lt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(gt),w.getClearColor(ot),st=w.getClearAlpha(),st<1&&w.setClearColor(16777215,.5),w.clear(),ce&&Wt.render(et);const ae=w.toneMapping;w.toneMapping=ka;const te=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),g.setupLightsView(nt),ne===!0&&Tt.setGlobalState(w.clippingPlanes,nt),Ya(R,et,nt),re.updateMultisampleRenderTarget(gt),re.updateRenderTargetMipmap(gt),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=W.length;Ue<Ve;Ue++){const Le=W[Ue],pe=Le.object,Ht=Le.geometry,ke=Le.material,be=Le.group;if(ke.side===ra&&pe.layers.test(nt.layers)){const Sn=ke.side;ke.side=Vn,ke.needsUpdate=!0,Hr(pe,et,nt,Ht,ke,be),ke.side=Sn,ke.needsUpdate=!0,de=!0}}de===!0&&(re.updateMultisampleRenderTarget(gt),re.updateRenderTargetMipmap(gt))}w.setRenderTarget(Ft,Lt,$t),w.setClearColor(ot,st),te!==void 0&&(nt.viewport=te),w.toneMapping=ae}function Ya(R,W,et){const nt=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,gt=R.length;Y<gt;Y++){const Dt=R[Y],Ft=Dt.object,Lt=Dt.geometry,$t=Dt.group;let ae=Dt.material;ae.allowOverride===!0&&nt!==null&&(ae=nt),Ft.layers.test(et.layers)&&Hr(Ft,W,et,Lt,ae,$t)}}function Hr(R,W,et,nt,Y,gt){R.onBeforeRender(w,W,et,nt,Y,gt),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(w,W,et,nt,R,gt),Y.transparent===!0&&Y.side===ra&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,w.renderBufferDirect(et,W,nt,Y,R,gt),Y.side=Wa,Y.needsUpdate=!0,w.renderBufferDirect(et,W,nt,Y,R,gt),Y.side=ra):w.renderBufferDirect(et,W,nt,Y,R,gt),R.onAfterRender(w,W,et,nt,Y,gt)}function kn(R,W,et){W.isScene!==!0&&(W=Vt);const nt=Gt.get(R),Y=g.state.lights,gt=g.state.shadowsArray,Dt=Y.state.version,Ft=ft.getParameters(R,Y.state,gt,W,et),Lt=ft.getProgramCacheKey(Ft);let $t=nt.programs;nt.environment=R.isMeshStandardMaterial?W.environment:null,nt.fog=W.fog,nt.envMap=(R.isMeshStandardMaterial?Ze:Qe).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,$t===void 0&&(R.addEventListener("dispose",mt),$t=new Map,nt.programs=$t);let ae=$t.get(Lt);if(ae!==void 0){if(nt.currentProgram===ae&&nt.lightsStateVersion===Dt)return xn(R,Ft),ae}else Ft.uniforms=ft.getUniforms(R),R.onBeforeCompile(Ft,w),ae=ft.acquireProgram(Ft,Lt),$t.set(Lt,ae),nt.uniforms=Ft.uniforms;const te=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(te.clippingPlanes=Tt.uniform),xn(R,Ft),nt.needsLights=qc(R),nt.lightsStateVersion=Dt,nt.needsLights&&(te.ambientLightColor.value=Y.state.ambient,te.lightProbe.value=Y.state.probe,te.directionalLights.value=Y.state.directional,te.directionalLightShadows.value=Y.state.directionalShadow,te.spotLights.value=Y.state.spot,te.spotLightShadows.value=Y.state.spotShadow,te.rectAreaLights.value=Y.state.rectArea,te.ltc_1.value=Y.state.rectAreaLTC1,te.ltc_2.value=Y.state.rectAreaLTC2,te.pointLights.value=Y.state.point,te.pointLightShadows.value=Y.state.pointShadow,te.hemisphereLights.value=Y.state.hemi,te.directionalShadowMap.value=Y.state.directionalShadowMap,te.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,te.spotShadowMap.value=Y.state.spotShadowMap,te.spotLightMatrix.value=Y.state.spotLightMatrix,te.spotLightMap.value=Y.state.spotLightMap,te.pointShadowMap.value=Y.state.pointShadowMap,te.pointShadowMatrix.value=Y.state.pointShadowMatrix),nt.currentProgram=ae,nt.uniformsList=null,ae}function an(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=zc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function xn(R,W){const et=Gt.get(R);et.outputColorSpace=W.outputColorSpace,et.batching=W.batching,et.batchingColor=W.batchingColor,et.instancing=W.instancing,et.instancingColor=W.instancingColor,et.instancingMorph=W.instancingMorph,et.skinning=W.skinning,et.morphTargets=W.morphTargets,et.morphNormals=W.morphNormals,et.morphColors=W.morphColors,et.morphTargetsCount=W.morphTargetsCount,et.numClippingPlanes=W.numClippingPlanes,et.numIntersection=W.numClipIntersection,et.vertexAlphas=W.vertexAlphas,et.vertexTangents=W.vertexTangents,et.toneMapping=W.toneMapping}function ua(R,W,et,nt,Y){W.isScene!==!0&&(W=Vt),re.resetTextureUnits();const gt=W.fog,Dt=nt.isMeshStandardMaterial?W.environment:null,Ft=X===null?w.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Nr,Lt=(nt.isMeshStandardMaterial?Ze:Qe).get(nt.envMap||Dt),$t=nt.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ae=!!et.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),te=!!et.morphAttributes.position,de=!!et.morphAttributes.normal,Ue=!!et.morphAttributes.color;let Ve=ka;nt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ve=w.toneMapping);const Le=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,pe=Le!==void 0?Le.length:0,Ht=Gt.get(nt),ke=g.state.lights;if(ne===!0&&(ut===!0||R!==C)){const hn=R===C&&nt.id===D;Tt.setState(nt,R,hn)}let be=!1;nt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ke.state.version||Ht.outputColorSpace!==Ft||Y.isBatchedMesh&&Ht.batching===!1||!Y.isBatchedMesh&&Ht.batching===!0||Y.isBatchedMesh&&Ht.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ht.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ht.instancing===!1||!Y.isInstancedMesh&&Ht.instancing===!0||Y.isSkinnedMesh&&Ht.skinning===!1||!Y.isSkinnedMesh&&Ht.skinning===!0||Y.isInstancedMesh&&Ht.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ht.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ht.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ht.instancingMorph===!1&&Y.morphTexture!==null||Ht.envMap!==Lt||nt.fog===!0&&Ht.fog!==gt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Tt.numPlanes||Ht.numIntersection!==Tt.numIntersection)||Ht.vertexAlphas!==$t||Ht.vertexTangents!==ae||Ht.morphTargets!==te||Ht.morphNormals!==de||Ht.morphColors!==Ue||Ht.toneMapping!==Ve||Ht.morphTargetsCount!==pe)&&(be=!0):(be=!0,Ht.__version=nt.version);let Sn=Ht.currentProgram;be===!0&&(Sn=kn(nt,W,Y));let zi=!1,gn=!1,Za=!1;const _e=Sn.getUniforms(),Rn=Ht.uniforms;if(Pt.useProgram(Sn.program)&&(zi=!0,gn=!0,Za=!0),nt.id!==D&&(D=nt.id,gn=!0),zi||C!==R){Pt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),_e.setValue(I,"projectionMatrix",R.projectionMatrix),_e.setValue(I,"viewMatrix",R.matrixWorldInverse);const tn=_e.map.cameraPosition;tn!==void 0&&tn.setValue(I,Nt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&_e.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&_e.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,gn=!0,Za=!0)}if(Y.isSkinnedMesh){_e.setOptional(I,Y,"bindMatrix"),_e.setOptional(I,Y,"bindMatrixInverse");const hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),_e.setValue(I,"boneTexture",hn.boneTexture,re))}Y.isBatchedMesh&&(_e.setOptional(I,Y,"batchingTexture"),_e.setValue(I,"batchingTexture",Y._matricesTexture,re),_e.setOptional(I,Y,"batchingIdTexture"),_e.setValue(I,"batchingIdTexture",Y._indirectTexture,re),_e.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&_e.setValue(I,"batchingColorTexture",Y._colorsTexture,re));const Un=et.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&yt.update(Y,et,Sn),(gn||Ht.receiveShadow!==Y.receiveShadow)&&(Ht.receiveShadow=Y.receiveShadow,_e.setValue(I,"receiveShadow",Y.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(Rn.envMap.value=Lt,Rn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&W.environment!==null&&(Rn.envMapIntensity.value=W.environmentIntensity),gn&&(_e.setValue(I,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&Gr(Rn,Za),gt&&nt.fog===!0&&vt.refreshFogUniforms(Rn,gt),vt.refreshMaterialUniforms(Rn,nt,k,K,g.state.transmissionRenderTarget[R.id]),zc.upload(I,an(Ht),Rn,re)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(zc.upload(I,an(Ht),Rn,re),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&_e.setValue(I,"center",Y.center),_e.setValue(I,"modelViewMatrix",Y.modelViewMatrix),_e.setValue(I,"normalMatrix",Y.normalMatrix),_e.setValue(I,"modelMatrix",Y.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const hn=nt.uniformsGroups;for(let tn=0,Ls=hn.length;tn<Ls;tn++){const Ei=hn[tn];oe.update(Ei,Sn),oe.bind(Ei,Sn)}}return Sn}function Gr(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function qc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,W,et){const nt=Gt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),Gt.get(R.texture).__webglTexture=W,Gt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:et,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const et=Gt.get(R);et.__webglFramebuffer=W,et.__useDefaultFramebuffer=W===void 0};const Yc=I.createFramebuffer();this.setRenderTarget=function(R,W=0,et=0){X=R,z=W,F=et;let nt=!0,Y=null,gt=!1,Dt=!1;if(R){const Lt=Gt.get(R);if(Lt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(I.FRAMEBUFFER,null),nt=!1;else if(Lt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Lt.__hasExternalTextures)re.rebindTextures(R,Gt.get(R.texture).__webglTexture,Gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const te=R.depthTexture;if(Lt.__boundDepthTexture!==te){if(te!==null&&Gt.has(te)&&(R.width!==te.image.width||R.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const $t=R.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ae=Gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[W])?Y=ae[W][et]:Y=ae[W],gt=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Y=Gt.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?Y=ae[et]:Y=ae,G.copy(R.viewport),Z.copy(R.scissor),at=R.scissorTest}else G.copy(wt).multiplyScalar(k).floor(),Z.copy(Mt).multiplyScalar(k).floor(),at=Rt;if(et!==0&&(Y=Yc),Pt.bindFramebuffer(I.FRAMEBUFFER,Y)&&nt&&Pt.drawBuffers(R,Y),Pt.viewport(G),Pt.scissor(Z),Pt.setScissorTest(at),gt){const Lt=Gt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Lt.__webglTexture,et)}else if(Dt){const Lt=W;for(let $t=0;$t<R.textures.length;$t++){const ae=Gt.get(R.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ae.__webglTexture,et,Lt)}}else if(R!==null&&et!==0){const Lt=Gt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Lt.__webglTexture,et)}D=-1},this.readRenderTargetPixels=function(R,W,et,nt,Y,gt,Dt,Ft=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt){Pt.bindFramebuffer(I.FRAMEBUFFER,Lt);try{const $t=R.textures[Ft],ae=$t.format,te=$t.type;if(!qt.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-nt&&et>=0&&et<=R.height-Y&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(W,et,nt,Y,Ot.convert(ae),Ot.convert(te),gt))}finally{const $t=X!==null?Gt.get(X).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(R,W,et,nt,Y,gt,Dt,Ft=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Dt!==void 0&&(Lt=Lt[Dt]),Lt)if(W>=0&&W<=R.width-nt&&et>=0&&et<=R.height-Y){Pt.bindFramebuffer(I.FRAMEBUFFER,Lt);const $t=R.textures[Ft],ae=$t.format,te=$t.type;if(!qt.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.bufferData(I.PIXEL_PACK_BUFFER,gt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ft),I.readPixels(W,et,nt,Y,Ot.convert(ae),Ot.convert(te),0);const Ue=X!==null?Gt.get(X).__webglFramebuffer:null;Pt.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Vy(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,de),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,gt),I.deleteBuffer(de),I.deleteSync(Ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,et=0){const nt=Math.pow(2,-et),Y=Math.floor(R.image.width*nt),gt=Math.floor(R.image.height*nt),Dt=W!==null?W.x:0,Ft=W!==null?W.y:0;re.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,et,0,0,Dt,Ft,Y,gt),Pt.unbindTexture()};const Qo=I.createFramebuffer(),ja=I.createFramebuffer();this.copyTextureToTexture=function(R,W,et=null,nt=null,Y=0,gt=null){gt===null&&(Y!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=Y,Y=0):gt=0);let Dt,Ft,Lt,$t,ae,te,de,Ue,Ve;const Le=R.isCompressedTexture?R.mipmaps[gt]:R.image;if(et!==null)Dt=et.max.x-et.min.x,Ft=et.max.y-et.min.y,Lt=et.isBox3?et.max.z-et.min.z:1,$t=et.min.x,ae=et.min.y,te=et.isBox3?et.min.z:0;else{const Un=Math.pow(2,-Y);Dt=Math.floor(Le.width*Un),Ft=Math.floor(Le.height*Un),R.isDataArrayTexture?Lt=Le.depth:R.isData3DTexture?Lt=Math.floor(Le.depth*Un):Lt=1,$t=0,ae=0,te=0}nt!==null?(de=nt.x,Ue=nt.y,Ve=nt.z):(de=0,Ue=0,Ve=0);const pe=Ot.convert(W.format),Ht=Ot.convert(W.type);let ke;W.isData3DTexture?(re.setTexture3D(W,0),ke=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(re.setTexture2DArray(W,0),ke=I.TEXTURE_2D_ARRAY):(re.setTexture2D(W,0),ke=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),Sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),Za=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ae),I.pixelStorei(I.UNPACK_SKIP_IMAGES,te);const _e=R.isDataArrayTexture||R.isData3DTexture,Rn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Un=Gt.get(R),hn=Gt.get(W),tn=Gt.get(Un.__renderTarget),Ls=Gt.get(hn.__renderTarget);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ls.__webglFramebuffer);for(let Ei=0;Ei<Lt;Ei++)_e&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(R).__webglTexture,Y,te+Ei),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Gt.get(W).__webglTexture,gt,Ve+Ei)),I.blitFramebuffer($t,ae,Dt,Ft,de,Ue,Dt,Ft,I.DEPTH_BUFFER_BIT,I.NEAREST);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||Gt.has(R)){const Un=Gt.get(R),hn=Gt.get(W);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,Qo),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ja);for(let tn=0;tn<Lt;tn++)_e?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,Y,te+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,Y),Rn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,gt,Ve+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,gt),Y!==0?I.blitFramebuffer($t,ae,Dt,Ft,de,Ue,Dt,Ft,I.COLOR_BUFFER_BIT,I.NEAREST):Rn?I.copyTexSubImage3D(ke,gt,de,Ue,Ve+tn,$t,ae,Dt,Ft):I.copyTexSubImage2D(ke,gt,de,Ue,$t,ae,Dt,Ft);Pt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Rn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(ke,gt,de,Ue,Ve,Dt,Ft,Lt,pe,Ht,Le.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ke,gt,de,Ue,Ve,Dt,Ft,Lt,pe,Le.data):I.texSubImage3D(ke,gt,de,Ue,Ve,Dt,Ft,Lt,pe,Ht,Le):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,gt,de,Ue,Dt,Ft,pe,Ht,Le.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,gt,de,Ue,Le.width,Le.height,pe,Le.data):I.texSubImage2D(I.TEXTURE_2D,gt,de,Ue,Dt,Ft,pe,Ht,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Za),gt===0&&W.generateMipmaps&&I.generateMipmap(ke),Pt.unbindTexture()},this.initRenderTarget=function(R){Gt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){z=0,F=0,X=null,Pt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ce._getUnpackColorSpace()}}la.registerPlugin(bs);const Dc=[{label:"Phase 01 · Agent stable",title:"Le robot apprend et agit correctement.",description:"Au début, le comportement semble efficace : trajectoire propre, actions cohérentes, récompenses positives.",tone:"stable"},{label:"Phase 02 · Exploration risquée",title:"L’environnement devient incertain.",description:"Les actions exploratoires créent des trajectoires dangereuses et les premiers signaux d’alerte apparaissent.",tone:"warning"},{label:"Phase 03 · Instabilité",title:"La politique devient fragile.",description:"Bruit, perturbations et convergence sous-optimale provoquent des mouvements hésitants.",tone:"warning"},{label:"Phase 04 · Échec critique",title:"Le robot tombe et s’endommage.",description:"La limite du RL classique devient visible : collisions, perte d’équilibre, mauvaises décisions.",tone:"danger"}],fA=["Exploration Risk","Sample Inefficiency","Training Instability","Suboptimal Convergence","High-Dimensional State Space"];function vv(r,e=0,i=1){return Math.min(Math.max(r,e),i)}function wi(r){const e=vv(r);return e*e*(3-2*e)}function Nn(r,e,i){return r+(e-r)*i}function aa(r,e,i,s=.02){const l=new ws(r[0],r[1],r[2],2,2,2),u=new bn(l,e);return u.position.set(i[0],i[1],i[2]),u.castShadow=!0,u.receiveShadow=!0,u.userData.radius=s,u}function br(r,e=.13){const i=new bn(new Ko(e,18,12),r);return i.castShadow=!0,i.receiveShadow=!0,i}function hA(){const r=new Va;r.name="procedural-rl-robot";const e=new ys({color:"#f3f5fb",roughness:.38,metalness:.42}),i=new ys({color:"#151426",roughness:.42,metalness:.75}),s=new ys({color:"#7c3aed",roughness:.35,metalness:.55}),l=new ys({color:"#ff2d55",roughness:.28,metalness:.42,emissive:"#4b0014",emissiveIntensity:.12}),u=new ys({color:"#baffd8",emissive:"#2cff8f",emissiveIntensity:1.55,roughness:.18}),h=aa([.64,.9,.32],e,[0,1.42,0]),d=aa([.34,.34,.035],i,[0,1.48,.18]),m=new bn(new Fd(.14,.22,3),l);m.position.set(0,1.52,.205),m.rotation.z=Math.PI,m.castShadow=!0;const p=br(i,.13);p.position.set(0,1.97,0);const S=aa([.54,.42,.42],e,[0,2.26,0]),_=new bn(new Ko(.045,16,10),u),x=_.clone();_.position.set(-.12,2.29,.23),x.position.set(.12,2.29,.23);const y=aa([.045,.32,.045],i,[.22,2.62,0]);y.rotation.z=-.25,r.add(h,d,m,p,S,_,x,y);const E={};function A(g){const N=new Va;N.position.set(g*.43,1.78,0);const L=br(i,.12),w=aa([.14,.46,.14],e,[0,-.25,0]),P=br(s,.095);P.position.set(0,-.52,0);const z=aa([.13,.44,.13],e,[0,-.76,0]),F=br(i,.09);F.position.set(0,-1.03,.02),N.add(L,w,P,z,F),E[g<0?"leftArm":"rightArm"]=N,r.add(N)}function M(g){const N=new Va;N.position.set(g*.2,.98,0);const L=br(i,.11),w=aa([.16,.56,.16],e,[0,-.33,0]),P=br(s,.1);P.position.set(0,-.66,0);const z=aa([.15,.54,.15],e,[0,-.96,0]),F=aa([.28,.1,.46],i,[0,-1.27,.12]);N.add(L,w,P,z,F),E[g<0?"leftLeg":"rightLeg"]=N,r.add(N)}return A(-1),A(1),M(-1),M(1),r.position.set(-1.5,0,0),r.rotation.y=-.18,{robot:r,limbs:E,warning:m,eyeL:_,eyeR:x}}function dA(r){r.traverse(e=>{const i=e;i.geometry&&i.geometry.dispose();const s=i.material;Array.isArray(s)?s.forEach(l=>l.dispose()):s&&s.dispose()})}function pA(){const r=un.useRef(null),e=un.useRef(null),[i,s]=un.useState(Dc[0]),l=un.useRef(0),u=un.useRef(0);return un.useEffect(()=>{const h=r.current,d=e.current;if(!h||!d)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p=new uA({canvas:h,alpha:!0,antialias:!m,powerPreference:"high-performance"});p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),p.shadowMap.enabled=!m,p.shadowMap.type=F_,p.outputColorSpace=ti;const S=new dM;S.fog=new Pd("#ffeaf4",.055);const _=new ei(38,1,.1,100);_.position.set(4.2,2.75,5.4);const x=new TM("#ffffff",1.05),y=new EM("#ffffff",2.35);y.position.set(3,5,3),y.castShadow=!m,y.shadow.mapSize.set(1024,1024);const E=new Uh("#ff4fbd",4.8,7.5);E.position.set(-2.5,1.35,1.4);const A=new Uh("#22d3ee",2.2,7);A.position.set(2.8,1.8,1.1);const M=new Uh("#ff2d55",0,9);M.position.set(0,1.4,1.2),S.add(x,y,E,A,M);const g=new ys({color:"#f7dce9",roughness:.72,metalness:.08}),N=new bn(new Zo(12,9,1,1),g);N.rotation.x=-Math.PI/2,N.position.y=-.31,N.receiveShadow=!0,S.add(N);const L=new RM(12,24,"#d833e8","#7c3aed");L.position.y=-.302;const w=L.material;w.opacity=.18,w.transparent=!0,S.add(L);const{robot:P,limbs:z,warning:F,eyeL:X,eyeR:D}=hA();S.add(P);const C=new ys({color:"#ff7a5c",roughness:.52,metalness:.28,emissive:"#260000",emissiveIntensity:.06}),G=new Va,Z=[];for(let Mt=0;Mt<5;Mt+=1){const Rt=.26+Mt%2*.18,jt=new bn(new ws(.34+Mt*.03,Rt,.48),C);jt.userData.height=Rt,jt.position.set(.05+Mt*.48,-.16+Rt/2,.7-Mt%3*.36),jt.rotation.y=.2-Mt*.13,jt.castShadow=!0,jt.receiveShadow=!0,jt.scale.setScalar(.01),G.add(jt),Z.push(jt)}S.add(G);const at=new Fc({color:"#ff7a18",transparent:!0,opacity:0}),ot=[];for(let Mt=0;Mt<26;Mt+=1){const Rt=new bn(new Ko(.018+Mt%4*.006,8,6),at.clone());Rt.position.set((Math.random()-.5)*1.4,.35+Math.random()*1.2,.1+Math.random()*.85),ot.push(Rt),S.add(Rt)}const st=new bn(new Hd(.64,.012,8,80),new Fc({color:"#ff2d55",transparent:!0,opacity:0}));st.position.set(0,1.2,.02),st.rotation.x=Math.PI/2,S.add(st);const O=()=>{const Mt=h.getBoundingClientRect(),Rt=Math.max(320,Mt.width),jt=Math.max(320,Mt.height);p.setSize(Rt,jt,!1),_.aspect=Rt/jt,_.updateProjectionMatrix()},K=new ResizeObserver(O);K.observe(h),O();const k=bs.create({trigger:d,start:"top top",end:"bottom bottom",scrub:!0,invalidateOnRefresh:!0,onUpdate:Mt=>{u.current=Mt.progress;const Rt=Math.min(Dc.length-1,Math.floor(vv(Mt.progress,0,.999)*Dc.length));Rt!==l.current&&(l.current=Rt,s(Dc[Rt]))}});let _t=0;const xt=new AM,wt=()=>{const Mt=xt.getElapsedTime(),Rt=u.current,jt=1-wi((Rt-.2)/.18),ne=wi((Rt-.18)/.18),ut=wi((Rt-.42)/.18),dt=wi((Rt-.62)/.2),Nt=wi((Rt-.78)/.18),Zt=Math.sin(Mt*5.8)*.42*(1-dt),Vt=(Math.sin(Mt*28)*.025+Math.sin(Mt*17)*.018)*ne*(1-dt);P.position.x=Nn(-1.55,.28,wi(Rt/.55))+Vt,P.position.y=Nn(0,-.44,dt)+Math.abs(Math.sin(Mt*5.8))*.035*jt,P.position.z=Nn(0,.25,dt),P.rotation.x=Nn(0,.82,dt),P.rotation.z=Nn(.02*Math.sin(Mt*2),-1.14,dt)+Math.sin(Mt*19)*.035*ne*(1-dt),P.rotation.y=-.18+Nn(0,.5,dt),z.leftLeg.rotation.x=Zt,z.rightLeg.rotation.x=-Zt,z.leftArm.rotation.x=-Zt*.74-.18*ut,z.rightArm.rotation.x=Zt*.74+.32*ut,z.leftArm.rotation.z=Nn(.22,.74,dt),z.rightArm.rotation.z=Nn(-.22,-.85,dt),z.leftLeg.rotation.z=Nn(0,.42,dt),z.rightLeg.rotation.z=Nn(0,-.58,dt),F.scale.setScalar(1+Math.sin(Mt*8)*.12*ne);const ce=F.material;ce.emissiveIntensity=.2+ne*(1.2+Math.sin(Mt*10)*.5);const je=X.material,I=D.material;je.emissive.set(ne>.48?"#ff2d55":"#2cff8f"),I.emissive.set(ne>.48?"#ff2d55":"#2cff8f"),je.emissiveIntensity=1.4+ne*1.6,I.emissiveIntensity=1.4+ne*1.6,Z.forEach((Jt,qt)=>{const Pt=wi((Rt-(.2+qt*.025))/.13);Jt.scale.setScalar(Nn(.01,1,Pt)),Jt.position.y=-.16+Jt.userData.height/2+Math.sin(Mt*2+qt)*.01*Pt});const Ee=st.material;Ee.opacity=ne*(.12+.18*Math.abs(Math.sin(Mt*4)))*(1-dt*.4),st.scale.setScalar(1+Math.sin(Mt*3)*.08),M.intensity=ne*4.2+Nt*3.2,ot.forEach((Jt,qt)=>{const Pt=Jt.material,Ne=Nt*(.25+.75*Math.abs(Math.sin(Mt*(3.2+qt*.06)+qt)));Pt.opacity=Ne,Jt.position.x+=Math.sin(Mt*2+qt)*9e-4*Nt,Jt.position.y+=.002*Nt,Jt.position.y>1.75&&(Jt.position.y=.3+Math.random()*.5)}),_.position.x=Nn(4.2,2.55,wi((Rt-.5)/.35)),_.position.y=Nn(2.75,1.75,wi((Rt-.42)/.42)),_.position.z=Nn(5.4,4,wi((Rt-.55)/.35)),_.lookAt(0,Nn(1.25,.62,dt),.05),p.render(S,_),_t=requestAnimationFrame(wt)};return wt(),()=>{cancelAnimationFrame(_t),k.kill(),K.disconnect(),p.dispose(),dA(S)}},[]),rt.jsx("section",{className:"robot-intro",ref:e,"aria-label":"Simulation 3D robot RL classique",children:rt.jsxs("div",{className:"robot-intro-sticky",children:[rt.jsx("canvas",{ref:r,className:"robot-canvas","aria-hidden":"true"}),rt.jsxs("div",{className:"robot-overlay robot-overlay-left",children:[rt.jsxs("div",{className:"eyebrow intro-eyebrow",children:[rt.jsx("span",{})," Intro 3D · Deep RL classique"]}),rt.jsx("h1",{children:"Le robot apprend. Puis l’erreur devient réelle."}),rt.jsx("p",{children:"Une simulation cinématique montre le paradoxe du Reinforcement Learning classique : performance initiale, exploration risquée, instabilité, chute."})]}),rt.jsxs("div",{className:`robot-phase robot-phase-${i.tone}`,children:[rt.jsx("small",{children:i.label}),rt.jsx("strong",{children:i.title}),rt.jsx("span",{children:i.description})]}),rt.jsx("div",{className:"robot-limitations","aria-hidden":"true",children:fA.map((h,d)=>rt.jsx("span",{style:{"--delay":`${d*.12}s`},children:h},h))}),rt.jsx("div",{className:"robot-final-line",children:"Dommages et mauvaises décisions"})]})})}la.registerPlugin(bs);const Ar=[{id:"environment",scene:"05",eyebrow:"Monde réel",title:"Environnement",subtitle:"L’agent observe l’état, agit dans le monde réel, puis reçoit une récompense qui guide son apprentissage.",image:jS,accent:"#22d3ee",origin:"50% 20%",ring:{x:"29%",y:"12%",w:"42%",h:"18%"},points:["Observations capteurs","Récompenses rₜ","État courant sₜ","Contraintes réelles"]},{id:"features",scene:"06",eyebrow:"Représentation partagée",title:"Extracteur de features",subtitle:"Le réseau profond transforme les observations brutes en features latentes propres et exploitables par DQN et PPO.",image:ZS,accent:"#a855f7",origin:"50% 43%",ring:{x:"32%",y:"36%",w:"36%",h:"18%"},points:["Pixels vers vecteurs","Réduction de dimension","Information pertinente","Meilleure généralisation"]},{id:"dqn",scene:"07",eyebrow:"Value Based",title:"Value Based (DQN)",subtitle:"DQN apprend les valeurs Q, stabilise l’entraînement avec un réseau cible et réutilise les expériences.",image:QS,accent:"#f97316",origin:"20% 70%",ring:{x:"6%",y:"57%",w:"28%",h:"30%"},points:["Q-Network","Target Network","Replay Buffer","Mini-batch learning"]},{id:"ppo",scene:"08",eyebrow:"Policy Based",title:"Policy Based (PPO)",subtitle:"PPO stabilise les actions continues avec une politique acteur-critique, le clipping et une optimisation contrôlée.",image:KS,accent:"#22c55e",origin:"78% 70%",ring:{x:"66%",y:"57%",w:"27%",h:"30%"},points:["Actor policy π","Critic value V","Clipping PPO","Optimiseur Adam"]},{id:"loop",scene:"09",eyebrow:"Apprentissage continu",title:"Boucle d’apprentissage",subtitle:"Le système revient sans cesse à la boucle : observer, décider, agir, apprendre puis s’améliorer.",image:JS,accent:"#ec4899",origin:"50% 90%",ring:{x:"20%",y:"89%",w:"60%",h:"9%"},points:["Observer","Décider","Agir","Apprendre","S’améliorer"]}];function xv(r,e=0,i=1){return Math.min(Math.max(r,e),i)}function Ih(r){const e=xv(r);return e*e*(3-2*e)}function mA(){return un.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=new WS({duration:.78,lerp:.12,smoothWheel:!0,wheelMultiplier:.86,touchMultiplier:1.05});e.on("scroll",bs.update);const i=s=>e.raf(s*1e3);return la.ticker.add(i),la.ticker.lagSmoothing(0),()=>{la.ticker.remove(i),e.destroy()}},[]),null}function gA(){const r=un.useMemo(()=>Array.from({length:10},(e,i)=>({id:i,left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,duration:`${12+Math.random()*8}s`,delay:`${-Math.random()*8}s`})),[]);return rt.jsxs(rt.Fragment,{children:[rt.jsx("div",{className:"global-grid","aria-hidden":"true"}),rt.jsx("div",{className:"particle-field","aria-hidden":"true",children:r.map(e=>rt.jsx("span",{className:"particle",style:{left:e.left,top:e.top,"--duration":e.duration,animationDelay:e.delay}},e.id))}),rt.jsxs("div",{className:"brand-tag","aria-hidden":"true",children:[rt.jsx("span",{})," Deep Reinforcement Learning Story"]})]})}function _A(){un.useEffect(()=>{const r=la.context(()=>{la.utils.toArray("[data-reveal]").forEach(e=>{la.fromTo(e,{autoAlpha:0,y:28,scale:.99},{autoAlpha:1,y:0,scale:1,duration:.68,ease:"power3.out",scrollTrigger:{trigger:e,start:"top 90%",toggleActions:"play none none reverse"}})})});return()=>r.revert()},[])}function Ir({children:r,dark:e=!1}){return rt.jsxs("div",{className:`eyebrow ${e?"eyebrow-dark":""}`,"data-reveal":!0,children:[rt.jsx("span",{})," ",r]})}function Wc({src:r,alt:e,priority:i=!1}){return rt.jsx("div",{className:"image-frame","data-reveal":!0,children:rt.jsx("img",{src:r,alt:e,loading:i?"eager":"lazy",decoding:"async"})})}function vA(){return rt.jsx("section",{className:"section hero-section",children:rt.jsxs("div",{className:"section-shell hero-layout",children:[rt.jsxs("div",{className:"copy-panel hero-copy",children:[rt.jsx(Ir,{children:"01 · Problème"}),rt.jsx("p",{className:"kicker","data-reveal":!0,children:"Reinforcement Learning classique"}),rt.jsx("h1",{className:"hero-title","data-reveal":!0,children:"Apprendre vite ne suffit pas."}),rt.jsx("p",{className:"lead","data-reveal":!0,children:"Un agent peut progresser rapidement, puis échouer lorsque l’exploration devient risquée, instable ou trop coûteuse dans le monde réel."}),rt.jsxs("div",{className:"mini-cards","data-reveal":!0,children:[rt.jsxs("article",{children:[rt.jsx("strong",{children:"Limitations"}),rt.jsx("span",{children:"Exploration dangereuse, instabilité, échantillons coûteux."})]}),rt.jsxs("article",{children:[rt.jsx("strong",{children:"Conséquence"}),rt.jsx("span",{children:"Dommages, collisions et mauvaises décisions."})]}),rt.jsxs("article",{children:[rt.jsx("strong",{children:"Objectif"}),rt.jsx("span",{children:"Construire un apprentissage plus stable, sûr et intelligent."})]})]})]}),rt.jsx("div",{className:"visual-panel hero-visual",children:rt.jsx(Wc,{src:YS,alt:"Limites du reinforcement learning classique",priority:!0})})]})})}function xA(){return rt.jsx("section",{className:"section problem-section",children:rt.jsxs("div",{className:"section-shell problem-layout",children:[rt.jsxs("div",{className:"copy-panel",children:[rt.jsx(Ir,{children:"02 · Instabilité"}),rt.jsx("h2",{className:"section-title","data-reveal":!0,children:"Le vrai problème, c’est la stabilité."}),rt.jsx("p",{className:"lead","data-reveal":!0,children:"Le RL classique peut paraître performant, puis se dégrader dès que le bruit, la dimension élevée et les perturbations dominent."}),rt.jsxs("div",{className:"state-grid","data-reveal":!0,children:[rt.jsxs("article",{children:[rt.jsx("b",{children:"Avant"}),rt.jsx("p",{children:"Convergence difficile, mauvaise généralisation, décisions risquées."})]}),rt.jsxs("article",{children:[rt.jsx("b",{children:"Après"}),rt.jsx("p",{children:"Feedback clair, progression visible, agent apparemment stable."})]})]})]}),rt.jsx("div",{className:"visual-panel",children:rt.jsx(Wc,{src:B_,alt:"Comparaison entre instabilité et intelligence"})})]})})}function SA(){return rt.jsx("section",{className:"section solution-section dark-section",children:rt.jsxs("div",{className:"section-shell solution-layout",children:[rt.jsxs("div",{className:"copy-panel",children:[rt.jsx(Ir,{dark:!0,children:"03 · Question"}),rt.jsx("h2",{className:"section-title","data-reveal":!0,children:"Comment rendre l’apprentissage plus sûr et plus intelligent ?"}),rt.jsx("p",{className:"lead","data-reveal":!0,children:"En combinant représentation profonde, décision discrète et contrôle continu dans une architecture hybride cohérente."})]}),rt.jsxs("div",{className:"neural-stage","data-reveal":!0,"aria-hidden":"true",children:[rt.jsx("div",{className:"neural-core"}),rt.jsx("span",{className:"neural-node node-1"}),rt.jsx("span",{className:"neural-node node-2"}),rt.jsx("span",{className:"neural-node node-3"}),rt.jsx("span",{className:"neural-node node-4"})]})]})})}function yA(){const r=un.useRef(null),e=un.useRef(null),i=un.useRef(null),s=un.useRef(null),l=un.useRef(null),u=un.useRef({}),h=un.useRef({}),d=un.useRef(-1);return un.useEffect(()=>{const m=r.current,p=e.current,S=i.current,_=s.current,x=l.current;if(!m||!p||!S||!_||!x)return;const y=window.matchMedia("(prefers-reduced-motion: reduce)").matches,E=g=>{const N=Ar.length,L=xv(g,0,.999999)*N,w=Math.min(N-1,Math.floor(L)),P=L-w,z=Ar[w];d.current!==w&&(d.current=w,Ar.forEach((st,O)=>{const K=u.current[st.id],k=h.current[st.id];K&&(K.dataset.active=O===w?"true":"false"),k&&(k.dataset.active=O===w?"true":"false")}));let F=0,X=0,D=36;if(P<.18)F=0,X=0;else if(P<.42)F=Ih((P-.18)/.24),X=0;else if(P<.72)F=1,X=Ih((P-.42)/.13),D=36*(1-X);else if(P<.88)F=1,X=1,D=0;else{const st=Ih((P-.88)/.12);F=1-st,X=1-st,D=-28*st}const C=y?1:1+F*.46,G=1-F*.48,Z=F*1.6,at=1-F*.75,ot=F>.25?0:1-F*2.8;S.style.transformOrigin=z.origin,S.style.transform=`perspective(1400px) rotateX(${(2.5-F*1.4).toFixed(2)}deg) rotateY(${(-3.5+F*2.2).toFixed(2)}deg) translate3d(0,0,0) scale(${C.toFixed(4)})`,S.style.opacity=G.toString(),S.style.filter=`blur(${Z.toFixed(2)}px)`,_.style.opacity=at.toString(),_.style.transform=`translate3d(0, ${(-24*F).toFixed(2)}px, 0)`,x.style.opacity=ot.toString(),x.style.transform=`translate3d(-50%, ${(18*F).toFixed(2)}px, 0)`,Ar.forEach((st,O)=>{const K=u.current[st.id],k=h.current[st.id],_t=O===w,xt=_t?X:0,wt=_t?F:0;K&&(K.style.opacity=xt.toString(),K.style.visibility=xt>.02?"visible":"hidden",K.style.transform=`perspective(1400px) rotateX(${(2-xt*1.1).toFixed(2)}deg) rotateY(${(-2+xt*1.2).toFixed(2)}deg) translate3d(0, ${D.toFixed(2)}px, 0) scale(${(.982+xt*.018).toFixed(4)})`),k&&(k.style.opacity=wt.toString(),k.style.visibility=wt>.02?"visible":"hidden",k.style.transform=`scale(${(.96+wt*.04).toFixed(4)})`)})},A=la.context(()=>{bs.create({trigger:m,start:"top top",end:"bottom bottom",scrub:!0,invalidateOnRefresh:!0,onUpdate:g=>E(g.progress),onRefresh:g=>E(g.progress)}),E(0)},m),M=()=>bs.refresh();return window.addEventListener("load",M),window.addEventListener("resize",M),()=>{window.removeEventListener("load",M),window.removeEventListener("resize",M),A.revert()}},[]),rt.jsx("section",{className:"architecture-section",ref:r,"aria-label":"Architecture DQN-PPO contrôlée par scroll",children:rt.jsxs("div",{className:"architecture-stage",ref:e,children:[rt.jsxs("div",{className:"arch-copy",ref:s,children:[rt.jsx(Ir,{children:"04 · Architecture principale"}),rt.jsxs("h2",{className:"section-title compact-title",children:["Architecture globale ",rt.jsx("span",{children:"des algorithmes DRL"})]}),rt.jsx("p",{className:"lead",children:"Le scroll pilote la caméra : architecture globale, zoom vers le module concerné, vue détaillée, puis retour automatique."})]}),rt.jsx("div",{className:"architecture-frame-wrap",children:rt.jsxs("div",{className:"architecture-frame",ref:i,children:[rt.jsx("img",{src:qS,alt:"Architecture globale des algorithmes DRL",loading:"eager",decoding:"async"}),Ar.map(m=>rt.jsx("span",{ref:p=>{h.current[m.id]=p},className:"module-highlight",style:{"--x":m.ring.x,"--y":m.ring.y,"--w":m.ring.w,"--h":m.ring.h,"--accent":m.accent}},m.id))]})}),rt.jsx("div",{className:"focus-stage",children:Ar.map(m=>rt.jsxs("article",{className:"focus-view",style:{"--accent":m.accent},ref:p=>{u.current[m.id]=p},children:[rt.jsx("div",{className:"focus-image",children:rt.jsx("img",{src:m.image,alt:`${m.title} détaillé`,loading:"lazy",decoding:"async"})}),rt.jsxs("div",{className:"focus-copy",children:[rt.jsxs("p",{className:"focus-eyebrow",children:["Scène ",m.scene," · ",m.eyebrow]}),rt.jsx("h3",{children:m.title}),rt.jsx("p",{children:m.subtitle}),rt.jsx("ul",{children:m.points.map(p=>rt.jsx("li",{children:p},p))})]})]},m.id))}),rt.jsx("div",{className:"arch-helper",ref:l,children:"Scroll : vue globale → zoom module → détail → retour automatique → module suivant."})]})})}function MA(){return rt.jsx("section",{className:"section result-section",children:rt.jsxs("div",{className:"section-shell result-layout",children:[rt.jsxs("div",{className:"copy-panel",children:[rt.jsx(Ir,{children:"10 · Résultat"}),rt.jsx("h2",{className:"section-title","data-reveal":!0,children:"De l’instabilité à l’intelligence."}),rt.jsx("p",{className:"lead","data-reveal":!0,children:"Le passage aux approches avancées du Deep RL convertit une exploration instable en un contrôle autonome maîtrisé."}),rt.jsxs("div",{className:"metric-grid","data-reveal":!0,children:[rt.jsxs("article",{children:[rt.jsx("strong",{children:"Stabilité"}),rt.jsx("span",{children:"Mises à jour plus contrôlées."})]}),rt.jsxs("article",{children:[rt.jsx("strong",{children:"Performance"}),rt.jsx("span",{children:"Décisions plus efficaces."})]}),rt.jsxs("article",{children:[rt.jsx("strong",{children:"Robustesse"}),rt.jsx("span",{children:"Résistance au bruit."})]}),rt.jsxs("article",{children:[rt.jsx("strong",{children:"Continu"}),rt.jsx("span",{children:"Progression au fil du temps."})]})]})]}),rt.jsx("div",{className:"visual-panel",children:rt.jsx(Wc,{src:B_,alt:"Comparaison RL classique et architecture hybride DQN-PPO"})})]})})}function EA(){return rt.jsx("section",{className:"section final-section",children:rt.jsxs("div",{className:"section-shell final-layout",children:[rt.jsxs("div",{className:"copy-panel",children:[rt.jsx(Ir,{children:"11 · Vision finale"}),rt.jsx("h2",{className:"section-title","data-reveal":!0,children:"L’écosystème décisionnel du Deep RL."}),rt.jsx("p",{className:"lead","data-reveal":!0,children:"Un écosystème décisionnel complet qui combine perception, représentation profonde, décision discrète, contrôle continu et amélioration progressive."})]}),rt.jsx("div",{className:"visual-panel",children:rt.jsx(Wc,{src:$S,alt:"L’écosystème décisionnel du Deep RL"})})]})})}function TA(){return _A(),un.useEffect(()=>{const r=()=>bs.refresh();return window.addEventListener("load",r),()=>window.removeEventListener("load",r)},[]),rt.jsxs("main",{className:"app",children:[rt.jsx(mA,{}),rt.jsx(gA,{}),rt.jsx(pA,{}),rt.jsx(vA,{}),rt.jsx(xA,{}),rt.jsx(SA,{}),rt.jsx(yA,{}),rt.jsx(MA,{}),rt.jsx(EA,{})]})}PS.createRoot(document.getElementById("root")).render(rt.jsx(US.StrictMode,{children:rt.jsx(TA,{})}));
