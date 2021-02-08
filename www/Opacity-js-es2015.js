(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Opacity-js"],{

/***/ "T/wP":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/effects/post-processing/Opacity.js ***!
  \********************************************************************************************/
/*! exports provided: Opacity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Opacity", function() { return t; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../webgl/RenderingContext.js */ "bfJE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,r){const{width:s,height:i}=t;this._createOrResizeResources(e,s,i);const{context:a,painter:l}=e,{amount:o}=r,n=a.gl,h=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,s,i,0,0,h),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(n.COLOR_BUFFER_BIT),l.blitTexture(a,h,9728,o)}_createOrResizeResources(t,r,s){const{context:i}=t;this._layerFBOTexture&&this._size[0]===r&&this._size[1]===s||(this._size[0]=r,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(r,s):this._layerFBOTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:r,height:s}))}}


/***/ })

}]);
//# sourceMappingURL=Opacity-js-es2015.js.map