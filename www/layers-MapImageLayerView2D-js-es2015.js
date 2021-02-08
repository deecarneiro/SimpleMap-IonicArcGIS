(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-MapImageLayerView2D-js"],{

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

/***/ "6BjF":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/MapImageLayerView2D.js ***!
  \**************************************************************************/
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
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../layers/support/ExportImageParameters.js */ "cM4j");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/* harmony import */ var _layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../layers/MapImageLayerView.js */ "U3zk");
/* harmony import */ var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/BitmapContainer.js */ "LTnl");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/ExportStrategy.js */ "vbiG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.MapImageLayerView2D");let l=class extends(Object(_layers_MapImageLayerView_js__WEBPACK_IMPORTED_MODULE_15__["MapImageLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_11__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_17__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_13__["default"])))){constructor(){super(...arguments),this._exportImageVersion=-1}hitTest(){return null}update(e){this.strategy.update(e).catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAbortError"])(e)||c.error(e)}))}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_16__["BitmapContainer"],this.container.addChild(this._bitmapContainer),this.strategy=new _support_ExportStrategy_js__WEBPACK_IMPORTED_MODULE_18__["default"]({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.imageParameters=new _layers_support_ExportImageParameters_js__WEBPACK_IMPORTED_MODULE_12__["ExportImageParameters"]({view:this.view,layer:this.layer}),this.handles.add(Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_10__["init"])(this.imageParameters,"version",(e=>{this._exportImageVersion!==e&&(this._exportImageVersion=e,this.requestUpdate())})),"mapimagelayerview-update")}detach(){this.strategy.destroy(),this.handles.remove("mapimagelayerview-update"),this.imageParameters.destroy(),this.imageParameters=null,this._exportImageVersion=-1,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_14__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.imageParameters.timeExtent,timestamp:this.refreshTimestamp,...i})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"strategy",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["strategy.updating"]})],l.prototype,"updating",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.MapImageLayerView2D")],l);var y=l;/* harmony default export */ __webpack_exports__["default"] = (y);


/***/ }),

/***/ "6UvW":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/support/drapedUtils.js ***!
  \****************************************************************/
/*! exports provided: createQueryGeometry, intersectsDrapedGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryGeometry", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectsDrapedGeometry", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,i,a,o=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"]){let s;if("2d"===a.type)s=i*a.resolution;else if("3d"===a.type){const r=a.overlayPixelSizeInMapUnits(t),o=a.basemapSpatialReference;s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&!o.equals(a.spatialReference)?Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(o)/Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(a.spatialReference):i*r}const m=t.x-s,p=t.y-s,c=t.x+s,l=t.y+s,{spatialReference:f}=a;return o.xmin=Math.min(m,c),o.ymin=Math.min(p,l),o.xmax=Math.max(m,c),o.ymax=Math.max(p,l),o.spatialReference=f,o}function o(e,r,n){const o=n.toMap(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o))return!1;return a(o,Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_4__["calculateTolerance"])(),n,s).intersects(r)}const s=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"];


/***/ }),

/***/ "Ilhi":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/sublayerUtils.js ***!
  \*******************************************************************/
/*! exports provided: isExportDynamic, isSublayerOverhaul, shouldWriteSublayerStructure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExportDynamic", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSublayerOverhaul", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWriteSublayerStructure", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,n,i){if(n.flatten((({sublayers:e})=>e)).length!==e.length)return!0;return!!e.some((e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i))||!r(e,n)}function n(e,n,i){return!!e.some((e=>{const n=e.source;return!(!n||"map-layer"===n.type&&n.mapLayerId===e.id&&(!n.gdbVersion||n.gdbVersion===i.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2}))||!r(e,n)}function r(e,n){if(!e||!e.length)return!0;const r=n.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const o=r.length;for(const{id:n}of e){for(;i<o&&r[i]!==n;)i++;if(i>=o)return!1}return!0}function i(e){return!!e&&e.some((e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale))}


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

/***/ "U282":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js ***!
  \****************************************************************************/
/*! exports provided: calculateTolerance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTolerance", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,e){return e?"xoffset"in e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):"yoffset"in e&&e.yoffset?Math.max(t,Math.abs(e.yoffset||0)):t:t}function e(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){let e=0,n=0;for(let r=0;r<t.length;r++){const s=t[r].size;"number"==typeof s&&(e+=s,n++)}return e/n}(t.stops):e}function n(n){const r=n&&n.renderer,s="touch"===(n&&n.event&&n.event.pointerType)?9:6;if(!r)return s;const o="visualVariables"in r?function(t,n){if(!n)return t;const r=n.filter((t=>"size"===t.type)).map((n=>{const{maxSize:r,minSize:s}=n;return(e(r,t)+e(s,t))/2}));let s=0;const o=r.length;if(0===o)return t;for(let t=0;t<o;t++)s+=r[t];const f=Math.floor(s/o);return Math.max(f,t)}(s,r.visualVariables):s;if("simple"===r.type)return t(o,r.symbol);if("unique-value"===r.type){let e=o;return r.uniqueValueInfos.forEach((n=>{e=t(e,n.symbol)})),e}if("class-breaks"===r.type){let e=o;return r.classBreakInfos.forEach((n=>{e=t(e,n.symbol)})),e}return r.type,o}


/***/ }),

/***/ "U3zk":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/MapImageLayerView.js ***!
  \*********************************************************************/
/*! exports provided: MapImageLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapImageLayerView", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=n=>{let d=class extends n{async fetchPopupFeatures(e,t){const{layer:s}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("mapimagelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s}));const u=this.get("view.scale"),n=[],d=async e=>{const s=0===e.minScale||u<=e.minScale,o=0===e.maxScale||u>=e.maxScale;if(e.visible&&s&&o)if(e.sublayers)e.sublayers.forEach(d);else if(e.popupEnabled){const s=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFetchPopupTemplate"])(e,{...t,defaultPopupTemplateEnabled:!1});Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)&&n.push({sublayer:e,popupTemplate:s})}},y=s.sublayers.toArray().map(d);await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(y);const f=n.map((async({sublayer:s,popupTemplate:o})=>{await s.load().catch((()=>{}));const a=s.createQuery(),p=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)?t.event:null,i=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_13__["calculateTolerance"])({renderer:s.renderer,event:p}),u=this.createFetchPopupFeaturesQueryGeometry(e,i);a.geometry=u,a.outFields=await Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getRequiredFields"])(s,o);const m=await this._loadArcadeModules(o);m&&m.arcadeUtils.hasGeometryOperations(o)||(a.maxAllowableOffset=u.width/i);return(await s.queryFeatures(a)).features}));return(await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(f)).reduce(((e,r)=>r.value?[...e,...r.value]:e),[]).filter((e=>null!=e))}canResume(){var e,r;return!!super.canResume()&&(null==(e=this.imageParameters)||null==(r=e.timeExtent)||!r.isEmpty)}_loadArcadeModules(e){if(e.get("expressionInfos.length"))return Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_12__["loadArcade"])()}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],d.prototype,"imageParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],d.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["imageParameters.timeExtent"]})],d.prototype,"suspended",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.MapImageLayerView")],d),d};


/***/ }),

/***/ "cM4j":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/ExportImageParameters.js ***!
  \***************************************************************************/
/*! exports provided: ExportImageParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImageParameters", function() { return y; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./commonProperties.js */ "IvSi");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sublayerUtils.js */ "Ilhi");
/* harmony import */ var _views_View_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../views/View.js */ "U19y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let y=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"])){constructor(){super(...arguments),this._scale=null,this.view=null}destroy(){this.layer=this.view=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>e.toExportImageJSON()));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&Object(_sublayerUtils_js__WEBPACK_IMPORTED_MODULE_12__["isExportDynamic"])(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(o[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=this.visibleSublayers.filter((e=>null!=e.definitionExpression));return e.length?JSON.stringify(e.reduce(((e,s)=>(e[s.id]=s.definitionExpression,e)),{})):null}get scale(){return null!=this._scale?this._scale:this.view&&this.view.scale||0}set scale(e){this.view||(this._scale=e,this.notifyChange("scale"))}get version(){const e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;const s=e.layer;return s&&(s.dpi,s.imageFormat,s.imageTransparency,s.gdbVersion),(this._get("version")||0)+1}set version(e){this._set("version",e)}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=s=>{const i=this.scale,a=0===i,t=0===s.minScale||i<=s.minScale,l=0===s.maxScale||i>=s.maxScale;s.visible&&(a||t&&l)&&(s.sublayers?s.sublayers.forEach(r):e.unshift(s))};s&&s.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((s,r)=>e[r]!==s))?e:i}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],y.prototype,"dynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],y.prototype,"hasDynamicLayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],y.prototype,"layer",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["visibleSublayers"]})],y.prototype,"layers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["visibleSublayers"]})],y.prototype,"layerDefs",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,dependsOn:["view.scale"]})],y.prototype,"scale",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_commonProperties_js__WEBPACK_IMPORTED_MODULE_10__["combinedViewLayerTimeExtentProperty"])],y.prototype,"timeExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],y.prototype,"version",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_views_View_js__WEBPACK_IMPORTED_MODULE_13__["default"]})],y.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],y.prototype,"visibleSublayers",null),y=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.mixins.ExportImageParameters")],y);


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

/***/ "rXMu":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/support/popupUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFetchPopupTemplate, getRequiredFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFetchPopupTemplate", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequiredFields", function() { return i; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../layers/support/fieldUtils.js */ "wdpY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function i(i,d=i.popupTemplate){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(d))return[];const o=await d.getRequiredFields(i.fields),{lastEditInfoEnabled:s}=d,{objectIdField:u,typeIdField:a,globalIdField:n,relationships:f}=i;if(o.includes("*"))return["*"];const r=s?await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["getFeatureEditFields"])(i):[],m=Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["fixFields"])(i.fields,[...o,...r]);return a&&m.push(a),m&&u&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,u)&&-1===m.indexOf(u)&&m.push(u),m&&n&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,n)&&-1===m.indexOf(n)&&m.push(n),f&&f.forEach((e=>{const{keyField:p}=e;m&&p&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasField"])(i.fields,p)&&-1===m.indexOf(p)&&m.push(p)})),m}function d(p,l){return p.popupTemplate?p.popupTemplate:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)&&l.defaultPopupTemplateEnabled&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(p.defaultPopupTemplate)?p.defaultPopupTemplate:null}


/***/ })

}]);
//# sourceMappingURL=layers-MapImageLayerView2D-js-es2015.js.map