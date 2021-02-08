(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geometry-support-meshUtils-ElevationSamplerWorker-js"],{

/***/ "CVnL":
/*!****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js ***!
  \****************************************************************************************/
/*! exports provided: default, ElevationSamplerWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationSamplerWorker", function() { return n; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/libs/rbush/PooledRBush.js */ "zna6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{async createIndex(e,n){const o=new Array;if(!e.vertexAttributes||!e.vertexAttributes.position)return new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__["PooledRBush"];const s=this.createMeshData(e),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)?await n.invoke("createIndexThread",s,{transferList:o}):this.createIndexThread(s).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(e){const t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map((e=>new Uint32Array(e)))):this.createIndexAllThread(r,t)}createIndexAllThread(e,t){const r=new Array(t.length/9);let n=0;for(let e=0;e<t.length;e+=9)r[n++]=o(t,e+0,e+3,e+6);return e.load(r),{result:e.toJSON()}}createIndexComponentsThread(e,t,r){let n=0;for(const e of r)n+=e.length/3;const s=new Array(n);let a=0;for(const e of r)for(let r=0;r<e.length;r+=3)s[a++]=o(t,3*e[r+0],3*e[r+1],3*e[r+2]);return e.load(s),{result:e.toJSON()}}createMeshData(e){const t=e.vertexAttributes.position.buffer;return!e.components||e.components.some((e=>!e.faces))?{position:t}:{position:t,components:e.components.map((e=>e.faces))}}createPooledRBush(){return new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_2__["PooledRBush"](9,Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}}function o(e,t,r,n){return{minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "RjdO":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/quickselect.js ***!
  \*********************************************************/
/*! exports provided: q */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return r; });
/* harmony import */ var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_commonjsHelpers.js */ "X2wA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var r=Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])((function(o){var r;void 0!==(r=function(){function o(o,t,a,f,i){r(o,t,a||0,f||o.length-1,i||n)}function r(o,n,a,f,i){for(;f>a;){if(f-a>600){var c=f-a+1,e=n-a+1,h=Math.log(c),u=.5*Math.exp(2*h/3),s=.5*Math.sqrt(h*u*(c-u)/c)*(e-c/2<0?-1:1);r(o,n,Math.max(a,Math.floor(n-e*u/c+s)),Math.min(f,Math.floor(n+(c-e)*u/c+s)),i)}var M=o[n],m=a,v=f;for(t(o,a,n),i(o[f],M)>0&&t(o,a,f);m<v;){for(t(o,m,v),m++,v--;i(o[m],M)<0;)m++;for(;i(o[v],M)>0;)v--}0===i(o[a],M)?t(o,a,v):t(o,++v,f),v<=n&&(a=v+1),n<=v&&(f=v-1)}}function t(o,r,t){var n=o[r];o[r]=o[t],o[t]=n}function n(o,r){return o<r?-1:o>r?1:0}return o}())&&(o.exports=r)}));


/***/ }),

/***/ "X2wA":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,n,o){return e(o={path:n,exports:{},require:function(e,n){return r(null==n&&o.path)}},o.exports),o.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}


/***/ }),

/***/ "zna6":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js ***!
  \******************************************************************/
/*! exports provided: default, BBox, PooledRBush */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBox", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PooledRBush", function() { return h; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../maybe.js */ "srIe");
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../arrayUtils.js */ "tQ+6");
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/quickselect.js */ "RjdO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h{constructor(t=9,i){this.compareMinX=l,this.compareMinY=c,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this.toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),M.prune(),X.prune(),Y.prune(),B.prune()}all(t){this._all(this.data,t)}search(t,i){let n=this.data;const e=this.toBBox;if(f(t,n))for(M.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;f(t,a)&&(n.leaf?i(h):x(t,a)?this._all(h,i):M.push(h))}n=M.pop()}}collides(t){let i=this.data;const n=this.toBBox;if(!f(t,i))return!1;for(M.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(f(t,h)){if(i.leaf||x(t,h))return!0;M.push(s)}}i=M.pop()}return!1}load(t,i=t.length){if(!i)return this;if(i<this._minEntries){for(let n=0,e=i;n<e;n++)this.insert(t[n]);return this}let n=this._build(t.slice(0,i),0,i-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){const t=this.data;this.data=n,n=t}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new w([]),this}remove(n){if(!n)return this;let e,s=this.data,h=null,a=0,r=!1;const o=this.toBBox(n);for(Y.clear(),B.clear();s||Y.length>0;){var l;if(!s)s=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(Y.pop()),h=Y.data[Y.length-1],a=null!=(l=B.pop())?l:0,r=!0;if(s.leaf&&(e=Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(s.children,n,s.children.length,s.indexHint),-1!==e))return s.children.splice(e,1),Y.push(s),this._condense(Y),this;r||s.leaf||!x(s,o)?h?(a++,s=h.children[a],r=!1):s=null:(Y.push(s),B.push(a),a=0,h=s,s=s.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,i){let n=t;for(X.clear();n;){var e;if(!0===n.leaf)for(const t of n.children)i(t);else X.pushArray(n.children);n=null!=(e=X.pop())?e:null}}_build(t,i,n,e){const s=n-i+1;let h=this._maxEntries;if(s<=h){const e=new w(t.slice(i,n+1));return a(e,this.toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/Math.pow(h,e-1)));const r=new b([]);r.height=e;const o=Math.ceil(s/h),l=o*Math.ceil(Math.sqrt(h));p(t,i,n,l,this.compareMinX);for(let s=i;s<=n;s+=l){const i=Math.min(s+l-1,n);p(t,s,i,o,this.compareMinY);for(let n=s;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1))}}return a(r,this.toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,a=1/0;for(let r=0,o=i.children.length;r<o;r++){const o=i.children[r],l=m(o),c=(s=t,h=o,(Math.max(h.maxX,s.maxX)-Math.min(h.minX,s.minX))*(Math.max(h.maxY,s.maxY)-Math.min(h.minY,s.minY))-l);c<a?(a=c,e=l<e?l:e,n=o):c===a&&l<e&&(e=l,n=o)}i=n||i.children[0]}var s,h;return i}_insert(t,i,n){const e=this.toBBox,s=n?t:e(t);Y.clear();const h=this._chooseSubtree(s,this.data,i,Y);for(h.children.push(t),o(h,s);i>=0&&Y.data[i].children.length>this._maxEntries;)this._split(Y,i),i--;this._adjustParentBBoxes(s,Y,i)}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const h=this._chooseSplitIndex(n,s,e);if(!h)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(h,n.children.length-h),o=n.leaf?new w(r):new b(r);o.height=n.height,a(n,this.toBBox),a(o,this.toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this.data=new b([t,i]),this.data.height=t.height+1,a(this.data,this.toBBox)}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let a=i;a<=n-i;a++){const i=r(t,0,a,this.toBBox),o=r(t,a,n,this.toBBox),l=u(i,o),c=m(i)+m(o);l<e?(e=l,h=a,s=c<s?c:s):l===e&&c<s&&(s=c,h=a)}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this.compareMinX:l,s=t.leaf?this.compareMinY:c;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this.toBBox,h=r(t,0,i,s),a=r(t,n-i,n,s);let l=d(h)+d(a);for(let e=i;e<n-i;e++){const i=t.children[e];o(h,t.leaf?s(i):i),l+=d(h)}for(let e=n-i-1;e>=i;e--){const i=t.children[e];o(a,t.leaf?s(i):i),l+=d(a)}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)o(i.data[e],t)}_condense(t){for(let n=t.length-1;n>=0;n--){const e=t.data[n];if(0===e.children.length)if(n>0){const s=t.data[n-1],h=s.children;h.splice(Object(_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["indexOf"])(h,e,h.length,s.indexHint),1)}else this.clear();else a(e,this.toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this.compareMinX=new Function("a","b",i.join(t[0])),this.compareMinY=new Function("a","b",i.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i){r(t,0,t.children.length,i,t)}function r(t,i,n,e,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],o(s,t.leaf?e(h):h);return s}function o(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function l(t,i){return t.minX-i.minX}function c(t,i){return t.minY-i.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function d(t){return t.maxX-t.minX+(t.maxY-t.minY)}function u(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function x(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function f(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(i,n,e,h,a){const r=[n,e];for(;r.length;){const n=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop()),e=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["assumeNonNull"])(r.pop());if(n-e<=h)continue;const o=e+Math.ceil((n-e)/h/2)*h;Object(_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_3__["q"])(i,o,e,n,a),r.push(e,o,o,n)}}const M=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],X=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"],B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_2__["default"]({deallocator:void 0});class _{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class g extends _{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__["PositionHint"]}}class w extends g{constructor(t){super(),this.children=t,this.leaf=!0}}class b extends g{constructor(t){super(),this.children=t,this.leaf=!1}}/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ })

}]);
//# sourceMappingURL=geometry-support-meshUtils-ElevationSamplerWorker-js-es2015.js.map