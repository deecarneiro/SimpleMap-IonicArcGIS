(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-layersLoader-js"],{

/***/ "O5Ly":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/layersLoader.js ***!
  \******************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return s; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _jsonContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jsonContext.js */ "Fewv");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "oLSx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function s(n,s){const u=n.instance.portalItem;return u&&u.id?(await u.load(s),function(t){const r=t.instance.portalItem;if(-1===t.supportedTypes.indexOf(r.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:t.supportedTypes.join(", ")})}(n),async function(n,s){const u=n.instance,d=u.portalItem,{url:y,title:f}=d,m=Object(_jsonContext_js__WEBPACK_IMPORTED_MODULE_5__["createForItem"])(d);if("group"===u.type)return u.read({title:f},m),function(n,l){let a;const s=n.portalItem.type;switch(s){case"Feature Service":a=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].FeatureLayer;break;case"Stream Service":a=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].StreamLayer;break;case"Scene Service":a=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].SceneLayer;break;case"Feature Collection":a=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"].FeatureLayer;break;default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("portal:unsupported-item-type-as-group",`The item type '${s}' is not supported as a 'GroupLayer'`)}let u;return a().then((e=>(u=e,p(l)))).then((e=>c(e)>0?i(n,u,e):function(e,n){if(!e.portalItem.url)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();const l={responseType:"json",query:{f:"json"}};return Object(_request_js__WEBPACK_IMPORTED_MODULE_2__["default"])(e.portalItem.url,l).then((t=>{var r,l;const a=t.data;function o(e){return{id:e.id,name:e.name}}a&&i(e,n,{layers:null==(r=a.layers)?void 0:r.map(o),tables:null==(l=a.tables)?void 0:l.map(o)})}))}(n,u)))}(u,n);y&&u.read({url:y},m);const h=await p(n,s);h&&u.read(h,m);return u.resourceReferences={portalItem:d,paths:m.readResourcePaths},u.read({title:f},m),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_4__["loadStyleRenderer"])(u,m)}(n,s)):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])()}function i(e,t,r){let n=r.layers||[];const l=r.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach((e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)})),n=n.filter((e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)}))),n.reverse().forEach((n=>{const l=u(e,t,r,n);e.add(l)})),l.reverse().forEach((n=>{const l=u(e,t,r,n);e.tables.add(l)}))}function u(e,t,r,l){const a=new t({portalItem:e.portalItem.clone(),layerId:l.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_3__["default"].getDefault()};a.read(l,t);const o=r.showLegend;null!=o&&a.read({showLegend:o},t)}return a}function p(e,r){if(!1===e.supportsData)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["resolve"])();const n=e.instance;return n.portalItem.fetchData("json",r).catch((()=>null)).then((e=>{const t=e;let r;if(function(e){if("stream"===e.type)return!1;return"layerId"in e}(n)){let l=!0;return e&&c(t)>0&&(null==n.layerId&&(n.layerId=function(e){const t=e.layers;if(t&&t.length)return t[0].id;const r=e.tables;if(r&&r.length)return r[0].id;return null}(t)),r=function(e,t){const r=e.layers;if(r)for(let e=0;e<r.length;e++)if(r[e].id===t)return r[e];const n=e.tables;if(n)for(let e=0;e<n.length;e++)if(n[e].id===t)return n[e];return null}(t,n.layerId),r&&(1===c(t)&&(l=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))),l&&"service-name"!==n.sublayerTitleMode&&(n.sublayerTitleMode="item-title-and-service-name"),r}return e}))}function c(e){var t,r,n,l;return(null!=(t=null==e||null==(r=e.layers)?void 0:r.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}


/***/ }),

/***/ "YOx9":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/styleUtils.js ***!
  \*******************************************************************/
/*! exports provided: loadStyleRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyleRenderer", function() { return t; });
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Warning.js */ "ACjl");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/asyncUtils.js */ "eSsm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_2__["result"])(s.populateFromStyle());if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(n),!1===a.ok){const r=a.error;i&&i.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_0__["default"]("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:i})),t.clear("renderer",i.origin)}}}


/***/ })

}]);
//# sourceMappingURL=portal-support-layersLoader-js-es2015.js.map