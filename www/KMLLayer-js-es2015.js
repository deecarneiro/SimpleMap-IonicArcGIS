(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["KMLLayer-js"],{

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

/***/ "5eZs":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/KMLSublayer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/Loadable.js */ "bV/r");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./kmlUtils.js */ "BGvB");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var j;let S=j=class extends(_core_Evented_js__WEBPACK_IMPORTED_MODULE_16__["default"].EventedMixin(Object(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupportMixin"])(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_18__["default"]))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenOnce"])(this,"networkLink").then((()=>Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_19__["whenTrueOnce"])(this,"visible"))).then((()=>this.load()))}load(e){if(!this.networkLink)return;const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null,o=this._fetchService(this._get("networkLink").href,s).then((e=>{const r=Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["computeExtent"])(e.sublayers);this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(r),this.sourceJSON=e;const s=Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"].ofType(j),Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["sublayersFromJSON"])(j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(o),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this)}set sublayers(e){const r=this._get("sublayers");r&&(r.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"].ofType(j),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,r){return!!r.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((r=>r.layer=e))}_fetchService(e,r){return Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["fetchService"])(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((e=>Object(_kmlUtils_js__WEBPACK_IMPORTED_MODULE_20__["parseKML"])(e.data)))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],S.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],S.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,value:null})],S.prototype,"networkLink",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:{allowNull:!0}}})],S.prototype,"parent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:null,json:{write:{allowNull:!0}}})],S.prototype,"sublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("sublayers")],S.prototype,"castSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:null,json:{read:{source:"name"}}})],S.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:!0})],S.prototype,"visible",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("visible",["visibility"])],S.prototype,"readVisible",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],S.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:null})],S.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],S.prototype,"fullExtent",void 0),S=j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.KMLSublayer")],S);var _=S;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "9fxc":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/KMLLayer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/Collection.js */ "LE9a");
/* harmony import */ var _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/CollectionFlattener.js */ "TRCY");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/kmlUtils.js */ "BGvB");
/* harmony import */ var _support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/KMLSublayer.js */ "5eZs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const E=["kml","xml"];let w=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_24__["RefreshableLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_25__["ScaleRangeLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"]))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new _core_CollectionFlattener_js__WEBPACK_IMPORTED_MODULE_17__["default"]({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"].WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),!0),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders}readSublayers(e,r,t){return Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["sublayersFromJSON"])(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"],r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift()}r.visibleFolders=t}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["getFilename"])(this.url,E)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((()=>this._fetchService(t)))),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this)}async _fetchService(e){const r=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["fetchService"])(this.url,this.outSpatialReference,this.refreshInterval,e))),t=Object(_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_26__["parseKML"])(r.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(e?e.union(o.fullExtent):e=o.fullExtent.clone())};return r(this),e}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],w.prototype,"allSublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_13__["default"]})],w.prototype,"outSpatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],w.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1,write:!1}})],w.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide","hide-children"]})],w.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["KML"]})],w.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_16__["default"].ofType(_support_KMLSublayer_js__WEBPACK_IMPORTED_MODULE_27__["default"]),json:{write:{ignoreOrigin:!0}}})],w.prototype,"sublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])(["web-map","portal-item"],"sublayers",["visibleFolders"])],w.prototype,"readSublayersFromItemOrWebMap",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("service","sublayers",["sublayers"])],w.prototype,"readSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("sublayers")],w.prototype,"writeSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1}})],w.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],w.prototype,"title",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["url"])],w.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["sublayers"]})],w.prototype,"visibleSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],w.prototype,"extent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["extent"]})],w.prototype,"fullExtent",null),w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.KMLLayer")],w);var O=w;/* harmony default export */ __webpack_exports__["default"] = (O);


/***/ }),

/***/ "DbUH":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js ***!
  \****************************************************************/
/*! exports provided: PortalLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalLayer", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../portal/Portal.js */ "AiS/");
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../portal/PortalItem.js */ "p+Gi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.mixins.PortalLayer"),d=r=>{let d=class extends r{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]}}destroy(){var t;null==(t=this.portalItem)||t.destroy(),this.portalItem=null}set portalItem(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))}readPortalItem(t,r,e){if(r.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]({id:r.itemId,portal:e&&e.portal})}writePortalItem(t,r){t&&t.id&&(r.itemId=t.id)}async loadFromPortal(t,r){if(this.portalItem&&this.portalItem.id)try{const e=await Promise.all(/*! import() | portal-support-layersLoader-js */[__webpack_require__.e("common"), __webpack_require__.e("portal-support-layersLoader-js")]).then(__webpack_require__.bind(null, /*! ../../portal/support/layersLoader.js */ "O5Ly"));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["throwIfAborted"])(r),await e.load({instance:this,supportedTypes:t.supportedTypes,validateItem:t.validateItem,supportsData:t.supportsData},r)}catch(t){throw n.warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${t}`),t}}read(t,r){r&&(r.layer=this),super.read(t,r)}write(t,r){const e=r&&r.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_13__["default"].getDefault());return e&&o&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["hasSamePortal"])(o.restUrl,e.restUrl)?(r.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,{layer:this})),null):super.write(t,{...r,layer:this})}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],d.prototype,"portalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("web-document","portalItem",["itemId"])],d.prototype,"readPortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("web-document","portalItem",{itemId:{type:String}})],d.prototype,"writePortalItem",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"resourceReferences",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.PortalLayer")],d),d};


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

/***/ "WmKv":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js ***!
  \********************************************************************/
/*! exports provided: ScaleRangeLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleRangeLayer", function() { return s; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=s=>{let t=class extends s{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get scaleRangeId(){return`${this.minScale},${this.maxScale}`}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,nonNullable:!0,json:{write:!0}})],t.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["minScale","maxScale"]})],t.prototype,"scaleRangeId",null),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ScaleRangeLayer")],t),t};


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

/***/ "jhcG":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js ***!
  \*********************************************************************/
/*! exports provided: RefreshableLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshableLayer", function() { return o; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=o=>{let t=class extends o{constructor(){super(...arguments),this.refreshInterval=0}refresh(){this.emit("refresh")}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,cast:r=>r>=.1?r:r<=0?0:.1,json:{write:!0,origins:{"web-document":{write:!0}}}})],t.prototype,"refreshInterval",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.RefreshableLayer")],t),t};


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

/***/ "mXvl":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js ***!
  \***************************************************************/
/*! exports provided: BlendLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendLayer", function() { return t; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{default:"normal",read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],s.prototype,"effect",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.BlendLayer")],s),s};


/***/ })

}]);
//# sourceMappingURL=KMLLayer-js-es2015.js.map