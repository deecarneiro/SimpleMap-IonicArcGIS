(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arcade-functions-featuresetstats-js"],{

/***/ "CNB1":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/arcade/functions/featuresetstats.js ***!
  \***********************************************************************/
/*! exports provided: registerFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFunctions", function() { return m; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/languageUtils.js */ "idrm");
/* harmony import */ var _fieldStats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fieldStats.js */ "kqd7");
/* harmony import */ var _core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sql/WhereClause.js */ "ZqIb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(t,r,e,o,l,m){if(1===o.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(o[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__["calculateStat"])(t,o[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(o[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__["calculateStat"])(t,o[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[1],-1)))}else if(2===o.length){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(o[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__["calculateStat"])(t,o[0],Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(o[0]))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__["calculateStat"])(t,o[0].toArray(),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[1],-1)));if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(o[0]))return o[0].load().then((n=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__["WhereClause"].create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[2],1e3),r.abortSignal)))))}else if(3===o.length&&Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(o[0]))return o[0].load().then((n=>d(_core_sql_WhereClause_js__WEBPACK_IMPORTED_MODULE_3__["WhereClause"].create(o[1],n.getFieldsIndex()),m,l).then((n=>o[0].calculateStatistic(t,n,Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["C"])(o[2],1e3),r.abortSignal)))));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(Object(_fieldStats_js__WEBPACK_IMPORTED_MODULE_2__["calculateStat"])(t,o,-1))}function d(e,u,i){try{const r=e.getVariables();if(r.length>0){const n=[];for(let t=0;t<r.length;t++){const e={name:r[t]};n.push(u.evaluateIdentifier(i,e))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(n).then((n=>{const t={};for(let e=0;e<r.length;e++)t[r[e]]=n[e];return e.parameters=t,e}))}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(e)}catch(n){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(n)}}function m(n){"async"===n.mode&&(n.functions.stdev=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("stdev",r,0,u,t,n)}))},n.functions.variance=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("variance",r,0,u,t,n)}))},n.functions.average=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,0,u,t,n)}))},n.functions.mean=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("mean",r,0,u,t,n)}))},n.functions.sum=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("sum",r,0,u,t,n)}))},n.functions.min=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("min",r,0,u,t,n)}))},n.functions.max=function(t,r){return n.standardFunctionAsync(t,r,(function(r,e,u){return l("max",r,0,u,t,n)}))},n.functions.count=function(t,r){return n.standardFunctionAsync(t,r,(function(n,t,r){if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["p"])(r,1,1),Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["z"])(r[0]))return r[0].count(n.abortSignal);if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["h"])(r[0])||Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r[0]))return r[0].length;if(Object(_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_1__["o"])(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")}))})}


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
//# sourceMappingURL=arcade-functions-featuresetstats-js-es2015.js.map