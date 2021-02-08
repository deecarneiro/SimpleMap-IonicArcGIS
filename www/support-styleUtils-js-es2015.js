(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-styleUtils-js"],{

/***/ "EJFl":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/support/featureFlags.js ***!
  \***********************************************************/
/*! exports provided: disableContextNavigation, enableWebStyleForceWOSR, hasEnableFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableContextNavigation", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableWebStyleForceWOSR", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasEnableFeature", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o){return!!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(`enable-feature:${o}`)}const r=()=>o("force-wosr"),t=()=>o("disable-context-navigation");


/***/ }),

/***/ "NDpP":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/styleUtils.js ***!
  \*****************************************************************/
/*! exports provided: fetchStyle, fetchSymbolFromStyle, resolveWebStyleSymbol, styleNameFromItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStyle", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSymbolFromStyle", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveWebStyleSymbol", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleNameFromItem", function() { return N; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../portal/PortalQueryParams.js */ "6aRp");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StyleOrigin.js */ "tyRe");
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Thumbnail.js */ "UFqC");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../chunks/symbols.js */ "nNR5");
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../support/featureFlags.js */ "EJFl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d={};function h(t,r,o){const s=r.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__["default"].getDefault();let n;const l=`${s.url} - ${s.user&&s.user.username} - ${t}`;return d[l]||(d[l]=function(t,r,o){return r.load(o).then((()=>{const e=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__["default"]({disableExtraQuery:!0,query:`owner:${$} AND type:${E} AND typekeywords:"${t}"`});return r.queryItems(e,o)})).then((({results:r})=>{let s=null;const n=t.toLowerCase();if(r&&Array.isArray(r))for(const e of r){if(e.typeKeywords.some((e=>e.toLowerCase()===n))&&e.type===E&&e.owner===$){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-not-found",`The style '${t}' could not be found`,{styleName:t});return s.load(o)}))}(t,s,o).then((e=>(n=e,e.fetchData()))).then((e=>({data:e,baseUrl:n.itemUrl,styleName:t})))),d[l]}function g(t,o,s){return t.styleUrl?function(e,t){return S(e,t).then((t=>({data:t.data,baseUrl:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(e),styleUrl:e})))}(t.styleUrl,s):t.styleName?h(t.styleName,o,s):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function w(t,s,l,a){return t.name?t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?function(e,t,s){const n=D.replace(/\{SymbolName\}/gi,e.name);return S(n,s).then((e=>{const s=U(e.data);return Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(s,{portal:t.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(n)),origin:"portal-item"})}))}(t,s,a):g(t,s,a).then((e=>j(e,t.name,s,l,a))):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function j(t,l,a,i,d){const h=t.data,g={portal:a.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(t.baseUrl),origin:"portal-item"},w=h.items.find((e=>e.name===l));if(!w){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("symbolstyleutils:symbol-name-not-found",`The symbol name '${l}' could not be found`,{symbolName:l}))}let j=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(function(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!Object(_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_11__["enableWebStyleForceWOSR"])())for(const t of e.formatInfos)if("gltf"===t.type)return t.href;return e.webRef}(w,i),g),N=w.thumbnail&&w.thumbnail.href;const $=w.thumbnail&&w.thumbnail.imageData;Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["isDevEnvironment"])()&&(j=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(j),N=Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_10__["adjustStaticAGOUrl"])(N));const E={portal:a.portal,url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(j)),origin:"portal-item"};return S(j,d).then((e=>{const r="cimRef"===i?U(e.data):e.data,o=Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["f"])(r,E);if(o&&Object(_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_9__["i"])(o)){if(N){const e=Object(_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_2__["f"])(N,g);o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({url:e})}else $&&(o.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_8__["default"]({url:`data:image/png;base64,${$}`}));t.styleUrl?o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:a.portal,styleUrl:t.styleUrl,name:l}):t.styleName&&(o.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__["default"]({portal:a.portal,styleName:t.styleName,name:l}))}return o}))}function U(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function N(e){for(const t of e.typeKeywords)if(/^Esri.*Style$/.test(t)&&"Esri Style"!==t)return t}function S(e,r){const o={responseType:"json",query:{f:"json"},...r};return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(e),o)}const $="esri_en",E="Style",D="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ "SbiP":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/devEnvironmentUtils.js ***!
  \***************************************************************/
/*! exports provided: adjustStaticAGOUrl, isDevEnvironment, isTelemetryDevEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustStaticAGOUrl", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevEnvironment", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTelemetryDevEnvironment", function() { return o; });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "3r0u");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(a){return a=a||_global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname,e.some((c=>{var t;return null!=(null==(t=a)?void 0:t.match(c))}))}function t(a,t){return a&&(t=t||_global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname)?null!=t.match(r)||null!=t.match(m)?a.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(n)||null!=t.match(s)?a.replace("static.arcgis.com","staticqa.arcgis.com"):a:a}function o(a){a=a||_global_js__WEBPACK_IMPORTED_MODULE_0__["default"].location.hostname;return[/^zrh-.+?\.esri\.com$/].concat(e).some((c=>{var t;return null!=(null==(t=a)?void 0:t.match(c))}))}const r=/^devext.arcgis.com$/,n=/^qaext.arcgis.com$/,m=/^[\w-]*\.mapsdevext.arcgis.com$/,s=/^[\w-]*\.mapsqa.arcgis.com$/,e=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,r,n,/^jsapps.esri.com$/,m,s];


/***/ })

}]);
//# sourceMappingURL=support-styleUtils-js-es2015.js.map