(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-graphics-objectResourceUtils-js"],{

/***/ "+JUG":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/sphere.js ***!
  \****************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, s, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return q; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/support/mathUtils.js */ "aAs6");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector.js */ "IEcw");
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ray.js */ "QFRQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const O=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.support.geometryUtils.sphere");function _(t){return t?{radius:t.radius,center:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(t.center)}:{radius:1,center:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])()}}function q(t,r){const e=N.get();return e.radius=t,e.center=r||W,e}function P(t,r=_()){return R(t.radius,t.center,r)}function R(t,r,e=_()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(e.center,r),e.radius=t,e}function U(t,r,e){return t!==e&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["g"])(e.center,t.center),e.radius=t.radius+r,e}function z(t,r,e){return O.error("sphere.setExtent is not yet supported"),t===e?e:P(t,e)}function E(r,e,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(e))return!1;const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),e.origin,r.center),i=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(e.direction,e.direction),f=2*Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(e.direction,n),d=f*f-4*i*(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["d"])(n,n)-r.radius*r.radius);if(d<0)return!1;const m=Math.sqrt(d);let g=(-f-m)/(2*i);const p=(-f+m)/(2*i);return(g<0||p<g&&p>0)&&(g=p),!(g<0)&&(s&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s,e.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),e.direction,g)),!0)}function L(t,r,e,s){return E(t,Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["g"])(r,e,Q),s)}function T(t,r){return E(t,r,null)}function C(t,r,e){if(E(t,r,e))return e;const s=V(t,r,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(e,r.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),r.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["k"])(r.origin,s)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(r.direction))),e}function V(t,r,e){const s=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),n=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sm4d"].get();Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(s,r.origin,r.direction),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["c"])(e,s,r.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(e,e,1/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(e)*t.radius);const i=G(t,r.origin),o=Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["a"])(r.origin,e);return Object(_mat4_js__WEBPACK_IMPORTED_MODULE_7__["i"])(n),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_7__["r"])(n,n,o+i,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["i"])(e,e,n),e}function B(t,r,e){return E(t,r,e)?e:(Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["h"])(r,t.center,e),D(t,e,e))}function D(t,r,e){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),r,t.center),n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),s,t.radius/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(e,n,t.center)}function F(t,r){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),r,t.center),s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["o"])(e),n=t.radius*t.radius;return Math.sqrt(Math.abs(s-n))}function G(t,r){const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),r,t.center),n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(s),i=t.radius+Math.abs(t.radius-n);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["acosClamped"])(t.radius/i)}const H=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();function I(t,r,e,s){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(H,r,t.center);switch(e){case 0:{const t=Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["cartesianToSpherical"])(n,H)[2];return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(s,-Math.sin(t),Math.cos(t),0)}case 1:{const t=Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_6__["cartesianToSpherical"])(n,H),r=t[1],e=t[2],i=Math.sin(r);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["s"])(s,-i*Math.cos(e),-i*Math.sin(e),Math.cos(r))}case 2:return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["n"])(s,n);default:return}}function J(t,r){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["f"])(X,r,t.center);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["l"])(e)-t.radius}function K(t,r,e,s){const n=J(t,r),i=I(t,r,2,X),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["a"])(X,i,e-n);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_5__["b"])(s,r,o),s}const N=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__["ObjectStack"]((()=>({center:null,radius:0}))),Q=Object(_ray_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),W=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])(),X=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__["c"])();Object.freeze(W);var Y=Object.freeze({__proto__:null,create:_,wrap:q,copy:P,fromValues:R,elevate:U,setExtent:z,intersectRay:E,intersectScreen:L,intersectsRay:T,intersectRayClosestSilhouette:C,closestPointOnSilhouette:V,closestPoint:B,projectPoint:D,distanceToSilhouette:F,angleToSilhouette:G,axisAt:I,altitudeAt:J,setAltitudeAt:K});


/***/ }),

/***/ "+h6m":
/*!************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js ***!
  \************************************************************************************************/
/*! exports provided: Default3D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Default3D", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o={position:0,normal:1,uv0:2,color:3,size:4,tangent:4,uvMapSpace:4,auxpos1:5,symbolColor:5,auxpos2:6,featureAttribute:6,instanceFeatureAttribute:6,instanceColor:7,bound1:5,bound2:6,bound3:7,model:8,modelNormal:12,modelOriginHi:11,modelOriginLo:15};


/***/ }),

/***/ "0BfS":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: ReadShadowMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadShadowMap", function() { return i; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(i){i.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RgbaFloatEncoding"]),i.fragment.uniforms.add("depthTex","sampler2D"),i.fragment.uniforms.add("shadowMapNum","int"),i.fragment.uniforms.add("shadowMapDistance","vec4"),i.fragment.uniforms.add("shadowMapMatrix","mat4",4),i.fragment.uniforms.add("depthHalfPixelSz","float"),i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      float halfPixelSize = depthHalfPixelSz;
      vec4 distance = shadowMapDistance;
      float depth = _linearDepth;

      //choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      if (i >= shadowMapNum) { return 0.0; }

      mat4 mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;

      // vertex completely outside? -> no shadow
      vec3 lvpos = 0.5 * lv.xyz + vec3(0.5);
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;

      float texSize = 0.5 / halfPixelSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);

      float s00 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s10 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, -halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s11 = rgba2float(texture2D(depthTex, uv + vec2(halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;
      float s01 = rgba2float(texture2D(depthTex, uv + vec2(-halfPixelSize, halfPixelSize))) < lvpos.z ? 1.0 : 0.0;

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }
  `)}!function(e){e.bindUniforms=function(e,a,i){a.shadowMappingEnabled&&(a.shadowMap.bind(e,i),a.shadowMap.bindView(e,a.origin))},e.bindViewCustomOrigin=function(e,a,i){a.shadowMappingEnabled&&a.shadowMap.bindView(e,i)},e.bindView=function(e,a){a.shadowMappingEnabled&&a.shadowMap.bindView(e,a.origin)}}(i||(i={}));


/***/ }),

/***/ "0Kx6":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/geometryUtils.js ***!
  \*********************************************************************/
/*! exports provided: axisAngle, boundedPlane, clipRay, frustum, lineSegment, plane, ray, sphere, triangle, vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisAngle", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boundedPlane", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipRay", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frustum", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineSegment", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plane", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ray", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sphere", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return b; });
/* harmony import */ var _chunks_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../chunks/vector.js */ "IEcw");
/* harmony import */ var _chunks_axisAngle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../chunks/axisAngle.js */ "f/MA");
/* harmony import */ var _chunks_lineSegment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/lineSegment.js */ "jZU2");
/* harmony import */ var _chunks_plane_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../chunks/plane.js */ "cKtl");
/* harmony import */ var _chunks_ray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../chunks/ray.js */ "QFRQ");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../chunks/boundedPlane.js */ "DZ/s");
/* harmony import */ var _chunks_clipRay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../chunks/clipRay.js */ "Gbm8");
/* harmony import */ var _chunks_frustum_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../chunks/frustum.js */ "NILb");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../chunks/sphere.js */ "+JUG");
/* harmony import */ var _chunks_triangle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../chunks/triangle.js */ "oSUa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=_chunks_plane_js__WEBPACK_IMPORTED_MODULE_3__["g"],e=_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_5__["b"],f=_chunks_triangle_js__WEBPACK_IMPORTED_MODULE_9__["t"],h=_chunks_lineSegment_js__WEBPACK_IMPORTED_MODULE_2__["l"],j=_chunks_ray_js__WEBPACK_IMPORTED_MODULE_4__["r"],k=_chunks_clipRay_js__WEBPACK_IMPORTED_MODULE_6__["c"],l=_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_8__["s"],g=_chunks_frustum_js__WEBPACK_IMPORTED_MODULE_7__["f"],b=_chunks_vector_js__WEBPACK_IMPORTED_MODULE_0__["v"],d=_chunks_axisAngle_js__WEBPACK_IMPORTED_MODULE_1__["a"];


/***/ }),

/***/ "0nJL":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js ***!
  \******************************************************************************************/
/*! exports provided: Slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slice", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(e,s){if(s.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),s.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
      struct SliceFactors {
        float front;
        float side0;
        float side1;
        float side2;
        float side3;
      };

      SliceFactors calculateSliceFactors(vec3 pos) {
        vec3 rel = pos - slicePlaneOrigin;

        vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
        float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);

        float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
        float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);

        float basis1Dot = dot(slicePlaneBasis1, rel);
        float basis2Dot = dot(slicePlaneBasis2, rel);

        return SliceFactors(
          dot(slicePlaneNormal, pos) + slicePlaneW,
          -basis1Dot - basis1Len2,
          basis1Dot - basis1Len2,
          -basis2Dot - basis2Len2,
          basis2Dot - basis2Len2
        );
      }

      bool sliceByFactors(SliceFactors factors) {
        return factors.front < 0.0
          && factors.side0 < 0.0
          && factors.side1 < 0.0
          && factors.side2 < 0.0
          && factors.side3 < 0.0;
      }

      bool sliceEnabled() {
        // a slicePlaneBasis1 vector of zero length is used to disable slicing in the shader during draped rendering.
        return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
      }

      bool sliceByPlane(vec3 pos) {
        return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
      }

      #define rejectBySlice(_pos_) sliceByPlane(_pos_)
      #define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }
    `,a=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
      vec4 applySliceHighlight(vec4 color, vec3 pos) {
        SliceFactors factors = calculateSliceFactors(pos);

        if (sliceByFactors(factors)) {
          return color;
        }

        const float HIGHLIGHT_WIDTH = 1.0;
        const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);

        factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
        factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
        factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
        factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
        factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);

        float highlightFactor = (1.0 - step(0.5, factors.front))
          * (1.0 - step(0.5, factors.side0))
          * (1.0 - step(0.5, factors.side1))
          * (1.0 - step(0.5, factors.side2))
          * (1.0 - step(0.5, factors.side3));

        return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
      }
    `,l=s.sliceHighlightDisabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`#define highlightSlice(_color_, _pos_) (_color_)`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
        ${a}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(l)}else{const i=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
      #define rejectBySlice(_pos_) false
      #define discardBySlice(_pos_) {}
      #define highlightSlice(_color_, _pos_) (_color_)
    `;s.sliceEnabledForVertexPrograms&&e.vertex.code.add(i),e.fragment.code.add(i)}}!function(i){i.bindUniformsWithOrigin=function(e,s,a){i.bindUniforms(e,s,a.slicePlane,a.origin)},i.bindUniforms=function(i,o,l,r){o.slicePlaneEnabled&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(l)?(r?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(c,l.origin,r),i.setUniform3fv("slicePlaneOrigin",c)):i.setUniform3fv("slicePlaneOrigin",l.origin),i.setUniform3fv("slicePlaneBasis1",l.basis1),i.setUniform3fv("slicePlaneBasis2",l.basis2)):(i.setUniform3fv("slicePlaneBasis1",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"]),i.setUniform3fv("slicePlaneBasis2",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"]),i.setUniform3fv("slicePlaneOrigin",_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["Z"])))}}(l||(l={}));const c=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "1/dN":
/*!***************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AutoDisposable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoDisposable.js */ "cKKt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class extends _AutoDisposable_js__WEBPACK_IMPORTED_MODULE_0__["AutoDisposable"]{constructor(e){super(),this.material=e.material,this.techniqueRep=e.techniqueRep,this.output=e.output}getTechnique(){return this.technique}getPipelineState(e,t){return this.getTechnique().pipeline}ensureResources(e){return 2}ensureParameters(e){}});


/***/ }),

/***/ "1PqF":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryData.js ***!
  \*****************************************************************************/
/*! exports provided: GeometryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryData", function() { return n; });
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{constructor(t,i=n.DefaultIndices,e="triangle"){this.initialize(t,i,e)}get id(){return this._id}get vertexAttributes(){return this._vertexAttributes}get indices(){return this._indices}get indexCount(){const t=Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getFirstObjectValue"])(this._indices);return null==t?0:t.length}get primitiveType(){return this._primitiveType}getVertexAttr(){return this.vertexAttributes}initialize(s,r=n.DefaultIndices,c="triangle"){const d={};for(const t in s){const{data:i,size:e}=s[t];d[t]={data:i,size:e,offsetIdx:0,strideIdx:e}}if(r===n.DefaultIndices){const i=function(t){const i=Object(_Util_js__WEBPACK_IMPORTED_MODULE_1__["getFirstObjectValue"])(t);if(null==i)return 0;return i.data.length/i.size}(d),s=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__["generateDefaultIndexArray"])(i);r={};for(const t in d)r[t]=s}this._id=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_0__["getNewId"])(),this._vertexAttributes=d,this._indices=r,this._primitiveType=c}toRenderData(){return{id:this._id.toString(),indices:this._indices,vertexAttr:this._vertexAttributes}}getIndices(t){return this._indices[t]}getAttribute(t){return this._vertexAttributes[t]}estimateGpuMemoryUsage(){let t=0;if(this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION]){const i=3;t+=this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION].length*i*4}if(this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL]){const i=3;t+=this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL].length*i*4}if(this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0]){const i=2;t+=this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0].length*i*4}if(this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR]){const i=1;t+=this._indices[_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR].length*i*4}return t}}n.DefaultIndices={};


/***/ }),

/***/ "1TnO":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: InstancedDoublePrecision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstancedDoublePrecision", function() { return n; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/doublePrecisionUtils.js */ "mmTy");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(e,r){r.instanced&&r.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),r.instancedDoublePrecision&&(e.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__["DoublePrecision"],r),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const n=[_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 calculateVPos() {
      ${r.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 subtractOrigin(vec3 _pos) {
      ${r.instancedDoublePrecision?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 dpNormal(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec3 dpNormalView(vec4 _normal) {
      ${r.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,r.vertexTangets?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]``];e.vertex.code.add(n[0]),e.vertex.code.add(n[1]),e.vertex.code.add(n[2]),2===r.output&&e.vertex.code.add(n[3]),e.vertex.code.add(n[4])}!function(e){e.Uniforms=class{},e.bindCustomOrigin=function(e,i){Object(_lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_2__["encodeDoubleArraySplit"])(i,t,a,3),e.setUniform3fv("viewOriginHi",t),e.setUniform3fv("viewOriginLo",a)}}(n||(n={}));const t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),a=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();


/***/ }),

/***/ "1W42":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: HeaderComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComment", function() { return u; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(u,e){_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
  /*
  *  ${e.name}
  *  ${0===e.output?"RenderOutput: Color":1===e.output?"RenderOutput: Depth":3===e.output?"RenderOutput: Shadow":2===e.output?"RenderOutput: Normal":4===e.output?"RenderOutput: Highlight":""}
  */
  `}


/***/ }),

/***/ "1ff1":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/glUtil3D.js ***!
  \*************************************************************************/
/*! exports provided: createColorTexture, createEmptyDepthTexture, createEmptyTexture, createQuadVAO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createColorTexture", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyDepthTexture", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEmptyTexture", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuadVAO", function() { return i; });
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultVertexBufferLayouts.js */ "fDPZ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(r,i=_DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2"],l=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_0__["Default3D"],m=-1,f=1){let u=null;switch(i){case _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2Tex"]:u=new Float32Array([m,m,0,0,f,m,1,0,m,f,0,1,f,f,1,1]);break;case _DefaultVertexBufferLayouts_js__WEBPACK_IMPORTED_MODULE_4__["Pos2"]:default:u=new Float32Array([m,m,f,m,m,f,f,f])}return new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](r,l,{geometry:i},{geometry:_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_1__["default"].createVertex(r,35044,u)})}function l(e,t=4){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function m(e,t,a=4){const o=new Uint8Array(a*a*4);for(let e=0;e<o.length;e+=4)o[e+0]=255*t[0],o[e+1]=255*t[1],o[e+2]=255*t[2],o[e+3]=255*t[3];return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:a,height:a},o)}function f(e){return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1},new Uint8Array([255,255,255,255]))}


/***/ }),

/***/ "262w":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js ***!
  \**************************************************************************************/
/*! exports provided: COLOR_GAMMA, DefaultMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLOR_GAMMA", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterial", function() { return y; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/buffer/InterleavedLayout.js */ "/ADo");
/* harmony import */ var _lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/intersectorUtils.js */ "qXiY");
/* harmony import */ var _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/GLMaterialTexture.js */ "aK8v");
/* harmony import */ var _internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _lib_Material_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/Material.js */ "NbNv");
/* harmony import */ var _internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./internal/bufferWriterUtils.js */ "WVfK");
/* harmony import */ var _core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shaders/DefaultMaterialTechnique.js */ "4csu");
/* harmony import */ var _shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shaders/RealisticTreeTechnique.js */ "b5HO");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class y extends _lib_Material_js__WEBPACK_IMPORTED_MODULE_7__["Material"]{constructor(e,t){super(t,e,M),this.supportsEdges=!0,this.techniqueConfig=new _shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechniqueConfiguration"],this.vertexBufferLayout=y.getVertexBufferLayout(this.params),this.instanceBufferLayout=e.instanced?y.getInstanceBufferLayout(this.params):null}isVisibleInPass(e){return 4!==e||this.params.castShadows}isVisible(){const e=this.params;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,i=e.vertexColors,s=e.symbolColors,a=!!t&&t.indexOf("color")>-1,r=e.vvColorEnabled,n="replace"===e.colorMixMode,o=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return i&&(a||r||s)?!!n||o:i?n?l:o:a||r||s?!!n||o:n?l:o}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.params.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.params.textureId,this.techniqueConfig.vertexTangents=this.params.vertexTangents,this.techniqueConfig.instanced=!!this.params.instanced,this.techniqueConfig.instancedDoublePrecision=this.params.instancedDoublePrecision,this.techniqueConfig.vvSize=this.params.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.params.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.params.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.params.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.params.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.params.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.params.normals,this.techniqueConfig.transparent=this.params.transparent,this.techniqueConfig.writeDepth=this.params.writeDepth,this.techniqueConfig.sceneHasOcludees=this.params.sceneHasOcludees,this.techniqueConfig.cullFace=null!=this.params.cullFace?this.params.cullFace:0,0!==e&&7!==e||(this.techniqueConfig.vertexColors=this.params.vertexColors,this.techniqueConfig.symbolColors=this.params.symbolColors,this.params.treeRendering?this.techniqueConfig.doubleSidedMode=2:this.techniqueConfig.doubleSidedMode=this.params.doubleSided&&"normal"===this.params.doubleSidedType?1:this.params.doubleSided&&"winding-order"===this.params.doubleSidedType?2:0,this.techniqueConfig.instancedColor=!!this.params.instanced&&this.params.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.params.receiveShadows&&this.params.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=this.params.receiveSSAO,this.techniqueConfig.vvColor=this.params.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.params.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.params.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.params.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.params.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.params.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.params.transparent||!this.params.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.params.usePBR&&this.params.isSchematic,this.techniqueConfig.transparencyPassType=t?t.transparencyPassType:3,this.techniqueConfig.enableOffset=!t||t.camera.relativeElevation<_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_10__["OITPolygonOffsetLimit"]),this.techniqueConfig}intersect(e,t,c,h,d,v,g){if(null!==this.params.verticalOffset){const e=h.camera;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(A,c[12],c[13],c[14]);let t=null;switch(h.viewingMode){case 1:t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["n"])(L,A);break;case 2:t=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(L,E)}let p=0;if(null!==this.params.verticalOffset){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(D,A,e.eye),s=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(i),a=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(i,i,1/s);let u=null;this.params.screenSizePerspective&&(u=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(t,a)),p+=Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__["verticalOffsetAtDistance"])(e,s,this.params.verticalOffset,u,this.params.screenSizePerspective)}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(t,t,p),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["t"])(R,t,h.transform.inverseRotation),d=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(B,d,R),v=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(I,v,R)}Object(_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_6__["intersectTriangleGeometry"])(e,t,h,d,v,Object(_lib_intersectorUtils_js__WEBPACK_IMPORTED_MODULE_4__["getVerticalOffsetObject3D"])(h.verticalOffset),g)}getGLMaterial(e){if(0===e.output||7===e.output||1===e.output||2===e.output||3===e.output||4===e.output)return new P(e)}createBufferWriter(){return new w(this.vertexBufferLayout,this.instanceBufferLayout)}static getVertexBufferLayout(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,i=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])().vec3f("position").vec3f("normal");return e.vertexTangents&&i.vec4f("tangent"),t&&i.vec2f("uv0"),e.vertexColors&&i.vec4u8("color"),e.symbolColors&&i.vec4u8("symbolColor"),i}static getInstanceBufferLayout(e){let t=Object(_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_3__["newLayout"])();return t=e.instancedDoublePrecision?t.vec3f("modelOriginHi").vec3f("modelOriginLo").mat3f("model").mat3f("modelNormal"):t.mat4f("model").mat4f("modelNormal"),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f("instanceColor")),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f("instanceFeatureAttribute")),t}}class P extends _lib_GLMaterialTexture_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(e){const t=e.material;super({...e,...t.params}),this.updateParameters()}updateParameters(e){const t=this.material.params;this.updateTexture(t.textureId),this.technique=t.treeRendering?this.techniqueRep.acquireAndReleaseExisting(_shaders_RealisticTreeTechnique_js__WEBPACK_IMPORTED_MODULE_12__["RealisticTreeTechnique"],this.material.getTechniqueConfig(this.output,e),this.technique):this.techniqueRep.acquireAndReleaseExisting(_shaders_DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_11__["DefaultMaterialTechnique"],this.material.getTechniqueConfig(this.output,e),this.technique)}selectPipelines(){}_updateShadowState(e){e.shadowMappingEnabled!==this.material.params.shadowMappingEnabled&&this.material.setParameterValues({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this.material.params.sceneHasOcludees&&this.material.setParameterValues({sceneHasOcludees:e.hasOccludees})}ensureParameters(e){0!==this.output&&7!==this.output||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){e.bindProgram(this.technique.program),this.technique.bindPass(e,this.material.params,t),this.bindTexture(e,this.technique.program)}beginSlot(e){return e===(this.material.params.transparent?this.material.params.writeDepth?5:8:3)}getPipelineState(e,t){return this.technique.getPipelineState(t)}}const O=2.1,M={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:void 0,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])(),transparent:!1,writeDepth:!0,textureAlphaMode:0,textureAlphaCutoff:_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_9__["defaultMaskAlphaCutoff"],textureAlphaPremultiplied:!1,sceneHasOcludees:!1,..._lib_Material_js__WEBPACK_IMPORTED_MODULE_7__["materialParametersDefaults"]};class w{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.position.length}write(e,t,i,s){Object(_internal_bufferWriterUtils_js__WEBPACK_IMPORTED_MODULE_8__["writeDefaultAttributes"])(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,i,s)}}const B=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),I=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),E=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["f"])(0,0,1),L=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),R=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),A=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),D=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();


/***/ }),

/***/ "2hxh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js ***!
  \*******************************************************************************************/
/*! exports provided: applyPrecomputedScaleFactor, applyScaleFactor, applyScaleFactorVec2, getLabelSettings, getSettings, precomputeScaleFactor, scale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPrecomputedScaleFactor", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScaleFactor", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScaleFactorVec2", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelSettings", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "precomputeScaleFactor", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scale", function() { return d; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(e,t){return new f(e,m,t)}function r(e,t){const{curvatureDependent:a,scaleStart:i,scaleFallOffRange:r}=m;return new f(e,{curvatureDependent:{min:{curvature:a.min.curvature,tiltAngle:a.min.tiltAngle,scaleFallOffFactor:p.curvatureDependent.min.scaleFallOffFactor},max:{curvature:a.max.curvature,tiltAngle:a.max.tiltAngle,scaleFallOffFactor:p.curvatureDependent.max.scaleFallOffFactor}},scaleStart:i,scaleFallOffRange:r,minPixelSize:p.minPixelSize},t)}function n(e,t,a){const i=a.parameters,r=a.paddingPixelsOverride;return h.scale=Math.min(i.divisor/(t-i.offset),1),h.factor=function(e){return Math.abs(e*e*e)}(e),h.minPixelSize=i.minPixelSize,h.paddingPixels=r,h}function l(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function s(t,a){return Math.max(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t*a.scale,t,a.factor),l(t,a))}function c(t,a,i=[0,0]){const r=Math.min(Math.max(a.scale,l(t[1],a)/t[1]),1);return i[0]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[0]*r,t[0],a.factor),i[1]=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(t[1]*r,t[1],a.factor),i}function o(e,t,a,i){i.scale=function(e,t,a){const i=n(e,t,a);return i.minPixelSize=0,i.paddingPixels=0,s(1,i)}(e,t,a),i.factor=0,i.minPixelSize=a.parameters.minPixelSize,i.paddingPixels=a.paddingPixelsOverride}function u(e,t,a=[0,0]){const i=Math.min(Math.max(t.scale,l(e[1],t)/e[1]),1);return a[0]=e[0]*i,a[1]=e[1]*i,a}function d(e,t,a,i){return s(e,n(t,a,i))}class f{constructor(e,t,a,i={camera:{distance:0,fovY:0},divisor:0,offset:0,minPixelSize:0,paddingPixels:0},r){this.viewingMode=e,this.description=t,this.ellipsoidRadius=a,this.parameters=i,this._paddingPixelsOverride=r,2===this.viewingMode?(this.coverageCompensation=this.surfaceCoverageCompensationLocal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersLocal):(this.coverageCompensation=this.surfaceCoverageCompensationGlobal,this.calculateCurvatureDependentParameters=this.calculateCurvatureDependentParametersGlobal)}get paddingPixelsOverride(){return this._paddingPixelsOverride||this.parameters.paddingPixels}update(e){return(!this.parameters||this.parameters.camera.fovY!==e.fovY||this.parameters.camera.distance!==e.distance)&&(this.calculateParameters(e,this.ellipsoidRadius,this.parameters),!0)}overridePadding(e){return e!==this.paddingPixelsOverride?new f(this.viewingMode,this.description,this.ellipsoidRadius,this.parameters,e):this}calculateParameters(e,t,a){const{scaleStart:i,scaleFallOffRange:r,minPixelSize:n}=this.description,{fovY:l,distance:s}=e,c=this.calculateCurvatureDependentParameters(e,t),o=this.coverageCompensation(e,t,c),{tiltAngle:u,scaleFallOffFactor:d}=c,f=Math.sin(u)*s,m=.5*Math.PI-u-l*(.5-i*o),p=f/Math.cos(m),h=m+l*r*o,v=(p-d*(f/Math.cos(h)))/(1-d);return a.camera.fovY=e.fovY,a.camera.distance=e.distance,a.offset=v,a.divisor=p-v,a.minPixelSize=n,a}calculateCurvatureDependentParametersLocal(e,t,a=v){return a.tiltAngle=this.description.curvatureDependent.min.tiltAngle,a.scaleFallOffFactor=this.description.curvatureDependent.min.scaleFallOffFactor,a}calculateCurvatureDependentParametersGlobal(t,i,r=v){const n=this.description.curvatureDependent,l=1+t.distance/i,s=Math.sqrt(l*l-1),[c,o]=[n.min.curvature,n.max.curvature],u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])((s-c)/(o-c),0,1),[d,f]=[n.min,n.max];return r.tiltAngle=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.tiltAngle,f.tiltAngle,u),r.scaleFallOffFactor=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["lerp"])(d.scaleFallOffFactor,f.scaleFallOffFactor,u),r}surfaceCoverageCompensationLocal(e,t,a){return(e.fovY-a.tiltAngle)/e.fovY}surfaceCoverageCompensationGlobal(e,t,a){const i=t*t,r=a.tiltAngle+.5*Math.PI,{fovY:n,distance:l}=e,s=l*l+i-2*Math.cos(r)*l*t,c=Math.sqrt(s),o=Math.sqrt(s-i);return(Math.acos(o/c)-Math.asin(t/(c/Math.sin(r)))+.5*n)/n}}const m={curvatureDependent:{min:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(10),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(12),scaleFallOffFactor:.5},max:{curvature:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(70),tiltAngle:Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["deg2rad"])(40),scaleFallOffFactor:.8}},scaleStart:.3,scaleFallOffRange:.65,minPixelSize:0},p={curvatureDependent:{min:{scaleFallOffFactor:.7},max:{scaleFallOffFactor:.95}},minPixelSize:14};const h={scale:0,factor:0,minPixelSize:0,paddingPixels:0},v={tiltAngle:0,scaleFallOffFactor:0};


/***/ }),

/***/ "2jVe":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js ***!
  \**************************************************************************************************************/
/*! exports provided: ShaderTechniqueConfiguration, parameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechniqueConfiguration", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parameter", function() { return r; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class e{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits.map((()=>0))}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const t=this._parameterNames,e={key:this.key};for(const r of t)e[r]=this[r];return e}}function r(e={}){return(r,s)=>{var a,i;r._parameterNames=null!=(a=r._parameterNames)?a:[],r._parameterNames.push(s);const o=r._parameterNames.length-1,h=e.count||2,n=Math.ceil(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["log2"])(h)),m=null!=(i=r._parameterBits)?i:[0];let p=0;for(;m[p]+n>16;)p++,p>=m.length&&m.push(0);r._parameterBits=m;const _=m[p],y=(1<<n)-1<<_;m[p]+=n,Object.defineProperty(r,s,{get(){return this[o]},set(t){if(this[o]!==t&&(this[o]=t,this._keyDirty=!0,this._parameterBits[p]=this._parameterBits[p]&~y|+t<<_&y,"number"!=typeof t&&"boolean"!=typeof t))throw"Configuration values must be booleans or numbers!"}})}}


/***/ }),

/***/ "2mxK":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/math/common.js ***!
  \**************************************************************************/
/*! exports provided: logger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return e; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.support.buffer.math");


/***/ }),

/***/ "368d":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js ***!
  \**************************************************************************************************************************/
/*! exports provided: TextureCoordinateAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureCoordinateAttribute", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,d){1===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
      }
    `)),2===d.attributeTextureCoordinates&&(t.attributes.add("uv0","vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add("uvRegion","vec4"),t.varyings.add("vuvRegion","vec4"),t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardTextureCoordinates() {
        vuv0 = uv0;
        vuvRegion = uvRegion;
      }
    `)),0===d.attributeTextureCoordinates&&t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardTextureCoordinates() {}
    `)}


/***/ }),

/***/ "3Fbu":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec22.js ***!
  \***************************************************/
/*! exports provided: c, n, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return d; });
/* harmony import */ var _views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/support/buffer/types.js */ "grla");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function f(e,t,r){const f=e.typedBuffer,n=e.typedBufferStride,d=t.typedBuffer,o=t.typedBufferStride,s=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*n,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<s;++e)f[u]=d[p],f[u+1]=d[p+1],u+=n,p+=o}function n(n,d,o){const s=n.typedBuffer,u=n.typedBufferStride,p=d.typedBuffer,c=d.typedBufferStride,l=o?o.count:d.count;let y=(o&&o.dstIndex?o.dstIndex:0)*u,i=(o&&o.srcIndex?o.srcIndex:0)*c;if(Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isInteger"])(d.elementType)){const e=Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["maximumValue"])(d.elementType);if(Object(_views_3d_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_0__["isSigned"])(d.elementType))for(let t=0;t<l;++t)s[y]=Math.max(p[i]/e,-1),s[y+1]=Math.max(p[i+1]/e,-1),y+=u,i+=c;else for(let t=0;t<l;++t)s[y]=p[i]/e,s[y+1]=p[i+1]/e,y+=u,i+=c}else f(n,d,o);return n}var d=Object.freeze({__proto__:null,copy:f,normalizeIntegerBuffer:n});


/***/ }),

/***/ "3O/s":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/VectorStack.js ***!
  \*******************************************************/
/*! exports provided: VectorStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorStack", function() { return c; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../chunks/vec4f64.js */ "D8Ta");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class c{constructor(t,s,i){this.itemByteSize=t,this.itemCreate=s,this.buffers=[],this.items=[],this.itemsPerBuffer=0,this.itemsPtr=0,this.itemsPerBuffer=Math.ceil(i/this.itemByteSize),this.tickHandle=_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"].before((()=>this.reset()))}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.tickHandle)),this.itemsPtr=0,this.items=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.items),this.buffers=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.buffers)}get(){0===this.itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"])((()=>{}));const t=Math.floor(this.itemsPtr/this.itemsPerBuffer);for(;this.buffers.length<=t;){const t=new ArrayBuffer(this.itemsPerBuffer*this.itemByteSize);for(let e=0;e<this.itemsPerBuffer;++e)this.items.push(this.itemCreate(t,e*this.itemByteSize));this.buffers.push(t)}return this.items[this.itemsPtr++]}reset(){const t=2*(Math.floor(this.itemsPtr/this.itemsPerBuffer)+1);for(;this.buffers.length>t;)this.buffers.pop(),this.items.length=this.buffers.length*this.itemsPerBuffer;this.itemsPtr=0}static createVec2f64(t=a){return new c(16,_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_6__["c"],t)}static createVec3f64(t=a){return new c(24,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["a"],t)}static createVec4f64(t=a){return new c(32,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["c"],t)}static createMat3f64(t=a){return new c(72,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"],t)}static createMat4f64(t=a){return new c(128,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__["c"],t)}static createQuatf64(t=a){return new c(32,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_5__["c"],t)}get test(){return{size:this.buffers.length*this.itemsPerBuffer*this.itemByteSize}}}const a=4096;


/***/ }),

/***/ "3RTz":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js ***!
  \********************************************************************************/
/*! exports provided: BinaryStreamReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryStreamReader", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.offset4=0,this.dataUint32=new Uint32Array(this.data,0,Math.floor(this.data.byteLength/4))}readUint32(){const t=this.offset4;return this.offset4+=1,this.dataUint32[t]}readUint8Array(t){const s=4*this.offset4;return this.offset4+=t/4,new Uint8Array(this.data,s,t)}remainingBytes(){return this.data.byteLength-4*this.offset4}}


/***/ }),

/***/ "3qN5":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateMainLighting.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: EvaluateMainLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateMainLighting", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){const n=t.fragment;n.uniforms.add("lightingMainDirection","vec3"),n.uniforms.add("lightingMainIntensity","vec3"),n.uniforms.add("lightingFixedFactor","float"),n.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
      float dotVal = clamp(-dot(normal_global, lightingMainDirection), 0.0, 1.0);

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
    }
  `)}


/***/ }),

/***/ "4csu":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js ***!
  \*********************************************************************************************/
/*! exports provided: DefaultMaterialTechnique, DefaultMaterialTechniqueConfiguration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechnique", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialTechniqueConfiguration", function() { return E; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechnique.js */ "ypgp");
/* harmony import */ var _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/shaderTechnique/ShaderTechniqueConfiguration.js */ "2jVe");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/* harmony import */ var _core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/shaderLibrary/util/View.glsl.js */ "jpeq");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/* harmony import */ var _core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/shaderLibrary/output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lib/OrderIndependentTransparency.js */ "dDjh");
/* harmony import */ var _lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/StencilUtils.js */ "h7dw");
/* harmony import */ var _core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../chunks/DefaultMaterial.glsl.js */ "AxBq");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class A extends _core_shaderTechnique_ShaderTechnique_js__WEBPACK_IMPORTED_MODULE_3__["ShaderTechnique"]{initializeProgram(e){const t=A.shader.get(),i=this.configuration,r=t.build({OITEnabled:0===i.transparencyPassType,output:i.output,viewingMode:e.viewingMode,receiveShadows:i.receiveShadows,slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:i.symbolColors,vvSize:i.vvSize,vvColor:i.vvColor,vvInstancingEnabled:!0,instanced:i.instanced,instancedColor:i.instancedColor,instancedDoublePrecision:i.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:i.usePBR?i.isSchematic?2:1:0,hasMetalnessAndRoughnessTexture:i.hasMetalnessAndRoughnessTexture,hasEmissionTexture:i.hasEmissionTexture,hasOcclusionTexture:i.hasOcclusionTexture,hasNormalTexture:i.hasNormalTexture,hasColorTexture:i.hasColorTexture,receiveAmbientOcclusion:i.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:i.normalsTypeDerivate?3:0,doubleSidedMode:i.doubleSidedMode,vertexTangets:i.vertexTangents,attributeTextureCoordinates:i.hasMetalnessAndRoughnessTexture||i.hasEmissionTexture||i.hasOcclusionTexture||i.hasNormalTexture||i.hasColorTexture?1:0,textureAlphaPremultiplied:i.textureAlphaPremultiplied,attributeColor:i.vertexColors,screenSizePerspectiveEnabled:i.screenSizePerspective,verticalOffsetEnabled:i.verticalOffset,offsetBackfaces:i.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_17__["doublePrecisionRequiresObfuscation"])(e.rctx),alphaDiscardMode:i.alphaDiscardMode,supportsTextureAtlas:!1});return new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_6__["default"](e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_5__["Default3D"])}bindPass(e,t,i){_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindProjectionMatrix(this.program,i.camera.projectionMatrix);const r=this.configuration.output;7===r&&(this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["colorMixModes"][t.colorMixMode])),0===r?(i.lighting.setUniforms(this.program,!1),this.program.setUniform3fv("ambient",t.ambient),this.program.setUniform3fv("diffuse",t.diffuse),this.program.setUniform4fv("externalColor",t.externalColor),this.program.setUniform1i("colorMixMode",_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["colorMixModes"][t.colorMixMode]),this.program.setUniform1f("opacity",t.opacity),this.program.setUniform1f("layerOpacity",t.layerOpacity),this.configuration.usePBR&&_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_19__["PhysicallyBasedRenderingParameters"].bindUniforms(this.program,t,this.configuration.isSchematic)):1===r||3===r?this.program.setUniform2fv("nearFar",i.camera.nearFar):4===r&&_core_shaderLibrary_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_11__["OutputHighlight"].bindOutputHighlight(e,this.program,i),_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_12__["VisualVariables"].bindUniformsForSymbols(this.program,t),_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_13__["VerticalOffset"].bindUniforms(this.program,t,i),Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_9__["bindScreenSizePerspective"])(t.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),2!==t.textureAlphaMode&&3!==t.textureAlphaMode||this.program.setUniform1f("textureAlphaCutoff",t.textureAlphaCutoff)}bindDraw(e){const i=this.configuration.instancedDoublePrecision?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindViewCustomOrigin(this.program,i,e.camera.viewMatrix),(0===this.configuration.output||7===this.configuration.output||1===this.configuration.output&&this.configuration.screenSizePerspective||2===this.configuration.output&&this.configuration.screenSizePerspective||4===this.configuration.output&&this.configuration.screenSizePerspective)&&_core_shaderLibrary_util_View_glsl_js__WEBPACK_IMPORTED_MODULE_8__["View"].bindCamPosition(this.program,i,e.camera.viewInverseTransposeMatrix),2===this.configuration.output&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_18__["InstancedDoublePrecision"].bindCustomOrigin(this.program,i),_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_10__["Slice"].bindUniforms(this.program,this.configuration,e.slicePlane,i),0===this.configuration.output&&_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_16__["ReadShadowMap"].bindViewCustomOrigin(this.program,e,i)}setPipeline(e,t){const i=this.configuration,r=3===e,o=2===e;return Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["makePipelineState"])({blending:0!==i.output&&7!==i.output||!i.transparent?null:r?_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["blendingDefault"]:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["OITBlending"])(e),culling:U(i),depthTest:{func:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["OITDepthTest"])(e)},depthWrite:r||o?i.writeDepth&&_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultDepthWriteParams"]:null,colorWrite:_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_7__["defaultColorWriteParams"],stencilWrite:i.sceneHasOcludees?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilWriteMaskOn"]:null,stencilTest:i.sceneHasOcludees?t?_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilToolMaskBaseParams"]:_lib_StencilUtils_js__WEBPACK_IMPORTED_MODULE_15__["stencilBaseAllZerosParams"]:null,polygonOffset:r||o?null:Object(_lib_OrderIndependentTransparency_js__WEBPACK_IMPORTED_MODULE_14__["getOITPolygonOffset"])(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this.setPipeline(this.configuration.transparencyPassType,!0),this.setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e){return e?this._occludeePipelineState:this.pipeline}}A.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_2__["ReloadableShaderModule"](_chunks_DefaultMaterial_glsl_js__WEBPACK_IMPORTED_MODULE_20__["D"],(()=>__webpack_require__.e(/*! import() | DefaultMaterial-glsl-js */ "DefaultMaterial-glsl-js").then(__webpack_require__.bind(null, /*! ./DefaultMaterial.glsl.js */ "SjXz"))));const U=e=>function(e){return e.cullFace?0!==e.cullFace:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}(e)&&{face:1===e.cullFace?1028:1029,mode:2305};class E extends _core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["ShaderTechniqueConfiguration"]{constructor(){super(...arguments),this.output=0,this.alphaDiscardMode=1,this.doubleSidedMode=0,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=0,this.transparencyPassType=3}}Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({count:8})],E.prototype,"output",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({count:4})],E.prototype,"alphaDiscardMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({count:3})],E.prototype,"doubleSidedMode",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"isSchematic",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"vertexColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"offsetBackfaces",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"symbolColors",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"vvSize",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"vvColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"verticalOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"receiveShadows",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"slicePlaneEnabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"sliceHighlightDisabled",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"receiveAmbientOcclusion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"screenSizePerspective",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"textureAlphaPremultiplied",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"hasColorTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"usePBR",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"hasMetalnessAndRoughnessTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"hasEmissionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"hasOcclusionTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"hasNormalTexture",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"instanced",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"instancedColor",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"instancedDoublePrecision",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"vertexTangents",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"normalsTypeDerivate",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"writeDepth",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"sceneHasOcludees",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"transparent",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])()],E.prototype,"enableOffset",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({count:3})],E.prototype,"cullFace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_shaderTechnique_ShaderTechniqueConfiguration_js__WEBPACK_IMPORTED_MODULE_4__["parameter"])({count:4})],E.prototype,"transparencyPassType",void 0);


/***/ }),

/***/ "5MHk":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec42.js ***!
  \***************************************************/
/*! exports provided: a, b, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/* harmony import */ var _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/support/buffer/math/common.js */ "2mxK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=f[9],m=f[10],h=f[11],l=f[12],S=f[13],b=f[14],v=f[15],M=t.typedBuffer,_=t.typedBufferStride,j=r.typedBuffer,g=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*_,r=e*g,f=j[r],o=j[r+1],w=j[r+2],x=j[r+3];M[t]=n*f+c*o+y*w+l*x,M[t+1]=u*f+i*o+B*w+S*x,M[t+2]=d*f+a*o+m*w+b*x,M[t+3]=s*f+p*o+h*w+v*x}}function r(t,r,f){if(t.count!==r.count)return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2],b=h[r+3];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S,B[t+3]=b}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=r*u[f],o[t+1]=r*u[f+1],o[t+2]=r*u[f+2],o[t+3]=r*u[f+3]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=u[f]>>r,o[t+1]=u[f+1]>>r,o[t+2]=u[f+2]>>r,o[t+3]=u[f+3]>>r}}var n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ "69UF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DiscardOrAdjustAlpha, defaultMaskAlphaCutoff, symbolAlphaCutoff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardOrAdjustAlpha", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMaskAlphaCutoff", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symbolAlphaCutoff", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d=.1,o=.001;function r(d,o){const r=d.fragment;switch(o.alphaDiscardMode){case 0:r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        #define discardOrAdjustAlpha(color) { if (color.a < ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].float(.001)}) { discard; } }
      `);break;case 1:r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        void discardOrAdjustAlpha(inout vec4 color) {
          color.a = 1.0;
        }
      `);break;case 2:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }
      `);break;case 3:d.fragment.uniforms.add("textureAlphaCutoff","float"),d.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        #define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }
      `)}}


/***/ }),

/***/ "6kvK":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js ***!
  \******************************************************************************************************************/
/*! exports provided: EvaluateSceneLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateSceneLighting", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EvaluateAmbientLighting.glsl.js */ "KQYO");
/* harmony import */ var _EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EvaluateMainLighting.glsl.js */ "3qN5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,c){const d=r.fragment;r.include(_EvaluateMainLighting_glsl_js__WEBPACK_IMPORTED_MODULE_6__["EvaluateMainLighting"]),r.include(_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_4__["EvaluateAmbientOcclusion"],c),0!==c.pbrMode&&r.include(_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_3__["PhysicallyBasedRendering"],c),r.include(_EvaluateAmbientLighting_glsl_js__WEBPACK_IMPORTED_MODULE_5__["EvaluateAmbientLighting"],c),c.receiveShadows&&r.include(_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_2__["ReadShadowMap"],c),d.uniforms.add("lightingGlobalFactor","float"),d.uniforms.add("ambientBoostFactor","float"),r.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PiUtils"]),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${0===c.pbrMode?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),c.useOldSceneLightInterface?d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 evaluateSceneLightingExt(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
      // evaluate the main light
      #if defined(TREE_RENDERING)
        // Special case for tree rendering:
        // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
        // facing away from the light. The idea is to get an effect where light is transmitted
        // through the tree.
        float minDot = -0.5;
        float dotRange = 1.0 - minDot;
        float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

        float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
      #else
        float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
      #endif

      // move lighting towards (1.0, 1.0, 1.0) if requested
      dotVal = mix(dotVal, 1.0, lightingFixedFactor);

      vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;
      vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

      // inverse gamma correction on the albedo color
      vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

      // physically correct BRDF normalizes by PI
      vec3 totalLight = mainLight + ambientLight + additionalLight;
      totalLight = min(totalLight, vec3(PI));
      vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

      // apply gamma correction to the computed color
      outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

      return outColor;
    }
  `):(1===c.viewingMode?d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        vec3 shadingNormalWorld = normalize(vPosWorld);
        float vndl = -dot(shadingNormalWorld, lightingMainDirection);

        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `):d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float _oldHeuristicLighting(vec3 vPosWorld) {
        float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
        return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
      }
    `),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
        float additionalAmbientScale = _oldHeuristicLighting(vPosWorld);
        return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
      }
    `),0===c.pbrMode||4===c.pbrMode?d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 evaluateSceneLighting(vec3 normalWorld, vec3 baseColor, float mainLightShadow, float ambientOcclusion, vec3 additionalLight)
      {
        vec3 mainLighting = evaluateMainLighting(normalWorld, mainLightShadow);
        vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ambientOcclusion);
        // inverse gamma correction on the base color
        vec3 baseColorLinear = pow(baseColor, vec3(GAMMA_SRGB));

        // physically correct BRDF normalizes by PI
        vec3 totalLight = mainLighting + ambientLighting + additionalLight;
        totalLight = min(totalLight, vec3(PI));
        vec3 outColor = vec3((baseColorLinear / PI) * totalLight);

        // apply gamma correction to the computed color
        outColor = pow(outColor, vec3(INV_GAMMA_SRGB));

        return outColor;
      }
      `):1!==c.pbrMode&&2!==c.pbrMode||(d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      const float fillLightIntensity = 0.25;
      const float horizonLightDiffusion = 0.4;
      const float additionalAmbientIrradianceFactor = 0.02;

      vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
      {
        // Calculate half vector between view and light direction
        vec3 viewDirection = -viewDir;
        vec3 mainLightDirection = -lightingMainDirection;
        vec3 h = normalize(viewDirection + mainLightDirection);

        PBRShadingInfo inputs;
        inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
        inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
        inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
        inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
        inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
        vec3 reflectedView = normalize(reflect(viewDirection, normal));
        inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

        inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
        inputs.ssao = ssao;

        inputs.metalness = mrr[0];
        inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
      `),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
        inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
      `),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
        ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = abs(dot(normal, ambientDir));

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
        // calculateAmbientIrradiance for localView and additionalLight for gloabalView
        vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
        vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
        vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
        inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

        // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);
        `),d.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${2===c.pbrMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `)))}


/***/ }),

/***/ "8JEK":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/stack.js ***!
  \*************************************************************/
/*! exports provided: sm3d, sm4d, sq4d, sv2d, sv3d, sv4d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm3d", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sm4d", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sq4d", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv2d", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv3d", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sv4d", function() { return r; });
/* harmony import */ var _core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/VectorStack.js */ "3O/s");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec2f64(),c=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec3f64(),r=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createVec4f64(),a=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat3f64(),f=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createMat4f64(),o=_core_VectorStack_js__WEBPACK_IMPORTED_MODULE_0__["VectorStack"].createQuatf64();


/***/ }),

/***/ "Ango":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometryDataUtils.js */ "EDiM");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/* harmony import */ var _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BoundingInfo.js */ "thYK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class u{constructor(t,n){this._boundingInfo=null,this._id=u.__idGen.gen(n),this._data=t}get id(){return this._id}get data(){return this._data}getIndices(t){return this.data.getIndices(t)}get indexCount(){return this.data.indexCount}getAttribute(t){return this.data.getAttribute(t)}get vertexCount(){return this.data.indexCount}get faceCount(){return this.data.indexCount/3}get boundingInfo(){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return"triangle"===this.data.primitiveType?this.computeAttachmentOriginTriangles(t):this.computeAttachmentOriginPoints(t)}computeAttachmentOriginTriangles(t){const i=this.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),e=this.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["computeAttachmentOriginTriangles"])(e,i,t)}computeAttachmentOriginPoints(t){const n=this.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),e=this.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);return Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["computeAttachmentOriginPoints"])(e,n,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){let t=this.data.getIndices(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION);const n=this.data.getAttribute(_Util_js__WEBPACK_IMPORTED_MODULE_2__["VertexAttrConstants"].POSITION),i="triangle"===this.data.primitiveType?3:1;if(0===t.length){t=new Uint32Array(i);for(let n=0;n<i;++n)t[n]=n}const s=t.length;Object(_Util_js__WEBPACK_IMPORTED_MODULE_2__["assert"])(s%i==0,"Indexing error: "+s.toFixed(0)+" not divisible by "+i.toFixed(0));const u=Object(_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"])(s/i);return new _BoundingInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"](u,i,t,n)}}u.__idGen=new _IdGen_js__WEBPACK_IMPORTED_MODULE_3__["IdGen"];/* harmony default export */ __webpack_exports__["default"] = (u);


/***/ }),

/***/ "AxBq":
/*!******************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/DefaultMaterial.glsl.js ***!
  \******************************************************************/
/*! exports provided: D, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return P; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js */ "fRF2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js */ "DXpj");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js */ "qrV2");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/HeaderComment.glsl.js */ "1W42");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function P(P){const _=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__["ShaderBuilder"],E=_.vertex.code,S=_.fragment.code;return _.include(_views_3d_webgl_engine_core_shaderLibrary_util_HeaderComment_glsl_js__WEBPACK_IMPORTED_MODULE_24__["HeaderComment"],{name:"Default Material Shader",output:P.output}),_.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__["PositionAttribute"]),_.varyings.add("vpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__["InstancedDoublePrecision"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__["VerticalOffset"],P),0!==P.output&&7!==P.output||(_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__["NormalAttribute"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),0===P.normalType&&P.offsetBackfaces&&_.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__["Offset"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ComputeNormalTexture_glsl_js__WEBPACK_IMPORTED_MODULE_20__["ComputeNormalTexture"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_18__["VertexNormal"],P),P.instancedColor&&_.attributes.add("instanceColor","vec4"),_.varyings.add("localvpos","vec3"),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__["TextureCoordinateAttribute"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__["ForwardLinearDepth"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__["SymbolColor"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VertexColor"],P),_.vertex.uniforms.add("externalColor","vec4"),_.varyings.add("vcolorExt","vec4"),E.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${P.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["symbolAlphaCutoff"])}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${0===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${P.vertexTangets?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${0===P.normalType&&P.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),7===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],P),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]),S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),0===P.output&&(_.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_22__["EvaluateSceneLighting"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_21__["EvaluateAmbientOcclusion"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],P),P.receiveShadows&&_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ReadShadowMap"],P),_.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),P.hasColorTexture&&_.fragment.uniforms.add("tex","sampler2D"),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PhysicallyBasedRenderingParameters"],P),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__["PhysicallyBasedRendering"],P),_.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_25__["MixExternalColor"]),_.include(_views_3d_webgl_engine_core_shaderLibrary_shading_Normals_glsl_js__WEBPACK_IMPORTED_MODULE_23__["Normals"],P),S.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${P.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${P.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - camPos);
        ${3===P.normalType?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 normal = screenDerivativeNormal(localvpos);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${1===P.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${P.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===P.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${P.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${P.hasNormalTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
              mat3 tangentSpace = ${P.vertexTangets?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${1===P.pbrMode||2===P.pbrMode?1===P.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]``}
        ${1===P.pbrMode||2===P.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${P.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),_.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_19__["DefaultMaterialAuxiliaryPasses"],P),_}var _=Object.freeze({__proto__:null,build:P});


/***/ }),

/***/ "CHx4":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js ***!
  \************************************************************************/
/*! exports provided: linearIndexArray, triangleFanToTriangles, triangleStripToTriangles, trianglesToTriangles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearIndexArray", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleFanToTriangles", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangleStripToTriangles", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trianglesToTriangles", function() { return o; });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../webgl-engine/lib/geometryDataUtils.js */ "EDiM");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(t){return Object(_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_1__["generateDefaultIndexArray"])(t)}function o(n){return"number"==typeof n?r(n):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint16Array"])(n)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isUint8Array"])(n)?new Uint32Array(n):n}function f(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const n=e-2,r=new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;e+=1)e%2==0?(r[t++]=e,r[t++]=e+1,r[t++]=e+2):(r[t++]=e+1,r[t++]=e,r[t++]=e+2)}else{let e=0;for(let o=0;o<n;o+=1)if(o%2==0){const n=t[o],f=t[o+1],i=t[o+2];r[e++]=n,r[e++]=f,r[e++]=i}else{const n=t[o+1],f=t[o],i=t[o+2];r[e++]=n,r[e++]=f,r[e++]=i}}return r}function i(t){const e="number"==typeof t?t:t.length;if(e<3)return new Uint32Array(0);const n=e-2,r=new Uint32Array(3*n);if("number"==typeof t){let t=0;for(let e=0;e<n;++e)r[t++]=0,r[t++]=e+1,r[t++]=e+2;return r}{const e=t[0];let o=t[1],f=0;for(let i=0;i<n;++i){const n=t[i+2];r[f++]=e,r[f++]=o,r[f++]=n,o=n}return r}}


/***/ }),

/***/ "D8Ta":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec4f64.js ***!
  \*****************************************************/
/*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, k, o, u, v, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return a; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(n){const t=[0,0,0,0],r=Math.min(4,n.length);for(let e=0;e<r;++e)t[e]=n[e];return t}function u(n,t){return new Float64Array(n,t,4)}function a(){return[0,0,0,0]}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function c(){return r(0,1,0,0)}function i(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const _=[0,0,0,0],l=o(),N=s(),U=c(),I=i(),O=f();var T=Object.freeze({__proto__:null,create:n,clone:t,fromValues:r,fromArray:e,createView:u,zeros:a,ones:o,unitX:s,unitY:c,unitZ:i,unitW:f,ZEROS:_,ONES:l,UNIT_X:N,UNIT_Y:U,UNIT_Z:I,UNIT_W:O});


/***/ }),

/***/ "DXpj":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/ComputeNormalTexture.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: ComputeNormalTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputeNormalTexture", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,a){const o=n.fragment;o.uniforms.add("normalTexture","sampler2D"),o.uniforms.add("normalTextureSize","vec2"),a.vertexTangets?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===a.doubleSidedMode?o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `):o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      mat3 computeTangentSpace(vec3 normal) {
        float tangentHeadedness = vTangent.w;
        vec3 tangent = normalize(vTangent.xyz);
        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
        return mat3(tangent, bitangent, normal);
      }
    `)):(n.extensions.add("GL_OES_standard_derivatives"),o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {

      vec3 Q1 = dFdx(pos);
      vec3 Q2 = dFdy(pos);

      vec2 stx = dFdx(st);
      vec2 sty = dFdy(st);

      float det = stx.t * sty.s - sty.t * stx.s;

      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent
      T = T - normal * dot(normal, T); // orthogonalize tangent
      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0
      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B
      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates
    }
  `)),0!==a.attributeTextureCoordinates&&(n.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_1__["VertexTextureCoordinates"],a),o.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${a.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}


/***/ }),

/***/ "DZ/s":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/boundedPlane.js ***!
  \**********************************************************/
/*! exports provided: B, U, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return js; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Ss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return rs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return $; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return as; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return os; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return es; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return cs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return us; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return bs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return fs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return ls; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/support/mathUtils.js */ "aAs6");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mat4f64.js */ "r+FG");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vector.js */ "IEcw");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lineSegment.js */ "jZU2");
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plane.js */ "cKtl");
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ray.js */ "QFRQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const L=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.support.geometryUtils.boundedPlane");class R{constructor(){this.plane=Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),this.origin=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),this.basis1=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),this.basis2=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])()}}function z(s=js){return{plane:Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(s.plane),origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.origin),basis1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.basis1),basis2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["b"])(s.basis2)}}function G(s,i,n){const t=Ps.get();return t.origin=s,t.basis1=i,t.basis2=n,t.plane=Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["w"])(0,0,0,0),J(t),t}function D(s,i=z()){return H(s.origin,s.basis1,s.basis2,i)}function H(s,i,n,t=z()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.origin,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.basis1,i),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t.basis2,n),J(t),function(s,i){Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1,s.basis2)/(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(s.basis1)*Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(s.basis2)))>1e-6&&L.warn(i,"Provided basis vectors are not perpendicular");Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1,ls(s)))>1e-6&&L.warn(i,"Basis vectors and plane normal are not perpendicular");Math.abs(-Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(ls(s),s.origin)-s.plane[3])>1e-6&&L.warn(i,"Plane offset is not consistent with plane origin")}(t,"fromValues()"),t}function J(s){Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(s.basis2,s.basis1,s.origin,s.plane)}function K(s,i,n){s!==n&&D(s,n);const t=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),ls(s),i);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin,n.origin,t),n.plane[3]-=i,n}function Q(s,i,n){return W(i,n),K(n,cs(s,s.origin),n),n}function W(s,i=z()){const n=(s[2]-s[0])/2,t=(s[3]-s[1])/2;return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.origin,s[0]+n,s[1]+t,0),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.basis1,n,0,0),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(i.basis2,0,t,0),Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["a"])(0,0,1,0,i.plane),i}function X(s,i,n){return!!Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["i"])(s.plane,i,n)&&ps(s,n)}function Z(s,i,n){if(X(s,i,n))return n;const t=$(s,i,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n,i.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),i.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["k"])(i.origin,t)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(i.direction))),n}function $(s,n,t){const a=Is.get();hs(s,n,a,Is.get());let r=Number.POSITIVE_INFINITY;for(const e of Ns){const c=ds(s,e,vs.get()),u=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get();if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["b"])(a,c,u)){const s=Object(_views_3d_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_5__["directionFromTo"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),n.origin,u),a=Math.abs(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__["acosClamped"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(n.direction,s)));a<r&&(r=a,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(t,u))}}return r===Number.POSITIVE_INFINITY?ss(s,n,t):t}function ss(s,i,n){if(X(s,i,n))return n;const t=Is.get(),a=Is.get();hs(s,i,t,a);let r=Number.POSITIVE_INFINITY;for(const e of Ns){const c=ds(s,e,vs.get()),u=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get();if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["d"])(t,c,u)){const s=Object(_ray_js__WEBPACK_IMPORTED_MODULE_13__["d"])(i,u);if(!Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(a,u))continue;s<r&&(r=s,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n,u))}}return ts(s,i.origin)<r&&is(s,i.origin,n),n}function is(s,i,n){const t=Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["p"])(s.plane,i,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),a=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["p"])(ms(s,s.basis1),t,-1,1,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),o=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["p"])(ms(s,s.basis2),t,-1,1,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(n,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),a,o),s.origin),n}function ns(s,i,n){const{origin:t,basis1:a,basis2:o}=s,r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),i,t),e=Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(a,r),u=Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(o,r),g=Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(ls(s),r);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["s"])(n,e,u,g)}function ts(s,i){const n=ns(s,i,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get()),{basis1:t,basis2:a}=s,o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(t),r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["l"])(a),e=Math.max(Math.abs(n[0])-o,0),c=Math.max(Math.abs(n[1])-r,0),u=n[2];return e*e+c*c+u*u}function as(s,i){return Math.sqrt(ts(s,i))}function os(s,i){let n=Number.NEGATIVE_INFINITY;for(const t of Ns){const a=ds(s,t,vs.get()),o=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["d"])(a,i);o>n&&(n=o)}return Math.sqrt(n)}function rs(s,i){return Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(s.plane,i)&&ps(s,i)}function es(s,i,n,t){return function(s,i,n){switch(i){case 0:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n,s.basis1),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(n,n);break;case 1:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n,s.basis2),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["n"])(n,n);break;case 2:Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n,ls(s))}return n}(s,n,t)}function cs(s,i){const n=-s.plane[3];return Object(_vector_js__WEBPACK_IMPORTED_MODULE_10__["p"])(ls(s),i)-n}function us(s,i,n,t){const a=cs(s,i),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(ws,ls(s),n-a);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(t,i,o),t}function gs(s,i){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.basis1,i.basis1)&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.basis2,i.basis2)&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["m"])(s.origin,i.origin)}function bs(s,i,n){return s!==n&&D(s,n),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["a"])(Ms,i),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["b"])(Ms,Ms),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.basis1,s.basis1,Ms),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.basis2,s.basis2,Ms),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(n.plane),Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(s.plane),Ms),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(n.origin,s.origin,i),Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["s"])(n.plane,n.origin,n.plane),n}function fs(s,i,n,t){return s!==t&&D(s,t),Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["r"])(Ts,Object(_mat4_js__WEBPACK_IMPORTED_MODULE_6__["i"])(Ts),i,n),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t.basis1,s.basis1,Ts),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["i"])(t.basis2,s.basis2,Ts),J(t),t}function ls(s){return Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(s.plane)}function ps(s,i){const n=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),i,s.origin),t=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(s.basis1),a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["o"])(s.basis2),o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis1,n),r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["d"])(s.basis2,n);return-o-t<0&&o-t<0&&-r-a<0&&r-a<0}function ms(s,i){const n=vs.get();return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n.origin,s.origin),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["g"])(n.vector,i),n}function ds(s,i,n){const{basis1:t,basis2:a,origin:o}=s,c=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),t,i.origin[0]),u=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),a,i.origin[1]);Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin,c,u),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(n.origin,n.origin,o);const g=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),t,i.direction[0]),b=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_9__["sv3d"].get(),a,i.direction[1]);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["a"])(n.vector,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_4__["b"])(g,g,b),2),n}function hs(s,i,n,t){const a=ls(s);Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(a,i.direction,i.origin,n),Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["f"])(Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["n"])(n),a,i.origin,t)}const js={plane:Object(_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"])(),origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,0,0),basis1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(1,0,0),basis2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["f"])(0,1,0)},Is=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"](_plane_js__WEBPACK_IMPORTED_MODULE_12__["c"]),vs=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_11__["c"]),ws=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),Ps=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_7__["ObjectStack"]((()=>({origin:null,basis1:null,basis2:null,plane:null}))),Ns=[{origin:[-1,-1],direction:[1,0]},{origin:[1,-1],direction:[0,1]},{origin:[1,1],direction:[-1,0]},{origin:[-1,1],direction:[0,-1]}],Ms=Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__["a"])(),Ts=Object(_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__["a"])();var Ss=Object.freeze({__proto__:null,BoundedPlaneClass:R,create:z,wrap:G,copy:D,fromValues:H,updateUnboundedPlane:J,elevate:K,setExtent:Q,fromAABoundingRect:W,intersectRay:X,intersectRayClosestSilhouette:Z,closestPointOnSilhouette:$,closestPoint:ss,projectPoint:is,projectPointLocal:ns,distance2:ts,distance:as,distanceToSilhouette:os,extrusionContainsPoint:rs,axisAt:es,altitudeAt:cs,setAltitudeAt:us,equals:gs,transform:bs,rotate:fs,normal:ls,UP:js});


/***/ }),

/***/ "EDiM":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js ***!
  \**********************************************************************************/
/*! exports provided: computeAttachmentOriginLines, computeAttachmentOriginPoints, computeAttachmentOriginTriangles, generateDefaultIndexArray, getNewId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginLines", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginPoints", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeAttachmentOriginTriangles", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDefaultIndexArray", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewId", function() { return x; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/triangle.js */ "oSUa");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let f=1,c=null;const i=new Uint32Array([0]);function u(t){if(1===t)return i;if(t>f||null==c){for(;t>f;)f*=2;c=new Uint32Array(f);for(let t=0;t<f;t++)c[t]=t}return new Uint32Array(c.buffer,0,t)}function a(t,o,f){if(!t)return!1;const{strideIdx:c,offsetIdx:i,data:u}=t;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(f,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(p,0,0,0);let a=0,l=0;for(let t=0;t<o.length-2;t+=3){const d=o[t+0]*c+i,h=o[t+1]*c+i,x=o[t+2]*c+i;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(m,u[d+0],u[d+1],u[d+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(I,u[h+0],u[h+1],u[h+2]),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(g,u[x+0],u[x+1],u[x+2]);const w=Object(_chunks_triangle_js__WEBPACK_IMPORTED_MODULE_2__["a"])(m,I,g);w?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m,m,I),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m,m,g),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m,m,1/3*w),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(f,f,m),a+=w):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p,p,m),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p,p,I),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p,p,g),l+=3)}return(0!==l||0!==a)&&(0!==a?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(f,f,1/a),!0):0!==l&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(f,p,1/l),!0))}function l(t,r,o){if(!t||!r)return!1;const{strideIdx:s,offsetIdx:f,data:c}=t;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(o,0,0,0);let i=-1,u=0;for(let t=0;t<r.length;t++){const n=r[t]*s+f;i!==n&&(o[0]+=c[n+0],o[1]+=c[n+1],o[2]+=c[n+2],u++),i=n}return u>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(o,o,1/u),u>0}function d(t,s,f,c){if(!t)return!1;const{strideIdx:i,offsetIdx:u,data:a}=t;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(c,0,0,0),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(p,0,0,0);let l=0,d=0;const h=s?s.length-1:a.length/i-1,x=h+(f?2:0);for(let t=0;t<x;t+=2){const n=t<h?t:h,f=t<h?t+1:0,x=(s?s[n]:n)*i+u,g=(s?s[f]:f)*i+u;m[0]=a[x+0],m[1]=a[x+1],m[2]=a[x+2],I[0]=a[g+0],I[1]=a[g+1],I[2]=a[g+2],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(m,m,I),.5);const w=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["w"])(m,I);w>0?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c,c,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(m,m,w)),l+=w):(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(p,p,m),d++)}return 0!==l?(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c,c,1/l),!0):0!==d&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c,p,1/d),!0)}let h=0;function x(){return h++}const m=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),I=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),g=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),p=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();


/***/ }),

/***/ "EVMh":
/*!*********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js ***!
  \*********************************************************************/
/*! exports provided: AssertException, VertexAttrConstants, assert, createTranslationMatrix, dec2hex, encodeInt16, encodeNormal, fallbackIfUndefined, fovd2fovx, fovd2fovy, fovx2fovd, fovx2fovy, fovy2fovd, fovy2fovx, getFirstObjectKey, getFirstObjectValue, getMatrixTranslation, hex2rgb, inverseProjectionInfo, isTranslationMatrix, logWithBase, objectEmpty, packFloatRGBA, project, rayBoxTest, rayRay2D, rayTriangle3D, rgb2hex, setMatrixTranslation, setMatrixTranslation3, unpackFloatRGBA, verify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssertException", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexAttrConstants", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assert", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationMatrix", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dec2hex", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeInt16", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeNormal", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackIfUndefined", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovx", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovd2fovy", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovx2fovd", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovx2fovy", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovy2fovd", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fovy2fovx", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstObjectKey", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFirstObjectValue", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatrixTranslation", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex2rgb", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverseProjectionInfo", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTranslationMatrix", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logWithBase", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectEmpty", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packFloatRGBA", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayBoxTest", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayRay2D", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rayTriangle3D", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixTranslation", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatrixTranslation3", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackFloatRGBA", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verify", function() { return h; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/vec2f64.js */ "AvGH");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec2.js */ "M0lq");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])();class e{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}const i={POSITION:"position",NORMAL:"normal",UV0:"uv0",UVMAPSPACE:"uvMapSpace",MEANVERTEXPOSITION:"meanVertexPosition",AUXPOS1:"auxpos1",AUXPOS2:"auxpos2",BOUND1:"bound1",BOUND2:"bound2",BOUND3:"bound3",COLOR:"color",SYMBOLCOLOR:"symbolColor",SIZE:"size",TANGENT:"tangent"};function f(t,n){if(!t){n=n||"assert";const t=new Error(n);throw t.stack&&console.log(t.stack),new e(n)}}function h(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function M(n){return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(32767*n),-32767,32767)}function l(t,n){const r=Math.abs(t[0]),o=Math.abs(t[1]),a=1/(r+o+Math.abs(t[2])),u=r*a,c=o*a,s=Math.min(t[2]*a,0);n[0]=(t[0]<0?-1:1)*(u-s),n[1]=(t[1]<0?-1:1)*(c-s)}function m(t,n){return void 0===t?n:t}function p(t){return[((t=Math.floor(t))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}function O(n){return"0x"+((Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[0]),0,255)<<16)+(Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[1]),0,255)<<8)+Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(Math.round(255*n[2]),0,255)).toString(16)}function g(t){const n=t.toString(16);return"00000000".substr(0,8-n.length)+n}function S(t,r,o,a,u,c,s,e,i=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()){const f=1e-5,h=a[s]-o[c],M=a[s+1]-o[c+1],l=a[s+2]-o[c+2],m=u[e]-o[c],p=u[e+1]-o[c+1],O=u[e+2]-o[c+2],g=r[1]*O-p*r[2],S=r[2]*m-O*r[0],d=r[0]*p-m*r[1],v=h*g+M*S+l*d;if(v>-f&&v<f)return!1;const k=1/v,A=t[0]-o[c],E=t[1]-o[c+1],N=t[2]-o[c+2];if(i[1]=k*(A*g+E*S+N*d),i[1]<0||i[1]>1)return!1;const U=E*l-M*N,b=N*h-l*A,j=A*M-h*E;return i[2]=k*(r[0]*U+r[1]*b+r[2]*j),!(i[2]<0||i[1]+i[2]>1)&&(i[0]=k*(m*U+p*b+O*j),!0)}function d(t,n,r,o){let a,u=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];u>c&&(a=u,u=c,c=a);let s=(r[1]-t[1])/n[1],e=(o[1]-t[1])/n[1];if(s>e&&(a=s,s=e,e=a),u>e||s>c)return!1;s>u&&(u=s),e<c&&(c=e);let i=(r[2]-t[2])/n[2],f=(o[2]-t[2])/n[2];return i>f&&(a=i,i=f,f=a),!(u>f||i>c)&&(f<c&&(c=f),!(c<0))}function v(t,n,r,a,u,c=Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_3__["a"])()){const s=(a[u]-r[u])*(n[0]-t[0])-(a[0]-r[0])*(n[u]-t[u]),e=(a[0]-r[0])*(t[u]-r[u])-(a[u]-r[u])*(t[0]-r[0]);if(0===s)return!1;const i=e/s;return c[0]=t[0]+i*(n[0]-t[0]),c[1]=t[u]+i*(n[u]-t[u]),!0}function k(t,n,r,o,a){a||(a=t),s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=1,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__["t"])(s,s,n),a.length>2&&(a[2]=-s[2]),Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_6__["t"])(s,s,r),f(0!==s[3]),a[0]=s[0]/s[3],a[1]=s[1]/s[3],a[2]=s[2]/s[3],a[0]=(.5*a[0]+.5)*o[2]+o[0],a[1]=(.5*a[1]+.5)*o[3]+o[1]}function A(t){for(const n in t)return n}function E(t){return t[A(t)]}function N(t){for(const n in t)return!1;return!0}function U(t,n){return Math.log(t)/Math.log(n)}function b(t,n){t[12]=n[0],t[13]=n[1],t[14]=n[2]}function j(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function P(t,r=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()){return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function w(t,n){return b(t=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__["i"])(t),n),t}function x(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}function C(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/n)}function I(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/r)}function T(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/n)}function V(t,n,r){return 2*Math.atan(Math.sqrt(n*n+r*r)*Math.tan(.5*t)/r)}function q(t,n,r){return 2*Math.atan(n*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function y(t,n,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(n*n+r*r))}function B(n,r,o=0){const a=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(n,0,X);for(let t=0;t<4;t++)r[o+t]=Math.floor(256*((u=a*R[t])-Math.floor(u)));var u}function L(t,n=0){let r=0;for(let o=0;o<4;o++)r+=t[n+o]*D[o];return r}const R=[1,256,65536,16777216],D=[1/256,1/65536,1/16777216,1/4294967296],X=L(new Uint8ClampedArray([255,255,255,255]));function z(t,n,r,o,a){const c=t;0===t[11]?(o[0]=2/(n*c[0]),o[1]=2/(r*c[5]),o[2]=(1+c[12])/c[0],o[3]=(1+c[13])/c[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["s"])(a,0,1)):(o[0]=-2/(n*c[0]),o[1]=-2/(r*c[5]),o[2]=(1-c[8])/c[0],o[3]=(1-c[9])/c[5],Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_5__["s"])(a,1,0))}


/***/ }),

/***/ "F7CJ":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VerticalOffset, calculateVerticalOffsetFactors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalOffset", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateVerticalOffsetFactors", function() { return l; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ScreenSizePerspective.glsl.js */ "L5gG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,l){const c=t.vertex.code;l.verticalOffsetEnabled?(t.vertex.uniforms.add("verticalOffset","vec4"),l.screenSizePerspectiveEnabled&&(t.include(_util_ScreenSizePerspective_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ScreenSizePerspective"]),t.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${1===l.viewingMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 worldNormal = normalize(worldPos + localOrigin);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${l.screenSizePerspectiveEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
          float cosAngle = dot(worldNormal, normalize(worldPos - camPos));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }
    `)}function l(e,r,t,l=c){return l.screenLength=e.screenLength,l.perDistance=Math.tan(.5*r)/(.5*t),l.minWorldLength=e.minWorldLength,l.maxWorldLength=e.maxWorldLength,l}!function(e){e.bindUniforms=function(e,r,t){if(!r.verticalOffset)return;const c=l(r.verticalOffset,t.camera.fovY,t.camera.fullViewport[3]),i=t.camera.pixelRatio||1;e.setUniform4f("verticalOffset",c.screenLength*i,c.perDistance,c.minWorldLength,c.maxWorldLength)}}(t||(t={}));const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0};


/***/ }),

/***/ "F8o4":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js ***!
  \*******************************************************************************************/
/*! exports provided: Offset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Offset", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){e.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
      vec3 camToVert = posWorld - camPosWorld;

      bool isBackface = dot(camToVert, normalWorld) > 0.0;
      if (isBackface) {
        posClip.z += 0.0000003 * posClip.w;
      }
      return posClip;
    }
  `)}


/***/ }),

/***/ "Gbm8":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/clipRay.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return f; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ray.js */ "QFRQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(r){return r?{ray:Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["c"])(r.ray),c0:r.c0,c1:r.c1}:{ray:Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["c"])(),c0:0,c1:Number.MAX_VALUE}}function f(r,t,c){const n=_.get();return n.ray=r,n.c0=t,n.c1=c,n}function m(r,t=u()){return y(r.ray,r.c0,r.c1,t)}function y(r,t,c,n=u()){return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r,n.ray),n.c0=t,n.c1=c,n}function g(r,t=u()){return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function p(t,c=u()){return b(t,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_2__["sv3d"].get(),t.vector),c)}function b(r,c,n=u()){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["l"])(r.vector);return Object(_ray_js__WEBPACK_IMPORTED_MODULE_3__["e"])(r.origin,c,n.ray),n.c0=0,n.c1=e,n}function j(r,t){return A(r,r.c0,t)}function l(r,t){return A(r,r.c1,t)}function A(r,t,e){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e,r.ray.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["a"])(e,r.ray.direction,t))}const _=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_1__["ObjectStack"]((()=>({c0:0,c1:0,ray:null})));var d=Object.freeze({__proto__:null,create:u,wrap:f,copy:m,fromValues:y,fromRay:g,fromLineSegment:p,fromLineSegmentAndDirection:b,getStart:j,getEnd:l,getAt:A});


/***/ }),

/***/ "Gze9":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js ***!
  \**********************************************************************/
/*! exports provided: Resource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return k; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../support/buffer/BufferView.js */ "VeZB");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BinaryStreamReader.js */ "3RTz");
/* harmony import */ var _fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fillDefaults.js */ "cqrX");
/* harmony import */ var _pathUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pathUtils.js */ "aBUN");
/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ "fPvx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const M=1179937895,G=1313821514,F=5130562;class k{constructor(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=Object(_pathUtils_js__WEBPACK_IMPORTED_MODULE_11__["splitURI"])(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}static async load(e,o,s,a){if(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["isDataProtocol"])(s)){const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["dataComponents"])(s);if("model/gltf-binary"!==t.mediaType)try{const r=JSON.parse(t.isBase64?atob(t.data):t.data);return new k(e,o,s,r)}catch{}const a=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["dataToArrayBuffer"])(s);if(k.isGLBData(a))return this.fromGLBData(e,o,s,a)}if(s.endsWith(".gltf")){const t=await e.loadJSON(s,a);return new k(e,o,s,t)}const i=await e.loadBinary(s,a);if(k.isGLBData(i))return this.fromGLBData(e,o,s,i);const u=await e.loadJSON(s,a);return new k(e,o,s,u)}static isGLBData(e){const t=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__["BinaryStreamReader"](e);return t.remainingBytes()>=4&&t.readUint32()===M}static async fromGLBData(e,t,r,n){const o=await k.parseGLBData(t,n);return new k(e,t,r,o.json,o.binaryData)}static async parseGLBData(e,t){const r=new _BinaryStreamReader_js__WEBPACK_IMPORTED_MODULE_9__["BinaryStreamReader"](t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===M,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let a,i,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===G,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),a=await J(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==F,"Second GLB chunk expected to be BIN."),i=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return a||e.error("No GLB JSON chunk detected."),{json:a,binaryData:i}}async getBuffer(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const s=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(s),this.bufferCache.set(e,o),n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.")}return o}async getAccessor(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t),a=X[r.type],i=q[r.componentType],u=a*i,c=o.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:a,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint8"],r));case 5123:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint16"],r));case 5125:return Object(_chunks_scalar_js__WEBPACK_IMPORTED_MODULE_12__["m"])(this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewUint32"],r))}}async getPositionData(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+z[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"],n)}async getNormalData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+z[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"],n)}async getTangentData(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+z[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4f"](n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)}async getTextureCoordinates(t,r){const n=this.errorContext;n.assert(null!=t.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);return n.errorUnsupportedIf(2!==o.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed()),5126===o.componentType?this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2f"],o):(n.errorUnsupportedIf(!o.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),function(t){switch(t.componentType){case 5120:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2i8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5121:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u8"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5122:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2i16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5123:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u16"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5125:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2u32"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case 5126:return new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec2f"](t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);default:return void Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(t.componentType)}}(o))}async getVertexColors(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4f"],n);if(5121===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4u8"],n);if(5123===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec4u16"],n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3f"],n);if(5121===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3u8"],n);if(5123===n.componentType)return this.wrapAccessor(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_7__["BufferViewVec3u16"],n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+z[n.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t){const r=this.errorContext;let n=this.materialCache.get(e.material);if(!n){const o=null!=e.material?Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["material"])(this.json.materials[e.material]):Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["material"])(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(e);let i,u,c,p,d;s.baseColorTexture&&(r.errorUnsupportedIf(0!==(s.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),i=await this.getTexture(s.baseColorTexture.index,t)),o.normalTexture&&(0!==(o.normalTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):u=await this.getTexture(o.normalTexture.index,t)),o.occlusionTexture&&(0!==(o.occlusionTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):c=await this.getTexture(o.occlusionTexture.index,t)),o.emissiveTexture&&(0!==(o.emissiveTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):p=await this.getTexture(o.emissiveTexture.index,t)),s.metallicRoughnessTexture&&(0!==(s.metallicRoughnessTexture.texCoord||0)?r.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):d=await this.getTexture(s.metallicRoughnessTexture.index,t));const f=null!=e.material?e.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:i,normalTexture:u,name:o.name,id:f,occlusionTexture:c,emissiveTexture:p,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:d,vertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode}}return n}async getTexture(e,t){const r=this.errorContext,n=this.json.textures[e],o=Object(_fillDefaults_js__WEBPACK_IMPORTED_MODULE_10__["textureSampler"])(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const a=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(a.uri)n=await this.context.loadImage(this.resolveUri(a.uri),t);else{r.errorUnsupportedIf(null==a.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==a.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[a.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await async function(e,t){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),a=new Image;a.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in a?a.decode().then((()=>r(a)),(()=>r(a))):r(a)})),a.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e)})),a.src=s}))}(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),a.mimeType)}i={data:n,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:a.name,id:e},this.textureCache.set(e,i)}return i}getNodeTransform(e){if(void 0===e)return V;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),r,n.matrix):n.translation||n.rotation||n.scale?(t=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(r),n.translation&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["t"])(t,t,n.translation),n.rotation&&(_[3]=Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_8__["g"])(_,n.rotation),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["r"])(t,t,_[3],_)),n.scale&&Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["s"])(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t}wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}resolveUri(e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeAbsolute"])(e,this.baseUri)}getNodeParent(e){return this.nodeParentMap.get(e)}checkVersionSupported(){const e=_core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"].parse(this.json.asset.version,"glTF");P.validate(e)}checkRequiredExtensionsSupported(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))}}const P=new _core_Version_js__WEBPACK_IMPORTED_MODULE_3__["Version"](2,0,"glTF"),V=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["k"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),Math.PI/2),_=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},q={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};async function J(e){return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["create"])(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}const z={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};


/***/ }),

/***/ "HCB5":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec43.js ***!
  \***************************************************/
/*! exports provided: c, f, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return d; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,t,d){const f=e.typedBuffer,n=e.typedBufferStride,r=t.typedBuffer,o=t.typedBufferStride,c=d?d.count:t.count;let u=(d&&d.dstIndex?d.dstIndex:0)*n,s=(d&&d.srcIndex?d.srcIndex:0)*o;for(let e=0;e<c;++e)f[u]=r[s],f[u+1]=r[s+1],f[u+2]=r[s+2],f[u+3]=r[s+3],u+=n,s+=o}function t(e,t,d,f,n,r){const o=e.typedBuffer,c=e.typedBufferStride,u=r?r.count:e.count;let s=(r&&r.dstIndex?r.dstIndex:0)*c;for(let e=0;e<u;++e)o[s]=t,o[s+1]=d,o[s+2]=f,o[s+3]=n,s+=c}var d=Object.freeze({__proto__:null,copy:e,fill:t});


/***/ }),

/***/ "Hizz":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/typedArrayUtil.js */ "ohva");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/Evented.js */ "zm0L");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../support/requestUtils.js */ "Ioo4");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/* harmony import */ var _webgl_Util_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../webgl/Util.js */ "hTmG");
/* harmony import */ var _glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./glUtil3D.js */ "1ff1");
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../webgl/capabilities/isWebGL2Context.js */ "xRQN");
/* harmony import */ var _DDSUtil_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./DDSUtil.js */ "ekr9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class E{constructor(e,t,r){this.data=e,this.glTexture=null,this.powerOfTwoStretchInfo=null,this.loadingPromise=null,this.loadingController=null,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__["default"],this.data=e,this.id=E.idGen.gen(t),this.params=r||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:10497,t:10497},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1,this.estimatedTexMemRequired=E.estimateTexMemRequired(this.data,this.params),this.startPreload()}startPreload(){const e=this.data;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e)||(e instanceof HTMLVideoElement?this.startPreloadVideoElement(e):e instanceof HTMLImageElement&&this.startPreloadImageElement(e))}startPreloadVideoElement(e){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}startPreloadImageElement(e){Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isDataProtocol"])(e.src)||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__["isBlobProtocol"])(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static estimateTexMemRequired(e,s){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e))return 0;if(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(e)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(e))return e.byteLength;const{width:a,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?E.getDataDimensions(e):s;return(s.mipmap?4/3:1)*a*o*(s.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}createDescriptor(e){const t=this.params.mipmap&&!this.params.disableAnisotropy;return{target:3553,pixelFormat:6408,dataType:5121,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?9987:9729,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:t?e.parameters.maxMaxAnisotropy:void 0}}load(e,a){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.glTexture))return this.glTexture;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.loadingPromise))return this.loadingPromise;const o=this.data;return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(o)?(this.glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,this.createDescriptor(e),null),e.bindTexture(this.glTexture,0),this.glTexture):"string"==typeof o?this.loadFromURL(e,a,o):o instanceof Image?this.loadFromImageElement(e,a,o):o instanceof HTMLVideoElement?this.loadFromVideoElement(e,a,o):o instanceof ImageData||o instanceof HTMLCanvasElement?this.loadFromImage(e,o,a):(Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(o)||Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(o))&&this.params.encoding===E.DDS_ENCODING?this.loadFromDDSData(e,o):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isUint8Array"])(o)?this.loadFromPixelData(e,o):Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__["isArrayBuffer"])(o)?this.loadFromPixelData(e,new Uint8Array(o)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this.glTexture))return r;if(this.data.readyState<2||r===this.data.currentTime)return r;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:s}=this.powerOfTwoStretchInfo;s.setData(this.data),this.drawStretchedTexture(e,t,r,i,s,this.glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this.glTexture.descriptor;e!==r||t!==i?this.glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this.glTexture.setData(this.data)}return this.glTexture.descriptor.hasMipmap&&this.glTexture.generateMipmap(),this.data.currentTime}loadFromDDSData(e,t){return this.glTexture=Object(_DDSUtil_js__WEBPACK_IMPORTED_MODULE_17__["createDDSTexture"])(e,this.createDescriptor(e),t,this.params.mipmap),e.bindTexture(this.glTexture,0),this.glTexture}loadFromPixelData(e,t){Object(_Util_js__WEBPACK_IMPORTED_MODULE_10__["assert"])(this.params.width>0&&this.params.height>0);const r=this.createDescriptor(e);return r.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,r.width=this.params.width,r.height=this.params.height,this.glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,r,t),e.bindTexture(this.glTexture,0),this.glTexture}async loadAsync(e){const t=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortController"])();this.loadingController=t;const r=e(t.signal);this.loadingPromise=r;const i=()=>{this.loadingController===t&&(this.loadingController=null),this.loadingPromise===r&&(this.loadingPromise=null)};return r.then(i,i),r}loadFromURL(e,t,r){return this.loadAsync((async i=>{const s=await Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_9__["requestImage"])(r,{signal:i});return this.loadFromImage(e,s,t)}))}loadFromImageElement(e,t,r){return r.complete?this.loadFromImage(e,r,t):this.loadAsync((async i=>{const s=await Object(_support_requestUtils_js__WEBPACK_IMPORTED_MODULE_8__["loadImageAsync"])(r,r.src,!1,i);return this.loadFromImage(e,s,t)}))}loadFromVideoElement(e,t,r){return r.readyState>=2?this.loadFromImage(e,r,t):this.loadFromVideoElementAsync(e,t,r)}loadFromVideoElementAsync(e,t,r){return this.loadAsync((i=>Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["create"])(((o,n)=>{const h=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",d),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(u)&&u.remove()},l=()=>{r.readyState>=2&&(h(),o(this.loadFromImage(e,r,t)))},d=e=>{h(),n(e||new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",d);const u=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["onAbort"])(i,(()=>d(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__["createAbortError"])())))}))))}loadFromImage(e,t,r){const i=E.getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const s=this.createDescriptor(e);return s.pixelFormat=3===this.params.components?6407:6408,!this.requiresPowerOfTwo(e,s)||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["isPowerOfTwo"])(i.width)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["isPowerOfTwo"])(i.height)?(s.width=i.width,s.height=i.height,this.glTexture=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,s,t),e.bindTexture(this.glTexture,0),this.glTexture):(this.glTexture=this.makePowerOfTwoTexture(e,t,i,s,r),e.bindTexture(this.glTexture,0),this.glTexture)}requiresPowerOfTwo(e,t){const r=33071,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!Object(_webgl_capabilities_isWebGL2Context_js__WEBPACK_IMPORTED_MODULE_16__["default"])(e.gl)&&(t.hasMipmap||!i)}makePowerOfTwoTexture(t,r,i,s,a){const{width:o,height:n}=i,h=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["nextHighestPowerOfTwo"])(o),l=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_7__["nextHighestPowerOfTwo"])(n);let m;switch(s.width=h,s.height=l,this.params.powerOfTwoResizeMode){case 2:s.textureCoordinateScaleFactor=[o/h,n/l],m=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](t,s),m.updateData(0,0,0,o,n,r);break;case 1:case null:case void 0:m=this.stretchToPowerOfTwo(t,r,s,a);break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(this.params.powerOfTwoResizeMode)}return s.hasMipmap&&m.generateMipmap(),m}stretchToPowerOfTwo(e,t,r,i){const s=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,r),a=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_15__["default"](e,{colorTarget:0,depthStencilTarget:0},s),o=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_11__["default"](e,{target:3553,pixelFormat:r.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),n=Object(_glUtil3D_js__WEBPACK_IMPORTED_MODULE_13__["createQuadVAO"])(e);return this.drawStretchedTexture(e,i,a,n,o,s),this.requiresFrameUpdates?this.powerOfTwoStretchInfo={vao:n,sourceTexture:o,framebuffer:a}:(n.dispose(!0),o.dispose(),a.detachColorTexture(),e.bindFramebuffer(null),a.dispose()),s}drawStretchedTexture(e,t,r,i,s,a){e.bindFramebuffer(r);const o=e.getViewport();e.setViewport(0,0,a.descriptor.width,a.descriptor.height);const n=t.program;e.bindProgram(n),n.setUniform4f("color",1,1,1,1),n.setUniform1i("tex",0),e.bindTexture(s,0),e.bindVAO(i),e.setPipelineState(t.pipeline),e.drawArrays(5,0,Object(_webgl_Util_js__WEBPACK_IMPORTED_MODULE_12__["vertexCount"])(i,"geometry")),e.bindFramebuffer(null),e.setViewport(o.x,o.y,o.width,o.height)}unload(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this.powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this.glTexture=null,this.powerOfTwoStretchInfo=null}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.glTexture)&&(this.glTexture.dispose(),this.glTexture=null),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this.loadingController)){const e=this.loadingController;this.loadingController=null,this.loadingPromise=null,e.abort()}this.events.emit("unloaded")}}E.idGen=new _IdGen_js__WEBPACK_IMPORTED_MODULE_14__["IdGen"],E.DDS_ENCODING="image/vnd-ms.dds";/* harmony default export */ __webpack_exports__["default"] = (E);


/***/ }),

/***/ "IEcw":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vector.js ***!
  \****************************************************/
/*! exports provided: a, b, c, p, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return j; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c(t,n,r){const a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t,n)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t,t);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,t,a)}function i(t,n){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(t,n)/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(t)}function u(n,s){const a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(n,s)/(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(n)*Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(s));return-Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(a)}function f(n,r,s){Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(p,n),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(m,r);const c=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(p,m),i=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["acosClamped"])(c),u=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["c"])(p,p,m);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(u,s)<0?2*Math.PI-i:i}const p=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),m=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])();var j=Object.freeze({__proto__:null,projectPoint:c,projectPointSignedLength:i,angle:u,angleAroundAxis:f});


/***/ }),

/***/ "IRkY":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/core/ObjectStack.js ***!
  \*******************************************************/
/*! exports provided: default, ObjectStack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectStack", function() { return s; });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "srIe");
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextTick.js */ "KrcW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class s{constructor(t){this.allocator=t,this.items=[],this.itemsPtr=0,this.tickHandle=_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"].before((()=>this.reset())),this.grow()}destroy(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.tickHandle)),this.items=Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["nullifyNonnullableForDispose"])(this.items)}get(){return 0===this.itemsPtr&&Object(_nextTick_js__WEBPACK_IMPORTED_MODULE_1__["default"])((()=>{})),this.itemsPtr===this.items.length&&this.grow(),this.items[this.itemsPtr++]}reset(){const t=Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*e);this.items.length=Math.min(t,this.items.length),this.itemsPtr=0}grow(){for(let t=0;t<Math.max(8,Math.min(this.items.length,e));t++)this.items.push(this.allocator())}}const e=1024;/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "IvV4":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js ***!
  \**************************************************************************/
/*! exports provided: createTextureResources, load, processLoadResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextureResources", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processLoadResult", function() { return A; });
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/lang.js */ "f/qv");
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/asyncUtils.js */ "eSsm");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _core_Version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../core/Version.js */ "VJrH");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../support/requestImageUtils.js */ "LbAs");
/* harmony import */ var _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/GeometryData.js */ "1PqF");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const b=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function h(e,n){const a=await async function(e,n){const a=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)&&n.streamDataRequester;if(a)return async function(e,t,r){const n=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["result"])(t.request(e,"json",r));if(!0===n.ok)return n.value;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(n.error),void v(n.error.details.url)}(e,a,n);const o=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_6__["result"])(Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrap"])(n)));if(!0===o.ok)return o.value.data;return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAbortError"])(o.error),void v(o.error)}(e,n);return{resource:a,textures:await M(a.textureDefinitions,n)}}function v(e){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("",`Request for object resource failed: ${e}`)}function j(e){const t=e.params,r=t.topology;let n=!0;switch(t.vertexAttributes||(b.warn("Geometry must specify vertex attributes"),n=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(b.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),n=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(b.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),n=!1)):(b.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),n=!1)}}else b.warn("Indexed geometries must specify faces"),n=!1;break}default:b.warn(`Unsupported topology '${r}'`),n=!1}e.params.material||(b.warn("Geometry requires material"),n=!1);const a=e.params.vertexAttributes;for(const e in a){a[e].values||(b.warn("Geometries with externally defined attributes are not yet supported"),n=!1)}return n}function A(r,n){const a=[],s=[],o=[],i=[],u=r.resource,l=_core_Version_js__WEBPACK_IMPORTED_MODULE_8__["Version"].parse(u.version||"1.0","wosr");P.validate(l);const m=u.model.name,f=u.model.geometries,d=u.materialDefinitions,b=r.textures;let h=0;const v=new Map;for(let r=0;r<f.length;r++){const u=f[r];if(!j(u))continue;const l=T(u),p=u.params.vertexAttributes,A={};for(const e in p){const t=p[e],r=t.values;A[e]={data:r,size:t.valuesPerElement}}const U={};if("PerAttributeArray"===u.params.topology){const e=k(A.position.data.length/A.position.size);for(const t in A)U[t]=e}else{const e=u.params.faces;for(const t in e)U[t]=new Uint32Array(e[t].values)}const M=b&&b[l.texture];if(M&&!v.has(l.texture)){const{image:e,params:t}=M,r=new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e,m,t);i.push(r),v.set(l.texture,r)}const P=v.get(l.texture),B=P?P.id:void 0;let E=o[l.material]?o[l.material][l.texture]:null;if(!E){const r=d[l.material.substring(l.material.lastIndexOf("/")+1)].params;1===r.transparency&&(r.transparency=0);const a=M&&M.alphaChannelUsage,s=r.transparency>0||"transparency"===a||"maskAndTransparency"===a,i={ambient:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(r.diffuse),diffuse:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_7__["d"])(r.diffuse),opacity:1-(r.transparency||0),transparent:s,textureAlphaMode:M?I(M.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:B,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:r.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(n)&&n.materialParamsMixin&&Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["mixin"])(i,n.materialParamsMixin),E=new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterial"](i,m),o[l.material]||(o[l.material]={}),o[l.material][l.texture]=E}s.push(E);const q=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__["GeometryData"](A,U),m);h+=U.position?U.position.length:0,a.push(q)}return{name:m,stageResources:{textures:i,materials:s,geometries:a},pivotOffset:u.model.pivotOffset,boundingBox:U(a),numberOfVertices:h,lodThreshold:null}}function U(e){const t=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["empty"])();return e.forEach((e=>{const r=e.boundingInfo;Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithVec3"])(t,r.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_9__["expandWithVec3"])(t,r.getBBMax())})),t}async function M(e,r){const n=[];for(const a in e){const s=e[a],i=s.images[0].data;if(!i){b.warn("Externally referenced texture data is not yet supported");continue}const u=s.encoding+";base64,"+i,l="/textureDefinitions/"+a,c={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0},p=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r)&&r.disableTextures?Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["resolve"])(null):Object(_support_requestImageUtils_js__WEBPACK_IMPORTED_MODULE_10__["requestImage"])(u,r);n.push(p.then((e=>({refId:l,image:e,params:c,alphaChannelUsage:"rgba"===s.channels?s.alphaChannelUsage||"transparency":"none"}))))}const a=await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])(n),s={};for(const e of a)s[e.refId]=e;return s}function I(e){switch(e){case"mask":return 2;case"maskAndTransparency":return 3;case"none":return 1;case"transparency":default:return 0}}function T(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}function k(e){const t=new Uint32Array(e);for(let r=0;r<e;r++)t[r]=r;return t}const P=new _core_Version_js__WEBPACK_IMPORTED_MODULE_8__["Version"](1,2,"wosr");


/***/ }),

/***/ "J1lp":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/AnalyticalSkyModel.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: AnalyticalSkyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticalSkyModel", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){const a=t.fragment.code;a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
    {
      return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
    }
    `),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float integratedRadiance(float cosTheta2, float roughness)
    {
      return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
    }
    `),a.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
    {
      float cosTheta2 = 1.0 - RdotNG * RdotNG;
      float intRadTheta = integratedRadiance(cosTheta2, roughness);

      // Calculate the integrated directional radiance of the ground and the sky
      float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
      float sky = 2.0 - ground;
      return (ground * ambientGround + sky * ambientSky) * 0.5;
    }
    `)}


/***/ }),

/***/ "K2Cv":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js ***!
  \**************************************************************************/
/*! exports provided: DefaultLoadingContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLoadingContext", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../request.js */ "Lqtk");
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/asyncUtils.js */ "eSsm");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class n{constructor(r){this.streamDataRequester=r}async loadJSON(r,e){return this.load("json",r,e)}async loadBinary(r,e){return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["isDataProtocol"])(r)?(Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAborted"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__["dataToArrayBuffer"])(r)):this.load("binary",r,e)}async loadImage(r,e){return this.load("image",r,e)}async load(o,s,t){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this.streamDataRequester))return(await Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(s,{responseType:c[o]})).data;const n=await Object(_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_5__["result"])(this.streamDataRequester.request(s,o,t));if(!0===n.ok)return n.value;throw Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["throwIfAbortError"])(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("",`Request for resource failed: ${n.error}`)}}const c={image:"image",binary:"array-buffer",json:"json"};


/***/ }),

/***/ "KQYO":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientLighting.glsl.js ***!
  \********************************************************************************************************************/
/*! exports provided: EvaluateAmbientLighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientLighting", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,t){const e=n.fragment,a=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===a?(e.uniforms.add("lightingAmbientSH0","vec3"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):1===a?(e.uniforms.add("lightingAmbientSH_R","vec4"),e.uniforms.add("lightingAmbientSH_G","vec4"),e.uniforms.add("lightingAmbientSH_B","vec4"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec4 sh0 = vec4(
          0.282095,
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y
        );
        vec3 ambientLight = vec3(
          dot(lightingAmbientSH_R, sh0),
          dot(lightingAmbientSH_G, sh0),
          dot(lightingAmbientSH_B, sh0)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `)):2===a&&(e.uniforms.add("lightingAmbientSH0","vec3"),e.uniforms.add("lightingAmbientSH_R1","vec4"),e.uniforms.add("lightingAmbientSH_G1","vec4"),e.uniforms.add("lightingAmbientSH_B1","vec4"),e.uniforms.add("lightingAmbientSH_R2","vec4"),e.uniforms.add("lightingAmbientSH_G2","vec4"),e.uniforms.add("lightingAmbientSH_B2","vec4"),e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
        vec3 ambientLight = 0.282095 * lightingAmbientSH0;

        vec4 sh1 = vec4(
          0.488603 * normal.x,
          0.488603 * normal.z,
          0.488603 * normal.y,
          1.092548 * normal.x * normal.y
        );
        vec4 sh2 = vec4(
          1.092548 * normal.y * normal.z,
          0.315392 * (3.0 * normal.z * normal.z - 1.0),
          1.092548 * normal.x * normal.z,
          0.546274 * (normal.x * normal.x - normal.y * normal.y)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R1, sh1),
          dot(lightingAmbientSH_G1, sh1),
          dot(lightingAmbientSH_B1, sh1)
        );
        ambientLight += vec3(
          dot(lightingAmbientSH_R2, sh2),
          dot(lightingAmbientSH_G2, sh2),
          dot(lightingAmbientSH_B2, sh2)
        );
        return ambientLight * (1.0 - ambientOcclusion);
      }
    `),1!==t.pbrMode&&2!==t.pbrMode||e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);

        vec3 calculateAmbientRadiance(float ambientOcclusion)
        {
          vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
          return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
        }
      `))}


/***/ }),

/***/ "L5gG":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ScreenSizePerspective.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: ScreenSizePerspective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSizePerspective", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(r){r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float screenSizePerspectiveMinSize(float size, vec4 factor) {
      float nonZeroSize = 1.0 - step(size, 0.0);

      return (
        factor.z * (
          1.0 +
          // Multiply by nzs ensures if size is 0, then we ignore proportionally scaled padding
          nonZeroSize *
          2.0 * factor.w / (
            size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
          )
        )
      );
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
      return absCosAngle * absCosAngle * absCosAngle;
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
      return vec4(
        min(params.x / (distanceToCamera - params.y), 1.0),
        screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
        params.z,
        params.w
      );
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
      return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorFloat(
        size,
        screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
      );
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
      return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
    }
  `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
      return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
    }
  `)}!function(e){e.bindUniforms=function(e,a){if(a.screenSizePerspective){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(a.screenSizePerspective,e,"screenSizePerspective");const s=a.screenSizePerspectiveAlignment||a.screenSizePerspective;Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_1__["bindScreenSizePerspective"])(s,e,"screenSizePerspectiveAlignment")}}}(a||(a={}));


/***/ }),

/***/ "NILb":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/frustum.js ***!
  \*****************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, p, r */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return w; });
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "15Hh");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vec4f64.js */ "D8Ta");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec4.js */ "dXfX");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plane.js */ "cKtl");
/* harmony import */ var _clipRay_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clipRay.js */ "Gbm8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d(s){if(s){const{planes:r,points:e}=s;return{planes:[Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[0]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[1]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[2]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[3]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[4]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(r[5])],points:[Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[0]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[1]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[2]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[3]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[4]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[5]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[6]),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e[7])]}}return{planes:[Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["c"])()],points:[Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()]}}function P(t,r=d()){return R(t.planes,t.points,r)}function R(t,r,e=d()){for(let r=0;r<6;r++)Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["h"])(t[r],e.planes[r]);for(let t=0;t<8;t++)Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(e.points[t],r[t]);return e}function S(t,r,s=d()){const{points:a}=s,i=Object(_mat4_js__WEBPACK_IMPORTED_MODULE_2__["m"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sm4d"].get(),r,t);Object(_mat4_js__WEBPACK_IMPORTED_MODULE_2__["a"])(i,i);for(let t=0;t<8;++t){const r=Object(_vec4_js__WEBPACK_IMPORTED_MODULE_5__["t"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv4d"].get(),L[t],i);Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["s"])(a[t],r[0]/r[3],r[1]/r[3],r[2]/r[3])}return w(s),s}function w(t){const{planes:r,points:s}=t;Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[4],s[0],s[3],r[0]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[1],s[5],s[6],r[1]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[4],s[5],s[1],r[2]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[3],s[2],s[6],r[3]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[0],s[1],s[2],r[4]),Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["j"])(s[5],s[4],s[7],r[5])}function x(t,r){for(let s=0;s<6;s++)if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["k"])(t[s],r))return!1;return!0}function A(t,r){return C(t,Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["f"])(r,M.get()))}function B(t,r){for(let s=0;s<6;s++){const e=t[s];if(!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["l"])(e,r))return!1}return!0}function O(t,r,s){return C(t,Object(_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["a"])(r,s,M.get()))}function q(t,r){for(let s=0;s<6;s++){if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["m"])(t[s],r)>0)return!1}return!0}function z(t,r){for(let s=0;s<6;s++)if(Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["o"])(t[s],r))return!1;return!0}function C(t,r){for(let s=0;s<6;s++)if(!Object(_plane_js__WEBPACK_IMPORTED_MODULE_7__["q"])(t[s],r))return!1;return!0}const I={bottom:[5,1,0,4],near:[0,1,2,3],far:[5,4,7,6],right:[1,5,6,2],left:[4,0,3,7],top:[7,3,2,6]},L=[Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1,-1,-1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1,-1,-1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1,1,-1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1,1,-1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1,-1,1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1,-1,1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(1,1,1,1),Object(_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__["b"])(-1,1,1,1)],M=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"](_clipRay_js__WEBPACK_IMPORTED_MODULE_8__["b"]);var V=Object.freeze({__proto__:null,create:d,copy:P,fromValues:R,fromMatrix:S,recomputePlanes:w,intersectsSphere:x,intersectsRay:A,intersectClipRay:B,intersectsLineSegment:O,intersectsPoint:q,intersectsAABB:z,planePointIndices:I});


/***/ }),

/***/ "NbNv":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js ***!
  \*************************************************************************/
/*! exports provided: Material, materialParametersDefaults, materialPredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialParametersDefaults", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialPredicate", function() { return n; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/* harmony import */ var _materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../materials/internal/MaterialUtil.js */ "fFEv");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a{constructor(e,t,s){this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__["Default3D"],this.id=a._idGen.gen(e),this._params=Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["copyParameters"])(t,s),this.validateParameterValues(this._params)}dispose(){}get params(){return this._params}update(){return!1}setParameterValues(e){Object(_materials_internal_MaterialUtil_js__WEBPACK_IMPORTED_MODULE_3__["updateParameters"])(this._params,e)&&(this.validateParameterValues(this._params),this.parametersChanged())}validateParameterValues(){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}isVisibleInPass(e){return!0}get renderOccluded(){return this.params.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.materialRepository)&&this.materialRepository.materialChanged(this)}}function n(e,r){return e.isVisible()&&e.isVisibleInPass(r.pass)&&0!=(e.renderOccluded&r.renderOccludedMask)}a._idGen=new _IdGen_js__WEBPACK_IMPORTED_MODULE_2__["IdGen"];const d={renderOccluded:1};


/***/ }),

/***/ "NiZE":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js ***!
  \**********************************************************************************************************/
/*! exports provided: MixExternalColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MixExternalColor", function() { return i; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorConversion.glsl.js */ "Q3fD");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(i){i.include(_ColorConversion_glsl_js__WEBPACK_IMPORTED_MODULE_1__["ColorConversion"]),i.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(1)}) {
        return allMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(3)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(2)}) {
        return internalMixed;
      }
      else if (mode == ${_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(3)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}


/***/ }),

/***/ "OIYib":
/*!******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/interfaces.js ***!
  \******************************************************************************************/
/*! exports provided: glsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "glsl", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,...n){let o="";for(let r=0;r<n.length;r++)o+=t[r]+n[r];return o+=t[t.length-1],o}!function(t){t.int=function(t){return Math.round(t).toString()},t.float=function(t){return t.toPrecision(8)}}(t||(t={}));


/***/ }),

/***/ "PDsV":
/*!***********************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/loader.js ***!
  \***********************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return u; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DefaultErrorContext.js */ "QgcX");
/* harmony import */ var _LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoaderResult.js */ "exm0");
/* harmony import */ var _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./internal/Resource.js */ "Gze9");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
let l=0;async function u(s,a,i={}){const u=await _internal_Resource_js__WEBPACK_IMPORTED_MODULE_5__["Resource"].load(s,x,a,i),p="gltf_"+l++,f={lods:[],materials:new Map,textures:new Map,meta:c(u)},T=!(!u.json.asset.extras||"symbolResource"!==u.json.asset.extras.ESRI_type);return await async function(e,t){const r=e.json,s=r.scenes[r.scene||0].nodes,a=s.length>1;for(const e of s){const t=r.nodes[e],s=[i(e,0)];if(m(t)&&!a){const e=t.extensions.MSFT_lod.ids;s.push(...e.map(((e,t)=>i(e,t+1))))}await Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["all"])(s)}async function i(o,s){const a=r.nodes[o],n=e.getNodeTransform(o);if(x.warnUnsupportedIf(null!=a.weights,"Morph targets are not supported."),null!=a.mesh){const e=r.meshes[a.mesh];for(const o of e.primitives)await t(o,n,s,e.name)}for(const e of a.children||[])await i(e,s)}}(u,(async(o,s,a,n)=>{const l=void 0!==o.mode?o.mode:4,c=function(e){switch(e){case 4:case 5:case 6:return e;default:return null}}(l);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(c))return void x.warnUnsupported("Unsupported primitive mode ("+h[l]+"). Skipping primitive.");if(!u.hasPositions(o))return void x.warn("Skipping primitive without POSITION vertex attribute.");const m=await u.getMaterial(o,i),T={transform:Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(s),attributes:{position:await u.getPositionData(o,i),normal:null,texCoord0:null,color:null,tangent:null},indices:await u.getIndexData(o,i),primitiveType:c,material:d(f,m,p)};u.hasNormals(o)&&(T.attributes.normal=await u.getNormalData(o,i)),u.hasTangents(o)&&(T.attributes.tangent=await u.getTangentData(o,i)),u.hasTextureCoordinates(o)&&(T.attributes.texCoord0=await u.getTextureCoordinates(o,i)),u.hasVertexColors(o)&&(T.attributes.color=await u.getVertexColors(o,i));let w=null;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.meta)&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f.meta.ESRI_lod)&&"screenSpaceRadius"===f.meta.ESRI_lod.metric&&(w=f.meta.ESRI_lod.thresholds[a]),f.lods[a]=f.lods[a]||{parts:[],name:n,lodThreshold:w},f.lods[a].parts.push(T)})),{model:f,meta:{isEsriSymbolResource:T,uri:u.uri},customMeta:{}}}function c(t){const o=t.json;let r=null;return o.nodes.forEach((t=>{const o=t.extras;Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o)&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(r=o)})),r}function m(e){return e.extensions&&e.extensions.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,t,o){const r=t=>{const r=`${o}_tex_${t&&t.id}${t&&t.name?"_"+t.name:""}`;if(t&&!e.textures.has(r)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__["makeTextureSource"])(t.data,{wrap:{s:p(t.wrapS),t:p(t.wrapT)},mipmap:f.some((e=>e===t.minFilter)),noUnpackFlip:!0});e.textures.set(r,o)}return r},s=`${o}_mat_${t.id}_${t.name}`;if(!e.materials.has(s)){const o=Object(_LoaderResult_js__WEBPACK_IMPORTED_MODULE_4__["makeMaterialParameters"])({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?r(t.colorTexture):void 0,textureNormal:t.normalTexture?r(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?r(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?r(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?r(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor});e.materials.set(s,o)}return s}function p(e){if(33071===e||33648===e||10497===e)return e;x.error(`Unexpected TextureSampler WrapMode: ${e}`)}const x=new _DefaultErrorContext_js__WEBPACK_IMPORTED_MODULE_3__["DefaultErrorContext"],f=[9987,9985],h=["POINTS","LINES","LINE_LOOP","LINE_STRIP","TRIANGLES","TRIANGLE_STRIP","TRIANGLE_FAN"];


/***/ }),

/***/ "Q3fD":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: ColorConversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorConversion", function() { return c; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function c(c){c.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 premultiplyAlpha(vec4 v) {
      return vec4(v.rgb * v.a, v.a);
    }

    // Note: the min in the last line has been added to fix an instability in chrome.
    // See https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/23911
    // With proper floating point handling, the value could never be >1.
    vec3 rgb2hsv(vec3 c) {
      vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
      vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
      vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);

      float d = q.x - min(q.w, q.y);
      float e = 1.0e-10;
      return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float rgb2v(vec3 c) {
      return max(c.x, max(c.y, c.z));
    }
  `)}


/***/ }),

/***/ "QFRQ":
/*!*************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/ray.js ***!
  \*************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, r, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return j; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/screenUtils.js */ "qRWG");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vec2.js */ "M0lq");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(r){return r?{origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r.origin),direction:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["b"])(r.direction)}:{origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),direction:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])()}}function j(r,n){const e=E.get();return e.origin=r,e.direction=n,e}function R(r,n=l()){return S(r.origin,r.direction,n)}function b(r,n,e=l()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.origin,r),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e.direction,n,r),e}function S(r,n,e=l()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.origin,r),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(e.direction,n),e}function v(r,e,o=l()){return y(r,r.screenToRender(e,Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get())),o)}function y(e,o,t=l()){const c=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(Object(_vec2_js__WEBPACK_IMPORTED_MODULE_5__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),o));if(c[2]=0,!e.unprojectFromRenderScreen(c,t.origin))return null;const s=Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(Object(_vec2_js__WEBPACK_IMPORTED_MODULE_5__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),o));s[2]=1;const a=e.unprojectFromRenderScreen(s,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get());return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)?null:(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(t.direction,a,t.origin),t)}function w(r,e,o=l()){return _(r,r.screenToRender(e,Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["castRenderScreenPointArray3"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get())),o)}function _(n,e,o=l()){Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(o.origin,n.eye);const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),e[0],e[1],1),a=n.unprojectFromRenderScreen(s,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get());return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a)?null:(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(o.direction,a,o.origin),o)}function k(r,n){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),r.direction),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_6__["sv3d"].get(),n,r.origin));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(e,e)}function F(r,n){return Math.sqrt(k(r,n))}function h(r,n,e){const o=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(r.direction,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(e,n,r.origin));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(e,r.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(e,r.direction,o)),e}function A(){return{origin:null,direction:null}}const E=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__["ObjectStack"](A);var O=Object.freeze({__proto__:null,create:l,wrap:j,copy:R,fromPoints:b,fromValues:S,fromScreen:v,fromRender:y,fromScreenAtEye:w,fromRenderAtEye:_,distance2:k,distance:F,closestPoint:h,createWrapper:A});


/***/ }),

/***/ "QgcX":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/DefaultErrorContext.js ***!
  \************************************************************************/
/*! exports provided: DefaultErrorContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultErrorContext", function() { return t; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.glTF");class t{error(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("gltf-loader-error",r)}errorUnsupported(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("gltf-loader-unsupported-feature",r)}errorUnsupportedIf(r,e){r&&this.errorUnsupported(e)}assert(r,e){r||this.error(e)}warn(r){o.warn(r)}warnUnsupported(r){this.warn("[Unsupported Feature] "+r)}warnUnsupportedIf(r,e){r&&this.warnUnsupported(e)}}


/***/ }),

/***/ "SMQs":
/*!********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/support/buffer/utils.js ***!
  \********************************************************************/
/*! exports provided: mat3, mat4, scalar, vec2, vec3, vec4, createBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBuffer", function() { return r; });
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types.js */ "grla");
/* harmony import */ var _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/mat32.js */ "wMH/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat3", function() { return _chunks_mat32_js__WEBPACK_IMPORTED_MODULE_1__["m"]; });

/* harmony import */ var _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/mat42.js */ "g84+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mat4", function() { return _chunks_mat42_js__WEBPACK_IMPORTED_MODULE_2__["m"]; });

/* harmony import */ var _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/scalar.js */ "fPvx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalar", function() { return _chunks_scalar_js__WEBPACK_IMPORTED_MODULE_3__["s"]; });

/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/vec22.js */ "3Fbu");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec2", function() { return _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_4__["v"]; });

/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "TJZZ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec3", function() { return _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_5__["v"]; });

/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "HCB5");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vec4", function() { return _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_6__["v"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*Object(_types_js__WEBPACK_IMPORTED_MODULE_0__["elementTypeSize"])(s.ElementType)))}


/***/ }),

/***/ "TJZZ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec33.js ***!
  \***************************************************/
/*! exports provided: c, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,c=t.typedBufferStride,o=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*c;for(let e=0;e<o;++e)d[u]=n[p],d[u+1]=n[p+1],d[u+2]=n[p+2],u+=f,p+=c}var t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "Tbkp":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: Transform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transform", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,o){o.linearDepth?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
      vec4 eye = view * vec4(pos, 1.0);
      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
      return proj * eye;
    }
    `):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
      // Make sure the order of operations is the same as in transformPositionWithDepth.
      return proj * (view * vec4(pos, 1.0));
    }
    `)}


/***/ }),

/***/ "UBvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: RgbaFloatEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RgbaFloatEncoding", function() { return e; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e){e.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    // This is the maximum float value representable as 32bit fixed point,
    // it is rgba2float(vec4(1)) inlined.
    const float MAX_RGBA_FLOAT =
      255.0 / 256.0 +
      255.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 +
      255.0 / 256.0 / 256.0 / 256.0 / 256.0;

    // Factors to convert to fixed point, i.e. factors (256^0, 256^1, 256^2, 256^3)
    const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

    vec4 float2rgba(const float value) {
      // Make sure value is in the domain we can represent
      float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

      // Decompose value in 32bit fixed point parts represented as
      // uint8 rgba components. Decomposition uses the fractional part after multiplying
      // by a power of 256 (this removes the bits that are represented in the previous
      // component) and then converts the fractional part to 8bits.
      vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

      // Convert uint8 values (from 0 to 255) to floating point representation for
      // the shader
      const float toU8AsFloat = 1.0 / 255.0;

      return fixedPointU8 * toU8AsFloat;
    }

    // Factors to convert rgba back to float
    const vec4 RGBA_2_FLOAT_FACTORS = vec4(
      255.0 / (256.0),
      255.0 / (256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0),
      255.0 / (256.0 * 256.0 * 256.0 * 256.0)
    );

    float rgba2float(vec4 rgba) {
      // Convert components from 0->1 back to 0->255 and then
      // add the components together with their corresponding
      // fixed point factors, i.e. (256^1, 256^2, 256^3, 256^4)
      return dot(rgba, RGBA_2_FLOAT_FACTORS);
    }
  `)}


/***/ }),

/***/ "UhFW":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: TextureAtlasLookup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureAtlasLookup", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){t.extensions.add("GL_EXT_shader_texture_lod"),t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    #ifndef GL_EXT_shader_texture_lod
      float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
        float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
        return max(0.0, 0.5 * log2(deltaMaxSqr));
      }
    #endif

    vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
      //[umin, vmin, umax, vmax]
      vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
      vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;

      // calculate derivative of continuous texture coordinate
      // to avoid mipmapping artifacts caused by manual wrapping in shader
      vec2 dUVdx = dFdx(textureCoordinates) * atlasScale;
      vec2 dUVdy = dFdy(textureCoordinates) * atlasScale;

      #ifdef GL_EXT_shader_texture_lod
        return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
      #else
        // use bias to compensate for difference in automatic vs desired mipmap level
        vec2 dUVdxAuto = dFdx(uvAtlas);
        vec2 dUVdyAuto = dFdy(uvAtlas);
        float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
        float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);

        return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
      #endif
    }
  `)}


/***/ }),

/***/ "VHS5":
/*!**********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/IdGen.js ***!
  \**********************************************************************/
/*! exports provided: IdGen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdGen", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(){this._count=0}gen(t){return null==t&&(t="a"),t+"_"+this._count++}}


/***/ }),

/***/ "VJrH":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/core/Version.js ***!
  \***************************************************/
/*! exports provided: Version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return r; });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Error.js */ "zlDU");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class r{constructor(t,r,o=""){this.major=t,this.minor=r,this._context=o}lessThan(t,r){return this.major<t||t===this.major&&this.minor<r}since(t,r){return!this.lessThan(t,r)}validate(r){if(this.major!==r.major){const o=this._context&&this._context+":",s=this._context&&this._context+" ";throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"](o+"unsupported-version",`Required major ${s}version is '${this.major}', but got '\${version.major}.\${version.minor}'`,{version:r})}}clone(){return new r(this.major,this.minor,this._context)}static parse(o,s=""){const[e,i]=o.split("."),n=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:o})}if(!i||!i.match||!i.match(n)){throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]((s&&s+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:o})}const a=parseInt(e,10),h=parseInt(i,10);return new r(a,h,s)}}


/***/ }),

/***/ "WHaQ":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js ***!
  \*************************************************************************************************************************/
/*! exports provided: DecodeSymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeSymbolColor", function() { return l; });
/* harmony import */ var _core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(l){l.vertex.code.add(_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(1)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(3)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(4)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].int(1)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ "WVfK":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js ***!
  \*************************************************************************************************/
/*! exports provided: writeBufferMat3f, writeBufferMat4f, writeBufferVec2, writeBufferVec3, writeBufferVec4, writeColor, writeDefaultAttributes, writeMultipliedColor, writeNormal, writePosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat3f", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferMat4f", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec2", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec3", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeBufferVec4", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeColor", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeDefaultAttributes", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeMultipliedColor", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writeNormal", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "writePosition", function() { return d; });
/* harmony import */ var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../support/buffer/BufferView.js */ "VeZB");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=2*e[f];n[o]=t[s],n[o+1]=t[s+1],o+=l}else for(let f=0;f<r;++f){const r=2*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],o+=l}}function r(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=3*e[f];n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],o+=l}else for(let f=0;f<r;++f){const r=3*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],o+=l}}function i(e,t,f,o,s){const n=f.typedBuffer,l=f.typedBufferStride,r=e.length;if(o*=l,null==s||1===s)for(let f=0;f<r;++f){const s=4*e[f];n[o]=t[s],n[o+1]=t[s+1],n[o+2]=t[s+2],n[o+3]=t[s+3],o+=l}else for(let f=0;f<r;++f){const r=4*e[f];for(let e=0;e<s;++e)n[o]=t[r],n[o+1]=t[r+1],n[o+2]=t[r+2],n[o+3]=t[r+3],o+=l}}function c(e,t,f,o){const s=f.typedBuffer,n=f.typedBufferStride,l=e.length;o*=n;for(let f=0;f<l;++f){const l=9*e[f];for(let e=0;e<9;++e)s[o+e]=t[l+e];o+=n}}function a(e,t,f,o){const s=f.typedBuffer,n=f.typedBufferStride,l=e.length;o*=n;for(let f=0;f<l;++f){const l=16*e[f];for(let e=0;e<16;++e)s[o+e]=t[l+e];o+=n}}function d(e,t,f,o,s,n){if(f){const l=f,r=o.typedBuffer,i=o.typedBufferStride,c=e.length;if(s*=i,null==n||1===n)for(let f=0;f<c;++f){const o=3*e[f],n=t[o],c=t[o+1],a=t[o+2];r[s]=l[0]*n+l[4]*c+l[8]*a+l[12],r[s+1]=l[1]*n+l[5]*c+l[9]*a+l[13],r[s+2]=l[2]*n+l[6]*c+l[10]*a+l[14],s+=i}else for(let f=0;f<c;++f){const o=3*e[f],c=t[o],a=t[o+1],d=t[o+2],u=l[0]*c+l[4]*a+l[8]*d+l[12],p=l[1]*c+l[5]*a+l[9]*d+l[13],B=l[2]*c+l[6]*a+l[10]*d+l[14];for(let e=0;e<n;++e)r[s]=u,r[s+1]=p,r[s+2]=B,s+=i}}else r(e,t,o,s,n)}function u(e,t,f,o,s,n){if(f){const l=f,r=o.typedBuffer,i=o.typedBufferStride,c=e.length,a=l[0],d=l[1],u=l[2],p=l[4],B=l[5],g=l[6],y=l[8],h=l[9],b=l[10],z=Math.abs(1-a*a+p*p+y*y)>1e-5||Math.abs(1-d*d+B*B+h*h)>1e-5||Math.abs(1-u*u+g*g+b*b)>1e-5;if(s*=i,null==n||1===n)for(let f=0;f<c;++f){const o=3*e[f],n=t[o],l=t[o+1],c=t[o+2];let O=a*n+p*l+y*c,S=d*n+B*l+h*c,N=u*n+g*l+b*c;if(z){const e=O*O+S*S+N*N;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);O/=t,S/=t,N/=t}}r[s+0]=O,r[s+1]=S,r[s+2]=N,s+=i}else for(let f=0;f<c;++f){const o=3*e[f],l=t[o],c=t[o+1],O=t[o+2];let S=a*l+p*c+y*O,N=d*l+B*c+h*O,k=u*l+g*c+b*O;if(z){const e=S*S+N*N+k*k;if(e<.999999&&e>1e-6){const t=Math.sqrt(e);S/=t,N/=t,k/=t}}for(let e=0;e<n;++e)r[s+0]=S,r[s+1]=N,r[s+2]=k,s+=i}}else r(e,t,o,s,n)}function p(e,t,f,o,s,n){const l=o.typedBuffer,r=o.typedBufferStride,i=e.length;if(s*=r,null==n||1===n){if(4===f)for(let f=0;f<i;++f){const o=4*e[f];l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=t[o+3],s+=r}else if(3===f)for(let f=0;f<i;++f){const o=3*e[f];l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=255,s+=r}}else if(4===f)for(let f=0;f<i;++f){const o=4*e[f];for(let e=0;e<n;++e)l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=t[o+3],s+=r}else if(3===f)for(let f=0;f<i;++f){const o=3*e[f];for(let e=0;e<n;++e)l[s]=t[o],l[s+1]=t[o+1],l[s+2]=t[o+2],l[s+3]=255,s+=r}}function B(e,t,f,o,s,n,l){const r=s.typedBuffer,i=s.typedBufferStride,c=e.length;if(n*=i,null==l||1===l){if(4===f)for(let f=0;f<c;++f){const s=4*e[f];r[n]=t[s]*o[0],r[n+1]=t[s+1]*o[1],r[n+2]=t[s+2]*o[2],r[n+3]=t[s+3]*o[3],n+=i}else if(3===f){const f=255*o[3];for(let s=0;s<c;++s){const l=3*e[s];r[n]=t[l]*o[0],r[n+1]=t[l+1]*o[1],r[n+2]=t[l+2]*o[2],r[n+3]=f,n+=i}}}else if(4===f)for(let f=0;f<c;++f){const s=4*e[f];for(let e=0;e<l;++e)r[n]=t[s]*o[0],r[n+1]=t[s+1]*o[1],r[n+2]=t[s+2]*o[2],r[n+3]=t[s+3]*o[3],n+=i}else if(3===f){const f=255*o[3];for(let s=0;s<c;++s){const c=3*e[s];for(let e=0;e<l;++e)r[n]=t[c]*o[0],r[n+1]=t[c+1]*o[1],r[n+2]=t[c+2]*o[2],r[n+3]=f,n+=i}}}function g(r,c,a,B,g,y){for(const h of c.fieldNames){const c=r.vertexAttr[h],b=r.indices[h];if(c&&b)switch(h){case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].POSITION:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);e&&d(b,c.data,a,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].NORMAL:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);e&&u(b,c.data,B,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UV0:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(2===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec2f"]);e&&l(b,c.data,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].UVMAPSPACE:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(4===c.size);const t=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"]);t&&i(b,c.data,t,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].MEANVERTEXPOSITION:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);e&&d(b,c.data,a,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND1:case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND2:case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].BOUND3:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec3f"]);e&&d(b,c.data,a,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].COLOR:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size||4===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"]);e&&p(b,c.data,c.size,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].SYMBOLCOLOR:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(3===c.size||4===c.size);const e=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4u8"]);e&&p(b,c.data,c.size,e,y);break}case _lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["VertexAttrConstants"].TANGENT:{Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__["assert"])(4===c.size);const t=g.getField(h,_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__["BufferViewVec4f"]);t&&i(b,c.data,t,y);break}}}}


/***/ }),

/***/ "WiJz":
/*!*************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../support/mathUtils.js */ "aAs6");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/* harmony import */ var _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GeometryRecord.js */ "aX5l");
/* harmony import */ var _Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Object3DStateSet.js */ "yZ6n");
/* harmony import */ var _materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../materials/renderers/utils.js */ "tiP8");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class M{constructor(e={}){this._objectTransformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),this._bvObjectSpace=new S,this._bvWorldSpace=new S,this._bvDirty=!0,this._hasVolatileTransformation=!1,this._visible=!0,this.id=M._idGen.gen(e.idHint),this.castShadow=null==e.castShadow||e.castShadow,this.metadata=e.metadata,this.metadata&&this.metadata.isElevationSource&&(this.metadata.lastValidElevationBB=new R),this.objectTransformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),this._initializeGeometryRecords(e.geometries,e.materials,e.transformations,e.origins)}get geometryRecords(){return this._geometryRecords}get geometries(){return this._geometries}get objectTransformation(){return this._objectTransformation}set objectTransformation(e){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["c"])(this._objectTransformation,e),this._invalidateBoundingVolume(),this._notifyDirty("objTransformation")}dispose(){for(const e of this._geometryRecords)_GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.release(e);this._geometryRecords=null,this._geometries=null}_initializeGeometryRecords(e,t,i,s){if(!Array.isArray(e))return this._geometryRecords=[],void(this._geometries=[]);Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(t.length===e.length,"Object3D: materials don't match geometries"),Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(i.length===e.length,"Object3D: transformations don't match geometries"),this._geometryRecords=new Array(e.length),this._geometries=e.slice();for(let r=0;r<e.length;r++){const o={highlights:null,occludees:null,visible:!0};this._geometryRecords[r]=_GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.acquire(e[r],t[r],Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["b"])(i[r]),o,s&&s[r])}this._hasVolatileTransformation=!1}get parentLayer(){return this._parentLayer}set parentLayer(e){Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(null==this._parentLayer||null==e,"Object3D can only be added to a single Layer"),this._parentLayer=e}getNumGeometryRecords(){return this._geometryRecords.length}getGeometryRecord(e){return Object(_Util_js__WEBPACK_IMPORTED_MODULE_6__["assert"])(e>=0&&e<this._geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range"),this._geometryRecords[e]}addGeometry(e,t,i,s,r,o){i=i||_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["I"],this._geometries.push(e);const a=_GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.acquire(e,t,i,s||{highlights:null,occludees:null,visible:!0},r,o);return this._geometryRecords.push(a),this._hasVolatileTransformation=this._geometryRecords.some((e=>!!e.shaderTransformation)),this._notifyDirty("objGeometryAdded",a),this._invalidateBoundingVolume(),a}removeGeometry(e){const t=this._geometryRecords.splice(e,1)[0];return _GeometryRecord_js__WEBPACK_IMPORTED_MODULE_8__["default"].pool.release(t),this._hasVolatileTransformation=this._geometryRecords.some((e=>!!e.shaderTransformation)),this._geometries.splice(e,1),this._notifyDirty("objGeometryRemoved",t),this._invalidateBoundingVolume(),t}removeAllGeometries(){for(;this.getNumGeometryRecords()>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._notifyDirty("vertexAttrsUpdated",this._geometryRecords[e]),this._invalidateBoundingVolume()}get isVisible(){return this._visible}setVisible(e){this._visible=e;for(const e of this._geometryRecords)e.instanceParameters.visible=this._visible;this._notifyDirty("visibilityChanged")}maskOccludee(){const e=Object(_Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__["generateObject3DStateId"])(1);for(const t of this._geometryRecords)t.instanceParameters.occludees=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["addObject3DStateID"])(t.instanceParameters.occludees,e);return this._notifyDirty("occlusionChanged"),e}removeOcclude(e){for(const t of this._geometryRecords)t.instanceParameters.occludees=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["removeObject3DStateID"])(t.instanceParameters.occludees,e);this._notifyDirty("occlusionChanged")}highlight(){const e=Object(_Object3DStateSet_js__WEBPACK_IMPORTED_MODULE_9__["generateObject3DStateId"])(0);for(const t of this._geometryRecords)t.instanceParameters.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["addObject3DStateID"])(t.instanceParameters.highlights,e);return this._notifyDirty("highlightChanged"),e}removeHighlight(e){for(const t of this._geometryRecords)t.instanceParameters.highlights=Object(_materials_renderers_utils_js__WEBPACK_IMPORTED_MODULE_10__["removeObject3DStateID"])(t.instanceParameters.highlights,e);this._notifyDirty("highlightChanged")}getCombinedStaticTransformation(t,i){return Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrapOr"])(i,Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])()),this.objectTransformation,t.getStaticTransformation())}getCombinedShaderTransformation(e,t){return t=t||Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_4__["m"])(t,this.objectTransformation,e.getShaderTransformation()),t}hasVolativeTransformation(){return this._hasVolatileTransformation}getBBMin(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin}getBBMax(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax}getCenter(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.center:this._bvWorldSpace.center}getBSRadius(e){return this._validateBoundingVolume(),e?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius}_validateBoundingVolume(){if(!this._bvDirty&&!this._hasVolatileTransformation)return;this._bvObjectSpace.init(),this._bvWorldSpace.init();for(let e=0;e<this._geometryRecords.length;++e){const t=this._geometries[e],i=this._geometryRecords[e],s=t.boundingInfo;this._calculateTransformedBoundingVolume(s,this._bvObjectSpace,i.getShaderTransformation()),this._calculateTransformedBoundingVolume(s,this._bvWorldSpace,this.getCombinedShaderTransformation(i))}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);const e=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),t=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),i=Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["maxScale"])(this.objectTransformation);for(let s=0;s<this._geometryRecords.length;++s){const r=this._geometries[s],n=this._geometryRecords[s].getShaderTransformation(),h=Object(_support_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["maxScale"])(n),m=r.boundingInfo;Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(e,m.getCenter(),n);const b=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(e,this._bvObjectSpace.center),d=m.getBSRadius()*h;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,b+d),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(t,e,this.objectTransformation);const l=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["k"])(t,this._bvWorldSpace.center),_=d*i;this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,l+_)}this._bvDirty=!1}_calculateTransformedBoundingVolume(e,i,s){const r=e.getBBMin(),a=e.getBBMax(),h=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(r),c=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(a);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(h,h,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(c,c,s);for(let e=0;e<3;++e)i.bbMin[e]=Math.min(i.bbMin[e],h[e],c[e]),i.bbMax[e]=Math.max(i.bbMax[e],h[e],c[e]);for(let e=0;e<3;++e){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(h,r),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(c,a),h[e]=a[e],c[e]=r[e],Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(h,h,s),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(c,c,s);for(let e=0;e<3;++e)i.bbMin[e]=Math.min(i.bbMin[e],h[e],c[e]),i.bbMax[e]=Math.max(i.bbMax[e],h[e],c[e])}}_invalidateBoundingVolume(){this._bvDirty=!0,this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})}_notifyDirty(e,t,i,s){if(this._parentLayer){i=i||1;const r=s||this;this._parentLayer.notifyDirty(e,t,i,r)}}get test(){const e=this;return{hasGeometry:t=>e._geometries.indexOf(t)>-1,getGeometryIndex:t=>e._geometries.indexOf(t)}}}M._idGen=new _IdGen_js__WEBPACK_IMPORTED_MODULE_7__["IdGen"];class R{constructor(){this.bbMin=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.bbMax=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.bbMax[0]<this.bbMin[0]&&this.bbMax[1]<this.bbMin[1]&&this.bbMax[2]<this.bbMin[2]}}class S extends R{constructor(){super(),this.center=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.bsRadius=0}init(){Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.bbMax,-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["s"])(this.center,0,0,0),this.bsRadius=0}getCenter(){return this.center}getBSRadius(){return this.bsRadius}}/* harmony default export */ __webpack_exports__["default"] = (M);


/***/ }),

/***/ "XV/G":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: PhysicallyBasedRendering */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRendering", function() { return n; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PiUtils.glsl.js */ "xRv2");
/* harmony import */ var _AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnalyticalSkyModel.glsl.js */ "J1lp");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,a){const r=n.fragment.code;n.include(_PiUtils_glsl_js__WEBPACK_IMPORTED_MODULE_1__["PiUtils"]),3===a.pbrMode||4===a.pbrMode?(r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${a.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 fresnelReflection(float angle, vec3 f0, float f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float normalDistributionWater(float NdotH, float roughness)
    {
      float r2 = roughness * roughness;
      float NdotH2 = NdotH * NdotH;
      float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
      return r2 / denom;
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float geometricOcclusionKelemen(float LoH)
    {
        return 0.25 / (LoH * LoH);
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
    {
      vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
      float dSun = normalDistributionWater(props.NdotH, roughness);
      float V = geometricOcclusionKelemen(props.LdotH);

      float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
      float strengthSunHaze  = 1.2;
      float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;

      return ((dSun + dSunHaze) * V) * F;
    }

    vec3 tonemapACES(const vec3 x) {
      return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
    }
    `)):1!==a.pbrMode&&2!==a.pbrMode||(n.include(_AnalyticalSkyModel_glsl_js__WEBPACK_IMPORTED_MODULE_2__["AnalyticalSkyModel"]),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    struct PBRShadingInfo
    {
        float NdotL;                  // cos angle between normal and light direction
        float NdotV;                  // cos angle between normal and view direction
        float NdotH;                  // cos angle between normal and half vector
        float VdotH;                  // cos angle between view direction and half vector
        float LdotH;                  // cos angle between view light direction and half vector
        float NdotNG;                 // cos angle between normal and normal of the ground
        float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
        float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
        float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination
        vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
        vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
        vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
        vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

        float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping
        float ssao;                   // ssao coefficient
        vec3 albedoLinear;            // linear color of the albedo
        vec3 f0;                      // fresnel value at normal incident light
        vec3 f90;                     // fresnel value at 90o of incident light

        vec3 diffuseColor;            // diffuse color of the material used in environment illumination
        float metalness;              // metalness of the material
        float roughness;              // roughness of the material
    };
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float normalDistribution(float NdotH, float roughness)
    {
        float a = NdotH * roughness;
        float b = roughness / (1.0 - NdotH * NdotH + a * a);
        return b * b * INV_PI;
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
    const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
    const vec2 c2 = vec2(-1.04, 1.04);

    vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
        vec4 r = roughness * c0 + c1;
        float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
        return c2 * a004 + r.zw;
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
      vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
      vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
      vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      return (diffuseComponent + specularComponent);
    }
    `),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    float gamutMapChanel(float x, vec2 p){
      return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
    }`),r.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
      vec3 outColor;
      vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
      outColor.x = gamutMapChanel(inColor.x, p) ;
      outColor.y = gamutMapChanel(inColor.y, p) ;
      outColor.z = gamutMapChanel(inColor.z, p) ;
      return outColor;
    }
    `))}


/***/ }),

/***/ "ZS5L":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DecodeNormal.glsl.js ***!
  \******************************************************************************************************/
/*! exports provided: DecodeNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecodeNormal", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o){const d=_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 decodeNormal(vec2 f) {
      float z = 1.0 - abs(f.x) - abs(f.y);
      return vec3(f + sign(f) * min(z, 0.0), z);
    }
  `;o.fragment.code.add(d),o.vertex.code.add(d)}


/***/ }),

/***/ "ZotJ":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/vec32.js ***!
  \***************************************************/
/*! exports provided: a, b, s, t, v */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return n; });
/* harmony import */ var _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/support/buffer/math/common.js */ "2mxK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[4],c=f[5],i=f[6],a=f[8],p=f[9],y=f[10],B=f[12],m=f[13],h=f[14],l=t.typedBuffer,S=t.typedBufferStride,b=r.typedBuffer,v=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*S,r=e*v,f=b[r],o=b[r+1],M=b[r+2];l[t]=n*f+s*o+a*M+B,l[t+1]=u*f+c*o+p*M+m,l[t+2]=d*f+i*o+y*M+h}}function r(t,r,f){if(t.count!==r.count)return void _views_3d_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__["logger"].error("source and destination buffers need to have the same number of elements");const o=t.count,n=f[0],u=f[1],d=f[2],s=f[3],c=f[4],i=f[5],a=f[6],p=f[7],y=f[8],B=t.typedBuffer,m=t.typedBufferStride,h=r.typedBuffer,l=r.typedBufferStride;for(let e=0;e<o;e++){const t=e*m,r=e*l,f=h[r],o=h[r+1],S=h[r+2];B[t]=n*f+s*o+a*S,B[t+1]=u*f+c*o+p*S,B[t+2]=d*f+i*o+y*S}}function f(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=r*u[f],o[t+1]=r*u[f+1],o[t+2]=r*u[f+2]}}function o(e,t,r){const f=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,u=t.typedBuffer,d=t.typedBufferStride;for(let e=0;e<f;e++){const t=e*n,f=e*d;o[t]=u[f]>>r,o[t+1]=u[f+1]>>r,o[t+2]=u[f+2]>>r}}var n=Object.freeze({__proto__:null,transformMat4:t,transformMat3:r,scale:f,shiftRight:o});


/***/ }),

/***/ "aBUN":
/*!***********************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js ***!
  \***********************************************************************/
/*! exports provided: splitURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "splitURI", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}


/***/ }),

/***/ "aK8v":
/*!**********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterialTexture.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DefaultTextureUnits.js */ "jdNP");
/* harmony import */ var _GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GLMaterial.js */ "1/dN");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
/* harmony default export */ __webpack_exports__["default"] = (class extends _GLMaterial_js__WEBPACK_IMPORTED_MODULE_2__["default"]{constructor(e){super(e),this._textureIDs=new Set,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._initTransparent=!!e.initTextureTransparent,this._texture=this._acquireIfNotUndefined(this._textureId),this._textureNormal=this._acquireIfNotUndefined(e.normalTextureId),this._textureEmissive=this._acquireIfNotUndefined(e.emissiveTextureId),this._textureOcclusion=this._acquireIfNotUndefined(e.occlusionTextureId),this._textureMetallicRoughness=this._acquireIfNotUndefined(e.metallicRoughnessTextureId)}dispose(){this._textureIDs.forEach((e=>this._textureRepository.release(e))),this._textureIDs.clear()}updateTexture(e){e!==this._textureId&&(this._releaseIfNotUndefined(this._textureId),this._textureId=e,this._texture=this._acquireIfNotUndefined(this._textureId))}bindTexture(t,r){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)&&(r.setUniform1i("tex",_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].DIFFUSE),t.bindTexture(this._texture.glTexture,_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].DIFFUSE)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureNormal)&&(r.setUniform1i("normalTexture",_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].NORMAL),t.bindTexture(this._textureNormal.glTexture,_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].NORMAL)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureEmissive)&&(r.setUniform1i("texEmission",_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].EMISSION),t.bindTexture(this._textureEmissive.glTexture,_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].EMISSION)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureOcclusion)&&(r.setUniform1i("texOcclusion",_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].OCCLUSION),t.bindTexture(this._textureOcclusion.glTexture,_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].OCCLUSION)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._textureMetallicRoughness)&&(r.setUniform1i("texMetallicRoughness",_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].METALLIC_ROUGHNESS),t.bindTexture(this._textureMetallicRoughness.glTexture,_DefaultTextureUnits_js__WEBPACK_IMPORTED_MODULE_1__["DefaultTextureUnits"].METALLIC_ROUGHNESS))}bindTextureScale(t,i){const r=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._texture)&&this._texture.glTexture;r&&r.descriptor.textureCoordinateScaleFactor?i.setUniform2fv("textureCoordinateScaleFactor",r.descriptor.textureCoordinateScaleFactor):i.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquireIfNotUndefined(e){if(!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return this._textureIDs.add(e),this._textureRepository.acquire(e,this._initTransparent)}_releaseIfNotUndefined(e){void 0!==e&&(this._textureIDs.delete(e),this._textureRepository.release(e))}});


/***/ }),

/***/ "aQrP":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js ***!
  \*********************************************************************************************/
/*! exports provided: Code, Includes, ShaderBuilder, Stage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Includes", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderBuilder", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stage", function() { return o; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/Logger.js */ "6S2I");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this.includedModules=new Map}include(e,s){this.includedModules.has(e)?this.includedModules.get(e)!==s&&t.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,s),e(this.builder,s))}}class r extends s{constructor(){super(...arguments),this.vertex=new o,this.fragment=new o,this.attributes=new a,this.varyings=new c,this.extensions=new u,this.defines=new d}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),s=this.attributes.generateSource(e),r=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,i=n.uniforms.generateSource(),o=n.code.generateSource(),a="vertex"===e?l:h,c=this.defines.generateSource().concat(n.defines.generateSource());return`\n${t.join("\n")}\n\n${c.join("\n")}\n\n${a}\n\n${i.join("\n")}\n\n${s.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}`}}class n{constructor(){this._entries=new Array,this._set=new Set}add(e,t,s){const r=`${e}_${t}_${s}`;return this._set.has(r)||(this._entries.push([e,t,s]),this._set.add(r)),this}generateSource(){return this._entries.map((e=>{return`uniform ${e[1]} ${e[0]}${t=e[2],t?`[${t}]`:""};`;var t}))}}class i{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class o extends s{constructor(){super(...arguments),this.uniforms=new n,this.code=new i,this.defines=new d}get builder(){return this}}class a{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class c{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class u{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?u.ALLOWLIST_VERTEX:u.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}u.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],u.ALLOWLIST_VERTEX=[];class d{constructor(){this._entries=new Map}addInt(e,t){const s=t%1==0?t.toFixed(0):t.toString();this._entries.set(e,s)}addFloat(e,t){const s=t%1==0?t.toFixed(1):t.toString();this._entries.set(e,s)}generateSource(){return Array.from(this._entries,(([e,t])=>`#define ${e} ${t}`))}}const h="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",l="precision highp float;\nprecision highp sampler2D;";


/***/ }),

/***/ "aX5l":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryRecord.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/ObjectPool.js */ "7Nfj");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a{acquire(t,i,r,e,n,o){this.id=a._idGen.gen(t&&t.id),this.geometry=t,this.material=i,this.transformation=r,this.instanceParameters=e,this.origin=n,this.shaderTransformation=o}getStaticTransformation(){return this.transformation}getShaderTransformation(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation}computeAttachmentOrigin(t){return!!(this.material.computeAttachmentOrigin?this.material.computeAttachmentOrigin(this.geometry,t):this.geometry.computeAttachmentOrigin(t))&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(t,t,this.getStaticTransformation()),!0)}}a._idGen=new _IdGen_js__WEBPACK_IMPORTED_MODULE_2__["IdGen"],a.pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](a);/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "agdK":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: OutputHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputHighlight", function() { return i; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function i(i){i.fragment.uniforms.add("depthTex","sampler2D"),i.fragment.uniforms.add("highlightViewportPixelSz","vec4"),i.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    void outputHighlight() {
      vec4 fragCoord = gl_FragCoord;

      float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
      }
      else {
        gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
      }
    }
  `)}!function(e){e.bindOutputHighlight=function(e,i,t){e.bindTexture(t.highlightDepthTexture,5),i.setUniform1i("depthTex",5),i.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}}(i||(i={}));


/***/ }),

/***/ "aiF/":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js ***!
  \*********************************************************************************************************/
/*! exports provided: DoublePrecision, doublePrecisionRequiresObfuscation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoublePrecision", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doublePrecisionRequiresObfuscation", function() { return r; });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../core/has.js */ "wSAH");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _lib_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/WebGLDriverTest.js */ "mY8Z");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o({code:e},i){i.doublePrecisionRequiresObfuscation?e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
      vec3 dpPlusFrc(vec3 a, vec3 b) {
        return mix(a, a + b, vec3(notEqual(b, vec3(0))));
      }

      vec3 dpMinusFrc(vec3 a, vec3 b) {
        return mix(vec3(0), a - b, vec3(notEqual(a, b)));
      }

      // based on https://www.thasler.com/blog/blog/glsl-part2-emu
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = dpPlusFrc(hiA, hiB);
        vec3 e = dpMinusFrc(t1, hiA);
        vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
        return t1 + t2;
      }
    `):e.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_1__["glsl"]`
      vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
        vec3 t1 = hiA + hiB;
        vec3 e = t1 - hiA;
        vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
        return t1 + t2;
      }
    `)}function r(c){return!!Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("force-double-precision-obfuscation")||Object(_lib_WebGLDriverTest_js__WEBPACK_IMPORTED_MODULE_2__["testWebGLDriver"])(c).doublePrecisionRequiresObfuscation}


/***/ }),

/***/ "b5HO":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js ***!
  \*******************************************************************************************/
/*! exports provided: RealisticTreeTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealisticTreeTechnique", function() { return a; });
/* harmony import */ var _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/shaderTechnique/ReloadableShaderModule.js */ "w6Td");
/* harmony import */ var _lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/DefaultVertexAttributeLocations.js */ "+h6m");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/shaderLibrary/util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DefaultMaterialTechnique.js */ "4csu");
/* harmony import */ var _chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/RealisticTree.glsl.js */ "sKsC");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class a extends _DefaultMaterialTechnique_js__WEBPACK_IMPORTED_MODULE_4__["DefaultMaterialTechnique"]{initializeProgram(e){const i=a.shader.get(),o=this.configuration,l=i.build({OITEnabled:0===o.transparencyPassType,output:o.output,viewingMode:e.viewingMode,receiveShadows:o.receiveShadows,slicePlaneEnabled:o.slicePlaneEnabled,sliceHighlightDisabled:o.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:o.symbolColors,vvSize:o.vvSize,vvColor:o.vvColor,vvInstancingEnabled:!0,instanced:o.instanced,instancedColor:o.instancedColor,instancedDoublePrecision:o.instancedDoublePrecision,useOldSceneLightInterface:!1,pbrMode:o.usePBR?1:0,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:o.hasColorTexture,receiveAmbientOcclusion:o.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:0,doubleSidedMode:2,vertexTangets:!1,attributeTextureCoordinates:o.hasColorTexture?1:0,textureAlphaPremultiplied:o.textureAlphaPremultiplied,attributeColor:o.vertexColors,screenSizePerspectiveEnabled:o.screenSizePerspective,verticalOffsetEnabled:o.verticalOffset,offsetBackfaces:o.offsetBackfaces,doublePrecisionRequiresObfuscation:Object(_core_shaderLibrary_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_3__["doublePrecisionRequiresObfuscation"])(e.rctx),alphaDiscardMode:o.alphaDiscardMode,supportsTextureAtlas:!1});return new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_2__["default"](e.rctx,l.generateSource("vertex"),l.generateSource("fragment"),_lib_DefaultVertexAttributeLocations_js__WEBPACK_IMPORTED_MODULE_1__["Default3D"])}}a.shader=new _core_shaderTechnique_ReloadableShaderModule_js__WEBPACK_IMPORTED_MODULE_0__["ReloadableShaderModule"](_chunks_RealisticTree_glsl_js__WEBPACK_IMPORTED_MODULE_5__["R"],(()=>__webpack_require__.e(/*! import() | core-shaderLibrary-default-RealisticTree-glsl-js */ "core-shaderLibrary-default-RealisticTree-glsl-js").then(__webpack_require__.bind(null, /*! ../core/shaderLibrary/default/RealisticTree.glsl.js */ "FmK6"))));


/***/ }),

/***/ "bLIi":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: SymbolColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolColor", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../collections/Component/Material/shader/DecodeSymbolColor.glsl.js */ "WHaQ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,l){l.symbolColor?(r.include(_collections_Component_Material_shader_DecodeSymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_1__["DecodeSymbolColor"]),r.attributes.add("symbolColor","vec4"),r.varyings.add("colorMixMode","mediump float")):r.fragment.uniforms.add("colorMixMode","int"),l.symbolColor?r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)}


/***/ }),

/***/ "bVvB":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js ***!
  \***********************************************************************************************************/
/*! exports provided: VertexColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexColor", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,e){e.attributeColor?(r.attributes.add("color","vec4"),r.varyings.add("vColor","vec4"),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardVertexColor() { vColor = color; }
    `),r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }
    `)):r.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardVertexColor() {}
      void forwardNormalizedVertexColor() {}
    `)}


/***/ }),

/***/ "cIib":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js ***!
  \*********************************************************************************************************************/
/*! exports provided: EvaluateAmbientOcclusion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluateAmbientOcclusion", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o,t){const r=o.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float evaluateAmbientOcclusion() {
        return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
      }

      float evaluateAmbientOcclusionInverse() {
        float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
        return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
      }
    `)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float evaluateAmbientOcclusion() { return 0.0; } // no occlusion
      float evaluateAmbientOcclusionInverse() { return 1.0; }
    `)}


/***/ }),

/***/ "cKKt":
/*!*******************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/AutoDisposable.js ***!
  \*******************************************************************************/
/*! exports provided: AutoDisposable, AutoDisposableMixin, autoDispose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDisposable", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoDisposableMixin", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoDispose", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const s=s=>class extends s{constructor(){super(...arguments),this._isDisposed=!1}dispose(){for(const e of null!=(s=this._managedDisposables)?s:[]){var s;const i=this[e];this[e]=null,i&&"function"==typeof i.dispose&&i.dispose()}this._isDisposed=!0}get isDisposed(){return this._isDisposed}};class e extends(s(class{})){}function i(){return(s,e)=>{var i,o;s.hasOwnProperty("_managedDisposables")||(s._managedDisposables=null!=(i=null==(o=s._managedDisposables)?void 0:o.slice())?i:[]);s._managedDisposables.unshift(e)}}


/***/ }),

/***/ "cKtl":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/plane.js ***!
  \***************************************************/
/*! exports provided: A, B, U, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return q; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(n=Q){return[n[0],n[1],n[2],n[3]]}function p(n,t,r,e){return y(n,t,r,e,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv4d"].get())}function d(n,t=l()){return y(n[0],n[1],n[2],n[3],t)}function y(n,t,r,e,o=l()){return o[0]=n,o[1]=t,o[2]=r,o[3]=e,o}function h(n,t,r=l()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(r,n),r[3]=t,r}function P(n,t,r=l()){Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["g"])(r,t);const s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(t,t);return Math.abs(s-1)>1e-5&&s>1e-12&&Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(r,r,1/Math.sqrt(s)),F(r,n,r),r}function j(n,t,r,e=l()){return _(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),r,t),n,e)}function M(n,t){return b(n,t,0,1,2)}function b(n,t,r,e,i){if(n.count<3)return!1;n.getVec(r,A);let a=e,f=!1;for(;a<n.count-1&&!f;)n.getVec(a,V),a++,f=!Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(A,V);if(!f)return!1;for(a=Math.max(a,i),f=!1;a<n.count&&!f;)n.getVec(a,O),a++,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(S,A,V),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(S,S),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(x,V,O),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(x,x),f=!Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(A,O)&&!Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["m"])(V,O)&&Math.abs(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(S,x))<v;return f?(j(A,V,O,t),!0):(0!==r||1!==e||2!==i)&&b(n,t,0,1,2)}const v=.99619469809,A=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),V=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),O=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),S=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),x=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();function F(n,t,r){return n!==r&&d(n,r),r[3]=-Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(r,t),r}function I(n,t){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=-n[3],t}function _(n,t,r,e=l()){return P(r,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),t,n),e)}function w(t,r,e){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&J(t,r.origin,r.direction,!0,!1,e)}function B(n,t,r){return J(n,t.origin,t.vector,!1,!1,r)}function U(n,t,r){return J(n,t.origin,t.vector,!1,!0,r)}function k(n,t){const{center:r,radius:e}=t;return H(n,r)-e>=0}function q(n,t){const{center:r,radius:e}=t;return H(n,r)+e<0}function z(n,t){return H(n,t)>=0}function L(n,t){return H(n,t)<0}function N(n,t){const r=t[0],e=t[1],o=t[2],i=t[3],s=t[4],c=t[5];return n[0]*(n[0]>0?r:i)+n[1]*(n[1]>0?e:s)+n[2]*(n[2]>0?o:c)+n[3]>=0}function C(n,t){const r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,t.ray.direction),e=-H(n,t.ray.origin);if(e<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return e>0;if((e<0||r<0)&&!(e<0&&r<0))return!0;const i=e/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function D(n,t){const r=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,t.ray.direction),e=-H(n,t.ray.origin);if(r>-1e-6&&r<1e-6)return e>0;const i=e/r;return r>0?i<t.c1&&(t.c1=i):i>t.c0&&(t.c0=i),t.c0<=t.c1}function R(n,t,r){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,-n[3]),o=E(n,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),t,e),_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get());return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(r,o,e),r}function E(n,t,r){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,t));return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["f"])(r,t,e),r}function G(n,t){return Math.abs(H(n,t))}function H(n,t){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,t)+n[3]}function J(n,r,e,s,c,u){const a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,e);if(0===a)return!1;let m=-(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["d"])(n,r)+n[3])/a;return c&&(m=s?Math.max(0,m):Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(m,0,1)),!(m<0||!s&&m>1)&&(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["b"])(u,r,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_3__["a"])(u,e,m)),!0)}function K(n){return n}const Q=[0,0,1,0];var T=Object.freeze({__proto__:null,create:l,wrap:p,copy:d,fromValues:y,fromNormalAndOffset:h,fromPositionAndNormal:P,fromPoints:j,fromManyPoints:M,fromManyPointsSampleAt:b,setOffsetFromPoint:F,negate:I,fromVectorsAndPoint:_,intersectRay:w,intersectLineSegment:B,intersectLineSegmentClamp:U,isSphereFullyInside:k,isSphereFullyOutside:q,isPointInside:z,isPointOutside:L,isAABBFullyInside:N,clip:C,clipInfinite:D,projectPoint:R,projectVector:E,distance:G,signedDistance:H,normal:K,UP:Q});


/***/ }),

/***/ "cqrX":
/*!**************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js ***!
  \**************************************************************************/
/*! exports provided: material, textureSampler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textureSampler", function() { return i; });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/compilerUtils.js */ "bJda");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const o={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},r={pbrMetallicRoughness:o,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},t={ESRI_externalColorMixMode:"tint"},a=(a={})=>{const l={...o,...a.pbrMetallicRoughness},i=function(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:Object(_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__["neverReached"])(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}({...t,...a.extras});return{...r,...a,pbrMetallicRoughness:l,extras:i}};const l={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497},i=e=>({...l,...e});


/***/ }),

/***/ "dDjh":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js ***!
  \*********************************************************************************************/
/*! exports provided: OITBlending, OITDepthTest, OITDepthWrite, OITPolygonOffset, OITPolygonOffsetLimit, blendingAlpha, blendingColor, blendingDefault, getOITPolygonOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITBlending", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITDepthTest", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITDepthWrite", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffset", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OITPolygonOffsetLimit", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingAlpha", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingColor", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blendingDefault", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOITPolygonOffset", function() { return s; });
/* harmony import */ var _webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../webgl/renderState.js */ "GJyJ");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const u=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["separateBlendingParams"])(770,1,771,771),e=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(1,1),o=Object(_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["simpleBlendingParams"])(0,771);function c(n){return 2===n?null:1===n?o:e}function l(n){return 2===n?_webgl_renderState_js__WEBPACK_IMPORTED_MODULE_0__["defaultDepthWriteParams"]:null}const f=5e5,i={factor:-1,units:-2};function s(n){return n?i:null}function a(n){return 3===n||2===n?513:515}


/***/ }),

/***/ "ekr9":
/*!************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js ***!
  \************************************************************************/
/*! exports provided: createDDSTexture, createDDSTextureData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTexture", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDDSTextureData", function() { return u; });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/Logger.js */ "6S2I");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../webgl/Texture.js */ "of9L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const n=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");function o(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const a=o("DXT1"),i=o("DXT3"),s=o("DXT5");function l(e,t,n,o){const{textureData:a,internalFormat:i,width:s,height:l}=u(n,o);t.samplingMode=a.levels.length>1?9987:9729,t.hasMipmap=a.levels.length>1,t.internalFormat=i,t.width=s,t.height=l;const c=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](e,t,a);return e.bindTexture(c,0),c}function u(e,r){const o=new Int32Array(e,0,31);if(542327876!==o[0])return n.error("Invalid magic number in DDS header"),null;if(!(4&o[20]))return n.error("Unsupported format, must contain a FourCC code"),null;const l=o[21];let u,c;switch(l){case a:u=8,c=33776;break;case i:u=16,c=33778;break;case s:u=16,c=33779;break;default:return n.error("Unsupported FourCC code:",(m=l,String.fromCharCode(255&m,m>>8&255,m>>16&255,m>>24&255))),null}var m;let h=1,d=o[4],p=o[3];0==(3&d)&&0==(3&p)||(n.warn("Rounding up compressed texture size to nearest multiple of 4."),d=d+3&-4,p=p+3&-4);const g=d,f=p;let w,x;131072&o[2]&&!1!==r&&(h=Math.max(1,o[7])),1===h||Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(d)&&Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["isPowerOfTwo"])(p)||(n.warn("Ignoring mipmaps of non power of two sized compressed texture."),h=1);let C=o[1]+4;const D=[];for(let t=0;t<h;++t)x=(d+3>>2)*(p+3>>2)*u,w=new Uint8Array(e,C,x),D.push(w),C+=x,d=Math.max(1,d>>1),p=Math.max(1,p>>1);return{textureData:{type:"compressed",levels:D},internalFormat:c,width:g,height:f}}


/***/ }),

/***/ "exm0":
/*!*****************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js ***!
  \*****************************************************************/
/*! exports provided: makeMaterialParameters, makeTextureSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMaterialParameters", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeTextureSource", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function t(e,t={}){return{data:e,parameters:{wrap:{s:10497,t:10497,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}


/***/ }),

/***/ "f/MA":
/*!*******************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/axisAngle.js ***!
  \*******************************************************/
/*! exports provided: U, a, b, c, d, e, f, g, h, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return a; });
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector.js */ "IEcw");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(r=g){return[r[0],r[1],r[2],r[3]]}function a(r,n,t,o){return f(r,n,t,o,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__["sv4d"].get())}function u(r,n){return f(r[0],r[1],r[2],n,_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_1__["sv4d"].get())}function c(r,n=e()){return f(r[0],r[1],r[2],r[3],n)}function f(r,n,t,s,o=e()){return o[0]=r,o[1]=n,o[2]=t,o[3]=s,o}function i(n,t,s=e()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["g"])(s,n),s[3]=t,s}function p(r,s,a=e()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["c"])(a,r,s),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_0__["n"])(a,a),a[3]=Object(_vector_js__WEBPACK_IMPORTED_MODULE_2__["a"])(r,s),a}function m(r){return r}const g=[0,0,1,0];var l=Object.freeze({__proto__:null,create:e,wrap:a,wrapAxisAngle:u,copy:c,fromValues:f,fromAxisAndAngle:i,fromPoints:p,axis:m,UP:g});


/***/ }),

/***/ "fDPZ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexBufferLayouts.js ***!
  \*******************************************************************************************/
/*! exports provided: Pos2, Pos2Tex, Pos3, Pos3Col, Pos3NormalTex, Pos3Tex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos2Tex", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Col", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3NormalTex", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pos3Tex", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const e=[{name:"position",count:3,type:5126,offset:0,stride:12,normalized:!1}],t=[{name:"position",count:3,type:5126,offset:0,stride:20,normalized:!1},{name:"uv0",count:2,type:5126,offset:12,stride:20,normalized:!1}],o=[{name:"position",count:3,type:5126,offset:0,stride:32,normalized:!1},{name:"normal",count:3,type:5126,offset:12,stride:32,normalized:!1},{name:"uv0",count:2,type:5126,offset:24,stride:32,normalized:!1}],n=[{name:"position",count:3,type:5126,offset:0,stride:16,normalized:!1},{name:"color",count:4,type:5121,offset:12,stride:16,normalized:!1}],i=[{name:"position",count:2,type:5126,offset:0,stride:8,normalized:!1}],s=[{name:"position",count:2,type:5126,offset:0,stride:16,normalized:!1},{name:"uv0",count:2,type:5126,offset:8,stride:16,normalized:!1}];


/***/ }),

/***/ "fFEv":
/*!********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js ***!
  \********************************************************************************************/
/*! exports provided: bindScreenSizePerspective, colorMixModes, computeInvDir, computeNormal, copyParameters, intersectAabbInvDir, intersectAabbInvDirBefore, intersectDrapedRenderLineGeometry, intersectTriangleGeometry, intersectTriangles, updateParameters, verticalOffsetAtDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindScreenSizePerspective", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorMixModes", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeInvDir", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeNormal", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyParameters", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDir", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectAabbInvDirBefore", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectDrapedRenderLineGeometry", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangleGeometry", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectTriangles", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateParameters", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalOffsetAtDistance", function() { return O; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _renderers_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderers/utils.js */ "tiP8");
/* harmony import */ var _lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/screenSizePerspectiveUtils.js */ "2hxh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const d=Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["create"])(),h=_lib_Util_js__WEBPACK_IMPORTED_MODULE_5__["VertexAttrConstants"];function g(t,n,e,o,i,r,s){const c=Object(_renderers_utils_js__WEBPACK_IMPORTED_MODULE_6__["isInstanceHidden"])(n),f=e.tolerance;if(!c)if(t.boundingInfo)Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_5__["assert"])("triangle"===t.data.primitiveType),M(t.boundingInfo,o,i,f,r,s);else{const n=t.getIndices(h.POSITION),e=t.getAttribute(h.POSITION);y(o,i,0,n.length/3,n,e,void 0,r,s)}}const x=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();function M(n,e,o,i,r,s){const c=j(e,o,x);if(Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMin"])(d,n.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__["setMax"])(d,n.getBBMax()),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(r)&&r.applyToAabb(d),P(d,e,c,i)){const t=n.getPrimitiveIndices(),c=n.getIndices(),f=n.getPosition(),a=t?t.length:c.length/3;if(a>W){const t=n.getChildren();if(void 0!==t){for(let n=0;n<8;++n)void 0!==t[n]&&M(t[n],e,o,i,r,s);return}}y(e,o,0,a,c,f,t,r,s)}}const I=2**-52,b=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();function y(n,e,o,i,r,s,c,f,a){if(c)return function(n,e,o,i,r,s,c,f,a){const{data:l,offsetIdx:u,strideIdx:m}=s,p=n[0],d=n[1],h=n[2],g=e[0],x=e[1],M=e[2],y=g-p,v=x-d,T=M-h;for(let n=o;n<i;++n){const e=c[n];let o=3*e,i=u+m*r[o++],s=l[i++],g=l[i++],x=l[i];i=u+m*r[o++];let M=l[i++],j=l[i++],P=l[i];i=u+m*r[o];let V=l[i++],O=l[i++],B=l[i];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f)&&([s,g,x]=f.applyToVertex(s,g,x,n),[M,j,P]=f.applyToVertex(M,j,P,n),[V,O,B]=f.applyToVertex(V,O,B,n));const S=M-s,L=j-g,U=P-x,E=V-s,N=O-g,W=B-x,k=v*W-N*T,z=T*E-W*y,C=y*N-E*v,R=S*k+L*z+U*C;if(Math.abs(R)<=I)continue;const H=p-s,X=d-g,Y=h-x,Z=H*k+X*z+Y*C;if(R>0){if(Z<0||Z>R)continue}else if(Z>0||Z<R)continue;const _=X*U-L*Y,q=Y*S-U*H,w=H*L-S*X,D=y*_+v*q+T*w;if(R>0){if(D<0||Z+D>R)continue}else if(D>0||Z+D<R)continue;const F=(E*_+N*q+W*w)/R;if(F>=0){a(F,A(S,L,U,E,N,W,b),e)}}}(n,e,o,i,r,s,c,f,a);const{data:l,offsetIdx:u,strideIdx:m}=s,p=n[0],d=n[1],h=n[2],g=e[0]-p,x=e[1]-d,M=e[2]-h;for(let n=o,e=3*o;n<i;++n){let o=u+m*r[e++],i=l[o++],s=l[o++],c=l[o];o=u+m*r[e++];let y=l[o++],v=l[o++],T=l[o];o=u+m*r[e++];let j=l[o++],P=l[o++],V=l[o];Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(f)&&([i,s,c]=f.applyToVertex(i,s,c,n),[y,v,T]=f.applyToVertex(y,v,T,n),[j,P,V]=f.applyToVertex(j,P,V,n));const O=y-i,B=v-s,S=T-c,L=j-i,U=P-s,E=V-c,N=x*E-U*M,W=M*L-E*g,k=g*U-L*x,z=O*N+B*W+S*k;if(Math.abs(z)<=I)continue;const C=p-i,R=d-s,H=h-c,X=C*N+R*W+H*k;if(z>0){if(X<0||X>z)continue}else if(X>0||X<z)continue;const Y=R*S-B*H,Z=H*O-S*C,_=C*B-O*R,q=g*Y+x*Z+M*_;if(z>0){if(q<0||X+q>z)continue}else if(q>0||X+q<z)continue;const w=(L*Y+U*Z+E*_)/z;if(w>=0){a(w,A(O,B,S,L,U,E,b),n)}}}const v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])(),T=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["c"])();function A(t,n,e,o,c,f,a){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(v,t,n,e),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(T,o,c,f),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["c"])(a,v,T),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["n"])(a,a),a}function j(t,n,e){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__["s"])(e,1/(n[0]-t[0]),1/(n[1]-t[1]),1/(n[2]-t[2]))}function P(t,n,e,o){return V(t,n,e,o,1/0)}function V(t,n,e,o,i){const r=(t[0]-o-n[0])*e[0],s=(t[3]+o-n[0])*e[0];let c=Math.min(r,s),f=Math.max(r,s);const a=(t[1]-o-n[1])*e[1],l=(t[4]+o-n[1])*e[1];if(f=Math.min(f,Math.max(a,l)),f<0)return!1;if(c=Math.max(c,Math.min(a,l)),c>f)return!1;const u=(t[2]-o-n[2])*e[2],m=(t[5]+o-n[2])*e[2];return f=Math.min(f,Math.max(u,m)),!(f<0)&&(c=Math.max(c,Math.min(u,m)),!(c>f)&&c<i)}function O(t,e,o,i,r){let s=(o.screenLength||0)*t.pixelRatio;r&&(s=Object(_lib_screenSizePerspectiveUtils_js__WEBPACK_IMPORTED_MODULE_7__["scale"])(s,i,e,r));const c=s*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["glClamp"])(c*e,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function B(t,n,e){if(!t)return;const o=t.parameters,i=t.paddingPixelsOverride;n.setUniform4f(e,o.divisor,o.offset,o.minPixelSize,i)}function S(t,n){const e=n?S(n):{};for(const n in t){let o=t[n];o&&o.forEach&&(o=E(o)),null==o&&n in e||(e[n]=o)}return e}function L(t,n){let e=!1;for(const o in n){const i=n[o];void 0!==i&&(e=!0,Array.isArray(i)?t[o]=i.slice():t[o]=i)}return e}function U(t,n,o,i,r){if(!n.options.selectionMode)return;const s=t.getAttribute(h.POSITION).data,c=t.getAttribute(h.SIZE),f=c&&c.data[0],a=o[0],l=o[1],u=((f+i)/2+4)*t.screenToWorldRatio;let m=Number.MAX_VALUE;for(let t=0;t<s.length-5;t+=3){const n=s[t],o=s[t+1],i=a-n,r=l-o,c=s[t+3]-n,f=s[t+4]-o,u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])((c*i+f*r)/(c*c+f*f),0,1),p=c*u-i,d=f*u-r,h=p*p+d*d;h<m&&(m=h)}m<u*u&&r()}function E(t){const n=[];return t.forEach((t=>n.push(t))),n}const N={multiply:1,ignore:2,replace:3,tint:4},W=1e3;


/***/ }),

/***/ "fLTx":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js ***!
  \************************************************************************************************************************/
/*! exports provided: VertexTextureCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexTextureCoordinates", function() { return u; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/TextureAtlasLookup.glsl.js */ "UhFW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(u,a){u.include(_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["TextureCoordinateAttribute"],a),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
  struct TextureLookupParameter {
    vec2 uv;
    ${a.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),1===a.attributeTextureCoordinates&&u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return texture2D(tex, params.uv);
      }
    `),2===a.attributeTextureCoordinates&&(u.include(_util_TextureAtlasLookup_glsl_js__WEBPACK_IMPORTED_MODULE_2__["TextureAtlasLookup"]),u.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
        return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
      }
    `))}


/***/ }),

/***/ "fPvx":
/*!****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/scalar.js ***!
  \****************************************************/
/*! exports provided: c, m, s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,t,r){const n=e.typedBuffer,o=e.typedBufferStride,c=t.typedBuffer,d=t.typedBufferStride,f=r?r.count:t.count;let s=(r&&r.dstIndex?r.dstIndex:0)*o,u=(r&&r.srcIndex?r.srcIndex:0)*d;for(let e=0;e<f;++e)n[s]=c[u],s+=o,u+=d}function t(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let n=0;n<r;n++)t[n]=e.get(n);return t}var r=Object.freeze({__proto__:null,copy:e,makeDense:t});


/***/ }),

/***/ "fRF2":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VertexNormal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexNormal", function() { return l; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VertexPosition.glsl.js */ "vEBI");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function l(l,e){0===e.normalType||1===e.normalType?(l.include(_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_1__["NormalAttribute"],e),l.varyings.add("vNormalWorld","vec3"),l.varyings.add("vNormalView","vec3"),l.vertex.uniforms.add("uTransformNormal_GlobalFromModel","mat3"),l.vertex.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardNormal() {
        vNormalWorld = uTransformNormal_GlobalFromModel * normalModel();
        vNormalView = uTransformNormal_ViewFromGlobal * vNormalWorld;
      }
    `)):2===e.normalType?(l.include(_VertexPosition_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexPosition"],e),l.varyings.add("vNormalWorld","vec3"),l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    void forwardNormal() {
      vNormalWorld = ${1===e.viewingMode?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`normalize(vPositionWorldCameraRelative);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3(0.0, 0.0, 1.0);`}
    }
    `)):l.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardNormal() {}
    `)}!function(o){o.bindUniforms=function(o,r){o.setUniformMatrix4fv("viewNormal",r)}}(l||(l={}));


/***/ }),

/***/ "fiGu":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js ***!
  \***************************************************************************************************************************/
/*! exports provided: DefaultMaterialAuxiliaryPasses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMaterialAuxiliaryPasses", function() { return u; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Transform.glsl.js */ "Tbkp");
/* harmony import */ var _Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Slice.glsl.js */ "0nJL");
/* harmony import */ var _output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../output/OutputHighlight.glsl.js */ "agdK");
/* harmony import */ var _shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../output/OutputDepth.glsl.js */ "wtEh");
/* harmony import */ var _attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../attributes/VertexNormal.glsl.js */ "fRF2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(u,p){const v=u.vertex.code,c=u.fragment.code;1!==p.output&&3!==p.output||(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!0}),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"],p),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"],p),u.include(_output_OutputDepth_glsl_js__WEBPACK_IMPORTED_MODULE_6__["OutputDepth"],p),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],p),u.vertex.uniforms.add("nearFar","vec2"),u.varyings.add("depth","float"),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],p),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main(void) {
        discardBySlice(vpos);
        ${p.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),2===p.output&&(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),u.include(_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_8__["NormalAttribute"],p),u.include(_attributes_VertexNormal_glsl_js__WEBPACK_IMPORTED_MODULE_9__["VertexNormal"],p),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"],p),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"],p),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),u.vertex.uniforms.add("viewNormal","mat4"),u.varyings.add("vPositionView","vec3"),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${0===p.normalType?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],p),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],p),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${3===p.normalType?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
            vec3 normal = screenDerivativeNormal(vPositionView);`:_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),4===p.output&&(u.include(_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),u.include(_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_7__["TextureCoordinateAttribute"],p),u.include(_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"],p),p.hasColorTexture&&u.fragment.uniforms.add("tex","sampler2D"),v.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();
      }
    `),u.include(_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_2__["Slice"],p),u.include(_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],p),u.include(_output_OutputHighlight_glsl_js__WEBPACK_IMPORTED_MODULE_3__["OutputHighlight"]),c.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${p.hasColorTexture?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}


/***/ }),

/***/ "g84+":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat42.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<c;++e){for(let e=0;e<16;++e)d[u+e]=n[p+e];u+=f,p+=o}}var t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "h7dw":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js ***!
  \*****************************************************************************/
/*! exports provided: depthCompareAlways, depthCompareLess, renderWhenBitIsNotSet, replaceBitWhenDepthTestPasses, stencilBaseAllZerosParams, stencilToolMaskBaseParams, stencilToolMaskOccluderParams, stencilToolTransparentOccluderParams, stencilWriteMaskOff, stencilWriteMaskOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareAlways", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "depthCompareLess", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderWhenBitIsNotSet", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceBitWhenDepthTestPasses", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilBaseAllZerosParams", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskBaseParams", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolMaskOccluderParams", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilToolTransparentOccluderParams", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOff", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stencilWriteMaskOn", function() { return f; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const a={func:513},n={func:519},f={mask:255},i={mask:0},s=a=>({function:{func:517,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7680}}),o=a=>({function:{func:519,ref:a,mask:a},operation:{fail:7680,zFail:7680,zPass:7681}}),c={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:0}},t={function:{func:519,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7681}},u={function:{func:514,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}},e={function:{func:517,ref:2,mask:2},operation:{fail:7680,zFail:7680,zPass:7680}};


/***/ }),

/***/ "jZU2":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/lineSegment.js ***!
  \*********************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l, p, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return v; });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/mathUtils.js */ "OKTS");
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function p(t){return t?{origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.origin),vector:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.vector)}:{origin:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),vector:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}}function v(t,r){const n=S.get();return n.origin=t,n.vector=r,n}function l(t,r=p()){return m(t.origin,t.vector,r)}function m(t,r,n=p()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.origin,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.vector,r),n}function b(t,r,n=p()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n.origin,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(n.vector,r,t),n}function h(r,n){const e=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,r.origin),s=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,e),a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(r.vector,r.vector),u=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(s/a,0,1),g=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),r.vector,u),e);return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(g,g)}function d(t,r){return Math.sqrt(h(t,r))}function j(t,r,n){return A(t,r,0,1,n)}function M(t,r,n){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(n,t.origin,Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(n,t.vector,r))}function A(r,n,e,u,g){const{vector:p,origin:v}=r,l=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,v),m=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(p),b=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["d"])(p,l)/m;return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(g,p,Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(b,e,u)),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(g,g,r.origin)}function B(t,r){if(_(t,v(r.origin,r.direction),!1,k)){const{tA:r,pB:n,distance2:e}=k;if(r>=0&&r<=1)return e;if(r<0)return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(t.origin,n);if(r>1)return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),t.origin,t.vector),n)}return null}function w(t,r,n){return!!_(t,r,!0,k)&&(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(n,k.pA),!0)}function P(t,r){return _(t,r,!0,k)?k.distance2:null}function _(r,n,e,o){const i=1e-6,c=r.origin,a=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),c,r.vector),g=n.origin,p=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),g,n.vector),v=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),l=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(v[0]=c[0]-g[0],v[1]=c[1]-g[1],v[2]=c[2]-g[2],l[0]=p[0]-g[0],l[1]=p[1]-g[1],l[2]=p[2]-g[2],Math.abs(l[0])<i&&Math.abs(l[1])<i&&Math.abs(l[2])<i)return!1;const m=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();if(m[0]=a[0]-c[0],m[1]=a[1]-c[1],m[2]=a[2]-c[2],Math.abs(m[0])<i&&Math.abs(m[1])<i&&Math.abs(m[2])<i)return!1;const b=v[0]*l[0]+v[1]*l[1]+v[2]*l[2],h=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],d=v[0]*m[0]+v[1]*m[1]+v[2]*m[2],j=l[0]*l[0]+l[1]*l[1]+l[2]*l[2],M=(m[0]*m[0]+m[1]*m[1]+m[2]*m[2])*j-h*h;if(Math.abs(M)<i)return!1;let A=(b*h-d*j)/M,B=(b+h*A)/j;e&&(A=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(A,0,1),B=Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__["clamp"])(B,0,1));const w=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),P=_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get();return w[0]=c[0]+A*m[0],w[1]=c[1]+A*m[1],w[2]=c[2]+A*m[2],P[0]=g[0]+B*l[0],P[1]=g[1]+B*l[1],P[2]=g[2]+B*l[2],o.tA=A,o.tB=B,o.pA=w,o.pB=P,o.distance2=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(w,P),!0}const k={tA:0,tB:0,pA:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),pB:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),distance2:0},S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_3__["ObjectStack"]((()=>({origin:null,vector:null})));var y=Object.freeze({__proto__:null,create:p,wrap:v,copy:l,fromValues:m,fromPoints:b,distance2:h,distance:d,projectPoint:j,pointAt:M,projectPointClamp:A,closestRayDistance2:B,closestLineSegmentPoint:w,closestLineSegmentDistance2:P});


/***/ }),

/***/ "jdNP":
/*!************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultTextureUnits.js ***!
  \************************************************************************************/
/*! exports provided: DefaultTextureUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTextureUnits", function() { return S; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const S={DIFFUSE:0,NORMAL:1,EMISSION:2,OCCLUSION:3,METALLIC_ROUGHNESS:4,SSAO:6,SHADOW_MAP:7};


/***/ }),

/***/ "jpeq":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js ***!
  \**********************************************************************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return o; });
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat4f32.js */ "lwwL");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
var o;!function(n){function o(n,o,t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__["t"])(r,t,o),n.setUniform3fv("localOrigin",o),n.setUniformMatrix4fv("view",r)}n.bindCamPosition=function(i,n,o){i.setUniform3f("camPos",o[3]-n[0],o[7]-n[1],o[11]-n[2])},n.bindProjectionMatrix=function(i,n){i.setUniformMatrix4fv("proj",n)},n.bindNearFar=function(i,n){i.setUniform2fv("nearFar",n)},n.bindViewCustomOrigin=o,n.bindView=function(i,n){o(i,n.origin,n.camera.viewMatrix)},n.bindViewport=function(i,n){i.setUniform4fv("viewport",n.camera.fullViewport)}}(o||(o={}));const r=Object(_chunks_mat4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])();


/***/ }),

/***/ "lKY1":
/*!***********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js ***!
  \***********************************************************************************/
/*! exports provided: fetch, gltfToEngineResources, parseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gltfToEngineResources", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseUrl", function() { return K; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/devEnvironmentUtils.js */ "SbiP");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../support/buffer/BufferView.js */ "VeZB");
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec32.js */ "ZotJ");
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../geometry/support/aaBoundingBox.js */ "QmHG");
/* harmony import */ var _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../webgl-engine/lib/GeometryData.js */ "1PqF");
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../webgl-engine/lib/Geometry.js */ "Ango");
/* harmony import */ var _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../webgl-engine/materials/DefaultMaterial.js */ "262w");
/* harmony import */ var _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../webgl-engine/lib/Texture.js */ "Hizz");
/* harmony import */ var _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../glTF/DefaultLoadingContext.js */ "K2Cv");
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../chunks/vec22.js */ "3Fbu");
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../chunks/vec33.js */ "TJZZ");
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../chunks/vec43.js */ "HCB5");
/* harmony import */ var _support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../support/buffer/utils.js */ "SMQs");
/* harmony import */ var _glTF_loader_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../glTF/loader.js */ "PDsV");
/* harmony import */ var _glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../glTF/internal/indexUtils.js */ "CHx4");
/* harmony import */ var _wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./wosrLoader.js */ "IvV4");
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../chunks/vec42.js */ "5MHk");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
async function q(d,p){const g=K(Object(_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_4__["adjustStaticAGOUrl"])(d));if("wosr"===g.fileType){const e=await(p.cache?p.cache.loadWOSR(g.url,p):Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__["load"])(g.url,p)),t=Object(_wosrLoader_js__WEBPACK_IMPORTED_MODULE_22__["processLoadResult"])(e,p);return{lods:[t],referenceBoundingBox:t.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const h=await(p.cache?p.cache.loadGLTF(g.url,p):Object(_glTF_loader_js__WEBPACK_IMPORTED_MODULE_20__["load"])(new _glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__["DefaultLoadingContext"](p.streamDataRequester),g.url,p)),v=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["get"])(h.model.meta,"ESRI_proxyEllipsoid");h.meta.isEsriSymbolResource&&Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(v)&&-1!==h.meta.uri.indexOf("/RealisticTrees/")&&function(e,t){for(let m=0;m<e.model.lods.length;++m){const d=e.model.lods[m];e.customMeta.esriTreeRendering=!0;for(const p of d.parts){const d=p.attributes.normal;if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(d))return;const g=p.attributes.position,h=g.count,v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),M=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),w=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),R=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"],h),y=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],h),B=Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["a"])(Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__["a"])(),p.transform);for(let r=0;r<h;r++){g.getVec(r,M),d.getVec(r,v),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(M,M,p.transform),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(w,M,t.center),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["C"])(w,w,t.radius);const o=w[2],c=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(w),f=Math.min(.45+.55*c*c,1);Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["C"])(w,w,t.radius),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["i"])(w,w,B),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(w,w),m+1!==e.model.lods.length&&e.model.lods.length>1&&Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(w,w,v,o>-1?.2:Math.min(-4*o-3.8,1)),y.setVec(r,w),R.set(r,0,255*f),R.set(r,1,255*f),R.set(r,2,255*f),R.set(r,3,255)}p.attributes.normal=y,p.attributes.color=R}}}(h,v);const M=h.meta.isEsriSymbolResource?{usePBR:p.usePBR,isSchematic:!1,treeRendering:h.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:!0,isSchematic:!1,mrrFactors:[0,1,.5]},w={...p.materialParamsMixin,treeRendering:h.customMeta.esriTreeRendering};if(null!=g.specifiedLodIndex){const e=Q(h,M,w,g.specifiedLodIndex);let t=e[0].boundingBox;if(0!==g.specifiedLodIndex){t=Q(h,M,w,0)[0].boundingBox}return{lods:e,referenceBoundingBox:t,isEsriSymbolResource:h.meta.isEsriSymbolResource,isWosr:!1,remove:h.remove}}const R=Q(h,M,w);return{lods:R,referenceBoundingBox:R[0].boundingBox,isEsriSymbolResource:h.meta.isEsriSymbolResource,isWosr:!1,remove:h.remove}}function K(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Q(e,r,o,s){const i=e.model,a=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),n=new Array,u=new Map,l=new Map;return i.lods.forEach(((e,c)=>{if(void 0!==s&&c!==s)return;let m=0;const d={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["empty"])()};n.push(d),e.parts.forEach((s=>{const n=s.material+(s.attributes.normal?"_normal":"")+(s.attributes.color?"_color":"")+(s.attributes.texCoord0?"_texCoord0":"")+(s.attributes.tangent?"_tangent":""),c=i.materials.get(s.material),f=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.texCoord0),j=Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.normal);if(!u.has(n)){if(f){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor)&&!l.has(c.textureColor)){const e=i.textures.get(c.textureColor),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureColor,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e.data,c.textureColor,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal)&&!l.has(c.textureNormal)){const e=i.textures.get(c.textureNormal),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureNormal,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e.data,c.textureNormal,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion)&&!l.has(c.textureOcclusion)){const e=i.textures.get(c.textureOcclusion),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureOcclusion,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e.data,c.textureOcclusion,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive)&&!l.has(c.textureEmissive)){const e=i.textures.get(c.textureEmissive),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureEmissive,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e.data,c.textureEmissive,t))}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness)&&!l.has(c.textureMetallicRoughness)){const e=i.textures.get(c.textureMetallicRoughness),t={...e.parameters,preMultiplyAlpha:!0};l.set(c.textureMetallicRoughness,new _webgl_engine_lib_Texture_js__WEBPACK_IMPORTED_MODULE_14__["default"](e.data,c.textureMetallicRoughness,t))}}const e=Math.pow(c.color[0],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),a=Math.pow(c.color[1],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),m=Math.pow(c.color[2],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),d=Math.pow(c.emissiveFactor[0],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),p=Math.pow(c.emissiveFactor[1],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]),x=Math.pow(c.emissiveFactor[2],1/_webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["COLOR_GAMMA"]);u.set(n,new _webgl_engine_materials_DefaultMaterial_js__WEBPACK_IMPORTED_MODULE_13__["DefaultMaterial"]({...r,transparent:"BLEND"===c.alphaMode,textureAlphaMode:H(c.alphaMode),textureAlphaCutoff:c.alphaCutoff,diffuse:[e,a,m],ambient:[e,a,m],opacity:c.opacity,doubleSided:c.doubleSided,doubleSidedType:"winding-order",cullFace:c.doubleSided?0:2,vertexColors:!!s.attributes.color,vertexTangents:!!s.attributes.tangent,normals:j?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor)&&f?l.get(c.textureColor).id:void 0,colorMixMode:c.colorMixMode,normalTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal)&&f?l.get(c.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion)&&f?l.get(c.textureOcclusion).id:void 0,emissiveTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive)&&f?l.get(c.textureEmissive).id:void 0,metallicRoughnessTextureId:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness)&&f?l.get(c.textureMetallicRoughness).id:void 0,emissiveFactor:[d,p,x],mrrFactors:[c.metallicFactor,c.roughnessFactor,r.mrrFactors[2]],isSchematic:!1,...o},n))}const F=function(e,t){switch(t){case 4:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["trianglesToTriangles"])(e);case 5:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["triangleStripToTriangles"])(e);case 6:return Object(_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_21__["triangleFanToTriangles"])(e)}}(s.indices||s.attributes.position.count,s.primitiveType),_={},W={},$=s.attributes.position.count,q=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],$);if(Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["t"])(q,s.attributes.position,s.transform),W.position={data:q.typedBuffer,size:q.elementCount},_.position=F,Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.normal)){const e=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"],$);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__["n"])(a,s.transform),Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["a"])(e,s.attributes.normal,a),W.normal={data:e.typedBuffer,size:e.elementCount},_.normal=F}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.tangent)){const e=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"],$);Object(_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_7__["n"])(a,s.transform),Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["t"])(e,s.attributes.tangent,a),W.tangent={data:e.typedBuffer,size:e.elementCount},_.tangent=F}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.texCoord0)){const e=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec2f"],$);Object(_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_16__["n"])(e,s.attributes.texCoord0),W.uv0={data:e.typedBuffer,size:e.elementCount},_.uv0=F}if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s.attributes.color)){const e=Object(_support_buffer_utils_js__WEBPACK_IMPORTED_MODULE_19__["createBuffer"])(_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"],$);if(4===s.attributes.color.elementCount)s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4f"]?Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["s"])(e,s.attributes.color,255):s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u8"]?Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__["c"])(e,s.attributes.color):s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec4u16"]&&Object(_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_23__["s"])(e,s.attributes.color,1/256);else{Object(_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_18__["f"])(e,255,255,255,255);const t=new _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"](e.buffer,0,4);s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3f"]?Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["s"])(t,s.attributes.color,255):s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u8"]?Object(_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_17__["c"])(t,s.attributes.color):s.attributes.color instanceof _support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_8__["BufferViewVec3u16"]&&Object(_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__["s"])(t,s.attributes.color,1/256)}W.color={data:e.typedBuffer,size:e.elementCount},_.color=F}const K=new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_12__["default"](new _webgl_engine_lib_GeometryData_js__WEBPACK_IMPORTED_MODULE_11__["GeometryData"](W,_),`gltf_${e.name}_${m++}`);d.stageResources.geometries.push(K),d.stageResources.materials.push(u.get(n)),f&&(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureColor)&&d.stageResources.textures.push(l.get(c.textureColor)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureNormal)&&d.stageResources.textures.push(l.get(c.textureNormal)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureOcclusion)&&d.stageResources.textures.push(l.get(c.textureOcclusion)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureEmissive)&&d.stageResources.textures.push(l.get(c.textureEmissive)),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(c.textureMetallicRoughness)&&d.stageResources.textures.push(l.get(c.textureMetallicRoughness))),d.numberOfVertices+=$;const Q=K.boundingInfo;Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithVec3"])(d.boundingBox,Q.getBBMin()),Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_10__["expandWithVec3"])(d.boundingBox,Q.getBBMax())}))})),n}function H(e){switch(e){case"BLEND":return 0;case"MASK":return 2;case"OPAQUE":return 1;default:return 0}}


/***/ }),

/***/ "lwwL":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f32.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(){const r=new Float32Array(16);return r[0]=1,r[5]=1,r[10]=1,r[15]=1,r}function n(r){const n=new Float32Array(16);return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],n}function t(r,n,t,e,a,o,c,s,u,l,f,i,w,y,A,F){const _=new Float32Array(16);return _[0]=r,_[1]=n,_[2]=t,_[3]=e,_[4]=a,_[5]=o,_[6]=c,_[7]=s,_[8]=u,_[9]=l,_[10]=f,_[11]=i,_[12]=w,_[13]=y,_[14]=A,_[15]=F,_}function e(r,n){return new Float32Array(r,n,16)}const a=r();var o=Object.freeze({__proto__:null,create:r,clone:n,fromValues:t,createView:e,IDENTITY:a});


/***/ }),

/***/ "mY8Z":
/*!********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLDriverTest.js ***!
  \********************************************************************************/
/*! exports provided: clearTestWebGLDriver, testWebGLDriver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTestWebGLDriver", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testWebGLDriver", function() { return f; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/mathUtils.js */ "OKTS");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../webgl/Program.js */ "jjdI");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/* harmony import */ var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../webgl/BufferObject.js */ "fOQB");
/* harmony import */ var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../webgl/VertexArrayObject.js */ "D6bk");
/* harmony import */ var _doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doublePrecisionUtils.js */ "mmTy");
/* harmony import */ var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../webgl/FramebufferObject.js */ "0meK");
/* harmony import */ var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../webgl/RenderingContext.js */ "bfJE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class l{constructor(e){this.context=e,this._doublePrecisionRequiresObfuscation=null}get doublePrecisionRequiresObfuscation(){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._doublePrecisionRequiresObfuscation)){const e=p(this.context,!1),n=p(this.context,!0);this._doublePrecisionRequiresObfuscation=0!==e&&(0===n||e/n>5)}return this._doublePrecisionRequiresObfuscation}}let u=null;function f(n){return(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(u)||u.context!==n)&&(u=new l(n)),u}function v(e){Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(u)&&u.context===e&&(u=null)}function p(e,n){const l=new _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"](e,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1});const u=_webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"].createVertex(e,35044,new Uint16Array([0,0,1,0,0,1,1,1])),f=new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](e,{a_pos:0},{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:u}),v=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(5633261.287538229,2626832.878767164,1434988.0495278358),p=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__["f"])(5633271.46742708,2626873.6381334523,1434963.231608387),d=function(t,i){const r=new _webgl_Program_js__WEBPACK_IMPORTED_MODULE_3__["default"](e,`\n\n  precision highp float;\n\n  attribute vec2 a_pos;\n\n  uniform vec3 u_highA;\n  uniform vec3 u_lowA;\n  uniform vec3 u_highB;\n  uniform vec3 u_lowB;\n\n  varying vec4 v_color;\n\n  ${n?"#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION":""}\n\n  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION\n\n  vec3 dpPlusFrc(vec3 a, vec3 b) {\n    return mix(a, a + b, vec3(notEqual(b, vec3(0))));\n  }\n\n  vec3 dpMinusFrc(vec3 a, vec3 b) {\n    return mix(vec3(0), a - b, vec3(notEqual(a, b)));\n  }\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = dpPlusFrc(hiA, hiB);\n    vec3 e = dpMinusFrc(t1, hiA);\n    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;\n    return t1 + t2;\n  }\n\n  #else\n\n  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {\n    vec3 t1 = hiA + hiB;\n    vec3 e = t1 - hiA;\n    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;\n    return t1 + t2;\n  }\n\n  #endif\n\n  const float MAX_RGBA_FLOAT =\n    255.0 / 256.0 +\n    255.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 +\n    255.0 / 256.0 / 256.0 / 256.0 / 256.0;\n\n  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);\n\n  vec4 float2rgba(const float value) {\n    // Make sure value is in the domain we can represent\n    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);\n\n    // Decompose value in 32bit fixed point parts represented as\n    // uint8 rgba components. Decomposition uses the fractional part after multiplying\n    // by a power of 256 (this removes the bits that are represented in the previous\n    // component) and then converts the fractional part to 8bits.\n    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);\n\n    // Convert uint8 values (from 0 to 255) to floating point representation for\n    // the shader\n    const float toU8AsFloat = 1.0 / 255.0;\n\n    return fixedPointU8 * toU8AsFloat;\n  }\n\n  void main() {\n    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);\n\n    v_color = float2rgba(val.z / 25.0);\n\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  `,"\n  precision highp float;\n\n  varying vec4 v_color;\n\n  void main() {\n    gl_FragColor = v_color;\n  }\n  ",{a_pos:0}),s=new Float32Array(6);Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__["encodeDoubleArray"])(t,s,3);const a=new Float32Array(6);return Object(_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_7__["encodeDoubleArray"])(i,a,3),e.bindProgram(r),r.setUniform3f("u_highA",s[0],s[2],s[4]),r.setUniform3f("u_lowA",s[1],s[3],s[5]),r.setUniform3f("u_highB",a[0],a[2],a[4]),r.setUniform3f("u_lowB",a[1],a[3],a[5]),r}(v,p),h=e.getBoundFramebufferObject(),{x:m,y:b,width:_,height:A}=e.getViewport();e.bindFramebuffer(l),e.setViewport(0,0,1,1),e.bindVAO(f),e.drawArrays(5,0,4);const g=new Uint8Array(4);l.readPixels(0,0,1,1,6408,5121,g),d.dispose(),f.dispose(!1),u.dispose(),l.dispose(),e.setViewport(m,b,_,A),e.bindFramebuffer(h);const w=(v[2]-p[2])/25,F=Object(_Util_js__WEBPACK_IMPORTED_MODULE_4__["unpackFloatRGBA"])(g);return Math.abs(w-F)}


/***/ }),

/***/ "mmTy":
/*!*************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/doublePrecisionUtils.js ***!
  \*************************************************************************************/
/*! exports provided: decodeDoubleArray, encodeDouble, encodeDoubleArray, encodeDoubleArraySplit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeDoubleArray", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDouble", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArray", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleArraySplit", function() { return r; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function n(n,o){e[0]=n,e[1]=n-e[0],o[0]=e[0],o[1]=e[1]}function o(n,o,t){for(let r=0;r<t;++r)o[2*r]=n[r],o[2*r+1]=n[r]-o[2*r]}function t(n,o,t){for(let r=0;r<t;++r)o[r]=n[2*r]+n[2*r+1]}function r(n,t,r,c){for(let l=0;l<c;++l)f[0]=n[l],o(f,e,1),t[l]=e[0],r[l]=e[1]}const f=new Float64Array(1),e=new Float32Array(2);


/***/ }),

/***/ "oSUa":
/*!******************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/triangle.js ***!
  \******************************************************/
/*! exports provided: a, b, c, d, e, f, g, i, t, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return j; });
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3f64.js */ "Cy1f");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec3.js */ "5DEt");
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/ObjectStack.js */ "IRkY");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vec2.js */ "M0lq");
/* harmony import */ var _views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/support/stack.js */ "8JEK");
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lineSegment.js */ "jZU2");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function d(e){return e?{p0:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p0),p1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p1),p2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["b"])(e.p2)}:{p0:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),p1:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),p2:Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}}function j(t,n,e){const r=O.get();return r.p0=t,r.p1=n,r.p2=e,r}function b(t,n=d()){return v(t.p0,t.p1,t.p2,n)}function v(t,n,r,s=d()){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p0,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p1,n),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(s.p2,r),s}function w(t,n){const e=t.p0,a=t.p1,o=t.p2,c=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),a,e),i=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),o,a),u=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),e,o),l=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,e),d=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,a),j=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),n,o),b=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(c,c,u),v=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),c,b),l),w=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),i,b),d),_=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_views_3d_support_stack_js__WEBPACK_IMPORTED_MODULE_4__["sv3d"].get(),u,b),j);if(v>0&&w>0&&_>0){const t=Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(b,l);return t*t/Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(b,b)}const h=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(e,c,M.get()),n),k=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(a,i,M.get()),n),y=Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["d"])(Object(_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["f"])(o,u,M.get()),n);return Math.min(h,k,y)}function _(t,n,e){const r=1e-5,{direction:s,origin:p}=n,{p0:c,p1:i,p2:u}=t,f=i[0]-c[0],g=i[1]-c[1],m=i[2]-c[2],l=u[0]-c[0],d=u[1]-c[1],j=u[2]-c[2],b=s[1]*j-d*s[2],v=s[2]*l-j*s[0],w=s[0]*d-l*s[1],_=f*b+g*v+m*w;if(_>-r&&_<r)return!1;const h=1/_,k=p[0]-c[0],y=p[1]-c[1],M=p[2]-c[2],O=h*(k*b+y*v+M*w);if(O<0||O>1)return!1;const P=y*m-g*M,S=M*f-m*k,q=k*g-f*y,x=h*(s[0]*P+s[1]*S+s[2]*q);if(x<0||O+x>1)return!1;if(e){Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(e,s,h*(l*P+d*S+j*q)),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(e,p,e)}return!0}function h(t,n,e){const r=Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(t,n),s=Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(n,e),p=Object(_vec2_js__WEBPACK_IMPORTED_MODULE_3__["i"])(e,t),a=(r+s+p)/2,o=a*(a-r)*(a-s)*(a-p);return o<=0?0:Math.sqrt(o)}function k(t){return h(t.p0,t.p1,t.p2)}function y(t,n,e){return Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(P,n,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(S,e,t),Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(Object(_vec3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(P,P,S))/2}const M=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__["ObjectStack"](_lineSegment_js__WEBPACK_IMPORTED_MODULE_5__["c"]),O=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__["ObjectStack"]((()=>({p0:null,p1:null,p2:null}))),P=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),S=Object(_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])();var q=Object.freeze({__proto__:null,create:d,wrap:j,copy:b,fromValues:v,distance2:w,intersectRay:_,areaPoints2d:h,area2d:k,areaPoints3d:y});


/***/ }),

/***/ "p9cc":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: PBRSchematicMRRValues, PhysicallyBasedRenderingParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PBRSchematicMRRValues", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicallyBasedRenderingParameters", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../attributes/VertexTextureCoordinates.glsl.js */ "fLTx");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0,.6,.2);function r(s,t){const r=s.fragment,a=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;1===t.pbrMode&&a&&s.include(_attributes_VertexTextureCoordinates_glsl_js__WEBPACK_IMPORTED_MODULE_2__["VertexTextureCoordinates"],t),2!==t.pbrMode?(0===t.pbrMode&&r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float getBakedOcclusion() { return 1.0; }
  `),1===t.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}!function(e){e.bindUniforms=function(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}}(r||(r={}));


/***/ }),

/***/ "qXiY":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js ***!
  \*********************************************************************************/
/*! exports provided: I3SVerticalOffsetGlobalViewingMode, IntersectorOptions, IntersectorResult, IntersectorResults, IntersectorTransform, Object3DVerticalOffsetGlobalViewingMode, TERRAIN_ID, TerrainVerticalOffsetGlobalViewingMode, getVerticalOffsetI3S, getVerticalOffsetObject3D, getVerticalOffsetTerrain, sliceFilterPredicate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I3SVerticalOffsetGlobalViewingMode", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorOptions", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorResult", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorResults", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectorTransform", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DVerticalOffsetGlobalViewingMode", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TERRAIN_ID", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerrainVerticalOffsetGlobalViewingMode", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetI3S", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetObject3D", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalOffsetTerrain", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliceFilterPredicate", function() { return q; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../chunks/quatf64.js */ "sTkM");
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../chunks/vec4f64.js */ "D8Ta");
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../chunks/mat3.js */ "HJJS");
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../chunks/vec4.js */ "dXfX");
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../chunks/quat.js */ "BPBZ");
/* harmony import */ var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../chunks/vec3f32.js */ "R/jG");
/* harmony import */ var _chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../chunks/boundedPlane.js */ "DZ/s");
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../chunks/sphere.js */ "+JUG");
/* harmony import */ var _support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../support/geometryUtils.js */ "0Kx6");
/* harmony import */ var _Object3D_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Object3D.js */ "WiJz");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function q(t){return(s,r,e)=>(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(K,s,r,e),!Object(_chunks_boundedPlane_js__WEBPACK_IMPORTED_MODULE_12__["e"])(t,K))}class V{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.store=2}}class j{constructor(){this._transform=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),this._transformInverse=new w({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["a"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]),this._transformInverseTranspose=new w(this._transformInverse,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]),this._transformTranspose=new w({value:this._transform},_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["b"],_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"]),this._transformInverseRotation=new w({value:this._transform},_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_8__["b"],_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__["a"])}invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t)}multiplyTransform(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["m"])(this._transform,this._transform,t)}set(t){Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this._transform,t),this.invalidateLazyTransforms()}setAndInvalidateLazyTransforms(t,s){this.setTransformMatrix(t),this.multiplyTransform(s),this.invalidateLazyTransforms()}}class w{constructor(t,s,r){this.original=t,this.update=s,this.dirty=!0,this.transform=r()}invalidate(){this.dirty=!0}get value(){return this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1),this.transform}}class k{constructor(){this.min=new G,this.max=new G,this.hud=new G,this.ground=new G}init(t){this.min.init(t),this.max.init(t),this.hud.init(t),this.ground.init(t),this.all=[]}}class G{constructor(t){this.normal=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.transformation=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),this._ray=_support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].create(),this.init(t)}get ray(){return this._ray}get hasIntersectionPoint(){return null!=this.dist}get distanceInRenderSpace(){if(null!=this.dist)return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(Q,this.ray.direction,this.dist),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["l"])(Q)}getIntersectionPoint(t){return!!this.hasIntersectionPoint&&(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["a"])(Q,this.ray.direction,this.dist),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(t,this.ray.origin,Q),!0)}getTransformedNormal(t){return Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(W,this.normal),W[3]=0,Object(_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_9__["t"])(W,W,this.transformation),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(t,W),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["n"])(t,t),t}init(t){this.dist=void 0,this.target=void 0,this.name=void 0,this.drapedLayerOrder=void 0,this.drapedLayerGraphicOrder=void 0,this.center=null,this.geometryId=null,this.triangleNr=null,this.intersector="Stage",t?_support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].copy(t,this._ray):this._ray=_support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].create()}set(t,s,r,e,a,n,h,o,l,f){t instanceof _Object3D_js__WEBPACK_IMPORTED_MODULE_15__["default"]&&(t={type:"stage",obj:t}),this.dist=r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.normal,e),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.transformation,a),this.target=t,this.name=s,this.drapedLayerOrder=n,this.center=h?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(h):null,this.geometryId=o,this.triangleNr=l,this.drapedLayerGraphicOrder=f}copyFrom(t){_support_geometryUtils_js__WEBPACK_IMPORTED_MODULE_14__["ray"].copy(t._ray,this._ray),this.dist=t.dist,this.target=t.target,this.name=t.name,this.drapedLayerOrder=t.drapedLayerOrder,this.center=t.center?Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(t.center):null,this.geometryId=t.geometryId,this.triangleNr=t.triangleNr,this.intersector=t.intersector,this.drapedLayerGraphicOrder=t.drapedLayerGraphicOrder,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.normal,t.normal),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.transformation,t.transformation)}toOwner(t){if(!this.target)return null;switch(this.target.type){case"stage":return U(this.target.obj.metadata,t);case"external":switch(this.intersector){case"PointRenderer":return function(t,s){const r=t.metadata.layerUid;return null!=r?s.map.findLayerByUid(r):null}(this.target,t);case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return U(this.target.metadata,t);case"TerrainRenderer":return t.map&&t.map.ground}}return null}toGraphic(t){if(!this.target)return null;switch(this.target.type){case"stage":return R(this.target.obj.metadata,t);case"external":switch(this.intersector){case"PointRenderer":return this.target.metadata.createGraphic();case"I3S":case"IM":case"LodRenderer":case"OverlayRenderer":return R(this.target.metadata,t)}}return null}}function U(r,e){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)||null==r.layerUid?null:Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.graphicsView)&&r.layerUid===e.graphicsView.mockLayerId?e.graphics:e.map.findLayerByUid(r.layerUid)}function R(e,i){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e))return null;const a=U(e,i);if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(a))return null;if(a===i.graphics)return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(i.graphicsView)?Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(i.graphicsView.getGraphicFromGraphicUid(e.graphicUid)):null;const n=i.allLayerViews.find((t=>t.layer===a));return n?function(t,s){if(!t||t.suspended)return null;if("getGraphicFromIntersectorMetadata"in t&&s)return t.getGraphicFromIntersectorMetadata(s);if("getGraphicFromGraphicUid"in t&&null!=s.graphicUid)return t.getGraphicFromGraphicUid(s.graphicUid);return null}(n,e):null}class F{constructor(t=0){this.offset=t,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}applyToVertex(t,s,r){const e=t+this.localOrigin[0],i=s+this.localOrigin[1],a=r+this.localOrigin[2],n=this.offset/Math.sqrt(e*e+i*i+a*a);return this.tmpVertex[0]=t+e*n,this.tmpVertex[1]=s+i*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(t){const s=t[0]+this.localOrigin[0],r=t[1]+this.localOrigin[1],e=t[2]+this.localOrigin[2],i=t[3]+this.localOrigin[0],a=t[4]+this.localOrigin[1],n=t[5]+this.localOrigin[2],h=this.offset/Math.sqrt(s*s+r*r+e*e);t[0]+=s*h,t[1]+=r*h,t[2]+=e*h;const o=this.offset/Math.sqrt(i*i+a*a+n*n);return t[3]+=i*o,t[4]+=a*o,t[5]+=n*o,t}}class P{constructor(t=0){this.offset=t,this.componentLocalOriginLength=0,this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.mbs=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),this.obb={center:Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),halfSize:Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_11__["c"])(),quaternion:null}}set localOrigin(t){this.componentLocalOriginLength=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])}applyToVertex(t,s,r){const e=t,i=s,a=r+this.componentLocalOriginLength,n=this.offset/Math.sqrt(e*e+i*i+a*a);return this.tmpVertex[0]=t+e*n,this.tmpVertex[1]=s+i*n,this.tmpVertex[2]=r+a*n,this.tmpVertex}applyToAabb(t){const s=t[0],r=t[1],e=t[2]+this.componentLocalOriginLength,i=t[3],a=t[4],n=t[5]+this.componentLocalOriginLength,h=this.offset/Math.sqrt(s*s+r*r+e*e);t[0]+=s*h,t[1]+=r*h,t[2]+=e*h;const o=this.offset/Math.sqrt(i*i+a*a+n*n);return t[3]+=i*o,t[4]+=a*o,t[5]+=n*o,t}applyToMbs(t){const s=Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]),r=this.offset/s;return this.mbs[0]=t[0]+t[0]*r,this.mbs[1]=t[1]+t[1]*r,this.mbs[2]=t[2]+t[2]*r,this.mbs[3]=t[3]+t[3]*this.offset/s,this.mbs}applyToObb(t){const s=t.center,r=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);this.obb.center[0]=s[0]+s[0]*r,this.obb.center[1]=s[1]+s[1]*r,this.obb.center[2]=s[2]+s[2]*r,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["q"])(this.obb.halfSize,t.halfSize,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.obb.halfSize,this.obb.halfSize,t.center);const e=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*e,this.obb.halfSize[1]+=this.obb.halfSize[1]*e,this.obb.halfSize[2]+=this.obb.halfSize[2]*e,Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.obb.halfSize,this.obb.halfSize,t.center),Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_10__["c"])(X,t.quaternion),Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["q"])(this.obb.halfSize,this.obb.halfSize,X),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=t.quaternion,this.obb}}class N{constructor(t=0){this.offset=t,this.sphere=Object(_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_13__["c"])(),this.tmpVertex=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}applyToVertex(t,s,r){const e=this.objectTransform.transform;let i=e[0]*t+e[4]*s+e[8]*r+e[12],a=e[1]*t+e[5]*s+e[9]*r+e[13],n=e[2]*t+e[6]*s+e[10]*r+e[14];const h=this.offset/Math.sqrt(i*i+a*a+n*n);i+=i*h,a+=a*h,n+=n*h;const o=this.objectTransform.inverse;return this.tmpVertex[0]=o[0]*i+o[4]*a+o[8]*n+o[12],this.tmpVertex[1]=o[1]*i+o[5]*a+o[9]*n+o[13],this.tmpVertex[2]=o[2]*i+o[6]*a+o[10]*n+o[14],this.tmpVertex}applyToMinMax(t,s){const r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*r,t[1]+=t[1]*r,t[2]+=t[2]*r;const e=this.offset/Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);s[0]+=s[0]*e,s[1]+=s[1]*e,s[2]+=s[2]*e}applyToAabb(t){const s=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*s,t[1]+=t[1]*s,t[2]+=t[2]*s;const r=this.offset/Math.sqrt(t[3]*t[3]+t[4]*t[4]+t[5]*t[5]);return t[3]+=t[3]*r,t[4]+=t[4]*r,t[5]+=t[5]*r,t}applyToBoundingSphere(t,s){const r=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]),e=this.offset/r;return this.sphere.center[0]=s[0]+s[0]*e,this.sphere.center[1]=s[1]+s[1]*e,this.sphere.center[2]=s[2]+s[2]*e,this.sphere.radius=t+t*this.offset/r,this.sphere}}const A=new N;function B(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)?(A.offset=t,A):null}const D=new P;function C(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)?(D.offset=t,D):null}const E=new F;function H(t){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t)?(E.offset=t,E):null}const J="terrain",K=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),Q=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),W=Object(_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__["a"])(),X=Object(_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_6__["a"])();


/***/ }),

/***/ "qrV2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: Normals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Normals", function() { return r; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function r(r,e){const m=r.fragment;m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    struct ShadingNormalParameters {
      vec3 normalView;
      vec3 viewDirection;
    } shadingParams;
    `),1===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
      }
    `):2===e.doubleSidedMode?m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
      }
    `):m.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 shadingNormal(ShadingNormalParameters params) {
        return normalize(params.normalView);
      }
    `)}


/***/ }),

/***/ "r+FG":
/*!*****************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat4f64.js ***!
  \*****************************************************/
/*! exports provided: I, a, b, c, f, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return o; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m){return[e,r,n,t,a,o,c,u,s,f,i,l,_,I,b,m]}function t(e,r){return new Float64Array(e,r,16)}const a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];var o=Object.freeze({__proto__:null,create:e,clone:r,fromValues:n,createView:t,IDENTITY:a});


/***/ }),

/***/ "sJp1":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js ***!
  \*****************************************************************************************************************/
/*! exports provided: PositionAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionAttribute", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o){o.attributes.add("position","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    vec3 positionModel() { return position; }
  `)}


/***/ }),

/***/ "sKsC":
/*!****************************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/RealisticTree.glsl.js ***!
  \****************************************************************/
/*! exports provided: R, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return L; });
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js */ "Tbkp");
/* harmony import */ var _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js */ "aQrP");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js */ "0nJL");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js */ "viRi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl.js */ "69UF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VerticalOffset.glsl.js */ "F7CJ");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js */ "bVvB");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js */ "0BfS");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js */ "vXUg");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRendering.glsl.js */ "XV/G");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js */ "1TnO");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js */ "368d");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/PhysicallyBasedRenderingParameters.glsl.js */ "p9cc");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js */ "F8o4");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js */ "wzLF");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js */ "sJp1");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js */ "bLIi");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js */ "fiGu");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateAmbientOcclusion.glsl.js */ "cIib");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/shading/EvaluateSceneLighting.glsl.js */ "6kvK");
/* harmony import */ var _views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js */ "NiZE");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function L(L){const M=new _views_3d_webgl_engine_core_shaderModules_ShaderBuilder_js__WEBPACK_IMPORTED_MODULE_2__["ShaderBuilder"],j=M.vertex.code,O=M.fragment.code;return M.vertex.uniforms.add("proj","mat4").add("view","mat4").add("camPos","vec3").add("localOrigin","vec3"),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_16__["PositionAttribute"]),M.varyings.add("vpos","vec3"),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_VisualVariables_glsl_js__WEBPACK_IMPORTED_MODULE_4__["VisualVariables"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_InstancedDoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_11__["InstancedDoublePrecision"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VerticalOffset_glsl_js__WEBPACK_IMPORTED_MODULE_6__["VerticalOffset"],L),0!==L.output&&7!==L.output||(M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_NormalAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_15__["NormalAttribute"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_Transform_glsl_js__WEBPACK_IMPORTED_MODULE_1__["Transform"],{linearDepth:!1}),L.offsetBackfaces&&M.include(_views_3d_webgl_engine_core_shaderLibrary_Offset_glsl_js__WEBPACK_IMPORTED_MODULE_14__["Offset"]),L.instancedColor&&M.attributes.add("instanceColor","vec4"),M.varyings.add("vNormalWorld","vec3"),M.varyings.add("localvpos","vec3"),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_TextureCoordinateAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_12__["TextureCoordinateAttribute"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_ForwardLinearDepth_glsl_js__WEBPACK_IMPORTED_MODULE_9__["ForwardLinearDepth"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_SymbolColor_glsl_js__WEBPACK_IMPORTED_MODULE_17__["SymbolColor"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_attributes_VertexColor_glsl_js__WEBPACK_IMPORTED_MODULE_7__["VertexColor"],L),M.vertex.uniforms.add("externalColor","vec4"),M.varyings.add("vcolorExt","vec4"),j.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${L.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"].float(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["symbolAlphaCutoff"])}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${L.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, camPos);":""}
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),7===L.output&&(M.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],L),M.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),M.fragment.uniforms.add("view","mat4"),L.hasColorTexture&&M.fragment.uniforms.add("tex","sampler2D"),M.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]),O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${L.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${L.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 texColor = vec4(1.0);`}
        ${L.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),0===L.output&&(M.include(_views_3d_webgl_engine_core_shaderLibrary_Slice_glsl_js__WEBPACK_IMPORTED_MODULE_3__["Slice"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateSceneLighting_glsl_js__WEBPACK_IMPORTED_MODULE_20__["EvaluateSceneLighting"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_EvaluateAmbientOcclusion_glsl_js__WEBPACK_IMPORTED_MODULE_19__["EvaluateAmbientOcclusion"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_util_AlphaDiscard_glsl_js__WEBPACK_IMPORTED_MODULE_5__["DiscardOrAdjustAlpha"],L),L.receiveShadows&&M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_ReadShadowMap_glsl_js__WEBPACK_IMPORTED_MODULE_8__["ReadShadowMap"],L),M.fragment.uniforms.add("camPos","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),M.fragment.uniforms.add("view","mat4"),L.hasColorTexture&&M.fragment.uniforms.add("tex","sampler2D"),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRenderingParameters_glsl_js__WEBPACK_IMPORTED_MODULE_13__["PhysicallyBasedRenderingParameters"],L),M.include(_views_3d_webgl_engine_core_shaderLibrary_shading_PhysicallyBasedRendering_glsl_js__WEBPACK_IMPORTED_MODULE_10__["PhysicallyBasedRendering"],L),M.fragment.include(_views_3d_webgl_engine_core_shaderLibrary_util_MixExternalColor_glsl_js__WEBPACK_IMPORTED_MODULE_21__["MixExternalColor"]),O.add(_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void main() {
        discardBySlice(vpos);
        ${L.hasColorTexture?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec4 texColor = texture2D(tex, vuv0);
        ${L.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - camPos);
        ${1===L.pbrMode?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = _oldHeuristicLighting(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${L.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":1===L.viewingMode?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${L.attributeColor?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(-viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${1===L.pbrMode||2===L.pbrMode?1===L.viewingMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 normalGround = normalize(vpos + localOrigin);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]``}
        ${1===L.pbrMode||2===L.pbrMode?_views_3d_webgl_engine_core_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${L.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),M.include(_views_3d_webgl_engine_core_shaderLibrary_default_DefaultMaterialAuxiliaryPasses_glsl_js__WEBPACK_IMPORTED_MODULE_18__["DefaultMaterialAuxiliaryPasses"],L),M}var M=Object.freeze({__proto__:null,build:L});


/***/ }),

/***/ "thYK":
/*!*****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/PooledArray.js */ "ikTR");
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../chunks/vec3.js */ "5DEt");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "EVMh");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class b{constructor(i,h,a,o){this.primitiveIndices=i,this._numIndexPerPrimitive=h,this.indices=a,this._position=o,this.center=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(i.length>=1),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length%this._numIndexPerPrimitive==0),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(a.length>=i.length*this._numIndexPerPrimitive),Object(_Util_js__WEBPACK_IMPORTED_MODULE_3__["assert"])(3===this._position.size||4===this._position.size);const{data:c,offsetIdx:d,strideIdx:m}=this._position;let M=0;const l=i.length;let u=d+m*a[this._numIndexPerPrimitive*i[M]];for(b.tmpIndices.clear(),b.tmpIndices.push(u),this.bbMin=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(c[u],c[u+1],c[u+2]),this.bbMax=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.bbMin);M<l;++M){const t=this._numIndexPerPrimitive*i[M];for(let i=0;i<this._numIndexPerPrimitive;++i){u=d+m*a[t+i],b.tmpIndices.push(u);let s=c[u];this.bbMin[0]=Math.min(s,this.bbMin[0]),this.bbMax[0]=Math.max(s,this.bbMax[0]),s=c[u+1],this.bbMin[1]=Math.min(s,this.bbMin[1]),this.bbMax[1]=Math.max(s,this.bbMax[1]),s=c[u+2],this.bbMin[2]=Math.min(s,this.bbMin[2]),this.bbMax[2]=Math.max(s,this.bbMax[2])}}Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this.center,this.bbMin,this.bbMax,.5),this.bsRadius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let x=this.bsRadius*this.bsRadius;for(M=0;M<b.tmpIndices.length;++M){u=b.tmpIndices.data[M];const i=c[u]-this.center[0],t=c[u+1]-this.center[1],s=c[u+2]-this.center[2],e=i*i+t*t+s*s;if(e<=x)continue;const n=Math.sqrt(e),h=.5*(n-this.bsRadius);this.bsRadius=this.bsRadius+h,x=this.bsRadius*this.bsRadius;const r=h/n;this.center[0]+=i*r,this.center[1]+=t*r,this.center[2]+=s*r}b.tmpIndices.clear()}getCenter(){return this.center}getBSRadius(){return this.bsRadius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getPrimitiveIndices(){return this.primitiveIndices}getIndices(){return this.indices}getPosition(){return this._position}getChildren(){if(this._children)return this._children;if(Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.bbMin,this.bbMax)>1){const i=Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__["e"])(Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["c"])(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,e=new Uint8Array(s),h=new Array(8);for(let i=0;i<8;++i)h[i]=0;const{data:r,offsetIdx:a,strideIdx:o}=this._position;for(let t=0;t<s;++t){let s=0;const n=this._numIndexPerPrimitive*this.primitiveIndices[t];let b=a+o*this.indices[n],c=r[b],d=r[b+1],m=r[b+2];for(let i=1;i<this._numIndexPerPrimitive;++i){b=a+o*this.indices[n+i];const t=r[b],s=r[b+1],e=r[b+2];t<c&&(c=t),s<d&&(d=s),e<m&&(m=e)}c<i[0]&&(s|=1),d<i[1]&&(s|=2),m<i[2]&&(s|=4),e[t]=s,++h[s]}let c=0;for(let i=0;i<8;++i)h[i]>0&&++c;if(c<2)return;const d=new Array(8);for(let i=0;i<8;++i)d[i]=h[i]>0?new Uint32Array(h[i]):void 0;for(let i=0;i<8;++i)h[i]=0;for(let i=0;i<s;++i){const t=e[i];d[t][h[t]++]=this.primitiveIndices[i]}this._children=new Array(8);for(let i=0;i<8;++i)void 0!==d[i]&&(this._children[i]=new b(d[i],this._numIndexPerPrimitive,this.indices,this._position))}return this._children}}!function(t){t.tmpIndices=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_0__["default"]({deallocator:null})}(b||(b={}));var a=b;/* harmony default export */ __webpack_exports__["default"] = (a);


/***/ }),

/***/ "tiP8":
/*!**************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js ***!
  \**************************************************************************************/
/*! exports provided: acquireMaterials, addObject3DStateID, calculateTransformRelToOrigin, encodeDoubleVec3, isInstanceHidden, releaseMaterials, removeObject3DStateID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acquireMaterials", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addObject3DStateID", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTransformRelToOrigin", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeDoubleVec3", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInstanceHidden", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseMaterials", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeObject3DStateID", function() { return l; });
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../core/maybe.js */ "srIe");
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../chunks/mat4.js */ "15Hh");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _lib_Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/Util.js */ "EVMh");
/* harmony import */ var _lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/doublePrecisionUtils.js */ "mmTy");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function u(t,r){return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)&&(t=[]),t.push(r),t}function l(t,r){if(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t))return t;const s=t.filter((e=>e!==r));return 0===s.length?null:s}function f(e){return!!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)&&!e.visible}function m(e,t){const r=new Map;return r.set(0,t.acquire(e,0)),r.set(1,t.acquire(e,7)),r.set(4,t.acquire(e,3)),r.set(3,t.acquire(e,2)),r.set(2,t.acquire(e,1)),r.set(5,t.acquire(e,4)),r}function p(e,t){t.release(e,0),t.release(e,7),t.release(e,3),t.release(e,2),t.release(e,1),t.release(e,4)}function b(e,o,c){const u=e.origin.vec3;Object(_lib_Util_js__WEBPACK_IMPORTED_MODULE_3__["setMatrixTranslation3"])(h,-u[0],-u[1],-u[2]),Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e.transformation)?Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["m"])(o,h,e.transformation):Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(o,h),c&&(Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["a"])(c,o),Object(_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_1__["b"])(c,c))}function q(e,t,r,s,n){g[0]=e.get(t,0),g[1]=e.get(t,1),g[2]=e.get(t,2),Object(_lib_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_4__["encodeDoubleArray"])(g,j,3),r.set(n,0,j[0]),s.set(n,0,j[1]),r.set(n,1,j[2]),s.set(n,1,j[3]),r.set(n,2,j[4]),s.set(n,2,j[5])}const g=new Float64Array(3),j=new Float32Array(6),h=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])();


/***/ }),

/***/ "vEBI":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js ***!
  \**************************************************************************************************************/
/*! exports provided: VertexPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexPosition", function() { return t; });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chunks/vec3f64.js */ "Cy1f");
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../chunks/mat3f64.js */ "2uVf");
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../chunks/mat4f64.js */ "r+FG");
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/DoublePrecision.glsl.js */ "aiF/");
/* harmony import */ var _PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PositionAttribute.glsl.js */ "sJp1");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(o,r){o.include(_PositionAttribute_glsl_js__WEBPACK_IMPORTED_MODULE_5__["PositionAttribute"]),o.vertex.include(_util_DoublePrecision_glsl_js__WEBPACK_IMPORTED_MODULE_4__["DoublePrecision"],r),o.varyings.add("vPositionWorldCameraRelative","vec3"),o.varyings.add("vPosition_view","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_RS","mat3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromModel_TL","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TH","vec3"),o.vertex.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.vertex.uniforms.add("uTransform_ViewFromCameraRelative_RS","mat3"),o.vertex.uniforms.add("uTransform_ProjFromView","mat4"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    // compute position in world space orientation, but relative to the camera position
    vec3 positionWorldCameraRelative() {
      vec3 rotatedModelPosition = uTransform_WorldFromModel_RS * positionModel();

      vec3 transform_CameraRelativeFromModel = dpAdd(
        uTransform_WorldFromModel_TL,
        uTransform_WorldFromModel_TH,
        -uTransform_WorldFromView_TL,
        -uTransform_WorldFromView_TH
      );

      return transform_CameraRelativeFromModel + rotatedModelPosition;
    }

    // position in view space, that is relative to the camera position and orientation
    vec3 position_view() {
      return uTransform_ViewFromCameraRelative_RS * positionWorldCameraRelative();
    }

    // compute gl_Position and forward related varyings to fragment shader
    void forwardPosition() {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      vPosition_view = position_view();
      gl_Position = uTransform_ProjFromView * vec4(vPosition_view, 1.0);
    }

    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `),o.fragment.uniforms.add("uTransform_WorldFromView_TL","vec3"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_3__["glsl"]`
    vec3 positionWorld() {
      return uTransform_WorldFromView_TL + vPositionWorldCameraRelative;
    }
  `)}!function(i){i.ModelTransform=class{constructor(){this.worldFromModel_RS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),this.worldFromModel_TH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.worldFromModel_TL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])()}};i.ViewProjectionTransform=class{constructor(){this.worldFromView_TH=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.worldFromView_TL=Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__["c"])(),this.viewFromCameraRelative_RS=Object(_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),this.projFromView=Object(_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_2__["a"])()}},i.bindModelTransform=function(o,r){o.setUniformMatrix3fv("uTransform_WorldFromModel_RS",r.worldFromModel_RS),o.setUniform3fv("uTransform_WorldFromModel_TH",r.worldFromModel_TH),o.setUniform3fv("uTransform_WorldFromModel_TL",r.worldFromModel_TL)},i.bindViewProjTransform=function(o,r){o.setUniform3fv("uTransform_WorldFromView_TH",r.worldFromView_TH),o.setUniform3fv("uTransform_WorldFromView_TL",r.worldFromView_TL),o.setUniformMatrix4fv("uTransform_ProjFromView",r.projFromView),o.setUniformMatrix3fv("uTransform_ViewFromCameraRelative_RS",r.viewFromCameraRelative_RS)}}(t||(t={}));


/***/ }),

/***/ "vXUg":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: ForwardLinearDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForwardLinearDepth", function() { return a; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function a(a,r){0===r.output&&r.receiveShadows?(a.varyings.add("linearDepth","float"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardLinearDepth() { linearDepth = gl_Position.w; }
    `)):1===r.output||3===r.output?(a.varyings.add("linearDepth","float"),a.vertex.uniforms.add("uCameraNearFar","vec2"),a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardLinearDepth() {
        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);
      }
    `)):a.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void forwardLinearDepth() {}
    `)}


/***/ }),

/***/ "viRi":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/VisualVariables.glsl.js ***!
  \************************************************************************************************************/
/*! exports provided: VisualVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualVariables", function() { return v; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function v(v,o){o.vvInstancingEnabled&&(o.vvSize||o.vvColor)&&v.attributes.add("instanceFeatureAttribute","vec4"),o.vvSize?(v.vertex.uniforms.add("vvSizeMinSize","vec3"),v.vertex.uniforms.add("vvSizeMaxSize","vec3"),v.vertex.uniforms.add("vvSizeOffset","vec3"),v.vertex.uniforms.add("vvSizeFactor","vec3"),v.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),v.vertex.uniforms.add("vvSymbolAnchor","vec3"),v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 vvScale(vec4 _featureAttribute) {
        return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
      }

      vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
        return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
      }
    `),v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 localPosition() { return vec4(position, 1.0); }

      vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }
    `),o.vvColor?(v.vertex.defines.addInt("VV_COLOR_N",8),v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      uniform float vvColorValues[VV_COLOR_N];
      uniform vec4 vvColorColors[VV_COLOR_N];

      vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < VV_COLOR_N; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[VV_COLOR_N - 1];
      }

      ${o.vvInstancingEnabled?_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):v.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec4 vvColor() { return vec4(1.0); }
    `)}!function(e){function v(e,v){v.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",v.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",v.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",v.vvSizeOffset),e.setUniform3fv("vvSizeFactor",v.vvSizeFactor)),v.vvColorEnabled&&(e.setUniform1fv("vvColorValues",v.vvColorValues),e.setUniform4fv("vvColorColors",v.vvColorColors))}e.bindUniforms=v,e.bindUniformsWithOpacity=function(e,o){v(e,o),o.vvOpacityEnabled&&(e.setUniform1fv("vvOpacityValues",o.vvOpacityValues),e.setUniform1fv("vvOpacityOpacities",o.vvOpacityOpacities))},e.bindUniformsForSymbols=function(e,o){v(e,o),o.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",o.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",o.vvSymbolRotationMatrix))}}(v||(v={}));


/***/ }),

/***/ "w6Td":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ReloadableShaderModule.js ***!
  \********************************************************************************************************/
/*! exports provided: ReloadableShaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadableShaderModule", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class t{constructor(t,o){this._module=t,this._loadModule=o}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}


/***/ }),

/***/ "wMH/":
/*!***************************************************!*\
  !*** ./node_modules/@arcgis/core/chunks/mat32.js ***!
  \***************************************************/
/*! exports provided: c, m */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return t; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function e(e,t,r){const d=e.typedBuffer,f=e.typedBufferStride,n=t.typedBuffer,o=t.typedBufferStride,c=r?r.count:t.count;let u=(r&&r.dstIndex?r.dstIndex:0)*f,p=(r&&r.srcIndex?r.srcIndex:0)*o;for(let e=0;e<c;++e){for(let e=0;e<9;++e)d[u+e]=n[p+e];u+=f,p+=o}}var t=Object.freeze({__proto__:null,copy:e});


/***/ }),

/***/ "wtEh":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputDepth.glsl.js ***!
  \*******************************************************************************************************/
/*! exports provided: OutputDepth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputDepth", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/RgbaFloatEncoding.glsl.js */ "UBvB");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o,e){o.fragment.include(_util_RgbaFloatEncoding_glsl_js__WEBPACK_IMPORTED_MODULE_1__["RgbaFloatEncoding"]),3===e.output?(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      float _calculateFragDepth(const in float depth) {
        // calc polygon offset
        const float SLOPE_SCALE = 2.0;
        const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
        float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
        float result = depth + SLOPE_SCALE * m + BIAS;
        return clamp(result, .0, .999999);
      }

      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
      }
    `)):1===e.output&&o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      void outputDepth(float _linearDepth) {
        gl_FragColor = float2rgba(_linearDepth);
      }
    `)}


/***/ }),

/***/ "wzLF":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js ***!
  \***************************************************************************************************************/
/*! exports provided: NormalAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NormalAttribute", function() { return o; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/* harmony import */ var _util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/DecodeNormal.glsl.js */ "ZS5L");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function o(o,d){0===d.normalType&&(o.attributes.add("normal","vec3"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 normalModel() {
        return normal;
      }
    `)),1===d.normalType&&(o.include(_util_DecodeNormal_glsl_js__WEBPACK_IMPORTED_MODULE_1__["DecodeNormal"]),o.attributes.add("normalCompressed","vec2"),o.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 normalModel() {
        return decodeNormal(normalCompressed);
      }
    `)),3===d.normalType&&(o.extensions.add("GL_OES_standard_derivatives"),o.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
      vec3 screenDerivativeNormal(vec3 positionView) {
        return normalize(cross(dFdx(positionView), dFdy(positionView)));
      }
    `))}


/***/ }),

/***/ "xRv2":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js ***!
  \****************************************************************************************************/
/*! exports provided: PiUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiUtils", function() { return t; });
/* harmony import */ var _shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shaderModules/interfaces.js */ "OIYib");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
function t(t){t.vertex.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    const float PI = 3.141592653589793;
  `),t.fragment.code.add(_shaderModules_interfaces_js__WEBPACK_IMPORTED_MODULE_0__["glsl"]`
    const float PI = 3.141592653589793;
    const float LIGHT_NORMALIZATION = 1.0 / PI;
    const float INV_PI = 0.3183098861837907;
    const float HALF_PI = 1.570796326794897;
    `)}


/***/ }),

/***/ "yZ6n":
/*!*********************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateSet.js ***!
  \*********************************************************************************/
/*! exports provided: Object3DStateSet, generateObject3DStateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Object3DStateSet", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateObject3DStateId", function() { return s; });
/* harmony import */ var _IdGen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGen.js */ "VHS5");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
const t=new _IdGen_js__WEBPACK_IMPORTED_MODULE_0__["IdGen"];function s(e){const s=0===e?"highlight":"occludee";return{id:t.gen(s),channel:e}}class o{constructor(){this.items=[]}addObject(e,t){this.items.push({type:0,objectStateId:t,object:e})}addRenderGeometry(e,t,s){this.items.push({type:1,objectStateId:t,renderGeometry:e,owner:s})}addExternal(e,t){this.items.push({type:2,objectStateId:t,remove:e})}remove(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];s.objectStateId===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeObject(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];0===s.type&&s.object===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeRenderGeometry(e){for(let t=this.items.length-1;t>=0;--t){const s=this.items[t];1===s.type&&s.renderGeometry===e&&(this._removeObjectStateItem(s),this.items.splice(t,1))}}removeAll(){this.items.forEach((e=>{this._removeObjectStateItem(e)})),this.items=[]}_removeObjectStateItem(e){switch(e.type){case 0:0===e.objectStateId.channel?e.object.removeHighlight(e.objectStateId):1===e.objectStateId.channel&&e.object.removeOcclude(e.objectStateId);break;case 1:e.owner.removeRenderGeometryObjectState(e.renderGeometry,e.objectStateId);break;case 2:e.remove(e.objectStateId)}}}


/***/ }),

/***/ "ypgp":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechnique.js ***!
  \*************************************************************************************************/
/*! exports provided: ShaderTechnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShaderTechnique", function() { return i; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
class i{constructor(i,r){r&&(this._config=r.snapshot()),this._program=this.initializeProgram(i),i.commonUniformStore&&(this._commonUniformStore=i.commonUniformStore,this._commonUniformStore.subscribeProgram(this._program)),this._pipeline=this.initializePipeline(i)}dispose(){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose(),this._program=null)}reload(i){this._program&&(this._commonUniformStore&&this._commonUniformStore.unsubscribeProgram(this._program),this._program.dispose()),this._program=this.initializeProgram(i),this._commonUniformStore&&this._commonUniformStore.subscribeProgram(this._program)}get program(){return this._program}get pipeline(){return this._pipeline}get key(){return this._config.key}get configuration(){return this._config}bindPass(i,r,o){}bindMaterial(i,r,o){}bindDraw(i,r,o){}bindPipelineState(i){i.setPipelineState(this.pipeline)}ensureAttributeLocations(i){this.program.assertCompatibleVertexAttributeLocations(i)}get primitiveType(){return 4}}


/***/ })

}]);
//# sourceMappingURL=views-3d-layers-graphics-objectResourceUtils-js-es2015.js.map