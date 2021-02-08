(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"],{

/***/ "+Xal":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/jsonUtils.js ***!
  \******************************************************************/
/*! exports provided: fromJSON, read, write */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJSON", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "read", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "write", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/object.js */ "nR38");
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Warning.js */ "ACjl");
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/extensions/serializableProperty/reader.js */ "C4aV");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types.js */ "XNvV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(r,n,t,o){const u=function(e,r){if(!e)return null;if(!function(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":default:return!1}}(e,r))return r.messages&&r.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("renderer:unsupported",`Renderer of type '${e.declaredClass}' are not supported in scenes.`,{renderer:e,context:r})),null;return e.write({},r)}(r,o);u&&Object(_core_object_js__WEBPACK_IMPORTED_MODULE_1__["setDeepValue"])(t,u,n)}function u(e,r){return a(e,null,r)}const i=Object(_core_accessorSupport_extensions_serializableProperty_reader_js__WEBPACK_IMPORTED_MODULE_3__["createTypeReader"])({types:_types_js__WEBPACK_IMPORTED_MODULE_5__["rendererTypes"]});function a(e,n,s){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(s&&s.messages&&s.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__["default"]("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:s})),null):i(e,n,s):null}


/***/ }),

/***/ "/1dM":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/SimpleRenderer.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Renderer.js */ "ZnuT");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "vk02");
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/commonProperties.js */ "guTz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var c;let m=c=class extends(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_13__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_12__["default"])){constructor(e){super(e),this.description=null,this.label=null,this.symbol=null,this.type="simple"}async collectRequiredFields(e,r){await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])([this.collectSymbolFields(e,r),this.collectVVRequiredFields(e,r)])}async collectSymbolFields(e,r){await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["all"])(this.getSymbols().map((s=>s.collectRequiredFields(e,r))))}getSymbol(e,r){return this.symbol}async getSymbolAsync(e,r){return this.symbol}getSymbols(){return this.symbol?[this.symbol]:[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,r)=>e+r.getAttributeHash()),"")}getMeshHash(){return this.getSymbols().reduce(((e,r)=>e+JSON.stringify(r)),"")}get arcadeRequired(){return this.arcadeRequiredForVisualVariables}clone(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],m.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],m.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_14__["rendererSymbolProperty"])],m.prototype,"symbol",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({simple:"simple"})],m.prototype,"type",void 0),m=c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.SimpleRenderer")],m);var n=m;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "2uuY":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js ***!
  \*************************************************************************/
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
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var p;let i=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(r){super(r),this.color=null,this.ratio=null}clone(){return new p({color:this.color,ratio:this.ratio})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:!0}})],i.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Number,json:{write:!0}})],i.prototype,"ratio",void 0),i=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.HeatmapColorStop")],i);var c=i;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "JhoD":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/string.js */ "s7YA");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../support/arcadeOnDemand.js */ "gvqN");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Color.js */ "nvBr");
/* harmony import */ var _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../symbols/CIMSymbol.js */ "TKwc");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Renderer.js */ "ZnuT");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "vk02");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../core/LRUCache.js */ "wk6I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var w;const x=_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__["default"].getLogger("esri.renderers.DictionaryRenderer");let v=w=class extends(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_21__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_20__["default"])){constructor(e){super(e),this._ongoingRequests=new Map,this._symbolCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_22__["default"](100),this.config=null,this.fieldMap=null,this.scaleExpression=null,this.scaleExpressionTitle=null,this.url=null,this.type="dictionary"}writeData(e,s){e&&(s.scalingExpressionInfo={expression:e,returnType:"number"})}writeVisualVariables(e,s,t,r){null!=r&&r.origin||super.writeVisualVariables(e,s,t,r)}clone(){return new w({config:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.config),scaleExpression:this.scaleExpression,scaleExpressionTitle:this.scaleExpressionTitle,fieldMap:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.fieldMap),url:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.url),visualVariables:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables)})}async getSymbolAsync(e,s){let t;this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(s));try{t=await this._dictionaryPromise}catch(e){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAbortError"])(e))return this._dictionaryPromise=null,null}const i={};if(this.fieldMap)for(const s of this._symbolFields){const t=this.fieldMap[s];if(t&&null!==e.attributes[t]&&void 0!==e.attributes[t]){const r=""+e.attributes[t];i[s]=r}else i[s]=""}const o=t(i,s);if(!o||"string"!=typeof o)return null;const n=Object(_core_string_js__WEBPACK_IMPORTED_MODULE_4__["numericHash"])(o).toString(),a=this._symbolCache.get(n);if(a)return a.catch((()=>{this._symbolCache.pop(n)})),a;const l=o.split(";"),p=[],u=[];for(const e of l)if(e&&0!==e.length)if(-1===e.indexOf("po:"))if(-1!==e.indexOf("|"))for(const s of e.split("|"))this._itemNames.has(s)&&p.push(s);else this._itemNames.has(e)&&p.push(e);else{const s=e.substr(3).split("|");if(3===s.length){const e=s[0],t=s[1];let r=s[2];if("DashTemplate"===t)r=r.split(" ").map((e=>Number(e)));else if("Color"===t){const e=new _Color_js__WEBPACK_IMPORTED_MODULE_17__["default"](r).toRgba();r=[e[0],e[1],e[2],255*e[3]]}else r=Number(r);u.push({primitiveName:e,propertyName:t,value:r})}}const m=this._cimPartsToCIMSymbol(p,u,s);return this._symbolCache.put(n,m,1),m}async collectRequiredFields(e,s){await this.collectVVRequiredFields(e,s),this.scaleExpression&&await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_16__["collectArcadeFieldNames"])(e,s,this.scaleExpression);const t=s.map((e=>e.name));for(const s in this.fieldMap)t.indexOf(this.fieldMap[s])<0||e.add(this.fieldMap[s])}get arcadeRequired(){return!0}async fetchResources(e){if(this._dictionaryPromise)return this._dictionaryPromise;if(!this.url)return void x.error("no valid URL!");const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.abortOptions:null,r=Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(this.url+"/resources/styles/dictionary-info.json",{responseType:"json",query:{f:"json"},...s}),[{data:i}]=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])([r,Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["loadArcade"])()]);if(!i)throw this._dictionaryPromise=null,new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("esri.renderers.DictionaryRenderer","Bad dictionary data!");const o=i.expression,n=i.authoringInfo;this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=new Set(i.itemsNames),this._symbolFields=n.symbol;const a={};if(this.config){const e=this.config;for(const s in e)a[s]=e[s]}for(const e of n.configuration)a.hasOwnProperty(e.name)||(a[e.name]=e.value);const c=[];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)&&e.fields&&this.fieldMap)for(const s of this._symbolFields){const t=this.fieldMap[s],r=e.fields.filter((e=>e.name===t));r.length>0&&c.push({...r[0],name:s})}return this._dictionaryPromise=Object(_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_15__["createDictionaryExpression"])(o,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)?e.spatialReference:null,c,a).then((e=>{const s={scale:0};return(r,i)=>{const o=e.repurposeFeature({geometry:null,attributes:r});return s.scale=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(i)?i.scale:void 0,e.evaluate({$feature:o,$view:s})}})).catch((e=>(x.error("Creating dictinoary expression failed:",e),null))),this._dictionaryPromise}getSymbol(){return null}getSymbols(){return[]}getAttributeHash(){return this.visualVariables&&this.visualVariables.reduce(((e,s)=>e+s.getAttributeHash()),"")}getMeshHash(){return`${this.url}-${JSON.stringify(this.fieldMap)}`}getSymbolFields(){return this._symbolFields}async _getSymbolPart(e,s){if(this._ongoingRequests.has(e))return this._ongoingRequests.get(e).then((e=>e.data));const t=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),r=Object(_request_js__WEBPACK_IMPORTED_MODULE_19__["default"])(t,{responseType:"json",query:{f:"json"},...s});this._ongoingRequests.set(e,r);try{return(await r).data}catch(s){return this._ongoingRequests.delete(e),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["reject"])(s)}}_combineSymbolParts(e,s){if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:s};const t={...e[0]};t.symbolLayers=[];for(const s of e){const e=s;t.symbolLayers.unshift(...e.symbolLayers)}return{type:"CIMSymbolReference",symbol:t,primitiveOverrides:s}}async _cimPartsToCIMSymbol(e,s,t){const r=new Array(e.length);for(let s=0;s<e.length;s++)r[s]=this._getSymbolPart(e[s],t);const i=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["all"])(r);return new _symbols_CIMSymbol_js__WEBPACK_IMPORTED_MODULE_18__["default"]({data:this._combineSymbolParts(i,s)})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Object,json:{read:{source:"configuration"},write:{target:"configuration"}}})],v.prototype,"config",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:Object,json:{write:!0}})],v.prototype,"fieldMap",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{read:{source:"scalingExpressionInfo.expression"},write:!0}})],v.prototype,"scaleExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("scaleExpression")],v.prototype,"writeData",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{read:{source:"scalingExpressionInfo.title"},write:{target:"scalingExpressionInfo.title",overridePolicy(e){return{enabled:!!e&&!!this.scaleExpression}}}}})],v.prototype,"scaleExpressionTitle",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__["property"])({type:String,json:{write:!0}})],v.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])("visualVariables")],v.prototype,"writeVisualVariables",null),v=w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.DictionaryRenderer")],v);var S=v;/* harmony default export */ __webpack_exports__["default"] = (S);


/***/ }),

/***/ "MsUj":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js ***!
  \********************************************************************************/
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
var e;let p=e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(){super(...arguments),this.unit=null}clone(){return new e({unit:this.unit})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],p.prototype,"unit",void 0),p=e=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.renderers.support.DotDensityLegendOptions")],p);var i=p;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "R4xK":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Color.js */ "nvBr");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Renderer.js */ "ZnuT");
/* harmony import */ var _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/HeatmapColorStop.js */ "2uuY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var a;let m=a=class extends _Renderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]{constructor(t){super(t),this.blurRadius=10,this.colorStops=[new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({ratio:0,color:new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 140, 0, 0)")}),new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({ratio:.75,color:new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 140, 0, 1)")}),new _support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]({ratio:.9,color:new _Color_js__WEBPACK_IMPORTED_MODULE_12__["default"]("rgba(255, 0,   0, 1)")})],this.field=null,this.fieldOffset=0,this.maxPixelIntensity=100,this.minPixelIntensity=0,this.type="heatmap"}async collectRequiredFields(t,e){const r=this.field;r&&"string"==typeof r&&Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__["collectField"])(t,e,r)}getAttributeHash(){return null}getMeshHash(){return`${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`}clone(){return new a({blurRadius:this.blurRadius,colorStops:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],m.prototype,"blurRadius",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_HeatmapColorStop_js__WEBPACK_IMPORTED_MODULE_14__["default"]],json:{write:!0}})],m.prototype,"colorStops",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!0}})],m.prototype,"field",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:{overridePolicy:(t,e,r)=>({enabled:null==r})}}})],m.prototype,"fieldOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],m.prototype,"maxPixelIntensity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],m.prototype,"minPixelIntensity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__["enumeration"])({heatmap:"heatmap"})],m.prototype,"type",void 0),m=a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.renderers.HeatmapRenderer")],m);var c=m;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "XNvV":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/types.js ***!
  \**************************************************************/
/*! exports provided: rendererTypes, webSceneRendererTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rendererTypes", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "webSceneRendererTypes", function() { return n; });
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Renderer.js */ "ZnuT");
/* harmony import */ var _ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClassBreaksRenderer.js */ "tCO6");
/* harmony import */ var _UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UniqueValueRenderer.js */ "2gBT");
/* harmony import */ var _DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DictionaryRenderer.js */ "JhoD");
/* harmony import */ var _DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DotDensityRenderer.js */ "tI3Y");
/* harmony import */ var _HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HeatmapRenderer.js */ "R4xK");
/* harmony import */ var _SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SimpleRenderer.js */ "/1dM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const m={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],typeMap:{heatmap:_HeatmapRenderer_js__WEBPACK_IMPORTED_MODULE_5__["default"],simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"],"dot-density":_DotDensityRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],dictionary:_DictionaryRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"]},errorContext:"renderer"},n={key:"type",base:_Renderer_js__WEBPACK_IMPORTED_MODULE_0__["default"],typeMap:{simple:_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_6__["default"],"unique-value":_UniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"],"class-breaks":_ClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"]},errorContext:"renderer"};


/***/ }),

/***/ "XW+/":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Color.js */ "nvBr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var n;const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.renderers.support.AttributeColorInfo");let c=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r),this.color=null,this.field=null,this.label=null,this.valueExpression=null,this.valueExpressionTitle=null}castField(r){return null==r?r:"function"==typeof r?(u.error(".field: field must be a string value"),null):Object(_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__["ensureString"])(r)}getAttributeHash(){return`${this.field}-${this.valueExpression}`}clone(){return new n({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{type:[Number],write:!0}})],c.prototype,"color",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],c.prototype,"field",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__["cast"])("field")],c.prototype,"castField",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],c.prototype,"label",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],c.prototype,"valueExpression",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],c.prototype,"valueExpressionTitle",void 0),c=n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.renderers.support.AttributeColorInfo")],c);var a=c;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "tI3Y":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/aliasOf.js */ "Stxv");
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/enumeration.js */ "RI0u");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layers/support/fieldUtils.js */ "wdpY");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Color.js */ "nvBr");
/* harmony import */ var _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../symbols/SimpleLineSymbol.js */ "21Ip");
/* harmony import */ var _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../symbols/SimpleFillSymbol.js */ "DXYb");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Renderer.js */ "ZnuT");
/* harmony import */ var _mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mixins/VisualVariablesMixin.js */ "vk02");
/* harmony import */ var _support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./support/AttributeColorInfo.js */ "XW+/");
/* harmony import */ var _support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./support/DotDensityLegendOptions.js */ "MsUj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var m;let y=m=class extends(Object(_mixins_VisualVariablesMixin_js__WEBPACK_IMPORTED_MODULE_17__["VisualVariablesMixin"])(_Renderer_js__WEBPACK_IMPORTED_MODULE_16__["default"])){constructor(e){super(e),this.attributes=null,this.backgroundColor=new _Color_js__WEBPACK_IMPORTED_MODULE_13__["default"]([0,0,0,0]),this.blendDots=!0,this.dotBlendingEnabled=!0,this.dotShape="square",this.dotSize=1,this.legendOptions=null,this.outline=new _symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"],this.dotValue=null,this.referenceDotValue=null,this.referenceScale=null,this.seed=1,this.type="dot-density"}calculateDotValue(e){if(null==this.referenceScale)return this.dotValue;const t=e/this.referenceScale*this.dotValue;return t<1?1:t}getSymbol(){return new _symbols_SimpleFillSymbol_js__WEBPACK_IMPORTED_MODULE_15__["default"]({outline:this.outline})}async getSymbolAsync(){return this.getSymbol()}getSymbols(){return[this.getSymbol()]}getAttributeHash(){return this.attributes&&this.attributes.reduce(((e,t)=>e+t.getAttributeHash()),"")}getMeshHash(){return JSON.stringify(this.outline)}clone(){return new m({attributes:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.attributes),backgroundColor:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.backgroundColor),dotBlendingEnabled:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotBlendingEnabled),dotShape:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotShape),dotSize:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotSize),dotValue:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.dotValue),legendOptions:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.legendOptions),outline:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.outline),referenceScale:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.referenceScale),visualVariables:Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_2__["clone"])(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})}getControllerHash(){return`${this.attributes.map((e=>e.field||e.valueExpression||""))}-${this.outline&&JSON.stringify(this.outline.toJSON())||""}`}async collectRequiredFields(e,t){await this.collectVVRequiredFields(e,t);for(const o of this.attributes)o.valueExpression&&await Object(_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_12__["collectArcadeFieldNames"])(e,t,o.valueExpression),o.field&&e.add(o.field)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_support_AttributeColorInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"]],json:{write:!0}})],y.prototype,"attributes",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_Color_js__WEBPACK_IMPORTED_MODULE_13__["default"],json:{write:!0}})],y.prototype,"backgroundColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean}),Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("dotBlendingEnabled")],y.prototype,"blendDots",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Boolean,json:{write:!0}})],y.prototype,"dotBlendingEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String,json:{write:!1}})],y.prototype,"dotShape",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!1}})],y.prototype,"dotSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_support_DotDensityLegendOptions_js__WEBPACK_IMPORTED_MODULE_19__["default"],json:{write:!0}})],y.prototype,"legendOptions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:_symbols_SimpleLineSymbol_js__WEBPACK_IMPORTED_MODULE_14__["default"],json:{default:null,write:!0}})],y.prototype,"outline",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],y.prototype,"dotValue",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number}),Object(_core_accessorSupport_decorators_aliasOf_js__WEBPACK_IMPORTED_MODULE_6__["aliasOf"])("dotValue")],y.prototype,"referenceDotValue",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],y.prototype,"referenceScale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:Number,json:{write:!0}})],y.prototype,"seed",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__["enumeration"])({dotDensity:"dot-density"})],y.prototype,"type",void 0),y=m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.renderers.DotDensityRenderer")],y);var b=y;/* harmony default export */ __webpack_exports__["default"] = (b);


/***/ }),

/***/ "wk6I":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemCache.js */ "rvq7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,r){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"],this._storage.maxSize=e,r&&this._storage.registerRemoveFunc("",r)}put(t,e,r){this._storage.put(t,e,r,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}});


/***/ })

}]);
//# sourceMappingURL=default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115-es2015.js.map