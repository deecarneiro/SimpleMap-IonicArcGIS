(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Blur-js"],{

/***/ "B2cn":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Blur.js ***!
  \*****************************************************************************************/
/*! exports provided: Blur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blur", function() { return i; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VertexStream.js */ "gjrC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const r=[1,0],s=[0,1];class i{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:{a_position:0}},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:{a_position:0}},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:{a_position:0}}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(t,r,s){const{context:i}=t,{type:a,radius:n}=s;if(0===n)return;this._createOrResizeResources(t),this._quad||(this._quad=new _VertexStream_js__WEBPACK_IMPORTED_MODULE_5__["default"](i,[-1,-1,1,-1,-1,1,1,1]));const o=this._quad;o.bind(),"blur"===a?this._gaussianBlur(t,r,n):this._radialBlur(t,r),o.unbind()}_gaussianBlur(t,e,i){const{context:a,state:n,painter:o,pixelRatio:l}=t,{size:u}=n,{materialManager:d}=o,b=this._programDesc,c=this._quad,h=[Math.round(l*u[0]),Math.round(l*u[1])],p=this._blurFBO,_=d.getProgram(t,b.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);a.bindProgram(_),a.setBlendingEnabled(!1),a.bindFramebuffer(p),a.bindTexture(e.colorTexture,4),_.setUniform1i("u_colorTexture",4),_.setUniform2fv("u_texSize",h),_.setUniform2fv("u_direction",r),_.setUniform1f("u_sigma",i),c.draw(),a.bindFramebuffer(e),a.setStencilWriteMask(0),a.setStencilTestEnabled(!1),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.bindTexture(p.colorTexture,5),_.setUniform1i("u_colorTexture",5),_.setUniform2fv("u_direction",s),c.draw(),a.setBlendingEnabled(!0),a.setBlendFunction(1,771),a.setStencilTestEnabled(!0)}_radialBlur(t,e){const{context:r,painter:s}=t,{materialManager:i}=s,a=this._programDesc,n=this._quad,o=this._blurFBO;r.bindFramebuffer(o);const l=i.getProgram(t,a.radialBlur);r.bindProgram(l),r.setBlendingEnabled(!1),r.bindTexture(e.colorTexture,4),l.setUniform1i("u_colorTexture",4),n.draw(),r.bindFramebuffer(e),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setBlendingEnabled(!0);const u=i.getProgram(t,a.blit);r.bindProgram(u),r.bindTexture(o.colorTexture,5),u.setUniform1i("u_texture",5),r.setBlendFunction(1,771),n.draw()}_createOrResizeResources(e){const{context:r,state:s,pixelRatio:i}=e,{size:a}=s,n=Math.round(i*a[0]),o=Math.round(i*a[1]);this._blurFBO&&this._size[0]===n&&this._size[1]===o||(this._size[0]=n,this._size[1]=o,this._blurFBO?this._blurFBO.resize(n,o):this._blurFBO=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,{colorTarget:0,depthStencilTarget:0,width:n,height:o},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:n,height:o}))}}


/***/ })

}]);
//# sourceMappingURL=Blur-js-es2015.js.map