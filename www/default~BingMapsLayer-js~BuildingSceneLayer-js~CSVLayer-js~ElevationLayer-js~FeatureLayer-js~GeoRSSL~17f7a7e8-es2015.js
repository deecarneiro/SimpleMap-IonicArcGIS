(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"],{

/***/ "/3C5":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js ***!
  \****************************************************************************/
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
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{async collectRequiredFields(r,o){return Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_10__["collectArcadeFieldNames"])(r,o,this.expression)}clone(){return new p({expression:this.expression,title:this.title})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"expression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.FeatureExpressionInfo")],i);var c=i;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "/RTN":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js ***!
  \********************************************************************/
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
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FeatureExpressionInfo.js */ "/3C5");
/* harmony import */ var _unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./unitConversionUtils.js */ "gHbr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var l;const m=Object(_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["strict"])()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_6__["JSONMap"]({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let c=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_13__["JSONSupport"]{constructor(){super(...arguments),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write(null,t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){return this._isOverridden("mode")?this._get("mode"):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.offset)||this.featureExpressionInfo?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{write:!0}})],c.prototype,"featureExpressionInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],c.prototype,"readFeatureExpressionInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("featureExpressionInfo",{featureExpressionInfo:{type:_FeatureExpressionInfo_js__WEBPACK_IMPORTED_MODULE_14__["default"]},"featureExpression.value":{type:[0]}})],c.prototype,"writeFeatureExpressionInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:m.apiValues,dependsOn:["offset","featureExpressionInfo"],nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],c.prototype,"mode",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],c.prototype,"offset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_15__["supportedUnits"],json:{type:String,read:d.read,write:d.write}})],c.prototype,"unit",null),c=l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.support.ElevationInfo")],c);var x=c;/* harmony default export */ __webpack_exports__["default"] = (x);


/***/ }),

/***/ "5pQd":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js ***!
  \******************************************************************/
/*! exports provided: MultiOriginJSONMixin, MultiOriginJSONSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOriginJSONMixin", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiOriginJSONSupport", function() { return O; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "ku/q");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accessor.js */ "/CmD");
/* harmony import */ var _accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accessorSupport/write.js */ "xHih");
/* harmony import */ var _ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReadOnlyMultiOriginJSONSupport.js */ "6xK3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=i=>{let n=class extends i{constructor(...r){super(...r)}clear(r,t="user"){return u(this).delete(r,Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t))}write(r={},t){return Object(_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_5__["write"])(this,r=r||{},t),r}setAtOrigin(r,s,o){Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(this).setAtOrigin(r,s,Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(o))}removeOrigin(r){const t=u(this),s=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(r),o=t.keys(s);for(const r of o)t.originOf(r)===s&&t.set(r,t.get(r,s),6)}updateOrigin(r,t){const s=u(this),i=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["nameToId"])(t),c=this.get(r);for(let t=i+1;t<_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_3__["OriginIdNum"];++t)s.delete(r,t);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.WriteableMultiOriginJSONSupport")],n),n.prototype.toJSON.isDefaultToJSON=!0,n};function u(r){return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(r).store}const l=t=>{let e=class extends(p(Object(_ReadOnlyMultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_6__["ReadOnlyMultiOriginJSONMixin"])(t))){constructor(...r){super(...r)}};return e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")],e),e};let O=class extends(l(_Accessor_js__WEBPACK_IMPORTED_MODULE_4__["default"])){};O=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_2__["subclass"])("esri.core.MultiOriginJSONSupport")],O);


/***/ }),

/***/ "6xK3":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js ***!
  \**************************************************************************/
/*! exports provided: ReadOnlyMultiOriginJSONMixin, ReadOnlyMultiOriginJSONSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONMixin", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadOnlyMultiOriginJSONSupport", function() { return f; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/* harmony import */ var _accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessorSupport/PropertyOrigin.js */ "ku/q");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Accessor.js */ "/CmD");
/* harmony import */ var _accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accessorSupport/read.js */ "CWQl");
/* harmony import */ var _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accessorSupport/MultiOriginStore.js */ "SxDd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=n=>{let a=class extends n{constructor(...r){super(...r);const s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this)),o=s.metadatas,i=s.store,n=new _accessorSupport_MultiOriginStore_js__WEBPACK_IMPORTED_MODULE_7__["default"];s.store=n,i.keys().forEach((r=>{n.set(r,i.get(r),0)})),Object.keys(o).forEach((r=>{s.internalGet(r)&&n.set(r,s.internalGet(r),0)}))}read(r,t){Object(_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_6__["read"])(this,r,t)}getAtOrigin(r,t){const e=u(this),s=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t);if("string"==typeof r)return e.get(r,s);const o={};return r.forEach((r=>{o[r]=e.get(r,s)})),o}originOf(r){return Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["idToName"])(this.originIdOf(r))}originIdOf(r){return u(this).originOf(r)}revert(r,t){const s=u(this),o=Object(_accessorSupport_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_4__["nameToId"])(t),n=Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{n.propertyInvalidated(r),s.revert(r,o),n.propertyCommitted(r)}))}};return a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")],a),a};function u(r){return Object(_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_2__["getProperties"])(r).store}let f=class extends(a(_Accessor_js__WEBPACK_IMPORTED_MODULE_5__["default"])){};f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__["subclass"])("esri.core.ReadOnlyMultiOriginJSONSupport")],f);


/***/ }),

/***/ "IvSi":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/commonProperties.js ***!
  \**********************************************************************/
/*! exports provided: combinedViewLayerTimeExtentProperty, elevationInfo, labelsVisible, legendEnabled, opacity, opacityDrawingInfo, popupEnabled, readOnlyService, screenSizePerspectiveEnabled, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combinedViewLayerTimeExtentProperty", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elevationInfo", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "labelsVisible", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legendEnabled", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacity", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacityDrawingInfo", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupEnabled", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readOnlyService", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenSizePerspectiveEnabled", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return p; });
/* harmony import */ var _core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/accessorSupport/utils.js */ "TDcG");
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/persistableUrlUtils.js */ "/PL2");
/* harmony import */ var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/accessorSupport/write.js */ "xHih");
/* harmony import */ var _webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../webdoc/support/opacityUtils.js */ "Qr4e");
/* harmony import */ var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../TimeExtent.js */ "ZYtI");
/* harmony import */ var _symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../symbols/support/ElevationInfo.js */ "/RTN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s={type:Boolean,value:!0,json:{origins:{"web-scene":{read:{source:["id","url","layerType"],reader(i,r){if(null!=r.screenSizePerspective||"defaults"!==this.originOf("screenSizePerspectiveEnabled"))return r.screenSizePerspective;Object(_core_accessorSupport_utils_js__WEBPACK_IMPORTED_MODULE_0__["getProperties"])(this).store.set("screenSizePerspectiveEnabled",!1,0)}},write:{ignoreOrigin:!0,target:"screenSizePerspective",writer(e,i,n,t){("defaults"===this.originOf("screenSizePerspectiveEnabled")&&e||Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_2__["willPropertyWrite"])(this,"screenSizePerspectiveEnabled",{},t))&&(i[n]=e)}}}}}},a={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,i)=>!i.disablePopup},write:{enabled:!0,writer(e,i,r){i[r]=!e}}}},l={type:Boolean,value:!0,json:{name:"showLabels",write:!0}},p={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_1__["w"]}}},c={type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:!0}},d={value:null,type:_symbols_support_ElevationInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"],json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:!0}};function f(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={type:Number,json:{origins:{"web-document":{default:1,write:!0,read:!0},"portal-item":{write:!0}}}},y={...u,json:{...u.json,origins:{"web-document":{...u.json.origins["web-document"],write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,i,r)=>r&&"service"!==r.origin||!i.drawingInfo||void 0===i.drawingInfo.transparency?i.layerDefinition&&i.layerDefinition.drawingInfo&&void 0!==i.layerDefinition.drawingInfo.transparency?Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.layerDefinition.drawingInfo.transparency):void 0:Object(_webdoc_support_opacityUtils_js__WEBPACK_IMPORTED_MODULE_3__["transparencyToOpacity"])(i.drawingInfo.transparency)}}},m={type:_TimeExtent_js__WEBPACK_IMPORTED_MODULE_4__["default"],dependsOn:["view.timeExtent","layer.timeExtent","layer.timeInfo","layer.timeOffset","layer.timeOffset.value","layer.timeOffset.unit","layer.useViewTime"],readOnly:!0,get(){var e,i;if(null==(e=this.layer)||!e.timeInfo)return null;const r=null==(i=this.view)?void 0:i.timeExtent,n=this.layer.timeExtent,t=this.layer.useViewTime?r&&n?r.intersection(n):r||n:n;if(!t||t.isEmpty)return t;const o=this.layer.timeOffset,s=o?t.offset(-o.value,o.unit):t,a=this._get("timeExtent");return s.equals(a)?a:s}};


/***/ }),

/***/ "PB1d":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/operationalLayers.js ***!
  \**********************************************************************/
/*! exports provided: supportedTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedTypes", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e={"web-scene/operational-layers":{ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,VectorTileLayer:!0,WMS:!0,KML:!0,RasterDataLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-map/operational-layers":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,ArcGISFeatureLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0,CSV:!0,GeoRSS:!0,GroupLayer:!0,KML:!0,VectorTileLayer:!0,WFS:!0,SubtypeGroupLayer:!0,WMS:!0,WebTiledLayer:!0},"web-map/basemap":{ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},"web-map/tables":{ArcGISFeatureLayer:!0},"portal-item/operational-layers":{ArcGISSceneServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0}};


/***/ }),

/***/ "SxDd":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang.js */ "f/qv");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PropertyOrigin.js */ "ku/q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"]),this._values=new Map}clone(s){const i=new r,o=this._originStores[0];o&&o.forEach(((s,e)=>{i.set(e,Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(s),0)}));for(let r=2;r<_PropertyOrigin_js__WEBPACK_IMPORTED_MODULE_2__["OriginIdNum"];r++){const e=this._originStores[r];e&&e.forEach(((e,o)=>{s&&s.has(o)||i.set(o,Object(_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(e),r)}))}return i}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,e,r=6){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["assumeNonNull"])(this._propertyOriginMap.get(t))<=r){const s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1}delete(t,s=6){const e=this._originStores[s];if(!e)return;const r=e.get(t);if(e.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return r}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e&&e.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||0}forEach(t){this._values.forEach(t)}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "gHbr":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/support/unitConversionUtils.js ***!
  \**************************************************************************/
/*! exports provided: getMetersPerUnit, supportedUnits, supportsUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMetersPerUnit", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedUnits", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsUnit", function() { return n; });
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../renderers/support/lengthUtils.js */ "m0D6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return null!=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"][n]||1)}const e=function(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__["meterIn"]);return n.sort(),n}();


/***/ }),

/***/ "uRH/":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js ***!
  \*********************************************************************/
/*! exports provided: OperationalLayer, isOperationalLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationalLayer", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOperationalLayer", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/accessorSupport/read.js */ "CWQl");
/* harmony import */ var _core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/accessorSupport/write.js */ "xHih");
/* harmony import */ var _operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./operationalLayers.js */ "PB1d");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../support/commonProperties.js */ "IvSi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=l=>{let y=class extends l{constructor(){super(...arguments),this.title=null}writeListMode(e,r,t,i){(i&&"ground"===i.layerContainerType||e&&Object(_core_accessorSupport_write_js__WEBPACK_IMPORTED_MODULE_12__["willPropertyWrite"])(this,t,{},i))&&(r[t]=e)}writeOperationalLayerType(e,r,t,i){!e||i&&"tables"===i.layerContainerType||(r.layerType=e)}writeTitle(e,r){r.title=e||"Layer"}read(e,r){r&&(r.layer=this),Object(_core_accessorSupport_read_js__WEBPACK_IMPORTED_MODULE_11__["readLoadable"])(this,e,(r=>super.read(e,r)),r)}write(e,r){if(r&&r.origin){const e=`${r.origin}/${r.layerContainerType||"operational-layers"}`,t=_operationalLayers_js__WEBPACK_IMPORTED_MODULE_13__["supportedTypes"][e];let i=t&&t[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),!i)return r.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const t=super.write(e,{...r,layer:this}),i=!!r&&!!r.messages&&!!r.messages.filter((e=>e instanceof _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]&&"web-document-write:property-required"===e.name)).length;return!this.url&&i?null:t}beforeSave(){}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],y.prototype,"id",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{write:{ignoreOrigin:!0},origins:{"web-map":{read:!1,write:!1}}}})],y.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("listMode")],y.prototype,"writeListMode",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1}}}})],y.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("operationalLayerType")],y.prototype,"writeOperationalLayerType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__["opacity"])],y.prototype,"opacity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:{ignoreOrigin:!0,allowNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,allowNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],y.prototype,"title",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_6__["writer"])("title")],y.prototype,"writeTitle",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{name:"visibility",origins:{"web-document":{name:"visibility",default:!0},"portal-item":{name:"visibility",read:{source:["visible","visibility"]}}}}})],y.prototype,"visible",void 0),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.OperationalLayer")],y),y};function y(e){return"operationalLayerType"in e}


/***/ })

}]);
//# sourceMappingURL=default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8-es2015.js.map