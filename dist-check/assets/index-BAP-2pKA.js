(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function z1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),$1=Symbol.for("react.portal"),B1=Symbol.for("react.fragment"),j1=Symbol.for("react.strict_mode"),H1=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),W1=Symbol.for("react.context"),G1=Symbol.for("react.forward_ref"),K1=Symbol.for("react.suspense"),Q1=Symbol.for("react.memo"),Y1=Symbol.for("react.lazy"),Tg=Symbol.iterator;function J1(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var Uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zv=Object.assign,$v={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=$v,this.updater=n||Uv}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Bv(){}Bv.prototype=Vs.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=$v,this.updater=n||Uv}var Rf=Af.prototype=new Bv;Rf.constructor=Af;zv(Rf,Vs.prototype);Rf.isPureReactComponent=!0;var Sg=Array.isArray,jv=Object.prototype.hasOwnProperty,kf={current:null},Hv={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jv.call(e,r)&&!Hv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ra,type:t,key:s,ref:o,props:i,_owner:kf.current}}function X1(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function Z1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ag=/\/+/g;function lh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Z1(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ra:case $1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+lh(o,0):r,Sg(i)?(n="",t!=null&&(n=t.replace(Ag,"$&/")+"/"),Dl(i,e,n,"",function(h){return h})):i!=null&&(Cf(i)&&(i=X1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ag,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sg(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+lh(s,l);o+=Dl(s,e,n,u,i)}else if(u=J1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+lh(s,l++),o+=Dl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var It={current:null},Ol={transition:null},tS={ReactCurrentDispatcher:It,ReactCurrentBatchConfig:Ol,ReactCurrentOwner:kf};function Wv(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Cf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=Vs;oe.Fragment=B1;oe.Profiler=H1;oe.PureComponent=Af;oe.StrictMode=j1;oe.Suspense=K1;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tS;oe.act=Wv;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)jv.call(e,u)&&!Hv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ra,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:W1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q1,_context:t},t.Consumer=t};oe.createElement=qv;oe.createFactory=function(t){var e=qv.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:G1,render:t}};oe.isValidElement=Cf;oe.lazy=function(t){return{$$typeof:Y1,_payload:{_status:-1,_result:t},_init:eS}};oe.memo=function(t,e){return{$$typeof:Q1,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Ol.transition;Ol.transition={};try{t()}finally{Ol.transition=e}};oe.unstable_act=Wv;oe.useCallback=function(t,e){return It.current.useCallback(t,e)};oe.useContext=function(t){return It.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return It.current.useDeferredValue(t)};oe.useEffect=function(t,e){return It.current.useEffect(t,e)};oe.useId=function(){return It.current.useId()};oe.useImperativeHandle=function(t,e,n){return It.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return It.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return It.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return It.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return It.current.useReducer(t,e,n)};oe.useRef=function(t){return It.current.useRef(t)};oe.useState=function(t){return It.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return It.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return It.current.useTransition()};oe.version="18.3.1";Fv.exports=oe;var x=Fv.exports;const c=z1(x);var td={},Gv={exports:{}},jt={},Kv={exports:{}},Qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,K){var X=j.length;j.push(K);e:for(;0<X;){var te=X-1>>>1,Ie=j[te];if(0<i(Ie,K))j[te]=K,j[X]=Ie,X=te;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var K=j[0],X=j.pop();if(X!==K){j[0]=X;e:for(var te=0,Ie=j.length,me=Ie>>>1;te<me;){var gt=2*(te+1)-1,zn=j[gt],Ot=gt+1,Je=j[Ot];if(0>i(zn,X))Ot<Ie&&0>i(Je,zn)?(j[te]=Je,j[Ot]=X,te=Ot):(j[te]=zn,j[gt]=X,te=gt);else if(Ot<Ie&&0>i(Je,X))j[te]=Je,j[Ot]=X,te=Ot;else break e}}return K}function i(j,K){var X=j.sortIndex-K.sortIndex;return X!==0?X:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,p=null,g=3,S=!1,C=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(j){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=j)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function L(j){if(P=!1,R(j),!C)if(n(u)!==null)C=!0,gn(F);else{var K=n(h);K!==null&&sr(L,K.startTime-j)}}function F(j,K){C=!1,P&&(P=!1,_(E),E=-1),S=!0;var X=g;try{for(R(K),p=n(u);p!==null&&(!(p.expirationTime>K)||j&&!k());){var te=p.callback;if(typeof te=="function"){p.callback=null,g=p.priorityLevel;var Ie=te(p.expirationTime<=K);K=t.unstable_now(),typeof Ie=="function"?p.callback=Ie:p===n(u)&&r(u),R(K)}else r(u);p=n(u)}if(p!==null)var me=!0;else{var gt=n(h);gt!==null&&sr(L,gt.startTime-K),me=!1}return me}finally{p=null,g=X,S=!1}}var z=!1,w=null,E=-1,I=5,A=-1;function k(){return!(t.unstable_now()-A<I)}function N(){if(w!==null){var j=t.unstable_now();A=j;var K=!0;try{K=w(!0,j)}finally{K?T():(z=!1,w=null)}}else z=!1}var T;if(typeof v=="function")T=function(){v(N)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Oe=ye.port2;ye.port1.onmessage=N,T=function(){Oe.postMessage(null)}}else T=function(){D(N,0)};function gn(j){w=j,z||(z=!0,T())}function sr(j,K){E=D(function(){j(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,gn(F))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(g){case 1:case 2:case 3:var K=3;break;default:K=g}var X=g;g=K;try{return j()}finally{g=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=g;g=j;try{return K()}finally{g=X}},t.unstable_scheduleCallback=function(j,K,X){var te=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?te+X:te):X=te,j){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=X+Ie,j={id:f++,callback:K,priorityLevel:j,startTime:X,expirationTime:Ie,sortIndex:-1},X>te?(j.sortIndex=X,e(h,j),n(u)===null&&j===n(h)&&(P?(_(E),E=-1):P=!0,sr(L,X-te))):(j.sortIndex=Ie,e(u,j),C||S||(C=!0,gn(F))),j},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(j){var K=g;return function(){var X=g;g=K;try{return j.apply(this,arguments)}finally{g=X}}}})(Qv);Kv.exports=Qv;var nS=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=x,Bt=nS;function $(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yv=new Set,Yo={};function Oi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Yo[t]=e,t=0;t<e.length;t++)Yv.add(e[t])}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,iS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rg={},kg={};function sS(t){return nd.call(kg,t)?!0:nd.call(Rg,t)?!1:iS.test(t)?kg[t]=!0:(Rg[t]=!0,!1)}function oS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function aS(t,e,n,r){if(e===null||typeof e>"u"||oS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ot[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ot[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ot[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ot[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ot[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ot[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ot[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ot[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ot[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Pf=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);ot[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Pf,Nf);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Pf,Nf);ot[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});ot.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ot[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function bf(t,e,n,r){var i=ot.hasOwnProperty(e)?ot[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(aS(e,n,i,r)&&(n=null),r||i===null?sS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ir=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ul=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),Xi=Symbol.for("react.fragment"),Df=Symbol.for("react.strict_mode"),rd=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),Xv=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),id=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),xf=Symbol.for("react.memo"),pr=Symbol.for("react.lazy"),Zv=Symbol.for("react.offscreen"),Cg=Symbol.iterator;function go(t){return t===null||typeof t!="object"?null:(t=Cg&&t[Cg]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,uh;function Ro(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var ch=!1;function hh(t,e){if(!t||ch)return"";ch=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{ch=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function lS(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=hh(t.type,!1),t;case 11:return t=hh(t.type.render,!1),t;case 1:return t=hh(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xi:return"Fragment";case Ji:return"Portal";case rd:return"Profiler";case Df:return"StrictMode";case id:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Xv:return(t.displayName||"Context")+".Consumer";case Jv:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xf:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case pr:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function uS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===Df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function e_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cS(t){var e=e_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cl(t){t._valueTracker||(t._valueTracker=cS(t))}function t_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=e_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n_(t,e){e=e.checked,e!=null&&bf(t,"checked",e,!1)}function ld(t,e){n_(t,e);var n=Fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&ud(t,e.type,Fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ud(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ko=Array.isArray;function cs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error($(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error($(92));if(ko(n)){if(1<n.length)throw Error($(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fr(n)}}function r_(t,e){var n=Fr(e.value),r=Fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function i_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?i_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hl,s_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hS=["Webkit","ms","Moz","O"];Object.keys(Vo).forEach(function(t){hS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vo[e]=Vo[t]})});function o_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vo.hasOwnProperty(t)&&Vo[t]?(""+e).trim():e+"px"}function a_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=o_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var dS=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dd(t,e){if(e){if(dS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error($(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error($(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error($(61))}if(e.style!=null&&typeof e.style!="object")throw Error($(62))}}function fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var md=null;function Lf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pd=null,hs=null,ds=null;function Og(t){if(t=Pa(t)){if(typeof pd!="function")throw Error($(280));var e=t.stateNode;e&&(e=ic(e),pd(t.stateNode,t.type,e))}}function l_(t){hs?ds?ds.push(t):ds=[t]:hs=t}function u_(){if(hs){var t=hs,e=ds;if(ds=hs=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function c_(t,e){return t(e)}function h_(){}var dh=!1;function d_(t,e,n){if(dh)return t(e,n);dh=!0;try{return c_(t,e,n)}finally{dh=!1,(hs!==null||ds!==null)&&(h_(),u_())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var r=ic(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error($(231,e,typeof n));return n}var gd=!1;if(Qn)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){gd=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{gd=!1}function fS(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Mo=!1,iu=null,su=!1,yd=null,mS={onError:function(t){Mo=!0,iu=t}};function pS(t,e,n,r,i,s,o,l,u){Mo=!1,iu=null,fS.apply(mS,arguments)}function gS(t,e,n,r,i,s,o,l,u){if(pS.apply(this,arguments),Mo){if(Mo){var h=iu;Mo=!1,iu=null}else throw Error($(198));su||(su=!0,yd=h)}}function xi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function f_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xg(t){if(xi(t)!==t)throw Error($(188))}function yS(t){var e=t.alternate;if(!e){if(e=xi(t),e===null)throw Error($(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xg(i),t;if(s===r)return xg(i),e;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?t:e}function m_(t){return t=yS(t),t!==null?p_(t):null}function p_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=p_(t);if(e!==null)return e;t=t.sibling}return null}var g_=Bt.unstable_scheduleCallback,Lg=Bt.unstable_cancelCallback,ES=Bt.unstable_shouldYield,vS=Bt.unstable_requestPaint,Le=Bt.unstable_now,_S=Bt.unstable_getCurrentPriorityLevel,Vf=Bt.unstable_ImmediatePriority,y_=Bt.unstable_UserBlockingPriority,ou=Bt.unstable_NormalPriority,wS=Bt.unstable_LowPriority,E_=Bt.unstable_IdlePriority,ec=null,Rn=null;function IS(t){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var an=Math.clz32?Math.clz32:AS,TS=Math.log,SS=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(TS(t)/SS|0)|0}var dl=64,fl=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Co(l):(s&=o,s!==0&&(r=Co(s)))}else o=n&~i,o!==0?r=Co(o):s!==0&&(r=Co(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-an(e),i=1<<n,r|=t[n],e&=~i;return r}function RS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function kS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-an(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=RS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function v_(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function fh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-an(e),t[e]=n}function CS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-an(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Mf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-an(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function __(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var w_,Ff,I_,T_,S_,vd=!1,ml=[],Ar=null,Rr=null,kr=null,Zo=new Map,ea=new Map,yr=[],PS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":kr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function Eo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Pa(e),e!==null&&Ff(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NS(t,e,n,r,i){switch(e){case"focusin":return Ar=Eo(Ar,t,e,n,r,i),!0;case"dragenter":return Rr=Eo(Rr,t,e,n,r,i),!0;case"mouseover":return kr=Eo(kr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zo.set(s,Eo(Zo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ea.set(s,Eo(ea.get(s)||null,t,e,n,r,i)),!0}return!1}function A_(t){var e=ui(t.target);if(e!==null){var n=xi(e);if(n!==null){if(e=n.tag,e===13){if(e=f_(n),e!==null){t.blockedOn=e,S_(t.priority,function(){I_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_d(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);md=r,n.target.dispatchEvent(r),md=null}else return e=Pa(n),e!==null&&Ff(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){xl(t)&&n.delete(e)}function bS(){vd=!1,Ar!==null&&xl(Ar)&&(Ar=null),Rr!==null&&xl(Rr)&&(Rr=null),kr!==null&&xl(kr)&&(kr=null),Zo.forEach(Mg),ea.forEach(Mg)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,vd||(vd=!0,Bt.unstable_scheduleCallback(Bt.unstable_NormalPriority,bS)))}function ta(t){function e(i){return vo(i,t)}if(0<ml.length){vo(ml[0],t);for(var n=1;n<ml.length;n++){var r=ml[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&vo(Ar,t),Rr!==null&&vo(Rr,t),kr!==null&&vo(kr,t),Zo.forEach(e),ea.forEach(e),n=0;n<yr.length;n++)r=yr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yr.length&&(n=yr[0],n.blockedOn===null);)A_(n),n.blockedOn===null&&yr.shift()}var fs=ir.ReactCurrentBatchConfig,lu=!0;function DS(t,e,n,r){var i=de,s=fs.transition;fs.transition=null;try{de=1,Uf(t,e,n,r)}finally{de=i,fs.transition=s}}function OS(t,e,n,r){var i=de,s=fs.transition;fs.transition=null;try{de=4,Uf(t,e,n,r)}finally{de=i,fs.transition=s}}function Uf(t,e,n,r){if(lu){var i=_d(t,e,n,r);if(i===null)Th(t,e,r,uu,n),Vg(t,r);else if(NS(i,t,e,n,r))r.stopPropagation();else if(Vg(t,r),e&4&&-1<PS.indexOf(t)){for(;i!==null;){var s=Pa(i);if(s!==null&&w_(s),s=_d(t,e,n,r),s===null&&Th(t,e,r,uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Th(t,e,r,null,n)}}var uu=null;function _d(t,e,n,r){if(uu=null,t=Lf(r),t=ui(t),t!==null)if(e=xi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=f_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function R_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_S()){case Vf:return 1;case y_:return 4;case ou:case wS:return 16;case E_:return 536870912;default:return 16}default:return 16}}var Tr=null,zf=null,Ll=null;function k_(){if(Ll)return Ll;var t,e=zf,n=e.length,r,i="value"in Tr?Tr.value:Tr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ll=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Fg(){return!1}function Ht(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:Fg,this.isPropagationStopped=Fg,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$f=Ht(Ms),Ca=Ce({},Ms,{view:0,detail:0}),xS=Ht(Ca),mh,ph,_o,tc=Ce({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(mh=t.screenX-_o.screenX,ph=t.screenY-_o.screenY):ph=mh=0,_o=t),mh)},movementY:function(t){return"movementY"in t?t.movementY:ph}}),Ug=Ht(tc),LS=Ce({},tc,{dataTransfer:0}),VS=Ht(LS),MS=Ce({},Ca,{relatedTarget:0}),gh=Ht(MS),FS=Ce({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),US=Ht(FS),zS=Ce({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=Ht(zS),BS=Ce({},Ms,{data:0}),zg=Ht(BS),jS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},HS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function WS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qS[t])?!!e[t]:!1}function Bf(){return WS}var GS=Ce({},Ca,{key:function(t){if(t.key){var e=jS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?HS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bf,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KS=Ht(GS),QS=Ce({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$g=Ht(QS),YS=Ce({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bf}),JS=Ht(YS),XS=Ce({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),ZS=Ht(XS),eA=Ce({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tA=Ht(eA),nA=[9,13,27,32],jf=Qn&&"CompositionEvent"in window,Fo=null;Qn&&"documentMode"in document&&(Fo=document.documentMode);var rA=Qn&&"TextEvent"in window&&!Fo,C_=Qn&&(!jf||Fo&&8<Fo&&11>=Fo),Bg=" ",jg=!1;function P_(t,e){switch(t){case"keyup":return nA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function N_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zi=!1;function iA(t,e){switch(t){case"compositionend":return N_(e);case"keypress":return e.which!==32?null:(jg=!0,Bg);case"textInput":return t=e.data,t===Bg&&jg?null:t;default:return null}}function sA(t,e){if(Zi)return t==="compositionend"||!jf&&P_(t,e)?(t=k_(),Ll=zf=Tr=null,Zi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return C_&&e.locale!=="ko"?null:e.data;default:return null}}var oA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oA[t.type]:e==="textarea"}function b_(t,e,n,r){l_(r),e=cu(e,"onChange"),0<e.length&&(n=new $f("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Uo=null,na=null;function aA(t){B_(t,0)}function nc(t){var e=ns(t);if(t_(e))return t}function lA(t,e){if(t==="change")return e}var D_=!1;if(Qn){var yh;if(Qn){var Eh="oninput"in document;if(!Eh){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),Eh=typeof qg.oninput=="function"}yh=Eh}else yh=!1;D_=yh&&(!document.documentMode||9<document.documentMode)}function Wg(){Uo&&(Uo.detachEvent("onpropertychange",O_),na=Uo=null)}function O_(t){if(t.propertyName==="value"&&nc(na)){var e=[];b_(e,na,t,Lf(t)),d_(aA,e)}}function uA(t,e,n){t==="focusin"?(Wg(),Uo=e,na=n,Uo.attachEvent("onpropertychange",O_)):t==="focusout"&&Wg()}function cA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(na)}function hA(t,e){if(t==="click")return nc(e)}function dA(t,e){if(t==="input"||t==="change")return nc(e)}function fA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hn=typeof Object.is=="function"?Object.is:fA;function ra(t,e){if(hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nd.call(e,i)||!hn(t[i],e[i]))return!1}return!0}function Gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=Gg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gg(n)}}function x_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?x_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L_(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mA(t){var e=L_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&x_(n.ownerDocument.documentElement,n)){if(r!==null&&Hf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kg(n,s);var o=Kg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pA=Qn&&"documentMode"in document&&11>=document.documentMode,es=null,wd=null,zo=null,Id=!1;function Qg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Id||es==null||es!==ru(r)||(r=es,"selectionStart"in r&&Hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zo&&ra(zo,r)||(zo=r,r=cu(wd,"onSelect"),0<r.length&&(e=new $f("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=es)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ts={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},vh={},V_={};Qn&&(V_=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function rc(t){if(vh[t])return vh[t];if(!ts[t])return t;var e=ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in V_)return vh[t]=e[n];return t}var M_=rc("animationend"),F_=rc("animationiteration"),U_=rc("animationstart"),z_=rc("transitionend"),$_=new Map,Yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,e){$_.set(t,e),Oi(e,[t])}for(var _h=0;_h<Yg.length;_h++){var wh=Yg[_h],gA=wh.toLowerCase(),yA=wh[0].toUpperCase()+wh.slice(1);Kr(gA,"on"+yA)}Kr(M_,"onAnimationEnd");Kr(F_,"onAnimationIteration");Kr(U_,"onAnimationStart");Kr("dblclick","onDoubleClick");Kr("focusin","onFocus");Kr("focusout","onBlur");Kr(z_,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EA=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Jg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gS(r,e,void 0,t),t.currentTarget=null}function B_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Jg(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Jg(i,l,h),s=u}}}if(su)throw t=yd,su=!1,yd=null,t}function ve(t,e){var n=e[kd];n===void 0&&(n=e[kd]=new Set);var r=t+"__bubble";n.has(r)||(j_(e,t,2,!1),n.add(r))}function Ih(t,e,n){var r=0;e&&(r|=4),j_(n,t,r,e)}var yl="_reactListening"+Math.random().toString(36).slice(2);function ia(t){if(!t[yl]){t[yl]=!0,Yv.forEach(function(n){n!=="selectionchange"&&(EA.has(n)||Ih(n,!1,t),Ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yl]||(e[yl]=!0,Ih("selectionchange",!1,e))}}function j_(t,e,n,r){switch(R_(e)){case 1:var i=DS;break;case 4:i=OS;break;default:i=Uf}n=i.bind(null,e,n,t),i=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ui(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}d_(function(){var h=s,f=Lf(n),p=[];e:{var g=$_.get(t);if(g!==void 0){var S=$f,C=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":S=KS;break;case"focusin":C="focus",S=gh;break;case"focusout":C="blur",S=gh;break;case"beforeblur":case"afterblur":S=gh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Ug;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=JS;break;case M_:case F_:case U_:S=US;break;case z_:S=ZS;break;case"scroll":S=xS;break;case"wheel":S=tA;break;case"copy":case"cut":case"paste":S=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=$g}var P=(e&4)!==0,D=!P&&t==="scroll",_=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,R;v!==null;){R=v;var L=R.stateNode;if(R.tag===5&&L!==null&&(R=L,_!==null&&(L=Xo(v,_),L!=null&&P.push(sa(v,L,R)))),D)break;v=v.return}0<P.length&&(g=new S(g,C,null,n,f),p.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",g&&n!==md&&(C=n.relatedTarget||n.fromElement)&&(ui(C)||C[Yn]))break e;if((S||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=h,C=C?ui(C):null,C!==null&&(D=xi(C),C!==D||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=h),S!==C)){if(P=Ug,L="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=$g,L="onPointerLeave",_="onPointerEnter",v="pointer"),D=S==null?g:ns(S),R=C==null?g:ns(C),g=new P(L,v+"leave",S,n,f),g.target=D,g.relatedTarget=R,L=null,ui(f)===h&&(P=new P(_,v+"enter",C,n,f),P.target=R,P.relatedTarget=D,L=P),D=L,S&&C)t:{for(P=S,_=C,v=0,R=P;R;R=qi(R))v++;for(R=0,L=_;L;L=qi(L))R++;for(;0<v-R;)P=qi(P),v--;for(;0<R-v;)_=qi(_),R--;for(;v--;){if(P===_||_!==null&&P===_.alternate)break t;P=qi(P),_=qi(_)}P=null}else P=null;S!==null&&Xg(p,g,S,P,!1),C!==null&&D!==null&&Xg(p,D,C,P,!0)}}e:{if(g=h?ns(h):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var F=lA;else if(Hg(g))if(D_)F=dA;else{F=cA;var z=uA}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(F=hA);if(F&&(F=F(t,h))){b_(p,F,n,f);break e}z&&z(t,g,h),t==="focusout"&&(z=g._wrapperState)&&z.controlled&&g.type==="number"&&ud(g,"number",g.value)}switch(z=h?ns(h):window,t){case"focusin":(Hg(z)||z.contentEditable==="true")&&(es=z,wd=h,zo=null);break;case"focusout":zo=wd=es=null;break;case"mousedown":Id=!0;break;case"contextmenu":case"mouseup":case"dragend":Id=!1,Qg(p,n,f);break;case"selectionchange":if(pA)break;case"keydown":case"keyup":Qg(p,n,f)}var w;if(jf)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Zi?P_(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(C_&&n.locale!=="ko"&&(Zi||E!=="onCompositionStart"?E==="onCompositionEnd"&&Zi&&(w=k_()):(Tr=f,zf="value"in Tr?Tr.value:Tr.textContent,Zi=!0)),z=cu(h,E),0<z.length&&(E=new zg(E,t,null,n,f),p.push({event:E,listeners:z}),w?E.data=w:(w=N_(n),w!==null&&(E.data=w)))),(w=rA?iA(t,n):sA(t,n))&&(h=cu(h,"onBeforeInput"),0<h.length&&(f=new zg("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:h}),f.data=w))}B_(p,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Xo(t,n),s!=null&&r.unshift(sa(t,s,i)),s=Xo(t,e),s!=null&&r.push(sa(t,s,i))),t=t.return}return r}function qi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Xo(n,s),u!=null&&o.unshift(sa(n,u,l))):i||(u=Xo(n,s),u!=null&&o.push(sa(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vA=/\r\n?/g,_A=/\u0000|\uFFFD/g;function Zg(t){return(typeof t=="string"?t:""+t).replace(vA,`
`).replace(_A,"")}function El(t,e,n){if(e=Zg(e),Zg(t)!==e&&n)throw Error($(425))}function hu(){}var Td=null,Sd=null;function Ad(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Rd=typeof setTimeout=="function"?setTimeout:void 0,wA=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,IA=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(t){return ey.resolve(null).then(t).catch(TA)}:Rd;function TA(t){setTimeout(function(){throw t})}function Sh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ta(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ta(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),An="__reactFiber$"+Fs,oa="__reactProps$"+Fs,Yn="__reactContainer$"+Fs,kd="__reactEvents$"+Fs,SA="__reactListeners$"+Fs,AA="__reactHandles$"+Fs;function ui(t){var e=t[An];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yn]||n[An]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ty(t);t!==null;){if(n=t[An])return n;t=ty(t)}return e}t=n,n=t.parentNode}return null}function Pa(t){return t=t[An]||t[Yn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error($(33))}function ic(t){return t[oa]||null}var Cd=[],rs=-1;function Qr(t){return{current:t}}function we(t){0>rs||(t.current=Cd[rs],Cd[rs]=null,rs--)}function ge(t,e){rs++,Cd[rs]=t.current,t.current=e}var Ur={},mt=Qr(Ur),Nt=Qr(!1),Ii=Ur;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function du(){we(Nt),we(mt)}function ny(t,e,n){if(mt.current!==Ur)throw Error($(168));ge(mt,e),ge(Nt,n)}function H_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error($(108,uS(t)||"Unknown",i));return Ce({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ii=mt.current,ge(mt,t),ge(Nt,Nt.current),!0}function ry(t,e,n){var r=t.stateNode;if(!r)throw Error($(169));n?(t=H_(t,e,Ii),r.__reactInternalMemoizedMergedChildContext=t,we(Nt),we(mt),ge(mt,t)):we(Nt),ge(Nt,n)}var Bn=null,sc=!1,Ah=!1;function q_(t){Bn===null?Bn=[t]:Bn.push(t)}function RA(t){sc=!0,q_(t)}function Yr(){if(!Ah&&Bn!==null){Ah=!0;var t=0,e=de;try{var n=Bn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Bn=null,sc=!1}catch(i){throw Bn!==null&&(Bn=Bn.slice(t+1)),g_(Vf,Yr),i}finally{de=e,Ah=!1}}return null}var is=[],ss=0,mu=null,pu=0,qt=[],Wt=0,Ti=null,jn=1,Hn="";function si(t,e){is[ss++]=pu,is[ss++]=mu,mu=t,pu=e}function W_(t,e,n){qt[Wt++]=jn,qt[Wt++]=Hn,qt[Wt++]=Ti,Ti=t;var r=jn;t=Hn;var i=32-an(r)-1;r&=~(1<<i),n+=1;var s=32-an(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jn=1<<32-an(e)+i|n<<i|r,Hn=s+t}else jn=1<<s|n<<i|r,Hn=t}function qf(t){t.return!==null&&(si(t,1),W_(t,1,0))}function Wf(t){for(;t===mu;)mu=is[--ss],is[ss]=null,pu=is[--ss],is[ss]=null;for(;t===Ti;)Ti=qt[--Wt],qt[Wt]=null,Hn=qt[--Wt],qt[Wt]=null,jn=qt[--Wt],qt[Wt]=null}var Ut=null,Mt=null,Te=!1,rn=null;function G_(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ut=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ti!==null?{id:jn,overflow:Hn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ut=t,Mt=null,!0):!1;default:return!1}}function Pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(Te){var e=Mt;if(e){var n=e;if(!iy(t,e)){if(Pd(t))throw Error($(418));e=Cr(n.nextSibling);var r=Ut;e&&iy(t,e)?G_(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ut=t)}}else{if(Pd(t))throw Error($(418));t.flags=t.flags&-4097|2,Te=!1,Ut=t}}}function sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ut=t}function vl(t){if(t!==Ut)return!1;if(!Te)return sy(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ad(t.type,t.memoizedProps)),e&&(e=Mt)){if(Pd(t))throw K_(),Error($(418));for(;e;)G_(t,e),e=Cr(e.nextSibling)}if(sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error($(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ut?Cr(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=Mt;t;)t=Cr(t.nextSibling)}function As(){Mt=Ut=null,Te=!1}function Gf(t){rn===null?rn=[t]:rn.push(t)}var kA=ir.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error($(284));if(!n._owner)throw Error($(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error($(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function oy(t){var e=t._init;return e(t._payload)}function Q_(t){function e(_,v){if(t){var R=_.deletions;R===null?(_.deletions=[v],_.flags|=16):R.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Dr(_,v),_.index=0,_.sibling=null,_}function s(_,v,R){return _.index=R,t?(R=_.alternate,R!==null?(R=R.index,R<v?(_.flags|=2,v):R):(_.flags|=2,v)):(_.flags|=1048576,v)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,R,L){return v===null||v.tag!==6?(v=Dh(R,_.mode,L),v.return=_,v):(v=i(v,R),v.return=_,v)}function u(_,v,R,L){var F=R.type;return F===Xi?f(_,v,R.props.children,L,R.key):v!==null&&(v.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===pr&&oy(F)===v.type)?(L=i(v,R.props),L.ref=wo(_,v,R),L.return=_,L):(L=jl(R.type,R.key,R.props,null,_.mode,L),L.ref=wo(_,v,R),L.return=_,L)}function h(_,v,R,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=Oh(R,_.mode,L),v.return=_,v):(v=i(v,R.children||[]),v.return=_,v)}function f(_,v,R,L,F){return v===null||v.tag!==7?(v=Ei(R,_.mode,L,F),v.return=_,v):(v=i(v,R),v.return=_,v)}function p(_,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Dh(""+v,_.mode,R),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ul:return R=jl(v.type,v.key,v.props,null,_.mode,R),R.ref=wo(_,null,v),R.return=_,R;case Ji:return v=Oh(v,_.mode,R),v.return=_,v;case pr:var L=v._init;return p(_,L(v._payload),R)}if(ko(v)||go(v))return v=Ei(v,_.mode,R,null),v.return=_,v;_l(_,v)}return null}function g(_,v,R,L){var F=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return F!==null?null:l(_,v,""+R,L);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ul:return R.key===F?u(_,v,R,L):null;case Ji:return R.key===F?h(_,v,R,L):null;case pr:return F=R._init,g(_,v,F(R._payload),L)}if(ko(R)||go(R))return F!==null?null:f(_,v,R,L,null);_l(_,R)}return null}function S(_,v,R,L,F){if(typeof L=="string"&&L!==""||typeof L=="number")return _=_.get(R)||null,l(v,_,""+L,F);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ul:return _=_.get(L.key===null?R:L.key)||null,u(v,_,L,F);case Ji:return _=_.get(L.key===null?R:L.key)||null,h(v,_,L,F);case pr:var z=L._init;return S(_,v,R,z(L._payload),F)}if(ko(L)||go(L))return _=_.get(R)||null,f(v,_,L,F,null);_l(v,L)}return null}function C(_,v,R,L){for(var F=null,z=null,w=v,E=v=0,I=null;w!==null&&E<R.length;E++){w.index>E?(I=w,w=null):I=w.sibling;var A=g(_,w,R[E],L);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(_,w),v=s(A,v,E),z===null?F=A:z.sibling=A,z=A,w=I}if(E===R.length)return n(_,w),Te&&si(_,E),F;if(w===null){for(;E<R.length;E++)w=p(_,R[E],L),w!==null&&(v=s(w,v,E),z===null?F=w:z.sibling=w,z=w);return Te&&si(_,E),F}for(w=r(_,w);E<R.length;E++)I=S(w,_,E,R[E],L),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?E:I.key),v=s(I,v,E),z===null?F=I:z.sibling=I,z=I);return t&&w.forEach(function(k){return e(_,k)}),Te&&si(_,E),F}function P(_,v,R,L){var F=go(R);if(typeof F!="function")throw Error($(150));if(R=F.call(R),R==null)throw Error($(151));for(var z=F=null,w=v,E=v=0,I=null,A=R.next();w!==null&&!A.done;E++,A=R.next()){w.index>E?(I=w,w=null):I=w.sibling;var k=g(_,w,A.value,L);if(k===null){w===null&&(w=I);break}t&&w&&k.alternate===null&&e(_,w),v=s(k,v,E),z===null?F=k:z.sibling=k,z=k,w=I}if(A.done)return n(_,w),Te&&si(_,E),F;if(w===null){for(;!A.done;E++,A=R.next())A=p(_,A.value,L),A!==null&&(v=s(A,v,E),z===null?F=A:z.sibling=A,z=A);return Te&&si(_,E),F}for(w=r(_,w);!A.done;E++,A=R.next())A=S(w,_,E,A.value,L),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?E:A.key),v=s(A,v,E),z===null?F=A:z.sibling=A,z=A);return t&&w.forEach(function(N){return e(_,N)}),Te&&si(_,E),F}function D(_,v,R,L){if(typeof R=="object"&&R!==null&&R.type===Xi&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case ul:e:{for(var F=R.key,z=v;z!==null;){if(z.key===F){if(F=R.type,F===Xi){if(z.tag===7){n(_,z.sibling),v=i(z,R.props.children),v.return=_,_=v;break e}}else if(z.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===pr&&oy(F)===z.type){n(_,z.sibling),v=i(z,R.props),v.ref=wo(_,z,R),v.return=_,_=v;break e}n(_,z);break}else e(_,z);z=z.sibling}R.type===Xi?(v=Ei(R.props.children,_.mode,L,R.key),v.return=_,_=v):(L=jl(R.type,R.key,R.props,null,_.mode,L),L.ref=wo(_,v,R),L.return=_,_=L)}return o(_);case Ji:e:{for(z=R.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(_,v.sibling),v=i(v,R.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=Oh(R,_.mode,L),v.return=_,_=v}return o(_);case pr:return z=R._init,D(_,v,z(R._payload),L)}if(ko(R))return C(_,v,R,L);if(go(R))return P(_,v,R,L);_l(_,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,R),v.return=_,_=v):(n(_,v),v=Dh(R,_.mode,L),v.return=_,_=v),o(_)):n(_,v)}return D}var Rs=Q_(!0),Y_=Q_(!1),gu=Qr(null),yu=null,os=null,Kf=null;function Qf(){Kf=os=yu=null}function Yf(t){var e=gu.current;we(gu),t._currentValue=e}function bd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){yu=t,Kf=os=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Pt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(Kf!==t)if(t={context:t,memoizedValue:e,next:null},os===null){if(yu===null)throw Error($(308));os=t,yu.dependencies={lanes:0,firstContext:t}}else os=os.next=t;return e}var ci=null;function Jf(t){ci===null?ci=[t]:ci.push(t)}function J_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jn(t,r)}function Jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function Xf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Kn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jn(t,n)}function Ml(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}function ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Eu(t,e,n,r){var i=t.updateQueue;gr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=h=u=null,l=s;do{var g=l.lane,S=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var C=t,P=l;switch(g=e,S=n,P.tag){case 1:if(C=P.payload,typeof C=="function"){p=C.call(S,p,g);break e}p=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=P.payload,g=typeof C=="function"?C.call(S,p,g):C,g==null)break e;p=Ce({},p,g);break e;case 2:gr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=S,u=p):f=f.next=S,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ai|=o,t.lanes=o,t.memoizedState=p}}function ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Na={},kn=Qr(Na),aa=Qr(Na),la=Qr(Na);function hi(t){if(t===Na)throw Error($(174));return t}function Zf(t,e){switch(ge(la,e),ge(aa,t),ge(kn,Na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hd(e,t)}we(kn),ge(kn,e)}function ks(){we(kn),we(aa),we(la)}function Z_(t){hi(la.current);var e=hi(kn.current),n=hd(e,t.type);e!==n&&(ge(aa,t),ge(kn,n))}function em(t){aa.current===t&&(we(kn),we(aa))}var Ae=Qr(0);function vu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Rh=[];function tm(){for(var t=0;t<Rh.length;t++)Rh[t]._workInProgressVersionPrimary=null;Rh.length=0}var Fl=ir.ReactCurrentDispatcher,kh=ir.ReactCurrentBatchConfig,Si=0,Re=null,je=null,Qe=null,_u=!1,$o=!1,ua=0,CA=0;function lt(){throw Error($(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hn(t[n],e[n]))return!1;return!0}function rm(t,e,n,r,i,s){if(Si=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fl.current=t===null||t.memoizedState===null?DA:OA,t=n(r,i),$o){s=0;do{if($o=!1,ua=0,25<=s)throw Error($(301));s+=1,Qe=je=null,e.updateQueue=null,Fl.current=xA,t=n(r,i)}while($o)}if(Fl.current=wu,e=je!==null&&je.next!==null,Si=0,Qe=je=Re=null,_u=!1,e)throw Error($(300));return t}function im(){var t=ua!==0;return ua=0,t}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?Re.memoizedState=Qe=t:Qe=Qe.next=t,Qe}function Xt(){if(je===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var e=Qe===null?Re.memoizedState:Qe.next;if(e!==null)Qe=e,je=t;else{if(t===null)throw Error($(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Qe===null?Re.memoizedState=Qe=t:Qe=Qe.next=t}return Qe}function ca(t,e){return typeof e=="function"?e(t):e}function Ch(t){var e=Xt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Si&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var p={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Re.lanes|=f,Ai|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,hn(r,e.memoizedState)||(Pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,Ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ph(t){var e=Xt(),n=e.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);hn(s,e.memoizedState)||(Pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ew(){}function tw(t,e){var n=Re,r=Xt(),i=e(),s=!hn(r.memoizedState,i);if(s&&(r.memoizedState=i,Pt=!0),r=r.queue,sm(iw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Qe!==null&&Qe.memoizedState.tag&1){if(n.flags|=2048,ha(9,rw.bind(null,n,r,i,e),void 0,null),Ye===null)throw Error($(349));Si&30||nw(n,e,i)}return i}function nw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rw(t,e,n,r){e.value=n,e.getSnapshot=r,sw(e)&&ow(t)}function iw(t,e,n){return n(function(){sw(e)&&ow(t)})}function sw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hn(t,n)}catch{return!0}}function ow(t){var e=Jn(t,1);e!==null&&ln(e,t,1,-1)}function uy(t){var e=Tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:t},e.queue=t,t=t.dispatch=bA.bind(null,Re,t),[e.memoizedState,t]}function ha(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function aw(){return Xt().memoizedState}function Ul(t,e,n,r){var i=Tn();Re.flags|=t,i.memoizedState=ha(1|e,n,void 0,r===void 0?null:r)}function oc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(je!==null){var o=je.memoizedState;if(s=o.destroy,r!==null&&nm(r,o.deps)){i.memoizedState=ha(e,n,s,r);return}}Re.flags|=t,i.memoizedState=ha(1|e,n,s,r)}function cy(t,e){return Ul(8390656,8,t,e)}function sm(t,e){return oc(2048,8,t,e)}function lw(t,e){return oc(4,2,t,e)}function uw(t,e){return oc(4,4,t,e)}function cw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hw(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,cw.bind(null,e,t),n)}function om(){}function dw(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fw(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&nm(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function mw(t,e,n){return Si&21?(hn(n,e)||(n=v_(),Re.lanes|=n,Ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Pt=!0),t.memoizedState=n)}function PA(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=kh.transition;kh.transition={};try{t(!1),e()}finally{de=n,kh.transition=r}}function pw(){return Xt().memoizedState}function NA(t,e,n){var r=br(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gw(t))yw(e,n);else if(n=J_(t,e,n,r),n!==null){var i=_t();ln(n,t,r,i),Ew(n,e,r)}}function bA(t,e,n){var r=br(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gw(t))yw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var u=e.interleaved;u===null?(i.next=i,Jf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=J_(t,e,i,r),n!==null&&(i=_t(),ln(n,t,r,i),Ew(n,e,r))}}function gw(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function yw(t,e){$o=_u=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ew(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mf(t,n)}}var wu={readContext:Jt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},DA={readContext:Jt,useCallback:function(t,e){return Tn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:cy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ul(4194308,4,cw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ul(4,2,t,e)},useMemo:function(t,e){var n=Tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=NA.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=Tn();return t={current:t},e.memoizedState=t},useState:uy,useDebugValue:om,useDeferredValue:function(t){return Tn().memoizedState=t},useTransition:function(){var t=uy(!1),e=t[0];return t=PA.bind(null,t[1]),Tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=Tn();if(Te){if(n===void 0)throw Error($(407));n=n()}else{if(n=e(),Ye===null)throw Error($(349));Si&30||nw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cy(iw.bind(null,r,s,t),[t]),r.flags|=2048,ha(9,rw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Tn(),e=Ye.identifierPrefix;if(Te){var n=Hn,r=jn;n=(r&~(1<<32-an(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OA={readContext:Jt,useCallback:dw,useContext:Jt,useEffect:sm,useImperativeHandle:hw,useInsertionEffect:lw,useLayoutEffect:uw,useMemo:fw,useReducer:Ch,useRef:aw,useState:function(){return Ch(ca)},useDebugValue:om,useDeferredValue:function(t){var e=Xt();return mw(e,je.memoizedState,t)},useTransition:function(){var t=Ch(ca)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:ew,useSyncExternalStore:tw,useId:pw,unstable_isNewReconciler:!1},xA={readContext:Jt,useCallback:dw,useContext:Jt,useEffect:sm,useImperativeHandle:hw,useInsertionEffect:lw,useLayoutEffect:uw,useMemo:fw,useReducer:Ph,useRef:aw,useState:function(){return Ph(ca)},useDebugValue:om,useDeferredValue:function(t){var e=Xt();return je===null?e.memoizedState=t:mw(e,je.memoizedState,t)},useTransition:function(){var t=Ph(ca)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:ew,useSyncExternalStore:tw,useId:pw,unstable_isNewReconciler:!1};function tn(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Dd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ac={isMounted:function(t){return(t=t._reactInternals)?xi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=_t(),i=br(t),s=Kn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(ln(e,t,i,r),Ml(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=_t(),i=br(t),s=Kn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,i),e!==null&&(ln(e,t,i,r),Ml(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_t(),r=br(t),i=Kn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Pr(t,i,r),e!==null&&(ln(e,t,r,n),Ml(e,t,r))}};function hy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ra(n,r)||!ra(i,s):!0}function vw(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Jt(s):(i=bt(e)?Ii:mt.current,r=e.contextTypes,s=(r=r!=null)?Ss(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ac,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function Od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Jt(s):(s=bt(e)?Ii:mt.current,i.context=Ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Dd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ac.enqueueReplaceState(i,i.state,null),Eu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",r=e;do n+=lS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Nh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var LA=typeof WeakMap=="function"?WeakMap:Map;function _w(t,e,n){n=Kn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,Hd=r),xd(t,e)},n}function ww(t,e,n){n=Kn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xd(t,e),typeof r!="function"&&(Nr===null?Nr=new Set([this]):Nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new LA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=QA.bind(null,t,e,n),e.then(t,t))}function my(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Kn(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var VA=ir.ReactCurrentOwner,Pt=!1;function vt(t,e,n,r){e.child=t===null?Y_(e,null,n,r):Rs(e,t.child,n,r)}function gy(t,e,n,r,i){n=n.render;var s=e.ref;return ms(e,i),r=rm(t,e,n,r,s,i),n=im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&n&&qf(e),e.flags|=1,vt(t,e,r,i),e.child)}function yy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Iw(t,e,s,r,i)):(t=jl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ra,n(o,r)&&t.ref===e.ref)return Xn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Iw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ra(s,r)&&t.ref===e.ref)if(Pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Pt=!0);else return e.lanes=t.lanes,Xn(t,e,i)}return Ld(t,e,n,r,i)}function Tw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ls,Vt),Vt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(ls,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(ls,Vt),Vt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(ls,Vt),Vt|=r;return vt(t,e,i,n),e.child}function Sw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ld(t,e,n,r,i){var s=bt(n)?Ii:mt.current;return s=Ss(e,s),ms(e,i),n=rm(t,e,n,r,s,i),r=im(),t!==null&&!Pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xn(t,e,i)):(Te&&r&&qf(e),e.flags|=1,vt(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(bt(n)){var s=!0;fu(e)}else s=!1;if(ms(e,i),e.stateNode===null)zl(t,e),vw(e,n,r),Od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Jt(h):(h=bt(n)?Ii:mt.current,h=Ss(e,h));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&dy(e,o,r,h),gr=!1;var g=e.memoizedState;o.state=g,Eu(e,r,o,i),u=e.memoizedState,l!==r||g!==u||Nt.current||gr?(typeof f=="function"&&(Dd(e,n,f,r),u=e.memoizedState),(l=gr||hy(e,n,l,r,g,u,h))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:tn(e.type,l),o.props=h,p=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Jt(u):(u=bt(n)?Ii:mt.current,u=Ss(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||g!==u)&&dy(e,o,r,u),gr=!1,g=e.memoizedState,o.state=g,Eu(e,r,o,i);var C=e.memoizedState;l!==p||g!==C||Nt.current||gr?(typeof S=="function"&&(Dd(e,n,S,r),C=e.memoizedState),(h=gr||hy(e,n,h,r,g,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Vd(t,e,n,r,s,i)}function Vd(t,e,n,r,i,s){Sw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ry(e,n,!1),Xn(t,e,s);r=e.stateNode,VA.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,l,s)):vt(t,e,l,s),e.memoizedState=r.state,i&&ry(e,n,!0),e.child}function Aw(t){var e=t.stateNode;e.pendingContext?ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ny(t,e.context,!1),Zf(t,e.containerInfo)}function vy(t,e,n,r,i){return As(),Gf(i),e.flags|=256,vt(t,e,n,r),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rw(t,e,n){var r=e.pendingProps,i=Ae.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(Ae,i&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cc(o,r,0,null),t=Ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fd(n),e.memoizedState=Md,t):am(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return MA(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Dr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Dr(l,s):(s=Ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Md,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function am(t,e){return e=cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wl(t,e,n,r){return r!==null&&Gf(r),Rs(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function MA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Nh(Error($(422))),wl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cc({mode:"visible",children:r.children},i,0,null),s=Ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Rs(e,t.child,null,o),e.child.memoizedState=Fd(o),e.memoizedState=Md,s);if(!(e.mode&1))return wl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error($(419)),r=Nh(s,r,void 0),wl(t,e,o,r)}if(l=(o&t.childLanes)!==0,Pt||l){if(r=Ye,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jn(t,i),ln(r,t,i,-1))}return fm(),r=Nh(Error($(421))),wl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=YA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Mt=Cr(i.nextSibling),Ut=e,Te=!0,rn=null,t!==null&&(qt[Wt++]=jn,qt[Wt++]=Hn,qt[Wt++]=Ti,jn=t.id,Hn=t.overflow,Ti=e),e=am(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),bd(t.return,e,n)}function bh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function kw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(vt(t,e,r.children,n),r=Ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ae,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&vu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),bh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&vu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}bh(e,!0,n,null,s);break;case"together":bh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error($(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FA(t,e,n){switch(e.tag){case 3:Aw(e),As();break;case 5:Z_(e);break;case 1:bt(e.type)&&fu(e);break;case 4:Zf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ae,Ae.current&1),e.flags|=128,null):n&e.child.childLanes?Rw(t,e,n):(ge(Ae,Ae.current&1),t=Xn(t,e,n),t!==null?t.sibling:null);ge(Ae,Ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return kw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(Ae,Ae.current),r)break;return null;case 22:case 23:return e.lanes=0,Tw(t,e,n)}return Xn(t,e,n)}var Cw,Ud,Pw,Nw;Cw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ud=function(){};Pw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,hi(kn.current);var s=null;switch(n){case"input":i=ad(t,i),r=ad(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=cd(t,i),r=cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}dd(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Yo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Yo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Nw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Io(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UA(t,e,n){var r=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return bt(e.type)&&du(),ut(e),null;case 3:return r=e.stateNode,ks(),we(Nt),we(mt),tm(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(Gd(rn),rn=null))),Ud(t,e),ut(e),null;case 5:em(e);var i=hi(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Pw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error($(166));return ut(e),null}if(t=hi(kn.current),vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[An]=e,r[oa]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Po.length;i++)ve(Po[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Pg(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":bg(r,s),ve("invalid",r)}dd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&El(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&El(r.textContent,l,t),i=["children",""+l]):Yo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":cl(r),Ng(r,s,!0);break;case"textarea":cl(r),Dg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=i_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[An]=e,t[oa]=r,Cw(t,e,!1,!1),e.stateNode=t;e:{switch(o=fd(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Po.length;i++)ve(Po[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Pg(t,r),i=ad(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ve("invalid",t);break;case"textarea":bg(t,r),i=cd(t,r),ve("invalid",t);break;default:i=r}dd(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?a_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&s_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Jo(t,u):typeof u=="number"&&Jo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ve("scroll",t):u!=null&&bf(t,s,u,o))}switch(n){case"input":cl(t),Ng(t,r,!1);break;case"textarea":cl(t),Dg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?cs(t,!!r.multiple,s,!1):r.defaultValue!=null&&cs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)Nw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error($(166));if(n=hi(la.current),hi(kn.current),vl(e)){if(r=e.stateNode,n=e.memoizedProps,r[An]=e,(s=r.nodeValue!==n)&&(t=Ut,t!==null))switch(t.tag){case 3:El(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[An]=e,e.stateNode=r}return ut(e),null;case 13:if(we(Ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Mt!==null&&e.mode&1&&!(e.flags&128))K_(),As(),e.flags|=98560,s=!1;else if(s=vl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error($(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[An]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),s=!1}else rn!==null&&(Gd(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ae.current&1?He===0&&(He=3):fm())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return ks(),Ud(t,e),t===null&&ia(e.stateNode.containerInfo),ut(e),null;case 10:return Yf(e.type._context),ut(e),null;case 17:return bt(e.type)&&du(),ut(e),null;case 19:if(we(Ae),s=e.memoizedState,s===null)return ut(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Io(s,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=vu(t),o!==null){for(e.flags|=128,Io(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ae,Ae.current&1|2),e.child}t=t.sibling}s.tail!==null&&Le()>Ps&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304)}else{if(!r)if(t=vu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return ut(e),null}else 2*Le()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,r=!0,Io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Le(),e.sibling=null,n=Ae.current,ge(Ae,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return dm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error($(156,e.tag))}function zA(t,e){switch(Wf(e),e.tag){case 1:return bt(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),we(Nt),we(mt),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(we(Ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error($(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ae),null;case 4:return ks(),null;case 10:return Yf(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var Il=!1,dt=!1,$A=typeof WeakSet=="function"?WeakSet:Set,W=null;function as(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function zd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var wy=!1;function BA(t,e){if(Td=lu,t=L_(),Hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,p=t,g=null;t:for(;;){for(var S;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(S=p.firstChild)!==null;)g=p,p=S;for(;;){if(p===t)break t;if(g===n&&++h===i&&(l=o),g===s&&++f===r&&(u=o),(S=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=S}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sd={focusedElem:t,selectionRange:n},lu=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var P=C.memoizedProps,D=C.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?P:tn(e.type,P),D);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(L){Ne(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return C=wy,wy=!1,C}function Bo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zd(e,n,s)}i=i.next}while(i!==r)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function bw(t){var e=t.alternate;e!==null&&(t.alternate=null,bw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[An],delete e[oa],delete e[kd],delete e[SA],delete e[AA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dw(t){return t.tag===5||t.tag===3||t.tag===4}function Iy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(Bd(t,e,n),t=t.sibling;t!==null;)Bd(t,e,n),t=t.sibling}function jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}var nt=null,nn=!1;function fr(t,e,n){for(n=n.child;n!==null;)Ow(t,e,n),n=n.sibling}function Ow(t,e,n){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:dt||as(n,e);case 6:var r=nt,i=nn;nt=null,fr(t,e,n),nt=r,nn=i,nt!==null&&(nn?(t=nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nt.removeChild(n.stateNode));break;case 18:nt!==null&&(nn?(t=nt,n=n.stateNode,t.nodeType===8?Sh(t.parentNode,n):t.nodeType===1&&Sh(t,n),ta(t)):Sh(nt,n.stateNode));break;case 4:r=nt,i=nn,nt=n.stateNode.containerInfo,nn=!0,fr(t,e,n),nt=r,nn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zd(n,e,o),i=i.next}while(i!==r)}fr(t,e,n);break;case 1:if(!dt&&(as(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ne(n,e,l)}fr(t,e,n);break;case 21:fr(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,fr(t,e,n),dt=r):fr(t,e,n);break;default:fr(t,e,n)}}function Ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $A),e.forEach(function(r){var i=JA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:nt=l.stateNode,nn=!1;break e;case 3:nt=l.stateNode.containerInfo,nn=!0;break e;case 4:nt=l.stateNode.containerInfo,nn=!0;break e}l=l.return}if(nt===null)throw Error($(160));Ow(s,o,i),nt=null,nn=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ne(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xw(e,t),e=e.sibling}function xw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),wn(t),r&4){try{Bo(3,t,t.return),lc(3,t)}catch(P){Ne(t,t.return,P)}try{Bo(5,t,t.return)}catch(P){Ne(t,t.return,P)}}break;case 1:en(e,t),wn(t),r&512&&n!==null&&as(n,n.return);break;case 5:if(en(e,t),wn(t),r&512&&n!==null&&as(n,n.return),t.flags&32){var i=t.stateNode;try{Jo(i,"")}catch(P){Ne(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&n_(i,s),fd(l,o);var h=fd(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?a_(i,p):f==="dangerouslySetInnerHTML"?s_(i,p):f==="children"?Jo(i,p):bf(i,f,p,h)}switch(l){case"input":ld(i,s);break;case"textarea":r_(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?cs(i,!!s.multiple,S,!1):g!==!!s.multiple&&(s.defaultValue!=null?cs(i,!!s.multiple,s.defaultValue,!0):cs(i,!!s.multiple,s.multiple?[]:"",!1))}i[oa]=s}catch(P){Ne(t,t.return,P)}}break;case 6:if(en(e,t),wn(t),r&4){if(t.stateNode===null)throw Error($(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ne(t,t.return,P)}}break;case 3:if(en(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(P){Ne(t,t.return,P)}break;case 4:en(e,t),wn(t);break;case 13:en(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(cm=Le())),r&4&&Ty(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(h=dt)||f,en(e,t),dt=h):en(e,t),wn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(g=W,S=g.child,g.tag){case 0:case 11:case 14:case 15:Bo(4,g,g.return);break;case 1:as(g,g.return);var C=g.stateNode;if(typeof C.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(P){Ne(r,n,P)}}break;case 5:as(g,g.return);break;case 22:if(g.memoizedState!==null){Ay(p);continue}}S!==null?(S.return=g,W=S):Ay(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=o_("display",o))}catch(P){Ne(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(P){Ne(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:en(e,t),wn(t),r&4&&Ty(t);break;case 21:break;default:en(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Dw(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jo(i,""),r.flags&=-33);var s=Iy(t);jd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Iy(t);Bd(t,l,o);break;default:throw Error($(161))}}catch(u){Ne(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jA(t,e,n){W=t,Lw(t)}function Lw(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Il;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||dt;l=Il;var h=dt;if(Il=o,(dt=u)&&!h)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Ry(i):u!==null?(u.return=o,W=u):Ry(i);for(;s!==null;)W=s,Lw(s),s=s.sibling;W=i,Il=l,dt=h}Sy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Sy(t)}}function Sy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||lc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ly(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ly(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&ta(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}dt||e.flags&512&&$d(e)}catch(g){Ne(e,e.return,g)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Ay(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Ry(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(u){Ne(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ne(e,i,u)}}var s=e.return;try{$d(e)}catch(u){Ne(e,s,u)}break;case 5:var o=e.return;try{$d(e)}catch(u){Ne(e,o,u)}}}catch(u){Ne(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var HA=Math.ceil,Iu=ir.ReactCurrentDispatcher,lm=ir.ReactCurrentOwner,Qt=ir.ReactCurrentBatchConfig,ue=0,Ye=null,Fe=null,st=0,Vt=0,ls=Qr(0),He=0,da=null,Ai=0,uc=0,um=0,jo=null,kt=null,cm=0,Ps=1/0,$n=null,Tu=!1,Hd=null,Nr=null,Tl=!1,Sr=null,Su=0,Ho=0,qd=null,$l=-1,Bl=0;function _t(){return ue&6?Le():$l!==-1?$l:$l=Le()}function br(t){return t.mode&1?ue&2&&st!==0?st&-st:kA.transition!==null?(Bl===0&&(Bl=v_()),Bl):(t=de,t!==0||(t=window.event,t=t===void 0?16:R_(t.type)),t):1}function ln(t,e,n,r){if(50<Ho)throw Ho=0,qd=null,Error($(185));ka(t,n,r),(!(ue&2)||t!==Ye)&&(t===Ye&&(!(ue&2)&&(uc|=n),He===4&&Er(t,st)),Dt(t,r),n===1&&ue===0&&!(e.mode&1)&&(Ps=Le()+500,sc&&Yr()))}function Dt(t,e){var n=t.callbackNode;kS(t,e);var r=au(t,t===Ye?st:0);if(r===0)n!==null&&Lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lg(n),e===1)t.tag===0?RA(ky.bind(null,t)):q_(ky.bind(null,t)),IA(function(){!(ue&6)&&Yr()}),n=null;else{switch(__(r)){case 1:n=Vf;break;case 4:n=y_;break;case 16:n=ou;break;case 536870912:n=E_;break;default:n=ou}n=jw(n,Vw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vw(t,e){if($l=-1,Bl=0,ue&6)throw Error($(327));var n=t.callbackNode;if(ps()&&t.callbackNode!==n)return null;var r=au(t,t===Ye?st:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Au(t,r);else{e=r;var i=ue;ue|=2;var s=Fw();(Ye!==t||st!==e)&&($n=null,Ps=Le()+500,yi(t,e));do try{GA();break}catch(l){Mw(t,l)}while(!0);Qf(),Iu.current=s,ue=i,Fe!==null?e=0:(Ye=null,st=0,e=He)}if(e!==0){if(e===2&&(i=Ed(t),i!==0&&(r=i,e=Wd(t,i))),e===1)throw n=da,yi(t,0),Er(t,r),Dt(t,Le()),n;if(e===6)Er(t,r);else{if(i=t.current.alternate,!(r&30)&&!qA(i)&&(e=Au(t,r),e===2&&(s=Ed(t),s!==0&&(r=s,e=Wd(t,s))),e===1))throw n=da,yi(t,0),Er(t,r),Dt(t,Le()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error($(345));case 2:oi(t,kt,$n);break;case 3:if(Er(t,r),(r&130023424)===r&&(e=cm+500-Le(),10<e)){if(au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){_t(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Rd(oi.bind(null,t,kt,$n),e);break}oi(t,kt,$n);break;case 4:if(Er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-an(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HA(r/1960))-r,10<r){t.timeoutHandle=Rd(oi.bind(null,t,kt,$n),r);break}oi(t,kt,$n);break;case 5:oi(t,kt,$n);break;default:throw Error($(329))}}}return Dt(t,Le()),t.callbackNode===n?Vw.bind(null,t):null}function Wd(t,e){var n=jo;return t.current.memoizedState.isDehydrated&&(yi(t,e).flags|=256),t=Au(t,e),t!==2&&(e=kt,kt=n,e!==null&&Gd(e)),t}function Gd(t){kt===null?kt=t:kt.push.apply(kt,t)}function qA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!hn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Er(t,e){for(e&=~um,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-an(e),r=1<<n;t[n]=-1,e&=~r}}function ky(t){if(ue&6)throw Error($(327));ps();var e=au(t,0);if(!(e&1))return Dt(t,Le()),null;var n=Au(t,e);if(t.tag!==0&&n===2){var r=Ed(t);r!==0&&(e=r,n=Wd(t,r))}if(n===1)throw n=da,yi(t,0),Er(t,e),Dt(t,Le()),n;if(n===6)throw Error($(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,oi(t,kt,$n),Dt(t,Le()),null}function hm(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(Ps=Le()+500,sc&&Yr())}}function Ri(t){Sr!==null&&Sr.tag===0&&!(ue&6)&&ps();var e=ue;ue|=1;var n=Qt.transition,r=de;try{if(Qt.transition=null,de=1,t)return t()}finally{de=r,Qt.transition=n,ue=e,!(ue&6)&&Yr()}}function dm(){Vt=ls.current,we(ls)}function yi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wA(n)),Fe!==null)for(n=Fe.return;n!==null;){var r=n;switch(Wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:ks(),we(Nt),we(mt),tm();break;case 5:em(r);break;case 4:ks();break;case 13:we(Ae);break;case 19:we(Ae);break;case 10:Yf(r.type._context);break;case 22:case 23:dm()}n=n.return}if(Ye=t,Fe=t=Dr(t.current,null),st=Vt=e,He=0,da=null,um=uc=Ai=0,kt=jo=null,ci!==null){for(e=0;e<ci.length;e++)if(n=ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ci=null}return t}function Mw(t,e){do{var n=Fe;try{if(Qf(),Fl.current=wu,_u){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_u=!1}if(Si=0,Qe=je=Re=null,$o=!1,ua=0,lm.current=null,n===null||n.return===null){He=1,da=e,Fe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=st,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=my(o);if(S!==null){S.flags&=-257,py(S,o,l,s,e),S.mode&1&&fy(s,h,e),e=S,u=h;var C=e.updateQueue;if(C===null){var P=new Set;P.add(u),e.updateQueue=P}else C.add(u);break e}else{if(!(e&1)){fy(s,h,e),fm();break e}u=Error($(426))}}else if(Te&&l.mode&1){var D=my(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),py(D,o,l,s,e),Gf(Cs(u,l));break e}}s=u=Cs(u,l),He!==4&&(He=2),jo===null?jo=[s]:jo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=_w(s,u,e);ay(s,_);break e;case 1:l=u;var v=s.type,R=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Nr===null||!Nr.has(R)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=ww(s,l,e);ay(s,L);break e}}s=s.return}while(s!==null)}zw(n)}catch(F){e=F,Fe===n&&n!==null&&(Fe=n=n.return);continue}break}while(!0)}function Fw(){var t=Iu.current;return Iu.current=wu,t===null?wu:t}function fm(){(He===0||He===3||He===2)&&(He=4),Ye===null||!(Ai&268435455)&&!(uc&268435455)||Er(Ye,st)}function Au(t,e){var n=ue;ue|=2;var r=Fw();(Ye!==t||st!==e)&&($n=null,yi(t,e));do try{WA();break}catch(i){Mw(t,i)}while(!0);if(Qf(),ue=n,Iu.current=r,Fe!==null)throw Error($(261));return Ye=null,st=0,He}function WA(){for(;Fe!==null;)Uw(Fe)}function GA(){for(;Fe!==null&&!ES();)Uw(Fe)}function Uw(t){var e=Bw(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?zw(t):Fe=e,lm.current=null}function zw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zA(n,e),n!==null){n.flags&=32767,Fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,Fe=null;return}}else if(n=UA(n,e,Vt),n!==null){Fe=n;return}if(e=e.sibling,e!==null){Fe=e;return}Fe=e=t}while(e!==null);He===0&&(He=5)}function oi(t,e,n){var r=de,i=Qt.transition;try{Qt.transition=null,de=1,KA(t,e,n,r)}finally{Qt.transition=i,de=r}return null}function KA(t,e,n,r){do ps();while(Sr!==null);if(ue&6)throw Error($(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error($(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CS(t,s),t===Ye&&(Fe=Ye=null,st=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,jw(ou,function(){return ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qt.transition,Qt.transition=null;var o=de;de=1;var l=ue;ue|=4,lm.current=null,BA(t,n),xw(n,t),mA(Sd),lu=!!Td,Sd=Td=null,t.current=n,jA(n),vS(),ue=l,de=o,Qt.transition=s}else t.current=n;if(Tl&&(Tl=!1,Sr=t,Su=i),s=t.pendingLanes,s===0&&(Nr=null),IS(n.stateNode),Dt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=Hd,Hd=null,t;return Su&1&&t.tag!==0&&ps(),s=t.pendingLanes,s&1?t===qd?Ho++:(Ho=0,qd=t):Ho=0,Yr(),null}function ps(){if(Sr!==null){var t=__(Su),e=Qt.transition,n=de;try{if(Qt.transition=null,de=16>t?16:t,Sr===null)var r=!1;else{if(t=Sr,Sr=null,Su=0,ue&6)throw Error($(331));var i=ue;for(ue|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(W=h;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Bo(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var g=f.sibling,S=f.return;if(bw(f),f===h){W=null;break}if(g!==null){g.return=S,W=g;break}W=S}}}var C=s.alternate;if(C!==null){var P=C.child;if(P!==null){C.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bo(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,W=_;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,W=R;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:lc(9,l)}}catch(F){Ne(l,l.return,F)}if(l===o){W=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,W=L;break e}W=l.return}}if(ue=i,Yr(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(ec,t)}catch{}r=!0}return r}finally{de=n,Qt.transition=e}}return!1}function Cy(t,e,n){e=Cs(n,e),e=_w(t,e,1),t=Pr(t,e,1),e=_t(),t!==null&&(ka(t,1,e),Dt(t,e))}function Ne(t,e,n){if(t.tag===3)Cy(t,t,n);else for(;e!==null;){if(e.tag===3){Cy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Nr===null||!Nr.has(r))){t=Cs(n,t),t=ww(e,t,1),e=Pr(e,t,1),t=_t(),e!==null&&(ka(e,1,t),Dt(e,t));break}}e=e.return}}function QA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=_t(),t.pingedLanes|=t.suspendedLanes&n,Ye===t&&(st&n)===n&&(He===4||He===3&&(st&130023424)===st&&500>Le()-cm?yi(t,0):um|=n),Dt(t,e)}function $w(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=_t();t=Jn(t,e),t!==null&&(ka(t,e,n),Dt(t,n))}function YA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$w(t,n)}function JA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(e),$w(t,n)}var Bw;Bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)Pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Pt=!1,FA(t,e,n);Pt=!!(t.flags&131072)}else Pt=!1,Te&&e.flags&1048576&&W_(e,pu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=Ss(e,mt.current);ms(e,n),i=rm(null,e,r,t,i,n);var s=im();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,fu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xf(e),i.updater=ac,e.stateNode=i,i._reactInternals=e,Od(e,r,t,n),e=Vd(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&qf(e),vt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=ZA(r),t=tn(r,t),i){case 0:e=Ld(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=gy(null,e,r,t,n);break e;case 14:e=yy(null,e,r,tn(r.type,t),n);break e}throw Error($(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),Ey(t,e,r,i,n);case 3:e:{if(Aw(e),t===null)throw Error($(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X_(t,e),Eu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Cs(Error($(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=Cs(Error($(424)),e),e=vy(t,e,r,n,i);break e}else for(Mt=Cr(e.stateNode.containerInfo.firstChild),Ut=e,Te=!0,rn=null,n=Y_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),r===i){e=Xn(t,e,n);break e}vt(t,e,r,n)}e=e.child}return e;case 5:return Z_(e),t===null&&Nd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ad(r,i)?o=null:s!==null&&Ad(r,s)&&(e.flags|=32),Sw(t,e),vt(t,e,o,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return Rw(t,e,n);case 4:return Zf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Rs(e,null,r,n):vt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),gy(t,e,r,i,n);case 7:return vt(t,e,e.pendingProps,n),e.child;case 8:return vt(t,e,e.pendingProps.children,n),e.child;case 12:return vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(gu,r._currentValue),r._currentValue=o,s!==null)if(hn(s.value,o)){if(s.children===i.children&&!Nt.current){e=Xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Kn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),bd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),bd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ms(e,n),i=Jt(i),r=r(i),e.flags|=1,vt(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),yy(t,e,r,i,n);case 15:return Iw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),zl(t,e),e.tag=1,bt(r)?(t=!0,fu(e)):t=!1,ms(e,n),vw(e,r,i),Od(e,r,i,n),Vd(null,e,r,!0,t,n);case 19:return kw(t,e,n);case 22:return Tw(t,e,n)}throw Error($(156,e.tag))};function jw(t,e){return g_(t,e)}function XA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new XA(t,e,n,r)}function mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZA(t){if(typeof t=="function")return mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===xf)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xi:return Ei(n.children,i,s,e);case Df:o=8,i|=8;break;case rd:return t=Kt(12,n,e,i|2),t.elementType=rd,t.lanes=s,t;case id:return t=Kt(13,n,e,i),t.elementType=id,t.lanes=s,t;case sd:return t=Kt(19,n,e,i),t.elementType=sd,t.lanes=s,t;case Zv:return cc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jv:o=10;break e;case Xv:o=9;break e;case Of:o=11;break e;case xf:o=14;break e;case pr:o=16,r=null;break e}throw Error($(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ei(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function cc(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=Zv,t.lanes=n,t.stateNode={isHidden:!1},t}function Dh(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Oh(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fh(0),this.expirationTimes=fh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function pm(t,e,n,r,i,s,o,l,u){return t=new eR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xf(s),t}function tR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Hw(t){if(!t)return Ur;t=t._reactInternals;e:{if(xi(t)!==t||t.tag!==1)throw Error($(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error($(171))}if(t.tag===1){var n=t.type;if(bt(n))return H_(t,n,e)}return e}function qw(t,e,n,r,i,s,o,l,u){return t=pm(n,r,!0,t,i,s,o,l,u),t.context=Hw(null),n=t.current,r=_t(),i=br(n),s=Kn(r,i),s.callback=e??null,Pr(n,s,i),t.current.lanes=i,ka(t,i,r),Dt(t,r),t}function hc(t,e,n,r){var i=e.current,s=_t(),o=br(i);return n=Hw(n),e.context===null?e.context=n:e.pendingContext=n,e=Kn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Pr(i,e,o),t!==null&&(ln(t,i,o,s),Ml(t,i,o)),o}function Ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function nR(){return null}var Ww=typeof reportError=="function"?reportError:function(t){console.error(t)};function ym(t){this._internalRoot=t}dc.prototype.render=ym.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error($(409));hc(t,e,null,null)};dc.prototype.unmount=ym.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ri(function(){hc(null,t,null,null)}),e[Yn]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=T_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yr.length&&e!==0&&e<yr[n].priority;n++);yr.splice(n,0,t),n===0&&A_(t)}};function Em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function rR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Ru(o);s.call(h)}}var o=qw(e,r,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=o,t[Yn]=o.current,ia(t.nodeType===8?t.parentNode:t),Ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=Ru(u);l.call(h)}}var u=pm(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=u,t[Yn]=u.current,ia(t.nodeType===8?t.parentNode:t),Ri(function(){hc(e,u,n,r)}),u}function mc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ru(o);l.call(u)}}hc(e,o,t,i)}else o=rR(n,e,t,i,r);return Ru(o)}w_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(Mf(e,n|1),Dt(e,Le()),!(ue&6)&&(Ps=Le()+500,Yr()))}break;case 13:Ri(function(){var r=Jn(t,1);if(r!==null){var i=_t();ln(r,t,1,i)}}),gm(t,1)}};Ff=function(t){if(t.tag===13){var e=Jn(t,134217728);if(e!==null){var n=_t();ln(e,t,134217728,n)}gm(t,134217728)}};I_=function(t){if(t.tag===13){var e=br(t),n=Jn(t,e);if(n!==null){var r=_t();ln(n,t,e,r)}gm(t,e)}};T_=function(){return de};S_=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};pd=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ic(r);if(!i)throw Error($(90));t_(r),ld(r,i)}}}break;case"textarea":r_(t,n);break;case"select":e=n.value,e!=null&&cs(t,!!n.multiple,e,!1)}};c_=hm;h_=Ri;var iR={usingClientEntryPoint:!1,Events:[Pa,ns,ic,l_,u_,hm]},To={findFiberByHostInstance:ui,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sR={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m_(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||nR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ec=Sl.inject(sR),Rn=Sl}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iR;jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Em(e))throw Error($(200));return tR(t,e,null,n)};jt.createRoot=function(t,e){if(!Em(t))throw Error($(299));var n=!1,r="",i=Ww;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=pm(t,1,!1,null,null,n,!1,r,i),t[Yn]=e.current,ia(t.nodeType===8?t.parentNode:t),new ym(e)};jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error($(188)):(t=Object.keys(t).join(","),Error($(268,t)));return t=m_(e),t=t===null?null:t.stateNode,t};jt.flushSync=function(t){return Ri(t)};jt.hydrate=function(t,e,n){if(!fc(e))throw Error($(200));return mc(null,t,e,!0,n)};jt.hydrateRoot=function(t,e,n){if(!Em(t))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Ww;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qw(e,null,t,1,n??null,i,!1,s,o),t[Yn]=e.current,ia(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new dc(e)};jt.render=function(t,e,n){if(!fc(e))throw Error($(200));return mc(null,t,e,!1,n)};jt.unmountComponentAtNode=function(t){if(!fc(t))throw Error($(40));return t._reactRootContainer?(Ri(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Yn]=null})}),!0):!1};jt.unstable_batchedUpdates=hm;jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fc(n))throw Error($(200));if(t==null||t._reactInternals===void 0)throw Error($(38));return mc(t,e,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function Gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gw)}catch(t){console.error(t)}}Gw(),Gv.exports=jt;var oR=Gv.exports,by=oR;td.createRoot=by.createRoot,td.hydrateRoot=by.hydrateRoot;/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Dy="popstate";function Oy(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function aR(t={}){function e(r,i){var h;let s=(h=i.state)==null?void 0:h.masked,{pathname:o,search:l,hash:u}=s||r.location;return Kd("",{pathname:o,search:l,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default",s?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,i){return typeof i=="string"?i:fa(i)}return uR(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lR(){return Math.random().toString(36).substring(2,10)}function xy(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Kd(t,e,n=null,r,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Us(e):e,state:n,key:e&&e.key||r||lR(),mask:i}}function fa({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function uR(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l="POP",u=null,h=f();h==null&&(h=0,o.replaceState({...o.state,idx:h},""));function f(){return(o.state||{idx:null}).idx}function p(){l="POP";let D=f(),_=D==null?null:D-h;h=D,u&&u({action:l,location:P.location,delta:_})}function g(D,_){l="PUSH";let v=Oy(D)?D:Kd(P.location,D,_);h=f()+1;let R=xy(v,h),L=P.createHref(v.mask||v);try{o.pushState(R,"",L)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(L)}s&&u&&u({action:l,location:P.location,delta:1})}function S(D,_){l="REPLACE";let v=Oy(D)?D:Kd(P.location,D,_);h=f();let R=xy(v,h),L=P.createHref(v.mask||v);o.replaceState(R,"",L),s&&u&&u({action:l,location:P.location,delta:0})}function C(D){return cR(D)}let P={get action(){return l},get location(){return t(i,o)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Dy,p),u=D,()=>{i.removeEventListener(Dy,p),u=null}},createHref(D){return e(i,D)},createURL:C,encodeLocation(D){let _=C(D);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:g,replace:S,go(D){return o.go(D)}};return P}function cR(t,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),ke(n,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:fa(t);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Kw(t,e,n="/"){return hR(t,e,n,!1)}function hR(t,e,n,r,i){let s=typeof e=="string"?Us(e):e,o=Zn(s.pathname||"/",n);if(o==null)return null;let l=dR(t),u=null,h=SR(o);for(let f=0;u==null&&f<l.length;++f)u=IR(l[f],h,r);return u}function dR(t){let e=Qw(t);return fR(e),e}function Qw(t,e=[],n=[],r="",i=!1){let s=(o,l,u=i,h)=>{let f={relativePath:h===void 0?o.path||"":h,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(r)&&u)return;ke(f.relativePath.startsWith(r),`Absolute route path "${f.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(r.length)}let p=un([r,f.relativePath]),g=n.concat(f);o.children&&o.children.length>0&&(ke(o.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Qw(o.children,e,g,p,u)),!(o.path==null&&!o.index)&&e.push({path:p,score:_R(p,o.index),routesMeta:g})};return t.forEach((o,l)=>{var u;if(o.path===""||!((u=o.path)!=null&&u.includes("?")))s(o,l);else for(let h of Yw(o.path))s(o,l,!0,h)}),e}function Yw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Yw(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function fR(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wR(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var mR=/^:[\w-]+$/,pR=3,gR=2,yR=1,ER=10,vR=-2,Ly=t=>t==="*";function _R(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=vR),e&&(r+=gR),n.filter(i=>!Ly(i)).reduce((i,s)=>i+(mR.test(s)?pR:s===""?yR:ER),r)}function wR(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function IR(t,e,n=!1){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=ku({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!p&&h&&n&&!r[r.length-1].route.index&&(p=ku({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:un([s,p.pathname]),pathnameBase:CR(un([s,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(s=un([s,p.pathnameBase]))}return o}function ku(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=TR(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,{paramName:f,isOptional:p},g)=>{if(f==="*"){let C=l[g]||"";o=s.slice(0,s.length-C.length).replace(/(.)\/+$/,"$1")}const S=l[g];return p&&!S?h[f]=void 0:h[f]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function TR(t,e=!1,n=!0){xn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u,h,f)=>{if(r.push({paramName:l,isOptional:u!=null}),u){let p=f.charAt(h+o.length);return p&&p!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function SR(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Zn(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}var AR=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function RR(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Us(t):t,s;return n?(n=Xw(n),n.startsWith("/")?s=Vy(n.substring(1),"/"):s=Vy(n,e)):s=e,{pathname:s,search:PR(r),hash:NR(i)}}function Vy(t,e){let n=Cu(e).split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function xh(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kR(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Jw(t){let e=kR(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function vm(t,e,n,r=!1){let i;typeof t=="string"?i=Us(t):(i={...t},ke(!i.pathname||!i.pathname.includes("?"),xh("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),xh("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),xh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?e[p]:"/"}let u=RR(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}var Xw=t=>t.replace(/\/\/+/g,"/"),un=t=>Xw(t.join("/")),Cu=t=>t.replace(/\/+$/,""),CR=t=>Cu(t).replace(/^\/*/,"/"),PR=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,NR=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,bR=class{constructor(t,e,n,r=!1){this.status=t,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function DR(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function OR(t){let e=t.map(n=>n.route.path).filter(Boolean);return un(e)||"/"}var Zw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function e0(t,e){let n=t;if(typeof n!="string"||!AR.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Zw)try{let s=new URL(window.location.href),o=n.startsWith("//")?new URL(s.protocol+n):new URL(n),l=Zn(o.pathname,e);o.origin===s.origin&&l!=null?n=l+o.search+o.hash:i=!0}catch{xn(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var t0=["POST","PUT","PATCH","DELETE"];new Set(t0);var xR=["GET",...t0];new Set(xR);var zs=x.createContext(null);zs.displayName="DataRouter";var pc=x.createContext(null);pc.displayName="DataRouterState";var n0=x.createContext(!1);function LR(){return x.useContext(n0)}var r0=x.createContext({isTransitioning:!1});r0.displayName="ViewTransition";var VR=x.createContext(new Map);VR.displayName="Fetchers";var MR=x.createContext(null);MR.displayName="Await";var Zt=x.createContext(null);Zt.displayName="Navigation";var ba=x.createContext(null);ba.displayName="Location";var Fn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Fn.displayName="Route";var _m=x.createContext(null);_m.displayName="RouteError";var i0="REACT_ROUTER_ERROR",FR="REDIRECT",UR="ROUTE_ERROR_RESPONSE";function zR(t){if(t.startsWith(`${i0}:${FR}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function $R(t){if(t.startsWith(`${i0}:${UR}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new bR(e.status,e.statusText,e.data)}catch{}}function BR(t,{relative:e}={}){ke(Da(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=x.useContext(Zt),{hash:i,pathname:s,search:o}=Oa(t,{relative:e}),l=s;return n!=="/"&&(l=s==="/"?n:un([n,s])),r.createHref({pathname:l,search:o,hash:i})}function Da(){return x.useContext(ba)!=null}function Un(){return ke(Da(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(ba).location}var s0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function o0(t){x.useContext(Zt).static||x.useLayoutEffect(t)}function jR(){let{isDataRoute:t}=x.useContext(Fn);return t?rk():HR()}function HR(){ke(Da(),"useNavigate() may be used only in the context of a <Router> component.");let t=x.useContext(zs),{basename:e,navigator:n}=x.useContext(Zt),{matches:r}=x.useContext(Fn),{pathname:i}=Un(),s=JSON.stringify(Jw(r)),o=x.useRef(!1);return o0(()=>{o.current=!0}),x.useCallback((u,h={})=>{if(xn(o.current,s0),!o.current)return;if(typeof u=="number"){n.go(u);return}let f=vm(u,JSON.parse(s),i,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:un([e,f.pathname])),(h.replace?n.replace:n.push)(f,h.state,h)},[e,n,s,i,t])}x.createContext(null);function qR(){let{matches:t}=x.useContext(Fn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function Oa(t,{relative:e}={}){let{matches:n}=x.useContext(Fn),{pathname:r}=Un(),i=JSON.stringify(Jw(n));return x.useMemo(()=>vm(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function WR(t,e){return a0(t,e)}function a0(t,e,n){var D;ke(Da(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=x.useContext(Zt),{matches:i}=x.useContext(Fn),s=i[i.length-1],o=s?s.params:{},l=s?s.pathname:"/",u=s?s.pathnameBase:"/",h=s&&s.route;{let _=h&&h.path||"";u0(l,!h||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let f=Un(),p;if(e){let _=typeof e=="string"?Us(e):e;ke(u==="/"||((D=_.pathname)==null?void 0:D.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${_.pathname}" was given in the \`location\` prop.`),p=_}else p=f;let g=p.pathname||"/",S=g;if(u!=="/"){let _=u.replace(/^\//,"").split("/");S="/"+g.replace(/^\//,"").split("/").slice(_.length).join("/")}let C=n&&n.state.matches.length?n.state.matches.map(_=>Object.assign(_,{route:n.manifest[_.route.id]||_.route})):Kw(t,{pathname:S});xn(h||C!=null,`No routes matched location "${p.pathname}${p.search}${p.hash}" `),xn(C==null||C[C.length-1].route.element!==void 0||C[C.length-1].route.Component!==void 0||C[C.length-1].route.lazy!==void 0,`Matched leaf route at location "${p.pathname}${p.search}${p.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=JR(C&&C.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:un([u,r.encodeLocation?r.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?u:un([u,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),i,n);return e&&P?x.createElement(ba.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...p},navigationType:"POP"}},P):P}function GR(){let t=nk(),e=DR(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:s},"ErrorBoundary")," or"," ",x.createElement("code",{style:s},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:i},n):null,o)}var KR=x.createElement(GR,null),l0=class extends x.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const n=$R(t.digest);n&&(t=n)}let e=t!==void 0?x.createElement(Fn.Provider,{value:this.props.routeContext},x.createElement(_m.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?x.createElement(QR,{error:t},e):e}};l0.contextType=n0;var Lh=new WeakMap;function QR({children:t,error:e}){let{basename:n}=x.useContext(Zt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=zR(e.digest);if(r){let i=Lh.get(e);if(i)throw i;let s=e0(r.location,n);if(Zw&&!Lh.get(e))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const o=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw Lh.set(e,o),o}return x.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function YR({routeContext:t,match:e,children:n}){let r=x.useContext(zs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),x.createElement(Fn.Provider,{value:t},n)}function JR(t,e=[],n){let r=n==null?void 0:n.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let i=t,s=r==null?void 0:r.errors;if(s!=null){let f=i.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id])!==void 0);ke(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),i=i.slice(0,Math.min(i.length,f+1))}let o=!1,l=-1;if(n&&r){o=r.renderFallback;for(let f=0;f<i.length;f++){let p=i[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=f),p.route.id){let{loaderData:g,errors:S}=r,C=p.route.loader&&!g.hasOwnProperty(p.route.id)&&(!S||S[p.route.id]===void 0);if(p.route.lazy||C){n.isStatic&&(o=!0),l>=0?i=i.slice(0,l+1):i=[i[0]];break}}}}let u=n==null?void 0:n.onError,h=r&&u?(f,p)=>{var g,S;u(f,{location:r.location,params:((S=(g=r.matches)==null?void 0:g[0])==null?void 0:S.params)??{},pattern:OR(r.matches),errorInfo:p})}:void 0;return i.reduceRight((f,p,g)=>{let S,C=!1,P=null,D=null;r&&(S=s&&p.route.id?s[p.route.id]:void 0,P=p.route.errorElement||KR,o&&(l<0&&g===0?(u0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),C=!0,D=null):l===g&&(C=!0,D=p.route.hydrateFallbackElement||null)));let _=e.concat(i.slice(0,g+1)),v=()=>{let R;return S?R=P:C?R=D:p.route.Component?R=x.createElement(p.route.Component,null):p.route.element?R=p.route.element:R=f,x.createElement(YR,{match:p,routeContext:{outlet:f,matches:_,isDataRoute:r!=null},children:R})};return r&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?x.createElement(l0,{location:r.location,revalidation:r.revalidation,component:P,error:S,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:h}):v()},null)}function wm(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XR(t){let e=x.useContext(zs);return ke(e,wm(t)),e}function ZR(t){let e=x.useContext(pc);return ke(e,wm(t)),e}function ek(t){let e=x.useContext(Fn);return ke(e,wm(t)),e}function Im(t){let e=ek(t),n=e.matches[e.matches.length-1];return ke(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function tk(){return Im("useRouteId")}function nk(){var r;let t=x.useContext(_m),e=ZR("useRouteError"),n=Im("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function rk(){let{router:t}=XR("useNavigate"),e=Im("useNavigate"),n=x.useRef(!1);return o0(()=>{n.current=!0}),x.useCallback(async(i,s={})=>{xn(n.current,s0),n.current&&(typeof i=="number"?await t.navigate(i):await t.navigate(i,{fromRouteId:e,...s}))},[t,e])}var My={};function u0(t,e,n){!e&&!My[t]&&(My[t]=!0,xn(!1,n))}x.memo(ik);function ik({routes:t,manifest:e,future:n,state:r,isStatic:i,onError:s}){return a0(t,void 0,{manifest:e,state:r,isStatic:i,onError:s})}function In(t){ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sk({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:s=!1,useTransitions:o}){ke(!Da(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),u=x.useMemo(()=>({basename:l,navigator:i,static:s,useTransitions:o,future:{}}),[l,i,s,o]);typeof n=="string"&&(n=Us(n));let{pathname:h="/",search:f="",hash:p="",state:g=null,key:S="default",mask:C}=n,P=x.useMemo(()=>{let D=Zn(h,l);return D==null?null:{location:{pathname:D,search:f,hash:p,state:g,key:S,mask:C},navigationType:r}},[l,h,f,p,g,S,r,C]);return xn(P!=null,`<Router basename="${l}"> is not able to match the URL "${h}${f}${p}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:x.createElement(Zt.Provider,{value:u},x.createElement(ba.Provider,{children:e,value:P}))}function ok({children:t,location:e}){return WR(Qd(t),e)}function Qd(t,e=[]){let n=[];return x.Children.forEach(t,(r,i)=>{if(!x.isValidElement(r))return;let s=[...e,i];if(r.type===x.Fragment){n.push.apply(n,Qd(r.props.children,s));return}ke(r.type===In,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qd(r.props.children,s)),n.push(o)}),n}var Hl="get",ql="application/x-www-form-urlencoded";function gc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function ak(t){return gc(t)&&t.tagName.toLowerCase()==="button"}function lk(t){return gc(t)&&t.tagName.toLowerCase()==="form"}function uk(t){return gc(t)&&t.tagName.toLowerCase()==="input"}function ck(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hk(t,e){return t.button===0&&(!e||e==="_self")&&!ck(t)}var Al=null;function dk(){if(Al===null)try{new FormData(document.createElement("form"),0),Al=!1}catch{Al=!0}return Al}var fk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Vh(t){return t!=null&&!fk.has(t)?(xn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ql}"`),null):t}function mk(t,e){let n,r,i,s,o;if(lk(t)){let l=t.getAttribute("action");r=l?Zn(l,e):null,n=t.getAttribute("method")||Hl,i=Vh(t.getAttribute("enctype"))||ql,s=new FormData(t)}else if(ak(t)||uk(t)&&(t.type==="submit"||t.type==="image")){let l=t.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=t.getAttribute("formaction")||l.getAttribute("action");if(r=u?Zn(u,e):null,n=t.getAttribute("formmethod")||l.getAttribute("method")||Hl,i=Vh(t.getAttribute("formenctype"))||Vh(l.getAttribute("enctype"))||ql,s=new FormData(l,t),!dk()){let{name:h,type:f,value:p}=t;if(f==="image"){let g=h?`${h}.`:"";s.append(`${g}x`,"0"),s.append(`${g}y`,"0")}else h&&s.append(h,p)}}else{if(gc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Hl,r=null,i=ql,o=t}return s&&i==="text/plain"&&(o=s,s=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:s,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Tm(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function c0(t,e,n,r){let i=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n?i.pathname.endsWith("/")?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname==="/"?i.pathname=`_root.${r}`:e&&Zn(i.pathname,e)==="/"?i.pathname=`${Cu(e)}/_root.${r}`:i.pathname=`${Cu(i.pathname)}.${r}`,i}async function pk(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gk(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yk(t,e,n){let r=await Promise.all(t.map(async i=>{let s=e.routes[i.route.id];if(s){let o=await pk(s,n);return o.links?o.links():[]}return[]}));return wk(r.flat(1).filter(gk).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Fy(t,e,n,r,i,s){let o=(u,h)=>n[h]?u.route.id!==n[h].route.id:!0,l=(u,h)=>{var f;return n[h].pathname!==u.pathname||((f=n[h].route.path)==null?void 0:f.endsWith("*"))&&n[h].params["*"]!==u.params["*"]};return s==="assets"?e.filter((u,h)=>o(u,h)||l(u,h)):s==="data"?e.filter((u,h)=>{var p;let f=r.routes[u.route.id];if(!f||!f.hasLoader)return!1;if(o(u,h)||l(u,h))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((p=n[0])==null?void 0:p.params)||{},nextUrl:new URL(t,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Ek(t,e,{includeHydrateFallback:n}={}){return vk(t.map(r=>{let i=e.routes[r.route.id];if(!i)return[];let s=[i.module];return i.clientActionModule&&(s=s.concat(i.clientActionModule)),i.clientLoaderModule&&(s=s.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(s=s.concat(i.hydrateFallbackModule)),i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function vk(t){return[...new Set(t)]}function _k(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function wk(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let s=JSON.stringify(_k(i));return n.has(s)||(n.add(s),r.push({key:s,link:i})),r},[])}function Sm(){let t=x.useContext(zs);return Tm(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Ik(){let t=x.useContext(pc);return Tm(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Am=x.createContext(void 0);Am.displayName="FrameworkContext";function Rm(){let t=x.useContext(Am);return Tm(t,"You must render this element inside a <HydratedRouter> element"),t}function Tk(t,e){let n=x.useContext(Am),[r,i]=x.useState(!1),[s,o]=x.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:h,onMouseLeave:f,onTouchStart:p}=e,g=x.useRef(null);x.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let P=_=>{_.forEach(v=>{o(v.isIntersecting)})},D=new IntersectionObserver(P,{threshold:.5});return g.current&&D.observe(g.current),()=>{D.disconnect()}}},[t]),x.useEffect(()=>{if(r){let P=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(P)}}},[r]);let S=()=>{i(!0)},C=()=>{i(!1),o(!1)};return n?t!=="intent"?[s,g,{}]:[s,g,{onFocus:So(l,S),onBlur:So(u,C),onMouseEnter:So(h,S),onMouseLeave:So(f,C),onTouchStart:So(p,S)}]:[!1,g,{}]}function So(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function Sk({page:t,...e}){let n=LR(),{router:r}=Sm(),i=x.useMemo(()=>Kw(r.routes,t,r.basename),[r.routes,t,r.basename]);return i?n?x.createElement(Rk,{page:t,matches:i,...e}):x.createElement(kk,{page:t,matches:i,...e}):null}function Ak(t){let{manifest:e,routeModules:n}=Rm(),[r,i]=x.useState([]);return x.useEffect(()=>{let s=!1;return yk(t,e,n).then(o=>{s||i(o)}),()=>{s=!0}},[t,e,n]),r}function Rk({page:t,matches:e,...n}){let r=Un(),{future:i}=Rm(),{basename:s}=Sm(),o=x.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let l=c0(t,s,i.unstable_trailingSlashAwareDataRequests,"rsc"),u=!1,h=[];for(let f of e)typeof f.route.shouldRevalidate=="function"?u=!0:h.push(f.route.id);return u&&h.length>0&&l.searchParams.set("_routes",h.join(",")),[l.pathname+l.search]},[s,i.unstable_trailingSlashAwareDataRequests,t,r,e]);return x.createElement(x.Fragment,null,o.map(l=>x.createElement("link",{key:l,rel:"prefetch",as:"fetch",href:l,...n})))}function kk({page:t,matches:e,...n}){let r=Un(),{future:i,manifest:s,routeModules:o}=Rm(),{basename:l}=Sm(),{loaderData:u,matches:h}=Ik(),f=x.useMemo(()=>Fy(t,e,h,s,r,"data"),[t,e,h,s,r]),p=x.useMemo(()=>Fy(t,e,h,s,r,"assets"),[t,e,h,s,r]),g=x.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let P=new Set,D=!1;if(e.forEach(v=>{var L;let R=s.routes[v.route.id];!R||!R.hasLoader||(!f.some(F=>F.route.id===v.route.id)&&v.route.id in u&&((L=o[v.route.id])!=null&&L.shouldRevalidate)||R.hasClientLoader?D=!0:P.add(v.route.id))}),P.size===0)return[];let _=c0(t,l,i.unstable_trailingSlashAwareDataRequests,"data");return D&&P.size>0&&_.searchParams.set("_routes",e.filter(v=>P.has(v.route.id)).map(v=>v.route.id).join(",")),[_.pathname+_.search]},[l,i.unstable_trailingSlashAwareDataRequests,u,r,s,f,e,t,o]),S=x.useMemo(()=>Ek(p,s),[p,s]),C=Ak(p);return x.createElement(x.Fragment,null,g.map(P=>x.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...n})),S.map(P=>x.createElement("link",{key:P,rel:"modulepreload",href:P,...n})),C.map(({key:P,link:D})=>x.createElement("link",{key:P,nonce:n.nonce,...D,crossOrigin:D.crossOrigin??n.crossOrigin})))}function Ck(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Pk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Pk&&(window.__reactRouterVersion="7.15.1")}catch{}function Nk({basename:t,children:e,useTransitions:n,window:r}){let i=x.useRef();i.current==null&&(i.current=aR({window:r,v5Compat:!0}));let s=i.current,[o,l]=x.useState({action:s.action,location:s.location}),u=x.useCallback(h=>{n===!1?l(h):x.startTransition(()=>l(h))},[n]);return x.useLayoutEffect(()=>s.listen(u),[s,u]),x.createElement(sk,{basename:t,children:e,location:o.location,navigationType:o.action,navigator:s,useTransitions:n})}var h0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=x.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:s,replace:o,mask:l,state:u,target:h,to:f,preventScrollReset:p,viewTransition:g,defaultShouldRevalidate:S,...C},P){let{basename:D,navigator:_,useTransitions:v}=x.useContext(Zt),R=typeof f=="string"&&h0.test(f),L=e0(f,D);f=L.to;let F=BR(f,{relative:i}),z=Un(),w=null;if(l){let Oe=vm(l,[],z.mask?z.mask.pathname:"/",!0);D!=="/"&&(Oe.pathname=Oe.pathname==="/"?D:un([D,Oe.pathname])),w=_.createHref(Oe)}let[E,I,A]=Tk(r,C),k=xk(f,{replace:o,mask:l,state:u,target:h,preventScrollReset:p,relative:i,viewTransition:g,defaultShouldRevalidate:S,useTransitions:v});function N(Oe){e&&e(Oe),Oe.defaultPrevented||k(Oe)}let T=!(L.isExternal||s),ye=x.createElement("a",{...C,...A,href:(T?w:void 0)||L.absoluteURL||F,onClick:T?N:e,ref:Ck(P,I),target:h,"data-discover":!R&&n==="render"?"true":void 0});return E&&!R?x.createElement(x.Fragment,null,ye,x.createElement(Sk,{page:F})):ye});be.displayName="Link";var bk=x.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:s,to:o,viewTransition:l,children:u,...h},f){let p=Oa(o,{relative:h.relative}),g=Un(),S=x.useContext(pc),{navigator:C,basename:P}=x.useContext(Zt),D=S!=null&&Uk(p)&&l===!0,_=C.encodeLocation?C.encodeLocation(p).pathname:p.pathname,v=g.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(v=v.toLowerCase(),R=R?R.toLowerCase():null,_=_.toLowerCase()),R&&P&&(R=Zn(R,P)||R);const L=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let F=v===_||!i&&v.startsWith(_)&&v.charAt(L)==="/",z=R!=null&&(R===_||!i&&R.startsWith(_)&&R.charAt(_.length)==="/"),w={isActive:F,isPending:z,isTransitioning:D},E=F?e:void 0,I;typeof r=="function"?I=r(w):I=[r,F?"active":null,z?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let A=typeof s=="function"?s(w):s;return x.createElement(be,{...h,"aria-current":E,className:I,ref:f,style:A,to:o,viewTransition:l},typeof u=="function"?u(w):u)});bk.displayName="NavLink";var Dk=x.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:s,method:o=Hl,action:l,onSubmit:u,relative:h,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:g,...S},C)=>{let{useTransitions:P}=x.useContext(Zt),D=Mk(),_=Fk(l,{relative:h}),v=o.toLowerCase()==="get"?"get":"post",R=typeof l=="string"&&h0.test(l),L=F=>{if(u&&u(F),F.defaultPrevented)return;F.preventDefault();let z=F.nativeEvent.submitter,w=(z==null?void 0:z.getAttribute("formmethod"))||o,E=()=>D(z||F.currentTarget,{fetcherKey:e,method:w,navigate:n,replace:i,state:s,relative:h,preventScrollReset:f,viewTransition:p,defaultShouldRevalidate:g});P&&n!==!1?x.startTransition(()=>E()):E()};return x.createElement("form",{ref:C,method:v,action:_,onSubmit:r?u:L,...S,"data-discover":!R&&t==="render"?"true":void 0})});Dk.displayName="Form";function Ok(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(t){let e=x.useContext(zs);return ke(e,Ok(t)),e}function xk(t,{target:e,replace:n,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u,useTransitions:h}={}){let f=jR(),p=Un(),g=Oa(t,{relative:o});return x.useCallback(S=>{if(hk(S,e)){S.preventDefault();let C=n!==void 0?n:fa(p)===fa(g),P=()=>f(t,{replace:C,mask:r,state:i,preventScrollReset:s,relative:o,viewTransition:l,defaultShouldRevalidate:u});h?x.startTransition(()=>P()):P()}},[p,f,g,n,r,i,e,t,s,o,l,u,h])}var Lk=0,Vk=()=>`__${String(++Lk)}__`;function Mk(){let{router:t}=d0("useSubmit"),{basename:e}=x.useContext(Zt),n=tk(),r=t.fetch,i=t.navigate;return x.useCallback(async(s,o={})=>{let{action:l,method:u,encType:h,formData:f,body:p}=mk(s,e);if(o.navigate===!1){let g=o.fetcherKey||Vk();await r(g,n,o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||h,flushSync:o.flushSync})}else await i(o.action||l,{defaultShouldRevalidate:o.defaultShouldRevalidate,preventScrollReset:o.preventScrollReset,formData:f,body:p,formMethod:o.method||u,formEncType:o.encType||h,replace:o.replace,state:o.state,fromRouteId:n,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,i,e,n])}function Fk(t,{relative:e}={}){let{basename:n}=x.useContext(Zt),r=x.useContext(Fn);ke(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),s={...Oa(t||".",{relative:e})},o=Un();if(t==null){s.search=o.search;let l=new URLSearchParams(s.search),u=l.getAll("index");if(u.some(f=>f==="")){l.delete("index"),u.filter(p=>p).forEach(p=>l.append("index",p));let f=l.toString();s.search=f?`?${f}`:""}}return(!t||t===".")&&i.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:un([n,s.pathname])),fa(s)}function Uk(t,{relative:e}={}){let n=x.useContext(r0);ke(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=d0("useViewTransitionState"),i=Oa(t,{relative:e});if(!n.isTransitioning)return!1;let s=Zn(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Zn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ku(i.pathname,o)!=null||ku(i.pathname,s)!=null}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$k=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase()),Uy=t=>{const e=$k(t);return e.charAt(0).toUpperCase()+e.slice(1)},f0=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim(),Bk=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=x.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>x.createElement("svg",{ref:u,...jk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:f0("lucide",i),...!s&&!Bk(l)&&{"aria-hidden":"true"},...l},[...o.map(([h,f])=>x.createElement(h,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=(t,e)=>{const n=x.forwardRef(({className:r,...i},s)=>x.createElement(Hk,{ref:s,iconNode:e,className:f0(`lucide-${zk(Uy(t))}`,`lucide-${t}`,r),...i}));return n.displayName=Uy(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],zy=re("arrow-left",qk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],zt=re("arrow-right",Wk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],m0=re("badge-check",Gk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],p0=re("box",Kk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Yk=re("boxes",Qk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],Pu=re("calendar-days",Jk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],km=re("clipboard-check",Xk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],g0=re("clipboard-list",Zk);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Nu=re("clock",eC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19.136 12a10 10 0 0 1-14.271 0",key:"ppmlo4"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}]],y0=re("drafting-compass",tC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rC=re("eye",nC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]],sC=re("facebook",iC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],aC=re("file-text",oC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]],uC=re("gem",lC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],Cm=re("handshake",cC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]],Pm=re("headphones",hC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],E0=re("house",dC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],mC=re("instagram",fC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pC=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],gC=re("log-out",pC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],yc=re("mail",yC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],bu=re("map-pin",EC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],v0=re("menu",vC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],ki=re("message-circle",_C);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]],_0=re("package-check",wC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]],Mh=re("pen-line",IC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Nm=re("pen-tool",TC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Ec=re("phone",SC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],RC=re("play",AC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Wi=re("plus",kC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],PC=re("refresh-cw",CC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],w0=re("search",NC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],xa=re("shield-check",bC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",key:"xacw8m"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]],OC=re("sofa",DC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],LC=re("sparkles",xC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],I0=re("star",VC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],bm=re("truck",MC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Dm=re("users",FC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],Yd=re("wrench",UC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zC=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vc=re("x",zC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $C=[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]],BC=re("youtube",$C),$y=[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"SERVICES",path:"/services"},{name:"PORTFOLIO",path:"/portfolio"},{name:"PROCESS",path:"/process"},{name:"BLOG",path:"/blog"},{name:"CONTACT",path:"/contact"}];function T0(){return c.createElement(be,{to:"/",className:"brand-logo-link group","aria-label":"PP Home Furniture & Design"},c.createElement("img",{className:"brand-logo-image",src:"/pp-home-logo.png",alt:"PP Home Furniture & Design"}),c.createElement("div",{className:"brand-logo-text"},c.createElement("h1",null,"PP Home"),c.createElement("p",null,"Furniture & Design")))}function jC(){const t=Un(),e=t.pathname==="/contact",[n,r]=x.useState(!1),[i,s]=x.useState(!1);return x.useEffect(()=>{r(!1)},[t.pathname]),x.useEffect(()=>{const o=()=>{s(window.scrollY>30)};return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),c.createElement("header",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${i||e?"bg-black/80 backdrop-blur-xl border-b border-yellow-500/20 shadow-2xl":"bg-transparent"}`},c.createElement("div",{className:"max-w-7xl mx-auto px-6 lg:px-10"},c.createElement("div",{className:"flex items-center justify-between h-24"},c.createElement(T0,null),c.createElement("nav",{className:"hidden lg:flex items-center gap-5 xl:gap-8 2xl:gap-10"},$y.map(o=>{const l=t.pathname===o.path;return c.createElement(be,{key:o.path,to:o.path,className:`relative text-sm tracking-[2px] font-medium transition-all duration-300
                  ${l?"text-yellow-400":"text-white hover:text-yellow-300"}`},o.name,c.createElement("span",{className:`absolute left-0 -bottom-2 h-[2px] bg-yellow-400 transition-all duration-300
                    ${l?"w-full":"w-0 group-hover:w-full"}`}))})),c.createElement("div",{className:"flex items-center gap-4"},c.createElement(be,{to:"/contact",className:"hidden lg:flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold tracking-wider hover:scale-105 duration-300 shadow-lg shadow-yellow-500/20"},"GET QUOTE"),c.createElement("button",{className:"lg:hidden w-12 h-12 rounded-full border border-yellow-500/20 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-all duration-300",type:"button","aria-label":n?"Close menu":"Open menu","aria-expanded":n,"aria-controls":"mobile-navigation",onClick:()=>r(o=>!o)},n?c.createElement(vc,{size:24}):c.createElement(v0,{size:24}))))),c.createElement("nav",{id:"mobile-navigation",className:`lg:hidden overflow-hidden transition-all duration-500
        ${n?"max-h-screen opacity-100":"max-h-0 opacity-0"}`},c.createElement("div",{className:"bg-black/95 backdrop-blur-2xl border-t border-yellow-500/10 px-6 py-8 flex flex-col gap-6"},$y.map(o=>{const l=t.pathname===o.path;return c.createElement(be,{key:o.path,to:o.path,className:`text-lg tracking-widest transition-all duration-300
                ${l?"text-yellow-400":"text-white hover:text-yellow-300"}`},o.name)}),c.createElement(be,{to:"/contact",className:"mt-4 flex items-center justify-center px-6 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold tracking-widest"},"GET QUOTE"))))}const Du={BadgeCheck:m0,Box:p0,Boxes:Yk,CalendarDays:Pu,ClipboardCheck:km,ClipboardList:g0,Clock:Nu,DraftingCompass:y0,Eye:rC,Gem:uC,Handshake:Cm,Headphones:Pm,Home:E0,Mail:yc,MapPin:bu,Menu:v0,MessageCircle:ki,PackageCheck:_0,PenTool:Nm,Phone:Ec,Search:w0,ShieldCheck:xa,Sparkles:LC,Star:I0,Truck:bm,Users:Dm,Wrench:Yd},J={kitchen:"https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1800&q=85",living:"https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85",media:"https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85",closet:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=85",office:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",materials:"https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1800&q=85",workshop:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85",design:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",install:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=85",cleaning:"https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=85",team:"https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85"},Ou=[{icon:Dm,value:"10+",label:"ปี ประสบการณ์",desc:"ในวงการเฟอร์นิเจอร์บิวท์อิน"},{icon:p0,value:"500+",label:"โครงการที่ไว้วางใจ",desc:"ทั้งบ้าน คอนโด และอาคารสำนักงาน"},{icon:I0,value:"98%",label:"ลูกค้าพึงพอใจ",desc:"ในคุณภาพและบริการของเรา"},{icon:xa,value:"1 YEAR",label:"รับประกันงานติดตั้ง",desc:"มั่นใจในคุณภาพหลังการขาย"}],HC=[{icon:y0,title:"ดีไซน์ที่ตอบโจทย์",desc:"ออกแบบให้สวยงาม เข้ากับไลฟ์สไตล์ และการใช้งานของคุณ"},{icon:m0,title:"คุณภาพที่เหนือกว่า",desc:"เลือกใช้วัสดุและอุปกรณ์คุณภาพสูง เพื่อความทนทานและความสวยงาม"},{icon:Dm,title:"ทีมงานมืออาชีพ",desc:"ทีมงานมากประสบการณ์ ใส่ใจทุกรายละเอียด ตั้งแต่ออกแบบจนติดตั้ง"},{icon:Cm,title:"บริการด้วยใจ",desc:"ดูแลใกล้ชิด ให้คำปรึกษา และบริการหลังการขายที่ดีที่สุด"}],S0=[{icon:ki,title:"DESIGN & CONSULTATION",thai:"ให้คำปรึกษาและออกแบบ",desc:"รับฟังความต้องการ วิเคราะห์พื้นที่ และออกแบบตามสไตล์ของคุณ",image:J.design},{icon:Nm,title:"3D DESIGN",thai:"ออกแบบ 3 มิติ",desc:"ออกแบบภาพ 3D เสมือนจริง ให้เห็นภาพก่อนเริ่มผลิต",image:J.office},{icon:_0,title:"BUILT-IN FURNITURE",thai:"ผลิตเฟอร์นิเจอร์บิวท์อิน",desc:"ผลิตด้วยวัสดุคุณภาพสูง แข็งแรง ทนทาน ใช้งานได้ยาวนาน",image:J.materials},{icon:bm,title:"DELIVERY & INSTALLATION",thai:"จัดส่งและติดตั้ง",desc:"ติดตั้งโดยทีมงานมืออาชีพ รวดเร็ว เรียบร้อย และตรงเวลา",image:J.install},{icon:km,title:"QUALITY INSPECTION",thai:"ตรวจสอบคุณภาพ",desc:"ตรวจสอบทุกขั้นตอน เพื่อให้งานเรียบร้อยและปลอดภัย",image:J.kitchen},{icon:Pm,title:"AFTER SERVICE",thai:"บริการหลังการขาย",desc:"รับประกันงานติดตั้งและดูแลหลังการขายอย่างต่อเนื่อง",image:J.media}],_c=[{no:"01",icon:ki,title:"ติดต่อเรา / ปรึกษาเบื้องต้น",desc:"พูดคุยความต้องการ ประเมินพื้นที่ และให้คำแนะนำเบื้องต้น"},{no:"02",icon:Nm,title:"ออกแบบ 3D และเสนอราคา",desc:"ออกแบบ 3D ให้เห็นภาพชัดเจน พร้อมเสนอราคาอย่างละเอียด"},{no:"03",icon:g0,title:"สรุปแบบและยืนยันการสั่งซื้อ",desc:"สรุปแบบ วัสดุ และรายละเอียด พร้อมเซ็นสัญญาการทำงาน"},{no:"04",icon:Yd,title:"ผลิตชิ้นงาน",desc:"ผลิตด้วยเครื่องจักรที่ได้มาตรฐาน ควบคุมคุณภาพทุกขั้นตอน"},{no:"05",icon:bm,title:"จัดส่งและเตรียมติดตั้ง",desc:"ตรวจสอบชิ้นงานก่อนจัดส่ง เพื่อความเรียบร้อยและปลอดภัย"},{no:"06",icon:Yd,title:"ติดตั้งหน้างาน",desc:"ทีมช่างมืออาชีพติดตั้งด้วยความละเอียด เรียบร้อยและตรงตามแบบ"},{no:"07",icon:km,title:"ตรวจรับงาน",desc:"ตรวจสอบความเรียบร้อยร่วมกับลูกค้าทุกจุดก่อนส่งมอบงาน"},{no:"08",icon:xa,title:"บริการหลังการขาย",desc:"รับประกันงานติดตั้งและดูแลหลังการขาย พร้อมให้คำแนะนำตลอดการใช้งาน"}],wc=[{category:"KITCHEN",title:"Minimal Kitchen",thai:"ห้องครัวบิวท์อิน",style:"Modern Luxury",image:"/images/portfolio/kitchen.png",desc:"ครัวบิวท์อินโทนสีอบอุ่นที่เน้นพื้นที่ใช้งานครบถ้วนและดูแลรักษาง่าย",details:`ห้องครัวนี้ออกแบบสำหรับบ้านที่ต้องการพื้นที่ทำอาหารจริงในทุกวัน แต่ยังคงภาพลักษณ์ที่เรียบหรูและเป็นระเบียบ เราวางแนวตู้เก็บของให้ต่อเนื่องกับพื้นที่เตรียมอาหาร เพื่อให้หยิบใช้อุปกรณ์ได้สะดวกและลดความรกบนเคาน์เตอร์

จุดเด่นของงานคือการผสมหน้าบานเรียบกับตู้โชว์กระจกและไฟซ่อน ทำให้พื้นที่ครัวไม่ดูหนักจนเกินไป โทนสีเขียวอ่อนและวัสดุผิวด้านช่วยให้บรรยากาศนุ่มขึ้น เหมาะกับบ้านยุคใหม่ที่ต้องการทั้งความสวยและความทนทาน

ฟังก์ชันหลักถูกจัดให้รองรับการใช้งานจริง ตั้งแต่พื้นที่ล้าง เตรียมอาหาร จัดเก็บ ไปจนถึงมุมรับประทานเบา ๆ ทำให้ครัวนี้เป็นทั้งพื้นที่ทำงานและพื้นที่ใช้ชีวิตของครอบครัวในเวลาเดียวกัน`},{category:"WARDROBE",title:"Luxury Walk-in Closet",thai:"ตู้เสื้อผ้าบิวท์อิน",style:"Luxury Classic",image:"/images/portfolio/wardrobe.png",desc:"ตู้เสื้อผ้าแบบ walk-in ที่จัดเก็บเป็นสัดส่วน พร้อมไฟตกแต่งเพื่อความหรูหรา",details:`พื้นที่ตู้เสื้อผ้านี้ถูกออกแบบให้ใช้งานง่ายตั้งแต่การเลือกชุดประจำวันไปจนถึงการจัดเก็บของใช้ส่วนตัว หน้าบานกระจกช่วยให้มองเห็นของด้านในได้เร็ว ขณะที่ช่องแขวน ลิ้นชัก และชั้นวางถูกแบ่งให้เหมาะกับเสื้อผ้าหลายประเภท

เราเลือกใช้ไฟซ่อนภายในตู้เพื่อเพิ่มมิติและช่วยให้พื้นที่ดูพรีเมียมขึ้น แสงไฟยังช่วยให้สีเสื้อผ้าและรายละเอียดของวัสดุดูชัดเจน เหมาะกับห้องแต่งตัวที่ต้องการความรู้สึกเหมือนโชว์รูมส่วนตัว

งานนี้เหมาะกับบ้านที่ต้องการเปลี่ยนมุมเก็บเสื้อผ้าให้เป็นพื้นที่ใช้งานจริงอย่างมีระดับ ทั้งสวย เป็นระเบียบ และช่วยให้การแต่งตัวในทุกวันง่ายขึ้น`},{category:"LIVING ROOM",title:"Modern Luxury House",thai:"ชุดวางทีวีและชั้นวาง",style:"Minimal Modern",image:"/images/portfolio/living-room.png",desc:"ผนังทีวีและชั้นวางบิวท์อินที่ช่วยให้ห้องนั่งเล่นดูโล่ง เรียบร้อย และอบอุ่น",details:`ห้องนั่งเล่นเป็นพื้นที่ที่ทุกคนในบ้านใช้ร่วมกัน เราจึงออกแบบชุดวางทีวีให้เป็นทั้งจุดเด่นของห้องและพื้นที่จัดเก็บที่ใช้งานได้จริง เส้นสายของงานเน้นความเรียบ เพื่อให้เข้ากับเฟอร์นิเจอร์และบรรยากาศโดยรวมของบ้าน

ชั้นวางและช่องโชว์ถูกจัดจังหวะให้พอดี ไม่แน่นเกินไป และมีพื้นที่ปิดสำหรับเก็บของที่ไม่ต้องการโชว์ ทำให้ห้องดูสะอาดตาอยู่เสมอ ไฟซ่อนช่วยเพิ่มความลึกให้ผนังทีวีและทำให้ห้องดูอบอุ่นในช่วงเย็น

แนวคิดหลักของงานนี้คือทำให้ห้องนั่งเล่นสวยได้โดยไม่เสียฟังก์ชัน เหมาะกับบ้านที่ต้องการมุมพักผ่อนที่ดูดี ใช้งานง่าย และรองรับชีวิตประจำวันได้จริง`},{category:"BEDROOM",title:"Master Bedroom",thai:"ห้องนอนบิวท์อิน",style:"Modern Luxury",image:"/images/portfolio/bedroom.png",desc:"ห้องนอนบิวท์อินที่รวมมุมพักผ่อน มุมเก็บของ และบรรยากาศผ่อนคลายไว้ในพื้นที่เดียว",details:`ห้องนอนนี้ออกแบบโดยให้ความสำคัญกับความสงบและการใช้งานระยะยาว โทนสีอบอุ่นช่วยให้ห้องดูนุ่มและพักผ่อนได้ง่าย ขณะที่งานบิวท์อินรอบห้องช่วยเพิ่มพื้นที่จัดเก็บโดยไม่ทำให้ห้องดูอึดอัด

บริเวณหัวเตียงและตู้เก็บของถูกออกแบบให้ต่อเนื่องกัน เพื่อให้ภาพรวมดูเป็นชุดเดียว ไฟซ่อนช่วยสร้างบรรยากาศก่อนนอน และยังทำให้รายละเอียดของวัสดุดูมีมิติมากขึ้น

งานนี้เหมาะกับเจ้าของบ้านที่ต้องการห้องนอนที่เป็นมากกว่าที่นอน เป็นพื้นที่ส่วนตัวที่เก็บของได้ดี ดูเรียบร้อย และให้ความรู้สึกพรีเมียมในทุกวัน`},{category:"WORKSPACE",title:"Home Office",thai:"ห้องทำงานบิวท์อิน",style:"Modern Classic",image:"/images/portfolio/home-office.png",desc:"มุมทำงานบิวท์อินที่จัดเก็บเอกสารและของใช้ได้ครบ โดยยังคงความโปร่งสบาย",details:`มุมทำงานนี้ออกแบบสำหรับบ้านที่ต้องการพื้นที่ทำงานจริงโดยไม่แยกตัวออกจากบรรยากาศของบ้าน โต๊ะทำงานถูกวางร่วมกับชั้นเก็บของและตู้บิวท์อิน เพื่อให้จัดเก็บเอกสาร หนังสือ และอุปกรณ์ได้เป็นระเบียบ

รูปแบบหน้าบานและชั้นเปิดถูกผสมกันอย่างพอดี ทำให้พื้นที่ดูไม่ทึบ และยังมีจุดสำหรับวางของตกแต่งเล็ก ๆ เพื่อให้มุมทำงานดูมีชีวิตชีวา แสงไฟและตำแหน่งโต๊ะถูกคำนึงถึงการใช้งานต่อเนื่องหลายชั่วโมง

งานนี้เหมาะกับคนที่ทำงานจากบ้าน หรืออยากมีมุมอ่านหนังสือที่สวยและพร้อมใช้งาน โดยไม่ต้องใช้พื้นที่มากเกินไป`},{category:"HOUSE",title:"Green Nature Residence",thai:"บ้านพักอาศัย 2 ชั้น",style:"Nature Modern",image:"/images/portfolio/house.png",desc:"งานตกแต่งพื้นที่บ้านที่เชื่อมความโปร่งของโถงกับรายละเอียดบิวท์อินอย่างลงตัว",details:`บ้านพักอาศัยหลังนี้เน้นความโปร่งและความต่อเนื่องของพื้นที่ เราจัดงานบิวท์อินให้รับกับโครงสร้างบ้าน โดยไม่บดบังแสงธรรมชาติและความสูงของโถงภายใน ทำให้บ้านดูสบายและมีมิติ

รายละเอียดของผนัง ตู้เก็บของ และชั้นโชว์ถูกเลือกให้เข้ากับสไตล์โดยรวมของบ้าน โทนสีอ่อนช่วยให้พื้นที่ดูใหญ่ขึ้น ขณะที่เส้นสายของงานบิวท์อินช่วยเก็บความเรียบร้อยของของใช้ในชีวิตประจำวัน

ผลลัพธ์คือบ้านที่ดูอบอุ่น ใช้งานง่าย และมีจุดเด่นในแต่ละมุม เหมาะกับครอบครัวที่ต้องการบ้านสวยแบบอยู่ได้จริง ไม่ใช่แค่สวยเฉพาะวันที่ถ่ายรูป`},{category:"CONDOMINIUM",title:"Compact Condo",thai:"คอนโดบิวท์อินครบฟังก์ชัน",style:"Smart Living",image:"/images/portfolio/condo.png",desc:"คอนโดขนาดกะทัดรัดที่ใช้บิวท์อินช่วยเพิ่มพื้นที่จัดเก็บและทำให้ห้องดูเป็นระเบียบ",details:`สำหรับคอนโด พื้นที่ทุกตารางเมตรมีความสำคัญ งานนี้จึงเน้นการออกแบบให้เฟอร์นิเจอร์แต่ละชิ้นมีมากกว่าหนึ่งหน้าที่ ทั้งเก็บของ ใช้งานจริง และช่วยกำหนดบรรยากาศของห้อง

เราเลือกใช้ตู้สูงและชั้นเก็บของที่ต่อเนื่องกับผนัง เพื่อเพิ่มพื้นที่จัดเก็บโดยไม่กินพื้นที่เดิน สีและวัสดุถูกเลือกให้ห้องดูสว่างและกว้างขึ้น เหมาะกับการอยู่อาศัยประจำวันที่ต้องการความคล่องตัว

จุดเด่นของงานคือการทำให้คอนโดเล็กดูครบ ทั้งมุมพักผ่อน มุมกินข้าว และมุมเก็บของ โดยยังคงความสวยสะอาดตาและไม่รู้สึกแน่นเกินไป`},{category:"RESIDENTIAL",title:"Workspace",thai:"สำนักงานบิวท์อิน",style:"Warm Minimal",image:"/images/portfolio/workspace.png",desc:"พื้นที่ทำงานสไตล์อบอุ่นที่ออกแบบให้เป็นระเบียบและเหมาะกับการใช้งานต่อเนื่อง",details:`สำนักงานบิวท์อินนี้ออกแบบให้ดูเรียบ อบอุ่น และพร้อมใช้งานจริง เราจัดพื้นที่โต๊ะ ชั้นวาง และตู้เก็บของให้รองรับเอกสาร อุปกรณ์ทำงาน และของใช้ที่ต้องหยิบเป็นประจำ

งานบิวท์อินช่วยกำหนดขอบเขตของพื้นที่ทำงานให้ชัดเจน โดยไม่ทำให้ห้องดูแข็งหรือเป็นทางการเกินไป โทนไม้และแสงไฟช่วยให้บรรยากาศผ่อนคลาย เหมาะกับการทำงานระยะยาว

เป้าหมายของงานนี้คือสร้างพื้นที่ที่ช่วยให้ทำงานได้อย่างมีสมาธิ เก็บของเป็นระบบ และยังดูสวยเมื่อใช้งานเป็นส่วนหนึ่งของบ้านหรือสำนักงานขนาดเล็ก`}],qC="13.550896390570566,100.699127645502",WC=`https://www.google.com/maps/search/?api=1&query=${qC}`;function GC(){const t=[["Home","/"],["About Us","/about"],["Services","/services"],["Portfolio","/portfolio"],["Process","/process"],["Blog","/blog"],["Contact","/contact"],["Get Quote","/contact"]];return c.createElement("footer",{className:"site-footer"},c.createElement("div",{className:"site-shell footer-grid"},c.createElement("div",{className:"footer-brand"},c.createElement(T0,null),c.createElement("p",null,"PP Home Furniture & Design โดย บริษัท เพิ่มพูน รุ่งเรือง เฟอร์นิเจอร์ จำกัด รับออกแบบ ผลิต และติดตั้งเฟอร์นิเจอร์บิวท์อินครบวงจร ด้วยดีไซน์ทันสมัยและงานคุณภาพ"),c.createElement("div",{className:"social-row"},c.createElement("a",{href:"https://line.me/R/ti/p/@ppfurniture",target:"_blank",rel:"noreferrer","aria-label":"LINE @ppfurniture"},c.createElement(ki,{size:17})),c.createElement(sC,{size:17}),c.createElement(mC,{size:17}),c.createElement(BC,{size:17}))),c.createElement("div",null,c.createElement("h3",null,"QUICK LINKS"),c.createElement("div",{className:"footer-links two-col"},t.map(([e,n])=>c.createElement(be,{key:e,to:n},e)))),c.createElement("div",null,c.createElement("h3",null,"CONTACT US"),c.createElement("div",{className:"contact-list"},c.createElement("a",{href:"tel:0880904970"},c.createElement(Ec,{size:16})," 088-090-4970"),c.createElement("a",{href:"mailto:permphun@gmail.com"},c.createElement(yc,{size:16})," permphun@gmail.com"),c.createElement("a",{href:"https://line.me/R/ti/p/@ppfurniture",target:"_blank",rel:"noreferrer"},c.createElement(ki,{size:16})," @ppfurniture"),c.createElement("a",{href:WC,target:"_blank",rel:"noreferrer"},c.createElement(bu,{size:16}),c.createElement("span",null,"9/89, 9/98 หมู่ 2 ต.แพรกษาใหม่",c.createElement("br",null),"อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280")))),c.createElement("div",null,c.createElement("h3",null,"GALLERY"),c.createElement("div",{className:"footer-gallery"},[J.kitchen,J.living,J.media,J.closet].map(e=>c.createElement("img",{key:e,src:e,alt:""}))))),c.createElement("div",{className:"site-shell footer-bottom"},c.createElement("span",null,"© 2026 PP Home Furniture & Design. All Rights Reserved."),c.createElement("span",null,"Tax ID 0115566016170 ",c.createElement("b",null,"|")," Permphun Rungrung Furniture Co., Ltd.")))}function KC(){return c.createElement("main",null,c.createElement("section",{className:"hero home-hero"},c.createElement("img",{src:J.kitchen,alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content home-layout"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"PP HOME FURNITURE"),c.createElement("h1",null,"Built for Living,",c.createElement("br",null),"Designed for You"),c.createElement("h2",null,"รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร"),c.createElement("p",{className:"lead"},"ออกแบบ ผลิต และติดตั้ง ด้วยทีมงานมืออาชีพ วัสดุคุณภาพสูง งานประณีต ตรงเวลา พร้อมดูแลทุกขั้นตอนตั้งแต่เริ่มจนส่งมอบ"),c.createElement(be,{to:"/contact",className:"gold-btn"},"ปรึกษาฟรี / รับใบเสนอราคา ",c.createElement(zt,{size:18}))),c.createElement("div",{className:"hero-feature-card"},[["PREMIUM QUALITY","วัสดุเกรดพรีเมียม"],["CUSTOM DESIGN","ออกแบบเฉพาะคุณ"],["WARRANTY","รับประกันผลงาน"]].map(([t,e])=>c.createElement("div",{className:"feature-row",key:t},c.createElement("span",{className:"line-icon"},"◇"),c.createElement("div",null,c.createElement("strong",null,t),c.createElement("p",null,e))))))),c.createElement("section",{className:"site-shell floating-stats"},Ou.map(t=>{const e=t.icon;return c.createElement("article",{className:"stat-card",key:t.value},c.createElement(e,null),c.createElement("div",null,c.createElement("h3",null,t.label),c.createElement("p",null,t.desc)))})),c.createElement("section",{className:"site-shell section-block"},c.createElement("div",{className:"section-title with-action"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR WORK"),c.createElement("h2",null,"ผลงานของเรา")),c.createElement(be,{to:"/portfolio",className:"outline-btn"},"ดูผลงานทั้งหมด ",c.createElement(zt,{size:18}))),c.createElement("div",{className:"portfolio-row"},wc.slice(0,5).map(t=>c.createElement("article",{className:"image-card",key:t.title},c.createElement("img",{src:t.image,alt:t.thai}),c.createElement("div",null,c.createElement("span",null,t.category),c.createElement("h3",null,t.thai),c.createElement("p",null,t.style),c.createElement(be,{to:"/portfolio"},"ดูรายละเอียด →")))))),c.createElement("section",{className:"site-shell process-strip"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR PROCESS"),c.createElement("h2",null,"ขั้นตอนการทำงาน")),_c.slice(0,5).map(t=>{const e=t.icon;return c.createElement("article",{key:t.no},c.createElement(e,null),c.createElement("small",null,t.no),c.createElement("h3",null,t.title.split(" / ")[0]),c.createElement("p",null,t.desc.split(" ").slice(0,5).join(" ")))})),c.createElement("section",{className:"site-shell about-preview"},c.createElement("div",{className:"video-card"},c.createElement("img",{src:J.closet,alt:""}),c.createElement("button",{"aria-label":"Play video"},c.createElement(RC,{fill:"currentColor"}))),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"ABOUT PP HOME FURNITURE"),c.createElement("h2",null,"เราใส่ใจในทุกรายละเอียด",c.createElement("br",null),"เพื่อบ้านที่เป็นตัวคุณ"),c.createElement("p",null,"PP HOME FURNITURE รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร ด้วยแนวคิดที่ทันสมัย ผสานดีไซน์ ฟังก์ชัน และคุณภาพ เพื่อให้บ้านของคุณสมบูรณ์แบบที่สุด"),c.createElement(be,{to:"/about",className:"outline-btn"},"เกี่ยวกับเรา ",c.createElement(zt,{size:18}))),c.createElement("aside",{className:"number-stack"},Ou.map(t=>c.createElement("div",{key:t.value},c.createElement("strong",null,t.value),c.createElement("span",null,t.label))))))}const QC=()=>{};var By={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},R0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,S=h&63;u||(S=64,o||(g=64)),r.push(n[f],n[p],n[g],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(A0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||p==null)throw new JC;const g=s<<2|l>>4;if(r.push(g),h!==64){const S=l<<4&240|h>>2;if(r.push(S),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const XC=function(t){const e=A0(t);return R0.encodeByteArray(e,!0)},xu=function(t){return XC(t).replace(/\./g,"")},k0=function(t){try{return R0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=()=>ZC().__FIREBASE_DEFAULTS__,tP=()=>{if(typeof process>"u"||typeof By>"u")return;const t=By.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&k0(t[1]);return e&&JSON.parse(e)},Ic=()=>{try{return QC()||eP()||tP()||nP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C0=t=>{var e,n;return(n=(e=Ic())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rP=t=>{const e=C0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P0=()=>{var t;return(t=Ic())==null?void 0:t.config},N0=t=>{var e;return(e=Ic())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[xu(JSON.stringify(n)),xu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function aP(){var e;const t=(e=Ic())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Om(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cP(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function hP(){return!aP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xm(){try{return typeof indexedDB=="object"}catch{return!1}}function Lm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function b0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dP,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Li.prototype.create)}}class Li{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?fP(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pn(i,l,r)}}function fP(t,e){return t.replace(mP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mP=/\{\$([^}]+)}/g;function pP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jy(s)&&jy(o)){if(!zr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function No(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function bo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function gP(t,e){const n=new yP(t,e);return n.subscribe.bind(n)}class yP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");EP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fh),i.error===void 0&&(i.error=Fh),i.complete===void 0&&(i.complete=Fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function EP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=1e3,_P=2,wP=4*60*60*1e3,IP=.5;function Hy(t,e=vP,n=_P){const r=e*Math.pow(n,t),i=Math.round(IP*r*(Math.random()-.5)*2);return Math.min(wP,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function D0(t){return(await fetch(t,{credentials:"include"})).ok}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AP(e))try{this.getOrInitializeService({instanceIdentifier:ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ai){return this.instances.has(e)}getOptions(e=ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:SP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ai){return this.component?this.component.multipleInstances?e:ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function SP(t){return t===ai?void 0:t}function AP(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const kP={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},CP=ae.INFO,PP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},NP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tc{constructor(e){this.name=e,this._logLevel=CP,this._logHandler=NP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const bP=(t,e)=>e.some(n=>t instanceof n);let qy,Wy;function DP(){return qy||(qy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OP(){return Wy||(Wy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O0=new WeakMap,Jd=new WeakMap,x0=new WeakMap,Uh=new WeakMap,Vm=new WeakMap;function xP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Or(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O0.set(n,t)}).catch(()=>{}),Vm.set(e,t),e}function LP(t){if(Jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Or(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VP(t){Xd=t(Xd)}function MP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zh(this),e,...n);return x0.set(r,e.sort?e.sort():[e]),Or(r)}:OP().includes(t)?function(...e){return t.apply(zh(this),e),Or(O0.get(this))}:function(...e){return Or(t.apply(zh(this),e))}}function FP(t){return typeof t=="function"?MP(t):(t instanceof IDBTransaction&&LP(t),bP(t,DP())?new Proxy(t,Xd):t)}function Or(t){if(t instanceof IDBRequest)return xP(t);if(Uh.has(t))return Uh.get(t);const e=FP(t);return e!==t&&(Uh.set(t,e),Vm.set(e,t)),e}const zh=t=>Vm.get(t);function L0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Or(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Or(o.result),u.oldVersion,u.newVersion,Or(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const UP=["get","getKey","getAll","getAllKeys","count"],zP=["put","add","delete","clear"],$h=new Map;function Gy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||UP.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return $h.set(e,s),s}VP(t=>({...t,get:(e,n,r)=>Gy(e,n)||t.get(e,n,r),has:(e,n)=>!!Gy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(BP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function BP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",Ky="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new Tc("@firebase/app"),jP="@firebase/app-compat",HP="@firebase/analytics-compat",qP="@firebase/analytics",WP="@firebase/app-check-compat",GP="@firebase/app-check",KP="@firebase/auth",QP="@firebase/auth-compat",YP="@firebase/database",JP="@firebase/data-connect",XP="@firebase/database-compat",ZP="@firebase/functions",e2="@firebase/functions-compat",t2="@firebase/installations",n2="@firebase/installations-compat",r2="@firebase/messaging",i2="@firebase/messaging-compat",s2="@firebase/performance",o2="@firebase/performance-compat",a2="@firebase/remote-config",l2="@firebase/remote-config-compat",u2="@firebase/storage",c2="@firebase/storage-compat",h2="@firebase/firestore",d2="@firebase/ai",f2="@firebase/firestore-compat",m2="firebase",p2="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="[DEFAULT]",g2={[Zd]:"fire-core",[jP]:"fire-core-compat",[qP]:"fire-analytics",[HP]:"fire-analytics-compat",[GP]:"fire-app-check",[WP]:"fire-app-check-compat",[KP]:"fire-auth",[QP]:"fire-auth-compat",[YP]:"fire-rtdb",[JP]:"fire-data-connect",[XP]:"fire-rtdb-compat",[ZP]:"fire-fn",[e2]:"fire-fn-compat",[t2]:"fire-iid",[n2]:"fire-iid-compat",[r2]:"fire-fcm",[i2]:"fire-fcm-compat",[s2]:"fire-perf",[o2]:"fire-perf-compat",[a2]:"fire-rc",[l2]:"fire-rc-compat",[u2]:"fire-gcs",[c2]:"fire-gcs-compat",[h2]:"fire-fst",[f2]:"fire-fst-compat",[d2]:"fire-vertex","fire-js":"fire-js",[m2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Map,y2=new Map,tf=new Map;function Qy(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ln(t){const e=t.name;if(tf.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,t);for(const n of Lu.values())Qy(n,t);for(const n of y2.values())Qy(n,t);return!0}function Vi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xr=new Li("app","Firebase",E2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=p2;function V0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:ef,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=P0()),!n)throw xr.create("no-options");const s=Lu.get(i);if(s){if(zr(n,s.options)&&zr(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new RP(i);for(const u of tf.values())o.addComponent(u);const l=new v2(n,r,o);return Lu.set(i,l),l}function Mm(t=ef){const e=Lu.get(t);if(!e&&t===ef&&P0())return V0();if(!e)throw xr.create("no-app",{appName:t});return e}function Yt(t,e,n){let r=g2[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(o.join(" "));return}Ln(new dn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _2="firebase-heartbeat-database",w2=1,ma="firebase-heartbeat-store";let Bh=null;function M0(){return Bh||(Bh=L0(_2,w2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ma)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Bh}async function I2(t){try{const n=(await M0()).transaction(ma),r=await n.objectStore(ma).get(F0(t));return await n.done,r}catch(e){if(e instanceof pn)er.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Yy(t,e){try{const r=(await M0()).transaction(ma,"readwrite");await r.objectStore(ma).put(e,F0(t)),await r.done}catch(n){if(n instanceof pn)er.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function F0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=1024,S2=30;class A2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new k2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Jy();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>S2){const o=C2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){er.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jy(),{heartbeatsToSend:r,unsentEntries:i}=R2(this._heartbeatsCache.heartbeats),s=xu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return er.warn(n),""}}}function Jy(){return new Date().toISOString().substring(0,10)}function R2(t,e=T2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class k2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xm()?Lm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await I2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Yy(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Xy(t){return xu(JSON.stringify({version:2,heartbeats:t})).length}function C2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P2(t){Ln(new dn("platform-logger",e=>new $P(e),"PRIVATE")),Ln(new dn("heartbeat",e=>new A2(e),"PRIVATE")),Yt(Zd,Ky,t),Yt(Zd,Ky,"esm2020"),Yt("fire-js","")}P2("");var Zy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lr,U0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function I(){}I.prototype=E.prototype,w.F=E.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(A,k,N){for(var T=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)T[ye-2]=arguments[ye];return E.prototype[k].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,E,I){I||(I=0);const A=Array(16);if(typeof E=="string")for(var k=0;k<16;++k)A[k]=E.charCodeAt(I++)|E.charCodeAt(I++)<<8|E.charCodeAt(I++)<<16|E.charCodeAt(I++)<<24;else for(k=0;k<16;++k)A[k]=E[I++]|E[I++]<<8|E[I++]<<16|E[I++]<<24;E=w.g[0],I=w.g[1],k=w.g[2];let N=w.g[3],T;T=E+(N^I&(k^N))+A[0]+3614090360&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(k^E&(I^k))+A[1]+3905402710&4294967295,N=E+(T<<12&4294967295|T>>>20),T=k+(I^N&(E^I))+A[2]+606105819&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(E^k&(N^E))+A[3]+3250441966&4294967295,I=k+(T<<22&4294967295|T>>>10),T=E+(N^I&(k^N))+A[4]+4118548399&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(k^E&(I^k))+A[5]+1200080426&4294967295,N=E+(T<<12&4294967295|T>>>20),T=k+(I^N&(E^I))+A[6]+2821735955&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(E^k&(N^E))+A[7]+4249261313&4294967295,I=k+(T<<22&4294967295|T>>>10),T=E+(N^I&(k^N))+A[8]+1770035416&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(k^E&(I^k))+A[9]+2336552879&4294967295,N=E+(T<<12&4294967295|T>>>20),T=k+(I^N&(E^I))+A[10]+4294925233&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(E^k&(N^E))+A[11]+2304563134&4294967295,I=k+(T<<22&4294967295|T>>>10),T=E+(N^I&(k^N))+A[12]+1804603682&4294967295,E=I+(T<<7&4294967295|T>>>25),T=N+(k^E&(I^k))+A[13]+4254626195&4294967295,N=E+(T<<12&4294967295|T>>>20),T=k+(I^N&(E^I))+A[14]+2792965006&4294967295,k=N+(T<<17&4294967295|T>>>15),T=I+(E^k&(N^E))+A[15]+1236535329&4294967295,I=k+(T<<22&4294967295|T>>>10),T=E+(k^N&(I^k))+A[1]+4129170786&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(E^I))+A[6]+3225465664&4294967295,N=E+(T<<9&4294967295|T>>>23),T=k+(E^I&(N^E))+A[11]+643717713&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(k^N))+A[0]+3921069994&4294967295,I=k+(T<<20&4294967295|T>>>12),T=E+(k^N&(I^k))+A[5]+3593408605&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(E^I))+A[10]+38016083&4294967295,N=E+(T<<9&4294967295|T>>>23),T=k+(E^I&(N^E))+A[15]+3634488961&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(k^N))+A[4]+3889429448&4294967295,I=k+(T<<20&4294967295|T>>>12),T=E+(k^N&(I^k))+A[9]+568446438&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(E^I))+A[14]+3275163606&4294967295,N=E+(T<<9&4294967295|T>>>23),T=k+(E^I&(N^E))+A[3]+4107603335&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(k^N))+A[8]+1163531501&4294967295,I=k+(T<<20&4294967295|T>>>12),T=E+(k^N&(I^k))+A[13]+2850285829&4294967295,E=I+(T<<5&4294967295|T>>>27),T=N+(I^k&(E^I))+A[2]+4243563512&4294967295,N=E+(T<<9&4294967295|T>>>23),T=k+(E^I&(N^E))+A[7]+1735328473&4294967295,k=N+(T<<14&4294967295|T>>>18),T=I+(N^E&(k^N))+A[12]+2368359562&4294967295,I=k+(T<<20&4294967295|T>>>12),T=E+(I^k^N)+A[5]+4294588738&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^k)+A[8]+2272392833&4294967295,N=E+(T<<11&4294967295|T>>>21),T=k+(N^E^I)+A[11]+1839030562&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^E)+A[14]+4259657740&4294967295,I=k+(T<<23&4294967295|T>>>9),T=E+(I^k^N)+A[1]+2763975236&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^k)+A[4]+1272893353&4294967295,N=E+(T<<11&4294967295|T>>>21),T=k+(N^E^I)+A[7]+4139469664&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^E)+A[10]+3200236656&4294967295,I=k+(T<<23&4294967295|T>>>9),T=E+(I^k^N)+A[13]+681279174&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^k)+A[0]+3936430074&4294967295,N=E+(T<<11&4294967295|T>>>21),T=k+(N^E^I)+A[3]+3572445317&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^E)+A[6]+76029189&4294967295,I=k+(T<<23&4294967295|T>>>9),T=E+(I^k^N)+A[9]+3654602809&4294967295,E=I+(T<<4&4294967295|T>>>28),T=N+(E^I^k)+A[12]+3873151461&4294967295,N=E+(T<<11&4294967295|T>>>21),T=k+(N^E^I)+A[15]+530742520&4294967295,k=N+(T<<16&4294967295|T>>>16),T=I+(k^N^E)+A[2]+3299628645&4294967295,I=k+(T<<23&4294967295|T>>>9),T=E+(k^(I|~N))+A[0]+4096336452&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~k))+A[7]+1126891415&4294967295,N=E+(T<<10&4294967295|T>>>22),T=k+(E^(N|~I))+A[14]+2878612391&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~E))+A[5]+4237533241&4294967295,I=k+(T<<21&4294967295|T>>>11),T=E+(k^(I|~N))+A[12]+1700485571&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~k))+A[3]+2399980690&4294967295,N=E+(T<<10&4294967295|T>>>22),T=k+(E^(N|~I))+A[10]+4293915773&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~E))+A[1]+2240044497&4294967295,I=k+(T<<21&4294967295|T>>>11),T=E+(k^(I|~N))+A[8]+1873313359&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~k))+A[15]+4264355552&4294967295,N=E+(T<<10&4294967295|T>>>22),T=k+(E^(N|~I))+A[6]+2734768916&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~E))+A[13]+1309151649&4294967295,I=k+(T<<21&4294967295|T>>>11),T=E+(k^(I|~N))+A[4]+4149444226&4294967295,E=I+(T<<6&4294967295|T>>>26),T=N+(I^(E|~k))+A[11]+3174756917&4294967295,N=E+(T<<10&4294967295|T>>>22),T=k+(E^(N|~I))+A[2]+718787259&4294967295,k=N+(T<<15&4294967295|T>>>17),T=I+(N^(k|~E))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(k+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.v=function(w,E){E===void 0&&(E=w.length);const I=E-this.blockSize,A=this.C;let k=this.h,N=0;for(;N<E;){if(k==0)for(;N<=I;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<E;)if(A[k++]=w.charCodeAt(N++),k==this.blockSize){i(this,A),k=0;break}}else for(;N<E;)if(A[k++]=w[N++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=E},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;E=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=E&255,E/=256;for(this.v(w),w=Array(16),E=0,I=0;I<4;++I)for(let A=0;A<32;A+=8)w[E++]=this.g[I]>>>A&255;return w};function s(w,E){var I=l;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=E(w)}function o(w,E){this.h=E;const I=[];let A=!0;for(let k=w.length-1;k>=0;k--){const N=w[k]|0;A&&N==E||(I[k]=N,A=!1)}this.g=I}var l={};function u(w){return-128<=w&&w<128?s(w,function(E){return new o([E|0],E<0?-1:0)}):new o([w|0],w<0?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(w<0)return D(h(-w));const E=[];let I=1;for(let A=0;w>=I;A++)E[A]=w/I|0,I*=4294967296;return new o(E,0)}function f(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return D(f(w.substring(1),E));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(E,8));let A=p;for(let N=0;N<w.length;N+=8){var k=Math.min(8,w.length-N);const T=parseInt(w.substring(N,N+k),E);k<8?(k=h(Math.pow(E,k)),A=A.j(k).add(h(T))):(A=A.j(I),A=A.add(h(T)))}return A}var p=u(0),g=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();let w=0,E=1;for(let I=0;I<this.g.length;I++){const A=this.i(I);w+=(A>=0?A:4294967296+A)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(P(this))return"-"+D(this).toString(w);const E=h(Math.pow(w,6));var I=this;let A="";for(;;){const k=L(I,E).g;I=_(I,k.j(E));let N=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=k,C(I))return N+A;for(;N.length<6;)N="0"+N;A=N+A}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=_(this,w),P(w)?-1:C(w)?0:1};function D(w){const E=w.g.length,I=[];for(let A=0;A<E;A++)I[A]=~w.g[A];return new o(I,~w.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(w){const E=Math.max(this.g.length,w.g.length),I=[];let A=0;for(let k=0;k<=E;k++){let N=A+(this.i(k)&65535)+(w.i(k)&65535),T=(N>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);A=T>>>16,N&=65535,T&=65535,I[k]=T<<16|N}return new o(I,I[I.length-1]&-2147483648?-1:0)};function _(w,E){return w.add(D(E))}t.j=function(w){if(C(this)||C(w))return p;if(P(this))return P(w)?D(this).j(D(w)):D(D(this).j(w));if(P(w))return D(this.j(D(w)));if(this.l(S)<0&&w.l(S)<0)return h(this.m()*w.m());const E=this.g.length+w.g.length,I=[];for(var A=0;A<2*E;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(let k=0;k<w.g.length;k++){const N=this.i(A)>>>16,T=this.i(A)&65535,ye=w.i(k)>>>16,Oe=w.i(k)&65535;I[2*A+2*k]+=T*Oe,v(I,2*A+2*k),I[2*A+2*k+1]+=N*Oe,v(I,2*A+2*k+1),I[2*A+2*k+1]+=T*ye,v(I,2*A+2*k+1),I[2*A+2*k+2]+=N*ye,v(I,2*A+2*k+2)}for(w=0;w<E;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=E;w<2*E;w++)I[w]=0;return new o(I,0)};function v(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function R(w,E){this.g=w,this.h=E}function L(w,E){if(C(E))throw Error("division by zero");if(C(w))return new R(p,p);if(P(w))return E=L(D(w),E),new R(D(E.g),D(E.h));if(P(E))return E=L(w,D(E)),new R(D(E.g),E.h);if(w.g.length>30){if(P(w)||P(E))throw Error("slowDivide_ only works with positive integers.");for(var I=g,A=E;A.l(w)<=0;)I=F(I),A=F(A);var k=z(I,1),N=z(A,1);for(A=z(A,2),I=z(I,2);!C(A);){var T=N.add(A);T.l(w)<=0&&(k=k.add(I),N=T),A=z(A,1),I=z(I,1)}return E=_(w,k.j(E)),new R(k,E)}for(k=p;w.l(E)>=0;){for(I=Math.max(1,Math.floor(w.m()/E.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=A<=48?1:Math.pow(2,A-48),N=h(I),T=N.j(E);P(T)||T.l(w)>0;)I-=A,N=h(I),T=N.j(E);C(N)&&(N=g),k=k.add(N),w=_(w,T)}return new R(k,w)}t.B=function(w){return L(this,w).h},t.and=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<E;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<E;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){const E=Math.max(this.g.length,w.g.length),I=[];for(let A=0;A<E;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function F(w){const E=w.g.length+1,I=[];for(let A=0;A<E;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function z(w,E){const I=E>>5;E%=32;const A=w.g.length-I,k=[];for(let N=0;N<A;N++)k[N]=E>0?w.i(N+I)>>>E|w.i(N+I+1)<<32-E:w.i(N+I);return new o(k,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,U0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Lr=o}).apply(typeof Zy<"u"?Zy:typeof self<"u"?self:typeof window<"u"?window:{});var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var z0,Do,$0,Wl,nf,B0,j0,H0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rl=="object"&&Rl];for(var d=0;d<a.length;++d){var m=a[d];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(a,d){if(d)e:{var m=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var b=a[y];if(!(b in m))break e;m=m[b]}a=a[a.length-1],y=m[a],d=d(y),d!=y&&d!=null&&e(m,a,{configurable:!0,writable:!0,value:d})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(d){var m=[],y;for(y in d)Object.prototype.hasOwnProperty.call(d,y)&&m.push([y,d[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var d=typeof a;return d=="object"&&a!=null||d=="function"}function u(a,d,m){return a.call.apply(a.bind,arguments)}function h(a,d,m){return h=u,h.apply(null,arguments)}function f(a,d){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function p(a,d){function m(){}m.prototype=d.prototype,a.Z=d.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,b,O){for(var B=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)B[ne-2]=arguments[ne];return d.prototype[b].apply(y,B)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const d=a.length;if(d>0){const m=Array(d);for(let y=0;y<d;y++)m[y]=a[y];return m}return[]}function C(a,d){for(let y=1;y<arguments.length;y++){const b=arguments[y];var m=typeof b;if(m=m!="object"?m:b?Array.isArray(b)?"array":m:"null",m=="array"||m=="object"&&typeof b.length=="number"){m=a.length||0;const O=b.length||0;a.length=m+O;for(let B=0;B<O;B++)a[m+B]=b[B]}else a.push(b)}}class P{constructor(d,m){this.i=d,this.j=m,this.h=0,this.g=null}get(){let d;return this.h>0?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(a){o.setTimeout(()=>{throw a},0)}function _(){var a=w;let d=null;return a.g&&(d=a.g,a.g=a.g.next,a.g||(a.h=null),d.next=null),d}class v{constructor(){this.h=this.g=null}add(d,m){const y=R.get();y.set(d,m),this.h?this.h.next=y:this.g=y,this.h=y}}var R=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(d,m){this.h=d,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let F,z=!1,w=new v,E=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(I)}};function I(){for(var a;a=_();){try{a.h.call(a.g)}catch(m){D(m)}var d=R;d.j(a),d.h<100&&(d.h++,a.next=d.g,d.g=a)}z=!1}function A(){this.u=this.u,this.C=this.C}A.prototype.u=!1,A.prototype.dispose=function(){this.u||(this.u=!0,this.N())},A.prototype[Symbol.dispose]=function(){this.dispose()},A.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,d){this.type=a,this.g=this.target=d,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var N=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,d=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,d),o.removeEventListener("test",m,d)}catch{}return a}();function T(a){return/^[\s\xa0]*$/.test(a)}function ye(a,d){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,d)}p(ye,k),ye.prototype.init=function(a,d){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=d,d=a.relatedTarget,d||(m=="mouseover"?d=a.fromElement:m=="mouseout"&&(d=a.toElement)),this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ye.Z.h.call(this)},ye.prototype.h=function(){ye.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Oe="closure_listenable_"+(Math.random()*1e6|0),gn=0;function sr(a,d,m,y,b){this.listener=a,this.proxy=null,this.src=d,this.type=m,this.capture=!!y,this.ha=b,this.key=++gn,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function K(a,d,m){for(const y in a)d.call(m,a[y],y,a)}function X(a,d){for(const m in a)d.call(void 0,a[m],m,a)}function te(a){const d={};for(const m in a)d[m]=a[m];return d}const Ie="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function me(a,d){let m,y;for(let b=1;b<arguments.length;b++){y=arguments[b];for(m in y)a[m]=y[m];for(let O=0;O<Ie.length;O++)m=Ie[O],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function gt(a){this.src=a,this.g={},this.h=0}gt.prototype.add=function(a,d,m,y,b){const O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);const B=Ot(a,d,y,b);return B>-1?(d=a[B],m||(d.fa=!1)):(d=new sr(d,this.src,O,!!y,b),d.fa=m,a.push(d)),d};function zn(a,d){const m=d.type;if(m in a.g){var y=a.g[m],b=Array.prototype.indexOf.call(y,d,void 0),O;(O=b>=0)&&Array.prototype.splice.call(y,b,1),O&&(j(d),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Ot(a,d,m,y){for(let b=0;b<a.length;++b){const O=a[b];if(!O.da&&O.listener==d&&O.capture==!!m&&O.ha==y)return b}return-1}var Je="closure_lm_"+(Math.random()*1e6|0),yt={};function or(a,d,m,y,b){if(Array.isArray(d)){for(let O=0;O<d.length;O++)or(a,d[O],m,y,b);return null}return m=Ya(m),a&&a[Oe]?a.J(d,m,l(y)?!!y.capture:!1,b):Ga(a,d,m,!1,y,b)}function Ga(a,d,m,y,b,O){if(!d)throw Error("Invalid event type");const B=l(b)?!!b.capture:!!b;let ne=Js(a);if(ne||(a[Je]=ne=new gt(a)),m=ne.add(d,m,y,B,O),m.proxy)return m;if(y=Ka(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)N||(b=B),b===void 0&&(b=!1),a.addEventListener(d.toString(),y,b);else if(a.attachEvent)a.attachEvent(Qa(d.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Ka(){function a(m){return d.call(a.src,a.listener,m)}const d=Hc;return a}function Qs(a,d,m,y,b){if(Array.isArray(d))for(var O=0;O<d.length;O++)Qs(a,d[O],m,y,b);else y=l(y)?!!y.capture:!!y,m=Ya(m),a&&a[Oe]?(a=a.i,O=String(d).toString(),O in a.g&&(d=a.g[O],m=Ot(d,m,y,b),m>-1&&(j(d[m]),Array.prototype.splice.call(d,m,1),d.length==0&&(delete a.g[O],a.h--)))):a&&(a=Js(a))&&(d=a.g[d.toString()],a=-1,d&&(a=Ot(d,m,y,b)),(m=a>-1?d[a]:null)&&Ys(m))}function Ys(a){if(typeof a!="number"&&a&&!a.da){var d=a.src;if(d&&d[Oe])zn(d.i,a);else{var m=a.type,y=a.proxy;d.removeEventListener?d.removeEventListener(m,y,a.capture):d.detachEvent?d.detachEvent(Qa(m),y):d.addListener&&d.removeListener&&d.removeListener(y),(m=Js(d))?(zn(m,a),m.h==0&&(m.src=null,d[Je]=null)):j(a)}}}function Qa(a){return a in yt?yt[a]:yt[a]="on"+a}function Hc(a,d){if(a.da)a=!0;else{d=new ye(d,this);const m=a.listener,y=a.ha||a.src;a.fa&&Ys(a),a=m.call(y,d)}return a}function Js(a){return a=a[Je],a instanceof gt?a:null}var Xs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ya(a){return typeof a=="function"?a:(a[Xs]||(a[Xs]=function(d){return a.handleEvent(d)}),a[Xs])}function We(){A.call(this),this.i=new gt(this),this.M=this,this.G=null}p(We,A),We.prototype[Oe]=!0,We.prototype.removeEventListener=function(a,d,m,y){Qs(this,a,d,m,y)};function Xe(a,d){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=d.type||d,typeof d=="string")d=new k(d,a);else if(d instanceof k)d.target=d.target||a;else{var b=d;d=new k(y,a),me(d,b)}b=!0;let O,B;if(m)for(B=m.length-1;B>=0;B--)O=d.g=m[B],b=$i(O,y,!0,d)&&b;if(O=d.g=a,b=$i(O,y,!0,d)&&b,b=$i(O,y,!1,d)&&b,m)for(B=0;B<m.length;B++)O=d.g=m[B],b=$i(O,y,!1,d)&&b}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const d in a.g){const m=a.g[d];for(let y=0;y<m.length;y++)j(m[y]);delete a.g[d],a.h--}}this.G=null},We.prototype.J=function(a,d,m,y){return this.i.add(String(a),d,!1,m,y)},We.prototype.K=function(a,d,m,y){return this.i.add(String(a),d,!0,m,y)};function $i(a,d,m,y){if(d=a.i.g[String(d)],!d)return!0;d=d.concat();let b=!0;for(let O=0;O<d.length;++O){const B=d[O];if(B&&!B.da&&B.capture==m){const ne=B.listener,Be=B.ha||B.src;B.fa&&zn(a.i,B),b=ne.call(Be,y)!==!1&&b}}return b&&!y.defaultPrevented}function U(a,d){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(d)>2147483647?-1:o.setTimeout(a,d||0)}function ce(a){a.g=U(()=>{a.g=null,a.i&&(a.i=!1,ce(a))},a.l);const d=a.h;a.h=null,a.m.apply(null,d)}class Ve extends A{constructor(d,m){super(),this.m=d,this.l=m,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:ce(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(a){A.call(this),this.h=a,this.g={}}p(Ze,A);var yn=[];function En(a){K(a.g,function(d,m){this.g.hasOwnProperty(m)&&Ys(d)},a),a.g={}}Ze.prototype.N=function(){Ze.Z.N.call(this),En(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zs=o.JSON.stringify,qc=o.JSON.parse,et=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function St(){}function Op(){}var eo={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wc(){k.call(this,"d")}p(Wc,k);function Gc(){k.call(this,"c")}p(Gc,k);var ei={},xp=null;function Ja(){return xp=xp||new We}ei.Ia="serverreachability";function Lp(a){k.call(this,ei.Ia,a)}p(Lp,k);function to(a){const d=Ja();Xe(d,new Lp(d))}ei.STAT_EVENT="statevent";function Vp(a,d){k.call(this,ei.STAT_EVENT,a),this.stat=d}p(Vp,k);function Et(a){const d=Ja();Xe(d,new Vp(d,a))}ei.Ja="timingevent";function Mp(a,d){k.call(this,ei.Ja,a),this.size=d}p(Mp,k);function no(a,d){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},d)}function ro(){this.g=!0}ro.prototype.ua=function(){this.g=!1};function E1(a,d,m,y,b,O){a.info(function(){if(a.g)if(O){var B="",ne=O.split("&");for(let fe=0;fe<ne.length;fe++){var Be=ne[fe].split("=");if(Be.length>1){const Ge=Be[0];Be=Be[1];const _n=Ge.split("_");B=_n.length>=2&&_n[1]=="type"?B+(Ge+"="+Be+"&"):B+(Ge+"=redacted&")}}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+b+"]: "+d+`
`+m+`
`+B})}function v1(a,d,m,y,b,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+b+"]: "+d+`
`+m+`
`+O+" "+B})}function Bi(a,d,m,y){a.info(function(){return"XMLHTTP TEXT ("+d+"): "+w1(a,m)+(y?" "+y:"")})}function _1(a,d){a.info(function(){return"TIMEOUT: "+d})}ro.prototype.info=function(){};function w1(a,d){if(!a.g)return d;if(!d)return null;try{const O=JSON.parse(d);if(O){for(a=0;a<O.length;a++)if(Array.isArray(O[a])){var m=O[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var b=y[0];if(b!="noop"&&b!="stop"&&b!="close")for(let B=1;B<y.length;B++)y[B]=""}}}}return Zs(O)}catch{return d}}var Xa={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Fp={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Up;function Kc(){}p(Kc,St),Kc.prototype.g=function(){return new XMLHttpRequest},Up=new Kc;function io(a){return encodeURIComponent(String(a))}function I1(a){var d=1;a=a.split(":");const m=[];for(;d>0&&a.length;)m.push(a.shift()),d--;return a.length&&m.push(a.join(":")),m}function ar(a,d,m,y){this.j=a,this.i=d,this.l=m,this.S=y||1,this.V=new Ze(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new zp}function zp(){this.i=null,this.g="",this.h=!1}var $p={},Qc={};function Yc(a,d,m){a.M=1,a.A=el(vn(d)),a.u=m,a.R=!0,Bp(a,null)}function Bp(a,d){a.F=Date.now(),Za(a),a.B=vn(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),tg(m.i,"t",y),a.C=0,m=a.j.L,a.h=new zp,a.g=vg(a.j,m?d:null,!a.u),a.P>0&&(a.O=new Ve(h(a.Y,a,a.g),a.P)),d=a.V,m=a.g,y=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(yn[0]=b.toString()),b=yn);for(let O=0;O<b.length;O++){const B=or(m,b[O],y||d.handleEvent,!1,d.h||d);if(!B)break;d.g[B.key]=B}d=a.J?te(a.J):{},a.u?(a.v||(a.v="POST"),d["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,d)):(a.v="GET",a.g.ea(a.B,a.v,null,d)),to(),E1(a.i,a.v,a.B,a.l,a.S,a.u)}ar.prototype.ba=function(a){a=a.target;const d=this.O;d&&cr(a)==3?d.j():this.Y(a)},ar.prototype.Y=function(a){try{if(a==this.g)e:{const ne=cr(this.g),Be=this.g.ya(),fe=this.g.ca();if(!(ne<3)&&(ne!=3||this.g&&(this.h.h||this.g.la()||lg(this.g)))){this.K||ne!=4||Be==7||(Be==8||fe<=0?to(3):to(2)),Jc(this);var d=this.g.ca();this.X=d;var m=T1(this);if(this.o=d==200,v1(this.i,this.v,this.B,this.l,this.S,ne,d),this.o){if(this.U&&!this.L){t:{if(this.g){var y,b=this.g;if((y=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var O=y;break t}}O=null}if(a=O)Bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xc(this,a);else{this.o=!1,this.m=3,Et(12),ti(this),so(this);break e}}if(this.R){a=!0;let Ge;for(;!this.K&&this.C<m.length;)if(Ge=S1(this,m),Ge==Qc){ne==4&&(this.m=4,Et(14),a=!1),Bi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ge==$p){this.m=4,Et(15),Bi(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else Bi(this.i,this.l,Ge,null),Xc(this,Ge);if(jp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ne!=4||m.length!=0||this.h.h||(this.m=1,Et(16),a=!1),this.o=this.o&&a,!a)Bi(this.i,this.l,m,"[Invalid Chunked Response]"),ti(this),so(this);else if(m.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),oh(B),B.P=!0,Et(11))}}else Bi(this.i,this.l,m,null),Xc(this,m);ne==4&&ti(this),this.o&&!this.K&&(ne==4?pg(this.j,this):(this.o=!1,Za(this)))}else F1(this.g),d==400&&m.indexOf("Unknown SID")>0?(this.m=3,Et(12)):(this.m=0,Et(13)),ti(this),so(this)}}}catch{}finally{}};function T1(a){if(!jp(a))return a.g.la();const d=lg(a.g);if(d==="")return"";let m="";const y=d.length,b=cr(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return ti(a),so(a),"";a.h.i=new o.TextDecoder}for(let O=0;O<y;O++)a.h.h=!0,m+=a.h.i.decode(d[O],{stream:!(b&&O==y-1)});return d.length=0,a.h.g+=m,a.C=0,a.h.g}function jp(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function S1(a,d){var m=a.C,y=d.indexOf(`
`,m);return y==-1?Qc:(m=Number(d.substring(m,y)),isNaN(m)?$p:(y+=1,y+m>d.length?Qc:(d=d.slice(y,y+m),a.C=y+m,d)))}ar.prototype.cancel=function(){this.K=!0,ti(this)};function Za(a){a.T=Date.now()+a.H,Hp(a,a.H)}function Hp(a,d){if(a.D!=null)throw Error("WatchDog timer not null");a.D=no(h(a.aa,a),d)}function Jc(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ar.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(_1(this.i,this.B),this.M!=2&&(to(),Et(17)),ti(this),this.m=2,so(this)):Hp(this,this.T-a)};function so(a){a.j.I==0||a.K||pg(a.j,a)}function ti(a){Jc(a);var d=a.O;d&&typeof d.dispose=="function"&&d.dispose(),a.O=null,En(a.V),a.g&&(d=a.g,a.g=null,d.abort(),d.dispose())}function Xc(a,d){try{var m=a.j;if(m.I!=0&&(m.g==a||Zc(m.h,a))){if(!a.L&&Zc(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var b=y;if(b[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)sl(m),rl(m);else break e;sh(m),Et(18)}}else m.xa=b[1],0<m.xa-m.K&&b[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=no(h(m.Va,m),6e3));Gp(m.h)<=1&&m.ta&&(m.ta=void 0)}else ri(m,11)}else if((a.L||m.g==a)&&sl(m),!T(d))for(b=m.Ba.g.parse(d),d=0;d<b.length;d++){let fe=b[d];const Ge=fe[0];if(!(Ge<=m.K))if(m.K=Ge,fe=fe[1],m.I==2)if(fe[0]=="c"){m.M=fe[1],m.ba=fe[2];const _n=fe[3];_n!=null&&(m.ka=_n,m.j.info("VER="+m.ka));const ii=fe[4];ii!=null&&(m.za=ii,m.j.info("SVER="+m.za));const hr=fe[5];hr!=null&&typeof hr=="number"&&hr>0&&(y=1.5*hr,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const dr=a.g;if(dr){const al=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(al){var O=y.h;O.g||al.indexOf("spdy")==-1&&al.indexOf("quic")==-1&&al.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(eh(O,O.h),O.h=null))}if(y.G){const ah=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;ah&&(y.wa=ah,Ee(y.J,y.G,ah))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var B=a;if(y.na=Eg(y,y.L?y.ba:null,y.W),B.L){Kp(y.h,B);var ne=B,Be=y.O;Be&&(ne.H=Be),ne.D&&(Jc(ne),Za(ne)),y.g=B}else fg(y);m.i.length>0&&il(m)}else fe[0]!="stop"&&fe[0]!="close"||ri(m,7);else m.I==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?ri(m,7):ih(m):fe[0]!="noop"&&m.l&&m.l.qa(fe),m.A=0)}}to(4)}catch{}}var A1=class{constructor(a,d){this.g=a,this.map=d}};function qp(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gp(a){return a.h?1:a.g?a.g.size:0}function Zc(a,d){return a.h?a.h==d:a.g?a.g.has(d):!1}function eh(a,d){a.g?a.g.add(d):a.h=d}function Kp(a,d){a.h&&a.h==d?a.h=null:a.g&&a.g.has(d)&&a.g.delete(d)}qp.prototype.cancel=function(){if(this.i=Qp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qp(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let d=a.i;for(const m of a.g.values())d=d.concat(m.G);return d}return S(a.i)}var Yp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R1(a,d){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let b,O=null;y>=0?(b=a[m].substring(0,y),O=a[m].substring(y+1)):b=a[m],d(b,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function lr(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let d;a instanceof lr?(this.l=a.l,oo(this,a.j),this.o=a.o,this.g=a.g,ao(this,a.u),this.h=a.h,th(this,ng(a.i)),this.m=a.m):a&&(d=String(a).match(Yp))?(this.l=!1,oo(this,d[1]||"",!0),this.o=lo(d[2]||""),this.g=lo(d[3]||"",!0),ao(this,d[4]),this.h=lo(d[5]||"",!0),th(this,d[6]||"",!0),this.m=lo(d[7]||"")):(this.l=!1,this.i=new co(null,this.l))}lr.prototype.toString=function(){const a=[];var d=this.j;d&&a.push(uo(d,Jp,!0),":");var m=this.g;return(m||d=="file")&&(a.push("//"),(d=this.o)&&a.push(uo(d,Jp,!0),"@"),a.push(io(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(uo(m,m.charAt(0)=="/"?P1:C1,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",uo(m,b1)),a.join("")},lr.prototype.resolve=function(a){const d=vn(this);let m=!!a.j;m?oo(d,a.j):m=!!a.o,m?d.o=a.o:m=!!a.g,m?d.g=a.g:m=a.u!=null;var y=a.h;if(m)ao(d,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var b=d.h.lastIndexOf("/");b!=-1&&(y=d.h.slice(0,b+1)+y)}if(b=y,b==".."||b==".")y="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){y=b.lastIndexOf("/",0)==0,b=b.split("/");const O=[];for(let B=0;B<b.length;){const ne=b[B++];ne=="."?y&&B==b.length&&O.push(""):ne==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),y&&B==b.length&&O.push("")):(O.push(ne),y=!0)}y=O.join("/")}else y=b}return m?d.h=y:m=a.i.toString()!=="",m?th(d,ng(a.i)):m=!!a.m,m&&(d.m=a.m),d};function vn(a){return new lr(a)}function oo(a,d,m){a.j=m?lo(d,!0):d,a.j&&(a.j=a.j.replace(/:$/,""))}function ao(a,d){if(d){if(d=Number(d),isNaN(d)||d<0)throw Error("Bad port number "+d);a.u=d}else a.u=null}function th(a,d,m){d instanceof co?(a.i=d,D1(a.i,a.l)):(m||(d=uo(d,N1)),a.i=new co(d,a.l))}function Ee(a,d,m){a.i.set(d,m)}function el(a){return Ee(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function lo(a,d){return a?d?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function uo(a,d,m){return typeof a=="string"?(a=encodeURI(a).replace(d,k1),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function k1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jp=/[#\/\?@]/g,C1=/[#\?:]/g,P1=/[#\?]/g,N1=/[#\?@]/g,b1=/#/g;function co(a,d){this.h=this.g=null,this.i=a||null,this.j=!!d}function ni(a){a.g||(a.g=new Map,a.h=0,a.i&&R1(a.i,function(d,m){a.add(decodeURIComponent(d.replace(/\+/g," ")),m)}))}t=co.prototype,t.add=function(a,d){ni(this),this.i=null,a=ji(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(d),this.h+=1,this};function Xp(a,d){ni(a),d=ji(a,d),a.g.has(d)&&(a.i=null,a.h-=a.g.get(d).length,a.g.delete(d))}function Zp(a,d){return ni(a),d=ji(a,d),a.g.has(d)}t.forEach=function(a,d){ni(this),this.g.forEach(function(m,y){m.forEach(function(b){a.call(d,b,y,this)},this)},this)};function eg(a,d){ni(a);let m=[];if(typeof d=="string")Zp(a,d)&&(m=m.concat(a.g.get(ji(a,d))));else for(a=Array.from(a.g.values()),d=0;d<a.length;d++)m=m.concat(a[d]);return m}t.set=function(a,d){return ni(this),this.i=null,a=ji(this,a),Zp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[d]),this.h+=1,this},t.get=function(a,d){return a?(a=eg(this,a),a.length>0?String(a[0]):d):d};function tg(a,d,m){Xp(a,d),m.length>0&&(a.i=null,a.g.set(ji(a,d),S(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],d=Array.from(this.g.keys());for(let y=0;y<d.length;y++){var m=d[y];const b=io(m);m=eg(this,m);for(let O=0;O<m.length;O++){let B=b;m[O]!==""&&(B+="="+io(m[O])),a.push(B)}}return this.i=a.join("&")};function ng(a){const d=new co;return d.i=a.i,a.g&&(d.g=new Map(a.g),d.h=a.h),d}function ji(a,d){return d=String(d),a.j&&(d=d.toLowerCase()),d}function D1(a,d){d&&!a.j&&(ni(a),a.i=null,a.g.forEach(function(m,y){const b=y.toLowerCase();y!=b&&(Xp(this,y),tg(this,b,m))},a)),a.j=d}function O1(a,d){const m=new ro;if(o.Image){const y=new Image;y.onload=f(ur,m,"TestLoadImage: loaded",!0,d,y),y.onerror=f(ur,m,"TestLoadImage: error",!1,d,y),y.onabort=f(ur,m,"TestLoadImage: abort",!1,d,y),y.ontimeout=f(ur,m,"TestLoadImage: timeout",!1,d,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else d(!1)}function x1(a,d){const m=new ro,y=new AbortController,b=setTimeout(()=>{y.abort(),ur(m,"TestPingServer: timeout",!1,d)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(b),O.ok?ur(m,"TestPingServer: ok",!0,d):ur(m,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(b),ur(m,"TestPingServer: error",!1,d)})}function ur(a,d,m,y,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),y(m)}catch{}}function L1(){this.g=new et}function nh(a){this.i=a.Sb||null,this.h=a.ab||!1}p(nh,St),nh.prototype.g=function(){return new tl(this.i,this.h)};function tl(a,d){We.call(this),this.H=a,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(tl,We),t=tl.prototype,t.open=function(a,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=d,this.readyState=1,fo(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const d={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(d.body=a),(this.H||o).fetch(new Request(this.D,d)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ho(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fo(this)),this.g&&(this.readyState=3,fo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;rg(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function rg(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var d=a.value?a.value:new Uint8Array(0);(d=this.B.decode(d,{stream:!a.done}))&&(this.response=this.responseText+=d)}a.done?ho(this):fo(this),this.readyState==3&&rg(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ho(this))},t.Na=function(a){this.g&&(this.response=a,ho(this))},t.ga=function(){this.g&&ho(this)};function ho(a){a.readyState=4,a.l=null,a.j=null,a.B=null,fo(a)}t.setRequestHeader=function(a,d){this.A.append(a,d)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],d=this.h.entries();for(var m=d.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=d.next();return a.join(`\r
`)};function fo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(tl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ig(a){let d="";return K(a,function(m,y){d+=y,d+=":",d+=m,d+=`\r
`}),d}function rh(a,d,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=ig(m),typeof a=="string"?m!=null&&io(m):Ee(a,d,m))}function Pe(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Pe,We);var V1=/^https?$/i,M1=["POST","PUT"];t=Pe.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,d,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);d=d?d.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Up.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(d,String(a),!0),this.B=!1}catch(O){sg(this,O);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var b in y)m.set(b,y[b]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())m.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(O=>O.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(M1,d,void 0)>=0)||y||b||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of m)this.g.setRequestHeader(O,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(O){sg(this,O)}};function sg(a,d){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=d,a.o=5,og(a),nl(a)}function og(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Xe(this,"complete"),Xe(this,"abort"),nl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nl(this,!0)),Pe.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ag(this):this.Xa())},t.Xa=function(){ag(this)};function ag(a){if(a.h&&typeof s<"u"){if(a.v&&cr(a)==4)setTimeout(a.Ca.bind(a),0);else if(Xe(a,"readystatechange"),cr(a)==4){a.h=!1;try{const O=a.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var m;if(!(m=d)){var y;if(y=O===0){let B=String(a.D).match(Yp)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),y=!V1.test(B?B.toLowerCase():"")}m=y}if(m)Xe(a,"complete"),Xe(a,"success");else{a.o=6;try{var b=cr(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",og(a)}}finally{nl(a)}}}}function nl(a,d){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,d||Xe(a,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function cr(a){return a.g?a.g.readyState:0}t.ca=function(){try{return cr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var d=this.g.responseText;return a&&d.indexOf(a)==0&&(d=d.substring(a.length)),qc(d)}};function lg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function F1(a){const d={};a=(a.g&&cr(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(T(a[y]))continue;var m=I1(a[y]);const b=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const O=d[b]||[];d[b]=O,O.push(m)}X(d,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function mo(a,d,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||d}function ug(a){this.za=0,this.i=[],this.j=new ro,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=mo("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=mo("baseRetryDelayMs",5e3,a),this.Za=mo("retryDelaySeedMs",1e4,a),this.Ta=mo("forwardChannelMaxRetries",2,a),this.va=mo("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new qp(a&&a.concurrentRequestLimit),this.Ba=new L1,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ug.prototype,t.ka=8,t.I=1,t.connect=function(a,d,m,y){Et(0),this.W=a,this.H=d||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=Eg(this,null,this.W),il(this)};function ih(a){if(cg(a),a.I==3){var d=a.V++,m=vn(a.J);if(Ee(m,"SID",a.M),Ee(m,"RID",d),Ee(m,"TYPE","terminate"),po(a,m),d=new ar(a,a.j,d),d.M=2,d.A=el(vn(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(d.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=d.A,m=!0),m||(d.g=vg(d.j,null),d.g.ea(d.A)),d.F=Date.now(),Za(d)}yg(a)}function rl(a){a.g&&(oh(a),a.g.cancel(),a.g=null)}function cg(a){rl(a),a.v&&(o.clearTimeout(a.v),a.v=null),sl(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function il(a){if(!Wp(a.h)&&!a.m){a.m=!0;var d=a.Ea;F||E(),z||(F(),z=!0),w.add(d,a),a.D=0}}function U1(a,d){return Gp(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=d.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=no(h(a.Ea,a,d),gg(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new ar(this,this.j,a);let O=this.o;if(this.U&&(O?(O=te(O),me(O,this.U)):O=this.U),this.u!==null||this.R||(b.J=O,O=null),this.S)e:{for(var d=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,d>4096){d=m;break e}if(d===4096||m===this.i.length-1){d=m+1;break e}}d=1e3}else d=1e3;d=dg(this,b,d),m=vn(this.J),Ee(m,"RID",a),Ee(m,"CVER",22),this.G&&Ee(m,"X-HTTP-Session-Id",this.G),po(this,m),O&&(this.R?d="headers="+io(ig(O))+"&"+d:this.u&&rh(m,this.u,O)),eh(this.h,b),this.Ra&&Ee(m,"TYPE","init"),this.S?(Ee(m,"$req",d),Ee(m,"SID","null"),b.U=!0,Yc(b,m,null)):Yc(b,m,d),this.I=2}}else this.I==3&&(a?hg(this,a):this.i.length==0||Wp(this.h)||hg(this))};function hg(a,d){var m;d?m=d.l:m=a.V++;const y=vn(a.J);Ee(y,"SID",a.M),Ee(y,"RID",m),Ee(y,"AID",a.K),po(a,y),a.u&&a.o&&rh(y,a.u,a.o),m=new ar(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),d&&(a.i=d.G.concat(a.i)),d=dg(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),eh(a.h,m),Yc(m,y,d)}function po(a,d){a.H&&K(a.H,function(m,y){Ee(d,y,m)}),a.l&&K({},function(m,y){Ee(d,y,m)})}function dg(a,d,m){m=Math.min(a.i.length,m);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var b=a.i;let ne=-1;for(;;){const Be=["count="+m];ne==-1?m>0?(ne=b[0].g,Be.push("ofs="+ne)):ne=0:Be.push("ofs="+ne);let fe=!0;for(let Ge=0;Ge<m;Ge++){var O=b[Ge].g;const _n=b[Ge].map;if(O-=ne,O<0)ne=Math.max(0,b[Ge].g-100),fe=!1;else try{O="req"+O+"_"||"";try{var B=_n instanceof Map?_n:Object.entries(_n);for(const[ii,hr]of B){let dr=hr;l(hr)&&(dr=Zs(hr)),Be.push(O+ii+"="+encodeURIComponent(dr))}}catch(ii){throw Be.push(O+"type="+encodeURIComponent("_badmap")),ii}}catch{y&&y(_n)}}if(fe){B=Be.join("&");break e}}B=void 0}return a=a.i.splice(0,m),d.G=a,B}function fg(a){if(!a.g&&!a.v){a.Y=1;var d=a.Da;F||E(),z||(F(),z=!0),w.add(d,a),a.A=0}}function sh(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=no(h(a.Da,a),gg(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,mg(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=no(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Et(10),rl(this),mg(this))};function oh(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mg(a){a.g=new ar(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var d=vn(a.na);Ee(d,"RID","rpc"),Ee(d,"SID",a.M),Ee(d,"AID",a.K),Ee(d,"CI",a.F?"0":"1"),!a.F&&a.ia&&Ee(d,"TO",a.ia),Ee(d,"TYPE","xmlhttp"),po(a,d),a.u&&a.o&&rh(d,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=el(vn(d)),m.u=null,m.R=!0,Bp(m,a)}t.Va=function(){this.C!=null&&(this.C=null,rl(this),sh(this),Et(19))};function sl(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function pg(a,d){var m=null;if(a.g==d){sl(a),oh(a),a.g=null;var y=2}else if(Zc(a.h,d))m=d.G,Kp(a.h,d),y=1;else return;if(a.I!=0){if(d.o)if(y==1){m=d.u?d.u.length:0,d=Date.now()-d.F;var b=a.D;y=Ja(),Xe(y,new Mp(y,m)),il(a)}else fg(a);else if(b=d.m,b==3||b==0&&d.X>0||!(y==1&&U1(a,d)||y==2&&sh(a)))switch(m&&m.length>0&&(d=a.h,d.i=d.i.concat(m)),b){case 1:ri(a,5);break;case 4:ri(a,10);break;case 3:ri(a,6);break;default:ri(a,2)}}}function gg(a,d){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*d}function ri(a,d){if(a.j.info("Error code "+d),d==2){var m=h(a.bb,a),y=a.Ua;const b=!y;y=new lr(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||oo(y,"https"),el(y),b?O1(y.toString(),m):x1(y.toString(),m)}else Et(2);a.I=0,a.l&&a.l.pa(d),yg(a),cg(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function yg(a){if(a.I=0,a.ja=[],a.l){const d=Qp(a.h);(d.length!=0||a.i.length!=0)&&(C(a.ja,d),C(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function Eg(a,d,m){var y=m instanceof lr?vn(m):new lr(m);if(y.g!="")d&&(y.g=d+"."+y.g),ao(y,y.u);else{var b=o.location;y=b.protocol,d=d?d+"."+b.hostname:b.hostname,b=+b.port;const O=new lr(null);y&&oo(O,y),d&&(O.g=d),b&&ao(O,b),m&&(O.h=m),y=O}return m=a.G,d=a.wa,m&&d&&Ee(y,m,d),Ee(y,"VER",a.ka),po(a,y),y}function vg(a,d,m){if(d&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return d=a.Aa&&!a.ma?new Pe(new nh({ab:m})):new Pe(a.ma),d.Fa(a.L),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _g(){}t=_g.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ol(){}ol.prototype.g=function(a,d){return new xt(a,d)};function xt(a,d){We.call(this),this.g=new ug(d),this.l=a,this.h=d&&d.messageUrlParams||null,a=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(a?a["X-WebChannel-Content-Type"]=d.messageContentType:a={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.sa&&(a?a["X-WebChannel-Client-Profile"]=d.sa:a={"X-WebChannel-Client-Profile":d.sa}),this.g.U=a,(a=d&&d.Qb)&&!T(a)&&(this.g.u=a),this.A=d&&d.supportsCrossDomainXhr||!1,this.v=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!T(d)&&(this.g.G=d,a=this.h,a!==null&&d in a&&(a=this.h,d in a&&delete a[d])),this.j=new Hi(this)}p(xt,We),xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){ih(this.g)},xt.prototype.o=function(a){var d=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=Zs(a),a=m);d.i.push(new A1(d.Ya++,a)),d.I==3&&il(d)},xt.prototype.N=function(){this.g.l=null,delete this.j,ih(this.g),delete this.g,xt.Z.N.call(this)};function wg(a){Wc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var d=a.__sm__;if(d){e:{for(const m in d){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,d=d!==null&&a in d?d[a]:void 0),this.data=d}else this.data=a}p(wg,Wc);function Ig(){Gc.call(this),this.status=1}p(Ig,Gc);function Hi(a){this.g=a}p(Hi,_g),Hi.prototype.ra=function(){Xe(this.g,"a")},Hi.prototype.qa=function(a){Xe(this.g,new wg(a))},Hi.prototype.pa=function(a){Xe(this.g,new Ig)},Hi.prototype.oa=function(){Xe(this.g,"b")},ol.prototype.createWebChannel=ol.prototype.g,xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,H0=function(){return new ol},j0=function(){return Ja()},B0=ei,nf={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xa.NO_ERROR=0,Xa.TIMEOUT=8,Xa.HTTP_ERROR=6,Wl=Xa,Fp.COMPLETE="complete",$0=Fp,Op.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",We.prototype.listen=We.prototype.J,Do=Op,Pe.prototype.listenOnce=Pe.prototype.K,Pe.prototype.getLastError=Pe.prototype.Ha,Pe.prototype.getLastErrorCode=Pe.prototype.ya,Pe.prototype.getStatus=Pe.prototype.ca,Pe.prototype.getResponseJson=Pe.prototype.La,Pe.prototype.getResponseText=Pe.prototype.la,Pe.prototype.send=Pe.prototype.ea,Pe.prototype.setWithCredentials=Pe.prototype.Fa,z0=Pe}).apply(typeof Rl<"u"?Rl:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bs="12.13.0";function N2(t){Bs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Tc("@firebase/firestore");function Gi(){return Ci.logLevel}function H(t,...e){if(Ci.logLevel<=ae.DEBUG){const n=e.map(Fm);Ci.debug(`Firestore (${Bs}): ${t}`,...n)}}function tr(t,...e){if(Ci.logLevel<=ae.ERROR){const n=e.map(Fm);Ci.error(`Firestore (${Bs}): ${t}`,...n)}}function Pi(t,...e){if(Ci.logLevel<=ae.WARN){const n=e.map(Fm);Ci.warn(`Firestore (${Bs}): ${t}`,...n)}}function Fm(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,q0(t,r,n)}function q0(t,e,n){let r=`FIRESTORE (${Bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function he(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||q0(e,i,r)}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class b2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class D2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class O2{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new W0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class x2{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class L2{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new x2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){he(this.o===void 0,3512);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new eE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new eE(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=M2(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ie(t,e){return t<e?-1:t>e?1:0}function rf(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return jh(i)===jh(s)?ie(i,s):jh(i)?1:-1}return ie(t.length,e.length)}const F2=55296,U2=57343;function jh(t){const e=t.charCodeAt(0);return e>=F2&&e<=U2}function Ns(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="__name__";class Sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Y(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Sn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Sn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ie(e.length,n.length)}static compareSegments(e,n){const r=Sn.isNumericId(e),i=Sn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Sn.extractNumericId(e).compare(Sn.extractNumericId(n)):rf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lr.fromString(e.substring(4,e.length-2))}}class pe extends Sn{construct(e,n,r){return new pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new pe(n)}static emptyPath(){return new pe([])}}const z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends Sn{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tE}static keyField(){return new it([tE])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new q(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(pe.fromString(e))}static fromName(e){return new G(pe.fromString(e).popFirst(5))}static empty(){return new G(pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new pe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(t,e,n){if(!n)throw new q(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $2(t,e,n,r){if(e===!0&&r===!0)throw new q(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nE(t){if(!G.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rE(t){if(G.isDocumentKey(t))throw new q(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function K0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Sc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sc(t);throw new q(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ma(t,e){if(!K0(t))throw new q(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(V.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=-62135596800,sE=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*sE);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<iE)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/sE}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ma(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-iE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:ze("string",_e._jsonSchemaVersion),seconds:ze("number"),nanoseconds:ze("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{static fromTimestamp(e){return new Z(e)}static min(){return new Z(new _e(0,0))}static max(){return new Z(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=-1;function B2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new $r(i,G.empty(),e)}function j2(t){return new $r(t.readTime,t.key,pa)}class $r{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new $r(Z.min(),G.empty(),pa)}static max(){return new $r(Z.max(),G.empty(),pa)}}function H2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==q2)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function G2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Hs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ac.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=-1;function Rc(t){return t==null}function Vu(t){return t===0&&1/t==-1/0}function K2(t){return typeof t=="number"&&Number.isInteger(t)&&!Vu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="";function Q2(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=oE(e)),e=Y2(t.get(n),e);return oE(e)}function Y2(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case Q0:n+="";break;default:n+=s}}return n}function oE(t){return t+Q0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kl(this.root,e,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kl(this.root,e,this.comparator,!0)}}class kl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??rt.RED,this.left=i??rt.EMPTY,this.right=s??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new rt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return rt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lE(this.data.getIterator())}getIteratorFrom(e){return new lE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new qe(this.comparator);return n.data=e,n}}class lE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new qe(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new J0("Invalid base64 string: "+s):s}}(e);return new at(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const J2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(he(!!t,39018),typeof t=="string"){let e=0;const n=J2.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0="server_timestamp",Z0="__type__",eI="__previous_value__",tI="__local_write_time__";function $m(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Z0])==null?void 0:r.stringValue)===X0}function kc(t){const e=t.mapValue.fields[eI];return $m(e)?kc(e):e}function ga(t){const e=Br(t.mapValue.fields[tI].timestampValue);return new _e(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r,i,s,o,l,u,h,f,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=p}}const Mu="(default)";class ya{constructor(e,n){this.projectId=e,this.database=n||Mu}static empty(){return new ya("","")}get isDefaultDatabase(){return this.database===Mu}isEqual(e){return e instanceof ya&&e.projectId===this.projectId&&e.database===this.database}}function Z2(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ya(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI="__type__",eN="__max__",Cl={mapValue:{}},rI="__vector__",Fu="value";function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$m(t)?4:nN(t)?9007199254740991:tN(t)?10:11:Y(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ga(t).isEqual(ga(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Br(i.timestampValue),l=Br(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return jr(i.bytesValue).isEqual(jr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return xe(i.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(i.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return xe(i.integerValue)===xe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=xe(i.doubleValue),l=xe(s.doubleValue);return o===l?Vu(o)===Vu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ns(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(aE(o)!==aE(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Vn(o[u],l[u])))return!1;return!0}(t,e);default:return Y(52216,{left:t})}}function Ea(t,e){return(t.values||[]).find(n=>Vn(n,e))!==void 0}function bs(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=xe(s.integerValue||s.doubleValue),u=xe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return uE(t.timestampValue,e.timestampValue);case 4:return uE(ga(t),ga(e));case 5:return rf(t.stringValue,e.stringValue);case 6:return function(s,o){const l=jr(s),u=jr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=ie(l[h],u[h]);if(f!==0)return f}return ie(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ie(xe(s.latitude),xe(o.latitude));return l!==0?l:ie(xe(s.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cE(t.arrayValue,e.arrayValue);case 10:return function(s,o){var g,S,C,P;const l=s.fields||{},u=o.fields||{},h=(g=l[Fu])==null?void 0:g.arrayValue,f=(S=u[Fu])==null?void 0:S.arrayValue,p=ie(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((P=f==null?void 0:f.values)==null?void 0:P.length)||0);return p!==0?p:cE(h,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Cl.mapValue&&o===Cl.mapValue)return 0;if(s===Cl.mapValue)return 1;if(o===Cl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const g=rf(u[p],f[p]);if(g!==0)return g;const S=bs(l[u[p]],h[f[p]]);if(S!==0)return S}return ie(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function uE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Br(t),r=Br(e),i=ie(n.seconds,r.seconds);return i!==0?i:ie(n.nanos,r.nanos)}function cE(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=bs(n[i],r[i]);if(s)return s}return ie(n.length,r.length)}function Ds(t){return sf(t)}function sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=sf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${sf(n.fields[o])}`;return i+"}"}(t.mapValue):Y(61005,{value:t})}function Gl(t){switch(Hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(t);return e?16+Gl(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Gl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Jr(r.fields,(s,o)=>{i+=s.length+Gl(o)}),i}(t.mapValue);default:throw Y(13486,{value:t})}}function hE(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function of(t){return!!t&&"integerValue"in t}function Bm(t){return!!t&&"arrayValue"in t}function dE(t){return!!t&&"nullValue"in t}function fE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kl(t){return!!t&&"mapValue"in t}function tN(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[nI])==null?void 0:r.stringValue)===rI}function qo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qo(t.arrayValue.values[n]);return e}return{...t}}function nN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===eN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qo(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Kl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ct(qo(this.value))}}function iI(t){const e=[];return Jr(t.fields,(n,r)=>{const i=new it([n]);if(Kl(r)){const s=iI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new ft(e,0,Z.min(),Z.min(),Z.min(),Ct.empty(),0)}static newFoundDocument(e,n,r,i){return new ft(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new ft(e,2,n,Z.min(),Z.min(),Ct.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,Z.min(),Z.min(),Ct.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n){this.position=e,this.inclusive=n}}function mE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=bs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n="asc"){this.field=e,this.dir=n}}function rN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{}class Ue extends sI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new sN(e,n,r):n==="array-contains"?new lN(e,r):n==="in"?new uN(e,r):n==="not-in"?new cN(e,r):n==="array-contains-any"?new hN(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new oN(e,r):new aN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(bs(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.matchesComparison(bs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends sI{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new fn(e,n)}matches(e){return oI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oI(t){return t.op==="and"}function aI(t){return iN(t)&&oI(t)}function iN(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function af(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+Ds(t.value);if(aI(t))return t.filters.map(e=>af(e)).join(",");{const e=t.filters.map(n=>af(n)).join(",");return`${t.op}(${e})`}}function lI(t,e){return t instanceof Ue?function(r,i){return i instanceof Ue&&r.op===i.op&&r.field.isEqual(i.field)&&Vn(r.value,i.value)}(t,e):t instanceof fn?function(r,i){return i instanceof fn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&lI(o,i.filters[l]),!0):!1}(t,e):void Y(19439)}function uI(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ds(n.value)}`}(t):t instanceof fn?function(n){return n.op.toString()+" {"+n.getFilters().map(uI).join(" ,")+"}"}(t):"Filter"}class sN extends Ue{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class oN extends Ue{constructor(e,n){super(e,"in",n),this.keys=cI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aN extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=cI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cI(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class lN extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bm(n)&&Ea(n.arrayValue,this.value)}}class uN extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ea(this.value.arrayValue,n)}}class cN extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ea(this.value.arrayValue,n)}}class hN extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function gE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dN(t,e,n,r,i,s,o)}function jm(t){const e=ee(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>af(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Rc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ds(r)).join(",")),e.Te=n}return e.Te}function Hm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!rN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pE(t.startAt,e.startAt)&&pE(t.endAt,e.endAt)}function lf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function fN(t,e,n,r,i,s,o,l){return new qs(t,e,n,r,i,s,o,l)}function qm(t){return new qs(t)}function yE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function mN(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function hI(t){return t.collectionGroup!==null}function Wo(t){const e=ee(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new qe(it.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new va(s,r))}),n.has(it.keyField().canonicalString())||e.Ie.push(new va(it.keyField(),r))}return e.Ie}function Cn(t){const e=ee(t);return e.Ee||(e.Ee=pN(e,Wo(t))),e.Ee}function pN(t,e){if(t.limitType==="F")return gE(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new va(i.field,s)});const n=t.endAt?new Uu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uu(t.startAt.position,t.startAt.inclusive):null;return gE(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uf(t,e){const n=t.filters.concat([e]);return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function gN(t,e){const n=t.explicitOrderBy.concat([e]);return new qs(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function cf(t,e,n){return new qs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return Hm(Cn(t),Cn(e))&&t.limitType===e.limitType}function dI(t){return`${jm(Cn(t))}|lt:${t.limitType}`}function Ki(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>uI(i)).join(", ")}]`),Rc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ds(i)).join(",")),`Target(${r})`}(Cn(t))}; limitType=${t.limitType})`}function Pc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Wo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=mE(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Wo(r),i)||r.endAt&&!function(o,l,u){const h=mE(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Wo(r),i))}(t,e)}function yN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fI(t){return(e,n)=>{let r=!1;for(const i of Wo(t)){const s=EN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EN(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?bs(u,h):Y(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new Se(G.comparator);function nr(){return vN}const mI=new Se(G.comparator);function Oo(...t){let e=mI;for(const n of t)e=e.insert(n.key,n);return e}function pI(t){let e=mI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function di(){return Go()}function gI(){return Go()}function Go(){return new Mi(t=>t.toString(),(t,e)=>t.isEqual(e))}const _N=new Se(G.comparator),wN=new qe(G.comparator);function se(...t){let e=wN;for(const n of t)e=e.add(n);return e}const IN=new qe(ie);function TN(){return IN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(e)?"-0":e}}function yI(t){return{integerValue:""+t}}function SN(t,e){return K2(e)?yI(e):Wm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this._=void 0}}function AN(t,e,n){return t instanceof _a?function(i,s){const o={fields:{[Z0]:{stringValue:X0},[tI]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$m(s)&&(s=kc(s)),s&&(o.fields[eI]=s),{mapValue:o}}(n,e):t instanceof wa?vI(t,e):t instanceof Ia?_I(t,e):function(i,s){const o=EI(i,s),l=EE(o)+EE(i.Ae);return of(o)&&of(i.Ae)?yI(l):Wm(i.serializer,l)}(t,e)}function RN(t,e,n){return t instanceof wa?vI(t,e):t instanceof Ia?_I(t,e):n}function EI(t,e){return t instanceof zu?function(r){return of(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class _a extends Nc{}class wa extends Nc{constructor(e){super(),this.elements=e}}function vI(t,e){const n=wI(e);for(const r of t.elements)n.some(i=>Vn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ia extends Nc{constructor(e){super(),this.elements=e}}function _I(t,e){let n=wI(e);for(const r of t.elements)n=n.filter(i=>!Vn(i,r));return{arrayValue:{values:n}}}class zu extends Nc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function EE(t){return xe(t.integerValue||t.doubleValue)}function wI(t){return Bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n){this.field=e,this.transform=n}}function CN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof wa&&i instanceof wa||r instanceof Ia&&i instanceof Ia?Ns(r.elements,i.elements,Vn):r instanceof zu&&i instanceof zu?Vn(r.Ae,i.Ae):r instanceof _a&&i instanceof _a}(t.transform,e.transform)}class PN{constructor(e,n){this.version=e,this.transformResults=n}}class Pn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pn}static exists(e){return new Pn(void 0,e)}static updateTime(e){return new Pn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bc{}function II(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new SI(t.key,Pn.none()):new Fa(t.key,t.data,Pn.none());{const n=t.data,r=Ct.empty();let i=new qe(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Xr(t.key,r,new Ft(i.toArray()),Pn.none())}}function NN(t,e,n){t instanceof Fa?function(i,s,o){const l=i.value.clone(),u=_E(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Xr?function(i,s,o){if(!Ql(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=_E(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(TI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ko(t,e,n,r){return t instanceof Fa?function(s,o,l,u){if(!Ql(s.precondition,o))return l;const h=s.value.clone(),f=wE(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xr?function(s,o,l,u){if(!Ql(s.precondition,o))return l;const h=wE(s.fieldTransforms,u,o),f=o.data;return f.setAll(TI(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ql(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=EI(r.transform,i||null);s!=null&&(n===null&&(n=Ct.empty()),n.set(r.field,s))}return n||null}function vE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ns(r,i,(s,o)=>CN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fa extends bc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xr extends bc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function TI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function _E(t,e,n){const r=new Map;he(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,RN(o,l,n[i]))}return r}function wE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,AN(s,o,e))}return r}class SI extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DN extends bc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&NN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=II(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Ns(this.mutations,e.mutations,(n,r)=>vE(n,r))&&Ns(this.baseMutations,e.baseMutations,(n,r)=>vE(n,r))}}class Gm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return _N}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Gm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,le;function VN(t){switch(t){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:t})}}function AI(t){if(t===void 0)return tr("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:t})}}(le=Me||(Me={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=new Lr([4294967295,4294967295],0);function IE(t){const e=MN().encode(t),n=new U0;return n.update(e),new Uint8Array(n.digest())}function TE(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lr([n,r],0),new Lr([i,s],0)]}class Km{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xo(`Invalid padding: ${n}`);if(r<0)throw new xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Lr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Lr.fromNumber(r)));return i.compare(FN)===1&&(i=new Lr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=IE(e),[r,i]=TE(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Km(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.ge===0)return;const n=IE(e),[r,i]=TE(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ua(Z.min(),i,new Se(ie),nr(),se())}}class za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new za(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class RI{constructor(e,n){this.targetId=e,this.Ce=n}}class kI{constructor(e,n,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class SE{constructor(){this.ve=0,this.Fe=AE(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),n=se(),r=se();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y(38017,{changeType:s})}}),new za(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=AE()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,he(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class UN{constructor(e){this.Ge=e,this.ze=new Map,this.je=nr(),this.Je=Pl(),this.He=Pl(),this.Ze=new Se(ie)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(lf(s))if(r===0){const o=new G(s.path);this.et(n,o,ft.newNoDocument(o,Z.min()))}else he(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const l=this.ut(e),u=l?this.ct(l,e,o):1;if(u!==0){this.it(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=jr(r).toUint8Array()}catch(u){if(u instanceof J0)return Pi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Km(o,i,s)}catch(u){return Pi(u instanceof xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const l=this.ot(o);if(l){if(s.current&&lf(l.target)){const u=new G(l.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,ft.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=se();this.He.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this.ot(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new Ua(e,n,this.Ze,this.je,r);return this.je=nr(),this.Je=Pl(),this.He=Pl(),this.Ze=new Se(ie),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new SE,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new qe(ie),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new qe(ie),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new SE),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Pl(){return new Se(G.comparator)}function AE(){return new Se(G.comparator)}const zN={asc:"ASCENDING",desc:"DESCENDING"},$N={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BN={and:"AND",or:"OR"};class jN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hf(t,e){return t.useProto3Json||Rc(e)?e:{value:e}}function $u(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function CI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function HN(t,e){return $u(t,e.toTimestamp())}function Nn(t){return he(!!t,49232),Z.fromTimestamp(function(n){const r=Br(n);return new _e(r.seconds,r.nanos)}(t))}function Qm(t,e){return df(t,e).canonicalString()}function df(t,e){const n=function(i){return new pe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function PI(t){const e=pe.fromString(t);return he(xI(e),10190,{key:e.toString()}),e}function ff(t,e){return Qm(t.databaseId,e.path)}function Hh(t,e){const n=PI(e);if(n.get(1)!==t.databaseId.projectId)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(bI(n))}function NI(t,e){return Qm(t.databaseId,e)}function qN(t){const e=PI(t);return e.length===4?pe.emptyPath():bI(e)}function mf(t){return new pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bI(t){return he(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function RE(t,e,n){return{name:ff(t,e),fields:n.value.mapValue.fields}}function WN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(he(f===void 0||typeof f=="string",58123),at.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),at.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?V.UNKNOWN:AI(h.code);return new q(f,h.message||"")}(o);n=new kI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hh(t,r.document.name),s=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):Z.min(),l=new Ct({mapValue:{fields:r.document.fields}}),u=ft.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Yl(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hh(t,r.document),s=r.readTime?Nn(r.readTime):Z.min(),o=ft.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Yl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hh(t,r.document),s=r.removedTargetIds||[];n=new Yl([],s,i,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new LN(i,s),l=r.targetId;n=new RI(l,o)}}return n}function GN(t,e){let n;if(e instanceof Fa)n={update:RE(t,e.key,e.value)};else if(e instanceof SI)n={delete:ff(t,e.key)};else if(e instanceof Xr)n={update:RE(t,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof DN))return Y(16599,{dt:e.type});n={verify:ff(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof _a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof wa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof zu)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Y(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:HN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Y(27497)}(t,e.precondition)),n}function KN(t,e){return t&&t.length>0?(he(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Nn(i.updateTime):Nn(s);return o.isEqual(Z.min())&&(o=Nn(s)),new PN(o,i.transformResults||[])}(n,e))):[]}function QN(t,e){return{documents:[NI(t,e.path)]}}function YN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NI(t,i);const s=function(h){if(h.length!==0)return OI(fn.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Qi(g.field),direction:ZN(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:i}}function JN(t){let e=qN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const g=DI(p);return g instanceof fn&&aI(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(C){return new va(Yi(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Rc(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(p){const g=!!p.before,S=p.values||[];return new Uu(S,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,S=p.values||[];return new Uu(S,g)}(n.endAt)),fN(e,i,o,s,l,"F",u,h)}function XN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function DI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yi(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Yi(n.unaryFilter.field);return Ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Yi(n.unaryFilter.field);return Ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Yi(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Yi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return fn.create(n.compositeFilter.filters.map(r=>DI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(n.compositeFilter.op))}(t):Y(30097,{filter:t})}function ZN(t){return zN[t]}function eb(t){return $N[t]}function tb(t){return BN[t]}function Qi(t){return{fieldPath:t.canonicalString()}}function Yi(t){return it.fromServerFormat(t.fieldPath)}function OI(t){return t instanceof Ue?function(n){if(n.op==="=="){if(fE(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NAN"}};if(dE(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fE(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NAN"}};if(dE(n.value))return{unaryFilter:{field:Qi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qi(n.field),op:eb(n.op),value:n.value}}}(t):t instanceof fn?function(n){const r=n.getFilters().map(i=>OI(i));return r.length===1?r[0]:{compositeFilter:{op:tb(n.op),filters:r}}}(t):Y(54877,{filter:t})}function nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function xI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function LI(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=Z.min(),o=Z.min(),l=at.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.yt=e}}function ib(t){const e=JN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.bn=new ob}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve($r.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve($r.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(pe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VI=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(VI,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new qr(0)}static ar(){return new qr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="LruGarbageCollector",ab=1048576;function PE([t,e],[n,r]){const i=ie(t,n);return i===0?ie(e,r):i}class lb{constructor(e){this.Pr=e,this.buffer=new qe(PE),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();PE(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ub{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(CE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Hs(n)?H(CE,"Ignoring IndexedDB error during garbage collection: ",n):await js(n)}await this.Ar(3e5)})}}class cb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Ac.ce);const r=new lb(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(kE)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kE):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Gi()<=ae.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function hb(t,e){return new cb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.changes=new Mi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ko(r.mutation,i,Ft.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Oo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=nr();const o=Go(),l=function(){return Go()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Xr)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ko(f.mutation,h,f.mutation.getFieldMask(),_e.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>l.set(h,new fb(f,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Go();let i=new Se((o,l)=>o-l),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Ft.empty();f=l.applyToLocalView(h,f),r.set(u,f);const p=(i.get(l.batchId)||se()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,p=gI();f.forEach(g=>{if(!s.has(g)){const S=II(n.get(g),r.get(g));S!==null&&p.set(g,S),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return mN(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(di());let l=pa,u=s;return o.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,se())).next(f=>({batchId:l,changes:pI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Oo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Oo();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const h=function(p,g){return new qs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let l=Oo();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Ko(f.mutation,h,Ft.empty(),_e.now()),Pc(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Nn(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:ib(i.bundledQuery),readTime:Nn(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.overlays=new Se(G.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=di();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=di(),s=n.length+1,o=new G(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=di(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=di(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return M.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new xN(n,r));let s=this.Lr.get(n);s===void 0&&(s=se(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.kr=new qe(Ke.Kr),this.qr=new qe(Ke.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ke(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new G(new pe([])),r=new Ke(n,e),i=new Ke(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new pe([])),r=new Ke(n,e),i=new Ke(n,e+1);let s=se();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ke(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return G.comparator(e.key,n.key)||ie(e.Jr,n.Jr)}static Ur(e,n){return ie(e.Jr,n.Jr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new qe(Ke.Kr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ON(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new Ke(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?zm:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe(ie);return n.forEach(i=>{const s=new Ke(i,0),o=new Ke(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new Ke(new G(s),0);let l=new qe(ie);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),M.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,i=>{const s=new Ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ke(n,0),i=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.ti=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ft.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=nr();const o=n.path,l=new G(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||H2(j2(f),r)<=0||(i.has(f.key)||Pc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Y(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _b(this)}getSize(e){return M.resolve(this.size)}}class _b extends db{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e){this.persistence=e,this.ri=new Mi(n=>jm(n),Hm),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.ii=0,this.si=new Ym,this.targetCount=0,this.oi=qr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new qr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this._i={},this.overlays={},this.ai=new Ac(0),this.ui=!1,this.ui=!0,this.ci=new yb,this.referenceDelegate=e(this),this.li=new wb(this),this.indexManager=new sb,this.remoteDocumentCache=function(i){return new vb(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new rb(n),this.Pi=new pb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new gb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new Eb(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new Ib(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class Ib extends W2{constructor(e){super(),this.currentSequenceNumber=e}}class Jm{constructor(e){this.persistence=e,this.Ri=new Ym,this.Ai=null}static Vi(e){return new Jm(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const i=G.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Bu{constructor(e,n){this.persistence=e,this.fi=new Mi(r=>Q2(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=hb(this,n)}static Vi(e,n){return new Bu(e,n)}Ti(){}Ii(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?M.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Gl(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return M.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Xm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return hP()?8:G2(pt())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Tb;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Gi()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Ki(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Gi()<=ae.DEBUG&&H("QueryEngine","Query:",Ki(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Gi()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Ki(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):M.resolve())}gs(e,n){if(yE(n))return M.resolve(null);let r=Cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,cf(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return yE(n)||i.isEqual(Z.min())?M.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?M.resolve(null):(Gi()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ki(n)),this.Ds(e,o,n,B2(i,pa)).next(l=>l))})}Ss(e,n){let r=new qe(fI(e));return n.forEach((i,s)=>{Pc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Gi()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Ki(n)),this.fs.getDocumentsMatchingQuery(e,n,$r.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="LocalStore",Ab=3e8;class Rb{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new Se(ie),this.Fs=new Mi(s=>jm(s),Hm),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mb(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function kb(t,e,n,r){return new Rb(t,e,n,r)}async function FI(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=se();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function Cb(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const p=h.batch,g=p.keys();let S=M.resolve();return g.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(P=>{const D=h.docVersions.get(C);he(D!==null,48541),P.version.compareTo(D)<0&&(p.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function UI(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function Pb(t,e){const n=ee(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const l=[];e.targetChanges.forEach((f,p)=>{const g=i.get(p);if(!g)return;l.push(n.li.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,p)));let S=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?S=S.withResumeToken(at.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(p,S),function(P,D,_){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Ab?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(g,S,f)&&l.push(n.li.updateTargetData(s,S))});let u=nr(),h=se();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Nb(s,o,e.documentUpdates).next(f=>{u=f.Bs,h=f.Ls})),!r.isEqual(Z.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(p=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.vs=i,s))}function Nb(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=nr();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H(Zm,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function bb(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Db(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function pf(t,e,n){const r=ee(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Hs(o))throw o;H(Zm,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function NE(t,e,n){const r=ee(t);let i=Z.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const p=ee(u),g=p.Fs.get(f);return g!==void 0?M.resolve(p.vs.get(g)):p.li.getTargetData(h,f)}(r,o,Cn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:se())).next(l=>(Ob(r,yN(e),l),{documents:l,ks:s})))}function Ob(t,e,n){let r=t.Ms.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class bE{constructor(){this.activeTargetIds=TN()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class xb{constructor(){this.vo=new bE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new bE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="ConnectivityMonitor";class OE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(DE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(DE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl=null;function gf(){return Nl===null?Nl=function(){return 268435456+Math.round(2147483648*Math.random())}():Nl++,"0x"+Nl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="RestConnection",Vb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Mb{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Mu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=gf(),l=this.Qo(e,n.toUriEncodedString());H(qh,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),f=Va(h);return this.zo(e,l,u,r,f).then(p=>(H(qh,`Received RPC '${e}' ${o}: `,p),p),p=>{throw Pi(qh,`RPC '${e}' ${o} failed with error: `,p,"url: ",l,"request:",r),p})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=Vb[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="WebChannelConnection",Ao=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class gs extends Mb{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!gs.c_){const e=j0();Ao(e,B0.STAT_EVENT,n=>{n.stat===nf.PROXY?H(ct,"STAT_EVENT: detected buffering proxy"):n.stat===nf.NOPROXY&&H(ct,"STAT_EVENT: detected no buffering proxy")}),gs.c_=!0}}zo(e,n,r,i,s){const o=gf();return new Promise((l,u)=>{const h=new z0;h.setWithCredentials(!0),h.listenOnce($0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Wl.NO_ERROR:const p=h.getResponseJson();H(ct,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),l(p);break;case Wl.TIMEOUT:H(ct,`RPC '${e}' ${o} timed out`),u(new q(V.DEADLINE_EXCEEDED,"Request time out"));break;case Wl.HTTP_ERROR:const g=h.getStatus();if(H(ct,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const P=function(_){const v=_.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(C.status);u(new q(P,C.message))}else u(new q(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new q(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(ct,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);H(ct,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=gf(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");H(ct,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);this.I_(f);let p=!1,g=!1;const S=new Fb({Jo:C=>{g?H(ct,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(p||(H(ct,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),H(ct,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Ho:()=>f.close()});return Ao(f,Do.EventType.OPEN,()=>{g||(H(ct,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),Ao(f,Do.EventType.CLOSE,()=>{g||(g=!0,H(ct,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.E_(f))}),Ao(f,Do.EventType.ERROR,C=>{g||(g=!0,Pi(ct,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),S.o_(new q(V.UNAVAILABLE,"The operation could not be completed")))}),Ao(f,Do.EventType.MESSAGE,C=>{var P;if(!g){const D=C.data[0];he(!!D,16349);const _=D,v=(_==null?void 0:_.error)||((P=_[0])==null?void 0:P.error);if(v){H(ct,`RPC '${e}' stream ${i} received error:`,v);const R=v.status;let L=function(w){const E=Me[w];if(E!==void 0)return AI(E)}(R),F=v.message;R==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&Pi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=V.INTERNAL,F="Unknown error status: "+R+" with message "+v.message),g=!0,S.o_(new q(L,F)),f.close()}else H(ct,`RPC '${e}' stream ${i} received:`,D),S.__(D)}}),gs.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return H0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(t){return new gs(t)}function Wh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t){return new jN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gs.c_=!1;class zI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="PersistentStream";class $I{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new zI(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new q(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(xE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(H(xE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zb extends $I{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=WN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Nn(o.readTime):Z.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=mf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=lf(u)?{documents:QN(s,u)}:{query:YN(s,u).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=CI(s,o.resumeToken);const h=hf(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=$u(s,o.snapshotVersion.toTimestamp());const h=hf(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=XN(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=mf(this.serializer),n.removeTarget=e,this.K_(n)}}class $b extends $I{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=KN(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=mf(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>GN(this.serializer,r))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{}class jb extends Bb{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,df(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Hb(t,e,n,r){return new jb(t,e,n,r)}class qb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(tr(n),this.aa=!1):H("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="RemoteStore";class Wb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new qr(1e3),this.Va=new qr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Fi(this)&&(H(Mn,"Restarting streams for network reachability change."),await async function(u){const h=ee(u);h.da.add(4),await $a(h),h.ga.set("Unknown"),h.da.delete(4),await Oc(h)}(this))})}),this.ga=new qb(r,i)}}async function Oc(t){if(Fi(t))for(const e of t.ma)await e(!0)}async function $a(t){for(const e of t.ma)await e(!1)}function yf(t,e){return t.Ea.get(e)||void 0}function BI(t,e){const n=ee(t),r=yf(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(l,u){const h=yf(l,u);h!==void 0&&l.Ra.delete(h);const f=function(g,S){return S%2!=0?g.Va.next():g.Aa.next()}(l,u);return l.Ea.set(u,f),l.Ra.set(f,u),f}(n,e.targetId);H(Mn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new qn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),rp(n)?np(n):Ws(n).O_()&&tp(n,s)}function ep(t,e){const n=ee(t),r=Ws(n),i=yf(n,e);H(Mn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&jI(n,i),n.Ia.size===0&&(r.O_()?r.L_():Fi(n)&&n.ga.set("Unknown"))}function tp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void H(Mn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}Ws(t).Z_(e)}function jI(t,e){t.pa.$e(e),Ws(t).X_(e)}function np(t){t.pa=new UN({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):se()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ws(t).start(),t.ga.ua()}function rp(t){return Fi(t)&&!Ws(t).x_()&&t.Ia.size>0}function Fi(t){return ee(t).da.size===0}function HI(t){t.pa=void 0}async function Gb(t){t.ga.set("Online")}async function Kb(t){t.Ia.forEach((e,n)=>{tp(t,e)})}async function Qb(t,e){HI(t),rp(t)?(t.ga.ha(e),np(t)):t.ga.set("Unknown")}async function Yb(t,e,n){if(t.ga.set("Online"),e instanceof kI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds){if(i.Ia.has(l)){const u=i.Ra.get(l);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(l)),i.Ia.delete(l)}i.pa.removeTarget(l)}}(t,e)}catch(r){H(Mn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ju(t,r)}else if(e instanceof Yl?t.pa.Xe(e):e instanceof RI?t.pa.st(e):t.pa.tt(e),!n.isEqual(Z.min()))try{const r=await UI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.pa.Tt(o);l.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const p=s.Ia.get(f);p&&s.Ia.set(f,p.withResumeToken(h.resumeToken,o))}}),l.targetMismatches.forEach((h,f)=>{const p=s.Ia.get(h);if(!p)return;s.Ia.set(h,p.withResumeToken(at.EMPTY_BYTE_STRING,p.snapshotVersion)),jI(s,h);const g=new qn(p.target,h,f,p.sequenceNumber);tp(s,g)});const u=function(f,p){const g=new Map;p.targetChanges.forEach((C,P)=>{const D=f.Ra.get(P);D!==void 0&&g.set(D,C)});let S=new Se(ie);return p.targetMismatches.forEach((C,P)=>{const D=f.Ra.get(C);D!==void 0&&(S=S.insert(D,P))}),new Ua(p.snapshotVersion,g,S,p.documentUpdates,p.resolvedLimboDocuments)}(s,l);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){H(Mn,"Failed to raise snapshot:",r),await ju(t,r)}}async function ju(t,e,n){if(!Hs(e))throw e;t.da.add(1),await $a(t),t.ga.set("Offline"),n||(n=()=>UI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(Mn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Oc(t)})}function qI(t,e){return e().catch(n=>ju(t,n,e))}async function xc(t){const e=ee(t),n=Wr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:zm;for(;Jb(e);)try{const i=await bb(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,Xb(e,i)}catch(i){await ju(e,i)}WI(e)&&GI(e)}function Jb(t){return Fi(t)&&t.Ta.length<10}function Xb(t,e){t.Ta.push(e);const n=Wr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function WI(t){return Fi(t)&&!Wr(t).x_()&&t.Ta.length>0}function GI(t){Wr(t).start()}async function Zb(t){Wr(t).ra()}async function eD(t){const e=Wr(t);for(const n of t.Ta)e.ea(n.mutations)}async function tD(t,e,n){const r=t.Ta.shift(),i=Gm.from(r,e,n);await qI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xc(t)}async function nD(t,e){e&&Wr(t).Y_&&await async function(r,i){if(function(o){return VN(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Wr(r).B_(),await qI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await xc(r)}}(t,e),WI(t)&&GI(t)}async function LE(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),H(Mn,"RemoteStore received new credentials");const r=Fi(n);n.da.add(3),await $a(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Oc(n)}async function rD(t,e){const n=ee(t);e?(n.da.delete(2),await Oc(n)):e||(n.da.add(2),await $a(n),n.ga.set("Unknown"))}function Ws(t){return t.ya||(t.ya=function(n,r,i){const s=ee(n);return s.sa(),new zb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Gb.bind(null,t),Yo:Kb.bind(null,t),t_:Qb.bind(null,t),H_:Yb.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),rp(t)?np(t):t.ga.set("Unknown")):(await t.ya.stop(),HI(t))})),t.ya}function Wr(t){return t.wa||(t.wa=function(n,r,i){const s=ee(n);return s.sa(),new $b(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:Zb.bind(null,t),t_:nD.bind(null,t),ta:eD.bind(null,t),na:tD.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await xc(t)):(await t.wa.stop(),t.Ta.length>0&&(H(Mn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new ip(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sp(t,e){if(tr("AsyncQueue",`${e}: ${t}`),Hs(t))return new q(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{static emptySet(e){return new ys(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Oo(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ys)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ys;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.Sa=new Se(G.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Os{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Os(e,n,ys.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class sD{constructor(){this.queries=ME(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=ee(n),s=i.queries;i.queries=ME(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new q(V.ABORTED,"Firestore shutting down"))}}function ME(){return new Mi(t=>dI(t),Cc)}async function oD(t,e){const n=ee(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new iD,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=sp(o,`Initialization of query '${Ki(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&op(n)}async function aD(t,e){const n=ee(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function lD(t,e){const n=ee(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.va)l.Na(i)&&(r=!0);o.Ca=i}}r&&op(n)}function uD(t,e,n){const r=ee(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function op(t){t.xa.forEach(e=>{e.next()})}var Ef,FE;(FE=Ef||(Ef={})).Ba="default",FE.Cache="cache";class cD{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=Os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.key=e}}class QI{constructor(e){this.key=e}}class hD{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=se(),this.mutatedKeys=se(),this.iu=fI(e),this.su=new ys(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new VE,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const g=i.get(f),S=Pc(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),P=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let D=!1;g&&S?g.data.isEqual(S.data)?C!==P&&(r.track({type:3,doc:S}),D=!0):this.uu(g,S)||(r.track({type:2,doc:S}),D=!0,(u&&this.iu(S,u)>0||h&&this.iu(S,h)<0)&&(l=!0)):!g&&S?(r.track({type:0,doc:S}),D=!0):g&&!S&&(r.track({type:1,doc:g}),D=!0,(u||h)&&(l=!0)),D&&(S?(o=o.add(S),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:l,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,p)=>function(S,C){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:D})}};return P(S)-P(C)}(f.type,p.type)||this.iu(f.doc,p.doc)),this.cu(r),i=i??!1;const l=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,h=u!==this.nu;return this.nu=u,o.length!==0||h?{snapshot:new Os(this.query,e.su,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:l}:{hu:l}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new VE,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=se(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new QI(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new KI(r))}),n}Tu(e){this.tu=e.ks,this.ru=se();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return Os.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const ap="SyncEngine";class dD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fD{constructor(e){this.key=e,this.Eu=!1}}class mD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Mi(l=>dI(l),Cc),this.Vu=new Map,this.du=new Set,this.mu=new Se(G.comparator),this.fu=new Map,this.gu=new Ym,this.pu={},this.yu=new Map,this.wu=qr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function pD(t,e,n=!0){const r=tT(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await YI(r,e,n,!0),i}async function gD(t,e){const n=tT(t);await YI(n,e,!0,!1)}async function YI(t,e,n,r){const i=await Db(t.localStore,Cn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await yD(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&BI(t.remoteStore,i),l}async function yD(t,e,n,r,i){t.bu=(p,g,S)=>async function(P,D,_,v){let R=D.view._u(_);R.bs&&(R=await NE(P.localStore,D.query,!1).then(({documents:w})=>D.view._u(w,R)));const L=v&&v.targetChanges.get(D.targetId),F=v&&v.targetMismatches.get(D.targetId)!=null,z=D.view.applyChanges(R,P.isPrimaryClient,L,F);return zE(P,D.targetId,z.hu),z.snapshot}(t,p,g,S);const s=await NE(t.localStore,e,!0),o=new hD(e,s.ks),l=o._u(s.documents),u=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);zE(t,n,h.hu);const f=new dD(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),h.snapshot}async function ED(t,e,n){const r=ee(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!Cc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ep(r.remoteStore,i.targetId),vf(r,i.targetId)}).catch(js)):(vf(r,i.targetId),await pf(r.localStore,i.targetId,!0))}async function vD(t,e){const n=ee(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ep(n.remoteStore,r.targetId))}async function _D(t,e,n){const r=kD(t);try{const i=await function(o,l){const u=ee(o),h=_e.now(),f=l.reduce((S,C)=>S.add(C.key),se());let p,g;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=nr(),P=se();return u.xs.getEntries(S,f).next(D=>{C=D,C.forEach((_,v)=>{v.isValidDocument()||(P=P.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(D=>{p=D;const _=[];for(const v of l){const R=bN(v,p.get(v.key).overlayedDocument);R!=null&&_.push(new Xr(v.key,R,iI(R.value.mapValue),Pn.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,_,l)}).next(D=>{g=D;const _=D.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(S,D.batchId,_)})}).then(()=>({batchId:g.batchId,changes:pI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new Se(ie)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,i.batchId,n),await Ba(r,i.changes),await xc(r.remoteStore)}catch(i){const s=sp(i,"Failed to persist write");n.reject(s)}}async function JI(t,e){const n=ee(t);try{const r=await Pb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?he(o.Eu,14607):i.removedDocuments.size>0&&(he(o.Eu,42227),o.Eu=!1))}),await Ba(n,r,e)}catch(r){await js(r)}}function UE(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let h=!1;u.queries.forEach((f,p)=>{for(const g of p.va)g.Oa(l)&&(h=!0)}),h&&op(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wD(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new Se(G.comparator);o=o.insert(s,ft.newNoDocument(s,Z.min()));const l=se().add(s),u=new Ua(Z.min(),new Map,new Se(ie),o,l);await JI(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),lp(r)}else await pf(r.localStore,e,!1).then(()=>vf(r,e,n)).catch(js)}async function ID(t,e){const n=ee(t),r=e.batch.batchId;try{const i=await Cb(n.localStore,e);ZI(n,r,null),XI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ba(n,i)}catch(i){await js(i)}}async function TD(t,e,n){const r=ee(t);try{const i=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(p=>(he(p!==null,37113),f=p.keys(),u.mutationQueue.removeMutationBatch(h,p))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);ZI(r,e,n),XI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ba(r,i)}catch(i){await js(i)}}function XI(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function ZI(t,e,n){const r=ee(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function vf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||eT(t,r)})}function eT(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(ep(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),lp(t))}function zE(t,e,n){for(const r of n)r instanceof KI?(t.gu.addReference(r.key,e),SD(t,r)):r instanceof QI?(H(ap,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||eT(t,r.key)):Y(19791,{Cu:r})}function SD(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(H(ap,"New document in limbo: "+n),t.du.add(r),lp(t))}function lp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new G(pe.fromString(e)),r=t.wu.next();t.fu.set(r,new fD(n)),t.mu=t.mu.insert(n,r),BI(t.remoteStore,new qn(Cn(qm(n.path)),r,"TargetPurposeLimboResolution",Ac.ce))}}async function Ba(t,e,n){const r=ee(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(h){i.push(h);const p=Xm.Es(u.targetId,h);s.push(p)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,h){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Ts,S=>f.persistence.referenceDelegate.addReference(p,g.targetId,S)).next(()=>M.forEach(g.Is,S=>f.persistence.referenceDelegate.removeReference(p,g.targetId,S)))))}catch(p){if(!Hs(p))throw p;H(Zm,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const S=f.vs.get(g),C=S.snapshotVersion,P=S.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(g,P)}}}(r.localStore,s))}async function AD(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){H(ap,"User change. New user:",e.toKey());const r=await FI(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new q(V.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ba(n,r.Ns)}}function RD(t,e){const n=ee(t),r=n.fu.get(e);if(r&&r.Eu)return se().add(r.key);{let i=se();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const l=n.Au.get(o);i=i.unionWith(l.view.ou)}return i}}function tT(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wD.bind(null,e),e.Ru.H_=lD.bind(null,e.eventManager),e.Ru.Du=uD.bind(null,e.eventManager),e}function kD(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ID.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TD.bind(null,e),e}class Hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Dc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return kb(this.persistence,new Sb,e.initialUser,this.serializer)}xu(e){return new MI(Jm.Vi,this.serializer)}Mu(e){return new xb}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Hu.provider={build:()=>new Hu};class CD extends Hu{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){he(this.persistence.referenceDelegate instanceof Bu,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ub(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new MI(r=>Bu.Vi(r,n),this.serializer)}}class _f{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>UE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AD.bind(null,this.syncEngine),await rD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sD}()}createDatastore(e){const n=Dc(e.databaseInfo.databaseId),r=Ub(e.databaseInfo);return Hb(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Wb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>UE(this.syncEngine,n,0),function(){return OE.v()?new OE:new Lb}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const p=new mD(i,s,o,l,u,h);return f&&(p.Su=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ee(i);H(Mn,"RemoteStore shutting down."),s.da.add(5),await $a(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}_f.provider={build:()=>new _f};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PD{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="FirestoreClient";class ND{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=ht.UNAUTHENTICATED,this.clientId=Um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H(Gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H(Gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gh(t,e){t.asyncQueue.verifyOperationInProgress(),H(Gr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $E(t,e){t.asyncQueue.verifyOperationInProgress();const n=await bD(t);H(Gr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>LE(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>LE(e.remoteStore,i)),t._onlineComponents=e}async function bD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Gr,"Using user provided OfflineComponentProvider");try{await Gh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Pi("Error using user provided cache. Falling back to memory cache: "+n),await Gh(t,new Hu)}}else H(Gr,"Using default OfflineComponentProvider"),await Gh(t,new CD(void 0));return t._offlineComponents}async function nT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Gr,"Using user provided OnlineComponentProvider"),await $E(t,t._uninitializedComponentsProvider._online)):(H(Gr,"Using default OnlineComponentProvider"),await $E(t,new _f))),t._onlineComponents}function DD(t){return nT(t).then(e=>e.syncEngine)}async function BE(t){const e=await nT(t),n=e.eventManager;return n.onListen=pD.bind(null,e.syncEngine),n.onUnlisten=ED.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vD.bind(null,e.syncEngine),n}function OD(t,e,n,r){const i=new PD(r),s=new cD(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>oD(await BE(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>aD(await BE(t),s))}}function xD(t,e){const n=new vi;return t.asyncQueue.enqueueAndForget(async()=>_D(await DD(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD="ComponentProvider",jE=new Map;function VD(t,e,n,r,i){return new X2(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,rT(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT="firestore.googleapis.com",HE=!0;class qE{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=iT,this.ssl=HE}else this.host=e.host,this.ssl=e.ssl??HE;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VI;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ab)throw new q(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rT(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Lc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qE(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new b2;switch(r.type){case"firstParty":return new L2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jE.get(n);r&&(H(LD,"Removing Datastore"),jE.delete(n),r.terminate())}(this),Promise.resolve()}}function MD(t,e,n,r={}){var h;t=_i(t,Lc);const i=Va(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&D0(`https://${l}`),s.host!==iT&&s.host!==l&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!zr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ht.MOCK_USER;else{f=sP(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new q(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ht(g)}t._authCredentials=new D2(new W0(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ui(this.firestore,e,this._query)}}class $e{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $e(this.firestore,e,this._key)}toJSON(){return{type:$e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ma(n,$e._jsonSchema))return new $e(e,r||null,new G(pe.fromString(n.referencePath)))}}$e._jsonSchemaVersion="firestore/documentReference/1.0",$e._jsonSchema={type:ze("string",$e._jsonSchemaVersion),referencePath:ze("string")};class Vr extends Ui{constructor(e,n,r){super(e,n,qm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $e(this.firestore,null,new G(e))}withConverter(e){return new Vr(this.firestore,e,this._path)}}function At(t,e,...n){if(t=De(t),G0("collection","path",e),t instanceof Lc){const r=pe.fromString(e,...n);return rE(r),new Vr(t,null,r)}{if(!(t instanceof $e||t instanceof Vr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return rE(r),new Vr(t.firestore,null,r)}}function Jl(t,e,...n){if(t=De(t),arguments.length===1&&(e=Um.newId()),G0("doc","path",e),t instanceof Lc){const r=pe.fromString(e,...n);return nE(r),new $e(t,null,new G(r))}{if(!(t instanceof $e||t instanceof Vr))throw new q(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pe.fromString(e,...n));return nE(r),new $e(t.firestore,t instanceof Vr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="AsyncQueue";class GE{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new zI(this,"async_queue_retry"),this.lc=()=>{const r=Wh();r&&H(WE,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=Wh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=Wh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new vi;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Hs(e))throw e;H(WE,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,tr("INTERNAL UNHANDLED ERROR: ",KE(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=ip.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&Y(47125,{Rc:KE(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function KE(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ta extends Lc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new GE,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new GE(e),this._firestoreClient=void 0,await e}}}function FD(t,e){const n=typeof t=="object"?t:Mm(),r=typeof t=="string"?t:Mu,i=Vi(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rP("firestore");s&&MD(i,...s)}return i}function sT(t){if(t._terminated)throw new q(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UD(t),t._firestoreClient}function UD(t){var r,i,s,o;const e=t._freezeSettings(),n=VD(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new ND(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gt(at.fromBase64String(e))}catch(n){throw new q(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Gt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ma(e,Gt._jsonSchema))return Gt.fromBase64String(e.bytes)}}Gt._jsonSchemaVersion="firestore/bytes/1.0",Gt._jsonSchema={type:ze("string",Gt._jsonSchemaVersion),bytes:ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:bn._jsonSchemaVersion}}static fromJSON(e){if(Ma(e,bn._jsonSchema))return new bn(e.latitude,e.longitude)}}bn._jsonSchemaVersion="firestore/geoPoint/1.0",bn._jsonSchema={type:ze("string",bn._jsonSchemaVersion),latitude:ze("number"),longitude:ze("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ma(e,cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new cn(e.vectorValues);throw new q(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cn._jsonSchemaVersion="firestore/vectorValue/1.0",cn._jsonSchema={type:ze("string",cn._jsonSchemaVersion),vectorValues:ze("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zD=/^__.*__$/;class $D{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fa(e,this.data,n,this.fieldTransforms)}}class oT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function aT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:t})}}class cp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new cp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return qu(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(aT(this.dataSource)&&zD.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class BD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Dc(e)}V(e,n,r,i=!1){return new cp({dataSource:e,methodName:n,targetDoc:r,path:it.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hp(t){const e=t._freezeSettings(),n=Dc(t._databaseId);return new BD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jD(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);fp("Data must be an object, but it was:",o,r);const l=lT(r,o);let u,h;if(s.merge)u=new Ft(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const g=xs(e,p,n);if(!o.contains(g))throw new q(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);hT(f,g)||f.push(g)}u=new Ft(f),h=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,h=o.fieldTransforms;return new $D(new Ct(l),u,h)}class Mc extends Vc{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}class dp extends Vc{_toFieldTransform(e){return new kN(e.path,new _a)}isEqual(e){return e instanceof dp}}function HD(t,e,n,r){const i=t.V(1,e,n);fp("Data must be an object, but it was:",i,r);const s=[],o=Ct.empty();Jr(r,(u,h)=>{const f=cT(e,u,n);h=De(h);const p=i.Sc(f);if(h instanceof Mc)s.push(f);else{const g=ja(h,p);g!=null&&(s.push(f),o.set(f,g))}});const l=new Ft(s);return new oT(o,l,i.fieldTransforms)}function qD(t,e,n,r,i,s){const o=t.V(1,e,n),l=[xs(e,r,n)],u=[i];if(s.length%2!=0)throw new q(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)l.push(xs(e,s[g])),u.push(s[g+1]);const h=[],f=Ct.empty();for(let g=l.length-1;g>=0;--g)if(!hT(h,l[g])){const S=l[g];let C=u[g];C=De(C);const P=o.Sc(S);if(C instanceof Mc)h.push(S);else{const D=ja(C,P);D!=null&&(h.push(S),f.set(S,D))}}const p=new Ft(h);return new oT(f,p,o.fieldTransforms)}function WD(t,e,n,r=!1){return ja(n,t.V(r?4:3,e))}function ja(t,e){if(uT(t=De(t)))return fp("Unsupported field value:",e,t),lT(t,e);if(t instanceof Vc)return function(r,i){if(!aT(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ja(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return SN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:$u(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$u(i.serializer,s)}}if(r instanceof bn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Gt)return{bytesValue:CI(i.serializer,r._byteString)};if(r instanceof $e){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Qm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof cn)return function(o,l){const u=o instanceof cn?o.toArray():o;return{mapValue:{fields:{[nI]:{stringValue:rI},[Fu]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw l.Dc("VectorValues must only contain numeric values.");return Wm(l.serializer,f)})}}}}}}(r,i);if(LI(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Sc(r)}`)}(t,e)}function lT(t,e){const n={};return Y0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jr(t,(r,i)=>{const s=ja(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function uT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof bn||t instanceof Gt||t instanceof $e||t instanceof Vc||t instanceof cn||LI(t))}function fp(t,e,n){if(!uT(n)||!K0(n)){const r=Sc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function xs(t,e,n){if((e=De(e))instanceof up)return e._internalPath;if(typeof e=="string")return cT(t,e);throw qu("Field path arguments must be of type string or ",t,!1,void 0,n)}const GD=new RegExp("[~\\*/\\[\\]]");function cT(t,e,n){if(e.search(GD)>=0)throw qu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new up(...e.split("."))._internalPath}catch{throw qu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new q(V.INVALID_ARGUMENT,l+t+u)}function hT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KD{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Fu].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>xe(o.doubleValue));return new cn(n)}convertGeoPoint(e){return new bn(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ga(e));default:return null}}convertTimestamp(e){const n=Br(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pe.fromString(e);he(xI(r),9688,{name:e});const i=new ya(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT extends KD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $e(this.firestore,null,n)}}function Lt(){return new dp("serverTimestamp")}const QE="@firebase/firestore",YE="4.14.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xs("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QD extends fT{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new q(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mp{}class mT extends mp{}function fi(t,e,...n){let r=[];e instanceof mp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof gp).length,l=s.filter(u=>u instanceof pp).length;if(o>1||o>0&&l>0)throw new q(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class pp extends mT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pp(e,n,r)}_apply(e){const n=this._parse(e);return pT(e._query,n),new Ui(e.firestore,e.converter,uf(e._query,n))}_parse(e){const n=hp(e.firestore);return function(s,o,l,u,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new q(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){ZE(p,f);const C=[];for(const P of p)C.push(XE(u,s,P));g={arrayValue:{values:C}}}else g=XE(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||ZE(p,f),g=WD(l,o,p,f==="in"||f==="not-in");return Ue.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class gp extends mp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new gp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)pT(o,u),o=uf(o,u)}(e._query,n),new Ui(e.firestore,e.converter,uf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yp extends mT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new yp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new va(s,o)}(e._query,this._field,this._direction);return new Ui(e.firestore,e.converter,gN(e._query,n))}}function mi(t,e="asc"){const n=e,r=xs("orderBy",t);return yp._create(r,n)}function XE(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new q(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!hI(e)&&n.indexOf("/")!==-1)throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(pe.fromString(n));if(!G.isDocumentKey(r))throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hE(t,new G(r))}if(n instanceof $e)return hE(t,n._key);throw new q(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Sc(n)}.`)}function ZE(t,e){if(!Array.isArray(t)||t.length===0)throw new q(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function pT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function JD(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wi extends fT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(xs("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wi._jsonSchemaVersion="firestore/documentSnapshot/1.0",wi._jsonSchema={type:ze("string",wi._jsonSchemaVersion),bundleSource:ze("string","DocumentSnapshot"),bundleName:ze("string"),bundle:ze("string")};class Xl extends wi{data(e={}){return super.data(e)}}class Es{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Xl(this._firestore,this._userDataWriter,r.key,r,new Lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Lo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:XD(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new q(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Es._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Um.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Es._jsonSchemaVersion="firestore/querySnapshot/1.0",Es._jsonSchema={type:ze("string",Es._jsonSchemaVersion),bundleSource:ze("string","QuerySnapshot"),bundleName:ze("string"),bundle:ze("string")};function Kh(t,e,n,...r){t=_i(t,$e);const i=_i(t.firestore,Ta),s=hp(i);let o;return o=typeof(e=De(e))=="string"||e instanceof up?qD(s,"updateDoc",t._key,e,n,r):HD(s,"updateDoc",t._key,e),gT(i,[o.toMutation(t._key,Pn.exists(!0))])}function li(t,e){const n=_i(t.firestore,Ta),r=Jl(t),i=JD(t.converter,e),s=hp(t.firestore);return gT(n,[jD(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pn.exists(!1))]).then(()=>r)}function pi(t,...e){var h,f,p;t=De(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||JE(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(JE(e[r])){const g=e[r];e[r]=(h=g.next)==null?void 0:h.bind(g),e[r+1]=(f=g.error)==null?void 0:f.bind(g),e[r+2]=(p=g.complete)==null?void 0:p.bind(g)}let s,o,l;if(t instanceof $e)o=_i(t.firestore,Ta),l=qm(t._key.path),s={next:g=>{e[r]&&e[r](ZD(o,t,g))},error:e[r+1],complete:e[r+2]};else{const g=_i(t,Ui);o=_i(g.firestore,Ta),l=g._query;const S=new dT(o);s={next:C=>{e[r]&&e[r](new Es(o,S,g,C))},error:e[r+1],complete:e[r+2]},YD(t._query)}const u=sT(o);return OD(u,l,i,s)}function gT(t,e){const n=sT(t);return xD(n,e)}function ZD(t,e,n){const r=n.docs.get(e._key),i=new dT(t);return new wi(t,i,e._key,r,new Lo(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){N2($s),Ln(new dn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ta(new O2(r.getProvider("auth-internal")),new V2(o,r.getProvider("app-check-internal")),Z2(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Yt(QE,YE,e),Yt(QE,YE,"esm2020")})();var eO="firebase",tO="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt(eO,tO,"app");const yT="@firebase/installations",Ep="0.6.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=1e4,vT=`w:${Ep}`,_T="FIS_v2",nO="https://firebaseinstallations.googleapis.com/v1",rO=60*60*1e3,iO="installations",sO="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ni=new Li(iO,sO,oO);function wT(t){return t instanceof pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT({projectId:t}){return`${nO}/projects/${t}/installations`}function TT(t){return{token:t.token,requestStatus:2,expiresIn:lO(t.expiresIn),creationTime:Date.now()}}async function ST(t,e){const r=(await e.json()).error;return Ni.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aO(t,{refreshToken:e}){const n=AT(t);return n.append("Authorization",uO(e)),n}async function RT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lO(t){return Number(t.replace("s","000"))}function uO(t){return`${_T} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=IT(t),i=AT(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:_T,appId:t.appId,sdkVersion:vT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await RT(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:TT(h.authToken)}}else throw await ST("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=/^[cdef][\w-]{21}$/,wf="";function fO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=mO(t);return dO.test(n)?n:wf}catch{return wf}}function mO(t){return hO(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=new Map;function PT(t,e){const n=Fc(t);NT(n,e),pO(n,e)}function NT(t,e){const n=CT.get(t);if(n)for(const r of n)r(e)}function pO(t,e){const n=gO();n&&n.postMessage({key:t,fid:e}),yO()}let gi=null;function gO(){return!gi&&"BroadcastChannel"in self&&(gi=new BroadcastChannel("[Firebase] FID Change"),gi.onmessage=t=>{NT(t.data.key,t.data.fid)}),gi}function yO(){CT.size===0&&gi&&(gi.close(),gi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO="firebase-installations-database",vO=1,bi="firebase-installations-store";let Qh=null;function vp(){return Qh||(Qh=L0(EO,vO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bi)}}})),Qh}async function Wu(t,e){const n=Fc(t),i=(await vp()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&PT(t,e.fid),e}async function bT(t){const e=Fc(t),r=(await vp()).transaction(bi,"readwrite");await r.objectStore(bi).delete(e),await r.done}async function Uc(t,e){const n=Fc(t),i=(await vp()).transaction(bi,"readwrite"),s=i.objectStore(bi),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&PT(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t){let e;const n=await Uc(t.appConfig,r=>{const i=_O(r),s=wO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===wf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function _O(t){const e=t||{fid:fO(),registrationStatus:0};return DT(e)}function wO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Ni.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=IO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:TO(t)}:{installationEntry:e}}async function IO(t,e){try{const n=await cO(t,e);return Wu(t.appConfig,n)}catch(n){throw wT(n)&&n.customData.serverCode===409?await bT(t.appConfig):await Wu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function TO(t){let e=await ev(t.appConfig);for(;e.registrationStatus===1;)await kT(100),e=await ev(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _p(t);return r||n}return e}function ev(t){return Uc(t,e=>{if(!e)throw Ni.create("installation-not-found");return DT(e)})}function DT(t){return SO(t)?{fid:t.fid,registrationStatus:0}:t}function SO(t){return t.registrationStatus===1&&t.registrationTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO({appConfig:t,heartbeatServiceProvider:e},n){const r=RO(t,n),i=aO(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:vT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await RT(()=>fetch(r,l));if(u.ok){const h=await u.json();return TT(h)}else throw await ST("Generate Auth Token",u)}function RO(t,{fid:e}){return`${IT(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(t,e=!1){let n;const r=await Uc(t.appConfig,s=>{if(!OT(s))throw Ni.create("not-registered");const o=s.authToken;if(!e&&PO(o))return s;if(o.requestStatus===1)return n=kO(t,e),s;{if(!navigator.onLine)throw Ni.create("app-offline");const l=bO(s);return n=CO(t,l),l}});return n?await n:r.authToken}async function kO(t,e){let n=await tv(t.appConfig);for(;n.authToken.requestStatus===1;)await kT(100),n=await tv(t.appConfig);const r=n.authToken;return r.requestStatus===0?wp(t,e):r}function tv(t){return Uc(t,e=>{if(!OT(e))throw Ni.create("not-registered");const n=e.authToken;return DO(n)?{...e,authToken:{requestStatus:0}}:e})}async function CO(t,e){try{const n=await AO(t,e),r={...e,authToken:n};return await Wu(t.appConfig,r),n}catch(n){if(wT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bT(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Wu(t.appConfig,r)}throw n}}function OT(t){return t!==void 0&&t.registrationStatus===2}function PO(t){return t.requestStatus===2&&!NO(t)}function NO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rO}function bO(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function DO(t){return t.requestStatus===1&&t.requestTime+ET<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OO(t){const e=t,{installationEntry:n,registrationPromise:r}=await _p(e);return r?r.catch(console.error):wp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,e=!1){const n=t;return await LO(n),(await wp(n,e)).token}async function LO(t){const{registrationPromise:e}=await _p(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){if(!t||!t.options)throw Yh("App Configuration");if(!t.name)throw Yh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Yh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Yh(t){return Ni.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT="installations",MO="installations-internal",FO=t=>{const e=t.getProvider("app").getImmediate(),n=VO(e),r=Vi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UO=t=>{const e=t.getProvider("app").getImmediate(),n=Vi(e,xT).getImmediate();return{getId:()=>OO(n),getToken:i=>xO(n,i)}};function zO(){Ln(new dn(xT,FO,"PUBLIC")),Ln(new dn(MO,UO,"PRIVATE"))}zO();Yt(yT,Ep);Yt(yT,Ep,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="analytics",$O="firebase_id",BO="origin",jO=60*1e3,HO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ip="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Tc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},$t=new Li("analytics","Analytics",qO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){if(!t.startsWith(Ip)){const e=$t.create("invalid-gtag-resource",{gtagURL:t});return wt.warn(e.message),""}return t}function LT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function GO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function KO(t,e){const n=GO("firebase-js-sdk-policy",{createScriptURL:WO}),r=document.createElement("script"),i=`${Ip}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function QO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function YO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await LT(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){wt.error(l)}t("config",i,s)}async function JO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await LT(n);for(const u of o){const h=l.find(p=>p.measurementId===u),f=h&&e[h.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){wt.error(s)}}function XO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await JO(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await YO(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){wt.error(l)}}return i}function ZO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=XO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function ex(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Ip)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=30,nx=1e3;class rx{constructor(e={},n=nx){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VT=new rx;function ix(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function sx(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:ix(n)},i=HO.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw $t.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function ox(t,e=VT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw $t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw $t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new ux;return setTimeout(async()=>{l.abort()},jO),MT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function MT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VT){var l;const{appId:s,measurementId:o}=t;try{await ax(r,e)}catch(u){if(o)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await sx(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!lx(h)){if(i.deleteThrottleMetadata(s),o)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw u}const f=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?Hy(n,i.intervalMillis,tx):Hy(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,p),wt.debug(`Calling attemptFetch again in ${f} millis`),MT(t,p,r,i)}}function ax(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r($t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function lx(t){if(!(t instanceof pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ux{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cx(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function hx(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(){if(xm())try{await Lm()}catch(t){return wt.warn($t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return wt.warn($t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fx(t,e,n,r,i,s,o){const l=ox(t);l.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>wt.error(g)),e.push(l);const u=dx().then(g=>{if(g)return r.getId()}),[h,f]=await Promise.all([l,u]);ex(s)||KO(s,h.measurementId),i("js",new Date);const p=(o==null?void 0:o.config)??{};return p[BO]="firebase",p.update=!0,f!=null&&(p[$O]=f),i("config",h.measurementId,p),h.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e){this.app=e}_delete(){return delete vs[this.app.options.appId],Promise.resolve()}}let vs={},nv=[];const rv={};let Jh="dataLayer",px="gtag",iv,Tp,sv=!1;function gx(){const t=[];if(Om()&&t.push("This is a browser extension environment."),b0()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=$t.create("invalid-analytics-context",{errorInfo:e});wt.warn(n.message)}}function yx(t,e,n){gx();const r=t.options.appId;if(!r)throw $t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw $t.create("no-api-key");if(vs[r]!=null)throw $t.create("already-exists",{id:r});if(!sv){QO(Jh);const{wrappedGtag:s,gtagCore:o}=ZO(vs,nv,rv,Jh,px);Tp=s,iv=o,sv=!0}return vs[r]=fx(t,nv,rv,e,iv,Jh,n),new mx(t)}function Ex(t=Mm()){t=De(t);const e=Vi(t,Gu);return e.isInitialized()?e.getImmediate():vx(t)}function vx(t,e={}){const n=Vi(t,Gu);if(n.isInitialized()){const i=n.getImmediate();if(zr(e,n.getOptions()))return i;throw $t.create("already-initialized")}return n.initialize({options:e})}async function _x(){if(Om()||!b0()||!xm())return!1;try{return await Lm()}catch{return!1}}function wx(t,e,n){t=De(t),hx(Tp,vs[t.app.options.appId],e,n).catch(r=>wt.error(r))}function Ix(t,e,n,r){t=De(t),cx(Tp,vs[t.app.options.appId],e,n,r).catch(i=>wt.error(i))}const ov="@firebase/analytics",av="0.10.22";function Tx(){Ln(new dn(Gu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return yx(r,i,n)},"PUBLIC")),Ln(new dn("analytics-internal",t,"PRIVATE")),Yt(ov,av),Yt(ov,av,"esm2020");function t(e){try{const n=e.getProvider(Gu).getImmediate();return{logEvent:(r,i,s)=>Ix(n,r,i,s),setUserProperties:(r,i)=>wx(n,r,i)}}catch(n){throw $t.create("interop-component-reg-failed",{reason:n})}}}Tx();function FT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sx=FT,UT=new Li("auth","Firebase",FT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Tc("@firebase/auth");function Ax(t,...e){Ku.logLevel<=ae.WARN&&Ku.warn(`Auth (${$s}): ${t}`,...e)}function Zl(t,...e){Ku.logLevel<=ae.ERROR&&Ku.error(`Auth (${$s}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,...e){throw Sp(t,...e)}function Dn(t,...e){return Sp(t,...e)}function zT(t,e,n){const r={...Sx(),[e]:n};return new Li("auth","Firebase",r).create(e,{appName:t.name})}function Mr(t){return zT(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return UT.create(t,...e)}function Q(t,e,...n){if(!t)throw Sp(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zl(e),new Error(e)}function rr(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Rx(){return lv()==="http:"||lv()==="https:"}function lv(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rx()||Om()||"connection"in navigator)?navigator.onLine:!0}function Cx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,rr(n>e,"Short delay should be less than long delay!"),this.isMobile=oP()||uP()}get(){return kx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t,e){rr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bx=new Ha(3e4,6e4);function zi(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Zr(t,e,n,r,i={}){return BT(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=La({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return lP()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Va(t.emulatorConfig.host)&&(h.credentials="include"),$T.fetch()(await jT(t,t.config.apiHost,n,l),h)})}async function BT(t,e,n){t._canInitEmulator=!1;const r={...Px,...e};try{const i=new Ox(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw bl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw zT(t,f,h);mn(t,f)}}catch(i){if(i instanceof pn)throw i;mn(t,"network-request-failed",{message:String(i)})}}async function zc(t,e,n,r,i={}){const s=await Zr(t,e,n,r,i);return"mfaPendingCredential"in s&&mn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function jT(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Ap(t.config,i):`${t.config.apiScheme}://${i}`;return Nx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function Dx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ox{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dn(this.auth,"network-request-failed")),bx.get())})}}function bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dn(t,e,r);return i.customData._tokenResponse=n,i}function uv(t){return t!==void 0&&t.enterprise!==void 0}class xx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Lx(t,e){return Zr(t,"GET","/v2/recaptchaConfig",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vx(t,e){return Zr(t,"POST","/v1/accounts:delete",e)}async function Qu(t,e){return Zr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mx(t,e=!1){const n=De(t),r=await n.getIdToken(e),i=Rp(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qo(Xh(i.auth_time)),issuedAtTime:Qo(Xh(i.iat)),expirationTime:Qo(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function Rp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zl("JWT malformed, contained fewer than 3 sections"),null;try{const i=k0(n);return i?JSON.parse(i):(Zl("Failed to decode base64 JWT payload"),null)}catch(i){return Zl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cv(t){const e=Rp(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&Fx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Fx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ux{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qo(this.lastLoginAt),this.creationTime=Qo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Sa(t,Qu(e,{idToken:n}));Q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(p=i.providerUserInfo)!=null&&p.length?HT(i.providerUserInfo):[],o=$x(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Tf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function zx(t){const e=De(t);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $x(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function HT(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bx(t,e){const n=await BT(t,{},async()=>{const r=La({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await jT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&Va(t.emulatorConfig.host)&&(u.credentials="include"),$T.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function jx(t,e){return Zr(t,"POST","/v2/accounts:revokeToken",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const n=cv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Bx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _s;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class on{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Ux(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Tf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Sa(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mx(this,e)}reload(){return zx(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new on({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(Mr(this.auth));const e=await this.getIdToken();return await Sa(this,Vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:S,providerData:C,stsTokenManager:P}=n;Q(p&&P,e,"internal-error");const D=_s.fromJSON(this.name,P);Q(typeof p=="string",e,"internal-error"),mr(r,e.name),mr(i,e.name),Q(typeof g=="boolean",e,"internal-error"),Q(typeof S=="boolean",e,"internal-error"),mr(s,e.name),mr(o,e.name),mr(l,e.name),mr(u,e.name),mr(h,e.name),mr(f,e.name);const _=new on({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:D,createdAt:h,lastLoginAt:f});return C&&Array.isArray(C)&&(_.providerData=C.map(v=>({...v}))),u&&(_._redirectEventId=u),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new _s;i.updateFromServerResponse(n);const s=new on({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?HT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _s;l.updateFromIdToken(r);const u=new on({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Tf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new Map;function Gn(t){rr(t instanceof Function,"Expected a class definition");let e=hv.get(t);return e?(rr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qT.type="NONE";const dv=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=eu(this.userKey,i.apiKey,s),this.fullPersistenceKey=eu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Qu(this.auth,{idToken:e}).catch(()=>{});return n?on._fromGetAccountInfoResponse(this.auth,n,e):null}return on._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(Gn(dv),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Gn(dv);const o=eu(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await Qu(e,{idToken:f}).catch(()=>{});if(!g)break;p=await on._fromGetAccountInfoResponse(e,g,f)}else p=on._fromJSON(e,f);h!==s&&(l=p),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ws(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new ws(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(QT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(WT(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(JT(e))return"Blackberry";if(XT(e))return"Webos";if(GT(e))return"Safari";if((e.includes("chrome/")||KT(e))&&!e.includes("edge/"))return"Chrome";if(YT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function WT(t=pt()){return/firefox\//i.test(t)}function GT(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function KT(t=pt()){return/crios\//i.test(t)}function QT(t=pt()){return/iemobile/i.test(t)}function YT(t=pt()){return/android/i.test(t)}function JT(t=pt()){return/blackberry/i.test(t)}function XT(t=pt()){return/webos/i.test(t)}function kp(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Hx(t=pt()){var e;return kp(t)&&!!((e=window.navigator)!=null&&e.standalone)}function qx(){return cP()&&document.documentMode===10}function ZT(t=pt()){return kp(t)||YT(t)||XT(t)||JT(t)||/windows phone/i.test(t)||QT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t,e=[]){let n;switch(t){case"Browser":n=fv(pt());break;case"Worker":n=`${fv(pt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$s}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e={}){return Zr(t,"GET","/v2/passwordPolicy",zi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=6;class Qx{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Kx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mv(this),this.idTokenSubscription=new mv(this),this.beforeStateQueue=new Wx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=UT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Qu(this,{idToken:e}),r=await on._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(sn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Cx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(Mr(this));const n=e?De(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(Mr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(Mr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Gx(this),n=new Qx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Li("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await jx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[Gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Ax(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Gs(t){return De(t)}class mv{constructor(e){this.auth=e,this.observer=null,this.addObserver=gP(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Jx(t){$c=t}function t1(t){return $c.loadJS(t)}function Xx(){return $c.recaptchaEnterpriseScript}function Zx(){return $c.gapiScript}function eL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tL{constructor(){this.enterprise=new nL}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nL{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rL="recaptcha-enterprise",n1="NO_RECAPTCHA";class iL{constructor(e){this.type=rL,this.auth=Gs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Lx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new xx(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;uv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(n1)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tL().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&uv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Xx();u.length!==0&&(u+=l),t1(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function pv(t,e,n,r=!1,i=!1){const s=new iL(t);let o;if(i)o=n1;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function gv(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await pv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t,e){const n=Vi(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(zr(s,e??{}))return i;mn(i,"already-initialized")}return n.initialize({options:e})}function oL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aL(t,e,n){const r=Gs(t);Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=r1(e),{host:o,port:l}=lL(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Q(zr(h,r.config.emulator)&&zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Va(o)?D0(`${s}//${o}${u}`):uL()}function r1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lL(t){const e=r1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yv(o)}}}function yv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uL(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function cL(t,e){return Zr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hL(t,e){return zc(t,"POST","/v1/accounts:signInWithPassword",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dL(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}async function fL(t,e){return zc(t,"POST","/v1/accounts:signInWithEmailLink",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends Cp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Aa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Aa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(e,n,"signInWithPassword",hL);case"emailLink":return dL(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gv(e,r,"signUpPassword",cL);case"emailLink":return fL(e,{idToken:n,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e){return zc(t,"POST","/v1/accounts:signInWithIdp",zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mL="http://localhost";class Di extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Di(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Di(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Is(e,n)}buildRequest(){const e={requestUri:mL,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=La(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gL(t){const e=No(bo(t)).link,n=e?No(bo(e)).deep_link_id:null,r=No(bo(t)).deep_link_id;return(r?No(bo(r)).link:null)||r||n||e||t}class Pp{constructor(e){const n=No(bo(e)),r=n.apiKey??null,i=n.oobCode??null,s=pL(n.mode??null);Q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=gL(e);try{return new Pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,n){return Aa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pp.parseLink(n);return Q(r,"argument-error"),Aa._fromEmailAndCode(e,r.code,r.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends i1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends qa{constructor(){super("facebook.com")}static credential(e){return Di._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Di._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends qa{constructor(){super("github.com")}static credential(e){return Di._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.GITHUB_SIGN_IN_METHOD="github.com";wr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends qa{constructor(){super("twitter.com")}static credential(e,n){return Di._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.TWITTER_SIGN_IN_METHOD="twitter.com";Ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await on._fromIdTokenResponse(e,r,i),o=Ev(r);return new Ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ev(r);return new Ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ev(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends pn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ju.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ju(e,n,r,i)}}function s1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ju._fromErrorAndOperation(t,s,e,r):s})}async function yL(t,e,n=!1){const r=await Sa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ls._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EL(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(Mr(r));const i="reauthenticate";try{const s=await Sa(t,s1(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Rp(s.idToken);Q(o,r,"internal-error");const{sub:l}=o;return Q(t.uid===l,r,"user-mismatch"),Ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o1(t,e,n=!1){if(sn(t.app))return Promise.reject(Mr(t));const r="signIn",i=await s1(t,r,e),s=await Ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vL(t,e){return o1(Gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _L(t){const e=Gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function wL(t,e,n){return sn(t.app)?Promise.reject(Mr(t)):vL(De(t),Ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_L(t),r})}function IL(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function TL(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function SL(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function AL(t){return De(t).signOut()}const Xu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xu,"1"),this.storage.removeItem(Xu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=1e3,kL=10;class l1 extends a1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ZT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);qx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kL):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},RL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l1.type="LOCAL";const CL=l1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1 extends a1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u1.type="SESSION";const c1=u1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await PL(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Np("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(){return window}function bL(t){On().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(){return typeof On().WorkerGlobalScope<"u"&&typeof On().importScripts=="function"}async function DL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function xL(){return h1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1="firebaseLocalStorageDb",LL=1,Zu="firebaseLocalStorage",f1="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function jc(t,e){return t.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function VL(){const t=indexedDB.deleteDatabase(d1);return new Wa(t).toPromise()}function Sf(){const t=indexedDB.open(d1,LL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zu,{keyPath:f1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zu)?e(r):(r.close(),await VL(),e(await Sf()))})})}async function vv(t,e,n){const r=jc(t,!0).put({[f1]:e,value:n});return new Wa(r).toPromise()}async function ML(t,e){const n=jc(t,!1).get(e),r=await new Wa(n).toPromise();return r===void 0?null:r.value}function _v(t,e){const n=jc(t,!0).delete(e);return new Wa(n).toPromise()}const FL=800,UL=3;class m1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Sf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bc._getInstance(xL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await DL(),!this.activeServiceWorker)return;this.sender=new NL(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Sf();return await vv(e,Xu,"1"),await _v(e,Xu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>vv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ML(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_v(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=jc(i,!1).getAll();return new Wa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m1.type="LOCAL";const zL=m1;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $L(t,e){return e?Gn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BL(t){return o1(t.auth,new bp(t),t.bypassAuthState)}function jL(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),EL(n,new bp(t),t.bypassAuthState)}async function HL(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),yL(n,new bp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BL;case"linkViaPopup":case"linkViaRedirect":return HL;case"reauthViaPopup":case"reauthViaRedirect":return jL;default:mn(this.auth,"internal-error")}}resolve(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qL=new Ha(2e3,1e4);class us extends p1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){rr(this.filter.length===1,"Popup operations only handle one event");const e=Np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qL.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WL="pendingRedirect",tu=new Map;class GL extends p1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tu.get(this.auth._key());if(!e){try{const r=await KL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tu.set(this.auth._key(),e)}return this.bypassAuthState||tu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KL(t,e){const n=JL(e),r=YL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QL(t,e){tu.set(t._key(),e)}function YL(t){return Gn(t._redirectPersistence)}function JL(t){return eu(WL,t.config.apiKey,t.name)}async function XL(t,e,n=!1){if(sn(t.app))return Promise.reject(Mr(t));const r=Gs(t),i=$L(r,e),o=await new GL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZL=10*60*1e3;class eV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g1(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZL&&this.cachedEventUids.clear(),this.cachedEventUids.has(wv(e))}saveEventToCache(e){this.cachedEventUids.add(wv(e)),this.lastProcessedEventTime=Date.now()}}function wv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nV(t,e={}){return Zr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iV=/^https?/;async function sV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nV(t);for(const n of e)try{if(oV(n))return}catch{}mn(t,"unauthorized-domain")}function oV(t){const e=If(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iV.test(n))return!1;if(rV.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=new Ha(3e4,6e4);function Iv(){const t=On().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lV(t){return new Promise((e,n)=>{var i,s,o;function r(){Iv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Iv(),n(Dn(t,"network-request-failed"))},timeout:aV.get()})}if((s=(i=On().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=On().gapi)!=null&&o.load)r();else{const l=eL("iframefcb");return On()[l]=()=>{gapi.load?r():n(Dn(t,"network-request-failed"))},t1(`${Zx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nu=null,e})}let nu=null;function uV(t){return nu=nu||lV(t),nu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cV=new Ha(5e3,15e3),hV="__/auth/iframe",dV="emulator/auth/iframe",fV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pV(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ap(e,dV):`https://${t.config.authDomain}/${hV}`,r={apiKey:e.apiKey,appName:t.name,v:$s},i=mV.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${La(r).slice(1)}`}async function gV(t){const e=await uV(t),n=On().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:pV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fV,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dn(t,"network-request-failed"),l=On().setTimeout(()=>{s(o)},cV.get());function u(){On().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EV=500,vV=600,_V="_blank",wV="http://localhost";class Tv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IV(t,e,n,r=EV,i=vV){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...yV,width:r.toString(),height:i.toString(),top:s,left:o},h=pt().toLowerCase();n&&(l=KT(h)?_V:n),WT(h)&&(e=e||wV,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[S,C])=>`${g}${S}=${C},`,"");if(Hx(h)&&l!=="_self")return TV(e||"",l),new Tv(null);const p=window.open(e||"",l,f);Q(p,t,"popup-blocked");try{p.focus()}catch{}return new Tv(p)}function TV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV="__/auth/handler",AV="emulator/auth/handler",RV=encodeURIComponent("fac");async function Sv(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$s,eventId:i};if(e instanceof i1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof qa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${RV}=${encodeURIComponent(u)}`:"";return`${kV(t)}?${La(l).slice(1)}${h}`}function kV({config:t}){return t.emulator?Ap(t,AV):`https://${t.authDomain}/${SV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="webStorageSupport";class CV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c1,this._completeRedirectFn=XL,this._overrideRedirectResult=QL}async _openPopup(e,n,r,i){var o;rr((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Sv(e,n,r,If(),i);return IV(e,s,Np())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Sv(e,n,r,If(),i);return bL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(rr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gV(e),r=new eV(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zh,{type:Zh},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[Zh];s!==void 0&&n(!!s),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ZT()||GT()||kp()}}const PV=CV;var Av="@firebase/auth",Rv="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DV(t){Ln(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e1(t)},h=new Yx(r,i,s,u);return oL(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ln(new dn("auth-internal",e=>{const n=Gs(e.getProvider("auth").getImmediate());return(r=>new NV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yt(Av,Rv,bV(t)),Yt(Av,Rv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OV=5*60,xV=N0("authIdTokenMaxAge")||OV;let kv=null;const LV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xV)return;const i=n==null?void 0:n.token;kv!==i&&(kv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VV(t=Mm()){const e=Vi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sL(t,{popupRedirectResolver:PV,persistence:[zL,CL,c1]}),r=N0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LV(s.toString());TL(n,o,()=>o(n.currentUser)),IL(n,l=>o(l))}}const i=C0("auth");return i&&aL(n,`http://${i}`),n}function MV(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Jx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DV("Browser");const FV={apiKey:"AIzaSyA7Q_ledAm4ug6ubvzwbVh46z6J5QnlLxU",authDomain:"pp-furniture2026.firebaseapp.com",projectId:"pp-furniture2026",storageBucket:"pp-furniture2026.firebasestorage.app",messagingSenderId:"711438968099",appId:"1:711438968099:web:ad2bd01b336096a5401896",measurementId:"G-YN7FBKY80C"},Dp=V0(FV),ed=VV(Dp),tt=FD(Dp);_x().then(t=>{t&&Ex(Dp)}).catch(()=>{});function Cv(t,e=0){return{id:t.id||t.role||String(e),role:t.role||"",name:t.name||"",image:t.image||J.team,order:Number(t.order??e+1),isActive:t.isActive!==!1}}function UV(){const t=[["DESIGNER","ออกแบบ 3D"],["PROJECT MANAGER","ควบคุมงาน"],["PRODUCTION TEAM","ทีมผลิต"],["INSTALLATION TEAM","ทีมติดตั้ง"]],[e,n]=c.useState([]);c.useEffect(()=>{const i=fi(At(tt,"teamMembers"),mi("order","asc"));return pi(i,s=>{n(s.docs.map(o=>Cv({id:o.id,...o.data()})))},s=>{console.error("Could not load team members",s)})},[]);const r=(e.length>0?e:t.map(([i,s],o)=>Cv({role:i,name:s,image:J.team},o))).filter(i=>i.isActive).sort((i,s)=>i.order-s.order);return c.createElement("main",{className:"page"},c.createElement("section",{className:"hero sub-hero"},c.createElement("img",{src:J.kitchen,alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content split"},c.createElement("div",null,c.createElement("p",{className:"breadcrumb"},"HOME / ABOUT US"),c.createElement("h1",null,"About Us",c.createElement("br",null),c.createElement("span",null,"เกี่ยวกับเรา")),c.createElement("div",{className:"gold-line"}),c.createElement("p",{className:"lead"},"PP HOME FURNITURE คือผู้เชี่ยวชาญด้านการออกแบบและรับทำเฟอร์นิเจอร์บิวท์อินครบวงจร ด้วยทีมงานมืออาชีพที่ใส่ใจทุกรายละเอียด เพื่อสร้างพื้นที่ที่ตอบโจทย์ชีวิตของคุณได้อย่างลงตัว"),c.createElement("p",{className:"signature"},"PP Home Furniture")),c.createElement("div",{className:"mission-panel"},[["OUR MISSION","ออกแบบและสร้างสรรค์เฟอร์นิเจอร์ที่ผสานความสวยงาม ฟังก์ชัน และคุณภาพ เพื่อยกระดับคุณภาพชีวิตของลูกค้าในทุกพื้นที่"],["OUR VISION","เป็นผู้นำด้านเฟอร์นิเจอร์บิวท์อินครบวงจร ที่ลูกค้าไว้วางใจ และบอกต่อมากที่สุด"]].map(([i,s])=>c.createElement("article",{key:i},c.createElement("strong",null,i),c.createElement("p",null,s)))))),c.createElement("section",{className:"site-shell stat-band"},Ou.map(i=>{const s=i.icon;return c.createElement("article",{key:i.value},c.createElement(s,null),c.createElement("strong",null,i.value),c.createElement("p",null,i.label),c.createElement("span",null,i.desc))})),c.createElement("section",{className:"site-shell values-section"},c.createElement("img",{src:J.media,alt:""}),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR VALUES"),c.createElement("h2",null,"คุณค่าที่เรายึดมั่น"),c.createElement("div",{className:"values-grid"},HC.map(i=>{const s=i.icon;return c.createElement("article",{key:i.title},c.createElement(s,null),c.createElement("h3",null,i.title),c.createElement("p",null,i.desc))})))),c.createElement("section",{className:"site-shell timeline-process"},c.createElement("div",{className:"journey"},c.createElement("p",{className:"eyebrow"},"OUR JOURNEY"),c.createElement("h2",null,"เส้นทางของเรา"),["2014 เริ่มต้นธุรกิจ","2017 ขยายทีมงาน","2020 เติบโตอย่างมั่นคง","2024 มุ่งสู่บริการครบวงจร"].map(i=>c.createElement("p",{key:i},i))),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR PROCESS"),c.createElement("h2",null,"ขั้นตอนการทำงานของเรา"),c.createElement("div",{className:"mini-process"},_c.slice(0,6).map(i=>{const s=i.icon;return c.createElement("article",{key:i.no},c.createElement(s,null),c.createElement("small",null,i.no),c.createElement("span",null,i.title))})))),c.createElement("section",{className:"site-shell team-quote"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR TEAM"),c.createElement("h2",null,"ทีมงานของเรา"),c.createElement("div",{className:"team-grid"},r.map(i=>c.createElement("article",{key:i.id},c.createElement("img",{src:i.image,alt:i.name||i.role}),c.createElement("span",null,i.role),c.createElement("strong",null,i.name))))),c.createElement("aside",{className:"quote-panel"},c.createElement("p",null,"บ้านที่ดี เริ่มต้นจากการออกแบบที่เข้าใจ และสร้างด้วยความใส่ใจในทุกรายละเอียด"),c.createElement("span",null,"– PP HOME FURNITURE –"),c.createElement(be,{to:"/contact",className:"gold-btn"},"ปรึกษาฟรี / รับใบเสนอราคา ",c.createElement(zt,{size:18})))))}function Pv(t,e=0){var n;return{id:t.id||t.title,icon:typeof t.icon=="string"?t.icon:((n=t.icon)==null?void 0:n.displayName)||"PackageCheck",title:t.title||"",thai:t.thai||"",desc:t.desc||"",details:t.details||t.desc||"",image:t.image||J.kitchen,order:Number(t.order??e+1),isActive:t.isActive!==!1}}function Nv(t){return Du[t]||Du.PackageCheck}function zV(){const[t,e]=c.useState([]),[n,r]=c.useState(null);c.useEffect(()=>{const o=fi(At(tt,"services"),mi("order","asc"));return pi(o,l=>{e(l.docs.map(u=>Pv({id:u.id,...u.data()})))},l=>{console.error("Could not load services",l)})},[]);const i=(t.length>0?t:S0.map(Pv)).filter(o=>o.isActive).sort((o,l)=>o.order-l.order),s=n||i[0];return c.createElement("main",{className:"page"},c.createElement("section",{className:"hero sub-hero service-hero"},c.createElement("img",{src:J.kitchen,alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content split"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR SERVICES"),c.createElement("h1",null,"Complete Built-in",c.createElement("br",null),"Solutions for Every Space"),c.createElement("h2",null,"บริการออกแบบและผลิตเฟอร์นิเจอร์บิวท์อินครบวงจร"),c.createElement("div",{className:"gold-line"}),c.createElement("p",{className:"lead"},"เราดูแลทุกขั้นตอน ตั้งแต่ให้คำปรึกษา ออกแบบ 3D ผลิตด้วยวัสดุคุณภาพสูง และติดตั้งโดยทีมงานมืออาชีพ เพื่อให้คุณได้พื้นที่ที่สวยงามและใช้งานได้จริง"),c.createElement(be,{to:"/contact",className:"outline-btn"},"ปรึกษาฟรี / รับใบเสนอราคา ",c.createElement(zt,{size:18}))),c.createElement("div",{className:"hero-feature-card compact"},i.slice(0,4).map(o=>{const l=Nv(o.icon);return c.createElement("button",{className:"feature-row service-feature-button",key:o.id,onClick:()=>r(o)},c.createElement(l,null),c.createElement("div",null,c.createElement("strong",null,o.title),c.createElement("p",null,o.thai)))})))),c.createElement("section",{className:"site-shell section-block"},c.createElement("div",{className:"section-title with-action"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR SERVICES"),c.createElement("h2",null,"บริการของเรา")),c.createElement("p",{className:"section-note"},"คลิกการ์ดบริการเพื่อดูรายละเอียดเพิ่มเติม")),c.createElement("div",{className:"service-grid"},i.map(o=>{const l=Nv(o.icon);return c.createElement("button",{className:"service-card service-card-button",key:o.id,onClick:()=>r(o)},c.createElement("img",{src:o.image,alt:""}),c.createElement("div",null,c.createElement(l,null),c.createElement("span",null,o.title),c.createElement("h3",null,o.thai),c.createElement("p",null,o.desc)))})),s&&c.createElement("article",{className:"service-detail-panel"},c.createElement("button",{className:"service-detail-close",onClick:()=>r(null),"aria-label":"ปิดรายละเอียด"},c.createElement(vc,{size:18})),c.createElement("img",{src:s.image,alt:""}),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"SERVICE DETAIL"),c.createElement("h2",null,s.thai),c.createElement("span",null,s.title),c.createElement("p",null,s.details||s.desc),c.createElement(be,{to:"/contact",className:"gold-btn"},"สนใจบริการนี้ ",c.createElement(zt,{size:18}))))),c.createElement("section",{className:"site-shell process-line-section"},c.createElement("p",{className:"eyebrow"},"OUR PROCESS"),c.createElement("h2",null,"ขั้นตอนการทำงาน"),c.createElement("div",{className:"process-line"},_c.map(o=>{const l=o.icon;return c.createElement("article",{key:o.no},c.createElement(l,null),c.createElement("small",null,o.no),c.createElement("h3",null,o.title),c.createElement("p",null,o.desc))}))),c.createElement("section",{className:"site-shell cta-banner"},c.createElement("img",{src:J.media,alt:""}),c.createElement("div",null,c.createElement("h2",null,"Ready to Transform Your Space?"),c.createElement("p",null,"ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ พร้อมคำแนะนำจากทีมงานมืออาชีพ")),c.createElement(be,{to:"/contact",className:"gold-btn"},"ติดต่อเราเลย ",c.createElement(zt,{size:18}))))}const $V=["ALL","RESIDENTIAL","CONDOMINIUM","HOUSE","KITCHEN","WARDROBE","LIVING ROOM","BEDROOM","WORKSPACE"],BV={KITCHEN:"/images/portfolio/kitchen.png",WARDROBE:"/images/portfolio/wardrobe.png","LIVING ROOM":"/images/portfolio/living-room.png",BEDROOM:"/images/portfolio/bedroom.png",WORKSPACE:"/images/portfolio/home-office.png",HOUSE:"/images/portfolio/house.png",CONDOMINIUM:"/images/portfolio/condo.png",RESIDENTIAL:"/images/portfolio/workspace.png"};function jV(t){return t.image&&!t.image.includes("images.unsplash.com")?t.image:BV[t.category]||J.kitchen}function bv(t,e=0){const n=wc.find(r=>r.title===t.title||r.category===t.category);return{id:t.id||t.title,category:t.category||"RESIDENTIAL",title:t.title||"",thai:t.thai||"",style:t.style||"",desc:t.desc||t.details||(n==null?void 0:n.desc)||"",details:t.details||t.desc||(n==null?void 0:n.details)||(n==null?void 0:n.desc)||"",location:t.location||"",year:t.year||"",image:jV(t),order:Number(t.order??e+1),isActive:t.isActive!==!1}}function HV(){const[t,e]=c.useState([]),[n,r]=c.useState("ALL"),[i,s]=c.useState(!1),[o,l]=c.useState(null);c.useEffect(()=>{const f=fi(At(tt,"portfolio"),mi("order","asc"));return pi(f,p=>{e(p.docs.map(g=>bv({id:g.id,...g.data()})))},p=>{console.error("Could not load portfolio",p)})},[]);const u=(t.length>0?t:wc.map(bv)).filter(f=>f.isActive).filter(f=>n==="ALL"||f.category===n).sort((f,p)=>i?p.order-f.order:f.order-p.order),h=o||u[0];return c.createElement("main",{className:"page"},c.createElement("section",{className:"hero sub-hero portfolio-hero"},c.createElement("img",{src:"/images/portfolio/kitchen.png",alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content"},c.createElement("p",{className:"eyebrow"},"OUR PORTFOLIO"),c.createElement("h1",null,"Our Portfolio",c.createElement("br",null),c.createElement("span",null,"ผลงานของเรา")),c.createElement("div",{className:"gold-line"}),c.createElement("p",{className:"lead"},"รวมผลงานออกแบบและบิวท์อินเฟอร์นิเจอร์ที่เราดูแลอย่างละเอียด ตั้งแต่การวางคอนเซ็ปต์ เลือกวัสดุ ผลิต ติดตั้ง ไปจนถึงการส่งมอบพื้นที่ที่ใช้งานได้จริงและสวยงามในทุกวัน"),c.createElement("div",{className:"hero-stats"},Ou.map(f=>{const p=f.icon;return c.createElement("article",{key:f.value},c.createElement(p,null),c.createElement("strong",null,f.value),c.createElement("span",null,f.label))})))),c.createElement("section",{className:"site-shell portfolio-panel"},c.createElement("div",{className:"filter-row"},c.createElement("div",null,$V.map(f=>c.createElement("button",{className:n===f?"active":"",key:f,onClick:()=>{r(f),l(null)}},f))),c.createElement("button",{className:i?"active":"",onClick:()=>s(f=>!f)},"LATEST")),c.createElement("div",{className:"portfolio-grid"},u.map(f=>c.createElement("button",{className:"project-card project-card-button",key:f.id,onClick:()=>l(f)},c.createElement("img",{src:f.image,alt:f.thai||f.title}),c.createElement("div",null,c.createElement("span",null,f.category),c.createElement("h3",null,f.title),c.createElement("p",null,f.thai),c.createElement("small",null,"ดูรายละเอียด →"))))),u.length===0&&c.createElement("div",{className:"admin-empty"},"ยังไม่มีผลงานในหมวดนี้"),h&&c.createElement("article",{className:"service-detail-panel portfolio-detail-panel"},c.createElement("button",{className:"service-detail-close",onClick:()=>l(null),"aria-label":"ปิดรายละเอียด"},c.createElement(vc,{size:18})),c.createElement("img",{src:h.image,alt:h.thai||h.title}),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"PROJECT DETAIL"),c.createElement("h2",null,h.thai||h.title),c.createElement("span",null,h.title," · ",h.style||h.category),c.createElement("p",null,h.details||h.desc||"รายละเอียดผลงานจะถูกแสดงที่นี่เมื่อเพิ่มข้อมูลใน Firebase"),c.createElement("div",{className:"portfolio-meta"},h.category&&c.createElement("strong",null,h.category),h.location&&c.createElement("strong",null,h.location),h.year&&c.createElement("strong",null,h.year)),c.createElement(be,{to:"/contact",className:"gold-btn"},"ปรึกษางานลักษณะนี้ ",c.createElement(zt,{size:18}))))),c.createElement("section",{className:"site-shell cta-banner wide"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"LET'S WORK TOGETHER"),c.createElement("h2",null,"Ready to Transform Your Space?"),c.createElement("p",null,"ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ ด้วยเฟอร์นิเจอร์บิวท์อินที่ตอบโจทย์ทุกไลฟ์สไตล์")),c.createElement("div",{className:"cta-points"},c.createElement("span",null,"FREE CONSULTATION"),c.createElement("span",null,"CUSTOM DESIGN"),c.createElement("span",null,"QUALITY GUARANTEE")),c.createElement(be,{to:"/contact",className:"gold-btn"},"ติดต่อเราเลย ",c.createElement(zt,{size:18}))))}function qV(){return c.createElement("main",{className:"page"},c.createElement("section",{className:"hero sub-hero process-hero"},c.createElement("img",{src:J.kitchen,alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content"},c.createElement("p",{className:"eyebrow"},"OUR PROCESS"),c.createElement("h1",null,"Our Process",c.createElement("br",null),c.createElement("span",null,"ขั้นตอนการทำงานของเรา")),c.createElement("div",{className:"gold-line"}),c.createElement("p",{className:"lead"},"เราให้ความสำคัญในทุกขั้นตอน เพื่อให้มั่นใจว่าทุกชิ้นงานออกมาได้มาตรฐาน สวยงาม และตรงตามความต้องการของคุณมากที่สุด"),c.createElement(be,{to:"/contact",className:"outline-btn"},"ปรึกษาฟรี / รับใบเสนอราคา ",c.createElement(zt,{size:18})))),c.createElement("section",{className:"site-shell process-page-grid"},c.createElement("aside",null,c.createElement("strong",null,"8"),c.createElement("h2",null,"ขั้นตอน",c.createElement("br",null),"การทำงาน"),c.createElement("p",null,"ครบทุกขั้นตอน มั่นใจได้ในคุณภาพ งานติดตั้ง และบริการหลังการขาย")),c.createElement("div",{className:"process-card-grid"},_c.map(t=>{const e=t.icon;return c.createElement("article",{className:"process-card",key:t.no},c.createElement("img",{src:[J.design,J.office,J.materials,J.workshop,J.install,J.kitchen,J.media,J.living][Number(t.no)-1],alt:""}),c.createElement("small",null,t.no),c.createElement(e,null),c.createElement("h3",null,t.title),c.createElement("p",null,t.desc))}))),c.createElement("section",{className:"site-shell cta-banner"},c.createElement("img",{src:J.living,alt:""}),c.createElement("div",null,c.createElement("h2",null,"Ready to Transform Your Space?"),c.createElement("p",null,"ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ ปรึกษาฟรี ไม่มีค่าใช้จ่าย")),c.createElement(be,{to:"/contact",className:"gold-btn"},"ติดต่อเราเลย ",c.createElement(zt,{size:18}))))}const y1=[{id:"built-in-kitchen-ideas",category:"INTERIOR TIPS",title:"5 ไอเดียออกแบบห้องครัวบิวท์อิน สวย ครบ จบในที่เดียว",date:"May 12, 2024",read:"5 min read",image:"/images/portfolio/kitchen.png",excerpt:"รวมแนวคิดสำคัญสำหรับครัวบิวท์อินที่ใช้งานจริงได้ทุกวันและยังดูสวยเป็นระเบียบ",content:["ห้องครัวบิวท์อินที่ดีควรเริ่มจากการเข้าใจวิธีใช้งานของคนในบ้านก่อน ไม่ใช่เริ่มจากหน้าตาเพียงอย่างเดียว ลองดูว่าทำอาหารบ่อยแค่ไหน มีอุปกรณ์อะไรที่ใช้ประจำ และต้องการพื้นที่เก็บของมากน้อยเพียงใด","แนวคิดแรกคือการแบ่งโซนให้ชัดเจน ได้แก่ โซนล้าง โซนเตรียมอาหาร โซนปรุงอาหาร และโซนจัดเก็บ เมื่อแต่ละจุดอยู่ในตำแหน่งที่ต่อเนื่องกัน การใช้งานจะลื่นไหลและลดความวุ่นวายระหว่างทำอาหาร","อีกจุดที่ช่วยให้ครัวดูดีขึ้นมากคือการซ่อนของที่ไม่จำเป็นไว้หลังหน้าบานตู้ แล้วเหลือชั้นเปิดไว้สำหรับของตกแต่งหรือของที่ใช้บ่อย วิธีนี้ทำให้ครัวดูสะอาดตา แต่ยังไม่แข็งจนเกินไป","สุดท้ายควรเลือกวัสดุที่ดูแลรักษาง่าย ทนความชื้น และเข้ากับโทนบ้านโดยรวม เพราะครัวเป็นพื้นที่ที่ใช้งานหนัก หากเลือกวัสดุเหมาะสมตั้งแต่แรก จะช่วยให้ครัวสวยและใช้งานได้นานขึ้น"]},{id:"built-in-material-guide",category:"BUILT-IN IDEAS",title:"วิธีเลือกวัสดุบิวท์อิน ให้ทน ใช้งานได้นาน และดูแลง่าย",date:"Apr 28, 2024",read:"4 min read",image:J.materials,excerpt:"วัสดุที่ดีช่วยให้เฟอร์นิเจอร์บิวท์อินสวย ทน และเหมาะกับการใช้งานของแต่ละพื้นที่",content:["การเลือกวัสดุบิวท์อินควรมองทั้งความสวย ความทนทาน และลักษณะการใช้งานจริงของแต่ละห้อง พื้นที่ครัว ห้องน้ำ หรือมุมที่มีความชื้นควรใช้วัสดุที่ทนความชื้นมากกว่าห้องนอนหรือห้องนั่งเล่น","ผิวหน้าบานเป็นส่วนที่มองเห็นมากที่สุด จึงควรเลือกโทนและผิวสัมผัสให้เข้ากับบ้าน เช่น ลายไม้ให้ความอบอุ่น สีเรียบช่วยให้ดูโมเดิร์น ส่วนผิวด้านจะช่วยลดรอยนิ้วมือและดูแลได้ง่ายกว่าในหลายกรณี","นอกจากแผ่นวัสดุหลักแล้ว อุปกรณ์ฮาร์ดแวร์ก็สำคัญไม่แพ้กัน บานพับ รางลิ้นชัก และระบบเปิดปิดควรเลือกแบบคุณภาพดี เพราะเป็นส่วนที่ถูกใช้งานซ้ำทุกวัน","วัสดุที่เหมาะสมไม่จำเป็นต้องแพงที่สุดเสมอไป แต่ควรเหมาะกับงบประมาณ พฤติกรรมการใช้งาน และสภาพพื้นที่จริง การวางแผนตั้งแต่ต้นจะช่วยลดปัญหาซ่อมแซมในระยะยาว"]},{id:"walk-in-closet-ideas",category:"DESIGN INSPIRATION",title:"ไอเดียตู้เสื้อผ้าบิวท์อิน สวยหรู เพิ่มพื้นที่จัดเก็บ",date:"Apr 15, 2024",read:"6 min read",image:"/images/portfolio/wardrobe.png",excerpt:"ออกแบบตู้เสื้อผ้าให้เก็บของได้เป็นระบบ พร้อมเพิ่มความรู้สึกหรูให้ห้องแต่งตัว",content:["ตู้เสื้อผ้าบิวท์อินที่ดีควรช่วยให้การแต่งตัวง่ายขึ้น เริ่มจากการแยกประเภทของเสื้อผ้า เช่น เสื้อแขวนยาว เสื้อพับ กระเป๋า รองเท้า และเครื่องประดับ แล้วค่อยกำหนดช่องเก็บให้เหมาะกับของแต่ละแบบ","ถ้าต้องการความหรูหรา หน้าบานกระจก ไฟซ่อน และชั้นโชว์ช่วยยกระดับภาพรวมได้มาก แสงไฟภายในตู้ไม่ได้มีไว้เพื่อความสวยเท่านั้น แต่ยังช่วยให้มองเห็นสีและรายละเอียดของเสื้อผ้าได้ชัดขึ้น","พื้นที่ลิ้นชักควรมีหลายขนาดเพื่อรองรับของชิ้นเล็ก ส่วนช่องแขวนควรมีความสูงพอเหมาะ ไม่สูงหรือต่ำเกินไป เพราะจะมีผลต่อการใช้งานจริงทุกวัน","สิ่งสำคัญคืออย่าออกแบบให้โชว์ทุกอย่างจนดูรก ควรผสมพื้นที่ปิดและพื้นที่เปิดอย่างสมดุล เพื่อให้ห้องแต่งตัวสวยเป็นระเบียบแม้ในวันที่ใช้งานหนัก"]},{id:"home-office-built-in",category:"INTERIOR TIPS",title:"ออกแบบโฮมออฟฟิศบิวท์อิน เพิ่มความโปรดักทีฟในการทำงาน",date:"Mar 30, 2024",read:"5 min read",image:"/images/portfolio/home-office.png",excerpt:"มุมทำงานที่ดีควรทั้งสวย สงบ และจัดเก็บของได้ครบ เพื่อช่วยให้โฟกัสได้นานขึ้น",content:["โฮมออฟฟิศที่ใช้งานดีควรเริ่มจากตำแหน่งโต๊ะ แสงธรรมชาติ และการเดินสายไฟ หากวางแผนตั้งแต่แรก จะช่วยให้พื้นที่ทำงานสะอาดตาและไม่มีสายไฟรบกวนสายตา","ชั้นวางและตู้เก็บของควรอยู่ใกล้มือแต่ไม่เบียดพื้นที่นั่ง การมีช่องเก็บเอกสาร อุปกรณ์ และของใช้ประจำจะช่วยให้โต๊ะทำงานโล่งขึ้น ทำให้เริ่มงานได้ง่ายและโฟกัสได้ดีขึ้น","โทนสีของมุมทำงานควรสบายตา เช่น ไม้อ่อน สีขาว สีเขียวหม่น หรือสีเทาอุ่น เพราะเป็นพื้นที่ที่ต้องอยู่กับมันหลายชั่วโมง สีที่นิ่งและไม่รบกวนจะช่วยให้ทำงานได้นานกว่า","งานบิวท์อินช่วยให้พื้นที่ขนาดเล็กกลายเป็นมุมทำงานจริงได้ โดยใช้ผนังให้เกิดประโยชน์สูงสุดและจัดทุกอย่างให้อยู่ในตำแหน่งที่ใช้งานง่าย"]},{id:"built-in-surface-materials",category:"MATERIALS",title:"วัสดุปิดผิวสำหรับงานบิวท์อิน แบบไหนเหมาะกับคุณ?",date:"Mar 18, 2024",read:"5 min read",image:J.materials,excerpt:"รู้จักวัสดุปิดผิวแต่ละแบบ เพื่อเลือกให้เหมาะกับสไตล์บ้านและการใช้งานจริง",content:["วัสดุปิดผิวคือส่วนที่กำหนดภาพลักษณ์ของงานบิวท์อินมากที่สุด ไม่ว่าจะเป็นลายไม้ สีเรียบ ผิวด้าน ผิวเงา หรือผิวหิน แต่ละแบบให้ความรู้สึกและการดูแลที่แตกต่างกัน","ลายไม้เหมาะกับบ้านที่ต้องการความอบอุ่น ส่วนสีเรียบเหมาะกับงานโมเดิร์นและมินิมอล หากต้องการความหรูสามารถเลือกผิวลายหินหรือผิวที่มีมิติร่วมกับไฟซ่อนได้","พื้นที่ที่ใช้งานหนักควรเลือกผิวที่เช็ดง่ายและทนรอย ส่วนพื้นที่โชว์ เช่น ชั้นวางหรือผนังตกแต่ง สามารถเลือกวัสดุที่เน้นความสวยงามได้มากขึ้น","ก่อนตัดสินใจควรดูตัวอย่างวัสดุจริงภายใต้แสงของห้อง เพราะสีและผิวสัมผัสอาจเปลี่ยนไปตามแสง การเห็นของจริงช่วยให้เลือกได้มั่นใจขึ้น"]},{id:"hidden-built-in-functions",category:"BUILT-IN IDEAS",title:"รวมฟังก์ชันลับในงานบิวท์อิน ที่ช่วยให้ชีวิตสะดวกขึ้น",date:"Mar 05, 2024",read:"5 min read",image:"/images/portfolio/condo.png",excerpt:"ฟังก์ชันเล็ก ๆ ในงานบิวท์อินที่ช่วยให้บ้านเป็นระเบียบและใช้งานง่ายกว่าเดิม",content:["งานบิวท์อินที่ดีไม่ได้มีแค่ความสวย แต่ควรซ่อนฟังก์ชันที่ช่วยให้ชีวิตประจำวันสะดวกขึ้น เช่น ช่องเก็บปลั๊กไฟ ช่องเก็บสายชาร์จ ตู้เก็บอุปกรณ์ทำความสะอาด หรือพื้นที่เก็บของตามมุมที่มักถูกปล่อยว่าง","ในคอนโดหรือบ้านพื้นที่จำกัด การทำเฟอร์นิเจอร์ให้มีหลายหน้าที่ช่วยประหยัดพื้นที่ได้มาก เช่น ม้านั่งที่เปิดเก็บของได้ โต๊ะทำงานพับเก็บ หรือชั้นวางที่รวมไฟซ่อนไว้ในตัว","อีกฟังก์ชันที่หลายคนมองข้ามคือระบบแบ่งช่องภายในลิ้นชัก ถ้าจัดสัดส่วนดีตั้งแต่แรก ของชิ้นเล็กจะไม่ปนกัน และการหยิบใช้งานจะง่ายขึ้นมาก","ฟังก์ชันเหล่านี้อาจดูเล็ก แต่เมื่อใช้งานทุกวันจะเห็นผลชัด บ้านจะเป็นระเบียบขึ้นและลดเวลาหาของได้จริง"]},{id:"tv-wall-built-in",category:"DESIGN INSPIRATION",title:"แต่งผนังทีวีบิวท์อินยังไง ให้สวยและไม่ตกยุค",date:"Feb 20, 2024",read:"4 min read",image:"/images/portfolio/living-room.png",excerpt:"ผนังทีวีควรสวย สบายตา และมีพื้นที่เก็บของที่ช่วยให้ห้องนั่งเล่นเรียบร้อย",content:["ผนังทีวีเป็นจุดที่มองเห็นบ่อยที่สุดในห้องนั่งเล่น การออกแบบจึงควรเน้นความเรียบและสมดุล ไม่ควรมีรายละเอียดเยอะจนแย่งความสนใจจากการใช้งานจริง","การซ่อนสายไฟและอุปกรณ์ต่าง ๆ เป็นหัวใจสำคัญ เพราะช่วยให้ผนังทีวีดูสะอาดและพรีเมียมขึ้น ตู้ล่างควรมีพื้นที่เก็บกล่องทีวี รีโมต และของใช้เล็ก ๆ เพื่อไม่ให้ห้องดูรก","ถ้าต้องการให้ผนังดูมีมิติ สามารถใช้ไฟซ่อน ชั้นโชว์ หรือวัสดุต่างผิวเข้ามาช่วย แต่ควรเลือกให้เข้ากับโทนบ้านโดยรวม เพื่อให้ดูสวยได้นานและไม่ตกยุคเร็ว","ผนังทีวีที่ดีควรทำให้ห้องนั่งเล่นใช้งานง่ายขึ้น ดูอบอุ่นขึ้น และยังคงความเรียบร้อยในชีวิตประจำวัน"]},{id:"built-in-maintenance",category:"MAINTENANCE",title:"การดูแลรักษาเฟอร์นิเจอร์บิวท์อิน ให้อยู่กับบ้านได้นาน",date:"Feb 10, 2024",read:"5 min read",image:J.cleaning,excerpt:"ดูแลเฟอร์นิเจอร์บิวท์อินอย่างถูกวิธี ช่วยยืดอายุการใช้งานและคงความสวยได้นาน",content:["เฟอร์นิเจอร์บิวท์อินจะอยู่กับบ้านได้นานขึ้นถ้าดูแลอย่างถูกวิธี เริ่มจากการทำความสะอาดด้วยผ้านุ่มชุบน้ำหมาด ๆ และหลีกเลี่ยงน้ำยาที่มีฤทธิ์กัดกร่อนรุนแรง","พื้นที่ที่มีความชื้น เช่น ครัวหรือบริเวณใกล้หน้าต่าง ควรเช็ดให้แห้งหลังใช้งาน และเปิดให้อากาศถ่ายเทบ้าง เพื่อลดโอกาสเกิดกลิ่นอับหรือความเสียหายจากความชื้นสะสม","บานพับ รางลิ้นชัก และอุปกรณ์เปิดปิดควรตรวจเป็นระยะ หากเริ่มมีเสียงหรือฝืด ควรแก้ไขตั้งแต่เนิ่น ๆ เพื่อป้องกันความเสียหายที่ลามไปถึงโครงสร้างตู้","การดูแลเล็ก ๆ อย่างสม่ำเสมอช่วยให้เฟอร์นิเจอร์บิวท์อินยังดูดี ใช้งานลื่น และรักษามูลค่าของบ้านได้ในระยะยาว"]}];function WV(){const t=["ALL","INTERIOR TIPS","BUILT-IN IDEAS","DESIGN INSPIRATION","MATERIALS","MAINTENANCE"],[e,n]=x.useState("ALL"),[r,i]=x.useState(""),[s,o]=x.useState(null),l=x.useMemo(()=>y1.filter(u=>{const h=e==="ALL"?!0:u.category===e,f=u.title.toLowerCase().includes(r.toLowerCase());return h&&f}),[e,r]);return c.createElement("main",{className:"page"},c.createElement("section",{className:"hero sub-hero blog-hero"},c.createElement("img",{src:J.media,alt:"",className:"hero-bg"}),c.createElement("div",{className:"hero-shade"}),c.createElement("div",{className:"site-shell hero-content"},c.createElement("p",{className:"eyebrow"},"OUR BLOG"),c.createElement("h1",null,"Design Ideas,",c.createElement("br",null),"Built for Living"),c.createElement("div",{className:"gold-line"}),c.createElement("p",{className:"lead"},"แรงบันดาลใจในการออกแบบตกแต่งภายใน"))),c.createElement("section",{className:"site-shell blog-panel"},c.createElement("div",{className:"blog-tools"},c.createElement("div",{className:"filter-row"},c.createElement("div",null,t.map(u=>c.createElement("button",{key:u,onClick:()=>{n(u),o(null)},className:e===u?"active":""},u)))),c.createElement("label",null,c.createElement(w0,{size:18}),c.createElement("input",{type:"text",placeholder:"Search articles...",value:r,onChange:u=>i(u.target.value)}))),s&&c.createElement("article",{className:"blog-inline-detail"},c.createElement("button",{className:"service-detail-close",onClick:()=>o(null),"aria-label":"ปิดบทความ"},c.createElement(vc,{size:18})),c.createElement("img",{src:s.image,alt:s.title}),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},s.category),c.createElement("h2",null,s.title),c.createElement("div",{className:"blog-detail-meta"},c.createElement("span",null,c.createElement(Pu,{size:16}),s.date),c.createElement("span",null,c.createElement(Nu,{size:16}),s.read)),c.createElement("p",{className:"blog-detail-lead"},s.excerpt),s.content.map(u=>c.createElement("p",{key:u},u)))),c.createElement("div",{className:"blog-grid"},l.map(u=>c.createElement("button",{type:"button",className:"blog-card",key:u.id,onClick:()=>o(u)},c.createElement("img",{src:u.image,alt:u.title}),c.createElement("div",null,c.createElement("span",null,u.category),c.createElement("h3",null,u.title),c.createElement("p",{className:"blog-excerpt"},u.excerpt),c.createElement("p",null,c.createElement(Pu,{size:14}),u.date,c.createElement(Nu,{size:14}),u.read),c.createElement("strong",{className:"blog-read-more"},"อ่านบทความ")))))))}function GV(){const{id:t}=qR(),e=y1.find(n=>n.id===t);return e?React.createElement("main",{className:"page"},React.createElement("article",{className:"site-shell blog-detail-shell"},React.createElement(be,{to:"/blog",className:"blog-back-link"},React.createElement(zy,{size:18}),"กลับไปหน้าบทความ"),React.createElement("header",{className:"blog-detail-header"},React.createElement("p",{className:"eyebrow"},e.category),React.createElement("h1",null,e.title),React.createElement("div",{className:"blog-detail-meta"},React.createElement("span",null,React.createElement(Pu,{size:16}),e.date),React.createElement("span",null,React.createElement(Nu,{size:16}),e.read))),React.createElement("img",{className:"blog-detail-image",src:e.image,alt:e.title}),React.createElement("div",{className:"blog-detail-content"},React.createElement("p",{className:"blog-detail-lead"},e.excerpt),e.content.map(n=>React.createElement("p",{key:n},n))))):React.createElement("main",{className:"page"},React.createElement("section",{className:"site-shell blog-detail-shell"},React.createElement(be,{to:"/blog",className:"blog-back-link"},React.createElement(zy,{size:18}),"กลับไปหน้าบทความ"),React.createElement("h1",null,"ไม่พบบทความนี้"),React.createElement("p",null,"บทความที่คุณเปิดอาจถูกย้ายหรือยังไม่ได้เพิ่มลงในระบบ")))}const Dv={name:"",phone:"",email:"",service:"",message:""},KV="13.550896390570566,100.699127645502",Ov=`https://www.google.com/maps/search/?api=1&query=${KV}`;function QV(){const[t,e]=c.useState(Dv),[n,r]=c.useState("idle"),[i,s]=c.useState(""),o=f=>{const{name:p,value:g}=f.target;e(S=>({...S,[p]:g}))},l=async f=>{f.preventDefault(),r("submitting"),s("");try{await li(At(tt,"contactMessages"),{...t,createdAt:Lt(),source:"website-contact-page"}),e(Dv),r("success"),s("ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด")}catch(p){console.error("Could not submit contact form",p),r("error"),s("ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")}},u=[{icon:Ec,label:"PHONE",value:"088-090-4970",href:"tel:0880904970",action:"โทรหาเรา"},{icon:yc,label:"EMAIL",value:"permphun@gmail.com",href:"mailto:permphun@gmail.com",action:"ส่งอีเมล"},{icon:ki,label:"LINE OFFICIAL",value:"@ppfurniture",href:"https://line.me/R/ti/p/@ppfurniture",action:"เปิด LINE",external:!0}],h=[{icon:xa,title:"QUALITY PRODUCTS",thai:"สินค้าคุณภาพ"},{icon:OC,title:"MODERN DESIGN",thai:"ดีไซน์ทันสมัย"},{icon:Cm,title:"RELIABLE SERVICE",thai:"บริการที่เชื่อถือได้"},{icon:E0,title:"CRAFTED WITH CARE",thai:"ใส่ใจในทุกรายละเอียด"}];return c.createElement("main",{className:"page contact-page"},c.createElement("section",{className:"site-shell contact-profile-section"},c.createElement("div",{className:"contact-profile-main"},c.createElement("div",{className:"contact-company-head"},c.createElement("img",{src:"/pp-home-logo.png",alt:"PP Home Furniture & Design"}),c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"CONTACT US"),c.createElement("h1",null,"PP HOME FURNITURE & DESIGN"),c.createElement("h2",null,"บริษัท เพิ่มพูน รุ่งเรือง เฟอร์นิเจอร์ จำกัด"),c.createElement("p",null,"Permphun Rungrung Furniture Co., Ltd."))),c.createElement("div",{className:"contact-method-grid"},u.map(f=>{const p=f.icon;return c.createElement("a",{href:f.href,className:"contact-method-card",key:f.label,target:f.external?"_blank":void 0,rel:f.external?"noreferrer":void 0,"aria-label":`${f.action} ${f.value}`},c.createElement("span",null,c.createElement(p,{size:24})),c.createElement("div",null,c.createElement("small",null,f.label),c.createElement("strong",null,f.value)))})),c.createElement("div",{className:"contact-map-panel"},c.createElement("div",{className:"contact-map-heading"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"OUR LOCATION"),c.createElement("h2",null,"Easy to Find,",c.createElement("br",null),"Easy to Reach")),c.createElement("a",{href:Ov,target:"_blank",rel:"noreferrer",className:"outline-btn"},"เปิดแผนที่ ",c.createElement(zt,{size:18}))),c.createElement("a",{className:"contact-map-visual",href:Ov,target:"_blank",rel:"noreferrer","aria-label":"เปิดแผนที่ PP Home Furniture & Design บน Google Maps"},c.createElement("span",{className:"map-road map-road-top"},"ถนน บางนา-ตราด ",c.createElement("b",null,"ไปชลบุรี →")),c.createElement("span",{className:"map-road map-road-middle"},"ถนน เทพารักษ์ ",c.createElement("b",null,"ไปบางบ่อ →")),c.createElement("span",{className:"map-road map-road-bottom"},"ถนน แพรกษา ",c.createElement("b",null,"ไปบางปู →")),c.createElement("span",{className:"map-road map-road-vertical"},"ถนนสุขุมวิทสายเก่า"),c.createElement("span",{className:"map-road map-road-center"},"ซ. สุขุมวิทภาค"),c.createElement("span",{className:"map-place mega"},"MEGA",c.createElement("br",null),"BANGNA"),c.createElement("span",{className:"map-place airport"},"ท่าอากาศยานสุวรรณภูมิ",c.createElement("br",null),"SUVARNABHUMI AIRPORT"),c.createElement("span",{className:"map-place temple"},"วัดแพรกษา"),c.createElement("span",{className:"map-place seven"},"7"),c.createElement("span",{className:"map-company-pin"},c.createElement(bu,{size:34}),c.createElement("strong",null,"บจก. เพิ่มพูน รุ่งเรือง",c.createElement("br",null),"เฟอร์นิเจอร์ จำกัด")))),c.createElement("div",{className:"contact-address-grid"},c.createElement("article",null,c.createElement(bu,null),c.createElement("div",null,c.createElement("h3",null,"OUR ADDRESS"),c.createElement("p",null,"เลขที่ 9/89, 9/98 หมู่ 2 ต.แพรกษาใหม่",c.createElement("br",null),"อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280"),c.createElement("p",null,"9/89, 9/98 Moo 2, Praeksa Mai Subdistrict,",c.createElement("br",null),"Mueang Samut Prakan District,",c.createElement("br",null),"Samut Prakan 10280, Thailand"))),c.createElement("article",null,c.createElement(aC,null),c.createElement("div",null,c.createElement("h3",null,"TAX ID"),c.createElement("p",null,"เลขที่ประจำตัวผู้เสียภาษี 0115566016170"),c.createElement("p",null,"Tax ID 0115566016170"))))),c.createElement("aside",{className:"contact-thank-panel"},c.createElement("div",null,c.createElement("p",{className:"script-word"},"Thank"),c.createElement("strong",null,"YOU"),c.createElement("span",null),c.createElement("h2",null,"THANK YOU",c.createElement("br",null),"FOR YOUR INTEREST"),c.createElement("p",null,"ขอบคุณที่ให้ความไว้วางใจในสินค้าและบริการของเรา")),c.createElement("a",{href:"https://line.me/R/ti/p/@ppfurniture",target:"_blank",rel:"noreferrer",className:"line-chat-card"},c.createElement(ki,{size:34}),c.createElement("strong",null,"SCAN TO CHAT"),c.createElement("p",null,"ติดต่อเราได้ง่าย ๆ ผ่าน LINE @ppfurniture")),c.createElement("div",{className:"question-card"},c.createElement(Pm,{size:42}),c.createElement("h3",null,"HAVE A QUESTION?"),c.createElement("p",null,"เรายินดีให้คำปรึกษาและพร้อมให้บริการคุณ")),c.createElement("img",{src:J.living,alt:""}))),c.createElement("section",{className:"contact-service-bar"},c.createElement("div",{className:"site-shell"},h.map(f=>{const p=f.icon;return c.createElement("article",{key:f.title},c.createElement(p,null),c.createElement("div",null,c.createElement("strong",null,f.title),c.createElement("span",null,f.thai)))}))),c.createElement("section",{className:"site-shell contact-form-section"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"SEND US A MESSAGE"),c.createElement("h2",null,"ให้เราติดต่อกลับ"),c.createElement("p",null,"ฝากข้อมูลของคุณไว้ ทีมงาน PP Home Furniture & Design จะติดต่อกลับเพื่อให้คำปรึกษาเรื่องงานออกแบบ ผลิต และติดตั้งเฟอร์นิเจอร์บิวท์อิน")),c.createElement("form",{className:"contact-form",onSubmit:l},c.createElement("div",{className:"form-row"},c.createElement("label",null,"ชื่อ-นามสกุล *",c.createElement("input",{name:"name",value:t.name,onChange:o,placeholder:"กรอกชื่อ-นามสกุล",required:!0})),c.createElement("label",null,"เบอร์โทรศัพท์ *",c.createElement("input",{name:"phone",value:t.phone,onChange:o,placeholder:"กรอกเบอร์โทรศัพท์",required:!0}))),c.createElement("label",null,"อีเมล",c.createElement("input",{name:"email",type:"email",value:t.email,onChange:o,placeholder:"กรอกอีเมลของคุณ"})),c.createElement("label",null,"บริการที่สนใจ",c.createElement("select",{name:"service",value:t.service,onChange:o},c.createElement("option",{value:"",disabled:!0},"เลือกบริการที่สนใจ"),c.createElement("option",null,"Built-in Furniture"),c.createElement("option",null,"3D Design"),c.createElement("option",null,"Renovation"),c.createElement("option",null,"Furniture & Design Consultation"))),c.createElement("label",null,"รายละเอียดโครงการ",c.createElement("textarea",{name:"message",value:t.message,onChange:o,rows:"5",placeholder:"บอกเราถึงความต้องการของคุณ"})),i&&c.createElement("p",{className:n==="error"?"form-message error":"form-message success"},i),c.createElement("button",{className:"gold-btn",disabled:n==="submitting"},n==="submitting"?"กำลังส่ง...":"ส่งข้อมูล"," ",c.createElement(zt,{size:18})))))}const YV=["RESIDENTIAL","CONDOMINIUM","HOUSE","KITCHEN","WARDROBE","LIVING ROOM","BEDROOM","WORKSPACE"],xv={email:"",password:""},Lv={title:"",thai:"",desc:"",details:"",image:"",icon:"PackageCheck",order:1,isActive:!0},Vv={title:"",thai:"",category:"RESIDENTIAL",style:"",desc:"",details:"",location:"",year:"",image:"",order:1,isActive:!0},Mv={role:"",name:"",image:"",order:1,isActive:!0},JV=[{role:"DESIGNER",name:"ออกแบบ 3D",image:J.team},{role:"PROJECT MANAGER",name:"ควบคุมงาน",image:J.team},{role:"PRODUCTION TEAM",name:"ทีมผลิต",image:J.team},{role:"INSTALLATION TEAM",name:"ทีมติดตั้ง",image:J.team}],XV={"auth/invalid-credential":"อีเมลหรือรหัสผ่านไม่ถูกต้อง","auth/invalid-email":"รูปแบบอีเมลไม่ถูกต้อง","auth/user-disabled":"บัญชีนี้ถูกปิดใช้งาน","auth/user-not-found":"ไม่พบบัญชีนี้ใน Firebase Authentication","auth/wrong-password":"รหัสผ่านไม่ถูกต้อง","auth/too-many-requests":"ลองผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่","auth/network-request-failed":"เชื่อมต่อ Firebase ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต","auth/operation-not-allowed":"ยังไม่ได้เปิด Email/Password provider ใน Firebase Authentication"};function ZV(t){return t!=null&&t.toDate?new Intl.DateTimeFormat("th-TH",{dateStyle:"medium",timeStyle:"short"}).format(t.toDate()):"รอเวลาในระบบ"}function eM(t){return{title:t.title||"",thai:t.thai||"",desc:t.desc||"",details:t.details||t.desc||"",image:t.image||"",icon:t.icon||"PackageCheck",order:Number(t.order||1),isActive:t.isActive!==!1}}function tM(t){return{title:t.title||"",thai:t.thai||"",category:t.category||"RESIDENTIAL",style:t.style||"",desc:t.desc||"",details:t.details||t.desc||"",location:t.location||"",year:t.year||"",image:t.image||"",order:Number(t.order||1),isActive:t.isActive!==!1}}function nM(t){return{role:t.role||"",name:t.name||"",image:t.image||"",order:Number(t.order||1),isActive:t.isActive!==!1}}function rM(){const[t,e]=c.useState(xv),[n,r]=c.useState(null),[i,s]=c.useState(!0),[o,l]=c.useState(!1),[u,h]=c.useState(!1),[f,p]=c.useState(!1),[g,S]=c.useState(!1),[C,P]=c.useState([]),[D,_]=c.useState([]),[v,R]=c.useState([]),[L,F]=c.useState([]),[z,w]=c.useState(Lv),[E,I]=c.useState(Vv),[A,k]=c.useState(Mv),[N,T]=c.useState(""),[ye,Oe]=c.useState(""),[gn,sr]=c.useState(""),[j,K]=c.useState("messages"),[X,te]=c.useState(""),[Ie,me]=c.useState("");c.useEffect(()=>SL(ed,U=>{r(U),s(!1)}),[]),c.useEffect(()=>{if(!n){P([]),_([]),R([]),F([]);return}l(!0);const U=fi(At(tt,"contactMessages"),mi("createdAt","desc")),ce=pi(U,et=>{P(et.docs.map(St=>({id:St.id,...St.data()}))),l(!1)},et=>{console.error("Could not load contact messages",et),te("โหลดข้อมูลลูกค้าไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore"),l(!1)});h(!0);const Ve=fi(At(tt,"services"),mi("order","asc")),Ze=pi(Ve,et=>{_(et.docs.map(St=>({id:St.id,...St.data()}))),h(!1)},et=>{console.error("Could not load services",et),te("โหลดข้อมูลบริการไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore"),h(!1)});p(!0);const yn=fi(At(tt,"portfolio"),mi("order","asc")),En=pi(yn,et=>{R(et.docs.map(St=>({id:St.id,...St.data()}))),p(!1)},et=>{console.error("Could not load portfolio",et),te("โหลดข้อมูลผลงานไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore"),p(!1)});S(!0);const Zs=fi(At(tt,"teamMembers"),mi("order","asc")),qc=pi(Zs,et=>{F(et.docs.map(St=>({id:St.id,...St.data()}))),S(!1)},et=>{console.error("Could not load team members",et),te("โหลดข้อมูลทีมงานไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore"),S(!1)});return()=>{ce(),Ze(),En(),qc()}},[n]);const gt=U=>{const{name:ce,value:Ve}=U.target;e(Ze=>({...Ze,[ce]:Ve}))},zn=async U=>{U.preventDefault(),s(!0),te("");try{await wL(ed,t.email,t.password),e(xv)}catch(ce){console.error("Could not sign in",ce),te(XV[ce.code]||`เข้าสู่ระบบไม่สำเร็จ (${ce.code})`)}finally{s(!1)}},Ot=async()=>{await AL(ed)},Je=U=>{const{checked:ce,name:Ve,type:Ze,value:yn}=U.target;w(En=>({...En,[Ve]:Ze==="checkbox"?ce:yn}))},yt=U=>{const{checked:ce,name:Ve,type:Ze,value:yn}=U.target;I(En=>({...En,[Ve]:Ze==="checkbox"?ce:yn}))},or=U=>{const{checked:ce,name:Ve,type:Ze,value:yn}=U.target;k(En=>({...En,[Ve]:Ze==="checkbox"?ce:yn}))},Ga=()=>{w({...Lv,order:D.length+1}),T("")},Ka=()=>{I({...Vv,order:v.length+1}),Oe("")},Qs=()=>{k({...Mv,order:L.length+1}),sr("")},Ys=U=>{w(eM(U)),T(U.id),K("services"),me("")},Qa=U=>{I(tM(U)),Oe(U.id),K("portfolio"),me("")},Hc=U=>{k(nM(U)),sr(U.id),K("team"),me("")},Js=async U=>{U.preventDefault(),te(""),me("");const ce={...z,image:z.image||J.kitchen,order:Number(z.order||1),updatedAt:Lt()};try{N?(await Kh(Jl(tt,"services",N),ce),me("แก้ไขบริการเรียบร้อยแล้ว")):(await li(At(tt,"services"),{...ce,createdAt:Lt()}),me("เพิ่มบริการใหม่เรียบร้อยแล้ว")),Ga()}catch(Ve){console.error("Could not save service",Ve),te("บันทึกบริการไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules")}},Xs=async U=>{U.preventDefault(),te(""),me("");const ce={...E,image:E.image||J.kitchen,order:Number(E.order||1),updatedAt:Lt()};try{ye?(await Kh(Jl(tt,"portfolio",ye),ce),me("แก้ไขผลงานเรียบร้อยแล้ว")):(await li(At(tt,"portfolio"),{...ce,createdAt:Lt()}),me("เพิ่มผลงานใหม่เรียบร้อยแล้ว")),Ka()}catch(Ve){console.error("Could not save portfolio",Ve),te("บันทึกผลงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules")}},Ya=async U=>{U.preventDefault(),te(""),me("");const ce={...A,image:A.image||J.team,order:Number(A.order||1),updatedAt:Lt()};try{gn?(await Kh(Jl(tt,"teamMembers",gn),ce),me("แก้ไขทีมงานเรียบร้อยแล้ว")):(await li(At(tt,"teamMembers"),{...ce,createdAt:Lt()}),me("เพิ่มทีมงานใหม่เรียบร้อยแล้ว")),Qs()}catch(Ve){console.error("Could not save team member",Ve),te("บันทึกทีมงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules")}},We=async()=>{te(""),me("");try{await Promise.all(S0.map((U,ce)=>{var Ve;return li(At(tt,"services"),{title:U.title,thai:U.thai,desc:U.desc,details:U.desc,image:U.image,icon:((Ve=Object.entries(Du).find(([,Ze])=>Ze===U.icon))==null?void 0:Ve[0])||"PackageCheck",order:ce+1,isActive:!0,createdAt:Lt(),updatedAt:Lt()})})),me("สร้างข้อมูลบริการเริ่มต้นเรียบร้อยแล้ว")}catch(U){console.error("Could not seed services",U),te("สร้างข้อมูลบริการเริ่มต้นไม่สำเร็จ")}},Xe=async()=>{te(""),me("");try{await Promise.all(wc.map((U,ce)=>li(At(tt,"portfolio"),{title:U.title,thai:U.thai,category:U.category||"RESIDENTIAL",style:U.style||"",desc:U.desc||U.thai,details:U.details||`ผลงาน ${U.thai} สไตล์ ${U.style||U.category} ออกแบบให้เหมาะกับพื้นที่จริงและการใช้งานประจำวัน`,location:U.location||"",year:U.year||"",image:U.image,order:ce+1,isActive:!0,createdAt:Lt(),updatedAt:Lt()}))),me("สร้างข้อมูลผลงานเริ่มต้นเรียบร้อยแล้ว")}catch(U){console.error("Could not seed portfolio",U),te("สร้างข้อมูลผลงานเริ่มต้นไม่สำเร็จ")}},$i=async()=>{te(""),me("");try{await Promise.all(JV.map((U,ce)=>li(At(tt,"teamMembers"),{...U,order:ce+1,isActive:!0,createdAt:Lt(),updatedAt:Lt()}))),me("สร้างข้อมูลทีมงานเริ่มต้นเรียบร้อยแล้ว")}catch(U){console.error("Could not seed team members",U),te("สร้างข้อมูลทีมงานเริ่มต้นไม่สำเร็จ")}};return i&&!n?c.createElement("main",{className:"admin-page"},c.createElement("div",{className:"site-shell admin-shell"},c.createElement("div",{className:"admin-card admin-loading"},c.createElement(PC,{className:"admin-spin"}),c.createElement("p",null,"กำลังตรวจสอบสิทธิ์...")))):n?c.createElement("main",{className:"admin-page"},c.createElement("div",{className:"site-shell admin-shell"},c.createElement("section",{className:"admin-heading"},c.createElement("div",null,c.createElement("p",{className:"eyebrow"},"PP HOME FURNITURE"),c.createElement("h1",null,"Admin Dashboard"),c.createElement("p",null,"จัดการข้อความลูกค้า บริการ และผลงานที่แสดงบนหน้าเว็บไซต์")),c.createElement("button",{className:"outline-btn",onClick:Ot},c.createElement(gC,{size:18})," ออกจากระบบ")),(X||Ie)&&c.createElement("p",{className:X?"form-message error":"form-message success"},X||Ie),c.createElement("div",{className:"admin-tabs"},c.createElement("button",{className:j==="messages"?"active":"",onClick:()=>K("messages")},"ข้อความลูกค้า"),c.createElement("button",{className:j==="services"?"active":"",onClick:()=>K("services")},"จัดการบริการ"),c.createElement("button",{className:j==="portfolio"?"active":"",onClick:()=>K("portfolio")},"จัดการผลงาน"),c.createElement("button",{className:j==="team"?"active":"",onClick:()=>K("team")},"จัดการทีมงาน")),c.createElement("section",{className:"admin-stats"},c.createElement("article",null,c.createElement("strong",null,C.length),c.createElement("span",null,"ข้อความทั้งหมด")),c.createElement("article",null,c.createElement("strong",null,D.length),c.createElement("span",null,"บริการใน Firebase")),c.createElement("article",null,c.createElement("strong",null,v.length),c.createElement("span",null,"ผลงานใน Firebase")),c.createElement("article",null,c.createElement("strong",null,L.length),c.createElement("span",null,"ทีมงานใน Firebase")),c.createElement("article",null,c.createElement("strong",null,n.email),c.createElement("span",null,"บัญชีที่กำลังใช้งาน"))),j==="messages"&&c.createElement("section",{className:"admin-messages"},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,"ข้อความลูกค้า"),o&&c.createElement("span",null,"กำลังโหลด...")),!o&&C.length===0?c.createElement("div",{className:"admin-empty"},"ยังไม่มีข้อความจากลูกค้า"):c.createElement("div",{className:"admin-message-grid"},C.map(U=>c.createElement("article",{className:"admin-message-card",key:U.id},c.createElement("div",{className:"admin-message-top"},c.createElement("div",null,c.createElement("h3",null,U.name||"ไม่ระบุชื่อ"),c.createElement("p",null,ZV(U.createdAt))),c.createElement("span",null,U.service||"ไม่ระบุบริการ")),c.createElement("div",{className:"admin-contact-lines"},c.createElement("a",{href:`tel:${U.phone||""}`},c.createElement(Ec,{size:16})," ",U.phone||"-"),c.createElement("a",{href:`mailto:${U.email||""}`},c.createElement(yc,{size:16})," ",U.email||"-")),c.createElement("p",{className:"admin-message-body"},U.message||"ไม่มีรายละเอียดเพิ่มเติม"))))),j==="services"&&c.createElement("section",{className:"admin-services"},c.createElement("form",{className:"admin-service-form",onSubmit:Js},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,N?"แก้ไขบริการ":"เพิ่มบริการใหม่"),c.createElement("button",{type:"button",className:"outline-btn",onClick:Ga},c.createElement(Wi,{size:18})," ล้างฟอร์ม")),c.createElement("div",{className:"admin-form-grid"},c.createElement("label",null,"ชื่ออังกฤษ",c.createElement("input",{name:"title",value:z.title,onChange:Je,required:!0})),c.createElement("label",null,"ชื่อไทย",c.createElement("input",{name:"thai",value:z.thai,onChange:Je,required:!0})),c.createElement("label",null,"รูปภาพ URL",c.createElement("input",{name:"image",value:z.image,onChange:Je,placeholder:J.kitchen})),c.createElement("label",null,"ไอคอน",c.createElement("select",{name:"icon",value:z.icon,onChange:Je},Object.keys(Du).map(U=>c.createElement("option",{key:U,value:U},U)))),c.createElement("label",null,"ลำดับ",c.createElement("input",{name:"order",type:"number",min:"1",value:z.order,onChange:Je})),c.createElement("label",{className:"admin-check"},c.createElement("input",{name:"isActive",type:"checkbox",checked:z.isActive,onChange:Je}),"แสดงบนหน้าเว็บ")),c.createElement("label",null,"คำอธิบายสั้น",c.createElement("textarea",{name:"desc",rows:"3",value:z.desc,onChange:Je,required:!0})),c.createElement("label",null,"รายละเอียดเมื่อคลิกดู",c.createElement("textarea",{name:"details",rows:"5",value:z.details,onChange:Je})),c.createElement("button",{className:"gold-btn"},N?"บันทึกการแก้ไข":"เพิ่มบริการ")),c.createElement("div",{className:"admin-messages"},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,"บริการทั้งหมด"),D.length===0&&c.createElement("button",{className:"outline-btn",onClick:We},c.createElement(Wi,{size:18})," สร้างข้อมูลเริ่มต้น")),u?c.createElement("div",{className:"admin-empty"},"กำลังโหลดบริการ..."):D.length===0?c.createElement("div",{className:"admin-empty"},"ยังไม่มีบริการใน Firebase"):c.createElement("div",{className:"admin-service-list"},D.map(U=>c.createElement("article",{className:"admin-service-row",key:U.id},c.createElement("img",{src:U.image||J.kitchen,alt:""}),c.createElement("div",null,c.createElement("strong",null,U.thai),c.createElement("span",null,U.title," · ลำดับ ",U.order||1),c.createElement("p",null,U.desc)),c.createElement("button",{type:"button",className:"outline-btn",onClick:()=>Ys(U)},c.createElement(Mh,{size:16})," แก้ไข")))))),j==="portfolio"&&c.createElement("section",{className:"admin-services"},c.createElement("form",{className:"admin-service-form",onSubmit:Xs},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,ye?"แก้ไขผลงาน":"เพิ่มผลงานใหม่"),c.createElement("button",{type:"button",className:"outline-btn",onClick:Ka},c.createElement(Wi,{size:18})," ล้างฟอร์ม")),c.createElement("div",{className:"admin-form-grid"},c.createElement("label",null,"ชื่ออังกฤษ",c.createElement("input",{name:"title",value:E.title,onChange:yt,required:!0})),c.createElement("label",null,"ชื่อไทย",c.createElement("input",{name:"thai",value:E.thai,onChange:yt,required:!0})),c.createElement("label",null,"หมวดหมู่",c.createElement("select",{name:"category",value:E.category,onChange:yt},YV.map(U=>c.createElement("option",{key:U,value:U},U)))),c.createElement("label",null,"สไตล์งาน",c.createElement("input",{name:"style",value:E.style,onChange:yt,placeholder:"Modern Luxury"})),c.createElement("label",null,"รูปภาพ URL",c.createElement("input",{name:"image",value:E.image,onChange:yt,placeholder:J.kitchen})),c.createElement("label",null,"สถานที่",c.createElement("input",{name:"location",value:E.location,onChange:yt,placeholder:"Bangkok"})),c.createElement("label",null,"ปีผลงาน",c.createElement("input",{name:"year",value:E.year,onChange:yt,placeholder:"2026"})),c.createElement("label",null,"ลำดับ",c.createElement("input",{name:"order",type:"number",min:"1",value:E.order,onChange:yt})),c.createElement("label",{className:"admin-check"},c.createElement("input",{name:"isActive",type:"checkbox",checked:E.isActive,onChange:yt}),"แสดงบนหน้าเว็บ")),c.createElement("label",null,"คำอธิบายสั้น",c.createElement("textarea",{name:"desc",rows:"3",value:E.desc,onChange:yt})),c.createElement("label",null,"รายละเอียดเมื่อคลิกดู",c.createElement("textarea",{name:"details",rows:"6",value:E.details,onChange:yt,required:!0})),c.createElement("button",{className:"gold-btn"},ye?"บันทึกการแก้ไข":"เพิ่มผลงาน")),c.createElement("div",{className:"admin-messages"},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,"ผลงานทั้งหมด"),v.length===0&&c.createElement("button",{className:"outline-btn",onClick:Xe},c.createElement(Wi,{size:18})," สร้างข้อมูลเริ่มต้น")),f?c.createElement("div",{className:"admin-empty"},"กำลังโหลดผลงาน..."):v.length===0?c.createElement("div",{className:"admin-empty"},"ยังไม่มีผลงานใน Firebase"):c.createElement("div",{className:"admin-service-list"},v.map(U=>c.createElement("article",{className:"admin-service-row",key:U.id},c.createElement("img",{src:U.image||J.kitchen,alt:""}),c.createElement("div",null,c.createElement("strong",null,U.thai),c.createElement("span",null,U.title," · ",U.category||"RESIDENTIAL"," · ลำดับ ",U.order||1),c.createElement("p",null,U.desc||U.details)),c.createElement("button",{type:"button",className:"outline-btn",onClick:()=>Qa(U)},c.createElement(Mh,{size:16})," แก้ไข")))))),j==="team"&&c.createElement("section",{className:"admin-services"},c.createElement("form",{className:"admin-service-form",onSubmit:Ya},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,gn?"แก้ไขทีมงาน":"เพิ่มทีมงานใหม่"),c.createElement("button",{type:"button",className:"outline-btn",onClick:Qs},c.createElement(Wi,{size:18})," ล้างฟอร์ม")),c.createElement("div",{className:"admin-form-grid"},c.createElement("label",null,"ตำแหน่ง / บทบาท",c.createElement("input",{name:"role",value:A.role,onChange:or,placeholder:"DESIGNER",required:!0})),c.createElement("label",null,"ชื่อ / รายละเอียดไทย",c.createElement("input",{name:"name",value:A.name,onChange:or,placeholder:"ออกแบบ 3D",required:!0})),c.createElement("label",null,"รูปภาพ URL",c.createElement("input",{name:"image",value:A.image,onChange:or,placeholder:J.team})),c.createElement("label",null,"ลำดับ",c.createElement("input",{name:"order",type:"number",min:"1",value:A.order,onChange:or})),c.createElement("label",{className:"admin-check"},c.createElement("input",{name:"isActive",type:"checkbox",checked:A.isActive,onChange:or}),"แสดงบนหน้าเว็บ")),c.createElement("button",{className:"gold-btn"},gn?"บันทึกการแก้ไข":"เพิ่มทีมงาน")),c.createElement("div",{className:"admin-messages"},c.createElement("div",{className:"admin-list-head"},c.createElement("h2",null,"ทีมงานทั้งหมด"),L.length===0&&c.createElement("button",{className:"outline-btn",onClick:$i},c.createElement(Wi,{size:18})," สร้างข้อมูลเริ่มต้น")),g?c.createElement("div",{className:"admin-empty"},"กำลังโหลดทีมงาน..."):L.length===0?c.createElement("div",{className:"admin-empty"},"ยังไม่มีทีมงานใน Firebase"):c.createElement("div",{className:"admin-service-list"},L.map(U=>c.createElement("article",{className:"admin-service-row",key:U.id},c.createElement("img",{src:U.image||J.team,alt:""}),c.createElement("div",null,c.createElement("strong",null,U.name),c.createElement("span",null,U.role," · ลำดับ ",U.order||1),c.createElement("p",null,U.isActive===!1?"ซ่อนจากหน้าเว็บ":"แสดงบนหน้าเว็บ")),c.createElement("button",{type:"button",className:"outline-btn",onClick:()=>Hc(U)},c.createElement(Mh,{size:16})," แก้ไข")))))))):c.createElement("main",{className:"admin-page"},c.createElement("div",{className:"site-shell admin-shell"},c.createElement("form",{className:"admin-card admin-login",onSubmit:zn},c.createElement("div",{className:"admin-badge"},c.createElement(xa,{size:22}),c.createElement("span",null,"ADMIN")),c.createElement("h1",null,"เข้าสู่ระบบแอดมิน"),c.createElement("p",null,"ใช้บัญชีที่สร้างไว้ใน Firebase Authentication"),c.createElement("label",null,"อีเมล",c.createElement("input",{name:"email",type:"email",value:t.email,onChange:gt,placeholder:"admin@example.com",required:!0})),c.createElement("label",null,"รหัสผ่าน",c.createElement("input",{name:"password",type:"password",value:t.password,onChange:gt,placeholder:"กรอกรหัสผ่าน",required:!0})),X&&c.createElement("p",{className:"form-message error"},X),c.createElement("button",{className:"gold-btn",disabled:i},i?"กำลังเข้าสู่ระบบ...":"เข้าสู่ระบบ"))))}function iM(){return c.createElement("div",{className:"bg-[#07140f] text-white min-h-screen"},c.createElement(jC,null),c.createElement(ok,null,c.createElement(In,{path:"/",element:c.createElement(KC,null)}),c.createElement(In,{path:"/about",element:c.createElement(UV,null)}),c.createElement(In,{path:"/services",element:c.createElement(zV,null)}),c.createElement(In,{path:"/portfolio",element:c.createElement(HV,null)}),c.createElement(In,{path:"/process",element:c.createElement(qV,null)}),c.createElement(In,{path:"/blog",element:c.createElement(WV,null)}),c.createElement(In,{path:"/blog/:id",element:c.createElement(GV,null)}),c.createElement(In,{path:"/contact",element:c.createElement(QV,null)}),c.createElement(In,{path:"/admin",element:c.createElement(rM,null)})),c.createElement(GC,null))}td.createRoot(document.getElementById("root")).render(c.createElement(c.StrictMode,null,c.createElement(Nk,null,c.createElement(iM,null))));
