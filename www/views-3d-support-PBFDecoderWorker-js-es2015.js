(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-support-PBFDecoderWorker-js"],{

/***/ "8Lmx":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/byteSizeEstimations.js ***!
  \***************************************************************/
/*! exports provided: estimateNumberByteSize, estimateStringByteSize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateNumberByteSize", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateStringByteSize", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return 32+n.length}function t(){return 16}


/***/ }),

/***/ "AGtD":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/operations/pbfDehydratedFeatureSet.js ***!
  \*******************************************************************************/
/*! exports provided: DehydratedFeatureSetParserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetParserContext", function() { return y; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/uid.js */ "8uAX");
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layers/support/Field.js */ "ofM5");
/* harmony import */ var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layers/graphics/featureConversionUtils.js */ "ZlUD");
/* harmony import */ var _zscale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zscale.js */ "kUx5");
/* harmony import */ var _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layers/graphics/dehydratedFeatures.js */ "GlSV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(t,e){return e}function l(t,e,r,s){switch(r){case 0:return f(t,e+s,0);case 1:return"lowerLeft"===t.originPosition?f(t,e+s,1):function({translate:t,scale:e},r,s){return t[s]-r*e[s]}(t,e+s,1)}}function c(t,e,r,s){switch(r){case 2:return f(t,e,2);default:return l(t,e,r,s)}}function d(t,e,r,s){switch(r){case 2:return f(t,e,3);default:return l(t,e,r,s)}}function p(t,e,r,s){switch(r){case 3:return f(t,e,3);default:return c(t,e,r,s)}}function f({translate:t,scale:e},r,s){return t[s]+r*e[s]}class y{constructor(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=u,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}createFeatureResult(){return new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["DehydratedFeatureSetClass"]}finishFeatureResult(t){if(this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,!t.hasZ)return;const e=Object(_zscale_js__WEBPACK_IMPORTED_MODULE_5__["getGeometryZScaler"])(t.geometryType,this.options.sourceSpatialReference,t.spatialReference);if(e)for(const r of t.features)e(r.geometry)}createSpatialReference(){return new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__["default"]}addField(t,e){t.fields.push(_layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e));const r=t.fields.map((t=>t.name));this.AttributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){const r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(const t in e.attributes){const s=e.attributes[t];"string"==typeof s&&s.length>r&&(e.attributes[t]="")}t.features.push(e)}addQueryGeometry(t,e){const{queryGeometry:r,queryGeometryType:s}=e,n=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["unquantizeOptimizedGeometry"])(r.clone(),r,!1,!1,this.transform),a=Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertToGeometry"])(n,s,!1,!1);let h=null;switch(s){case"esriGeometryPoint":h="point";break;case"esriGeometryPolygon":h="polygon";break;case"esriGeometryPolyline":h="polyline";break;case"esriGeometryMultipoint":h="multipoint"}a.type=h,t.queryGeometryType=s,t.queryGeometry=a}prepareFeatures(e){switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=(t,e,r)=>this.addCoordinatePoint(t,e,r),this.createGeometry=t=>this.createPointGeometry(t);break;case"polygon":this.addCoordinate=(t,e,r)=>this.addCoordinatePolygon(t,e,r),this.createGeometry=t=>this.createPolygonGeometry(t);break;case"polyline":this.addCoordinate=(t,e,r)=>this.addCoordinatePolyline(t,e,r),this.createGeometry=t=>this.createPolylineGeometry(t);break;case"multipoint":this.addCoordinate=(t,e,r)=>this.addCoordinateMultipoint(t,e,r),this.createGeometry=t=>this.createMultipointGeometry(t);break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(e.geometryType)}}createFeature(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new _layers_graphics_dehydratedFeatures_js__WEBPACK_IMPORTED_MODULE_6__["DehydratedFeatureClass"](Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_2__["generateUID"])(),null,new this.AttributesConstructor)}addLength(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)}createPointGeometry(t){const e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e}addCoordinatePoint(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}}transformPathLikeValue(t,e){let r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)}addCoordinatePolyline(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)}addCoordinatePolygon(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)}addCoordinateMultipoint(t,e,r){0===r&&t.points.push([]);const s=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(s)}createPolygonGeometry(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createPolylineGeometry(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}createMultipointGeometry(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}dehydratedAddPointsCoordinate(t,e,r){if(null===this.coordinateBuffer){const t=this.lengths.reduce(((t,e)=>t+e),0);this.coordinateBuffer=new Float64Array(t*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);const s=this.transformPathLikeValue(e,r),o=t[t.length-1];0===r&&o.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=s}deriveApplyTransform(t){const{hasZ:e,hasM:r}=t;return e&&r?p:e?c:r?d:l}}


/***/ }),

/***/ "AIxD":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
  \*************************************************************************/
/*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeBounds", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeExtent", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePaths", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoint", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePoints", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolygon", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizePolyline", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeRings", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeX", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantizeY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePaths", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoint", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePoints", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeRings", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeX", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unquantizeY", function() { return y; });
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonUtils.js */ "qatw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(n){return n&&"upperLeft"===n.originPosition}const o=(n,t,r)=>[t,r],l=(n,t,r)=>[t,r,n[2]],a=(n,t,r)=>[t,r,n[2],n[3]];function m(n){if(!n)return null;return{originPosition:"upper-left"===n.originPosition?"upperLeft":"lower-left"===n.originPosition?"lowerLeft":n.originPosition,scale:[n.tolerance,n.tolerance],translate:[n.extent.xmin,n.extent.ymax]}}function c(n,t){if(n===t||null==n&&null==t)return!0;if(null==n||null==t)return!1;let r,e,u,o,l,a;return i(n)?(r=n.translate[0],e=n.translate[1],u=n.scale[0]):(r=n.extent.xmin,e=n.extent.ymax,u=n.tolerance),i(t)?(o=t.translate[0],l=t.translate[1],a=t.scale[0]):(o=t.extent.xmin,l=t.extent.ymax,a=t.tolerance),r===o&&e===l&&u===a}function s({scale:n,translate:t},r){return Math.round((r-t[0])/n[0])}function f({scale:n,translate:t},r){return Math.round((t[1]-r)/n[1])}function x(n,t,r){const e=[];let u,i,o,l;for(let a=0;a<r.length;a++){const m=r[a];a>0?(o=s(n,m[0]),l=f(n,m[1]),o===u&&l===i||(e.push(t(m,o-u,l-i)),u=o,i=l)):(u=s(n,m[0]),i=f(n,m[1]),e.push(t(m,u,i)))}return e.length>0?e:null}function h(n,t,r){return t[0]=s(n,r[0]),t[3]=f(n,r[1]),t[2]=s(n,r[2]),t[1]=f(n,r[3]),t}function I(n,t,r,e){return x(n,r?e?a:l:e?l:o,t)}function g(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let r=0;r<t.length;r++){const e=x(n,i,t[r]);e&&e.length>=3&&u.push(e)}return u.length?u:null}function N(n,t,r,e){const u=[],i=r?e?a:l:e?l:o;for(let r=0;r<t.length;r++){const e=x(n,i,t[r]);e&&e.length>=2&&u.push(e)}return u.length?u:null}function p({scale:n,translate:t},r){return r*n[0]+t[0]}function y({scale:n,translate:t},r){return t[1]-r*n[1]}function z(n,t,r){const e=new Array(r.length);if(!r.length)return e;const[u,i]=n.scale;let o=p(n,r[0][0]),l=y(n,r[0][1]);e[0]=t(r[0],o,l);for(let n=1;n<r.length;n++){const a=r[n];o+=a[0]*u,l-=a[1]*i,e[n]=t(a,o,l)}return e}function T(n,t,r){const e=new Array(r.length);for(let u=0;u<r.length;u++)e[u]=z(n,t,r[u]);return e}function M(n,t,r){return r?(t[0]=p(n,r[0]),t[1]=y(n,r[3]),t[2]=p(n,r[2]),t[3]=y(n,r[1]),t):[p(n,t[0]),y(n,t[3]),p(n,t[2]),y(n,t[1])]}function E(n,t,r,e){return z(n,r?e?a:l:e?l:o,t)}function P(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function b(n,t,r,e){return T(n,r?e?a:l:e?l:o,t)}function F(n,t,r){let[e,u]=r[0],i=Math.min(e,t[0]),o=Math.min(u,t[1]),l=Math.max(e,t[2]),a=Math.max(u,t[3]);for(let n=1;n<r.length;n++){const[t,m]=r[n];e+=t,u+=m,t<0&&(i=Math.min(i,e)),t>0&&(l=Math.max(l,e)),m<0?o=Math.min(o,u):m>0&&(a=Math.max(a,u))}return n[0]=i,n[1]=o,n[2]=l,n[3]=a,n}function V(n,t){if(!t.length)return null;n[0]=n[1]=Number.POSITIVE_INFINITY,n[2]=n[3]=Number.NEGATIVE_INFINITY;for(let r=0;r<t.length;r++)F(n,n,t[r]);return n}function Y(n){const t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return F(t,t,n)}function _(n){return V([0,0,0,0],n)}function A(n){return V([0,0,0,0],n)}function w(n,t,r,e,u){return t.xmin=s(n,r.xmin),t.ymin=f(n,r.ymin),t.xmax=s(n,r.xmax),t.ymax=f(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function G(n,t,r,e,u){return t.points=I(n,r.points,e,u),t}function L(n,t,r,e,u){return t.x=s(n,r.x),t.y=f(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function O(n,t,r,e,u){const i=g(n,r.rings,e,u);return i?(t.rings=i,t):null}function S(n,t,r,e,u){const i=N(n,r.paths,e,u);return i?(t.paths=i,t):null}function d(i,o){return i&&o?Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o)?L(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o)?S(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o)?O(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o)?G(i,{},o,!1,!1):Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o)?w(i,{},o,!1,!1):null:null}function j(n,t,r,e,u){return t.xmin=p(n,r.xmin),t.ymin=y(n,r.ymin),t.xmax=p(n,r.xmax),t.ymax=y(n,r.ymax),t!==r&&(e&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function U(n,t,r,e,u){return t.points=E(n,r.points,e,u),t}function k(n,t,r,e,u){return t.x=p(n,r.x),t.y=y(n,r.y),t!==r&&(e&&(t.z=r.z),u&&(t.m=r.m)),t}function q(n,t,r,e,u){return t.rings=b(n,r.rings,e,u),t}function v(n,t,r,e,u){return t.paths=P(n,r.paths,e,u),t}


/***/ }),

/***/ "Ab+v":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/PBFDecoderWorker.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _tasks_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../tasks/operations/pbfQueryUtils.js */ "Eo5y");
/* harmony import */ var _tasks_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tasks/operations/pbfDehydratedFeatureSet.js */ "AGtD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{_parseFeatureQuery(s){const o=Object(_tasks_operations_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_1__["parsePBFFeatureQuery"])(s.buffer,new _tasks_operations_pbfDehydratedFeatureSet_js__WEBPACK_IMPORTED_MODULE_2__["DehydratedFeatureSetParserContext"](s.options)),i={...o,spatialReference:o.spatialReference.toJSON(),fields:o.fields?o.fields.map((e=>e.toJSON())):void 0};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(i)}}function o(){return new s}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "GlSV":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatures.js ***!
  \*************************************************************************/
/*! exports provided: equals, DehydratedFeatureClass, DehydratedFeatureSetClass, computeAABB, computeAABR, estimateAttributesObjectSize, estimateGeometryObjectSize, estimateSize, expandAABB, expandAABR, fromFeatureSetJSON, fromJSONGeometry, getObjectId, hasGeometry, hasVertices, isDehydratedPoint, isFeatureGeometry, makeDehydratedPoint, numVertices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureClass", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DehydratedFeatureSetClass", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABB", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAABR", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateAttributesObjectSize", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateGeometryObjectSize", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "estimateSize", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABB", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandAABR", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromFeatureSetJSON", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSONGeometry", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getObjectId", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasGeometry", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVertices", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDehydratedPoint", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFeatureGeometry", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDehydratedPoint", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numVertices", function() { return T; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/support/typeUtils.js */ "dOLD");
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/uid.js */ "8uAX");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../support/Field.js */ "ofM5");
/* harmony import */ var _core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/byteSizeEstimations.js */ "8Lmx");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../geometry/support/quantizationUtils.js */ "AIxD");
/* harmony import */ var _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dehydratedFeatureComparison.js */ "NWPx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return _dehydratedFeatureComparison_js__WEBPACK_IMPORTED_MODULE_11__["equals"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class M{constructor(e,t,s){this.uid=e,this.geometry=t,this.attributes=s,this.visible=!0,this.objectId=null,this.centroid=null}}function k(e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.geometry)}function N(e){return Object(_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isFeatureGeometryType"])(e.type)}class v{constructor(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}}function z(e){return"point"===e.type}function F(e){const t=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_4__["featureGeometryTypeKebabDictionary"].fromJSON(e.geometryType),s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(e.spatialReference),n=e.transform,a=e.features.map((r=>{const i=function(e,t,s,r){return{uid:Object(_core_uid_js__WEBPACK_IMPORTED_MODULE_5__["generateUID"])(),objectId:r&&e.attributes?e.attributes[r]:null,attributes:e.attributes,geometry:A(e.geometry,t,s),visible:!0}}(r,t,s,e.objectIdFieldName),a=i.geometry;if(a&&n)switch(a.type){case"point":i.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePoint"])(n,a,a,a.hasZ,a.hasM);break;case"multipoint":i.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizeMultipoint"])(n,a,a,a.hasZ,a.hasM);break;case"polygon":i.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePolygon"])(n,a,a,a.hasZ,a.hasM);break;case"polyline":i.geometry=Object(_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_10__["unquantizePolyline"])(n,a,a,a.hasZ,a.hasM)}return i}));return{geometryType:t,features:a,spatialReference:s,fields:e.fields?e.fields.map((e=>_support_Field_js__WEBPACK_IMPORTED_MODULE_7__["default"].fromJSON(e))):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}}function A(e,t,s){if(!e)return null;switch(t){case"point":{const t=e;return{x:t.x,y:t.y,z:t.z,m:t.m,hasZ:null!=t.z,hasM:null!=t.m,type:"point",spatialReference:s}}case"polyline":{const t=e;return{paths:t.paths,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polyline",spatialReference:s}}case"polygon":{const t=e;return{rings:t.rings,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"polygon",spatialReference:s}}case"multipoint":{const t=e;return{points:t.points,hasZ:!!t.hasZ,hasM:!!t.hasM,type:"multipoint",spatialReference:s}}}}function I(e,t,s,r){return{x:e,y:t,z:s,hasZ:null!=s,hasM:!1,spatialReference:r,type:"point"}}function R(e){if(!e)return 0;let t=32;for(const s in e)if(e.hasOwnProperty(s)){const r=e[s];switch(typeof r){case"string":t+=Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__["estimateStringByteSize"])(r);break;default:case"number":t+=Object(_core_byteSizeEstimations_js__WEBPACK_IMPORTED_MODULE_8__["estimateNumberByteSize"])()}}return t}function w(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t))return 0;let r=32;switch(t.type){case"point":r+=42;break;case"polyline":case"polygon":{let e=0;const s=2+(t.hasZ?1:0)+(t.hasM?1:0),n="polyline"===t.type?t.paths:t.rings;for(const t of n)e+=t.length;r+=8*e*s+64,r+=128*e,r+=34,r+=32*(n.length+1);break}case"multipoint":{const e=2+(t.hasZ?1:0)+(t.hasM?1:0),s=t.points.length;r+=8*s*e+64,r+=128*s,r+=34,r+=32;break}case"extent":r+=98,t.hasM&&(r+=32),t.hasZ&&(r+=32);break;case"mesh":r+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.position),r+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.normal),r+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.uv),r+=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["estimateSize"])(t.vertexAttributes.tangent)}return r}function S(e){let t=32;return t+=R(e.attributes),t+=3,t+=8+w(e.geometry),t}function T(e){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;switch(e.type){case"point":return 1;case"polyline":{let t=0;for(const s of e.paths)t+=s.length;return t}case"polygon":{let t=0;for(const s of e.rings)t+=s.length;return t}case"multipoint":return e.points.length;case"extent":return 2;case"mesh":{const t=e.vertexAttributes&&e.vertexAttributes.position;return t?t.length/3:0}default:return}}function O(e){if(!e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(const t of e.paths)if(t.length>0)return!0;return!1;case"polygon":for(const t of e.rings)if(t.length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return e.vertexAttributes&&e.vertexAttributes.position&&e.vertexAttributes.position.length>0;default:return}}function P(e,t){switch(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t,e.paths[s],e.hasZ);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t,e.rings[s],e.hasZ);break;case"multipoint":Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithNestedArray"])(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax)}}function B(e,t){P(e,q),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithAABB"])(t,q)}function J(e,t){switch(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["empty"])(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(let s=0;s<e.paths.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.paths[s]);break;case"polygon":for(let s=0;s<e.rings.length;s++)Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.rings[s]);break;case"multipoint":Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expandWithNestedArray"])(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax}}function L(e,t){J(e,C),Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["expand"])(t,C)}function U(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null}const q=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),C=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_6__["create"])();


/***/ }),

/***/ "NWPx":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js ***!
  \**********************************************************************************/
/*! exports provided: equals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equals", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(e,n){if(e===n)return!0;if(null==e||null==n)return!1;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++){const r=e[t],a=n[t];if(r.length!==a.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==a[e])return!1}return!0}function t(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(!n(e[r],t[r]))return!1;return!0}function r(e,n){return e===n||e&&n&&e.equals(n)}function a(a,i){if(a===i)return!0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i))return!1;if(a.type!==i.type)return!1;switch(a.type){case"point":return function(e,n){return!!r(e.spatialReference,n.spatialReference)&&e.x===n.x&&e.y===n.y&&e.z===n.z&&e.m===n.m}(a,i);case"extent":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!r(e.spatialReference,n.spatialReference)&&e.xmin===n.xmin&&e.ymin===n.ymin&&e.zmin===n.zmin&&e.xmax===n.xmax&&e.ymax===n.ymax&&e.zmax===n.zmax}(a,i);case"polyline":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!r(e.spatialReference,n.spatialReference)&&t(e.paths,n.paths)}(a,i);case"polygon":return function(e,n){return e.hasZ===n.hasZ&&e.hasM===n.hasM&&!!r(e.spatialReference,n.spatialReference)&&t(e.rings,n.rings)}(a,i);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!r(e.spatialReference,t.spatialReference)&&n(e.points,t.points)}(a,i);case"mesh":return!1;default:return}}function i(e,n){return e===n||null!=e&&null!=n&&e.objectId===n.objectId&&(!!a(e.geometry,n.geometry)&&!!function(e,n){if(e===n)return!0;if(!e||!n)return!1;const t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(const r of t)if(e[r]!==n[r])return!1;return!0}(e.attributes,n.attributes))}


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


/***/ })

}]);
//# sourceMappingURL=views-3d-support-PBFDecoderWorker-js-es2015.js.map