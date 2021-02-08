(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TileLayer-js"],{

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

/***/ "JlDE":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/TileLayer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry.js */ "4GrV");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/arcgisLayerUrl.js */ "VLTf");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support/commonProperties.js */ "IvSi");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/CustomParametersMixin.js */ "iyhF");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./mixins/RefreshableLayer.js */ "jhcG");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "tIWS");
/* harmony import */ var _mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mixins/ArcGISMapService.js */ "MD9Z");
/* harmony import */ var _support_Sublayer_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./support/Sublayer.js */ "6dDx");
/* harmony import */ var _mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mixins/SublayersOwner.js */ "1Ana");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const M=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Elevation/World_Hillshade_Dark","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];let N=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_23__["BlendLayer"])(Object(_mixins_SublayersOwner_js__WEBPACK_IMPORTED_MODULE_32__["SublayersOwner"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_27__["ScaleRangeLayer"])(Object(_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_26__["RefreshableLayer"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_21__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_25__["PortalLayer"])(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_29__["ArcGISCachedService"])(Object(_mixins_ArcGISMapService_js__WEBPACK_IMPORTED_MODULE_30__["ArcGISMapService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_22__["ArcGISService"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_18__["MultiOriginJSONMixin"])(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_28__["HandleOwnerMixin"])(Object(_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_24__["CustomParametersMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_17__["default"]))))))))))))){constructor(...e){super(...e),this.listMode="show",this.isReference=null,this.operationalLayerType="ArcGISTiledMapServiceLayer",this.resampling=!0,this.sourceJSON=null,this.spatialReference=null,this.path=null,this.sublayers=null,this.type="tile",this.url=null}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}load(e){const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t)))),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["resolve"])(this)}get attributionDataUrl(){var e;const r=null==(e=this.parsedUrl)?void 0:e.path.toLowerCase();return r&&this._getDefaultAttribution(this._getMapName(r))}readSpatialReference(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"].fromJSON(e)}writeSublayers(e,r,t,s){if(!this.loaded||!e)return;const o=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray(),i=[],a={writeSublayerStructure:!1,...s};o.forEach((e=>{const r=e.write({},a);i.push(r)}));i.some((e=>Object.keys(e).length>1))&&(r.layers=i)}get tileServers(){return this._getDefaultTileServers(this.parsedUrl.path)}castTileServers(e){return Array.isArray(e)?e.map((e=>Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(e).path)):null}fetchTile(e,r,t,s={}){const{signal:o,timestamp:i}=s,a=this.getTileUrl(e,r,t),l={responseType:"image",signal:o};return null!=i&&(l.query={_ts:s.timestamp}),Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(a,l).then((e=>e.data))}getTileUrl(e,r,t){const s=!this.tilemapCache&&this.supportsBlankTile,o=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["objectToQuery"])({...this.parsedUrl.query,blankTile:!s&&null,...this.customParameters}),i=this.tileServers;return`${i&&i.length?i[r%i.length]:this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}_fetchService(e){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["create"])(((t,s)=>{if(this.sourceJSON){if(null!=this.sourceJSON.bandCount&&null!=this.sourceJSON.pixelSizeX)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");return void t({data:this.sourceJSON})}if(!this.parsedUrl)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("tile-layer:undefined-url","layer's url is not defined");const o=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__["parse"])(this.parsedUrl.path);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o)&&"ImageServer"===o.serverType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("tile-layer:unsupported-url","use ImageryTileLayer to open a tiled image service");Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters},responseType:"json",signal:e}).then(t,s)})).then((r=>{if(r.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r.data,this.read(r.data,{origin:"service",url:this.parsedUrl}),10.1===this.version&&!Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__["isHostedAgolService"])(this.url))return this._fetchServerVersion(this.url,e).then((e=>{this.read({currentVersion:e})})).catch((()=>{}))}))}_fetchServerVersion(e,r){if(!Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_19__["isArcGISUrl"])(e))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_13__["reject"])();const t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return Object(_request_js__WEBPACK_IMPORTED_MODULE_16__["default"])(t,{query:{f:"json",...this.customParameters},responseType:"json",signal:r}).then((e=>{if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_9__["default"]("tile-layer:version-not-available")}))}_getMapName(e){const r=e.match(/^(?:https?:)?\/\/(server\.arcgisonline\.com|services\.arcgisonline\.com|ibasemaps-api\.arcgis\.com)\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]}_getDefaultAttribution(e){if(!e)return;let r;e=e.toLowerCase();for(let t=0,s=M.length;t<s;t++)if(r=M[t],r.toLowerCase().indexOf(e)>-1)return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["makeAbsolute"])("//static.arcgis.com/attribution/"+r)}_getDefaultTileServers(e){const r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,dependsOn:["parsedUrl"]})],N.prototype,"attributionDataUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:["show","hide","hide-children"]})],N.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],N.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,type:["ArcGISTiledMapServiceLayer"]})],N.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean})],N.prototype,"resampling",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],N.prototype,"sourceJSON",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_14__["default"]})],N.prototype,"spatialReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("spatialReference",["spatialReference","tileInfo"])],N.prototype,"readSpatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],N.prototype,"path",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],N.prototype,"sublayers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__["writer"])("sublayers",{layers:{type:[_support_Sublayer_js__WEBPACK_IMPORTED_MODULE_31__["default"]]}})],N.prototype,"writeSublayers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({json:{read:!1,write:!1}})],N.prototype,"popupEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["parsedUrl"]})],N.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("tileServers")],N.prototype,"castTileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0,json:{read:!1}})],N.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__["url"])],N.prototype,"url",void 0),N=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.layers.TileLayer")],N);var P=N;/* harmony default export */ __webpack_exports__["default"] = (P);


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
//# sourceMappingURL=TileLayer-js-es2015.js.map