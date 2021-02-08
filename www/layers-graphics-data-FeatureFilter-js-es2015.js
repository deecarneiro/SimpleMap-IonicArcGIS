(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-graphics-data-FeatureFilter-js"],{

/***/ "64Oa":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/layers/graphics/data/FeatureFilter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../geometry/support/boundsUtils.js */ "KLE9");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../tasks/support/Query.js */ "xk++");
/* harmony import */ var _chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/spatialQuerySupport.js */ "1Rg/");
/* harmony import */ var _timeSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeSupport.js */ "q7ja");
/* harmony import */ var _views_2d_layers_features_FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../views/2d/layers/features/FeatureStore2D.js */ "DJok");
/* harmony import */ var _views_2d_layers_features_support_whereUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../views/2d/layers/features/support/whereUtils.js */ "IFAU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const _=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter");/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._geometryBounds=Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_5__["create"])(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0)}))}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,1)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(1&this._idToVisibility.get(r)),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?3:0)})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__["default"].fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__["n"])(t,null,e);await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["all"])([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t||!t.where)return this._clause=null,void(this.where=null);this._clause=await Object(_views_2d_layers_features_support_whereUtils_js__WEBPACK_IMPORTED_MODULE_10__["createWhereClause"])(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t&&t.objectIds&&new Set(t.objectIds),this._idsToHide=t&&t.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t&&t.objectIds}async _setGeometryFilter(t){if(!t||!t.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",s=await Object(_chunks_spatialQuerySupport_js__WEBPACK_IMPORTED_MODULE_7__["g"])(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(_geometry_support_boundsUtils_js__WEBPACK_IMPORTED_MODULE_4__["getBoundsXY"])(this._geometryBounds,e),this._spatialQueryOperator=s,this.geometry=e,this.spatialRel=i}_setTimeFilter(t){if(this.timeExtent=this._timeOperator=null,t&&t.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=t.timeExtent,this._timeOperator=Object(_timeSupport_js__WEBPACK_IMPORTED_MODULE_8__["getTimeOperator"])(this._serviceInfo.timeInfo,t.timeExtent,_views_2d_layers_features_FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_9__["featureAdapter"]);else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",t.timeExtent);_.error(e)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(e){return!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{1&e||(this._idToVisibility.set(i,1),t.push(i))})),t}});


/***/ }),

/***/ "IFAU":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js ***!
  \**********************************************************************************/
/*! exports provided: createWhereClause */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWhereClause", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.layers.features.support.whereUtils"),a={getAttribute:(e,r)=>e.field(r)};async function s(e,s){const n=await Promise.all(/*! import() | core-sql-WhereClause-js */[__webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~arcade-functions-featuresetgeom~0707428b"), __webpack_require__.e("core-sql-WhereClause-js")]).then(__webpack_require__.bind(null, /*! ../../../../../core/sql/WhereClause.js */ "ZqIb"));try{const o=n.WhereClause.create(e,s);if(!o.isStandardized){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",o);t.error(e)}return e=>{const r=e.readArcadeFeature();return o.testFeature(r,a)}}catch(r){return t.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}


/***/ })

}]);
//# sourceMappingURL=layers-graphics-data-FeatureFilter-js-es2015.js.map