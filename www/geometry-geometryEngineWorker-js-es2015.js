(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-geometryEngineWorker-js"],{

/***/ "1kEK":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
  \*********************************************************************/
/*! exports provided: jsonAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonAdapter", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:function(t,s){if(null==s)return null;return t.convertJSONToGeometry(s)},exportPoint:function(t,i,n){const e=new s(t.getPointX(i),t.getPointY(i),n),o=t.hasZ(i),h=t.hasM(i);o&&(e.z=t.getPointZ(i));h&&(e.m=t.getPointM(i));return e},exportPolygon:function(t,s,n){return new i(t.exportPaths(s),n,t.hasZ(s),t.hasM(s))},exportPolyline:function(t,s,i){return new n(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))},exportMultipoint:function(t,s,i){return new e(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))},exportExtent:function(t,s,i){const n=t.hasZ(s),e=t.hasM(s),h=new o(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);h.zmin=i.vmin,h.zmax=i.vmax}if(e){const i=t.getMExtent(s);h.mmin=i.vmin,h.mmax=i.vmax}return h}};class s{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}class i{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class n{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class e{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}class o{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}


/***/ }),

/***/ "D5ze":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/geometryEngineWorker.js ***!
  \********************************************************************/
/*! exports provided: executeGEOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeGEOperation", function() { return e; });
/* harmony import */ var _chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/geometryEngineJSON.js */ "l5Tg");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){return(0,_chunks_geometryEngineJSON_js__WEBPACK_IMPORTED_MODULE_0__["g"][e.operation])(...e.parameters)}


/***/ }),

/***/ "X2wA":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,n,o){return e(o={path:n,exports:{},require:function(e,n){return r(null==n&&o.path)}},o.exports),o.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}


/***/ })

}]);
//# sourceMappingURL=geometry-geometryEngineWorker-js-es2015.js.map