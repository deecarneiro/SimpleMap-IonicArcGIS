(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js"],{

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

/***/ "HSpW":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/Tilemap.js ***!
  \*************************************************************/
/*! exports provided: default, Tilemap, tilemapDefinitionId, tilemapDefinitionUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tilemap", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilemapDefinitionId", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tilemapDefinitionUrl", function() { return n; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l{constructor(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}getAvailability(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;const e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,l=e>>3,o=this._tileAvailabilityBitSet;return l<0||l>o.length?"unknown":o[l]&1<<a?"available":"unavailable"}_updateFromData(t){const i=this.location.width,e=this.location.height;let a=!0,l=!0;const o=Math.ceil(i*e/8),n=new Uint8Array(o);let r=0;for(let i=0;i<t.length;i++){const e=i%8;t[i]?(l=!1,n[r]|=1<<e):a=!1,7===e&&++r}l?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=n,this.byteSize+=n.length)}static fromDefinition(t,o){const r=t.service.request||_request_js__WEBPACK_IMPORTED_MODULE_3__["default"],{row:s,col:h,width:c,height:m}=t,d={query:{f:"json"}};return o=o?{...d,...o}:d,r(n(t),o).then((t=>t.data)).catch((t=>{if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:h,width:c,height:m},valid:!0,data:Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["constant"])(c*m,0)};throw t})).then((t=>{if(t.location&&(t.location.top!==s||t.location.left!==h||t.location.width!==c||t.location.height!==m))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:location-mismatch","Tilemap response for different location than requested",{response:t,definition:{top:s,left:h,width:c,height:m}});return l.fromJSON(t)}))}static fromJSON(i){l.validateJSON(i);const e=new l;return e.location=Object.freeze(Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(i.location)),e._updateFromData(i.data),Object.freeze(e)}static validateJSON(t){if(!t||!t.location)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function o(t){return`${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}function n(t){let i;if("vector-tile"===t.service.type)i=`${t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`;else{const e=t.service.tileServers;i=`${e&&e.length?e[t.row%e.length]:t.service.url}/tilemap/${t.level}/${t.row}/${t.col}/${t.width}/${t.height}`}const e=t.service.query;return e&&(i=`${i}?${e}`),i}/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ }),

/***/ "llFo":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/TilemapCache.js ***!
  \******************************************************************/
/*! exports provided: TilemapCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TilemapCache", function() { return L; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/cast.js */ "Gj5k");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../core/LRUCache.js */ "wk6I");
/* harmony import */ var _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Tilemap.js */ "HSpW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var z;const A=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.layers.support.TilemapCache");let L=z=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_13__["default"]{constructor(e){super(e),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__["default"],this._pendingTilemapRequests={},this._availableLevels={},this.levels=5,this.cacheByteSize=2097152,this.request=_request_js__WEBPACK_IMPORTED_MODULE_14__["default"],this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_17__["default"](this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],(()=>this._initializeTilemapDefinition())),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["init"])(this,"layer.tileInfo.lods",(e=>this._initializeAvailableLevels(e)),!0)]),this._initializeTilemapDefinition()}destroy(){this._handles&&(this._handles.destroy(),this._handles=null)}castLevels(e){return e<=2?(A.error("Minimum levels for Tilemap is 3, but got ",e),3):e}get size(){return 1<<this.levels}fetchTilemap(e,t,i,l){if(!this._availableLevels[e])return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const r=this._tmpTilemapDefinition,a=this._tilemapFromCache(e,t,i,r);if(a)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])(a);const o=l&&l.signal;return l={...l,signal:null},Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(((e,t)=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["onAbort"])(o,(()=>t(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortError"])())));const i=Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(r);let s=this._pendingTilemapRequests[i];if(!s){s=_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"].fromDefinition(r,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>delete this._pendingTilemapRequests[i];this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}getAvailability(e,t,i){if(!this._availableLevels[e])return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}getAvailabilityUpsample(e,t,i,l){l.level=e,l.row=t,l.col=i;const r=this.layer.tileInfo;for(r.updateTileInfo(l);;){const e=this.getAvailability(l.level,l.row,l.col);if("unavailable"!==e)return e;if(!r.upsampleTile(l))return"unavailable"}}fetchAvailability(e,t,i,l){return this._availableLevels[e]?this.fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof _Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["Tilemap"]){const r=l.getAvailability(t,i);return"unavailable"===r?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):r}if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(l))throw l;return"unknown"})):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`))}fetchAvailabilityUpsample(e,t,i,l,r){l.level=e,l.row=t,l.col=i;const s=this.layer.tileInfo;s.updateTileInfo(l);const a=this.fetchAvailability(e,t,i,r).catch((e=>{if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,r,a),a}async _fetchAvailabilityUpsamplePrefetch(e,t,i,l,r,s){if(!this._prefetchingEnabled)return;const a=`prefetch-${e}`;if(this._handles.has(a))return;const o=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createAbortController"])();s.then((()=>o.abort()),(()=>o.abort()));let n=!1;const h={remove(){n||(n=!0,o.abort())}};if(this._handles.add(h,a),await Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_12__["waitTicks"])(10,o.signal).catch((()=>{})),n||(n=!0,this._handles.remove(a)),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAborted"])(o))return;const c={id:e,level:t,row:i,col:l},p={...r,signal:o.signal},m=this.layer.tileInfo;for(let e=0;z._prefetches.length<z._maxPrefetch&&m.upsampleTile(c);++e){const e=this.fetchAvailability(c.level,c.row,c.col,p);z._prefetches.push(e);const t=()=>{z._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__["objectToQuery"])(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const r=Object(_Tilemap_js__WEBPACK_IMPORTED_MODULE_18__["tilemapDefinitionId"])(l);return this._tilemapCache.get(r)}_initializeAvailableLevels(e){this._availableLevels={},e&&e.forEach((e=>this._availableLevels[e.level]=!0))}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,l)=>!!e._tilemapFromCache(t,i,l,e._tmpTilemapDefinition)}}};L._maxPrefetch=4,L._prefetches=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_10__["default"]({initialSize:z._maxPrefetch}),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({constructOnly:!0,type:Number})],L.prototype,"levels",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_4__["cast"])("levels")],L.prototype,"castLevels",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({readOnly:!0,dependsOn:["levels"],type:Number})],L.prototype,"size",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({constructOnly:!0,type:Number})],L.prototype,"cacheByteSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({constructOnly:!0})],L.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__["property"])({constructOnly:!0})],L.prototype,"request",void 0),L=z=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.support.TilemapCache")],L);


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

/***/ "q2iW":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/serviceTileInfoProperty.js ***!
  \*****************************************************************************/
/*! exports provided: readServiceTileInfo, serviceTileInfoProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readServiceTileInfo", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceTileInfoProperty", function() { return r; });
/* harmony import */ var _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileInfo.js */ "3/ME");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r={type:_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"],json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:n}}}}};function n(r,n,l,o){if(!r)return null;const{minScale:i,maxScale:t,minLOD:m,maxLOD:s}=n;if(null!=m&&null!=s)return o&&o.ignoreMinMaxLOD?_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r):_TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON({...r,lods:r.lods.filter((({level:e})=>null!=e&&e>=m&&e<=s))});if(0!==i&&0!==t){const n=e=>Math.round(1e4*e)/1e4,l=i?n(i):1/0,o=t?n(t):-1/0;return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON({...r,lods:r.lods.filter((e=>{const r=n(e.scale);return r<=l&&r>=o}))})}return _TileInfo_js__WEBPACK_IMPORTED_MODULE_0__["default"].fromJSON(r)}


/***/ })

}]);
//# sourceMappingURL=default~ElevationLayer-js~ImageryTileLayer-js~TileLayer-js~VectorTileLayer-js-es2015.js.map