(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-PointCloudWorker-js"],{

/***/ "0gct":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js ***!
  \****************************************************************/
/*! exports provided: decodeIntensity, decodeRGB, decodeXYZ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeIntensity", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeRGB", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeXYZ", function() { return z; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=0,o=10,r=10,n=12,i=16;function c(e,i,c){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,c+t,o)),version:i.getUint16(c+r,true),checksum:i.getUint32(c+n,true)}}const s=0,l=4,d=8,a=16,u=24,w=32,h=40,f=48,g=56,p=64,U=72,m=80,M=84,y=88;function z(t){const o=new DataView(t,0);let r=0;const{identifier:n,version:z}=c(t,o,r);if(r+=i,"LEPCC     "!==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(z>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const B=function(e,t){return{sizeLo:e.getUint32(t+s,!0),sizeHi:e.getUint32(t+l,!0),minX:e.getFloat64(t+d,!0),minY:e.getFloat64(t+a,!0),minZ:e.getFloat64(t+u,!0),maxX:e.getFloat64(t+w,!0),maxY:e.getFloat64(t+h,!0),maxZ:e.getFloat64(t+f,!0),errorX:e.getFloat64(t+g,!0),errorY:e.getFloat64(t+p,!0),errorZ:e.getFloat64(t+U,!0),count:e.getUint32(t+m,!0),reserved:e.getUint32(t+M,!0)}}(o,r);r+=y;if(B.sizeHi*Math.pow(2,32)+B.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const F=new Float64Array(3*B.count),b=[],C=[],A=[],k=[];if(r=L(t,r,b),r=L(t,r,C),r=L(t,r,A),r=L(t,r,k),r!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad length");let v=0,X=0;for(let e=0;e<b.length;e++){X+=b[e];let t=0;for(let o=0;o<C[e];o++){t+=A[v];const e=k[v];F[3*v]=Math.min(B.maxX,B.minX+2*B.errorX*t),F[3*v+1]=Math.min(B.maxY,B.minY+2*B.errorY*X),F[3*v+2]=Math.min(B.maxZ,B.minZ+2*B.errorZ*e),v++}}return{errorX:B.errorX,errorY:B.errorY,errorZ:B.errorZ,result:F}}function L(e,t,o){const r=[];t=B(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=B(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function B(t,o,r){const n=new DataView(t,o),i=n.getUint8(0),c=31&i,s=!!(32&i),l=(192&i)>>6;let d=0;if(0===l)d=n.getUint32(1,true),o+=5;else if(1===l)d=n.getUint16(1,true),o+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count type");d=n.getUint8(1),o+=2}if(s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","LUT not implemented");const a=Math.ceil(d*c/8),u=new Uint8Array(t,o,a);let w=0,h=0,f=0;const g=-1>>>32-c;for(let e=0;e<d;e++){for(;h<c;)w|=u[f]<<h,h+=8,f+=1;r[e]=w&g,w>>>=c,h-=c,h+c>32&&(w|=u[f-1]>>8-h)}return o+f}const F=0,b=4,C=8,A=12,k=14,v=15,X=16;function Y(t){const o=new DataView(t,0);let r=0;const{identifier:n,version:s}=c(t,o,r);if(r+=i,"ClusterRGB"!==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const l=function(e,t){return{sizeLo:e.getUint32(t+F,!0),sizeHi:e.getUint32(t+b,!0),count:e.getUint32(t+C,!0),colorMapCount:e.getUint16(t+A,!0),lookupMethod:e.getUint8(t+k),compressionMethod:e.getUint8(t+v)}}(o,r);r+=X;if(l.sizeHi*Math.pow(2,32)+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");if((2===l.lookupMethod||1===l.lookupMethod)&&0===l.compressionMethod){if(3*l.colorMapCount+l.count+r!==t.byteLength||l.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const o=new Uint8Array(t,r,3*l.colorMapCount),n=new Uint8Array(t,r+3*l.colorMapCount,l.count),i=new Uint8Array(3*l.count);for(let e=0;e<l.count;e++){const t=n[e];i[3*e]=o[3*t],i[3*e+1]=o[3*t+1],i[3*e+2]=o[3*t+2]}return i}if(0===l.lookupMethod&&0===l.compressionMethod){if(3*l.count+r!==t.byteLength||0!==l.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");return new Uint8Array(t,r).slice()}if(l.lookupMethod<=2&&1===l.compressionMethod){if(r+3!==t.byteLength||1!==l.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad count");const n=o.getUint8(r),i=o.getUint8(r+1),c=o.getUint8(r+2),s=new Uint8Array(3*l.count);for(let e=0;e<l.count;e++)s[3*e]=n,s[3*e+1]=i,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad method "+l.lookupMethod+","+l.compressionMethod)}const Z=0,x=4,P=8,H=12,D=14,V=15,E=16;function j(t){const o=new DataView(t,0);let r=0;const{identifier:n,version:s}=c(t,o,r);if(r+=i,"Intensity "!==n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Unknown version");const l=function(e,t){return{sizeLo:e.getUint32(t+Z,!0),sizeHi:e.getUint32(t+x,!0),count:e.getUint32(t+P,!0),scaleFactor:e.getUint16(t+H,!0),bitsPerPoint:e.getUint8(t+D),reserved:e.getUint8(t+V)}}(o,r);r+=E;if(l.sizeHi*Math.pow(2,32)+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const d=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+r!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint8Array(t,r,l.count);for(let e=0;e<l.count;e++)d[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+r!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");const o=new Uint16Array(t,r,l.count);for(let e=0;e<l.count;e++)d[e]=o[e]*l.scaleFactor}else{const o=[];if(B(t,r,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)d[e]=o[e]*l.scaleFactor}return d}


/***/ }),

/***/ "52T4":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quatf32.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, f, q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(){const r=new Float32Array(4);return r[3]=1,r}function n(r){const n=new Float32Array(4);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n}function e(r,n,e,t){const a=new Float32Array(4);return a[0]=r,a[1]=n,a[2]=e,a[3]=t,a}function t(r,n){return new Float32Array(r,n,4)}var a=Object.freeze({__proto__:null,create:r,clone:n,fromValues:e,createView:t});


/***/ }),

/***/ "Bf/J":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js ***!
  \*******************************************************************************/
/*! exports provided: elevationFromPositions, evaluateRenderer, filterInPlace, getAttributeValues, readGeometry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elevationFromPositions", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateRenderer", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributeValues", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readGeometry", function() { return c; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../renderers/PointCloudClassBreaksRenderer.js */ "Tg0p");
/* harmony import */ var _renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../renderers/PointCloudStretchRenderer.js */ "V4u7");
/* harmony import */ var _renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../renderers/PointCloudUniqueValueRenderer.js */ "ofcG");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LEPCC.js */ "0gct");
/* harmony import */ var _I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./I3SBinaryReader.js */ "rWTd");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(e,o,l,i){const{rendererJSON:s,isRGBRenderer:f}=e;let u=null,c=null;if(o&&f)u=o;else if(o&&"pointCloudUniqueValueRenderer"===s.type){c=_renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(s);const e=c.colorUniqueValueInfos;u=new Uint8Array(3*i);const r=p(c.fieldTransformType);for(let t=0;t<i;t++){const n=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.indexOf(n)>=0){u[3*t]=e[o].color.r,u[3*t+1]=e[o].color.g,u[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===s.type){c=_renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s);const e=c.stops;u=new Uint8Array(3*i);const r=p(c.fieldTransformType);for(let t=0;t<i;t++){const n=r?r(o[t]):o[t],l=e.length-1;if(n<e[0].value)u[3*t]=e[0].color.r,u[3*t+1]=e[0].color.g,u[3*t+2]=e[0].color.b;else if(n>=e[l].value)u[3*t]=e[l].color.r,u[3*t+1]=e[l].color.g,u[3*t+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(n<e[o].value){const r=(n-e[o-1].value)/(e[o].value-e[o-1].value);u[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),u[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),u[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===s.type){c=_renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(s);const e=c.colorClassBreakInfos;u=new Uint8Array(3*i);const t=p(c.fieldTransformType);for(let r=0;r<i;r++){const n=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(n>=e[o].minValue&&n<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else{u=new Uint8Array(3*i);for(let e=0;e<u.length;e++)u[e]=255}if(l&&c&&c.colorModulation){const e=c.colorModulation.minValue,o=c.colorModulation.maxValue,r=.3;for(let t=0;t<i;t++){const n=l[t],i=n>=o?1:n<=e?r:r+(1-r)*(n-e)/(o-e);u[3*t]=i*u[3*t],u[3*t+1]=i*u[3*t+1],u[3*t+2]=i*u[3*t+2]}}return u}function c(o,r){if(null==o.encoding||""===o.encoding){const t=Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createGeometryIndexFromSchema"])(r,o);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t.vertexAttributes.position))return;const n=Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createTypedView"])(r,t.vertexAttributes.position),l=t.header.fields,f=[l.offsetX,l.offsetY,l.offsetZ],u=[l.scaleX,l.scaleY,l.scaleZ],c=n.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=n[3*e]*u[0]+f[0],a[3*e+1]=n[3*e+1]*u[1]+f[1],a[3*e+2]=n[3*e+2]*u[2]+f[2];return a}if("lepcc-xyz"===o.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_4__["decodeXYZ"])(r).result}function a(e,r,t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&e.attributeInfo.useElevation?d(r,t):Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)?Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["readBinaryAttribute"])(e.attributeInfo.storageInfo,e.buffer,t):null}function d(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function m(e,o,r,t,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:o}=t[e],r=n[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;-1!==o.values.indexOf(r)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=b(o.requiredSetBits),t=b(o.requiredClearBits);(r&e)===e&&0==(r&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,n=t>1,i=1===e,s=e===t;let f=!1;for(const e of o.includedReturns)if("last"===e&&s||"firstOfMany"===e&&i&&n||"lastOfMany"===e&&s&&n||"single"===e&&!n){f=!0;break}f||(l=!1);break}}}l&&(r[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],o[3*i]=o[3*s],o[3*i+1]=o[3*s+1],o[3*i+2]=o[3*s+2],i++)}return i}function p(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function b(e){let o=0;for(const r of e||[])o|=1<<r;return o}


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

/***/ "rWTd":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js ***!
  \**************************************************************************/
/*! exports provided: createAttributeDataIndex, createGeometryDescriptor, createGeometryDescriptorForDraco, createGeometryDescriptorFromDefinition, createGeometryDescriptorFromSchema, createGeometryIndexFromSchema, createRawView, createTypedView, getBytesPerValue, isValueType, readBinaryAttribute, readHeader, readStringArray, valueType2ArrayBufferReader, valueType2TypedArrayClassMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAttributeDataIndex", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptor", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorForDraco", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromDefinition", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromSchema", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryIndexFromSchema", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRawView", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTypedView", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytesPerValue", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueType", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readBinaryAttribute", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readHeader", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readStringArray", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueType2ArrayBufferReader", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueType2TypedArrayClassMap", function() { return m; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _LEPCC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LEPCC.js */ "0gct");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(e,t,r){let o="",i=0;for(;i<r;){const u=e[t+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&e[t+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&e[t+i+1])<<6|63&e[t+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&e[t+i+1])<<12|(63&e[t+i+2])<<6|63&e[t+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function a(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=I[u];n.fields[i.property]=a(e,r),r+=m[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function s(e,t,r){const o=[];let i,a,s=0;for(a=0;a<e;a+=1){if(i=t[a],i>0){if(o.push(u(r,s,i-1)),0!==r[s+i-1])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function c(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function f(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function l(t,r,o){const i=null!=r.header?a(t,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let t=0;t<r.ordering.length;t++){const o=r.ordering[t],a=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r[o]);if(a.count=i.fields.count,"String"===a.valueType){if(a.byteOffset=s,a.byteCount=i.fields[o+"ByteCount"],"UTF-8"!==a.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-encoding","Unsupported String encoding.",{encoding:a.encoding})}else{if(!h(a.valueType))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-value-type","Unsupported binary valueType",{valueType:a.valueType});{const e=A(a.valueType);s+=s%e!=0?e-s%e:0,a.byteOffset=s,a.byteCount=e*a.valuesPerElement*a.count}}s+=a.byteCount,u.entries[o]=a}return u.byteCount=s-u.byteOffset,u}function b(e,t,r){if(t!==e&&i.error(`Invalid ${r} buffer size\n expected: ${e}, actual: ${t})`),t<e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("buffer-too-small","Binary buffer is too small",{expectedSize:e,actualSize:t})}function d(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function y(e,t){const n=a(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const e of t.ordering){if(!t.vertexAttributes[e])continue;const n={...t.vertexAttributes[e],byteOffset:r,count:u},i=p[e]?p[e]:"_"+e;o.vertexAttributes[i]=n,r+=A(n.valueType)*n.valuesPerElement*u}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=A(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*c}}return b(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function g(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?d(e):w(t)}function w(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const p={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function C(e,t,u){if("lepcc-rgb"===e.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeRGB"])(t);if("lepcc-intensity"===e.encoding)return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeIntensity"])(t);if(null!=e.encoding&&""!==e.encoding)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");e["attributeByteCounts "]&&!e.attributeByteCounts&&(i.warn("Warning: Trailing space in 'attributeByteCounts '."),e.attributeByteCounts=e["attributeByteCounts "]),"ObjectIds"===e.ordering[0]&&e.hasOwnProperty("objectIds")&&(i.warn("Warning: Case error in objectIds"),e.ordering[0]="objectIds");const a=l(t,e,u);b(a.byteOffset+a.byteCount,t.byteLength,"attribute");const d=a.entries.attributeValues||a.entries.objectIds;if(d){if("String"===d.valueType){const e=a.entries.attributeByteCounts,n=c(t,e),r=f(t,d);return s(e.count,n,r)}return c(t,d)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},I={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function h(e){return m.hasOwnProperty(e)}function A(e){return h(e)?m[e].BYTES_PER_ELEMENT:0}


/***/ }),

/***/ "rr5J":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../geometry/projection.js */ "gYg2");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/quatf32.js */ "52T4");
/* harmony import */ var _i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./i3s/PointCloudWorkerUtil.js */ "Bf/J");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class c{transform(a){const o=this._transform(a),f=[o.points.buffer,o.rgb.buffer];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o.pointIdFilterMap)&&f.push(o.pointIdFilterMap.buffer);for(const r of o.attributes)"buffer"in r.values&&Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isArrayBuffer"])(r.values.buffer)&&r.values.buffer!==o.rgb.buffer&&f.push(r.values.buffer);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])({result:o,transferList:f})}_transform(t){const e=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["readGeometry"])(t.schema,t.geometryBuffer);let o=e.length/3,f=null;const i=[],s=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t.primaryAttributeData,e,o);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.primaryAttributeData)&&s&&i.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:s});const n=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t.modulationAttributeData,e,o);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.modulationAttributeData)&&n&&i.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:n});let u=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["evaluateRenderer"])(t.rendererInfo,s,n,o);if(t.filterInfo&&t.filterInfo.length>0&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.filterAttributesData)){const r=t.filterAttributesData.map((t=>{const r=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t,e,o),a={attributeInfo:t.attributeInfo,values:r};return i.push(a),a}));f=new Uint32Array(o),o=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["filterInPlace"])(e,u,f,t.filterInfo,r)}for(const r of t.userAttributesData){const t=Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(r,e,o);i.push({attributeInfo:r.attributeInfo,values:t})}3*o<u.length&&(u=new Uint8Array(u.buffer.slice(0,3*o))),this._applyElevationOffsetInPlace(e,o,t.elevationOffset);const c=this._transformCoordinates(e,o,t.obb,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.inSR),_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.outSR));return{obb:t.obb,points:c,rgb:u,attributes:i,pointIdFilterMap:f}}_transformCoordinates(t,r,e,a,u){if(!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["projectBuffer"])(t,a,0,t,u,0,r))throw Error("Can't reproject");const l=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["f"])(e.center[0],e.center[1],e.center[2]),m=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),b=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])();Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__["c"])(h,e.quaternion);const p=new Float32Array(3*r);for(let a=0;a<r;a++)m[0]=t[3*a]-l[0],m[1]=t[3*a+1]-l[1],m[2]=t[3*a+2]-l[2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(b,m,h),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(b[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(b[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(b[2])),p[3*a]=m[0],p[3*a+1]=m[1],p[3*a+2]=m[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}}const h=Object(_chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_8__["b"])();function I(){return new c}/* harmony default export */ __webpack_exports__["default"] = (I);


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-PointCloudWorker-js-es2015.js.map