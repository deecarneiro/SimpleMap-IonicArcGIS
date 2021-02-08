(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-3d-layers-graphics-objectResourceUtils-js~views-3d-webgl-engine-lib-edgeRendering-Edge~6fe4ca85"],{

/***/ "/ADo":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js ***!
  \********************************************************************************/
/*! exports provided: InterleavedBuffer, InterleavedLayout, newLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedBuffer", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterleavedLayout", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newLayout", function() { return A; });
/* harmony import */ var _BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BufferView.js */ "VeZB");
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types.js */ "grla");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class N{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const t of e.fieldNames){const i=e.fields.get(t);this[t]=new i.constructor(this.buffer,i.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const i=this[e];return i&&i.elementCount===t.ElementCount&&i.elementType===t.ElementType?i:null}slice(e,t){return new N(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,i,s){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,s*r/4);new Uint32Array(this.buffer,i*r,s*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,s*r);new Uint8Array(this.buffer,i*r,s*r).set(n)}}}class T{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(t,i){return this.appendField(t,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"],i),this}vec2f64(e,i){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f64"],i),this}vec3f(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"],t),this}vec3f64(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f64"],t),this}vec4f(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"],t),this}vec4f64(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f64"],t),this}mat3f(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f"],t),this}mat3f64(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3f64"],t),this}mat4f(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f"],t),this}mat4f64(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat4f64"],t),this}vec4u8(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"],t),this}f32(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat"],t),this}f64(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewFloat64"],t),this}u8(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint8"],t),this}u16(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint16"],t),this}i8(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewInt8"],t),this}vec2i8(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i8"],t),this}vec2i16(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2i16"],t),this}vec2u8(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2u8"],t),this}vec4u16(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u16"],t),this}u32(e,t){return this.appendField(e,_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewUint32"],t),this}appendField(e,t,i){const s=t.ElementCount*Object(_types_js__WEBPACK_IMPORTED_MODULE_1__["elementTypeSize"])(t.ElementType),r=this.stride;this.fields.set(e,{size:s,constructor:t,offset:r,optional:i}),this.stride+=s,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new N(this,e)}createView(e){return new N(this,e)}clone(){const e=new T;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,i)=>e.fields.set(i,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function A(){return new T}


/***/ }),

/***/ "DZZ3":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec4.js ***!
  \*****************************************************************************/
/*! exports provided: BufferViewVec4Impl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4Impl", function() { return e; });
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,i){this.TypedArrayConstructor=t,this.elementCount=4;const d=this.TypedArrayConstructor;void 0===f&&(f=4*d.BYTES_PER_ELEMENT);const s=0===e.byteLength?0:r;this.typedBuffer=null==i?new d(e,s):new d(e,s,(i-r)/d.BYTES_PER_ELEMENT),this.typedBufferStride=f/d.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,r){return Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2],this.typedBuffer[e*this.typedBufferStride+3])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2],this.typedBuffer[t*this.typedBufferStride+3]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,i){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=f,this.typedBuffer[t*this.typedBufferStride+3]=i}copyFrom(t,e,r){const f=this.typedBuffer,i=e.typedBuffer,d=t*this.typedBufferStride,s=r*e.typedBufferStride;f[d]=i[s],f[d+1]=i[s+1],f[d+2]=i[s+2],f[d+3]=i[s+3]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=4;


/***/ }),

/***/ "EY25":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec3.js ***!
  \*****************************************************************************/
/*! exports provided: BufferViewVec3Impl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3Impl", function() { return e; });
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,i){this.TypedArrayConstructor=t,this.elementCount=3;const s=this.TypedArrayConstructor;void 0===f&&(f=3*s.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==i?new s(e,d):new s(e,d,(i-r)/s.BYTES_PER_ELEMENT),this.typedBufferStride=f/s.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,r){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1],this.typedBuffer[e*this.typedBufferStride+2])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1],this.typedBuffer[t*this.typedBufferStride+2]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r,this.typedBuffer[t*this.typedBufferStride+2]=f}copyFrom(t,e,r){const f=this.typedBuffer,i=e.typedBuffer,s=t*this.typedBufferStride,d=r*e.typedBufferStride;f[s]=i[d],f[s+1]=i[d+1],f[s+2]=i[d+2]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=3;


/***/ }),

/***/ "UyQh":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Vec2.js ***!
  \*****************************************************************************/
/*! exports provided: BufferViewVec2Impl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2Impl", function() { return e; });
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec2.js */ "M0lq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getVec(e,r){return Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["s"])(r,this.typedBuffer[e*this.typedBufferStride],this.typedBuffer[e*this.typedBufferStride+1])}setVec(t,e){this.typedBuffer[t*this.typedBufferStride]=e[0],this.typedBuffer[t*this.typedBufferStride+1]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){this.typedBuffer[t*this.typedBufferStride]=e,this.typedBuffer[t*this.typedBufferStride+1]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i]=s[d],f[i+1]=s[d+1]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=2;


/***/ }),

/***/ "VeZB":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/BufferView.js ***!
  \*************************************************************************/
/*! exports provided: BufferViewFloat, BufferViewFloat64, BufferViewInt16, BufferViewInt32, BufferViewInt8, BufferViewMat3f, BufferViewMat3f64, BufferViewMat4f, BufferViewMat4f64, BufferViewUint16, BufferViewUint32, BufferViewUint8, BufferViewVec2f, BufferViewVec2f64, BufferViewVec2i16, BufferViewVec2i32, BufferViewVec2i8, BufferViewVec2u16, BufferViewVec2u32, BufferViewVec2u8, BufferViewVec3f, BufferViewVec3f64, BufferViewVec3i16, BufferViewVec3i32, BufferViewVec3i8, BufferViewVec3u16, BufferViewVec3u32, BufferViewVec3u8, BufferViewVec4f, BufferViewVec4f64, BufferViewVec4i16, BufferViewVec4i32, BufferViewVec4i8, BufferViewVec4u16, BufferViewVec4u32, BufferViewVec4u8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewFloat", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewFloat64", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewInt16", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewInt32", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewInt8", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat3f", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat3f64", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat4f", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat4f64", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewUint16", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewUint32", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewUint8", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2f", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2f64", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2i16", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2i32", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2i8", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2u16", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2u32", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec2u8", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3f", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3f64", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3i16", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3i32", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3i8", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3u16", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3u32", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec3u8", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4f", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4f64", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4i16", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4i32", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4i8", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4u16", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4u32", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewVec4u8", function() { return x; });
/* harmony import */ var _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internals/Mat3.js */ "YDkJ");
/* harmony import */ var _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internals/Mat4.js */ "rl7h");
/* harmony import */ var _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internals/Scalar.js */ "hIn0");
/* harmony import */ var _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./internals/Vec2.js */ "UyQh");
/* harmony import */ var _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./internals/Vec3.js */ "EY25");
/* harmony import */ var _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internals/Vec4.js */ "DZZ3");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class f extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new f(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}f.ElementType="f32";class u extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new u(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u.ElementType="f32";class a extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f32";class p extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class c extends _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3Impl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class b extends _internals_Mat3_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewMat3Impl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewMat4Impl"]{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f32";class l extends _internals_Mat4_js__WEBPACK_IMPORTED_MODULE_1__["BufferViewMat4Impl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f64";class i extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f64";class m extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class d extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f64";class h extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="u8";class A extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u8";class O extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class F extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="u32";class V extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i8";class q extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class B extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="i16";class C extends _internals_Scalar_js__WEBPACK_IMPORTED_MODULE_2__["BufferViewScalarImpl"]{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends _internals_Vec2_js__WEBPACK_IMPORTED_MODULE_3__["BufferViewVec2Impl"]{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends _internals_Vec3_js__WEBPACK_IMPORTED_MODULE_4__["BufferViewVec3Impl"]{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends _internals_Vec4_js__WEBPACK_IMPORTED_MODULE_5__["BufferViewVec4Impl"]{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";


/***/ }),

/***/ "YDkJ":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Mat3.js ***!
  \*****************************************************************************/
/*! exports provided: BufferViewMat3Impl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat3Impl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let t=0;t<9;++t)f[i+t]=s[d+t]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=9;


/***/ }),

/***/ "dXfX":
/*!**************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4.js ***!
  \**************************************************/
/*! exports provided: A, B, C, D, E, F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return v; });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "QhKk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t}function r(t,n,a,r,s){return t[0]=n,t[1]=a,t[2]=r,t[3]=s,t}function s(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t}function u(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t}function o(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t[3]=n[3]*a[3],t}function e(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t[3]=n[3]/a[3],t}function c(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t[3]=Math.ceil(n[3]),t}function i(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t[3]=Math.floor(n[3]),t}function h(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t[3]=Math.min(n[3],a[3]),t}function M(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t[3]=Math.max(n[3],a[3]),t}function f(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t[3]=Math.round(n[3]),t}function l(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t}function m(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t}function d(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return Math.sqrt(a*a+r*r+s*s+u*u)}function b(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2],u=n[3]-t[3];return a*a+r*r+s*s+u*u}function x(t){const n=t[0],a=t[1],r=t[2],s=t[3];return Math.sqrt(n*n+a*a+r*r+s*s)}function q(t){const n=t[0],a=t[1],r=t[2],s=t[3];return n*n+a*a+r*r+s*s}function p(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function v(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t[3]=1/n[3],t}function g(t,n){const a=n[0],r=n[1],s=n[2],u=n[3];let o=a*a+r*r+s*s+u*u;return o>0&&(o=1/Math.sqrt(o),t[0]=a*o,t[1]=r*o,t[2]=s*o,t[3]=u*o),t}function _(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]+t[3]*n[3]}function j(t,n,a,r){const s=n[0],u=n[1],o=n[2],e=n[3];return t[0]=s+r*(a[0]-s),t[1]=u+r*(a[1]-u),t[2]=o+r*(a[2]-o),t[3]=e+r*(a[3]-e),t}function w(t,a){let r,s,u,o,e,c;a=a||1;do{r=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,s=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,e=r*r+s*s}while(e>=1);do{u=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,o=2*Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])()-1,c=u*u+o*o}while(c>=1);const i=Math.sqrt((1-e)/c);return t[0]=a*r,t[1]=a*s,t[2]=a*u*i,t[3]=a*o*i,t}function y(t,n,a){const r=n[0],s=n[1],u=n[2],o=n[3];return t[0]=a[0]*r+a[4]*s+a[8]*u+a[12]*o,t[1]=a[1]*r+a[5]*s+a[9]*u+a[13]*o,t[2]=a[2]*r+a[6]*s+a[10]*u+a[14]*o,t[3]=a[3]*r+a[7]*s+a[11]*u+a[15]*o,t}function z(t,n,a){const r=n[0],s=n[1],u=n[2],o=a[0],e=a[1],c=a[2],i=a[3],h=i*r+e*u-c*s,M=i*s+c*r-o*u,f=i*u+o*s-e*r,l=-o*r-e*s-c*u;return t[0]=h*i+l*-o+M*-c-f*-e,t[1]=M*i+l*-e+f*-o-h*-c,t[2]=f*i+l*-c+h*-e-M*-o,t[3]=n[3],t}function A(t){return"vec4("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}function D(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]}function E(n,a){const r=n[0],s=n[1],u=n[2],o=n[3],e=a[0],c=a[1],i=a[2],h=a[3];return Math.abs(r-e)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(r),Math.abs(e))&&Math.abs(s-c)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(u-i)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(u),Math.abs(i))&&Math.abs(o-h)<=_common_js__WEBPACK_IMPORTED_MODULE_0__["E"]*Math.max(1,Math.abs(o),Math.abs(h))}let L=u,k=o,B=e,C=d,F=b,G=x,H=q;var I=Object.freeze({__proto__:null,copy:a,set:r,add:s,subtract:u,multiply:o,divide:e,ceil:c,floor:i,min:h,max:M,round:f,scale:l,scaleAndAdd:m,distance:d,squaredDistance:b,length:x,squaredLength:q,negate:p,inverse:v,normalize:g,dot:_,lerp:j,random:w,transformMat4:y,transformQuat:z,str:A,exactEquals:D,equals:E,sub:L,mul:k,div:B,dist:C,sqrDist:F,len:G,sqrLen:H});


/***/ }),

/***/ "grla":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/types.js ***!
  \********************************************************************/
/*! exports provided: elementTypeSize, isInteger, isSigned, maximumValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementTypeSize", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSigned", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maximumValue", function() { return c; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":return 1;case"u16":return 2;case"u32":return 4;case"i8":return 1;case"i16":return 2;case"i32":case"f32":return 4;case"f64":return 8;default:return}}function r(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0;default:return}}function u(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1;default:return}}function c(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303;default:return}}


/***/ }),

/***/ "hIn0":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Scalar.js ***!
  \*******************************************************************************/
/*! exports provided: BufferViewScalarImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewScalarImpl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,s,f){this.TypedArrayConstructor=t,this.elementCount=1;const i=this.TypedArrayConstructor;void 0===s&&(s=i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==f?new i(e,u):new i(e,u,(f-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=s/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=1;


/***/ }),

/***/ "rl7h":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/internals/Mat4.js ***!
  \*****************************************************************************/
/*! exports provided: BufferViewMat4Impl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferViewMat4Impl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}getMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)e[t]=this.typedBuffer[r+t];return e}setMat(t,e){const r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r+t]=e[t]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer,i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let t=0;t<16;++t)f[i+t]=s[d+t]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=16;


/***/ })

}]);
//# sourceMappingURL=default~views-3d-layers-graphics-objectResourceUtils-js~views-3d-webgl-engine-lib-edgeRendering-Edge~6fe4ca85-es2015.js.map