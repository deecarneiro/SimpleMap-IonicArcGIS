(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"],{

/***/ "/b0d":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/Input.js ***!
  \*****************************************************************/
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
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],e.prototype,"type",void 0),e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.Input")],e);var p=e;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

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

/***/ "1x4M":
/*!********************************************************!*\
  !*** ./node_modules/@arcgis/core/form/FormTemplate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ExpressionInfo.js */ "za7T");
/* harmony import */ var _support_elements_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/elements.js */ "aqJP");
/* harmony import */ var _elements_GroupElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./elements/GroupElement.js */ "uHfw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var j;const d=Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["buildTypeMaps"])(_elements_GroupElement_js__WEBPACK_IMPORTED_MODULE_15__["default"]);let E=j=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.title=null}castElements(e){return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["ensureType"])(e,d)}readElements(e,r){return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["fromJSON"])(r.formElements,d)}writeElements(e,r){r.formElements=Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_14__["toJSON"])(e,d)}clone(){return new j({description:this.description,expressionInfos:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.expressionInfos),elements:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.elements),title:this.title})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],E.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:!0}})],E.prototype,"elements",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("elements")],E.prototype,"castElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("elements",["formElements"])],E.prototype,"readElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("elements")],E.prototype,"writeElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_ExpressionInfo_js__WEBPACK_IMPORTED_MODULE_13__["default"]],json:{write:!0}})],E.prototype,"expressionInfos",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],E.prototype,"title",void 0),E=j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.form.FormTemplate")],E);var y=E;/* harmony default export */ __webpack_exports__["default"] = (y);


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

/***/ "ILGv":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/FieldElement.js ***!
  \*****************************************************************/
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
/* harmony import */ var _layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layers/support/domains.js */ "WXCn");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Element.js */ "qKY0");
/* harmony import */ var _support_inputs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./support/inputs.js */ "ME//");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var n;let l=n=class extends _Element_js__WEBPACK_IMPORTED_MODULE_10__["Element"]{constructor(e){super(e),this.domain=null,this.editable=!0,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field"}clone(){return new n({description:this.description,domain:this.domain,editable:this.editable,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,visibilityExpression:this.visibilityExpression})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({types:_layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__["types"],json:{read:{reader:_layers_support_domains_js__WEBPACK_IMPORTED_MODULE_9__["fromJSON"]},write:!0}})],l.prototype,"domain",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"editable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],l.prototype,"fieldName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],l.prototype,"hint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({types:_support_inputs_js__WEBPACK_IMPORTED_MODULE_11__["types"],json:{read:{source:"inputType"},write:{target:"inputType"}}})],l.prototype,"input",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],l.prototype,"requiredExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.FieldElement")],l);var d=l;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "L+uT":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/fieldProperties.js ***!
  \*********************************************************************/
/*! exports provided: defineFieldProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineFieldProperties", function() { return l; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fieldUtils.js */ "wdpY");
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.js */ "ofM5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.fieldProperties");function l(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__["default"]],value:null},outFields:{type:[String],dependsOn:["fields"],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const t of e){Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(this.fields,t)||s.error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:e})}return Object(_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(this.fields,e)}}}}


/***/ }),

/***/ "ME//":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/support/inputs.js ***!
  \*******************************************************************/
/*! exports provided: types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return s; });
/* harmony import */ var _inputs_Input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputs/Input.js */ "/b0d");
/* harmony import */ var _inputs_BarcodeScannerInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputs/BarcodeScannerInput.js */ "f/7W");
/* harmony import */ var _inputs_ComboBoxInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inputs/ComboBoxInput.js */ "he6E");
/* harmony import */ var _inputs_DateTimePickerInput_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputs/DateTimePickerInput.js */ "a/eU");
/* harmony import */ var _inputs_RadioButtonsInput_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../inputs/RadioButtonsInput.js */ "c9br");
/* harmony import */ var _inputs_TextAreaInput_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inputs/TextAreaInput.js */ "wO9+");
/* harmony import */ var _inputs_TextBoxInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inputs/TextBoxInput.js */ "on0I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s={base:_inputs_Input_js__WEBPACK_IMPORTED_MODULE_0__["default"],key:"type",typeMap:{"barcode-scanner":_inputs_BarcodeScannerInput_js__WEBPACK_IMPORTED_MODULE_1__["default"],"combo-box":_inputs_ComboBoxInput_js__WEBPACK_IMPORTED_MODULE_2__["default"],"datetime-picker":_inputs_DateTimePickerInput_js__WEBPACK_IMPORTED_MODULE_3__["default"],"radio-buttons":_inputs_RadioButtonsInput_js__WEBPACK_IMPORTED_MODULE_4__["default"],"text-area":_inputs_TextAreaInput_js__WEBPACK_IMPORTED_MODULE_5__["default"],"text-box":_inputs_TextBoxInput_js__WEBPACK_IMPORTED_MODULE_6__["default"]}};


/***/ }),

/***/ "W9Wu":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/FeatureLayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/object.js */ "nR38");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "Gj5k");
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
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/Collection.js */ "LE9a");
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/fieldUtils.js */ "wdpY");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../PopupTemplate.js */ "SFah");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../chunks/symbols.js */ "nNR5");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../core/Handles.js */ "r0DZ");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../geometry/HeightModelInfo.js */ "5k2a");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _renderers_Renderer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../renderers/Renderer.js */ "ZnuT");
/* harmony import */ var _renderers_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../renderers/ClassBreaksRenderer.js */ "tCO6");
/* harmony import */ var _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../renderers/UniqueValueRenderer.js */ "2gBT");
/* harmony import */ var _renderers_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../renderers/DictionaryRenderer.js */ "JhoD");
/* harmony import */ var _renderers_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../renderers/DotDensityRenderer.js */ "tI3Y");
/* harmony import */ var _renderers_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../renderers/HeatmapRenderer.js */ "R4xK");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../renderers/support/types.js */ "XNvV");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./support/FieldsIndex.js */ "gLc9");
/* harmony import */ var _form_FormTemplate_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../form/FormTemplate.js */ "1x4M");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../tasks/support/FeatureSet.js */ "8prj");
/* harmony import */ var _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./graphics/sources/MemorySource.js */ "kY3H");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "iyhF");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./support/TimeInfo.js */ "+AYZ");
/* harmony import */ var _mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./mixins/TemporalLayer.js */ "YBpl");
/* harmony import */ var _support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./support/FeatureIndex.js */ "eDnu");
/* harmony import */ var _support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./support/FeatureReduction.js */ "7MGP");
/* harmony import */ var _support_LabelClass_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./support/LabelClass.js */ "wkZP");
/* harmony import */ var _support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./support/FeatureReductionCluster.js */ "o9qb");
/* harmony import */ var _support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./support/FeatureReductionSelection.js */ "kbDD");
/* harmony import */ var _support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./support/featureReductionUtils.js */ "Bbcg");
/* harmony import */ var _support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./support/FeatureTemplate.js */ "rOQw");
/* harmony import */ var _support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./support/FeatureType.js */ "orEy");
/* harmony import */ var _support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./support/fieldProperties.js */ "L+uT");
/* harmony import */ var _support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./support/labelingInfo.js */ "EOvV");
/* harmony import */ var _support_Relationship_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./support/Relationship.js */ "uOKz");
/* harmony import */ var _chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../chunks/DataLayerSource.js */ "s7US");
/* harmony import */ var _renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../renderers/support/styleUtils.js */ "YOx9");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../support/popupUtils.js */ "9Ruv");
/* harmony import */ var _tasks_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../tasks/support/AttachmentQuery.js */ "tSEa");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../tasks/support/Query.js */ "xk++");
/* harmony import */ var _tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../tasks/support/RelationshipQuery.js */ "n6Nx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const Ee=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_7__["JSONMap"]({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),Te={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"},Me="FeatureLayer",Re=_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__["default"].getLogger("esri.layers.FeatureLayer");function Ce(e){return e&&e instanceof _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"]}function Oe(e,t,r){return!!(e&&e.hasOwnProperty(t)?e[t]:r)}function Ae(e,t,r){return e&&e.hasOwnProperty(t)?e[t]:r}const _e=Object(_support_fieldProperties_js__WEBPACK_IMPORTED_MODULE_60__["defineFieldProperties"])();function Le(e,t,r){const i=!(null==r||!r.writeLayerSchema);return{enabled:i,ignoreOrigin:i}}let Pe=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_45__["BlendLayer"])(Object(_mixins_TemporalLayer_js__WEBPACK_IMPORTED_MODULE_51__["TemporalLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_49__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_48__["RefreshableLayer"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_44__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_30__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_47__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_26__["MultiOriginJSONMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_46__["CustomParametersMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_25__["default"])))))))))){constructor(...e){super(...e),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_24__["default"],this.capabilities=null,this.charts=null,this.copyright=null,this.displayField=null,this.definitionExpression=null,this.dynamicDataSource=null,this.editFieldsInfo=null,this.editingEnabled=!0,this.editingInfo=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.formTemplate=null,this.fullExtent=null,this.gdbVersion=null,this.geometryProperties=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.layerId=void 0,this.legendEnabled=!0,this.minScale=0,this.maxScale=0,this.globalIdField=null,this.objectIdField=null,this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.relationships=null,this.sourceJSON=null,this.returnM=void 0,this.returnZ=void 0,this.screenSizePerspectiveEnabled=!0,this.serviceDefinitionExpression=null,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"].WGS84,this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.trackIdField=null,this.type="feature",this.typeIdField=null,this.types=null,this.indexes=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"].ofType(_support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__["FeatureIndex"])),this.userIsAdmin=!1,this.version=void 0,this.visible=!0}destroy(){var e;null==(e=this.source)||e.destroy(),this._handles&&(this._handles.destroy(),this._handles=null)}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.signal:null;if(this.portalItem&&this.portalItem.loaded&&this.source)return void this.addResolvingPromise(this.createGraphicsSource(t).then((e=>this._initLayerProperties(e))));const i=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection"]},e).catch((e=>e)).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstLayerId(t);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this._initLayerProperties(await this.createGraphicsSource(t))}));return this.addResolvingPromise(i),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["resolve"])(this)}readCapabilities(e,t){return t=t.layerDefinition||t,{attachment:this._readAttachmentCapabilities(t.attachmentProperties),data:this._readDataCapabilities(t),metadata:this._readMetadataCapabilities(t),operations:this._readOperationsCapabilities(t.capabilities||e,t),query:this._readQueryCapabilities(t),queryRelated:this._readQueryRelatedCapabilities(t),editing:this._readEditingCapabilities(t)}}get createQueryVersion(){return this.definitionExpression,this.dynamicDataSource,this.timeExtent,this.timeOffset,this.geometryType,this.gdbVersion,this.historicMoment,this.returnZ,this.capabilities,this.returnM,(this._get("createQueryVersion")||0)+1}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}readEditingInfo(e,t){const{editingInfo:r}=t;return r?{lastEditDate:null!=r.lastEditDate?new Date(r.lastEditDate):null}:null}readFeatureReduction(e,t){return Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["read"])(e,t)}writeWebSceneFeatureReduction(e,t,r,i){Object(_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["writeTarget"])(e,t,"layerDefinition.featureReduction",i)}get fieldsIndex(){return new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_40__["default"](this.fields||[])}readIsTable(e,t){return"Table"===(t=t&&t.layerDefinition||t).type||!t.geometryType}writeIsTable(e,r,i,o){null!=o&&o.writeLayerSchema&&Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])(i,e?"Table":"Feature Layer",r)}readMinScale(e,t){return t.effectiveMinScale||e||0}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}get parsedUrl(){const e=this.url?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["urlToObject"])(this.url):null;return null!=e&&(null!=this.dynamicDataSource?e.path=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["join"])(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_13__["join"])(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(e,this.fields),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["read"])(i,t,r)||void 0;return e||Re.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new _renderers_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_33__["default"]({defaultSymbol:Qe(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:Qe(e.symbol,e,r)})))}):new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_37__["default"]({symbol:Qe(t.defaultSymbol,t,r)})}set source(e){const t=this._get("source");t!==e&&(Ce(t)&&this._resetMemorySource(t),Ce(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof _core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"]?new _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__["default"]({layer:this,items:e}):e:null}readSource(e,t){const r=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_42__["default"].fromJSON(t.featureSet);return new _graphics_sources_MemorySource_js__WEBPACK_IMPORTED_MODULE_43__["default"]({layer:this,items:r&&r.features||[]})}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}readTemplates(e,t){const r=t.editFieldsInfo,i=r&&r.creatorField,o=r&&r.editorField;return e=e&&e.map((e=>_support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__["default"].fromJSON(e))),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,t){const i=t.layerDefinition&&t.layerDefinition.name||t.name,o=t.title||t.layerDefinition&&t.layerDefinition.title;if(i){const e=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return this.url?Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["titleFromUrlAndName"])(this.url,i):i;let t=i;if(!t&&this.url){const e=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["parse"])(this.url);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)&&(t=e.title)}if(!t)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==t&&(t=e+" - "+t),Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["cleanTitle"])(t)}if("item-title"===this.sublayerTitleMode&&o)return o}readTitleFromWebMap(e,t){return t.title||t.layerDefinition&&t.layerDefinition.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r){const e=Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["getField"])(t.fields,r);e&&(r=e.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r&&r.creatorField,o=r&&r.editorField;return e&&e.map((e=>(e=_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__["default"].fromJSON(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,o),e)))}set url(e){const t=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["sanitizeUrlWithLayerId"])(this,e,Re);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,i){Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_27__["writeUrlWithLayerId"])(this,e,null,t,i)}readVersion(e,t){return t.currentVersion?t.currentVersion:t.hasOwnProperty("capabilities")||t.hasOwnProperty("drawingInfo")||t.hasOwnProperty("hasAttachments")||t.hasOwnProperty("htmlPopupType")||t.hasOwnProperty("relationships")||t.hasOwnProperty("timeInfo")||t.hasOwnProperty("typeIdField")||t.hasOwnProperty("types")?10:9.3}readVisible(e,t){return t.layerDefinition&&null!=t.layerDefinition.defaultVisibility?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0}addAttachment(e,t){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("addAttachment"in this.source))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support addAttachment capability");return this.source.addAttachment(e,t)}))}updateAttachment(e,t,r){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("updateAttachment"in this.source))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support updateAttachment capability");return this.source.updateAttachment(e,t,r)}))}async applyEdits(e,t){const r=await __webpack_require__.e(/*! import() | graphics-editingSupport-js */ "graphics-editingSupport-js").then(__webpack_require__.bind(null, /*! ./graphics/editingSupport.js */ "CJn3"));return await this.load(),r.applyEdits(this,this.source,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_65__["createPopupTemplate"])(this,e)}async createGraphicsSource(e){if(this._hasMemorySource())return this.emit("graphics-source-create",{graphicsSource:this.source}),this.source.load({signal:e});const t=await __webpack_require__.e(/*! import() | graphics-sources-FeatureLayerSource-js */ "graphics-sources-FeatureLayerSource-js").then(__webpack_require__.bind(null, /*! ./graphics/sources/FeatureLayerSource.js */ "DlAm"));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["throwIfAborted"])(e);const r=await new t.default({layer:this}).load({signal:e});return this.emit("graphics-source-create",{graphicsSource:r}),r}createQuery(){const e=new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"],t=this.get("capabilities.data");e.dynamicDataSource=this.dynamicDataSource,e.gdbVersion=this.gdbVersion,e.historicMoment=this.historicMoment,e.returnGeometry=!0,t&&(t.supportsZ&&null!=this.returnZ&&(e.returnZ=this.returnZ),t.supportsM&&null!=this.returnM&&(e.returnM=this.returnM)),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e.multipatchOption="multipatch"===this.geometryType?"xyFootprint":null,e}deleteAttachments(e,t){return this.load().then((()=>this._checkAttachmentSupport(e))).then((()=>{if(!("deleteAttachments"in this.source))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support deleteAttachments capability");return this.source.deleteAttachments(e,t)}))}fetchRecomputedExtents(e){return this.load({signal:null==e?void 0:e.signal}).then((()=>{if(this.source.fetchRecomputedExtents)return this.source.fetchRecomputedExtents(e);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support fetchUpdates capability")}))}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let o=null;return r.some((e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(o=e),!!o)})),o}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}queryAttachments(e,t){return e=_tasks_support_AttachmentQuery_js__WEBPACK_IMPORTED_MODULE_66__["default"].from(e),this.load().then((()=>{if(!this.get("capabilities.data.supportsAttachment"))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"this layer doesn't support attachments");const{attachmentTypes:t,objectIds:r,globalIds:i,num:o,size:s,start:a,where:n}=e;if(!this.get("capabilities.operations.supportsQueryAttachments")){const p=r&&r.length>1,l=t&&t.length,u=i&&i.length,c=s&&s.length;if(p||l||u||c||o||a||n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",e)}if(!(r&&r.length||n))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"'objectIds' or 'where' are required to perform attachment query",e);if(!("queryAttachments"in this.source))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryAttachments capability",e);return this.source.queryAttachments(e)}))}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e)||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>{if(this.source.queryObjectIds)return this.source.queryObjectIds(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e)||this.createQuery(),t);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryObjectIds capability")}))}queryFeatureCount(e,t){return this.load().then((()=>{if(this.source.queryFeatureCount)return this.source.queryFeatureCount(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e)||this.createQuery(),t);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryFeatureCount capability")}))}queryExtent(e,t){return this.load().then((()=>{if(this.source.queryExtent)return this.source.queryExtent(_tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_67__["default"].from(e)||this.createQuery(),t);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryExtent capability")}))}queryRelatedFeatures(e,t){return this.load().then((()=>{if("queryRelatedFeatures"in this.source)return this.source.queryRelatedFeatures(_tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__["default"].from(e),t);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryRelatedFeatures capability")}))}queryRelatedFeaturesCount(e,t){return this.load().then((()=>{if("queryRelatedFeaturesCount"in this.source)return this.source.queryRelatedFeaturesCount(_tasks_support_RelationshipQuery_js__WEBPACK_IMPORTED_MODULE_68__["default"].from(e),t);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"Layer source does not support queryRelatedFeaturesCount capability")}))}read(e,t){const r=e.featureCollection;if(r){const e=r.layers;e&&1===e.length&&(super.read(e[0],t),null!=r.showLegend&&super.read({showLegend:r.showLegend},t))}super.read(e,t),t&&"service"===t.origin&&this.revert(["objectIdField","fields","timeInfo","spatialReference"],"service")}write(e,t){var r,i;const o=(t={...t,writeLayerSchema:null!=(r=null==(i=t)?void 0:i.writeLayerSchema)?r:this._hasMemorySource()}).origin,s=t.layerContainerType,a=t.messages;if(this.isTable){if("web-scene"===o||"web-map"===o&&"tables"!==s)return a&&a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,{layer:this})),null;if(this._hasMemorySource())return a&&a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,{layer:this})),null}else if(this.loaded&&"web-map"===o&&"tables"===s)return a&&a.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("layer:unsupported",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,{layer:this})),null;return super.write(e,t)}_readEditingEnabled(e,t,r){var i;let o=null==(i=e.layerDefinition)?void 0:i.capabilities;return o?this._hasEditingCapability(o):(o=e.capabilities,!(t&&"web-map"===(null==r?void 0:r.origin)&&!this._hasMemorySource()&&o)||this._hasEditingCapability(o))}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,r,i,o){e||(Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])("layerDefinition.capabilities","Query",r),!i||null!=o&&o.writeLayerSchema||(r.capabilities="Query"))}_checkAttachmentSupport(e){const{attributes:t}=e,{objectIdField:r}=this;return this.get("capabilities.data.supportsAttachment")?e?t?t[r]?void 0:Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,`feature is missing the identifying attribute ${r}`)):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"'attributes' are required on a feature to query attachments")):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"A feature is required to add/delete/update attachments")):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_16__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"](Me,"this layer doesn't support attachments"))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}_fetchFirstLayerId(e){return Object(_request_js__WEBPACK_IMPORTED_MODULE_22__["default"])(this.url,{query:{f:"json",...this.customParameters},responseType:"json",signal:e}).then((e=>{const t=e.data;if(t)return Array.isArray(t.layers)&&t.layers.length>0?t.layers[0].id:Array.isArray(t.tables)&&t.tables.length>0?t.tables[0].id:void 0}))}async _initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",url:this.parsedUrl})),this._verifySource(),this._verifyFields(),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixRendererFields"])(this.renderer,this.fields),Object(_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_20__["fixTimeInfoFields"])(this.timeInfo,this.fields),Object(_renderers_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_64__["loadStyleRenderer"])(this,{origin:"service"})}_verifyFields(){const e=this.parsedUrl&&this.parsedUrl.path||"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields&&this.fields.some((function(e){return"geometry"===e.type}))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach((e=>{const r=e.prototype&&e.prototype.attributes;r&&t&&delete r[t]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_12__["default"]("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this._handles.add([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this._handles.remove("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}_readAttachmentCapabilities(e){const t={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1};return e&&Array.isArray(e)&&e.forEach((e=>{const r=Te[e.name];r&&(t[r]=!!e.isEnabled)})),t}_readDataCapabilities(e){return{isVersioned:Oe(e,"isDataVersioned",!1),supportsAttachment:Oe(e,"hasAttachments",!1),supportsM:Oe(e,"hasM",!1),supportsZ:Oe(e,"hasZ",!1)}}_readMetadataCapabilities(e){return{supportsAdvancedFieldProperties:Oe(e,"supportsFieldDescriptionProperty",!1)}}_readOperationsCapabilities(e,t){const r=e?e.toLowerCase().split(",").map((e=>e.trim())):[],i=-1!==r.indexOf("editing");let o=i&&-1!==r.indexOf("create"),s=i&&-1!==r.indexOf("delete"),a=i&&-1!==r.indexOf("update");const n=-1!==r.indexOf("changetracking");return i&&!(o||s||a)&&(o=s=a=!0),{supportsCalculate:Oe(t,"supportsCalculate",!1),supportsTruncate:Oe(t,"supportsTruncate",!1),supportsValidateSql:Oe(t,"supportsValidateSql",!1),supportsAdd:o,supportsDelete:s,supportsEditing:i,supportsChangeTracking:n,supportsQuery:-1!==r.indexOf("query"),supportsQueryAttachments:Oe(t.advancedQueryCapabilities,"supportsQueryAttachments",!1),supportsResizeAttachments:Oe(t,"supportsAttachmentsResizing",!1),supportsSync:-1!==r.indexOf("sync"),supportsUpdate:a,supportsExceedsLimitStatistics:Oe(t,"supportsExceedsLimitStatistics",!1)}}_readQueryCapabilities(e){const t=e.advancedQueryCapabilities,r=e.ownershipBasedAccessControlForFeatures,i=e.archivingInfo,o=(e.supportedQueryFormats||"").split(",").reduce(((e,t)=>{const r=t.toLowerCase().trim();return r&&e.add(r),e}),new Set);return{supportsStatistics:Oe(t,"supportsStatistics",e.supportsStatistics),supportsPercentileStatistics:Oe(t,"supportsPercentileStatistics",!1),supportsCentroid:Oe(t,"supportsReturningGeometryCentroid",!1),supportsDistance:Oe(t,"supportsQueryWithDistance",!1),supportsDistinct:Oe(t,"supportsDistinct",e.supportsAdvancedQueries),supportsExtent:Oe(t,"supportsReturningQueryExtent",!1),supportsGeometryProperties:Oe(t,"supportsReturningGeometryProperties",!1),supportsHavingClause:Oe(t,"supportsHavingClause",!1),supportsOrderBy:Oe(t,"supportsOrderBy",e.supportsAdvancedQueries),supportsPagination:Oe(t,"supportsPagination",!1),supportsQuantization:Oe(e,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:Oe(e,"supportsQuantizationEditMode",!1),supportsQueryGeometry:Oe(e,"supportsReturningQueryGeometry",!1),supportsResultType:Oe(t,"supportsQueryWithResultType",!1),supportsMaxRecordCountFactor:Oe(t,"supportsMaxRecordCountFactor",!1),supportsSqlExpression:Oe(t,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:Oe(e,"useStandardizedQueries",!1),supportsQueryByOthers:Oe(r,"allowOthersToQuery",!0),supportsHistoricMoment:Oe(i,"supportsQueryWithHistoricMoment",!1),supportsFormatPBF:o.has("pbf"),supportsDisjointSpatialRelationship:Oe(t,"supportsDisjointSpatialRel",!1),supportsCacheHint:Oe(t,"supportsQueryWithCacheHint",!1),maxRecordCountFactor:Ae(e,"maxRecordCountFactor",void 0),maxRecordCount:Ae(e,"maxRecordCount",void 0),standardMaxRecordCount:Ae(e,"standardMaxRecordCount",void 0),tileMaxRecordCount:Ae(e,"tileMaxRecordCount",void 0)}}_readQueryRelatedCapabilities(e){const t=e.advancedQueryCapabilities,r=Oe(t,"supportsAdvancedQueryRelated",!1);return{supportsPagination:Oe(t,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r}}_readEditingCapabilities(e){const t=e.ownershipBasedAccessControlForFeatures;return{supportsGeometryUpdate:Oe(e,"allowGeometryUpdates",!0),supportsGlobalId:Oe(e,"supportsApplyEditsWithGlobalIds",!1),supportsRollbackOnFailure:Oe(e,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:Oe(e,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:Oe(e,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:Oe(t,"allowAnonymousToDelete",!0),supportsDeleteByOthers:Oe(t,"allowOthersToDelete",!0),supportsUpdateByAnonymous:Oe(t,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:Oe(t,"allowOthersToUpdate",!0)}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{read:!1}})],Pe.prototype,"capabilities",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","capabilities",["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"])],Pe.prototype,"readCapabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{origins:{"portal-item":{write:!0},"web-map":{write:!0}}}})],Pe.prototype,"charts",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["definitionExpression","dynamicDataSource","timeExtent","timeOffset","geometryType","gdbVersion","historicMoment","returnZ","capabilities","returnM"]})],Pe.prototype,"createQueryVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{read:{source:"layerDefinition.copyrightText"},origins:{service:{read:{source:"copyrightText"}}}}})],Pe.prototype,"copyright",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{read:{source:"layerDefinition.displayField"},origins:{service:{read:{source:"displayField"}}}}})],Pe.prototype,"displayField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],Pe.prototype,"definitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["s"],readOnly:!0})],Pe.prototype,"defaultSymbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_chunks_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_63__["D"]})],Pe.prototype,"dynamicDataSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Pe.prototype,"editFieldsInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean})],Pe.prototype,"editingEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Pe.prototype,"readEditingEnabled",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Pe.prototype,"readEditingEnabledFromWebMap",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Pe.prototype,"writeEditingEnabled",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Pe.prototype,"writeEditingEnabledToWebMap",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Pe.prototype,"editingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("editingInfo")],Pe.prototype,"readEditingInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["elevationInfo"])],Pe.prototype,"elevationInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:{key:"type",base:_support_FeatureReduction_js__WEBPACK_IMPORTED_MODULE_53__["default"],typeMap:{selection:_support_FeatureReductionSelection_js__WEBPACK_IMPORTED_MODULE_56__["default"],cluster:_support_FeatureReductionCluster_js__WEBPACK_IMPORTED_MODULE_55__["default"]}},json:{write:{target:"layerDefinition.featureReduction"}}})],Pe.prototype,"featureReduction",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("featureReduction",["layerDefinition.featureReduction"])],Pe.prototype,"readFeatureReduction",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:_support_featureReductionUtils_js__WEBPACK_IMPORTED_MODULE_57__["webSceneFeatureReductionTypes"]}})],Pe.prototype,"writeWebSceneFeatureReduction",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({..._e.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{read:!0},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:Le}}}}})],Pe.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["fields"]})],Pe.prototype,"fieldsIndex",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_form_FormTemplate_js__WEBPACK_IMPORTED_MODULE_41__["default"],json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Pe.prototype,"formTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_18__["default"],json:{origins:{service:{read:{source:"extent"}}},read:{source:"layerDefinition.extent"}}})],Pe.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Pe.prototype,"gdbVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Pe.prototype,"geometryProperties",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:Ee.read},"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:Le,writer(e,r,i){const o=e?Ee.toJSON(e):null;o&&Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["setDeepValue"])(i,o,r)}}}},read:{source:"layerDefinition.geometryType",reader:Ee.read}}})],Pe.prototype,"geometryType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasM"}}})],Pe.prototype,"hasM",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{origins:{service:{read:!0}},read:{source:"layerDefinition.hasZ"}}})],Pe.prototype,"hasZ",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,type:_geometry_HeightModelInfo_js__WEBPACK_IMPORTED_MODULE_28__["default"]})],Pe.prototype,"heightModelInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Date})],Pe.prototype,"historicMoment",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],Pe.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Pe.prototype,"isTable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","isTable",["type","geometryType"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Pe.prototype,"readIsTable",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("web-map","isTable")],Pe.prototype,"writeIsTable",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["labelsVisible"])],Pe.prototype,"labelsVisible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_LabelClass_js__WEBPACK_IMPORTED_MODULE_54__["default"]],json:{origins:{service:{read:{source:"drawingInfo.labelingInfo",reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__["reader"]},write:{target:"drawingInfo.labelingInfo",enabled:!1}}},read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:_support_labelingInfo_js__WEBPACK_IMPORTED_MODULE_61__["reader"]},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],Pe.prototype,"labelingInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["opacityDrawingInfo"])],Pe.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{origins:{service:{read:{source:"id"}}},read:!1}})],Pe.prototype,"layerId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["legendEnabled"])],Pe.prototype,"legendEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["show","hide"]})],Pe.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"}}})],Pe.prototype,"minScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","minScale",["minScale","effectiveMinScale"])],Pe.prototype,"readMinScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{origins:{service:{write:{enabled:!1}}},read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"}}})],Pe.prototype,"maxScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","maxScale",["maxScale","effectiveMaxScale"])],Pe.prototype,"readMaxScale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],Pe.prototype,"globalIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","globalIdField",["globalIdField","fields"])],Pe.prototype,"readGlobalIdFieldFromService",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:Le}}}}})],Pe.prototype,"objectIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","objectIdField",["objectIdField","fields"])],Pe.prototype,"readObjectIdFieldFromService",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],Pe.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_e.outFields)],Pe.prototype,"outFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["layerId","dynamicDataSource"]})],Pe.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Pe.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["popupEnabled"])],Pe.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_21__["default"],json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],Pe.prototype,"popupTemplate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["fields","title"]})],Pe.prototype,"defaultPopupTemplate",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_Relationship_js__WEBPACK_IMPORTED_MODULE_62__["default"]],readOnly:!0})],Pe.prototype,"relationships",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__["rendererTypes"],json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:_renderers_support_types_js__WEBPACK_IMPORTED_MODULE_38__["webSceneRendererTypes"],write:{target:"layerDefinition.drawingInfo.renderer",writer:_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["write"]}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:null==r?void 0:r.writeLayerSchema}),writer:_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_39__["write"]}}})],Pe.prototype,"renderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","renderer",["drawingInfo.renderer","defaultSymbol"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Pe.prototype,"readRenderer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Pe.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean})],Pe.prototype,"returnM",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean})],Pe.prototype,"returnZ",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["screenSizePerspectiveEnabled"])],Pe.prototype,"screenSizePerspectiveEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Pe.prototype,"source",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_6__["cast"])("source")],Pe.prototype,"castSource",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item","source",["featureSet"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map","source",["featureSet"])],Pe.prototype,"readSource",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Pe.prototype,"serviceDefinitionExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],Pe.prototype,"readServiceDefinitionExpression",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__["default"],json:{origins:{service:{read:{source:"extent.spatialReference"}}},read:{source:"layerDefinition.extent.spatialReference"}}})],Pe.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_58__["default"]]})],Pe.prototype,"templates",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("templates",["editFieldsInfo","creatorField","editorField","templates"])],Pe.prototype,"readTemplates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_TimeInfo_js__WEBPACK_IMPORTED_MODULE_50__["default"]})],Pe.prototype,"timeInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],Pe.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","title",["name"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Pe.prototype,"readTitle",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("web-map","title",["layerDefinition.name","title"])],Pe.prototype,"readTitleFromWebMap",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],Pe.prototype,"sublayerTitleMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],Pe.prototype,"trackIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:!1}})],Pe.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],Pe.prototype,"typeIdField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","typeIdField"),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("typeIdField",["layerDefinition.typeIdField"])],Pe.prototype,"readTypeIdField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_FeatureType_js__WEBPACK_IMPORTED_MODULE_59__["default"]]})],Pe.prototype,"types",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","types",["types"]),Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("types",["layerDefinition.types"])],Pe.prototype,"readTypes",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,json:{write:!1}})],Pe.prototype,"serverGens",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_core_Collection_js__WEBPACK_IMPORTED_MODULE_19__["default"].ofType(_support_FeatureIndex_js__WEBPACK_IMPORTED_MODULE_52__["FeatureIndex"]),readOnly:!0})],Pe.prototype,"indexes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_29__["url"])],Pe.prototype,"url",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__["writer"])("url")],Pe.prototype,"writeUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0})],Pe.prototype,"userIsAdmin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{origins:{service:{read:!0}},read:!1}})],Pe.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],Pe.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility"}}}}})],Pe.prototype,"visible",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__["reader"])("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Pe.prototype,"readVisible",null),Pe=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__["subclass"])("esri.layers.FeatureLayer")],Pe);const Qe=Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_9__["createTypeReader"])({types:_chunks_symbols_js__WEBPACK_IMPORTED_MODULE_23__["a"]});var qe=Pe;/* harmony default export */ __webpack_exports__["default"] = (qe);


/***/ }),

/***/ "XuPK":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/RelationshipElement.js ***!
  \************************************************************************/
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
/* harmony import */ var _popup_support_RelatedRecordsInfoFieldOrder_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../popup/support/RelatedRecordsInfoFieldOrder.js */ "ouUy");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Element.js */ "qKY0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let l=p=class extends _Element_js__WEBPACK_IMPORTED_MODULE_11__["Element"]{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editable=!0,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editable:this.editable,label:this.label,orderByFields:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],l.prototype,"displayCount",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["list"],json:{write:!0}})],l.prototype,"displayType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{default:!0,write:!0}})],l.prototype,"editable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_popup_support_RelatedRecordsInfoFieldOrder_js__WEBPACK_IMPORTED_MODULE_10__["default"]],json:{write:!0}})],l.prototype,"orderByFields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],l.prototype,"relationshipId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:["relationship"],json:{read:!1,write:!0}})],l.prototype,"type",void 0),l=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.form.elements.RelationshipElement")],l);var d=l;/* harmony default export */ __webpack_exports__["default"] = (d);


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

/***/ "a/eU":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Input.js */ "/b0d");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;function n(e){return null!=e?new Date(e):null}function m(e){return e?e.getTime():null}let a=s=class extends _Input_js__WEBPACK_IMPORTED_MODULE_11__["default"]{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return n(r.max)}writeMax(e,r){r.max=m(e)}readMin(e,r){return n(r.min)}writeMin(e,r){r.min=m(e)}clone(){return new s({includeTime:this.includeTime,max:this.max,min:this.min,type:this.type})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{write:!0,default:!1}})],a.prototype,"includeTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Date,json:{type:Number,write:!0}})],a.prototype,"max",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("max")],a.prototype,"readMax",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("max")],a.prototype,"writeMax",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Date,json:{type:Number,write:!0}})],a.prototype,"min",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("min")],a.prototype,"readMin",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__["writer"])("min")],a.prototype,"writeMin",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["datetime-picker"],json:{read:!1,write:!0}})],a.prototype,"type",void 0),a=s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.form.elements.inputs.DateTimePickerInput")],a);var u=a;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "aqJP":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/support/elements.js ***!
  \************************************************************/
/*! exports provided: buildTypeMaps, ensureType, fromJSON, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTypeMaps", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ensureType", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return u; });
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _elements_Element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../elements/Element.js */ "qKY0");
/* harmony import */ var _elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/AttachmentElement.js */ "ll84");
/* harmony import */ var _elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/FieldElement.js */ "ILGv");
/* harmony import */ var _elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/RelationshipElement.js */ "XuPK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(t){return{typesWithGroup:{base:_elements_Element_js__WEBPACK_IMPORTED_MODULE_1__["Element"],key:"type",typeMap:{attachment:_elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],field:_elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],group:t,relationship:_elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]}},typesWithoutGroup:{base:_elements_Element_js__WEBPACK_IMPORTED_MODULE_1__["Element"],key:"type",typeMap:{attachment:_elements_AttachmentElement_js__WEBPACK_IMPORTED_MODULE_2__["default"],field:_elements_FieldElement_js__WEBPACK_IMPORTED_MODULE_3__["default"],relationship:_elements_RelationshipElement_js__WEBPACK_IMPORTED_MODULE_4__["default"]}}}}function i(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>r[t.type].fromJSON(t)))}function u(t,e,p=!0){if(!t)return null;const r=p?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>r[t.type])).map((t=>t.toJSON()))}function s(e,p,r=!0){return e?e.map((e=>Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_0__["ensureOneOfType"])(r?p.typesWithGroup:p.typesWithoutGroup,e))):null}


/***/ }),

/***/ "bu/E":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/TextInput.js ***!
  \*********************************************************************/
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
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "/b0d");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;let p=s=class extends _Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this.maxLength=null,this.minLength=0,this.type=null}clone(){return new s({maxLength:this.maxLength,minLength:this.minLength,type:this.type})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],p.prototype,"maxLength",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{default:0,write:!0}})],p.prototype,"minLength",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],p.prototype,"type",void 0),p=s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.support.TextInput")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "c9br":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "/b0d");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e;let p=e=class extends _Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.type="radio-buttons"}clone(){return new e}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["radio-buttons"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.RadioButtonsInput")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "eDnu":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureIndex.js ***!
  \******************************************************************/
/*! exports provided: default, FeatureIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureIndex", function() { return i; });
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
var t;let i=t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(o){super(o)}clone(){const{name:o,fields:r,isAscending:s,isUnique:e,description:i}=this;return new t({name:o,fields:r,isAscending:s,isUnique:e,description:i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],i.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],i.prototype,"fields",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],i.prototype,"isAscending",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],i.prototype,"isUnique",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({constructOnly:!0})],i.prototype,"description",void 0),i=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureIndex")],i);var p=i;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "f/7W":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js ***!
  \*******************************************************************************/
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
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "/b0d");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;let p=t=class extends _Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["barcode-scanner"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.BarcodeScannerInput")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "he6E":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js ***!
  \*************************************************************************/
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
/* harmony import */ var _Input_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Input.js */ "/b0d");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var t;let p=t=class extends _Input_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(o){super(o),this.type="combo-box"}clone(){return new t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["combo-box"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.ComboBoxInput")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "iyhF":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js ***!
  \**************************************************************************/
/*! exports provided: CustomParametersMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomParametersMixin", function() { return e; });
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
const e=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.CustomParametersMixin")],t),t};


/***/ }),

/***/ "kY3H":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js ***!
  \***************************************************************************/
/*! exports provided: default, MemorySource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorySource", function() { return G; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_shared_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/shared.js */ "y/NR");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../geometry/support/typeUtils.js */ "dOLD");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../core/Promise.js */ "+rMe");
/* harmony import */ var _core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../core/Loadable.js */ "bV/r");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../core/workers/workers.js */ "36Co");
/* harmony import */ var _tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../tasks/operations/zscale.js */ "kUx5");
/* harmony import */ var _tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../tasks/operations/queryZScale.js */ "DWQd");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../tasks/support/FeatureSet.js */ "8prj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let R=0;const S=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.graphics.sources.MemorySource");let G=class extends(_core_Loadable_js__WEBPACK_IMPORTED_MODULE_19__["default"].LoadableMixin(Object(_core_Promise_js__WEBPACK_IMPORTED_MODULE_18__["EsriPromiseMixin"])(_core_Collection_js__WEBPACK_IMPORTED_MODULE_17__["default"]))){constructor(e){super(e),this._idToClientGraphic=null,this.type="memory"}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["resolve"])(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}get workerGeometryType(){const e=this.layer&&this.layer.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);Object(_tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__["applyFeatureSetZUnitScaling"])(e,this.layer.spatialReference,r);const s=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_24__["default"].fromJSON(r);if(!this._requiresClientGraphicMapping())return s;const o=this.layer.objectIdField;for(const e of s.features){const t=e.attributes[o],r=this._idToClientGraphic.get(t);r&&(e.geometry=r.geometry)}return s.geometryType=this.layer.geometryType,s}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_12__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)"));await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return Object(_tasks_operations_queryZScale_js__WEBPACK_IMPORTED_MODULE_23__["applyFeatureSetZUnitScaling"])(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(e.extent)})))}_applyEdits(e){if(!this._connection)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const s=[],o=[],i=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const t of e.deleteFeatures){const e=i(t);null!=e&&s.push(e)}const n=e.updateFeatures&&this._idToClientGraphic?new Map:null;if(e.updateFeatures)for(const t of e.updateFeatures)if(o.push(this._serializeFeature(t)),n){const e=i(t);null!=e&&n.set(e,t)}return Object(_tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_22__["unapplyEditsZUnitScaling"])(r?r.features:null,o,this.layer.spatialReference),this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:o,deletes:s}).then((({fullExtent:e,featureEditResults:t})=>{if(this.fullExtent=e,r&&r.finish(t.uidToObjectId),this._idToClientGraphic){if(n)for(const e of t.updateResults){if(!e.success)continue;const t=n.get(e.objectId);null!=t&&this._addIdToClientGraphic(t)}for(const e of t.deleteResults)e.success&&this._idToClientGraphic.delete(e.objectId)}return this._createEditsResult(t)}))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,s=new Array(e.length);let o=null;for(let i=0;i<e.length;i++){const n=e[i],a=this._serializeFeature(n);!o&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(n.geometry)&&(o=n.geometry.type),s[i]=a,t.set(`${a.uid}`,n)}const i=this;return{features:s,inferredGeometryType:o,finish(e){const r=i.sourceJSON.objectIdField;for(const s in e){const o=e[s],n=t.get(s);n&&(n.attributes||(n.attributes={}),-1===o?delete n.attributes[r]:n.attributes[r]=o,i._addIdToClientGraphic(n))}}}}_addIdToClientGraphic(e){if(!this._idToClientGraphic)return;const t=this.sourceJSON.objectIdField,r=e.attributes&&e.attributes[t];null!=r&&this._idToClientGraphic.set(r,e)}_requiresClientGraphicMapping(){const e=this.layer.geometryType||this.sourceJSON.geometryType;return this._geometryTypeRequiresClientGraphicMapping(e)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),s=(R++).toString();return r?{uid:s,geometry:r.toJSON(),attributes:t}:{uid:s,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t))return null;if(this._geometryRequiresClientGraphicMapping(t)){return t.extent?_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromExtent(t.extent):null}return t}async _startWorker(e){this._connection=await Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_21__["open"])("MemorySourceWorker",{strategy:Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:r,spatialReference:s,objectIdField:o,hasM:i,hasZ:n,timeInfo:a}=this.layer,l="defaults"===this.layer.originOf("spatialReference"),u=this._prepareAddFeatures(this.items);this.on("before-changes",(e=>{S.error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()}));const c={features:u.features,fields:r&&r.map((e=>e.toJSON())),geometryType:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__["typeKebabDictionary"].toJSON(this.workerGeometryType),hasM:i,hasZ:n,objectIdField:o,spatialReference:l?null:s&&s.toJSON(),timeInfo:a?a.toJSON():null},p=await this._connection.invoke("load",c,{signal:e});for(const e of p.warnings)S.warn(e.message,{layer:this.layer,warning:e});p.featureErrors.length&&S.warn(`Encountered ${p.featureErrors.length} validation errors while loading features`,p.featureErrors);const d=p.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(u.inferredGeometryType)&&(d.geometryType=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_15__["typeKebabDictionary"].toJSON(u.inferredGeometryType)),"mesh"!==d.geometryType&&"mesh"!==this.layer.geometryType||(d.hasZ=!0),this.sourceJSON=d,this._requiresClientGraphicMapping()&&(this._idToClientGraphic=new Map),u.finish(p.assignedObjectIds)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_shared_js__WEBPACK_IMPORTED_MODULE_6__["shared"])({Type:_Graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"],ensureType:Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__["ensureType"])(_Graphic_js__WEBPACK_IMPORTED_MODULE_20__["default"])})],G.prototype,"itemType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],G.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({constructOnly:!0})],G.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["layer.geometryType"]})],G.prototype,"workerGeometryType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],G.prototype,"sourceJSON",void 0),G=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.graphics.sources.MemorySource")],G);var O=G;/* harmony default export */ __webpack_exports__["default"] = (O);


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

/***/ "ll84":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/AttachmentElement.js ***!
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
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Element.js */ "qKY0");
/* harmony import */ var _inputs_AttachmentInput_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inputs/AttachmentInput.js */ "oc78");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var i;let p=i=class extends _Element_js__WEBPACK_IMPORTED_MODULE_9__["Element"]{constructor(t){super(t),this.attachmentKeyword=null,this.editable=!0,this.input=null,this.type="attachment"}clone(){return new i({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"attachmentKeyword",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{default:!0,write:!0}})],p.prototype,"editable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_inputs_AttachmentInput_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{read:{source:"inputType"},write:{target:"inputType"}}})],p.prototype,"input",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["attachment"],json:{read:!1,write:!0}})],p.prototype,"type",void 0),p=i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.AttachmentElement")],p);var n=p;/* harmony default export */ __webpack_exports__["default"] = (n);


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

/***/ "oc78":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/AttachmentInput.js ***!
  \***************************************************************************/
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
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.type=null}clone(){return new s({type:this.type})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],p.prototype,"type",void 0),p=s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.AttachmentInput")],p);var c=p;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "on0I":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js ***!
  \************************************************************************/
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
/* harmony import */ var _TextInput_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextInput.js */ "bu/E");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let s=class extends _TextInput_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.type="text-box"}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["text-box"],json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.TextBoxInput")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "orEy":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureType.js ***!
  \*****************************************************************/
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
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CodedValueDomain.js */ "QQZE");
/* harmony import */ var _InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./InheritedDomain.js */ "tanU");
/* harmony import */ var _RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RangeDomain.js */ "3z0I");
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./domains.js */ "WXCn");
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./FeatureTemplate.js */ "rOQw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]{constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const e in o)if(o.hasOwnProperty(e)){const t=o[e];switch(t.type){case"range":r[e]=_RangeDomain_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(t);break;case"codedValue":r[e]=_CodedValueDomain_js__WEBPACK_IMPORTED_MODULE_13__["default"].fromJSON(t);break;case"inherited":r[e]=_InheritedDomain_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(t)}}return r}writeDomains(o,e){const t={};for(const r in o)o.hasOwnProperty(r)&&(t[r]=o[r]&&o[r].toJSON());Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(t),e.domains=t}readTemplates(o){return o&&o.map((o=>new _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_17__["default"](o)))}writeTemplates(o,r){r.templates=o&&o.map((o=>o.toJSON()))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],l.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],l.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],l.prototype,"domains",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("domains")],l.prototype,"readDomains",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("domains")],l.prototype,"writeDomains",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],l.prototype,"templates",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("templates")],l.prototype,"readTemplates",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("templates")],l.prototype,"writeTemplates",null),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureType")],l);var u=l;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "qKY0":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/Element.js ***!
  \************************************************************/
/*! exports provided: Element, ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return s; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=o=>{let s=class extends o{constructor(){super(...arguments),this.description=null,this.label=null,this.visibilityExpression=null}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:String,json:{write:!0}})],s.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:String,json:{write:!0}})],s.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])({type:String,json:{write:!0}})],s.prototype,"visibilityExpression",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.form.elements.ElementMixin")],s),s};let i=class extends(s(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__["JSONSupport"])){constructor(t){super(t),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.form.elements.Element")],i);


/***/ }),

/***/ "rOQw":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js ***!
  \*********************************************************************/
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
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_12__["JSONSupport"]{constructor(o){super(o),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}writeDrawingTool(o,r){r.drawingTool=a.toJSON(o)}writePrototype(o,t){t.prototype=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o),!0)}writeThumbnail(o,t){t.thumbnail=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["fixJson"])(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(o))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],n.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],n.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{read:a.read,write:a.write}})],n.prototype,"drawingTool",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("drawingTool")],n.prototype,"writeDrawingTool",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],n.prototype,"prototype",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("prototype")],n.prototype,"writePrototype",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({json:{write:!0}})],n.prototype,"thumbnail",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("thumbnail")],n.prototype,"writeThumbnail",null),n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.support.FeatureTemplate")],n);var u=n;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "uHfw":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/GroupElement.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _Element_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Element.js */ "qKY0");
/* harmony import */ var _support_elements_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/elements.js */ "aqJP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var u;let d=u=class extends _Element_js__WEBPACK_IMPORTED_MODULE_12__["Element"]{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["ensureType"])(e,j,!1)}readElements(e,t){return Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["fromJSON"])(t.formElements,j,!1)}writeElements(e,t){t.formElements=Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["toJSON"])(e,j,!1)}clone(){return new u({description:this.description,elements:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:!0}})],d.prototype,"elements",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("elements")],d.prototype,"castElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("elements",["formElements"])],d.prototype,"readElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("elements")],d.prototype,"writeElements",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["collapsed","expanded"],json:{default:"expanded",write:!0}})],d.prototype,"initialState",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:!1,write:!0}})],d.prototype,"type",void 0),d=u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.form.elements.GroupElement")],d);const j=Object(_support_elements_js__WEBPACK_IMPORTED_MODULE_13__["buildTypeMaps"])(d);var f=d;/* harmony default export */ __webpack_exports__["default"] = (f);


/***/ }),

/***/ "uOKz":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Relationship.js ***!
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
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(e){super(e),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:s.read,write:s.write}})],a.prototype,"cardinality",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"composite",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"keyField",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"keyFieldInRelationshipTable",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"relatedTableId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!0,write:!0}})],a.prototype,"relationshipTableId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:n.read,write:n.write}})],a.prototype,"role",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.support.Relationship")],a);var l=a;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "wO9+":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js ***!
  \*************************************************************************/
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
/* harmony import */ var _TextInput_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextInput.js */ "bu/E");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let s=class extends _TextInput_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(r){super(r),this.type="text-area"}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["text-area"],json:{read:!1,write:!0}})],s.prototype,"type",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.elements.inputs.TextAreaInput")],s);var p=s;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "y/NR":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js ***!
  \*****************************************************************************/
/*! exports provided: shared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shared", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return(r,t)=>{r[t]=n}}


/***/ }),

/***/ "za7T":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/form/ExpressionInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"expression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"name",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["boolean"],json:{write:!0}})],p.prototype,"returnType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.form.ExpressionInfo")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ })

}]);
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db-es2015.js.map