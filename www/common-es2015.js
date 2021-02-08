(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "0/6H":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-a6787d69.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-e806d1f6.js */ "A36C");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_1__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_2__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "2uVf":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat3f64.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,r,n,t,a,o,u,c,f){return[e,r,n,t,a,o,u,c,f]}function t(e,r){return new Float64Array(e,r,9)}var a=Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t});


/***/ }),

/***/ "46M0":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/geojson/geojson.js ***!
  \******************************************************************************/
/*! exports provided: createOptimizedFeatures, inferLayerProperties, validateGeoJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOptimizedFeatures", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inferLayerProperties", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateGeoJSON", function() { return h; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../OptimizedGeometry.js */ "gVKr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(e){const t=[];return e.forEach((e=>t.push(e))),t}const r={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function*i(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*s(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(;;){const{value:t,done:n}=e.next();if(n)return!1;if(t.length>2)return!0}}function u(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function l(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":return function(e,t,n){return p(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const o of t.coordinates)p(e,o,n);return e}(e,t,n);case"MultiPoint":return function(e,t,n){return p(e,t.coordinates,n),e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const o of t.coordinates){a(e,o[0],n);for(let t=1;t<o.length;t++)y(e,o[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const o=t.coordinates;a(e,o[0],n);for(let t=1;t<o.length;t++)y(e,o[t],n);return e}(e,t,n)}}function a(e,t,n){const o=l(t);u(o)?p(e,o,n):d(e,o,n)}function y(e,t,n){const o=l(t);u(o)?d(e,o,n):p(e,o,n)}function p(e,t,n){for(const o of t)g(e,o,n);e.lengths.push(t.length)}function d(e,t,n){for(let o=t.length-1;o>=0;o--)g(e,t[o],n);e.lengths.push(t.length)}function g(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function m(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function h(t){if(!t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==t.type&&"FeatureCollection"!==t.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:t});const{crs:n}=t;if(!n)return;const o="string"==typeof n?n:"name"===n.type?n.properties.name:null,r=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!r.test(o))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function w(e,t={}){const n=i(e),u=[],l=new Set,f=new Set;let a,y=!1,p=Number.NEGATIVE_INFINITY,d=null,g=!1,{geometryType:h=null}=t,w=!1;for(;;){const{value:e,done:t}=n.next();if(t){const e=d&&1===d.length&&d[0]||null;if(e)for(const t of u)t.name===e&&(t.type="esriFieldTypeOID");return{fields:u,geometryType:h,hasZ:y,maxObjectId:Math.max(0,p),objectIdFieldName:e,objectIdFieldType:a,unknownFields:o(f)}}const{geometry:i,properties:b,id:P}=e;if(!i||(h||(h=r[i.type]),r[i.type]===h)){if(!y){y=c(s(i))}if(g||(g=null!=P,g&&(a=typeof P,"number"===a&&(d=Object.keys(b).filter((e=>b[e]===P))))),g&&"number"===a&&null!=P&&(p=Math.max(p,P),d.length>1?d=d.filter((e=>b[e]===P)):1===d.length&&(d=b[d[0]]===P?d:[])),!w&&b){let e=!0;for(const t in b){if(l.has(t))continue;const n=b[t];if(null==n){e=!1,f.add(t);continue}const o=m(n);"unknown"!==o?(f.delete(t),l.add(t),u.push({name:t,alias:t,type:o})):f.add(t)}w=e}}}}function b(e,o){return function(e){const t=[];for(;;){const{value:n,done:o}=e.next();if(o)return t;t.push(n)}}(function*(e,o={}){const{geometryType:i,objectIdFieldName:s}=o;for(;;){const{value:c,done:u}=e.next();if(u)return;const{geometry:l,properties:a,id:y}=c;if(l&&r[l.type]!==i)continue;const p=a||{};s&&null!=y&&!p[s]&&(p[s]=y);const d=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_1__["default"](l?f(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"],l,o):null,p);yield d}}(i(e),o))}


/***/ }),

/***/ "4xTw":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let i=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"layerView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"tileInfoView",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],i.prototype,"updating",null),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],i);var o=i;/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "6Az7":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTileContainer.js ***!
  \**************************************************************************/
/*! exports provided: BitmapTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileContainer", function() { return o; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BitmapTile.js */ "lP2y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{createTile(r){const s=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),r);return new _BitmapTile_js__WEBPACK_IMPORTED_MODULE_4__["BitmapTile"](r,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP&&super.doRender(e)}}


/***/ }),

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "A8Zi":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/viewStateUtils.js ***!
  \**************************************************************/
/*! exports provided: bboxIntersects, getBBox, getOuterSize, snapToPixel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bboxIntersects", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBBox", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOuterSize", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapToPixel", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=Math.PI/180;function n(t,n,o){const{resolution:r,size:s}=o;return t[0]=r*(Math.round(n[0]/r)+s[0]%2*.5),t[1]=r*(Math.round(n[1]/r)+s[1]%2*.5),t}function o(n,o){const r=o.rotation*t;const s=Math.abs(Math.cos(r)),u=Math.abs(Math.sin(r)),[a,c]=o.size;return n[0]=Math.round(c*u+a*s),n[1]=Math.round(c*s+a*u),n}function r(t,n,o,r){const[s,u]=n,[a,c]=r,h=.5*o;return t[0]=s-h*a,t[1]=u-h*c,t[2]=s+h*a,t[3]=u+h*c,t}function s(t,n){const[o,r,s,u]=t,[a,c,h,i]=n;return!(o>h||s<a||r>i||u<c)}


/***/ }),

/***/ "ACSY":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/ProjectParameters.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.tasks.support.ProjectParameters");let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}get outSR(){return a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference}set outSR(r){a.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=r}toJSON(){const r=this.geometries.map((function(r){return r.toJSON()})),t=this.geometries[0],e={};return e.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),e.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),e.geometries=JSON.stringify({geometryType:Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_10__["getJsonType"])(t),geometries:r}),this.transformation&&(e.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(e.transformForward=this.transformForward),e}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"geometries",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"outSR"}}})],n.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1}})],n.prototype,"outSR",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"transformation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],n.prototype,"transformForward",void 0),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.ProjectParameters")],n);var p=n;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "AfLA":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/heatmapUtils.js ***!
  \*********************************************************************/
/*! exports provided: calculateHeatmapIntensityInfo, calculateHeatmapIntensityInfoReaders, createHeatmapImageData, createKernel, createValueFunction, createValueFunctionCursor, drawHeatmap, generateGradient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfo", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateHeatmapIntensityInfoReaders", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeatmapImageData", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createKernel", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunction", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createValueFunctionCursor", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawHeatmap", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateGradient", function() { return r; });
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/global.js */ "3r0u");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=(()=>{if(!("document"in _core_global_js__WEBPACK_IMPORTED_MODULE_0__["default"]))return()=>null;const e=document.createElement("canvas"),r=e.getContext("2d");return e.height=512,e.width=1,t=>{r.clearRect(0,0,1,e.height);const n=r.createLinearGradient(0,0,0,e.height);for(const{ratio:e,color:r}of t.colorStops)n.addColorStop(Math.max(e,.001),`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${r[3]})`);return r.fillStyle=n,r.fillRect(0,0,1,e.height),r.getImageData(0,0,1,e.height).data}})();function n(t,e,r,n){const{blurRadius:o,fieldOffset:a,field:f}=e,u=new Float64Array(r*n),l=i(o),s=Math.round(3*o);let h,m=Number.NEGATIVE_INFINITY;const d=c(f,a);for(const{geometry:e,attributes:o}of t){const t=e.x-s,a=e.y-s,f=Math.max(0,t),i=Math.max(0,a),c=Math.min(n,e.y+s),g=Math.min(r,e.x+s),y=+d(o);for(let e=i;e<c;e++){const n=l[e-a];for(let o=f;o<g;o++){const a=l[o-t];h=u[e*r+o]+=n*a*y,h>m&&(m=h)}}}return{matrix:u.buffer,max:m}}function o(t,e,r,n){const{blurRadius:o,fieldOffset:a,field:f}=e,c=new Float64Array(r*n),l=i(o),s=Math.round(3*o);let h,m=Number.NEGATIVE_INFINITY;const d=u(f,a),g=new Set;for(const e of t){const t=e.getCursor();for(;t.next();){const e=t.getObjectId();if(g.has(e))continue;g.add(e);const o=t.readLegacyPointGeometry(),a=+d(t),f=o.x-s,i=o.y-s,u=Math.max(0,f),y=Math.max(0,i),b=Math.min(n,o.y+s),x=Math.min(r,o.x+s);for(let t=y;t<b;t++){const e=l[t-i];for(let n=u;n<x;n++){const o=l[n-f];h=c[t*r+n]+=e*o*a,h>m&&(m=h)}}}}return{matrix:c.buffer,max:m}}function a(t,e,r,n,o,a){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);const i=t.getImageData(0,0,e,e);r&&n&&i.data.set(new Uint8ClampedArray(f(e,r,n,o,a))),t.putImageData(i,0,0)}function f(t,r,n,o,a){const f=new Uint32Array(t*t),i="buffer"in r?r:new Float64Array(r),c="buffer"in n?new Uint32Array(n.buffer):new Uint32Array(new Uint8Array(n).buffer),u=c.length/(a-o);for(let t=0;t<i.length;t++){const r=i[t],n=Math.floor((r-o)*u);f[t]=c[Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(n,0,c.length-1)]}return f.buffer}function i(t){const e=Math.round(3*t),r=2*t*t,n=new Float64Array(2*e+1);for(let o=0;o<=n.length;o++)n[o]=Math.exp(-Math.pow(o-e,2)/r)/Math.sqrt(2*Math.PI)*(t/2);return n}function c(t,e){return"function"==typeof t?t:t?"string"==typeof e?e=>-1*+e[t]:r=>+r[t]+e:()=>1}function u(t,e){return null!=t?"string"==typeof e?e=>-1*+e.readAttribute(t):r=>+r.readAttribute(t)+e:t=>1}


/***/ }),

/***/ "BGvB":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/kmlUtils.js ***!
  \**************************************************************/
/*! exports provided: computeExtent, fetchService, getGraphics, parseKML, sublayersFromJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeExtent", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchService", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGraphics", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseKML", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sublayersFromJSON", function() { return S; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../tasks/support/FeatureSet.js */ "8prj");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(o){const t=o.folders||[],r=t.slice(),s=new Map,n=new Map,i=new Map,a=new Map,f=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:a};(o.featureCollection&&o.featureCollection.layers||[]).forEach((o=>{const t=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(o);t.featureSet.features=[];const r=o.featureSet.geometryType;s.set(r,t);const f=o.layerDefinition.objectIdField;"esriGeometryPoint"===r?G(n,f,o.featureSet.features):"esriGeometryPolyline"===r?G(i,f,o.featureSet.features):"esriGeometryPolygon"===r&&G(a,f,o.featureSet.features)})),o.groundOverlays&&o.groundOverlays.forEach((e=>{f.set(e.id,e)})),t.forEach((e=>{e.networkLinkIds.forEach((t=>{const s=function(e,o,t){const r=function(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}(e,t);r&&(r.parentFolderId=o,r.networkLink=r);return r}(t,e.id,o.networkLinks);s&&r.push(s)}))})),r.forEach((o=>{o.featureInfos&&(o.points=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPoint")),o.polylines=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolyline")),o.polygons=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s.get("esriGeometryPolygon")),o.mapImages=[],o.featureInfos.map((e=>{switch(e.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[e.type].get(e.id);t&&o[c[e.type]].featureSet.features.push(t);break}case"GroundOverlay":{const t=f.get(e.id);t&&o.mapImages.push(t);break}}})),o.fullExtent=P([o]))}));const u=P(r);return{folders:t,sublayers:r,extent:u}}function g(e,r,s,n){const f=_kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"]&&_kernel_js__WEBPACK_IMPORTED_MODULE_6__["id"].findCredential(e);e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["addQueryParameters"])(e,{token:f&&f.token});const l=_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].kmlServiceUrl;return Object(_request_js__WEBPACK_IMPORTED_MODULE_7__["default"])(l,{query:{url:e,model:"simple",folders:"",refresh:0!==s||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:n})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,a=o.folders.map((e=>e.id));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&a.indexOf(i.id)>-1&&(i.visible=-1!==r.indexOf(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else s.unshift(i)})),s}function G(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}async function h(e){const o=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(e.featureSet).features,t=e.layerDefinition,r=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"])(t.drawingInfo.renderer),s=_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromJSON(e.popupInfo),i=[];for(const e of o){const o=await r.getSymbolAsync(e);e.symbol=o,e.popupTemplate=s,e.visible=!0,i.push(e)}return i}function P(e){const o=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(),t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["create"])(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"]);for(const r of e){if(r.polygons&&r.polygons.featureSet&&r.polygons.featureSet.features)for(const e of r.polygons.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.polylines&&r.polylines.featureSet&&r.polylines.featureSet.features)for(const e of r.polylines.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.points&&r.points.featureSet&&r.points.featureSet.features)for(const e of r.points.featureSet.features)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.geometry),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o);if(r.mapImages)for(const e of r.mapImages)Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXYZ"])(o,e.extent),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithAABB"])(t,o)}return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["equals"])(t,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["NEGATIVE_INFINITY"])?null:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84}}


/***/ }),

/***/ "BMSW":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js ***!
  \***********************************************************************/
/*! exports provided: BoundsStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoundsStore", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/rbush.js */ "kB+0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d={minX:0,minY:0,maxX:0,maxY:0};class n{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_1__["r"])(9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")?s=>({minX:s[0],minY:s[1],maxX:s[2],maxY:s[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const s=new Array(this._idByBounds.size);let i=0;this._idByBounds.forEach(((d,n)=>{s[i++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(s)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((s=>this._idByBounds.has(s)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(s){const i=this._boundsById.get(s);this._boundsById.delete(s),i&&(this._idByBounds.delete(i),this._indexInvalid||this._index.remove(i))}forEachInBounds(s,i){this._loadIndex();for(const n of function(s,i){return d.minX=i[0],d.minY=i[1],d.maxX=i[2],d.maxY=i[3],s.search(d)}(this._index,s))i(this._idByBounds.get(n))}get(s){return this._boundsById.get(s)}has(s){return this._boundsById.has(s)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(s,i){if(!this._indexInvalid){const i=this._boundsById.get(s);i&&(this._index.remove(i),this._idByBounds.delete(i))}this._boundsById.set(s,i),i&&(this._idByBounds.set(i,s),this._indexInvalid||(this._boundsToLoad.push(i),this._boundsToLoad.length>5e4&&this._loadIndex()))}}


/***/ }),

/***/ "BPBZ":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quat.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return rt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return T; });
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "QhKk");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3f64.js */ "2uVf");
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quatf64.js */ "sTkM");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function x(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function A(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function I(t,s){const n=2*Math.acos(s[3]),o=Math.sin(n/2);return o>_common_js__WEBPACK_IMPORTED_MODULE_1__["E"]?(t[0]=s[0]/o,t[1]=s[1]/o,t[2]=s[2]/o):(t[0]=1,t[1]=0,t[2]=0),n}function P(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,n,o){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=n[0],p=n[1],q=n[2],j=n[3];return h=r*m+c*p+e*q+u*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>_common_js__WEBPACK_IMPORTED_MODULE_1__["E"]?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-o)*i)/M,l=Math.sin(o*i)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*j,t}function L(t){const s=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),a=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),o=Object(_common_js__WEBPACK_IMPORTED_MODULE_1__["R"])(),r=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=r*Math.sin(2*Math.PI*a),t[1]=r*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*o),t[3]=c*Math.cos(2*Math.PI*o),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["c"],G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["s"],O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["a"],R=P,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["b"],W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["d"],X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["l"],Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["e"],Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["f"],J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["n"],N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["g"],Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__["h"];function S(t,s,a){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(s,a);return n<-.999999?(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,V,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["j"])(U)<1e-6&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,$,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(U,U),A(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(1,0,0),$=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])(),at=Object(_quatf64_js__WEBPACK_IMPORTED_MODULE_4__["a"])();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=Object(_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])();var rt=Object.freeze({__proto__:null,identity:x,setAxisAngle:A,getAxisAngle:I,multiply:P,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ "DJok":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/FeatureStore2D.js ***!
  \******************************************************************************/
/*! exports provided: FeatureStore2D, featureAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureStore2D", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureAdapter", function() { return d; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/rbush.js */ "kB+0");
/* harmony import */ var _Store2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store2D.js */ "hIOP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(t){return(4294901760&t)>>>16}function i(t){return 65535&t}const d={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class u extends _Store2D_js__WEBPACK_IMPORTED_MODULE_4__["Store2D"]{constructor(t,e){super(t,e),this.featureAdapter=d,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"],this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._index=Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_3__["r"])(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)})))}get storeStatistics(){return{featureCount:0,vertexCount:0}}onTileData(e,s,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(s.addOrUpdate))return s;this._featureSetsByInstance.set(s.addOrUpdate.instance,s.addOrUpdate),this._storage=a,s.addOrUpdate._storage=a;const r=s.addOrUpdate.getCursor();for(;r.next();){const t=r.getObjectId(),s=(n=r.instance,o=r.getIndex(),n<<16|o);let i=this._objectIdToDisplayId.get(t);i||(i=a.createDisplayId(),this._objectIdToDisplayId.set(t,i),this._spatialIndexInvalid=!0),r.setDisplayId(i),a.setInstanceId(i,s),this.setComputedAttributes(a,r,i,e.scale)}var n,o;return"update"===s.type&&(this._spatialIndexInvalid=!0),this.events.emit("changed"),s}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a)}))}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=o(s),r=i(s),n=this._getFeatureSet(a);n.setIndex(r),t(n)}))}forEachInBounds(t,s){const a=this._searchIndex(t);for(const t of a){const a=this.lookupFeatureByDisplayId(t,this._storage);s(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(a))}}forEachBounds(t,e,s){this._rebuildIndex();const r=[0,0,0,0];for(const n of t){if(!n.readGeometry())continue;const t=n.getDisplayId();r[0]=this._storage.getXMin(t),r[1]=this._storage.getYMin(t),r[2]=this._storage.getXMax(t),r[3]=this._storage.getYMax(t),e(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__["fromRect"])(s,r))}}sweepFeatures(t,e,s){this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r))})),this.events.emit("changed")}sweepFeatureSets(t){this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s)}))}lookupObjectId(e,s){const a=this.lookupFeatureByDisplayId(e,s);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)?null:a.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=o(e),a=i(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}hasInstance(t){return this._featureSetsByInstance.has(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;this._index.clear();const t=[];this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e)})),this._index.load(t),this._spatialIndexInvalid=!1}_lookupFeature(t){const e=o(t),s=i(t),a=this._getFeatureSet(e);if(!a)return null;const r=a.getCursor();return r.setIndex(s),r}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}}


/***/ }),

/***/ "Dfpg":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalItemUtils.js ***!
  \*********************************************************************/
/*! exports provided: addTypeKeyword, hasTypeKeyword, removeTypeKeyword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypeKeyword", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTypeKeyword", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTypeKeyword", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,n){if(!t(e,n)){const t=e.typeKeywords;t?t.push(n):e.typeKeywords=[n]}}function t(e,t){return!!e.typeKeywords&&e.typeKeywords.indexOf(t)>-1}function n(e,t){const n=e.typeKeywords;if(n){const e=n.indexOf(t);e>-1&&n.splice(e,1)}}


/***/ }),

/***/ "Fewv":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/jsonContext.js ***!
  \*****************************************************************/
/*! exports provided: createForItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createForItem", function() { return o; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o){return{origin:"portal-item",url:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(o.itemUrl),portal:o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefault(),portalItem:o,readResourcePaths:[]}}


/***/ }),

/***/ "Fkrg":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/BitmapTileLayerView2D.js ***!
  \****************************************************************************/
/*! exports provided: BitmapTileLayerView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTileLayerView2D", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../engine/BitmapTileContainer.js */ "6Az7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=i=>{let s=class extends i{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_9__["BitmapTileContainer"](this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};


/***/ }),

/***/ "IcpP":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createFeatureEditErrorResult, createFeatureEditSuccessResult, loadGeometryEngine, loadGeometryEngineForSimplify, mixAttributes, simplify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditErrorResult", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFeatureEditSuccessResult", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngine", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGeometryEngineForSimplify", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixAttributes", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return h; });
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o{constructor(){this.code=null,this.description=null}}class l{constructor(t){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=t}}function u(t){return new l(t)}class a{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function c(t){return new a(t)}const f=new Set;function d(t,e,r,s,o=!1,l){f.clear();for(const e in s){const a=t.get(e);if(!a)continue;const c=s[e],d=m(a,c);if(d!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:c,sanitizedValue:d}}),f.add(a.name),a&&(o||a.editable)){const t=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validateFieldValue"])(a,d);if(t)return u(Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["validationErrorToString"])(t,a,d));r[a.name]=d}}for(const t of e)if(!f.has(t.name))return u(`missing required field "${t.name}"`);return null}function m(t,n){let i=n;return"string"==typeof n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isNumericField"])(t)?i=parseFloat(n):null!=n&&Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["isStringField"])(t)&&"string"!=typeof n&&(i=String(n)),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["sanitizeNullFieldValue"])(i)}let p;function h(e,n){if(!e||!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(n))return e;if("rings"in e||"paths"in e){if(!p)throw new TypeError("geometry engine not loaded");return p.simplify(n,e)}return e}async function g(){return p||(p=await Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../../../../geometry/geometryEngineJSON.js */ "AKzY")),p)}async function y(e,n){!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_0__["isValid"])(e)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await g()}


/***/ }),

/***/ "JYLa":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileIndex.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TilemapCache.js */ "llFo");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e){if(e instanceof _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_1__["TilemapCache"])this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(t,l){if(this._tilemapCache){const{level:r,row:o,col:a}=t,h=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](t);return this._tilemapCache.fetchAvailabilityUpsample(r,o,a,h,l).then((()=>(h.world=t.world,h))).catch((t=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,i,r){this._callback=r,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,i)}_forEach(e,t,l,i){0!==e&&(this._callback(t,l,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*i),this._forEach(e[1],t+1,2*l,2*i+1),this._forEach(e[2],t+1,2*l+1,2*i),this._forEach(e[3],t+1,2*l+1,2*i+1)))}_getIndexedDataKey(e){const l=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(null);let r=e;for(;0!==r.level;)r=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](r.level-1,r.row>>1,r.col>>1,r.world),l.push(r);let o,a,h=this._tilemap,s=l.pop();if(1===h)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s);for(;l.length;)if(o=l.pop(),a=(1&o.col)+((1&o.row)<<1),h){if(0===h[a]){s=null;break}if(1===h[a]){s=o;break}s=o,h=h[a]}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s)}});


/***/ }),

/***/ "LTnl":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapContainer.js ***!
  \**********************************************************************/
/*! exports provided: BitmapContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapContainer", function() { return t; });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webgl/WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t extends _webgl_WGLContainer_js__WEBPACK_IMPORTED_MODULE_2__["default"]{prepareRenderPasses(s){const t=s.registerRenderPass({name:"bitmap",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_1__["brushes"].bitmap],target:()=>this.children,drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(s),t]}}


/***/ }),

/***/ "LbAs":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/support/requestImageUtils.js ***!
  \****************************************************************/
/*! exports provided: requestImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestImage", function() { return t; });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function t(t,r){const{data:a}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t,{responseType:"image",...r});return a}


/***/ }),

/***/ "R/jG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec3f32.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const a=new Float32Array(3);return a[0]=n,a[1]=r,a[2]=t,a}function a(n,r){return new Float32Array(n,r,3)}function e(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=e(),f=o(),l=u(),_=s(),w=c();var y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:a,zeros:e,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ "Rh/S":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/optimizedFeatureQueryEngineAdapter.js ***!
  \**********************************************************************************************/
/*! exports provided: default, optimizedFeatureQueryEngineAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optimizedFeatureQueryEngineAdapter", function() { return o; });
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OptimizedFeature.js */ "k5I3");
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../centroid.js */ "2X7Z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(e,r)=>new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_0__["default"](r,e.attributes,null,e.objectId),getGeometry:t=>t.geometry,getCentroid:(t,o)=>(t.centroid||(t.centroid=Object(_centroid_js__WEBPACK_IMPORTED_MODULE_2__["getCentroidOptimizedGeometry"])(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__["default"],t.geometry,o.hasZ,o.hasM)),t.centroid)};/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "XJLX":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/portalLayers.js ***!
  \******************************************************************/
/*! exports provided: fromItem, selectLayerClassPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromItem", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLayerClassPath", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PortalItem.js */ "p+Gi");
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portalItemUtils.js */ "Dfpg");
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layers/support/lazyLayerLoader.js */ "oLSx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(e){return!e.portalItem||e.portalItem instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"]||(e={...e,portalItem:new _PortalItem_js__WEBPACK_IMPORTED_MODULE_4__["default"](e.portalItem)}),(r=e.portalItem,r.load().then(c).then(u)).then((r=>{const a={portalItem:e.portalItem,...r.properties},n=r.constructor;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(new n(a))}));var r}function c(e){switch(e.type){case"Map Service":return function(e){return function(e){return d(e.url).then((e=>e.tileInfo))}(e).then((e=>e?{className:"TileLayer"}:{className:"MapImageLayer"}))}(e);case"Feature Service":return function(e){return y(e).then((e=>{if("object"==typeof e){const r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}}))}(e);case"Feature Collection":return async function(e){await e.load();if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__["hasTypeKeyword"])(e,"Map Notes"))return{className:"MapNotesLayer"};if(Object(_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_5__["hasTypeKeyword"])(e,"Route Layer"))return{className:"RouteLayer"};if(1===f(await e.fetchData()))return{className:"FeatureLayer"};return{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return y(e).then((r=>{if("object"==typeof r){const t={};let a;if(null!=r.id?(t.layerId=r.id,a=`${e.url}/layers/${r.id}`):a=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const r={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const t of Object.keys(r))if(-1!==e.typeKeywords.indexOf(t))return{className:r[t]}}return d(a).then((e=>{let r="SceneLayer";const a={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&a[e.layerType]&&(r=a[e.layerType]),{className:r,properties:t}}))}return{className:"GroupLayer"}}))}(e);case"Image Service":return async function(e){var r,t,a;await e.load();const n=null!=(r=null==(t=e.typeKeywords)?void 0:t.map((e=>e.toLowerCase())))?r:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const o=await e.fetchData(),l=null==o?void 0:o.layerType;if("ArcGISTiledImageServiceLayer"===l)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===l)return{className:"ImageryLayer"};const s=await d(e.url);if("map"===(null==(a=s.cacheType)?void 0:a.toLowerCase()))return{className:"ImageryTileLayer"};return{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function u(e){return(0,_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_6__["layerLookupMap"][e.className])().then((r=>({constructor:r,properties:e.properties})))}function y(e){return!e.url||e.url.match(/\/\d+$/)?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])({}):e.load().then((()=>e.fetchData())).then((r=>f(r)>0?m(r):d(e.url).then(m)))}function m(r){return 1===f(r)&&{id:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(p(r))}}function p(e){const r=e.layers;if(r&&r.length)return r[0].id;const t=e.tables;return t&&t.length?t[0].id:null}function f(e){var r,t,a,n;return(null!=(r=null==e||null==(t=e.layers)?void 0:t.length)?r:0)+(null!=(a=null==e||null==(n=e.tables)?void 0:n.length)?a:0)}function d(e){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{responseType:"json",query:{f:"json"}}).then((e=>e.data))}


/***/ }),

/***/ "ZRfE":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Evented.js */ "zm0L");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BoundsStore.js */ "BMSW");
/* harmony import */ var _optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./optimizedFeatureQueryEngineAdapter.js */ "Rh/S");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e){this.geometryInfo=e,this._boundsStore=new _BoundsStore_js__WEBPACK_IMPORTED_MODULE_7__["BoundsStore"],this._featuresById=new Map,this._markedIds=new Set,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_3__["default"],this.featureAdapter=_optimizedFeatureQueryEngineAdapter_js__WEBPACK_IMPORTED_MODULE_8__["optimizedFeatureQueryEngineAdapter"]}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["NEGATIVE_INFINITY"]);return this._featuresById.forEach((t=>{const r=this._boundsStore.get(t.objectId);r&&(e[0]=Math.min(r[0],e[0]),e[1]=Math.min(r[1],e[1]),e[2]=Math.max(r[2],e[2]),e[3]=Math.max(r[3],e[3]))})),e}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,r){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_6__["fromRect"])(r,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,r)=>{this._markedIds.has(r)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(s){if(!s)return;const i=s.objectId;if(null==i)return void _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.graphics.data.FeatureStore").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("featurestore:invalid-feature","feature id is missing",{feature:s}));const d=this._featuresById.get(i);let n;if(this._markedIds.add(i),d?(s.displayId=d.displayId,n=this._boundsStore.get(i),this._boundsStore.delete(i)):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureAdd)&&this.onFeatureAdd(s),!s.geometry||!s.geometry.coords||!s.geometry.coords.length)return this._boundsStore.set(i,null),void this._featuresById.set(i,s);n=Object(_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_5__["getBoundsOptimizedGeometry"])(n||Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_4__["create"])(),s.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(i,n),this._featuresById.set(i,s)}_remove(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}});


/***/ }),

/***/ "ZaV5":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4584ab5a.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  if (el.componentOnReady) {
    await el.componentOnReady();
  }
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "cBWO":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/core/number.js ***!
  \**************************************************/
/*! exports provided: _parseInfo, format, getCustoms, parse, regexp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_parseInfo", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustoms", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexp", function() { return s; });
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string.js */ "s7YA");
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../intl/locale.js */ "IDUf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(e){e||(e=Object(_intl_locale_js__WEBPACK_IMPORTED_MODULE_1__["getLocale"])());let r=e in t;if(!r){const n=e.split("-");n.length>1&&n[0]in t&&(e=n[0],r=!0),r||(e="en")}const[o,i,s="#,##0.###"]=t[e];return{decimal:o,group:i,pattern:s}}function o(e,n){const t=r((n={...n}).locale);n.customs=t;const o=n.pattern||t.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,n,t){const r=(t=t||{}).customs.group,o=t.customs.decimal,s=n.split(";"),l=s[0];if(-1!==(n=s[e<0?1:0]||"-"+l).indexOf("%"))e*=100;else if(-1!==n.indexOf("‰"))e*=1e3;else{if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==n.indexOf("E"))throw new Error("exponential notation not supported")}const c=i,a=l.match(c);if(!a)throw new Error("unable to find a number expression in pattern: "+n);!1===t.fractional&&(t.places=0);return n.replace(c,function(e,n,t){!0===(t=t||{}).places&&(t.places=0);t.places===1/0&&(t.places=6);const r=n.split("."),o="string"==typeof t.places&&t.places.indexOf(",");let i=t.places;o?i=t.places.substring(o+1):i>=0||(i=(r[1]||[]).length);t.round<0||(e=Number(e.toFixed(Number(i))));const s=String(Math.abs(e)).split("."),l=s[1]||"";if(r[1]||t.places){o&&(t.places=t.places.substring(0,o));const e=void 0!==t.places?t.places:r[1]&&r[1].lastIndexOf("0")+1;e>l.length&&(s[1]=l.padEnd(Number(e),"0")),i<l.length&&(s[1]=l.substr(0,Number(i)))}else s[1]&&s.pop();const c=r[0].replace(",","");let a=c.indexOf("0");-1!==a&&(a=c.length-a,a>s[0].length&&(s[0]=s[0].padStart(a,"0")),-1===c.indexOf("#")&&(s[0]=s[0].substr(s[0].length-a)));let p,u,f=r[0].lastIndexOf(",");if(-1!==f){p=r[0].length-f-1;const e=r[0].substr(0,f);f=e.lastIndexOf(","),-1!==f&&(u=e.length-f-1)}const d=[];for(let e=s[0];e;){const n=e.length-p;d.push(n>0?e.substr(n):e),e=n>0?e.slice(0,n):"",u&&(p=u,u=void 0)}return s[0]=d.reverse().join(t.group||","),s.join(t.decimal||".")}(e,a[0],{decimal:o,group:r,places:t.places,round:t.round}))}(e,o,n)}const i=/[#0,]*[#0](?:\.0*#*)?/;function s(e){return l(e).regexp}function l(n){const t=r((n=n||{}).locale),o=n.pattern||t.pattern,s=t.group,l=t.decimal;let c=1;if(-1!==o.indexOf("%"))c/=100;else if(-1!==o.indexOf("‰"))c/=1e3;else if(-1!==o.indexOf("¤"))throw new Error("currency notation not supported");const u=o.split(";");1===u.length&&u.push("-"+u[0]);return{regexp:p(u,(function(t){return(t="(?:"+Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t,".")+")").replace(i,(function(e){const t={signed:!1,separator:n.strict?s:[s,""],fractional:n.fractional,decimal:l,exponent:!1},r=e.split(".");let o=n.places;1===r.length&&1!==c&&(r[1]="###"),1===r.length||0===o?t.fractional=!1:(void 0===o&&(o=n.pattern?r[1].lastIndexOf("0")+1:1/0),o&&null==n.fractional&&(t.fractional=!0),!n.places&&o<r[1].length&&(o+=","+r[1].length),t.places=o);const i=r[0].split(",");return i.length>1&&(t.groupSize=i.pop().length,i.length>1&&(t.groupSize2=i.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0);"string"!=typeof e.decimal&&(e.decimal=".");"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]);"exponent"in e||(e.exponent=[!0,!1]);"eSigned"in e||(e.eSigned=[!0,!1]);const n=a(e),t=p(e.fractional,(function(n){let t="";return n&&0!==e.places&&(t="\\"+e.decimal,e.places===1/0?t="(?:"+t+"\\d+)?":t+="\\d{"+e.places+"}"),t}),!0),r=p(e.exponent,(function(n){return n?"([eE]"+a({signed:e.eSigned})+")":""}));let o=n+t;t&&(o="(?:(?:"+o+")|(?:"+t+"))");return o+r}(t)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:l,factor:c}}function c(e,n){const t=l(n),r=new RegExp("^"+t.regexp+"$").exec(e);if(!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],t.factor*=-1}return o=o.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."),Number(o)*t.factor}function a(n){"signed"in(n=n||{})||(n.signed=[!0,!1]),"separator"in n?"groupSize"in n||(n.groupSize=3):n.separator="";return p(n.signed,(function(e){return e?"[-+]":""}),!0)+p(n.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=Object(_string_js__WEBPACK_IMPORTED_MODULE_0__["escapeRegExpString"])(t))?t="\\s":" "===t&&(t="\\s\\xa0");const r=n.groupSize,o=n.groupSize2;if(o){const e="(?:0|[1-9]\\d{0,"+(o-1)+"}(?:["+t+"]\\d{"+o+"})*["+t+"]\\d{"+r+"})";return r-o>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+t+"]\\d{"+r+"})*)"}),!0)}const p=function(e,n,t){if(!(e instanceof Array))return n(e);const r=[];for(let t=0;t<e.length;t++)r.push(n(e[t]));return u(r.join("|"),t)},u=function(e,n){return"("+(n?"?:":"")+e+")"};


/***/ }),

/***/ "dZC4":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/hydrated.js ***!
  \*************************************************************************/
/*! exports provided: hydratedAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydratedAdapter", function() { return r; });
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Point.js */ "SuVq");
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Extent.js */ "OvF4");
/* harmony import */ var _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Multipoint.js */ "V9wi");
/* harmony import */ var _Polygon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Polygon.js */ "Ehki");
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Polyline.js */ "UhwK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r={convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t));return t},exportPoint:function(n,t,o){const i=n.hasZ(t),r=n.hasM(t),s=new _Point_js__WEBPACK_IMPORTED_MODULE_0__["default"]({x:n.getPointX(t),y:n.getPointY(t),spatialReference:o});i&&(s.z=n.getPointZ(t));r&&(s.m=n.getPointM(t));return s.cache._geVersion=t,s},exportPolygon:function(e,n,t){const i=new _Polygon_js__WEBPACK_IMPORTED_MODULE_3__["default"]({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return i.cache._geVersion=n,i},exportPolyline:function(e,n,t){const o=new _Polyline_js__WEBPACK_IMPORTED_MODULE_4__["default"]({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return o.cache._geVersion=n,o},exportMultipoint:function(e,n,o){const i=new _Multipoint_js__WEBPACK_IMPORTED_MODULE_2__["default"]({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:o});return i.cache._geVersion=n,i},exportExtent:function(e,t,o){const i=e.hasZ(t),r=e.hasM(t),s=new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]({xmin:e.getXMin(t),ymin:e.getYMin(t),xmax:e.getXMax(t),ymax:e.getYMax(t),spatialReference:o});if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s.cache._geVersion=t,s}};


/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "hIOP":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/Store2D.js ***!
  \***********************************************************************/
/*! exports provided: Store2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store2D", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../arcade/callExpressionWithCursor.js */ "xMVW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=__webpack_require__.e(/*! import() | layers-support-labelFormatUtils-js */ "layers-support-labelFormatUtils-js").then(__webpack_require__.bind(null, /*! ../../../../layers/support/labelFormatUtils.js */ "zKxS"));class n{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:s.getBitset(s.createBitset())}}async updateSchema(r,o){const c=Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["diff"])(this._schema,o);if(this._schema=o,!o||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(c)||!Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasDiff"])(c,"attributes"))return;Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug")&&console.debug("Applying Update - Store:",c),this._bitsets.computed.clear(),r.targets[o.name]=!0;const n=o.attributes,p=[],u=[];for(const e in n){const s=n[e];switch(s.type){case"field":break;case"expression":p.push(this._createArcadeComputedField(s));break;case"label-expression":p.push(this._createLabelArcadeComputedField(s));break;case"statistic":u.push(s)}}this._computedFields=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(p),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&e.expression.referencesScale())),this._statisticFields=u}setComputedAttributes(e,s,t,r){const i=this._bitsets.computed;if(!this._canCacheExpressionValue||!i.has(t)){i.set(t);for(const i of this._computedFields){const a=this._evaluateField(s,i,r);switch(i.resultType){case"numeric":e.setComputedNumericAtIndex(t,i.fieldIndex,a);break;case"string":e.setComputedStringAtIndex(t,i.fieldIndex,a)}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__["createRendererExpression"])(e.valueExpression,s,t)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fields,{createLabelFunction:r}=await c,i=await r(e.label,t,s);return{...e,builder:i}}_evaluateField(e,s,t){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t)||""}case"expression":{const{expression:r}=s;return Object(_arcade_callExpressionWithCursor_js__WEBPACK_IMPORTED_MODULE_5__["default"])(r,e,{$view:{scale:t}})}}}}


/***/ }),

/***/ "iUxC":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/ImageryBitmapSource.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return this.pixelBlock?this.pixelBlock.width:0}get height(){return this.pixelBlock?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(!t)return;const i=this.filter({pixelBlock:t}),l=i.pixelBlock.getAsRGBA(),h=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);h.data.set(l),e.putImageData(h,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}});


/***/ }),

/***/ "kGdt":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/webgl/ProgramCache.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./programUtils.js */ "1F90");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(r){this._programCacheByTemplate=new Map,this._rctx=r}dispose(){this._programCacheByTemplate.forEach((r=>{r.programs.forEach((r=>{r.dispose()}))})),this._programCacheByTemplate=null}getProgram(t,a){return this._programCacheByTemplate.has(t)||this.addProgramTemplate(t,(a=>Object(_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(this._rctx,t,a))),this.getProgramTemplateInstance(t,a)}addProgramTemplate(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})}getProgramTemplateInstance(r,t){const a=this._programCacheByTemplate.get(r);if(a){const r=t?JSON.stringify(t):"default";if(!a.programs.has(r)){const e=a.constructor(t);a.programs.set(r,e)}return a.programs.get(r)}return null}});


/***/ }),

/***/ "l5Tg":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/geometryEngineJSON.js ***!
  \****************************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, K, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return V; });
/* harmony import */ var _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryEngineBase.js */ "9gar");
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/geometryAdapters/json.js */ "1kEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(n){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].extendedSpatialReferenceInfo(n)}function t(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].clip(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function i(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].cut(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function s(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].contains(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function u(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].crosses(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function o(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].distance(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function a(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].equals(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function c(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersects(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function f(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].touches(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function l(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].within(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function p(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].disjoint(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function g(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].overlaps(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function d(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].relate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function m(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].isSimple(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function h(r,t){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].simplify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t)}function y(r,t,i=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].convexHull(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function x(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].difference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function w(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].symmetricDifference(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function A(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].intersect(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function E(r,t,i=null){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].union(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function j(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].offset(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function v(r,t,i,s,u=!1){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].buffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function z(r,t,i,s,u,o,a){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicBuffer(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u,o,a)}function I(r,t,i,s=!0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestCoordinate(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function V(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertex(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function D(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].nearestVertices(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function H(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const s=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].rotate(r,t,i);return s.spatialReference=n,s}function R(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipHorizontal(r,t);return i.spatialReference=n,i}function b(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=_geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].flipVertical(r,t);return i.spatialReference=n,i}function B(r,t,i,s,u){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].generalize(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function L(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].densify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function S(r,t,i,s,u=0){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicDensify(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s,u)}function _(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function q(r,t,i){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].planarLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i)}function C(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicArea(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}function k(r,t,i,s){return _geometryEngineBase_js__WEBPACK_IMPORTED_MODULE_0__["a"].geodesicLength(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_1__["jsonAdapter"],r,t,i,s)}var F=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:s,crosses:u,distance:o,equals:a,intersects:c,touches:f,within:l,disjoint:p,overlaps:g,relate:d,isSimple:m,simplify:h,convexHull:y,difference:x,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:v,geodesicBuffer:z,nearestCoordinate:I,nearestVertex:V,nearestVertices:D,rotate:H,flipHorizontal:R,flipVertical:b,generalize:B,densify:L,geodesicDensify:S,planarArea:_,planarLength:q,geodesicArea:C,geodesicLength:k});


/***/ }),

/***/ "lP2y":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/BitmapTile.js ***!
  \*****************************************************************/
/*! exports provided: BitmapTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapTile", function() { return s; });
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/* harmony import */ var _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bitmap.js */ "xzrc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__["TiledDisplayObject"]{constructor(e,s,r,i=null){super(e,s,r,r),this.bitmap=new _Bitmap_js__WEBPACK_IMPORTED_MODULE_1__["Bitmap"](i),this.bitmap.coordScale=r,this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}setTransform(e,t){super.setTransform(e,t),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}


/***/ }),

/***/ "oLSx":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js ***!
  \*********************************************************************/
/*! exports provided: layerLookupMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layerLookupMap", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a={BingMapsLayer:async()=>(await Promise.all(/*! import() | BingMapsLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("BingMapsLayer-js")]).then(__webpack_require__.bind(null, /*! ../BingMapsLayer.js */ "CR/Q"))).default,BuildingSceneLayer:async()=>(await Promise.all(/*! import() | BuildingSceneLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~BuildingSceneLayer-js~SceneLayer-js"), __webpack_require__.e("BuildingSceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../BuildingSceneLayer.js */ "TWTt"))).default,CSVLayer:async()=>(await Promise.all(/*! import() | CSVLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("CSVLayer-js")]).then(__webpack_require__.bind(null, /*! ../CSVLayer.js */ "Kn0e"))).default,ElevationLayer:async()=>(await Promise.all(/*! import() | ElevationLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("ElevationLayer-js")]).then(__webpack_require__.bind(null, /*! ../ElevationLayer.js */ "8g7C"))).default,FeatureLayer:async()=>(await Promise.all(/*! import() | FeatureLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("FeatureLayer-js")]).then(__webpack_require__.bind(null, /*! ../FeatureLayer.js */ "W9Wu"))).default,GroupLayer:async()=>(await Promise.all(/*! import() | GroupLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("GroupLayer-js")]).then(__webpack_require__.bind(null, /*! ../GroupLayer.js */ "VPx4"))).default,GeoRSSLayer:async()=>(await Promise.all(/*! import() | GeoRSSLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("GeoRSSLayer-js")]).then(__webpack_require__.bind(null, /*! ../GeoRSSLayer.js */ "AP+b"))).default,ImageryLayer:async()=>(await Promise.all(/*! import() | ImageryLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("ImageryLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryLayer.js */ "/GVf"))).default,ImageryTileLayer:async()=>(await Promise.all(/*! import() | ImageryTileLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-ImageryLayerView2D-js~layers-ImageryTileLayerView~fc91ae2a"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js~layers-support-RasterWorker-js"), __webpack_require__.e("default~ImageryLayer-js~ImageryTileLayer-js"), __webpack_require__.e("default~ImageryTileLayer-js~layers-ImageryTileLayerView2D-js"), __webpack_require__.e("ImageryTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../ImageryTileLayer.js */ "mRf7"))).default,IntegratedMeshLayer:async()=>(await Promise.all(/*! import() | IntegratedMeshLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("IntegratedMeshLayer-js")]).then(__webpack_require__.bind(null, /*! ../IntegratedMeshLayer.js */ "yvy3"))).default,KMLLayer:async()=>(await Promise.all(/*! import() | KMLLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("common"), __webpack_require__.e("KMLLayer-js")]).then(__webpack_require__.bind(null, /*! ../KMLLayer.js */ "9fxc"))).default,MapImageLayer:async()=>(await Promise.all(/*! import() | MapImageLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("default~MapImageLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("MapImageLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapImageLayer.js */ "U/i9"))).default,MapNotesLayer:async()=>(await Promise.all(/*! import() | MapNotesLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("MapNotesLayer-js")]).then(__webpack_require__.bind(null, /*! ../MapNotesLayer.js */ "Wvof"))).default,OpenStreetMapLayer:async()=>(await Promise.all(/*! import() | OpenStreetMapLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js"), __webpack_require__.e("OpenStreetMapLayer-js")]).then(__webpack_require__.bind(null, /*! ../OpenStreetMapLayer.js */ "jFi3"))).default,PointCloudLayer:async()=>(await Promise.all(/*! import() | PointCloudLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~PointCloudLayer-js~views-3d-layers-PointCloudWorker-js"), __webpack_require__.e("PointCloudLayer-js")]).then(__webpack_require__.bind(null, /*! ../PointCloudLayer.js */ "RLtZ"))).default,RouteLayer:async()=>(await Promise.all(/*! import() | RouteLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("RouteLayer-js")]).then(__webpack_require__.bind(null, /*! ../RouteLayer.js */ "soW6"))).default,SceneLayer:async()=>(await Promise.all(/*! import() | SceneLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("default~BuildingSceneLayer-js~IntegratedMeshLayer-js~PointCloudLayer-js~SceneLayer-js"), __webpack_require__.e("default~BuildingSceneLayer-js~SceneLayer-js"), __webpack_require__.e("SceneLayer-js")]).then(__webpack_require__.bind(null, /*! ../SceneLayer.js */ "0yFX"))).default,StreamLayer:async()=>(await Promise.all(/*! import() | StreamLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("StreamLayer-js")]).then(__webpack_require__.bind(null, /*! ../StreamLayer.js */ "u6iX"))).default,TileLayer:async()=>(await Promise.all(/*! import() | TileLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~MapImageLayer-js~TileLayer-js~layers-MapImageLayer-js"), __webpack_require__.e("common"), __webpack_require__.e("TileLayer-js")]).then(__webpack_require__.bind(null, /*! ../TileLayer.js */ "JlDE"))).default,UnknownLayer:async()=>(await __webpack_require__.e(/*! import() | UnknownLayer-js */ "UnknownLayer-js").then(__webpack_require__.bind(null, /*! ../UnknownLayer.js */ "qcqe"))).default,UnsupportedLayer:async()=>(await __webpack_require__.e(/*! import() | UnsupportedLayer-js */ "UnsupportedLayer-js").then(__webpack_require__.bind(null, /*! ../UnsupportedLayer.js */ "GN2T"))).default,VectorTileLayer:async()=>(await Promise.all(/*! import() | VectorTileLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"), __webpack_require__.e("default~VectorTileLayer-js~layers-VectorTileLayerView2D-js~views-2d-engine-vectorTiles-WorkerTileHandler-js"), __webpack_require__.e("common"), __webpack_require__.e("VectorTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../VectorTileLayer.js */ "FzwJ"))).default,WebTileLayer:async()=>(await Promise.all(/*! import() | WebTileLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js")]).then(__webpack_require__.bind(null, /*! ../WebTileLayer.js */ "ncPp"))).default,WMSLayer:async()=>(await Promise.all(/*! import() | WMSLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~WMSLayer-js~layers-WMSLayerView2D-js"), __webpack_require__.e("WMSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMSLayer.js */ "h2Da"))).default,WMTSLayer:async()=>(await Promise.all(/*! import() | WMTSLayer-js */[__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~OpenStreetMapLayer-js~WMTSLayer-js~WebTileLayer-js"), __webpack_require__.e("WMTSLayer-js")]).then(__webpack_require__.bind(null, /*! ../WMTSLayer.js */ "sDlQ"))).default};


/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "sTkM":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function n(e,r,n,t){return[e,r,n,t]}function t(e,r){return new Float64Array(e,r,4)}const a=[0,0,0,1];var o=Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t,IDENTITY:a});


/***/ }),

/***/ "tIWS":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js ***!
  \************************************************************************/
/*! exports provided: ArcGISCachedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcGISCachedService", function() { return a; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../support/serviceTileInfoProperty.js */ "q2iW");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/TilemapCache.js */ "llFo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=a=>{let l=class extends a{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}readMinScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}readMaxScale(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_13__["TilemapCache"]({layer:this}):null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service","minScale")],l.prototype,"readMinScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service","maxScale")],l.prototype,"readMaxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_10__["default"]})],l.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["version"]})],l.prototype,"supportsBlankTile",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_12__["serviceTileInfoProperty"])],l.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"tilemapCache",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("service","tilemapCache",["capabilities"])],l.prototype,"readTilemapCache",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"version",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISCachedService")],l),l};


/***/ }),

/***/ "u3Ia":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/rest/utils.js ***!
  \*************************************************/
/*! exports provided: asValidOptions, encode, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asValidOptions", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encode", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return e; });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(t,n){let e={query:t};return n&&(e={...n,...e}),e}function e(n){return"string"==typeof n?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__["urlToObject"])(n):n}function r(t,n,e){const o={};for(const i in t){if("declaredClass"===i)continue;const f=t[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){o[i]=[];for(let t=0;t<f.length;t++)o[i][t]=r(f[t])}else if("object"==typeof f)if(f.toJSON){const t=f.toJSON(e&&e[i]);o[i]=n?t:JSON.stringify(t)}else o[i]=n?f:JSON.stringify(f);else o[i]=f}return o}


/***/ }),

/***/ "ukaK":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/BaseProcessor.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/HandleOwner.js */ "kJYu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let s=class extends _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_9__["HandleOwner"]{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],s.prototype,"supportsTileUpdates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"remoteClient",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"service",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["tileStore.tileScheme.spatialReference"]})],s.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],s.prototype,"tileStore",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.processors.BaseProcessor")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "vbiG":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/support/ExportStrategy.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../viewStateUtils.js */ "A8Zi");
/* harmony import */ var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../engine/Bitmap.js */ "xzrc");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__["create"])(),x=[0,0],y=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_15__["default"](0,0,0,0),j=2048,v=2048,_=!1,S=!1,R=!1;let M=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(t){super(t),this._imagePromise=null,this.hidpi=R,this.imageMaxWidth=j,this.imageMaxHeight=v,this.imageRotationSupported=_,this.imageNormalizationSupported=S,this.update=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["debounce"])((async(t,e)=>{const o=t.state,i=Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_11__["getInfo"])(o.spatialReference),r=this.hidpi?t.pixelRatio:1;if(!t.stationary||this.destroyed)return;this.imageRotationSupported?(x[0]=o.size[0],x[1]=o.size[1]):Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getOuterSize"])(x,o);const s=Math.floor(x[0]*r)>this.imageMaxWidth||Math.floor(x[1]*r)>this.imageMaxHeight,a=i&&(o.extent.xmin<i.valid[0]||o.extent.xmax>i.valid[1]),n=!this.imageNormalizationSupported&&a,m=!s&&!n,l=this.imageRotationSupported?o.rotation:0;if(m)this._imagePromise=this._singleExport(o,x,l,r,e);else{let t=Math.min(this.imageMaxWidth,this.imageMaxHeight);n&&(t=Math.min(o.worldScreenWidth,t)),this._imagePromise=this._tiledExport(o,t,l,r,e)}return this._imagePromise.then((async t=>{this._imagePromise=null,await Promise.all(t.map((t=>(this.container.addChild(t),t.fadeIn()))));for(const e of this.container.children)t.includes(e)||e.fadeOut().then((()=>{this.container.removeChild(e)}))})).catch((t=>{throw this._imagePromise=null,t}))}),5e3)}destroy(){}get updating(){return null!==this._imagePromise}updateExports(t){for(const e of this.container.children){if(!e.visible||!e.stage)return;t(e)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(e.invalidateTexture(),e.requestRender())}}_export(t,e,o,i,s,a){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])().then((()=>this.fetchSource(t,Math.floor(e*s),Math.floor(o*s),{rotation:i,pixelRatio:s,signal:a}))).then((o=>{const r=new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_18__["Bitmap"](o);return r.x=t.xmin,r.y=t.ymax,r.resolution=t.width/e,r.rotation=i,r.pixelRatio=s,r}))}_singleExport(t,e,o,i,r){Object(_viewStateUtils_js__WEBPACK_IMPORTED_MODULE_17__["getBBox"])(f,t.center,t.resolution,e);const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](f[0],f[1],f[2],f[3],t.spatialReference);return this._export(s,e[0],e[1],o,i,r).then((t=>[t]))}_tiledExport(t,e,o,i,r){const a=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"].create({size:e,spatialReference:t.spatialReference,scales:[t.scale]}),p=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_16__["default"](a),m=p.getTileCoverage(t);if(!m)return null;const h=[];return m.forEach(((s,a,m,l)=>{y.set(s,a,m,l),p.getTileBounds(f,y);const c=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"](f[0],f[1],f[2],f[3],t.spatialReference);h.push(this._export(c,e,e,o,i,r))})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(h)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"_imagePromise",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"fetchSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"hidpi",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"imageMaxWidth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"imageMaxHeight",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"imageRotationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"imageNormalizationSupported",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],M.prototype,"requestUpdate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["_imagePromise"]})],M.prototype,"updating",null),M=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.support.ExportStrategy")],M);var w=M;/* harmony default export */ __webpack_exports__["default"] = (w);


/***/ }),

/***/ "xMVW":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,a,t){r.referencesGeometry();const n=a.readArcadeFeature();try{return r.evaluate({...t,$feature:n})}catch(r){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",r),null}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "xzrc":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Bitmap.js ***!
  \*************************************************************/
/*! exports provided: Bitmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bitmap", function() { return c; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ImageryBitmapSource.js */ "iUxC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d(t,e,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return e&&i&&(s.width=e,s.height=i),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t,s)}class c extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["DisplayObject"]{constructor(t=null,e=!0){super(),this.requestRenderOnSourceChangedEnabled=e,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])()},this.source=t,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(t){this._height=t}get source(){return this._source}set source(t){this._source=t,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(t){this._width=t}beforeRender(t){super.beforeRender(t),this.updateTexture(t)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}setTransform(h){const o=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.transforms.dvs),[u,a]=h.toScreenNoRotation([0,0],this.x,this.y),d=this.resolution/this.pixelRatio/h.resolution,c=d*this.width,l=d*this.height,x=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(u,a)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c/2,l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(o,o,-x),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(-c/2,-l/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_3__["f"])(c,l)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,h.displayViewMat3,o)}setSamplingProfile(t){this._texture&&(t.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(t.samplingMode))}bind({context:t},e){this._texture&&t.bindTexture(this._texture,e)}updateTexture({context:t}){var e;if(!this.stage)return null==(e=this._texture)||e.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=d(t,this.sourceWidth,this.sourceHeight):this._texture=d(t));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function(t){return t&&"render"in t}(i))if(i instanceof _ImageryBitmapSource_js__WEBPACK_IMPORTED_MODULE_9__["default"]){const t=i.getRenderedRasterPixels();this._texture.setData(t.renderedRasterPixels)}else this._texture.setData(function(t){const e=document.createElement("canvas");return e.width=t.width,e.height=t.height,t.render(e.getContext("2d")),e}(i));else(function(t){return t&&!("render"in t)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map