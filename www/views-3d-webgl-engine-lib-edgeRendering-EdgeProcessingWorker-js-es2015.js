(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js"],{

/***/ "/OIm":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/meshProcessing.js ***!
  \**********************************************************************/
/*! exports provided: computeNeighbors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNeighbors", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,n){const o=t.length/3,r=new Uint32Array(n+1),e=new Uint32Array(n+1),c=(t,n)=>{t<n?r[t+1]++:e[n+1]++};for(let n=0;n<o;n++){const o=t[3*n],r=t[3*n+1],e=t[3*n+2];c(o,r),c(r,e),c(e,o)}let s=0,f=0;for(let t=0;t<n;t++){const n=r[t+1],o=e[t+1];r[t+1]=s,e[t+1]=f,s+=n,f+=o}const l=new Uint32Array(6*o),i=r[n],a=(t,n,o)=>{if(t<n){const e=r[t+1]++;l[2*e]=n,l[2*e+1]=o}else{const r=e[n+1]++;l[2*i+2*r]=t,l[2*i+2*r+1]=o}};for(let n=0;n<o;n++){const o=t[3*n],r=t[3*n+1],e=t[3*n+2];a(o,r,n),a(r,e,n),a(e,o,n)}const w=(t,n)=>{const o=2*t,r=n-t;for(let t=1;t<r;t++){const n=l[o+2*t],r=l[o+2*t+1];let e=t-1;for(;e>=0&&l[o+2*e]>n;e--)l[o+2*e+2]=l[o+2*e],l[o+2*e+3]=l[o+2*e+1];l[o+2*e+2]=n,l[o+2*e+3]=r}};for(let t=0;t<n;t++)w(r[t],r[t+1]),w(i+e[t],i+e[t+1]);const y=new Int32Array(3*o),A=(n,o)=>n===t[3*o]?0:n===t[3*o+1]?1:n===t[3*o+2]?2:-1,U=(t,n)=>{const o=A(t,n);y[3*n+o]=-1},u=(t,n,o,r)=>{const e=A(t,n);y[3*n+e]=r;const c=A(o,r);y[3*r+c]=n};for(let t=0;t<n;t++){let n=r[t];const o=r[t+1];let c=e[t];const s=e[t+1];for(;n<o&&c<s;){const o=l[2*n],r=l[2*i+2*c];o===r?(u(t,l[2*n+1],r,l[2*i+2*c+1]),n++,c++):o<r?(U(t,l[2*n+1]),n++):(U(r,l[2*i+2*c+1]),c++)}for(;n<o;)U(t,l[2*n+1]),n++;for(;c<s;){U(l[2*i+2*c],l[2*i+2*c+1]),c++}}return y}


/***/ }),

/***/ "ABOp":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js ***!
  \************************************************************************************************/
/*! exports provided: extractEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractEdges", function() { return p; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../support/mathUtils.js */ "aAs6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function p(n,r,m,p=w){const y=n.vertices.position,I=n.vertices.componentIndex,V=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(p.anglePlanar),j=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"])(p.angleSignificantEdge),N=Math.cos(j),x=Math.cos(V),F=A.edge,U=F.position0,k=F.position1,E=F.faceNormal0,D=F.faceNormal1,M=function(e){const t=e.faces.length/3,o=e.vertices.position,n=e.faces,r=v.v0,s=v.v1,c=v.v2,a=new Float32Array(3*t);for(let e=0;e<t;e++){const t=n[3*e+0],i=n[3*e+1],m=n[3*e+2];o.getVec(t,r),o.getVec(i,s),o.getVec(m,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(s,s,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(c,c,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(r,s,c),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(r,r),a[3*e+0]=r[0],a[3*e+1]=r[1],a[3*e+2]=r[2]}return a}(n),P=function(e){const t=e.faces.length/3,o=e.faces,n=e.neighbors;let r=0;for(let e=0;e<t;e++){const t=n[3*e+0],s=n[3*e+1],c=n[3*e+2],a=o[3*e+0],i=o[3*e+1],l=o[3*e+2];r+=-1===t||a<i?1:0,r+=-1===s||i<l?1:0,r+=-1===c||l<a?1:0}const s=new Int32Array(4*r);let c=0;for(let e=0;e<t;e++){const t=n[3*e+0],r=n[3*e+1],a=n[3*e+2],i=o[3*e+0],l=o[3*e+1],g=o[3*e+2];(-1===t||i<l)&&(s[c++]=i,s[c++]=l,s[c++]=e,s[c++]=t),(-1===r||l<g)&&(s[c++]=l,s[c++]=g,s[c++]=e,s[c++]=r),(-1===a||g<i)&&(s[c++]=g,s[c++]=i,s[c++]=e,s[c++]=a)}return s}(n),S=P.length/4,b=r.allocate(S);let L=0;const q=S,z=m.allocate(q);let B=0,C=0,G=0;const H=Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["range"])(0,S),J=new Float32Array(S);Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["forEach"])(J,((e,t,o)=>{y.getVec(P[4*t+0],U),y.getVec(P[4*t+1],k),o[t]=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(U,k)})),H.sort(((e,t)=>J[t]-J[e]));const K=new Array,O=new Array;for(let e=0;e<S;e++){const t=H[e],o=J[t],n=P[4*t+0],s=P[4*t+1],l=P[4*t+2],g=P[4*t+3],f=-1===g;if(y.getVec(n,U),y.getVec(s,k),f)Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(E,M[3*l+0],M[3*l+1],M[3*l+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(D,E),F.componentIndex=I.get(n),F.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(E,D);else{if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(E,M[3*l+0],M[3*l+1],M[3*l+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(D,M[3*g+0],M[3*g+1],M[3*g+2]),F.componentIndex=I.get(n),F.cosAngle=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(E,D),h(F,x))continue;F.cosAngle<-.9999&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(D,E)}C+=o,G++,f||u(F,N)?(r.write(b,L++,F),K.push(o)):d(F,V)&&(m.write(z,B++,F),O.push(o))}const Q=new Float32Array(K.reverse()),R=new Float32Array(O.reverse());return{regular:{instancesData:r.trim(b,L),lodInfo:{lengths:Q}},silhouette:{instancesData:m.trim(z,B),lodInfo:{lengths:R}},averageEdgeLength:C/G}}function u(e,t){return e.cosAngle<t}function h(e,t){return e.cosAngle>t}function d(e,t){const o=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(e.cosAngle),r=A.fwd,s=A.ortho;Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["directionFromTo"])(r,e.position1,e.position0);return o*(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["c"])(s,e.faceNormal0,e.faceNormal1),r)>0?-1:1)>t}const A={edge:{position0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),position1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),faceNormal0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),faceNormal1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),componentIndex:0,cosAngle:0},ortho:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),fwd:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},v={v0:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),v1:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),v2:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},w={anglePlanar:4,angleSignificantEdge:35};


/***/ }),

/***/ "BICm":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js ***!
  \***************************************************************************/
/*! exports provided: packInterleavedBuffer, packLayout, unpackInterleavedBuffer, unpackLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packInterleavedBuffer", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packLayout", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackInterleavedBuffer", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackLayout", function() { return G; });
/* harmony import */ var _BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferView.js */ "VeZB");
/* harmony import */ var _InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterleavedLayout.js */ "/ADo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function D(e){return G(e.layout).createView(e.buffer)}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const n={...e,constructor:J(e.constructor)};t.push([r,n])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}function G(e){const t=Object(_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>{return t.fields.set(e[0],{...e[1],constructor:(r=e[1].constructor,K.get(r))});var r})),t}const H=[_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i8"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i16"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3i32"],_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4i32"]];function J(e){return`${e.ElementType}_${e.ElementCount}`}const K=new Map;H.forEach((e=>K.set(J(e),e)));


/***/ }),

/***/ "DJ1h":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js ***!
  \********************************************************************************************/
/*! exports provided: CommonInstancesLayout, EdgeInputBufferLayout, EdgeShaderAttributeLocations, RegularEdgeInstancesLayout, SilhouetteEdgeInstancesLayout, VertexLayout, glVertexLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonInstancesLayout", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeInputBufferLayout", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EdgeShaderAttributeLocations", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeInstancesLayout", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeInstancesLayout", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexLayout", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glVertexLayout", function() { return t; });
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../support/buffer/InterleavedLayout.js */ "/ADo");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position").u16("componentIndex").u16("_padding"),i=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec2u8("sideness"),t=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__["glLayout"])(i),a=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__["newLayout"])().vec3f("position0").vec3f("position1").u16("componentIndex").u8("variantOffset",{glNormalized:!0}).u8("variantStroke").u8("variantExtension",{glNormalized:!0}).u8("_padding",{glPadding:!0}).u16("_padding2",{glPadding:!0}),r=a.clone().vec3f("normal"),s=a.clone().vec3f("normalA").vec3f("normalB"),d={position0:0,position1:1,componentIndex:2,variantOffset:4,variantStroke:5,variantExtension:6,normal:7,normalA:7,normalB:8,sideness:9};


/***/ }),

/***/ "InNl":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js ***!
  \***************************************************************************************************/
/*! exports provided: work, wrappedWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "work", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrappedWork", function() { return a; });
/* harmony import */ var _geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../geometry/support/meshUtils/deduplicate.js */ "jEtK");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/* harmony import */ var _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edgeBufferWriters.js */ "fgxy");
/* harmony import */ var _support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/workerHelper.js */ "BICm");
/* harmony import */ var _support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../support/meshProcessing.js */ "/OIm");
/* harmony import */ var _edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edgePreprocessing.js */ "ABOp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function a(e){const t=function(e){return{data:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}(e),n=u(t),s=[t.data.buffer];return{result:function(e,r){r.push(e.regular.lodInfo.lengths.buffer),r.push(e.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.regular.instancesData,r),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:Object(_support_buffer_workerHelper_js__WEBPACK_IMPORTED_MODULE_3__["packInterleavedBuffer"])(e.silhouette.instancesData,r),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}(n,s),transferList:s}}function u(t){const n=function(t,n,i){if(n&&i){return{faces:i,neighbors:Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(i,t.count),vertices:t}}{const n=Object(_geometry_support_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_0__["deduplicate"])(t.buffer,t.stride/4,{originalIndices:i}),o=Object(_support_meshProcessing_js__WEBPACK_IMPORTED_MODULE_4__["computeNeighbors"])(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:o,vertices:_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_1__["EdgeInputBufferLayout"].createView(n.buffer)}}}(t.data,t.skipDeduplicate,t.originalIndices);return f.updateSettings(t.writerSettings),c.updateSettings(t.writerSettings),Object(_edgePreprocessing_js__WEBPACK_IMPORTED_MODULE_5__["extractEdges"])(n,f,c)}const f=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["RegularEdgeBufferWriter"],c=new _edgeBufferWriters_js__WEBPACK_IMPORTED_MODULE_2__["SilhouetteEdgeBufferWriter"];


/***/ }),

/***/ "Lrt+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js ***!
  \*********************************************************************/
/*! exports provided: glLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glLayout", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t={divisor:0};function o(o,n={}){n={...t,...n};const r=o.stride;return o.fieldNames.filter((t=>{const e=o.fields.get(t).optional;return!(e&&e.glPadding)})).map((t=>{const i=o.fields.get(t),s=i.constructor.ElementCount,u=function(t){const o=e[t];if(o)return o;throw new Error("BufferType not supported in WebGL")}(i.constructor.ElementType),f=i.offset,c=!(!i.optional||!i.optional.glNormalized);return{name:t,stride:r,count:s,type:u,offset:f,normalized:c,divisor:n.divisor}}))}const e={u8:5121,u16:5123,u32:5125,i8:5120,i16:5122,i32:5124,f32:5126};


/***/ }),

/***/ "fgxy":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js ***!
  \************************************************************************************************/
/*! exports provided: CommonBufferWriter, RegularEdgeBufferWriter, SilhouetteEdgeBufferWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonBufferWriter", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegularEdgeBufferWriter", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SilhouetteEdgeBufferWriter", function() { return l; });
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/RandomLCG.js */ "iA3P");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../support/buffer/glUtil.js */ "Lrt+");
/* harmony import */ var _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bufferLayouts.js */ "DJ1h");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a{updateSettings(t){this.settings=t}write(t,o,e){const r=function(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u[0]=5381;for(let t=0;t<m.length;t++)u[0]=31*u[0]+m[t];return u[0]}(e);p.seed=r;const n=p.getIntRange(0,255),i=p.getIntRange(0,this.settings.variants-1),s=p.getFloat(),a=255*(.5*function(t,o){const e=t<0?-1:1;return Math.pow(Math.abs(t),o)*e}(-(1-Math.min(s/.7,1))+Math.max(0,s-.7)/(1-.7),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,n),t.variantStroke.set(o,i),t.variantExtension.set(o,a)}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m=new Uint32Array(c.buffer),u=new Uint32Array(1);const p=new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_0__["default"];class f{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"].createBuffer(t)}write(t,o,n){this.commonWriter.write(t,o,n),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(h,n.faceNormal0,n.faceNormal1),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(h,h),t.normal.setVec(o,h)}trim(t,o){return this.commonWriter.trim(t,o)}}f.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],f.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["RegularEdgeInstancesLayout"],{divisor:1});class l{constructor(){this.commonWriter=new a}updateSettings(t){this.commonWriter.updateSettings(t)}allocate(t){return _bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"].createBuffer(t)}write(t,o,e){this.commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1)}trim(t,o){return this.commonWriter.trim(t,o)}}l.Layout=_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],l.glLayout=Object(_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_3__["glLayout"])(_bufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["SilhouetteEdgeInstancesLayout"],{divisor:1});const h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "jEtK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js ***!
  \*****************************************************************************/
/*! exports provided: default, deduplicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deduplicate", function() { return n; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,f,i){const u=n.byteLength/(4*f),c=new Uint32Array(n,0,u*f);let s=new Uint32Array(u);const a=i&&i.minReduction||0,h=i&&i.originalIndices||null,g=i&&i.componentOffsets||null;let y=0;if(g)for(let t=0;t<g.length-1;t++){const n=g[t+1]-g[t];n>y&&(y=n)}else y=u;const U=Math.floor(1.1*y)+1;(null==o||o.length<2*U)&&(o=new Uint32Array(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["nextHighestPowerOfTwo"])(2*U)));for(let t=0;t<2*U;t++)o[t]=0;let w=0;const A=!!g&&!!h,m=A?h.length:u,b=A?new Uint32Array(h.length):null,d=1.96;let p=0!==a?Math.ceil(4*d*d/(a*a)*a*(1-a)):m,M=1,q=g?g[1]:m;for(let t=0;t<m;t++){if(t===p){const n=1-w/t;if(n+d*Math.sqrt(n*(1-n)/t)<a)return null;p*=2}if(t===q){for(let t=0;t<2*U;t++)o[t]=0;if(h)for(let t=g[M-1];t<g[M];t++)b[t]=s[h[t]];q=g[++M]}const n=A?h[t]:t,r=n*f,i=l(c,r,f);let u=i%U,y=w;for(;0!==o[2*u+1];){if(o[2*u]===i){const t=o[2*u+1]-1;if(e(c,r,t*f,f)){y=s[t];break}}u++,u>=U&&(u-=U)}y===w&&(o[2*u]=i,o[2*u+1]=n+1,w++),s[n]=y}if(0!==a&&1-w/u<a)return null;if(A){for(let t=g[M-1];t<b.length;t++)b[t]=s[h[t]];s=b}const x=new Uint32Array(f*w);w=0;for(let t=0;t<m;t++)if(s[t]===w){r(c,(A?h[t]:t)*f,x,w*f,f),w++}if(h&&!A){const t=new Uint32Array(h.length);for(let n=0;n<t.length;n++)t[n]=s[h[n]];s=t}return{buffer:x.buffer,indices:s,uniqueCount:w}}function e(t,n,e,r){for(let l=0;l<r;l++)if(t[n+l]!==t[e+l])return!1;return!0}function r(t,n,e,r,l){for(let o=0;o<l;o++)e[r+o]=t[n+o]}function l(t,n,e){let r=0;for(let l=0;l<e;l++)r=t[n+l]+r|0,r=r+(r<<11)+(r>>>2)|0;return r>>>0}let o=null;/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ })

}]);
//# sourceMappingURL=views-3d-webgl-engine-lib-edgeRendering-EdgeProcessingWorker-js-es2015.js.map