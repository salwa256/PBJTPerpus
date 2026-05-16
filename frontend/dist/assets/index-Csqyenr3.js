(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var su={exports:{}},Oo={},uu={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jr=Symbol.for("react.element"),Jd=Symbol.for("react.portal"),Yd=Symbol.for("react.fragment"),Zd=Symbol.for("react.strict_mode"),Xd=Symbol.for("react.profiler"),_d=Symbol.for("react.provider"),qd=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),ef=Symbol.for("react.suspense"),tf=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),za=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var cu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},du=Object.assign,fu={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||cu}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function pu(){}pu.prototype=Bn.prototype;function Ti(e,t,n){this.props=e,this.context=t,this.refs=fu,this.updater=n||cu}var Ii=Ti.prototype=new pu;Ii.constructor=Ti;du(Ii,Bn.prototype);Ii.isPureReactComponent=!0;var Ma=Array.isArray,hu=Object.prototype.hasOwnProperty,Pi={current:null},mu={key:!0,ref:!0,__self:!0,__source:!0};function gu(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)hu.call(t,r)&&!mu.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:jr,type:e,key:l,ref:i,props:o,_owner:Pi.current}}function of(e,t){return{$$typeof:jr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bi(e){return typeof e=="object"&&e!==null&&e.$$typeof===jr}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ua=/\/+/g;function ll(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function $r(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case jr:case Jd:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+ll(i,0):r,Ma(o)?(n="",e!=null&&(n=e.replace(Ua,"$&/")+"/"),$r(o,t,n,"",function(c){return c})):o!=null&&(Bi(o)&&(o=of(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ua,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Ma(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+ll(l,a);i+=$r(l,t,n,s,o)}else if(s=rf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+ll(l,a++),i+=$r(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Br(e,t,n){if(e==null)return e;var r=[],o=0;return $r(e,r,"","",function(l){return t.call(n,l,o++)}),r}function af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ve={current:null},eo={transition:null},sf={ReactCurrentDispatcher:ve,ReactCurrentBatchConfig:eo,ReactCurrentOwner:Pi};function yu(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Br,forEach:function(e,t,n){Br(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Br(e,function(){t++}),t},toArray:function(e){return Br(e,function(t){return t})||[]},only:function(e){if(!Bi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Bn;U.Fragment=Yd;U.Profiler=Xd;U.PureComponent=Ti;U.StrictMode=Zd;U.Suspense=ef;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;U.act=yu;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=du({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Pi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)hu.call(t,s)&&!mu.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:jr,type:e.type,key:o,ref:l,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_d,_context:e},e.Consumer=e};U.createElement=gu;U.createFactory=function(e){var t=gu.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:$d,render:e}};U.isValidElement=Bi;U.lazy=function(e){return{$$typeof:nf,_payload:{_status:-1,_result:e},_init:af}};U.memo=function(e,t){return{$$typeof:tf,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=eo.transition;eo.transition={};try{e()}finally{eo.transition=t}};U.unstable_act=yu;U.useCallback=function(e,t){return ve.current.useCallback(e,t)};U.useContext=function(e){return ve.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return ve.current.useDeferredValue(e)};U.useEffect=function(e,t){return ve.current.useEffect(e,t)};U.useId=function(){return ve.current.useId()};U.useImperativeHandle=function(e,t,n){return ve.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return ve.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ve.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ve.current.useMemo(e,t)};U.useReducer=function(e,t,n){return ve.current.useReducer(e,t,n)};U.useRef=function(e){return ve.current.useRef(e)};U.useState=function(e){return ve.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return ve.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return ve.current.useTransition()};U.version="18.3.1";uu.exports=U;var y=uu.exports;const uf=au(y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cf=y,df=Symbol.for("react.element"),ff=Symbol.for("react.fragment"),pf=Object.prototype.hasOwnProperty,hf=cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mf={key:!0,ref:!0,__self:!0,__source:!0};function vu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)pf.call(t,r)&&!mf.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:df,type:e,key:l,ref:i,props:o,_owner:hf.current}}Oo.Fragment=ff;Oo.jsx=vu;Oo.jsxs=vu;su.exports=Oo;var u=su.exports,Dl={},xu={exports:{}},be={},wu={exports:{}},ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,S){var k=P.length;P.push(S);e:for(;0<k;){var j=k-1>>>1,D=P[j];if(0<o(D,S))P[j]=S,P[k]=D,k=j;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var S=P[0],k=P.pop();if(k!==S){P[0]=k;e:for(var j=0,D=P.length,R=D>>>1;j<R;){var T=2*(j+1)-1,O=P[T],M=T+1,W=P[M];if(0>o(O,k))M<D&&0>o(W,O)?(P[j]=W,P[M]=k,j=M):(P[j]=O,P[T]=k,j=T);else if(M<D&&0>o(W,k))P[j]=W,P[M]=k,j=M;else break e}}return S}function o(P,S){var k=P.sortIndex-S.sortIndex;return k!==0?k:P.id-S.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,a=i.now();e.unstable_now=function(){return i.now()-a}}var s=[],c=[],h=1,f=null,m=3,x=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var S=n(c);S!==null;){if(S.callback===null)r(c);else if(S.startTime<=P)r(c),S.sortIndex=S.expirationTime,t(s,S);else break;S=n(c)}}function C(P){if(w=!1,g(P),!v)if(n(s)!==null)v=!0,it(A);else{var S=n(c);S!==null&&at(C,S.startTime-P)}}function A(P,S){v=!1,w&&(w=!1,d(I),I=-1),x=!0;var k=m;try{for(g(S),f=n(s);f!==null&&(!(f.expirationTime>S)||P&&!te());){var j=f.callback;if(typeof j=="function"){f.callback=null,m=f.priorityLevel;var D=j(f.expirationTime<=S);S=e.unstable_now(),typeof D=="function"?f.callback=D:f===n(s)&&r(s),g(S)}else r(s);f=n(s)}if(f!==null)var R=!0;else{var T=n(c);T!==null&&at(C,T.startTime-S),R=!1}return R}finally{f=null,m=k,x=!1}}var L=!1,b=null,I=-1,F=5,z=-1;function te(){return!(e.unstable_now()-z<F)}function We(){if(b!==null){var P=e.unstable_now();z=P;var S=!0;try{S=b(!0,P)}finally{S?we():(L=!1,b=null)}}else L=!1}var we;if(typeof p=="function")we=function(){p(We)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ie=lt.port2;lt.port1.onmessage=We,we=function(){ie.postMessage(null)}}else we=function(){E(We,0)};function it(P){b=P,L||(L=!0,we())}function at(P,S){I=E(function(){P(e.unstable_now())},S)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,it(A))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var S=3;break;default:S=m}var k=m;m=S;try{return P()}finally{m=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,S){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=m;m=P;try{return S()}finally{m=k}},e.unstable_scheduleCallback=function(P,S,k){var j=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?j+k:j):k=j,P){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=k+D,P={id:h++,callback:S,priorityLevel:P,startTime:k,expirationTime:D,sortIndex:-1},k>j?(P.sortIndex=k,t(c,P),n(s)===null&&P===n(c)&&(w?(d(I),I=-1):w=!0,at(C,k-j))):(P.sortIndex=D,t(s,P),v||x||(v=!0,it(A))),P},e.unstable_shouldYield=te,e.unstable_wrapCallback=function(P){var S=m;return function(){var k=m;m=S;try{return P.apply(this,arguments)}finally{m=k}}}})(ku);wu.exports=ku;var gf=wu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf=y,Le=gf;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Su=new Set,sr={};function on(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(sr[e]=t,e=0;e<t.length;e++)Su.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zl=Object.prototype.hasOwnProperty,vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fa={},Oa={};function xf(e){return zl.call(Oa,e)?!0:zl.call(Fa,e)?!1:vf.test(e)?Oa[e]=!0:(Fa[e]=!0,!1)}function wf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kf(e,t,n,r){if(t===null||typeof t>"u"||wf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Di=/[\-:]([a-z])/g;function zi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Di,zi);de[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Di,zi);de[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Di,zi);de[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Mi(e,t,n,r){var o=de.hasOwnProperty(t)?de[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(kf(t,n,o,r)&&(n=null),r||o===null?xf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=yf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Dr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),Ui=Symbol.for("react.strict_mode"),Ml=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),Cu=Symbol.for("react.context"),Fi=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Fl=Symbol.for("react.suspense_list"),Oi=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Au=Symbol.for("react.offscreen"),Wa=Symbol.iterator;function On(e){return e===null||typeof e!="object"?null:(e=Wa&&e[Wa]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,il;function Zn(e){if(il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);il=t&&t[1]||""}return`
`+il+e}var al=!1;function sl(e,t){if(!e||al)return"";al=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{al=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zn(e):""}function Sf(e){switch(e.tag){case 5:return Zn(e.type);case 16:return Zn("Lazy");case 13:return Zn("Suspense");case 19:return Zn("SuspenseList");case 0:case 2:case 15:return e=sl(e.type,!1),e;case 11:return e=sl(e.type.render,!1),e;case 1:return e=sl(e.type,!0),e;default:return""}}function Ol(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case Ml:return"Profiler";case Ui:return"StrictMode";case Ul:return"Suspense";case Fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cu:return(e.displayName||"Context")+".Consumer";case Eu:return(e._context.displayName||"Context")+".Provider";case Fi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oi:return t=e.displayName||null,t!==null?t:Ol(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return Ol(e(t))}catch{}}return null}function Ef(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ol(t);case 8:return t===Ui?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ju(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cf(e){var t=ju(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Cf(e))}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ju(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ho(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wl(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Qa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ft(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nu(e,t){t=t.checked,t!=null&&Mi(e,"checked",t,!1)}function Ql(e,t){Nu(e,t);var n=Ft(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Gl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Gl(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Gl(e,t,n){(t!=="number"||ho(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Xn=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Vl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Va(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(Xn(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ft(n)}}function Lu(e,t){var n=Ft(t.value),r=Ft(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ha(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mr,Tu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mr=Mr||document.createElement("div"),Mr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $n={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Af=["Webkit","ms","Moz","O"];Object.keys($n).forEach(function(e){Af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$n[t]=$n[e]})});function Iu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||$n.hasOwnProperty(e)&&$n[e]?(""+t).trim():t+"px"}function Pu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Iu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var jf=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kl(e,t){if(t){if(jf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function Jl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yl=null;function Wi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Sn=null,En=null;function Ka(e){if(e=Lr(e)){if(typeof Zl!="function")throw Error(N(280));var t=e.stateNode;t&&(t=Ho(t),Zl(e.stateNode,e.type,t))}}function Bu(e){Sn?En?En.push(e):En=[e]:Sn=e}function Du(){if(Sn){var e=Sn,t=En;if(En=Sn=null,Ka(e),t)for(e=0;e<t.length;e++)Ka(t[e])}}function zu(e,t){return e(t)}function Mu(){}var ul=!1;function Uu(e,t,n){if(ul)return e(t,n);ul=!0;try{return zu(e,t,n)}finally{ul=!1,(Sn!==null||En!==null)&&(Mu(),Du())}}function cr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ho(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Xl=!1;if(mt)try{var Wn={};Object.defineProperty(Wn,"passive",{get:function(){Xl=!0}}),window.addEventListener("test",Wn,Wn),window.removeEventListener("test",Wn,Wn)}catch{Xl=!1}function Rf(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var er=!1,mo=null,go=!1,_l=null,Nf={onError:function(e){er=!0,mo=e}};function Lf(e,t,n,r,o,l,i,a,s){er=!1,mo=null,Rf.apply(Nf,arguments)}function bf(e,t,n,r,o,l,i,a,s){if(Lf.apply(this,arguments),er){if(er){var c=mo;er=!1,mo=null}else throw Error(N(198));go||(go=!0,_l=c)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ja(e){if(ln(e)!==e)throw Error(N(188))}function Tf(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Ja(o),e;if(l===r)return Ja(o),t;l=l.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Ou(e){return e=Tf(e),e!==null?Wu(e):null}function Wu(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wu(e);if(t!==null)return t;e=e.sibling}return null}var Qu=Le.unstable_scheduleCallback,Ya=Le.unstable_cancelCallback,If=Le.unstable_shouldYield,Pf=Le.unstable_requestPaint,ee=Le.unstable_now,Bf=Le.unstable_getCurrentPriorityLevel,Qi=Le.unstable_ImmediatePriority,Gu=Le.unstable_UserBlockingPriority,yo=Le.unstable_NormalPriority,Df=Le.unstable_LowPriority,Vu=Le.unstable_IdlePriority,Wo=null,nt=null;function zf(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Wo,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Ff,Mf=Math.log,Uf=Math.LN2;function Ff(e){return e>>>=0,e===0?32:31-(Mf(e)/Uf|0)|0}var Ur=64,Fr=4194304;function _n(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function vo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=_n(a):(l&=i,l!==0&&(r=_n(l)))}else i=n&~o,i!==0?r=_n(i):l!==0&&(r=_n(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Je(t),o=1<<n,r|=e[n],t&=~o;return r}function Of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Je(l),a=1<<i,s=o[i];s===-1?(!(a&n)||a&r)&&(o[i]=Of(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hu(){var e=Ur;return Ur<<=1,!(Ur&4194240)&&(Ur=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=n}function Qf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Je(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Gi(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var G=0;function Ku(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ju,Vi,Yu,Zu,Xu,$l=!1,Or=[],Tt=null,It=null,Pt=null,dr=new Map,fr=new Map,Rt=[],Gf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Za(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":dr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fr.delete(t.pointerId)}}function Qn(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Lr(t),t!==null&&Vi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vf(e,t,n,r,o){switch(t){case"focusin":return Tt=Qn(Tt,e,t,n,r,o),!0;case"dragenter":return It=Qn(It,e,t,n,r,o),!0;case"mouseover":return Pt=Qn(Pt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return dr.set(l,Qn(dr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,fr.set(l,Qn(fr.get(l)||null,e,t,n,r,o)),!0}return!1}function _u(e){var t=Yt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=Fu(n),t!==null){e.blockedOn=t,Xu(e.priority,function(){Yu(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function to(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ei(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Yl=r,n.target.dispatchEvent(r),Yl=null}else return t=Lr(n),t!==null&&Vi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xa(e,t,n){to(e)&&n.delete(t)}function Hf(){$l=!1,Tt!==null&&to(Tt)&&(Tt=null),It!==null&&to(It)&&(It=null),Pt!==null&&to(Pt)&&(Pt=null),dr.forEach(Xa),fr.forEach(Xa)}function Gn(e,t){e.blockedOn===t&&(e.blockedOn=null,$l||($l=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Hf)))}function pr(e){function t(o){return Gn(o,e)}if(0<Or.length){Gn(Or[0],e);for(var n=1;n<Or.length;n++){var r=Or[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tt!==null&&Gn(Tt,e),It!==null&&Gn(It,e),Pt!==null&&Gn(Pt,e),dr.forEach(t),fr.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)_u(n),n.blockedOn===null&&Rt.shift()}var Cn=wt.ReactCurrentBatchConfig,xo=!0;function Kf(e,t,n,r){var o=G,l=Cn.transition;Cn.transition=null;try{G=1,Hi(e,t,n,r)}finally{G=o,Cn.transition=l}}function Jf(e,t,n,r){var o=G,l=Cn.transition;Cn.transition=null;try{G=4,Hi(e,t,n,r)}finally{G=o,Cn.transition=l}}function Hi(e,t,n,r){if(xo){var o=ei(e,t,n,r);if(o===null)wl(e,t,r,wo,n),Za(e,r);else if(Vf(o,e,t,n,r))r.stopPropagation();else if(Za(e,r),t&4&&-1<Gf.indexOf(e)){for(;o!==null;){var l=Lr(o);if(l!==null&&Ju(l),l=ei(e,t,n,r),l===null&&wl(e,t,r,wo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var wo=null;function ei(e,t,n,r){if(wo=null,e=Wi(r),e=Yt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fu(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function qu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Bf()){case Qi:return 1;case Gu:return 4;case yo:case Df:return 16;case Vu:return 536870912;default:return 16}default:return 16}}var Lt=null,Ki=null,no=null;function $u(){if(no)return no;var e,t=Ki,n=t.length,r,o="value"in Lt?Lt.value:Lt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return no=o.slice(e,1<r?1-r:void 0)}function ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wr(){return!0}function _a(){return!1}function Te(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Wr:_a,this.isPropagationStopped=_a,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wr)},persist:function(){},isPersistent:Wr}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ji=Te(Dn),Nr=q({},Dn,{view:0,detail:0}),Yf=Te(Nr),dl,fl,Vn,Qo=q({},Nr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vn&&(Vn&&e.type==="mousemove"?(dl=e.screenX-Vn.screenX,fl=e.screenY-Vn.screenY):fl=dl=0,Vn=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),qa=Te(Qo),Zf=q({},Qo,{dataTransfer:0}),Xf=Te(Zf),_f=q({},Nr,{relatedTarget:0}),pl=Te(_f),qf=q({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),$f=Te(qf),ep=q({},Dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tp=Te(ep),np=q({},Dn,{data:0}),$a=Te(np),rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},op={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lp[e])?!!t[e]:!1}function Yi(){return ip}var ap=q({},Nr,{key:function(e){if(e.key){var t=rp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?op[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yi,charCode:function(e){return e.type==="keypress"?ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sp=Te(ap),up=q({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=Te(up),cp=q({},Nr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yi}),dp=Te(cp),fp=q({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pp=Te(fp),hp=q({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mp=Te(hp),gp=[9,13,27,32],Zi=mt&&"CompositionEvent"in window,tr=null;mt&&"documentMode"in document&&(tr=document.documentMode);var yp=mt&&"TextEvent"in window&&!tr,ec=mt&&(!Zi||tr&&8<tr&&11>=tr),ts=" ",ns=!1;function tc(e,t){switch(e){case"keyup":return gp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function vp(e,t){switch(e){case"compositionend":return nc(t);case"keypress":return t.which!==32?null:(ns=!0,ts);case"textInput":return e=t.data,e===ts&&ns?null:e;default:return null}}function xp(e,t){if(dn)return e==="compositionend"||!Zi&&tc(e,t)?(e=$u(),no=Ki=Lt=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ec&&t.locale!=="ko"?null:t.data;default:return null}}var wp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wp[e.type]:t==="textarea"}function rc(e,t,n,r){Bu(r),t=ko(t,"onChange"),0<t.length&&(n=new Ji("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nr=null,hr=null;function kp(e){hc(e,0)}function Go(e){var t=hn(e);if(Ru(t))return e}function Sp(e,t){if(e==="change")return t}var oc=!1;if(mt){var hl;if(mt){var ml="oninput"in document;if(!ml){var os=document.createElement("div");os.setAttribute("oninput","return;"),ml=typeof os.oninput=="function"}hl=ml}else hl=!1;oc=hl&&(!document.documentMode||9<document.documentMode)}function ls(){nr&&(nr.detachEvent("onpropertychange",lc),hr=nr=null)}function lc(e){if(e.propertyName==="value"&&Go(hr)){var t=[];rc(t,hr,e,Wi(e)),Uu(kp,t)}}function Ep(e,t,n){e==="focusin"?(ls(),nr=t,hr=n,nr.attachEvent("onpropertychange",lc)):e==="focusout"&&ls()}function Cp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(hr)}function Ap(e,t){if(e==="click")return Go(t)}function jp(e,t){if(e==="input"||e==="change")return Go(t)}function Rp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Rp;function mr(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!zl.call(t,o)||!Xe(e[o],t[o]))return!1}return!0}function is(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function as(e,t){var n=is(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=is(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(){for(var e=window,t=ho();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ho(e.document)}return t}function Xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Np(e){var t=ac(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ic(n.ownerDocument.documentElement,n)){if(r!==null&&Xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=as(n,l);var i=as(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Lp=mt&&"documentMode"in document&&11>=document.documentMode,fn=null,ti=null,rr=null,ni=!1;function ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ni||fn==null||fn!==ho(r)||(r=fn,"selectionStart"in r&&Xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),rr&&mr(rr,r)||(rr=r,r=ko(ti,"onSelect"),0<r.length&&(t=new Ji("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function Qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionend:Qr("Transition","TransitionEnd")},gl={},sc={};mt&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function Vo(e){if(gl[e])return gl[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return gl[e]=t[n];return e}var uc=Vo("animationend"),cc=Vo("animationiteration"),dc=Vo("animationstart"),fc=Vo("transitionend"),pc=new Map,us="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wt(e,t){pc.set(e,t),on(t,[e])}for(var yl=0;yl<us.length;yl++){var vl=us[yl],bp=vl.toLowerCase(),Tp=vl[0].toUpperCase()+vl.slice(1);Wt(bp,"on"+Tp)}Wt(uc,"onAnimationEnd");Wt(cc,"onAnimationIteration");Wt(dc,"onAnimationStart");Wt("dblclick","onDoubleClick");Wt("focusin","onFocus");Wt("focusout","onBlur");Wt(fc,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ip=new Set("cancel close invalid load scroll toggle".split(" ").concat(qn));function cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bf(r,t,void 0,e),e.currentTarget=null}function hc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;cs(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;cs(o,a,c),l=s}}}if(go)throw e=_l,go=!1,_l=null,e}function H(e,t){var n=t[ai];n===void 0&&(n=t[ai]=new Set);var r=e+"__bubble";n.has(r)||(mc(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),mc(n,e,r,t)}var Gr="_reactListening"+Math.random().toString(36).slice(2);function gr(e){if(!e[Gr]){e[Gr]=!0,Su.forEach(function(n){n!=="selectionchange"&&(Ip.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gr]||(t[Gr]=!0,xl("selectionchange",!1,t))}}function mc(e,t,n,r){switch(qu(t)){case 1:var o=Kf;break;case 4:o=Jf;break;default:o=Hi}n=o.bind(null,t,n,e),o=void 0,!Xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=Yt(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}Uu(function(){var c=l,h=Wi(n),f=[];e:{var m=pc.get(e);if(m!==void 0){var x=Ji,v=e;switch(e){case"keypress":if(ro(n)===0)break e;case"keydown":case"keyup":x=sp;break;case"focusin":v="focus",x=pl;break;case"focusout":v="blur",x=pl;break;case"beforeblur":case"afterblur":x=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=dp;break;case uc:case cc:case dc:x=$f;break;case fc:x=pp;break;case"scroll":x=Yf;break;case"wheel":x=mp;break;case"copy":case"cut":case"paste":x=tp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=es}var w=(t&4)!==0,E=!w&&e==="scroll",d=w?m!==null?m+"Capture":null:m;w=[];for(var p=c,g;p!==null;){g=p;var C=g.stateNode;if(g.tag===5&&C!==null&&(g=C,d!==null&&(C=cr(p,d),C!=null&&w.push(yr(p,C,g)))),E)break;p=p.return}0<w.length&&(m=new x(m,v,null,n,h),f.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==Yl&&(v=n.relatedTarget||n.fromElement)&&(Yt(v)||v[gt]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=c,v=v?Yt(v):null,v!==null&&(E=ln(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=c),x!==v)){if(w=qa,C="onMouseLeave",d="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=es,C="onPointerLeave",d="onPointerEnter",p="pointer"),E=x==null?m:hn(x),g=v==null?m:hn(v),m=new w(C,p+"leave",x,n,h),m.target=E,m.relatedTarget=g,C=null,Yt(h)===c&&(w=new w(d,p+"enter",v,n,h),w.target=g,w.relatedTarget=E,C=w),E=C,x&&v)t:{for(w=x,d=v,p=0,g=w;g;g=an(g))p++;for(g=0,C=d;C;C=an(C))g++;for(;0<p-g;)w=an(w),p--;for(;0<g-p;)d=an(d),g--;for(;p--;){if(w===d||d!==null&&w===d.alternate)break t;w=an(w),d=an(d)}w=null}else w=null;x!==null&&ds(f,m,x,w,!1),v!==null&&E!==null&&ds(f,E,v,w,!0)}}e:{if(m=c?hn(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var A=Sp;else if(rs(m))if(oc)A=jp;else{A=Cp;var L=Ep}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=Ap);if(A&&(A=A(e,c))){rc(f,A,n,h);break e}L&&L(e,m,c),e==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Gl(m,"number",m.value)}switch(L=c?hn(c):window,e){case"focusin":(rs(L)||L.contentEditable==="true")&&(fn=L,ti=c,rr=null);break;case"focusout":rr=ti=fn=null;break;case"mousedown":ni=!0;break;case"contextmenu":case"mouseup":case"dragend":ni=!1,ss(f,n,h);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":ss(f,n,h)}var b;if(Zi)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else dn?tc(e,n)&&(I="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(ec&&n.locale!=="ko"&&(dn||I!=="onCompositionStart"?I==="onCompositionEnd"&&dn&&(b=$u()):(Lt=h,Ki="value"in Lt?Lt.value:Lt.textContent,dn=!0)),L=ko(c,I),0<L.length&&(I=new $a(I,e,null,n,h),f.push({event:I,listeners:L}),b?I.data=b:(b=nc(n),b!==null&&(I.data=b)))),(b=yp?vp(e,n):xp(e,n))&&(c=ko(c,"onBeforeInput"),0<c.length&&(h=new $a("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=b))}hc(f,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=cr(e,n),l!=null&&r.unshift(yr(e,l,o)),l=cr(e,t),l!=null&&r.push(yr(e,l,o))),e=e.return}return r}function an(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ds(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=cr(n,l),s!=null&&i.unshift(yr(n,s,a))):o||(s=cr(n,l),s!=null&&i.push(yr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Pp=/\r\n?/g,Bp=/\u0000|\uFFFD/g;function fs(e){return(typeof e=="string"?e:""+e).replace(Pp,`
`).replace(Bp,"")}function Vr(e,t,n){if(t=fs(t),fs(e)!==t&&n)throw Error(N(425))}function So(){}var ri=null,oi=null;function li(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ii=typeof setTimeout=="function"?setTimeout:void 0,Dp=typeof clearTimeout=="function"?clearTimeout:void 0,ps=typeof Promise=="function"?Promise:void 0,zp=typeof queueMicrotask=="function"?queueMicrotask:typeof ps<"u"?function(e){return ps.resolve(null).then(e).catch(Mp)}:ii;function Mp(e){setTimeout(function(){throw e})}function kl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),pr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);pr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),tt="__reactFiber$"+zn,vr="__reactProps$"+zn,gt="__reactContainer$"+zn,ai="__reactEvents$"+zn,Up="__reactListeners$"+zn,Fp="__reactHandles$"+zn;function Yt(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=hs(e);e!==null;){if(n=e[tt])return n;e=hs(e)}return t}e=n,n=e.parentNode}return null}function Lr(e){return e=e[tt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function Ho(e){return e[vr]||null}var si=[],mn=-1;function Qt(e){return{current:e}}function K(e){0>mn||(e.current=si[mn],si[mn]=null,mn--)}function V(e,t){mn++,si[mn]=e.current,e.current=t}var Ot={},me=Qt(Ot),Ee=Qt(!1),$t=Ot;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function Eo(){K(Ee),K(me)}function ms(e,t,n){if(me.current!==Ot)throw Error(N(168));V(me,t),V(Ee,n)}function gc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,Ef(e)||"Unknown",o));return q({},n,r)}function Co(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,$t=me.current,V(me,e),V(Ee,Ee.current),!0}function gs(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=gc(e,t,$t),r.__reactInternalMemoizedMergedChildContext=e,K(Ee),K(me),V(me,e)):K(Ee),V(Ee,n)}var dt=null,Ko=!1,Sl=!1;function yc(e){dt===null?dt=[e]:dt.push(e)}function Op(e){Ko=!0,yc(e)}function Gt(){if(!Sl&&dt!==null){Sl=!0;var e=0,t=G;try{var n=dt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}dt=null,Ko=!1}catch(o){throw dt!==null&&(dt=dt.slice(e+1)),Qu(Qi,Gt),o}finally{G=t,Sl=!1}}return null}var gn=[],yn=0,Ao=null,jo=0,Ie=[],Pe=0,en=null,ft=1,pt="";function Ht(e,t){gn[yn++]=jo,gn[yn++]=Ao,Ao=e,jo=t}function vc(e,t,n){Ie[Pe++]=ft,Ie[Pe++]=pt,Ie[Pe++]=en,en=e;var r=ft;e=pt;var o=32-Je(r)-1;r&=~(1<<o),n+=1;var l=32-Je(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ft=1<<32-Je(t)+o|n<<o|r,pt=l+e}else ft=1<<l|n<<o|r,pt=e}function _i(e){e.return!==null&&(Ht(e,1),vc(e,1,0))}function qi(e){for(;e===Ao;)Ao=gn[--yn],gn[yn]=null,jo=gn[--yn],gn[yn]=null;for(;e===en;)en=Ie[--Pe],Ie[Pe]=null,pt=Ie[--Pe],Ie[Pe]=null,ft=Ie[--Pe],Ie[Pe]=null}var Ne=null,Re=null,Y=!1,Ke=null;function xc(e,t){var n=ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ys(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Re=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Re=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:ft,overflow:pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Re=null,!0):!1;default:return!1}}function ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ci(e){if(Y){var t=Re;if(t){var n=t;if(!ys(e,t)){if(ui(e))throw Error(N(418));t=Bt(n.nextSibling);var r=Ne;t&&ys(e,t)?xc(r,n):(e.flags=e.flags&-4097|2,Y=!1,Ne=e)}}else{if(ui(e))throw Error(N(418));e.flags=e.flags&-4097|2,Y=!1,Ne=e}}}function vs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function Hr(e){if(e!==Ne)return!1;if(!Y)return vs(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!li(e.type,e.memoizedProps)),t&&(t=Re)){if(ui(e))throw wc(),Error(N(418));for(;t;)xc(e,t),t=Bt(t.nextSibling)}if(vs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Re=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Re=null}}else Re=Ne?Bt(e.stateNode.nextSibling):null;return!0}function wc(){for(var e=Re;e;)e=Bt(e.nextSibling)}function Ln(){Re=Ne=null,Y=!1}function $i(e){Ke===null?Ke=[e]:Ke.push(e)}var Wp=wt.ReactCurrentBatchConfig;function Hn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Kr(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xs(e){var t=e._init;return t(e._payload)}function kc(e){function t(d,p){if(e){var g=d.deletions;g===null?(d.deletions=[p],d.flags|=16):g.push(p)}}function n(d,p){if(!e)return null;for(;p!==null;)t(d,p),p=p.sibling;return null}function r(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function o(d,p){return d=Ut(d,p),d.index=0,d.sibling=null,d}function l(d,p,g){return d.index=g,e?(g=d.alternate,g!==null?(g=g.index,g<p?(d.flags|=2,p):g):(d.flags|=2,p)):(d.flags|=1048576,p)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,p,g,C){return p===null||p.tag!==6?(p=Ll(g,d.mode,C),p.return=d,p):(p=o(p,g),p.return=d,p)}function s(d,p,g,C){var A=g.type;return A===cn?h(d,p,g.props.children,C,g.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===At&&xs(A)===p.type)?(C=o(p,g.props),C.ref=Hn(d,p,g),C.return=d,C):(C=co(g.type,g.key,g.props,null,d.mode,C),C.ref=Hn(d,p,g),C.return=d,C)}function c(d,p,g,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=bl(g,d.mode,C),p.return=d,p):(p=o(p,g.children||[]),p.return=d,p)}function h(d,p,g,C,A){return p===null||p.tag!==7?(p=qt(g,d.mode,C,A),p.return=d,p):(p=o(p,g),p.return=d,p)}function f(d,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ll(""+p,d.mode,g),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dr:return g=co(p.type,p.key,p.props,null,d.mode,g),g.ref=Hn(d,null,p),g.return=d,g;case un:return p=bl(p,d.mode,g),p.return=d,p;case At:var C=p._init;return f(d,C(p._payload),g)}if(Xn(p)||On(p))return p=qt(p,d.mode,g,null),p.return=d,p;Kr(d,p)}return null}function m(d,p,g,C){var A=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:a(d,p,""+g,C);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Dr:return g.key===A?s(d,p,g,C):null;case un:return g.key===A?c(d,p,g,C):null;case At:return A=g._init,m(d,p,A(g._payload),C)}if(Xn(g)||On(g))return A!==null?null:h(d,p,g,C,null);Kr(d,g)}return null}function x(d,p,g,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return d=d.get(g)||null,a(p,d,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Dr:return d=d.get(C.key===null?g:C.key)||null,s(p,d,C,A);case un:return d=d.get(C.key===null?g:C.key)||null,c(p,d,C,A);case At:var L=C._init;return x(d,p,g,L(C._payload),A)}if(Xn(C)||On(C))return d=d.get(g)||null,h(p,d,C,A,null);Kr(p,C)}return null}function v(d,p,g,C){for(var A=null,L=null,b=p,I=p=0,F=null;b!==null&&I<g.length;I++){b.index>I?(F=b,b=null):F=b.sibling;var z=m(d,b,g[I],C);if(z===null){b===null&&(b=F);break}e&&b&&z.alternate===null&&t(d,b),p=l(z,p,I),L===null?A=z:L.sibling=z,L=z,b=F}if(I===g.length)return n(d,b),Y&&Ht(d,I),A;if(b===null){for(;I<g.length;I++)b=f(d,g[I],C),b!==null&&(p=l(b,p,I),L===null?A=b:L.sibling=b,L=b);return Y&&Ht(d,I),A}for(b=r(d,b);I<g.length;I++)F=x(b,d,I,g[I],C),F!==null&&(e&&F.alternate!==null&&b.delete(F.key===null?I:F.key),p=l(F,p,I),L===null?A=F:L.sibling=F,L=F);return e&&b.forEach(function(te){return t(d,te)}),Y&&Ht(d,I),A}function w(d,p,g,C){var A=On(g);if(typeof A!="function")throw Error(N(150));if(g=A.call(g),g==null)throw Error(N(151));for(var L=A=null,b=p,I=p=0,F=null,z=g.next();b!==null&&!z.done;I++,z=g.next()){b.index>I?(F=b,b=null):F=b.sibling;var te=m(d,b,z.value,C);if(te===null){b===null&&(b=F);break}e&&b&&te.alternate===null&&t(d,b),p=l(te,p,I),L===null?A=te:L.sibling=te,L=te,b=F}if(z.done)return n(d,b),Y&&Ht(d,I),A;if(b===null){for(;!z.done;I++,z=g.next())z=f(d,z.value,C),z!==null&&(p=l(z,p,I),L===null?A=z:L.sibling=z,L=z);return Y&&Ht(d,I),A}for(b=r(d,b);!z.done;I++,z=g.next())z=x(b,d,I,z.value,C),z!==null&&(e&&z.alternate!==null&&b.delete(z.key===null?I:z.key),p=l(z,p,I),L===null?A=z:L.sibling=z,L=z);return e&&b.forEach(function(We){return t(d,We)}),Y&&Ht(d,I),A}function E(d,p,g,C){if(typeof g=="object"&&g!==null&&g.type===cn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Dr:e:{for(var A=g.key,L=p;L!==null;){if(L.key===A){if(A=g.type,A===cn){if(L.tag===7){n(d,L.sibling),p=o(L,g.props.children),p.return=d,d=p;break e}}else if(L.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===At&&xs(A)===L.type){n(d,L.sibling),p=o(L,g.props),p.ref=Hn(d,L,g),p.return=d,d=p;break e}n(d,L);break}else t(d,L);L=L.sibling}g.type===cn?(p=qt(g.props.children,d.mode,C,g.key),p.return=d,d=p):(C=co(g.type,g.key,g.props,null,d.mode,C),C.ref=Hn(d,p,g),C.return=d,d=C)}return i(d);case un:e:{for(L=g.key;p!==null;){if(p.key===L)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(d,p.sibling),p=o(p,g.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else t(d,p);p=p.sibling}p=bl(g,d.mode,C),p.return=d,d=p}return i(d);case At:return L=g._init,E(d,p,L(g._payload),C)}if(Xn(g))return v(d,p,g,C);if(On(g))return w(d,p,g,C);Kr(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(d,p.sibling),p=o(p,g),p.return=d,d=p):(n(d,p),p=Ll(g,d.mode,C),p.return=d,d=p),i(d)):n(d,p)}return E}var bn=kc(!0),Sc=kc(!1),Ro=Qt(null),No=null,vn=null,ea=null;function ta(){ea=vn=No=null}function na(e){var t=Ro.current;K(Ro),e._currentValue=t}function di(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){No=e,ea=vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(ea!==e)if(e={context:e,memoizedValue:t,next:null},vn===null){if(No===null)throw Error(N(308));vn=e,No.dependencies={lanes:0,firstContext:e}}else vn=vn.next=e;return t}var Zt=null;function ra(e){Zt===null?Zt=[e]:Zt.push(e)}function Ec(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,ra(t)):(n.next=o.next,o.next=n),t.interleaved=n,yt(e,r)}function yt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,yt(e,n)}return o=r.interleaved,o===null?(t.next=t,ra(r)):(t.next=o.next,o.next=t),r.interleaved=t,yt(e,n)}function oo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}function ws(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Lo(e,t,n,r){var o=e.updateQueue;jt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var h=e.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==i&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=s))}if(l!==null){var f=o.baseState;i=0,h=c=s=null,a=l;do{var m=a.lane,x=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(m=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(x,f,m);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,m=typeof v=="function"?v.call(x,f,m):v,m==null)break e;f=q({},f,m);break e;case 2:jt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else x={eventTime:x,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=x,s=f):h=h.next=x,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);nn|=i,e.lanes=i,e.memoizedState=f}}function ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var br={},rt=Qt(br),xr=Qt(br),wr=Qt(br);function Xt(e){if(e===br)throw Error(N(174));return e}function la(e,t){switch(V(wr,t),V(xr,e),V(rt,br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hl(t,e)}K(rt),V(rt,t)}function Tn(){K(rt),K(xr),K(wr)}function Ac(e){Xt(wr.current);var t=Xt(rt.current),n=Hl(t,e.type);t!==n&&(V(xr,e),V(rt,n))}function ia(e){xr.current===e&&(K(rt),K(xr))}var Z=Qt(0);function bo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var El=[];function aa(){for(var e=0;e<El.length;e++)El[e]._workInProgressVersionPrimary=null;El.length=0}var lo=wt.ReactCurrentDispatcher,Cl=wt.ReactCurrentBatchConfig,tn=0,X=null,re=null,ae=null,To=!1,or=!1,kr=0,Qp=0;function fe(){throw Error(N(321))}function sa(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function ua(e,t,n,r,o,l){if(tn=l,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,lo.current=e===null||e.memoizedState===null?Kp:Jp,e=n(r,o),or){l=0;do{if(or=!1,kr=0,25<=l)throw Error(N(301));l+=1,ae=re=null,t.updateQueue=null,lo.current=Yp,e=n(r,o)}while(or)}if(lo.current=Io,t=re!==null&&re.next!==null,tn=0,ae=re=X=null,To=!1,t)throw Error(N(300));return e}function ca(){var e=kr!==0;return kr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?X.memoizedState=ae=e:ae=ae.next=e,ae}function Fe(){if(re===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=ae===null?X.memoizedState:ae.next;if(t!==null)ae=t,re=e;else{if(e===null)throw Error(N(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},ae===null?X.memoizedState=ae=e:ae=ae.next=e}return ae}function Sr(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=re,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var h=c.lane;if((tn&h)===h)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,i=r):s=s.next=f,X.lanes|=h,nn|=h}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,Xe(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,X.lanes|=l,nn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function jl(e){var t=Fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Xe(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function jc(){}function Rc(e,t){var n=X,r=Fe(),o=t(),l=!Xe(r.memoizedState,o);if(l&&(r.memoizedState=o,Se=!0),r=r.queue,da(bc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ae!==null&&ae.memoizedState.tag&1){if(n.flags|=2048,Er(9,Lc.bind(null,n,r,o,t),void 0,null),se===null)throw Error(N(349));tn&30||Nc(n,t,o)}return o}function Nc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Lc(e,t,n,r){t.value=n,t.getSnapshot=r,Tc(t)&&Ic(e)}function bc(e,t,n){return n(function(){Tc(t)&&Ic(e)})}function Tc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Ic(e){var t=yt(e,1);t!==null&&Ye(t,e,1,-1)}function Ss(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sr,lastRenderedState:e},t.queue=e,e=e.dispatch=Hp.bind(null,X,e),[t.memoizedState,e]}function Er(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pc(){return Fe().memoizedState}function io(e,t,n,r){var o=et();X.flags|=e,o.memoizedState=Er(1|t,n,void 0,r===void 0?null:r)}function Jo(e,t,n,r){var o=Fe();r=r===void 0?null:r;var l=void 0;if(re!==null){var i=re.memoizedState;if(l=i.destroy,r!==null&&sa(r,i.deps)){o.memoizedState=Er(t,n,l,r);return}}X.flags|=e,o.memoizedState=Er(1|t,n,l,r)}function Es(e,t){return io(8390656,8,e,t)}function da(e,t){return Jo(2048,8,e,t)}function Bc(e,t){return Jo(4,2,e,t)}function Dc(e,t){return Jo(4,4,e,t)}function zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mc(e,t,n){return n=n!=null?n.concat([e]):null,Jo(4,4,zc.bind(null,t,e),n)}function fa(){}function Uc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fc(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&sa(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Oc(e,t,n){return tn&21?(Xe(n,t)||(n=Hu(),X.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function Gp(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Cl.transition;Cl.transition={};try{e(!1),t()}finally{G=n,Cl.transition=r}}function Wc(){return Fe().memoizedState}function Vp(e,t,n){var r=Mt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qc(e))Gc(t,n);else if(n=Ec(e,t,n,r),n!==null){var o=ye();Ye(n,e,r,o),Vc(n,t,r)}}function Hp(e,t,n){var r=Mt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qc(e))Gc(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,Xe(a,i)){var s=t.interleaved;s===null?(o.next=o,ra(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ec(e,t,o,r),n!==null&&(o=ye(),Ye(n,e,r,o),Vc(n,t,r))}}function Qc(e){var t=e.alternate;return e===X||t!==null&&t===X}function Gc(e,t){or=To=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vc(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Gi(e,n)}}var Io={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Kp={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Es,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,io(4194308,4,zc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return io(4194308,4,e,t)},useInsertionEffect:function(e,t){return io(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Vp.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Ss,useDebugValue:fa,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Ss(!1),t=e[0];return e=Gp.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,o=et();if(Y){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),se===null)throw Error(N(349));tn&30||Nc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Es(bc.bind(null,r,l,e),[e]),r.flags|=2048,Er(9,Lc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=et(),t=se.identifierPrefix;if(Y){var n=pt,r=ft;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Qp++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jp={readContext:Ue,useCallback:Uc,useContext:Ue,useEffect:da,useImperativeHandle:Mc,useInsertionEffect:Bc,useLayoutEffect:Dc,useMemo:Fc,useReducer:Al,useRef:Pc,useState:function(){return Al(Sr)},useDebugValue:fa,useDeferredValue:function(e){var t=Fe();return Oc(t,re.memoizedState,e)},useTransition:function(){var e=Al(Sr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Rc,useId:Wc,unstable_isNewReconciler:!1},Yp={readContext:Ue,useCallback:Uc,useContext:Ue,useEffect:da,useImperativeHandle:Mc,useInsertionEffect:Bc,useLayoutEffect:Dc,useMemo:Fc,useReducer:jl,useRef:Pc,useState:function(){return jl(Sr)},useDebugValue:fa,useDeferredValue:function(e){var t=Fe();return re===null?t.memoizedState=e:Oc(t,re.memoizedState,e)},useTransition:function(){var e=jl(Sr)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:jc,useSyncExternalStore:Rc,useId:Wc,unstable_isNewReconciler:!1};function Ve(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function fi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yo={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),l=ht(r,o);l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(Ye(t,e,o,r),oo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ye(),o=Mt(e),l=ht(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(Ye(t,e,o,r),oo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ye(),r=Mt(e),o=ht(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(Ye(t,e,r,n),oo(t,e,r))}};function Cs(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(o,l):!0}function Hc(e,t,n){var r=!1,o=Ot,l=t.contextType;return typeof l=="object"&&l!==null?l=Ue(l):(o=Ce(t)?$t:me.current,r=t.contextTypes,l=(r=r!=null)?Nn(e,o):Ot),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function As(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Yo.enqueueReplaceState(t,t.state,null)}function pi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},oa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Ue(l):(l=Ce(t)?$t:me.current,o.context=Nn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(fi(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yo.enqueueReplaceState(o,o.state,null),Lo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function In(e,t){try{var n="",r=t;do n+=Sf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function hi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zp=typeof WeakMap=="function"?WeakMap:Map;function Kc(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bo||(Bo=!0,Ci=r),hi(e,t)},n}function Jc(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){hi(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){hi(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Zp;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=uh.bind(null,e,t,n),t.then(e,e))}function Rs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ns(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e)}var Xp=wt.ReactCurrentOwner,Se=!1;function ge(e,t,n,r){t.child=e===null?Sc(t,null,n,r):bn(t,e.child,n,r)}function Ls(e,t,n,r,o){n=n.render;var l=t.ref;return An(t,o),r=ua(e,t,n,r,l,o),n=ca(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Y&&n&&_i(t),t.flags|=1,ge(e,t,r,o),t.child)}function bs(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!wa(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Yc(e,t,l,r,o)):(e=co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:mr,n(i,r)&&e.ref===t.ref)return vt(e,t,o)}return t.flags|=1,e=Ut(l,r),e.ref=t.ref,e.return=t,t.child=e}function Yc(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(mr(l,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,vt(e,t,o)}return mi(e,t,n,r,o)}function Zc(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(wn,je),je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(wn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,V(wn,je),je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,V(wn,je),je|=r;return ge(e,t,o,n),t.child}function Xc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function mi(e,t,n,r,o){var l=Ce(n)?$t:me.current;return l=Nn(t,l),An(t,o),n=ua(e,t,n,r,l,o),r=ca(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,vt(e,t,o)):(Y&&r&&_i(t),t.flags|=1,ge(e,t,n,o),t.child)}function Ts(e,t,n,r,o){if(Ce(n)){var l=!0;Co(t)}else l=!1;if(An(t,o),t.stateNode===null)ao(e,t),Hc(t,n,r),pi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ue(c):(c=Ce(n)?$t:me.current,c=Nn(t,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&As(t,i,r,c),jt=!1;var m=t.memoizedState;i.state=m,Lo(t,r,i,o),s=t.memoizedState,a!==r||m!==s||Ee.current||jt?(typeof h=="function"&&(fi(t,n,h,r),s=t.memoizedState),(a=jt||Cs(t,n,a,r,m,s,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Cc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Ve(t.type,a),i.props=c,f=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ue(s):(s=Ce(n)?$t:me.current,s=Nn(t,s));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==s)&&As(t,i,r,s),jt=!1,m=t.memoizedState,i.state=m,Lo(t,r,i,o);var v=t.memoizedState;a!==f||m!==v||Ee.current||jt?(typeof x=="function"&&(fi(t,n,x,r),v=t.memoizedState),(c=jt||Cs(t,n,c,r,m,v,s)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return gi(e,t,n,r,l,o)}function gi(e,t,n,r,o,l){Xc(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&gs(t,n,!1),vt(e,t,l);r=t.stateNode,Xp.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=bn(t,e.child,null,l),t.child=bn(t,null,a,l)):ge(e,t,a,l),t.memoizedState=r.state,o&&gs(t,n,!0),t.child}function _c(e){var t=e.stateNode;t.pendingContext?ms(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ms(e,t.context,!1),la(e,t.containerInfo)}function Is(e,t,n,r,o){return Ln(),$i(o),t.flags|=256,ge(e,t,n,r),t.child}var yi={dehydrated:null,treeContext:null,retryLane:0};function vi(e){return{baseLanes:e,cachePool:null,transitions:null}}function qc(e,t,n){var r=t.pendingProps,o=Z.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),V(Z,o&1),e===null)return ci(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=_o(i,r,0,null),e=qt(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=vi(n),t.memoizedState=yi,e):pa(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return _p(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Ut(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=Ut(a,l):(l=qt(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?vi(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=yi,r}return l=e.child,e=l.sibling,r=Ut(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pa(e,t){return t=_o({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jr(e,t,n,r){return r!==null&&$i(r),bn(t,e.child,null,n),e=pa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _p(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Rl(Error(N(422))),Jr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=_o({mode:"visible",children:r.children},o,0,null),l=qt(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&bn(t,e.child,null,i),t.child.memoizedState=vi(i),t.memoizedState=yi,l);if(!(t.mode&1))return Jr(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(N(419)),r=Rl(l,r,void 0),Jr(e,t,i,r)}if(a=(i&e.childLanes)!==0,Se||a){if(r=se,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,yt(e,o),Ye(r,e,o,-1))}return xa(),r=Rl(Error(N(421))),Jr(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ch.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Re=Bt(o.nextSibling),Ne=t,Y=!0,Ke=null,e!==null&&(Ie[Pe++]=ft,Ie[Pe++]=pt,Ie[Pe++]=en,ft=e.id,pt=e.overflow,en=t),t=pa(t,r.children),t.flags|=4096,t)}function Ps(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),di(e.return,t,n)}function Nl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function $c(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ge(e,t,r.children,n),r=Z.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ps(e,n,t);else if(e.tag===19)Ps(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Z,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Nl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Nl(t,!0,n,null,l);break;case"together":Nl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ao(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qp(e,t,n){switch(t.tag){case 3:_c(t),Ln();break;case 5:Ac(t);break;case 1:Ce(t.type)&&Co(t);break;case 4:la(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;V(Ro,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Z,Z.current&1),t.flags|=128,null):n&t.child.childLanes?qc(e,t,n):(V(Z,Z.current&1),e=vt(e,t,n),e!==null?e.sibling:null);V(Z,Z.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $c(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),V(Z,Z.current),r)break;return null;case 22:case 23:return t.lanes=0,Zc(e,t,n)}return vt(e,t,n)}var ed,xi,td,nd;ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xi=function(){};td=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Xt(rt.current);var l=null;switch(n){case"input":o=Wl(e,o),r=Wl(e,r),l=[];break;case"select":o=q({},o,{value:void 0}),r=q({},r,{value:void 0}),l=[];break;case"textarea":o=Vl(e,o),r=Vl(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=So)}Kl(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(sr.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o!=null?o[c]:void 0,r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(sr.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&H("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};nd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Kn(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function $p(e,t,n){var r=t.pendingProps;switch(qi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(t),null;case 1:return Ce(t.type)&&Eo(),pe(t),null;case 3:return r=t.stateNode,Tn(),K(Ee),K(me),aa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(Ri(Ke),Ke=null))),xi(e,t),pe(t),null;case 5:ia(t);var o=Xt(wr.current);if(n=t.type,e!==null&&t.stateNode!=null)td(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return pe(t),null}if(e=Xt(rt.current),Hr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[vr]=l,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<qn.length;o++)H(qn[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Qa(r,l),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},H("invalid",r);break;case"textarea":Va(r,l),H("invalid",r)}Kl(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Vr(r.textContent,a,e),o=["children",""+a]):sr.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&H("scroll",r)}switch(n){case"input":zr(r),Ga(r,l,!0);break;case"textarea":zr(r),Ha(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=So)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[vr]=r,ed(e,t,!1,!1),t.stateNode=e;e:{switch(i=Jl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<qn.length;o++)H(qn[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":Qa(e,r),o=Wl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Va(e,r),o=Vl(e,r),H("invalid",e);break;default:o=r}Kl(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?Pu(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Tu(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ur(e,s):typeof s=="number"&&ur(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(sr.hasOwnProperty(l)?s!=null&&l==="onScroll"&&H("scroll",e):s!=null&&Mi(e,l,s,i))}switch(n){case"input":zr(e),Ga(e,r,!1);break;case"textarea":zr(e),Ha(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ft(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?kn(e,!!r.multiple,l,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=So)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pe(t),null;case 6:if(e&&t.stateNode!=null)nd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Xt(wr.current),Xt(rt.current),Hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:Vr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vr(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return pe(t),null;case 13:if(K(Z),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Re!==null&&t.mode&1&&!(t.flags&128))wc(),Ln(),t.flags|=98560,l=!1;else if(l=Hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[tt]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pe(t),l=!1}else Ke!==null&&(Ri(Ke),Ke=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Z.current&1?oe===0&&(oe=3):xa())),t.updateQueue!==null&&(t.flags|=4),pe(t),null);case 4:return Tn(),xi(e,t),e===null&&gr(t.stateNode.containerInfo),pe(t),null;case 10:return na(t.type._context),pe(t),null;case 17:return Ce(t.type)&&Eo(),pe(t),null;case 19:if(K(Z),l=t.memoizedState,l===null)return pe(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Kn(l,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=bo(e),i!==null){for(t.flags|=128,Kn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Z,Z.current&1|2),t.child}e=e.sibling}l.tail!==null&&ee()>Pn&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304)}else{if(!r)if(e=bo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Kn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Y)return pe(t),null}else 2*ee()-l.renderingStartTime>Pn&&n!==1073741824&&(t.flags|=128,r=!0,Kn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=ee(),t.sibling=null,n=Z.current,V(Z,r?n&1|2:n&1),t):(pe(t),null);case 22:case 23:return va(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(pe(t),t.subtreeFlags&6&&(t.flags|=8192)):pe(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function eh(e,t){switch(qi(t),t.tag){case 1:return Ce(t.type)&&Eo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Tn(),K(Ee),K(me),aa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ia(t),null;case 13:if(K(Z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Z),null;case 4:return Tn(),null;case 10:return na(t.type._context),null;case 22:case 23:return va(),null;case 24:return null;default:return null}}var Yr=!1,he=!1,th=typeof WeakSet=="function"?WeakSet:Set,B=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){$(e,t,r)}else n.current=null}function wi(e,t,n){try{n()}catch(r){$(e,t,r)}}var Bs=!1;function nh(e,t){if(ri=xo,e=ac(),Xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,h=0,f=e,m=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(a=i+o),f!==l||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(x=f.firstChild)!==null;)m=f,f=x;for(;;){if(f===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++h===r&&(s=i),(x=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(oi={focusedElem:e,selectionRange:n},xo=!1,B=t;B!==null;)if(t=B,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,B=e;else for(;B!==null;){t=B;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,d=t.stateNode,p=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ve(t.type,w),E);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(C){$(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,B=e;break}B=t.return}return v=Bs,Bs=!1,v}function lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&wi(t,n,l)}o=o.next}while(o!==r)}}function Zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ki(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[vr],delete t[ai],delete t[Up],delete t[Fp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function od(e){return e.tag===5||e.tag===3||e.tag===4}function Ds(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Si(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=So));else if(r!==4&&(e=e.child,e!==null))for(Si(e,t,n),e=e.sibling;e!==null;)Si(e,t,n),e=e.sibling}function Ei(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ei(e,t,n),e=e.sibling;e!==null;)Ei(e,t,n),e=e.sibling}var ue=null,He=!1;function Et(e,t,n){for(n=n.child;n!==null;)ld(e,t,n),n=n.sibling}function ld(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Wo,n)}catch{}switch(n.tag){case 5:he||xn(n,t);case 6:var r=ue,o=He;ue=null,Et(e,t,n),ue=r,He=o,ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(He?(e=ue,n=n.stateNode,e.nodeType===8?kl(e.parentNode,n):e.nodeType===1&&kl(e,n),pr(e)):kl(ue,n.stateNode));break;case 4:r=ue,o=He,ue=n.stateNode.containerInfo,He=!0,Et(e,t,n),ue=r,He=o;break;case 0:case 11:case 14:case 15:if(!he&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&wi(n,t,i),o=o.next}while(o!==r)}Et(e,t,n);break;case 1:if(!he&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){$(n,t,a)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(he=(r=he)||n.memoizedState!==null,Et(e,t,n),he=r):Et(e,t,n);break;default:Et(e,t,n)}}function zs(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new th),t.forEach(function(r){var o=dh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,He=!1;break e;case 3:ue=a.stateNode.containerInfo,He=!0;break e;case 4:ue=a.stateNode.containerInfo,He=!0;break e}a=a.return}if(ue===null)throw Error(N(160));ld(l,i,o),ue=null,He=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){$(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)id(t,e),t=t.sibling}function id(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),qe(e),r&4){try{lr(3,e,e.return),Zo(3,e)}catch(w){$(e,e.return,w)}try{lr(5,e,e.return)}catch(w){$(e,e.return,w)}}break;case 1:Qe(t,e),qe(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Qe(t,e),qe(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{ur(o,"")}catch(w){$(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&Nu(o,l),Jl(a,i);var c=Jl(a,l);for(i=0;i<s.length;i+=2){var h=s[i],f=s[i+1];h==="style"?Pu(o,f):h==="dangerouslySetInnerHTML"?Tu(o,f):h==="children"?ur(o,f):Mi(o,h,f,c)}switch(a){case"input":Ql(o,l);break;case"textarea":Lu(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var x=l.value;x!=null?kn(o,!!l.multiple,x,!1):m!==!!l.multiple&&(l.defaultValue!=null?kn(o,!!l.multiple,l.defaultValue,!0):kn(o,!!l.multiple,l.multiple?[]:"",!1))}o[vr]=l}catch(w){$(e,e.return,w)}}break;case 6:if(Qe(t,e),qe(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){$(e,e.return,w)}}break;case 3:if(Qe(t,e),qe(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(w){$(e,e.return,w)}break;case 4:Qe(t,e),qe(e);break;case 13:Qe(t,e),qe(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(ga=ee())),r&4&&zs(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(he=(c=he)||h,Qe(t,e),he=c):Qe(t,e),qe(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(B=e,h=e.child;h!==null;){for(f=B=h;B!==null;){switch(m=B,x=m.child,m.tag){case 0:case 11:case 14:case 15:lr(4,m,m.return);break;case 1:xn(m,m.return);var v=m.stateNode;if(typeof v.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){$(r,n,w)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){Us(f);continue}}x!==null?(x.return=m,B=x):Us(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{o=f.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Iu("display",i))}catch(w){$(e,e.return,w)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){$(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qe(t,e),qe(e),r&4&&zs(e);break;case 21:break;default:Qe(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(od(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(ur(o,""),r.flags&=-33);var l=Ds(e);Ei(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Ds(e);Si(e,a,i);break;default:throw Error(N(161))}}catch(s){$(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rh(e,t,n){B=e,ad(e)}function ad(e,t,n){for(var r=(e.mode&1)!==0;B!==null;){var o=B,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Yr;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||he;a=Yr;var c=he;if(Yr=i,(he=s)&&!c)for(B=o;B!==null;)i=B,s=i.child,i.tag===22&&i.memoizedState!==null?Fs(o):s!==null?(s.return=i,B=s):Fs(o);for(;l!==null;)B=l,ad(l),l=l.sibling;B=o,Yr=a,he=c}Ms(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,B=l):Ms(e)}}function Ms(e){for(;B!==null;){var t=B;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:he||Zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!he)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Ve(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&ks(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ks(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&pr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}he||t.flags&512&&ki(t)}catch(m){$(t,t.return,m)}}if(t===e){B=null;break}if(n=t.sibling,n!==null){n.return=t.return,B=n;break}B=t.return}}function Us(e){for(;B!==null;){var t=B;if(t===e){B=null;break}var n=t.sibling;if(n!==null){n.return=t.return,B=n;break}B=t.return}}function Fs(e){for(;B!==null;){var t=B;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zo(4,t)}catch(s){$(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){$(t,o,s)}}var l=t.return;try{ki(t)}catch(s){$(t,l,s)}break;case 5:var i=t.return;try{ki(t)}catch(s){$(t,i,s)}}}catch(s){$(t,t.return,s)}if(t===e){B=null;break}var a=t.sibling;if(a!==null){a.return=t.return,B=a;break}B=t.return}}var oh=Math.ceil,Po=wt.ReactCurrentDispatcher,ha=wt.ReactCurrentOwner,Me=wt.ReactCurrentBatchConfig,Q=0,se=null,ne=null,ce=0,je=0,wn=Qt(0),oe=0,Cr=null,nn=0,Xo=0,ma=0,ir=null,ke=null,ga=0,Pn=1/0,ct=null,Bo=!1,Ci=null,zt=null,Zr=!1,bt=null,Do=0,ar=0,Ai=null,so=-1,uo=0;function ye(){return Q&6?ee():so!==-1?so:so=ee()}function Mt(e){return e.mode&1?Q&2&&ce!==0?ce&-ce:Wp.transition!==null?(uo===0&&(uo=Hu()),uo):(e=G,e!==0||(e=window.event,e=e===void 0?16:qu(e.type)),e):1}function Ye(e,t,n,r){if(50<ar)throw ar=0,Ai=null,Error(N(185));Rr(e,n,r),(!(Q&2)||e!==se)&&(e===se&&(!(Q&2)&&(Xo|=n),oe===4&&Nt(e,ce)),Ae(e,r),n===1&&Q===0&&!(t.mode&1)&&(Pn=ee()+500,Ko&&Gt()))}function Ae(e,t){var n=e.callbackNode;Wf(e,t);var r=vo(e,e===se?ce:0);if(r===0)n!==null&&Ya(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ya(n),t===1)e.tag===0?Op(Os.bind(null,e)):yc(Os.bind(null,e)),zp(function(){!(Q&6)&&Gt()}),n=null;else{switch(Ku(r)){case 1:n=Qi;break;case 4:n=Gu;break;case 16:n=yo;break;case 536870912:n=Vu;break;default:n=yo}n=md(n,sd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sd(e,t){if(so=-1,uo=0,Q&6)throw Error(N(327));var n=e.callbackNode;if(jn()&&e.callbackNode!==n)return null;var r=vo(e,e===se?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zo(e,r);else{t=r;var o=Q;Q|=2;var l=cd();(se!==e||ce!==t)&&(ct=null,Pn=ee()+500,_t(e,t));do try{ah();break}catch(a){ud(e,a)}while(!0);ta(),Po.current=l,Q=o,ne!==null?t=0:(se=null,ce=0,t=oe)}if(t!==0){if(t===2&&(o=ql(e),o!==0&&(r=o,t=ji(e,o))),t===1)throw n=Cr,_t(e,0),Nt(e,r),Ae(e,ee()),n;if(t===6)Nt(e,r);else{if(o=e.current.alternate,!(r&30)&&!lh(o)&&(t=zo(e,r),t===2&&(l=ql(e),l!==0&&(r=l,t=ji(e,l))),t===1))throw n=Cr,_t(e,0),Nt(e,r),Ae(e,ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Kt(e,ke,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=ga+500-ee(),10<t)){if(vo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ye(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ii(Kt.bind(null,e,ke,ct),t);break}Kt(e,ke,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Je(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*oh(r/1960))-r,10<r){e.timeoutHandle=ii(Kt.bind(null,e,ke,ct),r);break}Kt(e,ke,ct);break;case 5:Kt(e,ke,ct);break;default:throw Error(N(329))}}}return Ae(e,ee()),e.callbackNode===n?sd.bind(null,e):null}function ji(e,t){var n=ir;return e.current.memoizedState.isDehydrated&&(_t(e,t).flags|=256),e=zo(e,t),e!==2&&(t=ke,ke=n,t!==null&&Ri(t)),e}function Ri(e){ke===null?ke=e:ke.push.apply(ke,e)}function lh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Xe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~ma,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Je(t),r=1<<n;e[n]=-1,t&=~r}}function Os(e){if(Q&6)throw Error(N(327));jn();var t=vo(e,0);if(!(t&1))return Ae(e,ee()),null;var n=zo(e,t);if(e.tag!==0&&n===2){var r=ql(e);r!==0&&(t=r,n=ji(e,r))}if(n===1)throw n=Cr,_t(e,0),Nt(e,t),Ae(e,ee()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Kt(e,ke,ct),Ae(e,ee()),null}function ya(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Pn=ee()+500,Ko&&Gt())}}function rn(e){bt!==null&&bt.tag===0&&!(Q&6)&&jn();var t=Q;Q|=1;var n=Me.transition,r=G;try{if(Me.transition=null,G=1,e)return e()}finally{G=r,Me.transition=n,Q=t,!(Q&6)&&Gt()}}function va(){je=wn.current,K(wn)}function _t(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Dp(n)),ne!==null)for(n=ne.return;n!==null;){var r=n;switch(qi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Eo();break;case 3:Tn(),K(Ee),K(me),aa();break;case 5:ia(r);break;case 4:Tn();break;case 13:K(Z);break;case 19:K(Z);break;case 10:na(r.type._context);break;case 22:case 23:va()}n=n.return}if(se=e,ne=e=Ut(e.current,null),ce=je=t,oe=0,Cr=null,ma=Xo=nn=0,ke=ir=null,Zt!==null){for(t=0;t<Zt.length;t++)if(n=Zt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Zt=null}return e}function ud(e,t){do{var n=ne;try{if(ta(),lo.current=Io,To){for(var r=X.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}To=!1}if(tn=0,ae=re=X=null,or=!1,kr=0,ha.current=null,n===null||n.return===null){oe=1,Cr=t,ne=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=ce,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Rs(i);if(x!==null){x.flags&=-257,Ns(x,i,a,l,t),x.mode&1&&js(l,c,t),t=x,s=c;var v=t.updateQueue;if(v===null){var w=new Set;w.add(s),t.updateQueue=w}else v.add(s);break e}else{if(!(t&1)){js(l,c,t),xa();break e}s=Error(N(426))}}else if(Y&&a.mode&1){var E=Rs(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ns(E,i,a,l,t),$i(In(s,a));break e}}l=s=In(s,a),oe!==4&&(oe=2),ir===null?ir=[l]:ir.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=Kc(l,s,t);ws(l,d);break e;case 1:a=s;var p=l.type,g=l.stateNode;if(!(l.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(zt===null||!zt.has(g)))){l.flags|=65536,t&=-t,l.lanes|=t;var C=Jc(l,a,t);ws(l,C);break e}}l=l.return}while(l!==null)}fd(n)}catch(A){t=A,ne===n&&n!==null&&(ne=n=n.return);continue}break}while(!0)}function cd(){var e=Po.current;return Po.current=Io,e===null?Io:e}function xa(){(oe===0||oe===3||oe===2)&&(oe=4),se===null||!(nn&268435455)&&!(Xo&268435455)||Nt(se,ce)}function zo(e,t){var n=Q;Q|=2;var r=cd();(se!==e||ce!==t)&&(ct=null,_t(e,t));do try{ih();break}catch(o){ud(e,o)}while(!0);if(ta(),Q=n,Po.current=r,ne!==null)throw Error(N(261));return se=null,ce=0,oe}function ih(){for(;ne!==null;)dd(ne)}function ah(){for(;ne!==null&&!If();)dd(ne)}function dd(e){var t=hd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?fd(e):ne=t,ha.current=null}function fd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=eh(n,t),n!==null){n.flags&=32767,ne=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(n=$p(n,t,je),n!==null){ne=n;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Kt(e,t,n){var r=G,o=Me.transition;try{Me.transition=null,G=1,sh(e,t,n,r)}finally{Me.transition=o,G=r}return null}function sh(e,t,n,r){do jn();while(bt!==null);if(Q&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Qf(e,l),e===se&&(ne=se=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Zr||(Zr=!0,md(yo,function(){return jn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Me.transition,Me.transition=null;var i=G;G=1;var a=Q;Q|=4,ha.current=null,nh(e,n),id(n,e),Np(oi),xo=!!ri,oi=ri=null,e.current=n,rh(n),Pf(),Q=a,G=i,Me.transition=l}else e.current=n;if(Zr&&(Zr=!1,bt=e,Do=o),l=e.pendingLanes,l===0&&(zt=null),zf(n.stateNode),Ae(e,ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Bo)throw Bo=!1,e=Ci,Ci=null,e;return Do&1&&e.tag!==0&&jn(),l=e.pendingLanes,l&1?e===Ai?ar++:(ar=0,Ai=e):ar=0,Gt(),null}function jn(){if(bt!==null){var e=Ku(Do),t=Me.transition,n=G;try{if(Me.transition=null,G=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,Do=0,Q&6)throw Error(N(331));var o=Q;for(Q|=4,B=e.current;B!==null;){var l=B,i=l.child;if(B.flags&16){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(B=c;B!==null;){var h=B;switch(h.tag){case 0:case 11:case 15:lr(8,h,l)}var f=h.child;if(f!==null)f.return=h,B=f;else for(;B!==null;){h=B;var m=h.sibling,x=h.return;if(rd(h),h===c){B=null;break}if(m!==null){m.return=x,B=m;break}B=x}}}var v=l.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}B=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,B=i;else e:for(;B!==null;){if(l=B,l.flags&2048)switch(l.tag){case 0:case 11:case 15:lr(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,B=d;break e}B=l.return}}var p=e.current;for(B=p;B!==null;){i=B;var g=i.child;if(i.subtreeFlags&2064&&g!==null)g.return=i,B=g;else e:for(i=p;B!==null;){if(a=B,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zo(9,a)}}catch(A){$(a,a.return,A)}if(a===i){B=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,B=C;break e}B=a.return}}if(Q=o,Gt(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Wo,e)}catch{}r=!0}return r}finally{G=n,Me.transition=t}}return!1}function Ws(e,t,n){t=In(n,t),t=Kc(e,t,1),e=Dt(e,t,1),t=ye(),e!==null&&(Rr(e,1,t),Ae(e,t))}function $(e,t,n){if(e.tag===3)Ws(e,e,n);else for(;t!==null;){if(t.tag===3){Ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=In(n,e),e=Jc(t,e,1),t=Dt(t,e,1),e=ye(),t!==null&&(Rr(t,1,e),Ae(t,e));break}}t=t.return}}function uh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ce&n)===n&&(oe===4||oe===3&&(ce&130023424)===ce&&500>ee()-ga?_t(e,0):ma|=n),Ae(e,t)}function pd(e,t){t===0&&(e.mode&1?(t=Fr,Fr<<=1,!(Fr&130023424)&&(Fr=4194304)):t=1);var n=ye();e=yt(e,t),e!==null&&(Rr(e,t,n),Ae(e,n))}function ch(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),pd(e,n)}function dh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),pd(e,n)}var hd;hd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,qp(e,t,n);Se=!!(e.flags&131072)}else Se=!1,Y&&t.flags&1048576&&vc(t,jo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ao(e,t),e=t.pendingProps;var o=Nn(t,me.current);An(t,n),o=ua(null,t,r,e,o,n);var l=ca();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,Co(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,oa(t),o.updater=Yo,t.stateNode=o,o._reactInternals=t,pi(t,r,e,n),t=gi(null,t,r,!0,l,n)):(t.tag=0,Y&&l&&_i(t),ge(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ao(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=ph(r),e=Ve(r,e),o){case 0:t=mi(null,t,r,e,n);break e;case 1:t=Ts(null,t,r,e,n);break e;case 11:t=Ls(null,t,r,e,n);break e;case 14:t=bs(null,t,r,Ve(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),mi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),Ts(e,t,r,o,n);case 3:e:{if(_c(t),e===null)throw Error(N(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Cc(e,t),Lo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=In(Error(N(423)),t),t=Is(e,t,r,n,o);break e}else if(r!==o){o=In(Error(N(424)),t),t=Is(e,t,r,n,o);break e}else for(Re=Bt(t.stateNode.containerInfo.firstChild),Ne=t,Y=!0,Ke=null,n=Sc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ln(),r===o){t=vt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Ac(t),e===null&&ci(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,li(r,o)?i=null:l!==null&&li(r,l)&&(t.flags|=32),Xc(e,t),ge(e,t,i,n),t.child;case 6:return e===null&&ci(t),null;case 13:return qc(e,t,n);case 4:return la(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bn(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),Ls(e,t,r,o,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,V(Ro,r._currentValue),r._currentValue=i,l!==null)if(Xe(l.value,i)){if(l.children===o.children&&!Ee.current){t=vt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=ht(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?s.next=s:(s.next=h.next,h.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),di(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(N(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),di(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ge(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,An(t,n),o=Ue(o),r=r(o),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,o=Ve(r,t.pendingProps),o=Ve(r.type,o),bs(e,t,r,o,n);case 15:return Yc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Ve(r,o),ao(e,t),t.tag=1,Ce(r)?(e=!0,Co(t)):e=!1,An(t,n),Hc(t,r,o),pi(t,r,o,n),gi(null,t,r,!0,e,n);case 19:return $c(e,t,n);case 22:return Zc(e,t,n)}throw Error(N(156,t.tag))};function md(e,t){return Qu(e,t)}function fh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,n,r){return new fh(e,t,n,r)}function wa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ph(e){if(typeof e=="function")return wa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Fi)return 11;if(e===Oi)return 14}return 2}function Ut(e,t){var n=e.alternate;return n===null?(n=ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")wa(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case cn:return qt(n.children,o,l,t);case Ui:i=8,o|=8;break;case Ml:return e=ze(12,n,t,o|2),e.elementType=Ml,e.lanes=l,e;case Ul:return e=ze(13,n,t,o),e.elementType=Ul,e.lanes=l,e;case Fl:return e=ze(19,n,t,o),e.elementType=Fl,e.lanes=l,e;case Au:return _o(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eu:i=10;break e;case Cu:i=9;break e;case Fi:i=11;break e;case Oi:i=14;break e;case At:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=ze(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function qt(e,t,n,r){return e=ze(7,e,r,t),e.lanes=n,e}function _o(e,t,n,r){return e=ze(22,e,r,t),e.elementType=Au,e.lanes=n,e.stateNode={isHidden:!1},e}function Ll(e,t,n){return e=ze(6,e,null,t),e.lanes=n,e}function bl(e,t,n){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ka(e,t,n,r,o,l,i,a,s){return e=new hh(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=ze(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},oa(l),e}function mh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function gd(e){if(!e)return Ot;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Ce(n))return gc(e,n,t)}return t}function yd(e,t,n,r,o,l,i,a,s){return e=ka(n,r,!0,e,o,l,i,a,s),e.context=gd(null),n=e.current,r=ye(),o=Mt(n),l=ht(r,o),l.callback=t??null,Dt(n,l,o),e.current.lanes=o,Rr(e,o,r),Ae(e,r),e}function qo(e,t,n,r){var o=t.current,l=ye(),i=Mt(o);return n=gd(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,i),e!==null&&(Ye(e,o,i,l),oo(e,o,i)),i}function Mo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qs(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sa(e,t){Qs(e,t),(e=e.alternate)&&Qs(e,t)}function gh(){return null}var vd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}$o.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));qo(e,t,null,null)};$o.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){qo(null,e,null,null)}),t[gt]=null}};function $o(e){this._internalRoot=e}$o.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zu();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&_u(e)}};function Ca(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function el(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gs(){}function yh(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=Mo(i);l.call(c)}}var i=yd(t,r,e,0,null,!1,!1,"",Gs);return e._reactRootContainer=i,e[gt]=i.current,gr(e.nodeType===8?e.parentNode:e),rn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=Mo(s);a.call(c)}}var s=ka(e,0,!1,null,null,!1,!1,"",Gs);return e._reactRootContainer=s,e[gt]=s.current,gr(e.nodeType===8?e.parentNode:e),rn(function(){qo(t,s,n,r)}),s}function tl(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=Mo(i);a.call(s)}}qo(t,i,e,o)}else i=yh(n,t,e,o,r);return Mo(i)}Ju=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_n(t.pendingLanes);n!==0&&(Gi(t,n|1),Ae(t,ee()),!(Q&6)&&(Pn=ee()+500,Gt()))}break;case 13:rn(function(){var r=yt(e,1);if(r!==null){var o=ye();Ye(r,e,1,o)}}),Sa(e,1)}};Vi=function(e){if(e.tag===13){var t=yt(e,134217728);if(t!==null){var n=ye();Ye(t,e,134217728,n)}Sa(e,134217728)}};Yu=function(e){if(e.tag===13){var t=Mt(e),n=yt(e,t);if(n!==null){var r=ye();Ye(n,e,t,r)}Sa(e,t)}};Zu=function(){return G};Xu=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Zl=function(e,t,n){switch(t){case"input":if(Ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ho(r);if(!o)throw Error(N(90));Ru(r),Ql(r,o)}}}break;case"textarea":Lu(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};zu=ya;Mu=rn;var vh={usingClientEntryPoint:!1,Events:[Lr,hn,Ho,Bu,Du,ya]},Jn={findFiberByHostInstance:Yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xh={bundleType:Jn.bundleType,version:Jn.version,rendererPackageName:Jn.rendererPackageName,rendererConfig:Jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ou(e),e===null?null:e.stateNode},findFiberByHostInstance:Jn.findFiberByHostInstance||gh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xr.isDisabled&&Xr.supportsFiber)try{Wo=Xr.inject(xh),nt=Xr}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vh;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ca(t))throw Error(N(200));return mh(e,t,null,n)};be.createRoot=function(e,t){if(!Ca(e))throw Error(N(299));var n=!1,r="",o=vd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ka(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,gr(e.nodeType===8?e.parentNode:e),new Ea(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Ou(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return rn(e)};be.hydrate=function(e,t,n){if(!el(t))throw Error(N(200));return tl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ca(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=vd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=yd(t,null,e,1,n??null,o,!1,l,i),e[gt]=t.current,gr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new $o(t)};be.render=function(e,t,n){if(!el(t))throw Error(N(200));return tl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!el(e))throw Error(N(40));return e._reactRootContainer?(rn(function(){tl(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};be.unstable_batchedUpdates=ya;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!el(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return tl(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),xu.exports=be;var wh=xu.exports,Vs=wh;Dl.createRoot=Vs.createRoot,Dl.hydrateRoot=Vs.hydrateRoot;/**
 * react-router v7.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Hs="popstate";function Ks(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function kh(e={}){function t(r,o){var c;let l=(c=o.state)==null?void 0:c.masked,{pathname:i,search:a,hash:s}=l||r.location;return Ni("",{pathname:i,search:a,hash:s},o.state&&o.state.usr||null,o.state&&o.state.key||"default",l?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function n(r,o){return typeof o=="string"?o:Ar(o)}return Eh(t,n,null,e)}function _(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ot(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Sh(){return Math.random().toString(36).substring(2,10)}function Js(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Ni(e,t,n=null,r,o){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Mn(t):t,state:n,key:t&&t.key||r||Sh(),unstable_mask:o}}function Ar({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function Mn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function Eh(e,t,n,r={}){let{window:o=document.defaultView,v5Compat:l=!1}=r,i=o.history,a="POP",s=null,c=h();c==null&&(c=0,i.replaceState({...i.state,idx:c},""));function h(){return(i.state||{idx:null}).idx}function f(){a="POP";let E=h(),d=E==null?null:E-c;c=E,s&&s({action:a,location:w.location,delta:d})}function m(E,d){a="PUSH";let p=Ks(E)?E:Ni(w.location,E,d);c=h()+1;let g=Js(p,c),C=w.createHref(p.unstable_mask||p);try{i.pushState(g,"",C)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;o.location.assign(C)}l&&s&&s({action:a,location:w.location,delta:1})}function x(E,d){a="REPLACE";let p=Ks(E)?E:Ni(w.location,E,d);c=h();let g=Js(p,c),C=w.createHref(p.unstable_mask||p);i.replaceState(g,"",C),l&&s&&s({action:a,location:w.location,delta:0})}function v(E){return Ch(E)}let w={get action(){return a},get location(){return e(o,i)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Hs,f),s=E,()=>{o.removeEventListener(Hs,f),s=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let d=v(E);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:m,replace:x,go(E){return i.go(E)}};return w}function Ch(e,t=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),_(n,"No window.location.(origin|href) available to create URL");let r=typeof e=="string"?e:Ar(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function wd(e,t,n="/"){return Ah(e,t,n,!1)}function Ah(e,t,n,r){let o=typeof t=="string"?Mn(t):t,l=xt(o.pathname||"/",n);if(l==null)return null;let i=kd(e);jh(i);let a=null;for(let s=0;a==null&&s<i.length;++s){let c=Mh(l);a=Dh(i[s],c,r)}return a}function kd(e,t=[],n=[],r="",o=!1){let l=(i,a,s=o,c)=>{let h={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};if(h.relativePath.startsWith("/")){if(!h.relativePath.startsWith(r)&&s)return;_(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length)}let f=Ze([r,h.relativePath]),m=n.concat(h);i.children&&i.children.length>0&&(_(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),kd(i.children,t,m,f,s)),!(i.path==null&&!i.index)&&t.push({path:f,score:Ph(f,i.index),routesMeta:m})};return e.forEach((i,a)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))l(i,a);else for(let c of Sd(i.path))l(i,a,!0,c)}),t}function Sd(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return o?[l,""]:[l];let i=Sd(r.join("/")),a=[];return a.push(...i.map(s=>s===""?l:[l,s].join("/"))),o&&a.push(...i),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function jh(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bh(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var Rh=/^:[\w-]+$/,Nh=3,Lh=2,bh=1,Th=10,Ih=-2,Ys=e=>e==="*";function Ph(e,t){let n=e.split("/"),r=n.length;return n.some(Ys)&&(r+=Ih),t&&(r+=Lh),n.filter(o=>!Ys(o)).reduce((o,l)=>o+(Rh.test(l)?Nh:l===""?bh:Th),r)}function Bh(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Dh(e,t,n=!1){let{routesMeta:r}=e,o={},l="/",i=[];for(let a=0;a<r.length;++a){let s=r[a],c=a===r.length-1,h=l==="/"?t:t.slice(l.length)||"/",f=Uo({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},h),m=s.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=Uo({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},h)),!f)return null;Object.assign(o,f.params),i.push({params:o,pathname:Ze([l,f.pathname]),pathnameBase:Wh(Ze([l,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(l=Ze([l,f.pathnameBase]))}return i}function Uo(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zh(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let l=o[0],i=l.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((c,{paramName:h,isOptional:f},m)=>{if(h==="*"){let v=a[m]||"";i=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const x=a[m];return f&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function zh(e,t=!1,n=!0){ot(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,a,s,c,h)=>{if(r.push({paramName:a,isOptional:s!=null}),s){let f=h.charAt(c+i.length);return f&&f!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Mh(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ot(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function xt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}var Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Fh(e,t="/"){let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Mn(e):e,l;return n?(n=Cd(n),n.startsWith("/")?l=Zs(n.substring(1),"/"):l=Zs(n,t)):l=t,{pathname:l,search:Qh(r),hash:Gh(o)}}function Zs(e,t){let n=Fo(t).split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Tl(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Oh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ed(e){let t=Oh(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Aa(e,t,n,r=!1){let o;typeof e=="string"?o=Mn(e):(o={...e},_(!o.pathname||!o.pathname.includes("?"),Tl("?","pathname","search",o)),_(!o.pathname||!o.pathname.includes("#"),Tl("#","pathname","hash",o)),_(!o.search||!o.search.includes("#"),Tl("#","search","hash",o)));let l=e===""||o.pathname==="",i=l?"/":o.pathname,a;if(i==null)a=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;o.pathname=m.join("/")}a=f>=0?t[f]:"/"}let s=Fh(o,a),c=i&&i!=="/"&&i.endsWith("/"),h=(l||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||h)&&(s.pathname+="/"),s}var Cd=e=>e.replace(/\/\/+/g,"/"),Ze=e=>Cd(e.join("/")),Fo=e=>e.replace(/\/+$/,""),Wh=e=>Fo(e).replace(/^\/*/,"/"),Qh=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Vh=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Hh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function Kh(e){let t=e.map(n=>n.route.path).filter(Boolean);return Ze(t)||"/"}var Ad=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function jd(e,t){let n=e;if(typeof n!="string"||!Uh.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(Ad)try{let l=new URL(window.location.href),i=n.startsWith("//")?new URL(l.protocol+n):new URL(n),a=xt(i.pathname,t);i.origin===l.origin&&a!=null?n=a+i.search+i.hash:o=!0}catch{ot(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Rd=["POST","PUT","PATCH","DELETE"];new Set(Rd);var Jh=["GET",...Rd];new Set(Jh);var Un=y.createContext(null);Un.displayName="DataRouter";var nl=y.createContext(null);nl.displayName="DataRouterState";var Nd=y.createContext(!1);function Yh(){return y.useContext(Nd)}var Ld=y.createContext({isTransitioning:!1});Ld.displayName="ViewTransition";var Zh=y.createContext(new Map);Zh.displayName="Fetchers";var Xh=y.createContext(null);Xh.displayName="Await";var Oe=y.createContext(null);Oe.displayName="Navigation";var Tr=y.createContext(null);Tr.displayName="Location";var kt=y.createContext({outlet:null,matches:[],isDataRoute:!1});kt.displayName="Route";var ja=y.createContext(null);ja.displayName="RouteError";var bd="REACT_ROUTER_ERROR",_h="REDIRECT",qh="ROUTE_ERROR_RESPONSE";function $h(e){if(e.startsWith(`${bd}:${_h}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function em(e){if(e.startsWith(`${bd}:${qh}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new Vh(t.status,t.statusText,t.data)}catch{}}function tm(e,{relative:t}={}){_(Ir(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=y.useContext(Oe),{hash:o,pathname:l,search:i}=Pr(e,{relative:t}),a=l;return n!=="/"&&(a=l==="/"?n:Ze([n,l])),r.createHref({pathname:a,search:i,hash:o})}function Ir(){return y.useContext(Tr)!=null}function _e(){return _(Ir(),"useLocation() may be used only in the context of a <Router> component."),y.useContext(Tr).location}var Td="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Id(e){y.useContext(Oe).static||y.useLayoutEffect(e)}function rl(){let{isDataRoute:e}=y.useContext(kt);return e?hm():nm()}function nm(){_(Ir(),"useNavigate() may be used only in the context of a <Router> component.");let e=y.useContext(Un),{basename:t,navigator:n}=y.useContext(Oe),{matches:r}=y.useContext(kt),{pathname:o}=_e(),l=JSON.stringify(Ed(r)),i=y.useRef(!1);return Id(()=>{i.current=!0}),y.useCallback((s,c={})=>{if(ot(i.current,Td),!i.current)return;if(typeof s=="number"){n.go(s);return}let h=Aa(s,JSON.parse(l),o,c.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ze([t,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[t,n,l,o,e])}y.createContext(null);function Pr(e,{relative:t}={}){let{matches:n}=y.useContext(kt),{pathname:r}=_e(),o=JSON.stringify(Ed(n));return y.useMemo(()=>Aa(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function rm(e,t){return Pd(e,t)}function Pd(e,t,n){var E;_(Ir(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=y.useContext(Oe),{matches:o}=y.useContext(kt),l=o[o.length-1],i=l?l.params:{},a=l?l.pathname:"/",s=l?l.pathnameBase:"/",c=l&&l.route;{let d=c&&c.path||"";Dd(a,!c||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${a}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let h=_e(),f;if(t){let d=typeof t=="string"?Mn(t):t;_(s==="/"||((E=d.pathname)==null?void 0:E.startsWith(s)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${s}" but pathname "${d.pathname}" was given in the \`location\` prop.`),f=d}else f=h;let m=f.pathname||"/",x=m;if(s!=="/"){let d=s.replace(/^\//,"").split("/");x="/"+m.replace(/^\//,"").split("/").slice(d.length).join("/")}let v=wd(e,{pathname:x});ot(c||v!=null,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),ot(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=sm(v&&v.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Ze([s,r.encodeLocation?r.encodeLocation(d.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?s:Ze([s,r.encodeLocation?r.encodeLocation(d.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),o,n);return t&&w?y.createElement(Tr.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...f},navigationType:"POP"}},w):w}function om(){let e=pm(),t=Hh(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},l={padding:"2px 4px",backgroundColor:r},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=y.createElement(y.Fragment,null,y.createElement("p",null,"💿 Hey developer 👋"),y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",y.createElement("code",{style:l},"ErrorBoundary")," or"," ",y.createElement("code",{style:l},"errorElement")," prop on your route.")),y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:o},n):null,i)}var lm=y.createElement(om,null),Bd=class extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const n=em(e.digest);n&&(e=n)}let t=e!==void 0?y.createElement(kt.Provider,{value:this.props.routeContext},y.createElement(ja.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?y.createElement(im,{error:e},t):t}};Bd.contextType=Nd;var Il=new WeakMap;function im({children:e,error:t}){let{basename:n}=y.useContext(Oe);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let r=$h(t.digest);if(r){let o=Il.get(t);if(o)throw o;let l=jd(r.location,n);if(Ad&&!Il.get(t))if(l.isExternal||r.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const i=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:r.replace}));throw Il.set(t,i),i}return y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return e}function am({routeContext:e,match:t,children:n}){let r=y.useContext(Un);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),y.createElement(kt.Provider,{value:e},n)}function sm(e,t=[],n){let r=n==null?void 0:n.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,l=r==null?void 0:r.errors;if(l!=null){let h=o.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);_(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,h+1))}let i=!1,a=-1;if(n&&r){i=r.renderFallback;for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(a=h),f.route.id){let{loaderData:m,errors:x}=r,v=f.route.loader&&!m.hasOwnProperty(f.route.id)&&(!x||x[f.route.id]===void 0);if(f.route.lazy||v){n.isStatic&&(i=!0),a>=0?o=o.slice(0,a+1):o=[o[0]];break}}}}let s=n==null?void 0:n.onError,c=r&&s?(h,f)=>{var m,x;s(h,{location:r.location,params:((x=(m=r.matches)==null?void 0:m[0])==null?void 0:x.params)??{},unstable_pattern:Kh(r.matches),errorInfo:f})}:void 0;return o.reduceRight((h,f,m)=>{let x,v=!1,w=null,E=null;r&&(x=l&&f.route.id?l[f.route.id]:void 0,w=f.route.errorElement||lm,i&&(a<0&&m===0?(Dd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):a===m&&(v=!0,E=f.route.hydrateFallbackElement||null)));let d=t.concat(o.slice(0,m+1)),p=()=>{let g;return x?g=w:v?g=E:f.route.Component?g=y.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=h,y.createElement(am,{match:f,routeContext:{outlet:h,matches:d,isDataRoute:r!=null},children:g})};return r&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?y.createElement(Bd,{location:r.location,revalidation:r.revalidation,component:w,error:x,children:p(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:c}):p()},null)}function Ra(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function um(e){let t=y.useContext(Un);return _(t,Ra(e)),t}function cm(e){let t=y.useContext(nl);return _(t,Ra(e)),t}function dm(e){let t=y.useContext(kt);return _(t,Ra(e)),t}function Na(e){let t=dm(e),n=t.matches[t.matches.length-1];return _(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function fm(){return Na("useRouteId")}function pm(){var r;let e=y.useContext(ja),t=cm("useRouteError"),n=Na("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function hm(){let{router:e}=um("useNavigate"),t=Na("useNavigate"),n=y.useRef(!1);return Id(()=>{n.current=!0}),y.useCallback(async(o,l={})=>{ot(n.current,Td),n.current&&(typeof o=="number"?await e.navigate(o):await e.navigate(o,{fromRouteId:t,...l}))},[e,t])}var Xs={};function Dd(e,t,n){!t&&!Xs[e]&&(Xs[e]=!0,ot(!1,n))}y.memo(mm);function mm({routes:e,future:t,state:n,isStatic:r,onError:o}){return Pd(e,void 0,{state:n,isStatic:r,onError:o})}function $e(e){_(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function gm({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:o,static:l=!1,unstable_useTransitions:i}){_(!Ir(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let a=e.replace(/^\/*/,"/"),s=y.useMemo(()=>({basename:a,navigator:o,static:l,unstable_useTransitions:i,future:{}}),[a,o,l,i]);typeof n=="string"&&(n=Mn(n));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:x="default",unstable_mask:v}=n,w=y.useMemo(()=>{let E=xt(c,a);return E==null?null:{location:{pathname:E,search:h,hash:f,state:m,key:x,unstable_mask:v},navigationType:r}},[a,c,h,f,m,x,r,v]);return ot(w!=null,`<Router basename="${a}"> is not able to match the URL "${c}${h}${f}" because it does not start with the basename, so the <Router> won't render anything.`),w==null?null:y.createElement(Oe.Provider,{value:s},y.createElement(Tr.Provider,{children:t,value:w}))}function ym({children:e,location:t}){return rm(Li(e),t)}function Li(e,t=[]){let n=[];return y.Children.forEach(e,(r,o)=>{if(!y.isValidElement(r))return;let l=[...t,o];if(r.type===y.Fragment){n.push.apply(n,Li(r.props.children,l));return}_(r.type===$e,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_(!r.props.index||!r.props.children,"An index route cannot have child routes.");let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=Li(r.props.children,l)),n.push(i)}),n}var fo="get",po="application/x-www-form-urlencoded";function ol(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function vm(e){return ol(e)&&e.tagName.toLowerCase()==="button"}function xm(e){return ol(e)&&e.tagName.toLowerCase()==="form"}function wm(e){return ol(e)&&e.tagName.toLowerCase()==="input"}function km(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Sm(e,t){return e.button===0&&(!t||t==="_self")&&!km(e)}var _r=null;function Em(){if(_r===null)try{new FormData(document.createElement("form"),0),_r=!1}catch{_r=!0}return _r}var Cm=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pl(e){return e!=null&&!Cm.has(e)?(ot(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${po}"`),null):e}function Am(e,t){let n,r,o,l,i;if(xm(e)){let a=e.getAttribute("action");r=a?xt(a,t):null,n=e.getAttribute("method")||fo,o=Pl(e.getAttribute("enctype"))||po,l=new FormData(e)}else if(vm(e)||wm(e)&&(e.type==="submit"||e.type==="image")){let a=e.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?xt(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||fo,o=Pl(e.getAttribute("formenctype"))||Pl(a.getAttribute("enctype"))||po,l=new FormData(a,e),!Em()){let{name:c,type:h,value:f}=e;if(h==="image"){let m=c?`${c}.`:"";l.append(`${m}x`,"0"),l.append(`${m}y`,"0")}else c&&l.append(c,f)}}else{if(ol(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=fo,r=null,o=po,i=e}return l&&o==="text/plain"&&(i=l,l=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:l,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function La(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function zd(e,t,n,r){let o=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:t&&xt(o.pathname,t)==="/"?o.pathname=`${Fo(t)}/_root.${r}`:o.pathname=`${Fo(o.pathname)}.${r}`,o}async function jm(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Rm(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Nm(e,t,n){let r=await Promise.all(e.map(async o=>{let l=t.routes[o.route.id];if(l){let i=await jm(l,n);return i.links?i.links():[]}return[]}));return Im(r.flat(1).filter(Rm).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function _s(e,t,n,r,o,l){let i=(s,c)=>n[c]?s.route.id!==n[c].route.id:!0,a=(s,c)=>{var h;return n[c].pathname!==s.pathname||((h=n[c].route.path)==null?void 0:h.endsWith("*"))&&n[c].params["*"]!==s.params["*"]};return l==="assets"?t.filter((s,c)=>i(s,c)||a(s,c)):l==="data"?t.filter((s,c)=>{var f;let h=r.routes[s.route.id];if(!h||!h.hasLoader)return!1;if(i(s,c)||a(s,c))return!0;if(s.route.shouldRevalidate){let m=s.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:s.params,defaultShouldRevalidate:!0});if(typeof m=="boolean")return m}return!0}):[]}function Lm(e,t,{includeHydrateFallback:n}={}){return bm(e.map(r=>{let o=t.routes[r.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function bm(e){return[...new Set(e)]}function Tm(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function Im(e,t){let n=new Set;return new Set(t),e.reduce((r,o)=>{let l=JSON.stringify(Tm(o));return n.has(l)||(n.add(l),r.push({key:l,link:o})),r},[])}function ba(){let e=y.useContext(Un);return La(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Pm(){let e=y.useContext(nl);return La(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Ta=y.createContext(void 0);Ta.displayName="FrameworkContext";function Ia(){let e=y.useContext(Ta);return La(e,"You must render this element inside a <HydratedRouter> element"),e}function Bm(e,t){let n=y.useContext(Ta),[r,o]=y.useState(!1),[l,i]=y.useState(!1),{onFocus:a,onBlur:s,onMouseEnter:c,onMouseLeave:h,onTouchStart:f}=t,m=y.useRef(null);y.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let w=d=>{d.forEach(p=>{i(p.isIntersecting)})},E=new IntersectionObserver(w,{threshold:.5});return m.current&&E.observe(m.current),()=>{E.disconnect()}}},[e]),y.useEffect(()=>{if(r){let w=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(w)}}},[r]);let x=()=>{o(!0)},v=()=>{o(!1),i(!1)};return n?e!=="intent"?[l,m,{}]:[l,m,{onFocus:Yn(a,x),onBlur:Yn(s,v),onMouseEnter:Yn(c,x),onMouseLeave:Yn(h,v),onTouchStart:Yn(f,x)}]:[!1,m,{}]}function Yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Dm({page:e,...t}){let n=Yh(),{router:r}=ba(),o=y.useMemo(()=>wd(r.routes,e,r.basename),[r.routes,e,r.basename]);return o?n?y.createElement(Mm,{page:e,matches:o,...t}):y.createElement(Um,{page:e,matches:o,...t}):null}function zm(e){let{manifest:t,routeModules:n}=Ia(),[r,o]=y.useState([]);return y.useEffect(()=>{let l=!1;return Nm(e,t,n).then(i=>{l||o(i)}),()=>{l=!0}},[e,t,n]),r}function Mm({page:e,matches:t,...n}){let r=_e(),{future:o}=Ia(),{basename:l}=ba(),i=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let a=zd(e,l,o.unstable_trailingSlashAwareDataRequests,"rsc"),s=!1,c=[];for(let h of t)typeof h.route.shouldRevalidate=="function"?s=!0:c.push(h.route.id);return s&&c.length>0&&a.searchParams.set("_routes",c.join(",")),[a.pathname+a.search]},[l,o.unstable_trailingSlashAwareDataRequests,e,r,t]);return y.createElement(y.Fragment,null,i.map(a=>y.createElement("link",{key:a,rel:"prefetch",as:"fetch",href:a,...n})))}function Um({page:e,matches:t,...n}){let r=_e(),{future:o,manifest:l,routeModules:i}=Ia(),{basename:a}=ba(),{loaderData:s,matches:c}=Pm(),h=y.useMemo(()=>_s(e,t,c,l,r,"data"),[e,t,c,l,r]),f=y.useMemo(()=>_s(e,t,c,l,r,"assets"),[e,t,c,l,r]),m=y.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let w=new Set,E=!1;if(t.forEach(p=>{var C;let g=l.routes[p.route.id];!g||!g.hasLoader||(!h.some(A=>A.route.id===p.route.id)&&p.route.id in s&&((C=i[p.route.id])!=null&&C.shouldRevalidate)||g.hasClientLoader?E=!0:w.add(p.route.id))}),w.size===0)return[];let d=zd(e,a,o.unstable_trailingSlashAwareDataRequests,"data");return E&&w.size>0&&d.searchParams.set("_routes",t.filter(p=>w.has(p.route.id)).map(p=>p.route.id).join(",")),[d.pathname+d.search]},[a,o.unstable_trailingSlashAwareDataRequests,s,r,l,h,t,e,i]),x=y.useMemo(()=>Lm(f,l),[f,l]),v=zm(f);return y.createElement(y.Fragment,null,m.map(w=>y.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...n})),x.map(w=>y.createElement("link",{key:w,rel:"modulepreload",href:w,...n})),v.map(({key:w,link:E})=>y.createElement("link",{key:w,nonce:n.nonce,...E,crossOrigin:E.crossOrigin??n.crossOrigin})))}function Fm(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Om=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Om&&(window.__reactRouterVersion="7.14.2")}catch{}function Wm({basename:e,children:t,unstable_useTransitions:n,window:r}){let o=y.useRef();o.current==null&&(o.current=kh({window:r,v5Compat:!0}));let l=o.current,[i,a]=y.useState({action:l.action,location:l.location}),s=y.useCallback(c=>{n===!1?a(c):y.startTransition(()=>a(c))},[n]);return y.useLayoutEffect(()=>l.listen(s),[l,s]),y.createElement(gm,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:l,unstable_useTransitions:n})}var Md=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pa=y.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:o,reloadDocument:l,replace:i,unstable_mask:a,state:s,target:c,to:h,preventScrollReset:f,viewTransition:m,unstable_defaultShouldRevalidate:x,...v},w){let{basename:E,navigator:d,unstable_useTransitions:p}=y.useContext(Oe),g=typeof h=="string"&&Md.test(h),C=jd(h,E);h=C.to;let A=tm(h,{relative:o}),L=_e(),b=null;if(a){let ie=Aa(a,[],L.unstable_mask?L.unstable_mask.pathname:"/",!0);E!=="/"&&(ie.pathname=ie.pathname==="/"?E:Ze([E,ie.pathname])),b=d.createHref(ie)}let[I,F,z]=Bm(r,v),te=Hm(h,{replace:i,unstable_mask:a,state:s,target:c,preventScrollReset:f,relative:o,viewTransition:m,unstable_defaultShouldRevalidate:x,unstable_useTransitions:p});function We(ie){t&&t(ie),ie.defaultPrevented||te(ie)}let we=!(C.isExternal||l),lt=y.createElement("a",{...v,...z,href:(we?b:void 0)||C.absoluteURL||A,onClick:we?We:t,ref:Fm(w,F),target:c,"data-discover":!g&&n==="render"?"true":void 0});return I&&!g?y.createElement(y.Fragment,null,lt,y.createElement(Dm,{page:A})):lt});Pa.displayName="Link";var Qm=y.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:o=!1,style:l,to:i,viewTransition:a,children:s,...c},h){let f=Pr(i,{relative:c.relative}),m=_e(),x=y.useContext(nl),{navigator:v,basename:w}=y.useContext(Oe),E=x!=null&&Xm(f)&&a===!0,d=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,p=m.pathname,g=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;n||(p=p.toLowerCase(),g=g?g.toLowerCase():null,d=d.toLowerCase()),g&&w&&(g=xt(g,w)||g);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let A=p===d||!o&&p.startsWith(d)&&p.charAt(C)==="/",L=g!=null&&(g===d||!o&&g.startsWith(d)&&g.charAt(d.length)==="/"),b={isActive:A,isPending:L,isTransitioning:E},I=A?t:void 0,F;typeof r=="function"?F=r(b):F=[r,A?"active":null,L?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let z=typeof l=="function"?l(b):l;return y.createElement(Pa,{...c,"aria-current":I,className:F,ref:h,style:z,to:i,viewTransition:a},typeof s=="function"?s(b):s)});Qm.displayName="NavLink";var Gm=y.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:o,state:l,method:i=fo,action:a,onSubmit:s,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:m,...x},v)=>{let{unstable_useTransitions:w}=y.useContext(Oe),E=Ym(),d=Zm(a,{relative:c}),p=i.toLowerCase()==="get"?"get":"post",g=typeof a=="string"&&Md.test(a),C=A=>{if(s&&s(A),A.defaultPrevented)return;A.preventDefault();let L=A.nativeEvent.submitter,b=(L==null?void 0:L.getAttribute("formmethod"))||i,I=()=>E(L||A.currentTarget,{fetcherKey:t,method:b,navigate:n,replace:o,state:l,relative:c,preventScrollReset:h,viewTransition:f,unstable_defaultShouldRevalidate:m});w&&n!==!1?y.startTransition(()=>I()):I()};return y.createElement("form",{ref:v,method:p,action:d,onSubmit:r?s:C,...x,"data-discover":!g&&e==="render"?"true":void 0})});Gm.displayName="Form";function Vm(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ud(e){let t=y.useContext(Un);return _(t,Vm(e)),t}function Hm(e,{target:t,replace:n,unstable_mask:r,state:o,preventScrollReset:l,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:s,unstable_useTransitions:c}={}){let h=rl(),f=_e(),m=Pr(e,{relative:i});return y.useCallback(x=>{if(Sm(x,t)){x.preventDefault();let v=n!==void 0?n:Ar(f)===Ar(m),w=()=>h(e,{replace:v,unstable_mask:r,state:o,preventScrollReset:l,relative:i,viewTransition:a,unstable_defaultShouldRevalidate:s});c?y.startTransition(()=>w()):w()}},[f,h,m,n,r,o,t,e,l,i,a,s,c])}var Km=0,Jm=()=>`__${String(++Km)}__`;function Ym(){let{router:e}=Ud("useSubmit"),{basename:t}=y.useContext(Oe),n=fm(),r=e.fetch,o=e.navigate;return y.useCallback(async(l,i={})=>{let{action:a,method:s,encType:c,formData:h,body:f}=Am(l,t);if(i.navigate===!1){let m=i.fetcherKey||Jm();await r(m,n,i.action||a,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:f,formMethod:i.method||s,formEncType:i.encType||c,flushSync:i.flushSync})}else await o(i.action||a,{unstable_defaultShouldRevalidate:i.unstable_defaultShouldRevalidate,preventScrollReset:i.preventScrollReset,formData:h,body:f,formMethod:i.method||s,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[r,o,t,n])}function Zm(e,{relative:t}={}){let{basename:n}=y.useContext(Oe),r=y.useContext(kt);_(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),l={...Pr(e||".",{relative:t})},i=_e();if(e==null){l.search=i.search;let a=new URLSearchParams(l.search),s=a.getAll("index");if(s.some(h=>h==="")){a.delete("index"),s.filter(f=>f).forEach(f=>a.append("index",f));let h=a.toString();l.search=h?`?${h}`:""}}return(!e||e===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:Ze([n,l.pathname])),Ar(l)}function Xm(e,{relative:t}={}){let n=y.useContext(Ld);_(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ud("useViewTransitionState"),o=Pr(e,{relative:t});if(!n.isTransitioning)return!1;let l=xt(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=xt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Uo(o.pathname,i)!=null||Uo(o.pathname,l)!=null}function _m(){const[e,t]=y.useState({visible:!1,message:"",type:"info"}),n=y.useRef(null),r=y.useCallback((o,l="info")=>{clearTimeout(n.current),t({visible:!0,message:o,type:l}),n.current=setTimeout(()=>{t(i=>({...i,visible:!1}))},3500)},[]);return{toast:e,showToast:r}}function qm(){const[e,t]=y.useState({visible:!1,message:"Memuat..."});function n(r,o="Memuat..."){t({visible:r,message:o})}return{loader:e,setLoader:n}}function $m({message:e,type:t,visible:n}){const r=t==="ok"?"#15803d":t==="err"?"#e24b4a":"#4f46e5",o=t==="ok"?"✓":t==="err"?"✕":"ℹ";return u.jsxs("div",{style:{position:"fixed",bottom:24,right:24,background:r,color:"#fff",borderRadius:12,padding:"13px 20px",fontSize:13,fontWeight:500,maxWidth:320,zIndex:9999,transform:n?"translateY(0)":"translateY(100px)",opacity:n?1:0,transition:"all 0.3s cubic-bezier(.175,.885,.32,1.275)",pointerEvents:"none"},children:[o," ",e]})}function eg({visible:e,message:t}){return e?u.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(255,255,255,0.75)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:200},children:u.jsxs("div",{style:{background:"#fff",borderRadius:12,padding:"30px 40px",textAlign:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.12)"},children:[u.jsx("div",{style:{width:36,height:36,border:"4px solid #e5e7eb",borderTopColor:"#4f46e5",borderRadius:"50%",animation:"spin 0.75s linear infinite",margin:"0 auto 14px"}}),u.jsx("p",{style:{fontSize:13,color:"#666"},children:t})]})}):null}const tg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEDklEQVR4AezcvbIMQRgG4CVyCWIpl0EsUEJXIFaUKr8RUiI34AYECrdAlRJL3IAUAd53Sp86e3anp/++7u+b+VT3jp3pv3kffc7ZrXXO7/yPqgQcRBXHbucgDqIsAWXL8R3iIMoSULYc3yEOoiwBZctZyw65jVxZcbBd1gByBwQvUV+hPkA1XWRA+kVCgBeY7hwqy1M88BwONotlkLuInAA47BWee7R3xtATqyDEeBbJ+TGumUSxCLKEAYupmESxBpKKMYngwRyKJZBcDHhMxRSKFZBSjEkED2ZQLICkYPAbONsh+9liAkU7CEOO/TTF9InBH3X5eoTteW6uqkfRDMJwUzECgHkUrSDHMELo4Rh2RngejqZRNILUYJhH0QbSAsM0iiaQlhhmUbSASGCYRNEAIolhDmU0SA8MUygjQXpimEEZBTICwwTKCJCRGOpReoNowNhHCc+OH7u/99UTRBNGiF/d2yy9QDRiqETpAaIZQx2KNIgFDFUokiCWMNSgSIFYxFCBIgFiGWM4SmuQNWAMRWkJsiaMYSitQNaIUYMS+mYfW4CsGSME2u0VfS3IFjC6otSAbAmjG0opyBYxuqCUgDzEypY+UfgdbfjxThxWWfg9hfcYuzm+dc+sYm0OruWCcGc8ORjl8MSfw1OrO5Nyj8yKn7BMvvkcEGIs7YzkiTfUkDslGSUVxDHq/gUlo6SAOEYdRuidhLIEch+jjfgyxcX/xdySlXNgiq6FczLT2UmjIOj1GfUn6lz5NHdhw+djmTBLZjobzxLIO/S8jsqBcNgr/EbFX2exd9Kf7JgJv8yfjeI3TtxEZaY4HC9LIOz1Hg9nUYix5tcZuOWqwtcpp1GIcQMjvkWNlhQQDnAaxTGYyHINKL/QNAkD7bJ+CSZRrqCT7wyEkFiIchltF3cG2kwldYdMjfHwDXVk+YLJr2VW9kGXYSUrs1yQYXf1f+IfOH7MrOyDLjaKNRAbqVas0kEqwpPo6iASqVaMOQCkYrUb6OogypAdxEGUJaBsOb5DHERZAsqW4zvEQZQloGw5vkMcRFkCypazmh2iLNfi5ThIcXQyHR1EJtfiUR2kODqZjg4ik2vxqA5SHJ1MRweRybV4VAcpjk6mo4PI5Fo8qoMURyfTUQrkIpb7oaLeQl/pwjkW1riLXec9Nl+jFMgFrPRqRb2EvtKFc9SskffYfI1SIM0XupUBHUSZtIM4iLIElC2ndod8xf0871jfYK7cwj4918hMctd40r4WhP/B8R5G61VfY67cwj691sd5mEnuGk/a14KcDOR/aZOAg7TJsdkoDtIsyvSBYi0dJJbOgGsOMiD02JQOEktnwDUHGRB6bEoHiaUz4JqDDAg9NqWDxNIZcM1BBoQem/IfAAAA//9To/EwAAAABklEQVQDACBOMNg7GgiPAAAAAElFTkSuQmCC",Fd="data:image/png;base64,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",qs="data:image/png;base64,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",ng="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAK50lEQVR4AeydBYwESRWG5/DDDoJL4HB3C+4aghOCa9ADghwQnODu7k7Qw93tCG4HHKc5d3f9vt7t2ZqanpaZ7t7u3dq8f0u6uqr6/dPlVX2eSfoblAYSIYOiYzJJhCRCBqaBgWVnjG/IedHhpcHVwc3AHcF9wP3APcBtwE3A5cHoZOiEXA+NPh68EXwN/AucDI4Ae4O/gF+B74Pvgh+D3cHfwCHgVLAP+Al4B3gCkERJxTo8GRohV0VFTwKfAweDPcCnwEvAQ8ANwAVAXbkgAa8G7g6eBz4JJPEozN3Ac8C1wGBkCIRcEm08DfwW7As+Dh4NrgC6kp2I+IHg3WBPIEmSvjP2TZXNJORuPPlXgEXLhzBvB3YAmyEWYxaLFoPfIwP3BZuim74TVeH352F/B34KHgYsVjBqyaGE+gWw6Hk75mvArsA3TDwbu7/012J+GpjG/zHPAnVEfUiGpPyXGyw+z4fZm5iB9hMrjvFBeFs0fBvztqBKLOe/TqBdwK3BJYDF2F0xVdQLMV8N3gY+so73Yb4ZvBJYgdvqujb2iwPjkDTrJ99KvErFusXi89+EehToRVd9JHINHsZW0DcwbwrK5H9cfDm4ObgseCh4P/gjOA4sK7bMjEPiHkskVwQ3BC8D/wBlIqGfJ8AfwC1Ap9IlIRci5/6CbaraT8BZKMfg+wHgW3NdzNeDv4KzQZfiL/8NJGCf5fqYFoHHYi6SW3JBUt6L6RuH0b50RciNyKpKfRWmxGDMifWB5f9VuPIsYP8BY1PkP6RqEXhlzKcDK3eMObH/YhFqHWN9OBdgVY8uCHkKmfKX5K8d65wchI8PZf/A8v9E3EORk8jIh4EdUuubA7AXye3x9M3CaFfaJOSiZM2y9qOYO4JYzsDDYkGirBfsReM1SDGv1jfWH7bk4ryeQ65PAK1LW4Rcjpw5hGFrBOuc/BofK2qLhSG9EWSrVCTCevDGhLJhIhGSZbN6UbFG0OWlDUIc5PsNWbBzhTEjZv5F+NwZWLljjFLsyzh4aevMQUvrxk4eZFVCHFvyzbhmQe4OxM8+w1sx/WVhjF5siBzd5VOsQoivsW/GlQoy+CP87HM4PoU1SV0NLEuILaQfkIi9Z4wZ+QIuh0fsaWNtTbZFRMsQchk0YwXnMAbWGbHTZE/YumPmQnLU00BTQi5MtJJxHcxYbI04v9B1DztOd0u5mxJi/6FoPOc9aMX2OkaSdQ0453KpdXttowkhjyNWR1AxZuSLuJyNw0iyrgFHow/DfiT4KijqKOM9L3UJcSjBAcA4BucbJCkVUxuauQhW69J8nscR69fhV0vqEHJ+YvoSMCGMqTjn/Uhcp4MkGxpQT9a1Gz6TyXNxOCOKUS51CLE4ss8RxuQMnMMkrv4I/ZN9MjkcJTgajDEVR4k/gauy6KoixKFxZ9+Ia0YcOvjljE9yhBpwOiEefLRl6oRYGG7OXkXIu7jDVxBjKn/G9iaQZLEG9uOSY3gYM/ICXP7IMYqljJB7csuDQSgWVU7gaIb+47V3l3PnVX4WRe9knSPFkfeGs4wQi6WNkGs2E/nTmjX9r9CAA6pW5vGP9zHcVzQyjvdk4ep3h8udFcsCrf+zAq8sA9fDJmNNA045uGRpzbX235fArsKaK/rvxcgrcxYp3tm+skUA2Y3p35wGLGmcGg4vxG/N9FoRIbfiqvUHxlRcGfLBqStZmmjA/trzuSHvPDtP71ATXvNSRMhT54NN7HkeX+CfvOppIJ+fd8LOUQ9bYYV3xoTYcXl4FNJFZi5KjryTs6EGnIN3GWxcfM1EExPick9HKcNArjjsdNoyTGy722NCnFyKdfKZ2CO5u9NASIj7NOLK3ArJEd3uctBfzDuQlCtGXCXTFI3nNUhrKQkJse8RL713fnxhE22pFPu/yR+aQz2umHTVu2V5Uziv4fYEO3p1dnAt/ZQhIW6giSNyIUPsNya3A3qOvb2YTBetAcC7thiXY3sOh0hy7RubBCwjxFV7bqxpEt+QwrpC3WFwV8i0mS9HMJwlbTPOaVw5IZatLsmfXsDye3AKGKvYGbOu6CL/9ybSB4DWJSfEhQtWemECPw8dI7S7cTTOttuj3WHVBK7Qd5t1HJeDhLHfyu6cEMvHODLL3thvLG47uPHyVldZ2op0D2IT7MpDW0w5uIp1Ku6BmTraspQR4vayttLpO564c2v67pjSXAaOVtgyC+8tWrUZXl/KnhPino0wgtNwLBxv4doYxfmJwec7J8SNKWFm98Ix9v4HjzA+kRArc3e8hrn3fJDQnew9aUBCXMSgGSY5hKF2y2iXH9kCrILPEOa/yO4i8ap4yq63mYZdjHjtVpZnibhYZpv9ly1hmfXqzeX2aE/1cbji76TqHH4V6rR4XEFYFU/Z9TbTsIHh8zk05T5+HnNNhkbIM8mW+xE9gcHFZTi3rNg0d+Wnp1v4vNmDSoi7ZzNH8G8z3hAPF3BmcqsTEag5szrE41lg2aiChBQ1B63os9A9/TM9DxgzPz0lOahkJCVbr6UCiqYUi96aLp/ATfjONXeZxtDjdrZ2x0WE1GlRtPmA7uZtM74xxmWra2cJKdrI3zchRS29MSp11TzvlBMS98rjjuKqCaX7a2pAQiTDxVvhLTNt4/BCsnerAQkxhXgk01m2eH7dcAkdayAnxMHEMCm3sZXuYwgDN7On0GUayAmJ3xDv8Qg8zYQeNZAT4ulvcbLOksV+yd2xBnJCXNBwZpTWHSJ3cvaggZwQe+uOrIZJeuijnZXQL9k71kBOiMnERym5Qu9OXkjoTwMhIa7Ii1OOtybE15O7ZQ2EhPyQuOOZQr9I4JvCpSR9aCAkxKWj34kSdRp1OnkSXUvODjQQEmL0fq1AM8STQ8cCu8T5hQOP83ZzqLNhC4Im7zINxIS42j3eaet3NrLZrJKI3sk1Dx62Zeaa2lfg7lW2SmIxIRZbH4sezilVT4qLvGeccWvMvSYzAZKjngZiQrzLTz7EnUQP5LJY8noR4oo/dhfdk/wKNFBEyP6Ec6MnxlScQHKB8tQjWbrRQBEhpmSdoBnC7Vyb/o2mMENb0b6IEMe2vhk9sCfZ+J2myDs529TAIkJMw315cV3yCC6kChsldCVlhLg/xCMhwrRdP+V3BV1HFPone0saKCPEJDyLNz7FwXrERW1eT2hZA1WEeKBjUR/E3rsdxpazk6KrIkQN+dUcDwPWHuKzOLb4NC9P2LPUIcQsPYN/ntSMMRX7Jt/C5b4LjCRtaKAuIe5leCIJuoYLYyouF/oyLlepYCRZVQN1CTEdv4rwUi0R7oLbb1BhJFlVA00IMa238M8TmjGSdKGBnBBHdB06dzKqCo5zxZvou8jbtoxTQjzF36PnnFxyb18V/Lhwqsg7+rlIiBtF0hqsjhTcNFoJ8Q1pel9VeDuUVWHS9QINSMhu+O8J2hKP5fCgr7bi21bxSIhLf/wsqmuwnBdfBfZV3BRvPbStFNnkYcvCSojXXUrq8Iiju6vAkeB0LIcaXRI5IUve3tptvqWtRTbiiI4dCiF7jFiJbWXdM7n2Hwohrrzf7qTYuDplKIR4moQL7PIvCLT1qxtLPBbZ2eLCoRCi4lzsvQuWeEQZry0tkuFJRVljaEiEqHW/UeKogc3mrU6MdYbHM/n5I09L9fkXfvIou7hJ/3Yn3XsBz1v3ADMHPavwT8KH4qfDq+5Z9bpn94ZpavdUnzrxepSIz+dRttmb4c3iXAAAAP//+S3KbAAAAAZJREFUAwDWcMX3dPihzwAAAABJRU5ErkJggg==",Od="data:image/png;base64,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",rg="data:image/png;base64,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",og="data:image/png;base64,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",Wd="data:image/png;base64,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",lg="data:image/png;base64,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",ig=[{id:"home",label:"Beranda",icon:tg,path:"/",roles:["admin"]},{id:"carianggota",label:"Cari Anggota",icon:qs,path:"/carianggota",roles:["admin","petugas"]},{id:"borrow",label:"Peminjaman",icon:Fd,path:"/borrow",roles:["admin","petugas"]},{id:"return",label:"Pengembalian",icon:ng,path:"/return",roles:["admin","petugas"]},{id:"search",label:"Cari Buku",icon:qs,path:"/search",roles:["admin","petugas"]},{id:"rekomendasi",label:"Rekomendasi Buku",icon:rg,path:"/rekomendasi",roles:["admin","petugas"]},{id:"chatbot",label:"Asisten Perpus",icon:lg,path:"/chatbot",roles:["admin","petugas"]},{id:"members",label:"Tambah Anggota",icon:Wd,path:"/members",roles:["admin"]},{id:"books",label:"Tambah Koleksi Buku",icon:Od,path:"/books",roles:["admin"]}];function ag({username:e,role:t,onLogout:n,sidebarOpen:r,setSidebarOpen:o}){const l=_e(),[i,a]=y.useState(window.innerWidth<=768);return y.useEffect(()=>{const c=()=>{const h=window.innerWidth<=768;a(h),h&&o(!1)};return window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[o]),u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

::-webkit-scrollbar{

width:6px;

}

::-webkit-scrollbar-thumb{

background:#ddd;

border-radius:20px;

}

`}),u.jsx("button",{onClick:()=>o(!r),style:{position:"fixed",top:16,left:r?i?16:220:16,zIndex:999,background:"#4f46e5",color:"#fff",border:"none",borderRadius:10,width:38,height:38,cursor:"pointer",boxShadow:"0 8px 18px rgba(79,70,229,.3)",transition:".3s"},children:r?"←":"→"}),u.jsxs("div",{style:{position:"fixed",top:0,left:0,width:i?r?220:0:r?220:70,height:"100vh",background:"#fff",borderRight:"1px solid rgba(0,0,0,.08)",padding:16,zIndex:200,display:"flex",flexDirection:"column",overflow:"hidden",transition:".3s",transform:i&&!r?"translateX(-100%)":"translateX(0)",opacity:i&&!r?0:1,boxShadow:"0 0 30px rgba(0,0,0,.03)"},children:[u.jsx("div",{style:{marginBottom:24,minHeight:40},children:r&&u.jsx("div",{style:{fontSize:18,marginLeft:45,marginTop:30},children:"PBJT Perpus"})}),u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,fontSize:12,flex:1,overflowY:"auto",paddingBottom:20},children:ig.filter(c=>c.roles.includes(t)).map(c=>{const h=l.pathname===c.path;return u.jsxs(Pa,{to:c.path,style:{display:"flex",alignItems:"center",justifyContent:r?"flex-start":"center",gap:r?12:0,padding:"12px",textDecoration:"none",background:h?"#dcdbec":"transparent",borderRadius:h?"20px 0 0 20px":"18px",color:h?"#170ebb":"#333",fontWeight:h?700:500,marginRight:0},children:[u.jsx("img",{src:c.icon,alt:"",style:{width:20,height:20}}),r&&u.jsx("span",{children:c.label})]},c.id)})}),u.jsxs("div",{style:{marginTop:"auto",paddingTop:12,borderTop:"1px solid rgba(0,0,0,.08)"},children:[u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:12},children:[u.jsx("div",{style:{width:38,height:38,borderRadius:"50%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",justifyContent:"center",alignItems:"center",color:"#fff"},children:e==null?void 0:e.substring(0,2).toUpperCase()}),r&&u.jsxs("div",{children:[u.jsx("div",{children:e}),u.jsx("div",{style:{fontSize:11,color:"#777"},children:t})]})]}),u.jsx("button",{onClick:n,style:{width:"100%",border:"none",background:"linear-gradient(135deg,#ef4444,#dc2626)",padding:"10px",color:"#fff",borderRadius:10},children:r?"Keluar":u.jsx("img",{src:og,alt:"",style:{width:18}})})]})]})]})}function sg(){return u.jsxs("div",{style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",background:"#fff"},children:[u.jsx("img",{src:"/PBJT.png",style:{width:"clamp(140px,25vw,300px)",height:"auto",objectFit:"contain"}}),u.jsx("h2",{style:{marginTop:"15px",fontSize:"clamp(18px,2vw,30px)",color:"#4f46e5"}})]})}const ug="/assets/pltkbaja-lNJDlCIL.png",cg="https://project-7ixze.vercel.app";async function le(e,t="GET",n=null){const r={method:t,headers:{"Content-Type":"application/json"}};n&&(r.body=JSON.stringify(n));const o=await fetch(cg+e,r),l=await o.json();if(!o.ok)throw new Error(l.detail||"Terjadi kesalahan");return l}function dg({onLogin:e,showToast:t,setLoader:n}){const[r,o]=y.useState(""),[l,i]=y.useState("");async function a(){if(!r||!l){t("Isi username dan password","err");return}n(!0,"Masuk...");try{const c=await le("/login","POST",{username:r,password:l});e(c),t("Selamat datang, "+r+"!","ok")}catch(c){t(c.message||"Login gagal","err")}finally{n(!1)}}function s(c){c.key==="Enter"&&a()}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`
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
          border-radius: 16px;
          padding: 15px;
          background: linear-gradient(135deg, #6ea8ff 0%, #4f7cff 100%);
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
      `}),u.jsxs("div",{style:{minHeight:"100vh",backgroundImage:`url(${ug})`,backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",padding:20,position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(0,0,0,0.35)",backdropFilter:"blur(3px)"}}),u.jsxs("div",{className:"login-card",style:{width:"100%",maxWidth:450,padding:"50px 40px",borderRadius:28,background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",boxShadow:"0 8px 32px rgba(0,0,0,0.3)",position:"relative",zIndex:2},children:[u.jsx("h1",{className:"login-title",style:{textAlign:"center",color:"#fff",fontSize:42,fontWeight:700,marginBottom:10,letterSpacing:1},children:"LOGIN"}),u.jsx("p",{style:{textAlign:"center",color:"rgba(255,255,255,0.75)",marginBottom:40,fontSize:14},children:"Selamat Datang di Sistem Perpustakaan PBJT"}),u.jsxs("div",{className:"input-group",children:[u.jsx("input",{className:"login-input",value:r,onChange:c=>o(c.target.value),onKeyDown:s,placeholder:" "}),u.jsx("label",{className:"input-label",children:"Username"})]}),u.jsxs("div",{className:"input-group",children:[u.jsx("input",{type:"password",className:"login-input",value:l,onChange:c=>i(c.target.value),onKeyDown:s,placeholder:" "}),u.jsx("label",{className:"input-label",children:"Password"})]}),u.jsx("button",{className:"login-btn",onClick:a,children:"Login"})]})]})]})}function Jt(e){return e?new Date(e).toLocaleDateString("id-ID",{day:"2-digit",month:"short",year:"numeric"}):"—"}function fg(){const e=new Date().toISOString().split("T")[0],t=new Date;return t.setDate(t.getDate()+14),{today:e,due:t.toISOString().split("T")[0]}}const pg={dipinjam:{background:"#fef3c7",color:"#92400e",label:"Dipinjam"},terlambat:{background:"#fee2e2",color:"#991b1b",label:"Terlambat"},tersedia:{background:"#eaf3de",color:"#3b6d11",label:"Tersedia"},dikembalikan:{background:"#dbeafe",color:"#1e40af",label:"Dikembalikan"}};function Qd({status:e}){const t=pg[e]||{background:"#f3f4f6",color:"#6b7280",label:e};return u.jsx("span",{style:{display:"inline-block",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,background:t.background,color:t.color},children:t.label})}const hg="data:image/png;base64,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",mg="/assets/ada-DZvJFqYW.png";function gg({showToast:e,setLoader:t,onGoToBorrow:n}){const[r,o]=y.useState({total:"-",borrowed:"-",available:"-",overdue:"-"}),[l,i]=y.useState([]),[a,s]=y.useState([]),[c,h]=y.useState(null);y.useEffect(()=>{f()},[]);async function f(){try{const[v,w,E]=await Promise.all([le("/stats"),le("/loans/active"),le("/loans")]);o(v),i(w),s(E.filter(d=>d.status==="dikembalikan"))}catch(v){e("Gagal muat data: "+v.message,"err")}}async function m(v){t(!0,"Memproses pengembalian...");try{const w=await le("/loans/return","POST",{book_id:v});e(w.message,"ok"),f()}catch(w){e(w.message,"err")}finally{t(!1)}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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

    .quick-btn:hover {
      transform: scale(1.05);
      opacity: .92;
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

  `}),u.jsxs("div",{className:"fade-up",children:[u.jsx(yg,{stats:r}),u.jsxs("div",{className:"home-grid",children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:12},children:[u.jsx("div",{style:{fontSize:22,fontWeight:700},children:"Peminjaman Aktif"}),u.jsx("button",{onClick:n,className:"quick-btn",style:{background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:14,padding:"11px 18px",fontWeight:700,cursor:"pointer",boxShadow:"0 10px 22px rgba(79,70,229,.2)"},children:"+ Tambah Baru"})]}),u.jsx("div",{className:"glass-box",style:$s,children:u.jsxs("table",{style:vg,children:[u.jsx("thead",{style:{background:"#f4f6fb"},children:u.jsx("tr",{children:["Peminjam","Buku","Tgl Pinjam","Jatuh Tempo","Status","Aksi"].map(v=>u.jsx("th",{style:xg,children:v},v))})}),u.jsx("tbody",{children:l.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:6,style:{textAlign:"center",padding:40,color:"#999"},children:"Tidak ada peminjaman aktif"})}):l.map(v=>u.jsxs("tr",{className:"table-row",onClick:()=>h(v),style:{cursor:"pointer"},children:[u.jsxs("td",{style:sn,children:[u.jsx("b",{children:v.borrower_name}),u.jsx("br",{}),u.jsx("span",{style:{fontSize:11,color:"#666"},children:v.member_id})]}),u.jsxs("td",{style:sn,children:[v.book_title,u.jsx("br",{}),u.jsx("span",{style:{fontSize:11,color:"#999",fontFamily:"monospace"},children:v.book_id})]}),u.jsx("td",{style:sn,children:Jt(v.borrow_date)}),u.jsx("td",{style:sn,children:Jt(v.due_date)}),u.jsx("td",{style:sn,children:u.jsx(Qd,{status:v.status})}),u.jsx("td",{style:sn,children:u.jsx("button",{className:"quick-btn",onClick:w=>{w.stopPropagation(),m(v.book_id)},style:wg,children:"Kembalikan"})})]},v.book_id))})]})}),u.jsxs("div",{className:"glass-box",style:{...$s,padding:22,marginTop:24},children:[u.jsx("div",{style:{fontSize:20,fontWeight:700,marginBottom:18},children:"Riwayat Pengembalian"}),a.length===0?u.jsx("div",{style:{textAlign:"center",padding:30,color:"#999",fontSize:13},children:"Belum ada riwayat"}):a.slice(0,8).map((v,w)=>u.jsxs("div",{className:"history-item",onClick:()=>h(v),style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 0",borderBottom:"1px solid rgba(0,0,0,.06)",cursor:"pointer"},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontWeight:700,marginBottom:4},children:v.book_title}),u.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:4},children:v.borrower_name}),u.jsx("div",{style:{fontSize:11,color:"#999"},children:v.member_id})]}),u.jsxs("div",{style:{textAlign:"right"},children:[u.jsx("div",{style:{fontSize:11,color:"#999",marginBottom:8},children:Jt(v.return_date)}),u.jsx("div",{style:{display:"inline-block",padding:"6px 12px",borderRadius:999,background:"#e6f9f0",color:"#0f9d58",fontSize:11,fontWeight:700},children:"Dikembalikan"})]})]},w))]})]})]}),c&&u.jsx("div",{onClick:()=>h(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,.45)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:9999,padding:20},children:u.jsxs("div",{onClick:v=>v.stopPropagation(),style:{width:"100%",maxWidth:500,background:"#fff",borderRadius:24,padding:28,boxShadow:"0 20px 50px rgba(0,0,0,.2)"},children:[u.jsx("div",{style:{fontSize:24,fontWeight:700,marginBottom:24},children:"Detail Peminjaman"}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"Nama:"}),u.jsx("br",{}),c.borrower_name]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"No Anggota:"}),u.jsx("br",{}),c.member_id]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"No Telepon:"}),u.jsx("br",{}),c.phone||"-"]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"Buku:"}),u.jsx("br",{}),c.book_title]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"Tanggal Pinjam:"}),u.jsx("br",{}),Jt(c.borrow_date)]}),u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"Jatuh Tempo:"}),u.jsx("br",{}),Jt(c.due_date)]}),c.return_date&&u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("b",{children:"Tanggal Kembali:"}),u.jsx("br",{}),Jt(c.return_date)]}),u.jsxs("div",{style:{marginBottom:20},children:[u.jsx("b",{children:"Status:"}),u.jsx("br",{}),u.jsx("div",{style:{marginTop:8,display:"inline-block",padding:"7px 14px",borderRadius:999,background:c.status==="dikembalikan"?"#e6f9f0":"#eef2ff",color:c.status==="dikembalikan"?"#0f9d58":"#4f46e5",fontSize:12,fontWeight:700},children:c.status})]}),u.jsx("button",{onClick:()=>h(null),style:{width:"100%",border:"none",padding:14,borderRadius:14,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",fontWeight:700,cursor:"pointer"},children:"Tutup"})]})}),"    "]})}function yg({stats:e}){const t=[{label:"Total Buku",value:e.total,badge:"Koleksi",bg:"#dbeafe",color:"#1e40af",icon:Od},{label:"Dipinjam",value:e.borrowed,badge:"Aktif",bg:"#fef3c7",color:"#92400e",icon:Fd},{label:"Tersedia",value:e.available,badge:"Siap Pinjam",bg:"#dcfce7",color:"#166534",icon:mg},{label:"Terlambat",value:e.overdue,badge:"Perhatian",bg:"#fee2e2",color:"#991b1b",icon:hg},{label:"Anggota",value:e.members,badge:"Terdaftar",bg:"#dcfce7",color:"#166534",icon:Wd}];return u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:16,marginBottom:28},children:t.map((n,r)=>u.jsxs("div",{className:`stat-card fade-up fade-delay-${r+1}`,style:{background:"rgba(255,255,255,.92)",backdropFilter:"blur(12px)",border:"1px solid rgba(255,255,255,.3)",padding:22},children:[u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:18},children:[u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:12,color:"#666",fontWeight:600,marginBottom:6},children:n.label}),u.jsx("div",{style:{fontSize:36,fontWeight:700},children:n.value})]}),u.jsx("div",{className:"icon-box",style:{width:62,height:62,borderRadius:18,background:n.bg,display:"flex",alignItems:"center",justifyContent:"center"},children:u.jsx("img",{src:n.icon,alt:n.label,style:{width:30,height:30,objectFit:"contain"}})})]}),u.jsx("div",{style:{display:"inline-block",padding:"6px 12px",borderRadius:999,background:n.bg,color:n.color,fontSize:11,fontWeight:700},children:n.badge})]},n.label))})}const $s={background:"rgba(255,255,255,.92)",border:"1px solid rgba(255,255,255,.4)",overflow:"hidden",backdropFilter:"blur(12px)"},vg={width:"100%",borderCollapse:"collapse",minWidth:700},xg={padding:"16px 18px",textAlign:"left",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",color:"#666",borderBottom:"1px solid rgba(0,0,0,.08)"},sn={padding:"16px 18px",borderBottom:"1px solid rgba(0,0,0,.05)"},wg={background:"linear-gradient(135deg,#ef4444,#dc2626)",color:"#fff",border:"none",borderRadius:12,padding:"9px 14px",fontSize:11,fontWeight:700,cursor:"pointer"};function Be({label:e,children:t}){return u.jsxs("div",{style:{marginBottom:14},children:[u.jsx("label",{style:{display:"block",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:".05em",color:"#666",marginBottom:6,wordWrap:"break-word",whiteSpace:"normal",lineHeight:1.4},children:e}),t]})}const De={width:"100%",background:"#f0efeb",border:"1px solid rgba(0,0,0,0.2)",borderRadius:8,padding:"10px 12px",fontSize:13,fontFamily:"inherit",color:"#1a1a1a",outline:"none"};function eu({session:e,showToast:t,setLoader:n}){const o=_e().state,{today:l,due:i}=fg(),[a,s]=y.useState({name:"",member:"",phone:"",bookId:"",date:l,dueDate:i}),[c,h]=y.useState(""),[f,m]=y.useState([]);y.useEffect(()=>{o&&s(E=>({...E,name:o.name||"",member:o.member_code||"",phone:o.phone||""}))},[o]),y.useEffect(()=>{const E=setTimeout(()=>{c.trim()?x():m([])},400);return()=>clearTimeout(E)},[c]);async function x(){try{const E=await le("/books/search?q="+encodeURIComponent(c));m(E)}catch{t("Gagal mencari buku","err")}}function v(E,d){s(p=>({...p,[E]:d}))}async function w(){const{name:E,member:d,phone:p,bookId:g,dueDate:C}=a;if(!E||!d||!p||!g||!C){t("Lengkapi semua form","err");return}n(!0,"Memproses peminjaman...");try{const A=await le("/loans/borrow","POST",{user_id:e.user_id,book_id:g,borrower_name:E,member_id:d,phone:p,due_date:C});t(A.message,"ok"),s({name:"",member:"",phone:"",bookId:"",date:l,dueDate:i}),h(""),m([])}catch(A){t(A.message,"err")}finally{n(!1)}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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

      `}),u.jsx("div",{className:"borrow-page",style:{width:"100%"},children:u.jsxs("div",{className:"modern-card",style:{padding:32},children:[u.jsx("div",{style:{marginBottom:30},children:u.jsx("div",{style:{fontSize:14,color:"#666"},children:"Isi data peminjam dan buku yang akan dipinjam"})}),u.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginBottom:18},children:[u.jsx(Be,{label:"Nama Peminjam",children:u.jsx("input",{value:a.name,onChange:E=>v("name",E.target.value),placeholder:"Nama lengkap",style:{...De,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"No. Anggota",children:u.jsx("input",{value:a.member,onChange:E=>v("member",E.target.value),placeholder:"23.1.9.0000",style:{...De,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"No. Telepon",children:u.jsx("input",{value:a.phone,onChange:E=>v("phone",E.target.value),placeholder:"081234567890",style:{...De,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"Cari Buku",children:u.jsx("input",{value:c,onChange:E=>{h(E.target.value)},placeholder:"Cari ID / judul buku...",style:{...De,padding:14},className:"modern-input"})})]}),f.length>0&&u.jsx("div",{style:{marginTop:12,border:"1px solid rgba(0,0,0,0.08)",overflow:"hidden",background:"#fff",maxHeight:260,overflowY:"auto"},children:f.map(E=>u.jsxs("div",{onClick:()=>{v("bookId",E.id),h(E.title),m([])},className:"book-item",style:{padding:14,borderBottom:"1px solid rgba(0,0,0,0.06)",cursor:"pointer"},children:[u.jsx("div",{style:{fontWeight:600,marginBottom:4},children:E.title}),u.jsx("div",{style:{fontSize:12,color:"#666"},children:E.id})]},E.id))}),u.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,marginTop:20,marginBottom:28},children:[u.jsx(Be,{label:"Tanggal Pinjam",children:u.jsx("input",{type:"date",value:a.date,disabled:!0,style:{...De,padding:14,background:"#f3f4f6"}})}),u.jsx(Be,{label:"Jatuh Tempo",children:u.jsx("input",{type:"date",value:a.dueDate,onChange:E=>v("dueDate",E.target.value),style:{...De,padding:14},className:"modern-input"})})]}),u.jsx("button",{onClick:w,className:"modern-btn",style:{width:"100%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:14,padding:"15px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 22px rgba(79,70,229,.22)"},children:"Proses Peminjaman"})]})})]})}var kg={exports:{}};(function(e){var t=function(n){var r=Object.prototype,o=r.hasOwnProperty,l=Object.defineProperty||function(S,k,j){S[k]=j.value},i,a=typeof Symbol=="function"?Symbol:{},s=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",h=a.toStringTag||"@@toStringTag";function f(S,k,j){return Object.defineProperty(S,k,{value:j,enumerable:!0,configurable:!0,writable:!0}),S[k]}try{f({},"")}catch{f=function(k,j,D){return k[j]=D}}function m(S,k,j,D){var R=k&&k.prototype instanceof g?k:g,T=Object.create(R.prototype),O=new it(D||[]);return l(T,"_invoke",{value:We(S,j,O)}),T}n.wrap=m;function x(S,k,j){try{return{type:"normal",arg:S.call(k,j)}}catch(D){return{type:"throw",arg:D}}}var v="suspendedStart",w="suspendedYield",E="executing",d="completed",p={};function g(){}function C(){}function A(){}var L={};f(L,s,function(){return this});var b=Object.getPrototypeOf,I=b&&b(b(at([])));I&&I!==r&&o.call(I,s)&&(L=I);var F=A.prototype=g.prototype=Object.create(L);C.prototype=A,l(F,"constructor",{value:A,configurable:!0}),l(A,"constructor",{value:C,configurable:!0}),C.displayName=f(A,h,"GeneratorFunction");function z(S){["next","throw","return"].forEach(function(k){f(S,k,function(j){return this._invoke(k,j)})})}n.isGeneratorFunction=function(S){var k=typeof S=="function"&&S.constructor;return k?k===C||(k.displayName||k.name)==="GeneratorFunction":!1},n.mark=function(S){return Object.setPrototypeOf?Object.setPrototypeOf(S,A):(S.__proto__=A,f(S,h,"GeneratorFunction")),S.prototype=Object.create(F),S},n.awrap=function(S){return{__await:S}};function te(S,k){function j(T,O,M,W){var J=x(S[T],S,O);if(J.type==="throw")W(J.arg);else{var St=J.arg,st=St.value;return st&&typeof st=="object"&&o.call(st,"__await")?k.resolve(st.__await).then(function(ut){j("next",ut,M,W)},function(ut){j("throw",ut,M,W)}):k.resolve(st).then(function(ut){St.value=ut,M(St)},function(ut){return j("throw",ut,M,W)})}}var D;function R(T,O){function M(){return new k(function(W,J){j(T,O,W,J)})}return D=D?D.then(M,M):M()}l(this,"_invoke",{value:R})}z(te.prototype),f(te.prototype,c,function(){return this}),n.AsyncIterator=te,n.async=function(S,k,j,D,R){R===void 0&&(R=Promise);var T=new te(m(S,k,j,D),R);return n.isGeneratorFunction(k)?T:T.next().then(function(O){return O.done?O.value:T.next()})};function We(S,k,j){var D=v;return function(T,O){if(D===E)throw new Error("Generator is already running");if(D===d){if(T==="throw")throw O;return P()}for(j.method=T,j.arg=O;;){var M=j.delegate;if(M){var W=we(M,j);if(W){if(W===p)continue;return W}}if(j.method==="next")j.sent=j._sent=j.arg;else if(j.method==="throw"){if(D===v)throw D=d,j.arg;j.dispatchException(j.arg)}else j.method==="return"&&j.abrupt("return",j.arg);D=E;var J=x(S,k,j);if(J.type==="normal"){if(D=j.done?d:w,J.arg===p)continue;return{value:J.arg,done:j.done}}else J.type==="throw"&&(D=d,j.method="throw",j.arg=J.arg)}}}function we(S,k){var j=k.method,D=S.iterator[j];if(D===i)return k.delegate=null,j==="throw"&&S.iterator.return&&(k.method="return",k.arg=i,we(S,k),k.method==="throw")||j!=="return"&&(k.method="throw",k.arg=new TypeError("The iterator does not provide a '"+j+"' method")),p;var R=x(D,S.iterator,k.arg);if(R.type==="throw")return k.method="throw",k.arg=R.arg,k.delegate=null,p;var T=R.arg;if(!T)return k.method="throw",k.arg=new TypeError("iterator result is not an object"),k.delegate=null,p;if(T.done)k[S.resultName]=T.value,k.next=S.nextLoc,k.method!=="return"&&(k.method="next",k.arg=i);else return T;return k.delegate=null,p}z(F),f(F,h,"Generator"),f(F,s,function(){return this}),f(F,"toString",function(){return"[object Generator]"});function lt(S){var k={tryLoc:S[0]};1 in S&&(k.catchLoc=S[1]),2 in S&&(k.finallyLoc=S[2],k.afterLoc=S[3]),this.tryEntries.push(k)}function ie(S){var k=S.completion||{};k.type="normal",delete k.arg,S.completion=k}function it(S){this.tryEntries=[{tryLoc:"root"}],S.forEach(lt,this),this.reset(!0)}n.keys=function(S){var k=Object(S),j=[];for(var D in k)j.push(D);return j.reverse(),function R(){for(;j.length;){var T=j.pop();if(T in k)return R.value=T,R.done=!1,R}return R.done=!0,R}};function at(S){if(S){var k=S[s];if(k)return k.call(S);if(typeof S.next=="function")return S;if(!isNaN(S.length)){var j=-1,D=function R(){for(;++j<S.length;)if(o.call(S,j))return R.value=S[j],R.done=!1,R;return R.value=i,R.done=!0,R};return D.next=D}}return{next:P}}n.values=at;function P(){return{value:i,done:!0}}return it.prototype={constructor:it,reset:function(S){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(ie),!S)for(var k in this)k.charAt(0)==="t"&&o.call(this,k)&&!isNaN(+k.slice(1))&&(this[k]=i)},stop:function(){this.done=!0;var S=this.tryEntries[0],k=S.completion;if(k.type==="throw")throw k.arg;return this.rval},dispatchException:function(S){if(this.done)throw S;var k=this;function j(W,J){return T.type="throw",T.arg=S,k.next=W,J&&(k.method="next",k.arg=i),!!J}for(var D=this.tryEntries.length-1;D>=0;--D){var R=this.tryEntries[D],T=R.completion;if(R.tryLoc==="root")return j("end");if(R.tryLoc<=this.prev){var O=o.call(R,"catchLoc"),M=o.call(R,"finallyLoc");if(O&&M){if(this.prev<R.catchLoc)return j(R.catchLoc,!0);if(this.prev<R.finallyLoc)return j(R.finallyLoc)}else if(O){if(this.prev<R.catchLoc)return j(R.catchLoc,!0)}else if(M){if(this.prev<R.finallyLoc)return j(R.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(S,k){for(var j=this.tryEntries.length-1;j>=0;--j){var D=this.tryEntries[j];if(D.tryLoc<=this.prev&&o.call(D,"finallyLoc")&&this.prev<D.finallyLoc){var R=D;break}}R&&(S==="break"||S==="continue")&&R.tryLoc<=k&&k<=R.finallyLoc&&(R=null);var T=R?R.completion:{};return T.type=S,T.arg=k,R?(this.method="next",this.next=R.finallyLoc,p):this.complete(T)},complete:function(S,k){if(S.type==="throw")throw S.arg;return S.type==="break"||S.type==="continue"?this.next=S.arg:S.type==="return"?(this.rval=this.arg=S.arg,this.method="return",this.next="end"):S.type==="normal"&&k&&(this.next=k),p},finish:function(S){for(var k=this.tryEntries.length-1;k>=0;--k){var j=this.tryEntries[k];if(j.finallyLoc===S)return this.complete(j.completion,j.afterLoc),ie(j),p}},catch:function(S){for(var k=this.tryEntries.length-1;k>=0;--k){var j=this.tryEntries[k];if(j.tryLoc===S){var D=j.completion;if(D.type==="throw"){var R=D.arg;ie(j)}return R}}throw new Error("illegal catch attempt")},delegateYield:function(S,k,j){return this.delegate={iterator:at(S),resultName:k,nextLoc:j},this.method==="next"&&(this.arg=i),p}},n}(e.exports);try{regeneratorRuntime=t}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}})(kg);var Ba=(e,t)=>`${e}-${t}-${Math.random().toString(16).slice(3,8)}`;const Sg=Ba;let tu=0;var Gd=({id:e,action:t,payload:n={}})=>{let r=e;return typeof r>"u"&&(r=Sg("Job",tu),tu+=1),{id:r,action:t,payload:n}},Fn={};let Da=!1;Fn.logging=Da;Fn.setLogging=e=>{Da=e};Fn.log=(...e)=>Da?console.log.apply(void 0,e):null;const Eg=Gd,{log:qr}=Fn,Cg=Ba;let nu=0;var Ag=()=>{const e=Cg("Scheduler",nu),t={},n={};let r=[];nu+=1;const o=()=>r.length,l=()=>Object.keys(t).length,i=()=>{if(r.length!==0){const f=Object.keys(t);for(let m=0;m<f.length;m+=1)if(typeof n[f[m]]>"u"){r[0](t[f[m]]);break}}},a=(f,m)=>new Promise((x,v)=>{const w=Eg({action:f,payload:m});r.push(async E=>{r.shift(),n[E.id]=w;try{x(await E[f].apply(void 0,[...m,w.id]))}catch(d){v(d)}finally{delete n[E.id],i()}}),qr(`[${e}]: Add ${w.id} to JobQueue`),qr(`[${e}]: JobQueue length=${r.length}`),i()});return{addWorker:f=>(t[f.id]=f,qr(`[${e}]: Add ${f.id}`),qr(`[${e}]: Number of workers=${l()}`),i(),f.id),addJob:async(f,...m)=>{if(l()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return a(f,m)},terminate:async()=>{Object.keys(t).forEach(async f=>{await t[f].terminate()}),r=[]},getQueueLen:o,getNumWorkers:l}};function jg(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Rg(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var Ng=Rg;const Lg=Ng;var bg=e=>{const t={};return typeof WorkerGlobalScope<"u"?t.type="webworker":Lg()?t.type="electron":typeof document=="object"?t.type="browser":typeof process=="object"&&typeof jg=="function"&&(t.type="node"),typeof e>"u"?t:t[e]};const Tg=bg("type")==="browser",Ig=Tg?e=>new URL(e,window.location.href).href:e=>e;var Pg=e=>{const t={...e};return["corePath","workerPath","langPath"].forEach(n=>{e[n]&&(t[n]=Ig(t[n]))}),t},Bg=e=>{const t=[],n=[],r=[],o=[],l=[];return e.blocks&&e.blocks.forEach(i=>{i.paragraphs.forEach(a=>{a.lines.forEach(s=>{s.words.forEach(c=>{c.symbols.forEach(h=>{l.push({...h,page:e,block:i,paragraph:a,line:s,word:c})}),o.push({...c,page:e,block:i,paragraph:a,line:s})}),r.push({...s,page:e,block:i,paragraph:a})}),n.push({...a,page:e,block:i})}),t.push({...i,page:e})}),{...e,blocks:t,paragraphs:n,lines:r,words:o,symbols:l}},Vd={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Dg="5.1.1",zg={version:Dg};var Mg={workerBlobURL:!0,logger:()=>{}};const Ug=zg.version,Fg=Mg;var Og={...Fg,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${Ug}/dist/worker.min.js`},Wg=({workerPath:e,workerBlobURL:t})=>{let n;if(Blob&&URL&&t){const r=new Blob([`importScripts("${e}");`],{type:"application/javascript"});n=new Worker(URL.createObjectURL(r))}else n=new Worker(e);return n},Qg=e=>{e.terminate()},Gg=(e,t)=>{e.onmessage=({data:n})=>{t(n)}},Vg=async(e,t)=>{e.postMessage(t)};const Bl=e=>new Promise((t,n)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:o}}})=>{n(Error(`File could not be read! Code=${o}`))},r.readAsArrayBuffer(e)}),bi=async e=>{let t=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?t=atob(e.split(",")[1]).split("").map(n=>n.charCodeAt(0)):t=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(t=await bi(e.src)),e.tagName==="VIDEO"&&(t=await bi(e.poster)),e.tagName==="CANVAS"&&await new Promise(n=>{e.toBlob(async r=>{t=await Bl(r),n()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const n=await e.convertToBlob();t=await Bl(n)}else(e instanceof File||e instanceof Blob)&&(t=await Bl(e));return new Uint8Array(t)};var Hg=bi;const Kg=Og,Jg=Wg,Yg=Qg,Zg=Gg,Xg=Vg,_g=Hg;var qg={defaultOptions:Kg,spawnWorker:Jg,terminateWorker:Yg,onMessage:Zg,send:Xg,loadImage:_g};const $g=Pg,ey=Bg,Ge=Gd,{log:ru}=Fn,ty=Ba,Vt=Vd,{defaultOptions:ny,spawnWorker:ry,terminateWorker:oy,onMessage:ly,loadImage:ou,send:iy}=qg;let lu=0;var Hd=async(e="eng",t=Vt.LSTM_ONLY,n={},r={})=>{const o=ty("Worker",lu),{logger:l,errorHandler:i,...a}=$g({...ny,...n}),s={},c={},h=typeof e=="string"?e.split("+"):e;let f=t,m=r;const x=[Vt.DEFAULT,Vt.LSTM_ONLY].includes(t)&&!a.legacyCore;let v,w;const E=new Promise((R,T)=>{w=R,v=T}),d=R=>{v(R.message)};let p=ry(a);p.onerror=d,lu+=1;const g=(R,T)=>{s[R]=T},C=(R,T)=>{c[R]=T},A=({id:R,action:T,payload:O})=>new Promise((M,W)=>{ru(`[${o}]: Start ${R}, action=${T}`);const J=`${T}-${R}`;g(J,M),C(J,W),iy(p,{workerId:o,jobId:R,action:T,payload:O})}),L=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),b=R=>A(Ge({id:R,action:"load",payload:{options:{lstmOnly:x,corePath:a.corePath,logging:a.logging}}})),I=(R,T,O)=>A(Ge({id:O,action:"FS",payload:{method:"writeFile",args:[R,T]}})),F=(R,T)=>A(Ge({id:T,action:"FS",payload:{method:"readFile",args:[R,{encoding:"utf8"}]}})),z=(R,T)=>A(Ge({id:T,action:"FS",payload:{method:"unlink",args:[R]}})),te=(R,T,O)=>A(Ge({id:O,action:"FS",payload:{method:R,args:T}})),We=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),we=(R,T)=>A(Ge({id:T,action:"loadLanguage",payload:{langs:R,options:{langPath:a.langPath,dataPath:a.dataPath,cachePath:a.cachePath,cacheMethod:a.cacheMethod,gzip:a.gzip,lstmOnly:[Vt.DEFAULT,Vt.LSTM_ONLY].includes(f)&&!a.legacyLang}}})),lt=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),ie=(R,T,O,M)=>A(Ge({id:M,action:"initialize",payload:{langs:R,oem:T,config:O}})),it=(R="eng",T,O,M)=>{if(x&&[Vt.TESSERACT_ONLY,Vt.TESSERACT_LSTM_COMBINED].includes(T))throw Error("Legacy model requested but code missing.");const W=T||f;f=W;const J=O||m;m=J;const st=(typeof R=="string"?R.split("+"):R).filter(ut=>!h.includes(ut));return h.push(...st),st.length>0?we(st,M).then(()=>ie(R,W,J,M)):ie(R,W,J,M)},at=(R={},T)=>A(Ge({id:T,action:"setParameters",payload:{params:R}})),P=async(R,T={},O={blocks:!0,text:!0,hocr:!0,tsv:!0},M)=>A(Ge({id:M,action:"recognize",payload:{image:await ou(R),options:T,output:O}})),S=(R="Tesseract OCR Result",T=!1,O)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),A(Ge({id:O,action:"getPDF",payload:{title:R,textonly:T}}))),k=async(R,T)=>{if(x)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return A(Ge({id:T,action:"detect",payload:{image:await ou(R)}}))},j=async()=>(p!==null&&(oy(p),p=null),Promise.resolve());ly(p,({workerId:R,jobId:T,status:O,action:M,data:W})=>{const J=`${M}-${T}`;if(O==="resolve"){ru(`[${R}]: Complete ${T}`);let St=W;M==="recognize"?St=ey(W):M==="getPDF"&&(St=Array.from({...W,length:Object.keys(W).length})),s[J]({jobId:T,data:St})}else if(O==="reject")if(c[J](W),M==="load"&&v(W),i)i(W);else throw Error(W);else O==="progress"&&l({...W,userJobId:T})});const D={id:o,worker:p,setResolve:g,setReject:C,load:L,writeText:I,readText:F,removeFile:z,FS:te,loadLanguage:We,initialize:lt,reinitialize:it,setParameters:at,recognize:P,getPDF:S,detect:k,terminate:j};return b().then(()=>we(e)).then(()=>ie(e,t,r)).then(()=>w(D)).catch(()=>{}),E};const Kd=Hd,ay=async(e,t,n)=>{const r=await Kd(t,1,n);return r.recognize(e).finally(async()=>{await r.terminate()})},sy=async(e,t)=>{const n=await Kd("osd",0,t);return n.detect(e).finally(async()=>{await n.terminate()})};var uy={recognize:ay,detect:sy},cy={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},dy={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const fy=Ag,py=Hd,hy=uy,my=cy,gy=Vd,yy=dy,{setLogging:vy}=Fn;var xy={languages:my,OEM:gy,PSM:yy,createScheduler:fy,createWorker:py,setLogging:vy,...hy};const wy=au(xy);function ky({showToast:e,setLoader:t}){const n=y.useRef(null),r=y.useRef(null),[o,l]=y.useState(null),[i,a]=y.useState([]),[s,c]=y.useState(!1),[h,f]=y.useState("");y.useEffect(()=>{let d;async function p(){try{d=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1}),n.current&&(n.current.srcObject=d)}catch(g){console.error(g),e("Camera tidak bisa diakses","err")}}return p(),()=>{d&&d.getTracks().forEach(g=>g.stop())}},[]);async function m(d){try{t(!0,"Mengambil data...");const p=await le("/member-loans/"+d);if(!p.length){e("Tidak ada peminjaman aktif","err");return}l(p[0]),a(p),e("Data ditemukan","ok")}catch(p){console.error(p),e(p.message||"Data tidak ditemukan","err")}finally{t(!1)}}function x(d){const p=d.replace(/\D/g,"");return p.length===8?`${p.slice(0,2)}.${p.slice(2,3)}.${p.slice(3,4)}.${p.slice(4)}`:d}async function v(){try{c(!0);const d=n.current,p=r.current,g=p.getContext("2d");p.width=d.videoWidth,p.height=d.videoHeight,g.filter="grayscale(100%) contrast(200%)",g.drawImage(d,0,0,p.width,p.height),e("Membaca kartu...","ok");const A=(await wy.recognize(p,"eng")).data.text;console.log("OCR TEXT:",A);const L=A.replace(/\s/g,""),b=L.match(/\d{8}/)||L.match(/\d{2}\.\d{2}\.\d{4}/)||L.match(/\d{2}\.\d\.\d\.\d{4}/);if(!b){e("NIM tidak ditemukan","err"),c(!1);return}let I=x(b[0]);console.log("FORMAT NIM:",I),f(I),await m(I)}catch(d){console.error(d),e("Gagal scan kartu","err")}finally{c(!1)}}async function w(){if(!h){e("Masukkan NIM","err");return}const d=x(h);f(d),await m(d)}async function E(d){try{t(!0,"Memproses pengembalian...");const p=await le("/loans/return","POST",{book_id:d});e(p.message,"ok");const g=i.filter(C=>C.book_id!==d);a(g),g.length===0&&l(null)}catch(p){console.error(p),e("Gagal mengembalikan buku","err")}finally{t(!1)}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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
            linear-gradient(
              135deg,
              #4f46e5,
              #7c3aed
            );

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
            #4f46e5;

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

      `}),u.jsxs("div",{className:"return-page",children:[u.jsxs("div",{className:"card",children:[u.jsx("p",{style:{color:"#666",marginBottom:20},children:"Scan kartu anggota atau masukkan NIM secara manual."}),u.jsx("div",{style:{border:"2px dashed #c4b5fd",borderRadius:24,overflow:"hidden",padding:10,background:"#faf5ff"},children:u.jsx("video",{ref:n,autoPlay:!0,playsInline:!0,muted:!0,style:{width:"100%",borderRadius:18}})}),u.jsx("canvas",{ref:r,style:{display:"none"}}),u.jsx("button",{onClick:v,className:"scan-btn",disabled:s,style:{opacity:s?.7:1},children:s?"Membaca Kartu...":"Scan Kartu"}),u.jsx("input",{type:"text",className:"manual-input",placeholder:"23.1.9.0000",value:h,onChange:d=>f(d.target.value)}),u.jsx("button",{onClick:w,className:"scan-btn",children:"Cari Manual"})]}),u.jsxs("div",{className:"card",children:[!o&&u.jsxs("div",{style:{textAlign:"center",marginTop:100},children:[u.jsx("div",{style:{fontSize:70},children:"📚"}),u.jsx("h2",{children:"Belum Ada Data"})]}),o&&u.jsxs(u.Fragment,{children:[u.jsxs("div",{style:{marginBottom:24},children:[u.jsx("h2",{children:o.name}),u.jsxs("p",{style:{color:"#666"},children:["NIM:"," ",o.nim]})]}),i.map(d=>u.jsxs("div",{className:"book-card",children:[u.jsx("h3",{children:d.title}),u.jsxs("p",{style:{color:"#666",marginTop:8},children:["Jatuh tempo:"," ",Jt(d.due_date)]}),u.jsx("button",{onClick:()=>E(d.book_id),className:"return-btn",children:"✔ Kembalikan Buku"})]},d.id))]})]})]})]})}const Sy=["Fiksi","Non-Fiksi","Ilmiah","Teknik","Sejarah","AI","Pemrograman","Romance","Horror","Lainnya"],Ey=["Buku","Novel","Komik","Tugas Akhir","Laporan Magang","Jurnal","Modul"];function Cy({showToast:e,setLoader:t}){const[n,r]=y.useState([]),[o,l]=y.useState({id:"",title:"",author:"",jenis:"Buku",category:"Fiksi",year:""});y.useEffect(()=>{i()},[]);async function i(){try{const h=await le("/books");r(h)}catch{e("Gagal memuat buku","err")}}async function a(){const{id:h,title:f,author:m,jenis:x,category:v,year:w}=o;if(!h||!f||!m||!w){e("Lengkapi semua form","err");return}t(!0,"Menyimpan koleksi...");try{const E=await le("/books","POST",{id:h,title:f,author:m,jenis:x,category:v,year:w});e(E.message,"ok"),l({id:"",title:"",author:"",jenis:"Buku",category:"Fiksi",year:""}),i()}catch(E){e(E.message,"err")}finally{t(!1)}}async function s(h){if(confirm("Hapus koleksi ini?")){t(!0,"Menghapus...");try{const f=await le(`/books/${encodeURIComponent(h)}`,"DELETE");e(f.message||"Koleksi berhasil dihapus","ok"),await i()}catch(f){e(f.message||"Gagal menghapus buku","err")}finally{t(!1)}}}function c(h,f){l(m=>({...m,[h]:f}))}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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
            scale(1.03);

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

      `}),u.jsxs("div",{className:"books-page",style:{display:"flex",flexDirection:"column",gap:24},children:[u.jsxs("div",{className:"glass-card",style:{padding:28},children:[u.jsx("div",{style:{marginBottom:24},children:u.jsx("div",{style:{color:"#666",fontSize:14},children:"Tambahkan buku, novel, tugas akhir, laporan magang, dan lainnya disini."})}),u.jsxs("div",{className:"form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[u.jsx(Be,{label:"ID Koleksi",children:u.jsx("input",{value:o.id,onChange:h=>c("id",h.target.value),placeholder:"BOOK-001",style:{...De,borderRadius:8,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"Tahun",children:u.jsx("input",{value:o.year,onChange:h=>c("year",h.target.value),placeholder:"2025",style:{...De,borderRadius:8,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"Judul",children:u.jsx("input",{value:o.title,onChange:h=>c("title",h.target.value),placeholder:"Judul koleksi",style:{...De,borderRadius:8,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"Penulis",children:u.jsx("input",{value:o.author,onChange:h=>c("author",h.target.value),placeholder:"Nama penulis",style:{...De,borderRadius:8,padding:14},className:"modern-input"})}),u.jsx(Be,{label:"Jenis Koleksi",children:u.jsx("select",{value:o.jenis,onChange:h=>c("jenis",h.target.value),style:{...De,borderRadius:8,padding:14},className:"modern-input",children:Ey.map(h=>u.jsx("option",{children:h},h))})}),u.jsx(Be,{label:"Kategori",children:u.jsx("select",{value:o.category,onChange:h=>c("category",h.target.value),style:{...De,borderRadius:8,padding:14},className:"modern-input",children:Sy.map(h=>u.jsx("option",{children:h},h))})})]}),u.jsx("button",{onClick:a,className:"modern-btn",style:{width:"100%",background:"#2f35d7",color:"#fff",border:"none",borderRadius:14,padding:"15px 20px",fontSize:15,fontWeight:700,cursor:"pointer",marginTop:24,boxShadow:"0 10px 22px rgba(79,70,229,.22)"},children:"Simpan Koleksi"})]}),u.jsxs("div",{children:[u.jsx("div",{style:{fontSize:26,fontWeight:700,marginBottom:18},children:"Koleksi Perpustakaan"}),u.jsx("div",{className:"glass-card",style:{overflow:"hidden"},children:u.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[u.jsx("thead",{style:{background:"#f4f6fb"},children:u.jsx("tr",{children:["ID","Judul","Penulis","Jenis","Kategori","Tahun","Status",""].map(h=>u.jsx("th",{style:Ay,children:h},h))})}),u.jsx("tbody",{children:n.length===0?u.jsx("tr",{children:u.jsx("td",{colSpan:8,style:{textAlign:"center",padding:40,color:"#999"},children:"Belum ada koleksi"})}):n.map(h=>u.jsxs("tr",{className:"table-row",children:[u.jsx("td",{style:Ct,children:h.id}),u.jsx("td",{style:Ct,children:h.title}),u.jsx("td",{style:Ct,children:h.author}),u.jsx("td",{style:Ct,children:h.jenis}),u.jsx("td",{style:Ct,children:h.category}),u.jsx("td",{style:Ct,children:h.year}),u.jsx("td",{style:Ct,children:u.jsx(Qd,{status:h.status})}),u.jsx("td",{style:Ct,children:h.status==="tersedia"&&u.jsx("button",{onClick:()=>s(h.id),className:"delete-btn",style:{background:"#ef4444",color:"#fff",border:"none",borderRadius:10,padding:"7px 12px",fontSize:12,fontWeight:700,cursor:"pointer"},children:"🗑"})})]},h.id))})]})})]})]})]})}const Ay={padding:"14px 18px",textAlign:"left",fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:".06em",color:"#666",borderBottom:"1px solid rgba(0,0,0,.08)"},Ct={padding:"15px 18px",borderBottom:"1px solid rgba(0,0,0,.06)"};function jy({onSelectBook:e,showToast:t}){const[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),[s,c]=y.useState(!1);async function h(){if(n.trim()){c(!0),a(!0);try{const f=await le("/books/search?q="+encodeURIComponent(n));l(f)}catch(f){t("Gagal mencari: "+f.message,"err")}finally{a(!1)}}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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

          .search-btn {

            width: 100%;

          }

        }

      `}),u.jsxs("div",{className:"search-page",children:[u.jsx("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:u.jsxs("div",{className:"search-flex",style:{display:"flex",gap:12},children:[u.jsx("input",{className:`\r
modern-input\r
`,value:n,onChange:f=>r(f.target.value),onKeyDown:f=>f.key==="Enter"&&h(),placeholder:`\r
Cari judul atau ID buku...\r
`}),u.jsx("button",{onClick:h,className:`\r
search-btn\r
`,style:{background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:18,padding:"0 24px",fontWeight:700,cursor:"pointer",boxShadow:"0 10px 20px rgba(79,70,229,.22)"},children:"Cari"})]})}),i&&u.jsx("div",{style:{textAlign:"center",color:"#666",marginBottom:20},children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:14},children:[u.jsx("div",{style:{width:42,height:42,border:"4px solid #e5e7eb",borderTop:"4px solid #4f46e5",borderRadius:"50%",animation:"spin .8s linear infinite"}}),u.jsx("div",{children:"Mencari buku..."})]})}),!i&&s&&o.length===0&&u.jsx("div",{className:"glass-card",style:{padding:24,borderRadius:20,textAlign:"center",color:"#777"},children:"Buku tidak ditemukan"}),u.jsx("div",{className:"book-grid",children:o.map(f=>u.jsxs("div",{className:`\r
book-card glass-card\r
`,onClick:()=>e(f),style:{borderRadius:24,padding:16,position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{width:"100%",height:280,borderRadius:18,overflow:"hidden",marginBottom:18,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",color:"#9ca3af",fontWeight:700,fontSize:14},children:f.image_url?u.jsx("img",{src:`http://127.0.0.1:8000${f.image_url}`,alt:f.title,style:{width:"100%",height:"100%",objectFit:"cover"},onError:m=>{m.target.style.display="none",m.target.parentNode.innerHTML="GAMBAR TIDAK TERSEDIA"}}):"GAMBAR TIDAK TERSEDIA"}),u.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:f.title}),u.jsxs("div",{style:{fontSize:14,color:"#555",marginBottom:14},children:["Penulis: ",f.author]}),u.jsx("div",{style:{display:"inline-block",background:"#eef2ff",color:"#4f46e5",padding:"6px 12px",borderRadius:999,fontSize:12,fontWeight:700,marginBottom:16},children:f.category}),u.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:18},children:[u.jsx("div",{style:{fontSize:12,color:"#999",fontWeight:600},children:f.id}),u.jsx("div",{style:{fontSize:11,padding:"6px 12px",borderRadius:999,background:f.status==="tersedia"?"#e6f9f0":"#ffe6e6",color:f.status==="tersedia"?"#0f9d58":"#d93025",fontWeight:700},children:f.status})]})]},f.id))})]})]})}function Ry(){rl();const[e,t]=y.useState(""),[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),s="https://project-7ixze.vercel.app",c=`
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
  `,h=async()=>{if(!e||!n){alert("Mood dan genre harus dipilih");return}a(!0);try{const f=await fetch(`${s}/recommend`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({genre:n,subgenre:e})});if(!f.ok)throw new Error("Gagal mengambil data");const m=await f.json();l(m.recommendations||m)}catch(f){console.error(f),alert("Server tidak merespon")}finally{a(!1)}};return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:c}),u.jsx("div",{className:"App",children:u.jsx("div",{className:"page",children:u.jsxs("main",{className:"container",children:[u.jsx("div",{style:{marginBottom:30}}),u.jsxs("form",{className:"filter",onSubmit:f=>{f.preventDefault(),h()},children:[u.jsxs("select",{value:e,onChange:f=>t(f.target.value),children:[u.jsx("option",{value:"",children:"Apa yang kamu rasakan..."}),u.jsx("option",{value:"senang",children:"Senang"}),u.jsx("option",{value:"penasaran",children:"Penasaran"}),u.jsx("option",{value:"sedih",children:"Sedih"}),u.jsx("option",{value:"tenang",children:"Tenang"}),u.jsx("option",{value:"marah",children:"Marah"})]}),u.jsxs("select",{value:n,onChange:f=>r(f.target.value),children:[u.jsx("option",{value:"",children:"Pilih Genre"}),u.jsx("option",{value:"agama anak",children:"Agama Anak"}),u.jsx("option",{value:"agama umum",children:"Agama Umum"}),u.jsx("option",{value:"sains umum",children:"Sains Umum"}),u.jsx("option",{value:"sastra anak",children:"Sastra Anak"}),u.jsx("option",{value:"sastra umum",children:"Sastra Umum"})]}),u.jsx("button",{type:"submit",children:i?"Loading...":"Cari"})]}),u.jsx("ul",{className:"book-list",children:i?u.jsx("div",{className:"loading",children:"🔍 Sedang mencari rekomendasi..."}):o.length>0?o.map((f,m)=>u.jsxs("li",{className:"book-card",style:{animationDelay:`${m*.15}s`},children:[u.jsxs("div",{className:"book-image",children:[u.jsx("img",{className:"book-cover",src:`${s}${f.image_url}`,alt:f.judul,onError:x=>{x.target.style.display="none",x.target.nextSibling.style.display="flex"}}),u.jsx("div",{className:"empty-cover",style:{display:"none"},children:"GAMBAR TIDAK TERSEDIA"})]}),u.jsxs("div",{className:"book-info",children:[u.jsx("div",{className:"book-title",children:f.judul}),u.jsxs("div",{className:"author",children:["Penulis: ",f.pengarang]}),u.jsx("div",{className:"badge",children:f.klasifikasi||"Ilmiah"}),u.jsxs("div",{className:"bottom-row",children:[u.jsx("div",{className:"book-id",children:f.id||"-"}),u.jsx("div",{className:"status",children:"tersedia"})]})]})]},m)):u.jsx("div",{className:"empty-state",children:"Silakan pilih mood dan genre untuk melihat rekomendasi"})})]})})})]})}function Ny({showToast:e,setLoader:t,setSelectedMember:n,setPage:r}){const o=rl(),[l,i]=y.useState([]),[a,s]=y.useState(null),[c,h]=y.useState({member_code:"",name:"",nim:"",major:"",phone:"",address:""});y.useEffect(()=>{f()},[]);async function f(){try{const d=await le("/members");i(d)}catch(d){e(d.message,"err")}}async function m(){const d=a!==null;t(!0,d?"Menyimpan perubahan anggota...":"Menambahkan anggota...");try{const p=await le(d?`/members/${a}`:"/members",d?"PUT":"POST",c);e(p.message,"ok"),h({member_code:"",name:"",nim:"",major:"",phone:"",address:""}),s(null),f()}catch(p){e(p.message,"err")}finally{t(!1)}}function x(d,p){h(g=>({...g,[d]:p}))}function v(d){h({member_code:d.member_code,name:d.name,nim:d.nim,major:d.major,phone:d.phone,address:d.address}),s(d.id)}function w(){s(null),h({member_code:"",name:"",nim:"",major:"",phone:"",address:""})}async function E(d){if(window.confirm(`Hapus anggota ${d.name}?`)){t(!0,"Menghapus anggota...");try{const p=await le(`/members/${d.id}`,"DELETE");e(p.message,"ok"),f(),a===d.id&&w()}catch(p){e(p.message,"err")}finally{t(!1)}}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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
          transform: scale(1.02);
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

      `}),u.jsxs("div",{className:"members-page page-wrapper",style:{width:"100%"},children:[u.jsx("div",{style:{marginBottom:26}}),u.jsxs("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:[u.jsx("div",{style:{fontSize:22,fontWeight:700,marginBottom:24},children:a?"Edit Anggota":"Tambah Anggota"}),u.jsxs("div",{className:"form-grid",children:[u.jsx("input",{className:"modern-input",placeholder:"Kode Anggota",value:c.member_code,onChange:d=>x("member_code",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"Nama Lengkap",value:c.name,onChange:d=>x("name",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"NIM",value:c.nim,onChange:d=>x("nim",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"Jurusan",value:c.major,onChange:d=>x("major",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"No Telepon",value:c.phone,onChange:d=>x("phone",d.target.value)}),u.jsx("textarea",{className:"modern-input",placeholder:"Alamat",rows:4,value:c.address,onChange:d=>x("address",d.target.value)})]}),u.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[u.jsx("button",{onClick:m,className:"submit-btn",style:{marginTop:24,flex:1,minWidth:180,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:14,padding:"16px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 24px rgba(79,70,229,.24)"},children:a?"Simpan Perubahan":"+ Tambah Anggota"}),a&&u.jsx("button",{onClick:w,className:"submit-btn",style:{marginTop:24,flex:1,minWidth:120,background:"#f3f4f6",color:"#111827",border:"none",padding:"16px 20px",fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 10px 24px rgba(15,23,42,.08)"},children:"Batal"})]})]}),u.jsx("div",{style:{marginBottom:18,fontSize:22,fontWeight:700},children:"Daftar Anggota"}),u.jsx("div",{className:"member-grid",children:l.map(d=>u.jsxs("div",{className:"member-card glass-card",style:{borderRadius:24,padding:22,position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",right:-25,top:-25,width:90,height:90,borderRadius:"50%",background:"rgba(79,70,229,.08)"}}),u.jsx("div",{style:{width:68,height:68,borderRadius:20,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,color:"#fff",marginBottom:18,boxShadow:"0 10px 20px rgba(79,70,229,.24)"},children:"👨‍🎓"}),u.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:d.name}),u.jsx("div",{style:{display:"inline-block",background:"#eef2ff",color:"#4f46e5",padding:"6px 12px",borderRadius:999,fontSize:12,fontWeight:700,marginBottom:16},children:d.member_code}),u.jsxs("div",{style:{fontSize:14,color:"#555",lineHeight:1.8},children:[u.jsx("div",{children:d.nim}),u.jsx("div",{children:d.major}),u.jsx("div",{children:d.phone})]}),u.jsxs("div",{style:{display:"grid",gap:10,marginTop:16},children:[u.jsx("button",{onClick:()=>{n(d),o("/borrow",{state:d})},style:{width:"100%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:14,padding:"12px",fontWeight:700,cursor:"pointer"},children:"Gunakan Anggota"}),u.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[u.jsx("button",{onClick:()=>v(d),style:{flex:1,minWidth:120,background:"#eef2ff",color:"#3730a3",border:"1px solid rgba(79,70,229,.15)",borderRadius:14,padding:"12px",fontWeight:700,cursor:"pointer"},children:"Edit"}),u.jsx("button",{onClick:()=>E(d),style:{flex:1,minWidth:120,background:"#fee2e2",color:"#991b1b",border:"1px solid rgba(248,113,113,.3)",borderRadius:14,padding:"12px",fontWeight:700,cursor:"pointer"},children:"Hapus"})]})]})]},d.id))})]})]})}function Ly({showToast:e}){const t=rl(),[n,r]=y.useState(""),[o,l]=y.useState([]),[i,a]=y.useState(!1),[s,c]=y.useState(null),[h,f]=y.useState({member_code:"",name:"",nim:"",major:"",phone:"",address:""});async function m(d){if(r(d),!d.trim()){l([]);return}a(!0);try{const p=await le("/members/search?q="+encodeURIComponent(d));l(p)}catch{e("Gagal mencari anggota","err")}finally{a(!1)}}function x(d,p){f(g=>({...g,[d]:p}))}function v(d){f({member_code:d.member_code,name:d.name,nim:d.nim,major:d.major,phone:d.phone,address:d.address}),c(d.id)}async function w(){try{await le(`/members/${s}`,"PUT",h),e("Data anggota berhasil diperbarui","ok"),c(null),m(n)}catch(d){e(d.message,"err")}}async function E(d){if(window.confirm("Hapus anggota ini?"))try{await le(`/members/${d}`,"DELETE"),e("Anggota berhasil dihapus","ok"),m(n)}catch(p){e(p.message,"err")}}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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

      `}),u.jsxs("div",{className:"search-page",children:[u.jsx("div",{style:{marginBottom:28}}),u.jsx("div",{className:"glass-card",style:{padding:28,marginBottom:30},children:u.jsx("input",{className:"modern-input",placeholder:`\r
Cari nama / NIM / kode anggota...\r
`,value:n,onChange:d=>m(d.target.value)})}),i&&u.jsx("div",{style:{textAlign:"center",color:"#666",marginBottom:20},children:"Mencari anggota..."}),!i&&n&&o.length===0&&u.jsx("div",{style:{background:"#fff",padding:24,borderRadius:20,textAlign:"center",color:"#777"},children:"Anggota tidak ditemukan"}),u.jsx("div",{className:"member-grid",children:o.map(d=>u.jsxs("div",{className:`\r
member-card glass-card\r
`,style:{borderRadius:24,padding:22,position:"relative",overflow:"hidden"},children:[u.jsx("div",{style:{position:"absolute",right:-25,top:-25,width:90,height:90,borderRadius:"50%",background:"rgba(79,70,229,.08)"}}),u.jsx("div",{style:{width:68,height:68,borderRadius:20,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,color:"#fff",marginBottom:18,boxShadow:"0 10px 20px rgba(79,70,229,.24)"},children:"👨‍🎓"}),u.jsx("div",{style:{fontSize:18,fontWeight:700,marginBottom:8},children:d.name}),u.jsx("div",{style:{display:"inline-block",background:"#eef2ff",color:"#4f46e5",padding:"6px 12px",borderRadius:999,fontSize:12,fontWeight:700,marginBottom:16},children:d.member_code}),u.jsxs("div",{style:{fontSize:14,color:"#555",lineHeight:1.8},children:[u.jsx("div",{children:d.nim}),u.jsx("div",{children:d.major}),u.jsx("div",{children:d.phone})]}),u.jsxs("div",{style:{display:"grid",gap:10,marginTop:20},children:[u.jsx("button",{onClick:()=>{t("/borrow",{state:d})},style:{width:"100%",background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:16,padding:"14px 18px",fontWeight:700,cursor:"pointer"},children:"Pilih Anggota"}),u.jsxs("div",{style:{display:"flex",gap:10},children:[u.jsx("button",{onClick:()=>v(d),style:{flex:1,background:"#eef2ff",color:"#3730a3",border:"none",borderRadius:14,padding:12,fontWeight:700,cursor:"pointer"},children:"Edit"}),u.jsx("button",{onClick:()=>E(d.id),style:{flex:1,background:"#fee2e2",color:"#991b1b",border:"none",borderRadius:14,padding:12,fontWeight:700,cursor:"pointer"},children:"Hapus"})]})]})]},d.id))})]}),s&&u.jsx("div",{className:"edit-modal",children:u.jsxs("div",{className:"edit-box",children:[u.jsx("div",{style:{fontSize:24,fontWeight:700,marginBottom:20},children:"Edit Anggota"}),u.jsxs("div",{style:{display:"grid",gap:14},children:[u.jsx("input",{className:"modern-input",placeholder:`\r
Kode anggota\r
`,value:h.member_code,onChange:d=>x("member_code",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"Nama",value:h.name,onChange:d=>x("name",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"NIM",value:h.nim,onChange:d=>x("nim",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:"Jurusan",value:h.major,onChange:d=>x("major",d.target.value)}),u.jsx("input",{className:"modern-input",placeholder:`\r
No Telepon\r
`,value:h.phone,onChange:d=>x("phone",d.target.value)}),u.jsx("textarea",{className:"modern-input",rows:4,placeholder:`\r
Alamat\r
`,value:h.address,onChange:d=>x("address",d.target.value)})]}),u.jsxs("div",{style:{display:"flex",gap:12,marginTop:24},children:[u.jsx("button",{onClick:w,style:{flex:1,background:"linear-gradient(135deg,#4f46e5,#7c3aed)",color:"#fff",border:"none",borderRadius:16,padding:14,fontWeight:700,cursor:"pointer"},children:"Simpan"}),u.jsx("button",{onClick:()=>c(null),style:{flex:1,background:"#f3f4f6",color:"#111827",border:"none",borderRadius:16,padding:14,fontWeight:700,cursor:"pointer"},children:"Batal"})]})]})})]})}function by(){const[e,t]=y.useState([]),[n,r]=y.useState("");function o(){if(!n.trim())return;const l={sender:"user",text:n};t(i=>[...i,l]),r(""),setTimeout(()=>{t(i=>[...i,{sender:"bot",text:"Halo 😊 saya siap membantu rekomendasi buku dan layanan perpustakaan."}])},700)}return u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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
            linear-gradient(
              135deg,
              #4f46e5,
              #4f46e5
            );

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
            linear-gradient(
              135deg,
              #4f46e5,
              #4f46e5
            );

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

      `}),u.jsxs("div",{className:"ai-page",children:[e.length===0&&u.jsxs("div",{className:"hero",children:[u.jsxs("h1",{children:["Selamat Datang di Asisten ",u.jsx("br",{}),"Perpus PBJT"]}),u.jsx("p",{children:"Temukan buku yang sempurna untuk kamu hari ini."})]}),u.jsxs("div",{className:"chat-box",children:[u.jsx("div",{className:"messages",children:e.map((l,i)=>u.jsx("div",{className:`msg-wrap ${l.sender}`,children:u.jsx("div",{className:`msg ${l.sender}`,children:l.text})},i))}),u.jsxs("div",{className:"input-area",children:[u.jsx("input",{placeholder:"Ask Anything",value:n,onChange:l=>r(l.target.value),onKeyDown:l=>{l.key==="Enter"&&o()}}),u.jsx("button",{className:"send-btn",onClick:o,children:"➤"})]})]})]})]})}function Ty(){const[e,t]=y.useState(!0),[n,r]=y.useState(null),[o,l]=y.useState(window.innerWidth>768),[i,a]=y.useState(null),{toast:s,showToast:c}=_m(),{loader:h,setLoader:f}=qm();y.useEffect(()=>{const v=setTimeout(()=>{t(!1)},2500);return()=>clearTimeout(v)},[]),y.useEffect(()=>{const v=()=>{window.innerWidth<=768?l(!1):l(!0)};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v)}},[]);function m(v){r(v)}function x(){r(null),c("Berhasil keluar","info")}return e?u.jsx(sg,{}):u.jsxs(u.Fragment,{children:[u.jsx("style",{children:`

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

`}),u.jsx(eg,{visible:h.visible,message:h.message}),u.jsx($m,{message:s.message,type:s.type,visible:s.visible}),!n&&u.jsx(dg,{onLogin:m,showToast:c,setLoader:f}),n&&u.jsxs(Wm,{children:[u.jsx(ag,{username:n.username,onLogout:x,sidebarOpen:o,setSidebarOpen:l,role:n.role}),u.jsx("div",{style:{marginLeft:window.innerWidth<=768?0:o?220:70,transition:".3s",padding:window.innerWidth<=768?15:25,minHeight:"100vh",width:window.innerWidth<=768?"100%":`calc(
100% - ${o?220:70}px
)`,overflowX:"hidden"},children:u.jsxs(ym,{children:[u.jsx($e,{path:"/",element:n.role==="admin"?u.jsx(gg,{showToast:c,setLoader:f}):u.jsx(eu,{session:n,showToast:c,setLoader:f,selectedMember:i})}),u.jsx($e,{path:"/borrow",element:u.jsx(eu,{session:n,showToast:c,setLoader:f,selectedMember:i})}),u.jsx($e,{path:"/return",element:u.jsx(ky,{showToast:c,setLoader:f})}),u.jsx($e,{path:"/books",element:u.jsx(Cy,{showToast:c,setLoader:f})}),u.jsx($e,{path:"/search",element:u.jsx(jy,{showToast:c})}),u.jsx($e,{path:"/rekomendasi",element:u.jsx(Ry,{showToast:c,setLoader:f})}),u.jsx($e,{path:"/members",element:u.jsx(Ny,{showToast:c,setLoader:f,setSelectedMember:a})}),u.jsx($e,{path:"/carianggota",element:u.jsx(Ly,{showToast:c,setLoader:f})}),u.jsx($e,{path:"/chatbot",element:u.jsx(by,{})})]})})]})]})}const Iy="modulepreload",Py=function(e){return"/"+e},iu={},By=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(s=>{if(s=Py(s),s in iu)return;iu[s]=!0;const c=s.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":Iy,c||(f.as="script"),f.crossOrigin="",f.href=s,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,x)=>{f.addEventListener("load",m),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${s}`)))})}))}function l(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return o.then(i=>{for(const a of i||[])a.status==="rejected"&&l(a.reason);return t().catch(l)})};function Dy(e={}){const{immediate:t=!1,onNeedReload:n,onNeedRefresh:r,onOfflineReady:o,onRegistered:l,onRegisteredSW:i,onRegisterError:a}=e;let s,c;const h=async(m=!0)=>{await c};async function f(){if("serviceWorker"in navigator){if(s=await By(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/sw.js",{scope:"/",type:"classic"})).catch(m=>{a==null||a(m)}),!s)return;s.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&(n?n():window.location.reload())}),s.addEventListener("installed",m=>{m.isUpdate||o==null||o()}),s.register({immediate:t}).then(m=>{i?i("/sw.js",m):l==null||l(m)}).catch(m=>{a==null||a(m)})}}return c=f(),h}Dy({immediate:!0});Dl.createRoot(document.getElementById("root")).render(u.jsx(uf.StrictMode,{children:u.jsx(Ty,{})}));
