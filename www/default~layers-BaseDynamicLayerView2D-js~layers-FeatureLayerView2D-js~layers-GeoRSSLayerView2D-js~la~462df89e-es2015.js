(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~462df89e"],{

/***/ "0RS7":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
  \*******************************************************************/
/*! exports provided: i16, i1616to32, i32, i8, i8816to32, i8888to32, numTo32, toFloat32, toUint32, u16, u32, u32to4Xu8, u8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i16", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i1616to32", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i32", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8816to32", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i8888to32", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTo32", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFloat32", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUint32", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u16", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u32to4Xu8", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u8", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=new Float32Array(1),r=new Uint32Array(n.buffer);function t(n,r,t){return Math.round(Math.max(Math.min(n,t),r))}function u(n){return t(n,-128,127)}function e(n){return t(n,-32768,32767)}function o(n){return t(n,-2147483648,2147483647)}function f(n){return t(n,0,255)}function i(n){return t(n,0,65535)}function c(n){return t(n,0,4294967295)}function a(t){return n[0]=t,r[0]}function h(t){return r[0]=t,n[0]}function M(n){return[255&n,(65280&n)>>>8,(16711680&n)>>>16,(4278190080&n)>>>24]}function m(n,r){return 65535&n|r<<16}function w(n,r,t,u){return 255&n|(255&r)<<8|(255&t)<<16|u<<24}function x(n,r,t){return 255&n|(255&r)<<8|t<<16}function y(n){return 0|n}


/***/ }),

/***/ "4SEz":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js ***!
  \*****************************************************************************/
/*! exports provided: TextProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextProperties", function() { return h; });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class h{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(o,h,s,t,i,l,r,e,c){this.color=o,this.haloColor=h,this.haloSize=s,this.size=t,this.angle=i,this.offsetX=l,this.offsetY=r,this.hAnchor=e,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}h.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](h);


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

/***/ "qaIE":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js ***!
  \******************************************************************/
/*! exports provided: copyAndPremultiply, premultiplyAlpha, premultiplyAlphaRGBA, premultiplyAlphaRGBAArray, premultiplyAlphaUint32, white */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyAndPremultiply", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBA", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBAArray", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "premultiplyAlphaUint32", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "white", function() { return n; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "0RS7");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=[255,255,255,1],t=[0,0,0,0];function u(r,n){return Array.isArray(n)?(r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3]):(r[0]=n.r,r[1]=n.g,r[2]=n.b,r[3]=n.a),r}function o(r,n=0,t=!1){const u=r[n+3];return r[n+0]*=u,r[n+1]*=u,r[n+2]*=u,t||(r[n+3]*=255),r}function c(r){return o(u([],r))}function e(n){return o(u(t,n)),Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t[0],t[1],t[2],t[3])}function i(n){if(!n)return 0;const{r:t,g:u,b:o,a:c}=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*c,u*c,o*c,255*c)}function f(n){if(!n)return 0;const[t,u,o,c]=n;return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t*(c/255),u*(c/255),o*(c/255),c)}


/***/ }),

/***/ "yE7X":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js ***!
  \******************************************************************/
/*! exports provided: MosaicType, VVType, WGLDrawPhase, WGLGeometryTransactionStatus, WGLGeometryType, WGLVVFlag, WGLVVTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MosaicType", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VVType", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLDrawPhase", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryTransactionStatus", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLGeometryType", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVFlag", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGLVVTarget", function() { return _; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var E,T,I,L,A,_,O;!function(E){E[E.FILL=0]="FILL",E[E.LINE=1]="LINE",E[E.MARKER=2]="MARKER",E[E.TEXT=3]="TEXT",E[E.LABEL=4]="LABEL"}(E||(E={})),function(E){E[E.SUCCEEDED=0]="SUCCEEDED",E[E.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(T||(T={})),function(E){E[E.NONE=0]="NONE",E[E.MAP=1]="MAP",E[E.LABEL=2]="LABEL",E[E.LABEL_ALPHA=4]="LABEL_ALPHA",E[E.HITTEST=8]="HITTEST",E[E.HIGHLIGHT=16]="HIGHLIGHT",E[E.CLIP=32]="CLIP",E[E.DEBUG=64]="DEBUG",E[E.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(I||(I={})),function(E){E[E.SIZE=0]="SIZE",E[E.COLOR=1]="COLOR",E[E.OPACITY=2]="OPACITY",E[E.ROTATION=3]="ROTATION"}(L||(L={})),function(E){E[E.NONE=0]="NONE",E[E.OPACITY=1]="OPACITY",E[E.COLOR=2]="COLOR",E[E.ROTATION=4]="ROTATION",E[E.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",E[E.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",E[E.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",E[E.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(A||(A={})),function(E){E[E.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",E[E.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",E[E.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",E[E.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(_||(_={})),function(E){E[E.SPRITE=0]="SPRITE",E[E.GLYPH=1]="GLYPH"}(O||(O={}));


/***/ }),

/***/ "yN2G":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js ***!
  \******************************************************************/
/*! exports provided: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_INFO, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, allocateTypedArrayBuffer, allocateTypedArrayBufferwithData, copyMeshData, createGeometryData, createProgramDescriptor, createTextureFromTexelData, geometryToMappedGeometry, getBytes, getCapType, getJoinType, getNamedBuffers, getPixelArrayCtor, getPixelBytes, getStrides, getTextProperties, getTransformParams, getVVType, isDefined, isNumber, strideToPackingFactor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_DD", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_DD", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_STRIDE_SPEC", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_ICON_VERTEX_DEF", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_STRIDE_SPEC", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LABEL_VERTEX_DEF", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_STRIDE_SPEC", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_LINE_VERTEX_DEF", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_STRIDE_SPEC", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_TEXT_VERTEX_DEF", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_GEOMETRY", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_INFO", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE_VV", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBuffer", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBufferwithData", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyMeshData", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGeometryData", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgramDescriptor", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureFromTexelData", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geometryToMappedGeometry", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBytes", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCapType", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJoinType", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedBuffers", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelArrayCtor", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelBytes", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStrides", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextProperties", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTransformParams", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVVType", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strideToPackingFactor", function() { return C; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/screenUtils.js */ "qRWG");
/* harmony import */ var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/builtins.js */ "n4uK");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums.js */ "yE7X");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./color.js */ "qaIE");
/* harmony import */ var _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SymbolProperties.js */ "4SEz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Utils"),f="geometry",l="per_instance",m="per_instance_vv",d=[{name:"geometry",strideInBytes:32,divisor:0}],p=[{name:"geometry",strideInBytes:32,divisor:0}],y=[{name:"geometry",strideInBytes:12,divisor:0}],g=[{name:"geometry",strideInBytes:36,divisor:0}],h=[{name:"geometry",strideInBytes:32,divisor:0}],w=[{name:"geometry",strideInBytes:36,divisor:0}];function v(e){const r={};for(const t of e)r[t.name]=t.strideInBytes;return r}const b=v(d),A=v(p),I=v(y),L=v(g),j=v(h),x=v(w);function E(e,r){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:return b;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:return r?I:A;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:return L;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:return j;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:return x}}const U=["geometry"],F=["geometry"],M=["geometry"],T=["geometry"],z=["geometry"];function B(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:return U;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:return F;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:return M;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:return T;case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:return z}}function C(e){switch(e%4){case 0:case 2:return 4;case 1:case 3:return 1}}function R(e,r){switch(r%4){case 0:case 2:return new Uint32Array(Math.floor(e*r/4));case 1:case 3:return new Uint8Array(e*r)}}function O(e,r){switch(r%4){case 0:case 2:return new Uint32Array(e);case 1:case 3:return new Uint8Array(e)}}function $(e){return _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__["TextProperties"].pool.acquire(e.color?Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.color):[255,255,255,255],e.haloColor?Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.haloColor):[255,255,255,255],Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.haloSize),Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.font.size),e.angle*Math.PI/180,e.xoffset/e.font.size,e.yoffset/e.font.size,"left"===e.horizontalAlignment?0:"right"===e.horizontalAlignment?1:.5,"top"===e.verticalAlignment?0:"bottom"===e.verticalAlignment?1:.5)}function N(e){return null!=e}function P(e){return"number"==typeof e}function S(e,t){switch(e){case"butt":return 0;case"round":return t?2:1;case"square":return 2;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type",`Cap type ${e} is not a valid option. Defaulting to round`)),1}}function Z(e){switch(e){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type",`Join type ${e} is not a valid option. Defaulting to round`)),1}}function _(e){switch(e){case"opacity":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].OPACITY;case"color":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].COLOR;case"rotation":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].ROTATION;case"size":return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].SIZE;default:return u.error(`Cannot interpret unknown vv: ${e}`),null}}function k(e){const{transform:r,hasZ:t,hasM:n}=e;return{transform:r,hasZ:t,hasM:n}}function q(e,r,t,n,o,s,i){for(const r in s){const n=s[r].stride,i=C(n),a=s[r].data,c=t[r].data,u=n*o.vertexCount/i,f=n*e/i,l=n*o.vertexFrom/i;for(let e=0;e<u;++e)c[e+f]=a[e+l]}const a=o.indexCount;for(let t=0;t<a;++t)n[t+r]=i[t+o.indexFrom]-o.vertexFrom+e}const D={geometry:35044};function K(e,r){const t=[];for(let n=0;n<5;++n){const o=B(n),s={};for(const e of o)s[e]={data:r(n,e)};t.push({data:e(n),buffers:s})}return t}function X(e,r){let n,s;return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.height)?(n=!0,s=9987):(n=!1,s=9729),new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,hasMipmap:n,samplingMode:s,wrapMode:33071,flipped:!0},r)}function J(e){return{vertexFrom:void 0,vertexTo:void 0,geometry:e}}function Y(e){switch(e){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function G(e){switch(e){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils",`Unable to handle type ${e}`))}}function H(e){switch(e){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils",`Unable to handle type ${e}`))}}const Q=new Map,V=(e,r)=>{if(!Q.has(e)){const t=function(e){const r={};for(const t in e){const n=e[t];let o=0;r[t]=n.map((e=>{const r={...e,normalized:e.normalized||!1,divisor:e.divisor||0,offset:o,stride:0};return o+=e.count*Y(e.type),r})),r[t].forEach((e=>e.stride=o))}return r}(r),n={strides:(e=>{const r={};for(const t in e){const n=e[t];r[t]=n.length?n[0].stride:0}return r})(t),bufferLayouts:t,attributes:(e=>{const r={};for(const t in e)for(const n of e[t])r[n.name]=n.location;return r})(r)};Q.set(e,n)}return Q.get(e)};


/***/ })

}]);
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~462df89e-es2015.js.map