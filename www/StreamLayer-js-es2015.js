(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["StreamLayer-js"],{

/***/ "0aXd":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/AggregateField.js ***!
  \********************************************************************/
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
/* harmony import */ var _OutStatistic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./OutStatistic.js */ "AJw4");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.name=null}clone(){return new p({name:this.name,outStatistic:this.outStatistic.clone()})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_OutStatistic_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:!0}})],i.prototype,"outStatistic",void 0),i=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.AggregateField")],i);var c=i;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "0pea":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js ***!
  \********************************************************************************************/
/*! exports provided: getAllSizes, getColor, getOpacity, getRotationAngle, getSize, getSizeForValue, getSizeFromNumberOrVariable, getSizeRangeAtScale, getVisualVariableValues, viewScaleRE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSizes", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOpacity", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRotationAngle", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSize", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeForValue", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeFromNumberOrVariable", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeRangeAtScale", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariableValues", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewScaleRE", function() { return p; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Color.js */ "nvBr");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../support/lengthUtils.js */ "m0D6");
/* harmony import */ var _sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sizeVariableUtils.js */ "hvLT");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),u=new _Graphic_js__WEBPACK_IMPORTED_MODULE_4__["default"],f=Math.PI,p=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function d(e,r,i){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof r,o=s?null:r,l=o&&o.attributes;let u=s?r:null;const f=n.field,{ipData:p,hasExpression:d}=n.cache;let v=n.cache.compiledFunc;if(!f&&!d){const e=n.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(d){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},r=i.arcade.arcadeUtils,t=r.getViewInfo(e),s=r.createExecContext(o,t);if(!v){const e=r.createSyntaxTree(n.valueExpression);v=r.createFunction(e),n.cache.compiledFunc=v}u=r.executeFunction(v,s)}else l&&(u=l[f]);const b=n.normalizationField,h=l?parseFloat(l[b]):void 0;if(null!=u&&(!b||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=g(u,p);if(e){const r=e[0],s=e[1],o=r===s?n.stops[r].color:_Color_js__WEBPACK_IMPORTED_MODULE_3__["default"].blendColors(n.stops[r].color,n.stops[s].color,e[2],Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)?i.color:void 0);return new _Color_js__WEBPACK_IMPORTED_MODULE_3__["default"](o)}}}function v(e,a,i){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!t)return;if("esri.renderers.visualVariables.OpacityVariable"!==t.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof a,s=n?null:a,o=s&&s.attributes;let l=n?a:null;const u=t.field,{ipData:f,hasExpression:p}=t.cache;let d=t.cache.compiledFunc;if(!u&&!p){const e=t.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(p){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(e),o=a.createExecContext(s,n);if(!d){const e=a.createSyntaxTree(t.valueExpression);d=a.createFunction(e),t.cache.compiledFunc=d}l=a.executeFunction(d,o)}else o&&(l=o[u]);const v=t.normalizationField,b=o?parseFloat(o[v]):void 0;if(null!=l&&(!v||n||!isNaN(b)&&0!==b)){isNaN(b)||n||(l/=b);const e=g(l,f);if(e){const a=e[0],r=e[1];if(a===r)return t.stops[a].opacity;{const i=t.stops[a].opacity;return i+(t.stops[r].opacity-i)*e[2]}}}}function b(e,a,i){const t="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!t)return;if("esri.renderers.visualVariables.RotationVariable"!==t.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=t.axis||"heading",s="heading"===n&&"arithmetic"===t.rotationType?90:0,o="heading"===n&&"arithmetic"===t.rotationType?-1:1,l="number"==typeof a?null:a,u=l&&l.attributes,f=t.field,{hasExpression:p}=t.cache;let d=t.cache.compiledFunc,v=0;if(!f&&!p)return v;if(p){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:i.viewingMode,scale:i.scale,spatialReference:i.spatialReference},a=i.arcade.arcadeUtils,n=a.getViewInfo(e),s=a.createExecContext(l,n);if(!d){const e=a.createSyntaxTree(t.valueExpression);d=a.createFunction(e),t.cache.compiledFunc=d}v=a.executeFunction(d,s)}else u&&(v=u[f]||0);return v="number"!=typeof v||isNaN(v)?null:s+o*v,v}function h(e,i,t){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.SizeVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const s=x(function(e,i,t){const n="number"==typeof i,s=n?null:i,o=s&&s.attributes;let u=n?i:null;const{isScaleDriven:f}=e.cache;let p=e.cache.compiledFunc;if(f){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?t.scale:void 0,i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?t.view:void 0;u=null==r||"3d"===i?function(e){let a=null,r=null;const i=e.stops;return i?(a=i[0].value,r=i[i.length-1].value):(a=e.minDataValue||0,r=e.maxDataValue||0),(a+r)/2}(e):r}else if(!n)switch(e.inputValueType){case"expression":{if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t.arcade))return void c.error("Use of arcade expressions requires an arcade context");const a={viewingMode:t.viewingMode,scale:t.scale,spatialReference:t.spatialReference},i=t.arcade.arcadeUtils,n=i.getViewInfo(a),o=i.createExecContext(s,n);if(!p){const a=i.createSyntaxTree(e.valueExpression);p=i.createFunction(a),e.cache.compiledFunc=p}u=i.executeFunction(p,o);break}case"field":o&&(u=o[e.field]);break;case"unknown":u=null}if(!Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(u))return null;if(n||!e.normalizationField)return u;const d=o?parseFloat(o[e.normalizationField]):null;return Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(d)&&0!==d?u/d:null}(n,i,t),n,i,t,n.cache.ipData);return null==s||isNaN(s)?0:s}function m(e,a,r){return null==e?null:Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isSizeVariable"])(e)?h(e,a,r):Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(e)?e:null}function V(e,a,r){return Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(r)&&e>r?r:Object(_sizeVariableUtils_js__WEBPACK_IMPORTED_MODULE_6__["isValidNumber"])(a)&&e<a?a:e}function x(e,r,i,t,n){switch(r.transformationType){case"additive":return function(e,a,r,i){return e+(m(a.minSize,r,i)||a.minDataValue)}(e,r,i,t);case"constant":return function(e,a,r){const i=e.stops;let t=i&&i.length&&i[0].size;return null==t&&(t=e.minSize),m(t,a,r)}(r,i,t);case"clamped-linear":return function(e,r,i,t){const n=(e-r.minDataValue)/(r.maxDataValue-r.minDataValue),s=m(r.minSize,i,t),o=m(r.maxSize,i,t),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?t.shape:void 0;if(e<=r.minDataValue)return s;if(e>=r.maxDataValue)return o;if("area"===r.scaleBy&&l){const e="circle"===l,a=e?f*Math.pow(s/2,2):s*s,r=a+n*((e?f*Math.pow(o/2,2):o*o)-a);return e?2*Math.sqrt(r/f):Math.sqrt(r)}return s+n*(o-s)}(e,r,i,t);case"proportional":return function(e,r,i,t){const n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?t.shape:void 0,s=e/r.minDataValue,o=m(r.minSize,i,t),l=m(r.maxSize,i,t);let c=null;return c="circle"===n?2*Math.sqrt(s*Math.pow(o/2,2)):"square"===n||"diamond"===n||"image"===n?Math.sqrt(s*Math.pow(o,2)):s*o,V(c,o,l)}(e,r,i,t);case"stops":return function(e,a,r,i,t){const[n,s,o]=g(e,t);if(n===s)return m(a.stops[n].size,r,i);{const e=m(a.stops[n].size,r,i);return e+(m(a.stops[s].size,r,i)-e)*o}}(e,r,i,t,n);case"real-world-size":return function(e,r,i,t){const n=(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&t.resolution?t.resolution:1)*_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_5__["meterIn"][r.valueUnit],o=m(r.minSize,i,t),l=m(r.maxSize,i,t),{valueRepresentation:c}=r;let u=null;return u="area"===c?2*Math.sqrt(e/f)/n:"radius"===c||"distance"===c?2*e/n:e/n,V(u,o,l)}(e,r,i,t);case"identity":return e;case"unknown":return null}}function w(e,a,r){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===r||a))return null;const t={scale:a,view:r};let n=m(e.minSize,u,t),s=m(e.maxSize,u,t);if(null!=n||null!=s){if(n>s){const e=s;s=n,n=e}return{minSize:n,maxSize:s}}}function y(e,a,r){if(!e.visualVariables)return;const i=[],t=[],n=[],s=[],o=[];for(const a of e.visualVariables)switch(a.type){case"color":t.push(a);break;case"opacity":n.push(a);break;case"rotation":o.push(a);break;case"size":s.push(a)}return t.forEach((e=>{const t=d(e,a,r);i.push({variable:e,value:t})})),n.forEach((e=>{const t=v(e,a,r);i.push({variable:e,value:t})})),o.forEach((e=>{const t=b(e,a,r);i.push({variable:e,value:t})})),s.forEach((e=>{const t=h(e,a,r);i.push({variable:e,value:t})})),i.filter((e=>null!=e.value))}function g(e,a){if(!a)return;let r=0,i=a.length-1;return a.some(((a,t)=>e<a?(i=t,!0):(r=t,!1))),[r,i,(e-a[r])/(a[i]-a[r])]}function z(a,r,i){const t=["proportional","proportional","proportional"];for(const n of a){const a=n.useSymbolValue?"symbol-value":h(n,r,i);switch(n.axis){case"width":t[0]=a;break;case"depth":t[1]=a;break;case"height":t[2]=a;break;case"width-and-depth":t[0]=a,t[1]=a;break;case"all":case void 0:case null:t[0]=a,t[1]=a,t[2]=a;break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(n.axis)}}return t}


/***/ }),

/***/ "7MGP":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReduction.js ***!
  \**********************************************************************/
/*! exports provided: default, FeatureReduction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureReduction", function() { return t; });
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
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["selection","cluster"],readOnly:!0,json:{read:!1,write:!0}})],t.prototype,"type",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureReduction")],t);var p=t;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "AJw4":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/OutStatistic.js ***!
  \******************************************************************/
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
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i;let e=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.statisticType=null,this.onStatisticField=null,this.onStatisticValueExpression=null}clone(){return new i({statisticType:this.statisticType,onStatisticField:this.onStatisticField,onStatisticValueExpression:this.onStatisticValueExpression})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],e.prototype,"statisticType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],e.prototype,"onStatisticField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],e.prototype,"onStatisticValueExpression",void 0),e=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.OutStatistic")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "Bbcg":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/featureReductionUtils.js ***!
  \***************************************************************************/
/*! exports provided: read, webSceneFeatureReductionTypes, write, writeTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSceneFeatureReductionTypes", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeTarget", function() { return c; });
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/object.js */ "nR38");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeatureReduction.js */ "7MGP");
/* harmony import */ var _FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeatureReductionCluster.js */ "o9qb");
/* harmony import */ var _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FeatureReductionSelection.js */ "kbDD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s={key:"type",base:_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_2__["default"],typeMap:{selection:_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"]}};function u(e,t){const r=(t=t.layerDefinition||t).featureReduction;if(r)switch(r.type){case"selection":return _FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(r);case"cluster":return _FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(r)}return null}function c(t,r,o,n){const s=i(t,{},n);s&&Object(_core_object_js__WEBPACK_IMPORTED_MODULE_0__["setDeepValue"])(o,s,r)}function i(e,r,o){return e?"selection"!==e.type?(o.messages&&o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("featureReduction:unsupported",`FeatureReduction of type '${e.declaredClass}' are not supported in scenes.`,{featureReduction:e,context:o})),null):e.write(r,o):null}


/***/ }),

/***/ "EOvV":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/labelingInfo.js ***!
  \******************************************************************/
/*! exports provided: reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reader", function() { return r; });
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelClass.js */ "wkZP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=/\[([^\[\]]+)\]/gi;function r(r,t,i){return r?r.map((r=>{const o=new _LabelClass_js__WEBPACK_IMPORTED_MODULE_0__["default"];if(o.read(r,i),o.labelExpression){const e=t.fields||t.layerDefinition&&t.layerDefinition.fields||this.fields;o.labelExpression=o.labelExpression.replace(n,((n,r)=>`[${function(e,n){if(!n)return e;const r=e.toLowerCase();for(let e=0;e<n.length;e++){const t=n[e].name;if(t.toLowerCase()===r)return t}return e}(r,e)}]`))}return o})):null}


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


/***/ }),

/***/ "hvLT":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \******************************************************************************************/
/*! exports provided: getInputValueType, getTransformationType, isSizeVariable, isValidNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInputValueType", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformationType", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSizeVariable", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return n&&"esri.renderers.visualVariables.SizeVariable"===n.declaredClass}function e(n){return null!=n&&!isNaN(n)&&isFinite(n)}function i(n){return n.valueExpression?"expression":n.field&&"string"==typeof n.field?"field":"unknown"}function l(n,e){const l=e||i(n),a=n.valueUnit||"unknown";return"unknown"===l?"constant":n.stops?"stops":null!=n.minSize&&null!=n.maxSize&&null!=n.minDataValue&&null!=n.maxDataValue?"clamped-linear":"unknown"===a?null!=n.minSize&&null!=n.minDataValue?n.minSize&&n.minDataValue?"proportional":"additive":"identity":"real-world-size"}


/***/ }),

/***/ "kbDD":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FeatureReduction.js */ "7MGP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;let p=t=class extends _FeatureReduction_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.type="selection"}clone(){return new t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["selection"]})],p.prototype,"type",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureReductionSelection")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "m0D6":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/lengthUtils.js ***!
  \********************************************************************/
/*! exports provided: meterIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meterIn", function() { return m; });
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/support/Ellipsoid.js */ "IlWj");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const m={inches:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","inches"),feet:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","feet"),"us-feet":Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","us-feet"),yards:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","yards"),miles:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","miles"),"nautical-miles":Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","nautical-miles"),millimeters:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","millimeters"),centimeters:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","centimeters"),decimeters:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","decimeters"),meters:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","meters"),kilometers:Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertUnit"])(1,"meters","kilometers"),"decimal-degrees":1/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__["lengthToDegrees"])(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_0__["earth"].radius)};


/***/ }),

/***/ "o9qb":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureReductionCluster.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../PopupTemplate.js */ "SFah");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./commonProperties.js */ "IvSi");
/* harmony import */ var _AggregateField_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AggregateField.js */ "0aXd");
/* harmony import */ var _LabelClass_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LabelClass.js */ "wkZP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var c;let m=c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(e){super(e),this.type="cluster",this.clusterRadius=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("80px"),this.clusterMinSize=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("12px"),this.clusterMaxSize=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])("50px"),this.popupEnabled=!0,this.popupTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=null}clone(){return new c({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.labelingInfo),labelsVisible:this.labelsVisible,fields:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fields),popupEnabled:this.popupEnabled,popupTemplate:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.popupTemplate)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["cluster"],readOnly:!0,json:{write:!0}})],m.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,cast:e=>"auto"===e?e:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"])(e),json:{write:!0}})],m.prototype,"clusterRadius",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"],json:{write:!0}})],m.prototype,"clusterMinSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,cast:_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["toPt"],json:{write:!0}})],m.prototype,"clusterMaxSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["popupEnabled"])],m.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],m.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_LabelClass_js__WEBPACK_IMPORTED_MODULE_15__["default"]],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],m.prototype,"labelingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_13__["labelsVisible"])],m.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_AggregateField_js__WEBPACK_IMPORTED_MODULE_14__["default"]],json:{write:!0}})],m.prototype,"fields",void 0),m=c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.FeatureReductionCluster")],m);var d=m;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "u6iX":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/StreamLayer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/global.js */ "3r0u");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/extensions/serializableProperty/reader.js */ "C4aV");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/fieldUtils.js */ "wdpY");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../chunks/symbols.js */ "nNR5");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../symbols/support/ElevationInfo.js */ "/RTN");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../renderers/Renderer.js */ "ZnuT");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ "tCO6");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ "2gBT");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ "JhoD");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ "tI3Y");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ "R4xK");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../renderers/support/types.js */ "XNvV");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./support/Field.js */ "ofM5");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ "YBpl");
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./support/LabelClass.js */ "wkZP");
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ "Bbcg");
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./support/labelingInfo.js */ "EOvV");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../support/popupUtils.js */ "9Ruv");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../tasks/support/Query.js */ "xk++");
/* harmony import */ var _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./support/PurgeOptions.js */ "vHOR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const $=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.StreamLayer"),ee=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"});let re=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_41__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_45__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_44__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_43__["RefreshableLayer"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_40__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_28__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_42__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_25__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_24__["default"]))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new _support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__["default"],this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){"WebSocket"in _core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"]||Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."));const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service"]},e).catch((e=>e)).then((()=>this._fetchService(o)))),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,r){return Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["read"])(e,r)}writeWebSceneFeatureReduction(e,r,t,o){Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["writeTarget"])(e,r,"layerDefinition.featureReduction",o)}get fieldsIndex(){return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_39__["default"](this.fields)}set renderer(e){Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(e,this.fields),this._set("renderer",e)}readRenderer(e,r,t){const o=(r=r.layerDefinition||r).drawingInfo&&r.drawingInfo.renderer||void 0;if(o){const e=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["read"])(o,r,t)||void 0;return e||$.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t}),e}if(r.defaultSymbol)return r.types&&r.types.length?new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_31__["default"]({defaultSymbol:te(r.defaultSymbol,r,t),field:r.typeIdField,uniqueValueInfos:r.types.map((e=>({id:e.id,symbol:te(e.symbol,e,t)})))}):new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_35__["default"]({symbol:te(r.defaultSymbol,r,t)})}writeRenderer(e,r,t,o){Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["write"])(e,r,t,o)}writeWebSceneRenderer(e,r,t,o){Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_37__["write"])(e,r,"layerDefinition.drawingInfo.renderer",o)}createPopupTemplate(e){return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_50__["createPopupTemplate"])(this,e)}createQuery(){const e=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_51__["default"];return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,r){if(!this.fields)return null;let t=null;return this.fields.some((r=>(r.name===e&&(t=r.domain),!!t))),t}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var r;if(!!this.webSocketUrl){var t;if(null==(t=this.timeInfo)||!t.trackIdField)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:r}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=r}return this.sourceJSON={...null!=(r=this.sourceJSON)?r:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(this.renderer,this.fields),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixTimeInfoFields"])(this.timeInfo,this.fields),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_49__["loadStyleRenderer"])(this,{origin:"service"})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],re.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["fields","title"]})],re.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],re.prototype,"definitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],re.prototype,"displayField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_26__["default"]})],re.prototype,"elevationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("featureReduction",["layerDefinition.featureReduction"])],re.prototype,"readFeatureReduction",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_47__["webSceneFeatureReductionTypes"]}})],re.prototype,"writeWebSceneFeatureReduction",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_Field_js__WEBPACK_IMPORTED_MODULE_38__["default"]]})],re.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["fields"]})],re.prototype,"fieldsIndex",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],re.prototype,"geometryDefinition",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["point","polygon","polyline","multipoint"],json:{read:{reader:ee.read}}})],re.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["labelsVisible"])],re.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:[_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_46__["default"]],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_48__["reader"]},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],re.prototype,"labelingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["legendEnabled"])],re.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["show","hide"]})],re.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]})],re.prototype,"maxReconnectionAttempts",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__["Integer"]})],re.prototype,"maxReconnectionInterval",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],re.prototype,"objectIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],re.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["popupEnabled"])],re.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],re.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_support_PurgeOptions_js__WEBPACK_IMPORTED_MODULE_52__["default"]})],re.prototype,"purgeOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__["rendererTypes"],json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],re.prototype,"renderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],re.prototype,"readRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("renderer")],re.prototype,"writeRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_36__["webSceneRendererTypes"]}})],re.prototype,"writeWebSceneRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["screenSizePerspectiveEnabled"])],re.prototype,"screenSizePerspectiveEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"],json:{origins:{service:{read:{source:"spatialReference"}}}}})],re.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1}})],re.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_27__["url"])],re.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:Number})],re.prototype,"updateInterval",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String})],re.prototype,"webSocketUrl",void 0),re=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.StreamLayer")],re);const te=Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__["createTypeReader"])({types:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["a"]});var oe=re;/* harmony default export */ __webpack_exports__["default"] = (oe);


/***/ }),

/***/ "vHOR":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/PurgeOptions.js ***!
  \******************************************************************/
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
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;let p=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new t({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],p.prototype,"age",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],p.prototype,"ageReceived",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],p.prototype,"displayCount",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],p.prototype,"maxObservations",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.PurgeOptions")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ })

}]);
//# sourceMappingURL=StreamLayer-js-es2015.js.map