(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-ServiceAreaTask-js"],{

/***/ "54nt":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/NAMessage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _GPMessage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GPMessage.js */ "DKHk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let i=class extends _GPMessage_js__WEBPACK_IMPORTED_MODULE_10__["default"]{constructor(r){super(r),this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.NAMessage")],i);var c=i;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "DKHk":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/GPMessage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/jsonMap.js */ "+opI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const p=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_5__["JSONMap"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_10__["JSONSupport"]{constructor(r){super(r),this.description=null,this.type=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{write:!0}})],i.prototype,"description",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:String,json:{read:p.read,write:p.write}})],i.prototype,"type",void 0),i=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.tasks.support.GPMessage")],i);var a=i;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "IIJ+":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/ServiceAreaTask.js ***!
  \************************************************************/
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
/* harmony import */ var _support_ServiceAreaSolveResult_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./support/ServiceAreaSolveResult.js */ "iT+w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=Object(_core_queryUtils_js__WEBPACK_IMPORTED_MODULE_13__["createQueryParamsHelper"])({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let u=class extends(Object(_mixins_NAServiceDescription_js__WEBPACK_IMPORTED_MODULE_14__["NAServiceDescriptionMixin"])(_Task_js__WEBPACK_IMPORTED_MODULE_12__["default"])){constructor(e){super(e),this.url=null}solve(e,r){const t=[],a=[],p={},l={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,a,"facilities.features",p),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,a,"pointBarriers.features",p),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,a,"polylineBarriers.features",p),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,a,"polygonBarriers.features",p),Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalizeCentralMeridian"])(a).then((e=>{for(const r in p){const s=p[r];t.push(r),l[r]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(l,t)?this.getServiceDescription():Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])({dontCheck:!0})})).then((s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(l,t);for(const r in l)l[r].forEach(((t,s)=>{e.get(r)[s].geometry=t}));let i={query:{...this.parsedUrl.query,f:"json",...n.toQueryParams(e)}};return(this.requestOptions||r)&&(i={...this.requestOptions,...r,...i}),Object(_request_js__WEBPACK_IMPORTED_MODULE_10__["default"])(`${this.parsedUrl.path}/solveServiceArea`,i)})).then((e=>_support_ServiceAreaSolveResult_js__WEBPACK_IMPORTED_MODULE_15__["default"].fromJSON(e.data)))}_collectGeometries(e,r,t,s){s[t]=[r.length,r.length+e.length],e.forEach((e=>{r.push(e.geometry)}))}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"url",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.tasks.ServiceAreaTask")],u);var m=u;/* harmony default export */ __webpack_exports__["default"] = (m);


/***/ }),

/***/ "OvWd":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/mixins/NAServiceDescription.js ***!
  \************************************************************************/
/*! exports provided: NAServiceDescription, NAServiceDescriptionMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAServiceDescription", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAServiceDescriptionMixin", function() { return n; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/object.js */ "nR38");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Task.js */ "kglp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=l=>{let n=class extends l{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const s=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:r,defaultTravelMode:t}}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:r,defaultTravelMode:t}}catch(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_8__["default"]("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:s}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),o=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_2__["getDeepValue"])("helperServices.routingUtilities.url",s);if(!o)return{supportedTravelModes:[],defaultTravelMode:null};const l=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_9__["urlToObject"])(e),n=/\/solveClosestFacility$/.test(l.path)?"Route":/\/solveClosestFacility$/.test(l.path)?"ClosestFacility":"ServiceAreas",c=await Object(_request_js__WEBPACK_IMPORTED_MODULE_12__["default"])(o+("/"===o[o.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:n}}),u=[];let p=null;if(c&&c.data&&c.data.results&&c.data.results.length){const e=c.data.results;for(const r of e)if("supportedTravelModes"===r.paramName){if(r.value&&r.value.features)for(const{attributes:e}of r.value.features)if(e){const r=JSON.parse(e.TravelMode);u.push(r)}}else"defaultTravelMode"===r.paramName&&(p=r.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:l,supportedTravelModes:n}=await s;return t.defaultTravelMode=l,t.supportedTravelModes=n,t}_isInputGeometryZAware(e,r){for(let s=0;s<r.length;s++){const o=e[r[s]];if(o&&o.length)for(const e of o)if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_3__["isSome"])(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,r){for(let t=0;t<r.length;t++){const s=e[r[t]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return n=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.mixins.NAServiceDescription")],n),n};let c=class extends(n(_Task_js__WEBPACK_IMPORTED_MODULE_13__["default"])){};c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.mixins.NAServiceDescription")],c);


/***/ }),

/***/ "iT+w":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/tasks/support/ServiceAreaSolveResult.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/reader.js */ "r88o");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../geometry/Polygon.js */ "Ehki");
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../geometry/Polyline.js */ "UhwK");
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../geometry/support/jsonUtils.js */ "qatw");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../geometry.js */ "4GrV");
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../Graphic.js */ "jWBI");
/* harmony import */ var _NAMessage_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NAMessage.js */ "54nt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(r){return r.features.map((o=>{const t=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(r.spatialReference),s=_Graphic_js__WEBPACK_IMPORTED_MODULE_18__["default"].fromJSON(o);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(s.geometry).spatialReference=t,s}))}function d(r){return r.features.map((e=>(e.geometry.spatialReference=r.spatialReference,Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_16__["fromJSON"])(e.geometry))))}let f=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_11__["JSONSupport"]{constructor(r){super(r),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(r){return d(r)}readPointBarriers(r,e){return d(e.barriers)}readPolylineBarriers(r){return d(r)}readPolygonBarriers(r){return d(r)}readIncidents(r,e){return u(e.saPolylines)}readServiceAreaPolygons(r,e){return u(e.saPolygons)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]]})],f.prototype,"facilities",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("facilities")],f.prototype,"readFacilities",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_NAMessage_js__WEBPACK_IMPORTED_MODULE_19__["default"]]})],f.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Point_js__WEBPACK_IMPORTED_MODULE_13__["default"]]})],f.prototype,"pointBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("pointBarriers",["barriers"])],f.prototype,"readPointBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_15__["default"]]})],f.prototype,"polylineBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("polylineBarriers")],f.prototype,"readPolylineBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_14__["default"]]})],f.prototype,"polygonBarriers",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("polygonBarriers")],f.prototype,"readPolygonBarriers",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_18__["default"]]})],f.prototype,"serviceAreaPolylines",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("serviceAreaPolylines",["saPolylines"])],f.prototype,"readIncidents",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({type:[_Graphic_js__WEBPACK_IMPORTED_MODULE_18__["default"]]})],f.prototype,"serviceAreaPolygons",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_6__["reader"])("serviceAreaPolygons",["saPolygons"])],f.prototype,"readServiceAreaPolygons",null),f=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__["subclass"])("esri.tasks.support.ServiceAreaSolveResult")],f);var g=f;/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "o6Le":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/queryUtils.js ***!
  \******************************************************/
/*! exports provided: createQueryParamsHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQueryParamsHelper", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t={}){this._options=t}toQueryParams(t){if(!t)return null;const e=t.toJSON(),o={};return Object.keys(e).forEach((t=>{const n=this._options[t];if(n){const r="boolean"!=typeof n&&n.name?n.name:t,s="boolean"!=typeof n&&n.getter?n.getter(e):e[t];null!=s&&(o[r]=(t=>{if(!Array.isArray(t))return!1;const[e]=t;return"number"==typeof e||"string"==typeof e})(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else o[t]=e[t]}),this),o}}function e(e){return new t(e)}


/***/ })

}]);
//# sourceMappingURL=tasks-ServiceAreaTask-js-es2015.js.map