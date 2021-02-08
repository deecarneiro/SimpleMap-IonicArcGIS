(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-resourceUtils-js"],{

/***/ "5qYV":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/portal/support/resourceUtils.js ***!
  \*******************************************************************/
/*! exports provided: addOrUpdateResource, contentToBlob, fetchResources, getSiblingOfSameType, getSiblingOfSameTypeI, removeAllResources, removeResource, splitPrefixFileNameAndExtension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateResource", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentToBlob", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchResources", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameType", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiblingOfSameTypeI", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllResources", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeResource", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitPrefixFileNameAndExtension", function() { return m; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../request.js */ "Lqtk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function u(t,r={},a){await t.load(a);const s=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.itemUrl,"resources"),{start:n=1,num:u=10,sortOrder:c="asc",sortField:i="created"}=r,l={query:{start:n,num:u,sortOrder:c,sortField:i},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(a,"signal")},p=await t.portal._request(s,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:e,size:r,resource:a})=>({created:new Date(e),size:r,resource:t.resourceFromPath(a)})))}}async function c(r,s,n,u){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"](`portal-item-resource-${s}:invalid-path`,"Resource does not have a valid path");await r.portalItem.load(u);const c=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r.portalItem.userItemUrl,"add"===s?"addResources":"updateResources"),[i,l]=p(r.path),m=await d(n),h=new FormData;return i&&"."!==i&&h.append("resourcesPrefix",i),h.append("fileName",l),h.append("file",m,l),h.append("f","json"),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u)&&u.access&&h.append("access",u.access),await r.portalItem.portal._request(c,{method:"post",body:h,signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(u,"signal")}),r}async function i(t,r,s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await t.load(s);const n=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl,"removeResources");await t.portal._request(n,{method:"post",query:{resource:r.path},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(s,"signal")}),r.portalItem=null}async function l(t,r){await t.load(r);const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(t.userItemUrl,"removeResources");return t.portal._request(a,{method:"post",query:{deleteAll:!0},signal:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(r,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function m(e){const[t,a]=function(e){const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["getPathExtension"])(e);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return[e,""];return[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[o,n]=p(t);return[o,n,a]}async function d(e){if(e instanceof Blob)return e;return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r,t+a))}function f(e,t){if(!e.hasPath())return null;const[r,,a]=m(e.path);return e.portalItem.resourceFromPath(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["join"])(r,t+a))}


/***/ })

}]);
//# sourceMappingURL=support-resourceUtils-js-es2015.js.map