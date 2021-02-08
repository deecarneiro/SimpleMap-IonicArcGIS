(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-RouteLayerView2D-js"],{

/***/ "BLb8":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/RouteLayerView2D.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let h=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_13__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_11__["default"])){constructor(){super(...arguments),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_10__["default"],this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();const i=this.graphicsViews.map((r=>r.hitTest(e,s)));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(i).then((e=>e.filter(((e,s)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[s]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const s of this.graphicsViews)s.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const s=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_12__["default"]({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});s.renderer=e.renderer,this._popupTemplates.set(s,e.popupTemplate),this.graphicsViews.push(s),this.container.addChild(s.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};h=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.RouteLayerView2D")],h);var c=h;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "DxxZ":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
  \*********************************************************************/
/*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDiff", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDiffAny", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return m; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "TDcG");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accessor.js */ "/CmD");
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Collection.js */ "LE9a");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(t){return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]}function c(t){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]?Object.keys(t.items):i(t)?Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys():t?Object.keys(t):[]}function u(t,e){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]?t.items[e]:t[e]}function l(t){return t?t.declaredClass:null}function s(t,n){const o=t.diff;if(o&&"function"==typeof o)return o(t,n);const r=c(t),p=c(n);if(0===r.length&&0===p.length)return;if(!r.length||!p.length||function(t,e){return!(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}(t,n))return{type:"complete",oldValue:t,newValue:n};const a=p.filter((t=>-1===r.indexOf(t))),y=r.filter((t=>-1===p.indexOf(t))),m=r.filter((e=>p.indexOf(e)>-1&&u(t,e)!==u(n,e))).concat(a,y).sort(),d=l(t);if(d&&f.indexOf(d)>-1&&m.length)return{type:"complete",oldValue:t,newValue:n};let b;const h=i(t)&&i(n);for(const r of m){const f=u(t,r),i=u(n,r);let c;(h||"function"!=typeof f&&"function"!=typeof i)&&(f!==i&&(null==f&&null==i||(c=o&&o[r]&&"function"==typeof o[r]?o[r](f,i):"object"==typeof f&&"object"==typeof i&&l(f)===l(i)?s(f,i):{type:"complete",oldValue:f,newValue:i},Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c)&&(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b)?b.diff[r]=c:b={type:"partial",diff:{[r]:c}}))))}return b}function p(e,n){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return!1;const o=n.split(".");let r=e;for(const t of o){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const e=r.diff[t];if(!e)return!1;r=e}}return!0}function a(t,e){for(const n of e)if(p(t,n))return!0;return!1}function y(t,e){if("function"!=typeof t&&"function"!=typeof e&&(t||e))return!t||!e||"object"==typeof t&&"object"==typeof e&&l(t)!==l(e)?{type:"complete",oldValue:t,newValue:e}:s(t,e)}function m(e){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!m(e))return!1;for(const e of t.removed)if(!m(e))return!1;for(const e of t.changed)if(!m(e))return!1;return!0}case"partial":for(const t in e.diff){if(!m(e.diff[t]))return!1}return!0}}


/***/ }),

/***/ "rvq7":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
  \****************************************************/
/*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCache", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function() { return i; });
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PooledArray.js */ "ikTR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=-3;class s{constructor(t,e,s){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(t,e,s,i=0){this._storage.put(this._namespace+t,e,s,i)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this._namespace+t,e,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class i{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs=this._removeFuncs.filter((e=>e[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,s,i){const h=this._db.get(t);if(h&&(this._size-=h.size,this._db.delete(t),h.entry!==e&&this._notifyRemoved(t,h.entry)),s>this._maxSize)return void this._notifyRemoved(t,e);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const r=1+Math.max(i,-3)- -3;this._db.set(t,{entry:e,size:s,lifetime:r,lives:r}),this._size+=s,this._checkSizeLimit()}updateSize(t,e,s){const i=this._db.get(t);i&&i.entry===e&&(this._size-=i.size,s>this._maxSize?this._notifyRemoved(t,e):(i.size=s,this._size+=s,this._checkSizeLimit()))}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},s=new Array;this._db.forEach(((t,i)=>{const h=t.lifetime;s[h]=(s[h]||0)+t.size,this._users.forAll((s=>{const h=s.namespace;if(i.startsWith(h)){const s=e[h]||0;e[h]=s+t.size}}))}));const i={};this._users.forAll((t=>{const s=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const h=e[s]||0;e[s]=h,i[s]=Math.round(100*t.hitRate)+"%"}else i[s]="0%"}));const h=Object.keys(e);h.forEach((t=>e[t]=e[t]/this._size*100)),h.sort(((t,s)=>e[s]-e[t])),h.forEach((s=>t[s]=Math.round(e[s])+"% / "+i[s]));for(let e=s.length-1;e>=0;--e){const i=s[e];i&&(t["Priority "+(e+-3-1)]=Math.round(i/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((e,s)=>{s.startsWith(t)&&(this._size-=e.size,this._db.delete(s),this._notifyRemoved(s,e.entry))}))}clearAll(){this._db.forEach(((t,e)=>this._notifyRemoved(e,t.entry))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(t,e){this._removeFuncs.forEach((s=>{t.startsWith(s[0])&&s[1](e)}))}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,e]of this._db)if(this._db.delete(t),e.lives<=1?(this._size-=e.size,this._notifyRemoved(t,e.entry)):(--e.lives,this._db.set(t,e)),this._size<=.9*this.maxSize)return}}


/***/ }),

/***/ "wk6I":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemCache.js */ "rvq7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,r){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"],this._storage.maxSize=e,r&&this._storage.registerRemoveFunc("",r)}put(t,e,r){this._storage.put(t,e,r,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}});


/***/ })

}]);
//# sourceMappingURL=layers-RouteLayerView2D-js-es2015.js.map