(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portal-support-geometryServiceUtils-js"],{

/***/ "4ugL":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/geometryServiceUtils.js ***!
  \**************************************************************************/
/*! exports provided: create, projectGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectGeometry", function() { return n; });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config.js */ "EyXx");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Portal.js */ "AiS/");
/* harmony import */ var _tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tasks/support/ProjectParameters.js */ "ACSY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function i(o=null,i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl){return new(0,(await Promise.all(/*! import() | tasks-GeometryService-js */[__webpack_require__.e("common"), __webpack_require__.e("tasks-GeometryService-js")]).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "1E6V"))).default)({url:_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].geometryServiceUrl})}if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured");let n;if(n="portal"in o?o.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_2__["default"].getDefault():o,await n.load({signal:i}),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url){return new(0,(await Promise.all(/*! import() | tasks-GeometryService-js */[__webpack_require__.e("common"), __webpack_require__.e("tasks-GeometryService-js")]).then(__webpack_require__.bind(null, /*! ../../tasks/GeometryService.js */ "1E6V"))).default)({url:n.helperServices.geometry.url})}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-url-not-configured")}async function n(e,t,n=null,a){const l=await i(n,a),s=new _tasks_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_3__["default"];s.geometries=[e],s.outSpatialReference=t;const c=await l.project(s,{signal:a});if(c&&Array.isArray(c)&&1===c.length)return c[0];throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("internal:geometry-service-projection-failed")}


/***/ })

}]);
//# sourceMappingURL=portal-support-geometryServiceUtils-js-es2015.js.map