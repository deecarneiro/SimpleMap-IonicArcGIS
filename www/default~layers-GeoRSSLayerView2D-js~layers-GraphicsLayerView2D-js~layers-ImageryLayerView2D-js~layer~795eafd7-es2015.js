(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7"],{

/***/ "2vGY":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/VertexBuffer.js ***!
  \******************************************************************************/
/*! exports provided: default, VertexBuffers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexBuffers", function() { return r; });
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(e,t,r){this.data=e,this.stride=t,this.vertexCount=r}static decode(r){const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data,r.stride),o=r.stride,n=r.vertexCount;return new t(s,o,n)}static fromVertexVector(r){const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(r.data.buffer(),r.stride),o=r.stride,n=r.vertexCount;return new t(s,o,n)}}class r{constructor(e,t,r){this.geometryType=e,this.indexBuffer=new Uint32Array(t),this.namedBuffers=r}static decode(e){const s=e.geometryType,o=e.indexBuffer,n={};for(const r in e.namedBuffers)n[r]=t.decode(e.namedBuffers[r]);return new r(s,o,n)}static fromVertexVectors(e){const s=e.geometryType,o=e.indexVector.buffer(),n={};for(const r in e.namedVectors)n[r]=t.fromVertexVector(e.namedVectors[r]);return new r(s,o,n)}}/* harmony default export */ __webpack_exports__["default"] = (t);


/***/ }),

/***/ "NMeD":
/*!******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/Metric.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BoundingBox.js */ "e+Fw");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/serializationUtils.js */ "wnVl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/collisions/Metric");class d{constructor(t,s,i,e,h){this.id=t,this.range=s,this.boxes=null,this.minZoom=-1,this.size=0,this.directionX=0,this.directionY=0,this.offsetX=0,this.offsetY=0,this.placementPadding=0,this.anchor=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(i,e),this.baseZoom=h}add(t,s,i){t.x=t.x+s,t.y=t.y+i,this.bounds?this.boxes?(this.boxes.push(t),this.bounds.extend(t)):(this.boxes=[this.bounds,t],this.bounds=this.bounds.clone(),this.bounds.extend(t)):this.bounds=t}computeIndex(){const t=this.anchor[0],i=this.anchor[1],o=Math.floor(t/_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]),h=Math.floor(i/_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]);this.xBucket=o,this.yBucket=h;const n=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TILE_SIZE"]/_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"];if(this.hasVV)return this.xOverflow=n,void(this.yOverflow=n);this.xOverflow=Math.min(n,Math.ceil(2*this.bounds.width/_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"])),this.yOverflow=Math.min(n,Math.ceil(2*this.bounds.height/_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_BUCKET_SIZE"]))}findCollisionDelta(t){const s=this.bounds.findCollisionDelta(t.bounds),e=this.boxes&&this.boxes.length,o=t.boxes&&t.boxes.length;return Math.abs(s)>_definitions_js__WEBPACK_IMPORTED_MODULE_1__["COLLISION_MAX_ZOOM_DELTA"]||!e&&!o?s:e&&o?this._boxesToBoxes(t):e?this._boxesToBox(t):this._boxToBoxes(t)}computeVVOffset(t,s){s||a.error("mapview-labeling",`Unable to compute label offset. Expected an evaluator function but found ${s}`);let i=this.size;if(this.hasVV){const e=s(t);i=isNaN(e)||null==e||e===1/0?this.size:e}this._computeOffset(i)}setPlacementOffset(t,s,i,e,o){this.hasVV=t,this.size=s,this.placementPadding=Math.round(i),this.directionX=e,this.directionY=o}clone(){const t=new d(this.id,this.range,this.anchor[0],this.anchor[1],this.baseZoom);return t.minZoom=this.minZoom,this.bounds&&(t.bounds=this.bounds.clone()),this.boxes&&(t.boxes=this.boxes.map((t=>t.clone()))),t.xBucket=this.xBucket,t.yBucket=this.yBucket,t.xOverflow=this.xOverflow,t.yOverflow=this.yOverflow,t.hasVV=this.hasVV,t.size=this.size,t.directionX=this.directionX,t.directionY=this.directionY,t.offsetX=this.offsetX,t.offsetY=this.offsetY,t}_boxToBoxes(t){let s=-1/0;for(const i of t.boxes){const t=this.bounds.findCollisionDelta(i);s=Math.max(t,s)}return s}_boxesToBox(t){let s=this.boxes[0].findCollisionDelta(t.bounds);for(let i=1;i<this.boxes.length;i++){const e=this.boxes[i].findCollisionDelta(t.bounds);s=Math.max(e,s)}return s}_boxesToBoxes(t){let s=-1/0;for(let i=0;i<this.boxes.length;i++){const e=this.boxes[i];for(const i of t.boxes){const t=e.findCollisionDelta(i);s=Math.max(t,s)}}return s}_computeOffset(t){this.offsetX=this.directionX*(t/2+this.placementPadding),this.offsetY=this.directionY*(t/2+this.placementPadding)}serialize(t){return t.push(this.id),this.bounds.serialize(t),t.push(this.range.from),t.push(this.range.count),t.push(this.anchor[0]),t.push(this.anchor[1]),t.push(this.baseZoom),t.push(this.hasVV?1:0),t.push(this.size),t.writeF32(this.directionX),t.writeF32(this.directionY),t.push(this.offsetX),t.push(this.offsetY),t.push(this.placementPadding),Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__["serializeList"])(t,this.boxes),t}static deserialize(t){const s=t.readInt32(),i=_BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__["default"].deserialize(t),e={from:t.readInt32(),count:t.readInt32()},o=t.readInt32(),n=t.readInt32(),a=t.readInt32(),f=t.readInt32(),l=t.readInt32(),c=t.readF32(),u=t.readF32(),b=t.readInt32(),x=t.readInt32(),m=t.readInt32(),p=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_4__["deserializeList"])(t,_BoundingBox_js__WEBPACK_IMPORTED_MODULE_3__["default"]),g=new d(s,e,o,n,a);return g.bounds=i,g.boxes=p,g.setPlacementOffset(!!f,l,m,c,u),g.offsetX=b,g.offsetY=x,g.computeIndex(),f||g._computeOffset(l),g}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "PeSW":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Writer.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t,s){this._pos=0;const r=s?this._roundToNearest(s,t.BYTES_PER_ELEMENT):40;this._array=new ArrayBuffer(r),this._buffer=new t(this._array),this._ctor=t}get length(){return this._pos}_roundToNearest(t,s){const r=Math.round(t);return r+(s-r%s)}_ensureSize(t){if(this._pos+t>=this._buffer.length){const s=this._roundToNearest(1.5*(this._array.byteLength+t*this._buffer.BYTES_PER_ELEMENT),this._buffer.BYTES_PER_ELEMENT),r=new ArrayBuffer(s),e=new this._ctor(r);e.set(this._buffer,0),this._array=r,this._buffer=e}}writeF32(t){this._ensureSize(1);const s=this._pos;return new Float32Array(this._array,4*this._pos,1)[0]=t,this._pos++,s}push(t){this._ensureSize(1);const s=this._pos;return this._buffer[this._pos++]=t,s}writeFixed(t){this._buffer[this._pos++]=t}setValue(t,s){this._buffer[t]=s}getValue(t){return this._buffer[t]}incr(t){this._buffer[t]++}decr(t){this._buffer[t]--}writeRegion(t){this._ensureSize(t.length);const s=this._pos;return this._buffer.set(t,this._pos),this._pos+=t.length,s}buffer(){const t=this._array.slice(0,4*this._pos);return this.destroy(),t}toArray(){const t=this._array,s=[];for(let r=0;r<t.byteLength/4;r++)s.push(t[r]);return s}seek(t){this._pos=t}destroy(){this._array=null,this._buffer=null}});


/***/ }),

/***/ "VPKi":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MeshData.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this.vertexData=new Map,this.vertexCount=0,this.indexData=[]}clear(){this.vertexData.clear(),this.vertexCount=0,this.indexData=[]}update(t,e,a){for(const e in t)this.vertexData.set(e,t[e]);for(const e in this.vertexData)null===t[e]&&this.vertexData.delete(e);this.vertexCount=e,this.indexData=a}});


/***/ }),

/***/ "ZByl":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayObject.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ "opKs");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/serializationUtils.js */ "wnVl");
/* harmony import */ var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collisions/Metric.js */ "NMeD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(s){this.insertAfter=null,this.id=s,this.displayRecords=[],this.metrics=[]}copy(){const s=new r(this.id);return s.set(this),s}clone(){const s=new r(this.id);return s.displayRecords=this.displayRecords.map((s=>s.clone())),s.metrics=this.metrics.map((s=>s.clone())),s.insertAfter=this.insertAfter,s}set(s){this.id=s.id,this.displayRecords=s.displayRecords,this.metrics=s.metrics,this.insertAfter=s.insertAfter}serialize(s){return s.push(this.id),Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s,this.metrics),Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s,this.displayRecords),s}static deserialize(i){const c=i.readInt32(),o=new r(c),d={id:c},n=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(i,_collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__["default"]);return n.length&&(o.metrics=n),o.displayRecords=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(i,_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__["default"],d),o}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "acOm":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/mesh/MeshData.js ***!
  \**************************************************************************/
/*! exports provided: MeshData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeshData", function() { return f; });
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../WGLDisplayRecord.js */ "opKs");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/serializationUtils.js */ "wnVl");
/* harmony import */ var _collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collisions/Metric.js */ "NMeD");
/* harmony import */ var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../WGLDisplayObject.js */ "ZByl");
/* harmony import */ var _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Reader.js */ "r7dU");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Writer.js */ "PeSW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class f{constructor(s,t){this.vertexVectorsMap=s,this._currentIndex=-1,this._currentRecordOffset=0,this._currentMetricOffset=0,this._currentMetrics=[];const e=4*(4*t.features+1),r=4*(8*t.records+1),i=4*(20*t.metrics+1);this._bufDisplayObjects=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array,e+4),this._bufDisplayRecords=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array,r+4),this._bufMetrics=new _util_Writer_js__WEBPACK_IMPORTED_MODULE_5__["default"](Uint32Array,i+4),this._bufDisplayObjects.push(0),this._bufDisplayRecords.push(0),this._bufMetrics.push(0)}get vertexBuffersMap(){if(!this._vertexBuffersMap){this._vertexBuffersMap={};for(let s=0;s<this.vertexVectorsMap.length;s++)this._vertexBuffersMap[s]=this.vertexVectorsMap[s].intoBuffers();this.vertexVectorsMap=null}return this._vertexBuffersMap}get(s){return this.vertexVectorsMap[s]}currentDisplayRecordCount(){return this._bufDisplayRecords[this._currentRecordOffset]}writeDisplayObject(s,t){this._bufDisplayObjects.incr(0),this._currentIndex=this._bufDisplayObjects.push(s),this._bufDisplayObjects.push(t),this._bufDisplayObjects.push(0),this._bufDisplayObjects.push(0),this._currentRecordOffset=0,this._currentMetricOffset=0,this._currentMetrics=[]}hasDisplayRecords(){return!(0===this._currentRecordOffset)}endDisplayObject(){this.hasDisplayRecords()?this._currentMetrics&&(0===this._currentMetricOffset&&(this._bufDisplayObjects.setValue(this._currentIndex+3,this._bufMetrics.length),this._currentMetricOffset=this._bufMetrics.length),Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(this._bufMetrics,this._currentMetrics)):this._rollbackDisplayObject()}writeDisplayRecord(s,t,e,r,i,c,u=0,f=0){0===this._currentRecordOffset&&(this._currentRecordOffset=this._bufDisplayRecords.push(0),this._bufDisplayObjects.setValue(this._currentIndex+2,this._currentRecordOffset)),this._bufDisplayRecords.incr(this._currentRecordOffset),this._bufDisplayRecords.push(s),this._bufDisplayRecords.push(t),this._bufDisplayRecords.push(e),this._bufDisplayRecords.push(r),this._bufDisplayRecords.push(i),this._bufDisplayRecords.push(c),this._bufDisplayRecords.push(u),this._bufDisplayRecords.push(f)}writeMetrics(s){s&&this._currentMetrics.push(...s)}static deserializeDisplayObjects(t){const{bufDisplayObjects:u,bufMetrics:f,bufRecords:h}=t,p=new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](u),a=new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](h),l=new _util_Reader_js__WEBPACK_IMPORTED_MODULE_4__["default"](f),n=[];let b=p.readInt32();for(a.readInt32(),l.readInt32();b--;){const t=p.readInt32(),c=p.readInt32(),u=p.readInt32(),f=p.readInt32(),h=new _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](t);0!==c&&(h.insertAfter=c),0!==u&&(h.displayRecords=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(a,_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_0__["default"],{id:t})),0!==f&&(h.metrics=Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["deserializeList"])(l,_collisions_Metric_js__WEBPACK_IMPORTED_MODULE_2__["default"])),n.push(h)}return n}encode(s,t){const e={};for(let s=0;s<this.vertexVectorsMap.length;s++){const r=this.vertexVectorsMap[s];e[s]={},r.transfer(e[s],t)}s.bufDisplayObjects=this._bufDisplayObjects.buffer(),s.bufRecords=this._bufDisplayRecords.buffer(),s.bufMetrics=this._bufMetrics.buffer(),t.push(s.bufDisplayObjects),t.push(s.bufMetrics),t.push(s.bufRecords),s.vertexBuffersMap=e,this.destroy()}destroy(){this.vertexVectorsMap=null,this._bufDisplayObjects=null,this._bufDisplayRecords=null,this._bufMetrics=null}_rollbackDisplayObject(){this._bufDisplayObjects.decr(0),this._bufDisplayObjects.seek(this._bufDisplayObjects.length-4),this._currentIndex=this._bufDisplayObjects.length}}


/***/ }),

/***/ "opKs":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayRecord.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _MeshData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeshData.js */ "VPKi");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(t,e,s,r=0,i=0){this.id=t,this.geometryType=e,this.materialKey=s,this.minZoom=r,this.maxZoom=i,this.meshData=null,this.symbolLevel=0,this.zOrder=0,this.vertexFrom=0,this.vertexCount=0,this.indexFrom=0,this.indexCount=0}get sortKey(){return void 0===this._sortKey&&this._computeSortKey(),this._sortKey}clone(){return this.copy()}copy(){const t=new s(this.id,this.geometryType,this.materialKey);return t.vertexFrom=this.vertexFrom,t.vertexCount=this.vertexCount,t.indexFrom=this.indexFrom,t.indexCount=this.indexCount,t.zOrder=this.zOrder,t.symbolLevel=this.symbolLevel,t.meshData=this.meshData,t.minZoom=this.minZoom,t.maxZoom=this.maxZoom,t}setMeshDataFromBuffers(s,r,i){const o=new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"];for(const e in r){const i=r[e].stride,a=r[e].data,h=[],n=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(i);for(let t=0;t<i*s.vertexCount/n;++t)h[t]=a[t+i*s.vertexFrom/n];o.vertexData.set(e,h)}o.indexData.length=0;for(let t=0;t<s.indexCount;++t)o.indexData[t]=i[t+s.indexFrom]-s.vertexFrom;o.vertexCount=s.vertexCount,this.meshData=o}readMeshDataFromBuffers(s,r){this.meshData?this.meshData.clear():this.meshData=new _MeshData_js__WEBPACK_IMPORTED_MODULE_1__["default"];for(const e in s){const r=s[e].stride,i=s[e].data,o=[],a=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(r);for(let t=0;t<r*this.vertexCount/a;++t)o[t]=i[t+r*this.vertexFrom/a];this.meshData.vertexData.set(e,o)}this.meshData.indexData.length=0;for(let t=0;t<this.indexCount;++t)this.meshData.indexData[t]=r[t+this.indexFrom]-this.vertexFrom;this.meshData.vertexCount=this.vertexCount}writeMeshDataToBuffers(e,s,r,i){for(const r in s){const i=s[r].stride,o=this.meshData.vertexData.get(r),a=s[r].data,h=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["strideToPackingFactor"])(i);for(let t=0;t<i*this.meshData.vertexCount/h;++t)a[t+i*e/h]=o[t]}for(let t=0;t<this.meshData.indexData.length;++t)i[t+r]=this.meshData.indexData[t]+e;this.vertexFrom=e,this.vertexCount=this.meshData.vertexCount,this.indexFrom=r,this.indexCount=this.meshData.indexData.length}static writeAllMeshDataToBuffers(t,e,s){let r=0,i=0;for(const o of t)o.writeMeshDataToBuffers(r,e,i,s),r+=o.vertexCount,i+=o.indexCount}_computeSortKey(){this._sortKey=(31&this.symbolLevel)<<12|(127&this.zOrder)<<4|7&this.geometryType}serialize(t){return t.push(this.geometryType),t.push(this.materialKey),t.push(this.vertexFrom),t.push(this.vertexCount),t.push(this.indexFrom),t.push(this.indexCount),t.push(this.minZoom),t.push(this.maxZoom),t}static deserialize(t,e){const r=t.readInt32(),i=t.readInt32(),o=new s(e.id,r,i);return o.vertexFrom=t.readInt32(),o.vertexCount=t.readInt32(),o.indexFrom=t.readInt32(),o.indexCount=t.readInt32(),o.minZoom=t.readInt32(),o.maxZoom=t.readInt32(),o}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "r7dU":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/Reader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._pos=0,this._buffer=t,this._i32View=new Int32Array(this._buffer),this._f32View=new Float32Array(this._buffer)}readInt32(){return this._i32View[this._pos++]}readF32(){return this._f32View[this._pos++]}});


/***/ }),

/***/ "wnVl":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js ***!
  \************************************************************************************/
/*! exports provided: deserializeList, serializeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeList", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeList", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,n){if(null!==n){e.push(n.length);for(const r of n)r.serialize(e);return e}e.push(0)}function n(e,n,r){const t=e.readInt32(),o=new Array(t);for(let t=0;t<o.length;t++)o[t]=n.deserialize(e,r);return o}


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7-es2015.js.map