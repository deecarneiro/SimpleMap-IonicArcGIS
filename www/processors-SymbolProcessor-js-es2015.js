(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["processors-SymbolProcessor-js"],{

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

/***/ "1agI":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionGrid.js ***!
  \*************************************************************************************/
/*! exports provided: CollisionGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionGrid", function() { return i; });
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(i,s=2){this._bucketSize=i,this._rowsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"]/i,this._colsLength=_definitions_js__WEBPACK_IMPORTED_MODULE_0__["TILE_SIZE"]/i,this._elementsPerBucket=s,this._grid=this._initGrid()}checkOverlap(t,i){const s=Math.floor(t/this._bucketSize),e=Math.floor(i/this._bucketSize);return s<0||s>=this._rowsLength||e<0||e>=this._colsLength||this._grid[e*this._colsLength+s]>=this._elementsPerBucket}markUsed(t,i){const s=Math.floor(t/this._bucketSize),e=Math.floor(i/this._bucketSize);this._grid[e*this._colsLength+s]+=1}reset(){this._grid=this._initGrid()}_initGrid(){return new Uint8Array(this._rowsLength*this._colsLength)}}


/***/ }),

/***/ "DsOJ":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors/SymbolProcessor.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../geometry/SpatialReference.js */ "WZb1");
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/accessorSupport/diffUtils.js */ "DxxZ");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../engine/webgl/util/BidiText.js */ "t7mB");
/* harmony import */ var _engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../engine/webgl/mesh/factories/matcherUtils.js */ "Bcjy");
/* harmony import */ var _textUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../textUtils.js */ "MrbB");
/* harmony import */ var _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../engine/webgl/mesh/templates/WGLTemplateStore.js */ "Dw8i");
/* harmony import */ var _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../engine/webgl/mesh/factories/WGLMeshFactory.js */ "J3nV");
/* harmony import */ var _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../support/AttributeStore.js */ "2AbE");
/* harmony import */ var _engine_webgl_collisions_CollisionGrid_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../engine/webgl/collisions/CollisionGrid.js */ "1agI");
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./BaseProcessor.js */ "ukaK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.views.2d.layers.features.processors.SymbolProcessor");let S=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_22__["default"]{constructor(){super(...arguments),this.type="symbol"}destroy(){}get supportsTileUpdates(){return!0}async update(e,r){const s=r.schema.processors[0];if("symbol"!==s.type)return;const o=Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__["diff"])(this._schema,s);Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_13__["hasDiff"])(o,"mesh")&&(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-update-debug")&&console.debug("Applying Update - Processor:",o),e.mesh=!0,e.why.mesh.push("Symbology changed"),this._schema=s,this._factory=this._createFactory(s),this._factory.update(s,this.tileStore.tileScheme.tileInfo))}onTileData(e,t,r){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r),this._onTileData(e,t,r)}onTileError(e,t,r){const s=r.signal,o={tileKey:e.id,error:t};return this.remoteClient.invoke("tileRenderer.onTileError",o,{signal:s})}_createFactory(e){const{geometryType:t,objectIdField:r,fields:s}=this.service,o={geometryType:t,fields:s,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(this.spatialReference)},i=new _engine_webgl_mesh_templates_WGLTemplateStore_js__WEBPACK_IMPORTED_MODULE_18__["WGLTemplateStore"](((e,t)=>this.remoteClient.invoke("tileRenderer.getMaterialItems",e,t)),!1);return this._store=i,this._matcher=Object(_engine_webgl_mesh_factories_matcherUtils_js__WEBPACK_IMPORTED_MODULE_16__["createMatcher"])(e.mesh.matcher,i,o),new _engine_webgl_mesh_factories_WGLMeshFactory_js__WEBPACK_IMPORTED_MODULE_19__["WGLMeshFactory"](t,r,i)}async _onTileData(e,t,o){const{type:i,addOrUpdate:a,remove:n,end:l}=t;if(!a){const t={type:i,addOrUpdate:null,remove:n,clear:!1,end:l};return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t},o)}const m=this._processFeatures(e,a,o),p=o.signal;try{const t=await m,o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(t,(e=>e.message)),a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(t,(e=>e.transferList))||[],d={type:i,addOrUpdate:o,remove:n,clear:!1,end:l},u={transferList:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrap"])(a)||[],signal:p};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(u),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:d},u)}catch(t){this._handleError(e,t,o)}}async _processFeatures(e,t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)||!t.hasFeatures)return null;const s={transform:e.transform,hasZ:!1,hasM:!1},i=this._factory,a={viewingMode:"",scale:e.scale},n=await this._matcher;Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r);const l=this._getLabelInfos(e,t);return await i.analyze(t.getCursor(),n,s,a),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["throwIfAborted"])(r),this._writeFeatureSet(e,t,s,l,i)}_writeFeatureSet(e,t,r,s,o){const a=o.createMeshData(t.getApproximateSize()),n={viewingMode:"",scale:e.scale},c=t.getCursor();for(;c.next();)try{const t=c.getDisplayId(),l=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(s)?s.get(t):null;o.writeCursor(a,c,r,n,e.level,l)}catch(e){}return this._encodeDisplayData(a)}_encodeDisplayData(e){const t={},r=new Array;return e.encode(t,r),{message:t,transferList:r}}_handleError(e,t,r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["isAbortError"])(t)){const s={tileKey:e.id,error:t.message};return this.remoteClient.invoke("tileRenderer.onTileError",s,{signal:r.signal})}}_shouldDiscard(e,t){switch(this.service.geometryType){case"esriGeometryPoint":{const r=t.readLegacyPointGeometry();return!r||e.checkOverlap(r.x,r.y)}case"esriGeometryPolygon":{const r=t.readLegacyCentroid();return!r||e.checkOverlap(r.x,r.y)}default:return!1}}_markUsed(e,t){switch(this.service.geometryType){case"esriGeometryPoint":{const{x:r,y:s}=t.readLegacyPointGeometry();return e.markUsed(r,s)}case"esriGeometryPolygon":{const{x:r,y:s}=t.readLegacyCentroid();return e.markUsed(r,s)}}}_getLabelInfos(e,t){const s=this._schema.mesh.labels,i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["andThen"])(s,(t=>t.filter((t=>function(e,t){return(!e.minScale||e.minScale>=t)&&(!e.maxScale||e.maxScale<=t)}(t,e.scale)))));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(i)||0===i.length)return null;const a=new Map,n=new _engine_webgl_collisions_CollisionGrid_js__WEBPACK_IMPORTED_MODULE_21__["CollisionGrid"](_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_14__["COLLISION_EARLY_REJECT_BUCKET_SIZE"]),c=t.getCursor();for(;c.next();){const e=c.getDisplayId();if(this._shouldDiscard(n,c)){a.has(e)||a.set(e,null);continue}let t=!1;const r=[],s=Object(_support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_20__["isAggregateId"])(e),o=s&&1!==c.readAttribute("cluster_count")?"aggregate":"feature";for(const a of i){if(a.target!==o)continue;const i=c.getStorage(),n=s&&"feature"===o?i.getComputedStringAtIndex(c.readAttribute("referenceId"),a.fieldIndex):i.getComputedStringAtIndex(e,a.fieldIndex);if(!n)continue;const l=Object(_engine_webgl_util_BidiText_js__WEBPACK_IMPORTED_MODULE_15__["bidiText"])(n.toString()),m=l[0],p=l[1];this._store.getMosaicItem(a.symbol,Object(_textUtils_js__WEBPACK_IMPORTED_MODULE_17__["codepoints"])(m)).then((e=>{r[a.index]={glyphs:e.glyphMosaicItems,rtl:p,index:a.index}})),t=!0}a.set(e,r),t&&this._markUsed(n,c)}return a}};S=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.processors.SymbolProcessor")],S);var x=S;/* harmony default export */ __webpack_exports__["default"] = (x);


/***/ }),

/***/ "GMaR":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js ***!
  \************************************************************************************/
/*! exports provided: FillMaterialKey, LabelMaterialKey, LineMaterialKey, MarkerMaterialKey, MaterialKeyBase, TextMaterialKey, createMaterialKey, getFillVVFlags, getLabelVVFlags, getLineVVFlags, getMarkerVVFlags, getSizeFlagsMask, getTextVVFlags, hydrateMaterialKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FillMaterialKey", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelMaterialKey", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineMaterialKey", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerMaterialKey", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialKeyBase", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMaterialKey", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMaterialKey", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFillVVFlags", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelVVFlags", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineVVFlags", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMarkerVVFlags", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeFlagsMask", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextVVFlags", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrateMaterialKey", function() { return l; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mesh/templates/meshUtils.js */ "m3fN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(t,s=!1){const r=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE,a=(t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].FIELD_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].MINMAX_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].SCALE_TARGETS_OUTLINE|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVTarget"].UNIT_TARGETS_OUTLINE))>>>4;return s?r&a:r&~a}function n(t){const i=a(t,!1);return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION|i)}function o(t){return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY)}function v(t,i){if(i){return t&a(t,!0)}const s=a(t,!1);return t&(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR|_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY|s)}function h(t){return n(t)}function u(t){return t&a(t,!1)}function S(t,e,i,r,a){switch(t){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return z.from(e,r);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return y.from(e,i);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return T.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return E.from(e);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return m.from(e,a);default:throw new Error(`Unable to createMaterialKey for unknown geometryType ${t}`)}}function l(t){switch(c.load(t).geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return new T(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return new z(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return new y(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return new E(t);case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return new m(t)}}class c{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return"label";default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](`Unable to handle unknown geometryType: ${this.geometryType}`)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let s=e,r=0;s<i;s++,r++)this.setBit(s,0!=(t&1<<r))}bits(t,e){let i=0;for(let s=t,r=0;s<e;s++,r++)i|=this.bit(s)<<r;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}c.shared=new c(0);const d=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,i){super.setVV(t,i);const s=a(t,i)&t;this.vvSizeMinMaxValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(s&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].SIZE_SCALE_STOPS)}},V=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,i){super.setVV(t,i),this.vvRotation=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].ROTATION)}},p=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,i){super.setVV(t,i),this.vvColor=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].COLOR)}},g=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,i){super.setVV(t,i),this.vvOpacity=!i&&!!(t&_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLVVFlag"].OPACITY)}};class z extends(p(g(c))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL,e?i.dotDensity=!0:i.setVV(t,!1),i.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}z.shared=new z(0);class T extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}T.shared=new T(0);class y extends(p(g(d(c)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE,i.setVV(t,e),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}y.shared=new y(0);class E extends(p(g(V(d(c))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}E.shared=new E(0);class m extends(d(c)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL,i.setVV(t,!1),i.mapAligned=!!Object(_mesh_templates_meshUtils_js__WEBPACK_IMPORTED_MODULE_2__["isMapAligned"])(e),i.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0);


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

/***/ "m3fN":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/meshUtils.js ***!
  \*************************************************************************************/
/*! exports provided: isMapAligned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMapAligned", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e){case"above-along":case"below-along":case"center-along":return 1;default:return 0}}


/***/ }),

/***/ "wk6I":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/LRUCache.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MemCache_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MemCache.js */ "rvq7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,r){this._storage=new _MemCache_js__WEBPACK_IMPORTED_MODULE_0__["MemCacheStorage"],this._storage.maxSize=e,r&&this._storage.registerRemoveFunc("",r)}put(t,e,r){this._storage.put(t,e,r,1)}pop(t){return this._storage.pop(t)}get(t){return this._storage.get(t)}clear(){this._storage.clearAll()}destroy(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(t){this._storage.maxSize=t}});


/***/ })

}]);
//# sourceMappingURL=processors-SymbolProcessor-js-es2015.js.map