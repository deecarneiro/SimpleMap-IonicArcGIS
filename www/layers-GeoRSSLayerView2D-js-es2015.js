(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-GeoRSSLayerView2D-js"],{

/***/ "Uxk/":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/GeoRSSLayerView2D.js ***!
  \************************************************************************/
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
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/Collection.js */ "LE9a");
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../PopupTemplate.js */ "SFah");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../Graphic.js */ "jWBI");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../renderers/SimpleRenderer.js */ "/1dM");
/* harmony import */ var _renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../renderers/support/jsonUtils.js */ "+Xal");
/* harmony import */ var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../tasks/support/FeatureSet.js */ "8prj");
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../layers/LayerView.js */ "NloG");
/* harmony import */ var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./graphics/GraphicsView2D.js */ "Vh9r");
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./LayerView2D.js */ "Vm2Q");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let g=class extends(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_19__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_17__["default"])){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,r){if(this.suspended||!this.graphicsViews.length)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();const i=this.graphicsViews.reverse().map((s=>s.hitTest(e,r)));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(i).then((e=>e.filter(((e,r)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[r]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const r=_tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_16__["default"].fromJSON(e.featureSet),s=new(_core_Collection_js__WEBPACK_IMPORTED_MODULE_10__["default"].ofType(_Graphic_js__WEBPACK_IMPORTED_MODULE_12__["default"]))(r.features);let o;if(this._graphicsViewMap[r.geometryType])o=this._graphicsViewMap[r.geometryType],o.graphics.addMany(s);else{const i=e.layerDefinition.drawingInfo,p=e.popupInfo?_PopupTemplate_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(e.popupInfo):null,a=Object(_renderers_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_15__["fromJSON"])(i.renderer);o=new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_18__["default"]({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a}),this._graphicsViewMap[r.geometryType]=o,this._popupTemplates.set(o,p),"polygon"!==r.geometryType||this.layer.polygonSymbol?"polyline"!==r.geometryType||this.layer.lineSymbol?"point"!==r.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(o),this.container.addChild(o.container)}})),this.handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer,"polygonSymbol",(e=>{this._graphicsViewMap.polygon.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({symbol:e})})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer,"lineSymbol",(e=>{this._graphicsViewMap.polyline.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({symbol:e})})),Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_13__["init"])(this.layer,"pointSymbol",(e=>{this._graphicsViewMap.point.renderer=new _renderers_SimpleRenderer_js__WEBPACK_IMPORTED_MODULE_14__["default"]({symbol:e})}))])}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};g=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.GeoRSSLayerView2D")],g);var u=g;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ })

}]);
//# sourceMappingURL=layers-GeoRSSLayerView2D-js-es2015.js.map