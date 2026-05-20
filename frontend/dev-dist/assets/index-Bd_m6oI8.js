(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function iu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var au={exports:{}},Fo={},su={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ar=Symbol.for("react.element"),Kd=Symbol.for("react.portal"),Hd=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),_d=Symbol.for("react.forward_ref"),qd=Symbol.for("react.suspense"),$d=Symbol.for("react.memo"),ef=Symbol.for("react.lazy"),za=Symbol.iterator;function tf(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var uu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cu=Object.assign,du={};function Pn(e,t,n){this.props=e,this.context=t,this.refs=du,this.updater=n||uu}Pn.prototype.isReactComponent={};Pn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Pn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function fu(){}fu.prototype=Pn.prototype;function Li(e,t,n){this.props=e,this.context=t,this.refs=du,this.updater=n||uu}var Ti=Li.prototype=new fu;Ti.constructor=Li;cu(Ti,Pn.prototype);Ti.isPureReactComponent=!0;var Ma=Array.isArray,pu=Object.prototype.hasOwnProperty,Ii={current:null},hu={key:!0,ref:!0,__self:!0,__source:!0};function mu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)pu.call(t,r)&&!hu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ar,type:e,key:l,ref:i,props:o,_owner:Ii.current}}function nf(e,t){return{$$typeof:Ar,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Pi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ar}function rf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ua=/\/+/g;function ol(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rf(""+e.key):t.toString(36)}function qr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ar:case Kd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ol(i,0):r,Ma(o)?(n="",e!=null&&(n=e.replace(Ua,"$&/")+"/"),qr(o,t,n,"",function(c){return c})):o!=null&&(Pi(o)&&(o=nf(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ua,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ma(e))for(var a=0;a<e.length;a++){l=e[a];var u=r+ol(l,a);i+=qr(l,t,n,u,o)}else if(u=tf(e),typeof u=="function")for(e=u.call(e),a=0;!(l=e.next()).done;)l=l.value,u=r+ol(l,a++),i+=qr(l,t,n,u,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Pr(e,t,n){if(e==null)return e;var r=[],o=0;return qr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function of(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},$r={transition:null},lf={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:$r,ReactCurrentOwner:Ii};function gu(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Pr,forEach:function(e,t,n){Pr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Pr(e,function(){t++}),t},toArray:function(e){return Pr(e,function(t){return t})||[]},only:function(e){if(!Pi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Pn;O.Fragment=Hd;O.Profiler=Jd;O.PureComponent=Li;O.StrictMode=Yd;O.Suspense=qd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf;O.act=gu;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=cu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Ii.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)pu.call(t,u)&&!hu.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ar,type:e.type,key:o,ref:l,props:r,_owner:i}};O.createContext=function(e){return e={$$typeof:Xd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zd,_context:e},e.Consumer=e};O.createElement=mu;O.createFactory=function(e){var t=mu.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:_d,render:e}};O.isValidElement=Pi;O.lazy=function(e){return{$$typeof:ef,_payload:{_status:-1,_result:e},_init:of}};O.memo=function(e,t){return{$$typeof:$d,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=$r.transition;$r.transition={};try{e()}finally{$r.transition=t}};O.unstable_act=gu;O.useCallback=function(e,t){return Se.current.useCallback(e,t)};O.useContext=function(e){return Se.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};O.useEffect=function(e,t){return Se.current.useEffect(e,t)};O.useId=function(){return Se.current.useId()};O.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return Se.current.useMemo(e,t)};O.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};O.useRef=function(e){return Se.current.useRef(e)};O.useState=function(e){return Se.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return Se.current.useTransition()};O.version="18.3.1";su.exports=O;var y=su.exports;const af=iu(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sf=y,uf=Symbol.for("react.element"),cf=Symbol.for("react.fragment"),df=Object.prototype.hasOwnProperty,ff=sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pf={key:!0,ref:!0,__self:!0,__source:!0};function yu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)df.call(t,r)&&!pf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:uf,type:e,key:l,ref:i,props:o,_owner:ff.current}}Fo.Fragment=cf;Fo.jsx=yu;Fo.jsxs=yu;au.exports=Fo;var s=au.exports,Bl={},vu={exports:{}},Pe={},xu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(B,C){var S=B.length;B.push(C);e:for(;0<S;){var j=S-1>>>1,z=B[j];if(0<o(z,C))B[j]=C,B[S]=z,S=j;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var C=B[0],S=B.pop();if(S!==C){B[0]=S;e:for(var j=0,z=B.length,R=z>>>1;j<R;){var I=2*(j+1)-1,W=B[I],F=I+1,Q=B[F];if(0>o(W,S))F<z&&0>o(Q,W)?(B[j]=Q,B[F]=S,j=F):(B[j]=W,B[I]=S,j=I);else if(F<z&&0>o(Q,S))B[j]=Q,B[F]=S,j=F;else break e}}return C}function o(B,C){var S=B.sortIndex-C.sortIndex;return S!==0?S:B.id-C.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var u=[],c=[],p=1,d=null,g=3,x=!1,w=!1,k=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(B){for(var C=n(c);C!==null;){if(C.callback===null)r(c);else if(C.startTime<=B)r(c),C.sortIndex=C.expirationTime,t(u,C);else break;C=n(c)}}function E(B){if(k=!1,m(B),!w)if(n(u)!==null)w=!0,it(v);else{var C=n(c);C!==null&&at(E,C.startTime-B)}}function v(B,C){w=!1,k&&(k=!1,h(P),P=-1),x=!0;var S=g;try{for(m(C),d=n(u);d!==null&&(!(d.expirationTime>C)||B&&!M());){var j=d.callback;if(typeof j=="function"){d.callback=null,g=d.priorityLevel;var z=j(d.expirationTime<=C);C=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(u)&&r(u),m(C)}else r(u);d=n(u)}if(d!==null)var R=!0;else{var I=n(c);I!==null&&at(E,I.startTime-C),R=!1}return R}finally{d=null,g=S,x=!1}}var N=!1,L=null,P=-1,U=5,T=-1;function M(){return!(e.unstable_now()-T<U)}function re(){if(L!==null){var B=e.unstable_now();T=B;var C=!0;try{C=L(!0,B)}finally{C?me():(N=!1,L=null)}}else N=!1}var me;if(typeof f=="function")me=function(){f(re)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ae=lt.port2;lt.port1.onmessage=re,me=function(){ae.postMessage(null)}}else me=function(){A(re,0)};function it(B){L=B,N||(N=!0,me())}function at(B,C){P=A(function(){B(e.unstable_now())},C)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(B){B.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,it(v))},e.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<B?Math.floor(1e3/B):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(B){switch(g){case 1:case 2:case 3:var C=3;break;default:C=g}var S=g;g=C;try{return B()}finally{g=S}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(B,C){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var S=g;g=B;try{return C()}finally{g=S}},e.unstable_scheduleCallback=function(B,C,S){var j=e.unstable_now();switch(typeof S=="object"&&S!==null?(S=S.delay,S=typeof S=="number"&&0<S?j+S:j):S=j,B){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=S+z,B={id:p++,callback:C,priorityLevel:B,startTime:S,expirationTime:z,sortIndex:-1},S>j?(B.sortIndex=S,t(c,B),n(u)===null&&B===n(c)&&(k?(h(P),P=-1):k=!0,at(E,S-j))):(B.sortIndex=z,t(u,B),w||x||(w=!0,it(v))),B},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(B){var C=g;return function(){var S=g;g=C;try{return B.apply(this,arguments)}finally{g=S}}}})(wu);xu.exports=wu;var hf=xu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf=y,Ie=hf;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ku=new Set,ar={};function rn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(ar[e]=t,e=0;e<t.length;e++)ku.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Oa={};function yf(e){return Dl.call(Oa,e)?!0:Dl.call(Fa,e)?!1:gf.test(e)?Oa[e]=!0:(Fa[e]=!0,!1)}function vf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xf(e,t,n,r){if(t===null||typeof t>"u"||vf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function Di(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bi,Di);he[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bi,Di);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bi,Di);he[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function zi(e,t,n,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xf(t,n,o,r)&&(n=null),r||o===null?yf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Br=Symbol.for("react.element"),sn=Symbol.for("react.portal"),un=Symbol.for("react.fragment"),Mi=Symbol.for("react.strict_mode"),zl=Symbol.for("react.profiler"),Su=Symbol.for("react.provider"),Eu=Symbol.for("react.context"),Ui=Symbol.for("react.forward_ref"),Ml=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Fi=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Cu=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function Fn(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var $=Object.assign,ll;function Jn(e){if(ll===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ll=t&&t[1]||""}return`
`+ll+e}var il=!1;function al(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var u=`
`+o[i].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=i&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function wf(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Fl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case un:return"Fragment";case sn:return"Portal";case zl:return"Profiler";case Mi:return"StrictMode";case Ml:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eu:return(e.displayName||"Context")+".Consumer";case Su:return(e._context.displayName||"Context")+".Provider";case Ui:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Fi:return t=e.displayName||null,t!==null?t:Fl(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return Fl(e(t))}catch{}}return null}function kf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fl(t);case 8:return t===Mi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Au(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sf(e){var t=Au(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Dr(e){e._valueTracker||(e._valueTracker=Sf(e))}function ju(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Au(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function po(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ol(e,t){var n=t.checked;return $({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&zi(e,"checked",t,!1)}function Wl(e,t){Ru(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||po(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Zn=Array.isArray;function wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return $({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Zn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function bu(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ka(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zr,Lu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zr=zr||document.createElement("div"),zr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ef=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){Ef.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qn[t]=qn[e]})});function Tu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||qn.hasOwnProperty(e)&&qn[e]?(""+t).trim():t+"px"}function Iu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Tu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Cf=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Hl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,kn=null,Sn=null;function Ha(e){if(e=br(e)){if(typeof Jl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=Vo(t),Jl(e.stateNode,e.type,t))}}function Pu(e){kn?Sn?Sn.push(e):Sn=[e]:kn=e}function Bu(){if(kn){var e=kn,t=Sn;if(Sn=kn=null,Ha(e),t)for(e=0;e<t.length;e++)Ha(t[e])}}function Du(e,t){return e(t)}function zu(){}var sl=!1;function Mu(e,t,n){if(sl)return e(t,n);sl=!0;try{return Du(e,t,n)}finally{sl=!1,(kn!==null||Sn!==null)&&(zu(),Bu())}}function ur(e,t){var n=e.stateNode;if(n===null)return null;var r=Vo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var Zl=!1;if(mt)try{var On={};Object.defineProperty(On,"passive",{get:function(){Zl=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{Zl=!1}function Af(e,t,n,r,o,l,i,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var $n=!1,ho=null,mo=!1,Xl=null,jf={onError:function(e){$n=!0,ho=e}};function Rf(e,t,n,r,o,l,i,a,u){$n=!1,ho=null,Af.apply(jf,arguments)}function bf(e,t,n,r,o,l,i,a,u){if(Rf.apply(this,arguments),$n){if($n){var c=ho;$n=!1,ho=null}else throw Error(b(198));mo||(mo=!0,Xl=c)}}function on(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ya(e){if(on(e)!==e)throw Error(b(188))}function Nf(e){var t=e.alternate;if(!t){if(t=on(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ya(o),e;if(l===r)return Ya(o),t;l=l.sibling}throw Error(b(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Fu(e){return e=Nf(e),e!==null?Ou(e):null}function Ou(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ou(e);if(t!==null)return t;e=e.sibling}return null}var Wu=Ie.unstable_scheduleCallback,Ja=Ie.unstable_cancelCallback,Lf=Ie.unstable_shouldYield,Tf=Ie.unstable_requestPaint,te=Ie.unstable_now,If=Ie.unstable_getCurrentPriorityLevel,Wi=Ie.unstable_ImmediatePriority,Qu=Ie.unstable_UserBlockingPriority,go=Ie.unstable_NormalPriority,Pf=Ie.unstable_LowPriority,Gu=Ie.unstable_IdlePriority,Oo=null,nt=null;function Bf(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Oo,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Mf,Df=Math.log,zf=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Df(e)/zf|0)|0}var Mr=64,Ur=4194304;function Xn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=Xn(a):(l&=i,l!==0&&(r=Xn(l)))}else i=n&~o,i!==0?r=Xn(i):l!==0&&(r=Xn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),o=1<<n,r|=e[n],t&=~o;return r}function Uf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ye(l),a=1<<i,u=o[i];u===-1?(!(a&n)||a&r)&&(o[i]=Uf(a,t)):u<=t&&(e.expiredLanes|=a),l&=~a}}function _l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vu(){var e=Mr;return Mr<<=1,!(Mr&4194240)&&(Mr=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function Of(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ye(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Qi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hu,Gi,Yu,Ju,Zu,ql=!1,Fr=[],Tt=null,It=null,Pt=null,cr=new Map,dr=new Map,Rt=[],Wf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(t.pointerId)}}function Wn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=br(t),t!==null&&Gi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Qf(e,t,n,r,o){switch(t){case"focusin":return Tt=Wn(Tt,e,t,n,r,o),!0;case"dragenter":return It=Wn(It,e,t,n,r,o),!0;case"mouseover":return Pt=Wn(Pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return cr.set(l,Wn(cr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,dr.set(l,Wn(dr.get(l)||null,e,t,n,r,o)),!0}return!1}function Xu(e){var t=Yt(e.target);if(t!==null){var n=on(t);if(n!==null){if(t=n.tag,t===13){if(t=Uu(n),t!==null){e.blockedOn=t,Zu(e.priority,function(){Yu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=br(n),t!==null&&Gi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){eo(e)&&n.delete(t)}function Gf(){ql=!1,Tt!==null&&eo(Tt)&&(Tt=null),It!==null&&eo(It)&&(It=null),Pt!==null&&eo(Pt)&&(Pt=null),cr.forEach(Xa),dr.forEach(Xa)}function Qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ql||(ql=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Gf)))}function fr(e){function t(o){return Qn(o,e)}if(0<Fr.length){Qn(Fr[0],e);for(var n=1;n<Fr.length;n++){var r=Fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Qn(Tt,e),It!==null&&Qn(It,e),Pt!==null&&Qn(Pt,e),cr.forEach(t),dr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)Xu(n),n.blockedOn===null&&Rt.shift()}var En=wt.ReactCurrentBatchConfig,vo=!0;function Vf(e,t,n,r){var o=V,l=En.transition;En.transition=null;try{V=1,Vi(e,t,n,r)}finally{V=o,En.transition=l}}function Kf(e,t,n,r){var o=V,l=En.transition;En.transition=null;try{V=4,Vi(e,t,n,r)}finally{V=o,En.transition=l}}function Vi(e,t,n,r){if(vo){var o=$l(e,t,n,r);if(o===null)xl(e,t,r,xo,n),Za(e,r);else if(Qf(o,e,t,n,r))r.stopPropagation();else if(Za(e,r),t&4&&-1<Wf.indexOf(e)){for(;o!==null;){var l=br(o);if(l!==null&&Hu(l),l=$l(e,t,n,r),l===null&&xl(e,t,r,xo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var xo=null;function $l(e,t,n,r){if(xo=null,e=Oi(r),e=Yt(e),e!==null)if(t=on(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xo=e,null}function _u(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(If()){case Wi:return 1;case Qu:return 4;case go:case Pf:return 16;case Gu:return 536870912;default:return 16}default:return 16}}var Nt=null,Ki=null,to=null;function qu(){if(to)return to;var e,t=Ki,n=t.length,r,o="value"in Nt?Nt.value:Nt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return to=o.slice(e,1<r?1-r:void 0)}function no(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function _a(){return!1}function Be(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Or:_a,this.isPropagationStopped=_a,this}return $(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var Bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hi=Be(Bn),Rr=$({},Bn,{view:0,detail:0}),Hf=Be(Rr),cl,dl,Gn,Wo=$({},Rr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&e.type==="mousemove"?(cl=e.screenX-Gn.screenX,dl=e.screenY-Gn.screenY):dl=cl=0,Gn=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),qa=Be(Wo),Yf=$({},Wo,{dataTransfer:0}),Jf=Be(Yf),Zf=$({},Rr,{relatedTarget:0}),fl=Be(Zf),Xf=$({},Bn,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=Be(Xf),qf=$({},Bn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$f=Be(qf),ep=$({},Bn,{data:0}),$a=Be(ep),tp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},np={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rp[e])?!!t[e]:!1}function Yi(){return op}var lp=$({},Rr,{key:function(e){if(e.key){var t=tp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=no(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?np[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?no(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?no(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ip=Be(lp),ap=$({},Wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Be(ap),sp=$({},Rr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yi}),up=Be(sp),cp=$({},Bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),dp=Be(cp),fp=$({},Wo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pp=Be(fp),hp=[9,13,27,32],Ji=mt&&"CompositionEvent"in window,er=null;mt&&"documentMode"in document&&(er=document.documentMode);var mp=mt&&"TextEvent"in window&&!er,$u=mt&&(!Ji||er&&8<er&&11>=er),ts=" ",ns=!1;function ec(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var cn=!1;function gp(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(ns=!0,ts);case"textInput":return e=t.data,e===ts&&ns?null:e;default:return null}}function yp(e,t){if(cn)return e==="compositionend"||!Ji&&ec(e,t)?(e=qu(),to=Ki=Nt=null,cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $u&&t.locale!=="ko"?null:t.data;default:return null}}var vp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vp[e.type]:t==="textarea"}function nc(e,t,n,r){Pu(r),t=wo(t,"onChange"),0<t.length&&(n=new Hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var tr=null,pr=null;function xp(e){pc(e,0)}function Qo(e){var t=pn(e);if(ju(t))return e}function wp(e,t){if(e==="change")return t}var rc=!1;if(mt){var pl;if(mt){var hl="oninput"in document;if(!hl){var os=document.createElement("div");os.setAttribute("oninput","return;"),hl=typeof os.oninput=="function"}pl=hl}else pl=!1;rc=pl&&(!document.documentMode||9<document.documentMode)}function ls(){tr&&(tr.detachEvent("onpropertychange",oc),pr=tr=null)}function oc(e){if(e.propertyName==="value"&&Qo(pr)){var t=[];nc(t,pr,e,Oi(e)),Mu(xp,t)}}function kp(e,t,n){e==="focusin"?(ls(),tr=t,pr=n,tr.attachEvent("onpropertychange",oc)):e==="focusout"&&ls()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(pr)}function Ep(e,t){if(e==="click")return Qo(t)}function Cp(e,t){if(e==="input"||e==="change")return Qo(t)}function Ap(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Ap;function hr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Dl.call(t,o)||!Xe(e[o],t[o]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ic(){for(var e=window,t=po();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=po(e.document)}return t}function Zi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function jp(e){var t=ic(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&lc(n.ownerDocument.documentElement,n)){if(r!==null&&Zi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=as(n,l);var i=as(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rp=mt&&"documentMode"in document&&11>=document.documentMode,dn=null,ei=null,nr=null,ti=!1;function ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ti||dn==null||dn!==po(r)||(r=dn,"selectionStart"in r&&Zi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),nr&&hr(nr,r)||(nr=r,r=wo(ei,"onSelect"),0<r.length&&(t=new Hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=dn)))}function Wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fn={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionend:Wr("Transition","TransitionEnd")},ml={},ac={};mt&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function Go(e){if(ml[e])return ml[e];if(!fn[e])return e;var t=fn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ac)return ml[e]=t[n];return e}var sc=Go("animationend"),uc=Go("animationiteration"),cc=Go("animationstart"),dc=Go("transitionend"),fc=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){fc.set(e,t),rn(t,[e])}for(var gl=0;gl<us.length;gl++){var yl=us[gl],bp=yl.toLowerCase(),Np=yl[0].toUpperCase()+yl.slice(1);Wt(bp,"on"+Np)}Wt(sc,"onAnimationEnd");Wt(uc,"onAnimationIteration");Wt(cc,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(dc,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _n="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lp=new Set("cancel close invalid load scroll toggle".split(" ").concat(_n));function cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bf(r,t,void 0,e),e.currentTarget=null}function pc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==l&&o.isPropagationStopped())break e;cs(o,a,c),l=u}else for(i=0;i<r.length;i++){if(a=r[i],u=a.instance,c=a.currentTarget,a=a.listener,u!==l&&o.isPropagationStopped())break e;cs(o,a,c),l=u}}}if(mo)throw e=Xl,mo=!1,Xl=null,e}function H(e,t){var n=t[ii];n===void 0&&(n=t[ii]=new Set);var r=e+"__bubble";n.has(r)||(hc(t,e,2,!1),n.add(r))}function vl(e,t,n){var r=0;t&&(r|=4),hc(n,e,r,t)}var Qr="_reactListening"+Math.random().toString(36).slice(2);function mr(e){if(!e[Qr]){e[Qr]=!0,ku.forEach(function(n){n!=="selectionchange"&&(Lp.has(n)||vl(n,!1,e),vl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qr]||(t[Qr]=!0,vl("selectionchange",!1,t))}}function hc(e,t,n,r){switch(_u(t)){case 1:var o=Vf;break;case 4:o=Kf;break;default:o=Vi}n=o.bind(null,t,n,e),o=void 0,!Zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var u=i.tag;if((u===3||u===4)&&(u=i.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Yt(a),i===null)return;if(u=i.tag,u===5||u===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Mu(function(){var c=l,p=Oi(n),d=[];e:{var g=fc.get(e);if(g!==void 0){var x=Hi,w=e;switch(e){case"keypress":if(no(n)===0)break e;case"keydown":case"keyup":x=ip;break;case"focusin":w="focus",x=fl;break;case"focusout":w="blur",x=fl;break;case"beforeblur":case"afterblur":x=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=up;break;case sc:case uc:case cc:x=_f;break;case dc:x=dp;break;case"scroll":x=Hf;break;case"wheel":x=pp;break;case"copy":case"cut":case"paste":x=$f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=es}var k=(t&4)!==0,A=!k&&e==="scroll",h=k?g!==null?g+"Capture":null:g;k=[];for(var f=c,m;f!==null;){m=f;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,h!==null&&(E=ur(f,h),E!=null&&k.push(gr(f,E,m)))),A)break;f=f.return}0<k.length&&(g=new x(g,w,null,n,p),d.push({event:g,listeners:k}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==Yl&&(w=n.relatedTarget||n.fromElement)&&(Yt(w)||w[gt]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?Yt(w):null,w!==null&&(A=on(w),w!==A||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(k=qa,E="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(k=es,E="onPointerLeave",h="onPointerEnter",f="pointer"),A=x==null?g:pn(x),m=w==null?g:pn(w),g=new k(E,f+"leave",x,n,p),g.target=A,g.relatedTarget=m,E=null,Yt(p)===c&&(k=new k(h,f+"enter",w,n,p),k.target=m,k.relatedTarget=A,E=k),A=E,x&&w)t:{for(k=x,h=w,f=0,m=k;m;m=ln(m))f++;for(m=0,E=h;E;E=ln(E))m++;for(;0<f-m;)k=ln(k),f--;for(;0<m-f;)h=ln(h),m--;for(;f--;){if(k===h||h!==null&&k===h.alternate)break t;k=ln(k),h=ln(h)}k=null}else k=null;x!==null&&ds(d,g,x,k,!1),w!==null&&A!==null&&ds(d,A,w,k,!0)}}e:{if(g=c?pn(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var v=wp;else if(rs(g))if(rc)v=Cp;else{v=Sp;var N=kp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(v=Ep);if(v&&(v=v(e,c))){nc(d,v,n,p);break e}N&&N(e,g,c),e==="focusout"&&(N=g._wrapperState)&&N.controlled&&g.type==="number"&&Ql(g,"number",g.value)}switch(N=c?pn(c):window,e){case"focusin":(rs(N)||N.contentEditable==="true")&&(dn=N,ei=c,nr=null);break;case"focusout":nr=ei=dn=null;break;case"mousedown":ti=!0;break;case"contextmenu":case"mouseup":case"dragend":ti=!1,ss(d,n,p);break;case"selectionchange":if(Rp)break;case"keydown":case"keyup":ss(d,n,p)}var L;if(Ji)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else cn?ec(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&($u&&n.locale!=="ko"&&(cn||P!=="onCompositionStart"?P==="onCompositionEnd"&&cn&&(L=qu()):(Nt=p,Ki="value"in Nt?Nt.value:Nt.textContent,cn=!0)),N=wo(c,P),0<N.length&&(P=new $a(P,e,null,n,p),d.push({event:P,listeners:N}),L?P.data=L:(L=tc(n),L!==null&&(P.data=L)))),(L=mp?gp(e,n):yp(e,n))&&(c=wo(c,"onBeforeInput"),0<c.length&&(p=new $a("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:c}),p.data=L))}pc(d,t)})}function gr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=ur(e,n),l!=null&&r.unshift(gr(e,l,o)),l=ur(e,t),l!=null&&r.push(gr(e,l,o))),e=e.return}return r}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ds(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,o?(u=ur(n,l),u!=null&&i.unshift(gr(n,u,a))):o||(u=ur(n,l),u!=null&&i.push(gr(n,u,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Tp=/\r\n?/g,Ip=/\u0000|\uFFFD/g;function fs(e){return(typeof e=="string"?e:""+e).replace(Tp,`
`).replace(Ip,"")}function Gr(e,t,n){if(t=fs(t),fs(e)!==t&&n)throw Error(b(425))}function ko(){}var ni=null,ri=null;function oi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var li=typeof setTimeout=="function"?setTimeout:void 0,Pp=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,Bp=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Dp)}:li;function Dp(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),fr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);fr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Dn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Dn,yr="__reactProps$"+Dn,gt="__reactContainer$"+Dn,ii="__reactEvents$"+Dn,zp="__reactListeners$"+Dn,Mp="__reactHandles$"+Dn;function Yt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[tt])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function br(e){return e=e[tt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function Vo(e){return e[yr]||null}var ai=[],hn=-1;function Qt(e){return{current:e}}function Y(e){0>hn||(e.current=ai[hn],ai[hn]=null,hn--)}function K(e,t){hn++,ai[hn]=e.current,e.current=t}var Ot={},xe=Qt(Ot),je=Qt(!1),qt=Ot;function Rn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Re(e){return e=e.childContextTypes,e!=null}function So(){Y(je),Y(xe)}function ms(e,t,n){if(xe.current!==Ot)throw Error(b(168));K(xe,t),K(je,n)}function mc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(b(108,kf(e)||"Unknown",o));return $({},n,r)}function Eo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,qt=xe.current,K(xe,e),K(je,je.current),!0}function gs(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=mc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,Y(je),Y(xe),K(xe,e)):Y(je),K(je,n)}var dt=null,Ko=!1,kl=!1;function gc(e){dt===null?dt=[e]:dt.push(e)}function Up(e){Ko=!0,gc(e)}function Gt(){if(!kl&&dt!==null){kl=!0;var e=0,t=V;try{var n=dt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Ko=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),Wu(Wi,Gt),o}finally{V=t,kl=!1}}return null}var mn=[],gn=0,Co=null,Ao=0,De=[],ze=0,$t=null,ft=1,pt="";function Kt(e,t){mn[gn++]=Ao,mn[gn++]=Co,Co=e,Ao=t}function yc(e,t,n){De[ze++]=ft,De[ze++]=pt,De[ze++]=$t,$t=e;var r=ft;e=pt;var o=32-Ye(r)-1;r&=~(1<<o),n+=1;var l=32-Ye(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ft=1<<32-Ye(t)+o|n<<o|r,pt=l+e}else ft=1<<l|n<<o|r,pt=e}function Xi(e){e.return!==null&&(Kt(e,1),yc(e,1,0))}function _i(e){for(;e===Co;)Co=mn[--gn],mn[gn]=null,Ao=mn[--gn],mn[gn]=null;for(;e===$t;)$t=De[--ze],De[ze]=null,pt=De[--ze],De[ze]=null,ft=De[--ze],De[ze]=null}var Te=null,Le=null,Z=!1,He=null;function vc(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Le=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Le=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=$t!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Le=null,!0):!1;default:return!1}}function si(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ui(e){if(Z){var t=Le;if(t){var n=t;if(!ys(e,t)){if(si(e))throw Error(b(418));t=Bt(n.nextSibling);var r=Te;t&&ys(e,t)?vc(r,n):(e.flags=e.flags&-4097|2,Z=!1,Te=e)}}else{if(si(e))throw Error(b(418));e.flags=e.flags&-4097|2,Z=!1,Te=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Vr(e){if(e!==Te)return!1;if(!Z)return vs(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!oi(e.type,e.memoizedProps)),t&&(t=Le)){if(si(e))throw xc(),Error(b(418));for(;t;)vc(e,t),t=Bt(t.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Le=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Le=null}}else Le=Te?Bt(e.stateNode.nextSibling):null;return!0}function xc(){for(var e=Le;e;)e=Bt(e.nextSibling)}function bn(){Le=Te=null,Z=!1}function qi(e){He===null?He=[e]:He.push(e)}var Fp=wt.ReactCurrentBatchConfig;function Vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xs(e){var t=e._init;return t(e._payload)}function wc(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function o(h,f){return h=Ut(h,f),h.index=0,h.sibling=null,h}function l(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function i(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,f,m,E){return f===null||f.tag!==6?(f=bl(m,h.mode,E),f.return=h,f):(f=o(f,m),f.return=h,f)}function u(h,f,m,E){var v=m.type;return v===un?p(h,f,m.props.children,E,m.key):f!==null&&(f.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===At&&xs(v)===f.type)?(E=o(f,m.props),E.ref=Vn(h,f,m),E.return=h,E):(E=uo(m.type,m.key,m.props,null,h.mode,E),E.ref=Vn(h,f,m),E.return=h,E)}function c(h,f,m,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Nl(m,h.mode,E),f.return=h,f):(f=o(f,m.children||[]),f.return=h,f)}function p(h,f,m,E,v){return f===null||f.tag!==7?(f=_t(m,h.mode,E,v),f.return=h,f):(f=o(f,m),f.return=h,f)}function d(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=bl(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Br:return m=uo(f.type,f.key,f.props,null,h.mode,m),m.ref=Vn(h,null,f),m.return=h,m;case sn:return f=Nl(f,h.mode,m),f.return=h,f;case At:var E=f._init;return d(h,E(f._payload),m)}if(Zn(f)||Fn(f))return f=_t(f,h.mode,m,null),f.return=h,f;Kr(h,f)}return null}function g(h,f,m,E){var v=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return v!==null?null:a(h,f,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Br:return m.key===v?u(h,f,m,E):null;case sn:return m.key===v?c(h,f,m,E):null;case At:return v=m._init,g(h,f,v(m._payload),E)}if(Zn(m)||Fn(m))return v!==null?null:p(h,f,m,E,null);Kr(h,m)}return null}function x(h,f,m,E,v){if(typeof E=="string"&&E!==""||typeof E=="number")return h=h.get(m)||null,a(f,h,""+E,v);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Br:return h=h.get(E.key===null?m:E.key)||null,u(f,h,E,v);case sn:return h=h.get(E.key===null?m:E.key)||null,c(f,h,E,v);case At:var N=E._init;return x(h,f,m,N(E._payload),v)}if(Zn(E)||Fn(E))return h=h.get(m)||null,p(f,h,E,v,null);Kr(f,E)}return null}function w(h,f,m,E){for(var v=null,N=null,L=f,P=f=0,U=null;L!==null&&P<m.length;P++){L.index>P?(U=L,L=null):U=L.sibling;var T=g(h,L,m[P],E);if(T===null){L===null&&(L=U);break}e&&L&&T.alternate===null&&t(h,L),f=l(T,f,P),N===null?v=T:N.sibling=T,N=T,L=U}if(P===m.length)return n(h,L),Z&&Kt(h,P),v;if(L===null){for(;P<m.length;P++)L=d(h,m[P],E),L!==null&&(f=l(L,f,P),N===null?v=L:N.sibling=L,N=L);return Z&&Kt(h,P),v}for(L=r(h,L);P<m.length;P++)U=x(L,h,P,m[P],E),U!==null&&(e&&U.alternate!==null&&L.delete(U.key===null?P:U.key),f=l(U,f,P),N===null?v=U:N.sibling=U,N=U);return e&&L.forEach(function(M){return t(h,M)}),Z&&Kt(h,P),v}function k(h,f,m,E){var v=Fn(m);if(typeof v!="function")throw Error(b(150));if(m=v.call(m),m==null)throw Error(b(151));for(var N=v=null,L=f,P=f=0,U=null,T=m.next();L!==null&&!T.done;P++,T=m.next()){L.index>P?(U=L,L=null):U=L.sibling;var M=g(h,L,T.value,E);if(M===null){L===null&&(L=U);break}e&&L&&M.alternate===null&&t(h,L),f=l(M,f,P),N===null?v=M:N.sibling=M,N=M,L=U}if(T.done)return n(h,L),Z&&Kt(h,P),v;if(L===null){for(;!T.done;P++,T=m.next())T=d(h,T.value,E),T!==null&&(f=l(T,f,P),N===null?v=T:N.sibling=T,N=T);return Z&&Kt(h,P),v}for(L=r(h,L);!T.done;P++,T=m.next())T=x(L,h,P,T.value,E),T!==null&&(e&&T.alternate!==null&&L.delete(T.key===null?P:T.key),f=l(T,f,P),N===null?v=T:N.sibling=T,N=T);return e&&L.forEach(function(re){return t(h,re)}),Z&&Kt(h,P),v}function A(h,f,m,E){if(typeof m=="object"&&m!==null&&m.type===un&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Br:e:{for(var v=m.key,N=f;N!==null;){if(N.key===v){if(v=m.type,v===un){if(N.tag===7){n(h,N.sibling),f=o(N,m.props.children),f.return=h,h=f;break e}}else if(N.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===At&&xs(v)===N.type){n(h,N.sibling),f=o(N,m.props),f.ref=Vn(h,N,m),f.return=h,h=f;break e}n(h,N);break}else t(h,N);N=N.sibling}m.type===un?(f=_t(m.props.children,h.mode,E,m.key),f.return=h,h=f):(E=uo(m.type,m.key,m.props,null,h.mode,E),E.ref=Vn(h,f,m),E.return=h,h=E)}return i(h);case sn:e:{for(N=m.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=o(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=Nl(m,h.mode,E),f.return=h,h=f}return i(h);case At:return N=m._init,A(h,f,N(m._payload),E)}if(Zn(m))return w(h,f,m,E);if(Fn(m))return k(h,f,m,E);Kr(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=o(f,m),f.return=h,h=f):(n(h,f),f=bl(m,h.mode,E),f.return=h,h=f),i(h)):n(h,f)}return A}var Nn=wc(!0),kc=wc(!1),jo=Qt(null),Ro=null,yn=null,$i=null;function ea(){$i=yn=Ro=null}function ta(e){var t=jo.current;Y(jo),e._currentValue=t}function ci(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Cn(e,t){Ro=e,$i=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if($i!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(Ro===null)throw Error(b(308));yn=e,Ro.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Jt=null;function na(e){Jt===null?Jt=[e]:Jt.push(e)}function Sc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,na(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function ra(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ec(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,na(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function ro(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}function ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function bo(e,t,n,r){var o=e.updateQueue;jt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,i===null?l=c:i.next=c,i=u;var p=e.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==i&&(a===null?p.firstBaseUpdate=c:a.next=c,p.lastBaseUpdate=u))}if(l!==null){var d=o.baseState;i=0,p=c=u=null,a=l;do{var g=a.lane,x=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,k=a;switch(g=t,x=n,k.tag){case 1:if(w=k.payload,typeof w=="function"){d=w.call(x,d,g);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=k.payload,g=typeof w=="function"?w.call(x,d,g):w,g==null)break e;d=$({},d,g);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else x={eventTime:x,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(c=p=x,u=d):p=p.next=x,i|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(p===null&&(u=d),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);tn|=i,e.lanes=i,e.memoizedState=d}}function ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(b(191,o));o.call(r)}}}var Nr={},rt=Qt(Nr),vr=Qt(Nr),xr=Qt(Nr);function Zt(e){if(e===Nr)throw Error(b(174));return e}function oa(e,t){switch(K(xr,t),K(vr,e),K(rt,Nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}Y(rt),K(rt,t)}function Ln(){Y(rt),Y(vr),Y(xr)}function Cc(e){Zt(xr.current);var t=Zt(rt.current),n=Vl(t,e.type);t!==n&&(K(vr,e),K(rt,n))}function la(e){vr.current===e&&(Y(rt),Y(vr))}var X=Qt(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Sl=[];function ia(){for(var e=0;e<Sl.length;e++)Sl[e]._workInProgressVersionPrimary=null;Sl.length=0}var oo=wt.ReactCurrentDispatcher,El=wt.ReactCurrentBatchConfig,en=0,_=null,oe=null,se=null,Lo=!1,rr=!1,wr=0,Op=0;function ge(){throw Error(b(321))}function aa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function sa(e,t,n,r,o,l){if(en=l,_=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,oo.current=e===null||e.memoizedState===null?Vp:Kp,e=n(r,o),rr){l=0;do{if(rr=!1,wr=0,25<=l)throw Error(b(301));l+=1,se=oe=null,t.updateQueue=null,oo.current=Hp,e=n(r,o)}while(rr)}if(oo.current=To,t=oe!==null&&oe.next!==null,en=0,se=oe=_=null,Lo=!1,t)throw Error(b(300));return e}function ua(){var e=wr!==0;return wr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?_.memoizedState=se=e:se=se.next=e,se}function Oe(){if(oe===null){var e=_.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=se===null?_.memoizedState:se.next;if(t!==null)se=t,oe=e;else{if(e===null)throw Error(b(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},se===null?_.memoizedState=se=e:se=se.next=e}return se}function kr(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=Oe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=oe,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,u=null,c=l;do{var p=c.lane;if((en&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=d,i=r):u=u.next=d,_.lanes|=p,tn|=p}c=c.next}while(c!==null&&c!==l);u===null?i=r:u.next=a,Xe(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,_.lanes|=l,tn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=Oe(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Xe(l,t.memoizedState)||(Ae=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Ac(){}function jc(e,t){var n=_,r=Oe(),o=t(),l=!Xe(r.memoizedState,o);if(l&&(r.memoizedState=o,Ae=!0),r=r.queue,ca(Nc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Sr(9,bc.bind(null,n,r,o,t),void 0,null),de===null)throw Error(b(349));en&30||Rc(n,t,o)}return o}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=_.updateQueue,t===null?(t={lastEffect:null,stores:null},_.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bc(e,t,n,r){t.value=n,t.getSnapshot=r,Lc(t)&&Tc(e)}function Nc(e,t,n){return n(function(){Lc(t)&&Tc(e)})}function Lc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Tc(e){var t=yt(e,1);t!==null&&Je(t,e,1,-1)}function Ss(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:e},t.queue=e,e=e.dispatch=Gp.bind(null,_,e),[t.memoizedState,e]}function Sr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=_.updateQueue,t===null?(t={lastEffect:null,stores:null},_.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ic(){return Oe().memoizedState}function lo(e,t,n,r){var o=et();_.flags|=e,o.memoizedState=Sr(1|t,n,void 0,r===void 0?null:r)}function Ho(e,t,n,r){var o=Oe();r=r===void 0?null:r;var l=void 0;if(oe!==null){var i=oe.memoizedState;if(l=i.destroy,r!==null&&aa(r,i.deps)){o.memoizedState=Sr(t,n,l,r);return}}_.flags|=e,o.memoizedState=Sr(1|t,n,l,r)}function Es(e,t){return lo(8390656,8,e,t)}function ca(e,t){return Ho(2048,8,e,t)}function Pc(e,t){return Ho(4,2,e,t)}function Bc(e,t){return Ho(4,4,e,t)}function Dc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zc(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4,4,Dc.bind(null,t,e),n)}function da(){}function Mc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uc(e,t){var n=Oe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&aa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Fc(e,t,n){return en&21?(Xe(n,t)||(n=Vu(),_.lanes|=n,tn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Wp(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{V=n,El.transition=r}}function Oc(){return Oe().memoizedState}function Qp(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wc(e))Qc(t,n);else if(n=Sc(e,t,n,r),n!==null){var o=ke();Je(n,e,r,o),Gc(n,t,r)}}function Gp(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wc(e))Qc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Xe(a,i)){var u=t.interleaved;u===null?(o.next=o,na(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Sc(e,t,o,r),n!==null&&(o=ke(),Je(n,e,r,o),Gc(n,t,r))}}function Wc(e){var t=e.alternate;return e===_||t!==null&&t===_}function Qc(e,t){rr=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Gc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qi(e,n)}}var To={readContext:Fe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Vp={readContext:Fe,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,lo(4194308,4,Dc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return lo(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qp.bind(null,_,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:da,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=Wp.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=_,o=et();if(Z){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),de===null)throw Error(b(349));en&30||Rc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Es(Nc.bind(null,r,l,e),[e]),r.flags|=2048,Sr(9,bc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=et(),t=de.identifierPrefix;if(Z){var n=pt,r=ft;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Op++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Kp={readContext:Fe,useCallback:Mc,useContext:Fe,useEffect:ca,useImperativeHandle:zc,useInsertionEffect:Pc,useLayoutEffect:Bc,useMemo:Uc,useReducer:Cl,useRef:Ic,useState:function(){return Cl(kr)},useDebugValue:da,useDeferredValue:function(e){var t=Oe();return Fc(t,oe.memoizedState,e)},useTransition:function(){var e=Cl(kr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:jc,useId:Oc,unstable_isNewReconciler:!1},Hp={readContext:Fe,useCallback:Mc,useContext:Fe,useEffect:ca,useImperativeHandle:zc,useInsertionEffect:Pc,useLayoutEffect:Bc,useMemo:Uc,useReducer:Al,useRef:Ic,useState:function(){return Al(kr)},useDebugValue:da,useDeferredValue:function(e){var t=Oe();return oe===null?t.memoizedState=e:Fc(t,oe.memoizedState,e)},useTransition:function(){var e=Al(kr)[0],t=Oe().memoizedState;return[e,t]},useMutableSource:Ac,useSyncExternalStore:jc,useId:Oc,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=$({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function di(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:$({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?on(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Mt(e),l=ht(r,o);l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(Je(t,e,o,r),ro(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ke(),o=Mt(e),l=ht(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(Je(t,e,o,r),ro(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),r=Mt(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(Je(t,e,r,n),ro(t,e,r))}};function Cs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!hr(n,r)||!hr(o,l):!0}function Vc(e,t,n){var r=!1,o=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(o=Re(t)?qt:xe.current,r=t.contextTypes,l=(r=r!=null)?Rn(e,o):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function As(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function fi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ra(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Fe(l):(l=Re(t)?qt:xe.current,o.context=Rn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(di(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yo.enqueueReplaceState(o,o.state,null),bo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tn(e,t){try{var n="",r=t;do n+=wf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Yp=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Po||(Po=!0,Ei=r),pi(e,t)},n}function Hc(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){pi(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Yp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=ah.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bs(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Jp=wt.ReactCurrentOwner,Ae=!1;function we(e,t,n,r){t.child=e===null?kc(t,null,n,r):Nn(t,e.child,n,r)}function Ns(e,t,n,r,o){n=n.render;var l=t.ref;return Cn(t,o),r=sa(e,t,n,r,l,o),n=ua(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Z&&n&&Xi(t),t.flags|=1,we(e,t,r,o),t.child)}function Ls(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!xa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yc(e,t,l,r,o)):(e=uo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:hr,n(i,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Ut(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(hr(l,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,vt(e,t,o)}return hi(e,t,n,r,o)}function Jc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(xn,Ne),Ne|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(xn,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,K(xn,Ne),Ne|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,K(xn,Ne),Ne|=r;return we(e,t,o,n),t.child}function Zc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hi(e,t,n,r,o){var l=Re(n)?qt:xe.current;return l=Rn(t,l),Cn(t,o),n=sa(e,t,n,r,l,o),r=ua(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Z&&r&&Xi(t),t.flags|=1,we(e,t,n,o),t.child)}function Ts(e,t,n,r,o){if(Re(n)){var l=!0;Eo(t)}else l=!1;if(Cn(t,o),t.stateNode===null)io(e,t),Vc(t,n,r),fi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var u=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fe(c):(c=Re(n)?qt:xe.current,c=Rn(t,c));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||u!==c)&&As(t,i,r,c),jt=!1;var g=t.memoizedState;i.state=g,bo(t,r,i,o),u=t.memoizedState,a!==r||g!==u||je.current||jt?(typeof p=="function"&&(di(t,n,p,r),u=t.memoizedState),(a=jt||Cs(t,n,a,r,g,u,c))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Ec(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ve(t.type,a),i.props=c,d=t.pendingProps,g=i.context,u=n.contextType,typeof u=="object"&&u!==null?u=Fe(u):(u=Re(n)?qt:xe.current,u=Rn(t,u));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==d||g!==u)&&As(t,i,r,u),jt=!1,g=t.memoizedState,i.state=g,bo(t,r,i,o);var w=t.memoizedState;a!==d||g!==w||je.current||jt?(typeof x=="function"&&(di(t,n,x,r),w=t.memoizedState),(c=jt||Cs(t,n,c,r,g,w,u)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=u,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return mi(e,t,n,r,l,o)}function mi(e,t,n,r,o,l){Zc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&gs(t,n,!1),vt(e,t,l);r=t.stateNode,Jp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Nn(t,e.child,null,l),t.child=Nn(t,null,a,l)):we(e,t,a,l),t.memoizedState=r.state,o&&gs(t,n,!0),t.child}function Xc(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),oa(e,t.containerInfo)}function Is(e,t,n,r,o){return bn(),qi(o),t.flags|=256,we(e,t,n,r),t.child}var gi={dehydrated:null,treeContext:null,retryLane:0};function yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,n){var r=t.pendingProps,o=X.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(X,o&1),e===null)return ui(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Xo(i,r,0,null),e=_t(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=yi(n),t.memoizedState=gi,e):fa(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Zp(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Ut(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Ut(a,l):(l=_t(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?yi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=gi,r}return l=e.child,e=l.sibling,r=Ut(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fa(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Hr(e,t,n,r){return r!==null&&qi(r),Nn(t,e.child,null,n),e=fa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zp(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=jl(Error(b(422))),Hr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Xo({mode:"visible",children:r.children},o,0,null),l=_t(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Nn(t,e.child,null,i),t.child.memoizedState=yi(i),t.memoizedState=gi,l);if(!(t.mode&1))return Hr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(b(419)),r=jl(l,r,void 0),Hr(e,t,i,r)}if(a=(i&e.childLanes)!==0,Ae||a){if(r=de,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,yt(e,o),Je(r,e,o,-1))}return va(),r=jl(Error(b(421))),Hr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sh.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Le=Bt(o.nextSibling),Te=t,Z=!0,He=null,e!==null&&(De[ze++]=ft,De[ze++]=pt,De[ze++]=$t,ft=e.id,pt=e.overflow,$t=t),t=fa(t,r.children),t.flags|=4096,t)}function Ps(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ci(e.return,t,n)}function Rl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function qc(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(we(e,t,r.children,n),r=X.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ps(e,n,t);else if(e.tag===19)Ps(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(X,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Rl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Rl(t,!0,n,null,l);break;case"together":Rl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function io(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xp(e,t,n){switch(t.tag){case 3:Xc(t),bn();break;case 5:Cc(t);break;case 1:Re(t.type)&&Eo(t);break;case 4:oa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(jo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(X,X.current&1),t.flags|=128,null):n&t.child.childLanes?_c(e,t,n):(K(X,X.current&1),e=vt(e,t,n),e!==null?e.sibling:null);K(X,X.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Jc(e,t,n)}return vt(e,t,n)}var $c,vi,ed,td;$c=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};vi=function(){};ed=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Zt(rt.current);var l=null;switch(n){case"input":o=Ol(e,o),r=Ol(e,r),l=[];break;case"select":o=$({},o,{value:void 0}),r=$({},r,{value:void 0}),l=[];break;case"textarea":o=Gl(e,o),r=Gl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ko)}Kl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ar.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var u=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&a[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(l||(l=[]),l.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(l=l||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(l=l||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ar.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&H("scroll",e),l||a===u||(l=[])):(l=l||[]).push(c,u))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};td=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _p(e,t,n){var r=t.pendingProps;switch(_i(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Re(t.type)&&So(),ye(t),null;case 3:return r=t.stateNode,Ln(),Y(je),Y(xe),ia(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,He!==null&&(ji(He),He=null))),vi(e,t),ye(t),null;case 5:la(t);var o=Zt(xr.current);if(n=t.type,e!==null&&t.stateNode!=null)ed(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return ye(t),null}if(e=Zt(rt.current),Vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[yr]=l,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<_n.length;o++)H(_n[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Qa(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Va(r,l),H("invalid",r)}Kl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Gr(r.textContent,a,e),o=["children",""+a]):ar.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&H("scroll",r)}switch(n){case"input":Dr(r),Ga(r,l,!0);break;case"textarea":Dr(r),Ka(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=ko)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[yr]=r,$c(e,t,!1,!1),t.stateNode=e;e:{switch(i=Hl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<_n.length;o++)H(_n[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Qa(e,r),o=Ol(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=$({},r,{value:void 0}),H("invalid",e);break;case"textarea":Va(e,r),o=Gl(e,r),H("invalid",e);break;default:o=r}Kl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var u=a[l];l==="style"?Iu(e,u):l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Lu(e,u)):l==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&sr(e,u):typeof u=="number"&&sr(e,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(ar.hasOwnProperty(l)?u!=null&&l==="onScroll"&&H("scroll",e):u!=null&&zi(e,l,u,i))}switch(n){case"input":Dr(e),Ga(e,r,!1);break;case"textarea":Dr(e),Ka(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?wn(e,!!r.multiple,l,!1):r.defaultValue!=null&&wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=ko)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=Zt(xr.current),Zt(rt.current),Vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return ye(t),null;case 13:if(Y(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&Le!==null&&t.mode&1&&!(t.flags&128))xc(),bn(),t.flags|=98560,l=!1;else if(l=Vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(b(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[tt]=t}else bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),l=!1}else He!==null&&(ji(He),He=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?le===0&&(le=3):va())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return Ln(),vi(e,t),e===null&&mr(t.stateNode.containerInfo),ye(t),null;case 10:return ta(t.type._context),ye(t),null;case 17:return Re(t.type)&&So(),ye(t),null;case 19:if(Y(X),l=t.memoizedState,l===null)return ye(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Kn(l,!1);else{if(le!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=No(e),i!==null){for(t.flags|=128,Kn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(X,X.current&1|2),t.child}e=e.sibling}l.tail!==null&&te()>In&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=No(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Z)return ye(t),null}else 2*te()-l.renderingStartTime>In&&n!==1073741824&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=te(),t.sibling=null,n=X.current,K(X,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return ya(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ne&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function qp(e,t){switch(_i(t),t.tag){case 1:return Re(t.type)&&So(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(),Y(je),Y(xe),ia(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return la(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return Ln(),null;case 10:return ta(t.type._context),null;case 22:case 23:return ya(),null;case 24:return null;default:return null}}var Yr=!1,ve=!1,$p=typeof WeakSet=="function"?WeakSet:Set,D=null;function vn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ee(e,t,r)}else n.current=null}function xi(e,t,n){try{n()}catch(r){ee(e,t,r)}}var Bs=!1;function eh(e,t){if(ni=vo,e=ic(),Zi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,u=-1,c=0,p=0,d=e,g=null;t:for(;;){for(var x;d!==n||o!==0&&d.nodeType!==3||(a=i+o),d!==l||r!==0&&d.nodeType!==3||(u=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(x=d.firstChild)!==null;)g=d,d=x;for(;;){if(d===e)break t;if(g===n&&++c===o&&(a=i),g===l&&++p===r&&(u=i),(x=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=x}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ri={focusedElem:e,selectionRange:n},vo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var k=w.memoizedProps,A=w.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?k:Ve(t.type,k),A);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){ee(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return w=Bs,Bs=!1,w}function or(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&xi(t,n,l)}o=o.next}while(o!==r)}}function Jo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function wi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function nd(e){var t=e.alternate;t!==null&&(e.alternate=null,nd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[yr],delete t[ii],delete t[zp],delete t[Mp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ki(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ko));else if(r!==4&&(e=e.child,e!==null))for(ki(e,t,n),e=e.sibling;e!==null;)ki(e,t,n),e=e.sibling}function Si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Si(e,t,n),e=e.sibling;e!==null;)Si(e,t,n),e=e.sibling}var fe=null,Ke=!1;function Et(e,t,n){for(n=n.child;n!==null;)od(e,t,n),n=n.sibling}function od(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Oo,n)}catch{}switch(n.tag){case 5:ve||vn(n,t);case 6:var r=fe,o=Ke;fe=null,Et(e,t,n),fe=r,Ke=o,fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),fr(e)):wl(fe,n.stateNode));break;case 4:r=fe,o=Ke,fe=n.stateNode.containerInfo,Ke=!0,Et(e,t,n),fe=r,Ke=o;break;case 0:case 11:case 14:case 15:if(!ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&xi(n,t,i),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!ve&&(vn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ee(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(ve=(r=ve)||n.memoizedState!==null,Et(e,t,n),ve=r):Et(e,t,n);break;default:Et(e,t,n)}}function zs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $p),t.forEach(function(r){var o=uh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:fe=a.stateNode,Ke=!1;break e;case 3:fe=a.stateNode.containerInfo,Ke=!0;break e;case 4:fe=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(fe===null)throw Error(b(160));od(l,i,o),fe=null,Ke=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){ee(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ld(t,e),t=t.sibling}function ld(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),qe(e),r&4){try{or(3,e,e.return),Jo(3,e)}catch(k){ee(e,e.return,k)}try{or(5,e,e.return)}catch(k){ee(e,e.return,k)}}break;case 1:Qe(t,e),qe(e),r&512&&n!==null&&vn(n,n.return);break;case 5:if(Qe(t,e),qe(e),r&512&&n!==null&&vn(n,n.return),e.flags&32){var o=e.stateNode;try{sr(o,"")}catch(k){ee(e,e.return,k)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Ru(o,l),Hl(a,i);var c=Hl(a,l);for(i=0;i<u.length;i+=2){var p=u[i],d=u[i+1];p==="style"?Iu(o,d):p==="dangerouslySetInnerHTML"?Lu(o,d):p==="children"?sr(o,d):zi(o,p,d,c)}switch(a){case"input":Wl(o,l);break;case"textarea":bu(o,l);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?wn(o,!!l.multiple,x,!1):g!==!!l.multiple&&(l.defaultValue!=null?wn(o,!!l.multiple,l.defaultValue,!0):wn(o,!!l.multiple,l.multiple?[]:"",!1))}o[yr]=l}catch(k){ee(e,e.return,k)}}break;case 6:if(Qe(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(b(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(k){ee(e,e.return,k)}}break;case 3:if(Qe(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fr(t.containerInfo)}catch(k){ee(e,e.return,k)}break;case 4:Qe(t,e),qe(e);break;case 13:Qe(t,e),qe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ma=te())),r&4&&zs(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(ve=(c=ve)||p,Qe(t,e),ve=c):Qe(t,e),qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&e.mode&1)for(D=e,p=e.child;p!==null;){for(d=D=p;D!==null;){switch(g=D,x=g.child,g.tag){case 0:case 11:case 14:case 15:or(4,g,g.return);break;case 1:vn(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(k){ee(r,n,k)}}break;case 5:vn(g,g.return);break;case 22:if(g.memoizedState!==null){Us(d);continue}}x!==null?(x.return=g,D=x):Us(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{o=d.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=d.stateNode,u=d.memoizedProps.style,i=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Tu("display",i))}catch(k){ee(e,e.return,k)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(k){ee(e,e.return,k)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Qe(t,e),qe(e),r&4&&zs(e);break;case 21:break;default:Qe(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(rd(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(sr(o,""),r.flags&=-33);var l=Ds(e);Si(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ds(e);ki(e,a,i);break;default:throw Error(b(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function th(e,t,n){D=e,id(e)}function id(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Yr;if(!i){var a=o.alternate,u=a!==null&&a.memoizedState!==null||ve;a=Yr;var c=ve;if(Yr=i,(ve=u)&&!c)for(D=o;D!==null;)i=D,u=i.child,i.tag===22&&i.memoizedState!==null?Fs(o):u!==null?(u.return=i,D=u):Fs(o);for(;l!==null;)D=l,id(l),l=l.sibling;D=o,Yr=a,ve=c}Ms(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,D=l):Ms(e)}}function Ms(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ve||Jo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ks(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ks(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&fr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}ve||t.flags&512&&wi(t)}catch(g){ee(t,t.return,g)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Us(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Fs(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Jo(4,t)}catch(u){ee(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var l=t.return;try{wi(t)}catch(u){ee(t,l,u)}break;case 5:var i=t.return;try{wi(t)}catch(u){ee(t,i,u)}}}catch(u){ee(t,t.return,u)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var nh=Math.ceil,Io=wt.ReactCurrentDispatcher,pa=wt.ReactCurrentOwner,Ue=wt.ReactCurrentBatchConfig,G=0,de=null,ne=null,pe=0,Ne=0,xn=Qt(0),le=0,Er=null,tn=0,Zo=0,ha=0,lr=null,Ce=null,ma=0,In=1/0,ct=null,Po=!1,Ei=null,zt=null,Jr=!1,Lt=null,Bo=0,ir=0,Ci=null,ao=-1,so=0;function ke(){return G&6?te():ao!==-1?ao:ao=te()}function Mt(e){return e.mode&1?G&2&&pe!==0?pe&-pe:Fp.transition!==null?(so===0&&(so=Vu()),so):(e=V,e!==0||(e=window.event,e=e===void 0?16:_u(e.type)),e):1}function Je(e,t,n,r){if(50<ir)throw ir=0,Ci=null,Error(b(185));jr(e,n,r),(!(G&2)||e!==de)&&(e===de&&(!(G&2)&&(Zo|=n),le===4&&bt(e,pe)),be(e,r),n===1&&G===0&&!(t.mode&1)&&(In=te()+500,Ko&&Gt()))}function be(e,t){var n=e.callbackNode;Ff(e,t);var r=yo(e,e===de?pe:0);if(r===0)n!==null&&Ja(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ja(n),t===1)e.tag===0?Up(Os.bind(null,e)):gc(Os.bind(null,e)),Bp(function(){!(G&6)&&Gt()}),n=null;else{switch(Ku(r)){case 1:n=Wi;break;case 4:n=Qu;break;case 16:n=go;break;case 536870912:n=Gu;break;default:n=go}n=hd(n,ad.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ad(e,t){if(ao=-1,so=0,G&6)throw Error(b(327));var n=e.callbackNode;if(An()&&e.callbackNode!==n)return null;var r=yo(e,e===de?pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Do(e,r);else{t=r;var o=G;G|=2;var l=ud();(de!==e||pe!==t)&&(ct=null,In=te()+500,Xt(e,t));do try{lh();break}catch(a){sd(e,a)}while(!0);ea(),Io.current=l,G=o,ne!==null?t=0:(de=null,pe=0,t=le)}if(t!==0){if(t===2&&(o=_l(e),o!==0&&(r=o,t=Ai(e,o))),t===1)throw n=Er,Xt(e,0),bt(e,r),be(e,te()),n;if(t===6)bt(e,r);else{if(o=e.current.alternate,!(r&30)&&!rh(o)&&(t=Do(e,r),t===2&&(l=_l(e),l!==0&&(r=l,t=Ai(e,l))),t===1))throw n=Er,Xt(e,0),bt(e,r),be(e,te()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:Ht(e,Ce,ct);break;case 3:if(bt(e,r),(r&130023424)===r&&(t=ma+500-te(),10<t)){if(yo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ke(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=li(Ht.bind(null,e,Ce,ct),t);break}Ht(e,Ce,ct);break;case 4:if(bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ye(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nh(r/1960))-r,10<r){e.timeoutHandle=li(Ht.bind(null,e,Ce,ct),r);break}Ht(e,Ce,ct);break;case 5:Ht(e,Ce,ct);break;default:throw Error(b(329))}}}return be(e,te()),e.callbackNode===n?ad.bind(null,e):null}function Ai(e,t){var n=lr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Do(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&ji(t)),e}function ji(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function rh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Xe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bt(e,t){for(t&=~ha,t&=~Zo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function Os(e){if(G&6)throw Error(b(327));An();var t=yo(e,0);if(!(t&1))return be(e,te()),null;var n=Do(e,t);if(e.tag!==0&&n===2){var r=_l(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Er,Xt(e,0),bt(e,t),be(e,te()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e,Ce,ct),be(e,te()),null}function ga(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(In=te()+500,Ko&&Gt())}}function nn(e){Lt!==null&&Lt.tag===0&&!(G&6)&&An();var t=G;G|=1;var n=Ue.transition,r=V;try{if(Ue.transition=null,V=1,e)return e()}finally{V=r,Ue.transition=n,G=t,!(G&6)&&Gt()}}function ya(){Ne=xn.current,Y(xn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pp(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(_i(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&So();break;case 3:Ln(),Y(je),Y(xe),ia();break;case 5:la(r);break;case 4:Ln();break;case 13:Y(X);break;case 19:Y(X);break;case 10:ta(r.type._context);break;case 22:case 23:ya()}n=n.return}if(de=e,ne=e=Ut(e.current,null),pe=Ne=t,le=0,Er=null,ha=Zo=tn=0,Ce=lr=null,Jt!==null){for(t=0;t<Jt.length;t++)if(n=Jt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Jt=null}return e}function sd(e,t){do{var n=ne;try{if(ea(),oo.current=To,Lo){for(var r=_.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Lo=!1}if(en=0,se=oe=_=null,rr=!1,wr=0,pa.current=null,n===null||n.return===null){le=1,Er=t,ne=null;break}e:{var l=e,i=n.return,a=n,u=t;if(t=pe,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=a,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=Rs(i);if(x!==null){x.flags&=-257,bs(x,i,a,l,t),x.mode&1&&js(l,c,t),t=x,u=c;var w=t.updateQueue;if(w===null){var k=new Set;k.add(u),t.updateQueue=k}else w.add(u);break e}else{if(!(t&1)){js(l,c,t),va();break e}u=Error(b(426))}}else if(Z&&a.mode&1){var A=Rs(i);if(A!==null){!(A.flags&65536)&&(A.flags|=256),bs(A,i,a,l,t),qi(Tn(u,a));break e}}l=u=Tn(u,a),le!==4&&(le=2),lr===null?lr=[l]:lr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var h=Kc(l,u,t);ws(l,h);break e;case 1:a=u;var f=l.type,m=l.stateNode;if(!(l.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=Hc(l,a,t);ws(l,E);break e}}l=l.return}while(l!==null)}dd(n)}catch(v){t=v,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function ud(){var e=Io.current;return Io.current=To,e===null?To:e}function va(){(le===0||le===3||le===2)&&(le=4),de===null||!(tn&268435455)&&!(Zo&268435455)||bt(de,pe)}function Do(e,t){var n=G;G|=2;var r=ud();(de!==e||pe!==t)&&(ct=null,Xt(e,t));do try{oh();break}catch(o){sd(e,o)}while(!0);if(ea(),G=n,Io.current=r,ne!==null)throw Error(b(261));return de=null,pe=0,le}function oh(){for(;ne!==null;)cd(ne)}function lh(){for(;ne!==null&&!Lf();)cd(ne)}function cd(e){var t=pd(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?dd(e):ne=t,pa.current=null}function dd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=qp(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,ne=null;return}}else if(n=_p(n,t,Ne),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);le===0&&(le=5)}function Ht(e,t,n){var r=V,o=Ue.transition;try{Ue.transition=null,V=1,ih(e,t,n,r)}finally{Ue.transition=o,V=r}return null}function ih(e,t,n,r){do An();while(Lt!==null);if(G&6)throw Error(b(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Of(e,l),e===de&&(ne=de=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Jr||(Jr=!0,hd(go,function(){return An(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Ue.transition,Ue.transition=null;var i=V;V=1;var a=G;G|=4,pa.current=null,eh(e,n),ld(n,e),jp(ri),vo=!!ni,ri=ni=null,e.current=n,th(n),Tf(),G=a,V=i,Ue.transition=l}else e.current=n;if(Jr&&(Jr=!1,Lt=e,Bo=o),l=e.pendingLanes,l===0&&(zt=null),Bf(n.stateNode),be(e,te()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Po)throw Po=!1,e=Ei,Ei=null,e;return Bo&1&&e.tag!==0&&An(),l=e.pendingLanes,l&1?e===Ci?ir++:(ir=0,Ci=e):ir=0,Gt(),null}function An(){if(Lt!==null){var e=Ku(Bo),t=Ue.transition,n=V;try{if(Ue.transition=null,V=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,Bo=0,G&6)throw Error(b(331));var o=G;for(G|=4,D=e.current;D!==null;){var l=D,i=l.child;if(D.flags&16){var a=l.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(D=c;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:or(8,p,l)}var d=p.child;if(d!==null)d.return=p,D=d;else for(;D!==null;){p=D;var g=p.sibling,x=p.return;if(nd(p),p===c){D=null;break}if(g!==null){g.return=x,D=g;break}D=x}}}var w=l.alternate;if(w!==null){var k=w.child;if(k!==null){w.child=null;do{var A=k.sibling;k.sibling=null,k=A}while(k!==null)}}D=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,D=i;else e:for(;D!==null;){if(l=D,l.flags&2048)switch(l.tag){case 0:case 11:case 15:or(9,l,l.return)}var h=l.sibling;if(h!==null){h.return=l.return,D=h;break e}D=l.return}}var f=e.current;for(D=f;D!==null;){i=D;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,D=m;else e:for(i=f;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jo(9,a)}}catch(v){ee(a,a.return,v)}if(a===i){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(G=o,Gt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Oo,e)}catch{}r=!0}return r}finally{V=n,Ue.transition=t}}return!1}function Ws(e,t,n){t=Tn(n,t),t=Kc(e,t,1),e=Dt(e,t,1),t=ke(),e!==null&&(jr(e,1,t),be(e,t))}function ee(e,t,n){if(e.tag===3)Ws(e,e,n);else for(;t!==null;){if(t.tag===3){Ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Tn(n,e),e=Hc(t,e,1),t=Dt(t,e,1),e=ke(),t!==null&&(jr(t,1,e),be(t,e));break}}t=t.return}}function ah(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,de===e&&(pe&n)===n&&(le===4||le===3&&(pe&130023424)===pe&&500>te()-ma?Xt(e,0):ha|=n),be(e,t)}function fd(e,t){t===0&&(e.mode&1?(t=Ur,Ur<<=1,!(Ur&130023424)&&(Ur=4194304)):t=1);var n=ke();e=yt(e,t),e!==null&&(jr(e,t,n),be(e,n))}function sh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fd(e,n)}function uh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),fd(e,n)}var pd;pd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,Xp(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,Z&&t.flags&1048576&&yc(t,Ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;io(e,t),e=t.pendingProps;var o=Rn(t,xe.current);Cn(t,n),o=sa(null,t,r,e,o,n);var l=ua();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Re(r)?(l=!0,Eo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ra(t),o.updater=Yo,t.stateNode=o,o._reactInternals=t,fi(t,r,e,n),t=mi(null,t,r,!0,l,n)):(t.tag=0,Z&&l&&Xi(t),we(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(io(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dh(r),e=Ve(r,e),o){case 0:t=hi(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=Ns(null,t,r,e,n);break e;case 14:t=Ls(null,t,r,Ve(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),hi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),Ts(e,t,r,o,n);case 3:e:{if(Xc(t),e===null)throw Error(b(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Ec(e,t),bo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Tn(Error(b(423)),t),t=Is(e,t,r,n,o);break e}else if(r!==o){o=Tn(Error(b(424)),t),t=Is(e,t,r,n,o);break e}else for(Le=Bt(t.stateNode.containerInfo.firstChild),Te=t,Z=!0,He=null,n=kc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bn(),r===o){t=vt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Cc(t),e===null&&ui(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,oi(r,o)?i=null:l!==null&&oi(r,l)&&(t.flags|=32),Zc(e,t),we(e,t,i,n),t.child;case 6:return e===null&&ui(t),null;case 13:return _c(e,t,n);case 4:return oa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),Ns(e,t,r,o,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,K(jo,r._currentValue),r._currentValue=i,l!==null)if(Xe(l.value,i)){if(l.children===o.children&&!je.current){t=vt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(l.tag===1){u=ht(-1,n&-n),u.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ci(l.return,n,t),a.lanes|=n;break}u=u.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(b(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),ci(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}we(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Cn(t,n),o=Fe(o),r=r(o),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,o=Ve(r,t.pendingProps),o=Ve(r.type,o),Ls(e,t,r,o,n);case 15:return Yc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),io(e,t),t.tag=1,Re(r)?(e=!0,Eo(t)):e=!1,Cn(t,n),Vc(t,r,o),fi(t,r,o,n),mi(null,t,r,!0,e,n);case 19:return qc(e,t,n);case 22:return Jc(e,t,n)}throw Error(b(156,t.tag))};function hd(e,t){return Wu(e,t)}function ch(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new ch(e,t,n,r)}function xa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dh(e){if(typeof e=="function")return xa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ui)return 11;if(e===Fi)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function uo(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")xa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case un:return _t(n.children,o,l,t);case Mi:i=8,o|=8;break;case zl:return e=Me(12,n,t,o|2),e.elementType=zl,e.lanes=l,e;case Ml:return e=Me(13,n,t,o),e.elementType=Ml,e.lanes=l,e;case Ul:return e=Me(19,n,t,o),e.elementType=Ul,e.lanes=l,e;case Cu:return Xo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Su:i=10;break e;case Eu:i=9;break e;case Ui:i=11;break e;case Fi:i=14;break e;case At:i=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=Me(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function _t(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=Me(22,e,r,t),e.elementType=Cu,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function Nl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function fh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function wa(e,t,n,r,o,l,i,a,u){return e=new fh(e,t,n,a,u),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Me(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ra(l),e}function ph(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function md(e){if(!e)return Ot;e=e._reactInternals;e:{if(on(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Re(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Re(n))return mc(e,n,t)}return t}function gd(e,t,n,r,o,l,i,a,u){return e=wa(n,r,!0,e,o,l,i,a,u),e.context=md(null),n=e.current,r=ke(),o=Mt(n),l=ht(r,o),l.callback=t??null,Dt(n,l,o),e.current.lanes=o,jr(e,o,r),be(e,r),e}function _o(e,t,n,r){var o=t.current,l=ke(),i=Mt(o);return n=md(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,i),e!==null&&(Je(e,o,i,l),ro(e,o,i)),i}function zo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ka(e,t){Qs(e,t),(e=e.alternate)&&Qs(e,t)}function hh(){return null}var yd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sa(e){this._internalRoot=e}qo.prototype.render=Sa.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));_o(e,t,null,null)};qo.prototype.unmount=Sa.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){_o(null,e,null,null)}),t[gt]=null}};function qo(e){this._internalRoot=e}qo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ju();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&Xu(e)}};function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function mh(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=zo(i);l.call(c)}}var i=gd(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=i,e[gt]=i.current,mr(e.nodeType===8?e.parentNode:e),nn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=zo(u);a.call(c)}}var u=wa(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=u,e[gt]=u.current,mr(e.nodeType===8?e.parentNode:e),nn(function(){_o(t,u,n,r)}),u}function el(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var u=zo(i);a.call(u)}}_o(t,i,e,o)}else i=mh(n,t,e,o,r);return zo(i)}Hu=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Xn(t.pendingLanes);n!==0&&(Qi(t,n|1),be(t,te()),!(G&6)&&(In=te()+500,Gt()))}break;case 13:nn(function(){var r=yt(e,1);if(r!==null){var o=ke();Je(r,e,1,o)}}),ka(e,1)}};Gi=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ke();Je(t,e,134217728,n)}ka(e,134217728)}};Yu=function(e){if(e.tag===13){var t=Mt(e),n=yt(e,t);if(n!==null){var r=ke();Je(n,e,t,r)}ka(e,t)}};Ju=function(){return V};Zu=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Jl=function(e,t,n){switch(t){case"input":if(Wl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Vo(r);if(!o)throw Error(b(90));ju(r),Wl(r,o)}}}break;case"textarea":bu(e,n);break;case"select":t=n.value,t!=null&&wn(e,!!n.multiple,t,!1)}};Du=ga;zu=nn;var gh={usingClientEntryPoint:!1,Events:[br,pn,Vo,Pu,Bu,ga]},Hn={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yh={bundleType:Hn.bundleType,version:Hn.version,rendererPackageName:Hn.rendererPackageName,rendererConfig:Hn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fu(e),e===null?null:e.stateNode},findFiberByHostInstance:Hn.findFiberByHostInstance||hh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zr.isDisabled&&Zr.supportsFiber)try{Oo=Zr.inject(yh),nt=Zr}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gh;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ea(t))throw Error(b(200));return ph(e,t,null,n)};Pe.createRoot=function(e,t){if(!Ea(e))throw Error(b(299));var n=!1,r="",o=yd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=wa(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,mr(e.nodeType===8?e.parentNode:e),new Sa(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Fu(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return nn(e)};Pe.hydrate=function(e,t,n){if(!$o(t))throw Error(b(200));return el(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Ea(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=yd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gd(t,null,e,1,n??null,o,!1,l,i),e[gt]=t.current,mr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new qo(t)};Pe.render=function(e,t,n){if(!$o(t))throw Error(b(200));return el(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!$o(e))throw Error(b(40));return e._reactRootContainer?(nn(function(){el(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Pe.unstable_batchedUpdates=ga;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return el(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vu.exports=Pe;var vh=vu.exports,Vs=vh;Bl.createRoot=Vs.createRoot,Bl.hydrateRoot=Vs.hydrateRoot;/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ks="popstate";function Hs(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function xh(e={}){function t(r,o){var c;let l=(c=o.state)==null?void 0:c.masked,{pathname:i,search:a,hash:u}=l||r.location;return Ri("",{pathname:i,search:a,hash:u},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Cr(o)}return kh(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function wh(){return Math.random().toString(36).substring(2,10)}function Ys(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ri(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?zn(t):t,state:n,key:t&&t.key||r||wh(),unstable_mask:o}}function Cr({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function kh(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a="POP",u=null,c=p();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function p(){return(i.state||{idx:null}).idx}function d(){a="POP";let A=p(),h=A==null?null:A-c;c=A,u&&u({action:a,location:k.location,delta:h})}function g(A,h){a="PUSH";let f=Hs(A)?A:Ri(k.location,A,h);c=p()+1;let m=Ys(f,c),E=k.createHref(f.unstable_mask||f);try{i.pushState(m,"",E)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;o.location.assign(E)}l&&u&&u({action:a,location:k.location,delta:1})}function x(A,h){a="REPLACE";let f=Hs(A)?A:Ri(k.location,A,h);c=p();let m=Ys(f,c),E=k.createHref(f.unstable_mask||f);i.replaceState(m,"",E),l&&u&&u({action:a,location:k.location,delta:0})}function w(A){return Sh(A)}let k={get action(){return a},get location(){return e(o,i)},listen(A){if(u)throw new Error("A history only accepts one active listener");return o.addEventListener(Ks,d),u=A,()=>{o.removeEventListener(Ks,d),u=null}},createHref(A){return t(o,A)},createURL:w,encodeLocation(A){let h=w(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(A){return i.go(A)}};return k}function Sh(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),q(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Cr(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function xd(e,t,n="/"){return Eh(e,t,n,!1)}function Eh(e,t,n,r){let o=typeof t=="string"?zn(t):t,l=xt(o.pathname||"/",n);if(l==null)return null;let i=wd(e);Ch(i);let a=null;for(let u=0;a==null&&u<i.length;++u){let c=Dh(l);a=Ph(i[u],c,r)}return a}function wd(e,t=[],n=[],r="",o=!1){let l=(i,a,u=o,c)=>{let p={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};if(p.relativePath.startsWith("/")){if(!p.relativePath.startsWith(r)&&u)return;q(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length)}let d=Ze([r,p.relativePath]),g=n.concat(p);i.children&&i.children.length>0&&(q(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),wd(i.children,t,g,d,u)),!(i.path==null&&!i.index)&&t.push({path:d,score:Th(d,i.index),routesMeta:g})};return e.forEach((i,a)=>{var u;if(i.path===""||!((u=i.path)!=null&&u.includes("?")))l(i,a);else for(let c of kd(i.path))l(i,a,!0,c)}),t}function kd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=kd(r.join("/")),a=[];return a.push(...i.map(u=>u===""?l:[l,u].join("/"))),o&&a.push(...i),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function Ch(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ih(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Ah=/^:[\w-]+$/,jh=3,Rh=2,bh=1,Nh=10,Lh=-2,Js=e=>e==="*";function Th(e,t){let n=e.split("/"),r=n.length;return n.some(Js)&&(r+=Lh),t&&(r+=Rh),n.filter(o=>!Js(o)).reduce((o,l)=>o+(Ah.test(l)?jh:l===""?bh:Nh),r)}function Ih(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Ph(e,t,n=!1){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let u=r[a],c=a===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",d=Mo({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},p),g=u.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Mo({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!d)return null;Object.assign(o,d.params),i.push({params:o,pathname:Ze([l,d.pathname]),pathnameBase:Fh(Ze([l,d.pathnameBase])),route:g}),d.pathnameBase!=="/"&&(l=Ze([l,d.pathnameBase]))}return i}function Mo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Bh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,{paramName:p,isOptional:d},g)=>{if(p==="*"){let w=a[g]||"";i=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const x=a[g];return d&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function Bh(e,t=!1,n=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,u,c,p)=>{if(r.push({paramName:a,isOptional:u!=null}),u){let d=p.charAt(c+i.length);return d&&d!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Dh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Mh(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zn(e):e,l;return n?(n=Ed(n),n.startsWith("/")?l=Zs(n.substring(1),"/"):l=Zs(n,t)):l=t,{pathname:l,search:Oh(r),hash:Wh(o)}}function Zs(e,t){let n=Uo(t).split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ll(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Uh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sd(e){let t=Uh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Ca(e,t,n,r=!1){let o;typeof e=="string"?o=zn(e):(o={...e},q(!o.pathname||!o.pathname.includes("?"),Ll("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),Ll("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),Ll("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),d-=1;o.pathname=g.join("/")}a=d>=0?t[d]:"/"}let u=Mh(o,a),c=i&&i!=="/"&&i.endsWith("/"),p=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||p)&&(u.pathname+="/"),u}var Ed=e=>e.replace(/\/\/+/g,"/"),Ze=e=>Ed(e.join("/")),Uo=e=>e.replace(/\/+$/,""),Fh=e=>Uo(e).replace(/^\/*/,"/"),Oh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Wh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Qh=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Gh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Vh(e){let t=e.map(n=>n.route.path).filter(Boolean);return Ze(t)||"/"}var Cd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ad(e,t){let n=e;if(typeof n!="string"||!zh.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Cd)try{let l=new URL(window.location.href),i=n.startsWith("//")?new URL(l.protocol+n):new URL(n),a=xt(i.pathname,t);i.origin===l.origin&&a!=null?n=a+i.search+i.hash:o=!0}catch{ot(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var jd=["POST","PUT","PATCH","DELETE"];new Set(jd);var Kh=["GET",...jd];new Set(Kh);var Mn=y.createContext(null);Mn.displayName="DataRouter";var tl=y.createContext(null);tl.displayName="DataRouterState";var Rd=y.createContext(!1);function Hh(){return y.useContext(Rd)}var bd=y.createContext({isTransitioning:!1});bd.displayName="ViewTransition";var Yh=y.createContext(new Map);Yh.displayName="Fetchers";var Jh=y.createContext(null);Jh.displayName="Await";var We=y.createContext(null);We.displayName="Navigation";var Lr=y.createContext(null);Lr.displayName="Location";var kt=y.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var Aa=y.createContext(null);Aa.displayName="RouteError";var Nd="REACT_ROUTER_ERROR",Zh="REDIRECT",Xh="ROUTE_ERROR_RESPONSE";function _h(e){if(e.startsWith(`${Nd}:${Zh}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function qh(e){if(e.startsWith(`${Nd}:${Xh}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Qh(t.status,t.statusText,t.data)}catch{}}function $h(e,{relative:t}={}){q(Tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(We),{hash:o,pathname:l,search:i}=Ir(e,{relative:t}),a=l;return n!=="/"&&(a=l==="/"?n:Ze([n,l])),r.createHref({pathname:a,search:i,hash:o})}function Tr(){return y.useContext(Lr)!=null}function _e(){return q(Tr(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Lr).location}var Ld="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Td(e){y.useContext(We).static||y.useLayoutEffect(e)}function nl(){let{isDataRoute:e}=y.useContext(kt);return e?fm():em()}function em(){q(Tr(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(Mn),{basename:t,navigator:n}=y.useContext(We),{matches:r}=y.useContext(kt),{pathname:o}=_e(),l=JSON.stringify(Sd(r)),i=y.useRef(!1);return Td(()=>{i.current=!0}),y.useCallback((u,c={})=>{if(ot(i.current,Ld),!i.current)return;if(typeof u=="number"){n.go(u);return}let p=Ca(u,JSON.parse(l),o,c.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Ze([t,p.pathname])),(c.replace?n.replace:n.push)(p,c.state,c)},[t,n,l,o,e])}y.createContext(null);function Ir(e,{relative:t}={}){let{matches:n}=y.useContext(kt),{pathname:r}=_e(),o=JSON.stringify(Sd(n));return y.useMemo(()=>Ca(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function tm(e,t){return Id(e,t)}function Id(e,t,n){var A;q(Tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=y.useContext(We),{matches:o}=y.useContext(kt),l=o[o.length-1],i=l?l.params:{},a=l?l.pathname:"/",u=l?l.pathnameBase:"/",c=l&&l.route;{let h=c&&c.path||"";Bd(a,!c||h.endsWith("*")||h.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h==="/"?"*":`${h}/*`}">.`)}let p=_e(),d;if(t){let h=typeof t=="string"?zn(t):t;q(u==="/"||((A=h.pathname)==null?void 0:A.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${h.pathname}" was given in the \`location\` prop.`),d=h}else d=p;let g=d.pathname||"/",x=g;if(u!=="/"){let h=u.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(h.length).join("/")}let w=xd(e,{pathname:x});ot(c||w!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),ot(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=im(w&&w.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:Ze([u,r.encodeLocation?r.encodeLocation(h.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?u:Ze([u,r.encodeLocation?r.encodeLocation(h.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:h.pathnameBase])})),o,n);return t&&k?y.createElement(Lr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...d},navigationType:"POP"}},k):k}function nm(){let e=dm(),t=Gh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:l},"ErrorBoundary")," or"," ",y.createElement("code",{style:l},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,i)}var rm=y.createElement(nm,null),Pd=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=qh(e.digest);n&&(e=n)}let t=e!==void 0?y.createElement(kt.Provider,{value:this.props.routeContext},y.createElement(Aa.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(om,{error:e},t):t}};Pd.contextType=Rd;var Tl=new WeakMap;function om({children:e,error:t}){let{basename:n}=y.useContext(We);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=_h(t.digest);if(r){let o=Tl.get(t);if(o)throw o;let l=Ad(r.location,n);if(Cd&&!Tl.get(t))if(l.isExternal||r.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw Tl.set(t,i),i}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function lm({routeContext:e,match:t,children:n}){let r=y.useContext(Mn);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(kt.Provider,{value:e},n)}function im(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=r==null?void 0:r.errors;if(l!=null){let p=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);q(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let i=!1,a=-1;if(n&&r){i=r.renderFallback;for(let p=0;p<o.length;p++){let d=o[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(a=p),d.route.id){let{loaderData:g,errors:x}=r,w=d.route.loader&&!g.hasOwnProperty(d.route.id)&&(!x||x[d.route.id]===void 0);if(d.route.lazy||w){n.isStatic&&(i=!0),a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}}let u=n==null?void 0:n.onError,c=r&&u?(p,d)=>{var g,x;u(p,{location:r.location,params:((x=(g=r.matches)==null?void 0:g[0])==null?void 0:x.params)??{},unstable_pattern:Vh(r.matches),errorInfo:d})}:void 0;return o.reduceRight((p,d,g)=>{let x,w=!1,k=null,A=null;r&&(x=l&&d.route.id?l[d.route.id]:void 0,k=d.route.errorElement||rm,i&&(a<0&&g===0?(Bd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,A=null):a===g&&(w=!0,A=d.route.hydrateFallbackElement||null)));let h=t.concat(o.slice(0,g+1)),f=()=>{let m;return x?m=k:w?m=A:d.route.Component?m=y.createElement(d.route.Component,null):d.route.element?m=d.route.element:m=p,y.createElement(lm,{match:d,routeContext:{outlet:p,matches:h,isDataRoute:r!=null},children:m})};return r&&(d.route.ErrorBoundary||d.route.errorElement||g===0)?y.createElement(Pd,{location:r.location,revalidation:r.revalidation,component:k,error:x,children:f(),routeContext:{outlet:null,matches:h,isDataRoute:!0},onError:c}):f()},null)}function ja(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function am(e){let t=y.useContext(Mn);return q(t,ja(e)),t}function sm(e){let t=y.useContext(tl);return q(t,ja(e)),t}function um(e){let t=y.useContext(kt);return q(t,ja(e)),t}function Ra(e){let t=um(e),n=t.matches[t.matches.length-1];return q(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function cm(){return Ra("useRouteId")}function dm(){var r;let e=y.useContext(Aa),t=sm("useRouteError"),n=Ra("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function fm(){let{router:e}=am("useNavigate"),t=Ra("useNavigate"),n=y.useRef(!1);return Td(()=>{n.current=!0}),y.useCallback(async(o,l={})=>{ot(n.current,Ld),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Xs={};function Bd(e,t,n){!t&&!Xs[e]&&(Xs[e]=!0,ot(!1,n))}y.memo(pm);function pm({routes:e,future:t,state:n,isStatic:r,onError:o}){return Id(e,void 0,{state:n,isStatic:r,onError:o})}function $e(e){q(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function hm({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:l=!1,unstable_useTransitions:i}){q(!Tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:a,navigator:o,static:l,unstable_useTransitions:i,future:{}}),[a,o,l,i]);typeof n=="string"&&(n=zn(n));let{pathname:c="/",search:p="",hash:d="",state:g=null,key:x="default",unstable_mask:w}=n,k=y.useMemo(()=>{let A=xt(c,a);return A==null?null:{location:{pathname:A,search:p,hash:d,state:g,key:x,unstable_mask:w},navigationType:r}},[a,c,p,d,g,x,r,w]);return ot(k!=null,`<Router basename="${a}"> is not able to match the URL "${c}${p}${d}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:y.createElement(We.Provider,{value:u},y.createElement(Lr.Provider,{children:t,value:k}))}function mm({children:e,location:t}){return tm(bi(e),t)}function bi(e,t=[]){let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,bi(r.props.children,l));return}q(r.type===$e,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),q(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=bi(r.props.children,l)),n.push(i)}),n}var co="get",fo="application/x-www-form-urlencoded";function rl(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function gm(e){return rl(e)&&e.tagName.toLowerCase()==="button"}function ym(e){return rl(e)&&e.tagName.toLowerCase()==="form"}function vm(e){return rl(e)&&e.tagName.toLowerCase()==="input"}function xm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function wm(e,t){return e.button===0&&(!t||t==="_self")&&!xm(e)}var Xr=null;function km(){if(Xr===null)try{new FormData(document.createElement("form"),0),Xr=!1}catch{Xr=!0}return Xr}var Sm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Il(e){return e!=null&&!Sm.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${fo}"`),null):e}function Em(e,t){let n,r,o,l,i;if(ym(e)){let a=e.getAttribute("action");r=a?xt(a,t):null,n=e.getAttribute("method")||co,o=Il(e.getAttribute("enctype"))||fo,l=new FormData(e)}else if(gm(e)||vm(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let u=e.getAttribute("formaction")||a.getAttribute("action");if(r=u?xt(u,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||co,o=Il(e.getAttribute("formenctype"))||Il(a.getAttribute("enctype"))||fo,l=new FormData(a,e),!km()){let{name:c,type:p,value:d}=e;if(p==="image"){let g=c?`${c}.`:"";l.append(`${g}x`,"0"),l.append(`${g}y`,"0")}else c&&l.append(c,d)}}else{if(rl(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=co,r=null,o=fo,i=e}return l&&o==="text/plain"&&(i=l,l=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:l,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ba(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dd(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&xt(o.pathname,t)==="/"?o.pathname=`${Uo(t)}/_root.${r}`:o.pathname=`${Uo(o.pathname)}.${r}`,o}async function Cm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Am(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function jm(e,t,n){let r=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let i=await Cm(l,n);return i.links?i.links():[]}return[]}));return Lm(r.flat(1).filter(Am).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _s(e,t,n,r,o,l){let i=(u,c)=>n[c]?u.route.id!==n[c].route.id:!0,a=(u,c)=>{var p;return n[c].pathname!==u.pathname||((p=n[c].route.path)==null?void 0:p.endsWith("*"))&&n[c].params["*"]!==u.params["*"]};return l==="assets"?t.filter((u,c)=>i(u,c)||a(u,c)):l==="data"?t.filter((u,c)=>{var d;let p=r.routes[u.route.id];if(!p||!p.hasLoader)return!1;if(i(u,c)||a(u,c))return!0;if(u.route.shouldRevalidate){let g=u.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((d=n[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function Rm(e,t,{includeHydrateFallback:n}={}){return bm(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function bm(e){return[...new Set(e)]}function Nm(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Lm(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let l=JSON.stringify(Nm(o));return n.has(l)||(n.add(l),r.push({key:l,link:o})),r},[])}function Na(){let e=y.useContext(Mn);return ba(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Tm(){let e=y.useContext(tl);return ba(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var La=y.createContext(void 0);La.displayName="FrameworkContext";function Ta(){let e=y.useContext(La);return ba(e,"You must render this element inside a <HydratedRouter> element"),e}function Im(e,t){let n=y.useContext(La),[r,o]=y.useState(!1),[l,i]=y.useState(!1),{onFocus:a,onBlur:u,onMouseEnter:c,onMouseLeave:p,onTouchStart:d}=t,g=y.useRef(null);y.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let k=h=>{h.forEach(f=>{i(f.isIntersecting)})},A=new IntersectionObserver(k,{threshold:.5});return g.current&&A.observe(g.current),()=>{A.disconnect()}}},[e]),y.useEffect(()=>{if(r){let k=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(k)}}},[r]);let x=()=>{o(!0)},w=()=>{o(!1),i(!1)};return n?e!=="intent"?[l,g,{}]:[l,g,{onFocus:Yn(a,x),onBlur:Yn(u,w),onMouseEnter:Yn(c,x),onMouseLeave:Yn(p,w),onTouchStart:Yn(d,x)}]:[!1,g,{}]}function Yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Pm({page:e,...t}){let n=Hh(),{router:r}=Na(),o=y.useMemo(()=>xd(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?n?y.createElement(Dm,{page:e,matches:o,...t}):y.createElement(zm,{page:e,matches:o,...t}):null}function Bm(e){let{manifest:t,routeModules:n}=Ta(),[r,o]=y.useState([]);return y.useEffect(()=>{let l=!1;return jm(e,t,n).then(i=>{l||o(i)}),()=>{l=!0}},[e,t,n]),r}function Dm({page:e,matches:t,...n}){let r=_e(),{future:o}=Ta(),{basename:l}=Na(),i=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=Dd(e,l,o.unstable_trailingSlashAwareDataRequests,"rsc"),u=!1,c=[];for(let p of t)typeof p.route.shouldRevalidate=="function"?u=!0:c.push(p.route.id);return u&&c.length>0&&a.searchParams.set("_routes",c.join(",")),[a.pathname+a.search]},[l,o.unstable_trailingSlashAwareDataRequests,e,r,t]);return y.createElement(y.Fragment,null,i.map(a=>y.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function zm({page:e,matches:t,...n}){let r=_e(),{future:o,manifest:l,routeModules:i}=Ta(),{basename:a}=Na(),{loaderData:u,matches:c}=Tm(),p=y.useMemo(()=>_s(e,t,c,l,r,"data"),[e,t,c,l,r]),d=y.useMemo(()=>_s(e,t,c,l,r,"assets"),[e,t,c,l,r]),g=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let k=new Set,A=!1;if(t.forEach(f=>{var E;let m=l.routes[f.route.id];!m||!m.hasLoader||(!p.some(v=>v.route.id===f.route.id)&&f.route.id in u&&((E=i[f.route.id])!=null&&E.shouldRevalidate)||m.hasClientLoader?A=!0:k.add(f.route.id))}),k.size===0)return[];let h=Dd(e,a,o.unstable_trailingSlashAwareDataRequests,"data");return A&&k.size>0&&h.searchParams.set("_routes",t.filter(f=>k.has(f.route.id)).map(f=>f.route.id).join(",")),[h.pathname+h.search]},[a,o.unstable_trailingSlashAwareDataRequests,u,r,l,p,t,e,i]),x=y.useMemo(()=>Rm(d,l),[d,l]),w=Bm(d);return y.createElement(y.Fragment,null,g.map(k=>y.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...n})),x.map(k=>y.createElement("link",{key:k,rel:"modulepreload",href:k,...n})),w.map(({key:k,link:A})=>y.createElement("link",{key:k,nonce:n.nonce,...A,crossOrigin:A.crossOrigin??n.crossOrigin})))}function Mm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Um=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Um&&(window.__reactRouterVersion="7.14.2")}catch{}function Fm({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=y.useRef();o.current==null&&(o.current=xh({window:r,v5Compat:!0}));let l=o.current,[i,a]=y.useState({action:l.action,location:l.location}),u=y.useCallback(c=>{n===!1?a(c):y.startTransition(()=>a(c))},[n]);return y.useLayoutEffect(()=>l.listen(u),[l,u]),y.createElement(hm,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:l,unstable_useTransitions:n})}var zd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ia=y.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:l,replace:i,unstable_mask:a,state:u,target:c,to:p,preventScrollReset:d,viewTransition:g,unstable_defaultShouldRevalidate:x,...w},k){let{basename:A,navigator:h,unstable_useTransitions:f}=y.useContext(We),m=typeof p=="string"&&zd.test(p),E=Ad(p,A);p=E.to;let v=$h(p,{relative:o}),N=_e(),L=null;if(a){let ae=Ca(a,[],N.unstable_mask?N.unstable_mask.pathname:"/",!0);A!=="/"&&(ae.pathname=ae.pathname==="/"?A:Ze([A,ae.pathname])),L=h.createHref(ae)}let[P,U,T]=Im(r,w),M=Gm(p,{replace:i,unstable_mask:a,state:u,target:c,preventScrollReset:d,relative:o,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:f});function re(ae){t&&t(ae),ae.defaultPrevented||M(ae)}let me=!(E.isExternal||l),lt=y.createElement("a",{...w,...T,href:(me?L:void 0)||E.absoluteURL||v,onClick:me?re:t,ref:Mm(k,U),target:c,"data-discover":!m&&n==="render"?"true":void 0});return P&&!m?y.createElement(y.Fragment,null,lt,y.createElement(Pm,{page:v})):lt});Ia.displayName="Link";var Om=y.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:l,to:i,viewTransition:a,children:u,...c},p){let d=Ir(i,{relative:c.relative}),g=_e(),x=y.useContext(tl),{navigator:w,basename:k}=y.useContext(We),A=x!=null&&Jm(d)&&a===!0,h=w.encodeLocation?w.encodeLocation(d).pathname:d.pathname,f=g.pathname,m=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(f=f.toLowerCase(),m=m?m.toLowerCase():null,h=h.toLowerCase()),m&&k&&(m=xt(m,k)||m);const E=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let v=f===h||!o&&f.startsWith(h)&&f.charAt(E)==="/",N=m!=null&&(m===h||!o&&m.startsWith(h)&&m.charAt(h.length)==="/"),L={isActive:v,isPending:N,isTransitioning:A},P=v?t:void 0,U;typeof r=="function"?U=r(L):U=[r,v?"active":null,N?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let T=typeof l=="function"?l(L):l;return y.createElement(Ia,{...c,"aria-current":P,className:U,ref:p,style:T,to:i,viewTransition:a},typeof u=="function"?u(L):u)});Om.displayName="NavLink";var Wm=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:l,method:i=co,action:a,onSubmit:u,relative:c,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:g,...x},w)=>{let{unstable_useTransitions:k}=y.useContext(We),A=Hm(),h=Ym(a,{relative:c}),f=i.toLowerCase()==="get"?"get":"post",m=typeof a=="string"&&zd.test(a),E=v=>{if(u&&u(v),v.defaultPrevented)return;v.preventDefault();let N=v.nativeEvent.submitter,L=(N==null?void 0:N.getAttribute("formmethod"))||i,P=()=>A(N||v.currentTarget,{fetcherKey:t,method:L,navigate:n,replace:o,state:l,relative:c,preventScrollReset:p,viewTransition:d,unstable_defaultShouldRevalidate:g});k&&n!==!1?y.startTransition(()=>P()):P()};return y.createElement("form",{ref:w,method:f,action:h,onSubmit:r?u:E,...x,"data-discover":!m&&e==="render"?"true":void 0})});Wm.displayName="Form";function Qm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Md(e){let t=y.useContext(Mn);return q(t,Qm(e)),t}function Gm(e,{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:l,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:u,unstable_useTransitions:c}={}){let p=nl(),d=_e(),g=Ir(e,{relative:i});return y.useCallback(x=>{if(wm(x,t)){x.preventDefault();let w=n!==void 0?n:Cr(d)===Cr(g),k=()=>p(e,{replace:w,unstable_mask:r,state:o,preventScrollReset:l,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:u});c?y.startTransition(()=>k()):k()}},[d,p,g,n,r,o,t,e,l,i,a,u,c])}var Vm=0,Km=()=>`__${String(++Vm)}__`;function Hm(){let{router:e}=Md("useSubmit"),{basename:t}=y.useContext(We),n=cm(),r=e.fetch,o=e.navigate;return y.useCallback(async(l,i={})=>{let{action:a,method:u,encType:c,formData:p,body:d}=Em(l,t);if(i.navigate===!1){let g=i.fetcherKey||Km();await r(g,n,i.action||a,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||u,formEncType:i.encType||c,flushSync:i.flushSync})}else await o(i.action||a,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:p,body:d,formMethod:i.method||u,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Ym(e,{relative:t}={}){let{basename:n}=y.useContext(We),r=y.useContext(kt);q(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...Ir(e||".",{relative:t})},i=_e();if(e==null){l.search=i.search;let a=new URLSearchParams(l.search),u=a.getAll("index");if(u.some(p=>p==="")){a.delete("index"),u.filter(d=>d).forEach(d=>a.append("index",d));let p=a.toString();l.search=p?`?${p}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ze([n,l.pathname])),Cr(l)}function Jm(e,{relative:t}={}){let n=y.useContext(bd);q(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Md("useViewTransitionState"),o=Ir(e,{relative:t});if(!n.isTransitioning)return!1;let l=xt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=xt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Mo(o.pathname,i)!=null||Mo(o.pathname,l)!=null}function Zm(){const[e,t]=y.useState({visible:!1,message:"",type:"info"}),n=y.useRef(null),r=y.useCallback((o,l="info")=>{clearTimeout(n.current),t({visible:!0,message:o,type:l}),n.current=setTimeout(()=>{t(i=>({...i,visible:!1}))},3500)},[]);return{toast:e,showToast:r}}function Xm(){const[e,t]=y.useState({visible:!1,message:"Memuat..."});function n(r,o="Memuat..."){t({visible:r,message:o})}return{loader:e,setLoader:n}}function _m({message:e,type:t,visible:n}){const r=t==="ok"?"#15803d":t==="err"?"#e24b4a":"#4f46e5",o=t==="ok"?"✓":t==="err"?"✕":"ℹ";return s.jsxs("div",{style:{position:"fixed",bottom:24,right:24,background:r,color:"#fff",borderRadius:12,padding:"13px 20px",fontSize:13,fontWeight:500,maxWidth:320,zIndex:9999,transform:n?"translateY(0)":"translateY(100px)",opacity:n?1:0,transition:"all 0.3s cubic-bezier(.175,.885,.32,1.275)",pointerEvents:"none"},children:[o," ",e]})}function qm({visible:e,message:t}){return e?s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}),s.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(255,255,255,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200},children:s.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:"30px 40px",textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[s.jsx("div",{style:{width:36,height:36,border:"4px solid #e5e7eb",borderTopColor:"#4f46e5",borderRadius:"50%",animation:"spin 0.75s linear infinite",margin:"0 auto 14px"}}),s.jsx("p",{style:{fontSize:13,color:"#666"},children:t})]})})]}):null}const $m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEDklEQVR4AezcvbIMQRgG4CVyCWIpl0EsUEJXIFaUKr8RUiI34AYECrdAlRJL3IAUAd53Sp86e3anp/++7u+b+VT3jp3pv3kffc7ZrXXO7/yPqgQcRBXHbucgDqIsAWXL8R3iIMoSULYc3yEOoiwBZctZyw65jVxZcbBd1gByBwQvUV+hPkA1XWRA+kVCgBeY7hwqy1M88BwONotlkLuInAA47BWee7R3xtATqyDEeBbJ+TGumUSxCLKEAYupmESxBpKKMYngwRyKJZBcDHhMxRSKFZBSjEkED2ZQLICkYPAbONsh+9liAkU7CEOO/TTF9InBH3X5eoTteW6uqkfRDMJwUzECgHkUrSDHMELo4Rh2RngejqZRNILUYJhH0QbSAsM0iiaQlhhmUbSASGCYRNEAIolhDmU0SA8MUygjQXpimEEZBTICwwTKCJCRGOpReoNowNhHCc+OH7u/99UTRBNGiF/d2yy9QDRiqETpAaIZQx2KNIgFDFUokiCWMNSgSIFYxFCBIgFiGWM4SmuQNWAMRWkJsiaMYSitQNaIUYMS+mYfW4CsGSME2u0VfS3IFjC6otSAbAmjG0opyBYxuqCUgDzEypY+UfgdbfjxThxWWfg9hfcYuzm+dc+sYm0OruWCcGc8ORjl8MSfw1OrO5Nyj8yKn7BMvvkcEGIs7YzkiTfUkDslGSUVxDHq/gUlo6SAOEYdRuidhLIEch+jjfgyxcX/xdySlXNgiq6FczLT2UmjIOj1GfUn6lz5NHdhw+djmTBLZjobzxLIO/S8jsqBcNgr/EbFX2exd9Kf7JgJv8yfjeI3TtxEZaY4HC9LIOz1Hg9nUYix5tcZuOWqwtcpp1GIcQMjvkWNlhQQDnAaxTGYyHINKL/QNAkD7bJ+CSZRrqCT7wyEkFiIchltF3cG2kwldYdMjfHwDXVk+YLJr2VW9kGXYSUrs1yQYXf1f+IfOH7MrOyDLjaKNRAbqVas0kEqwpPo6iASqVaMOQCkYrUb6OogypAdxEGUJaBsOb5DHERZAsqW4zvEQZQloGw5vkMcRFkCypazmh2iLNfi5ThIcXQyHR1EJtfiUR2kODqZjg4ik2vxqA5SHJ1MRweRybV4VAcpjk6mo4PI5Fo8qoMURyfTUQrkIpb7oaLeQl/pwjkW1riLXec9Nl+jFMgFrPRqRb2EvtKFc9SskffYfI1SIM0XupUBHUSZtIM4iLIElC2ndod8xf0871jfYK7cwj4918hMctd40r4WhP/B8R5G61VfY67cwj691sd5mEnuGk/a14KcDOR/aZOAg7TJsdkoDtIsyvSBYi0dJJbOgGsOMiD02JQOEktnwDUHGRB6bEoHiaUz4JqDDAg9NqWDxNIZcM1BBoQem/IfAAAA//9To/EwAAAABklEQVQDACBOMNg7GgiPAAAAAElFTkSuQmCC",Ud="data:image/png;base64,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",qs="data:image/png;base64,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",eg="data:image/png;base64,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",Fd="data:image/png;base64,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",tg="data:image/png;base64,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",ng="data:image/png;base64,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",Pa="data:image/png;base64,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",rg="data:image/png;base64,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",og=""+new URL("logo-BXaJy8SL.png",import.meta.url).href,lg=[{id:"home",label:"Beranda",icon:$m,path:"/",roles:["admin"]},{id:"carianggota",label:"Cari Anggota",icon:qs,path:"/carianggota",roles:["admin","petugas"]},{id:"borrow",label:"Peminjaman",icon:Ud,path:"/borrow",roles:["admin","petugas"]},{id:"return",label:"Pengembalian",icon:eg,path:"/return",roles:["admin","petugas"]},{id:"search",label:"Cari Buku",icon:qs,path:"/search",roles:["admin","petugas"]},{id:"rekomendasi",label:"Rekomendasi Buku",icon:tg,path:"/rekomendasi",roles:["admin","petugas"]},{id:"chatbot",label:"Asisten Perpus",icon:rg,path:"/chatbot",roles:["admin","petugas"]},{id:"members",label:"Tambah Anggota",icon:Pa,path:"/members",roles:["admin"]},{id:"books",label:"Tambah Koleksi Buku",icon:Fd,path:"/books",roles:["admin"]}];function ig({username:e,role:t,onLogout:n,sidebarOpen:r,setSidebarOpen:o}){const l=_e(),[i,a]=y.useState(window.innerWidth<=768);return y.useEffect(()=>{const c=()=>{const p=window.innerWidth<=768;a(p),p&&o(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[o]),s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

::-webkit-scrollbar{

width:6px;

}

::-webkit-scrollbar-thumb{

background:#ddd;

border-radius:20px;

}

`}),s.jsx("button",{onClick:()=>o(!r),style:{position:"fixed",top:16,left:r?i?16:220:16,zIndex:999,background:"#2f35d7",color:"#fff",border:"none",borderRadius:30,width:38,height:38,cursor:"pointer",boxShadow:"0 8px 18px rgba(79,70,229,.3)",transition:".3s"},children:r?"←":"→"}),s.jsxs("div",{style:{position:"fixed",top:0,left:0,width:i?r?220:0:r?220:70,height:"100vh",background:"#fff",borderRight:"1px solid rgba(0,0,0,.08)",padding:16,zIndex:200,display:"flex",flexDirection:"column",overflow:"hidden",transition:".3s",transform:i&&!r?"translateX(-100%)":"translateX(0)",opacity:i&&!r?0:1,boxShadow:"0 0 30px rgba(0,0,0,.03)"},children:[s.jsx("div",{style:{marginBottom:24,minHeight:40},children:r&&s.jsx("div",{style:{marginLeft:70,marginTop:20,display:"flex",alignItems:"center",gap:12},children:s.jsx("img",{src:og,alt:"PBJT Perpus",style:{width:50,height:50,objectFit:"contain"}})})}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,fontSize:12,flex:1,overflowY:"auto",paddingBottom:20},children:lg.filter(c=>c.roles.includes(t)).map(c=>{const p=l.pathname===c.path;return s.jsxs(Ia,{to:c.path,style:{display:"flex",alignItems:"center",justifyContent:r?"flex-start":"center",gap:r?12:0,padding:"12px",textDecoration:"none",background:p?"#dcdbec":"transparent",borderRadius:p?"10px 10px 10px 10px":"30px",color:p?"#170ebb":"#333",fontWeight:p?700:500,marginRight:0},children:[s.jsx("img",{src:c.icon,alt:"",style:{width:20,height:20}}),r&&s.jsx("span",{children:c.label})]},c.id)})}),s.jsxs("div",{style:{marginTop:"auto",paddingTop:12,borderTop:"1px solid rgba(0,0,0,.08)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[s.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:e==null?void 0:e.substring(0,2).toUpperCase()}),r&&s.jsxs("div",{children:[s.jsx("div",{children:e}),s.jsx("div",{style:{fontSize:11,color:"#777"},children:t})]})]}),s.jsx("button",{onClick:n,style:{width:"100%",border:"none",background:"linear-gradient(135deg,#ef4444,#dc2626)",padding:"10px",color:"#fff",borderRadius:10},children:r?"Keluar":s.jsx("img",{src:ng,alt:"",style:{width:18}})})]})]})]})}function ag(){return s.jsxs("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"#fff"},children:[s.jsx("img",{src:"/4.png",style:{width:"clamp(300px,25vw,600px)",height:"auto",objectFit:"contain"}}),s.jsx("h2",{style:{marginTop:"15px",fontSize:"clamp(18px,2vw,30px)",color:"#4f46e5"}})]})}const sg="https://backend-ashen-gamma-46.vercel.app";async function ie(e,t="GET",n=null){const r={method:t,headers:{"Content-Type":"application/json"}};n&&(r.body=JSON.stringify(n));const o=await fetch(sg+e,r),l=await o.json();if(!o.ok)throw new Error(l.detail||"Terjadi kesalahan");return l}const ug=""+new URL("bg2-fZe62nzf.png",import.meta.url).href;function cg({onLogin:e,showToast:t,setLoader:n}){const[r,o]=y.useState(""),[l,i]=y.useState("");async function a(){if(!r||!l){t("Isi username dan password","err");return}n(!0,"Masuk...");try{const c=await ie("/login","POST",{username:r,password:l});e(c),t("Selamat datang, "+r+"!","ok")}catch(c){t(c.message||"Login gagal","err")}finally{n(!1)}}function u(c){c.key==="Enter"&&a()}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`
        .login-card {
          animation: fadeUp 0.8s ease;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 2px solid rgba(255,255,255,0.5);
          padding: 16px 4px 10px;
          color: #fff;
          font-size: 17px;
          outline: none;
          transition: 0.3s;
        }

        .login-input:focus {
          border-bottom: 2px solid #9bc7ff;
          box-shadow: 0 10px 25px rgba(124,180,255,0.3);
        }

        .input-group {
          position: relative;
          margin-bottom: 30px;
        }

        .input-label {
          position: absolute;
          left: 4px;
          top: 14px;
          color: rgba(255,255,255,0.7);
          pointer-events: none;
          transition: 0.3s;
          font-size: 16px;
        }

        .login-input:focus + .input-label,
        .login-input:not(:placeholder-shown) + .input-label {
          top: -10px;
          font-size: 12px;
          color: #b8d7ff;
        }

        .login-btn {
          width: 100%;
          border: none;
          border-radius: 30px;
          padding: 15px;
          background: #2f35d7;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.25s;
          box-shadow: 0 8px 24px rgba(79,124,255,0.4);
        }

        .login-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 28px rgba(79,124,255,0.55);
        }

        .login-btn:active {
          transform: scale(0.98);
        }

        @media (max-width: 640px) {
          .login-card {
            padding: 35px 24px !important;
          }

          .login-title {
            font-size: 32px !important;
          }
        }
      `}),s.jsxs("div",{style:{minHeight:"100vh",backgroundImage:`url(${ug})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:20,position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)",backdropFilter:"blur(3px)"}}),s.jsxs("div",{className:"login-card",style:{width:"100%",maxWidth:450,padding:"50px 40px",borderRadius:28,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0,0,0,0.3)",position:"relative",zIndex:2},children:[s.jsx("h1",{className:"login-title",style:{textAlign:"center",color:"#fff",fontSize:42,fontWeight:700,marginBottom:10,letterSpacing:1},children:"LOGIN"}),s.jsx("p",{style:{textAlign:"center",color:"rgba(255,255,255,0.75)",marginBottom:40,fontSize:14},children:"Selamat Datang di Sistem Perpustakaan PBJT"}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{className:"login-input",value:r,onChange:c=>o(c.target.value),onKeyDown:u,placeholder:" "}),s.jsx("label",{className:"input-label",children:"Username"})]}),s.jsxs("div",{className:"input-group",children:[s.jsx("input",{type:"password",className:"login-input",value:l,onChange:c=>i(c.target.value),onKeyDown:u,placeholder:" "}),s.jsx("label",{className:"input-label",children:"Password"})]}),s.jsx("button",{className:"login-btn",onClick:a,children:"Login"})]})]})]})}function an(e){return e?new Date(e).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"—"}function dg(){const e=new Date().toISOString().split("T")[0],t=new Date;return t.setDate(t.getDate()+14),{today:e,due:t.toISOString().split("T")[0]}}const fg={dipinjam:{background:"#fef3c7",color:"#92400e",label:"Dipinjam"},terlambat:{background:"#fee2e2",color:"#991b1b",label:"Terlambat"},tersedia:{background:"#eaf3de",color:"#3b6d11",label:"Tersedia"},dikembalikan:{background:"#dbeafe",color:"#1e40af",label:"Dikembalikan"}};function Od({status:e}){const t=fg[e]||{background:"#f3f4f6",color:"#6b7280",label:e};return s.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,background:t.background,color:t.color},children:t.label})}const pg="data:image/png;base64,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",hg=""+new URL("ada-DZvJFqYW.png",import.meta.url).href;function mg({showToast:e,setLoader:t,onGoToBorrow:n}){const[r,o]=y.useState({total:"-",borrowed:"-",available:"-",overdue:"-"}),[l,i]=y.useState([]),[a,u]=y.useState([]),[c,p]=y.useState(null),[d,g]=y.useState(new Date().toISOString().split("T")[0]),[x,w]=y.useState(new Date().toISOString().split("T")[0]);y.useEffect(()=>{k()},[]);async function k(){try{const[T,M,re]=await Promise.all([ie("/stats"),ie("/loans/active"),ie("/loans")]);o(T),i(M),u(re.filter(me=>me.status==="dikembalikan"))}catch(T){e("Gagal muat data: "+T.message,"err")}}async function A(T){t(!0,"Memproses pengembalian...");try{const M=await ie("/loans/return","POST",{book_id:T});e(M.message,"ok"),k()}catch(M){e(M.message,"err")}finally{t(!1)}}function h(T){return T?T.split("T")[0].split(" ")[0]:""}function f(T){return a.filter(M=>h(M.return_date)===T)}function m(T){return l.filter(M=>h(M.borrow_date)===T)}const E={overflowX:"auto"},v={width:"100%",borderCollapse:"collapse",fontSize:"14px"},N={padding:"12px 16px",textAlign:"left",fontWeight:600,color:"#333",borderBottom:"1px solid #eee"},L={padding:"14px 16px",borderBottom:"1px solid #eee",color:"#333"},P={padding:"8px 16px",background:"#ef4444",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"13px",fontWeight:600,transition:".2s"};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

    .fade-up {
      animation: fadeUp .7s ease forwards;
      opacity: 0;
    }

    .fade-delay-1 {
      animation-delay: .1s;
    }

    .fade-delay-2 {
      animation-delay: .2s;
    }

    .fade-delay-3 {
      animation-delay: .3s;
    }

    .fade-delay-4 {
      animation-delay: .4s;
    }

    @keyframes fadeUp {

      from {
        opacity: 0;
        transform: translateY(25px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }

    }

    .stat-card {
      transition: .25s ease;
    }

    .stat-card:hover {
      transform:
        translateY(-6px)
        scale(1.02);

      box-shadow:
        0 18px 34px
        rgba(0,0,0,.08);
    }

    .table-row {
      transition: .2s;
    }

    .table-row:hover {
      background: #f8faff;
      transform: scale(1.002);
    }

    .quick-btn {
      transition: .2s;
    }

    .glass-box {
      background:
        rgba(255,255,255,.92);

      backdrop-filter:
        blur(12px);

      transition: .25s;
    }

    .glass-box:hover {

      box-shadow:
        0 18px 30px
        rgba(0,0,0,.06);

    }

    .history-item {
      transition: .2s;
    }

    .history-item:hover {
      background: #f9fafb;
      transform: translateX(4px);
    }

    .icon-box {
      transition: .25s;
    }

   

    @media (max-width: 900px) {

      .home-grid {
        grid-template-columns:
          1fr !important;
      }

    }
      @media(max-width:768px){

.glass-box{

overflow-x:auto;

-webkit-overflow-scrolling:touch;

}

.glass-box::-webkit-scrollbar{

height:6px;

}

.glass-box::-webkit-scrollbar-thumb{

background:#d1d5db;

border-radius:999px;

}
@media(max-width:768px){

.glass-box{

overflow-x:auto;

-webkit-overflow-scrolling:touch;

}

.glass-box::-webkit-scrollbar{

height:8px;

}

.glass-box::-webkit-scrollbar-thumb{

background:#c7c7c7;

border-radius:999px;

}

}

}

  `}),s.jsxs("div",{className:"fade-up",children:[s.jsx(gg,{stats:r}),s.jsxs("div",{className:"home-grid",children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:12},children:[s.jsx("div",{style:{fontSize:22,fontWeight:700},children:"Peminjaman Aktif"}),s.jsx("input",{type:"date",value:x,onChange:T=>w(T.target.value),style:{padding:"8px 12px",border:"1px solid #ddd",borderRadius:8,fontSize:14,outline:"none",cursor:"pointer"}})]}),(()=>{m(x)})(),s.jsx("div",{className:"glass-box",style:E,children:s.jsxs("table",{style:v,children:[s.jsx("thead",{style:{background:"#f4f6fb"},children:s.jsx("tr",{children:["Peminjam","Buku","Tgl Pinjam","Jatuh Tempo","Status","Aksi"].map(T=>s.jsx("th",{style:N,children:T},T))})}),s.jsx("tbody",{children:(()=>{const T=m(x);return T.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:6,style:{textAlign:"center",padding:40,color:"#999"},children:"Tidak ada peminjaman pada tanggal ini"})}):T.map(M=>s.jsxs("tr",{className:"table-row",onClick:()=>p(M),style:{cursor:"pointer"},children:[s.jsxs("td",{style:L,children:[s.jsx("b",{children:M.borrower_name}),s.jsx("br",{}),s.jsx("span",{style:{fontSize:11,color:"#666"},children:M.member_id})]}),s.jsxs("td",{style:L,children:[M.book_title,s.jsx("br",{}),s.jsx("span",{style:{fontSize:11,color:"#999",fontFamily:"monospace"},children:M.book_id})]}),s.jsx("td",{style:L,children:an(M.borrow_date)}),s.jsx("td",{style:L,children:an(M.due_date)}),s.jsx("td",{style:L,children:s.jsx(Od,{status:M.status})}),s.jsx("td",{style:L,children:s.jsx("button",{className:"quick-btn",onClick:re=>{re.stopPropagation(),A(M.book_id)},style:P,children:"Kembalikan"})})]},M.book_id))})()})]})}),s.jsxs("div",{className:"glass-box",style:{...E,padding:22,marginTop:24},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18,flexWrap:"wrap",gap:12},children:[s.jsx("div",{style:{fontSize:20,fontWeight:700},children:"Riwayat Pengembalian"}),s.jsx("input",{type:"date",value:d,onChange:T=>g(T.target.value),style:{padding:"8px 12px",border:"1px solid #ddd",borderRadius:8,fontSize:14,outline:"none",cursor:"pointer"}})]}),(()=>{const T=f(d);return s.jsxs("div",{style:{background:"#f9f9f9",padding:14,borderRadius:12,marginBottom:18,textAlign:"center"},children:[s.jsx("div",{style:{fontSize:24,fontWeight:700,color:"#2f35d7"},children:T.length}),s.jsxs("div",{style:{fontSize:12,color:"#999",marginTop:4},children:["Buku dikembalikan pada"," ",new Date(d).toLocaleDateString("id-ID",{weekday:"long",day:"numeric",month:"long",year:"numeric"})]})]})})(),a.length===0?s.jsx("div",{style:{textAlign:"center",padding:30,color:"#999",fontSize:13},children:"Belum ada riwayat"}):(()=>{const T=f(d);return T.length===0?s.jsx("div",{style:{textAlign:"center",padding:20,color:"#999",fontSize:13}}):T.map((M,re)=>s.jsxs("div",{className:"history-item",onClick:()=>p(M),style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:"1px solid rgba(0,0,0,.06)",cursor:"pointer"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:700,marginBottom:4},children:M.book_title}),s.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:4},children:M.borrower_name}),s.jsx("div",{style:{fontSize:11,color:"#999"},children:M.member_id})]}),s.jsxs("div",{style:{textAlign:"right"},children:[s.jsx("div",{style:{fontSize:11,color:"#999",marginBottom:8},children:new Date(M.return_date).toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"})}),s.jsx("div",{style:{display:"inline-block",padding:"6px 12px",borderRadius:999,background:"#e6f9f0",color:"#0f9d58",fontSize:11,fontWeight:700},children:"Dikembalikan"})]})]},re))})()]})]})]}),c&&s.jsx("div",{onClick:()=>p(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:20},children:s.jsxs("div",{onClick:T=>T.stopPropagation(),style:{width:"100%",maxWidth:500,background:"#fff",borderRadius:24,padding:28,boxShadow:"0 20px 50px rgba(0,0,0,.2)"},children:[s.jsx("div",{style:{fontSize:24,fontWeight:700,marginBottom:24},children:"Detail Peminjaman"}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"Nama:"}),s.jsx("br",{}),c.borrower_name]}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"No Anggota:"}),s.jsx("br",{}),c.member_id]}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"No Telepon:"}),s.jsx("br",{}),c.phone||"-"]}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"Buku:"}),s.jsx("br",{}),c.book_title]}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"Tanggal Pinjam:"}),s.jsx("br",{}),an(c.borrow_date)]}),s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"Jatuh Tempo:"}),s.jsx("br",{}),an(c.due_date)]}),c.return_date&&s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("b",{children:"Tanggal Kembali:"}),s.jsx("br",{}),an(c.return_date)]}),s.jsxs("div",{style:{marginBottom:20},children:[s.jsx("b",{children:"Status:"}),s.jsx("br",{}),s.jsx("div",{style:{marginTop:8,display:"inline-block",padding:"7px 14px",borderRadius:999,background:c.status==="dikembalikan"?"#e6f9f0":"#eef2ff",color:c.status==="dikembalikan"?"#0f9d58":"#4f46e5",fontSize:12,fontWeight:700},children:c.status})]}),s.jsx("button",{onClick:()=>p(null),style:{width:"100%",border:"none",padding:14,borderRadius:14,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",fontWeight:700,cursor:"pointer"},children:"Tutup"})]})}),"    "]})}function gg({stats:e}){const t=[{label:"Total Buku",value:e.total,badge:"Koleksi",bg:"#dbeafe",color:"#1e40af",icon:Fd},{label:"Dipinjam",value:e.borrowed,badge:"Aktif",bg:"#fef3c7",color:"#92400e",icon:Ud},{label:"Tersedia",value:e.available,badge:"Siap Pinjam",bg:"#dcfce7",color:"#166534",icon:hg},{label:"Terlambat",value:e.overdue,badge:"Perhatian",bg:"#fee2e2",color:"#991b1b",icon:pg},{label:"Anggota",value:e.members,badge:"Terdaftar",bg:"#dcfce7",color:"#166534",icon:Pa}];return s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,marginBottom:28},children:t.map((n,r)=>s.jsxs("div",{className:`stat-card fade-up fade-delay-${r+1}`,style:{background:"rgba(255,255,255,.92)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.3)",padding:22},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:12,color:"#666",fontWeight:600,marginBottom:6},children:n.label}),s.jsx("div",{style:{fontSize:36,fontWeight:700},children:n.value})]}),s.jsx("div",{className:"icon-box",style:{width:62,height:62,borderRadius:18,background:n.bg,display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx("img",{src:n.icon,alt:n.label,style:{width:30,height:30,objectFit:"contain"}})})]}),s.jsx("div",{style:{display:"inline-block",padding:"6px 12px",borderRadius:999,background:n.bg,color:n.color,fontSize:11,fontWeight:700},children:n.badge})]},n.label))})}function ue({label:e,children:t}){return s.jsxs("div",{style:{marginBottom:14},children:[s.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",color:"#666",marginBottom:6,wordWrap:"break-word",whiteSpace:"normal",lineHeight:1.4},children:e}),t]})}const ce={width:"100%",background:"#f0efeb",border:"1px solid rgba(0,0,0,0.2)",borderRadius:8,padding:"10px 12px",fontSize:13,fontFamily:"inherit",color:"#1a1a1a",outline:"none"};function $s({session:e,showToast:t,setLoader:n}){const o=_e().state,{today:l,due:i}=dg(),[a,u]=y.useState({name:"",member:"",phone:"",bookId:"",date:l,dueDate:i}),[c,p]=y.useState(""),[d,g]=y.useState([]);y.useEffect(()=>{o&&u(A=>({...A,name:o.name||"",member:o.member_code||"",phone:o.phone||""}))},[o]),y.useEffect(()=>{const A=setTimeout(()=>{c.trim()?x():g([])},400);return()=>clearTimeout(A)},[c]);async function x(){try{const A=await ie("/books/search?q="+encodeURIComponent(c));g(A)}catch{t("Gagal mencari buku","err")}}function w(A,h){u(f=>({...f,[A]:h}))}async function k(){const{name:A,member:h,phone:f,bookId:m,dueDate:E}=a;if(!A||!h||!f||!m||!E){t("Lengkapi semua form","err");return}n(!0,"Memproses peminjaman...");try{const v=await ie("/loans/borrow","POST",{user_id:e.user_id,book_id:m,borrower_name:A,member_id:h,phone:f,due_date:E});t(v.message,"ok"),u({name:"",member:"",phone:"",bookId:"",date:l,dueDate:i}),p(""),g([])}catch(v){t(v.message,"err")}finally{n(!1)}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .borrow-page {
          animation:
            fadePage .5s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        .modern-card {

          transition: none;

          background:
            rgba(255,255,255,.92);

          backdrop-filter:
            blur(14px);

          border:
            1px solid rgba(255,255,255,.4);

          box-shadow:
            0 10px 30px rgba(0,0,0,.05);

        }


        .modern-input {

          transition: .2s;

        }

        .modern-input:focus {

          border-color:
            #4f46e5 !important;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .book-item {

          transition: .2s;

        }

        .book-item:hover {

          background:
            #eef2ff;

        }

        .modern-btn {

          transition: .2s;

        }

        .modern-btn:hover {

          transform:
            scale(1.02);

          opacity: .95;

        }

        @media (max-width:768px) {

          .form-grid {

            grid-template-columns:
              1fr !important;

          }

        }

      `}),s.jsx("div",{className:"borrow-page",style:{width:"100%"},children:s.jsxs("div",{className:"modern-card",style:{padding:32},children:[s.jsx("div",{style:{marginBottom:30},children:s.jsx("div",{style:{fontSize:14,color:"#666"},children:"Isi data peminjam dan buku yang akan dipinjam, jika belum daftar tidak bisa meminjam buku."})}),s.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:18},children:[s.jsx(ue,{label:"Nama Peminjam",children:s.jsx("input",{value:a.name,onChange:A=>w("name",A.target.value),placeholder:"Nama lengkap",style:{...ce,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"No. Anggota",children:s.jsx("input",{value:a.member,onChange:A=>w("member",A.target.value),placeholder:"23.1.9.0000",style:{...ce,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"No. Telepon",children:s.jsx("input",{value:a.phone,onChange:A=>w("phone",A.target.value),placeholder:"081234567890",style:{...ce,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"Cari Buku",children:s.jsx("input",{value:c,onChange:A=>{p(A.target.value)},placeholder:"Cari ID / judul buku...",style:{...ce,padding:14},className:"modern-input"})})]}),d.length>0&&s.jsx("div",{style:{marginTop:12,border:"1px solid rgba(0,0,0,0.08)",overflow:"hidden",background:"#fff",maxHeight:260,overflowY:"auto"},children:d.map(A=>s.jsxs("div",{onClick:()=>{w("bookId",A.id),p(A.title),g([])},className:"book-item",style:{padding:14,borderBottom:"1px solid rgba(0,0,0,0.06)",cursor:"pointer"},children:[s.jsx("div",{style:{fontWeight:600,marginBottom:4},children:A.title}),s.jsx("div",{style:{fontSize:12,color:"#666"},children:A.id})]},A.id))}),s.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginTop:20,marginBottom:28},children:[s.jsx(ue,{label:"Tanggal Pinjam",children:s.jsx("input",{type:"date",value:a.date,disabled:!0,style:{...ce,padding:14,background:"#f3f4f6"}})}),s.jsx(ue,{label:"Jatuh Tempo",children:s.jsx("input",{type:"date",value:a.dueDate,onChange:A=>w("dueDate",A.target.value),style:{...ce,padding:14},className:"modern-input"})})]}),s.jsx("button",{onClick:k,className:"modern-btn",style:{width:"100%",background:"rgb(47, 53, 215)",color:"#fff",border:"none",borderRadius:14,padding:"15px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 22px rgba(79,70,229,.22)"},children:"Pinjam"})]})})]})}var yg={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,l=Object.defineProperty||function(C,S,j){C[S]=j.value},i,a=typeof Symbol=="function"?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",p=a.toStringTag||"@@toStringTag";function d(C,S,j){return Object.defineProperty(C,S,{value:j,enumerable:!0,configurable:!0,writable:!0}),C[S]}try{d({},"")}catch{d=function(S,j,z){return S[j]=z}}function g(C,S,j,z){var R=S&&S.prototype instanceof m?S:m,I=Object.create(R.prototype),W=new it(z||[]);return l(I,"_invoke",{value:re(C,j,W)}),I}n.wrap=g;function x(C,S,j){try{return{type:"normal",arg:C.call(S,j)}}catch(z){return{type:"throw",arg:z}}}var w="suspendedStart",k="suspendedYield",A="executing",h="completed",f={};function m(){}function E(){}function v(){}var N={};d(N,u,function(){return this});var L=Object.getPrototypeOf,P=L&&L(L(at([])));P&&P!==r&&o.call(P,u)&&(N=P);var U=v.prototype=m.prototype=Object.create(N);E.prototype=v,l(U,"constructor",{value:v,configurable:!0}),l(v,"constructor",{value:E,configurable:!0}),E.displayName=d(v,p,"GeneratorFunction");function T(C){["next","throw","return"].forEach(function(S){d(C,S,function(j){return this._invoke(S,j)})})}n.isGeneratorFunction=function(C){var S=typeof C=="function"&&C.constructor;return S?S===E||(S.displayName||S.name)==="GeneratorFunction":!1},n.mark=function(C){return Object.setPrototypeOf?Object.setPrototypeOf(C,v):(C.__proto__=v,d(C,p,"GeneratorFunction")),C.prototype=Object.create(U),C},n.awrap=function(C){return{__await:C}};function M(C,S){function j(I,W,F,Q){var J=x(C[I],C,W);if(J.type==="throw")Q(J.arg);else{var St=J.arg,st=St.value;return st&&typeof st=="object"&&o.call(st,"__await")?S.resolve(st.__await).then(function(ut){j("next",ut,F,Q)},function(ut){j("throw",ut,F,Q)}):S.resolve(st).then(function(ut){St.value=ut,F(St)},function(ut){return j("throw",ut,F,Q)})}}var z;function R(I,W){function F(){return new S(function(Q,J){j(I,W,Q,J)})}return z=z?z.then(F,F):F()}l(this,"_invoke",{value:R})}T(M.prototype),d(M.prototype,c,function(){return this}),n.AsyncIterator=M,n.async=function(C,S,j,z,R){R===void 0&&(R=Promise);var I=new M(g(C,S,j,z),R);return n.isGeneratorFunction(S)?I:I.next().then(function(W){return W.done?W.value:I.next()})};function re(C,S,j){var z=w;return function(I,W){if(z===A)throw new Error("Generator is already running");if(z===h){if(I==="throw")throw W;return B()}for(j.method=I,j.arg=W;;){var F=j.delegate;if(F){var Q=me(F,j);if(Q){if(Q===f)continue;return Q}}if(j.method==="next")j.sent=j._sent=j.arg;else if(j.method==="throw"){if(z===w)throw z=h,j.arg;j.dispatchException(j.arg)}else j.method==="return"&&j.abrupt("return",j.arg);z=A;var J=x(C,S,j);if(J.type==="normal"){if(z=j.done?h:k,J.arg===f)continue;return{value:J.arg,done:j.done}}else J.type==="throw"&&(z=h,j.method="throw",j.arg=J.arg)}}}function me(C,S){var j=S.method,z=C.iterator[j];if(z===i)return S.delegate=null,j==="throw"&&C.iterator.return&&(S.method="return",S.arg=i,me(C,S),S.method==="throw")||j!=="return"&&(S.method="throw",S.arg=new TypeError("The iterator does not provide a '"+j+"' method")),f;var R=x(z,C.iterator,S.arg);if(R.type==="throw")return S.method="throw",S.arg=R.arg,S.delegate=null,f;var I=R.arg;if(!I)return S.method="throw",S.arg=new TypeError("iterator result is not an object"),S.delegate=null,f;if(I.done)S[C.resultName]=I.value,S.next=C.nextLoc,S.method!=="return"&&(S.method="next",S.arg=i);else return I;return S.delegate=null,f}T(U),d(U,p,"Generator"),d(U,u,function(){return this}),d(U,"toString",function(){return"[object Generator]"});function lt(C){var S={tryLoc:C[0]};1 in C&&(S.catchLoc=C[1]),2 in C&&(S.finallyLoc=C[2],S.afterLoc=C[3]),this.tryEntries.push(S)}function ae(C){var S=C.completion||{};S.type="normal",delete S.arg,C.completion=S}function it(C){this.tryEntries=[{tryLoc:"root"}],C.forEach(lt,this),this.reset(!0)}n.keys=function(C){var S=Object(C),j=[];for(var z in S)j.push(z);return j.reverse(),function R(){for(;j.length;){var I=j.pop();if(I in S)return R.value=I,R.done=!1,R}return R.done=!0,R}};function at(C){if(C){var S=C[u];if(S)return S.call(C);if(typeof C.next=="function")return C;if(!isNaN(C.length)){var j=-1,z=function R(){for(;++j<C.length;)if(o.call(C,j))return R.value=C[j],R.done=!1,R;return R.value=i,R.done=!0,R};return z.next=z}}return{next:B}}n.values=at;function B(){return{value:i,done:!0}}return it.prototype={constructor:it,reset:function(C){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(ae),!C)for(var S in this)S.charAt(0)==="t"&&o.call(this,S)&&!isNaN(+S.slice(1))&&(this[S]=i)},stop:function(){this.done=!0;var C=this.tryEntries[0],S=C.completion;if(S.type==="throw")throw S.arg;return this.rval},dispatchException:function(C){if(this.done)throw C;var S=this;function j(Q,J){return I.type="throw",I.arg=C,S.next=Q,J&&(S.method="next",S.arg=i),!!J}for(var z=this.tryEntries.length-1;z>=0;--z){var R=this.tryEntries[z],I=R.completion;if(R.tryLoc==="root")return j("end");if(R.tryLoc<=this.prev){var W=o.call(R,"catchLoc"),F=o.call(R,"finallyLoc");if(W&&F){if(this.prev<R.catchLoc)return j(R.catchLoc,!0);if(this.prev<R.finallyLoc)return j(R.finallyLoc)}else if(W){if(this.prev<R.catchLoc)return j(R.catchLoc,!0)}else if(F){if(this.prev<R.finallyLoc)return j(R.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(C,S){for(var j=this.tryEntries.length-1;j>=0;--j){var z=this.tryEntries[j];if(z.tryLoc<=this.prev&&o.call(z,"finallyLoc")&&this.prev<z.finallyLoc){var R=z;break}}R&&(C==="break"||C==="continue")&&R.tryLoc<=S&&S<=R.finallyLoc&&(R=null);var I=R?R.completion:{};return I.type=C,I.arg=S,R?(this.method="next",this.next=R.finallyLoc,f):this.complete(I)},complete:function(C,S){if(C.type==="throw")throw C.arg;return C.type==="break"||C.type==="continue"?this.next=C.arg:C.type==="return"?(this.rval=this.arg=C.arg,this.method="return",this.next="end"):C.type==="normal"&&S&&(this.next=S),f},finish:function(C){for(var S=this.tryEntries.length-1;S>=0;--S){var j=this.tryEntries[S];if(j.finallyLoc===C)return this.complete(j.completion,j.afterLoc),ae(j),f}},catch:function(C){for(var S=this.tryEntries.length-1;S>=0;--S){var j=this.tryEntries[S];if(j.tryLoc===C){var z=j.completion;if(z.type==="throw"){var R=z.arg;ae(j)}return R}}throw new Error("illegal catch attempt")},delegateYield:function(C,S,j){return this.delegate={iterator:at(C),resultName:S,nextLoc:j},this.method==="next"&&(this.arg=i),f}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(yg);var Ba=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const vg=Ba;let eu=0;var Wd=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=vg("Job",eu),eu+=1),{id:r,action:t,payload:n}},Un={};let Da=!1;Un.logging=Da;Un.setLogging=e=>{Da=e};Un.log=(...e)=>Da?console.log.apply(void 0,e):null;const xg=Wd,{log:_r}=Un,wg=Ba;let tu=0;var kg=()=>{const e=wg("Scheduler",tu),t={},n={};let r=[];tu+=1;const o=()=>r.length,l=()=>Object.keys(t).length,i=()=>{if(r.length!==0){const d=Object.keys(t);for(let g=0;g<d.length;g+=1)if(typeof n[d[g]]>"u"){r[0](t[d[g]]);break}}},a=(d,g)=>new Promise((x,w)=>{const k=xg({action:d,payload:g});r.push(async A=>{r.shift(),n[A.id]=k;try{x(await A[d].apply(void 0,[...g,k.id]))}catch(h){w(h)}finally{delete n[A.id],i()}}),_r(`[${e}]: Add ${k.id} to JobQueue`),_r(`[${e}]: JobQueue length=${r.length}`),i()});return{addWorker:d=>(t[d.id]=d,_r(`[${e}]: Add ${d.id}`),_r(`[${e}]: Number of workers=${l()}`),i(),d.id),addJob:async(d,...g)=>{if(l()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return a(d,g)},terminate:async()=>{Object.keys(t).forEach(async d=>{await t[d].terminate()}),r=[]},getQueueLen:o,getNumWorkers:l}};function Sg(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Eg(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Cg=Eg;const Ag=Cg;var jg=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Ag()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof Sg=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Rg=jg("type")==="browser",bg=Rg?e=>new URL(e,window.location.href).href:e=>e;var Ng=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=bg(t[n]))}),t},Lg=e=>{const t=[],n=[],r=[],o=[],l=[];return e.blocks&&e.blocks.forEach(i=>{i.paragraphs.forEach(a=>{a.lines.forEach(u=>{u.words.forEach(c=>{c.symbols.forEach(p=>{l.push({...p,page:e,block:i,paragraph:a,line:u,word:c})}),o.push({...c,page:e,block:i,paragraph:a,line:u})}),r.push({...u,page:e,block:i,paragraph:a})}),n.push({...a,page:e,block:i})}),t.push({...i,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:l}},Qd={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Tg="5.1.1",Ig={version:Tg};var Pg={workerBlobURL:!0,logger:()=>{}};const Bg=Ig.version,Dg=Pg;var zg={...Dg,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${Bg}/dist/worker.min.js`},Mg=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},Ug=e=>{e.terminate()},Fg=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},Og=async(e,t)=>{e.postMessage(t)};const Pl=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),Ni=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await Ni(e.src)),e.tagName==="VIDEO"&&(t=await Ni(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await Pl(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await Pl(n)}else(e instanceof File||e instanceof Blob)&&(t=await Pl(e));return new Uint8Array(t)};var Wg=Ni;const Qg=zg,Gg=Mg,Vg=Ug,Kg=Fg,Hg=Og,Yg=Wg;var Jg={defaultOptions:Qg,spawnWorker:Gg,terminateWorker:Vg,onMessage:Kg,send:Hg,loadImage:Yg};const Zg=Ng,Xg=Lg,Ge=Wd,{log:nu}=Un,_g=Ba,Vt=Qd,{defaultOptions:qg,spawnWorker:$g,terminateWorker:ey,onMessage:ty,loadImage:ru,send:ny}=Jg;let ou=0;var Gd=async(e="eng",t=Vt.LSTM_ONLY,n={},r={})=>{const o=_g("Worker",ou),{logger:l,errorHandler:i,...a}=Zg({...qg,...n}),u={},c={},p=typeof e=="string"?e.split("+"):e;let d=t,g=r;const x=[Vt.DEFAULT,Vt.LSTM_ONLY].includes(t)&&!a.legacyCore;let w,k;const A=new Promise((R,I)=>{k=R,w=I}),h=R=>{w(R.message)};let f=$g(a);f.onerror=h,ou+=1;const m=(R,I)=>{u[R]=I},E=(R,I)=>{c[R]=I},v=({id:R,action:I,payload:W})=>new Promise((F,Q)=>{nu(`[${o}]: Start ${R}, action=${I}`);const J=`${I}-${R}`;m(J,F),E(J,Q),ny(f,{workerId:o,jobId:R,action:I,payload:W})}),N=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),L=R=>v(Ge({id:R,action:"load",payload:{options:{lstmOnly:x,corePath:a.corePath,logging:a.logging}}})),P=(R,I,W)=>v(Ge({id:W,action:"FS",payload:{method:"writeFile",args:[R,I]}})),U=(R,I)=>v(Ge({id:I,action:"FS",payload:{method:"readFile",args:[R,{encoding:"utf8"}]}})),T=(R,I)=>v(Ge({id:I,action:"FS",payload:{method:"unlink",args:[R]}})),M=(R,I,W)=>v(Ge({id:W,action:"FS",payload:{method:R,args:I}})),re=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),me=(R,I)=>v(Ge({id:I,action:"loadLanguage",payload:{langs:R,options:{langPath:a.langPath,dataPath:a.dataPath,cachePath:a.cachePath,cacheMethod:a.cacheMethod,gzip:a.gzip,lstmOnly:[Vt.DEFAULT,Vt.LSTM_ONLY].includes(d)&&!a.legacyLang}}})),lt=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),ae=(R,I,W,F)=>v(Ge({id:F,action:"initialize",payload:{langs:R,oem:I,config:W}})),it=(R="eng",I,W,F)=>{if(x&&[Vt.TESSERACT_ONLY,Vt.TESSERACT_LSTM_COMBINED].includes(I))throw Error("Legacy model requested but code missing.");const Q=I||d;d=Q;const J=W||g;g=J;const st=(typeof R=="string"?R.split("+"):R).filter(ut=>!p.includes(ut));return p.push(...st),st.length>0?me(st,F).then(()=>ae(R,Q,J,F)):ae(R,Q,J,F)},at=(R={},I)=>v(Ge({id:I,action:"setParameters",payload:{params:R}})),B=async(R,I={},W={blocks:!0,text:!0,hocr:!0,tsv:!0},F)=>v(Ge({id:F,action:"recognize",payload:{image:await ru(R),options:I,output:W}})),C=(R="Tesseract OCR Result",I=!1,W)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),v(Ge({id:W,action:"getPDF",payload:{title:R,textonly:I}}))),S=async(R,I)=>{if(x)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return v(Ge({id:I,action:"detect",payload:{image:await ru(R)}}))},j=async()=>(f!==null&&(ey(f),f=null),Promise.resolve());ty(f,({workerId:R,jobId:I,status:W,action:F,data:Q})=>{const J=`${F}-${I}`;if(W==="resolve"){nu(`[${R}]: Complete ${I}`);let St=Q;F==="recognize"?St=Xg(Q):F==="getPDF"&&(St=Array.from({...Q,length:Object.keys(Q).length})),u[J]({jobId:I,data:St})}else if(W==="reject")if(c[J](Q),F==="load"&&w(Q),i)i(Q);else throw Error(Q);else W==="progress"&&l({...Q,userJobId:I})});const z={id:o,worker:f,setResolve:m,setReject:E,load:N,writeText:P,readText:U,removeFile:T,FS:M,loadLanguage:re,initialize:lt,reinitialize:it,setParameters:at,recognize:B,getPDF:C,detect:S,terminate:j};return L().then(()=>me(e)).then(()=>ae(e,t,r)).then(()=>k(z)).catch(()=>{}),A};const Vd=Gd,ry=async(e,t,n)=>{const r=await Vd(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},oy=async(e,t)=>{const n=await Vd("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var ly={recognize:ry,detect:oy},iy={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},ay={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const sy=kg,uy=Gd,cy=ly,dy=iy,fy=Qd,py=ay,{setLogging:hy}=Un;var my={languages:dy,OEM:fy,PSM:py,createScheduler:sy,createWorker:uy,setLogging:hy,...cy};const gy=iu(my),yy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFAUlEQVR4AeycS+hNURTGLxPKIyGFGQMlUgp5jMgIxcREGaIwMZABJibKTB7FSIyQUpgxIY8BBh4ZyJABishrwvdpH91u5x777sdda5+ztNd/nXPufqz9/e7e557t3j2xZ/9UKWBAVOHo9QyIAVGmgLJwbIQYEGUKKAvHRogBUaaAsnBshBgQZQooCyfPCFHWyZLCMSDKaBkQA6JMAWXh2AhpKZBJ6Nd+2EPYV9jvAuwLYrwN2wRTk1KMkPnozSPYSdgq2BRYCWkqglwPuwE7BlORYoFwZNxET5bBXsG2wqbDJhRg8xDjQdhP2GGYipESC2Q3OlLBWI3j6zBOBXDq0ztEeAJ2FMZ0gH+kLRbIDteBQ/CfYCWmSy7oFc6Lulggi130d5wfdK8HL0Sc5yr61lU8zXlRFwuEN0Z2YNg0tZAvmvkrEAvEvyXL6aWAAfGSaXyZDMj4tPZqKTeQ515RWKZ/CuQGsvRfS34HfNCUWIKpogtZ8uEHmmRLMLmBVB318bYEA5VyA/F9DuHIsCWYMQDxfQ6xJRjAYMo9QtiGj8ktwfhE55cnyRKMFiC2BOOgawFiSzDKgLhwzGkZIUbCKWBAnBBaXClAOrMEUwoQ3yWYj3inhyx/DJYRewOUAgQ6e6WZyJXiCxZLUI9IKgWI7xKMiIgpGy0FiO8STEpt+ut61n/icRycpRQgoR3kvWDw/uBzznL9bY5tCms7EAoZck9huX4gYztuO5CxCZmqoa4A4RQUMlWl0tm7nq4A4RTkM3Uxn7d4OTJ2BUgO7bLUaUCyyBpeaduApFo6GbzfsN5wlUco2TYgs9F3n3vFqHlYL6rOn9oGJL9imVtoBJK5bau+RgEDUiOK5CUDIql+TdsGpEYUyUsGRFL9mrYNSI0okpcMiKT6NW0bkBpRJC8ZEEn1a9o2IDWiSF4SACLZXf1tpwLCX0Dxt4HcFah/eyYqMLhyWnfOfGZQIBWQ+6iL2zOthC9leyaEqi+lArIcXYvZngnFLVGBVEAIo7Ttmdh/dZYKiO/2TMO+/aFOGKmAUgEZtj3TYL/4rY66/60bzNfZ81gg/ETVWfFydDwWyAsX1AbnKzdsaqr7yMtrVbnO+1gg1W+zj0PJGbAqDZua6qYrXqvKdd7HAjkHBZ/CFsG4Z+82eO5KCjfe1JbWYoH8ghCbYU9ghHIN/jOM09AohiKWqEAsENbBTST5DLIXJ3xij7nRM549qIej7Tt8BRWHvepYs2ecUUYBoipwhTlSzuB4LYy7e/K+MIqh2N90F3/PwrhD9mT4EtPjmKBTAYmJob/sGpzw94Tb4efARoEqmXcdYmXiV0638CDUtAEhDE5/V9Ch97BS0k4X6Cl47pgNF5a0ATmCbnyA/S+N+pyT+76zywV82flgpw3ILc+ejPqck3s6++HifuN8sNMChBtJshN8J9N31rQAeekIxC7BEKiEVZ8IF7h+BDstQC66HsQuwSSemnq+9Z138fPToTsMc1qAsEMlL8FccPLvg58LC05agPDBMsUSjMR0xTbvOQKz4K/CgpMWIOxAtQTDd9kDXIhZgkFxsfQtpmVNQNgPjpTTOOATe8gSjO+cnzPfRsQfnLQBCe5IWwoaEGUkDYgBUaaAsnBshBgQZQoIhNPUpI2QJnUEXjMgAqI3NWlAmtQReM2ACIje1KQBaVJH4DUDIiB6U5MGpEkdgdcMiIDoTU3+AQAA//8dRwUKAAAABklEQVQDANhm1Nh0hBd3AAAAAElFTkSuQmCC";function vy({showToast:e,setLoader:t}){const n=y.useRef(null),r=y.useRef(null),[o,l]=y.useState(null),[i,a]=y.useState([]),[u,c]=y.useState(!1),[p,d]=y.useState("");y.useEffect(()=>{let h;async function f(){try{h=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}),n.current&&(n.current.srcObject=h)}catch(m){console.error(m),e("Camera tidak bisa diakses","err")}}return f(),()=>{h&&h.getTracks().forEach(m=>m.stop())}},[]);async function g(h){try{t(!0,"Mengambil data...");const f=await ie("/member-loans/"+h);if(!f.length){e("Tidak ada peminjaman aktif","err");return}l(f[0]),a(f),e("Data ditemukan","ok")}catch(f){console.error(f),e(f.message||"Data tidak ditemukan","err")}finally{t(!1)}}function x(h){const f=h.replace(/\D/g,"");return f.length===8?`${f.slice(0,2)}.${f.slice(2,3)}.${f.slice(3,4)}.${f.slice(4)}`:h}async function w(){try{c(!0);const h=n.current,f=r.current,m=f.getContext("2d");f.width=h.videoWidth,f.height=h.videoHeight,m.filter="grayscale(100%) contrast(200%)",m.drawImage(h,0,0,f.width,f.height),e("Membaca kartu...","ok");const v=(await gy.recognize(f,"eng")).data.text;console.log("OCR TEXT:",v);const N=v.replace(/\s/g,""),L=N.match(/\d{8}/)||N.match(/\d{2}\.\d{2}\.\d{4}/)||N.match(/\d{2}\.\d\.\d\.\d{4}/);if(!L){e("NIM tidak ditemukan","err"),c(!1);return}let P=x(L[0]);console.log("FORMAT NIM:",P),d(P),await g(P)}catch(h){console.error(h),e("Gagal scan kartu","err")}finally{c(!1)}}async function k(){if(!p){e("Masukkan NIM","err");return}const h=x(p);d(h),await g(h)}async function A(h){try{t(!0,"Memproses pengembalian...");const f=await ie("/loans/return","POST",{book_id:h});e(f.message,"ok");const m=i.filter(E=>E.book_id!==h);a(m),m.length===0&&l(null)}catch(f){console.error(f),e("Gagal mengembalikan buku","err")}finally{t(!1)}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .return-page {

          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 24px;

        }

        .card {

          background: #fff;

          border-radius: 28px;

          padding: 28px;

          box-shadow:
            0 10px 30px
            rgba(0,0,0,.05);

        }

        .scan-btn {

          width: 100%;

          padding: 16px;

          border: none;

          border-radius: 16px;

          background:
            #2f35d7;

          color: white;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          transition: .2s;

          margin-top: 16px;

        }

        .scan-btn:hover {

          transform:
            scale(1.02);

        }

        .manual-input {

          width: 100%;

          padding: 14px;

          border:
            1px solid #ddd;

          border-radius: 14px;

          font-size: 15px;

          margin-top: 18px;

          outline: none;

        }

        .book-card {

          border:
            1px solid #eee;

          border-radius: 18px;

          padding: 18px;

          margin-top: 18px;

        }

        .return-btn {

          width: 100%;

          padding: 14px;

          border: none;

          border-radius: 14px;

          background:
            #2f35d7;

          color: white;

          font-weight: 700;

          cursor: pointer;

          margin-top: 14px;

        }

        @media
        (max-width:900px) {

          .return-page {

            grid-template-columns:
              1fr;

          }

        }

      `}),s.jsxs("div",{className:"return-page",children:[s.jsxs("div",{className:"card",children:[s.jsx("p",{style:{color:"#666",marginBottom:20},children:"Scan kartu anggota atau masukkan NIM secara manual."}),s.jsx("div",{style:{border:"2px dashed #c4b5fd",borderRadius:24,overflow:"hidden",padding:10,background:"#faf5ff"},children:s.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",borderRadius:18}})}),s.jsx("canvas",{ref:r,style:{display:"none"}}),s.jsx("button",{onClick:w,className:"scan-btn",disabled:u,style:{opacity:u?.7:1},children:u?"Membaca Kartu...":"Scan Kartu"}),s.jsx("input",{type:"text",className:"manual-input",placeholder:"23.1.9.0000",value:p,onChange:h=>d(h.target.value)}),s.jsx("button",{onClick:k,className:"scan-btn",children:"Cari Manual"})]}),s.jsxs("div",{className:"card",children:[!o&&s.jsxs("div",{style:{textAlign:"center",marginTop:100,color:"#777"},children:[s.jsx("img",{src:yy,alt:"kosong",style:{width:80,height:80,objectFit:"contain",marginBottom:12}}),s.jsx("h2",{children:"Belum Ada Data Peminjam"})]}),o&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{style:{marginBottom:24},children:[s.jsx("h2",{children:o.borrower_name}),s.jsxs("p",{style:{color:"#666"},children:["NIM:"," ",o.nim]})]}),i.map(h=>s.jsxs("div",{className:"book-card",children:[s.jsx("h3",{children:h.title}),s.jsxs("p",{style:{color:"#666",marginTop:8},children:["Jatuh tempo:"," ",an(h.due_date)]}),s.jsx("button",{onClick:()=>A(h.book_id),className:"return-btn",children:"Kembalikan Buku"})]},h.id))]})]})]})]})}const xy=["Fiksi","Non-Fiksi","Ilmiah","Teknik","Sejarah","AI","Pemrograman","Romance","Horror","Lainnya"],wy=["Buku","Novel","Komik","Tugas Akhir","Laporan Magang","Jurnal","Modul"];function ky({showToast:e,setLoader:t}){const[n,r]=y.useState([]),[o,l]=y.useState({id:"",title:"",author:"",jenis:"Buku",category:"Fiksi",year:""});y.useEffect(()=>{i()},[]);async function i(){try{const p=await ie("/books");r(p)}catch{e("Gagal memuat buku","err")}}async function a(){const{id:p,title:d,author:g,jenis:x,category:w,year:k}=o;if(!p||!d||!g||!k){e("Lengkapi semua form","err");return}t(!0,"Menyimpan koleksi...");try{const A=await ie("/books","POST",{id:p,title:d,author:g,jenis:x,category:w,year:k});e(A.message,"ok"),l({id:"",title:"",author:"",jenis:"Buku",category:"Fiksi",year:""}),i()}catch(A){e(A.message,"err")}finally{t(!1)}}async function u(p){if(confirm("Hapus koleksi ini?")){t(!0,"Menghapus...");try{const d=await ie(`/books/${encodeURIComponent(p)}`,"DELETE");e(d.message||"Koleksi berhasil dihapus","ok"),await i()}catch(d){e(d.message||"Gagal menghapus buku","err")}finally{t(!1)}}}function c(p,d){l(g=>({...g,[p]:d}))}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .books-page {
          animation:
            fadePage .5s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        .glass-card {

          background:
            rgba(255,255,255,.92);

          backdrop-filter:
            blur(12px);

          border:
            1px solid
            rgba(255,255,255,.4);


        }

        .glass-card:hover {


          box-shadow:
            0 18px 34px
            rgba(0,0,0,.08);

        }

        .modern-input {
          transition: .2s;
        }

        .modern-input:focus {

          border-color:
            #4f46e5 !important;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .modern-btn {
          transition: .2s;
        }

        .modern-btn:hover {

          transform:
            scale(1.01);

          opacity: .95;

        }

        .table-row {
          transition: .2s;
        }

        .table-row:hover {

          background:
            #f8faff;

        }

        .delete-btn {
          transition: .2s;
        }

        .delete-btn:hover {

          transform:
            scale(1.08);

          background:
            #dc2626 !important;

        }

        @media (max-width: 900px) {

          .form-grid {
            grid-template-columns:
              1fr !important;
          }

        }

        /* ========================= */
/* RESPONSIVE TABLE */
/* ========================= */

.table-wrapper{

overflow-x:auto;

-webkit-overflow-scrolling:touch;

}

.table-wrapper::-webkit-scrollbar{

height:7px;

}

.table-wrapper::-webkit-scrollbar-thumb{

background:#d1d5db;

border-radius:999px;

}

@media(max-width:768px){

.table-row td{

padding:12px 10px !important;

font-size:12px;

}
.table-wrapper{
overflow-x:auto;
-webkit-overflow-scrolling:touch;
}

.table-wrapper::-webkit-scrollbar{
height:8px;
}

.table-wrapper::-webkit-scrollbar-thumb{
background:#d1d5db;
border-radius:999px;
}
}

      `}),s.jsxs("div",{className:"books-page",style:{display:"flex",flexDirection:"column",gap:24},children:[s.jsxs("div",{className:"glass-card",style:{padding:28},children:[s.jsx("div",{style:{marginBottom:24},children:s.jsx("div",{style:{color:"#666",fontSize:14},children:"Tambahkan buku, novel, tugas akhir, laporan magang, dan lainnya disini."})}),s.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[s.jsx(ue,{label:"ID Koleksi",children:s.jsx("input",{value:o.id,onChange:p=>c("id",p.target.value),placeholder:"BOOK-001",style:{...ce,borderRadius:8,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"Tahun",children:s.jsx("input",{value:o.year,onChange:p=>c("year",p.target.value),placeholder:"2025",style:{...ce,borderRadius:8,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"Judul",children:s.jsx("input",{value:o.title,onChange:p=>c("title",p.target.value),placeholder:"Judul koleksi",style:{...ce,borderRadius:8,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"Penulis",children:s.jsx("input",{value:o.author,onChange:p=>c("author",p.target.value),placeholder:"Nama penulis",style:{...ce,borderRadius:8,padding:14},className:"modern-input"})}),s.jsx(ue,{label:"Jenis Koleksi",children:s.jsx("select",{value:o.jenis,onChange:p=>c("jenis",p.target.value),style:{...ce,borderRadius:8,padding:14},className:"modern-input",children:wy.map(p=>s.jsx("option",{children:p},p))})}),s.jsx(ue,{label:"Kategori",children:s.jsx("select",{value:o.category,onChange:p=>c("category",p.target.value),style:{...ce,borderRadius:8,padding:14},className:"modern-input",children:xy.map(p=>s.jsx("option",{children:p},p))})})]}),s.jsx("button",{onClick:a,className:"modern-btn",style:{width:"100%",background:"rgb(47, 53, 215)",color:"#fff",border:"none",borderRadius:14,padding:"15px 20px",fontSize:15,fontWeight:700,cursor:"pointer",marginTop:24,boxShadow:"0 10px 22px rgba(79,70,229,.22)"},children:"Simpan Koleksi"})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:26,fontWeight:700,marginBottom:18},children:"Koleksi Perpustakaan"}),s.jsx("div",{className:"glass-card table-wrapper",style:{overflowX:"auto",overflowY:"hidden",WebkitOverflowScrolling:"touch"},children:s.jsxs("table",{style:{width:"100%",minWidth:"850px",borderCollapse:"collapse"},children:[s.jsx("thead",{style:{background:"#f4f6fb"},children:s.jsx("tr",{children:["ID","Judul","Penulis","Jenis","Kategori","Tahun","Status",""].map(p=>s.jsx("th",{style:Sy,children:p},p))})}),s.jsx("tbody",{children:n.length===0?s.jsx("tr",{children:s.jsx("td",{colSpan:8,style:{textAlign:"center",padding:40,color:"#999"},children:"Belum ada koleksi"})}):n.map(p=>s.jsxs("tr",{className:"table-row",children:[s.jsx("td",{style:Ct,children:p.id}),s.jsx("td",{style:Ct,children:p.title}),s.jsx("td",{style:Ct,children:p.author}),s.jsx("td",{style:Ct,children:p.jenis}),s.jsx("td",{style:Ct,children:p.category}),s.jsx("td",{style:Ct,children:p.year}),s.jsx("td",{style:Ct,children:s.jsx(Od,{status:p.status})}),s.jsx("td",{style:Ct,children:p.status==="tersedia"&&s.jsx("button",{onClick:()=>u(p.id),className:"delete-btn",style:{background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:700,cursor:"pointer"},children:"🗑"})})]},p.id))})]})})]})]})]})}const Sy={padding:"14px 18px",textAlign:"left",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",color:"#666",borderBottom:"1px solid rgba(0,0,0,.08)"},Ct={padding:"15px 18px",borderBottom:"1px solid rgba(0,0,0,.06)"};function Ey({onSelectBook:e,showToast:t}){const[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),[u,c]=y.useState(!1);async function p(){if(n.trim()){c(!0),a(!0);try{const d=await ie("/books/search?q="+encodeURIComponent(n));l(d)}catch(d){t("Gagal mencari: "+d.message,"err")}finally{a(!1)}}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .search-page {
          animation:
            fadePage .45s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        @keyframes spin {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }

        }

        .glass-card {

          background:
            rgba(255,255,255,.92);

          backdrop-filter:
            blur(14px);

          border:
            1px solid rgba(255,255,255,.4);

          box-shadow:
            0 10px 30px rgba(0,0,0,.05);

        }

        .modern-input {

          width: 100%;

          border:
            1px solid #e5e7eb;

          border-radius: 18px;

          padding: 16px 18px;

          font-size: 14px;

          outline: none;

          transition: .2s;

          box-sizing: border-box;

        }

        .modern-input:focus {

          border-color:
            #4f46e5;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .book-card {

          transition: none;

          cursor: pointer;

        }

        .book-card:hover {

          box-shadow:
            0 16px 30px
            rgba(0,0,0,.08);

          border-color:
            rgba(79,70,229,.3);

        }

        .book-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fill,
              minmax(280px,1fr)
            );

          gap: 18px;

        }

        .search-btn {

          transition: .2s;

        }

        .search-btn:hover {

          transform:
            scale(1.03);

          opacity: .95;

        }

        @media (max-width:768px) {

          .book-grid {

            grid-template-columns:
              1fr !important;

          }

          .search-flex {

            flex-direction:
              column;

          }

          .search-btn{

width:100%;

height:52px;

display:flex;

align-items:center;

justify-content:center;

font-size:15px;

margin-top:8px;

flex-shrink:0;

}

@media (max-width:1024px){

.search-flex{

gap:14px;

}

.search-btn{

min-width:160px;

}

}

@media (max-width:768px){

.book-grid{

grid-template-columns:
1fr !important;

}

.search-flex{

flex-direction:column;

gap:12px;

}

.search-btn{

width:100%;

height:52px;

display:flex;

align-items:center;

justify-content:center;

font-size:15px;

margin-top:8px;

}

}

        }

      `}),s.jsxs("div",{className:"search-page",children:[s.jsx("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:s.jsxs("div",{className:"search-flex",style:{display:"flex",gap:12},children:[s.jsx("input",{className:`\r
modern-input\r
`,value:n,onChange:d=>r(d.target.value),onKeyDown:d=>d.key==="Enter"&&p(),placeholder:`\r
Cari judul atau ID buku...\r
`}),s.jsx("button",{onClick:p,className:`\r
search-btn\r
`,style:{background:"#2f35d7",color:"#fff",border:"none",borderRadius:18,padding:"0 24px",fontWeight:700,cursor:"pointer",boxShadow:"0 10px 20px rgba(79,70,229,.22)"},children:"Cari"})]})}),i&&s.jsx("div",{style:{textAlign:"center",color:"#666",marginBottom:20},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[s.jsx("div",{style:{width:42,height:42,border:"4px solid #e5e7eb",borderTop:"4px solid #352beb",borderRadius:"50%",animation:"spin .8s linear infinite"}}),s.jsx("div",{children:"Mencari buku..."})]})}),!i&&u&&o.length===0&&s.jsx("div",{className:"glass-card",style:{padding:24,borderRadius:20,textAlign:"center",color:"#777"},children:"Buku tidak ditemukan"}),s.jsx("div",{className:"book-grid",children:o.map(d=>s.jsxs("div",{className:`\r
book-card glass-card\r
`,onClick:()=>e(d),style:{borderRadius:24,padding:16,position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{width:"100%",height:280,borderRadius:18,overflow:"hidden",marginBottom:18,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontWeight:700,fontSize:14},children:d.image_url?s.jsx("img",{src:`http://127.0.0.1:8000${d.image_url}`,alt:d.title,style:{width:"100%",height:"100%",objectFit:"cover"},onError:g=>{g.target.style.display="none",g.target.parentNode.innerHTML="GAMBAR TIDAK TERSEDIA"}}):"GAMBAR TIDAK TERSEDIA"}),s.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:d.title}),s.jsxs("div",{style:{fontSize:14,color:"#555",marginBottom:14},children:["Penulis: ",d.author]}),s.jsx("div",{style:{display:"inline-block",background:"#eef2ff",color:"#4f46e5",padding:"6px 12px",borderRadius:999,fontSize:12,fontWeight:700,marginBottom:16},children:d.category}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18},children:[s.jsx("div",{style:{fontSize:12,color:"#999",fontWeight:600},children:d.id}),s.jsx("div",{style:{fontSize:11,padding:"6px 12px",borderRadius:999,background:d.status==="tersedia"?"#e6f9f0":"#ffe6e6",color:d.status==="tersedia"?"#0f9d58":"#d93025",fontWeight:700},children:d.status})]})]},d.id))})]})]})}function Cy(){nl();const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),u="https://project-7ixze.vercel.app",c=`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Plus Jakarta Sans',
            sans-serif;
      background: #f3f3f3;
    }

    .page {
      min-height: 100vh;
      padding: 60px 80px;
      background: #f3f3f3;
    }

    .container {
      width: 100%;
    }

    .filter {
      display: flex;
      flex-direction: column;
      gap: 25px;
      width: 100%;
    }

    .filter select {
      width: 100%;
      height: 52px;
      border: none;
      border-radius: 30px;
      padding: 0 20px;
      font-size: 15px;
      background: #d9d9d9;
      outline: none;
      color: #555;
    }

    .filter button {
      align-self: flex-end;
      width: 150px;
      height: 48px;
      border: none;
      border-radius: 30px;
      background: #2f35d7;
      color: white;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }

    .filter button:hover {
      transform: scale(1.03);
    }

    .book-list{
  margin-top:80px;
  padding:0;

  display:grid;

  grid-template-columns:
  repeat(
    auto-fill,
    minmax(290px,1fr)
  );

  gap:28px;
}


.book-card{
  list-style:none;

  background:white;

  border-radius:30px;

  overflow:hidden;

  padding:18px;

  min-height:520px;

  display:flex;

  flex-direction:column;

  box-shadow:
  0 10px 25px rgba(
  0,0,0,.05);

  opacity:1;

  transition:.35s;
}


.book-card:hover{

transform:translateY(-8px);

box-shadow:
0 18px 40px rgba(
0,0,0,.1);

}


.book-image{

width:100%;

height:280px;

background:#f4f5f7;

border-radius:22px;

overflow:hidden;

display:flex;

align-items:center;

justify-content:center;

margin-bottom:20px;

}


.book-cover{

width:100%;

height:100%;

object-fit:cover;

}


.empty-cover{

font-size:20px;

font-weight:700;

color:#9ca3af;

text-align:center;

padding:20px;

}


.book-info{

display:flex;

flex-direction:column;

flex:1;

}


.book-title{

font-size:18px;

font-weight:800;

line-height:1.5;

text-transform:uppercase;

margin-bottom:14px;

color:#222;

}


.author{

color:#757575;

margin-bottom:20px;

font-size:15px;

}


.badge{

width:fit-content;

padding:8px 14px;

border-radius:999px;

background:#eef0ff;

color:#4c54eb;

font-size:12px;

font-weight:700;

margin-bottom:auto;

}


.bottom-row{

margin-top:24px;

display:flex;

justify-content:space-between;

align-items:center;

}


.book-id{

color:#9a9a9a;

font-size:14px;

}


.status{

padding:7px 14px;

background:#dcfce7;

color:#16a34a;

border-radius:999px;

font-size:12px;

font-weight:bold;

}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}



@keyframes floatUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {
  0% {
    background-position: -400px 0;
  }

  100% {
    background-position: 400px 0;
  }
}

/* PAGE ANIMATION */

.page {
  animation: fadeIn 0.8s ease;
}

/* HEADER */

h1 {
  animation: fadeIn 1s ease;
}

p {
  animation: fadeIn 1.2s ease;
}

/* SELECT */

.filter select {
  transition: all 0.3s ease;
}

.filter select:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}

.filter select:focus {
  box-shadow: 0 0 0 4px rgba(47,53,215,0.15);
}

/* BUTTON */

.filter button {
  animation: pulse 2s infinite;
}

.filter button:hover {
  transform: scale(1.06);
  box-shadow: 0 8px 20px rgba(47,53,215,0.3);
}

/* BOOK CARD */

.book-card {
  animation: floatUp 0.6s ease forwards;
  opacity: 0;
  transition: all 0.3s ease;
}

.book-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

/* IMAGE */

.book-cover {
  transition: transform 0.3s ease;
}

.book-card:hover .book-cover {
  transform: scale(1.05);
}

/* LOADING */

.loading {
  width: fit-content;
  padding: 14px 24px;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    #ececec 25%,
    #f5f5f5 50%,
    #ececec 75%
  );

  background-size: 400px 100%;
  animation: shimmer 1.5s infinite linear;
}

/* EMPTY STATE */

.empty-state {
  animation: fadeIn 1s ease;
}

/* ========================= */
/* RESPONSIVE */
/* ========================= */

/* TABLET */

@media (max-width: 1024px){

.page{

padding:40px 30px;

}

.book-list{

grid-template-columns:
repeat(
auto-fill,
minmax(250px,1fr)
);

gap:20px;

}

.book-image{

height:240px;

}

}


/* HP */

@media (max-width:768px){

.page{

padding:20px 16px;

}

.filter{

gap:16px;

}

.filter button{

width:100%;

height:50px;

align-self:stretch;

}

.book-list{

margin-top:40px;

grid-template-columns:1fr;

gap:18px;

}

.book-card{

min-height:auto;

padding:16px;

border-radius:22px;

}

.book-image{

height:220px;

}

.book-title{

font-size:16px;

}

.author{

font-size:14px;

}

.bottom-row{

flex-direction:column;

align-items:flex-start;

gap:10px;

}

}


/* HP KECIL */

@media (max-width:480px){

.page{

padding:14px;

}

.book-image{

height:180px;

}

.book-title{

font-size:15px;

}

.status{

font-size:11px;

padding:6px 10px;

}

}
  `,p=async()=>{if(!e||!n){alert("Mood dan genre harus dipilih");return}a(!0);try{const d=await fetch(`${u}/recommend`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({genre:n,subgenre:e})});if(!d.ok)throw new Error("Gagal mengambil data");const g=await d.json();l(g.recommendations||g)}catch(d){console.error(d),alert("Server tidak merespon")}finally{a(!1)}};return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:c}),s.jsx("div",{className:"App",children:s.jsx("div",{className:"page",children:s.jsxs("main",{className:"container",children:[s.jsx("div",{style:{marginBottom:30}}),s.jsxs("form",{className:"filter",onSubmit:d=>{d.preventDefault(),p()},children:[s.jsxs("select",{value:e,onChange:d=>t(d.target.value),children:[s.jsx("option",{value:"",children:"Apa yang kamu rasakan..."}),s.jsx("option",{value:"senang",children:"Senang"}),s.jsx("option",{value:"penasaran",children:"Penasaran"}),s.jsx("option",{value:"sedih",children:"Sedih"}),s.jsx("option",{value:"tenang",children:"Tenang"}),s.jsx("option",{value:"marah",children:"Marah"})]}),s.jsxs("select",{value:n,onChange:d=>r(d.target.value),children:[s.jsx("option",{value:"",children:"Pilih Genre"}),s.jsx("option",{value:"agama anak",children:"Agama Anak"}),s.jsx("option",{value:"agama umum",children:"Agama Umum"}),s.jsx("option",{value:"sains umum",children:"Sains Umum"}),s.jsx("option",{value:"sastra anak",children:"Sastra Anak"}),s.jsx("option",{value:"sastra umum",children:"Sastra Umum"})]}),s.jsx("button",{type:"submit",children:i?"Loading...":"Cari"})]}),s.jsx("ul",{className:"book-list",children:i?s.jsx("div",{className:"loading",children:"🔍 Sedang mencari rekomendasi..."}):o.length>0?o.map((d,g)=>s.jsxs("li",{className:"book-card",style:{animationDelay:`${g*.15}s`},children:[s.jsxs("div",{className:"book-image",children:[s.jsx("img",{className:"book-cover",src:`${u}${d.image_url}`,alt:d.judul,onError:x=>{x.target.style.display="none",x.target.nextSibling.style.display="flex"}}),s.jsx("div",{className:"empty-cover",style:{display:"none"},children:"GAMBAR TIDAK TERSEDIA"})]}),s.jsxs("div",{className:"book-info",children:[s.jsx("div",{className:"book-title",children:d.judul}),s.jsxs("div",{className:"author",children:["Penulis: ",d.pengarang]}),s.jsx("div",{className:"badge",children:d.klasifikasi||"Ilmiah"}),s.jsxs("div",{className:"bottom-row",children:[s.jsx("div",{className:"book-id",children:d.id||"-"}),s.jsx("div",{className:"status",children:"tersedia"})]})]})]},g)):s.jsx("div",{className:"empty-state",children:"Silakan pilih mood dan genre untuk melihat rekomendasi"})})]})})})]})}function Ay({showToast:e,setLoader:t,setSelectedMember:n,setPage:r}){const o=nl(),[l,i]=y.useState([]),[a,u]=y.useState(""),[c,p]=y.useState(null),[d,g]=y.useState({member_code:"",name:"",nim:"",major:"",phone:"",address:""});y.useEffect(()=>{x()},[]);async function x(){try{const v=await ie("/members");i(v)}catch(v){e(v.message,"err")}}const w=["Teknik Informatika","Teknik Otomotif","Teknik Elektronika Industri","Teknik Mesin"],k=l.filter(v=>!a||v.major===a);async function A(){const v=c!==null;t(!0,v?"Menyimpan perubahan anggota...":"Menambahkan anggota...");try{const N=await ie(v?`/members/${encodeURIComponent(c)}`:"/members",v?"PUT":"POST",d);e(N.message,"ok"),g({member_code:"",name:"",nim:"",major:"",phone:"",address:""}),p(null),x()}catch(N){e(N.message,"err")}finally{t(!1)}}function h(v,N){g(L=>({...L,[v]:N}))}function f(v){g({member_code:v.member_code,name:v.name,nim:v.nim,major:v.major,phone:v.phone,address:v.address}),p(v.id)}function m(){p(null),g({member_code:"",name:"",nim:"",major:"",phone:"",address:""})}async function E(v){if(window.confirm("Hapus anggota ini?")){t(!0,"Menghapus anggota...");try{const N=await ie(`/members/${encodeURIComponent(v)}`,"DELETE");e(N.message,"ok"),x(),c===v&&m()}catch(N){e(N.message,"err")}finally{t(!1)}}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .members-page {
          animation: fadePage .5s ease;
        }

        @keyframes fadePage {

          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .glass-card {
          background: rgba(255,255,255,.92);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,.4);
          box-shadow: 0 10px 30px rgba(0,0,0,.05);
        }

        .modern-input {
          width: 100%;
          border: 1px RGB(0,0,0,0.2) solid;
          padding: 14px 16px;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
          transition: .2s;
          background: rgb(240, 239, 235);
          box-sizing: border-box;
        }

        .modern-input:focus {
          border-color: #4f46e5;
          box-shadow: 0 0 0 4px rgba(79,70,229,.12);
        }

        .submit-btn {
          transition: .2s;
        }

        .submit-btn:hover {
          transform: scale(1.01);
          opacity: .95;
        }

        .member-card {
          animation: cardFade .4s ease;
        }

        .member-card:hover {
          box-shadow: 0 16px 30px rgba(0,0,0,.08);
        }

        @keyframes cardFade {

          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .member-grid {
          display: grid;
          grid-template-columns:
            repeat(auto-fill,minmax(260px,1fr));
          gap: 18px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 768px) {

          .form-grid {
            grid-template-columns: 1fr;
          }

          .page-wrapper {
            padding: 0 !important;
          }

        }

        /* Table styles for members list */
        .members-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .members-table th,
        .members-table td {
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0,0,0,.06);
          text-align: left;
          vertical-align: middle;
        }

        .members-table thead th {
          background: rgba(15,23,42,.04);
          font-weight: 700;
        }

        .members-table tbody tr:hover {
          background: rgba(79,70,229,.03);
        }

        .actions-cell {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }
      `}),s.jsxs("div",{className:"members-page page-wrapper",style:{width:"100%"},children:[s.jsx("div",{style:{marginBottom:26}}),s.jsxs("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:[s.jsx("div",{style:{fontSize:22,fontWeight:700,marginBottom:24},children:c?"Edit Anggota":"Tambah Anggota"}),s.jsxs("div",{className:"form-grid",children:[s.jsx(ue,{label:"Kode Anggota",children:s.jsx("input",{className:"modern-input",placeholder:"ANGGT-001",style:{...ce,borderRadius:8,padding:14},value:d.member_code,onChange:v=>h("member_code",v.target.value)})}),s.jsx(ue,{label:"Nama",children:s.jsx("input",{className:"modern-input",placeholder:"Nama Lengkap",style:{...ce,borderRadius:8,padding:14},value:d.name,onChange:v=>h("name",v.target.value)})}),s.jsx(ue,{label:"NIM",children:s.jsx("input",{className:"modern-input",placeholder:"23.1.9.0000",style:{...ce,borderRadius:8,padding:14},value:d.nim,onChange:v=>h("nim",v.target.value)})}),s.jsx(ue,{label:"Prodi",children:s.jsx("input",{className:"modern-input",placeholder:"Teknik Informatika",style:{...ce,borderRadius:8,padding:14},value:d.major,onChange:v=>h("major",v.target.value)})}),s.jsx(ue,{label:"No Telepon",children:s.jsx("input",{className:"modern-input",placeholder:"08123456789",style:{...ce,borderRadius:8,padding:14,minHeight:110},value:d.phone,onChange:v=>h("phone",v.target.value)})}),s.jsx(ue,{label:"Alamat",children:s.jsx("textarea",{className:"modern-input",placeholder:"Alamat lengkap",rows:4,style:{...ce,borderRadius:8,padding:14,minHeight:110},value:d.address,onChange:v=>h("address",v.target.value)})})]}),s.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[s.jsx("button",{onClick:A,className:"submit-btn",style:{marginTop:24,flex:1,minWidth:180,background:"rgb(47, 53, 215)",color:"#fff",border:"none",borderRadius:14,padding:"16px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 24px rgba(79,70,229,.24)"},children:c?"Simpan Perubahan":"Tambah Anggota"}),c&&s.jsx("button",{onClick:m,className:"submit-btn",style:{marginTop:24,flex:1,minWidth:120,background:"#f3f4f6",color:"#111827",border:"none",padding:"16px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 24px rgba(15,23,42,.08)"},children:"Batal"})]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:18},children:[s.jsx("div",{style:{fontSize:22,fontWeight:700},children:"Daftar Anggota"}),s.jsxs("select",{value:a,onChange:v=>u(v.target.value),style:{padding:"10px 14px",border:"1px solid #ddd",borderRadius:10,background:"#fff",minWidth:220,cursor:"pointer"},children:[s.jsx("option",{value:"",children:"Semua Prodi"}),w.map(v=>s.jsx("option",{value:v,children:v},v))]})]}),s.jsx("div",{children:s.jsxs("table",{className:"members-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Nama"}),s.jsx("th",{children:"Kode"}),s.jsx("th",{children:"NIM"}),s.jsx("th",{children:"Prodi"}),s.jsx("th",{children:"Telepon"}),s.jsx("th",{style:{textAlign:"right"},children:"Aksi"})]})}),s.jsx("tbody",{children:k.map(v=>s.jsxs("tr",{children:[s.jsx("td",{style:{fontWeight:700},children:v.name}),s.jsx("td",{children:v.member_code}),s.jsx("td",{children:v.nim}),s.jsx("td",{children:v.major}),s.jsx("td",{children:v.phone}),s.jsxs("td",{className:"actions-cell",children:[s.jsx("button",{className:"submit-btn",onClick:()=>{n(v),o("/borrow",{state:v})},style:{background:"rgb(47, 53, 215)",color:"#fff",border:"none",borderRadius:8,padding:"8px 12px",fontWeight:700,cursor:"pointer"},children:"Gunakan"}),s.jsx("button",{className:"submit-btn",onClick:()=>f(v),style:{background:"#eef2ff",color:"#3730a3",border:"1px solid rgba(79,70,229,.15)",borderRadius:8,padding:"8px 12px",fontWeight:700,cursor:"pointer"},children:"Edit"}),s.jsx("button",{className:"submit-btn",onClick:()=>E(v.id),style:{background:"#fee2e2",color:"#991b1b",border:"none",borderRadius:8,padding:"8px 12px",fontWeight:700,cursor:"pointer"},children:"Hapus"})]})]},v.id))})]})})]})]})}function jy({showToast:e}){const t=nl(),[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),[u,c]=y.useState(""),[p,d]=y.useState(null),[g,x]=y.useState({member_code:"",name:"",nim:"",major:"",phone:"",address:""});async function w(m){r(m);const E=m.trim();if(!E){l([]),c("");return}c(E),a(!0);try{const v=await ie("/members/search?q="+encodeURIComponent(m));l(v)}catch{e("Gagal mencari anggota","err")}finally{a(!1)}}function k(m,E){x(v=>({...v,[m]:E}))}function A(m){x({member_code:m.member_code,name:m.name,nim:m.nim,major:m.major,phone:m.phone,address:m.address}),d(m.id)}async function h(){try{const m=await ie(isEditing?`/members/${encodeURIComponent(p)}`:"/members",isEditing?"PUT":"POST",g);e("Data anggota berhasil diperbarui","ok"),d(null),w(n)}catch(m){e(m.message,"err")}}async function f(m){if(window.confirm("Hapus anggota ini?"))try{await ie(`/members/${encodeURIComponent(m)}`,"DELETE"),e("Anggota berhasil dihapus","ok"),w(n)}catch(E){e(E.message,"err")}}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        .search-page {

          animation:
            fadePage .4s ease;

        }

        @keyframes fadePage {

          from {

            opacity: 0;

            transform:
              translateY(20px);

          }

          to {

            opacity: 1;

            transform:
              translateY(0);

          }

        }

        .glass-card {

          background:
            rgba(255,255,255,.92);

          backdrop-filter:
            blur(14px);

          border:
            1px solid rgba(255,255,255,.4);

          box-shadow:
            0 10px 30px rgba(0,0,0,.05);

        }

        .modern-input {

          width: 100%;

          border:
            1px solid #e5e7eb;

          border-radius: 18px;

          padding: 16px 18px;

          font-size: 14px;

          outline: none;

          transition: .2s;

          box-sizing: border-box;

        }

        .modern-input:focus {

          border-color:
            #4f46e5;

          box-shadow:
            0 0 0 4px
            rgba(79,70,229,.12);

        }

        .member-card:hover {



          box-shadow:
            0 16px 30px
            rgba(0,0,0,.08);

        }

        .member-grid {

          display: grid;

          grid-template-columns:
            repeat(
              auto-fill,
              minmax(280px,1fr)
            );

          gap: 18px;

        }

        .edit-modal {

          position: fixed;

          inset: 0;

          background:
            rgba(0,0,0,.45);

          display: flex;

          align-items: center;

          justify-content:
            center;

          z-index: 9999;

          padding: 20px;

        }

        .edit-box {

          width: 100%;

          max-width: 520px;

          background: white;

          border-radius: 28px;

          padding: 28px;

          animation:
            fadeScale .25s ease;

        }

        @keyframes fadeScale {

          from {

            opacity: 0;

            transform:
              scale(.95);

          }

          to {

            opacity: 1;

            transform:
              scale(1);

          }

        }
          @keyframes fadePage {

          from {
            opacity: 0;
            transform:
              translateY(20px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        @keyframes spin {

          from {
            transform:
              rotate(0deg);
          }

          to {
            transform:
              rotate(360deg);
          }

        }


        .primary-btn{

background:
#2f35d7;
);

color:#fff;

border:none;

border-radius:18px;

padding:
0 24px;

font-weight:700;

cursor:pointer;

box-shadow:
0 10px 20px
rgba(79,70,229,.22);

height:50px;

}


.search-btn{

transition:.2s;

}

.search-btn:hover{

transform:
scale(1.03);

}


@media(max-width:768px){

.search-flex{

flex-direction:
column;

}

.search-btn{

width:100%!important;

}

}
      `}),s.jsxs("div",{className:"search-page",children:[s.jsx("div",{style:{marginBottom:28}}),s.jsx("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:s.jsxs("div",{className:"search-flex",style:{display:"flex",gap:12,alignItems:"center"},children:[s.jsx("input",{className:"modern-input",placeholder:`\r
Cari nama / NIM / kode anggota untuk meminjam buku.\r
`,value:n,onChange:m=>r(m.target.value),onKeyDown:m=>{m.key==="Enter"&&w(n)}}),s.jsx("button",{className:`\r
primary-btn search-btn\r
`,onClick:()=>w(n),style:{width:"80px",flexShrink:0},children:"Cari"})]})}),i&&s.jsx("div",{style:{textAlign:"center",color:"#666",marginBottom:20},children:s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[s.jsx("div",{style:{width:42,height:42,border:"4px solid #e5e7eb",borderTop:"4px solid #352beb",borderRadius:"50%",animation:"spin .8s linear infinite"}}),s.jsx("div",{children:"Mencari Anggota..."})]})}),!i&&u&&n===u&&o.length===0&&s.jsx("div",{style:{textAlign:"center",color:"#777"},children:"Anggota tidak ditemukan"}),s.jsx("div",{className:"member-grid",children:o.map(m=>s.jsxs("div",{className:`\r
member-card glass-card\r
`,style:{borderRadius:24,padding:22,position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",right:-25,top:-25,width:90,height:90,borderRadius:"50%",background:"rgba(79,70,229,.08)"}}),s.jsx("div",{style:{width:68,height:68,borderRadius:20,overflow:"hidden",marginBottom:18},children:s.jsx("img",{src:Pa,alt:"profile",style:{width:"100%",height:"100%",objectFit:"cover"}})}),s.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:m.name}),s.jsx("div",{style:{display:"inline-block",background:"#eef2ff",color:"#4f46e5",padding:"6px 12px",borderRadius:999,fontSize:12,fontWeight:700,marginBottom:16},children:m.member_code}),s.jsxs("div",{style:{fontSize:14,color:"#555",lineHeight:1.8},children:[s.jsx("div",{children:m.nim}),s.jsx("div",{children:m.major}),s.jsx("div",{children:m.phone})]}),s.jsxs("div",{style:{display:"grid",gap:10,marginTop:20},children:[s.jsx("button",{onClick:()=>{t("/borrow",{state:m})},style:{width:"100%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:16,padding:"14px 18px",fontWeight:700,cursor:"pointer"},children:"Pilih Anggota"}),s.jsxs("div",{style:{display:"flex",gap:10},children:[s.jsx("button",{onClick:()=>A(m),style:{flex:1,background:"#eef2ff",color:"#3730a3",border:"none",borderRadius:14,padding:12,fontWeight:700,cursor:"pointer"},children:"Edit"}),s.jsx("button",{onClick:()=>f(m.id),style:{flex:1,background:"#fee2e2",color:"#991b1b",border:"none",borderRadius:14,padding:12,fontWeight:700,cursor:"pointer"},children:"Hapus"})]})]})]},m.id))})]}),p&&s.jsx("div",{className:"edit-modal",children:s.jsxs("div",{className:"edit-box",children:[s.jsx("div",{style:{fontSize:24,fontWeight:700,marginBottom:20},children:"Edit Anggota"}),s.jsxs("div",{style:{display:"grid",gap:14},children:[s.jsx("input",{className:"modern-input",placeholder:`\r
Kode anggota\r
`,value:g.member_code,onChange:m=>k("member_code",m.target.value)}),s.jsx("input",{className:"modern-input",placeholder:"Nama",value:g.name,onChange:m=>k("name",m.target.value)}),s.jsx("input",{className:"modern-input",placeholder:"NIM",value:g.nim,onChange:m=>k("nim",m.target.value)}),s.jsx("input",{className:"modern-input",placeholder:"Jurusan",value:g.major,onChange:m=>k("major",m.target.value)}),s.jsx("input",{className:"modern-input",placeholder:`\r
No Telepon\r
`,value:g.phone,onChange:m=>k("phone",m.target.value)}),s.jsx("textarea",{className:"modern-input",rows:4,placeholder:`\r
Alamat\r
`,value:g.address,onChange:m=>k("address",m.target.value)})]}),s.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[s.jsx("button",{onClick:h,style:{flex:1,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:16,padding:14,fontWeight:700,cursor:"pointer"},children:"Simpan"}),s.jsx("button",{onClick:()=>d(null),style:{flex:1,background:"#f3f4f6",color:"#111827",border:"none",borderRadius:16,padding:14,fontWeight:700,cursor:"pointer"},children:"Batal"})]})]})})]})}function Ry(){const[e,t]=y.useState([]),[n,r]=y.useState("");function o(){if(!n.trim())return;const l={sender:"user",text:n};t(i=>[...i,l]),r(""),setTimeout(()=>{t(i=>[...i,{sender:"bot",text:"Halo 😊 saya siap membantu rekomendasi buku dan layanan perpustakaan."}])},700)}return s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          font-family:
            'Plus Jakarta Sans',
            sans-serif
        }

        .ai-page{

          min-height:100vh;

          background:#f5f5f7;

          display:flex;

          flex-direction:column;

          justify-content:center;

          align-items:center;

          padding:40px 30px 20px;

        }

        .hero{

          text-align:center;

          margin-bottom:50px;

          animation:
            fadeUp .5s ease;

        }

        .hero h1{

          font-size:48px;

          margin-bottom:12px;

          color:#111;

          font-weight:700;

        }

        .hero p{

          color:#777;

          font-size:17px;

        }

        @keyframes fadeUp{

          from{

            opacity:0;

            transform:
              translateY(20px);

          }

          to{

            opacity:1;

            transform:
              translateY(0);

          }

        }

        .chat-box{

          width:100%;
          max-width:950px;

        }

        .messages{

          display:flex;

          flex-direction:column;

          gap:18px;

          margin-bottom:30px;

          max-height:50vh;

          overflow-y:auto;

        }

        .msg-wrap{

          display:flex;

        }

        .msg-wrap.user{

          justify-content:flex-end;

        }

        .msg-wrap.bot{

          justify-content:flex-start;

        }

        .msg{

          max-width:70%;

          padding:16px 20px;

          border-radius:22px;

          font-size:14px;

          line-height:1.7;

          animation:
            fadeMessage .3s ease;

        }

        @keyframes fadeMessage{

          from{

            opacity:0;

            transform:
              translateY(10px);

          }

          to{

            opacity:1;

            transform:
              translateY(0);

          }

        }

        .msg.user{

          background:
            rgb(47, 53, 215);

          color:white;

          border-bottom-right-radius:8px;

          box-shadow:
            0 10px 25px
            rgba(79,70,229,.25);

        }

        .msg.bot{

          background:white;

          color:#222;

          border:
            1px solid #eee;

          border-bottom-left-radius:8px;

          box-shadow:
            0 10px 25px
            rgba(0,0,0,.04);

        }

        .input-area{

          background:white;
          border:
            2px solid #4f46e5;

          border-radius:999px;

          padding:5px;

          display:flex;

          align-items:center;

          gap:10px;

          box-shadow:
            0 10px 30px
            rgba(79,70,229,.12);

        }

        .input-area input{

          flex:1;

          border:none;

          outline:none;

          background:none;

          padding:14px 16px;

          font-size:15px;

        }

        .send-btn{

          width:52px;

          height:52px;

          border:none;

          border-radius:50%;

          background:
            rgb(47, 53, 215);

          color:white;

          cursor:pointer;

          font-size:18px;

          transition:.2s;

        }

        .send-btn:hover{

          transform:scale(1.06);

        }

        @media(max-width:768px){

          .hero h1{

            font-size:32px;

          }

          .hero p{

            font-size:14px;

          }

          .msg{

            max-width:90%;

          }

          .input-area{

            border-radius:24px;

          }

        }

      `}),s.jsxs("div",{className:"ai-page",children:[e.length===0&&s.jsxs("div",{className:"hero",children:[s.jsxs("h1",{children:["Selamat Datang di Asisten ",s.jsx("br",{}),"Perpus PBJT"]}),s.jsx("p",{children:"Temukan buku yang sempurna untuk kamu hari ini."})]}),s.jsxs("div",{className:"chat-box",children:[s.jsx("div",{className:"messages",children:e.map((l,i)=>s.jsx("div",{className:`msg-wrap ${l.sender}`,children:s.jsx("div",{className:`msg ${l.sender}`,children:l.text})},i))}),s.jsxs("div",{className:"input-area",children:[s.jsx("input",{placeholder:"Ask Anything",value:n,onChange:l=>r(l.target.value),onKeyDown:l=>{l.key==="Enter"&&o()}}),s.jsx("button",{className:"send-btn",onClick:o,children:"➤"})]})]})]})]})}function by(){const[e,t]=y.useState(!0),[n,r]=y.useState(null),[o,l]=y.useState(window.innerWidth>768),[i,a]=y.useState(null),{toast:u,showToast:c}=Zm(),{loader:p,setLoader:d}=Xm();y.useEffect(()=>{const w=setTimeout(()=>{t(!1)},2500);return()=>clearTimeout(w)},[]),y.useEffect(()=>{const w=()=>{window.innerWidth<=768?l(!1):l(!0)};return window.addEventListener("resize",w),()=>{window.removeEventListener("resize",w)}},[]);function g(w){r(w)}function x(){r(null),c("Berhasil keluar","info")}return e?s.jsx(ag,{}):s.jsxs(s.Fragment,{children:[s.jsx("style",{children:`

@import url(
'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap'
);

*{
box-sizing:border-box;
margin:0;
padding:0;
}

body{

font-family:
'Plus Jakarta Sans',
sans-serif;

background:#f5f4f0;

overflow-x:hidden;

}

a{
text-decoration:none;
}

`}),s.jsx(qm,{visible:p.visible,message:p.message}),s.jsx(_m,{message:u.message,type:u.type,visible:u.visible}),!n&&s.jsx(cg,{onLogin:g,showToast:c,setLoader:d}),n&&s.jsxs(Fm,{children:[s.jsx(ig,{username:n.username,onLogout:x,sidebarOpen:o,setSidebarOpen:l,role:n.role}),s.jsx("div",{style:{marginLeft:window.innerWidth<=768?0:o?220:70,transition:".3s",padding:window.innerWidth<=768?15:25,minHeight:"100vh",width:window.innerWidth<=768?"100%":`calc(
100% - ${o?220:70}px
)`,overflowX:"hidden"},children:s.jsxs(mm,{children:[s.jsx($e,{path:"/",element:n.role==="admin"?s.jsx(mg,{showToast:c,setLoader:d}):s.jsx($s,{session:n,showToast:c,setLoader:d,selectedMember:i})}),s.jsx($e,{path:"/borrow",element:s.jsx($s,{session:n,showToast:c,setLoader:d,selectedMember:i})}),s.jsx($e,{path:"/return",element:s.jsx(vy,{showToast:c,setLoader:d})}),s.jsx($e,{path:"/books",element:s.jsx(ky,{showToast:c,setLoader:d})}),s.jsx($e,{path:"/search",element:s.jsx(Ey,{showToast:c})}),s.jsx($e,{path:"/rekomendasi",element:s.jsx(Cy,{showToast:c,setLoader:d})}),s.jsx($e,{path:"/members",element:s.jsx(Ay,{showToast:c,setLoader:d,setSelectedMember:a})}),s.jsx($e,{path:"/carianggota",element:s.jsx(jy,{showToast:c,setLoader:d})}),s.jsx($e,{path:"/chatbot",element:s.jsx(Ry,{})})]})})]})]})}const Ny="modulepreload",Ly=function(e,t){return new URL(e,t).href},lu={},Ty=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),u=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=Ly(c,r),c in lu)return;lu[c]=!0;const p=c.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let w=i.length-1;w>=0;w--){const k=i[w];if(k.href===c&&(!p||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":Ny,p||(x.as="script"),x.crossOrigin="",x.href=c,u&&x.setAttribute("nonce",u),document.head.appendChild(x),p)return new Promise((w,k)=>{x.addEventListener("load",w),x.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};function Iy(e={}){const{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:o,onRegistered:l,onRegisteredSW:i,onRegisterError:a}=e;let u,c;const p=async(g=!0)=>{await c};async function d(){if("serviceWorker"in navigator){if(u=await Ty(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:g}},[],import.meta.url).then(({Workbox:g})=>new g("./sw.js",{scope:"./",type:"classic"})).catch(g=>{a==null||a(g)}),!u)return;u.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&(n?n():window.location.reload())}),u.addEventListener("installed",g=>{g.isUpdate||o==null||o()}),u.register({immediate:t}).then(g=>{i?i("./sw.js",g):l==null||l(g)}).catch(g=>{a==null||a(g)})}}return c=d(),p}Iy({immediate:!0});Bl.createRoot(document.getElementById("root")).render(s.jsx(af.StrictMode,{children:s.jsx(by,{})}));
