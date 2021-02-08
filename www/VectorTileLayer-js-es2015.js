(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["VectorTileLayer-js"],{

/***/ "F5/N":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/imageUtils.js ***!
  \****************************************************************/
/*! exports provided: checkWebPSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkWebPSupport", function() { return A; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function A(A){const o={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new Promise((l=>{const Q=new Image;Q.onload=()=>{Q.onload=Q.onerror=null,l(Q.width>0&&Q.height>0)},Q.onerror=()=>{Q.onload=Q.onerror=null,l(!1)},Q.src="data:image/webp;base64,"+o[A]}))}


/***/ }),

/***/ "FzwJ":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/VectorTileLayer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/global.js */ "3r0u");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/accessorSupport/decorators/writer.js */ "Cduq");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../geometry/Extent.js */ "OvF4");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Layer.js */ "pqNC");
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/MultiOriginJSONSupport.js */ "5pQd");
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./mixins/OperationalLayer.js */ "uRH/");
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./mixins/ArcGISService.js */ "PVlI");
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mixins/BlendLayer.js */ "mXvl");
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mixins/PortalLayer.js */ "DbUH");
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mixins/ScaleRangeLayer.js */ "WmKv");
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./support/TileInfo.js */ "3/ME");
/* harmony import */ var _support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./support/TilemapCache.js */ "llFo");
/* harmony import */ var _mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mixins/ArcGISCachedService.js */ "tIWS");
/* harmony import */ var _support_imageUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./support/imageUtils.js */ "F5/N");
/* harmony import */ var _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./support/SpriteSource.js */ "i7Gb");
/* harmony import */ var _support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./support/vectorTileLayerLoader.js */ "tR3v");
/* harmony import */ var _portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../portal/support/jsonContext.js */ "Fewv");
/* harmony import */ var _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/SchemaHelper.js */ "HLQf");
/* harmony import */ var _views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils.js */ "HZhB");
/* harmony import */ var _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository.js */ "kB7V");
/* harmony import */ var _views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../views/webgl/capabilities.js */ "sq/B");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let A=class extends(Object(_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_22__["BlendLayer"])(Object(_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_24__["ScaleRangeLayer"])(Object(_mixins_ArcGISCachedService_js__WEBPACK_IMPORTED_MODULE_27__["ArcGISCachedService"])(Object(_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_21__["ArcGISService"])(Object(_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_20__["OperationalLayer"])(Object(_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_23__["PortalLayer"])(Object(_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_19__["MultiOriginJSONMixin"])(_Layer_js__WEBPACK_IMPORTED_MODULE_18__["default"])))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(_core_global_js__WEBPACK_IMPORTED_MODULE_1__["default"].devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then((async()=>{if(!this.portalItem||!this.portalItem.id)return;const t=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await Object(_request_js__WEBPACK_IMPORTED_MODULE_17__["default"])(t,{...e,query:{f:"json"}})).data&&this.read({url:t},Object(_portal_support_jsonContext_js__WEBPACK_IMPORTED_MODULE_31__["createForItem"])(this.portalItem))})).then((()=>this._loadStyle(e)),(()=>this._loadStyle(e)));return this.addResolvingPromise(t),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(e.serviceUrl);return t?this._getDefaultAttribution(t.path):null}get capabilities(){const e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){const e=this._getPrimarySource();return e?e.fullExtent:null}get parsedUrl(){return this.serviceUrl?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){return this.tileInfo&&this.tileInfo.spatialReference||null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["isProtocolRelative"])(e)&&(e=`https:${e}`),t.styleUrl=e}get tileIndexType(){const e=this._getPrimarySource();return e?e.type:""}get tileIndexUrl(){const e=this._getPrimarySource();return e?e.tileMapURL:""}get tileInfo(){var e;const t=[];for(const e in this.sourceNameToSource)t.push(this.sourceNameToSource[e]);let r=(null==(e=this._getPrimarySource())?void 0:e.tileInfo)||new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"];if(t.length>1)for(let e=0;e<t.length;e++)Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__["areSchemasOverlapping"])(r,t[e].tileInfo)&&(r=Object(_views_2d_engine_vectorTiles_tileInfoUtils_js__WEBPACK_IMPORTED_MODULE_33__["unionTileInfos"])(r,t[e].tileInfo));return r}get tilemapCache(){const e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null}get tileServers(){const e=this._getPrimarySource();return e?e.tileServers:[]}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}get compatibleTileInfo256(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__["default"].create256x256CompatibleTileInfo(this.tileInfo)}get compatibleTileInfo512(){return _views_2d_engine_vectorTiles_SchemaHelper_js__WEBPACK_IMPORTED_MODULE_32__["default"].create512x512CompatibleTileInfo(this.tileInfo)}async loadSpriteSource(e=1,t){if(!this._spriteSourceMap.has(e)){const r=Object(_views_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_35__["default"])(),o=new _support_SpriteSource_js__WEBPACK_IMPORTED_MODULE_29__["default"](this.styleRepository.sprite,e,r.maxTextureSize,this.currentStyleInfo.spriteFormat);await o.load(t),this._spriteSourceMap.set(e,o)}return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["resolve"])(this._spriteSourceMap.get(e))}async loadStyle(e,t){const r=e||this.style||this.url;if(this._loadingPromise&&"string"==typeof r&&this.url===r&&!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["isAborted"])(this._abortController))return this._loadingPromise;const o=this._abortController;o&&o.abort();const i=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["createAbortController"])();return this._loadingPromise=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["create"])(((e,o)=>{const s={signal:i.signal};this._spriteSourceMap.clear(),this._getSourceAndStyle(r,s).then(e,o),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_14__["onAbort"])(t,(()=>{i.abort()}))})),this._abortController=i,this._loadingPromise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const o=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layerName:e,paint:t,isDataDriven:r||o})}getStyleLayer(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layerName:e})}getLayoutProperties(e){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}getTileUrl(e,t,r){let o=this.tileServers[t%this.tileServers.length];return o=o.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,r.toString()),o}write(e,t){return t&&t.origin&&!this.styleUrl?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_10__["default"]("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await Object(_support_vectorTileLayerLoader_js__WEBPACK_IMPORTED_MODULE_30__["loadMetadata"])(e,t);if("webp"===r.spriteFormat){await Object(_support_imageUtils_js__WEBPACK_IMPORTED_MODULE_28__["checkWebPSupport"])("lossy")||(r.spriteFormat="png")}this._set("currentStyleInfo",{...r}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySourceName",r.primarySourceName),this._set("styleRepository",new _views_2d_engine_vectorTiles_style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_34__["default"](r.style,r)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style",{})}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const o=t[2]&&t[2].toLowerCase();if(!o)return;const i=t[1]||"";for(const e of r)if(e.toLowerCase().indexOf(o)>-1)return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalize"])(`//static.arcgis.com/attribution/Vector${i}/${e}`)}_getPrimarySource(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null}async _loadStyle(e){return this._loadingPromise?this._loadingPromise:this.loadStyle(null,e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["currentStyleInfo"]})],A.prototype,"attributionDataUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["show","hide"]})],A.prototype,"listMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"],autoTracked:!1,json:{read:!1}})],A.prototype,"capabilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"currentStyleInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_16__["default"],dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"fullExtent",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])()],A.prototype,"style",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],A.prototype,"isReference",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:["VectorTileLayer"]})],A.prototype,"operationalLayerType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["serviceUrl"]})],A.prototype,"parsedUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["currentStyleInfo"]})],A.prototype,"serviceUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_15__["default"],dependsOn:["tileInfo"],readOnly:!0})],A.prototype,"spatialReference",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"styleRepository",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"sourceNameToSource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"primarySourceName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({type:String,readOnly:!0,dependsOn:["currentStyleInfo"],json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],A.prototype,"styleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__["writer"])(["portal-item","web-document"],"styleUrl")],A.prototype,"writeStyleUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"tileIndexType",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"tileIndexUrl",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_25__["default"],dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"tileInfo",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,type:_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_26__["TilemapCache"],dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"tilemapCache",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],A.prototype,"tileServers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{read:!1},readOnly:!0,value:"vector-tile"})],A.prototype,"type",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],A.prototype,"url",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0})],A.prototype,"version",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__["reader"])("version",["version","currentVersion"])],A.prototype,"readVersion",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["tileInfo"]})],A.prototype,"compatibleTileInfo256",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__["property"])({readOnly:!0,dependsOn:["tileInfo"]})],A.prototype,"compatibleTileInfo512",null),A=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__["subclass"])("esri.layers.VectorTileLayer")],A);var B=A;/* harmony default export */ __webpack_exports__["default"] = (B);


/***/ }),

/***/ "HLQf":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SchemaHelper.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/LOD.js */ "UOZ4");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}getLevelRowColumn(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e}getShift(e,i){let t=0,s=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(s=i)),[t,s]}getScale(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2}static create256x256CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]&&256===t.size[1])return t;const s=t.spatialReference.isGeographic,l=[],r=t.lods.length;for(let i=0;i<r;i++){const r=t.lods[i],o=s?r.resolution:2*r.resolution;l.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:r.level,scale:r.scale,resolution:o}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[256,256],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:l})}static create512x512CompatibleTileInfo(t){if(!t)return null;if(256===t.size[0]||256===t.size[1])return null;const s=[],l=t.lods.length;for(let i=0;i<l;i++){const l=t.lods[i],r=.5*l.resolution;s.push(new _layers_support_LOD_js__WEBPACK_IMPORTED_MODULE_0__["default"]({level:l.level,scale:l.scale,resolution:r}))}return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]({size:[512,512],dpi:t.dpi,format:t.format,compressionQuality:t.compressionQuality,origin:t.origin,spatialReference:t.spatialReference,lods:s})}});


/***/ }),

/***/ "HZhB":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \********************************************************************************/
/*! exports provided: areSchemasOverlapping, unionTileInfos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areSchemasOverlapping", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unionTileInfos", function() { return s; });
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../layers/support/TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(e,l){if(e===l)return!0;if(!e&&null!=l)return!1;if(null!=e&&!l)return!1;if(!e.spatialReference.equals(l.spatialReference)||e.dpi!==l.dpi)return!1;const s=e.origin,o=l.origin;if(Math.abs(s.x-o.x)>=1e-6||Math.abs(s.y-o.y)>=1e-6)return!1;let r,n;e.lods[0].scale>l.lods[0].scale?(r=e,n=l):(n=e,r=l);for(let e=r.lods[0].scale;e>=n.lods[n.lods.length-1].scale-1e-6;e/=2)if(Math.abs(e-n.lods[0].scale)<1e-6)return!0;return!1}function s(l,s){if(l===s)return l;if(!l&&null!=s)return s;if(null!=l&&!s)return l;const o=l.size[0],r=l.format,n=l.dpi,t={x:l.origin.x,y:l.origin.y},i=l.spatialReference.toJSON(),a=l.lods[0].scale>s.lods[0].scale?l.lods[0]:s.lods[0],d=l.lods[l.lods.length-1].scale<=s.lods[s.lods.length-1].scale?l.lods[l.lods.length-1]:s.lods[s.lods.length-1],f=a.scale,u=a.resolution,c=d.scale,p=[];let g=f,h=u,x=0;for(;g>c;)p.push({level:x,resolution:h,scale:g}),x++,g/=2,h/=2;return new _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"]({size:[o,o],dpi:n,format:r||"pbf",origin:t,lods:p,spatialReference:i})}


/***/ }),

/***/ "JNis":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../layers/support/serviceTileInfoProperty.js */ "q2iW");
/* harmony import */ var _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../layers/support/TilemapCache.js */ "llFo");
/* harmony import */ var _TileIndex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../TileIndex.js */ "JYLa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(s,h,u){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=s,this.sourceUrl=h,h&&(this.parsedUrl=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(this.sourceUrl));const c=this.parsedUrl.path,m=this.parsedUrl.query?"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["objectToQuery"])(this.parsedUrl.query):"",f=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(u),d=f.tiles;h&&d.forEach(((e,t)=>{Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(e)||(d[t]=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(c,e)+m)})),this.tileServers=d,u.tileMap&&(this.tileMapURL=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(h,u.tileMap));const x=u.capabilities&&u.capabilities.split(",").map((e=>e.toLowerCase().trim())),g=!!u.exportTilesAllowed,y=!!x&&-1!==x.indexOf("tilemap"),M=g&&u.hasOwnProperty("maxExportTilesCount")?u.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:g,supportsTileMap:y},exportTiles:g?{maxExportTilesCount:+M}:null},this.tileInfo=Object(_layers_support_serviceTileInfoProperty_js__WEBPACK_IMPORTED_MODULE_4__["readServiceTileInfo"])(f.tileInfo,f,null,{ignoreMinMaxLOD:!0}),y&&(this.type="vector-tile",this.tilemapCache=new _layers_support_TilemapCache_js__WEBPACK_IMPORTED_MODULE_5__["TilemapCache"]({layer:this}),this.tilemapCache&&(this.tileIndex=new _TileIndex_js__WEBPACK_IMPORTED_MODULE_6__["default"](this.tilemapCache))),this.fullExtent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(u.fullExtent)}getRefKey(e,t){return this.tileIndex?this.tileIndex.dataKey(e,t):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(e)}getSourceTileUrl(e,t,i){let l=this.tileServers[t%this.tileServers.length];return l=l.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString()),l}isCompatibleWith(e){const t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;const l=t.lods,r=i.lods,s=Math.min(l.length,r.length);for(let e=0;e<s;e++){const t=l[e],i=r[e];if(t.level!==i.level||Math.round(t.scale)!==Math.round(i.scale))return!1}return!0}});


/***/ }),

/***/ "PVlI":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js ***!
  \******************************************************************/
/*! exports provided: ArcGISService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcGISService", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../support/arcgisLayerUrl.js */ "VLTf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=p=>{let c=class extends p{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["parse"])(this.url);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",Object(_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_10__["sanitizeUrl"])(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger(this.declaredClass)))}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["url"]})],c.prototype,"title",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:String})],c.prototype,"url",null),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.ArcGISService")],c),c};


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

/***/ "i7Gb":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/SpriteSource.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.layers.support.SpriteSource");/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t,e,i,s){this.baseURL=t,this.devicePixelRatio=e,this.maxTextureSize=i,this._spriteImageFormat=s,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}get spriteNames(){const t=[];for(const e in this._spritesData)t.push(e);return t.sort(),t}getSpriteInfo(t){return this._spritesData[t]}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}_loadSprites(t){this._isRetina=this.devicePixelRatio>1.15;const l=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["urlToObject"])(this.baseURL),n=l.query?"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["objectToQuery"])(l.query):"",d=this._isRetina?"@2x":"",g=`${l.path}${d}.${this._spriteImageFormat}${n}`,m=`${l.path}${d}.json${n}`;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["all"])([Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(m,t),Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(g,{responseType:"image",...t})]).then((([t,i])=>{const s=Object.keys(t.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!i||!i.data)return this._spritesData=this.image=null,this.width=this.height=0,Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(null);this._spritesData=t.data;const a=i.data,h=Math.max(this.maxTextureSize,4096);if(a.width>h||a.height>h){const t=`Sprite resource for style ${l.path} is bigger than the maximum allowed of ${h} pixels}`;throw o.error(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("SpriteSource",t)}this.width=a.width,this.height=a.height;const n=document.createElement("canvas"),d=n.getContext("2d");n.width=a.width,n.height=a.height,d.drawImage(a,0,0,a.width,a.height);const g=d.getImageData(0,0,a.width,a.height),m=new Uint8Array(g.data);let p;for(let t=0;t<m.length;t+=4)p=m[t+3]/255,m[t]=m[t]*p,m[t+1]=m[t+1]*p,m[t+2]=m[t+2]*p;this.image=m}))}});


/***/ }),

/***/ "jIHu":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=8,e=6,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=4,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=2.5,S=6,T=5,U=6,V=1.15,W=2,X=2;


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


/***/ }),

/***/ "rvq7":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
  \****************************************************/
/*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCache", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function() { return i; });
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PooledArray.js */ "ikTR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=-3;class s{constructor(t,e,s){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(t,e,s,i=0){this._storage.put(this._namespace+t,e,s,i)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this._namespace+t,e,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class i{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs=this._removeFuncs.filter((e=>e[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,s,i){const h=this._db.get(t);if(h&&(this._size-=h.size,this._db.delete(t),h.entry!==e&&this._notifyRemoved(t,h.entry)),s>this._maxSize)return void this._notifyRemoved(t,e);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const r=1+Math.max(i,-3)- -3;this._db.set(t,{entry:e,size:s,lifetime:r,lives:r}),this._size+=s,this._checkSizeLimit()}updateSize(t,e,s){const i=this._db.get(t);i&&i.entry===e&&(this._size-=i.size,s>this._maxSize?this._notifyRemoved(t,e):(i.size=s,this._size+=s,this._checkSizeLimit()))}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},s=new Array;this._db.forEach(((t,i)=>{const h=t.lifetime;s[h]=(s[h]||0)+t.size,this._users.forAll((s=>{const h=s.namespace;if(i.startsWith(h)){const s=e[h]||0;e[h]=s+t.size}}))}));const i={};this._users.forAll((t=>{const s=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const h=e[s]||0;e[s]=h,i[s]=Math.round(100*t.hitRate)+"%"}else i[s]="0%"}));const h=Object.keys(e);h.forEach((t=>e[t]=e[t]/this._size*100)),h.sort(((t,s)=>e[s]-e[t])),h.forEach((s=>t[s]=Math.round(e[s])+"% / "+i[s]));for(let e=s.length-1;e>=0;--e){const i=s[e];i&&(t["Priority "+(e+-3-1)]=Math.round(i/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((e,s)=>{s.startsWith(t)&&(this._size-=e.size,this._db.delete(s),this._notifyRemoved(s,e.entry))}))}clearAll(){this._db.forEach(((t,e)=>this._notifyRemoved(e,t.entry))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(t,e){this._removeFuncs.forEach((s=>{t.startsWith(s[0])&&s[1](e)}))}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,e]of this._db)if(this._db.delete(t),e.lives<=1?(this._size-=e.size,this._notifyRemoved(t,e.entry)):(--e.lives,this._db.set(t,e)),this._size<=.9*this.maxSize)return}}


/***/ }),

/***/ "tR3v":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/vectorTileLayerLoader.js ***!
  \***************************************************************************/
/*! exports provided: loadMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMetadata", function() { return h; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource.js */ "JNis");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const S=_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults&&_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.io.corsEnabledServers;async function h(e,t){const s={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[o,l]="string"==typeof e?[e,null]:[null,e.jsonUrl],n=o?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(o):null;await w(s,"esri",e,l,t);const i={layerDefinition:s.validatedSource,url:o,parsedUrl:n,serviceUrl:s.sourceUrl,style:s.style,styleUrl:s.styleUrl,spriteUrl:s.style.sprite&&x(s.styleBase,s.style.sprite),spriteFormat:s.spriteFormat,glyphsUrl:s.style.glyphs&&x(s.styleBase,s.style.glyphs),sourceNameToSource:s.sourceNameToSource,primarySourceName:s.primarySourceName};return U(i.spriteUrl),U(i.glyphsUrl),i}function U(e){if(!e)return;const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["getOrigin"])(e);S&&-1===S.indexOf(r)&&S.push(r)}function x(...e){let r;for(let t=0;t<e.length;++t)if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isProtocolRelative"])(e[t])){if(r){const s=r.split("://")[0];r=s+":"+e[t].trim()}}else r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbsolute"])(e[t])?e[t]:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["join"])(r,e[t]);return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(r)}async function w(e,t,s,o,l){let n,y,d;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(l),"string"==typeof s){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["normalize"])(s);U(e);const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["urlToObject"])(e);d=await Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(t.path,{query:{f:"json"},responseType:"json",...l}),n=e,y=e}else d={data:s},n=s.jsonUrl||null,y=o;const S=d.data;return d.ssl&&(n&&(n=n.replace(/^http:/i,"https:")),y&&(y=y.replace(/^http:/i,"https:"))),g(S)?(e.styleUrl=n||null,async function(e,r,t,s){const o=t?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeFile"])(t):_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["appBaseUrl"];e.styleBase=o,e.style=r,e.styleUrl&&U(e.styleUrl);r["sprite-format"]&&"webp"===r["sprite-format"].toLowerCase()&&(e.spriteFormat="webp");const l=[];if(r.sources&&r.sources.esri){const t=r.sources.esri;t.url?await w(e,"esri",x(o,t.url),void 0,s):l.push(w(e,"esri",t,o,s))}for(const t of Object.keys(r.sources))"esri"!==t&&"vector"===r.sources[t].type&&(r.sources[t].url?l.push(w(e,t,x(o,r.sources[t].url),void 0,s)):l.push(w(e,t,r.sources[t],o,s)));await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(l)}(e,S,y,l)):g(S)?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])("You must specify the URL or the JSON for a service or for a style."):e.sourceUrl?v(e,S,y,!1,t,l):(e.sourceUrl=n||null,v(e,S,y,!0,t,l))}function g(e){return!!e.sources}async function v(e,r,s,o,l,n){const i=s?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["removeTrailingSlash"])(s)+"/":_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["appBaseUrl"],u=function(e,r){if(e.hasOwnProperty("tileInfo"))return e;const t={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},s=512;let o=78271.51696400007,l=295828763.7957775;const n=[],i=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,u=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):22;for(let e=0;e<=u;e++)e>=i&&n.push({level:e,scale:l,resolution:o}),o/=2,l/=2;for(const t of e.tiles)U(x(r,t));return{capabilities:"TilesOnly",initialExtent:t,fullExtent:t,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:n,spatialReference:{wkid:102100}}}}(r,i),c=new _views_2d_engine_vectorTiles_style_VectorTileSource_js__WEBPACK_IMPORTED_MODULE_4__["default"](l,i,u);if(!o&&e.primarySourceName in e.sourceNameToSource){const r=e.sourceNameToSource[e.primarySourceName];if(!r.isCompatibleWith(c))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])();null!=c.fullExtent&&(null!=r.fullExtent?r.fullExtent.union(c.fullExtent):r.fullExtent=c.fullExtent.clone()),r.tileInfo.lods.length<c.tileInfo.lods.length&&(r.tileInfo=c.tileInfo)}if(o?(e.sourceBase=i,e.source=r,e.validatedSource=u,e.primarySourceName=l,e.sourceUrl&&U(e.sourceUrl)):U(i),e.sourceNameToSource[l]=c,!e.style)return null==r.defaultStyles?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])():"string"==typeof r.defaultStyles?w(e,"",x(i,r.defaultStyles,"root.json"),void 0,n):w(e,"",r.defaultStyles,x(i,"root.json"),n)}


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
//# sourceMappingURL=VectorTileLayer-js-es2015.js.map