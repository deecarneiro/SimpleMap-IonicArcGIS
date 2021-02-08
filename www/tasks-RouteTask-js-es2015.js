(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-RouteTask-js"],{

/***/ "2dR5":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/RouteResult.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DirectionsFeatureSet.js */ "eKLr");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_9__["JSONSupport"]{constructor(o){super(o),this.directions=null,this.route=null,this.routeName=null,this.stops=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_DirectionsFeatureSet_js__WEBPACK_IMPORTED_MODULE_11__["default"],json:{write:!0}})],i.prototype,"directions",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:_Graphic_js__WEBPACK_IMPORTED_MODULE_10__["default"],json:{write:!0}})],i.prototype,"route",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"routeName",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_10__["default"]],json:{write:!0}})],i.prototype,"stops",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.support.RouteResult")],i);var u=i;/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "XAf0":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/RouteResultsContainer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FeatureSet.js */ "8prj");
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./NAMessage.js */ "54nt");
/* harmony import */ var _RouteResult_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RouteResult.js */ "2dR5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(r){return r&&_FeatureSet_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r).features.map((r=>r))}let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r),this.barriers=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.routeResults=null}readPointBarriers(r,o){return n(o.barriers||o.pointBarriers)}readPolylineBarriers(r){return n(r)}readPolygonBarriers(r){return n(r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({aliasOf:"pointBarriers"})],u.prototype,"barriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_13__["default"]]})],u.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]})],u.prototype,"pointBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("pointBarriers",["barriers","pointBarriers"])],u.prototype,"readPointBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]})],u.prototype,"polylineBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("polylineBarriers")],u.prototype,"readPolylineBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_11__["default"]]})],u.prototype,"polygonBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_5__["reader"])("polygonBarriers")],u.prototype,"readPolygonBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:[_RouteResult_js__WEBPACK_IMPORTED_MODULE_14__["default"]]})],u.prototype,"routeResults",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.RouteResultsContainer")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "mL23":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/RouteTask.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../geometry/support/normalizeUtils.js */ "qNUd");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Task.js */ "kglp");
/* harmony import */ var _core_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/queryUtils.js */ "o6Le");
/* harmony import */ var _mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/NAServiceDescription.js */ "OvWd");
/* harmony import */ var _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/RouteResultsContainer.js */ "XAf0");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__["createQueryParamsHelper"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},stops:!0,travelMode:!0});let u=class extends(Object(_mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__["NAServiceDescriptionMixin"])(_Task_js__WEBPACK_IMPORTED_MODULE_12__["default"])){constructor(e){super(e)}solve(e,r){const i=[],a=[],n={},p={};return e.stops&&e.stops.features&&this._collectGeometries(e.stops.features,a,"stops.features",n),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",n),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",n),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",n),Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalizeCentralMeridian"])(a).then((e=>{for(const r in n){const t=n[r];i.push(r),p[r]=e.slice(t[0],t[1])}return this._isInputGeometryZAware(p,i)?this.getServiceDescription():Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])({dontCheck:!0})})).then((t=>{("dontCheck"in t?t.dontCheck:t.hasZ)||this._dropZValuesOffInputGeometry(p,i);for(const r in p)p[r].forEach(((t,s)=>{e.get(r)[s].geometry=t}));let o={query:{...this.parsedUrl.query,f:"json",...l.toQueryParams(e)}};(this.requestOptions||r)&&(o={...this.requestOptions,...r,...o});const{path:a}=this.parsedUrl,n="/solve",u=a.endsWith(n)?a:a+n;return Object(_request_js__WEBPACK_IMPORTED_MODULE_10__["default"])(u,o)})).then((e=>this._handleSolveResponse(e)))}_collectGeometries(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}_handleSolveResponse(e){const r=[],t=[],{directions:s=[],routes:{features:o=[],spatialReference:i=null}={},stops:{features:a=[],spatialReference:n=null}={},barriers:l,polygonBarriers:u,polylineBarriers:c,messages:m}=e.data,f="esri.tasks.RouteTask.NULL_ROUTE_NAME";let h,y,d=!0;const g=o&&i||a&&n||l&&l.spatialReference||u&&u.spatialReference||c&&c.spatialReference;s.forEach((e=>{r.push(h=e.routeName),t[h]={directions:e}})),o.forEach((e=>{-1===r.indexOf(h=e.attributes.Name)&&(r.push(h),t[h]={}),e.geometry&&(e.geometry.spatialReference=g),t[h].route=e})),a.forEach((e=>{y=e.attributes,-1===r.indexOf(h=y.RouteName||f)&&(r.push(h),t[h]={}),h!==f&&(d=!1),e.geometry&&(e.geometry.spatialReference=g),null==t[h].stops&&(t[h].stops=[]),t[h].stops.push(e)})),a.length>0&&!0===d&&(t[r[0]].stops=t[f].stops,delete t[f],r.splice(r.indexOf(f),1));const B=r.map((e=>(t[e].routeName=e===f?null:e,t[e])));return _support_RouteResultsContainer_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON({routeResults:B,pointBarriers:l,polygonBarriers:u,polylineBarriers:c,messages:m})}};u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.RouteTask")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ })

}]);
//# sourceMappingURL=tasks-RouteTask-js-es2015.js.map