(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-engine-vectorTiles-WorkerTileHandler-js"],{

/***/ "+yyC":
/*!**************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/libs/earcut/earcut.js ***!
  \**************************************************************/
/*! exports provided: deviation, earcut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "earcut", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,r,i){const u=r&&r.length,o=u?r[0]*i:e.length;let y=n(e,0,o,i,!0);const p=new Array;if(!y||y.next===y.prev)return p;let c,v,s,h,d;if(u&&(y=function(e,x,r,i){const u=new Array;for(let t=0,r=x.length;t<r;t++){const o=n(e,x[t]*i,t<r-1?x[t+1]*i:e.length,i,!1);o===o.next&&(o.steiner=!0),u.push(l(o))}u.sort(w);for(const e of u)f(e,r),r=t(r,r.next);return r}(e,r,y,i)),e.length>80*i){c=s=e[0],v=h=e[1];for(let n=i;n<o;n+=i){const t=e[n],x=e[n+1];c=Math.min(c,t),v=Math.min(v,x),s=Math.max(s,t),h=Math.max(h,x)}d=Math.max(s-c,h-v),d=0!==d?1/d:0}return x(y,p,i,c,v,d),p}function n(e,n,t,x,r){let i;if(r===s(e,n,t,x)>0)for(let r=n;r<t;r+=x)i=u(r,e[r],e[r+1],i);else for(let r=t-x;r>=n;r-=x)i=u(r,e[r],e[r+1],i);return i&&a(i,i.next)&&(o(i),i=i.next),i}function t(e,n=e){if(!e)return e;let t,x=e;do{if(t=!1,x.steiner||!a(x,x.next)&&0!==c(x.prev,x,x.next))x=x.next;else{if(o(x),x=n=x.prev,x===x.next)break;t=!0}}while(t||x!==n);return n}function x(e,n,u,l,f,p,c=0){if(!e)return;!c&&p&&(e=y(e,l,f,p));let v=e;for(;e.prev!==e.next;){const y=e.prev,s=e.next;if(p?i(e,l,f,p):r(e))n.push(y.index/u),n.push(e.index/u),n.push(s.index/u),o(e),e=s.next,v=s.next;else if((e=s)===v){c?1===c?x(e=g(e,n,u),n,u,l,f,p,2):2===c&&M(e,n,u,l,f,p):x(t(e),n,u,l,f,p,1);break}}}function r(e){const n=e.prev,t=e,x=e.next;if(c(n,t,x)>=0)return!1;let r=e.next.next;const i=r;let u=0;for(;r!==e.prev&&(0===u||r!==i);){if(u++,h(n.x,n.y,t.x,t.y,x.x,x.y,r.x,r.y)&&c(r.prev,r,r.next)>=0)return!1;r=r.next}return!0}function i(e,n,t,x){const r=e.prev,i=e,u=e.next;if(c(r,i,u)>=0)return!1;const o=r.x<i.x?r.x<u.x?r.x:u.x:i.x<u.x?i.x:u.x,l=r.y<i.y?r.y<u.y?r.y:u.y:i.y<u.y?i.y:u.y,f=r.x>i.x?r.x>u.x?r.x:u.x:i.x>u.x?i.x:u.x,y=r.y>i.y?r.y>u.y?r.y:u.y:i.y>u.y?i.y:u.y,p=Z(o,l,n,t,x),v=Z(f,y,n,t,x);let s=e.prevZ,d=e.nextZ;for(;s&&s.z>=p&&d&&d.z<=v;){if(s!==e.prev&&s!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&c(s.prev,s,s.next)>=0)return!1;if(s=s.prevZ,d!==e.prev&&d!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,d.x,d.y)&&c(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;s&&s.z>=p;){if(s!==e.prev&&s!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,s.x,s.y)&&c(s.prev,s,s.next)>=0)return!1;s=s.prevZ}for(;d&&d.z<=v;){if(d!==e.prev&&d!==e.next&&h(r.x,r.y,i.x,i.y,u.x,u.y,d.x,d.y)&&c(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function u(e,n,t,x){const r=new m(e,n,t);return x?(r.next=x.next,r.prev=x,x.next.prev=r,x.next=r):(r.prev=r,r.next=r),r}function o(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function l(e){let n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function f(e,n){if(n=function(e,n){let t=n;const x=e.x,r=e.y;let i,u=-1/0;do{if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const e=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(e<=x&&e>u){if(u=e,e===x){if(r===t.y)return t;if(r===t.next.y)return t.next}i=t.x<t.next.x?t:t.next}}t=t.next}while(t!==n);if(!i)return null;if(x===u)return i.prev;const o=i,l=i.x,f=i.y;let y,p=1/0;t=i.next;for(;t!==o;)x>=t.x&&t.x>=l&&x!==t.x&&h(r<f?x:u,r,l,f,r<f?u:x,r,t.x,t.y)&&(y=Math.abs(r-t.y)/(x-t.x),(y<p||y===p&&t.x>i.x)&&d(t,e)&&(i=t,p=y)),t=t.next;return i}(e,n)){const x=b(n,e);t(x,x.next)}}function y(e,n,t,x){for(let r;r!==e;r=r.next){if(r=r||e,null===r.z&&(r.z=Z(r.x,r.y,n,t,x)),r.prev.next!==r||r.next.prev!==r)return r.prev.next=r,r.next.prev=r,y(e,n,t,x);r.prevZ=r.prev,r.nextZ=r.next}return e.prevZ.nextZ=null,e.prevZ=null,function(e){let n,t=1;for(;;){let x,r=e;e=null,n=null;let i=0;for(;r;){i++,x=r;let u=0;for(;u<t&&x;u++)x=x.nextZ;let o=t;for(;u>0||o>0&&x;){let t;0===u?(t=x,x=x.nextZ,o--):0!==o&&x?r.z<=x.z?(t=r,r=r.nextZ,u--):(t=x,x=x.nextZ,o--):(t=r,r=r.nextZ,u--),n?n.nextZ=t:e=t,t.prevZ=n,n=t}r=x}if(n.nextZ=null,t*=2,i<2)return e}}(e)}function p(e,n,t,x){const r=n&&n.length,i=r?n[0]*t:e.length;let u=Math.abs(s(e,0,i,t));if(r)for(let x=0,r=n.length;x<r;x++){const i=n[x]*t,o=x<r-1?n[x+1]*t:e.length;u-=Math.abs(s(e,i,o,t))}let o=0;for(let n=0;n<x.length;n+=3){const r=x[n]*t,i=x[n+1]*t,u=x[n+2]*t;o+=Math.abs((e[r]-e[u])*(e[i+1]-e[r+1])-(e[r]-e[i])*(e[u+1]-e[r+1]))}return 0===u&&0===o?0:Math.abs((o-u)/u)}function c(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function v(e,n,t,x){return!!(a(e,n)&&a(t,x)||a(e,x)&&a(t,n))||c(e,n,t)>0!=c(e,n,x)>0&&c(t,x,e)>0!=c(t,x,n)>0}function s(e,n,t,x){let r=0;for(let i=n,u=t-x;i<t;i+=x)r+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return r}function h(e,n,t,x,r,i,u,o){return(r-u)*(n-o)-(e-u)*(i-o)>=0&&(e-u)*(x-o)-(t-u)*(n-o)>=0&&(t-u)*(i-o)-(r-u)*(x-o)>=0}function d(e,n){return c(e.prev,e,e.next)<0?c(e,n,e.next)>=0&&c(e,e.prev,n)>=0:c(e,n,e.prev)<0||c(e,e.next,n)<0}function Z(e,n,t,x,r){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*r)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-x)*r)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function a(e,n){return e.x===n.x&&e.y===n.y}function w(e,n){return e.x-n.x}function g(e,n,t){let x=e;do{const r=x.prev,i=x.next.next;!a(r,i)&&v(r,x,x.next,i)&&d(r,i)&&d(i,r)&&(n.push(r.index/t),n.push(x.index/t),n.push(i.index/t),o(x),o(x.next),x=e=i),x=x.next}while(x!==e);return x}function M(e,n,r,i,u,o){let l=e;do{let e=l.next.next;for(;e!==l.prev;){if(l.index!==e.index&&z(l,e)){let f=b(l,e);return l=t(l,l.next),f=t(f,f.next),x(l,n,r,i,u,o),void x(f,n,r,i,u,o)}e=e.next}l=l.next}while(l!==e)}function z(e,n){return e.next.index!==n.index&&e.prev.index!==n.index&&!function(e,n){let t=e;do{if(t.index!==e.index&&t.next.index!==e.index&&t.index!==n.index&&t.next.index!==n.index&&v(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}(e,n)&&d(e,n)&&d(n,e)&&function(e,n){let t=e,x=!1;const r=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&r<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(x=!x),t=t.next}while(t!==e);return x}(e,n)}function b(e,n){const t=new m(e.index,e.x,e.y),x=new m(n.index,n.x,n.y),r=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=r,r.prev=t,x.next=t,t.prev=x,i.next=x,x.prev=i,x}class m{constructor(e,n,t){this.index=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}}


/***/ }),

/***/ "2yHJ":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js ***!
  \**************************************************************************************/
/*! exports provided: COLLISION_GRID_CELL_SIZE, DECLUTTER_BUDGET, DECLUTTER_TILES, FADE_DURATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_GRID_CELL_SIZE", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_BUDGET", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECLUTTER_TILES", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_DURATION", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=!0,t=32,c=1.5,e=200;


/***/ }),

/***/ "3kKw":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/FillBucket.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ArrayPool.js */ "VW+2");
/* harmony import */ var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/libs/earcut/earcut.js */ "+yyC");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/mesh/Tesselator.js */ "6NBT");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BaseBucket.js */ "xN0w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=new _webgl_mesh_Tesselator_js__WEBPACK_IMPORTED_MODULE_3__["default"];class a extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"]{constructor(e,t,l,i,r,n){if(super(e,t),this.type=1,e.hasDataDrivenFill!==l.isDataDriven())throw new Error("incompatible fill buffer");if(e.hasDataDrivenOutline!==r.isDataDriven())throw new Error("incompatible outline buffer");this._fillVertexBuffer=l,this._fillIndexBuffer=i,this._outlineVertexBuffer=r,this._outlineIndexBuffer=n}get fillIndexStart(){return this._fillIndexStart}get fillIndexCount(){return this._fillIndexCount}get outlineIndexStart(){return this._outlineIndexStart}get outlineIndexCount(){return this._outlineIndexCount}processFeatures(e){this._fillIndexStart=3*this._fillIndexBuffer.index,this._fillIndexCount=0,this._outlineIndexStart=3*this._outlineIndexBuffer.index,this._outlineIndexCount=0;const t=this.layer,l=this.zoom,i=t.hasDataDrivenFill,r=t.hasDataDrivenOutline;e&&e.setExtent(this.layerExtent);const n=t.getPaintValue("fill-pattern",l);let o=t.getPaintValue("fill-antialias",l)&&void 0===n,a=[1,1,1,1],s=[1,1,1,1],f=1;if(t.outlineUsesFillColor){if(o&&!t.hasDataDrivenOpacity){const e=t.getPaintValue("fill-opacity",l),i=t.getPaintValue("fill-opacity",l+1);e<1&&i<1&&(o=!1)}if(o&&!t.hasDataDrivenColor){const e=t.getPaintValue("fill-color",l),i=t.getPaintValue("fill-color",l+1);e[3]<1&&i[3]<1&&(o=!1)}}for(const u of this._features){let h,d;!n&&t.hasDataDrivenColor&&(a=t.getPaintValue("fill-color",l,u)),t.hasDataDrivenOpacity&&(f=t.getPaintValue("fill-opacity",l,u)),!n&&t.hasDataDrivenOutlineColor&&(s=t.getPaintValue("fill-outline-color",l,u)),i&&(h={color:a,opacity:f}),r&&(d={color:t.outlineUsesFillColor?a:s,opacity:f});const x=u.getGeometry(e),y=null==e?void 0:e.validateTessellation;this._processFeature(x,o,t.outlineUsesFillColor,h,d,y)}}serialize(){let e=12;e+=this.layerUIDs.length,e+=this._fillVertexBuffer.array.length,e+=this._fillIndexBuffer.array.length,e+=this._outlineVertexBuffer.array.length,e+=this._outlineIndexBuffer.array.length;let t=0;const l=new Uint32Array(e),i=new Int32Array(l.buffer);l[t++]=this.type,l[t++]=this.layerUIDs.length;for(let e=0;e<this.layerUIDs.length;e++)l[t++]=this.layerUIDs[e];l[t++]=this._fillIndexStart,l[t++]=this._fillIndexCount,l[t++]=this._outlineIndexStart,l[t++]=this._outlineIndexCount,l[t++]=this._fillVertexBuffer.isDataDriven()?1:0,l[t++]=this._outlineVertexBuffer.isDataDriven()?1:0,l[t++]=this._fillVertexBuffer.array.length;for(let e=0;e<this._fillVertexBuffer.array.length;e++)i[t++]=this._fillVertexBuffer.array[e];l[t++]=this._fillIndexBuffer.array.length;for(let e=0;e<this._fillIndexBuffer.array.length;e++)l[t++]=this._fillIndexBuffer.array[e];l[t++]=this._outlineVertexBuffer.array.length;for(let e=0;e<this._outlineVertexBuffer.array.length;e++)i[t++]=this._outlineVertexBuffer.array[e];l[t++]=this._outlineIndexBuffer.array.length;for(let e=0;e<this._outlineIndexBuffer.array.length;e++)l[t++]=this._outlineIndexBuffer.array[e];return l.buffer}_processFeature(e,t,l,i,r,n){if(!e)return;const o=e.length;if(t&&(!l||!r||r.color[3]*r.opacity==1))for(let t=0;t<o;t++)this._processOutline(e[t],r);let s;for(let t=0;t<o;t++){const l=a._area(e[t]);l>128?(void 0!==s&&this._processFill(e,s,i,n),s=[t]):l<-128&&void 0!==s&&s.push(t)}void 0!==s&&this._processFill(e,s,i,n)}_processOutline(e,t){const l=this._outlineVertexBuffer,r=this._outlineIndexBuffer,n=r.index;let o,a,s;const f=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0),u=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0),h=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](0,0);let d=-1,x=-1,y=-1,c=-1,_=-1,g=!1;let I=e.length;if(I<2)return;const p=e[0];let B=e[I-1];for(;I&&B.isEqual(p);)--I,B=e[I-1];if(!(I-0<2)){for(let i=0;i<I;++i){0===i?(o=e[I-1],a=e[0],s=e[1],f.assignSub(a,o),f.normalize(),f.rightPerpendicular()):(o=a,a=s,s=i!==I-1?e[i+1]:e[0],f.assign(u));const n=this._isClipEdge(o,a);-1===c&&(g=n),u.assignSub(s,a),u.normalize(),u.rightPerpendicular();const p=f.x*u.y-f.y*u.x;h.assignAdd(f,u),h.normalize();const B=-h.x*-f.x+-h.y*-f.y;let D=Math.abs(0!==B?1/B:1);D>8&&(D=8),p>=0?(y=l.add(a.x,a.y,f.x,f.y,0,1,t),-1===c&&(c=y),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),x=l.add(a.x,a.y,D*-h.x,D*-h.y,0,-1,t),-1===_&&(_=x),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),d=x,x=y,y=l.add(a.x,a.y,h.x,h.y,0,1,t),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),x=l.add(a.x,a.y,u.x,u.y,0,1,t),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y)):(y=l.add(a.x,a.y,D*h.x,D*h.y,0,1,t),-1===c&&(c=y),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),x=l.add(a.x,a.y,-f.x,-f.y,0,-1,t),-1===_&&(_=x),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),d=x,x=y,y=l.add(a.x,a.y,-h.x,-h.y,0,-1,t),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y),d=l.add(a.x,a.y,-u.x,-u.y,0,-1,t),d>=0&&x>=0&&y>=0&&!n&&r.add(d,x,y))}d>=0&&x>=0&&c>=0&&!g&&r.add(d,x,c),d>=0&&c>=0&&_>=0&&!g&&r.add(d,_,c),this._outlineIndexCount+=3*(r.index-n)}}_processFill(i,r,n,a){let s;r.length>1&&(s=[]);let f=0;for(const e of r)0!==f&&s.push(f),f+=i[e].length;const u=2*f,h=_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].acquire();for(const e of r){const t=i[e],l=t.length;for(let e=0;e<l;++e)h.push(t[e].x,t[e].y)}const d=Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["earcut"])(h,s,2);if(a&&Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_1__["deviation"])(h,s,2,d)>0){const e=[],t=[];if(function(e,t,l,i){let r,n;o.beginPolygon(e,t);for(const e of i){const t=l[e];if(!(t.length<3)){o.beginContour();for(let e=0;e<t.length;++e){r=t[e].x,n=t[e].y;const l=[r,n,0];o.addVertex(l,l)}o.endContour()}}o.endPolygon()}(e,t,i,r),t.length>0){const l=this._fillVertexBuffer.index;let i=0;for(;i<e.length;)this._fillVertexBuffer.add(e[i++],e[i++],n);let r=0;for(;r<t.length;)this._fillIndexBuffer.add(l+t[r+0],l+t[r+1],l+t[r+2]),r+=3;this._fillIndexCount+=t.length}}else{const e=d.length;if(e>0){const t=this._fillVertexBuffer.index;let l=0;for(;l<u;)this._fillVertexBuffer.add(h[l++],h[l++],n);let i=0;for(;i<e;)this._fillIndexBuffer.add(t+d[i++],t+d[i++],t+d[i++]);this._fillIndexCount+=e}}_core_ArrayPool_js__WEBPACK_IMPORTED_MODULE_0__["default"].release(h)}_isClipEdge(e,t){return e.x===t.x?e.x<=-64||e.x>=4160:e.y===t.y&&(e.y<=-64||e.y>=4160)}static _area(e){let t=0;const l=e.length-1;for(let i=0;i<l;i++)t+=(e[i].x-e[i+1].x)*(e[i].y+e[i+1].y);return t+=(e[l].x-e[0].x)*(e[l].y+e[0].y),.5*t}}/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "4FHc":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/IndexMemoryBuffer.js ***!
  \************************************************************************************/
/*! exports provided: PointElementMemoryBuffer, TriangleIndexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointElementMemoryBuffer", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriangleIndexBuffer", function() { return r; });
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(12)}add(s,r,t){const e=this.array;e.push(s),e.push(r),e.push(t)}}class t extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(){super(4)}add(s){this.array.push(s)}}


/***/ }),

/***/ "8NBV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SourceLayerData.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(t){for(this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();t.next();)switch(t.tag()){case 1:this.name=t.getString();break;case 3:this.keys.push(t.getString());break;case 4:this.values.push(t.processMessage(e._parseValue));break;case 5:this.extent=t.getUInt32();break;default:t.skip()}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip()}return null}}/* harmony default export */ __webpack_exports__["default"] = (e);


/***/ }),

/***/ "HQFP":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
  \**************************************************************************/
/*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_2PI", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_INFINITY", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degToByte", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log2", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positiveMod", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radToByte", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqr", function() { return T; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=Number.POSITIVE_INFINITY,t=Math.PI,r=2*t,u=t/2,o=128/t,e=t/128,c=256/360,f=t/180,i=1.414213562,I=1/1.414213562,N=1/Math.LN2;function a(n,t){return(n%=t)>=0?n:n+t}function h(n){return a(n*o,256)}function M(n){return a(.7111111111111111*n,256)}function P(n){return Math.log(n)*N}function T(n){return n*n}function b(n,t,r){return n*(1-r)+t*r}function g(n,t,r){return n>=t&&n<=r||n>=r&&n<=t}


/***/ }),

/***/ "IMID":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTile.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Placement.js */ "ixhk");
/* harmony import */ var _TileParser_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TileParser.js */ "mKU8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,t,i,n){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED,this.placementEngine=new _Placement_js__WEBPACK_IMPORTED_MODULE_3__["PlacementEngine"],this.tileKey=e,this.refKeys=t,this._workerTileHandler=i,this._styleRepository=n}release(){this.tileKey="",this.refKeys=null,this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INITIALIZED,this._workerTileHandler=null}async parse(r,i,n){const a=n&&n.signal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(a)){const e=()=>{a.removeEventListener("abort",e),this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID};a.addEventListener("abort",e)}let o;try{o=await this._parse(r,n)}catch(e){if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(e))throw e;return{result:[],transferList:[]}}this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].READY;const l=[];for(const e of o){const t=e.serialize();l.push(t)}return{result:l,transferList:l.length<=i&&l}}setObsolete(){this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].INVALID}getLayers(){return this._workerTileHandler.getLayers()}getWorkerTileHandler(){return this._workerTileHandler}async _parse(e,t){const r=e.sourceName2DataAndRefKey;if(0===Object.keys(r).length)return[];this.status=_tiling_enums_js__WEBPACK_IMPORTED_MODULE_2__["TileStatus"].MODIFIED;return new _TileParser_js__WEBPACK_IMPORTED_MODULE_4__["default"](r,this,t.client,this._styleRepository,e.styleLayerUIDs).parse(t)}});


/***/ }),

/***/ "IqUe":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/LineBucket.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webgl/mesh/templates/util.js */ "aixI");
/* harmony import */ var _webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/TurboLine.js */ "Jimw");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BaseBucket.js */ "xN0w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=e=>t=>{t.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,t.prevNormal.x,t.prevNormal.y,0,-1,t.distance,e._ddValues),t.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,-t.prevNormal.x,-t.prevNormal.y,0,1,t.distance,e._ddValues),t.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,t.nextNormal.x,t.nextNormal.y,0,-1,t.distance,e._ddValues),t.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(t.currentVertex.x,t.currentVertex.y,-t.nextNormal.x,-t.nextNormal.y,0,1,t.distance,e._ddValues)},s=e=>t=>{e._lineIndexBuffer.add(t.leftExit0,t.rightEntry0,t.leftExit2),e._lineIndexBuffer.add(t.rightEntry0,t.rightEntry2,t.leftExit2)},x=e=>r=>{const n=2===e._joinType?e._miterLimitCosine:e._roundLimitCosine,i=r.isCap&&0!==e._capType;let l=!1;r.cosine>.97?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)):r.cosine<1-.97?(r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.canSplit?(Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["splitVertex"])(),r.sign>0?(r.splitInner?(r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftInner.x,r.leftInner.y,0,-1,r.distance,e._ddValues),r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightInner.x,r.rightInner.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)),r.cosine<n?(l=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):r.splitOuter?(l=l||r.gapOuter,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftOuter.x,-r.leftOuter.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightOuter.x,-r.rightOuter.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.splitInner?(r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.leftInner.x,-r.leftInner.y,0,1,r.distance,e._ddValues),r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.rightInner.x,-r.rightInner.y,0,1,r.distance,e._ddValues)):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues)),r.cosine<n?(l=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):r.splitOuter?(l=l||r.gapOuter,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.leftOuter.x,r.leftOuter.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.rightOuter.x,r.rightOuter.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)))):r.sign>0?(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues),r.cosine<n?(l=!r.isCap,r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x,-r.prevNormal.y,0,1,r.distance,e._ddValues),r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.nextNormal.x,-r.nextNormal.y,0,1,r.distance,e._ddValues)):(r.entry2=r.exit2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues))):(r.exit2=r.entry2=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.bisector.x/r.cosine,-r.bisector.y/r.cosine,0,1,r.distance,e._ddValues),r.cosine<n?(l=!r.isCap,r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x,r.prevNormal.y,0,-1,r.distance,e._ddValues),r.exit0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.nextNormal.x,r.nextNormal.y,0,-1,r.distance,e._ddValues)):(r.exit0=r.entry0=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.bisector.x/r.cosine,r.bisector.y/r.cosine,0,-1,r.distance,e._ddValues)));let s;if(r.canSplit&&(r.splitInner||r.splitOuter)||l||i?(s=r.entry1=r.exit1=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,0,0,0,0,r.distance,e._ddValues)):s=r.entry1=r.exit1=null,l&&1!==e._joinType)e._lineIndexBuffer.add(s,r.sign>0?r.exit2:r.entry0,r.sign>0?r.entry2:r.exit0);else if(i&&1===e._capType||l&&1===e._joinType){let t,n,i,l,x,a;if(r.isCap){const e=Math.PI;x=Math.ceil(e/.8),a=e/x,r.isFirstVertex?(t=r.prevNormal.x,n=r.prevNormal.y,i=r.entry0,l=r.entry2):r.isLastVertex&&(t=-r.nextNormal.x,n=-r.nextNormal.y,i=r.exit2,l=r.exit0)}else{const e=2*Math.acos(r.cosine);x=Math.ceil(e/.8),a=e/x,t=r.sign>0?-r.prevNormal.x:r.nextNormal.x,n=r.sign>0?-r.prevNormal.y:r.nextNormal.y,i=r.sign>0?r.entry2:r.exit0,l=r.sign>0?r.exit2:r.entry0}const d=Math.cos(a),u=Math.sin(a),f=u*t+d*n;let o,c;t=d*t-u*n,n=f;for(let a=0;a<x;++a){if(o=c,a<x-1)if(r.isCap){const i=r.isFirstVertex?-1:1;c=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,t,n,i,0,r.distance,e._ddValues)}else c=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,t,n,0,r.sign,r.distance,e._ddValues);e._lineIndexBuffer.add(0===a?i:o,s,a===x-1?l:c);const f=u*t+d*n;t=d*t-u*n,n=f}}else if(i&&2===e._capType){const t=r.isFirstVertex?1:-1;let n,i;e._hasPattern?(n=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-t*r.inbound.x,r.prevNormal.y-t*r.inbound.y,-t,-1,r.distance,e._ddValues),i=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-t*r.inbound.x,-r.prevNormal.y-t*r.inbound.y,-t,1,r.distance,e._ddValues)):(n=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,r.prevNormal.x-t*r.inbound.x,r.prevNormal.y-t*r.inbound.y,0,-1,r.distance,e._ddValues),i=e._lineVertexBuffer.index,e._lineVertexBuffer.add(r.currentVertex.x,r.currentVertex.y,-r.prevNormal.x-t*r.inbound.x,-r.prevNormal.y-t*r.inbound.y,0,1,r.distance,e._ddValues)),t>0?(e._lineIndexBuffer.add(s,r.entry2,i),e._lineIndexBuffer.add(s,i,n),e._lineIndexBuffer.add(s,n,r.entry0)):(e._lineIndexBuffer.add(s,i,r.exit2),e._lineIndexBuffer.add(s,n,i),e._lineIndexBuffer.add(s,r.exit0,n))}},a=e=>t=>{e._lineIndexBuffer.add(t.leftExit0,t.rightEntry0,null!=t.leftExit1?t.leftExit1:t.leftExit2),e._lineIndexBuffer.add(t.rightEntry0,null!=t.rightEntry1?t.rightEntry1:t.rightEntry2,null!=t.leftExit1?t.leftExit1:t.leftExit2),null!=t.leftExit1&&null!=t.rightEntry1?(e._lineIndexBuffer.add(t.leftExit1,t.rightEntry1,t.leftExit2),e._lineIndexBuffer.add(t.rightEntry1,t.rightEntry2,t.leftExit2)):null!=t.leftExit1?e._lineIndexBuffer.add(t.leftExit1,t.rightEntry2,t.leftExit2):null!=t.rightEntry1&&e._lineIndexBuffer.add(t.rightEntry1,t.rightEntry2,t.leftExit2)};/* harmony default export */ __webpack_exports__["default"] = (class extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e,t,r,n){if(super(e,t),this.type=2,this._tessellationOptions={},this.tessellationProperties={_lineVertexBuffer:null,_lineIndexBuffer:null,_hasPattern:null,_ddValues:null,_capType:null,_joinType:null,_miterLimitCosine:null,_roundLimitCosine:null},e.hasDataDrivenLine!==r.isDataDriven())throw new Error("incompatible line buffer");this.tessellationProperties._lineVertexBuffer=r,this.tessellationProperties._lineIndexBuffer=n,this.tessellationProperties._hasPattern=e.getPaintValue("line-pattern",this.zoom)||e.getPaintValue("line-dasharray",this.zoom).length>0,this._isThinLine=e.isThinLine,this._isThinLine?this._tessellationCallbacks={vertex:l(this.tessellationProperties),bridge:s(this.tessellationProperties)}:this._tessellationCallbacks={vertex:x(this.tessellationProperties),bridge:a(this.tessellationProperties)}}get lineIndexStart(){return this._lineIndexStart}get lineIndexCount(){return this._lineIndexCount}processFeatures(t){this._lineIndexStart=3*this.tessellationProperties._lineIndexBuffer.index,this._lineIndexCount=0;const n=this.layer,i=this.zoom,l=n.hasDataDrivenLine;t&&t.setExtent(this.layerExtent);let s=[1,1,1,1],x=1,a=1;for(const r of this._features){let d;if(!this.tessellationProperties._hasPattern&&n.hasDataDrivenColor&&(s=n.getPaintValue("line-color",i,r)),n.hasDataDrivenOpacity&&(x=n.getPaintValue("line-opacity",i,r)),n.hasDataDrivenWidth&&(a=n.getPaintValue("line-width",i,r)),l&&(d={color:s,opacity:x,size:Math.max(Math.min(a,256),0)},d.size<=0||d.opacity<=0||d.color[3]<=0))continue;this.tessellationProperties._capType=n.getLayoutValue("line-cap",i,r),this.tessellationProperties._joinType=n.getLayoutValue("line-join",i,r),this.tessellationProperties._miterLimitCosine=Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__["getLimitCosine"])(n.getLayoutValue("line-miter-limit",i,r)),this.tessellationProperties._roundLimitCosine=Object(_webgl_mesh_templates_util_js__WEBPACK_IMPORTED_MODULE_1__["getLimitCosine"])(n.getLayoutValue("line-round-limit",i,r));const u=r.getGeometry(t);this._processFeature(u,d)}Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["cleanup"])()}serialize(){let e=7;e+=this.layerUIDs.length,e+=this.tessellationProperties._lineVertexBuffer.array.length,e+=this.tessellationProperties._lineIndexBuffer.array.length;let t=0;const r=new Uint32Array(e),n=new Int32Array(r.buffer);r[t++]=this.type,r[t++]=this.layerUIDs.length;for(let e=0;e<this.layerUIDs.length;e++)r[t++]=this.layerUIDs[e];r[t++]=this._lineIndexStart,r[t++]=this._lineIndexCount,r[t++]=this.tessellationProperties._lineVertexBuffer.isDataDriven()?1:0,r[t++]=this.tessellationProperties._lineVertexBuffer.array.length;for(let e=0;e<this.tessellationProperties._lineVertexBuffer.array.length;e++)n[t++]=this.tessellationProperties._lineVertexBuffer.array[e];r[t++]=this.tessellationProperties._lineIndexBuffer.array.length;for(let e=0;e<this.tessellationProperties._lineIndexBuffer.array.length;e++)r[t++]=this.tessellationProperties._lineIndexBuffer.array[e];return r.buffer}_processFeature(e,t){if(!e)return;const r=e.length;for(let n=0;n<r;n++)this._processGeometry(e[n],t)}_processGeometry(e,t){if(e.length<2)return;let r,i,l=e[0],s=1;for(;s<e.length;)r=e[s].x-l.x,i=e[s].y-l.y,r*r+i*i<1e-6?e.splice(s,1):(l=e[s],++s);if(e.length<2)return;const x=3*this.tessellationProperties._lineIndexBuffer.index;this._tessellationOptions.trackDistance=this.tessellationProperties._hasPattern,this._tessellationOptions.initialDistance=0,this._tessellationOptions.thin=this._isThinLine,this._tessellationOptions.wrapDistance=65535,this._tessellationOptions.outerBisectorAutoSplitThreshold=.2631578947368421,this._tessellationOptions.enableOuterBisectorSplit=this.tessellationProperties._hasPattern,this._tessellationOptions.innerBisectorAutoSplitThreshold=.2631578947368421,this._tessellationOptions.enableInnerBisectorSplit=this.tessellationProperties._hasPattern,this.tessellationProperties._ddValues=t,Object(_webgl_TurboLine_js__WEBPACK_IMPORTED_MODULE_2__["tessellate"])(e,this._tessellationOptions,this._tessellationCallbacks),this._lineIndexCount+=3*this.tessellationProperties._lineIndexBuffer.index-x}});


/***/ }),

/***/ "VLY0":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/WorkerTileHandler.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/StyleRepository.js */ "kB7V");
/* harmony import */ var _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkerTile.js */ "IMID");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._spriteInfo={},this._glyphInfo={}}reset(){return this._spriteInfo={},this._glyphInfo={},Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])()}getLayers(){var e;return null==(e=this._styleRepository)?void 0:e.layers}async createTileAndParse(e,s){const{key:o}=e,i={};for(const t of Object.keys(e.sourceName2DataAndRefKey)){const s=e.sourceName2DataAndRefKey[t];i[t]=s.refKey}const n=new _WorkerTile_js__WEBPACK_IMPORTED_MODULE_2__["default"](o,i,this,this._styleRepository);try{return await n.parse(e,this._vectorTileLayerMaxBuffers,s)}catch(e){if(n.setObsolete(),n.release(),!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAbortError"])(e))throw e;return null}}updateStyle(e){if(!e||0===e.length||!this._styleRepository)return;const t=this._styleRepository;for(const s of e){const e=s.type,r=s.data;switch(e){case 0:t.setPaintProperties(r.layer,r.paint);break;case 1:t.setLayoutProperties(r.layer,r.layout);break;case 3:t.deleteStyleLayer(r.layerName);break;case 2:t.setStyleLayer(r.layer,r.index)}}}setStyle(e){this._styleRepository=new _style_StyleRepository_js__WEBPACK_IMPORTED_MODULE_1__["default"](e.style),this._spriteInfo={},this._glyphInfo={},this._vectorTileLayerMaxBuffers=e.vectorTileLayerMaxBuffers}fetchSprites(t,s,r){const o=[],i=this._spriteInfo;return t.forEach((e=>{void 0===i[e]&&o.push(e)})),0===o.length?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])():s.invoke("getSprites",o,{signal:r&&r.signal}).then((e=>{for(const t in e){const s=e[t];i[t]=s}}))}getSpriteItems(){return this._spriteInfo}fetchGlyphs(t,s,r,o,i){const n=[];let a=this._glyphInfo[s];return a?r.forEach((e=>{a[e]||n.push(e)})):(a=this._glyphInfo[s]=[],r.forEach((e=>n.push(e)))),0===n.length?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])():o.invoke("getGlyphs",{tileID:t,font:s,codePoints:n},i).then((e=>{for(let t=0;t<e.length;t++)e[t]&&(a[t]=e[t])}))}getGlyphItems(e){return this._glyphInfo[e]}});


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

/***/ "Z7lw":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/CircleBucket.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseBucket.js */ "xN0w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_0__["default"]{constructor(e,t,r,i){super(e,t),this.type=4,this._circleVertexBuffer=r,this._circleIndexBuffer=i}get circleIndexStart(){return this._circleIndexStart}get circleIndexCount(){return this._circleIndexCount}processFeatures(e){const t=this._circleVertexBuffer,r=this._circleIndexBuffer;this._circleIndexStart=3*r.index,this._circleIndexCount=0;const i=this.layer,a=this.zoom;e&&e.setExtent(this.layerExtent);let c=1,s=[1,1,1,1],l=1,n=0,h=1,o=[1,1,1,1],f=1;for(const u of this._features){const d=u.getGeometry(e);if(d){i.hasDataDrivenRadius&&(c=i.getPaintValue("circle-radius",a,u)),i.hasDataDrivenColor&&(s=i.getPaintValue("circle-color",a,u)),i.hasDataDrivenOpacity&&(l=i.getPaintValue("circle-opacity",a,u)),i.hasDataDrivenStrokeWidth&&(h=i.getPaintValue("circle-stroke-width",a,u)),i.hasDataDrivenStrokeColor&&(o=i.getPaintValue("circle-stroke-color",a,u)),i.hasDataDrivenStrokeOpacity&&(f=i.getPaintValue("circle-stroke-opacity",a,u)),i.hasDataDrivenBlur&&(n=i.getPaintValue("circle-blur",a,u));for(const e of d)if(e)for(const i of e){const e=t.index;t.add(i.x,i.y,0,0,c,s,l,n,h,o,f),t.add(i.x,i.y,0,1,c,s,l,n,h,o,f),t.add(i.x,i.y,1,0,c,s,l,n,h,o,f),t.add(i.x,i.y,1,1,c,s,l,n,h,o,f),r.add(e+0,e+1,e+2),r.add(e+1,e+2,e+3),this._circleIndexCount+=6}}}}serialize(){let e=6;e+=this.layerUIDs.length,e+=this._circleVertexBuffer.array.length,e+=this._circleIndexBuffer.array.length;let t=0;const r=new Uint32Array(e),i=new Int32Array(r.buffer);r[t++]=this.type,r[t++]=this.layerUIDs.length;for(let e=0;e<this.layerUIDs.length;e++)r[t++]=this.layerUIDs[e];r[t++]=this._circleIndexStart,r[t++]=this._circleIndexCount,r[t++]=this._circleVertexBuffer.array.length;for(let e=0;e<this._circleVertexBuffer.array.length;e++)i[t++]=this._circleVertexBuffer.array[e];r[t++]=this._circleIndexBuffer.array.length;for(let e=0;e<this._circleIndexBuffer.array.length;e++)r[t++]=this._circleIndexBuffer.array[e];return r.buffer}});


/***/ }),

/***/ "Zcxi":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Feature.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,t){this.values={};const s=t.keys,r=t.values;for(;e.next();)switch(e.tag()){case 1:this.id=e.getUInt64();break;case 2:{const t=e.getMessage(),o=this.values;for(;!t.empty();){const e=t.getUInt32(),a=t.getUInt32();o[s[e]]=r[a]}t.release();break}case 3:this.type=e.getUInt32();break;case 4:this._pbfGeometry=e.getMessage();break;default:e.skip()}}getGeometry(t){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;const s=this._pbfGeometry;let r,o;this._pbfGeometry=null,t?t.reset(this.type):r=[];let a,n=1,i=0,l=0,h=0;for(;!s.empty();){if(0===i){const e=s.getUInt32();n=7&e,i=e>>3}switch(i--,n){case 1:l+=s.getSInt32(),h+=s.getSInt32(),t?t.moveTo(l,h):(o&&r.push(o),o=[],o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h)));break;case 2:l+=s.getSInt32(),h+=s.getSInt32(),t?t.lineTo(l,h):o.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_0__["Point"](l,h));break;case 7:t?t.close():o&&!o[0].equals(l,h)&&o.push(o[0].clone());break;default:throw s.release(),new Error("Invalid path operation")}}return t?a=t.result():(o&&r.push(o),a=r),s.release(),this._geometry=a,a}});


/***/ }),

/***/ "i0/R":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/SymbolBucket.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/string.js */ "s7YA");
/* harmony import */ var _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/BidiEngine.js */ "179/");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/StyleLayer.js */ "Ip4x");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BaseBucket.js */ "xN0w");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextShaping.js */ "ynYs");
/* harmony import */ var _Placement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Placement.js */ "ixhk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function y(e,t){return e.iconMosaicItem&&t.iconMosaicItem?e.iconMosaicItem.page===t.iconMosaicItem.page?0:e.iconMosaicItem.page-t.iconMosaicItem.page:e.iconMosaicItem&&!t.iconMosaicItem?1:!e.iconMosaicItem&&t.iconMosaicItem?-1:0}class g extends _BaseBucket_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(e,t,i,n,a,s,o,r){if(super(e,t),this.type=3,this._markerMap=new Map,this._glyphMap=new Map,this._glyphBufferDataStorage=new Map,this._isIconSDF=!1,e.hasDataDrivenIcon!==i.isDataDriven())throw new Error("incompatible icon buffer");if(e.hasDataDrivenText!==a.isDataDriven())throw new Error("incompatible text buffer");this._iconVertexBuffer=i,this._iconIndexBuffer=n,this._textVertexBuffer=a,this._textIndexBuffer=s,this._placementEngine=o,this._workerTileHandler=r}get markerPageMap(){return this._markerMap}get glyphsPageMap(){return this._glyphMap}get symbolInstances(){return this._symbolInstances}getResources(t,i,n){const a=this.layer,s=this.zoom,o=a.hasDataDrivenIcon,r=a.hasDataDrivenText;t&&t.setExtent(this.layerExtent);const l=a.getLayoutProperty("icon-image"),h=a.getLayoutProperty("text-field"),x=[];let c,d,f,y,u,m,p,_,M,I,b=[1,1,1,1],P=1,V=1,A=[1,1,1,1],L=1,w=1;for(const D of this._features){const z=D.getGeometry(t);if(!z||0===z.length)continue;let B,C;l&&(B=a.getLayoutValue("icon-image",s,D),l.isDataDriven||(B=this._replaceKeys(B,D.values)),B&&(i.add(B),c=a.getLayoutValue("icon-rotate",s,D),d=a.getLayoutValue("icon-anchor",s,D),f=a.getLayoutValue("icon-offset",s,D)));let S=!1;if(h&&(C=a.getLayoutValue("text-field",s,D),C&&!h.isDataDriven&&(C=this._replaceKeys(C,D.values)),C)){C=C.replace(/\\n/g,"\n");switch(a.getLayoutValue("text-transform",s,D)){case 2:C=C.toLowerCase();break;case 1:C=C.toUpperCase()}if(g._bidiEngine.hasBidiChar(C)){let e;e="rtl"===g._bidiEngine.checkContextual(C)?"IDNNN":"ICNNN",C=g._bidiEngine.bidiTransform(C,e,"VLYSN"),S=!0}const e=C.length;if(e>0){I=a.getLayoutValue("text-font",s,D);for(const t of I){let i=n[t];i||(i=n[t]=new Set);for(let t=0;t<e;t++){const e=C.charCodeAt(t);i.add(e)}}y=a.getLayoutValue("text-rotate",s,D),u=a.getLayoutValue("text-anchor",s,D),m=a.getLayoutValue("text-offset",s,D),p=a.getLayoutValue("text-justify",s,D),_=a.getLayoutValue("text-letter-spacing",s,D),M=a.getLayoutValue("text-max-width",s,D)}}if(!B&&!C)continue;const R=a.getLayoutValue("icon-size",s,D),v=a.getLayoutValue("text-size",s,D);a.hasDataDrivenIconColor&&(b=a.getPaintValue("icon-color",s,D)),a.hasDataDrivenIconOpacity&&(P=a.getPaintValue("icon-opacity",s,D)),a.hasDataDrivenIconSize&&(V=R),a.hasDataDrivenTextColor&&(A=a.getPaintValue("text-color",s,D)),a.hasDataDrivenTextOpacity&&(L=a.getPaintValue("text-opacity",s,D)),a.hasDataDrivenTextSize&&(w=v);const k=a.getLayoutValue("symbol-sort-key",s,D),T={sprite:B,label:C,rtl:S,type:D.type,geometry:z,hash:(C?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(C):0)^(B?Object(_core_string_js__WEBPACK_IMPORTED_MODULE_0__["numericHash"])(B):0),priority:k,iconSize:R,iconRotate:c,ddIconValues:o?{color:b,opacity:P,size:V}:null,iconAnchor:d,iconOffset:f,textSize:v,textRotate:y,ddTextValues:r?{color:A,opacity:L,size:w}:null,textAnchor:u,textOffset:m,textJustify:p,textLetterSpacing:_,textMaxWidth:M,textFontArray:I};x.push(T)}this._symbolFeatures=x}processFeatures(e){e&&e.setExtent(this.layerExtent);const t=this.layer,n=this.zoom,a=t.getLayoutValue("symbol-placement",n),r=0!==a,l=t.getLayoutValue("symbol-spacing",n)*_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"],u=t.getLayoutProperty("icon-image"),m=t.getLayoutProperty("text-field"),p=u?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["IconLayout"](t,n,r):null,_=m?new _style_StyleLayer_js__WEBPACK_IMPORTED_MODULE_3__["TextLayout"](t,n,r):null,M=this._workerTileHandler;let I;u&&(I=M.getSpriteItems()),this._iconIndexStart=3*this._iconIndexBuffer.index,this._textIndexStart=3*this._textIndexBuffer.index,this._iconIndexCount=0,this._textIndexCount=0,this._markerMap.clear(),this._glyphMap.clear();const b=[];let P=1;_&&_.size&&(P=_.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"]);const V=_?_.maxAngle*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["C_DEG_TO_RAD"]:0,A=_?_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"]:0;for(const e of this._symbolFeatures){let t;p&&I&&e.sprite&&(t=I[e.sprite],t&&t.sdf&&(this._isIconSDF=!0));let i;!!t&&(p.size=e.iconSize,p.rotate=e.iconRotate,p.offset=e.iconOffset);let n=0;const s=e.label;if(s){_.size=e.textSize,_.rotate=e.textRotate,_.anchor=e.textAnchor,_.fontArray=e.textFontArray,_.justify=e.textJustify,_.letterSpacing=e.textLetterSpacing,_.maxWidth=e.textMaxWidth,_.offset=e.textOffset;const t=r?_.keepUpright:_.writingMode&&_.writingMode.indexOf(1)>=0;let a=.5;switch(_.anchor){case 5:case 1:case 7:a=0;break;case 6:case 2:case 8:a=1}let o=.5;switch(_.anchor){case 5:case 3:case 6:o=0;break;case 7:case 4:case 8:o=1}let l=.5;switch(_.justify){case 0:l=a;break;case 1:l=0;break;case 3:l=1}const d=_.letterSpacing*_TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"],f=r?0:_.maxWidth*_TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"],y=_.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"];let g,u;if(g=_.fontArray.map((e=>M.getGlyphItems(e))),u=new _TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["TextShaping"](g,f,y,d,a,o,l),i=u.getShaping(s,e.rtl,t),i&&i.length>0){let e=1e30,t=-1e30;for(const n of i)e=Math.min(e,n.x),t=Math.max(t,n.x);n=(t-e+2*_TextShaping_js__WEBPACK_IMPORTED_MODULE_6__["SDF_GLYPH_SIZE"])*P*_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"]}}for(let s of e.geometry){const o=[];if(1===a){if(i&&i.length>0&&_&&_.size){const e=_.size*_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_PIXEL_RATIO"]*(2+Math.min(2,4*Math.abs(_.offset[1])));s=g._smoothVertices(s,e)}g._pushAnchors(o,s,l,n)}else 2===a?g._pushCenterAnchor(o,s):3===e.type?g._pushCentroid(o,s):o.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](s[0].x,s[0].y));for(const a of o){if(a.x<0||a.x>_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_COORD_SIZE"]||a.y<0||a.y>_Placement_js__WEBPACK_IMPORTED_MODULE_7__["TILE_COORD_SIZE"])continue;if(r&&n>0&&0===_.rotationAlignment&&!g._honorsTextMaxAngle(s,a,n,V,A))continue;const o={shaping:i,line:s,iconMosaicItem:t,anchor:a,symbolFeature:e,textColliders:[],iconColliders:[],textVertexRanges:[],iconVertexRanges:[]};b.push(o),this._processFeature(o,p,_)}}}b.sort(y),this._addPlacedGlyphs(),this._symbolInstances=b}serialize(){let e=13;e+=this.layerUIDs.length,e+=3*this.markerPageMap.size,e+=3*this.glyphsPageMap.size,e+=g.symbolsSerializationLength(this._symbolInstances),e+=this._iconVertexBuffer.array.length,e+=this._iconIndexBuffer.array.length,e+=this._textVertexBuffer.array.length,e+=this._textIndexBuffer.array.length;let t=0;const i=new Uint32Array(e),n=new Int32Array(i.buffer),a=new Float32Array(i.buffer);i[t++]=this.type,i[t++]=this.layerUIDs.length;for(let e=0;e<this.layerUIDs.length;e++)i[t++]=this.layerUIDs[e];i[t++]=this._isIconSDF?1:0,i[t++]=this._iconVertexBuffer.isDataDriven()?1:0,i[t++]=this._textVertexBuffer.isDataDriven()?1:0,i[t++]=this.markerPageMap.size,this.markerPageMap.forEach((([e,n],a)=>{i[t++]=a,i[t++]=e,i[t++]=n})),i[t++]=this.glyphsPageMap.size,this.glyphsPageMap.forEach((([e,n],a)=>{i[t++]=a,i[t++]=e,i[t++]=n})),i[t++]=this._iconVertexBuffer.index/4,i[t++]=this._textVertexBuffer.index/4,t=g.serializeSymbols(i,n,a,t,this._symbolInstances),i[t++]=this._iconVertexBuffer.array.length;for(let e=0;e<this._iconVertexBuffer.array.length;e++)n[t++]=this._iconVertexBuffer.array[e];i[t++]=this._iconIndexBuffer.array.length;for(let e=0;e<this._iconIndexBuffer.array.length;e++)i[t++]=this._iconIndexBuffer.array[e];i[t++]=this._textVertexBuffer.array.length;for(let e=0;e<this._textVertexBuffer.array.length;e++)n[t++]=this._textVertexBuffer.array[e];i[t++]=this._textIndexBuffer.array.length;for(let e=0;e<this._textIndexBuffer.array.length;e++)i[t++]=this._textIndexBuffer.array[e];return i.buffer}static symbolsSerializationLength(e){let t=0;t+=1;for(const i of e||[]){t+=4,t+=1;for(const e of i.textColliders)t+=10;for(const e of i.iconColliders)t+=10;t+=1,t+=2*i.textVertexRanges.length,t+=1,t+=2*i.iconVertexRanges.length}return t}static serializeSymbols(e,t,i,n,a){a=a||[],t[n++]=a.length;for(const e of a){t[n++]=e.anchor.x,t[n++]=e.anchor.y,t[n++]=e.symbolFeature.hash,t[n++]=e.symbolFeature.priority,t[n++]=e.textColliders.length+e.iconColliders.length;for(const a of e.textColliders)t[n++]=a.xTile,t[n++]=a.yTile,t[n++]=a.dxPixels,t[n++]=a.dyPixels,t[n++]=a.hard?1:0,t[n++]=a.partIndex,i[n++]=a.minLod,i[n++]=a.maxLod,t[n++]=a.width,t[n++]=a.height;for(const a of e.iconColliders)t[n++]=a.xTile,t[n++]=a.yTile,t[n++]=a.dxPixels,t[n++]=a.dyPixels,t[n++]=a.hard?1:0,t[n++]=a.partIndex,i[n++]=a.minLod,i[n++]=a.maxLod,t[n++]=a.width,t[n++]=a.height;t[n++]=e.textVertexRanges.length;for(const[i,a]of e.textVertexRanges)t[n++]=i,t[n++]=a;t[n++]=e.iconVertexRanges.length;for(const[i,a]of e.iconVertexRanges)t[n++]=i,t[n++]=a}return n}_replaceKeys(e,t){return e.replace(/{([^{}]+)}/g,(function(e,i){return i in t?t[i]:""}))}_processFeature(e,t,i){const a=e.line,s=e.iconMosaicItem,o=e.shaping,r=e.anchor,l=!!s;let h=!0;l&&(h=t.optional||!s);const x=o&&o.length>0;let c,d,f=!0;if(x&&(f=i.optional||!o||0===o.length),l&&(c=this._placementEngine.getIconPlacement(r,s,t)),(c||h)&&(x&&(d=this._placementEngine.getTextPlacement(r,o,a,i)),d||f)){if(c&&d||(f||h?f||d?h||c||(d=null):c=null:(c=null,d=null)),d&&(this._storePlacedGlyphs(e,d.shapes,this.zoom,i.rotationAlignment),d.textColliders)){e.textColliders=d.textColliders;for(const e of d.textColliders){e.minLod=Math.max(this.zoom+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(this.zoom+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const i=Math.cos(t),n=Math.sin(t),a=e.dxPixels*i-e.dyPixels*n,s=e.dxPixels*n+e.dyPixels*i,o=(e.dxPixels+e.width)*i-e.dyPixels*n,r=(e.dxPixels+e.width)*n+e.dyPixels*i,l=e.dxPixels*i-(e.dyPixels+e.height)*n,h=e.dxPixels*n+(e.dyPixels+e.height)*i,x=(e.dxPixels+e.width)*i-(e.dyPixels+e.height)*n,c=(e.dxPixels+e.width)*n+(e.dyPixels+e.height)*i,d=Math.min(a,o,l,x),f=Math.max(a,o,l,x),y=Math.min(s,r,h,c),g=Math.max(s,r,h,c);e.dxPixels=d,e.dyPixels=y,e.width=f-d,e.height=g-y}}}if(c&&(this._addPlacedIcons(e,c.shapes,this.zoom,s.page,1===t.rotationAlignment),c.iconColliders)){e.iconColliders=c.iconColliders;for(const e of c.iconColliders){e.minLod=Math.max(this.zoom+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.minLod),0),e.maxLod=Math.min(this.zoom+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(e.maxLod),25);const t=e.angle;if(t){const i=Math.cos(t),n=Math.sin(t),a=e.dxPixels*i-e.dyPixels*n,s=e.dxPixels*n+e.dyPixels*i,o=(e.dxPixels+e.width)*i-e.dyPixels*n,r=(e.dxPixels+e.width)*n+e.dyPixels*i,l=e.dxPixels*i-(e.dyPixels+e.height)*n,h=e.dxPixels*n+(e.dyPixels+e.height)*i,x=(e.dxPixels+e.width)*i-(e.dyPixels+e.height)*n,c=(e.dxPixels+e.width)*n+(e.dyPixels+e.height)*i,d=Math.min(a,o,l,x),f=Math.max(a,o,l,x),y=Math.min(s,r,h,c),g=Math.max(s,r,h,c);e.dxPixels=d,e.dyPixels=y,e.width=f-d,e.height=g-y}}}}}_addPlacedIcons(e,t,i,a,s){const o=e.symbolFeature.ddIconValues,r=Math.max(i-1,0),l=this._iconVertexBuffer,h=this._iconIndexBuffer,x=this._markerMap;for(const c of t){const t=s?0:Math.max(i+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.minzoom),r),d=s?25:Math.min(i+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(c.maxzoom),25);if(d<=t)continue;const f=c.tl,y=c.tr,g=c.bl,u=c.br,m=c.mosaicRect,p=c.labelAngle,_=c.minAngle,M=c.maxAngle,I=c.anchor,b=l.index,P=m.x,V=m.y,A=P+m.width,L=V+m.height,w=l.index;l.add(I.x,I.y,f.x,f.y,P,V,p,_,M,t,d,o),l.add(I.x,I.y,y.x,y.y,A,V,p,_,M,t,d,o),l.add(I.x,I.y,g.x,g.y,P,L,p,_,M,t,d,o),l.add(I.x,I.y,u.x,u.y,A,L,p,_,M,t,d,o),e.iconVertexRanges.length>0&&e.iconVertexRanges[0][0]+e.iconVertexRanges[0][1]===w?e.iconVertexRanges[0][1]+=4:e.iconVertexRanges.push([w,4]),h.add(b+0,b+1,b+2),h.add(b+1,b+2,b+3),x.has(a)?x.get(a)[1]+=6:x.set(a,[this._iconIndexStart+this._iconIndexCount,6]),this._iconIndexCount+=6}}_addPlacedGlyphs(){const e=this._textVertexBuffer,t=this._textIndexBuffer,i=this._glyphMap;this._glyphBufferDataStorage.forEach(((n,a)=>{for(const s of n){const n=e.index,o=s.symbolInstance,r=o.symbolFeature.ddTextValues,l=e.index;e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tl[0],s.tl[1],s.xmin,s.ymin,s.labelAngle,s.minAngle,s.maxAngle,s.minLod,s.maxLod,r),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.tr[0],s.tr[1],s.xmax,s.ymin,s.labelAngle,s.minAngle,s.maxAngle,s.minLod,s.maxLod,r),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.bl[0],s.bl[1],s.xmin,s.ymax,s.labelAngle,s.minAngle,s.maxAngle,s.minLod,s.maxLod,r),e.add(s.glyphAnchor[0],s.glyphAnchor[1],s.br[0],s.br[1],s.xmax,s.ymax,s.labelAngle,s.minAngle,s.maxAngle,s.minLod,s.maxLod,r),o.textVertexRanges.length>0&&o.textVertexRanges[0][0]+o.textVertexRanges[0][1]===l?o.textVertexRanges[0][1]+=4:o.textVertexRanges.push([l,4]),t.add(n+0,n+1,n+2),t.add(n+1,n+2,n+3),i.has(a)?i.get(a)[1]+=6:i.set(a,[this._textIndexStart+this._textIndexCount,6]),this._textIndexCount+=6}})),this._glyphBufferDataStorage.clear()}_storePlacedGlyphs(e,t,i,a){const s=Math.max(i-1,0),o=1===a;let r,l,h,x,c,d,f,y,g,u,m;for(const a of t){if(r=o?0:Math.max(i+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(a.minzoom),s),l=o?25:Math.min(i+Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["log2"])(a.maxzoom),25),l<=r)continue;h=a.tl,x=a.tr,c=a.bl,d=a.br,f=a.labelAngle,y=a.minAngle,g=a.maxAngle,u=a.anchor,m=a.mosaicRect,this._glyphBufferDataStorage.has(a.page)||this._glyphBufferDataStorage.set(a.page,[]);this._glyphBufferDataStorage.get(a.page).push({glyphAnchor:[u.x,u.y],tl:[h.x,h.y],tr:[x.x,x.y],bl:[c.x,c.y],br:[d.x,d.y],xmin:m.x,ymin:m.y,xmax:m.x+m.width,ymax:m.y+m.height,labelAngle:f,minAngle:y,maxAngle:g,minLod:r,maxLod:l,placementLod:s,symbolInstance:e})}}static _pushAnchors(e,t,i,n){i+=n;let s=0;const o=t.length-1;for(let e=0;e<o;e++)s+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[e],t[e+1]);let l=n||i;if(l*=.5,s<=l)return;const h=l/s;let x=0,c=-(i=s/Math.max(Math.round(s/i),1))/2;const f=t.length-1;for(let n=0;n<f;n++){const s=t[n],o=t[n+1],r=o.x-s.x,l=o.y-s.y,f=Math.sqrt(r*r+l*l);let y;for(;c+i<x+f;){c+=i;const t=(c-x)/f,g=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(s.x,o.x,t),u=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(s.y,o.y,t);void 0===y&&(y=Math.atan2(l,r)),e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](g,u,y,n,h))}x+=f}}static _pushCenterAnchor(e,t){let i=0;const n=t.length-1;for(let e=0;e<n;e++)i+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(t[e],t[e+1]);const s=i/2;let o=0;const l=t.length-1;for(let i=0;i<l;i++){const n=t[i],r=t[i+1],l=r.x-n.x,h=r.y-n.y,x=Math.sqrt(l*l+h*h);if(s<o+x){const t=(s-o)/x,c=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.x,r.x,t),f=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_2__["interpolate"])(n.y,r.y,t),y=Math.atan2(h,l);return void e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](c,f,y,i,0))}o+=x}}static _deviation(e,t,i){const n=(t.x-e.x)*(i.x-t.x)+(t.y-e.y)*(i.y-t.y),a=(t.x-e.x)*(i.y-t.y)-(t.y-e.y)*(i.x-t.x);return Math.atan2(a,n)}static _honorsTextMaxAngle(e,t,i,n,a){let s=0;const o=i/2;let l=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](t.x,t.y),h=t.segment+1;for(;s>-o;){if(--h,h<0)return!1;s-=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h],l),l=e[h]}s+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[h],e[h+1]);const x=[];let c=0;const d=e.length;for(;s<o;){const t=e[h];let i,o=h;do{if(++o,o===d)return!1;i=e[o]}while(i.isEqual(t));let l,f=o;do{if(++f,f===d)return!1;l=e[f]}while(l.isEqual(i));const y=this._deviation(t,i,l);for(x.push({deviation:y,distToAnchor:s}),c+=y;s-x[0].distToAnchor>a;)c-=x.shift().deviation;if(Math.abs(c)>n)return!1;s+=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(i,l),h=o}return!0}static _smoothVertices(e,t){if(t<=0)return e;let i=e.length;if(i<3)return e;const n=[];let a=0,s=0;n.push(0);for(let t=1;t<i;t++){const i=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].distance(e[t],e[t-1]);i>0&&(a+=i,n.push(a),s++,s!==t&&(e[s]=e[t]))}if(i=s+1,i<3)return e;t=Math.min(t,.2*a);const o=e[0].x,l=e[0].y,h=e[i-1].x,x=e[i-1].y,c=_webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"].sub(e[0],e[1]);c.normalize(),e[0].x+=t*c.x,e[0].y+=t*c.y,c.assignSub(e[i-1],e[i-2]),c.normalize(),e[i-1].x+=t*c.x,e[i-1].y+=t*c.y,n[0]-=t,n[i-1]+=t;const d=[];d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](o,l));const f=1e-6,y=.5*t;for(let a=1;a<i-1;a++){let s=0,o=0,l=0;for(let i=a-1;i>=0;i--){const r=y+n[i+1]-n[a];if(r<0)break;const h=n[i+1]-n[i],x=n[a]-n[i]<y?1:r/h;if(x<f)break;const c=x*x,d=x*r-.5*c*h,g=x*h/t,u=e[i+1],m=e[i].x-u.x,p=e[i].y-u.y;s+=g/d*(u.x*x*r+.5*c*(r*m-h*u.x)-c*x*h*m/3),o+=g/d*(u.y*x*r+.5*c*(r*p-h*u.y)-c*x*h*p/3),l+=g}for(let r=a+1;r<i;r++){const i=y-n[r-1]+n[a];if(i<0)break;const h=n[r]-n[r-1],x=n[r]-n[a]<y?1:i/h;if(x<f)break;const c=x*x,d=x*i-.5*c*h,g=x*h/t,u=e[r-1],m=e[r].x-u.x,p=e[r].y-u.y;s+=g/d*(u.x*x*i+.5*c*(i*m-h*u.x)-c*x*h*m/3),o+=g/d*(u.y*x*i+.5*c*(i*p-h*u.y)-c*x*h*p/3),l+=g}d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](s/l,o/l))}return d.push(new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_4__["Point"](h,x)),e[0].x=o,e[0].y=l,e[i-1].x=h,e[i-1].y=x,d}static _pushCentroid(e,t){const i=4096,n=4096,a=t.length-1;let s=0,o=0,r=0,l=t[0].x,h=t[0].y;l>i&&(l=i),l<0&&(l=0),h>n&&(h=n),h<0&&(h=0);for(let e=1;e<a;e++){let a=t[e].x,x=t[e].y,c=t[e+1].x,d=t[e+1].y;a>i&&(a=i),a<0&&(a=0),x>n&&(x=n),x<0&&(x=0),c>i&&(c=i),c<0&&(c=0),d>n&&(d=n),d<0&&(d=0);const f=(a-l)*(d-h)-(c-l)*(x-h);s+=f*(l+a+c),o+=f*(h+x+d),r+=f}s/=3*r,o/=3*r,isNaN(s)||isNaN(o)||e.push(new _Placement_js__WEBPACK_IMPORTED_MODULE_7__["Anchor"](s,o))}}g._bidiEngine=new _core_BidiEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"];/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "ixhk":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/Placement.js ***!
  \****************************************************************************/
/*! exports provided: Anchor, PlacedSymbol, Placement, PlacementEngine, TILE_COORD_SIZE, TILE_PIXEL_RATIO, TILE_PIXEL_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacedSymbol", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placement", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacementEngine", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_COORD_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_RATIO", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_PIXEL_SIZE", function() { return m; });
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decluttering/config.js */ "2yHJ");
/* harmony import */ var _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/Geometry.js */ "OXZQ");
/* harmony import */ var _TextShaping_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextShaping.js */ "ynYs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const g=4096,m=512,x=8;class d{constructor(e,t,i=0,n=-1,s=.5){this.x=e,this.y=t,this.angle=i,this.segment=n,this.minzoom=s}}class w{constructor(e,t,n,s,a,o=.5,l=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]){this.anchor=e,this.labelAngle=t,this.glyphAngle=n,this.page=s,this.alternateVerticalGlyph=a,this.minzoom=o,this.maxzoom=l}}class p{constructor(e,t,i,n,s,a,o,l,h,r,c,g){this.tl=e,this.tr=t,this.bl=i,this.br=n,this.mosaicRect=s,this.labelAngle=a,this.minAngle=o,this.maxAngle=l,this.anchor=h,this.minzoom=r,this.maxzoom=c,this.page=g}}class y{constructor(e){this.shapes=e}}class f{getIconPlacement(i,n,s){const a=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](i.x,i.y),h=0===s.rotationAlignment,r=s.keepUpright;let c=s.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"];h&&(c+=i.angle);const g=new y([]);return s.allowOverlap&&s.ignorePlacement||!_decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"]||(g.iconColliders=[]),this._addIconPlacement(g,a,n,s,c),h&&r&&this._addIconPlacement(g,a,n,s,c+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),g}_addIconPlacement(e,t,n,s,a){const h=n.pixelRatio,r=n.width/h,c=n.height/h,g=s.offset;let m=g[0],x=g[1];switch(s.anchor){case 0:m-=r/2,x-=c/2;break;case 1:x-=c/2;break;case 2:m-=r,x-=c/2;break;case 3:m-=r/2;break;case 4:m-=r/2,x-=c;break;case 5:break;case 7:x-=c;break;case 6:m-=r;break;case 8:m-=r,x-=c}const d=n.rect,w=2/h,y=m-w,f=x-w,b=y+d.width/h,u=f+d.height/h,I=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y,f),k=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](b,u),T=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](y,u),P=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](b,f);if(0!==a){const e=Math.cos(a),t=Math.sin(a);I.rotate(e,t),k.rotate(e,t),T.rotate(e,t),P.rotate(e,t)}const N=new p(I,P,T,k,d,a,0,256,t,.5,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"],0);if(e.shapes.push(N),(!s.allowOverlap||!s.ignorePlacement)&&_decluttering_config_js__WEBPACK_IMPORTED_MODULE_1__["DECLUTTER_TILES"]){const n=s.size,o=s.padding,l={xTile:t.x,yTile:t.y,dxPixels:m*n-o,dyPixels:x*n-o,hard:!s.optional,partIndex:0,width:r*n+2*o,height:c*n+2*o,angle:a,minLod:.5,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};e.iconColliders.push(l)}}getTextPlacement(n,s,a,o){const g=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](n.x,n.y),m=o.rotate*_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_DEG_TO_RAD"],x=0===o.rotationAlignment,d=o.keepUpright,f=o.padding;let b=.5;const u=!x?0:n.angle,I=n.segment>=0&&x,k=o.allowOverlap&&o.ignorePlacement?null:[],T=[],P=!I;let N=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY,A=N,_=z;const G=(I||x)&&d,v=o.size/_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];let M=!1;for(const e of s)if(e.vertical){M=!0;break}let E,L=0,V=0;if(!I&&M){const e=_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["TextShaping"].getTextBox(s,o.lineHeight*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"]);switch(o.anchor){case 1:L=e.height/2,V=-e.width/2;break;case 2:L=-e.height/2,V=e.width/2;break;case 3:L=e.height/2,V=e.width/2;break;case 4:L=-e.height/2,V=-e.width/2;break;case 5:L=e.height;break;case 7:V=-e.width;break;case 6:V=e.width;break;case 8:L=-e.height}}L+=o.offset[0]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"],V+=o.offset[1]*_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_SIZE"];for(const e of s){const s=e.glyphMosaicItem;if(!s||s.rect.isEmpty)continue;const h=s.rect,r=s.metrics,y=s.page;if(k&&P){if(void 0!==E&&E!==e.y){let e,t,s,a;M?(e=-_+L,t=N+V,s=_-A,a=z-N):(e=N+L,t=A+V,s=z-N,a=_-A);const l={xTile:n.x,yTile:n.y,dxPixels:e*v-f,dyPixels:t*v-f,hard:!o.optional,partIndex:1,width:s*v+2*f,height:a*v+2*f,angle:m,minLod:.5,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};k.push(l),N=Number.POSITIVE_INFINITY,z=Number.NEGATIVE_INFINITY,A=N,_=z}E=e.y}const O=[];if(I){const t=.5*s.metrics.width,i=(e.x+r.left-4+t)*v*8;if(b=this._placeGlyph(n,b,i,a,n.segment,1,e.vertical,y,O),d&&(b=this._placeGlyph(n,b,i,a,n.segment,-1,e.vertical,y,O)),b>=2)break}else O.push(new w(g,u,u,y,!1)),x&&d&&O.push(new w(g,u+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],u+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],y,!1));const j=e.x+r.left,F=e.y-_TextShaping_js__WEBPACK_IMPORTED_MODULE_3__["SDF_GLYPH_BASELINE"]-r.top,Y=j+r.width,q=F+r.height;let C,S,U,R,B,H,D,J;if(!I&&M)if(e.vertical){const e=(j+Y)/2-r.height/2,t=(F+q)/2+r.width/2;C=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](-t-4+L,e-4+V),S=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x+h.width,C.y+h.height),U=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x,S.y),R=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x,C.y)}else C=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](4-F+L,j-4+V),S=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x-h.height,C.y+h.width),U=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x,C.y),R=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x,S.y);else C=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](j-4+L,F-4+V),S=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x+h.width,C.y+h.height),U=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](C.x,S.y),R=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](S.x,C.y);for(const t of O){let i,s,a,c;if(t.alternateVerticalGlyph){if(!B){const e=(F+q)/2+V;B=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"]((j+Y)/2+L-r.height/2-4,e+r.width/2+4),H=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x+h.height,B.y-h.width),D=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](H.x,B.y),J=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](B.x,H.y)}i=B,s=D,a=J,c=H}else i=C,s=U,a=R,c=S;const g=F,x=q,d=t.glyphAngle+m;if(0!==d){const e=Math.cos(d),t=Math.sin(d);i=i.clone(),s=s.clone(),a=a.clone(),c=c.clone(),i.rotate(e,t),c.rotate(e,t),s.rotate(e,t),a.rotate(e,t)}let w=0,y=256;if(I&&M?e.vertical?t.alternateVerticalGlyph?(w=32,y=96):(w=224,y=32):(w=224,y=96):(w=192,y=64),T.push(new p(i,a,s,c,h,t.labelAngle,w,y,t.anchor,t.minzoom,t.maxzoom,t.page)),k&&(!G||this._legible(t.labelAngle)))if(P)j<N&&(N=j),g<A&&(A=g),Y>z&&(z=Y),x>_&&(_=x);else if(t.minzoom<2){const e={xTile:n.x,yTile:n.y,dxPixels:(j+L)*v-f,dyPixels:(g+L)*v-f,hard:!o.optional,partIndex:1,width:(Y-j)*v+2*f,height:(x-g)*v+2*f,angle:d,minLod:t.minzoom,maxLod:t.maxzoom};k.push(e)}}}if(b>=2)return null;if(k&&P){let e,t,s,a;M?(e=-_+L,t=N+V,s=_-A,a=z-N):(e=N+L,t=A+V,s=z-N,a=_-A);const l={xTile:n.x,yTile:n.y,dxPixels:e*v-f,dyPixels:t*v-f,hard:!o.optional,partIndex:1,width:s*v+2*f,height:a*v+2*f,angle:m,minLod:.5,maxLod:_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"]};k.push(l)}const O=new y(T);return k&&k.length>0&&(O.textColliders=k),O}_legible(e){const t=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(e);return t<65||t>=193}_placeGlyph(e,n,o,h,r,c,g,m,x){let d=c;const p=d<0?Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(e.angle+_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"],_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]):e.angle;let y=0;o<0&&(d*=-1,o*=-1,y=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_PI"]),d>0&&++r;let f=new _webgl_Geometry_js__WEBPACK_IMPORTED_MODULE_2__["Point"](e.x,e.y),b=h[r],u=_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_INFINITY"];if(h.length<=r)return u;for(;;){const e=b.x-f.x,t=b.y-f.y,i=Math.sqrt(e*e+t*t),l=Math.max(o/i,n),c=e/i,I=t/i,k=Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["positiveMod"])(Math.atan2(I,c)+y,_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["C_2PI"]);if(x.push(new w(f,p,k,m,!1,l,u)),g&&x.push(new w(f,p,k,m,!0,l,u)),l<=n)return l;f=b.clone();do{if(r+=d,h.length<=r||r<0)return l;b=h[r]}while(f.isEqual(b));let T=b.x-f.x,P=b.y-f.y;const N=Math.sqrt(T*T+P*P);T*=i/N,P*=i/N,f.x-=T,f.y-=P,u=l}}}


/***/ }),

/***/ "jIHu":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
  \************************************************************************/
/*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=8,e=6,c=1e-30,h=64,i=4294967295,o=512,a=256,d=256/360,n=!1,p=128,r=8,s=29,f=1,g=16,l=16,m=4,v=8,w=50,x=10,b=24,j=8,k={metrics:{width:15,height:17,left:0,top:-7,advance:14}},q=1024,u=0,y=0,z=0,A=1,B=2,C=3,D=4,E=5,F=6,G=5,H=6,I=0,J=1,K=2,L=3,M=3,N=2,O=1,P=2,Q=4,R=2.5,S=6,T=5,U=6,V=1.15,W=2,X=2;


/***/ }),

/***/ "mKU8":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TileParser.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/* harmony import */ var _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/TileClipper.js */ "LaVW");
/* harmony import */ var _tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tiling/enums.js */ "zJVD");
/* harmony import */ var _CircleBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CircleBucket.js */ "Z7lw");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Feature.js */ "Zcxi");
/* harmony import */ var _FillBucket_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FillBucket.js */ "3kKw");
/* harmony import */ var _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IndexMemoryBuffer.js */ "4FHc");
/* harmony import */ var _LineBucket_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LineBucket.js */ "IqUe");
/* harmony import */ var _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SourceLayerData.js */ "8NBV");
/* harmony import */ var _SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SymbolBucket.js */ "i0/R");
/* harmony import */ var _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./VertexMemoryBuffer.js */ "yQzY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,t,r,n,c){if(this._pbfTiles={},this._tileClippers={},this._client=r,this._tile=t,c){this._styleLayerUIDs=new Set;for(const e of c)this._styleLayerUIDs.add(e)}this._styleRepository=n,this._layers=this._styleRepository.layers;const[a,l,u]=t.tileKey.split("/").map(parseFloat);this._level=a;const f=Math.max(8,Math.round(1*this._level)-8);for(const t of Object.keys(e)){const r=e[t];this._pbfTiles[t]=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__["default"](new Uint8Array(r.protobuff),new DataView(r.protobuff));if(r.refKey){const[e]=r.refKey.split("/").map(parseFloat),s=a-e;if(s>0){const e=(1<<s)-1,r=l&e,i=u&e;this._tileClippers[t]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["TileClipper"](s,r,i,8,f)}}this._tileClippers[t]||(this._tileClippers[t]=new _webgl_TileClipper_js__WEBPACK_IMPORTED_MODULE_2__["SimpleBuilder"])}}_canParseStyleLayer(e){return!this._styleLayerUIDs||this._styleLayerUIDs.has(e)}async parse(r){const s=this._initialize(r),{returnedBuckets:o}=s;this._processLayers(s),this._linkReferences(s),this._filterFeatures(s);const i=new Set,c={};for(const e of o)3===e.type&&e.getResources(e.tileClipper,i,c);if(this._tile.status===_tiling_enums_js__WEBPACK_IMPORTED_MODULE_3__["TileStatus"].INVALID)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])([]);const a=this._fetchResources(i,c,r);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(a).then((()=>this._processFeatures(s.returnedBuckets)))}_initialize(e){return{signal:e&&e.signal,sourceNameToTileData:this._parseTileData(this._pbfTiles),layers:this._layers,zoom:this._level,sourceNameToTileClipper:this._tileClippers,sourceNameToUniqueSourceLayerBuckets:{},sourceNameToUniqueSourceLayers:{},returnedBuckets:[],layerIdToBucket:{},referencerUIDToReferencedId:new Map}}_processLayers(e){const{sourceNameToTileData:t,layers:r,zoom:s,sourceNameToTileClipper:o,sourceNameToUniqueSourceLayerBuckets:i,sourceNameToUniqueSourceLayers:n,returnedBuckets:c,layerIdToBucket:a,referencerUIDToReferencedId:l}=e;for(let e=r.length-1;e>=0;e--){const u=r[e];if(!this._canParseStyleLayer(u.uid)||u.minzoom&&s<Math.floor(u.minzoom)||u.maxzoom&&s>=u.maxzoom||0===u.type)continue;if(!t[u.source]||!o[u.source])continue;const f=t[u.source],h=o[u.source],p=u.sourceLayer,m=f[p];if(m){let e=n[u.source];if(e||(e=n[u.source]=new Set),e.add(u.sourceLayer),u.refLayerId)l.set(u.uid,u.refLayerId);else{const e=this._createBucket(u);if(e){e.layerUIDs=[u.uid],e.layerExtent=m.extent,e.tileClipper=h;let t=i[u.source];t||(t=i[u.source]={});let r=t[p];r||(r=t[p]=[]),r.push(e),c.push(e),a[u.id.toLowerCase()]=e}}}}}_linkReferences(e){const{layerIdToBucket:t,referencerUIDToReferencedId:r}=e;r.forEach(((e,r)=>{e=e.toLowerCase(),t[e]&&t[e].layerUIDs.push(r)}))}_filterFeatures(e){const{signal:t,sourceNameToTileData:s,sourceNameToUniqueSourceLayerBuckets:o,sourceNameToUniqueSourceLayers:i}=e,n=10*this._level,c=10*(this._level+1),l=[],u=[];for(const e of Object.keys(i)){i[e].forEach((t=>{l.push(t),u.push(e)}))}for(let e=0;e<l.length;e++){const i=u[e],f=l[e];if(!s[i]||!o[i])continue;const h=s[i][f],p=o[i][f];if(!p||0===p.length)continue;if(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["isAborted"])(t))return;const m=h.getData();for(;m.nextTag(2);){const e=m.getMessage(),t=new _Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](e,h);e.release();const r=t.values;if(r){const e=r._minzoom;if(e&&e>=c)continue;const t=r._maxzoom;if(t&&t<=n)continue}for(const e of p)e.pushFeature(t)}}}_fetchResources(e,t,r){const s=[],o=this._tile.getWorkerTileHandler();let i,n;e.size>0&&(i=o.fetchSprites(e,this._client,r),s.push(i));for(const e in t){const i=t[e];i.size>0&&(n=o.fetchGlyphs(this._tile.tileKey,e,i,this._client,r),s.push(n))}return s}_processFeatures(e){const t=e.filter((e=>e.hasFeatures()));for(const e of t)e.processFeatures(e.tileClipper);return t}_parseTileData(e){const t={};for(const r of Object.keys(e)){const s=e[r],o={};for(;s.next();)switch(s.tag()){case 3:{const e=s.getMessage(),t=new _SourceLayerData_js__WEBPACK_IMPORTED_MODULE_9__["default"](e);e.release(),o[t.name]=t;break}default:s.skip()}t[r]=o}return t}_createBucket(e){switch(e.type){case 0:return null;case 1:return this._createFillBucket(e);case 2:return this._createLineBucket(e);case 4:return this._createCircleBucket(e);case 3:return this._createSymbolBucket(e)}}_createFillBucket(e){return new _FillBucket_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["FillVertexBuffer"](e.hasDataDrivenFill),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["OutlineVertexBuffer"](e.hasDataDrivenOutline),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"])}_createLineBucket(e){return new _LineBucket_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["LineVertexBuffer"](e.hasDataDrivenLine),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"])}_createCircleBucket(e){return new _CircleBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["CircleVertexBuffer"],new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"])}_createSymbolBucket(e){const t=this._tile;return new _SymbolBucket_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,this._level,new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["SymbolVertexBuffer"](e.hasDataDrivenIcon),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"],new _VertexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_11__["SymbolVertexBuffer"](e.hasDataDrivenText),new _IndexMemoryBuffer_js__WEBPACK_IMPORTED_MODULE_7__["TriangleIndexBuffer"],t.placementEngine,t.getWorkerTileHandler())}});


/***/ }),

/***/ "rgtN":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._array=[],t<=0&&console.error("strideInBytes must be positive!"),this._stride=t}get array(){return this._array}get index(){return 4*this._array.length/this._stride}get itemSize(){return this._stride}get sizeInBytes(){return 4*this._array.length}reset(){this.array.length=0}toBuffer(){return new Uint32Array(this._array).buffer}static i1616to32(t,r){return 65535&t|r<<16}static i8888to32(t,r,e,i){return 255&t|(255&r)<<8|(255&e)<<16|i<<24}static i8816to32(t,r,e){return 255&t|(255&r)<<8|e<<16}});


/***/ }),

/***/ "u8Fm":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/ScriptUtils.js ***!
  \******************************************************************************/
/*! exports provided: hasVerticalOrientation, isWhiteSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalOrientation", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWhiteSpace", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n){return 746===n||747===n||!(n<4352)&&(n>=12704&&n<=12735||(n>=12544&&n<=12591||(n>=65072&&n<=65103&&!(n>=65097&&n<=65103)||(n>=63744&&n<=64255||(n>=13056&&n<=13311||(n>=11904&&n<=12031||(n>=12736&&n<=12783||(n>=12288&&n<=12351&&!(n>=12296&&n<=12305||n>=12308&&n<=12319||12336===n)||(n>=13312&&n<=19903||(n>=19968&&n<=40959||(n>=12800&&n<=13055||(n>=12592&&n<=12687||(n>=43360&&n<=43391||(n>=55216&&n<=55295||(n>=4352&&n<=4607||(n>=44032&&n<=55215||(n>=12352&&n<=12447||(n>=12272&&n<=12287||(n>=12688&&n<=12703||(n>=12032&&n<=12255||(n>=12784&&n<=12799||(n>=12448&&n<=12543&&12540!==n||(n>=65280&&n<=65519&&!(65288===n||65289===n||65293===n||n>=65306&&n<=65310||65339===n||65341===n||65343===n||n>=65371&&n<=65503||65507===n||n>=65512&&n<=65519)||(n>=65104&&n<=65135&&!(n>=65112&&n<=65118||n>=65123&&n<=65126)||(n>=5120&&n<=5759||(n>=6320&&n<=6399||(n>=65040&&n<=65055||(n>=19904&&n<=19967||(n>=40960&&n<=42127||n>=42128&&n<=42191)))))))))))))))))))))))))))))}function r(n){return 32===n}


/***/ }),

/***/ "xN0w":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/BaseBucket.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t,e){this.layerExtent=4096,this._features=[],this.layer=t,this.zoom=e,this._filter=t.getFeatureFilter()}pushFeature(t){this._filter&&!this._filter.filter(t,this.zoom)||this._features.push(t)}hasFeatures(){return this._features.length>0}});


/***/ }),

/***/ "yQzY":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/VertexMemoryBuffer.js ***!
  \*************************************************************************************/
/*! exports provided: CircleVertexBuffer, FillVertexBuffer, LineVertexBuffer, OutlineVertexBuffer, SymbolVertexBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleVertexBuffer", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillVertexBuffer", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineVertexBuffer", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlineVertexBuffer", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolVertexBuffer", function() { return e; });
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeometryUtils.js */ "OxmL");
/* harmony import */ var _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MemoryBuffer.js */ "rgtN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=new Float32Array(1),r=new Uint32Array(i.buffer);class a extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t?20:12),this._isDataDriven=t}isDataDriven(){return this._isDataDriven}add(t,a,o,n,e,h,u,c){const p=this.array;let d=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,a);p.push(d);if(d=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(31*o),Math.round(31*n),Math.round(31*e),Math.round(31*h)),p.push(d),d=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(u,0),p.push(d),this._isDataDriven){if(!c)throw new Error("Expecting data driven values.");const t=c.color,a=t[3]*c.opacity*255;p.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(t[0]*a,t[1]*a,t[2]*a,a)),i[0]=c.size,p.push(r[0])}}}class o extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t?8:4),this._isDataDriven=t}isDataDriven(){return this._isDataDriven}add(t,i,r){const a=this.array;if(a.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,i)),this._isDataDriven){if(!r)throw new Error("Expecting data driven values.");const t=r.color,i=t[3]*r.opacity*255;a.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(t[0]*i,t[1]*i,t[2]*i,i))}}}class n extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t?12:8),this._isDataDriven=t}isDataDriven(){return this._isDataDriven}add(t,i,r,a,o,n,e){const h=this.array,u=this.index;let c=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(t,i);h.push(c);if(c=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.round(15*r),Math.round(15*a),o,n),h.push(c),this._isDataDriven){if(!e)throw new Error("Expecting data driven values.");const t=e.color,i=t[3]*e.opacity*255;h.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(t[0]*i,t[1]*i,t[2]*i,i))}return u}}class e extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(t){super(t?24:16),this._isDataDriven=t}isDataDriven(){return this._isDataDriven}add(a,o,n,e,h,u,c,p,d,D,v,l){const f=this.array;let y=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(a,o);if(f.push(y),y=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(Math.round(8*n),Math.round(8*e)),f.push(y),y=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(h/4,u/4,p,d),f.push(y),y=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(0,Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_0__["radToByte"])(c),10*D,Math.min(10*v,255)),f.push(y),this._isDataDriven){if(!l)throw new Error("Expecting data driven values.");const t=l.color,a=t[3]*l.opacity*255;f.push(_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(t[0]*a,t[1]*a,t[2]*a,a)),i[0]=l.size,f.push(r[0])}}}class h extends _MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"]{constructor(){super(16)}add(t,i,r,a,o,n,e,h,u,c,p){const d=this.array;let D=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i1616to32(2*t+r,2*i+a);d.push(D);const v=n[3]*e*255;D=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(n[0]*v,n[1]*v,n[2]*v,v),d.push(D);const l=c[3]*p*255;D=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(c[0]*l,c[1]*l,c[2]*l,l),d.push(D),D=_MemoryBuffer_js__WEBPACK_IMPORTED_MODULE_1__["default"].i8888to32(Math.min(32*h,255),Math.min(4*u,255),Math.min(o,255),0),d.push(D)}}


/***/ }),

/***/ "ynYs":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/TextShaping.js ***!
  \******************************************************************************/
/*! exports provided: SDF_GLYPH_BASELINE, SDF_GLYPH_SIZE, TextShaping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_BASELINE", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDF_GLYPH_SIZE", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextShaping", function() { return c; });
/* harmony import */ var _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webgl/Rect.js */ "qcDN");
/* harmony import */ var _ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScriptUtils.js */ "u8Fm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=24,s=17;class c{constructor(t,i,e,s,c,h,o){this._glyphItems=t,this._maxWidth=i,this._lineHeight=e,this._letterSpacing=s,this._hAnchor=c,this._vAnchor=h,this._justify=o}getShaping(t,e,s){const c=this._letterSpacing,h=this._lineHeight,o=this._justify,a=this._maxWidth,n=[];let l=0,r=0,m=0,f=0,g=-1,p=0,y=-1;const x=t.length;for(let d=0;d<x;d++){const M=t.charCodeAt(d),u=s&&Object(_ScriptUtils_js__WEBPACK_IMPORTED_MODULE_1__["hasVerticalOrientation"])(M);if(10===M){if(d===x-1)continue;if(g>=f){const t=n[g],i=t.x+t.glyphMosaicItem.metrics.advance;p=Math.max(i,p),o&&this._applyJustification(n,f,g),f=n.length}e?r-=h:r+=h,l=0,++m;continue}let _;for(const t of this._glyphItems)if(_=t[M],_)break;if(_){if(n.push({codePoint:M,x:l,y:r,vertical:u,glyphMosaicItem:_}),l+=_.metrics.advance+c,a>0&&l>a&&y>=0){const t=y+1,i=n[t].x;p=Math.max(i,p);for(let s=t;s<n.length;s++)e?n[s].y-=h:n[s].y+=h,n[s].x-=i;o&&this._applyJustification(n,f,y),e?r-=h:r+=h,l-=i,++m,f=t,y=-1}++g,32===M&&(y=n.length-1)}}if(g>=f){const t=n[g],i=t.x+t.glyphMosaicItem.metrics.advance;p=Math.max(p,i),o&&this._applyJustification(n,f,g)}if(n.length>0){const t=(o-this._hAnchor)*p;let i=(-this._vAnchor*(m+1)+.5)*h;e&&m&&(i+=m*h);for(const e of n)e.x+=t,e.y+=i}return n}static getTextBox(t,i){if(!t.length)return null;let e=1/0,s=1/0,c=0,h=0;for(const o of t){const t=o.glyphMosaicItem.metrics.advance,a=o.x,n=o.y-17,l=a+t,r=n+i;e=Math.min(e,a),c=Math.max(c,l),s=Math.min(s,n),h=Math.max(h,r)}return{x:e,y:s,width:c-e,height:h-s}}static getBox(t){if(!t.length)return null;let i=1/0,e=1/0,s=0,c=0;for(const h of t){const{height:t,left:o,top:a,width:n}=h.glyphMosaicItem.metrics,l=h.x,r=h.y-(t-Math.abs(a)),m=l+n+o,f=r+t;i=Math.min(i,l),s=Math.max(s,m),e=Math.min(e,r),c=Math.max(c,f)}return{x:i,y:e,width:s-i,height:c-e}}static addDecoration(i,e){const s=i.length;if(0===s)return;let c=i[0].x+i[0].glyphMosaicItem.metrics.left,h=i[0].y;for(let o=1;o<s;o++){const s=i[o];if(s.y!==h){const a=i[o-1].x+i[o-1].glyphMosaicItem.metrics.left+i[o-1].glyphMosaicItem.metrics.width;i.push({codePoint:0,x:c,y:h+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4,0,4,8),metrics:{width:a-c,height:8,left:0,top:0,advance:0},page:0,code:0}}),h=s.y,c=s.x+s.glyphMosaicItem.metrics.left}}const o=i[s-1].x+i[s-1].glyphMosaicItem.metrics.left+i[s-1].glyphMosaicItem.metrics.width;i.push({codePoint:0,x:c,y:h+e-3,vertical:!1,glyphMosaicItem:{sdf:!0,rect:new _webgl_Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](4,0,4,8),metrics:{width:o-c,height:8,left:0,top:0,advance:0},page:0,code:0}})}_applyJustification(t,i,e){const s=t[e],c=s.vertical?24:s.glyphMosaicItem.metrics.advance,h=(s.x+c)*this._justify;for(let s=i;s<=e;s++)t[s].x-=h}}


/***/ }),

/***/ "zJVD":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/tiling/enums.js ***!
  \************************************************************/
/*! exports provided: TileStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileStatus", function() { return I; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var I;!function(I){I[I.INITIALIZED=0]="INITIALIZED",I[I.NO_DATA=1]="NO_DATA",I[I.READY=2]="READY",I[I.MODIFIED=3]="MODIFIED",I[I.INVALID=4]="INVALID"}(I||(I={}));


/***/ })

}]);
//# sourceMappingURL=views-2d-engine-vectorTiles-WorkerTileHandler-js-es2015.js.map