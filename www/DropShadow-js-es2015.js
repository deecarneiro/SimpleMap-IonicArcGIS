(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DropShadow-js"],{

/***/ "eylR":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/DropShadow.js ***!
  \***********************************************************************************************/
/*! exports provided: DropShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropShadow", function() { return a; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=[1,0],o=[0,1];class a{constructor(){this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._programDesc={blur:{vsPath:"post-processing/drop-shadow",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null),this._horizontalBlurFBO&&(this._horizontalBlurFBO.dispose(),this._horizontalBlurFBO=null),this._verticalBlurFBO&&(this._verticalBlurFBO.dispose(),this._verticalBlurFBO=null)}draw(e,r,a){const{context:l,state:n,painter:u,pixelRatio:h}=e,{materialManager:p}=u,d=this._programDesc,c=r.width,_=r.height,m=[Math.round(c/2),Math.round(_/2)],{blurRadius:f,offsetX:B,offsetY:g,color:b}=a,F=[h*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(B/2),h*Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(g/2)];this._createOrResizeResources(e,c,_,m);const x=this._horizontalBlurFBO,T=this._verticalBlurFBO;l.setStencilWriteMask(0),l.setStencilTestEnabled(!1),l.setDepthWriteEnabled(!1),l.setDepthTestEnabled(!1);const O=this._layerFBOTexture;r.copyToTexture(0,0,c,_,0,0,O),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_6__["default"](l,[-1,-1,1,-1,-1,1,1,1])),l.setViewport(0,0,m[0],m[1]);const w=this._quad;w.bind(),l.setBlendingEnabled(!1);const v=p.getProgram(e,d.blur,[{name:"radius",value:Math.ceil(f)}]);l.bindProgram(v),l.bindFramebuffer(x),l.bindTexture(r.colorTexture,4),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",F),v.setUniform1i("u_colorTexture",4),v.setUniform2fv("u_texSize",m),v.setUniform2fv("u_direction",s),v.setUniform1f("u_sigma",f),w.draw(),l.bindFramebuffer(T),l.bindTexture(x.colorTexture,5),v.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),v.setUniform2fv("u_offset",[0,0]),v.setUniform1i("u_colorTexture",5),v.setUniform2fv("u_direction",o),w.draw(),l.bindFramebuffer(r),l.setViewport(0,0,c,_);const z=p.getProgram(e,d.composite);l.bindProgram(z),l.bindTexture(T.colorTexture,2),z.setUniform1i("u_blurTexture",2),l.bindTexture(O,3),z.setUniform1i("u_layerFBOTexture",3),z.setUniform4fv("u_shadowColor",[b[3]*(b[0]/255),b[3]*(b[1]/255),b[3]*(b[2]/255),b[3]]),w.draw(),l.setBlendingEnabled(!0),l.setStencilTestEnabled(!0),l.setBlendFunction(1,771),w.unbind()}_createOrResizeResources(t,i,s,o){const{context:a}=t;this._horizontalBlurFBO&&this._size[0]===i&&this._size[1]===s||(this._size[0]=i,this._size[1]=s,this._horizontalBlurFBO?this._horizontalBlurFBO.resize(o[0],o[1]):this._horizontalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._verticalBlurFBO?this._verticalBlurFBO.resize(o[0],o[1]):this._verticalBlurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](a,{colorTarget:0,depthStencilTarget:0,width:o[0],height:o[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:o[0],height:o[1]}),this._layerFBOTexture?this._layerFBOTexture.resize(i,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](a,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:i,height:s}))}}


/***/ })

}]);
//# sourceMappingURL=DropShadow-js-es2015.js.map