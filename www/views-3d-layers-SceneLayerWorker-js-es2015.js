(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-SceneLayerWorker-js"],{

/***/ "KgD9":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js ***!
  \***********************************************************************/
/*! exports provided: destroyContext, dracoDecompressPointCloudData, filterObbsForModifications, filterObbsForModificationsSync, initialize, interpretObbModificationResults, process, setLegacySchema, setModifications, setModificationsSync, test */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroyContext", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dracoDecompressPointCloudData", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObbsForModifications", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterObbsForModificationsSync", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpretObbModificationResults", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLegacySchema", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setModifications", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setModificationsSync", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "test", function() { return g; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _libs_i3s_I3SWorker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../libs/i3s/I3SWorker.js */ "jPQz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function o(e){await p();const t=[e.geometryBuffer];return{result:b(e,t),transferList:t}}async function s(t){var r;await p();const n=[t.geometryBuffer],{geometryBuffer:o}=t,s=o.byteLength,f=l._malloc(s),i=new Uint8Array(l.HEAPU8.buffer,f,s);i.set(new Uint8Array(o));const a=l.dracoDecompressPointCloudData(f,i.byteLength);if(l._free(f),a.error.length>0)throw`i3s.wasm: ${a.error}`;const u=(null==(r=a.featureIds)?void 0:r.length)>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(a.featureIds):null,c=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(a.positions);u&&n.push(u.buffer),n.push(c.buffer);return{result:{positions:c,featureIds:u},transferList:n}}async function f(e){await p(),d(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function i(e){await p(),y(e)}async function a(e){await p(),l.setLegacySchema(e.context,e.jsonSchema)}function u(e){E(e)}let c,l;function y(e){const t=e.modifications,r=l._malloc(8*t.length),n=new Float64Array(l.HEAPU8.buffer,r,t.length);for(let e=0;e<t.length;++e)n[e]=t[e];l.setModifications(e.context,r,t.length,e.isGeodetic),l._free(r)}function b(r,n){if(!l)return null;const{context:o,localOrigin:s,globalTrafo:f,mbs:i,obb:a,elevationOffset:u,geometryBuffer:c,geometryDescriptor:y,indexToVertexProjector:b,vertexToRenderProjector:m}=r,d=l._malloc(c.byteLength),E=l._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(l.HEAPU8.buffer,d,c.byteLength);p.set(new Uint8Array(c));const g=new Float64Array(l.HEAPU8.buffer,E,33);h(g,s);let w=g.byteOffset+3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w);h(A,f),w+=16*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),h(A,i),w+=4*g.BYTES_PER_ELEMENT,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a)&&(A=new Float64Array(g.buffer,w),h(A,a.center),w+=3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),h(A,a.halfSize),w+=3*g.BYTES_PER_ELEMENT,A=new Float64Array(g.buffer,w),h(A,a.quaternion));const _=y,L={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:_.featureIndex},T=l.process(o,!!r.obb,d,p.byteLength,_,L,E,u,b,m,r.normalReferenceFrame);if(l._free(E),l._free(d),T.error.length>0)throw`i3s.wasm: ${T.error}`;if(T.discarded)return null;const I=T.componentOffsets.length>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.componentOffsets):null,P=T.featureIds.length>0?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.featureIds):null,U=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.interleavedVertedData).buffer,B=1===T.indicesType?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint16Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/2)):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint32Array(T.indices.buffer,T.indices.byteOffset,T.indices.byteLength/4)),F=Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(T.positions),x=1===T.positionIndicesType?Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint16Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/2)):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["slice"])(new Uint32Array(T.positionIndices.buffer,T.positionIndices.byteOffset,T.positionIndices.byteLength/4)),O={layout:r.layouts[0],interleavedVertexData:U,indices:B,hasColors:T.hasColors,hasModifications:T.hasModifications,positionData:{data:F,indices:x}};return P&&n.push(P.buffer),I&&n.push(I.buffer),n.push(U),n.push(B.buffer),n.push(F.buffer),n.push(x.buffer),{componentOffsets:I,featureIds:P,transformedGeometry:O,obb:T.obb}}function m(e){return 0===e?0:1===e?1:2===e?2:3}function d(e){const{context:t,buffer:r}=e,n=l._malloc(r.byteLength),o=r.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(l.HEAPU8.buffer,n,o),f=new Float64Array(r);s.set(f),l.filterOBBs(t,n,o),f.set(s),l._free(n)}function E(e){l&&l.destroy(e)}function h(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}function p(){return l?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])():(c||(c=Object(_libs_i3s_I3SWorker_js__WEBPACK_IMPORTED_MODULE_3__["getWorkerModule"])().then((e=>{l=e,c=null}))),c)}const g={transform:b,destroy:E};


/***/ }),

/***/ "jPQz":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/libs/i3s/I3SWorker.js ***!
  \*********************************************************/
/*! exports provided: getWorkerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkerModule", function() { return n; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets.js */ "ss0y");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(){return o||(o=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])((t=>__webpack_require__.e(/*! import() | chunks-i3s-js */ "chunks-i3s-js").then(__webpack_require__.bind(null, /*! ../../chunks/i3s.js */ "ilXH")).then((function(t){return t.i})).then((({default:e})=>{const i=e({locateFile:r,onRuntimeInitialized:()=>t(i)});delete i.then})))).catch((t=>Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["reject"])(t)))),o}function r(t){return Object(_assets_js__WEBPACK_IMPORTED_MODULE_1__["getAssetUrl"])(`esri/libs/i3s/${t}`)}let o;


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-SceneLayerWorker-js-es2015.js.map