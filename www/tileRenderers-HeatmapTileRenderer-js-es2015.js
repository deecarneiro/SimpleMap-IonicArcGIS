(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-HeatmapTileRenderer-js"],{

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


/***/ }),

/***/ "gOq9":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/HeatmapSource.js ***!
  \***************************************************************************************************/
/*! exports provided: HeatmapSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeatmapSource", function() { return i; });
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../renderers/support/heatmapUtils.js */ "AfLA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(){this.gradient=null,this.height=512,this.width=512}render(i){Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_0__["drawHeatmap"])(i,512,this.intensities,this.gradient,this.minPixelIntensity,this.maxPixelIntensity)}}


/***/ }),

/***/ "jncx":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/HeatmapTileRenderer.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../renderers/support/heatmapUtils.js */ "AfLA");
/* harmony import */ var _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../engine/BitmapTileContainer.js */ "6Az7");
/* harmony import */ var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseTileRenderer.js */ "4xTw");
/* harmony import */ var _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./support/HeatmapSource.js */ "gOq9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let a=class extends _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(e){super(e),this._intensityInfo={minPixelIntensity:0,maxPixelIntensity:0},this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new _engine_BitmapTileContainer_js__WEBPACK_IMPORTED_MODULE_11__["BitmapTileContainer"](e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minPixelIntensity:t,maxPixelIntensity:i}=e;this._intensityInfo.minPixelIntensity=t,this._intensityInfo.maxPixelIntensity=i,this._gradient=Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_10__["generateGradient"])(e.toJSON()),this.tiles.forEach((e=>{const r=e.bitmap.source;r&&(r.minPixelIntensity=t,r.maxPixelIntensity=i,r.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minPixelIntensity:r,maxPixelIntensity:s}=this._intensityInfo,n=t.bitmap.source||new _support_HeatmapSource_js__WEBPACK_IMPORTED_MODULE_13__["HeatmapSource"];n.intensities=i&&i.matrix||null,n.minPixelIntensity=r,n.maxPixelIntensity=s,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}};a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],a);var l=a;/* harmony default export */ __webpack_exports__["default"] = (l);


/***/ })

}]);
//# sourceMappingURL=tileRenderers-HeatmapTileRenderer-js-es2015.js.map