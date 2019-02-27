!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["custom-button"]=t():e["custom-button"]=t()}(window,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var u=n(0),c=n.n(u);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,l(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(t,u["Component"]),n=t,(r=[{key:"render",value:function(){return c.a.createElement("button",null,"Custom Button")}}])&&f(n.prototype,r),o&&f(n,o),t}();t.default=o},function(e,t,n){"use strict";
/** @license React v16.8.3
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=n(3),r="function"==typeof Symbol&&Symbol.for,s=r?Symbol.for("react.element"):60103,l=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,u=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,i=r?Symbol.for("react.context"):60110,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,c,f){if(!e){if((e=void 0)===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var i=[n,r,o,u,c,f],l=0;(e=Error(t.replace(/%s/g,function(){return i[l++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||_}function S(){}function O(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||_}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=j.prototype;var w=O.prototype=new S;w.constructor=O,a(w,j.prototype),w.isPureReactComponent=!0;var x={current:null},P={current:null},k=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r=void 0,o={},u=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(u=""+t.key),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=t[r]);var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){for(var i=Array(f),l=0;l<f;l++)i[l]=arguments[l+2];o.children=i}if(e&&e.defaultProps)for(r in f=e.defaultProps)void 0===o[r]&&(o[r]=f[r]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:P.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var R=/\/+/g,M=[];function T(e,t,n,r){if(M.length){var o=M.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,M.length<10&&M.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case s:case l:c=!0}}if(c)return r(o,t,""===n?"."+q(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var f=0;f<t.length;f++){var i=n+q(u=t[f],f);c+=e(u,i,r,o)}else if("function"==typeof(i=null===t||"object"!=typeof t?null:"function"==typeof(i=v&&t[v]||t["@@iterator"])?i:null))for(t=i.call(t),f=0;!(u=t.next()).done;)c+=e(u=u.value,i=n+q(u,f++),r,o);else"object"===u&&h("31","[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return c}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(n=e.key,r={"=":"=0",":":"=2"},"$"+(""+n).replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var n,r}function U(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,n){var r,o,u=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,u,n,function(e){return e}):null!=e&&($(e)&&(o=c+(!(r=e).key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n,e={$$typeof:s,type:r.type,key:o,ref:r.ref,props:r.props,_owner:r._owner}),u.push(e))}function L(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(R,"$&/")+"/"),I(e,F,t=T(t,u,r,o)),A(t)}function N(){var e=x.current;return null===e&&h("307"),e}var V={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,U,t=T(null,null,t,n)),A(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return L(e,t,null,function(e){return e}),t},only:function(e){return $(e)||h("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:O,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return N().useCallback(e,t)},useContext:function(e,t){return N().useContext(e,t)},useEffect:function(e,t){return N().useEffect(e,t)},useImperativeHandle:function(e,t,n){return N().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return N().useLayoutEffect(e,t)},useMemo:function(e,t){return N().useMemo(e,t)},useReducer:function(e,t,n){return N().useReducer(e,t,n)},useRef:function(e){return N().useRef(e)},useState:function(e){return N().useState(e)},Fragment:o,StrictMode:u,Suspense:d,createElement:E,cloneElement:function(e,t,n){null==e&&h("267",e);var r=void 0,o=a({},e.props),u=e.key,c=e.ref,f=e._owner;if(null!=t){void 0!==t.ref&&(c=t.ref,f=P.current),void 0!==t.key&&(u=""+t.key);var i=void 0;for(r in e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)k.call(t,r)&&!C.hasOwnProperty(r)&&(o[r]=void 0===t[r]&&void 0!==i?i[r]:t[r])}if(1===(r=arguments.length-2))o.children=n;else if(1<r){i=Array(r);for(var l=0;l<r;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:s,type:e.type,key:u,ref:c,props:o,_owner:f}},createFactory:function(e){var t=E.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.3",unstable_ConcurrentMode:p,unstable_Profiler:c,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:x,ReactCurrentOwner:P,assign:a}},D=V;e.exports=D.default||D},function(e,t,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in n=Object(arguments[u]))l.call(n,c)&&(o[c]=n[c]);if(i){r=i(n);for(var f=0;f<r.length;f++)a.call(n,r[f])&&(o[r[f]]=n[r[f]])}}return o}}])});