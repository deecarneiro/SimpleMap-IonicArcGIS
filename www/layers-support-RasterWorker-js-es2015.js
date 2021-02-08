(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-support-RasterWorker-js"],{

/***/ "DABJ":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/support/RasterWorker.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/Extent.js */ "OvF4");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PixelBlock.js */ "Piei");
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rasterFormats/RasterCodec.js */ "FFFX");
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rasterFunctions/pixelUtils.js */ "ne7T");
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../renderers/support/RasterSymbolizer.js */ "ciAr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{async decode(r){const t=await Object(_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_4__["decode"])(r.data,r.options);return t&&t.toJSON()}symbolize(o){o.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(o.pixelBlock),o.extent=o.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(o.extent):null;const s=this.symbolizer.symbolize(o);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(s&&s.toJSON())}async updateSymbolizer(r){var t;this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===(null==(t=this.symbolizer)?void 0:t.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=r.histograms)}stretch(t){const o=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock),t.stretchParams);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o&&o.toJSON())}estimateStatisticsHistograms(t){const o=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["estimateStatisticsHistograms"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock));return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o)}split(t){const o=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["split"])(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return o&&o.forEach(((r,t)=>{o.set(t,null==r?void 0:r.toJSON())})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])(o)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_3__["default"](r):null)),o=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["mosaic"])(t,r.srcMosaicSize);if(!r.coefs)return o&&o.toJSON();const s=Object(_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_5__["approximateTransform"])(o,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation);return s&&s.toJSON()}});


/***/ })

}]);
//# sourceMappingURL=layers-support-RasterWorker-js-es2015.js.map