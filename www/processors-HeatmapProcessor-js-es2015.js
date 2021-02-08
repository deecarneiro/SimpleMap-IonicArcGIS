(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-HeatmapProcessor-js"],{

/***/ "Mx58":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/HeatmapProcessor.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../renderers/support/heatmapUtils.js */ "AfLA");
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./BaseProcessor.js */ "ukaK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let a=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_12__["default"]{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];if("heatmap"!==r.type)return;Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_10__["diff"])(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}async onTileData(e,r,s){this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==r.type||this._tileKeyToFeatureSets.set(e.key.id,new Map);const i=this._tileKeyToFeatureSets.get(e.key.id);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(r.addOrUpdate)&&i.set(r.addOrUpdate.instance,r);let a=r.end;if(i.forEach((e=>a=a||e.end)),!a)return;const p=[];i.forEach((e=>{Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e.addOrUpdate)&&p.push(e.addOrUpdate)}));const c=Object(_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_11__["calculateHeatmapIntensityInfoReaders"])(p,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:c},d=[c.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...s,transferList:d})}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.HeatmapProcessor")],a);var p=a;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ })

}]);
//# sourceMappingURL=processors-HeatmapProcessor-js-es2015.js.map