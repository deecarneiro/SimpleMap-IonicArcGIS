(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapViewDeps-js"],{

/***/ "0Ht6":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/magnifier/MagnifierView2D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/Handles.js */ "r0DZ");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../engine/DisplayObject.js */ "fEsP");
/* harmony import */ var _magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../magnifier/resources.js */ "UBW5");
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../engine/webgl/enums.js */ "yE7X");
/* harmony import */ var _engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../engine/webgl/shaders/MagnifierPrograms.js */ "fUoV");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class extends _engine_DisplayObject_js__WEBPACK_IMPORTED_MODULE_13__["DisplayObject"]{constructor(){super(),this._handles=new _core_Handles_js__WEBPACK_IMPORTED_MODULE_5__["default"],this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles.destroy(),this._handles=null,this._disposeRenderResources(),this._resourcesTask&&(this._resourcesTask.abort(),this._resourcesTask=null)}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(e,"version",(()=>{this.visible=e.visible&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e.position)&&e.size>0,this.requestRender()})),e.watch(["mask","overlay"],(()=>this._reloadResources())),e.watch("size",(()=>{this._disposeRenderResources(),this.requestRender()}))])}doRender(r){var t;const s=r.context;if(!this._resourcesTask)return void this._reloadResources();if(r.drawPhase!==_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_15__["WGLDrawPhase"].MAP||!this._canRender())return;this._updateResources(r);const i=this._magnifier;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i.position))return;const o=r.pixelRatio,n=i.size*o,h=1/i.factor,m=Math.ceil(h*n);this._readbackTexture.resize(m,m);const{size:l}=r.state,d=o*l[0],u=o*l[1],c=.5*m,p=.5*m,g=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(o*i.position.x,c,d-c-1),f=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(u-o*i.position.y,p,u-p-1),b=g-c,x=f-p,y=this._readbackTexture;s.bindTexture(y,0),s.gl.copyTexImage2D(y.descriptor.target,0,y.descriptor.pixelFormat,b,x,m,m,0);const k=null==(t=this.background)?void 0:t.color,T=k?[k.a*k.r/255,k.a*k.g/255,k.a*k.b/255,k.a]:[1,1,1,1],R=(g+i.offsetX*o)/d*2-1,v=(f-i.offsetY*o)/u*2-1,w=n/d*2,j=n/u*2,M=this._program;s.bindVAO(this._vertexArrayObject),s.bindTexture(this._overlayTexture,6),s.bindTexture(this._maskTexture,7),s.bindProgram(M),M.setUniform4fv("u_background",T),M.setUniform1i("u_readbackTexture",0),M.setUniform1i("u_overlayTexture",6),M.setUniform1i("u_maskTexture",7),M.setUniform4f("u_drawPos",R,v,w,j),M.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),M.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),s.setStencilTestEnabled(!1),s.drawArrays(5,0,4),s.bindVAO()}_canRender(){return this.mask&&this.overlay&&null!=this._magnifier}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const t=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier)?this._magnifier.mask:null,a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._magnifier)?this._magnifier.overlay:null;this._resourcesTask=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["createTask"])((async s=>{const n=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(a)?Object(_magnifier_resources_js__WEBPACK_IMPORTED_MODULE_14__["loadMagnifierResources"])(s):null,h=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)?Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(t,{responseType:"image",signal:s}).then((e=>e.data)):n.then((e=>e.mask)),m=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a)?Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a,{responseType:"image",signal:s}).then((e=>e.data)):n.then((e=>e.overlay)),[l,d]=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])([h,m]);this.mask=l,this.overlay=d,this._disposeRenderResources(),this.requestRender()}))}_disposeRenderResources(){this._readbackTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._readbackTexture),this._overlayTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._overlayTexture),this._maskTexture=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._maskTexture),this._vertexArrayObject=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._vertexArrayObject),this._program=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["disposeMaybe"])(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const r=e.context;this._resourcePixelRatio=e.pixelRatio;const t=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=Object(_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["createMagnifierProgram"])(r);const s=new Uint16Array([0,1,0,0,1,1,1,0]),i=_engine_webgl_shaders_MagnifierPrograms_js__WEBPACK_IMPORTED_MODULE_16__["magnifierProgramTemplate"].attributes;this._vertexArrayObject=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_10__["default"](r,i,{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1,divisor:0}]},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"].createVertex(r,35044,s)}),this.overlay.width=t,this.overlay.height=t,this._overlayTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.overlay),this.mask.width=t,this.mask.height=t,this._maskTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r,{target:3553,pixelFormat:6406,internalFormat:6406,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!0},this.mask);const a=1/this._magnifier.factor;this._readbackTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_9__["default"](r,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.ceil(a*t),height:Math.ceil(a*t)})}});


/***/ }),

/***/ "0O54":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HighlightEffect.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/* harmony import */ var _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlight/HighlightGradient.js */ "ygGI");
/* harmony import */ var _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight/HighlightRenderer.js */ "aK+o");
/* harmony import */ var _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight/HighlightSurfaces.js */ "26zf");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new _highlight_HighlightRenderer_js__WEBPACK_IMPORTED_MODULE_4__["default"],this._hlGradient=new _highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__["default"],this._width=void 0,this._height=void 0,this._hlSurfaces=new _highlight_HighlightSurfaces_js__WEBPACK_IMPORTED_MODULE_5__["default"],this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_1__["BitBlitRenderer"]}dispose(){this._hlSurfaces&&this._hlSurfaces.dispose(),this._hlRenderer&&this._hlRenderer.dispose(),this._hlGradient&&this._hlGradient.destroy(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:h,height:s}=t.getViewport(),r=i.getFbos(h,s).effect0;this.setup(e,h,s),t.bindFramebuffer(r),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const h=t%4,s=i%4;t+=h<2?-h:4-h,i+=s<2?-s:4-s,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const r=Math.round(.75*t),d=Math.round(.75*i);this._hlRenderer.setup(e,r,d),this._hlSurfaces.setup(e,r,d)}draw({context:e}){const t=e.getBoundFramebufferObject();e.setViewport(0,0,.75*this._adjustedWidth,.75*this._adjustedHeight),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setStencilTestEnabled(!1),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(e,t.colorTexture,9728,1),e.setStencilTestEnabled(!1),e.setBlendingEnabled(!1),e.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(e,this._hlSurfaces.sharedBlur1Tex),e.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(e,this._hlSurfaces.sharedBlur2Tex),e.bindFramebuffer(this._boundFBO),e.setBlendingEnabled(!0),e.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(e,this._hlSurfaces.sharedBlur1Tex,this._hlGradient),this._boundFBO=null}setHighlightOptions(e){this._hlGradient.setHighlightOptions(e)}});


/***/ }),

/***/ "1dih":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/MapViewNavigation.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../viewpointUtils.js */ "qYtE");
/* harmony import */ var _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ZoomBox.js */ "qnLi");
/* harmony import */ var _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./actions/Pan.js */ "JlMO");
/* harmony import */ var _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/Pinch.js */ "cwtj");
/* harmony import */ var _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./actions/Rotate.js */ "KOSm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const l=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_11__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"]}),v=[0,0];let w=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._endTimer=null,this.animationManager=null}initialize(){this.pan=new _actions_Pan_js__WEBPACK_IMPORTED_MODULE_14__["default"]({navigation:this}),this.rotate=new _actions_Rotate_js__WEBPACK_IMPORTED_MODULE_16__["default"]({navigation:this}),this.pinch=new _actions_Pinch_js__WEBPACK_IMPORTED_MODULE_15__["default"]({navigation:this}),this.zoomBox=new _ZoomBox_js__WEBPACK_IMPORTED_MODULE_13__["default"]({view:this.view,navigation:this})}destroy(){this.zoomBox.destroy(),this.zoomBox=null,this.animationManager=null}begin(){this._set("interacting",!0)}end(){this._lastEventTimestamp=performance.now(),this._startTimer(250)}async zoom(t,i=this._getDefaultAnchor()){if(this.stop(),this.begin(),this.view.constraints.snapToZoom&&this.view.constraints.effectiveLODs)return t<1?this.zoomIn(i):this.zoomOut(i);this.setViewpoint(i,t,0,[0,0])}async zoomIn(t){const i=this.view,o=i.constraints.snapToNextScale(i.scale);return this._zoomToScale(o,t)}async zoomOut(t){const i=this.view,o=i.constraints.snapToPreviousScale(i.scale);return this._zoomToScale(o,t)}setViewpoint(t,i,o,n){this.begin(),this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,t,i,o,n),this.end()}setViewpointImmediate(t,i=0,o=[0,0],n=this._getDefaultAnchor()){this.view.state.viewpoint=this._scaleRotateTranslateViewpoint(this.view.viewpoint,n,t,i,o)}continousRotateClockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t,t,-1)}))}continousRotateCounterclockwise(){const t=this.get("view.viewpoint");this.animationManager.animateContinous(t,(t=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["rotateBy"])(t,t,1)}))}resetRotation(){this.view.rotation=0}continousPanLeft(){this._continuousPan([-10,0])}continousPanRight(){this._continuousPan([10,0])}continousPanUp(){this._continuousPan([0,10])}continousPanDown(){this._continuousPan([0,-10])}stop(){this.pan.stopMomentumNavigation(),this.animationManager.stop(),this.end(),null!==this._endTimer&&(clearTimeout(this._endTimer),this._endTimer=null,this._set("interacting",!1))}_continuousPan(t){const i=this.get("view.viewpoint");this.animationManager.animateContinous(i,(i=>{Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(i,i,t),this.view.constraints.constrainByGeometry(i)}))}_startTimer(t){return null!==this._endTimer||(this._endTimer=setTimeout((()=>{this._endTimer=null;const t=performance.now()-this._lastEventTimestamp;t<250?this._endTimer=this._startTimer(t):this._set("interacting",!1)}),t)),this._endTimer}_getDefaultAnchor(){const{size:t,padding:{left:i,right:o,top:n,bottom:e}}=this.view;return v[0]=.5*(t[0]-o+i),v[1]=.5*(t[1]-e+n),v}async _zoomToScale(t,i=this._getDefaultAnchor()){const{view:o}=this,{constraints:n,scale:e,viewpoint:s,size:a,padding:r}=o,m=n.canZoomInTo(t),p=n.canZoomOutTo(t);if(!(t<e&&!m||t>e&&!p))return Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(l,s,t/e,0,i,a,r),n.constrainByGeometry(l),o.goTo(l,{animate:!0})}_scaleRotateTranslateViewpoint(t,i,o,n,e){const{view:s}=this,{size:a,padding:m,constraints:p,scale:h,viewpoint:u}=s,l=h*o,v=p.canZoomInTo(l),w=p.canZoomOutTo(l);return(o<1&&!v||o>1&&!w)&&(o=1),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["translateBy"])(u,u,e),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_12__["padAndScaleAndRotateBy"])(t,u,o,n,i,a,m),p.constrainByGeometry(t)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"animationManager",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({type:Boolean,readOnly:!0})],w.prototype,"interacting",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"pan",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"pinch",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"rotate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"view",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],w.prototype,"zoomBox",void 0),w=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.MapViewNavigation")],w);var g=w;/* harmony default export */ __webpack_exports__["default"] = (g);


/***/ }),

/***/ "26zf":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightSurfaces.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,t,i){const h=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](r,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:t,height:i,samplingMode:9729});return[h,new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,{colorTarget:0,depthStencilTarget:2},h)]}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Tex.dispose(),this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Tex.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=null)}_initialize(e,s,t){this._width=s,this._height=t;const[i,h]=r(e,s,t),[o,u]=r(e,s,t);this._resources={sharedBlur1Tex:i,sharedBlur1Fbo:h,sharedBlur2Tex:o,sharedBlur2Fbo:u}}setup(e,s,r){!this._resources||this._width===s&&this._height===r||this.dispose(),this._resources||this._initialize(e,s,r)}get sharedBlur1Tex(){return this._resources.sharedBlur1Tex}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Tex}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}});


/***/ }),

/***/ "297m":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MaterialPrograms.js ***!
  \*************************************************************************************/
/*! exports provided: createProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramTemplate", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=r=>{let e="";e+=r[0].toUpperCase();for(let t=1;t<r.length;t++){const s=r[t];s===s.toUpperCase()?(e+="_",e+=s):e+=s.toUpperCase()}return e},s=e=>{const s={};for(const r in e){s[t(r)]=e[r]}return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])(s)},o=(r,t,o)=>{const n=r+r.substring(r.lastIndexOf("/")),a=t+t.substring(t.lastIndexOf("/"));return{name:name,attributes:o,shaders:r=>({vertexShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])(`${n}.vert`),fragmentShader:s(r)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])(`${a}.frag`)})}};


/***/ }),

/***/ "3wQP":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/StencilPrograms.js ***!
  \************************************************************************************/
/*! exports provided: stencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencil", function() { return r; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r={name:"stencil",shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("stencil/stencil.frag")},attributes:{a_pos:0}};


/***/ }),

/***/ "5ROZ":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/fontUtils.js ***!
  \**********************************************************************/
/*! exports provided: getFontDecorationTop, getFullyQualifiedFontName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFontDecorationTop", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullyQualifiedFontName", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){const r=function(e){if(!e.weight)return"";switch(e.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}(e)+function(e){if(!e.style)return"";switch(e.style.toLowerCase()){case"italic":case"oblic":return"-italic"}return""}(e);return function(e){const r=e.toLowerCase().split(" ").join("-");switch(r){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return r}}(e.family)+(r.length>0?r:"-regular")}function r(e){switch(e){case"underline":return-26;case"line-through":return-18}return NaN}


/***/ }),

/***/ "60EV":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/HittestEffect.js ***!
  \**********************************************************************************/
/*! exports provided: HittestEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HittestEffect", function() { return r; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends _Effect_js__WEBPACK_IMPORTED_MODULE_2__["Effect"]{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0}dispose(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._fbo)&&this._fbo.dispose()}bind({context:t,painter:e}){const{width:s,height:r}=t.getViewport(),i=e.getFbos(s,r).effect0;t.bindFramebuffer(i),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}draw({context:t,state:s,pixelRatio:r},i,o=_definitions_js__WEBPACK_IMPORTED_MODULE_1__["HITTEST_SEARCH_SIZE"]){const f=t.getBoundFramebufferObject(),n=s.size[1]*r,a=Math.round(o*r),h=a/2,c=a/2;this._ensureBuffer(a),i.forEach(((t,e)=>{const s=new Map,o=Math.floor(e[0]*r-a/2),u=Math.floor(n-e[1]*r-a/2);f.readPixels(o,u,a,a,6408,5121,this._buf);for(let t=0;t<this._buf32.length;t++){const e=this._buf32[t];if(4294967295!==e&&0!==e){const r=t%a,i=a-Math.floor(t/a),o=(h-r)*(h-r)+(c-i)*(c-i),f=s.has(e)?s.get(e):4294967295;s.set(e,Math.min(o,f))}}const b=Array.from(s).sort(((t,e)=>t[1]-e[1])).map((t=>t[0]));t.resolve(b),i.delete(e)}))}_ensureBuffer(t){this._lastSize!==t&&(this._lastSize=t,this._buf=new Uint8Array(4*t*t),this._buf32=new Uint32Array(this._buf.buffer))}}


/***/ }),

/***/ "A+Tu":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerCollisionInfo.js ***!
  \******************************************************************************************/
/*! exports provided: default, createLabelVVEvaluator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLabelVVEvaluator", function() { return c; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualVariableSimpleUtils.js */ "cZ4F");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=(e,t)=>e.order-t.order,n=(e,t)=>e.index-t.index,l=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri/views/2d/engine/webgl/collisions/CollisionEngine");function s(e,r){const o=!!e.minScale,i=!!e.maxScale,n=o&&r.scaleToZoom(e.minScale)||0,l=i&&r.scaleToZoom(e.maxScale)||255;return{deconflictionStrategy:e.deconflictionStrategy,minZoom:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10*n),0,255),maxZoom:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(Math.floor(10*l),0,255)}}function a(e){return t=>Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_2__["pt2px"])(Object(_visualVariableSimpleUtils_js__WEBPACK_IMPORTED_MODULE_3__["getSizeForValueSimple"])(t,e))}function c(e){if(!e)return null;for(const t of e)if("size"===t.type)return a(t);return null}class d{constructor(e,t,r,o){this._vvHandle=null;const i=e.layer,{geometryType:n,labelingInfo:l,renderer:a}=i;a&&(this.vvEval=c("visualVariables"in a&&a.visualVariables)),this._vvHandle=i.watch("renderer",(e=>{e&&(this.vvEval=c("visualVariables"in e&&e.visualVariables))}));const d=i.featureReduction,f=d&&"cluster"===d.type&&d.labelingInfo,m=(l||[]).map((e=>s(e,o))),u=(f||[]).map((e=>s(e,o)));this.layerView=e,this.geometryType=n,this.index=t,this.order=r,this.zoomRanges=[...m,...u],this.layerView=e}hasVV(){return!!this.vvEval}allOrNothing(){return!("polyline"===this.geometryType)}destroy(){this._vvHandle.remove()}static create(e,t,r,o){const n=r.sort(i);let l=!1,s=-1;for(const e of n)!l&&e.order>t&&(s=e.index,l=!0),l&&e.index++;return l||(s=n.length),new d(e,s,t,o)}static delete(e,t){const r=t.sort(n);for(let o=e+1;o<r.length;o++)t[o].index--;t[e].destroy(),t.splice(e,1)}static find(e,t){for(const r of t)if(r.index===e)return r;return l.error("Tried to get a LayerCollisionInfo for an index that doesn't exist!"),null}}/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "BaZm":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphMosaic.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=t=>Math.floor(t/256);/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t,e,i){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphCache={},this._textures=[],this._rangePromises=new Map,this.width=t,this.height=e,this._glyphSource=i,this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](t-4,e-4),this._glyphData.push(new Uint8Array(t*e)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph()}dispose(){this._binPack=null;for(const t of this._textures)t&&t.dispose();this._textures.length=0,this._glyphData.length=0}_initDecorationGlyph(){const t=[117,149,181,207,207,181,149,117],e=[];for(let i=0;i<t.length;i++){const h=t[i];for(let t=0;t<11;t++)e.push(h)}const i={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(e)};this._recordGlyph(i)}async getGlyphItems(t,e,i){const h=this._getGlyphCache(t);return await this._fetchRanges(t,e,i),e.map((e=>this._getMosaicItem(h,t,e)))}bind(t,e,i,h){const s=this._getTexture(t,i);s.setSamplingMode(e),this._dirties[i]&&(s.setData(this._glyphData[i]),this._dirties[i]=!1),t.bindTexture(s,h)}_getGlyphCache(t){return this._glyphCache[t]||(this._glyphCache[t]={}),this._glyphCache[t]}_getTexture(t,e){return this._textures[e]||(this._textures[e]=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](t,{pixelFormat:6406,dataType:5121,width:this.width,height:this.height},new Uint8Array(this.width*this.height))),this._textures[e]}_invalidate(){this._dirties[this._currentPage]=!0}async _fetchRanges(t,i,h){const s=function(t){const e=new Set;for(const i of t)e.add(a(i));return e}(i),r=[];s.forEach((e=>{r.push(this._fetchRange(t,e,h))})),await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(r)}async _fetchRange(t,e,h){if(e>256)return null;const s=t+e;return r=this._rangePromises,a=s,n=()=>this._glyphSource.getRange(t,e,h),r.has(a)||r.set(a,n().then((()=>{r.delete(a)})).catch((t=>{r.delete(a),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfNotAbortError"])(t)}))),r.get(a);var r,a,n}_getMosaicItem(t,e,i){if(!t[i]){const h=this._glyphSource.getGlyph(e,i);if(!h||!h.metrics)return(t=>({rect:new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0,0,0,0),page:0,metrics:{left:0,width:0,height:0,advance:0,top:0},code:t,sdf:!0}))(i);const r=this._recordGlyph(h),a=this._currentPage,n=h.metrics;t[i]={rect:r,page:a,metrics:n,code:i,sdf:!0},this._invalidate()}return t[i]}_getMosaicItemsStable(t,e,i){const h=[],s=i.map((t=>t));return i.map((t=>t)).sort().map((i=>this._getMosaicItem(t,e,i))).forEach((t=>{const e=s.indexOf(t.code);h[e]=t,s[e]=null})),h}_recordGlyph(e){const i=e.metrics;let h;if(0===i.width)h=new _Rect_js__WEBPACK_IMPORTED_MODULE_6__["default"](0,0,0,0);else{const s=3,a=i.width+2*s,n=i.height+2*s;h=this._binPack.allocate(a,n),h.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(null),this._initDecorationGlyph(),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_7__["default"](this.width-4,this.height-4),h=this._binPack.allocate(a,n));const c=this._glyphData[this._currentPage],o=e.bitmap;let l,g;if(o)for(let t=0;t<n;t++){l=a*t,g=this.width*(h.y+t)+h.x;for(let t=0;t<a;t++)c[g+t]=o[l+t]}Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-glyph-debug")&&this._showDebugPage(c)}return h}_showDebugPage(t){const e=document.createElement("canvas"),i=e.getContext("2d"),h=new ImageData(this.width,this.height),s=h.data;e.width=this.width,e.height=this.height,e.style.border="1px solid black";for(let e=0;e<t.length;++e)s[4*e+0]=t[e],s[4*e+1]=0,s[4*e+2]=0,s[4*e+3]=255;i.putImageData(h,0,0),document.body.appendChild(e)}});


/***/ }),

/***/ "Coxz":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/EffectManager.js ***!
  \**************************************************************************************************/
/*! exports provided: EffectManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectManager", function() { return s; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e){case"bloom":case"blur":case"opacity":case"drop-shadow":return e;default:return"colorize"}}const t={colorize:async()=>new((await __webpack_require__.e(/*! import() | Colorize-js */ "Colorize-js").then(__webpack_require__.bind(null, /*! ./Colorize.js */ "P3Vg"))).Colorize),blur:async()=>new((await __webpack_require__.e(/*! import() | Blur-js */ "Blur-js").then(__webpack_require__.bind(null, /*! ./Blur.js */ "B2cn"))).Blur),bloom:async()=>new((await __webpack_require__.e(/*! import() | Bloom-js */ "Bloom-js").then(__webpack_require__.bind(null, /*! ./Bloom.js */ "mxcV"))).Bloom),opacity:async()=>new((await __webpack_require__.e(/*! import() | Opacity-js */ "Opacity-js").then(__webpack_require__.bind(null, /*! ./Opacity.js */ "T/wP"))).Opacity),"drop-shadow":async()=>new((await __webpack_require__.e(/*! import() | DropShadow-js */ "DropShadow-js").then(__webpack_require__.bind(null, /*! ./DropShadow.js */ "eylR"))).DropShadow)};class s{constructor(e){this._requestRender=e,this._effectMap=new Map,this._effectPromiseMap=new Map}dispose(){this._requestRender&&(this._requestRender=null),this._effectMap.forEach((e=>e.dispose())),this._effectMap.clear(),this._effectPromiseMap.clear()}getPostProcessingEffects(t){if(!t||0===t.length)return[];const s=[];for(const o of t){const t=e(o.type),r=this._effectMap.get(t);r?s.push({postProcessingEffect:r,effect:o}):this._enablePostProcessingEffect(t)}return s}async _enablePostProcessingEffect(e){const t=await this._loadPostProcessingEffect(e);this._requestRender&&(this._effectMap.set(e,t),this._requestRender.requestRender())}async _loadPostProcessingEffect(e){return this._effectPromiseMap.has(e)||this._effectPromiseMap.set(e,t[e]()),this._effectPromiseMap.get(e)}}


/***/ }),

/***/ "DKFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/FilteredFiniteDifference.js ***!
  \********************************************************************************/
/*! exports provided: FilteredFiniteDifference */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilteredFiniteDifference", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t){this.gain=t}update(t){if(this.hasLastValue){const e=this.computeDelta(t);this.updateDelta(e)}this.lastValue=t}reset(){this.lastValue=void 0,this.filteredDelta=void 0}get hasLastValue(){return void 0!==this.lastValue}get hasFilteredDelta(){return void 0!==this.filteredDelta}computeDelta(t){return t-this.lastValue}updateDelta(t){this.hasFilteredDelta?this.filteredDelta=(1-this.gain)*this.filteredDelta+this.gain*t:this.filteredDelta=t}}


/***/ }),

/***/ "DRKG":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/symbolUtils.js ***!
  \*****************************************************************************/
/*! exports provided: keyFromSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyFromSymbol", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){switch(e.type){case"esriSMS":return`${e.style}.${e.path}`;case"esriSLS":return`${e.style}.${e.cap}`;case"esriSFS":return`${e.style}`;case"esriPFS":case"esriPMS":return e.imageData?`${e.imageData}${e.width}${e.height}`:`${e.url}${e.width}${e.height}`;default:return e.mosaicHash?e.mosaicHash:JSON.stringify(e)}}


/***/ }),

/***/ "DxxZ":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
  \*********************************************************************/
/*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDiff", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDiffAny", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return m; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../maybe.js */ "srIe");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "TDcG");
/* harmony import */ var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accessor.js */ "/CmD");
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Collection.js */ "LE9a");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const f=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function i(t){return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"]}function c(t){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]?Object.keys(t.items):i(t)?Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys():t?Object.keys(t):[]}function u(t,e){return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]?t.items[e]:t[e]}function l(t){return t?t.declaredClass:null}function s(t,n){const o=t.diff;if(o&&"function"==typeof o)return o(t,n);const r=c(t),p=c(n);if(0===r.length&&0===p.length)return;if(!r.length||!p.length||function(t,e){return!(!Array.isArray(t)||!Array.isArray(e))&&t.length!==e.length}(t,n))return{type:"complete",oldValue:t,newValue:n};const a=p.filter((t=>-1===r.indexOf(t))),y=r.filter((t=>-1===p.indexOf(t))),m=r.filter((e=>p.indexOf(e)>-1&&u(t,e)!==u(n,e))).concat(a,y).sort(),d=l(t);if(d&&f.indexOf(d)>-1&&m.length)return{type:"complete",oldValue:t,newValue:n};let b;const h=i(t)&&i(n);for(const r of m){const f=u(t,r),i=u(n,r);let c;(h||"function"!=typeof f&&"function"!=typeof i)&&(f!==i&&(null==f&&null==i||(c=o&&o[r]&&"function"==typeof o[r]?o[r](f,i):"object"==typeof f&&"object"==typeof i&&l(f)===l(i)?s(f,i):{type:"complete",oldValue:f,newValue:i},Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c)&&(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b)?b.diff[r]=c:b={type:"partial",diff:{[r]:c}}))))}return b}function p(e,n){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return!1;const o=n.split(".");let r=e;for(const t of o){if("complete"===r.type)return!0;if("partial"!==r.type)return!1;{const e=r.diff[t];if(!e)return!1;r=e}}return!0}function a(t,e){for(const n of e)if(p(t,n))return!0;return!1}function y(t,e){if("function"!=typeof t&&"function"!=typeof e&&(t||e))return!t||!e||"object"==typeof t&&"object"==typeof e&&l(t)!==l(e)?{type:"complete",oldValue:t,newValue:e}:s(t,e)}function m(e){if(Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return!0;switch(e.type){case"complete":return!1;case"collection":{const t=e;for(const e of t.added)if(!m(e))return!1;for(const e of t.removed)if(!m(e))return!1;for(const e of t.changed)if(!m(e))return!1;return!0}case"partial":for(const t in e.diff){if(!m(e.diff[t]))return!1}return!0}}


/***/ }),

/***/ "E7yl":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/packingUtils.js ***!
  \*************************************************************************/
/*! exports provided: packFloatRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=[1,256,65536,16777216],t=[1/256,1/65536,1/16777216,1/4294967296],n=function(r,n=0){let o=0;for(let e=0;e<4;e++)o+=r[n+e]*t[e];return o}(new Uint8ClampedArray([255,255,255,255]));function o(t,o,e=0){const f=function(r,t,n){if(r<t)return t;if(r>n)return n;return r}(t,0,n);for(let t=0;t<4;t++)o[e+t]=Math.floor(256*((u=f*r[t])-Math.floor(u)));var u}


/***/ }),

/***/ "EdjT":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/RotationMomentumEstimator.js ***!
  \*********************************************************************************/
/*! exports provided: RotationMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotationMomentumEstimator", function() { return a; });
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_0__["MomentumEstimator"]{constructor(t=3,a=.01,s=.95,e=12){super(t,a,s,e)}add(t,a){if(this.value.hasLastValue){const a=this.value.lastValue;let s=t-a;for(;s>Math.PI;)s-=2*Math.PI;for(;s<-Math.PI;)s+=2*Math.PI;t=a+s}super.add(t,a)}}


/***/ }),

/***/ "FGzj":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/MaterialManager.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/ProgramCache.js */ "kGdt");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/MaterialPrograms.js */ "297m");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a=r=>r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HITTEST||r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].LABEL_ALPHA,s=({rendererInfo:e,drawPhase:o},s,i,n)=>`${s.getVariationHash()}-${n.join(".")}-${(r=>(a(r)?1:0)|(r===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT?2:0))(o)}-${e.getVariationHash()}-${Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i)&&i.join(".")}`;/* harmony default export */ __webpack_exports__["default"] = (class{constructor(r){this._programByKey=new Map,this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_5__["default"](r)}dispose(){this._programCache&&this._programCache.dispose()}getProgram(r,e,t=[],a=[]){const s=e.vsPath+"."+e.fsPath+JSON.stringify(t)+a.join(".");if(this._programByKey.has(s))return this._programByKey.get(s);const i=a.reduce(((e,t)=>({...e,[t]:r.driverTestResult[t]})),{}),n={...t.map((r=>"string"==typeof r?{name:r,value:!0}:r)).reduce(((r,e)=>({...r,[e.name]:e.value})),{}),...i},{vsPath:g,fsPath:m,attributes:h}=e,p=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(g,m,h),n);if(!p)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,p),p}getMaterialProgram(e,i,n,g,m,h=["ignoresSamplerPrecision"]){const p=s(e,i,m,h);if(this._programByKey.has(p))return this._programByKey.get(p);const c=((e,o,s,i)=>{const n=i.reduce(((r,t)=>({...r,[t]:e.driverTestResult[t]})),{}),g={...o.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].HIGHLIGHT,id:a(e.drawPhase),...n};if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s))for(const r of s)g[r]=!0;return g})(e,i,m,h),f=this._programCache.getProgram(Object(_shaders_MaterialPrograms_js__WEBPACK_IMPORTED_MODULE_8__["createProgramTemplate"])(n,n,g),c);if(!f)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(p,f),f}});


/***/ }),

/***/ "FrEu":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/Effect.js ***!
  \***************************************************************************/
/*! exports provided: Effect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Effect", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(){this.name=this.constructor.name}}


/***/ }),

/***/ "G+vY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/gif.js ***!
  \********************************************************************************/
/*! exports provided: default, getGIFSize, isAnimatedGIF, isGIF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGIFSize", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedGIF", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isGIF", function() { return p; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=249,h=254,o=255,l=1,n=44,d=59;function p(t){if(!t||0===t.byteLength)return!1;const e=t.constructor===Uint8Array?t:new Uint8Array(t);return 71===e[0]&&73===e[1]&&70===e[2]&&56===e[3]}function u(t){const e=new Uint8ClampedArray(t);let s=6;return[e[s++]+(e[s++]<<8),e[s++]+(e[s++]<<8)]}function m(t){if(!t||0===t.byteLength)return!1;const e=new Uint8Array(t);if(!p(e))return!1;let s=0;for(let t=0,i=e.length-9;t<i&&(0!==e[t]||33!==e[t+1]||249!==e[t+2]||4!==e[t+3]||0!==e[t+8]||44!==e[t+9]&&33!==e[t+9]||(s++,!(s>1)));++t);return s>1}class c{constructor(){this.paused=!1,this.playing=!1,this.waitTillDone=!0,this.loading=!1,this.firstFrameOnly=!1,this.frames=[],this.comment="",this.length=0,this.currentFrameNumber=0,this.frameCount=0,this.playSpeed=1,this.lastFrame=null,this.playOnLoad=!0,this.complete=!1,this.interlaceOffsets=[0,4,2,1],this.interlaceSteps=[8,8,4,2],this._lastUsedFrame=-1}static async create(s,i){const a=new c;try{await a._load(s,i)}catch(s){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(s))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${s.message}`)}return a}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,s){t.bindTexture(e,s);const i=this.frameChanged();if(i){const t=this.currentFrame,s=t.frameData;e.updateData(0,0,0,t.width,t.height,s),this.updateUsedFrame()}return i}seekFrame(t){clearTimeout(this.timerID),this.currentFrameNumber=t%this.frames.length,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}seek(t){clearTimeout(this.timerID),t<0&&(t=0),t*=1e3,t%=this.length;let e=0;for(;t>this.frames[e].time+this.frames[e].delay&&e<this.frames.length;)e+=1;this.currentFrameNumber=e,this.playing?this._play():this._setCurrentFrame(this.currentFrameNumber)}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(s,i){try{this.loading=!0,await this._parse(s,i),this.loading=!1,this.play()}catch(s){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(s))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse gif!")}}_parse(t,e){const i=new f(t);i.pos+=6,this.width=i.data[i.pos++]+(i.data[i.pos++]<<8),this.height=i.data[i.pos++]+(i.data[i.pos++]<<8);const a=i.data[i.pos++];return this.globalColourCount=1<<1+(7&a),i.pos++,i.pos++,128&a&&(this.globalColourTable=this._parseColourTable(this.globalColourCount,i)),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(((t,s)=>{setTimeout((()=>this._parseBlock(i,t,s,e)),0)}))}async _parseBlock(t,e,s,r){if(r&&r.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAborted"])(r.signal))return void s(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["createAbortError"])());const h=t.data[t.pos++];if(h===n){if(this._parseImg(t),this.firstFrameOnly)return this._finishedLoading(),void e()}else{if(h===d)return this._finishedLoading(),void e();this._parseExt(t)}"function"==typeof this.onprogress&&this.onprogress({bytesRead:t.pos,totalBytes:t.data.length,frame:this.frames.length}),setTimeout((()=>this._parseBlock(t,e,s,r)),0)}_parseColourTable(t,e){const s=[];for(let i=0;i<t;i++)s.push([e.data[e.pos++],e.data[e.pos++],e.data[e.pos++]]);return s}_parseImg(t){const e=t=>{const e=this.pixelBufSize/t;this.interlacedBufSize!==this.pixelBufSize&&(this.deinterlaceBuf=new Uint8Array(this.pixelBufSize),this.interlacedBufSize=this.pixelBufSize);let s=0;for(let i=0;i<4;i++)for(let a=this.interlaceOffsets[i];a<e;a+=this.interlaceSteps[i])this.deinterlaceBuf.set(this.pixelBuf.subarray(s,s+t),a*t),s+=t},s={};this.frames.push(s),s.disposalMethod=this.disposalMethod,s.time=this.length,s.delay=10*this.delayTime,this.length+=s.delay,this.transparencyGiven?s.transparencyIndex=this.transparencyIndex:s.transparencyIndex=void 0,s.leftPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.topPos=t.data[t.pos++]+(t.data[t.pos++]<<8),s.width=t.data[t.pos++]+(t.data[t.pos++]<<8),s.height=t.data[t.pos++]+(t.data[t.pos++]<<8);const i=t.data[t.pos++];s.localColourTableFlag=!!(128&i),s.localColourTableFlag&&(s.localColourTable=this._parseColourTable(1<<1+(7&i),t)),this.pixelBufSize!==s.width*s.height&&(this.pixelBuf=new Uint8Array(s.width*s.height),this.pixelBufSize=s.width*s.height),this._lzwDecode(t.data[t.pos++],t.readSubBlocksB()),64&i?(s.interlaced=!0,e(s.width)):s.interlaced=!1,this._processFrame(s)}_lzwDecode(t,e){let s,i,a,r,h,o,l,n,d,p,u;a=i=0;let m=[];for(r=1<<t,h=r+1,o=t+1,u=!1;!u;){for(n=l,l=0,s=0;s<o;s++)e[a>>3]&1<<(7&a)&&(l|=1<<s),a++;if(l===r){for(m=[],o=t+1,s=0;s<r;s++)m[s]=[s];m[r]=[],m[h]=null}else{if(l===h)return void(u=!0);for(l>=m.length?m.push(m[n].concat(m[n][0])):n!==r&&m.push(m[n].concat(m[l][0])),d=m[l],p=d.length,s=0;s<p;s++)this.pixelBuf[i++]=d[s];m.length===1<<o&&o<12&&o++}}}_processFrame(t){t.image=document.createElement("canvas"),t.image.width=this.width,t.image.height=this.height,t.ctx=t.image.getContext("2d");const e=t.localColourTableFlag?t.localColourTable:this.globalColourTable;null===this.lastFrame&&(this.lastFrame=t);const s=2===this.lastFrame.disposalMethod||3===this.lastFrame.disposalMethod;s||t.ctx.drawImage(this.lastFrame.image,0,0,this.width,this.height);const i=t.ctx.getImageData(t.leftPos,t.topPos,t.width,t.height),a=t.transparencyIndex,r=i.data,h=t.interlaced?this.deinterlaceBuf:this.pixelBuf,o=h.length;let l,n,d=0;for(let t=0;t<o;t++)l=h[t],n=e[l],a!==l?(r[d++]=n[0],r[d++]=n[1],r[d++]=n[2],r[d++]=255):s?(r[d+3]=0,d+=4):d+=4;t.ctx.putImageData(i,t.leftPos,t.topPos),this.lastFrame=t}_parseExt(t){const e=t.data[t.pos++];e===r?this._parseGCExt(t):e===h?this.comment+=t.readSubBlocks():e===o?this._parseAppExt(t):(e===l&&(t.pos+=13),t.readSubBlocks())}_parseAppExt(t){t.pos+=1,"NETSCAPE"===t.getString(8)?t.pos+=8:(t.pos+=3,t.readSubBlocks())}_parseGCExt(t){let e;t.pos++,e=t.data[t.pos++],this.disposalMethod=(28&e)>>2,this.transparencyGiven=!!(1&e),this.delayTime=t.data[t.pos++]+(t.data[t.pos++]<<8),this.transparencyIndex=t.data[t.pos++],t.pos++}_finishedLoading(){this.loading=!1,this.frameCount=this.frames.length,this.lastFrame=null,this.complete=!0,this.disposalMethod=void 0,this.transparencyGiven=void 0,this.delayTime=void 0,this.transparencyIndex=void 0,this.waitTillDone=void 0,this.pixelBuf=void 0,this.deinterlaceBuf=void 0,this.pixelBufSize=void 0,this.deinterlaceBuf=void 0,this.currentFrameNumber=0,this.frames.length>0&&this._setCurrentFrame(0),this.playOnLoad&&this.play()}_play(){let t,e;0!==this.playSpeed?(this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed),this._setCurrentFrame(this.currentFrameNumber),this.timerID=window.setTimeout((()=>this._play()),t)):this.pause()}_setCurrentFrame(t){const e=this.frames[t];this.currentFrame={frameData:e.image,top:0,left:0,width:this.width,height:this.height}}}class f{constructor(t){this.pos=0,this.data=new Uint8ClampedArray(t),this.len=this.data.length}getString(t){let e="";for(;t--;)e+=String.fromCharCode(this.data[this.pos++]);return e}readSubBlocks(){let t,e,s="";do{for(e=t=this.data[this.pos++];e--;)s+=String.fromCharCode(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}readSubBlocksB(){let t,e;const s=[];do{for(e=t=this.data[this.pos++];e--;)s.push(this.data[this.pos++])}while(0!==t&&this.pos<this.len);return s}}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "JlMO":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pan.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../navigation/PanPlanarMomentumEstimator.js */ "TkeS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let c=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this.animationTime=0,this.momentumEstimator=new _navigation_PanPlanarMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["PanPlanarMomentumEstimator"](500,6,.92),this.momentum=null,this.tmpMomentum=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),this.momentumFinished=!1,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_15__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0}),this.watch("momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,i){this.navigation.begin(),this.momentumEstimator.reset(),this.addToEstimator(i),this.previousDrag=i}update(t,i){this.addToEstimator(i);let o=i.center.x,s=i.center.y;const e=this.previousDrag;o=e?e.center.x-o:-o,s=e?s-e.center.y:s,t.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(this.viewpoint,t.viewpoint,[o||0,s||0]),this.previousDrag=i}end(t,i){this.addToEstimator(i);const o=t.navigation.momentumEnabled;this.momentum=o?this.momentumEstimator.evaluateMomentum():null,this.animationTime=0,this.momentum&&this.onAnimationUpdate(t),this.previousDrag=null,this.navigation.end()}addToEstimator(t){const i=t.center.x,o=t.center.y,s=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_12__["createScreenPointArray"])(-i,o),e=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_13__["f"])(-i,o,0);this.momentumEstimator.add(s,e,.001*t.timestamp)}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((i,o)=>{this.momentumFinished=!this.momentum||this.momentum.isFinished(this.animationTime);const s=.001*o;if(!this.momentumFinished){const o=this.momentum.valueDelta(this.animationTime,s);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__["a"])(this.tmpMomentum,this.momentum.direction,o),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_16__["translateBy"])(i,i,this.tmpMomentum),t.constraints.constrainByGeometry(i)}this.animationTime+=s}))}stopMomentumNavigation(){this.momentum&&(this.momentumEstimator.reset(),this.momentum=null,this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],c.prototype,"navigation",void 0),c=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pan")],c);var d=c;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "KOSm":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Rotate.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const v=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),d=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();let j=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(e){super(e),this._previousCenter=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0})}begin(e,t){this.navigation.begin(),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(this._previousCenter,t.center.x,t.center.y)}update(e,t){const{state:{size:o,padding:r}}=e;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(v,t.center.x,t.center.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getAnchor"])(d,o,r),e.viewpoint=Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["rotateBy"])(this.viewpoint,e.state.paddedViewState.viewpoint,Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["angleBetween"])(d,this._previousCenter,v)),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["c"])(this._previousCenter,v)}end(){this.navigation.end()}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],j.prototype,"navigation",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.actions.Rotate")],j);var h=j;/* harmony default export */ __webpack_exports__["default"] = (h);


/***/ }),

/***/ "KVK4":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionEngine.js ***!
  \***************************************************************************************/
/*! exports provided: CollisionEngine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollisionEngine", function() { return u; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _CollisionBucket_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CollisionBucket.js */ "NRy8");
/* harmony import */ var _LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayerCollisionInfo.js */ "A+Tu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const h=_definitions_js__WEBPACK_IMPORTED_MODULE_3__["TILE_SIZE"]/_definitions_js__WEBPACK_IMPORTED_MODULE_3__["COLLISION_BUCKET_SIZE"],f=h,m=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.webgl.collisions.CollisionEngine");class u{constructor(e){this._layers=new Map,this._collisionBuckets=new Map,this._didError=!1,this._tilingScheme=e}get collisionInfos(){return Array.from(this._layers.values())}registerLayerView(e,i){if(this._layers.has(e))return;const t=_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].create(e,i,this.collisionInfos,this._tilingScheme);this._layers.set(e,t),this._collisionBuckets.forEach((e=>e.onRegisterLayer(t.index)))}unregisterLayerView(e){if(!this._layers.has(e))return;const i=this._layers.get(e);_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].delete(i.index,this.collisionInfos),this._layers.delete(e),this._collisionBuckets.forEach(((e,t)=>{const s=e.getTile(i.index);s&&(e.onUnregisterLayer(i.index),e.canDelete()&&this._collisionBuckets.delete(t),s.reference&&(s.reference.isDirty=!1))}))}addTile(e,i){const t=i.key.id;if(!this._layers.has(e))return;this._collisionBuckets.has(t)||this._collisionBuckets.set(t,new _CollisionBucket_js__WEBPACK_IMPORTED_MODULE_4__["default"](i.key,this._layers.size));const s=this._getIndex(e);this._collisionBuckets.get(t).getTile(s).reference=i}removeTile(e,i){if(!this._layers.has(e)||!this._collisionBuckets.has(i))return;const t=this._getIndex(e),s=this._collisionBuckets.get(i).getTile(t);s.dirty=!1,s.reference=null}run(e,t){const s=Array.from(this._collisionBuckets.values()).sort(((e,i)=>e.key.compareRowMajor(i.key)));let o=!0;const r=e.renderingOptions.labelCollisionsEnabled&&!this._didError,n=this.collisionInfos;try{for(const i of s){o=o||i.isDirty,i.computeNeighbors(this._collisionBuckets);for(let t=0;t<this._layers.size;t++){const s=_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(t,n);i.reset(e,o,s)}}for(let e=0;e<this._layers.size;e++){const i=_LayerCollisionInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(e,n);for(const e of s)this._run(r,e,i,t)}}catch(e){m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-labeling","Encountered an error during decluttering. Disabling collisions",e)),this._didError=!0}for(const e of s)e.ready()}_run(e,i,t,s){const o=i.getReference(t.index);o&&o.hasData&&(o.key.level!==s?this._resetLabelsMinZoom(i,t):this._runVisibility(e,i,o,t,s))}_resetLabelsMinZoom(e,i){if(!e||"polyline"===i.geometryType)return;const t=e.getReference(i.index);if(!t||!t.hasData)return;const s=i.layerView.tileRenderer.featuresView.attributeView,o=t.displayObjects;for(const e of o)s.setLabelMinZoom(e.id,255)}_checkLabelsVisible(e,i){const t=!i.filter||!!(e&_definitions_js__WEBPACK_IMPORTED_MODULE_3__["FILTER_FLAG_0"]),s=!i.effect||i.effect.excludedLabelsVisible||!!(e&_definitions_js__WEBPACK_IMPORTED_MODULE_3__["EFFECT_FLAG_0"]);return t&&s}_runVisibility(e,i,t,s,o){const r=s.layerView.tileRenderer.featuresView.attributeView,n=t.displayObjects.sort(((e,i)=>r.getLabelMinZoom(e.id)-r.getLabelMinZoom(i.id))),l=s.zoomRanges.some((e=>"none"===e.deconflictionStrategy));for(const t of n){if(!t.metrics.length)continue;let n="polyline"===s.geometryType?0:10*(o-1);const c=r.getFilterFlags(t.id),a=this._checkLabelsVisible(c,s.layerView);if(e&&!l)for(let e=0;e<t.metrics.length;e++){const r=t.metrics[e],l=a?-1!==r.minZoom?r.minZoom:this._computeLabelVisibility(t,r,s.index,i,r.baseZoom,o):255;n=Math.max(l,n)}n=Math.max(n,0),r.setLabelMinZoom(t.id,n);for(const e of t.metrics)e.minZoom=n}}_computeLabelVisibility(e,i,t,s,o,r){let n=o;const{xBucket:l,yBucket:c,xOverflow:a,yOverflow:m}=i,u=l-a,g=l+a+1,d=c+m+1;for(let o=c-m;o<d;o++)for(let l=u;l<g;l++)if(!(l<-h||o<-f||l>h||o>f))for(let c=0;c<=t;c++){const a=this._getRelativeSubBucket(c,s,l,o);if(a)for(const s of a){if(c===t&&s.id===e.id)continue;const o=this._compareLabels(i,s,n,r);n=Math.max(o,n)}}return n}_compareLabels(e,i,s,o){const r=10*(o+1);if(-1===i.minZoom||i.minZoom>r)return s;const n=e.findCollisionDelta(i),l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["clamp"])(Math.ceil(10*(n+o)),0,255);return i.minZoom>=l?s:Math.max(s,l)}_getNeighboringTile(e,i,t,s){const o=3*(1+s)+(1+t),r=i.neighbors[o];return r&&r.getTile(e)}_getRelativeSubBucket(e,i,t,o){const r=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["sign"])(Math.floor(t/4)),n=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["sign"])(Math.floor(o/4)),l=this._getNeighboringTile(e,i,r,n);return l&&l.reference&&l.index&&l.reference.hasData?l.index[o-4*n][t-4*r]:null}_getIndex(e){return this._layers.get(e).index}}


/***/ }),

/***/ "L/m8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/HighlightPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: blur, highlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blur", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return e; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e={name:"highlight",shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/highlight.frag")},attributes:{a_position:0,a_texcoord:1}},r={name:"blur",shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/textured.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("highlight/blur.frag")},attributes:{a_position:0,a_texcoord:1}};


/***/ }),

/***/ "N4te":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WebGLDriverTest.js ***!
  \****************************************************************************/
/*! exports provided: testSamplerPrecision, testWebGLDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testSamplerPrecision", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function() { return p; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VertexStream.js */ "gjrC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.WebGLDriverTest");class a{constructor(e){this._ignoresSamplerPrecision=null,this._context=e}get ignoresSamplerPrecision(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._ignoresSamplerPrecision)&&(this._ignoresSamplerPrecision=l(this._context)),this._ignoresSamplerPrecision}}const p=e=>new a(e),l=e=>{const r=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),a=new Uint8Array(4),p=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_7__["default"](e,[0,0,1,0,0,1,1,1]),l=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,"\nprecision highp float;\n\nattribute vec2 a_pos;\n\nuniform highp sampler2D u_texture;\nvarying vec4 v_color;\n\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n\n  return mod(floor(bitset / offset), 2.0);\n}\n\nvoid main() {\n  vec4 value = texture2D(u_texture, vec2(0.0));\n\n  float bit = getBit(value.x * 255.0, 1);\n\n  v_color = bit * vec4(1.0);\n\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}\n","\nprecision highp float;\n\nvarying vec4 v_color;\n\nvoid main() {\n  gl_FragColor = v_color;\n}\n",{a_pos:0}),g=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](e,{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([2,255,0,0]));l.setUniform1i("u_texture",0),e.bindTexture(g,0);const m=e.getBoundFramebufferObject();e.bindFramebuffer(r),e.bindProgram(l);const{x:c,y:d,width:u,height:h}=e.getViewport();e.setViewport(0,0,1,1),p.draw(),e.setViewport(c,d,u,h),r.readPixels(0,0,1,1,6408,5121,a),l.dispose(),p.dispose(),r.dispose();const f=255!==a[0]||255!==a[1]||255!==a[2]||255!==a[3];return f&&s.warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${a[0]}.${a[1]}.${a[2]}.${a[3]}]`),e.bindFramebuffer(m),f};


/***/ }),

/***/ "NRy8":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionBucket.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../tiling/TileKey.js */ "rlSK");
/* harmony import */ var _tiling_PagedTileQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../tiling/PagedTileQueue.js */ "Pns9");
/* harmony import */ var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../tiling/TileInfoView.js */ "AY31");
/* harmony import */ var _tiling_TileQueue_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../tiling/TileQueue.js */ "B81a");
/* harmony import */ var _tiling_TileStrategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../tiling/TileStrategy.js */ "0wLv");
/* harmony import */ var _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CollisionBucketEntry.js */ "pc5U");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,i){this.neighbors=new Array(9),this._tiles=new Array(i);for(let e=0;e<i;e++)this._tiles[e]=new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"];this.key=e}get isDirty(){for(const e of this._tiles)if(e.dirty)return!0;return!1}get size(){return this._tiles.length}getTile(e){return this._tiles[e]}getReference(e){const t=this._tiles[e];return t&&t.reference}onRegisterLayer(e){this.invalidateRange(e),this._add(e)}onUnregisterLayer(e){this.invalidateRange(e),this._remove(e)}onLabelsRendered(){}invalidateRange(e){for(let t=e;t<this._tiles.length;t++)this._tiles[t].dirty=!0}add(e){this._add(e)}remove(e){this._remove(e)}canDelete(){return 0===this._tiles.length}ready(){for(const e of this._tiles)e.dirty=!1}computeNeighbors(e){this.neighbors[0]=this._getNeighbor(e,-1,-1),this.neighbors[1]=this._getNeighbor(e,0,-1),this.neighbors[2]=this._getNeighbor(e,1,-1),this.neighbors[3]=this._getNeighbor(e,-1,0),this.neighbors[4]=this,this.neighbors[5]=this._getNeighbor(e,1,0),this.neighbors[6]=this._getNeighbor(e,-1,1),this.neighbors[7]=this._getNeighbor(e,0,1),this.neighbors[8]=this._getNeighbor(e,1,1)}reset(e,t,i){const s=this._tiles[i.index];s&&s.reset(e,t,i)}_add(e){const i=[];if(e>=this._tiles.length)this._tiles.push(new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"]);else{for(let s=0;s<this._tiles.length;s++)s===e&&i.push(new _CollisionBucketEntry_js__WEBPACK_IMPORTED_MODULE_5__["default"]),i.push(this._tiles[s]);this._tiles=i}}_remove(e){const t=[];for(let i=0;i<this._tiles.length;i++)i!==e&&t.push(this._tiles[i]);this._tiles=t}_getNeighbor(t,i,s){const r=this.key,h=r.col+i,n=r.row+s,o=r.level,l=r.world,g=_tiling_TileKey_js__WEBPACK_IMPORTED_MODULE_0__["default"].getId(o,n,h,l);return t.has(g)?t.get(g):null}});


/***/ }),

/***/ "PNHs":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/FeatureEffect.js ***!
  \**********************************************************************************/
/*! exports provided: FeatureEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureEffect", function() { return t; });
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t extends _Effect_js__WEBPACK_IMPORTED_MODULE_0__["Effect"]{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:s,height:r}=e.getViewport(),n=t.getFbos(s,r).effect0;e.bindFramebuffer(n),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:s,painter:r,state:n,deltaTime:o}=e,c=r.getPostProcessingEffects(t.effects),i=s.getBoundFramebufferObject();c.length&&t.transitionStep(o,n.scale);for(const{postProcessingEffect:t,effect:s}of c)t.draw(e,i,s);s.bindFramebuffer(this._prev),s.setStencilTestEnabled(!1),r.blitTexture(s,i.colorTexture,9728),s.setStencilTestEnabled(!0)}}


/***/ }),

/***/ "TkeS":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/PanPlanarMomentumEstimator.js ***!
  \**********************************************************************************/
/*! exports provided: PanPlanarMomentum, PanPlanarMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentum", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanPlanarMomentumEstimator", function() { return h; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class c extends _Momentum_js__WEBPACK_IMPORTED_MODULE_3__["Momentum"]{constructor(e,t,i,s,n){super(e,t,i),this.sceneVelocity=s,this.direction=n}value(e){return super.valueFromInitialVelocity(this.sceneVelocity,e)}}class h{constructor(t=300,i=12,s=.84){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.enabled=!0,this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),this.screen=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.4)],this.scene=[new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6),new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_2__["FilteredFiniteDifference"](.6)],this.tmpDirection=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}add(e,t,i){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)}}reset(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;const e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t)/this.time.filteredDelta;return Math.abs(i)<this.minimumInitialVelocity?null:this.createMomentum(i,this.stopVelocity,this.friction)}createMomentum(e,n,r){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);const h=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(this.tmpDirection);h>0&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.tmpDirection,this.tmpDirection,1/h);const a=h/this.time.filteredDelta;return new c(e,n,r,a,this.tmpDirection)}}


/***/ }),

/***/ "UBW5":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/magnifier/resources.js ***!
  \****************************************************************/
/*! exports provided: loadMagnifierResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMagnifierResources", function() { return s; });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../support/requestImageUtils.js */ "LbAs");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function s(s){const r=__webpack_require__.e(/*! import() | mask-svg-js */ "mask-svg-js").then(__webpack_require__.bind(null, /*! ./mask-svg.js */ "RzSf")),i=__webpack_require__.e(/*! import() | overlay-svg-js */ "overlay-svg-js").then(__webpack_require__.bind(null, /*! ./overlay-svg.js */ "o3Xd")),o=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await r).default,{signal:s}),e=Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_1__["requestImage"])((await i).default,{signal:s}),m={mask:await o,overlay:await e};return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["throwIfAborted"])(s),m}


/***/ }),

/***/ "VfAO":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/MomentumEstimator.js ***!
  \*************************************************************************/
/*! exports provided: MomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentumEstimator", function() { return s; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilteredFiniteDifference.js */ "DKFY");
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(t=2.5,i=.01,s=.95,l=12){this.minimumInitialVelocity=t,this.stopVelocity=i,this.friction=s,this.maxVelocity=l,this.enabled=!0,this.value=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.8),this.time=new _FilteredFiniteDifference_js__WEBPACK_IMPORTED_MODULE_1__["FilteredFiniteDifference"](.3)}add(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){const e=this.value.computeDelta(t);this.value.filteredDelta*e<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}}reset(){this.value.reset(),this.time.reset()}evaluateMomentum(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)}createMomentum(t,e,s){return new _Momentum_js__WEBPACK_IMPORTED_MODULE_2__["Momentum"](t,e,s)}}


/***/ }),

/***/ "W3i+":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Painter.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/Renderbuffer.js */ "kbDN");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _brushes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../brushes.js */ "Oxob");
/* harmony import */ var _vectorTiles_shaders_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../vectorTiles/shaders/ProgramCache.js */ "vYD5");
/* harmony import */ var _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BitBlitRenderer.js */ "bfVh");
/* harmony import */ var _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MaterialManager.js */ "FGzj");
/* harmony import */ var _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextureManager.js */ "v9+0");
/* harmony import */ var _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./effects/AnimationEffect.js */ "ac4n");
/* harmony import */ var _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./effects/BlendEffect.js */ "viFY");
/* harmony import */ var _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./effects/FeatureEffect.js */ "PNHs");
/* harmony import */ var _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./effects/HighlightEffect.js */ "0O54");
/* harmony import */ var _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./effects/HittestEffect.js */ "60EV");
/* harmony import */ var _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./effects/post-processing/EffectManager.js */ "Coxz");
/* harmony import */ var _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./painter/RenderPass.js */ "sAsQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function m(t,s,r){return 1!==r||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t)&&"normal"!==t||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)&&s.length>0}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(e,t){this.context=e,this._blitRenderer=new _BitBlitRenderer_js__WEBPACK_IMPORTED_MODULE_10__["BitBlitRenderer"],this._brushCache=new Map,this._vtlProgramCache=null,this._blendEffect=new _effects_BlendEffect_js__WEBPACK_IMPORTED_MODULE_14__["BlendEffect"],this.effects={highlight:new _effects_HighlightEffect_js__WEBPACK_IMPORTED_MODULE_16__["default"],hittest:new _effects_HittestEffect_js__WEBPACK_IMPORTED_MODULE_17__["HittestEffect"],integrate:new _effects_AnimationEffect_js__WEBPACK_IMPORTED_MODULE_13__["AnimationEffect"],insideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("inside"),outsideEffect:new _effects_FeatureEffect_js__WEBPACK_IMPORTED_MODULE_15__["FeatureEffect"]("outside")},this.materialManager=new _MaterialManager_js__WEBPACK_IMPORTED_MODULE_11__["default"](e),this._vtlProgramCache=new _vectorTiles_shaders_ProgramCache_js__WEBPACK_IMPORTED_MODULE_9__["default"](e),this.textureManager=new _TextureManager_js__WEBPACK_IMPORTED_MODULE_12__["default"](t),this._effectsManager=new _effects_post_processing_EffectManager_js__WEBPACK_IMPORTED_MODULE_18__["EffectManager"](t)}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,r){if(e!==this._lastWidth||r!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=r,this._fbos){for(const t in this._fbos)this._fbos[t].resize(e,r);return this._fbos}const i={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:e,height:r},n={colorTarget:0,depthStencilTarget:3},o=new _webgl_Renderbuffer_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.context,{width:e,height:r,internalFormat:34041});this._stencilBuf=o,this._fbos={output:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context,n,i,o),blend:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context,n,i,o),effect0:new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.context,n,i,o)}}return this._fbos}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(t,s=null){const{width:r,height:i}=t.getViewport();this._prevFBO=t.getBoundFramebufferObject();const n=this.getFbos(r,i);if(t.bindFramebuffer(n.output),t.setColorMask(!0,!0,!0,!0),t.setDepthWriteEnabled(!0),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(s)){const{r:e,g:r,b:i,a:n}=s.color;t.setClearColor(n*e/255,n*r/255,n*i/255,n)}else t.setClearColor(0,0,0,0);t.setClearDepth(1),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT),t.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,s){const{context:r,blendMode:i,effects:n}=e;if(m(i,n,s))r.bindFramebuffer(this._fbos.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT);else{const e=this._getOutputFBO();r.bindFramebuffer(e)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(t,s){const{context:i,blendMode:n,effects:o}=t;if(m(n,o,s)){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o)&&o.length>0&&t.drawPhase===_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLDrawPhase"].MAP&&this._applyEffects(t,o);const h=this._getOutputFBO();i.bindFramebuffer(h),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(1,771,1,771),i.setColorMask(!0,!0,!0,!0);const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)?n:"normal";this._blendEffect.draw(t,this._fbos.blend.colorTexture,9728,a,s)}}renderLayers(e){if(e.bindFramebuffer(this._prevFBO),!this._fbos)return;const t=this._getOutputFBO();e.setStencilTestEnabled(!1),e.setStencilWriteMask(0),this.blitTexture(e,t.colorTexture,9728)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this._blitRenderer&&(this._blitRenderer.dispose(),this._blitRenderer=null),this._vtlProgramCache&&(this._vtlProgramCache.dispose(),this._vtlProgramCache=null),this._brushCache&&(this._brushCache.forEach((e=>e.dispose())),this._brushCache.clear(),this._brushCache=null),this._fbos)for(const e in this._fbos)this._fbos[e]&&this._fbos[e].dispose();if(this.effects)for(const e in this.effects)this.effects[e]&&this.effects[e].dispose();this._prevFBO=null}getGeometryBrush(e){const t={[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].FILL]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].fill,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].LINE]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].line,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].MARKER]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].marker,[_enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].TEXT]:_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"].text}[e];let s=this._brushCache.get(t);return void 0===s&&(s=new t,this._brushCache.set(t,s)),this._brushCache.get(t)}renderObject(e,t,s,r){const i=_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];if(!i)return null;let o=this._brushCache.get(i);void 0===o&&(o=new i,this._brushCache.set(i,o)),o.prepareState(e,t,r),o.draw(e,t,r)}renderObjects(e,t,s,r){const i=_brushes_js__WEBPACK_IMPORTED_MODULE_8__["brushes"][s];if(!i)return null;let o=this._brushCache.get(i);void 0===o&&(o=new i,this._brushCache.set(i,o)),o.drawMany(e,t,r)}getVectorTileProgramCache(){return this._vtlProgramCache}registerRenderPass(e){const t=e.brushes.map((e=>(this._brushCache.has(e)||this._brushCache.set(e,new e),this._brushCache.get(e))));return new _painter_RenderPass_js__WEBPACK_IMPORTED_MODULE_19__["default"](t,e)}setHighlightOptions(e){this.effects.highlight.setHighlightOptions(e)}blitTexture(e,t,s,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(1,771,1,771),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,s,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){return null!=this._renderTarget?this._renderTarget:this._fbos.output}_applyEffects(e,t){const{context:s}=e,r=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:t,effect:i}of r)s.bindFramebuffer(this._fbos.blend),t.draw(e,this._fbos.blend,i)}});


/***/ }),

/***/ "XDzM":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/Stage.js ***!
  \************************************************************/
/*! exports provided: EXTRA_RENDER_TIME, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXTRA_RENDER_TIME", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return E; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/events.js */ "nYOO");
/* harmony import */ var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/scheduling.js */ "WBXD");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/common.js */ "QhKk");
/* harmony import */ var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/watchUtils.js */ "N5XI");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/screenshotUtils.js */ "TcGo");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../webgl/context-util.js */ "zBXm");
/* harmony import */ var _chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../chunks/mat2d.js */ "opr1");
/* harmony import */ var _chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../chunks/mat2df64.js */ "9+ss");
/* harmony import */ var _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../support/Timeline.js */ "Snp0");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./webgl/enums.js */ "yE7X");
/* harmony import */ var _Container_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Container.js */ "AMBt");
/* harmony import */ var _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./webgl/Painter.js */ "W3i+");
/* harmony import */ var _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./webgl/Profiler.js */ "oQiY");
/* harmony import */ var _webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./webgl/WebGLDriverTest.js */ "N4te");
/* harmony import */ var _webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./webgl/shaders/StencilPrograms.js */ "3wQP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const B=2e3;class E extends _Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"]{constructor(r,n){super(),this._trash=new Set,this._clipData=new Float32Array(8),this._upperLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._upperRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._lowerLeft=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._lowerRight=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this._mat2=Object(_chunks_mat2df64_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),this._clipRendererInitialized=!1,this._supersampleScreenshots=!0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:h=document.createElement("canvas"),alpha:o=!0,stencil:l=!0,renderContext:d="webgl",supersampleScreenshots:c=!0,contextOptions:p={}}=n;this._canvas=h;const _=Object(_webgl_context_util_js__WEBPACK_IMPORTED_MODULE_10__["createContextOrErrorHTML"])(h,{alpha:o,antialias:!1,depth:!0,stencil:l},d);this.context=new _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,p),this.painter=new _webgl_Painter_js__WEBPACK_IMPORTED_MODULE_22__["default"](this.context,this),Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),r.appendChild(this._debugOutput)),this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:n.timeline||new _support_Timeline_js__WEBPACK_IMPORTED_MODULE_13__["Timeline"],renderingOptions:n.renderingOptions,driverTestResult:Object(_webgl_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_24__["testWebGLDriver"])(this.context),profiler:new _webgl_Profiler_js__WEBPACK_IMPORTED_MODULE_23__["Profiler"](this.context,this._debugOutput),dataUploadCounter:0},this._taskHandle=Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_3__["addFrameTask"])({render:e=>this.renderFrame(e)}),this._taskHandle.pause(),this._supersampleScreenshots=c,this._lostWebGLContextHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_2__["on"])(h,"webglcontextlost",(()=>{this.emit("webgl-error",{error:new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("webgl-context-lost")})})),h.setAttribute("style","width: 100%; height:100%; display:block;"),r.appendChild(h)}destroy(){this.removeAllChildren(),this._emptyTrash(),this._taskHandle.remove(),this._taskHandle=null,this._boundFBO=null,this._clipFBO&&(this._clipFBO.dispose(),this._clipFBO=null),this._clipVAO&&(this._clipVAO.dispose(),this._clipVAO=null,this._clipVBO=null),this._clipStencilProgram&&(this._clipStencilProgram.dispose(),this._clipStencilProgram=null),this._lostWebGLContextHandle&&(this._lostWebGLContextHandle.remove(),this._lostWebGLContextHandle=null),this._canvas.parentNode&&this._canvas.parentNode.removeChild(this._canvas),this._debugOutput&&this._debugOutput.parentNode&&this._debugOutput.parentNode.removeChild(this._debugOutput),this.highlightOptions=null,this.painter.dispose(),this.context.dispose(),this._canvas=null}get background(){return this._background}set background(e){this._background=e,this.requestRender()}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){this._highlightOptionsHandle&&(this._highlightOptionsHandle.remove(),this._highlightOptionsHandle=null),this._highlightOptions=e,this._highlightOptions&&(this._highlightOptionsHandle=Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_6__["init"])(this._highlightOptions,"version",(()=>{this.painter.setHighlightOptions(e),this.requestRender()})))}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._lastRenderRequestTime=performance.now(),this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){e.time-this._lastRenderRequestTime>=2e3&&this._taskHandle.pause(),this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(t,i){const s=this.context;i.profiler.recordStart("drawLayers"),i.dataUploadCounter=0,this._beforeRenderChildren(i),i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].MAP,this.painter.beforeRenderLayers(s,this.background);for(const e of t)e.processRender(i);this.painter.renderLayers(s),i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].HIGHLIGHT,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s);if(this._isLabelDrawPhaseRequired(t)){i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].LABEL,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s)}if(Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug")){i.drawPhase=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_20__["WGLDrawPhase"].DEBUG,this.painter.beforeRenderLayers(s);for(const e of t)e.processRender(i);this.painter.renderLayers(s)}i.profiler.recordEnd("drawLayers"),this._afterRenderChildren()}_beforeRenderChildren(e){const{context:t}=this,{state:i,pixelRatio:s}=e;t.enforceState();const{size:n,rotation:a}=i,h=Math.round(n[0]*s),o=Math.round(n[1]*s);this._boundFBO=t.getBoundFramebufferObject();if(!(i.spatialReference&&(i.spatialReference._isWrappable?i.spatialReference._isWrappable():i.spatialReference.isWrappable)))return void(this._clipFrame=!1);const l=Object(_chunks_common_js__WEBPACK_IMPORTED_MODULE_5__["t"])(a),d=Math.abs(Math.cos(l)),u=Math.abs(Math.sin(l)),f=Math.round(h*d+o*u),b=Math.round(i.worldScreenWidth);if(f<=b)return void(this._clipFrame=!1);this._clipFBO&&this._clipFBO.width===h&&this._clipFBO.height===o||(this._clipFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](t,{colorTarget:0,depthStencilTarget:3,width:h,height:o}));const w=(this.state.padding.left-this.state.padding.right)/2,R=(this.state.padding.bottom-this.state.padding.top)/2,x=.5*h,y=.5*o,C=1/h,F=1/o,v=b*s*.5,P=.5*(h*u+o*d),S=this._upperLeft,j=this._upperRight,B=this._lowerLeft,E=this._lowerRight;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(S,-v,-P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(j,v,-P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(B,-v,P),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["s"])(E,v,P),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["i"])(this._mat2),Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["t"])(this._mat2,this._mat2,[x+w,y+R]),0!==a&&Object(_chunks_mat2d_js__WEBPACK_IMPORTED_MODULE_11__["r"])(this._mat2,this._mat2,l),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(S,S,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(j,j,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(B,B,this._mat2),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_9__["t"])(E,E,this._mat2);const T=this._clipData;T.set([2*B[0]*C-1,2*(o-B[1])*F-1,2*E[0]*C-1,2*(o-E[1])*F-1,2*S[0]*C-1,2*(o-S[1])*F-1,2*j[0]*C-1,2*(o-j[1])*F-1]),this._clipRendererInitialized||this._initializeClipRenderer(t),this._clipVBO.setData(T),this._boundFBO=t.getBoundFramebufferObject(),t.bindFramebuffer(this._clipFBO),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),t.setClearColor(0,0,0,0),t.setClearDepth(1),t.setClearStencil(0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT|t.gl.STENCIL_BUFFER_BIT),t.setDepthWriteEnabled(!1),this._clipFrame=!0}_afterRenderChildren(){const e=this.context;if(e.logIno(),this._clipFrame&&this._clipRendererInitialized){if(e.bindFramebuffer(this._boundFBO),this._boundFBO=null,e.bindVAO(this._clipVAO),e.bindProgram(this._clipStencilProgram),e.setDepthWriteEnabled(!1),e.setDepthTestEnabled(!1),e.setStencilTestEnabled(!0),e.setBlendingEnabled(!1),e.setColorMask(!1,!1,!1,!1),e.setStencilOp(7680,7680,7681),e.setStencilWriteMask(255),e.setStencilFunction(519,1,255),e.drawElements(4,6,5123,0),e.bindVAO(),e.setColorMask(!0,!0,!0,!0),null!=this.background){const{r:t,g:i,b:s,a:r}=this.background.color;e.setClearColor(r*t/255,r*i/255,r*s/255,r)}else e.setClearColor(0,0,0,0);e.clear(e.gl.COLOR_BUFFER_BIT),e.setBlendingEnabled(!0),e.setStencilFunction(514,1,255),this.painter.blitTexture(e,this._clipFBO.colorTexture,9728,1),e.setStencilTestEnabled(!1)}}doRender(e){const t=this.context,{state:i,pixelRatio:s}=e;this._resizeCanvas(e),this.context.enforceState(),t.setViewport(0,0,s*i.size[0],s*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e,t){const i=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["screenshotSuperSampleSettings"])(e,this._supersampleScreenshots,this._state.padding),{framebufferWidth:s,framebufferHeight:r}=i,n=this.context,a=e.layers;let l=this.children;const d={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:this._renderParameters.state.clone(),pixelRatio:i.pixelRatio,time:Date.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1};if(null!=e.rotation){const t=d.state.viewpoint;t.rotation=e.rotation,d.state.viewpoint=t}a.length>0&&(l=[],a.forEach((e=>{const i=t.find((t=>t.layer.id===e.id));i&&"container"in i&&i.container&&l.push(i.container)})));const c=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_17__["default"](n,{colorTarget:0,depthStencilTarget:3,width:s,height:r}),p=n.getBoundFramebufferObject(),u=n.getViewport();n.bindFramebuffer(c),n.setViewport(0,0,s,r),this._renderChildren(l,d);const _=this._readbackScreenshot(i);n.bindFramebuffer(p),n.setViewport(u.x,u.y,u.width,u.height),this.requestRender();const m=this._ensureScreenshotEncodeCanvas();return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["encodeResult"])(_,e,m,{flipY:!0,premultipliedAlpha:!0})}_ensureScreenshotEncodeCanvas(){return this._screenshotEncodeCanvas||(this._screenshotEncodeCanvas=document.createElement("canvas")),this._screenshotEncodeCanvas}_readbackScreenshot(e){const{framebufferWidth:t,framebufferHeight:i,region:s,resample:r}=e,n=this.context.gl;if(r){const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(t,i,this._ensureScreenshotEncodeCanvas());n.readPixels(0,0,t,i,6408,5121,new Uint8Array(e.data.buffer));const a=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["resampleHermite"])(e,a,!0,r.region.x,i-(r.region.y+r.region.height),r.region.width,r.region.height)}{const e=Object(_support_screenshotUtils_js__WEBPACK_IMPORTED_MODULE_8__["createEmptyImageData"])(s.width,s.height,this._ensureScreenshotEncodeCanvas());return n.readPixels(s.x,i-(s.y+s.height),s.width,s.height,6408,5121,new Uint8Array(e.data.buffer)),e}}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:s},pixelRatio:r}=e,n=s[0],a=s[1],h=Math.round(n*r),o=Math.round(a*r);t.width===h&&t.height===o||(t.width=h,t.height=o),i.width=n+"px",i.height=a+"px"}_initializeClipRenderer(e){if(this._clipRendererInitialized)return!0;const t=_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"].attributes,i=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_18__["createProgram"])(e,_webgl_shaders_StencilPrograms_js__WEBPACK_IMPORTED_MODULE_25__["stencil"]);if(!i)return!1;const s=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createVertex(e,35040,32),r=new Uint16Array([0,1,2,2,1,3]),n=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"].createIndex(e,35044,r),a=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_16__["default"](e,t,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:s},n);return this._clipStencilProgram=i,this._clipVBO=s,this._clipVAO=a,this._clipRendererInitialized=!0,!0}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof _Container_js__WEBPACK_IMPORTED_MODULE_21__["Container"])){t=t||!1;break}if(i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}


/***/ }),

/***/ "YbU1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SpriteMosaic.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/* harmony import */ var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GeometryUtils.js */ "HQFP");
/* harmony import */ var _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RectangleBinPack.js */ "rhr1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c(t){return t&&"static"===t.type}class n{constructor(e,i,s,a=0){if(this._mosaicPages=[],this._maxItemSize=0,this._currentPage=0,this._fixSpriteLocationsTable=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("fix-sprite-locations"),this._testId=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("test-id"),this._pageWidth=0,this._pageHeight=0,this._mosaicRects=new Map,this._spriteCopyQueue=[],this.pixelRatio=1,(i<=0||s<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=i,this._pageHeight=s,this._requestRender=e,a>0&&(this._maxItemSize=a),this.pixelRatio=window.devicePixelRatio||1,this._fixSpriteLocationsTable){const t=[];for(const e in this._fixSpriteLocationsTable[this._testId]){const i=this._fixSpriteLocationsTable[this._testId][e];t[i.page]=i.pageSize}for(const e of t)this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(e[0]*e[1])},size:[e[0],e[1]],dirty:!0,texture:void 0})}this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth,this._pageHeight);const r=Math.floor(this._pageWidth),o=Math.floor(this._pageHeight);this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(r*o)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0})}getWidth(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[0]}getHeight(t){return t>=this._mosaicPages.length?-1:this._mosaicPages[t].size[1]}getPageTexture(t){return t<this._mosaicPages.length?this._mosaicPages[t].texture:null}has(t){return this._mosaicRects.has(t)}get itemCount(){return this._mosaicRects.size}getSpriteItem(t){return this._mosaicRects.get(t)}addSpriteItem(t,e,i,s,a,o){if(this._mosaicRects.has(t))return this._mosaicRects.get(t);let h,n,p;if(c(i))if(this._fixSpriteLocationsTable&&this._fixSpriteLocationsTable[this._testId]&&this._fixSpriteLocationsTable[this._testId][t]){const e=this._fixSpriteLocationsTable[this._testId][t];h=e.rect,n=e.page,p=e.pageSize}else[h,n,p]=this._allocateImage(e[0],e[1]);else{h=new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0,0,e[0],e[1]),n=this._mosaicPages.length;const t=void 0;this._mosaicPages.push({mosaicsData:i,size:e,dirty:!0,texture:t})}if(h.width<=0||h.height<=0)return null;const g={rect:h,width:e[0],height:e[1],sdf:a,simplePattern:o,pixelRatio:1,page:n};return this._mosaicRects.set(t,g),c(i)&&this._copy({rect:h,spriteSize:e,spriteData:i.data,page:n,pageSize:p,repeat:s,sdf:a}),g}hasItemsToProcess(){return 0!==this._spriteCopyQueue.length}processNextItem(){const t=this._spriteCopyQueue.pop();t&&this._copy(t)}getSpriteItems(t){const e={};for(const i of t)e[i]=this.getSpriteItem(i);return e}getMosaicItemPosition(t){const e=this.getSpriteItem(t),i=e&&e.rect;if(!i)return null;i.width=e.width,i.height=e.height;const a=e.width,r=e.height,o=_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],h=this._mosaicPages[e.page];return{size:[e.width,e.height],tl:[(i.x+o)/h[0],(i.y+o)/h[1]],br:[(i.x+o+a)/h[0],(i.y+o+r)/h[1]],page:e.page}}bind(t,i,s=0,r=0){const o=this._mosaicPages[s],h=o.mosaicsData;let n=o.texture;if(n||(n=function(t,e,i){if(c(e))return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t,{pixelFormat:6408,dataType:5121,width:i[0],height:i[1]},new Uint8Array(e.data.buffer));return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](t,{pixelFormat:6408,dataType:5121,samplingMode:9729,wrapMode:33071,width:i[0],height:i[1]},null)}(t,h,o.size),o.texture=n),n.setSamplingMode(i),c(h))t.bindTexture(n,r),o.dirty&&(n.setData(new Uint8Array(h.data.buffer)),n.generateMipmap());else{const i=h.data,s=i.bindFrame(t,n,r);Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._requestRender)&&s&&i.frameCount>0&&this._requestRender.requestRender(),i.bindFrame(t,n,r)}o.dirty=!1}static _copyBits(t,e,i,s,a,r,o,h,c,n,p){let g=s*e+i,m=h*r+o;if(p){m-=r;for(let o=-1;o<=n;o++,g=((o+n)%n+s)*e+i,m+=r)for(let e=-1;e<=c;e++)a[m+e]=t[g+(e+c)%c]}else for(let i=0;i<n;i++){for(let e=0;e<c;e++)a[m+e]=t[g+e];g+=e,m+=r}}_copy(t){if(t.page>=this._mosaicPages.length)return;const e=this._mosaicPages[t.page],a=e.mosaicsData;if(!c(e.mosaicsData))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-resource","unsuitable data type!");const r=t.spriteData,o=a.data;o&&r||console.error("Source or target images are uninitialized!"),n._copyBits(r,t.spriteSize[0],0,0,o,t.pageSize[0],t.rect.x+_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],t.rect.y+_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],t.spriteSize[0],t.spriteSize[1],t.repeat),e.dirty=!0}_allocateImage(t,e){t+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"],e+=2*_definitions_js__WEBPACK_IMPORTED_MODULE_3__["SPRITE_PADDING"];const i=Math.max(t,e);if(this._maxItemSize&&this._maxItemSize<i){const i=Math.pow(2,Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(t))),s=Math.pow(2,Math.ceil(Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_9__["log2"])(e))),a=new _Rect_js__WEBPACK_IMPORTED_MODULE_8__["default"](0,0,t,e);return this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(i*s)},size:[i,s],dirty:!0,texture:void 0}),[a,this._mosaicPages.length-1,[i,s]]}const a=this._binPack.allocate(t,e);if(a.width<=0){const i=this._mosaicPages[this._currentPage];return!i.dirty&&c(i.mosaicsData)&&(i.mosaicsData.data=null),this._currentPage=this._mosaicPages.length,this._mosaicPages.push({mosaicsData:{type:"static",data:new Uint32Array(this._pageWidth*this._pageHeight)},size:[this._pageWidth,this._pageHeight],dirty:!0,texture:void 0}),this._binPack=new _RectangleBinPack_js__WEBPACK_IMPORTED_MODULE_10__["default"](this._pageWidth,this._pageHeight),this._allocateImage(t,e)}return[a,this._currentPage,[this._pageWidth,this._pageHeight]]}dispose(){this._binPack=null;for(const t of this._mosaicPages){const e=t.texture;e&&e.dispose();const i=t.mosaicsData;if(!c(i)){i.data.pause()}}this._mosaicPages=null,this._mosaicRects.clear()}}/* harmony default export */ __webpack_exports__["default"] = (n);


/***/ }),

/***/ "aK+o":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightRenderer.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/* harmony import */ var _shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shaders/HighlightPrograms.js */ "L/m8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,s){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_9__["ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()}finalBlur(e,s){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",_parameters_js__WEBPACK_IMPORTED_MODULE_9__["RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX"]),e.bindVAO(this._resources.quadVAO),e.drawArrays(5,0,4),e.bindVAO()}renderHighlight(e,s,i){e.bindTexture(s,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),e.bindProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(1,771),e.drawArrays(5,0,4),e.bindVAO()}_initialize(o,h,m){this._width=h,this._height=m;const d=new _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](o,34962,35044,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),g=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_5__["default"](o,{a_position:0,a_texcoord:1},{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:d}),l=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__["highlight"]),_=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_7__["createProgram"])(o,_shaders_HighlightPrograms_js__WEBPACK_IMPORTED_MODULE_10__["blur"]);l.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),l.setUniform1i("u_shade",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]),l.setUniform4fv("u_sigmas",_parameters_js__WEBPACK_IMPORTED_MODULE_9__["SIGMAS"]),_.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_0"]),_.setUniform4fv("u_sigmas",_parameters_js__WEBPACK_IMPORTED_MODULE_9__["SIGMAS"]),this._resources={quadGeometry:d,quadVAO:g,highlightProgram:l,blurProgram:_}}setup(r,e,s){this._resources?(this._width=e,this._height=s):this._initialize(r,e,s)}});


/***/ }),

/***/ "ac4n":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/AnimationEffect.js ***!
  \************************************************************************************/
/*! exports provided: AnimationEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationEffect", function() { return o; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../definitions.js */ "jIHu");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _Effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Effect.js */ "FrEu");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class o extends _Effect_js__WEBPACK_IMPORTED_MODULE_3__["Effect"]{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:{a_position:0}}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(i,r){if(!r.size)return;const{context:a,renderingOptions:o}=i;this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_2__["default"](a,[0,0,1,0,0,1,1,1]));const n=a.getBoundFramebufferObject(),{x:m,y:u,width:d,height:f}=a.getViewport();r.bindTextures(a);const c=r.getBlock(_definitions_js__WEBPACK_IMPORTED_MODULE_1__["ATTRIBUTE_DATA_ANIMATION"]);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return;const _=c.getFBO(a),l=c.getFBO(a,1);a.setViewport(0,0,r.size,r.size),this._computeDelta(i,l,o.labelsAnimationTime),this._updateAnimationState(i,l,_),a.bindFramebuffer(n),a.setViewport(m,u,d,f)}_computeDelta(e,t,s){const{context:a,painter:o,displayLevel:n}=e,m=o.materialManager.getProgram(e,this._desc,["delta"]);a.bindFramebuffer(t),a.setClearColor(0,0,0,0),a.clear(a.gl.COLOR_BUFFER_BIT),a.bindProgram(m),m.setUniform1i("u_maskTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]),m.setUniform1i("u_sourceTexture",_definitions_js__WEBPACK_IMPORTED_MODULE_1__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]),m.setUniform1f("u_timeDelta",e.deltaTime),m.setUniform1f("u_animationTime",s),m.setUniform1f("u_zoomLevel",Math.round(10*n)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:s}=e,a=s.materialManager.getProgram(e,this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.bindProgram(a),a.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}}


/***/ }),

/***/ "bfVh":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/BitBlitRenderer.js ***!
  \****************************************************************************/
/*! exports provided: BitBlitRenderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitBlitRenderer", function() { return s; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shaders/BitBlitPrograms.js */ "q6Gj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(){this._initialized=!1}dispose(){this._program&&(this._program.dispose(),this._program=null),this._vertexArrayObject&&(this._vertexArrayObject.dispose(),this._vertexArrayObject=null)}render(r,t,e,i){r&&(this._initialized||this._initialize(r),r.setBlendFunctionSeparate(1,771,1,771),r.bindVAO(this._vertexArrayObject),r.bindProgram(this._program),t.setSamplingMode(e),r.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",i),r.drawArrays(5,0,4),r.bindTexture(null,0),r.bindVAO())}_initialize(s){if(this._initialized)return!0;const o=_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__["bitBlit"].attributes,a=Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(s,_shaders_BitBlitPrograms_js__WEBPACK_IMPORTED_MODULE_8__["bitBlit"]);if(!a)return!1;const n=new Int8Array(16);n[0]=-1,n[1]=-1,n[2]=0,n[3]=0,n[4]=1,n[5]=-1,n[6]=1,n[7]=0,n[8]=-1,n[9]=1,n[10]=0,n[11]=1,n[12]=1,n[13]=1,n[14]=1,n[15]=1;const m=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](s,o,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:4,normalized:!1,divisor:0},{name:"a_tex",count:2,type:5120,offset:2,stride:4,normalized:!1,divisor:0}]},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(s,35044,n)});return this._program=a,this._vertexArrayObject=m,this._initialized=!0,!0}}


/***/ }),

/***/ "cZ4F":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/visualVariableSimpleUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: getSizeForValueSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSizeForValueSimple", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../renderers/support/lengthUtils.js */ "m0D6");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=Math.PI;function r(r,i){switch(i.transformationType){case"additive":return function(t,n){const e=a(n.minSize,t);return t+(e||n.minDataValue)}(r,i);case"constant":return function(t,n){const e=t.stops;let r=e&&e.length&&e[0].size;null==r&&(r=t.minSize);return a(r,n)}(i,r);case"clamped-linear":return function(t,n){const e=(t-n.minDataValue)/(n.maxDataValue-n.minDataValue),r=a(n.minSize,t),i=a(n.maxSize,t);if(t<=n.minDataValue)return r;if(t>=n.maxDataValue)return i;return r+e*(i-r)}(r,i);case"proportional":return function(n,e){const r=n/e.minDataValue,i=a(e.minSize,n),u=a(e.maxSize,n);let s=null;return s=r*i,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(s,i,u)}(r,i);case"stops":return function(t,n){const[e,r,i]=function(t,n){if(!n)return;let e=0,r=n.length-1;return n.some(((n,a)=>t<n?(r=a,!0):(e=a,!1))),[e,r,(t-n[e])/(n[r]-n[e])]}(t,n.cache.ipData);if(e===r)return a(n.stops[e].size,t);{const u=a(n.stops[e].size,t);return u+(a(n.stops[r].size,t)-u)*i}}(r,i);case"real-world-size":return function(r,i){const u=_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_1__["meterIn"][i.valueUnit],s=a(i.minSize,r),o=a(i.maxSize,r),{valueRepresentation:c}=i;let l=null;l="area"===c?2*Math.sqrt(r/e)/u:"radius"===c||"distance"===c?2*r/u:r/u;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(l,s,o)}(r,i);case"identity":return r;case"unknown":return null}}function a(t,n){return"number"==typeof t?t:r(n,t)}


/***/ }),

/***/ "cwtj":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/actions/Pinch.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/Point.js */ "SuVq");
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../geometry.js */ "4GrV");
/* harmony import */ var _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../Viewpoint.js */ "y3LX");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../viewpointUtils.js */ "qYtE");
/* harmony import */ var _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../navigation/RotationMomentumEstimator.js */ "EdjT");
/* harmony import */ var _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../navigation/ZoomMomentumEstimator.js */ "jm8U");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let l=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._animationTime=0,this._momentumFinished=!1,this._rotationMomentumEstimator=new _navigation_RotationMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_16__["RotationMomentumEstimator"](.6,.15,.95),this._rotationDirection=1,this._zoomDirection=1,this._zoomMomentumEstimator=new _navigation_ZoomMomentumEstimator_js__WEBPACK_IMPORTED_MODULE_17__["ZoomMomentumEstimator"],this._zoomOnly=null,this.zoomMomentum=null,this.rotateMomentum=null,this.viewpoint=new _Viewpoint_js__WEBPACK_IMPORTED_MODULE_12__["default"]({targetGeometry:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_10__["default"],scale:0,rotation:0}),this.watch("_momentumFinished",(t=>{t&&this.navigation.stop()}))}begin(t,o){this.navigation.begin(),this._rotationMomentumEstimator.reset(),this._zoomMomentumEstimator.reset(),this._zoomOnly=null,this._previousAngle=this._startAngle=o.angle,this._previousRadius=this._startRadius=o.radius,this._previousCenter=o.center,this._updateTimestamp=null,t.constraints.rotationEnabled&&this.addToRotateEstimator(0,o.timestamp),this.addToZoomEstimator(o,1)}update(t,o){null===this._updateTimestamp&&(this._updateTimestamp=o.timestamp);const i=o.angle,s=o.radius,e=o.center,n=Math.abs(180*(i-this._startAngle)/Math.PI),m=Math.abs(s-this._startRadius),a=this._startRadius/s;if(this._previousRadius){const r=s/this._previousRadius;let h=180*(i-this._previousAngle)/Math.PI;this._rotationDirection=h>=0?1:-1,this._zoomDirection=r>=1?1:-1,t.constraints.rotationEnabled?(null===this._zoomOnly&&o.timestamp-this._updateTimestamp>200&&(this._zoomOnly=m-n>0),null===this._zoomOnly||this._zoomOnly?h=0:this.addToRotateEstimator(i-this._startAngle,o.timestamp)):h=0,this.addToZoomEstimator(o,a),this.navigation.setViewpoint([e.x,e.y],1/r,h,[this._previousCenter.x-e.x,e.y-this._previousCenter.y])}this._previousAngle=i,this._previousRadius=s,this._previousCenter=e}end(t){this.rotateMomentum=this._rotationMomentumEstimator.evaluateMomentum(),this.zoomMomentum=this._zoomMomentumEstimator.evaluateMomentum(),this._animationTime=0,(this.rotateMomentum||this.zoomMomentum)&&this.onAnimationUpdate(t),this.navigation.end()}addToRotateEstimator(t,o){this._rotationMomentumEstimator.add(t,.001*o)}addToZoomEstimator(t,o){this._zoomMomentumEstimator.add(o,.001*t.timestamp)}canZoomIn(t){const o=t.scale,i=t.constraints.effectiveMaxScale;return 0===i||o>i}canZoomOut(t){const o=t.scale,i=t.constraints.effectiveMinScale;return 0===i||o<i}onAnimationUpdate(t){this.navigation.animationManager.animateContinous(t.viewpoint,((o,i)=>{const s=!this.canZoomIn(t)&&this._zoomDirection>1||!this.canZoomOut(t)&&this._zoomDirection<1,e=!this.rotateMomentum||this.rotateMomentum.isFinished(this._animationTime),n=s||!this.zoomMomentum||this.zoomMomentum.isFinished(this._animationTime),p=.001*i;if(this._momentumFinished=e&&n,!this._momentumFinished){const i=this.rotateMomentum?Math.abs(this.rotateMomentum.valueDelta(this._animationTime,p))*this._rotationDirection*180/Math.PI:0;let s=this.zoomMomentum?Math.abs(this.zoomMomentum.valueDelta(this._animationTime,p)):1;const e=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])(),n=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_13__["a"])();if(this._previousCenter){Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["s"])(e,this._previousCenter.x,this._previousCenter.y),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["getPaddingScreenTranslation"])(n,t.size,t.padding),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_14__["h"])(e,e,n);const{constraints:m,scale:p}=t,c=p*s;s<1&&!m.canZoomInTo(c)?(s=p/m.effectiveMaxScale,this.zoomMomentum=null,this.rotateMomentum=null):s>1&&!m.canZoomOutTo(c)&&(s=p/m.effectiveMinScale,this.zoomMomentum=null,this.rotateMomentum=null),Object(_viewpointUtils_js__WEBPACK_IMPORTED_MODULE_15__["scaleAndRotateBy"])(o,t.viewpoint,s,i,e,t.size),t.constraints.constrainByGeometry(o)}}this._animationTime+=p}))}stopMomentumNavigation(){(this.rotateMomentum||this.zoomMomentum)&&(this.rotateMomentum&&(this._rotationMomentumEstimator.reset(),this.rotateMomentum=null),this.zoomMomentum&&(this._zoomMomentumEstimator.reset(),this.zoomMomentum=null),this.navigation.stop())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"_momentumFinished",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"viewpoint",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],l.prototype,"navigation",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.actions.Pinch")],l);var _=l;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "e4KH":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/symbols/cim/Rasterizer.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "NrhG");
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rect.js */ "Du6U");
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CIMSymbolHelper.js */ "eT81");
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SDFHelper.js */ "QFw1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,s,o){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===e.type||"esriSFS"===e.type){const[r,a,n]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleFill(this._rasterizationCanvas,e.style,s);return{size:[a,n],image:new Uint32Array(r.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if("simple-line"===e.type||"esriSLS"===e.type){const[r,a,n]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["SymbolHelper"].rasterizeSimpleLine(e.style,e.cap);return{size:[a,n],image:new Uint32Array(r.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let m,l,f;if("simple-marker"===e.type||"esriSMS"===e.type||"line-marker"===e.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromSimpleMarker(e),f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)):"CIMHatchFill"===e.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMHatchFill(e),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):e.markerPlacement&&"CIMMarkerPlacementInsidePolygon"===e.markerPlacement.type?(m=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].fromCIMInsidePolygon(e),l=new _Rect_js__WEBPACK_IMPORTED_MODULE_1__["default"](m.frame.xmin,-m.frame.ymax,m.frame.xmax-m.frame.xmin,m.frame.ymax-m.frame.ymin)):(m=e,f=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["getSDFInfo"])(m)),f&&!o){const[e,r,t]=Object(_SDFHelper_js__WEBPACK_IMPORTED_MODULE_3__["buildSDF"])(f);return e?{size:[r,t],image:new Uint32Array(e.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[c,h,p,y,u]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_2__["CIMSymbolHelper"].rasterize(this._rasterizationCanvas,m,l,!o);return c?{size:[h,p],image:new Uint32Array(c.buffer),sdf:!1,simplePattern:!1,anchorX:y,anchorY:u}:null}rasterizeImageResource(r,t,a,n){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=r,this._rasterizationCanvas.height=t;const i=this._rasterizationCanvas.getContext("2d");a instanceof ImageData?i.putImageData(a,0,0):(a.setAttribute("width",`${r}px`),a.setAttribute("height",`${t}px`),i.drawImage(a,0,0,r,t));const s=i.getImageData(0,0,r,t),o=new Uint8Array(s.data);if(n)for(const e of n)if(e&&e.oldColor&&4===e.oldColor.length&&e.newColor&&4===e.newColor.length){const[r,t,a,n]=e.oldColor,[i,s,m,l]=e.newColor;if(r===i&&t===s&&a===m&&n===l)continue;for(let e=0;e<o.length;e+=4)r===o[e]&&t===o[e+1]&&a===o[e+2]&&n===o[e+3]&&(o[e]=i,o[e+1]=s,o[e+2]=m,o[e+3]=l)}let m;for(let e=0;e<o.length;e+=4)m=o[e+3]/255,o[e]=o[e]*m,o[e+1]=o[e+1]*m,o[e+2]=o[e+2]*m;let l=o,f=r,c=t;const h=512;if(f>=h||c>=h){const a=f/c;a>1?(f=h,c=Math.round(h/a)):(c=h,f=Math.round(h*a)),l=new Uint8Array(4*f*c);const n=new Uint8ClampedArray(l.buffer);Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["resampleHermite"])(o,r,t,n,f,c,!1)}return{size:[r,t],image:new Uint32Array(l.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}});


/***/ }),

/***/ "fGRN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/parameters.js ***!
  \*****************************************************************************************/
/*! exports provided: ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, HIGHLIGHT_SIZING, RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX, SHADE_TEXTURE_SIZE, SIGMAS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALPHA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_SIZING", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBA_TO_RGBA_CHANNEL_SELECTOR_MATRIX", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADE_TEXTURE_SIZE", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGMAS", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=[void 0,void 0,void 0,1],i=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],t=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],d=256,n={outlineWidth:.7,outerHaloWidth:.7,innerHaloWidth:.7,outlinePosition:0};


/***/ }),

/***/ "fUoV":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/MagnifierPrograms.js ***!
  \**************************************************************************************/
/*! exports provided: createMagnifierProgram, magnifierProgramTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMagnifierProgram", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magnifierProgramTemplate", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/programUtils.js */ "1F90");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i={name:"magnifier",shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("magnifier/magnifier.frag")},attributes:{a_pos:0}};function t(e){return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["createProgram"])(e,i)}


/***/ }),

/***/ "jE2w":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SDFConverter.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _packingUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packingUtils.js */ "E7yl");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const h=1e20;/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this.size=t;const s=document.createElement("canvas");s.width=s.height=t,this._context=s.getContext("2d"),this._gridOuter=new Float64Array(t*t),this._gridInner=new Float64Array(t*t),this._f=new Float64Array(t),this._d=new Float64Array(t),this._z=new Float64Array(t+1),this._v=new Int16Array(t)}dispose(){this._context=this._gridOuter=this._gridInner=this._f=this._d=this._z=this._v=null,this._svg&&(document.body.removeChild(this._svg),this._svg=null)}draw(r,n,o=31){this._initSVG();const a=this._createSVGString(r);return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(((t,r)=>{const d=new Image;d.src="data:image/svg+xml; charset=utf8, "+encodeURIComponent(a),d.onload=()=>{d.onload=null,this._context.clearRect(0,0,this.size,this.size),this._context.drawImage(d,0,0,this.size,this.size);const s=this._context.getImageData(0,0,this.size,this.size),e=new Uint8Array(this.size*this.size*4);for(let t=0;t<this.size*this.size;t++){const e=s.data[4*t+3]/255;this._gridOuter[t]=1===e?0:0===e?h:Math.pow(Math.max(0,.5-e),2),this._gridInner[t]=1===e?h:0===e?0:Math.pow(Math.max(0,e-.5),2)}this._edt(this._gridOuter,this.size,this.size),this._edt(this._gridInner,this.size,this.size);for(let t=0;t<this.size*this.size;t++){const s=this._gridOuter[t]-this._gridInner[t];Object(_packingUtils_js__WEBPACK_IMPORTED_MODULE_1__["packFloatRGBA"])(.5-s/(2*o),e,4*t)}t(e)};const l=n&&n.signal;l&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["onAbort"])(l,(()=>r(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["createAbortError"])())))}))}_initSVG(){if(!this._svg){const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.setAttribute("style","position: absolute;"),t.setAttribute("width","0"),t.setAttribute("height","0"),t.setAttribute("aria-hidden","true"),t.setAttribute("role","presentation"),document.body.appendChild(t),this._svg=t}}_createSVGString(t){const s=document.createElementNS("http://www.w3.org/2000/svg","path");s.setAttribute("d",t),this._svg.appendChild(s);const e=s.getBBox(),i=e.width/e.height,h=this.size/2;let r,n,o,a;if(i>1){n=r=h/e.width;const t=h*(1/i);o=this.size/4,a=h-t/2}else{r=n=h/e.height;o=h-h*i/2,a=this.size/4}const d=-e.x*r+o,l=-e.y*n+a;s.setAttribute("style",`transform: matrix(${r}, 0, 0, ${n}, ${d}, ${l})`);const _=`<svg style="fill:red;" height="${this.size}" width="${this.size}" xmlns="http://www.w3.org/2000/svg">${this._svg.innerHTML}</svg>`;return this._svg.removeChild(s),_}_edt(t,s,e){const i=this._f,h=this._d,r=this._v,n=this._z;for(let o=0;o<s;o++){for(let h=0;h<e;h++)i[h]=t[h*s+o];this._edt1d(i,h,r,n,e);for(let i=0;i<e;i++)t[i*s+o]=h[i]}for(let o=0;o<e;o++){for(let e=0;e<s;e++)i[e]=t[o*s+e];this._edt1d(i,h,r,n,s);for(let e=0;e<s;e++)t[o*s+e]=Math.sqrt(h[e])}}_edt1d(t,s,e,i,r){e[0]=0,i[0]=-h,i[1]=+h;for(let s=1,n=0;s<r;s++){let r=(t[s]+s*s-(t[e[n]]+e[n]*e[n]))/(2*s-2*e[n]);for(;r<=i[n];)n--,r=(t[s]+s*s-(t[e[n]]+e[n]*e[n]))/(2*s-2*e[n]);n++,e[n]=s,i[n]=r,i[n+1]=+h}for(let h=0,n=0;h<r;h++){for(;i[n+1]<h;)n++;s[h]=(h-e[n])*(h-e[n])+t[e[n]]}}});


/***/ }),

/***/ "jm8U":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/ZoomMomentumEstimator.js ***!
  \*****************************************************************************/
/*! exports provided: ZoomMomentum, ZoomMomentumEstimator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentum", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomMomentumEstimator", function() { return s; });
/* harmony import */ var _Momentum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Momentum.js */ "sz4w");
/* harmony import */ var _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MomentumEstimator.js */ "VfAO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r extends _Momentum_js__WEBPACK_IMPORTED_MODULE_0__["Momentum"]{constructor(e,t,r){super(e,t,r)}value(e){const t=super.value(e);return Math.exp(t)}valueDelta(e,t){const r=super.value(e),s=super.value(e+t)-r;return Math.exp(s)}}class s extends _MomentumEstimator_js__WEBPACK_IMPORTED_MODULE_1__["MomentumEstimator"]{constructor(e=2.5,t=.01,r=.95,s=12){super(e,t,r,s)}add(e,t){super.add(Math.log(e),t)}createMomentum(e,t,s){return new r(e,t,s)}}


/***/ }),

/***/ "kIoy":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/apng.js ***!
  \*********************************************************************************/
/*! exports provided: default, getPNGSize, isAnimatedPNG, isPNG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPNGSize", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnimatedPNG", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPNG", function() { return u; });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/promiseUtils.js */ "9MzC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=new Uint32Array(256);for(let t=0;t<256;t++){let e=t;for(let t=0;t<8;t++)e=0!=(1&e)?3988292384^e>>>1:e>>>1;i[t]=e}const n=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not a PNG"),s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Not an animated PNG"),h=new Uint8Array([137,80,78,71,13,10,26,10]);function u(t){const e=t.constructor===Uint8Array?t:new Uint8Array(t);return!h.some(((t,r)=>t!==e[r]))}function l(t){let e,r;return m(new Uint8Array(t),((t,a,i)=>{const n=new DataView(a.buffer);"IHDR"===t&&(e=n.getUint32(i+8),r=n.getUint32(i+12))})),[e,r]}function o(t){const e=new Uint8Array(t);if(!u(e))return!1;let r=!1;return m(e,(t=>!(r="acTL"===t))),r}class c{constructor(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.paused=!1,this.playing=!1,this.playSpeed=1,this.currentFrameNumber=0,this._lastUsedFrame=-1}static async create(r,a){const i=new c;try{await i._load(r,a)}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(r))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource",`Could not load PNG: ${r.message}`)}return i}play(){this.playing||(this.paused=!1,this.playing=!0,this._play())}pause(){this.paused=!0,this.playing=!1,clearTimeout(this.timerID)}togglePlay(){this.paused||!this.playing?this.play():this.pause()}bindFrame(t,e,r){t.bindTexture(e,r);const a=this.frameChanged();if(!a)return!1;const i=this.currentFrame,n=i.frameData,s=e.descriptor;return(i.left||i.top||i.width!==s.width||i.height!==s.height)&&e.setData(null),e.updateData(0,i.left,i.top,i.width,i.height,n),this.updateUsedFrame(),a}frameChanged(){return this._lastUsedFrame!==this.currentFrameNumber}updateUsedFrame(){this._lastUsedFrame=this.currentFrameNumber}async _load(a,i){try{const t=function(t,e){const r=new Uint8Array(e);if(h.some(((t,e)=>t!==r[e])))return n;let a=!1;if(m(r,(t=>!(a="acTL"===t))),!a)return s;const i=[],u=[];let l=null,o=null,c=0;if(m(r,((e,r,a,n)=>{const s=new DataView(r.buffer);switch(e){case"IHDR":l=r.subarray(a+8,a+8+n),t.width=s.getUint32(a+8),t.height=s.getUint32(a+12);break;case"acTL":t.numPlays=s.getUint32(a+8+4);break;case"fcTL":{o&&(t.frames.push(o),c++),o=new d,o.width=s.getUint32(a+8+4),o.height=s.getUint32(a+8+8),o.left=s.getUint32(a+8+12),o.top=s.getUint32(a+8+16);const e=s.getUint16(a+8+20);let r=s.getUint16(a+8+22);0===r&&(r=100),o.delay=1e3*e/r,o.delay<=10&&(o.delay=100),t.playTime+=o.delay,o.disposeOp=s.getUint8(a+8+24),o.blendOp=s.getUint8(a+8+25),o.dataParts=[],0===c&&2===o.disposeOp&&(o.disposeOp=1);break}case"fdAT":o&&o.dataParts.push(r.subarray(a+8+4,a+8+n));break;case"IDAT":o&&o.dataParts.push(r.subarray(a+8,a+8+n));break;case"IEND":u.push(g(r,a,12+n));break;default:i.push(g(r,a,12+n))}})),0===t.frames.length)return s;t.frameCount=t.frames.length;const p=new Blob(i),y=new Blob(u);return t.frames.forEach((t=>{let e=[];e.push(h),l.set(w(t.width),0),l.set(w(t.height),4),e.push(f("IHDR",l)),e.push(p),t.dataParts.forEach((t=>e.push(f("IDAT",t)))),e.push(y),t.data=new Blob(e,{type:"image/png"}),delete t.dataParts,e=null})),t}(this,a);if(t!==this)return t;this._resizeCanvas=document.createElement("canvas"),this._resizeCanvas.width=this.width,this._resizeCanvas.height=this.height,await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(this.frames.map((t=>t.createImage(this._resizeCanvas))))}catch(r){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(r))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("invalid-resource","Could not parse PNG")}this.play()}_play(){let t,e;if(0===this.playSpeed)return void this.pause();this.playSpeed<0?(this.currentFrameNumber-=1,this.currentFrameNumber<0&&(this.currentFrameNumber=this.frames.length-1),e=this.currentFrameNumber,e-=1,e<0&&(e=this.frames.length-1),t=1*-this.frames[e].delay/this.playSpeed):(this.currentFrameNumber+=1,this.currentFrameNumber%=this.frames.length,t=1*this.frames[this.currentFrameNumber].delay/this.playSpeed);const r=this.frames[this.currentFrameNumber];this.currentFrame={frameData:r.imageData,top:r.top,left:r.left,width:r.width,height:r.height},this.timerID=window.setTimeout((()=>this._play()),t)}}class d{constructor(){this.left=0,this.top=0,this.width=0,this.height=0,this.delay=0,this.disposeOp=0,this.blendOp=0,this.data=null,this.imageData=null}async createImage(t){if(null===this.imageData)return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["create"])(((e,r)=>{const a=URL.createObjectURL(this.data),i=document.createElement("img");i.onload=()=>{URL.revokeObjectURL(a),this.imageData=function(t,e){e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const a=r.getImageData(0,0,t.width,t.height),i=new Uint8Array(a.data);let n;for(let t=0;t<i.length;t+=4)n=i[t+3]/255,i[t]=i[t]*n,i[t+1]=i[t+1]*n,i[t+2]=i[t+2]*n;return new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height)}(i,t),e()},i.onerror=()=>{URL.revokeObjectURL(a),this.imageData=null,r(new Error("Image creation error"))},i.src=a}))}}function m(t,e){const r=new DataView(t.buffer);let a,i,n,s=8;do{i=r.getUint32(s),a=p(t,s+4,4),n=e(a,t,s,i),s+=12+i}while(!1!==n&&"IEND"!==a&&s<t.length)}function p(t,e,r){const a=Array.prototype.slice.call(t.subarray(e,e+r));return String.fromCharCode.apply(String,a)}function g(t,e,r){const a=new Uint8Array(r);return a.set(t.subarray(e,e+r)),a}function f(t,e){const r=t.length+e.length,a=new Uint8Array(r+8),n=new DataView(a.buffer);n.setUint32(0,e.length),a.set(function(t){const e=new Uint8Array(t.length);for(let r=0;r<t.length;r++)e[r]=t.charCodeAt(r);return e}(t),4),a.set(e,8);const s=function(t,e=0,r=t.length-e){let a=-1;for(let n=e,s=e+r;n<s;n++)a=a>>>8^i[255&(a^t[n])];return-1^a}(a,4,r);return n.setUint32(r+4,s),a}function w(t){return new Uint8Array([t>>>24&255,t>>>16&255,t>>>8&255,255&t])}/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "krN3":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GlyphSource.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/pbf.js */ "ATu9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a{constructor(t){for(this._metrics=[],this._bitmaps=[];t.next();)switch(t.tag()){case 1:{const e=t.getMessage();for(;e.next();)switch(e.tag()){case 3:{const t=e.getMessage();let s,a,r,n,i,c,g;for(;t.next();)switch(t.tag()){case 1:s=t.getUInt32();break;case 2:a=t.getBytes();break;case 3:r=t.getUInt32();break;case 4:n=t.getUInt32();break;case 5:i=t.getSInt32();break;case 6:c=t.getSInt32();break;case 7:g=t.getUInt32();break;default:t.skip()}t.release(),s&&(this._metrics[s]={width:r,height:n,left:i,top:c,advance:g},this._bitmaps[s]=a);break}default:e.skip()}e.release();break}default:t.skip()}}getMetrics(t){return this._metrics[t]}getBitmap(t){return this._bitmaps[t]}}class r{constructor(){this._ranges=[]}getRange(t){return this._ranges[t]}addRange(t,e){this._ranges[t]=e}}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._glyphInfo={},this._baseURL=t}getRange(r,n,i){const c=this._getFontStack(r);if(c.getRange(n))return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["resolve"])();const g=256*n,o=g+255,h=this._baseURL.replace("{fontstack}",r).replace("{range}",g+"-"+o);return Object(_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(h,{responseType:"array-buffer",...i}).then((t=>{c.addRange(n,new a(new _core_pbf_js__WEBPACK_IMPORTED_MODULE_2__["default"](new Uint8Array(t.data),new DataView(t.data))))}))}getGlyph(t,e){const s=this._getFontStack(t);if(!s)return;const a=Math.floor(e/256);if(a>256)return;const r=s.getRange(a);return r?{metrics:r.getMetrics(e),bitmap:r.getBitmap(e)}:void 0}_getFontStack(t){let e=this._glyphInfo[t];return e||(e=this._glyphInfo[t]=new r),e}});


/***/ }),

/***/ "mvnU":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/LabelManager.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../core/HandleOwner.js */ "kJYu");
/* harmony import */ var _core_throttle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../core/throttle.js */ "5C/r");
/* harmony import */ var _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./engine/webgl/collisions/CollisionEngine.js */ "KVK4");
/* harmony import */ var _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./engine/webgl/collisions/LayerViewSorter.js */ "yCUC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.labels.LabelManager");let u=class extends(Object(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_11__["HandleOwnerMixin"])(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_10__["default"])){constructor(e){super(e),this._applyVisibilityPassThrottled=Object(_core_throttle_js__WEBPACK_IMPORTED_MODULE_12__["throttle"])(this._applyVisibilityPass,64,this),this.lastUpdateId=-1,this.updateRequested=!1,this.view=null}initialize(){this.collisionEngine=new _engine_webgl_collisions_CollisionEngine_js__WEBPACK_IMPORTED_MODULE_13__["CollisionEngine"](this.view.featuresTilingScheme),this._layerViewSorter=new _engine_webgl_collisions_LayerViewSorter_js__WEBPACK_IMPORTED_MODULE_14__["LayerViewSorter"](((e,t)=>{this.collisionEngine.registerLayerView(e,t);const i=e.tileRenderer;i&&i.forEachTile((t=>{t.isDirty=!0,this.addTile(e,t)})),this.requestUpdate()}),(e=>{this.collisionEngine.unregisterLayerView(e),this.requestUpdate()})),this.handles.add(this.view.allLayerViews.on("change",(e=>{this._layerViewSorter.update(e)})))}destroy(){this._layerViewSorter.destroy(),this._layerViewSorter=null,this.collisionEngine=null,this._applyVisibilityPassThrottled.remove(),this._applyVisibilityPassThrottled=null}get updating(){return this.updateRequested}update(e){this._applyVisibilityPassThrottled(e)}viewChange(){this.requestUpdate()}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}processUpdate(e){this._set("updateParameters",e),this.updateRequested&&(this.updateRequested=!1,this.update(e))}addTile(e,t){this.collisionEngine.addTile(e,t)}removeTile(e,t){this.collisionEngine.removeTile(e,t)}_applyVisibilityPass(e){try{const t=this.view.featuresTilingScheme.getClosestInfoForScale(e.state.scale).level;this.collisionEngine.run(e,t)}catch(e){d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_6__["default"]("mapview-labeling","Encountered an error during label decluttering",e))}}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"updateRequested",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({readOnly:!0})],u.prototype,"updateParameters",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({dependsOn:["updateRequested"]})],u.prototype,"updating",null),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],u.prototype,"view",void 0),u=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.labels.LabelManager")],u);var c=u;/* harmony default export */ __webpack_exports__["default"] = (c);


/***/ }),

/***/ "oQiY":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Profiler.js ***!
  \*********************************************************************/
/*! exports provided: Profiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profiler", function() { return o; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/CircularArray.js */ "lx5q");
/* harmony import */ var _webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../webgl/capabilities/DisjointTimerQuery.js */ "GprA");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const i=Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-profiler");class o{constructor(e,s){if(this._events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__["default"],this._entries=new Map,this._timings=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_3__["default"](10),!i)return;this._ext=Object(_webgl_capabilities_DisjointTimerQuery_js__WEBPACK_IMPORTED_MODULE_4__["createDisjointTimerQuery"])(e.gl,{}),this._debugOutput=s;const o=e.gl;if(this.enableCommandLogging)for(const e in o)if("function"==typeof o[e]){const s=o[e],t=-1!==e.indexOf("draw");o[e]=(...r)=>(this._events.emit("command",{container:this._currentContainer,pass:this._currentPass,brush:this._currentBrush,method:e,args:r,isDrawCommand:t}),this._currentSummary&&(this._currentSummary.commands++,t&&this._currentSummary.drawCommands++),s.apply(o,r))}}get enableCommandLogging(){return!("object"==typeof i&&i.disableCommands)}recordContainerStart(e){i&&(this._currentContainer=e)}recordContainerEnd(){i&&(this._currentContainer=null)}recordPassStart(e){i&&(this._currentPass=e,this._initSummary())}recordPassEnd(){i&&(this._currentPass=null,this._emitSummary())}recordBrushStart(e){i&&(this._currentBrush=e)}recordBrushEnd(){i&&(this._currentBrush=null)}recordStart(e){if(i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext)){if(this._entries.has(e)){const t=this._entries.get(e),r=this._ext.resultAvailable(t.query),n=this._ext.disjoint();if(r&&!n){const r=this._ext.getResult(t.query)/1e6;let n=0;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._timings.enqueue(r))){const e=this._timings.entries,s=e.length;let t=0;for(const s of e)t+=s;n=t/s}const i=r.toFixed(2),o=n?n.toFixed(2):"--";this.enableCommandLogging?(console.groupCollapsed(`Frame report for ${e}, ${i} ms (${o} last 10 avg)\n${t.commandsLen} Commands (${t.drawCommands} draw)`),console.log("RenderPass breakdown: "),console.table(t.summaries),console.log("Commands: ",t.commands),console.groupEnd()):console.log(`Frame report for ${e}, ${i} ms (${o} last 10 avg)`),this._debugOutput.innerHTML=`${i} (${o})`}for(const e of t.handles)e.remove();this._entries.delete(e)}const t={name:e,query:this._ext.createQuery(),commands:[],commandsLen:0,drawCommands:0,summaries:[],handles:[]};this.enableCommandLogging&&(t.handles.push(this._events.on("command",(e=>{t.commandsLen++,t.commands.push(e),e.isDrawCommand&&t.drawCommands++}))),t.handles.push(this._events.on("summary",(e=>{t.summaries.push(e)})))),this._ext.beginTimeElapsed(t.query),this._entries.set(e,t)}}recordEnd(e){i&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._ext)&&this._entries.has(e)&&this._ext.endTimeElapsed()}_initSummary(){this.enableCommandLogging&&(this._currentSummary={container:this._currentContainer,pass:this._currentPass,drawCommands:0,commands:0})}_emitSummary(){this.enableCommandLogging&&this._events.emit("summary",this._currentSummary)}}


/***/ }),

/***/ "pc5U":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/CollisionBucketEntry.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../chunks/vec2.js */ "M0lq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._reference=null}get dirty(){return this.reference&&this.reference.isDirty}set dirty(e){this.reference&&this.reference.hasData&&(e||this.reference.isDirty)&&(this.reference.isDirty=e)}get index(){return this._reference&&this._reference.labelIndex}get reference(){return this._reference}set reference(e){this._reference=e}reset(s,n,i){const{state:c}=s,o=i.layerView.tileRenderer,f=this.reference;if(!f||!f.hasData)return!1;n&&(f.isDirty=!0);const a=f.transforms.labelMat2d,h=a[4],u=a[5];for(const s of f.displayObjects){const n=o.featuresView.attributeView,l=i.hasVV()?n.getVVSize(s.id):0;for(const n of s.metrics){i.hasVV()&&n.computeVVOffset(l,i.vvEval);const s=n.bounds.center,o=n.bounds.centerT;f.isDirty&&(n.minZoom=-1);const d=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["c"])(o,n.anchor);if(c.rotation?Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(d,d,a):(o[0]=d[0]+h,o[1]=d[1]+u),Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(o,d,s),o[0]+=n.offsetX,o[1]+=n.offsetY,n.boxes)for(const e of n.boxes){const s=e.center,i=n.anchor,o=e.centerT;Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["h"])(o,i,s),c.rotation?Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_0__["t"])(o,o,a):(o[0]=o[0]+h,o[1]=o[1]+u)}}}return!0}});


/***/ }),

/***/ "q6Gj":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BitBlitPrograms.js ***!
  \************************************************************************************/
/*! exports provided: bitBlit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bitBlit", function() { return e; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e={name:"bitBlit",shaders:{vertexShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.vert"),fragmentShader:Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("bitBlit/bitBlit.frag")},attributes:{a_pos:0,a_tex:1}};


/***/ }),

/***/ "qnLi":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/navigation/ZoomBox.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/uuid.js */ "ju1D");
/* harmony import */ var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../portal/support/resourceExtension.js */ "9AIY");
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/Accessor.js */ "/CmD");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/screenUtils.js */ "qRWG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o="esri-zoom-box__container",a="esri-zoom-box__overlay",n="esri-zoom-box__overlay-background",h="esri-zoom-box__outline",l="Shift",c="Ctrl";let d=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_9__["default"]{constructor(t){super(t),this._container=null,this._overlay=null,this._backgroundShape=null,this._boxShape=null,this._box={x:0,y:0,width:0,height:0},this._redraw=this._redraw.bind(this)}destroy(){this.view=null}set view(t){this._handles&&this._handles.forEach((t=>{t.remove()})),this._handles=null,this._destroyOverlay(),this._set("view",t),t&&(t.on("drag",[l],(t=>this._handleDrag(t,1))),t.on("drag",[l,c],(t=>this._handleDrag(t,-1))))}_start(){this._createContainer(),this._createOverlay(),this.navigation.begin()}_update(t,e,i,s){this._box.x=t,this._box.y=e,this._box.width=i,this._box.height=s,this._rafId||(this._rafId=requestAnimationFrame(this._redraw))}_end(t,e,i,s,o){const a=this.view,n=a.toMap(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__["createScreenPoint"])(t+.5*i,e+.5*s));let h=Math.max(i/a.width,s/a.height);-1===o&&(h=1/h),this._destroyOverlay(),this.navigation.end(),a.goTo({center:n,scale:a.scale*h})}_updateBox(t,e,i,s){const r=this._boxShape;r.setAttributeNS(null,"x",""+t),r.setAttributeNS(null,"y",""+e),r.setAttributeNS(null,"width",""+i),r.setAttributeNS(null,"height",""+s),r.setAttributeNS(null,"class",h)}_updateBackground(t,e,i,s){this._backgroundShape.setAttributeNS(null,"d",this._toSVGPath(t,e,i,s,this.view.width,this.view.height))}_createContainer(){const t=document.createElement("div");t.className=o,this.view.root.appendChild(t),this._container=t}_createOverlay(){const t=this.view.width,e=this.view.height,i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttributeNS(null,"d","M 0 0 L "+t+" 0 L "+t+" "+e+" L 0 "+e+" Z"),i.setAttributeNS(null,"class",n);const s=document.createElementNS("http://www.w3.org/2000/svg","rect"),r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.setAttributeNS(null,"class",a),r.appendChild(i),r.appendChild(s),this._container.appendChild(r),this._backgroundShape=i,this._boxShape=s,this._overlay=r}_destroyOverlay(){this._container&&this._container.parentNode&&this._container.parentNode.removeChild(this._container),this._container=this._backgroundShape=this._boxShape=this._overlay=null}_toSVGPath(t,e,i,s,r,o){const a=t+i,n=e+s;return"M 0 0 L "+r+" 0 L "+r+" "+o+" L 0 "+o+" ZM "+t+" "+e+" L "+t+" "+n+" L "+a+" "+n+" L "+a+" "+e+" Z"}_handleDrag(t,e){const i=t.x,s=t.y,r=t.origin.x,o=t.origin.y;let a,n,h,l;switch(i>r?(a=r,h=i-r):(a=i,h=r-i),s>o?(n=o,l=s-o):(n=s,l=o-s),t.action){case"start":this._start();break;case"update":this._update(a,n,h,l);break;case"end":this._end(a,n,h,l,e)}t.stopPropagation()}_redraw(){if(!this._rafId)return;if(this._rafId=null,!this._overlay)return;const{x:t,y:e,width:i,height:s}=this._box;this._updateBox(t,e,i,s),this._updateBackground(t,e,i,s),this._rafId=requestAnimationFrame(this._redraw)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"navigation",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()],d.prototype,"view",null),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.navigation.ZoomBox")],d);var _=d;/* harmony default export */ __webpack_exports__["default"] = (_);


/***/ }),

/***/ "rhr1":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/RectangleBinPack.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Rect.js */ "qcDN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t,e){this._width=0,this._height=0,this._free=[],this._width=t,this._height=e,this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](0,0,t,e))}get width(){return this._width}get height(){return this._height}allocate(t,e){if(t>this._width||e>this._height)return new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"];let i=null,s=-1;for(let h=0;h<this._free.length;++h){const r=this._free[h];t<=r.width&&e<=r.height&&(null===i||r.y<=i.y&&r.x<=i.x)&&(i=r,s=h)}return null===i?new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"]:(this._free.splice(s,1),i.width<i.height?(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,e)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,i.width,i.height-e))):(i.width>t&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x+t,i.y,i.width-t,i.height)),i.height>e&&this._free.push(new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y+e,t,i.height-e))),new _Rect_js__WEBPACK_IMPORTED_MODULE_0__["default"](i.x,i.y,t,e))}release(h){for(let t=0;t<this._free.length;++t){const e=this._free[t];if(e.y===h.y&&e.height===h.height&&e.x+e.width===h.x)e.width+=h.width;else if(e.x===h.x&&e.width===h.width&&e.y+e.height===h.y)e.height+=h.height;else if(h.y===e.y&&h.height===e.height&&h.x+h.width===e.x)e.x=h.x,e.width+=h.width;else{if(h.x!==e.x||h.width!==e.width||h.y+h.height!==e.y)continue;e.y=h.y,e.height+=h.height}this._free.splice(t,1),this.release(h)}this._free.push(h)}});


/***/ }),

/***/ "rvq7":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/core/MemCache.js ***!
  \****************************************************/
/*! exports provided: MIN_PRIORITY, MemCache, MemCacheStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_PRIORITY", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCache", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemCacheStorage", function() { return i; });
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PooledArray.js */ "ikTR");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=-3;class s{constructor(t,e,s){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",s&&(this._storage.registerRemoveFunc(this._namespace,s),this._removeFunc=!0)}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)}put(t,e,s,i=0){this._storage.put(this._namespace+t,e,s,i)}get(t){const e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}pop(t){const e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e}updateSize(t,e,s){this._storage.updateSize(this._namespace+t,e,s)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class i{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]}register(t){this._users.push(t)}deregister(t){this._users.removeUnordered(t)}registerRemoveFunc(t,e){this._removeFuncs.push([t,e])}deregisterRemoveFunc(t){this._removeFuncs=this._removeFuncs.filter((e=>e[0]!==t))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()}put(t,e,s,i){const h=this._db.get(t);if(h&&(this._size-=h.size,this._db.delete(t),h.entry!==e&&this._notifyRemoved(t,h.entry)),s>this._maxSize)return void this._notifyRemoved(t,e);if(void 0===e)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);const r=1+Math.max(i,-3)- -3;this._db.set(t,{entry:e,size:s,lifetime:r,lives:r}),this._size+=s,this._checkSizeLimit()}updateSize(t,e,s){const i=this._db.get(t);i&&i.entry===e&&(this._size-=i.size,s>this._maxSize?this._notifyRemoved(t,e):(i.size=s,this._size+=s,this._checkSizeLimit()))}pop(t){const e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss}get(t){const e=this._db.get(t);if(void 0!==e)return this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry;++this._miss}getStats(){const t={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},e={},s=new Array;this._db.forEach(((t,i)=>{const h=t.lifetime;s[h]=(s[h]||0)+t.size,this._users.forAll((s=>{const h=s.namespace;if(i.startsWith(h)){const s=e[h]||0;e[h]=s+t.size}}))}));const i={};this._users.forAll((t=>{const s=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){const h=e[s]||0;e[s]=h,i[s]=Math.round(100*t.hitRate)+"%"}else i[s]="0%"}));const h=Object.keys(e);h.forEach((t=>e[t]=e[t]/this._size*100)),h.sort(((t,s)=>e[s]-e[t])),h.forEach((s=>t[s]=Math.round(e[s])+"% / "+i[s]));for(let e=s.length-1;e>=0;--e){const i=s[e];i&&(t["Priority "+(e+-3-1)]=Math.round(i/this.size*100)+"%")}return t}resetStats(){this._hit=this._miss=0,this._users.forAll((t=>t.resetHitRate()))}clear(t){this._db.forEach(((e,s)=>{s.startsWith(t)&&(this._size-=e.size,this._db.delete(s),this._notifyRemoved(s,e.entry))}))}clearAll(){this._db.forEach(((t,e)=>this._notifyRemoved(e,t.entry))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemoved(t,e){this._removeFuncs.forEach((s=>{t.startsWith(s[0])&&s[1](e)}))}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[t,e]of this._db)if(this._db.delete(t),e.lives<=1?(this._size-=e.size,this._notifyRemoved(t,e.entry)):(--e.lives,this._db.set(t,e)),this._size<=.9*this.maxSize)return}}


/***/ }),

/***/ "sAsQ":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/painter/RenderPass.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(r,e){var s;this.brushes=r,this.name=e.name,this.drawPhase=e.drawPhase||_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].MAP,this._targetFn=e.target,this.effects=e.effects||[],this.enableDefaultDraw=null!=(s=e.enableDefaultDraw)?s:()=>!0,this.has=e.has}render(e){const{context:s,profiler:t}=e,a=this._targetFn(),o=this.drawPhase&e.drawPhase;if(t.recordPassStart(this.name),o&&(!this.has||Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.has))){this.enableDefaultDraw()&&this._doRender(e,a),t.recordPassEnd();for(const r of this.effects){if(!r.enable())continue;const o=r.apply;t.recordPassStart(this.name+"."+o.name),t.recordBrushStart(o.name);const i=r.args&&r.args(),{x:n,y:h,width:f,height:d}=s.getViewport(),c=s.getBoundFramebufferObject();o.bind(e,i),this._doRender(e,a,o.defines),o.draw(e,i),o.unbind(e,i),s.bindFramebuffer(c),s.setViewport(n,h,f,d),t.recordBrushEnd(),t.recordPassEnd()}}}_doRender(r,t,a){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t))if(Object(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__["isArrayLike"])(t)){for(const e of t)if(e.visible)for(const s of this.brushes)r.profiler.recordBrushStart(s.name),s.prepareState(r,e,a),s.draw(r,e,a),r.profiler.recordBrushEnd()}else for(const e of this.brushes)r.profiler.recordBrushStart(e.name),e.prepareState(r,t,a),e.draw(r,t,a),r.profiler.recordBrushEnd()}});


/***/ }),

/***/ "sz4w":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/navigation/Momentum.js ***!
  \****************************************************************/
/*! exports provided: Momentum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Momentum", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,i,o){this._initialVelocity=t,this._stopVelocity=i,this._friction=o,this._duration=Math.abs(Math.log(Math.abs(this._initialVelocity)/this._stopVelocity)/Math.log(1-this._friction))}get duration(){return this._duration}isFinished(t){return t>this.duration}get friction(){return this._friction}value(t){return this.valueFromInitialVelocity(this._initialVelocity,t)}valueDelta(t,i){const o=this.value(t);return this.value(t+i)-o}valueFromInitialVelocity(t,i){i=Math.min(i,this.duration);const o=1-this.friction;return t*(Math.pow(o,i)-1)/Math.log(o)}}


/***/ }),

/***/ "tGAV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/mapViewDeps.js ***!
  \***********************************************************/
/*! exports provided: LabelManager, Stage, GraphicsView2D, MapViewNavigation, MagnifierView2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LabelManager.js */ "mvnU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelManager", function() { return _LabelManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine/Stage.js */ "XDzM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return _engine_Stage_js__WEBPACK_IMPORTED_MODULE_1__["Stage"]; });

/* harmony import */ var _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layers/graphics/GraphicsView2D.js */ "Vh9r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphicsView2D", function() { return _layers_graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation/MapViewNavigation.js */ "1dih");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapViewNavigation", function() { return _navigation_MapViewNavigation_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./magnifier/MagnifierView2D.js */ "0Ht6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagnifierView2D", function() { return _magnifier_MagnifierView2D_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/



/***/ }),

/***/ "v9+0":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/TextureManager.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../config.js */ "EyXx");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./definitions.js */ "jIHu");
/* harmony import */ var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec2f32.js */ "c46T");
/* harmony import */ var _util_BidiText_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./util/BidiText.js */ "t7mB");
/* harmony import */ var _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../symbols/cim/Rasterizer.js */ "e4KH");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _fontUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fontUtils.js */ "5ROZ");
/* harmony import */ var _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./GlyphMosaic.js */ "BaZm");
/* harmony import */ var _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./GlyphSource.js */ "krN3");
/* harmony import */ var _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SDFConverter.js */ "jE2w");
/* harmony import */ var _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SpriteMosaic.js */ "YbU1");
/* harmony import */ var _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./animatedFormats/apng.js */ "kIoy");
/* harmony import */ var _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./animatedFormats/gif.js */ "G+vY");
/* harmony import */ var _util_Result_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./util/Result.js */ "GqaZ");
/* harmony import */ var _util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./util/symbolUtils.js */ "DRKG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const z=Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_9__["c"])(),j=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.TextureManager"),R=e=>"esriSMS"===e.type&&e.path;function C(e){switch(e.type){case"esriSMS":case"esriPMS":case"CIMPointSymbol":case"CIMVectorMarker":case"CIMPictureMarker":case"CIMCharacterMarker":return!1;default:return!0}}function U(e,t){const i=Math.round(Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(t)*window.devicePixelRatio),s=i>=128?2:4;return Math.min(e,i*s)}const F=(e,t,i)=>j.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,t,i));class P{constructor(e,t,i){this.mosaicType=e,this.page=t,this.sdf=i}static fromMosaic(e,t){return new P(e,t.page,t.sdf)}}/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._invalidFontsMap=new Map,this._sdfConverter=new _SDFConverter_js__WEBPACK_IMPORTED_MODULE_16__["default"](126),this._bindingInfos=new Array,this._hashToBindingIndex=new Map,this._rasterizer=new _symbols_cim_Rasterizer_js__WEBPACK_IMPORTED_MODULE_11__["default"],this._ongoingRasterizations=new Map,this._spriteMosaic=new _SpriteMosaic_js__WEBPACK_IMPORTED_MODULE_17__["default"](t,2048,2048,500),this._glyphSource=new _GlyphSource_js__WEBPACK_IMPORTED_MODULE_15__["default"](`${_config_js__WEBPACK_IMPORTED_MODULE_0__["default"].fontsUrl}/{fontstack}/{range}.pbf`),this._glyphMosaic=new _GlyphMosaic_js__WEBPACK_IMPORTED_MODULE_14__["default"](1024,1024,this._glyphSource)}dispose(){this._spriteMosaic.dispose(),this._glyphMosaic.dispose(),this._rasterizer.dispose(),this._sdfConverter.dispose(),this._spriteMosaic=null,this._glyphMosaic=null,this._rasterizer=null,this._sdfConverter=null,this._hashToBindingIndex.clear(),this._hashToBindingIndex=null,this._bindingInfos=null,this._ongoingRasterizations.clear(),this._ongoingRasterizations=null}get sprites(){return this._spriteMosaic}get glyphs(){return this._glyphMosaic}async rasterizeItem(e,i,s,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return F("mapview-null-resource","Unable to rasterize null resource"),null;switch(e.type){case"CIMTextSymbol":case"esriTS":{const t=await this._rasterizeText(e,s,r);return t.forEach((e=>this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH,e))),{glyphMosaicItems:t}}case"esriSMS":case"esriPMS":case"esriSFS":case"esriPFS":case"esriSLS":default:{if((a=e).type&&-1!==a.type.toLowerCase().indexOf("3d"))return F("mapview-invalid-type",`MapView does not support symbol type: ${e.type}`,e),null;const t=await this._rasterizeSpriteSymbol(e,i,r);return Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(t)&&t&&this._setTextureBinding(_enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE,t),{spriteMosaicItem:t}}}var a}bindTextures(e,t,i,s=!1){if(0===i.textureBinding)return;const r=this._bindingInfos[i.textureBinding-1],a=r.page,n=s?9987:9729;switch(r.mosaicType){case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].SPRITE:{const i=this.sprites.getWidth(a),s=this.sprites.getHeight(a),r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(z,i,s);return this._spriteMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_SPRITE_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}case _enums_js__WEBPACK_IMPORTED_MODULE_12__["MosaicType"].GLYPH:{const i=this.glyphs.width,s=this.glyphs.height,r=Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(z,i,s);return this._glyphMosaic.bind(e,n,a,_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]),t.setUniform1i("u_texture",_definitions_js__WEBPACK_IMPORTED_MODULE_8__["TEXTURE_BINDING_GLYPH_ATLAS"]),void t.setUniform2fv("u_mosaicSize",r)}default:j.error("mapview-texture-manager",`Cannot handle unknown type ${r.mosaicType}`)}}_hashMosaic(e,t){return 1|e<<1|(t.sdf?1:0)<<2|t.page<<3}_setTextureBinding(e,t){const i=this._hashMosaic(e,t);if(!this._hashToBindingIndex.has(i)){const s=P.fromMosaic(e,t),r=this._bindingInfos.length+1;this._hashToBindingIndex.set(i,r),this._bindingInfos.push(s)}t.textureBinding=this._hashToBindingIndex.get(i)}async _rasterizeText(e,t,i){const s=Object(_fontUtils_js__WEBPACK_IMPORTED_MODULE_13__["getFullyQualifiedFontName"])(e.font),r=this._invalidFontsMap.has(s),a=t||function(e){const t=[];for(let i=0;i<e.length;i++)t.push(e.charCodeAt(i));return t}(Object(_util_BidiText_js__WEBPACK_IMPORTED_MODULE_10__["bidiText"])(e.text)[0]);try{return await this._glyphMosaic.getGlyphItems(r?"arial-unicode-ms-regular":s,a,i)}catch(e){return F("mapview-invalid-resource",`Couldn't find font ${s}. Falling back to Arial Unicode MS Regular`),this._invalidFontsMap.set(s,!0),this._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",a,i)}}async _rasterizeSpriteSymbol(e,t,i){if(function(e){switch(e.type){case"CIMSolidStroke":case"CIMSolidFill":return!0;case"esriSFS":return"esriSFSSolid"===e.style||"esriSFSNull"===e.style;case"esriSLS":return"esriSLSSolid"===e.style||"esriSLSNull"===e.style;default:return!1}}(e))return null;const r=Object(_util_symbolUtils_js__WEBPACK_IMPORTED_MODULE_21__["keyFromSymbol"])(e);if(this._spriteMosaic.has(r))return this._spriteMosaic.getSpriteItem(r);if(R(e)||(e=>e.url||e.imageData)(e))return this._handleAsyncResource(r,e,i);const a=this._rasterizer.rasterizeJSONResource(e,t);if(a){const{size:t,image:i,sdf:s,simplePattern:n}=a;return this._addItemToMosaic(r,t,{type:"static",data:i},C(e),s,n)}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("TextureManager","unrecognized or null rasterized image")}async _handleAsyncResource(e,t,i){if(this._ongoingRasterizations.has(e))return this._ongoingRasterizations.get(e);let s;s=R(t)?this._handleSVG(t,e,i):this._handleImage(t,e,i),this._ongoingRasterizations.set(e,s);try{await s,this._ongoingRasterizations.delete(e)}catch{this._ongoingRasterizations.delete(e)}return s}async _handleSVG(e,t,i){const s=[126,126],r=await this._sdfConverter.draw(e.path,i);return this._addItemToMosaic(t,s,{type:"static",data:new Uint32Array(r.buffer)},!1,!0,!0)}async _handleGIFOrPNG(e,t,i){const a=await async function(e,t){const i=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;let a;const o=";base64,";if(-1!==i.indexOf(o)){const e=i.indexOf(o)+o.length,t=i.substring(e),s=atob(t),r=new Uint8Array(s.length);for(let e=0;e<s.length;e++)r[e]=s.charCodeAt(e);a=r.buffer}else try{const{data:e}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(i,{responseType:"array-buffer",...t});a=e}catch(e){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${i}`)}return a}(e,i);if(Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(a)){const o=Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["isGIF"])(a),c=Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["isPNG"])(a);if(!o&&!c)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Image data is neither GIF nor PNG!");let h;try{o&&Object(_animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["isAnimatedGIF"])(a)?h=await _animatedFormats_gif_js__WEBPACK_IMPORTED_MODULE_19__["default"].create(a,i):c&&Object(_animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["isAnimatedPNG"])(a)&&(h=await _animatedFormats_apng_js__WEBPACK_IMPORTED_MODULE_18__["default"].create(a,i))}catch(e){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not fetch requested resource!")}if(h&&Object(_util_Result_js__WEBPACK_IMPORTED_MODULE_20__["ok"])(h))return this._addItemToMosaic(t,[h.width,h.height],{type:"animated",data:h},C(e),!1,!1);const d=new Blob([a],{type:o?"image/gif":"image/png"}),u=await async function(e){const t=window.URL.createObjectURL(e);try{const{data:e}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(t,{responseType:"image"});return window.URL.revokeObjectURL(t),e}catch(e){return window.URL.revokeObjectURL(t),new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${t}`)}}(d);if(u&&u instanceof HTMLImageElement){let i=u.width,s=u.height;"esriPMS"===e.type&&(i=Math.round(U(u.width,e.width)),s=Math.round(u.height*(i/u.width)));const{size:r,sdf:a,image:n}=this._rasterizer.rasterizeImageResource(i,s,u,e.colorSubstitutions);return this._addItemToMosaic(t,r,{type:"static",data:n},C(e),a,!1)}}return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource","Could not handle resource!")}async _handleImage(e,t,i){if((e=>e.url&&-1!==e.url.indexOf(".gif")||e.contentType&&"image/gif"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/gif"))(e)||(e=>e.url&&-1!==e.url.indexOf(".png")||e.contentType&&"image/png"===e.contentType||e.imageData&&-1!==e.imageData.indexOf("data:image/png"))(e))return this._handleGIFOrPNG(e,t,i);const o=e.imageData?`data:${e.contentType};base64,${e.imageData}`:e.url;try{const{data:s}=await Object(_request_js__WEBPACK_IMPORTED_MODULE_6__["default"])(o,{responseType:"image",...i});-1!==o.indexOf("data:image/svg+xml")&&(s.width=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.width),s.height=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_5__["pt2px"])(e.height));let r=s.width,c=s.height;"esriPMS"===e.type&&(r=Math.round(U(s.width,e.width)),c=Math.round(s.height*(r/s.width)));const{size:h,sdf:d,image:u}=this._rasterizer.rasterizeImageResource(r,c,s,e.colorSubstitutions);return this._addItemToMosaic(t,h,{type:"static",data:u},C(e),d,!1)}catch(e){if(!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(e))return new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-invalid-resource",`Could not fetch requested resource at ${o}`)}}_addItemToMosaic(e,t,i,s,r,a){return this._spriteMosaic.addSpriteItem(e,t,i,s,r,a)}});


/***/ }),

/***/ "vEyU":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BlendPrograms.js ***!
  \**********************************************************************************/
/*! exports provided: blend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blend", function() { return a; });
/* harmony import */ var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources/resolver.js */ "vpBa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=e=>`#define ${(e=>e.replace("-","_").toUpperCase())(e)}\n`,a={name:"blend",attributes:{a_pos:0,a_tex:1},shaders:a=>({vertexShader:r(a)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.vert"),fragmentShader:r(a)+Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("blend/blend.frag")})};


/***/ }),

/***/ "vYD5":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/ProgramCache.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../webgl/ProgramCache.js */ "kGdt");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _Programs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Programs.js */ "6ldq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class{constructor(t){this._cache=new Array(8);for(let r=0;r<8;r++)this._cache[r]={};this._programRepo=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_4__["default"](t)}dispose(){this._programRepo&&(this._programRepo.dispose(),this._programRepo=null)}getProgram(r,t,e){const s=this._cache[r];if(!s[t]){const a=this._programRepo.getProgram(this._getProgramTemplate(r),e);s[t]=a}return s[t]}getProgramAttributes(r){switch(r){case 0:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["background"].attributes;case 5:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["circle"].attributes;case 1:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["fill"].attributes;case 4:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["icon"].attributes;case 3:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["line"].attributes;case 2:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["outline"].attributes;case 6:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["text"].attributes;default:return null}}_getProgramTemplate(r){switch(r){case 0:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["background"];case 5:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["circle"];case 1:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["fill"];case 4:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["icon"];case 3:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["line"];case 2:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["outline"];case 6:return _Programs_js__WEBPACK_IMPORTED_MODULE_6__["text"];default:return null}}});


/***/ }),

/***/ "viFY":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/BlendEffect.js ***!
  \********************************************************************************/
/*! exports provided: BlendEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlendEffect", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../webgl/ProgramCache.js */ "kGdt");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../enums.js */ "yE7X");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../VertexStream.js */ "gjrC");
/* harmony import */ var _shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shaders/BlendPrograms.js */ "vEyU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.engine.webgl.effects.blendEffects.BlendEffect");class u{constructor(){this._size=[0,0]}dispose(e){this._backBufferTexture&&(this._backBufferTexture.dispose(),this._backBufferTexture=null),this._programCache&&(this._programCache.dispose(),this._programCache=null),this._quad&&(this._quad.dispose(),this._quad=null)}draw(e,r,i,s,n){const{context:u,drawPhase:c}=e;if(this._setupShader(u),s&&"normal"!==s&&c!==_enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLDrawPhase"].LABEL)return void this._drawBlended(e,r,i,s,n);const m=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"],"normal");if(!m)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect",'Error creating shader program for blend mode "normal"'));u.bindProgram(m),r.setSamplingMode(i),u.bindTexture(r,0),m.setUniform1i("u_layerTexture",0),m.setUniform1f("u_opacity",n),u.setBlendingEnabled(!0),u.setBlendFunction(1,771);const f=this._quad;f.draw(),f.unbind()}_drawBlended(r,i,s,o,n){const{context:u,state:c,pixelRatio:m,inFadeTransition:f}=r,{size:h}=c,l=u.getBoundFramebufferObject();let p,g;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(l)){const e=l.descriptor;p=e.width,g=e.height}else p=Math.round(m*h[0]),g=Math.round(m*h[1]);this._createOrResizeTexture(r,p,g);const _=this._backBufferTexture;l.copyToTexture(0,0,p,g,0,0,_),u.setStencilTestEnabled(!1),u.setStencilWriteMask(0),u.setBlendingEnabled(!0),u.setDepthTestEnabled(!1),u.setDepthWriteEnabled(!1);const b=this._programCache.getProgram(_shaders_BlendPrograms_js__WEBPACK_IMPORTED_MODULE_11__["blend"],o);if(!b)return void d.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-BlendEffect",`Error creating shader program for blend mode ${o}`));u.bindProgram(b),_.setSamplingMode(s),u.bindTexture(_,0),b.setUniform1i("u_backbufferTexture",0),i.setSamplingMode(s),u.bindTexture(i,1),b.setUniform1i("u_layerTexture",1),b.setUniform1f("u_opacity",n),b.setUniform1f("u_inFadeOpacity",f?1:0),u.setBlendFunction(1,0);const x=this._quad;x.draw(),x.unbind(),u.setBlendFunction(1,771)}_setupShader(e){this._programCache||(this._programCache=new _webgl_ProgramCache_js__WEBPACK_IMPORTED_MODULE_7__["default"](e),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_10__["default"](e,[-1,-1,1,-1,-1,1,1,1])))}_createOrResizeTexture(e,r,t){const{context:s}=e;null!==this._backBufferTexture&&r===this._size[0]&&t===this._size[1]||(this._backBufferTexture?this._backBufferTexture.resize(r,t):this._backBufferTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_5__["default"](s,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:r,height:t}),this._size[0]=r,this._size[1]=t)}}


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


/***/ }),

/***/ "yCUC":
/*!***************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LayerViewSorter.js ***!
  \***************************************************************************************/
/*! exports provided: LayerViewSorter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerViewSorter", function() { return s; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.engine.collisions.LayerViewSorter");function i(e){return"esri.views.2d.layers.FeatureLayerView2D"===e.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===e.declaredClass}function a(e){if(!e.layer||!e.layer.renderer)return!1;switch(e.layer.renderer.type){case"class-breaks":case"simple":case"unique-value":case"dictionary":case"dot-density":return!0;default:return t.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-labeling",`Renderer of type ${e.layer.renderer.type} does not currently support labeling`)),!1}}class s{constructor(e,r){this.registerLayer=e,this.unregisterLayer=r,this._layerViewState=new Map}findIndex(e){return e.view.allLayerViews.findIndex((r=>r.uid===e.uid))}update(e){const{added:r,removed:t}=e;for(const e of t)i(e)&&this._layerViewState.has(e)&&this._deleteState(e);for(const e of r)i(e)&&a(e)&&!this._layerViewState.has(e)&&this._createState(e);this._recomputeOrder()}destroy(){this._layerViewState.forEach((e=>e.handles.forEach((e=>e.remove()))))}_createState(e){const r={priority:-1,handles:null};return r.handles=[e.layer.watch("visible",this._recomputeOrder.bind(this)),e.layer.watch("labelsVisible",this._recomputeOrder.bind(this)),e.layer.watch("labelingInfo",this._recomputeOrder.bind(this)),e.layer.watch("featureReduction",this._recomputeOrder.bind(this))],this._layerViewState.set(e,r),r}_deleteState(e){if(!this._layerViewState.has(e))return;const r=this._layerViewState.get(e);r.handles.forEach((e=>e.remove())),-1!==r.priority&&this.unregisterLayer(e),this._layerViewState.delete(e)}_recomputeOrder(){this._layerViewState.forEach(((e,r)=>{const t=r.view.map.allLayers.findIndex((e=>e.uid===r.layer.uid)),i=r.layer,a=i.featureReduction,s=a&&"cluster"===a.type&&a.labelsVisible&&a.labelingInfo&&a.labelingInfo.length,l=i.labelsVisible&&i.labelingInfo&&i.labelingInfo.length||s,n=i.visible&&l?4294967295-t:-1;n!==e.priority&&(e.priority=n,this.unregisterLayer(r),-1!==n&&this.registerLayer(r,n))}))}}


/***/ }),

/***/ "ygGI":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/highlight/HighlightGradient.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../definitions.js */ "jIHu");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parameters.js */ "fGRN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");const h=[0,0,0,0];/* harmony default export */ __webpack_exports__["default"] = (class{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth},this.shadeTexChanged=!0,this.texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]),this.minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;var t,s;t=o,(s=i).fillColor[0]=t.color.r/255,s.fillColor[1]=t.color.g/255,s.fillColor[2]=t.color.b/255,s.fillColor[3]=t.color.a,t.haloColor?(s.outlineColor[0]=t.haloColor.r/255,s.outlineColor[1]=t.haloColor.g/255,s.outlineColor[2]=t.haloColor.b/255,s.outlineColor[3]=t.haloColor.a):(s.outlineColor[0]=s.fillColor[0],s.outlineColor[1]=s.fillColor[1],s.outlineColor[2]=s.fillColor[2],s.outlineColor[3]=s.fillColor[3]),s.fillColor[3]*=t.fillOpacity,s.outlineColor[3]*=t.haloOpacity,s.fillColor[0]*=s.fillColor[3],s.fillColor[1]*=s.fillColor[3],s.fillColor[2]*=s.fillColor[3],s.outlineColor[0]*=s.outlineColor[3],s.outlineColor[1]*=s.outlineColor[3],s.outlineColor[2]*=s.outlineColor[3],s.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlineWidth,s.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outerHaloWidth,s.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].innerHaloWidth,s.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_7__["HIGHLIGHT_SIZING"].outlinePosition;const a=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,d=i.outlinePosition-i.outlineWidth/2,u=i.outlinePosition+i.outlineWidth/2,g=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,C=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SIGMAS"][3],f=Math.abs(a)>C?Math.round(10*(Math.abs(a)-C))/10:0,c=Math.abs(g)>C?Math.round(10*(Math.abs(g)-C))/10:0;let m;f&&!c?n.error("The outer rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!f&&c?n.error("The inner rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):f&&c&&n.error("The highlight is "+Math.max(f,c)+"px away from the edge of the feature; consider reducing some width values.");const p=[void 0,void 0,void 0,void 0];function x(o,i,t){p[0]=(1-t)*o[0]+t*i[0],p[1]=(1-t)*o[1]+t*i[1],p[2]=(1-t)*o[2]+t*i[2],p[3]=(1-t)*o[3]+t*i[3]}const{texelData:w}=this;for(let o=0;o<_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"];++o)m=a+o/(_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"]-1)*(g-a),m<a?(p[4*o+0]=0,p[4*o+1]=0,p[4*o+2]=0,p[4*o+3]=0):m<d?x(h,i.outlineColor,(m-a)/(d-a)):m<u?[p[0],p[1],p[2],p[3]]=i.outlineColor:m<g?x(i.outlineColor,i.fillColor,(m-u)/(g-u)):[p[4*o+0],p[4*o+1],p[4*o+2],p[4*o+3]]=i.fillColor,w[4*o+0]=255*p[0],w[4*o+1]=255*p[1],w[4*o+2]=255*p[2],w[4*o+3]=255*p[3];this.minMaxDistance[0]=a,this.minMaxDistance[1]=g,this.shadeTexChanged=!0}applyHighlightOptions(o,e){this.shadeTex||(this.shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](o,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"],height:1,samplingMode:9729})),this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_7__["SHADE_TEXTURE_SIZE"],1,this.texelData),this.shadeTexChanged=!1),o.bindTexture(this.shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_HIGHLIGHT_1"]),e.setUniform2fv("u_minMaxDistance",this.minMaxDistance)}destroy(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)}});


/***/ })

}]);
//# sourceMappingURL=mapViewDeps-js-es2015.js.map