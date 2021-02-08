(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-TileLayerView2D-js"],{

/***/ "5LEI":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(s,t,e,r=e){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},this.triangleCount=0,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](s),this.bounds=t,this.size=e,this.coordRange=r}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s}setTransform(o,i){const e=i/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,h]=o.toScreenNoRotation([0,0],this.coords),a=this.size[0]/this.coordRange[0]*e,d=this.size[1]/this.coordRange[1]*e;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(r,a,0,0,0,d,0,n,h,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,o.displayViewMat3,r)}}


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

/***/ "ArQ+":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/TileLayerView2D.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/* harmony import */ var _layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../layers/TileLayerView.js */ "K+Ap");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/* harmony import */ var _BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./BitmapTileLayerView2D.js */ "Fkrg");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const w=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.TileLayerView2D"),_=[0,0];let I=class extends(Object(_layers_TileLayerView_js__WEBPACK_IMPORTED_MODULE_19__["TileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_12__["RefreshableLayerView"])(Object(_BitmapTileLayerView2D_js__WEBPACK_IMPORTED_MODULE_21__["BitmapTileLayerView2D"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_20__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"]))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}initialize(){const e=this.layer.tileInfo,t=e&&e.spatialReference;let i;t||(i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer})),t.equals(this.view.spatialReference)||(i=new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer})),this.watch("resampling",(()=>{this.refresh()})),i&&this.addResolvingPromise(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(i))}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}hitTest(){return null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this.notifyChange("updating")}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_14__["default"](this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_15__["default"]({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_16__["default"]({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.container.requestRender(),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_18__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){var e;return(null==(e=this._fetchQueue)?void 0:e.length)>0}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(_,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,i){const r="tilemapCache"in this.layer?this.layer.tilemapCache:null,s=!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(i)&&i.signal;if(!r)try{return await this._fetchImage(e,s)}catch(e){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e)&&!this.resampling)return this._createBlankImage();throw e}const a=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_13__["default"](0,0,0,0);let l;try{if(await r.fetchAvailabilityUpsample(e.level,e.row,e.col,a,{signal:s}),a.level!==e.level&&!this.resampling)return this._createBlankImage();l=await this._fetchImage(a,s)}catch(t){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(t))throw t;l=await this._fetchImage(e,s)}const{level:h,row:c,col:u}=a;return this.resampling&&h!==e.level?this._resampleImage(l,h,c,u,e.level,e.row,e.col):l}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(e){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(e)||w.error(e)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchTile(e.level,e.row,e.col,{timestamp:this.refreshTimestamp,signal:t})}_resampleImage(e,t,i,r,s,a,l){const o=this._tileInfoView.tileInfo.size,h=this._tileInfoView.getTileResolution(t),n=this._tileInfoView.getTileResolution(s);let c=this._tileInfoView.getLODInfoAt(s);const u=c.getXForColumn(l),p=c.getYForRow(a);c=this._tileInfoView.getLODInfoAt(t);const m=c.getXForColumn(r),f=c.getYForRow(i),g=Math.round((u-m)/h),y=Math.round(-(p-f)/h),d=Math.round(o[0]*(n/h)),w=Math.round(o[1]*(n/h)),_=this._createBlankImage();return _.getContext("2d").drawImage(e,g,y,d,w,0,0,o[0],o[1]),_}_createBlankImage(){const e=this._tileInfoView.tileInfo.size,t=document.createElement("canvas");return[t.width,t.height]=e,t}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({dependsOn:["layer.resampling?"]})],I.prototype,"resampling",null),I=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.TileLayerView2D")],I);var T=I;/* harmony default export */ __webpack_exports__["default"] = (T);


/***/ }),

/***/ "K+Ap":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/TileLayerView.js ***!
  \*****************************************************************/
/*! exports provided: TileLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileLayerView", function() { return c; });
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
/* harmony import */ var _renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../renderers/support/clickToleranceUtils.js */ "U282");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const c=c=>{let l=class extends c{async fetchPopupFeatures(e,t){const{layer:o}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:o}));if("tile"!==o.type)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:o.type}));const c=this.get("view.scale"),l=o.allSublayers.toArray().filter((e=>{const r=0===e.minScale||c<=e.minScale,t=0===e.maxScale||c>=e.maxScale;return e.popupTemplate&&e.popupEnabled&&e.visible&&r&&t}));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["eachAlways"])(l.map((async o=>{const s=o.createQuery(),p=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t)?t.event:null,a=Object(_renderers_support_clickToleranceUtils_js__WEBPACK_IMPORTED_MODULE_12__["calculateTolerance"])({renderer:o.renderer,event:p});s.geometry=this.createFetchPopupFeaturesQueryGeometry(e,a),s.outFields=await o.popupTemplate.getRequiredFields();return(await o.queryFeatures(s)).features}))).then((e=>[].concat(...e.map((e=>e.value)).filter(Boolean))))}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],l.prototype,"layer",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.mixins.TileLayerView")],l),l};


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

/***/ "ZyIX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return n; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "b3VY");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "7F7D");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;/* harmony default export */ __webpack_exports__["default"] = (class extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(n),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(r.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(r.scale)}}prepareRenderPasses(t){const n=t.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()}),i=t.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(t),n,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}});


/***/ })

}]);
//# sourceMappingURL=layers-TileLayerView2D-js-es2015.js.map