(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f46dcc9f"],{

/***/ "5LEI":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TiledDisplayObject.js ***!
  \*******************************************************************************/
/*! exports provided: TiledDisplayObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiledDisplayObject", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat3f32.js */ "jHF5");
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DisplayObject.js */ "fEsP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]{constructor(s,t,e,r=e){super(),this.triangleCountReportedInDebug=0,this.transforms={dvs:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),tileMat3:Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])()},this.triangleCount=0,this.key=new _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_2__["default"](s),this.bounds=t,this.size=e,this.coordRange=r}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}get coords(){return this._coords}get bounds(){return this._bounds}set bounds(s){this._coords=[s[0],s[3]],this._bounds=s}setTransform(o,i){const e=i/(o.resolution*o.pixelRatio),r=this.transforms.tileMat3,[n,h]=o.toScreenNoRotation([0,0],this.coords),a=this.size[0]/this.coordRange[0]*e,d=this.size[1]/this.coordRange[1]*e;Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(r,a,0,0,0,d,0,n,h,1),Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__["m"])(this.transforms.dvs,o.displayViewMat3,r)}}


/***/ }),

/***/ "F8bX":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLBuffers.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(s){this.geometryMap=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_6__["createGeometryData"])((()=>({indexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createIndex(s,35044),vao:null})),((t,f)=>({vertexBuffer:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(s,_Utils_js__WEBPACK_IMPORTED_MODULE_6__["C_VBO_INFO"][f])})))}dispose(){for(let e=0;e<5;e++){const t=this.geometryMap[e];if(t){t.data.vao&&t.data.vao.dispose(!1),t.data.indexBuffer&&t.data.indexBuffer.dispose();for(const e in t.buffers)t.buffers[e]&&t.buffers[e].data.vertexBuffer.dispose()}}}get(e){const t=this.geometryMap[e],r={};for(const e in t.buffers)r[e]=t.buffers[e].data.vertexBuffer;return{indexBuffer:t.data.indexBuffer,get vao(){return t.data.vao},set vao(e){t.data.vao=e},vertexBufferMap:r}}has(e){return null!=this.geometryMap[e]}upload(e,t){t.forEach(((t,r)=>{this._upload(t,r,e)}))}_upload(e,t,r){if(e.indices&&(e.indices.allDirty?this._uploadIndices(r,t):null!=e.indices.from&&null!=e.indices.count&&this._uploadIndices(r,t,e.indices.from,e.indices.count)),e.vertices){const s=e.vertices;for(const e in s){const f=s[e];f.allDirty?this._uploadVertices(r,t,e):null!=f.from&&null!=f.count&&this._uploadVertices(r,t,e,f.from,f.count)}}}_uploadVertices(e,t,r,s,f){const a=this.geometryMap[t];if(!a)return;const i=e.geometries[t].vertexBuffer[r];if(!i)return;const o=i.stride,u=i.data.buffer;a.buffers[r]&&u.byteLength>0&&(null!=s&&null!=f?a.buffers[r].data.vertexBuffer.setSubData(u,s*o,s*o,(s+f)*o):a.buffers[r].data.vertexBuffer.setData(u))}_uploadIndices(e,t,r,s){const f=this.geometryMap[t];if(!f)return;const a=e.geometries[t].indexBuffer.buffer;f.data.indexBuffer&&a.byteLength>0&&(null!=r&&null!=s?f.data.indexBuffer.setSubData(a,4*r,4*r,4*(r+s)):f.data.indexBuffer.setData(a))}});


/***/ }),

/***/ "FA+c":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MemoryRequirements.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._byGeometryType=null}get satisfied(){return!this._byGeometryType}reset(){this._byGeometryType=null}verticesFor(e){return this._byGeometryType?this._byGeometryType[e].vertices:0}indicesFor(e){return this._byGeometryType?this._byGeometryType[e].indices:0}needMore(e,t,i){if(!t&&!i)return;this._byGeometryType||(this._byGeometryType=[{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0},{vertices:0,indices:0}]);const r=this._byGeometryType[e];r.vertices+=t,r.indices+=i}});


/***/ }),

/***/ "KFVX":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLTile.js ***!
  \********************************************************************/
/*! exports provided: WGLTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLTile", function() { return m; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/mat2df32.js */ "LGNZ");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TiledDisplayObject.js */ "5LEI");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./DirtyMap.js */ "T6vb");
/* harmony import */ var _DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./DisplayRecordStore.js */ "MQs+");
/* harmony import */ var _Fader_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Fader.js */ "ZdL5");
/* harmony import */ var _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WGLBuffers.js */ "F8bX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const _=new Set;class m extends _TiledDisplayObject_js__WEBPACK_IMPORTED_MODULE_8__["TiledDisplayObject"]{constructor(t,s,a=!1){super(t,s,[_definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"],_definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]]),this._data=null,this._displayList=null,this._wglBuffers=null,this._deferPatches=!1,this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__["default"],this._labelIndex=null,this._lastCommitTime=0,this._patchQueue=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](100),this.fader=new _Fader_js__WEBPACK_IMPORTED_MODULE_12__["default"],this._dirty=!0,this._replaceBuffers=!1,this._uploadsLocked=!1,this._hasData=!1,this._invalidated=!1,this.transforms.labelMat2d=Object(_chunks_mat2df32_js__WEBPACK_IMPORTED_MODULE_6__["c"])(),this._ensureCorrectZOrder=a,this._deferPatches=!a}destroy(){super.destroy(),this.clear()}get displayObjects(){var t;return null!=(t=this._displayObjects)?t:[]}get isDirty(){return this._dirty}get hasData(){return!!this._hasData}get labelIndex(){return this._labelIndex}set isDirty(t){this._dirty=t,this.requestRender()}getGeometry(t){return this._wglBuffers&&this._wglBuffers.has(t)?this._wglBuffers.get(t):null}getDisplayList(){return this._displayList}setTransform(t,e){super.setTransform(t,e);const i=this.transforms.labelMat2d,a=t.getScreenTransform(i,e),h=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])();Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_3__["t"])(h,this.coords,a),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(i),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["t"])(i,i,h),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_5__["m"])(i,t.viewMat2d,i)}setData(t){const e=t.addOrUpdate,s=t.remove;t.clear&&(this.clear(),this._patchQueue.clear(),this._hasData=!1),"replace"===t.type&&(this._replaceBuffers=!0,this._patchQueue.clear(),this._data=null),!this._data&&e&&e.tileDisplayData.displayObjects.length?(e.tileDisplayData.computeDisplayList(this._ensureCorrectZOrder),this._dirtyMap=new _DirtyMap_js__WEBPACK_IMPORTED_MODULE_10__["default"],this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(e,this._dirtyMap),this._data=e,this._dirtyMap.markAllDirty(),this._hasData=!0,t.end&&this.ready()):this._data&&(e&&e.tileDisplayData.displayObjects.length||s.length)?this._deferPatches?this._patchQueue.enqueue(t):this._doPatchData(t):t.end&&this.ready(),t.end&&!this._data&&this.clear(),this.requestRender(),this.emit("change")}lockUploads(){this._uploadsLocked=!0}unlockUploads(){this._uploadsLocked=!1,this.requestRender()}commitChanges(e){if(!e.time||e.time!==this._lastCommitTime){if(this._lastCommitTime=e.time,this.fader.step()||this.requestRender(),this._patchQueue.size){const e=this._patchQueue.dequeue();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)&&(e.end&&this.ready(),this._doPatchData(e),this.requestRender(),this._hasData=!0)}if(this._uploadsLocked)this.requestRender();else if(this.visible&&this._data){if(this._replaceBuffers)for(this._wglBuffers&&this._wglBuffers.dispose(),this._wglBuffers=null,this._replaceBuffers=!1;this._patchQueue.size;){const e=this._patchQueue.dequeue();Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)&&(e.end&&this.ready(),this._doPatchData(e),this._hasData=!0)}this._wglBuffers||(this._wglBuffers=new _WGLBuffers_js__WEBPACK_IMPORTED_MODULE_13__["default"](e.context)),(this._dirtyMap.hasDirty()||this._invalidated)&&(this._invalidated=!1,this._wglBuffers.upload(this._data.tileBufferData,this._dirtyMap),this._displayList=this._data.tileDisplayData.displayList.clone(),this._displayObjects=this._data.tileDisplayData.displayObjects.slice(),this._rebuildLabelIndex(),this._dirtyMap.markAllClean())}}}clear(){this._data=null,this._displayList=null,this._dispRecStore=null,this._wglBuffers&&(this._wglBuffers.dispose(),this._wglBuffers=null)}_doPatchData(t){try{if("new"===t.type){if(!t.addOrUpdate)return;this._invalidated=!0;const e=this._bulkAddFeatures(t);e&&(this._dirtyMap.markAllDirty(),this._data.reshuffleBulkAdd(t,e.objectIndex,e.recordIndex),this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(this._data,this._dirtyMap))}else this._invalidated=!0,this._patchData(t)||(this._dirtyMap.markAllDirty(),this._data.reshuffle(),this._dispRecStore=_DisplayRecordStore_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromTileData(this._data,this._dirtyMap))}catch(t){}this.requestRender()}_rebuildLabelIndex(){var t,e;if(!(null==(t=this._data)||null==(e=t.tileBufferData.geometries[_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL])||!e.indexBuffer.length)){this.isDirty=!0,this._labelIndex=this._initLabelIndex();for(const t of this.displayObjects)for(const e of t.metrics)this._insertIntoLabelIndex(e)}}_insertIntoLabelIndex(t){if(t.xBucket<0||t.yBucket<0||t.yBucket>3||t.xBucket>3)return;this.labelIndex[t.yBucket][t.xBucket].push(t)}_initLabelIndex(){const t=[];for(let e=0;e<_definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]/_definitions_js__WEBPACK_IMPORTED_MODULE_4__["COLLISION_BUCKET_SIZE"];e++){t.push([]);for(let s=0;s<_definitions_js__WEBPACK_IMPORTED_MODULE_4__["TILE_SIZE"]/_definitions_js__WEBPACK_IMPORTED_MODULE_4__["COLLISION_BUCKET_SIZE"];s++)t[e].push([])}return t}_bulkAddFeatures(t){const e=t.addOrUpdate.tileDisplayData.displayObjects,s=this._data.tileDisplayData.displayObjects,i=this._data.tileDisplayData.displayObjectRegistry;for(let a=0;a<e.length;a++){const r=e[a],l=i.get(r.id);for(let e=0;e<r.displayRecords.length;++e){const s=r.displayRecords[e];if(l){if(s.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL&&s.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE)continue;l.displayRecords.push(s)}const i=t.addOrUpdate.tileBufferData.geometries[s.geometryType];if(!this._dispRecStore.tryAddMeshData(s,i))return{objectIndex:a,recordIndex:e}}l||(i.set(r.id,r),s.push(r))}return null}_patchData(t){let e=!0;const s=t.addOrUpdate&&t.addOrUpdate.tileDisplayData&&t.addOrUpdate.tileDisplayData.displayObjects||[],i=(t.remove||[]).slice();for(const t of s)null!=t.insertAfter&&i.push(t.id);for(const t of i){const e=this._data.tileDisplayData.displayObjectRegistry.get(t);if(e){this._data.tileDisplayData.displayList.removeFromList(e.displayRecords);for(const t of e.displayRecords)this._dispRecStore.delete(t);this._data.tileDisplayData.displayObjectRegistry.delete(t);const s=this._data.tileDisplayData.displayObjects.indexOf(e);this._data.tileDisplayData.displayObjects.splice(s,1)}}for(const i of s){let s,a=this._data.tileDisplayData.displayObjectRegistry.get(i.id);if(a){const t=a.displayRecords;a.set(i),a.displayRecords=t;const e=a.displayRecords.length;for(let t=0;t<e;++t){const e=a.displayRecords[t],s=i.displayRecords[t];(t>=i.displayRecords.length||e.geometryType!==s.geometryType||e.symbolLevel!==s.symbolLevel||e.zOrder!==s.zOrder||e.materialKey!==s.materialKey)&&(this._dispRecStore.delete(a.displayRecords[t]),t<i.displayRecords.length&&(a.displayRecords[t]=void 0))}a.displayRecords.length=i.displayRecords.length,a.metrics=i.metrics}else{let t;a=i.copy(),a.displayRecords=[],this._data.tileDisplayData.displayObjectRegistry.set(i.id,a);const e=this._data.tileDisplayData.displayObjects;if(null!=a.insertAfter)if(s={},a.insertAfter>=0){const s=this._data.tileDisplayData.displayObjectRegistry.get(a.insertAfter);s?(t=e.indexOf(s)+1,t<e.length?e.splice(t,0,a):(e.push(a),t=e.length)):(e.push(a),t=e.length)}else e.unshift(a),t=0;else e.push(a),t=e.length;if(s){let a;if(this._data.tileDisplayData.displayList.unified)a=i.displayRecords.length>0?1:0;else{_.clear();for(const t of i.displayRecords){const e=this._data.tileDisplayData.displayList.getDPInfoType(t.geometryType);_.add(e)}a=_.size}let r=0;for(let i=t-1;i>=0&&r<a;--i)for(let t=e[i].displayRecords.length-1;t>=0&&r<a;--t){const a=e[i].displayRecords[t],l=this._data.tileDisplayData.displayList.getDPInfoType(a.geometryType);s[l]||(s[l]=a,++r)}}}const r=i.displayRecords.length;for(let l=0;l<r;++l){const r=i.displayRecords[l];let d=a.displayRecords[l];d?(d.meshData=r.meshData,d.materialKey=r.materialKey):(d=r.copy(),d.vertexFrom=void 0,d.indexFrom=void 0,a.displayRecords[l]=d);const h=r.geometryType,o=this._data.tileDisplayData.displayList.getDPInfoType(h),p=t.addOrUpdate.tileBufferData.geometries[h],c=p.vertexBuffer,n=p.indexBuffer;let y;s&&(y=s[o]?this._data.tileDisplayData.displayList.splitAfter(s[o]):-1),e=this._dispRecStore.setMeshData(d,r,c,n,y)&&e,s&&null!=d.indexFrom&&null!=d.indexFrom&&(s[o]=d)}}return e}}


/***/ }),

/***/ "MQs+":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecordStore.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _FreeList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FreeList.js */ "S4Ec");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=["FILL","LINE","MARKER","TEXT","LABEL"];class o{constructor(t,r,s,o){this._strides=t,this._displayList=r,this._freeListsAndStorage={},this._dirtyMap=null,this._dirtyMap=s;for(const r in t){this._freeListsAndStorage[r]={vtxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](o):null,idxFreeList:o?new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](o):null,vertexBuffers:{},indexBuffer:o?new Uint32Array(o):null};for(const i in t[r])this._freeListsAndStorage[r].vertexBuffers[i]={data:o?Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o,t[r][i]):null,stride:t[r][i]}}}static fromTileData(e,r){const n=function(e){const t=e.getStrides(),r={};for(let e=0;e<t.length;e++)r[s[e]]=t[e];return r}(e),d=[0,0,0,0,0],a=[0,0,0,0,0],x=e.tileDisplayData.displayObjects;for(const e of x)for(const t of e.displayRecords)d[t.geometryType]=Math.max(d[t.geometryType],t.vertexFrom+t.vertexCount),a[t.geometryType]=Math.max(a[t.geometryType],t.indexFrom+t.indexCount);const u=new o(n,e.tileDisplayData.displayList,r,null);for(let r=0;r<e.tileBufferData.geometries.length;++r){const o=d[r],n=a[r],x=e.tileBufferData.geometries[r],f=s[r],l=u._storageFor(f),c=e.tileBufferData.geometries[r].indexBuffer;let m;l.indexBuffer=c,l.idxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](c.length),l.idxFreeList.allocate(n);for(const i in x.vertexBuffer){const s=e.tileBufferData.geometries[r].vertexBuffer[i];l.vertexBuffers[i].data=s.data,l.vertexBuffers[i].stride=s.stride;const o=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["strideToPackingFactor"])(s.stride),n=s.data.length*o/s.stride;m||(m=n)}l.vtxFreeList=new _FreeList_js__WEBPACK_IMPORTED_MODULE_2__["FreeList"](m),l.vtxFreeList.allocate(o)}return u}delete(e){const t=s[e.geometryType];this._freeVertices(t,e.vertexFrom,e.vertexCount),this._freeIndices(t,e.indexFrom,e.indexCount),this._displayList.removeFromList(e),e.vertexFrom=void 0,e.indexFrom=void 0}setMeshData(e,t,i,o,n){const d=s[e.geometryType];let a,x;e.meshData=null,void 0===e.vertexFrom?(x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount>e.vertexCount?(this._freeVertices(d,e.vertexFrom,e.vertexCount),x=t.vertexCount,a=this._allocateVertices(d,x)):t.vertexCount===e.vertexCount?(a=e.vertexFrom,x=e.vertexCount):(this._freeVertices(d,e.vertexFrom+t.vertexCount,e.vertexCount-t.vertexCount),a=e.vertexFrom,x=t.vertexCount);let u,f,l,c=!0;if(void 0===e.indexFrom?(u=n,l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount>e.indexCount?(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom,e.indexCount),l=t.indexCount,f=this._allocateIndices(d,l)):t.indexCount===e.indexCount?(c=!1,f=e.indexFrom,l=e.indexCount):(u=this._displayList.removeFromList(e),this._freeIndices(d,e.indexFrom+t.indexCount,e.indexCount-t.indexCount),f=e.indexFrom,l=t.indexCount),-1!==a&&-1!==f){const s=this._storageFor(d);if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(a,f,s.vertexBuffers,s.indexBuffer,t,i,o),e.vertexFrom=a,e.indexFrom=f,e.vertexCount=t.vertexCount,e.indexCount=t.indexCount,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,e.vertexFrom,e.vertexCount)}return c&&this._displayList.addToList(e,u),!0}return-1!==a&&this._freeVertices(d,a,x),-1!==f&&this._freeIndices(d,f,l),e.setMeshDataFromBuffers(t,i,o),e.vertexFrom=void 0,e.vertexCount=0,e.indexFrom=void 0,e.indexCount=0,!1}tryAddMeshData(e,t){const i=t.vertexBuffer,o=t.indexBuffer,n=s[e.geometryType],d=this._allocateVertices(n,e.vertexCount);if(-1===d)return this._freeVertices(n,d,e.vertexCount),!1;const a=this._allocateIndices(n,e.indexCount);if(-1===a)return this._freeVertices(n,d,e.vertexCount),this._freeIndices(n,a,e.indexCount),!1;const x=this._storageFor(n);if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(d,a,x.vertexBuffers,x.indexBuffer,e,i,o),e.vertexFrom=d,e.indexFrom=a,this._dirtyMap){this._dirtyMap.markDirtyIndices(e.geometryType,e.indexFrom,e.indexCount);for(const t in i)this._dirtyMap.markDirtyVertices(e.geometryType,t,d,e.vertexCount)}return this._displayList.addToList(e),!0}_allocateVertices(e,t){const r=this._storageFor(e),i=r.vtxFreeList.allocate(t);if(-1===i)return-1;return r.vtxFreeList.fragmentation>.5?-1:i}_freeVertices(e,t,r){this._storageFor(e).vtxFreeList.free(t,r)}_freeIndices(e,t,r){this._storageFor(e).idxFreeList.free(t,r)}_allocateIndices(e,t){const r=this._storageFor(e),i=r.idxFreeList.allocate(t);if(-1===i)return-1;return r.idxFreeList.fragmentation>.5?-1:i}_storageFor(e){return this._freeListsAndStorage[e]}_stridesFor(e,t){return this._strides[e][t]}}/* harmony default export */ __webpack_exports__["default"] = (o);


/***/ }),

/***/ "S4Ec":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/FreeList.js ***!
  \*********************************************************************/
/*! exports provided: FreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreeList", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(e){this._largestRange=null,this._parent=e,this._updateLargestRange()}get largestRange(){return this._largestRange}rangeCreated(e){(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}rangeResized(e,t){e===this._largestRange?e.count<t&&this._updateLargestRange():(!this._largestRange||e.count>this._largestRange.count)&&(this._largestRange=e)}findBestRange(e){let t=this._parent._freeHead,n=null;for(;null!==t;)t.count>=e&&(!n||t.count-e<n.count-e)&&(n=t),t=t.next;return n}findAdjacentRanges(e,t){let n=!0,r=!1,s=null,o=this._parent._freeHead;for(;n&&!r;){const a=null!==s?s.from+s.count:0,l=null!==o?o.from:this._parent._size;e>=a&&e+t<=l?(n=!1,r=!0):null!==o?(s=o,o=o.next):n=!1}return[s,o]}_updateLargestRange(){let e=null,t=this._parent._freeHead;for(;null!==t;)(!e||t.count>e.count)&&(e=t),t=t.next;this._largestRange=e}}class t{constructor(t,n){this._allocated=0,this._size=t,this._freeHead=t>0?{from:0,count:t,prev:null,next:null}:null,this._bookKeeper=n||new e(this),this._freeHead&&this._bookKeeper.rangeCreated(this._freeHead)}allocate(e){const n=this._bookKeeper.findBestRange(e);if(null===n)return-1;const r=n.from,s=n.count;if(n.from+=e,n.count-=e,this._bookKeeper.rangeResized(n,r,s),this._allocated+=e,0===n.count){const e=null!==n.prev?this._freeHead:n.next;t._removeRange(n),this._freeHead=e}return r}free(e,n){const[r,s]=this._bookKeeper.findAdjacentRanges(e,n),o={from:e,count:n,prev:r,next:s};if(null!==r&&(r.next=o),null!==s&&(s.prev=o),this._bookKeeper.rangeCreated(o),this._allocated-=n,null!==s&&o.from+o.count===s.from){const e=o.from,n=o.count;t._fuse(o,s),t._removeRange(s),this._bookKeeper.rangeResized(o,e,n),this._bookKeeper.rangeResized(s,void 0,0)}if(null!==r&&r.from+r.count===o.from){const e=r.from,n=r.count;t._fuse(r,o),t._removeRange(o),this._bookKeeper.rangeResized(r,e,n),this._bookKeeper.rangeResized(o,void 0,0)}this._freeHead=null!==o.prev?this._freeHead:o}get fragmentation(){const e=this._size-this._allocated;if(0===e)return 0;return 1-this._bookKeeper.largestRange.count/e}static _removeRange(e){null!==e.prev?null!==e.next?(e.prev.next=e.next,e.next.prev=e.prev):e.prev.next=null:null!==e.next&&(e.next.prev=null)}static _fuse(e,t){e.count+=t.count,e.next=t.next,t.from+=t.count,t.count=0,null!==t.next&&(t.next.prev=e)}}


/***/ }),

/***/ "T6vb":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/DirtyMap.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(t,i,r){if(!t.allDirty)if(null!=t.from&&null!=t.count){const s=Math.min(t.from,i),l=Math.max(t.from+t.count,i+r)-s;t.from=s,t.count=l}else t.from=i,t.count=r}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._dirties=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["createGeometryData"])((()=>({indices:{from:null,count:null,allDirty:!1}})),(()=>({vertices:{from:null,count:null,allDirty:!1}})))}hasDirty(){for(const t of this._dirties)if(null!==t.data.indices.count||t.data.indices.allDirty)return!0;return!1}markAllClean(){for(const t of this._dirties){t.data.indices.from=null,t.data.indices.count=null,t.data.indices.allDirty=!1;for(const i in t.buffers)t.buffers[i].data.vertices.from=null,t.buffers[i].data.vertices.count=null,t.buffers[i].data.vertices.allDirty=!1}}markAllDirty(){for(const t of this._dirties){t.data.indices.allDirty=!0;for(const i in t.buffers)t.buffers[i].data.vertices.allDirty=!0}}forEach(t){for(let i=0;i<this._dirties.length;++i){const r=this._dirties[i],s={};for(const t in r.buffers){const i=r.buffers[t].data.vertices;(i.allDirty||null!=i.from&&null!=i.count&&i.count>0)&&(s[t]=i)}const l=r.data.indices;let n;n=l.allDirty||null!=l.from&&null!=l.count&&l.count>0?{indices:l,vertices:s}:{indices:null,vertices:s},(n.indices||Object.keys(n).length>0)&&t(n,i)}}markDirtyIndices(t,r,s){i(this._dirties[t].data.indices,r,s)}markDirtyVertices(t,r,s,l){i(this._dirties[t].buffers[r].data.vertices,s,l)}});


/***/ }),

/***/ "Vmjh":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLRendererInfo.js ***!
  \****************************************************************************/
/*! exports provided: WGLRendererInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLRendererInfo", function() { return p; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Color.js */ "nvBr");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/unitUtils.js */ "gEht");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../renderers/support/lengthUtils.js */ "m0D6");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/capabilities.js */ "sq/B");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c(e,t){const i=t.length;if(e<t[0].value||1===i)return t[0].size;for(let s=1;s<i;s++)if(e<t[s].value){const i=(e-t[s-1].value)/(t[s].value-t[s-1].value);return t[s-1].size+i*(t[s].size-t[s-1].size)}return t[i-1].size}function h(e,t,i=0){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return e[i+0]=0,e[i+1]=0,e[i+2]=0,void(e[i+3]=0);const{r:a,g:o,b:l,a:r}=t;e[i+0]=a*r/255,e[i+1]=o*r/255,e[i+2]=l*r/255,e[i+3]=r}class p{constructor(){this.symbolLevels=[],this.vvColorValues=new Float32Array(8),this.vvColors=new Float32Array(32),this.vvOpacityValues=new Float32Array(8),this.vvOpacities=new Float32Array(8),this.vvSizeMinMaxValue=new Float32Array(4),this.ddColors=new Float32Array(32),this.ddBackgroundColor=new Float32Array(4),this.ddActiveDots=new Float32Array(8),this._vvMaterialParameters={vvSizeEnabled:!1,vvColorEnabled:!1,vvRotationEnabled:!1,vvRotationType:"geographic",vvOpacityEnabled:!1}}getSizeVVFieldStops(i){const s=this._vvSizeFieldStops;switch(s.type){case"static":return s;case"level-dependent":return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(s.levels[i],(()=>{let e=1/0,a=0;for(const t in s.levels){const s=parseFloat(t),o=Math.abs(i-s);o<e&&(e=o,a=s)}if(e===1/0)return{sizes:new Float32Array([0,0,0,0,0,0]),values:new Float32Array([0,0,0,0,0,0])};const o=i-a,l=Math.pow(2,o/2),r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(s.levels[a]),n=new Float32Array(r.values);return n[2]*=l,n[3]*=l,{sizes:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(r.sizes),values:n}}))}}get vvMaterialParameters(){return this._vvMaterialParameters}update(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._vvInfo)&&this._updateVisualVariables(this._vvInfo.vvRanges,e)}setInfo(e,t,s){switch(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)&&s.forEach((e=>this._updateEffects(e))),this._vvInfo=t,e.type){case"dot-density":this._updateDotDensityInfo(e)}}getVariation(){return{ddDotBlending:this.ddDotBlending,outsideLabelsVisible:this.outsideLabelsVisible,oesTextureFloat:Object(_webgl_capabilities_js__WEBPACK_IMPORTED_MODULE_6__["default"])().supportsTextureFloat}}getVariationHash(){return(this.ddDotBlending?1:0)|(this.outsideLabelsVisible?1:0)<<1}_updateEffects(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&e.filter&&e.filter.enabled&&(this.outsideLabelsVisible=e.excludedLabelsVisible)}_updateVisualVariables(e,t){const i=this._vvMaterialParameters;if(i.vvOpacityEnabled=!1,i.vvSizeEnabled=!1,i.vvColorEnabled=!1,i.vvRotationEnabled=!1,!e)return;const s=e.size;if(s){if(i.vvSizeEnabled=!0,s.minMaxValue){const e=s.minMaxValue;let i,a;if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(e.minSize)&&Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isDefined"])(e.maxSize))if(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(e.minSize)&&Object(_Utils_js__WEBPACK_IMPORTED_MODULE_7__["isNumber"])(e.maxSize))i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(e.minSize),a=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(e.maxSize);else{const s=t.scale;i=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(s,e.minSize.stops)),a=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(s,e.maxSize.stops))}this.vvSizeMinMaxValue.set([e.minDataValue,e.maxDataValue,i,a])}if(s.scaleStops&&(this.vvSizeScaleStopsValue=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(c(t.scale,s.scaleStops.stops))),s.unitValue){const e=Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__["getMetersPerUnitForSR"])(t.spatialReference)/_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_4__["meterIn"][s.unitValue.unit];this.vvSizeUnitValueToPixelsRatio=e/t.resolution}s.fieldStops&&(this._vvSizeFieldStops=s.fieldStops)}const a=e.color;a&&(i.vvColorEnabled=!0,this.vvColorValues.set(a.values),this.vvColors.set(a.colors));const n=e.opacity;n&&(i.vvOpacityEnabled=!0,this.vvOpacityValues.set(n.values),this.vvOpacities.set(n.opacities));const v=e.rotation;v&&(i.vvRotationEnabled=!0,i.vvRotationType=v.type)}_updateDotDensityInfo(e){const t=e.attributes;this.ddDotValue=e.dotValue,this.ddDotScale=e.referenceScale,this.ddDotSize=e.dotSize,this.ddDotBlending=e.dotBlendingEnabled,this.ddSeed=e.seed;for(let e=0;e<_definitions_js__WEBPACK_IMPORTED_MODULE_5__["DOT_DENSITY_MAX_FIELDS"];e++){const i=e>=t.length?new _Color_js__WEBPACK_IMPORTED_MODULE_1__["default"]([0,0,0,0]):t[e].color;h(this.ddColors,i,4*e)}for(let t=0;t<8;t++)this.ddActiveDots[t]=t<e.attributes.length?1:0;h(this.ddBackgroundColor,e.backgroundColor)}}


/***/ }),

/***/ "X0J2":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/AttributeStoreView.js ***!
  \*******************************************************************************/
/*! exports provided: AttributeStoreView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeStoreView", function() { return j; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _util_debug_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util/debug.js */ "l8tk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const z=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.AttributeStoreView"),D=Object(_util_debug_js__WEBPACK_IMPORTED_MODULE_11__["createDebugLogger"])(_util_debug_js__WEBPACK_IMPORTED_MODULE_11__["DEBUG_ATTR_UPDATES"],z),S=t=>2147483647&t;class U{constructor(t,e,i){this._texture=null,this._lastTexture=null,this._fbos={},this.texelSize=4;const{buffer:s,pixelType:r,textureOnly:h}=t,o=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(r);this.shared=i,this.pixelType=r,this.size=e,this.textureOnly=h,h||(this.data=new o(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(s))),this._resetRange()}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._texture,(t=>t.dispose()));for(const t in this._fbos)Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._fbos[t],(e=>{"0"===t&&e.detachColorTexture(),e.dispose()})),this._fbos[t]=null;this._texture=null}get _textureDesc(){return{target:3553,wrapMode:33071,pixelFormat:6408,dataType:this.pixelType,samplingMode:9728,width:this.size,height:this.size}}setData(t,e,i){const s=S(t),r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data),h=s*this.texelSize+e;!r||h>=r.length||(r[h]=i,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s))}getData(t,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this.data))return null;const s=S(t)*this.texelSize+i;return!this.data||s>=this.data.length?null:this.data[s]}getTexture(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this._texture,(()=>this._initTexture(t)))}getFBO(t,i=0){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._fbos[i])){const e={colorTarget:0,depthStencilTarget:0},s=0===i?this.getTexture(t):this._textureDesc;this._fbos[i]=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](t,e,s)}return this._fbos[i]}get locked(){return!(5121!==this.pixelType||!this.shared||this.textureOnly||!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-atomics")||!this.data)&&1===Atomics.load(this.data,0)}updateTexture(t){if(!this.locked)try{const e=this.dirtyStart,i=this.dirtyEnd;if(e>i)return;this._resetRange();const s=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this.data).buffer,r=this.getTexture(t),h=4,o=(e-e%this.size)/this.size,n=(i-i%this.size)/this.size,d=o,l=this.size,p=n,x=o*this.size*h,c=(l+p*this.size)*h-x,_=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(this.pixelType),g=_.BYTES_PER_ELEMENT;try{new _(s,x*g,c)}catch(t){console.debug(t)}const f=new _(s,x*g,c),b=this.size,m=p-d+1;if(m>this.size)return void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-webgl","Out-of-bounds index when updating AttributeData"));r.updateData(0,0,d,b,m,f)}catch(t){console.debug(t)}}update(t){const{data:e,start:i,end:r}=t;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e)){const s=this.data,r=i*this.texelSize;for(let i=0;i<e.length;i++){const a=1<<i%this.texelSize;t.layout&a&&(s[r+i]=e[i])}}this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,r)}resize(t,e){const i=this.size;if(this.size=e,this.textureOnly)return void(i!==this.size&&(this._lastTexture=this._texture,this._texture=null));const s=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(this.pixelType);this.destroy(),this.data=new s(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(t.buffer))}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}_initTexture(t){const e=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](t,this._textureDesc,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(this.data,void 0));if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._lastTexture)&&this._fbos[0]){const i=this._lastTexture.descriptor.width,s=this._lastTexture.descriptor.height,r=this._lastTexture.descriptor.dataType,a=this._lastTexture.descriptor.pixelFormat,h=this.getFBO(t),o=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelBytes"])(r),n=new(Object(_Utils_js__WEBPACK_IMPORTED_MODULE_10__["getPixelArrayCtor"])(r))(new ArrayBuffer(i*s*o*this.texelSize)),d=t.getBoundFramebufferObject(),{x:u,y:l,width:p,height:x}=t.getViewport();t.bindFramebuffer(h),h.readPixels(0,0,i,s,a,r,n),e.updateData(0,0,0,2*i,s/2,n),t.setViewport(u,l,p,x),t.bindFramebuffer(d)}return this.destroy(),this._texture=e,this._texture}}class j{constructor(){this._initialized=!1,this._forceNextUpload=!1,this._locked=!1}initialize(t){const{blocks:r,shared:a,size:h}=t;if(this.shared=a,this.size=h,D("Initializing AttributeStoreView",t),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._data))this._data=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapMany"])(r,(t=>new U(t,h,a)));else for(let t=0;t<this._data.length;t++){const i=this._data[t],o=r[t];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i)?this._data[t]=new U(o,h,a):i.resize(o,h))}this._initialized=!0}destroy(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._data,(t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapMany"])(t,(t=>t.destroy())))),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(this._defaultTexture,(t=>t.dispose()))}getBlock(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._data))return null;return this._data[t]}setLabelMinZoom(t,e){this.setData(t,0,1,e)}getLabelMinZoom(t){return this.getData(t,0,1,255)}getFilterFlags(t){return this.getData(t,0,0,0)}getVVSize(t){return this.getData(t,_definitions_js__WEBPACK_IMPORTED_MODULE_5__["ATTRIBUTE_DATA_VV"],0,0)}getData(t,i,r,h){if(!this._data)return 0;const o=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data)[i];if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(o))return 0;const n=o.getData(t,r);return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)?n:h}setData(t,e,i,s){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data)[e];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(r).setData(t,i,s)}lockTextureUpload(){this._locked=!0}unlockTextureUpload(){this._locked=!1}forceTextureUpload(){this._forceNextUpload=!0}async requestUpdate(t){if(this._pendingAttributeUpdate)return void z.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-webgl","Tried to update attribute data with a pending update"));const e=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["createResolver"])();return D("AttributeStoreView Update Requested",t),this._pendingAttributeUpdate={data:t,resolver:e},e.promise}update(){if(this._initialized&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._pendingAttributeUpdate)){const{data:t,resolver:e}=this._pendingAttributeUpdate,i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data);for(let e=0;e<t.blocks.length;e++){const s=t.blocks[e],a=i[e];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(a,(t=>Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(s,(i=>{D(`Updating block ${e}`,i),t.update(i)}))))}this._pendingAttributeUpdate=null,e()}}bindTextures(t){this.update();const e=this._getDefaultTexture(t);if(!this._initialized)return t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]),void t.bindTexture(e,_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"]);const i=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(this._data);this._locked&&!this._forceNextUpload||(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["forEachSome"])(i,(e=>e.updateTexture(t))),this._forceNextUpload=!1),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[0],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[1],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[2],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]),t.bindTexture(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["mapOr"])(i[3],e,(e=>e.getTexture(t))),_definitions_js__WEBPACK_IMPORTED_MODULE_5__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"])}_getDefaultTexture(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._defaultTexture)){const e={wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1};this._defaultTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_7__["default"](t,e,new Uint8Array(4))}return this._defaultTexture}}


/***/ }),

/***/ "ZdL5":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Fader.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t=400){this.duration=t,this._lastTime=0,this._elapsed=0,this._value=0,this._finished=!1}get value(){return this._value}reset(){this._lastTime=0,this._elapsed=0,this._value=0}step(){const t=performance.now();if(0===this._lastTime)return this._lastTime=t,this._value=0,!0;if(this._elapsed>=this.duration)return!0;const s=t-this._lastTime;return this._elapsed+=s,this._lastTime=t,this._value=Math.min(this._elapsed/this.duration,1),!1}});


/***/ }),

/***/ "ZnvS":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileDisplayData.js ***!
  \****************************************************************************/
/*! exports provided: default, groupRecordsByGeometryType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupRecordsByGeometryType", function() { return e; });
/* harmony import */ var _WGLDisplayList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WGLDisplayList.js */ "bbr/");
/* harmony import */ var _util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/serializationUtils.js */ "wnVl");
/* harmony import */ var _WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WGLDisplayObject.js */ "ZByl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(s){const t=[[],[],[],[],[]],i=s;for(const s of i)for(const i of s.displayRecords)t[i.geometryType].push(i);return t}class r{constructor(){}get displayObjectRegistry(){if(!this._displayObjectRegistry){this._displayObjectRegistry=new Map;for(const s of this.displayObjects)this._displayObjectRegistry.set(s.id,s)}return this._displayObjectRegistry}get displayList(){return this._displayList}computeDisplayList(t){if(this._displayList=new _WGLDisplayList_js__WEBPACK_IMPORTED_MODULE_0__["default"](t),t)for(const s of this.displayObjects)for(const t of s.displayRecords)this._displayList.addToList(t);else{const s=e(this.displayObjects),t=s.length;for(let i=0;i<t;++i){const t=s[i];this._displayList.addToList(t)}}}clone(){const s=new r;return this.displayObjects&&(s.displayObjects=this.displayObjects.map((s=>s.clone()))),s}serialize(s){return Object(_util_serializationUtils_js__WEBPACK_IMPORTED_MODULE_1__["serializeList"])(s,this.displayObjects),s}_deserializeObjects(s){const t=s.readInt32(),e=new Array(t),r=new Map;for(let t=0;t<e.length;++t){const l=_WGLDisplayObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].deserialize(s);e[t]=l,r.set(l.id,l)}this.displayObjects=e,this._displayList=null,this._displayObjectRegistry=r}static deserialize(s){const t=new r;return t._deserializeObjects(s),t}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "ZyIX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js ***!
  \**************************************************************************/
/*! exports provided: default, sortByLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByLevel", function() { return n; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brushes/WGLBrushInfo.js */ "b3VY");
/* harmony import */ var _brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brushes/WGLBrushStencil.js */ "7F7D");
/* harmony import */ var _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WGLContainer.js */ "mgI5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=(e,r)=>e.key.level-r.key.level!=0?e.key.level-r.key.level:e.key.row-r.key.row!=0?e.key.row-r.key.row:e.key.col-r.key.col;/* harmony default export */ __webpack_exports__["default"] = (class extends _WGLContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]{constructor(e){super(),this._tileInfoView=e}renderChildren(e){this.sortChildren(n),this.setStencilReference(),super.renderChildren(e)}createRenderParams(e){const{state:r}=e;return{...super.createRenderParams(e),requiredLevel:this._tileInfoView.getClosestInfoForScale(r.scale).level,displayLevel:this._tileInfoView.tileInfo.scaleToZoom(r.scale)}}prepareRenderPasses(t){const n=t.registerRenderPass({name:"stencil",brushes:[_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_2__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG|_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].MAP|_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].HIGHLIGHT,target:()=>this.getStencilTarget()}),i=t.registerRenderPass({name:"tileInfo",brushes:[_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_1__["default"]],drawPhase:_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLDrawPhase"].DEBUG,target:()=>this.children,has:"esri-tiles-debug"});return[...super.prepareRenderPasses(t),n,i]}getStencilTarget(){return this.children}updateTransforms(e){for(const r of this.children){const s=this._tileInfoView.getTileResolution(r.key);r.setTransform(e,s)}}setStencilReference(){let e=1;for(const r of this.children)r.stencilRef=e++}});


/***/ }),

/***/ "ahbm":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileBufferData.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}clone(){const e=new r;for(let r=0;r<this.geometries.length;r++){const f=this.geometries[r],t=e.geometries[r];t.indexBuffer=f.indexBuffer.slice(),t.vertexBuffer={};for(const e in f.vertexBuffer){const{data:r,stride:i}=f.vertexBuffer[e];t.vertexBuffer[e]={data:r.slice(),stride:i}}}return e}static deserialize(f){const t=new r;for(let r=0;r<5;++r){t.geometries[r].indexBuffer=new Uint32Array(f.geometries[r].indexBuffer),t.geometries[r].vertexBuffer={};for(const i in f.geometries[r].vertexBuffer)t.geometries[r].vertexBuffer[i]={data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_0__["allocateTypedArrayBufferwithData"])(f.geometries[r].vertexBuffer[i].data,f.geometries[r].vertexBuffer[i].stride),stride:f.geometries[r].vertexBuffer[i].stride}}return t}serialize(){const e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]};for(let r=0;r<5;++r)for(const f in this.geometries[r].vertexBuffer)e.geometries[r].vertexBuffer[f]={data:this.geometries[r].vertexBuffer[f].data.buffer,stride:this.geometries[r].vertexBuffer[f].stride};return e}getBuffers(){const e=[];for(let r=0;r<5;++r){e.push(this.geometries[r].indexBuffer.buffer);for(const f in this.geometries[r].vertexBuffer)e.push(this.geometries[r].vertexBuffer[f].data.buffer)}return e}}/* harmony default export */ __webpack_exports__["default"] = (r);


/***/ }),

/***/ "bbr/":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLDisplayList.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.WGLDisplayList");function i(e,t,o,...n){t<e.length?e.splice(t,o,...n):e.push(...n)}const r=new Map;r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].MAP,[_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL,_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE,_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER,_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT]),r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL,[_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL]),r.set(_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLDrawPhase"].LABEL_ALPHA,[_enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL]);class s{constructor(e=!1){this.symbolLevels=[],this.unified=e}replay(e,t,o){if(this.unified)for(const n of this.symbolLevels)for(const i of n.zLevels){const n=i.geometryDPInfo.unified;if(n)for(const i of n){const n=e.painter.getGeometryBrush(i.geometryType),r=t.getGeometry(i.geometryType);n.prepareState(e,t),n.drawGeometry(e,t,i,r,o)}}}get empty(){return!this.symbolLevels||0===this.symbolLevels.length}clear(){this.symbolLevels.length=0}addToList(e,t){if(Array.isArray(e))for(const o of e)this._addToList(o,t);else this._addToList(e,t)}removeFromList(e){Array.isArray(e)||(e=[e]);let t=null;for(const o of e)t=this._removeFromList(o);return t}byType(e,t){for(const o of this.symbolLevels)for(const n of o.zLevels){const o=n.geometryDPInfo,i=this.getDPInfoType(e);if(o[i])for(const e of o[i])t(e)}}clone(){const e=new s(this.unified);for(const t of this.symbolLevels)e.symbolLevels.push(t.clone());return e}splitAfter(e){const t=this._getDisplayList(e.symbolLevel,e.zOrder,e.geometryType),o=t.length,n=e.indexFrom+e.indexCount;for(let i=0;i<o;++i){const o=t[i];if(o.geometryType===e.geometryType&&n>o.indexFrom&&n<=o.indexFrom+o.indexCount){if(n<o.indexFrom+o.indexCount){const e=new l;e.geometryType=o.geometryType,e.materialKey=o.materialKey,e.indexFrom=n,e.indexCount=o.indexFrom+o.indexCount-n,t.splice(i+1,0,e),o.indexCount=n-o.indexFrom}return i}}}_addToList(e,t){const o=e.symbolLevel,n=e.zOrder,r=this._getDisplayList(o,n,e.geometryType),s=null!=t?t:r.length-1,m=s>=0&&s<r.length?r[s]:null;if(null===m||m.materialKey!==e.materialKey||m.indexFrom+m.indexCount!==e.indexFrom||this.unified&&m.geometryType!==e.geometryType){const t=new l;t.indexFrom=e.indexFrom,t.indexCount=e.indexCount,t.materialKey=e.materialKey,t.geometryType=e.geometryType,i(r,s+1,0,t)}else m.indexCount+=e.indexCount}_removeFromList(e){const t=e.symbolLevel,o=e.zOrder,n=this._getDisplayList(t,o,e.geometryType),r=n.length;let s;for(let t=0;t<r;++t){const o=n[t];if(e.indexFrom+e.indexCount>o.indexFrom&&e.indexFrom<o.indexFrom+o.indexCount&&(!this.unified||o.geometryType===e.geometryType)){s=t;break}}if(void 0!==s){const t=n[s];if(e.indexFrom===t.indexFrom)return t.indexCount-=e.indexCount,t.indexFrom+=e.indexCount,0===t.indexCount&&i(n,s,1),s-1;if(e.indexFrom+e.indexCount===t.indexFrom+t.indexCount)return t.indexCount-=e.indexCount,0===t.indexCount?(i(n,s,1),s-1):s;{const o=t.indexFrom,r=e.indexFrom-t.indexFrom,m=e.indexCount,y=t.indexFrom+t.indexCount-(e.indexFrom+e.indexCount);t.indexCount=r;const d=new l;return d.geometryType=t.geometryType,d.materialKey=t.materialKey,d.indexFrom=o+r+m,d.indexCount=y,i(n,s+1,0,d),s}}return null}_getDisplayList(e,t,n){let i;const r=this.symbolLevels.length;for(let t=0;t<r;t++)if(this.symbolLevels[t].symbolLevel===e){i=this.symbolLevels[t];break}let s;i||(i=new d,i.symbolLevel=e,this.symbolLevels.push(i));const l=i.zLevels.length;for(let e=0;e<l;e++)if(i.zLevels[e].zLevel===t){s=i.zLevels[e];break}let f;if(s||(s=new y,s.geometryDPInfo=new m,s.zLevel=t,i.zLevels.push(s)),this.unified)s.geometryDPInfo.unified||(s.geometryDPInfo.unified=[]),f=s.geometryDPInfo.unified;else switch(n){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:s.geometryDPInfo.fill||(s.geometryDPInfo.fill=[]),f=s.geometryDPInfo.fill;break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:s.geometryDPInfo.line||(s.geometryDPInfo.line=[]),f=s.geometryDPInfo.line;break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:s.geometryDPInfo.marker||(s.geometryDPInfo.marker=[]),f=s.geometryDPInfo.marker;break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:s.geometryDPInfo.text||(s.geometryDPInfo.text=[]),f=s.geometryDPInfo.text;break;case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:s.geometryDPInfo.label||(s.geometryDPInfo.label=[]),f=s.geometryDPInfo.label;break;default:console.error("Trying to add a record with geometry type '"+n+"'.")}return f}getDPInfoType(e){if(this.unified)return"unified";switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].FILL:return"fill";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LINE:return"line";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].MARKER:return"marker";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].TEXT:return"text";case _enums_js__WEBPACK_IMPORTED_MODULE_1__["WGLGeometryType"].LABEL:return"label";default:return void n.error(`DisplayList: Tried to convert unknown geometryType: ${e}`)}}}class l{constructor(){this.materialKey=null,this.indexFrom=0,this.indexCount=0}clone(){const e=new l;return e.geometryType=this.geometryType,e.materialKey=this.materialKey,e.indexFrom=this.indexFrom,e.indexCount=this.indexCount,e}}class m{constructor(){this.fill=null,this.line=null,this.marker=null,this.text=null,this.label=null,this.unified=null}clone(){const e=new m;return e.fill=this.fill&&this.fill.map((e=>e.clone())),e.line=this.line&&this.line.map((e=>e.clone())),e.marker=this.marker&&this.marker.map((e=>e.clone())),e.text=this.text&&this.text.map((e=>e.clone())),e.label=this.label&&this.label.map((e=>e.clone())),e.unified=this.unified&&this.unified.map((e=>e.clone())),e}}class y{constructor(){this.geometryDPInfo=new m}clone(){const e=new y;return e.zLevel=this.zLevel,e.geometryDPInfo=this.geometryDPInfo.clone(),e}}class d{constructor(){this.zLevels=[]}clone(){const e=new d;e.symbolLevel=this.symbolLevel;for(const t of this.zLevels)e.zLevels.push(t.clone());return e}}/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "by2V":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/FeatureContainer.js ***!
  \***********************************************************************/
/*! exports provided: FeatureContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureContainer", function() { return l; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../geometry/support/aaBoundingRect.js */ "kYAx");
/* harmony import */ var _core_Queue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Queue.js */ "jKdI");
/* harmony import */ var _webgl_TileData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webgl/TileData.js */ "fZs+");
/* harmony import */ var _webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./webgl/WGLTile.js */ "KFVX");
/* harmony import */ var _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./webgl/AttributeStoreView.js */ "X0J2");
/* harmony import */ var _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl/TileContainer.js */ "ZyIX");
/* harmony import */ var _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webgl/WGLRendererInfo.js */ "Vmjh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l extends _webgl_TileContainer_js__WEBPACK_IMPORTED_MODULE_6__["default"]{constructor(e){super(e),this._rendererInfo=new _webgl_WGLRendererInfo_js__WEBPACK_IMPORTED_MODULE_7__["WGLRendererInfo"],this._materialItemsRequestQueue=new _core_Queue_js__WEBPACK_IMPORTED_MODULE_2__["default"],this.attributeView=new _webgl_AttributeStoreView_js__WEBPACK_IMPORTED_MODULE_5__["AttributeStoreView"]}destroy(){this.removeAllChildren(),this.children.forEach((e=>e.destroy())),this.attributeView.destroy(),this._materialItemsRequestQueue.clear()}setRendererInfo(e,t,r){this._rendererInfo.setInfo(e,t,r),this.requestRender()}async getMaterialItems(t,r){if(!t||0===t.length)return null;const s=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createResolver"])();return this._materialItemsRequestQueue.push({items:t,abortOptions:r,resolver:s}),this.requestRender(),s.promise}onTileData(e,t){if(t.addOrUpdate&&"tileDisplayData"in t.addOrUpdate)e.setData(t);else{const r=t.addOrUpdate&&_webgl_TileData_js__WEBPACK_IMPORTED_MODULE_3__["TileData"].decode(t.addOrUpdate),s={...t,addOrUpdate:r};e.setData(s)}this.contains(e)||this.addChild(e),this.requestRender()}onTileError(e){e.clear(),this.contains(e)||this.addChild(e)}doRender(e){if(e.context.capabilities.textureFloat,e.context.capabilities.vao,this._materialItemsRequestQueue.length>0){let t=this._materialItemsRequestQueue.pop();for(;t;)this._processMaterialItemRequest(e,t),t=this._materialItemsRequestQueue.pop()}super.doRender(e)}renderChildren(e){for(const t of this.children)t.commitChanges(e);this._rendererInfo.update(e.state),super.renderChildren(e)}createTile(e){const t=this._tileInfoView.getTileBounds(Object(_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_1__["create"])(),e);return new _webgl_WGLTile_js__WEBPACK_IMPORTED_MODULE_4__["WGLTile"](e,t)}destroyTile(e){this.removeChild(e),e.destroy()}createRenderParams(e){return{...super.createRenderParams(e),rendererInfo:this._rendererInfo,attributeView:this.attributeView}}_processMaterialItemRequest(e,{items:r,abortOptions:s,resolver:i}){const{painter:o,pixelRatio:a}=e,n=r.map((e=>o.textureManager.rasterizeItem(e.symbol,a,e.glyphIds,s)));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["all"])(n).then((e=>{if(!this.stage)return void i.reject();const t=e.map(((e,t)=>({id:r[t].id,mosaicItem:e})));i.resolve(t)}),i.reject)}}


/***/ }),

/***/ "fZs+":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TileData.js ***!
  \*********************************************************************/
/*! exports provided: TileData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileData", function() { return m; });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _Utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils.js */ "yN2G");
/* harmony import */ var _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MemoryRequirements.js */ "FA+c");
/* harmony import */ var _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TileBufferData.js */ "ahbm");
/* harmony import */ var _WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WGLDisplayRecord.js */ "opKs");
/* harmony import */ var _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TileDisplayData.js */ "ZnvS");
/* harmony import */ var _util_Writer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/Writer.js */ "PeSW");
/* harmony import */ var _mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mesh/MeshData.js */ "acOm");
/* harmony import */ var _mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mesh/VertexBuffer.js */ "2vGY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__["default"],c=new _MemoryRequirements_js__WEBPACK_IMPORTED_MODULE_2__["default"];function p(e,r){const i={};for(const s in e){const a={data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(r,e[s]),stride:e[s]};i[s]=a}return i}class m{constructor(){this.tileDisplayData=null,this.tileBufferData=null}reshuffle(){u.reset();const e=Object(_TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["groupRecordsByGeometryType"])(this.tileDisplayData.displayObjects);for(const t of e)for(const e of t)e&&u.needMore(e.geometryType,e.meshData?e.meshData.vertexCount:e.vertexCount,e.meshData?e.meshData.indexData.length:e.indexCount);const i=e.length,a=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"];for(let e=0;e<i;++e){a.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*u.indicesFor(e)));const r=[];for(const t in this.tileBufferData.geometries[e].vertexBuffer)r.push(this.tileBufferData.geometries[e].vertexBuffer[t].stride);const i=m._computeVertexAlignment(r),s=Math.round(1.5*u.verticesFor(e)),o=m._align(s,i);for(const r in this.tileBufferData.geometries[e].vertexBuffer){const i=this.tileBufferData.geometries[e].vertexBuffer[r].stride;a.geometries[e].vertexBuffer[r]={stride:i,data:Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o,i)}}}c.reset(),this.tileDisplayData.displayList.clear();for(let t=0;t<i;++t){const i=e[t];for(const e of i){if(e.meshData)e.writeMeshDataToBuffers(c.verticesFor(t),a.geometries[t].vertexBuffer,c.indicesFor(t),a.geometries[t].indexBuffer),e.meshData=null;else{const i=this.tileBufferData.geometries[t].vertexBuffer,s=this.tileBufferData.geometries[t].indexBuffer,o=a.geometries[t].vertexBuffer,n=a.geometries[t].indexBuffer,f=c.verticesFor(t),l=c.indicesFor(t);Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(f,l,o,n,e,i,s),e.vertexFrom=f,e.indexFrom=l}c.needMore(t,e.vertexCount,e.indexCount)}this.tileDisplayData.displayList.unified||this.tileDisplayData.displayList.addToList(i)}if(this.tileDisplayData.displayList.unified)for(const e of this.tileDisplayData.displayObjects)this.tileDisplayData.displayList.addToList(e.displayRecords);this.tileBufferData=a}reshuffleBulkAdd(i,a,o){const n=i.addOrUpdate.tileDisplayData.displayObjects,f=this.tileDisplayData.displayObjects;u.reset();for(let e=0;e<f.length;e++){const t=f[e];for(let e=0;e<t.displayRecords.length;e++){const r=t.displayRecords[e];u.needMore(r.geometryType,r.vertexCount,r.indexCount)}}for(let e=a;e<n.length;e++){const t=n[e];for(let r=e===a?o:0;r<t.displayRecords.length;r++){const e=t.displayRecords[r];u.needMore(e.geometryType,e.vertexCount,e.indexCount)}}const l=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"];for(let e=0;e<5;e++){l.geometries[e].indexBuffer=new Uint32Array(Math.round(1.5*u.indicesFor(e)));const r=[],i=this.tileBufferData.geometries[e].vertexBuffer;for(const e in i)r.push(i[e].stride);const s=m._computeVertexAlignment(r),a=Math.round(1.5*u.verticesFor(e)),o=m._align(a,s);for(const r in i){const s=i[r].stride,a=Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["allocateTypedArrayBuffer"])(o,s);l.geometries[e].vertexBuffer[r]={stride:s,data:a}}}c.reset(),this.tileDisplayData.displayList.clear();for(let e=0;e<f.length;e++){const t=f[e];for(let e=0;e<t.displayRecords.length;e++){const i=t.displayRecords[e],s=i.geometryType,a=this.tileBufferData.geometries[s].vertexBuffer,o=this.tileBufferData.geometries[s].indexBuffer,n=l.geometries[s].vertexBuffer,f=l.geometries[s].indexBuffer,d=c.verticesFor(s),u=c.indicesFor(s);Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(d,u,n,f,i,a,o),i.vertexFrom=d,i.indexFrom=u,c.needMore(s,i.vertexCount,i.indexCount),this.tileDisplayData.displayList.addToList(i)}}const d=this.tileDisplayData.displayObjectRegistry;if(0!==o){const t=n[a];for(let i=0;i<o;i++){const s=t.displayRecords[i];if(d.get(t.id)){if(s.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL&&s.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE)continue}const a=s.geometryType,o=this.tileBufferData.geometries[a].vertexBuffer,n=this.tileBufferData.geometries[a].indexBuffer,f=l.geometries[a].vertexBuffer,u=l.geometries[a].indexBuffer,p=c.verticesFor(a),m=c.indicesFor(a);Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(p,m,f,u,s,o,n),s.vertexFrom=p,s.indexFrom=m,c.needMore(a,s.vertexCount,s.indexCount),this.tileDisplayData.displayList.addToList(s)}}for(let t=a;t<n.length;t++){const s=n[t],f=t===a?o:0,u=d.get(s.id);for(let t=f;t<s.displayRecords.length;t++){const a=s.displayRecords[t];if(u){if(a.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].FILL&&a.geometryType!==_enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE)continue;u.displayRecords.push(a)}const o=a.geometryType,n=i.addOrUpdate.tileBufferData.geometries[o],f=n.vertexBuffer,d=n.indexBuffer,p=l.geometries[o].vertexBuffer,m=l.geometries[o].indexBuffer,D=c.verticesFor(o),y=c.indicesFor(o);Object(_Utils_js__WEBPACK_IMPORTED_MODULE_1__["copyMeshData"])(D,y,p,m,a,f,d),a.vertexFrom=D,a.indexFrom=y,c.needMore(o,a.vertexCount,a.indexCount),this.tileDisplayData.displayList.addToList(a)}u||(d.set(s.id,s),this.tileDisplayData.displayObjects.push(s))}this.tileBufferData=l}getStrides(){const e=[];for(let t=0;t<this.tileBufferData.geometries.length;++t){const r=this.tileBufferData.geometries[t];e[t]={};for(const i in r.vertexBuffer)e[t][i]=r.vertexBuffer[i].stride}return e}clone(){const e=new m;return e.tileBufferData=this.tileBufferData.clone(),e.tileDisplayData=this.tileDisplayData.clone(),e}_guessSize(){const{displayObjects:e}=this.tileDisplayData,t=Math.min(e.length,4);let r=0;for(let i=0;i<t;i++)r=Math.max(r,e[i].displayRecords.length);return 2*(12*e.length+e.length*r*40)}serialize(){const e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new _util_Writer_js__WEBPACK_IMPORTED_MODULE_6__["default"](Int32Array,this._guessSize())).buffer();return t.push(r),{result:{displayData:r,bufferData:e},transferList:t}}static decode(e){const t=_mesh_MeshData_js__WEBPACK_IMPORTED_MODULE_7__["MeshData"].deserializeDisplayObjects(e),r={};for(const t in e.vertexBuffersMap)r[t]=_mesh_VertexBuffer_js__WEBPACK_IMPORTED_MODULE_8__["VertexBuffers"].decode(e.vertexBuffersMap[t]);return m.fromMeshData({displayObjects:t,vertexBuffersMap:r})}static fromMeshData(e){const t=new m,r=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["default"],i=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"];r.displayObjects=e.displayObjects;for(const t in e.vertexBuffersMap){const r=e.vertexBuffersMap[t];i.geometries[t].indexBuffer=r.indexBuffer,i.geometries[t].vertexBuffer=r.namedBuffers}return t.tileDisplayData=r,t.tileBufferData=i,t}static bind(e,t){const r=new m;return r.tileDisplayData=e,r.tileBufferData=t,r}static create(e,t){const r=new m;r.tileDisplayData=new _TileDisplayData_js__WEBPACK_IMPORTED_MODULE_5__["default"],r.tileDisplayData.displayObjects=e;const i=[0,0,0,0,0],n=[0,0,0,0,0],f=[[],[],[],[],[]];for(const t of e)for(const e of t.displayRecords)f[e.geometryType].push(e),i[e.geometryType]+=e.meshData.vertexCount,n[e.geometryType]+=e.meshData.indexData.length;const l=new _TileBufferData_js__WEBPACK_IMPORTED_MODULE_3__["default"],d=function(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}(t);for(let e=0;e<5;e++){const t=new Uint32Array(n[e]),r=p(d[e],i[e]);_WGLDisplayRecord_js__WEBPACK_IMPORTED_MODULE_4__["default"].writeAllMeshDataToBuffers(f[e],r,t),l.geometries[e]={indexBuffer:t,vertexBuffer:r}}return r.tileBufferData=l,r}static _align(e,t){const r=e%t;return 0===r?e:e+(t-r)}static _computeVertexAlignment(e){let t=!1,r=!1;for(const i of e)i%4==2?t=!0:i%4!=0&&(r=!0);return r?4:t?2:1}}


/***/ }),

/***/ "gzK8":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
  \**********************************************************************************************************/
/*! exports provided: convertColorVariable, convertVisualVariables, getVisualVariableSizeValueRepresentationRatio, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertColorVariable", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertVisualVariables", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariableSizeValueRepresentationRatio", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisualVariablesFields", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeElement", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeSizeStops", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopToSizeStop", function() { return a; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../engine/webgl/definitions.js */ "jIHu");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../engine/webgl/color.js */ "qaIE");
/* harmony import */ var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../engine/webgl/visualVariablesUtils.js */ "NIRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(e,t){if(!e||!t)return e;switch(t){case"radius":case"distance":return 2*e;case"diameter":case"width":return e;case"area":return Math.sqrt(e)}return e}function a(e){return{value:e.value,size:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size)}}function u(e){return e.map((e=>a(e)))}function c(e){if("string"==typeof e||"number"==typeof e)return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e);const s=e;return{type:"size",expression:s.expression,stops:u(s.stops)}}function p(e){const t=e&&e.length>0?{}:null;return t&&e.forEach((e=>{const s=e.type;e.field&&(t[s]=e.field)})),t}const f=e=>{const t=[],o=[],i=u(e),l=i.length;for(let e=0;e<6;e++){const r=i[Math.min(e,l-1)];t.push(r.value),o.push(null==r.size?_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__["NAN_MAGIC_NUMBER"]:Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(r.size))}return{values:new Float32Array(t),sizes:new Float32Array(o)}};function m(e){const t=e&&e.length>0?{}:null,s=t?{}:null;if(!t)return{vvFields:t,vvRanges:s};for(const n of e)if(n.field&&(t[n.type]=n.field),"size"===n.type){s.size||(s.size={});const e=n;switch(Object(_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTypeOfSizeVisualVariable"])(e)){case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_MINMAX_VALUE:s.size.minMaxValue={minDataValue:e.minDataValue,maxDataValue:e.maxDataValue,minSize:c(e.minSize),maxSize:c(e.maxSize)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_SCALE_STOPS:s.size.scaleStops={stops:u(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_FIELD_STOPS:if(e.levels){const t={};for(const s in e.levels)t[s]=f(e.levels[s]);s.size.fieldStops={type:"level-dependent",levels:t}}else s.size.fieldStops={type:"static",...f(e.stops)};break;case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_UNIT_VALUE:s.size.unitValue={unit:e.valueUnit,valueRepresentation:e.valueRepresentation}}}else if("color"===n.type)s.color=y(n);else if("opacity"===n.type)s.opacity=v(n);else if("rotation"===n.type){const e=n;s.rotation={type:e.rotationType}}return{vvFields:t,vvRanges:s}}function v(e){const t={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof e.field){if(!e.stops)return null;{if(e.stops.length>8)return null;const s=e.stops;for(let e=0;e<8;++e){const n=s[Math.min(e,s.length-1)];t.values[e]=n.value,t.opacities[e]=n.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return null;{const s=e.stops&&e.stops.length>=0&&e.stops[0].opacity;for(let e=0;e<8;e++)t.values[e]=1/0,t.opacities[e]=s}}return t}function g(e,t,s){e[4*t+0]=s.r/255,e[4*t+1]=s.g/255,e[4*t+2]=s.b/255,e[4*t+3]=s.a}function y(t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return null;if(t.normalizationField)return null;const s={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof t.field){if(!t.stops)return null;{if(t.stops.length>8)return null;s.field=t.field;const e=t.stops;for(let t=0;t<8;++t){const n=e[Math.min(t,e.length-1)];s.values[t]=n.value,g(s.colors,t,n.color)}}}else{if(!(t.stops&&t.stops.length>=0))return null;{const e=t.stops&&t.stops.length>=0&&t.stops[0].color;for(let t=0;t<8;t++)s.values[t]=1/0,g(s.colors,t,e)}}for(let e=0;e<32;e+=4)Object(_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlpha"])(s.colors,e,!0);return s}


/***/ }),

/***/ "l8tk":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
  \***********************************************************************/
/*! exports provided: DEBUG_ATTR_UPDATES, createDebugLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG_ATTR_UPDATES", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDebugLogger", function() { return n; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=(n,l)=>n&&((...n)=>l.warn("DEBUG:",...n))||(()=>null),l=!1;


/***/ }),

/***/ "lx5q":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=t,this._buffer=isFinite(t)?new Array(t):[]}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=t:this._buffer[this._start+this.size++]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}clear(){for(;Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.dequeue()););}});


/***/ })

}]);
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~f46dcc9f-es2015.js.map