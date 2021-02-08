(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-data-FeatureFilter-js~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~1a1c8721"],{

/***/ "1Rg/":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/spatialQuerySupport.js ***!
  \*****************************************************************/
/*! exports provided: Q, a, b, c, d, e, f, g, h, i, j, n, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return te; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return Z; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/support/spatialReferenceUtils.js */ "f4Nx");
/* harmony import */ var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/support/contains.js */ "IXLn");
/* harmony import */ var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../geometry/support/intersects.js */ "PNY3");
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../geometry/support/extentUtils.js */ "+NQI");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/unitUtils.js */ "gEht");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layers/graphics/OptimizedGeometry.js */ "gVKr");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../layers/graphics/centroid.js */ "2X7Z");
/* harmony import */ var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../layers/graphics/data/projectionSupport.js */ "HsO1");
/* harmony import */ var _layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../layers/graphics/contains.js */ "Uz7T");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const E=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),N=Object.freeze({}),_=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],b=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],x=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],J={esriGeometryPoint:_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"],esriGeometryPolyline:_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPolyline"],esriGeometryPolygon:_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPolygon"],esriGeometryMultipoint:_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToMultipoint"]};function Z(e,t,r,i=e.hasZ,s=e.hasM){const n=e.hasZ&&i,o=e.hasM&&s;if(r){const a=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,s);return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"])(a,n,o)}return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"])(t,n,o)}function z(e,t,r){return"esriGeometryPolygon"===e.geometryType&&t&&(t.centroid||t.geometry)?(t.centroid||(t.centroid=Object(_layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_13__["getCentroidOptimizedGeometry"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],t.geometry,e.hasZ,e.hasM)),Z(e,t.centroid,r)):null}function B(e,t,r,i,s,n,o=t,a=r){const l=t&&o,p=r&&a,u=i?"coords"in i?i:i.geometry:null;if(!u)return null;if(s){let i=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["generalizeOptimizedGeometry"])(b,u,t,r,e,s,o,a);return n&&(i=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x,i,l,p,e,n)),J[e](i,l,p)}if(n){const i=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x,u,t,r,e,n,o,a);return J[e](i,l,p)}return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["removeZMValues"])(_,u,t,r,o,a),J[e](_,l,p)}async function T(e,t,r){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:o}=e;if(i)for(let e=0;e<i.length;e++)i[e]=i[e].trim();if(s)for(let e=0;e<s.length;e++)s[e]=s[e].trim();if(n)for(let e=0;e<n.length;e++)n[e]=n[e].trim();if(o)for(let e=0;e<o.length;e++)o[e].onStatisticField&&(o[e].onStatisticField=o[e].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),W(e,t,r)}async function D(e,t,r){return W(e,t,r)}async function W(t,r,i){if(!t)return null;let{where:a}=t;if(t.where=a=a&&a.trim(),(!a||/^1 *= *1$/.test(a)||r&&r===a)&&(t.where=null),!t.geometry)return t;let l=await async function(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const a=t.spatialReference,l=i?E.fromJSON(i):Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_9__["getUnitString"])(a),p=a&&(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isGeographic"])(a)||Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isWebMercator"])(a))?t:await Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(a,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"]).then((()=>Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(t,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"])));return(await X())(p.spatialReference,p,r,l)}(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;l=Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_7__["getGeometryExtent"])(l),l.spatialReference=e}t.geometry=l,await Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(l.spatialReference,i);const p=(await Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__["normalizeCentralMeridian"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"])(l)))[0];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(p))throw N;const u=p.toJSON(),f=await Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(u,u.spatialReference,i);if(!f)throw N;return f.spatialReference=i,t.geometry=f,t}function k(e){return e&&A in e?JSON.parse(JSON.stringify(e,K)):e}const A="_geVersion",K=(e,t)=>e!==A?t:void 0,Q={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},V={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},$={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},H={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function L(){return Promise.all(/*! import() | geometry-geometryEngineJSON-js */[__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null, /*! ../geometry/geometryEngineJSON.js */ "AKzY"))}function X(){return L().then((e=>e.geodesicBuffer))}function Y(e,t,r,s,n){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertFromPolygon"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],t,!1,!1);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])((t=>Object(_layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__["polygonContainsPoint"])(e,!1,!1,t)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(t)&&"esriGeometryMultipoint"===r){const r=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertFromPolygon"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"],t,!1,!1);if("esriSpatialRelContains"===e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])((e=>Object(_layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__["polygonContainsMultipoint"])(r,!1,!1,e,s,n)))}if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__["extentContainsPoint"])(t,B(r,s,n,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])((e=>Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__["extentContainsMultipoint"])(t,B(r,s,n,e))));if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t)&&"esriSpatialRelIntersects"===e){const e=Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_6__["getExtentIntersector"])(r);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])((i=>e(t,B(r,s,n,i))))}return L().then((i=>{const o=i[Q[e]].bind(null,t.spatialReference,t);return e=>o(B(r,s,n,e))}))}async function ee(e,t,i){const{spatialRel:s,geometry:n}=e;if(n){if(!0!==V[s])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(n.spatialReference)&&Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(i)){if(!function(e){return!0===$[Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["getJsonType"])(e)]}(n))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===H[e]}(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});if(e.outSR)return Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function te(e){if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(e))return!0;if(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}


/***/ }),

/***/ "QmHG":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js ***!
  \*********************************************************************/
/*! exports provided: NEGATIVE_INFINITY, POSITIVE_INFINITY, ZERO, allFinite, center, contains, containsPoint, containsPointWithMargin, create, depth, diameter, empty, equals, expandWithAABB, expandWithBuffer, expandWithNestedArray, expandWithOffset, expandWithRect, expandWithVec3, fromExtent, fromMinMax, fromRect, fromValues, getMax, getMin, height, intersects, intersectsClippingArea, is, isPoint, maximumDimension, offset, scale, set, setMax, setMin, size, toExtent, toRect, width, wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEGATIVE_INFINITY", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITIVE_INFINITY", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allFinite", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPoint", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsPointWithMargin", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depth", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diameter", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithAABB", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithBuffer", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithNestedArray", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithOffset", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithRect", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandWithVec3", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromExtent", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromMinMax", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRect", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromValues", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMax", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMin", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "height", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersects", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsClippingArea", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPoint", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumDimension", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMax", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMin", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toExtent", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRect", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "width", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return k; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Extent.js */ "OvF4");
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aaBoundingRect.js */ "kYAx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(n=D){return[n[0],n[1],n[2],n[3],n[4],n[5]]}function a(n,t,r,a,u,e,m=i()){return m[0]=n,m[1]=t,m[2]=r,m[3]=a,m[4]=u,m[5]=e,m}function u(n,t=i()){return t[0]=n.xmin,t[1]=n.ymin,t[2]=n.zmin,t[3]=n.xmax,t[4]=n.ymax,t[5]=n.zmax,t}function e(n,r){const i=isFinite(n[2])||isFinite(n[5]);return new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"](i?{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],zmin:n[2],zmax:n[5],spatialReference:r}:{xmin:n[0],xmax:n[3],ymin:n[1],ymax:n[4],spatialReference:r})}function m(n,t,r=i()){return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r}function o(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[3]),n[4]=Math.max(n[4],t[4]),n[5]=Math.max(n[5],t[5])}function f(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[3]=Math.max(n[3],t[2]),n[4]=Math.max(n[4],t[3])}function h(n,t){n[0]=Math.min(n[0],t[0]),n[1]=Math.min(n[1],t[1]),n[2]=Math.min(n[2],t[2]),n[3]=Math.max(n[3],t[0]),n[4]=Math.max(n[4],t[1]),n[5]=Math.max(n[5],t[2])}function c(n,t,r=0,i=t.length/3){let a=n[0],u=n[1],e=n[2],m=n[3],o=n[4],f=n[5];for(let n=0;n<i;n++)a=Math.min(a,t[r+3*n]),u=Math.min(u,t[r+3*n+1]),e=Math.min(e,t[r+3*n+2]),m=Math.max(m,t[r+3*n]),o=Math.max(o,t[r+3*n+1]),f=Math.max(f,t[r+3*n+2]);n[0]=a,n[1]=u,n[2]=e,n[3]=m,n[4]=o,n[5]=f}function M(n,t,r,i){n[0]=Math.min(n[0],n[0]+t),n[3]=Math.max(n[3],n[3]+t),n[1]=Math.min(n[1],n[1]+r),n[4]=Math.max(n[4],n[4]+r),n[2]=Math.min(n[2],n[2]+i),n[5]=Math.max(n[5],n[5]+i)}function x(n,t,r){const i=t.length;let a=n[0],u=n[1],e=n[2],m=n[3],o=n[4],f=n[5];if(r)for(let n=0;n<i;n++){const r=t[n];a=Math.min(a,r[0]),u=Math.min(u,r[1]),e=Math.min(e,r[2]),m=Math.max(m,r[0]),o=Math.max(o,r[1]),f=Math.max(f,r[2])}else for(let n=0;n<i;n++){const r=t[n];a=Math.min(a,r[0]),u=Math.min(u,r[1]),m=Math.max(m,r[0]),o=Math.max(o,r[1])}n[0]=a,n[1]=u,n[2]=e,n[3]=m,n[4]=o,n[5]=f}function s(n){for(let t=0;t<6;t++)if(!isFinite(n[t]))return!1;return!0}function l(n){return n[0]>=n[3]?0:n[3]-n[0]}function I(n){return n[1]>=n[4]?0:n[4]-n[1]}function y(n){return n[2]>=n[5]?0:n[5]-n[2]}function N(n){const t=l(n),r=y(n),i=I(n);return Math.sqrt(t*t+r*r+i*i)}function g(n,t=[0,0,0]){return t[0]=n[0]+l(n)/2,t[1]=n[1]+I(n)/2,t[2]=n[2]+y(n)/2,t}function p(n,t=[0,0,0]){return t[0]=l(n),t[1]=I(n),t[2]=y(n),t}function F(n){return Math.max(l(n),y(n),I(n))}function z(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[0]<=n[3]&&t[1]<=n[4]&&t[2]<=n[5]}function E(n,t,r){return t[0]>=n[0]-r&&t[1]>=n[1]-r&&t[2]>=n[2]-r&&t[0]<=n[3]+r&&t[1]<=n[4]+r&&t[2]<=n[5]+r}function T(n,t){return t[0]>=n[0]&&t[1]>=n[1]&&t[2]>=n[2]&&t[3]<=n[3]&&t[4]<=n[4]&&t[5]<=n[5]}function b(n,t){return Math.max(t[0],n[0])<=Math.min(t[3],n[3])&&Math.max(t[1],n[1])<=Math.min(t[4],n[4])&&Math.max(t[2],n[2])<=Math.min(t[5],n[5])}function j(t,r){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||b(t,r)}function R(n,t,r,i,a=n){return a[0]=n[0]+t,a[1]=n[1]+r,a[2]=n[2]+i,a[3]=n[3]+t,a[4]=n[4]+r,a[5]=n[5]+i,a}function V(n,t,r=n){const i=n[0]+l(n)/2,a=n[1]+I(n)/2,u=n[2]+y(n)/2;return r[0]=i+(n[0]-i)*t,r[1]=a+(n[1]-a)*t,r[2]=u+(n[2]-u)*t,r[3]=i+(n[3]-i)*t,r[4]=a+(n[4]-a)*t,r[5]=u+(n[5]-u)*t,r}function Y(n,t){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function _(n,t){return t[0]=n[3],t[1]=n[4],t[2]=n[5],t}function d(n,t,r=n){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==n&&(r[3]=n[3],r[4]=n[4],r[5]=n[5]),r}function q(n,t,r=n){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==n&&(r[0]=n[0],r[1]=n[1],r[2]=n[2]),n}function w(n,t){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n}function A(n){return n?w(n,C):i(C)}function B(n,t){return t||(t=Object(_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])()),t[0]=n[0],t[1]=n[1],t[2]=n[3],t[3]=n[4],t}function G(n,t){return n[0]=t[0],n[1]=t[1],n[2]=Number.NEGATIVE_INFINITY,n[3]=t[2],n[4]=t[3],n[5]=Number.POSITIVE_INFINITY,n}function O(n){return 6===n.length}function P(n){return 0===l(n)&&0===I(n)&&0===y(n)}function S(t,r,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r))return t===r;if(!O(t)||!O(r))return!1;if(i){for(let n=0;n<t.length;n++)if(!i(t[n],r[n]))return!1}else for(let n=0;n<t.length;n++)if(t[n]!==r[n])return!1;return!0}function k(n,t,r,i,u,e){return a(n,t,r,i,u,e,H)}const v=[-1/0,-1/0,-1/0,1/0,1/0,1/0],C=[1/0,1/0,1/0,-1/0,-1/0,-1/0],D=[0,0,0,0,0,0],H=i();


/***/ }),

/***/ "Uz7T":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/contains.js ***!
  \***************************************************************/
/*! exports provided: polygonContainsCoords, polygonContainsMultipoint, polygonContainsPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsCoords", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsMultipoint", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polygonContainsPoint", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,c=0;n<l.length;n++,c+=s)if(!o(t,r,e,i[c],i[c+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let n=o,i=o+e*r;n<i;n+=r){s=n+r,s===i&&(s=o);const e=t[n],l=t[n+1],d=t[s],g=t[s+1];(l<u&&g>=u||g<u&&l>=u)&&e+(u-l)/(g-l)*(d-e)<c&&(f=!f)}return f}


/***/ }),

/***/ "q7ja":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/timeSupport.js ***!
  \***********************************************************************/
/*! exports provided: getTimeExtent, getTimeOperator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeExtent", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOperator", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,n){if(!t)return null;const e=n.featureAdapter,{startTimeField:u,endTimeField:r}=t;let l=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&r)n.forEach((t=>{const n=e.getAttribute(t,u),o=e.getAttribute(t,r);null==n||isNaN(n)||(l=Math.min(l,n)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const t=u||r;n.forEach((n=>{const u=e.getAttribute(n,t);null==u||isNaN(u)||(l=Math.min(l,u),i=Math.max(i,u))}))}return{start:l,end:i}}function n(t,n,e){if(!n||!t)return null;const{startTimeField:u,endTimeField:r}=t;if(!u&&!r)return null;const{start:l,end:i}=n;return null===l&&null===i?null:void 0===l&&void 0===i?()=>!1:u&&r?function(t,n,e,u,r){if(null!=u&&null!=r)return l=>{const i=t.getAttribute(l,n),o=t.getAttribute(l,e);return(null==i||i<=r)&&(null==o||o>=u)};if(null!=u)return n=>{const r=t.getAttribute(n,e);return null==r||r>=u};if(null!=r)return e=>{const u=t.getAttribute(e,n);return null==u||u<=r};return}(e,u,r,l,i):function(t,n,e,u){if(null!=e&&null!=u&&e===u)return u=>t.getAttribute(u,n)===e;if(null!=e&&null!=u)return r=>{const l=t.getAttribute(r,n);return l>=e&&l<=u};if(null!=e)return u=>t.getAttribute(u,n)>=e;if(null!=u)return e=>t.getAttribute(e,n)<=u;return}(e,u||r,l,i)}


/***/ })

}]);
//# sourceMappingURL=default~layers-graphics-data-FeatureFilter-js~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~1a1c8721-es2015.js.map