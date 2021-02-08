(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tileRenderers-SymbolTileRenderer-js"],{

/***/ "bdHb":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/WGLFeatureView.js ***!
  \****************************************************************************************************/
/*! exports provided: WGLFeatureView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLFeatureView", function() { return a; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/brushes.js */ "Oxob");
/* harmony import */ var _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/FeatureContainer.js */ "by2V");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a extends _engine_FeatureContainer_js__WEBPACK_IMPORTED_MODULE_3__["FeatureContainer"]{constructor(e,s,t){super(e),this._pointToCallbacks=new Map,this._layer=t,this._layerView=s}renderChildren(e){if(this.attributeView.update(),this.hasAnimation){e.painter.effects.integrate.draw(e,e.attributeView)}super.renderChildren(e)}hitTest(s,t){const i=[s,t],a=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();return this._pointToCallbacks.set(i,a),this.requestRender(),a.promise}doRender(e){const{minScale:s,maxScale:t}=this._layer,i=e.state.scale;i<=(s||1/0)&&i>=t&&super.doRender(e)}get hasAnimation(){return this.hasLabels}get hasLabels(){const e=this._layer.featureReduction,s=e&&"cluster"===e.type&&e.labelsVisible&&e.labelingInfo&&e.labelingInfo.length;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!s}get labelsVisible(){return this._layer.labelsVisible}prepareRenderPasses(e){const i=e.registerRenderPass({name:"label",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].label],target:()=>this.hasLabels?this.children:null,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL|_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA}),a=e.registerRenderPass({name:"geometry",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.hasEffects,effects:[{apply:e.effects.outsideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.excluded},{apply:e.effects.insideEffect,enable:()=>this._layerView.hasEffects,args:()=>this._layerView.effectLists.included},{apply:e.effects.hittest,enable:()=>!!this._pointToCallbacks.size,args:()=>this._pointToCallbacks}]}),r=e.registerRenderPass({name:"highlight",brushes:[_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].fill,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].line,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].marker,_engine_brushes_js__WEBPACK_IMPORTED_MODULE_2__["brushes"].text],target:()=>this.children,drawPhase:_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:e.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(e),a,r,i]}}


/***/ }),

/***/ "wfc5":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/SymbolTileRenderer.js ***!
  \************************************************************************************************/
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
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../engine/webgl/WGLTile.js */ "KFVX");
/* harmony import */ var _support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../support/rendererUtils.js */ "tDOP");
/* harmony import */ var _support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./support/visualVariablesUtils.js */ "gzK8");
/* harmony import */ var _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BaseTileRenderer.js */ "4xTw");
/* harmony import */ var _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./support/WGLFeatureView.js */ "bdHb");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let n=class extends _BaseTileRenderer_js__WEBPACK_IMPORTED_MODULE_13__["default"]{install(e){const t=new _support_WGLFeatureView_js__WEBPACK_IMPORTED_MODULE_14__["WGLFeatureView"](this.tileInfoView,this.layerView,this.layer);this.featuresView=t,e.addChild(t)}uninstall(e){e.removeChild(this.featuresView),this.featuresView.destroy()}hitTest(e,t){return this.featuresView.hitTest(e,t)}supportsRenderer(e){return null!=e&&-1!==["simple","class-breaks","unique-value","dot-density","dictionary"].indexOf(e.type)}onConfigUpdate(e){let t=null;if("visualVariables"in e){const i=(Object(_support_rendererUtils_js__WEBPACK_IMPORTED_MODULE_11__["simplifyVVRenderer"])(e).visualVariables||[]).map((e=>{const t=e.clone();return"normalizationField"in e&&(t.normalizationField=null),e.valueExpression&&"$view.scale"!==e.valueExpression&&(t.valueExpression=null,t.field="nop"),t}));t=Object(_support_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertVisualVariables"])(i)}this.featuresView.setRendererInfo(e,t,this.layerView.effects)}onTileData(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileData(t,e.data),this.layerView.view.labelManager.requestUpdate()}onTileError(e){const t=this.tiles.get(e.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach((e=>e.lockUploads()))}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach((e=>e.unlockUploads()))}async getMaterialItems(e){return this.featuresView.getMaterialItems(e)}invalidateLabels(){this.featuresView.hasLabels&&(this.tiles.forEach((e=>e.isDirty=!0)),this.layerView.view.labelManager.requestUpdate())}createTile(e){const t=this.tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_9__["create"])(),e),r=new _engine_webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_10__["WGLTile"](e,t);return this.featuresView.hasLabels&&this.layerView.view.labelManager.addTile(this.layerView,r),r}disposeTile(e){this.featuresView.removeChild(e),this.featuresView.hasLabels&&this.layerView.view.labelManager.removeTile(this.layerView,e.key.id),e.destroy(),this.layerView.view.labelManager.requestUpdate()}};n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],n);var u=n;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ })

}]);
//# sourceMappingURL=tileRenderers-SymbolTileRenderer-js-es2015.js.map