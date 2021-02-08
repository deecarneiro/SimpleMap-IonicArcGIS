(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-labelFormatUtils-js"],{

/***/ "ezna":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelUtils.js ***!
  \****************************************************************/
/*! exports provided: convertTemplatedStringToArcade, getLabelExpression, getLabelExpressionArcade, getLabelExpressionSingleField, getSingleFieldArcadeExpression, getSingleFieldTemplatedString, sqlToTemplateString, templateStringToSql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertTemplatedStringToArcade", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpression", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpressionArcade", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelExpressionSingleField", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleFieldArcadeExpression", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleFieldTemplatedString", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqlToTemplateString", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateStringToSql", function() { return i; });
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/string.js */ "s7YA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=new RegExp("__begin__","ig"),r=new RegExp("__end__","ig"),s=new RegExp("^__begin__","i"),t=new RegExp("__end__$","i");function o(e){return e.replace(new RegExp("\\[","g"),"{").replace(new RegExp("\\]","g"),"}")}function i(e){return e.replace(new RegExp("\\{","g"),"[").replace(new RegExp("\\}","g"),"]")}function l(e){const n={expression:"",type:"none"};return e.labelExpressionInfo?e.labelExpressionInfo.value?(n.expression=e.labelExpressionInfo.value,n.type="conventional"):e.labelExpressionInfo.expression&&(n.expression=e.labelExpressionInfo.expression,n.type="arcade"):null!=e.labelExpression&&(n.expression=o(e.labelExpression),n.type="conventional"),n}function a(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return p(n.expression);case"arcade":return n.expression}return null}function c(e){const n=l(e);if(!n)return null;switch(n.type){case"conventional":return x(n.expression);case"arcade":return w(n.expression)}return null}function p(o){let i;return o?(i=Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["replace"])(o,(e=>'__begin__$feature["'+e+'"]__end__')),i=s.test(i)?i.replace(s,""):'"'+i,i=t.test(i)?i.replace(t,""):i+'"',i=i.replace(n,'" + ').replace(r,' + "')):i='""',i}const u=/^\s*\{([^}]+)\}\s*$/i;function x(e){const n=e.match(u);return n&&n[1].trim()||null}const f=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*$/i,_=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])([\w\s]+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,g=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])([\w\s]+)(\1)\s*\));?\s*$/i;function w(e){if(!e)return null;let n=f.exec(e)||_.exec(e);return n?n[1]||n[3]:(n=g.exec(e),n?n[2]:null)}


/***/ }),

/***/ "zKxS":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelFormatUtils.js ***!
  \**********************************************************************/
/*! exports provided: createLabelFunction, formatField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabelFunction", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatField", function() { return y; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fieldUtils.js */ "wdpY");
/* harmony import */ var _intl_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../intl/date.js */ "RlM3");
/* harmony import */ var _intl_number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../intl/number.js */ "IeLS");
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldsIndex.js */ "gLc9");
/* harmony import */ var _labelUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labelUtils.js */ "ezna");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.labelFormatUtils"),f={type:"simple",evaluate:()=>null},m={getAttribute:(e,t)=>e.field(t)};async function d(e,a,o){if(!e||!e.symbol)return f;const i=e.where,l=Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getLabelExpression"])(e),d=i?await Promise.all(/*! import() | core-sql-WhereClause-js */[__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("core-sql-WhereClause-js")]).then(__webpack_require__.bind(null, /*! ../../core/sql/WhereClause.js */ "ZqIb")):null;let g;if("arcade"===l.type){const e=await Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_2__["createLabelExpression"])(l.expression,o,a);g={type:"arcade",evaluate(r){try{const t=e.evaluate({$feature:"attributes"in r?e.repurposeFeature(r):e.repurposeAdapter(r)});if(null!=t)return t.toString()}catch(e){c.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("bad-arcade-expression","Encountered an error when evaluating label expression for feature",{feature:r,expression:l}))}return null},needsHydrationToEvaluate:()=>null==Object(_labelUtils_js__WEBPACK_IMPORTED_MODULE_7__["getSingleFieldArcadeExpression"])(l.expression)}}else g={type:"simple",evaluate:e=>l.expression.replace(/{[^}]*}/g,(t=>{const r=t.slice(1,-1),o=Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["getField"])(a,r);if(!o)return t;let i=null;if("attributes"in e){e&&e.attributes&&(i=e.attributes[o.name])}else i=e.field(o.name);return null==i?"":y(i,o)}))};if(i){let e;try{e=d.WhereClause.create(i,new _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_6__["default"](a))}catch(e){return f}const t=g.evaluate;g.evaluate=r=>{const a="attributes"in r?void 0:m;return e.testFeature(r,a)?t(r):null}}return g}function y(e,t){if(null==e)return"";const r=t.domain;if(r)if("codedValue"===r.type||"coded-value"===r.type){const t=e;for(const e of r.codedValues)if(e.code===t)return e.name}else if("range"===r.type){const t=+e,a="range"in r?r.range[0]:r.minValue,n="range"in r?r.range[1]:r.maxValue;if(a<=t&&t<=n)return r.name}let n=e;return"date"===t.type||"esriFieldTypeDate"===t.type?n=Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(n,Object(_intl_date_js__WEBPACK_IMPORTED_MODULE_4__["convertDateFormatToIntlOptions"])("short-date")):Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_3__["isNumericField"])(t)&&(n=Object(_intl_number_js__WEBPACK_IMPORTED_MODULE_5__["formatNumber"])(+n)),n||""}


/***/ })

}]);
//# sourceMappingURL=layers-support-labelFormatUtils-js-es2015.js.map