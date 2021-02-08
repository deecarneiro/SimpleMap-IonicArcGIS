(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-ImageryTileLayerView2D-js"],{

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

/***/ "Jl6v":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTile.js ***!
  \*****************************************************************/
/*! exports provided: RasterTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterTile", function() { return e; });
/* harmony import */ var _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl/TiledDisplayObject.js */ "5LEI");
/* harmony import */ var _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RasterBitmap.js */ "N8mD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e extends _webgl_TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_0__["TiledDisplayObject"]{constructor(t,e,i,a=null){super(t,e,i),this.bitmap=new _RasterBitmap_js__WEBPACK_IMPORTED_MODULE_1__["RasterBitmap"](a,null,null),this.bitmap.coordScale=i,this.bitmap.once("isReady",(()=>this.ready()))}set stencilRef(t){this.bitmap.stencilRef=t}get stencilRef(){return this.bitmap.stencilRef}getMemoryUsage(){return this.bitmap.getMemoryUsage()}setTransform(t,s){super.setTransform(t,s),this.bitmap.transforms.dvs=this.transforms.dvs}release(){return this.destroy(),this.bitmap=null,this.stage=null,!0}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap.stage=null}}


/***/ }),

/***/ "N8mD":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterBitmap.js ***!
  \*******************************************************************/
/*! exports provided: RasterBitmap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterBitmap", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layers/support/rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DisplayObject.js */ "fEsP");
/* harmony import */ var _webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../webgl/rasterUtils.js */ "vrr1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const _={bandCount:3,outMin:0,outMax:1,minCutOff:[0,0,0],maxCutOff:[255,255,255],factor:[1/255,1/255,1/255],useGamma:!1,gamma:[1,1,1],gammaCorrection:[1,1,1],colormap:null,colormapOffset:null,type:"stretch"};class p extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_5__["DisplayObject"]{constructor(t=null,e=null,s=null){super(),this._textureInvalidated=!0,this._memoryUsed=null,this._supportsBilinear=!0,this.stencilRef=0,this.coordScale=[1,1],this._symbolizerParameters=null,this.height=null,this.isRendereredSource=!1,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this.rawPixelData=null,this._suspended=!1,this._bandIds=null,this._interpolation=null,this._transformGrid=null,this.width=null,this.x=0,this.y=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},this.source=t,this.transformGrid=e,this.interpolation=s}get symbolizerParameters(){return this._symbolizerParameters||_}set symbolizerParameters(t){this._symbolizerParameters=t}get source(){return this._source}set source(t){this._source=t,this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._memoryUsed=null)}get suspended(){return this._suspended}set suspended(t){this._suspended&&!t&&this.stage&&(this.ready(),this.requestRender()),this._suspended=t}get bandIds(){return this._bandIds}set bandIds(t){this._bandIds=t,this.invalidateTexture()}get interpolation(){return this._interpolation}set interpolation(t){this._interpolation=t,this._rasterTexture&&this._rasterTexture.setSamplingMode(!this._supportsBilinear||"bilinear"!==t&&"cubic"!==t?9728:9729)}get transformGrid(){return this._transformGrid}set transformGrid(t){this._transformGrid=t,this._transformGridTexture&&(this._transformGridTexture.dispose(),this._transformGridTexture=null,this._memoryUsed=null)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRender())}setTransform(t){const o=Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.transforms.dvs),[u,h]=t.toScreenNoRotation([0,0],this.x,this.y),l=this.resolution/this.pixelRatio/t.resolution,d=l*this.width,m=l*this.height,_=Math.PI*this.rotation/180;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(u,h)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(d/2,m/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(o,o,-_),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(-d/2,-m/2)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(o,o,Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_4__["f"])(d,m)),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,t.displayViewMat3,o)}getTextures(){if(!this._rasterTexture)return null;const t=[],e=[];return this._transformGridTexture&&(e.push(this._transformGridTexture),t.push("u_transformGrid")),this._rasterTexture&&(e.push(this._rasterTexture),t.push("u_image")),this._colormapTexture&&(e.push(this._colormapTexture),t.push("u_colormap")),{names:t,textures:e}}getMemoryUsage(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._memoryUsed)){const t=this.getTextures();if(null==t)return 0;this._memoryUsed=t.textures.map((t=>t.descriptor.width*t.descriptor.height*4)).reduce(((t,e)=>t+e))}return this._memoryUsed}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}updateTexture({context:t}){var e,s,r;if(!this.stage)return null==(e=this._rasterTexture)||e.dispose(),null==(s=this._transformGridTexture)||s.dispose(),null==(r=this._colormapTexture)||r.dispose(),this._rasterTexture=null,this._rasterTextureBandIds=null,this._transformGridTexture=null,void(this._colormapTexture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1;const i=this.source,a=i&&i.pixels&&i.pixels.length>0;this._createOrDestroyRasterTexture(t),this._rasterTexture&&(a?(this._updateColormapTexture(t),this.transformGrid&&!this._transformGridTexture&&(this._transformGridTexture=Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createTransformTexture"])(t,this.transformGrid))):this._rasterTexture.setData(null)),this.suspended||(this.ready(),this.requestRender())}_createOrDestroyRasterTexture(t){var e,s;const r=this.source?Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_2__["extractBands"])(this.source,this.bandIds):null;if(!(r&&r.pixels&&r.pixels.length>0))return void(this._rasterTexture&&(this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null));const i=null==this._rasterTextureBandIds&&null==this.bandIds||this._rasterTextureBandIds&&this.bandIds&&this._rasterTextureBandIds.join("")===this.bandIds.join("");if(this._rasterTexture){if(i)return;this._rasterTexture.dispose(),this._rasterTextureBandIds=null,this._rasterTexture=null}const a=this.interpolation||"nearest",u=this.isRendereredSource||!(null!=(e=t.capabilities.textureFloat)&&e.textureFloat);this._rasterTexture=Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createRasterTexture"])(t,r,a,u),this._supportsBilinear=null==(s=t.capabilities.textureFloat)?void 0:s.textureFloatLinear,this._rasterTextureBandIds=this.bandIds}_updateColormapTexture(t){const e=this._colormap,s=this.symbolizerParameters.colormap;return s?e?s.length!==e.length||s.some(((t,s)=>t!==e[s]))?(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),this._colormapTexture=Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createColormapTexture"])(t,s),void(this._colormap=s)):void 0:(this._colormapTexture=Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_6__["createColormapTexture"])(t,s),void(this._colormap=s)):(this._colormapTexture&&(this._colormapTexture.dispose(),this._colormapTexture=null),void(this._colormap=null))}}


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

/***/ "Witc":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/RasterTileContainer.js ***!
  \**************************************************************************/
/*! exports provided: RasterTileContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RasterTileContainer", function() { return o; });
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes.js */ "Oxob");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _RasterTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RasterTile.js */ "Jl6v");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{createTile(r){const s=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__["create"])(),r);return new _RasterTile_js__WEBPACK_IMPORTED_MODULE_4__["RasterTile"](r,s,this._tileInfoView.tileInfo.size)}destroyTile(){}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].raster],target:()=>this.children.map((e=>e.bitmap)),drawPhase:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP&&super.doRender(e)}}


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

/***/ "cthj":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/layers/ImageryTileLayerView.js ***!
  \************************************************************************/
/*! exports provided: ImageryTileLayerView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageryTileLayerView", function() { return u; });
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
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/popupUtils.js */ "rXMu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.fullExtent=null,this.tileInfo=null,this.datumTransformation=null}get hasTilingEffects(){return this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment}async fetchPopupFeatures(e,r){const{layer:i}=this;if(!e)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:n}=i,l=Object(_support_popupUtils_js__WEBPACK_IMPORTED_MODULE_14__["getFetchPopupTemplate"])(i,r);if(!n||!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(l))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:n,popupTemplate:l});const u=[],{value:m}=await i.identify(e);if(m){var f,c;const e=m.join(", "),t={ObjectId:0},r="Raster.ServicePixelValue";t[r]=this._formatAttributeValue(e,r);const o=null==(f=i.rasterInfo)||null==(c=f.attributeTable)?void 0:c.features;if(o&&o.length>0){const r=o.filter((t=>{const r=t.attributes.value||t.attributes.Value||t.attributes.VALUE;return String(r)===e}));if(r.length>0){const e=r[0];if(e)for(const r in e.attributes)if(e.attributes.hasOwnProperty(r)){const i=this._rasterFieldPrefix+r;t[i]=this._formatAttributeValue(e.attributes[r],i)}}}const s=new _Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"](this.fullExtent.clone(),null,t);s.layer=i,s.sourceLayer=s.layer,u.push(s)}return u}updateFullExtent(){const e=this.layer.tileInfo;let t;e&&e.spatialReference||(t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:tiling-information-missing","The layer doesn't provide tiling information",{layer:this.layer}));const r=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_13__["projectExtent"])(this.layer.fullExtent,this.view.spatialReference,this.datumTransformation);return null==r&&(t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("layerview:projection-not-supported","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})),this._set("fullExtent",r),t?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["reject"])(t):Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["resolve"])()}_formatAttributeValue(e,t){if("string"==typeof e){const r=this.layer.popupTemplate&&this.layer.popupTemplate.fieldInfos,i=this._getFieldInfo(r,t),o=i&&i.format;if(o){let t,r;return e.trim().indexOf(",")>-1?(t=",",r=t+" ",this._formatDelimitedString(e,t,r,o)):e.trim().indexOf(" ")>-1?(t=r=" ",this._formatDelimitedString(e,t,r,o)):this._formatNumberFromString(e,o)}}return e}_getFieldInfo(e,t){if(!e||!e.length||!t)return;const r=t.toLowerCase();let i;return e.some((e=>!(!e.fieldName||e.fieldName.toLowerCase()!==r&&e.fieldName.toLowerCase()!==r.replace(/ /g,"_"))&&(i=e,!0))),i}_formatDelimitedString(e,t,r,i){return e&&t&&r&&i?e.trim().split(t).map((e=>this._formatNumberFromString(e,i))).join(r):e}_formatNumberFromString(e,t){if(!e||!t)return e;const r=Number(e);return isNaN(r)?e:t.format(r)}};return Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"layer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"fullExtent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],m.prototype,"tileInfo",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({readOnly:!0,dependsOn:["layer.renderer"]})],m.prototype,"hasTilingEffects",null),m=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.layers.ImageryTileLayerView")],m),m};


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


/***/ }),

/***/ "rrwe":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/ImageryTileLayerView2D.js ***!
  \*****************************************************************************/
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
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../geometry.js */ "4GrV");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../layers/support/PixelBlock.js */ "Piei");
/* harmony import */ var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../layers/support/TileInfo.js */ "3/ME");
/* harmony import */ var _layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../layers/support/rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../layers/support/rasterFunctions/rasterProjectionHelper.js */ "tODX");
/* harmony import */ var _layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../layers/support/rasterDatasets/RawBlockCache.js */ "IYxN");
/* harmony import */ var _layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../layers/RefreshableLayerView.js */ "bHqs");
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../webgl/capabilities.js */ "sq/B");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../support/drapedUtils.js */ "6UvW");
/* harmony import */ var _layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../layers/ImageryTileLayerView.js */ "cthj");
/* harmony import */ var _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../engine/RasterTileContainer.js */ "Witc");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const L=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.ImageryTileLayerView2D"),q=[0,0];let D=class extends(Object(_layers_ImageryTileLayerView_js__WEBPACK_IMPORTED_MODULE_29__["ImageryTileLayerView"])(Object(_layers_RefreshableLayerView_js__WEBPACK_IMPORTED_MODULE_22__["RefreshableLayerView"])(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_31__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_27__["default"])))){constructor(){super(...arguments),this._tileStrategy=null,this._tileInfoView=null,this._fetchQueue=null,this._blockCacheRegistryUrl=null,this._blockCacheRegistryId=null,this._bitmapView=null,this._emptyTilePixelBlock=null,this._srcResolutions=null,this._previousLOD=null,this._needBlockCacheUpdate=!1,this._globalSymbolizerParams=null,this._symbolizerParams=null,this._abortController=null,this._globalUpdateRequested=!1,this.useWebGLForProcessing=!0,this.datumTransformation=null,this._redrawDebounced=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["debounce"])((e=>this._redrawImage(e)),2e3)}initialize(){const e=this.updateFullExtent();this.addResolvingPromise(e)}get useProgressiveUpdate(){return null==this._get("useProgressiveUpdate")||this._get("useProgressiveUpdate")}set useProgressiveUpdate(e){this._tileStrategy&&this.useProgressiveUpdate!==e&&(this._tileStrategy.destroy(),this._bitmapView.removeAllChildren(),this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__["default"]({cachePolicy:e?"keep":"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:e?40:0,tileInfoView:this._tileInfoView}),this._set("useProgressiveUpdate",e),this.requestUpdate())}hitTest(e,t){if(this.suspended)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(null);const i=this.view.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_14__["createScreenPoint"])(e,t));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["resolve"])(new _Graphic_js__WEBPACK_IMPORTED_MODULE_15__["default"]({attributes:{},geometry:i}))}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume();const{extent:t,resolution:i,scale:s}=e.state,r=this._tileInfoView.getClosestInfoForScale(s);if(this.layer.raster){var a;if(!this.useProgressiveUpdate||this._needBlockCacheUpdate){const e=this._srcResolutions[r.level],s=t.toJSON?t:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t);Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["update"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId,s,i,e,this.layer.raster.ioConfig.sampling)}this._needBlockCacheUpdate=!1,(null==(a=this._previousLOD)?void 0:a.level)!==r.level&&(this._previousLOD=r,null!=this._symbolizerParams&&this._updateSymbolizerParams())}this.notifyChange("updating")}attach(){this.layer.increaseRasterJobHandlerUsage(),Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_23__["default"])().supportsTextureFloat||(this.useWebGLForProcessing=!1),this.layer.raster&&(this.layer.raster.ioConfig.allowPartialFill=!0),this._initializeTileInfo(),this._tileInfoView=new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_24__["default"](this.tileInfo,this.fullExtent),this._fetchQueue=new _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_25__["default"]({tileInfoView:this._tileInfoView,concurrency:10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_26__["default"]({cachePolicy:this.useProgressiveUpdate?"keep":"purge",resampling:!1,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),cacheSize:this.useProgressiveUpdate?40:0,tileInfoView:this._tileInfoView}),this._bitmapView=new _engine_RasterTileContainer_js__WEBPACK_IMPORTED_MODULE_30__["RasterTileContainer"](this._tileInfoView),this.container.addChild(this._bitmapView),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this,["layer.bandIds","layer.renderer"],(()=>this._redrawDebounced().catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||L.error(e)})))),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this,["layer.interpolation"],((e,t)=>{"majority"!==e&&"majority"!==t||!this._canUseMajorityInterpolationOnDataSource()?this._redrawDebounced().catch((e=>{Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||L.error(e)})):this.refreshDebounced()})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["watch"])(this,["layer.multidimensionalDefinition"],this.refreshDebounced)],"attach"),this._updateBlockCacheRegistry()}detach(){this.handles.remove("attach"),this.layer.decreaseRasterJobHandlerUsage(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null,Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["unregister"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId)}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){!this.hasTilingEffects&&this.useProgressiveUpdate||(this._abortController&&this._abortController.abort(),this._abortController=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])(),0===this._fetchQueue.length&&this._redrawImage(this._abortController.signal).then((()=>{this._globalUpdateRequested=!1,this.requestUpdate()}))),this.requestUpdate()}createFetchPopupFeaturesQueryGeometry(e,t){return Object(_support_drapedUtils_js__WEBPACK_IMPORTED_MODULE_28__["createQueryGeometry"])(e,t,this.view)}async doRefresh(){this.updateRequested||this.suspended||(this._updateSymbolizerParams(),this._updateBlockCacheRegistry(),this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((e=>this._enqueueTileFetch(e))),this.notifyChange("updating"))}isUpdating(){return this._fetchQueue.length>0||this._globalUpdateRequested}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(q,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this.requestUpdate(),this._needBlockCacheUpdate=!0,this._globalUpdateRequested=this.hasTilingEffects||!this.useProgressiveUpdate,t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>{e.destroy(),this.requestUpdate()})),this.requestUpdate()}fetchTile(e,s){const r=!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(s)&&s.signal,a=this._canUseWebGLForProcessing(),l={tileInfo:this.tileInfo,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(r),registryId:this._blockCacheRegistryId,requestRawData:a,srcResolution:this._srcResolutions[e.level],datumTransformation:this.datumTransformation,interpolation:a?"nearest":this.layer.interpolation};return this.layer.fetchTile(e.level,e.row,e.col,l)}_canUseWebGLForProcessing(){return this.useWebGLForProcessing&&this.layer.symbolizer.canRenderInWebGL&&!("majority"===this.layer.interpolation&&this._canUseMajorityInterpolationOnDataSource())}_initializeTileInfo(){const e=this.view.spatialReference,t=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__["default"]({x:this.fullExtent.xmin,y:this.fullExtent.ymax,spatialReference:e}),{scales:i,srcResolutions:s}=Object(_layers_support_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_20__["computeProjectedScales"])(this.layer.rasterInfo,e),r=_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"].create({spatialReference:e,size:512,scales:i});(0===r.origin.x||r.origin.x>t.x)&&(r.origin=t),this._set("tileInfo",r),this._srcResolutions=null!=s?s:[]}async _enqueueTileFetch(e,t){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key),{bandIds:i}=this.layer;let s=!this.useProgressiveUpdate||this.hasTilingEffects&&!this._globalSymbolizerParams;if(this._globalUpdateRequested&&!this.moving&&0===this._fetchQueue.length){s=!1;try{await this._redrawImage(this._abortController&&this._abortController.signal)}catch(e){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)&&L.error(e)}this._globalUpdateRequested=!1}const r=this._canUseWebGLForProcessing();if(r&&!this.hasTilingEffects&&null==this._symbolizerParams&&this._updateSymbolizerParams(),t&&t.pixelBlock){if(r)e.bitmap.source=t.pixelBlock,e.bitmap.isRendereredSource=!1;else{const i={extent:t.extent,pixelBlock:t.pixelBlock},s=await this.layer.applyRenderer(i,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null);e.bitmap.rawPixelData=i,e.bitmap.source=s,e.bitmap.isRendereredSource=!0}e.bitmap.symbolizerParameters=r?this._globalSymbolizerParams||this._symbolizerParams:null,!e.bitmap.transformGrid&&r?e.bitmap.transformGrid=t.transformGrid:e.bitmap.transformGrid=null}else{const t=this._createEmptyTilePixelBlock();e.bitmap.source=t,e.bitmap.symbolizerParameters=r?this._symbolizerParams:null,e.bitmap.transformGrid=null}e.bitmap.bandIds=i,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=s,e.bitmap.invalidateTexture(),e.once("attach",(()=>this.requestUpdate())),this._bitmapView.addChild(e)}catch(e){Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e)||L.error(e)}this.requestUpdate()}}async _redrawImage(e){this.layer.updateRenderer(),this.hasTilingEffects?await this._updateGlobalSymbolizerParams(e):(this._updateSymbolizerParams(),this._globalSymbolizerParams=null);const{bandIds:t}=this.layer,i=this._bitmapView.children.map((async e=>{const i=this._canUseWebGLForProcessing();i?e.bitmap.isRendereredSource=!1:(e.bitmap.source=await this.layer.applyRenderer(e.bitmap.rawPixelData,this.hasTilingEffects&&this._globalSymbolizerParams&&"stretch"===this._globalSymbolizerParams.type?this._globalSymbolizerParams:null),e.bitmap.isRendereredSource=!0),e.bitmap.symbolizerParameters=i?this._globalSymbolizerParams||this._symbolizerParams:null,e.bitmap.bandIds=t,e.bitmap.interpolation=this._getLayerInterpolation(),e.bitmap.suspended=!1}));await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["eachAlways"])(i),this.container.requestRender()}_createEmptyTilePixelBlock(){if(!this._emptyTilePixelBlock){const e=this._tileInfoView.tileInfo.size[0],t=this._tileInfoView.tileInfo.size[1];this._emptyTilePixelBlock=new _layers_support_PixelBlock_js__WEBPACK_IMPORTED_MODULE_17__["default"]({width:e,height:t,pixels:[new Uint8Array(e*t)],mask:new Uint8Array(e*t),pixelType:"u8"})}return this._emptyTilePixelBlock}async _updateGlobalSymbolizerParams(e){const t={srcResolution:this._srcResolutions[this._previousLOD.level],registryId:this._blockCacheRegistryId,signal:e},i=await this.layer.fetchPixels(this.view.extent,this.view.width,this.view.height,t);if(!i||!i.pixelBlock)return;const s=this.layer.symbolizer.generateWebGLParameters({pixelBlock:Object(_layers_support_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_19__["extractBands"])(i.pixelBlock,this.layer.bandIds),isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds});!this._canUseWebGLForProcessing()&&s&&"stretch"===s.type&&this.layer.renderer&&"raster-stretch"===this.layer.renderer.type&&(s.factor=s.factor.map((e=>255*e)),s.outMin=Math.round(255*s.outMin),s.outMax=Math.round(255*s.outMax)),this._globalSymbolizerParams=s}_updateSymbolizerParams(){this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null,isGCS:this.view.spatialReference.isGeographic,resolution:{x:this._previousLOD.resolution,y:this._previousLOD.resolution},bandIds:this.layer.bandIds})}_updateBlockCacheRegistry(){const{url:e,rasterInfo:t,multidimensionalDefinition:i,raster:s}=this.layer,r=null!=t&&t.multidimensionalInfo?s.getSliceIndex(i):null,a=Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["getRasterId"])(e,r);a!==this._blockCacheRegistryUrl&&(null==this._blockCacheRegistryUrl&&Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["unregister"])(this._blockCacheRegistryUrl,this._blockCacheRegistryId),this._blockCacheRegistryId=Object(_layers_support_rasterDatasets_RawBlockCache_js__WEBPACK_IMPORTED_MODULE_21__["register"])(a,this.layer.raster.rasterInfo),this._blockCacheRegistryUrl=a)}_canUseMajorityInterpolationOnDataSource(){const{bandCount:e,attributeTable:t,colormap:i,pixelType:s}=this.layer.rasterInfo;return 1===e&&(null!=t||null!=i||"u8"===s||"s8"===s)}_getLayerInterpolation(){const e=this.layer.renderer.type;return"raster-colormap"===e||"unique-value"===e||"class-breaks"===e?"nearest":this.layer.interpolation}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()],D.prototype,"useProgressiveUpdate",null),D=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.ImageryTileLayerView2D")],D);var G=D;/* harmony default export */ __webpack_exports__["default"] = (G);


/***/ })

}]);
//# sourceMappingURL=layers-ImageryTileLayerView2D-js-es2015.js.map