(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["core-workers-request-js"],{

/***/ "ZsKd":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/workers/request.js ***!
  \***********************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return s; });
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ "3r0u");
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let t;function s(s,o={}){let n=o.responseType;n?"json"!==n&&"text"!==n&&"blob"!==n&&"array-buffer"!==n&&(n="text"):n="json";const a=o&&o.signal;return delete o.signal,_global_js__WEBPACK_IMPORTED_MODULE_0__["default"].invokeStaticMessage("request",{url:s,options:o},{signal:a}).then((e=>{const a=e.data;let l,i,u,c;if(a&&!("json"!==n&&"text"!==n&&"blob"!==n||(l=new Blob([a]),"json"!==n&&"text"!==n||(t||(t=new FileReaderSync),i=t.readAsText(l),"json"!==n)))){try{u=JSON.parse(i||null)}catch(e){const t={...e,url:s,requestOptions:o};throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("request:server",e.message,t)}if(u.error){const e={...u.error,url:s,requestOptions:o};throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("request:server",u.error.message,e)}}switch(n){case"json":c=u;break;case"text":c=i;break;case"blob":c=l;break;default:c=a}return{data:c,requestOptions:o,ssl:e.ssl,url:s}}))}


/***/ })

}]);
//# sourceMappingURL=core-workers-request-js-es2015.js.map