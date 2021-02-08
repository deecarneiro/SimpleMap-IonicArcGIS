(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e19) { throw _e19; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e20) { didErr = true; err = _e20; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~70af773e"], {
    /***/
    "+0fo":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/shaderRepository.js ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = {
        background: {
          "background.frag": "uniform lowp vec4 u_color;\nvoid main() {\n  gl_FragColor = u_color;\n}",
          "background.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump vec2 u_coord_range;\nuniform mediump float u_depth;\nvoid main() {\n  vec3 v_pos = u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0);\n  gl_Position = vec4(v_pos.xy, 0.0, 1.0);\n}"
        },
        bitBlit: {
          "bitBlit.frag": "uniform lowp sampler2D u_tex;\nuniform lowp float u_opacity;\nvarying mediump vec2 v_uv;\nvoid main() {\n  lowp vec4 color = texture2D(u_tex, v_uv);\n  gl_FragColor = color *  u_opacity;\n}",
          "bitBlit.vert": "attribute vec2 a_pos;\nattribute vec2 a_tex;\nvarying mediump vec2 v_uv;\nvoid main(void) {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n  v_uv = a_tex;\n}"
        },
        blend: {
          "blend.frag": "precision mediump float;\nuniform sampler2D u_layerTexture;\nuniform lowp float u_opacity;\nuniform lowp float u_inFadeOpacity;\n#ifndef NORMAL\nuniform sampler2D u_backbufferTexture;\n#endif\nvarying mediump vec2 v_uv;\nfloat rgb2v(in vec3 c) {\n  return max(c.x, max(c.y, c.z));\n}\nvec3 rgb2hsv(in vec3 c) {\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(in vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec3 tint(in vec3 Cb, in vec3 Cs) {\n  float vIn = rgb2v(Cb);\n  vec3 hsvTint = rgb2hsv(Cs);\n  vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);\n  return hsv2rgb(hsvOut);\n}\nfloat overlay(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * (1.0 - 2.0 * (1.0 - Cs ) * (1.0 - Cb)) + step(0.5, Cs) * (2.0 * Cs * Cb);\n}\nfloat colorDodge(in float Cb, in float Cs) {\n  return (Cb == 0.0) ? 0.0 : (Cs == 1.0) ? 1.0 : min(1.0, Cb / (1.0 - Cs));\n}\nfloat colorBurn(in float Cb, in float Cs) {\n return (Cb == 1.0) ? 1.0 : (Cs == 0.0) ? 0.0 : 1.0 - min(1.0, (1.0 - Cb) / Cs);\n}\nfloat hardLight(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * (2.0 * Cs * Cb) + step(0.5, Cs) * (1.0 - 2.0 * (1.0 - Cs) * (1.0 - Cb));\n}\nfloat reflectBlend(in float Cb, in float Cs) {\n\treturn (Cs == 1.0) ? Cs : min(Cb * Cb / (1.0 - Cs), 1.0);\n}\nfloat softLight(in float Cb, in float Cs) {\n  if (Cs <= 0.5) {\n    return Cb - (1.0 - 2.0 * Cs) * Cb * (1.0 - Cb);\n  }\n  if (Cb <= 0.25) {\n    return Cb + (2.0 * Cs - 1.0) * Cb * ((16.0 * Cb - 12.0) * Cb + 3.0);\n  }\n  return Cb + (2.0 * Cs - 1.0) * (sqrt(Cb) - Cb);\n}\nfloat vividLight(in float Cb, in float Cs) {\n  return (1.0 - step(0.5, Cs)) * colorBurn(Cb, 2.0 * Cs) + step(0.5, Cs) * colorDodge(Cb, (2.0 * (Cs - 0.5)));\n}\nfloat minv3(in vec3 c) {\n  return min(min(c.r, c.g), c.b);\n}\nfloat maxv3(in vec3 c) {\n  return max(max(c.r, c.g), c.b);\n}\nfloat lumv3(in vec3 c) {\n  return dot(c, vec3(0.3, 0.59, 0.11));\n}\nfloat satv3(vec3 c) {\n  return maxv3(c) - minv3(c);\n}\nvec3 clipColor(vec3 color) {\n  float lum = lumv3(color);\n  float mincol = minv3(color);\n  float maxcol = maxv3(color);\n  if (mincol < 0.0) {\n    color = lum + ((color - lum) * lum) / (lum - mincol);\n  }\n  if (maxcol > 1.0) {\n    color = lum + ((color - lum) * (1.0 - lum)) / (maxcol - lum);\n  }\n  return color;\n}\nvec3 setLum(vec3 cbase, vec3 clum) {\n  float lbase = lumv3(cbase);\n  float llum = lumv3(clum);\n  float ldiff = llum - lbase;\n  vec3 color = cbase + vec3(ldiff);\n  return clipColor(color);\n}\nvec3 setLumSat(vec3 cbase, vec3 csat, vec3 clum)\n{\n  float minbase = minv3(cbase);\n  float sbase = satv3(cbase);\n  float ssat = satv3(csat);\n  vec3 color;\n  if (sbase > 0.0) {\n    color = (cbase - minbase) * ssat / sbase;\n  } else {\n    color = vec3(0.0);\n  }\n  return setLum(color, clum);\n}\nvoid main() {\n  vec4 src = texture2D(u_layerTexture, v_uv);\n#ifdef NORMAL\n  gl_FragColor = src *  u_opacity;\n#else\n  vec4 dst = texture2D(u_backbufferTexture, v_uv);\n  vec3 Cs = src.a == 0.0 ? src.rgb : vec3(src.rgb / src.a);\n  vec3 Cb = dst.a == 0.0 ? dst.rgb : vec3(dst.rgb / dst.a);\n  float as = u_opacity * src.a;\n  float ab = dst.a;\n  #ifdef DESTINATION_OVER\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb, as + ab - as * ab);\n  #endif\n  #ifdef SOURCE_IN\n    vec4 color = vec4(as * Cs * ab, as * ab);\n    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\n    gl_FragColor = color + fadeColor;\n  #endif\n  #ifdef DESTINATION_IN\n    vec4 color = vec4(ab * Cb * as, ab * as);\n    vec4 fadeColor = (1.0 - u_opacity) * u_inFadeOpacity * vec4(ab * Cb, ab);\n    gl_FragColor = color + fadeColor;\n  #endif\n  #ifdef SOURCE_OUT\n    gl_FragColor = vec4(as * Cs * (1.0 - ab), as * (1.0 - ab));\n  #endif\n  #ifdef DESTINATION_OUT\n    gl_FragColor = vec4(ab * Cb * (1.0 - as), ab * (1.0 - as));\n  #endif\n  #ifdef SOURCE_ATOP\n    gl_FragColor = vec4(as * Cs * ab + ab * Cb * (1.0 - as), ab);\n  #endif\n  #ifdef DESTINATION_ATOP\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * as, as);\n  #endif\n  #ifdef XOR\n    gl_FragColor = vec4(as * Cs * (1.0 - ab) + ab * Cb * (1.0 - as),\n                        as * (1.0 - ab) + ab * (1.0 - as));\n  #endif\n  #ifdef MULTIPLY\n    gl_FragColor = vec4(as * Cs * ab * Cb + (1.0 - ab) * as * Cs + (1.0 - as) * ab * Cb,\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SCREEN\n    gl_FragColor = vec4((Cs + Cb - Cs * Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef OVERLAY\n    vec3 f = vec3(overlay(Cb.r, Cs.r), overlay(Cb.g, Cs.g), overlay(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef DARKEN\n    gl_FragColor = vec4(min(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef LIGHTER\n    gl_FragColor = vec4(as * Cs + ab * Cb, as + ab);\n  #endif\n  #ifdef LIGHTEN\n    gl_FragColor = vec4(max(Cs, Cb) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR_DODGE\n    vec3 f = vec3(colorDodge(Cb.r, Cs.r), colorDodge(Cb.g, Cs.g), colorDodge(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR_BURN\n    vec3 f = vec3(colorBurn(Cb.r, Cs.r), colorBurn(Cb.g, Cs.g), colorBurn(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef HARD_LIGHT\n    vec3 f = vec3(hardLight(Cb.r, Cs.r), hardLight(Cb.g, Cs.g), hardLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SOFT_LIGHT\n    vec3 f = vec3(softLight(Cb.r, Cs.r), softLight(Cb.g, Cs.g), softLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef DIFFERENCE\n    gl_FragColor = vec4(abs(Cb - Cs) * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef EXCLUSION\n     vec3 f = Cs + Cb - 2.0 * Cs * Cb;\n     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef INVERT\n    gl_FragColor = vec4((1.0 - Cb) * as * ab + Cb * ab * (1.0 - as), ab);\n  #endif\n  #ifdef VIVID_LIGHT\n    vec3 f = vec3(vividLight(Cb.r, Cs.r),\n                  vividLight(Cb.g, Cs.g),\n                  vividLight(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef HUE\n    vec3 f = setLumSat(Cs,Cb,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef SATURATION\n    vec3 f = setLumSat(Cb,Cs,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef COLOR\n    vec3 f = setLum(Cs,Cb);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef LUMINOSITY\n    vec3 f = setLum(Cb,Cs);\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef PLUS\n    gl_FragColor = clamp(vec4(src.r + Cb.r, src.g + Cb.g, src.b + Cb.b, as + ab), 0.0, 1.0);\n  #endif\n  #ifdef MINUS\n     gl_FragColor = vec4(clamp(vec3(Cb.r - src.r, Cb.g - src.g, Cb.b - src.b), 0.0, 1.0), ab * as);\n  #endif\n  #ifdef AVERAGE\n     vec3 f = (Cb + Cs) / 2.0;\n     gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n  #ifdef REFLECT\n    vec3 f = vec3(reflectBlend(Cb.r, Cs.r),\n                  reflectBlend(Cb.g, Cs.g),\n                  reflectBlend(Cb.b, Cs.b));\n    gl_FragColor = vec4(f * as * ab + Cs * as * (1.0 - ab) + Cb * ab *(1.0 - as),\n                        as + ab * (1.0 - as));\n  #endif\n#endif\n}",
          "blend.vert": "attribute vec2 a_position;\nvarying mediump vec2 v_uv;\nvoid main(void) {\n  gl_Position = vec4(a_position , 0.0, 1.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}"
        },
        filtering: {
          "bicubic.glsl": "vec4 computeWeights(float v) {\n  float b = 1.0 / 6.0;\n  float v2 = v * v;\n  float v3 = v2 * v;\n  float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);\n  float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);\n  float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);\n  float w3 = b * v3;\n  return vec4(w0, w1, w2, w3);\n}\nvec4 bicubicOffsetsAndWeights(float v) {\n  vec4 w = computeWeights(v);\n  float g0 = w.x + w.y;\n  float g1 = w.z + w.w;\n  float h0 = 1.0 - (w.y / g0) + v;\n  float h1 = 1.0 + (w.w / g1) - v;\n  return vec4(h0, h1, g0, g1);\n}\nvec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {\n  vec2 eX = vec2(1.0 / texSize.x, 0.0);\n  vec2 eY = vec2(0.0, 1.0 / texSize.y);\n  vec2 texel = coords * texSize - 0.5;\n  vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;\n  vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;\n  vec2 coords10 = coords + hgX.x * eX;\n  vec2 coords00 = coords - hgX.y * eX;\n  vec2 coords11 = coords10 + hgY.x * eY;\n  vec2 coords01 = coords00 + hgY.x * eY;\n  coords10 = coords10 - hgY.y * eY;\n  coords00 = coords00 - hgY.y * eY;\n  vec4 color00 = texture2D(sampler, coords00);\n  vec4 color10 = texture2D(sampler, coords10);\n  vec4 color01 = texture2D(sampler, coords01);\n  vec4 color11 = texture2D(sampler, coords11);\n  color00 = mix(color00, color01, hgY.z);\n  color10 = mix(color10, color11, hgY.z);\n  color00 = mix(color00, color10, hgX.z);\n  return color00;\n}",
          "bilinear.glsl": "vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {\n  vec2 texelStart = floor(coords * texSize);\n  vec2 coord0 = texelStart / texSize;\n  vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;\n  vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;\n  vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;\n  vec4 color0 = texture2D(sampler, coord0);\n  vec4 color1 = texture2D(sampler, coord1);\n  vec4 color2 = texture2D(sampler, coord2);\n  vec4 color3 = texture2D(sampler, coord3);\n  vec2 blend = fract(coords * texSize);\n  vec4 color01 = mix(color0, color1, blend.x);\n  vec4 color23 = mix(color2, color3, blend.x);\n  return mix(color01, color23, blend.y);\n}",
          "epx.glsl": "vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {\n  vec2 invSize = 1.0 / texSize;\n  vec2 texel = coords * texSize;\n  vec2 texel_i = floor(texel);\n  vec2 texel_frac = fract(texel);\n  vec4 colorP = texture2D(sampler, texel_i * invSize);\n  vec4 colorP1 = vec4(colorP);\n  vec4 colorP2 = vec4(colorP);\n  vec4 colorP3 = vec4(colorP);\n  vec4 colorP4 = vec4(colorP);\n  vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);\n  vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);\n  vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);\n  vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);\n  if (colorC == colorA && colorC != colorD && colorA != colorB) {\n    colorP1 = colorA;\n  }\n  if (colorA == colorB && colorA != colorC && colorB != colorD) {\n    colorP2 = colorB;\n  }\n  if (colorD == colorC && colorD != colorB && colorC != colorA) {\n    colorP3 = colorC;\n  }\n  if (colorB == colorD && colorB != colorA && colorD != colorC) {\n    colorP4 = colorD;\n  }\n  vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);\n  vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);\n  return mix(colorP12, colorP34, texel_frac.y);\n}"
        },
        fx: {
          integrate: {
            "integrate.frag": "precision mediump float;\nuniform lowp sampler2D u_sourceTexture;\nuniform lowp sampler2D u_maskTexture;\nuniform mediump float u_zoomLevel;\nuniform highp float u_timeDelta;\nuniform highp float u_animationTime;\nvarying highp vec2 v_texcoord;\n#include <materials/utils.glsl>\nvoid main()\n{\n#ifdef DELTA\n  vec4 texel = texture2D(u_sourceTexture, v_texcoord);\n  vec4 data0 = texture2D(u_maskTexture, v_texcoord);\n  float flags = data0.r * 255.0;\n  float groupMinZoom = data0.g * 255.0;\n  float isVisible = getFilterBit(flags, 0);\n  float wouldClip = step(groupMinZoom, u_zoomLevel);\n  float direction = wouldClip * 1.0 + (1.0 - wouldClip) * -1.0;\n  float dt = u_timeDelta / max(u_animationTime, 0.0001);\n  vec4 nextState = vec4(texel + direction * dt);\n  gl_FragColor =  vec4(nextState);\n#elif defined(UPDATE)\n  vec4 texel = texture2D(u_sourceTexture, v_texcoord);\n  gl_FragColor = texel;\n#endif\n}",
            "integrate.vert": "precision mediump float;\nattribute vec2 a_pos;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n}"
          }
        },
        highlight: {
          "blur.frag": "varying mediump vec2 v_texcoord;\nuniform mediump vec4 u_direction;\nuniform mediump mat4 u_channelSelector;\nuniform mediump vec4 u_sigmas;\nuniform sampler2D u_texture;\nmediump vec4 gauss4(mediump vec2 dir) {\n  return exp(-dot(dir, dir) / (2.0 * u_sigmas * u_sigmas));\n}\nmediump float gauss1(mediump vec2 dir) {\n  return exp(-dot(dir, dir) / (2.0 * u_sigmas[3] * u_sigmas[3]));\n}\nmediump vec4 selectChannel(mediump vec4 sample) {\n  return u_channelSelector * sample;\n}\nvoid accumGauss4(mediump float i, inout mediump vec4 tot, inout mediump vec4 weight) {\n  mediump vec4 w = gauss4(i * u_direction.xy);\n  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw)) * w;\n  weight += w;\n}\nvoid accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {\n  mediump float w = gauss1(i * u_direction.xy);\n  tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;\n  weight += w;\n}\nvoid main(void) {\n  mediump float tot = 0.0;\n  mediump float weight = 0.0;\n  accumGauss1(-4.0, tot, weight);\n  accumGauss1(-3.0, tot, weight);\n  accumGauss1(-2.0, tot, weight);\n  accumGauss1(-1.0, tot, weight);\n  accumGauss1(0.0, tot, weight);\n  accumGauss1(1.0, tot, weight);\n  accumGauss1(2.0, tot, weight);\n  accumGauss1(3.0, tot, weight);\n  accumGauss1(4.0, tot, weight);\n  gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);\n}",
          "highlight.frag": "varying mediump vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform mediump vec4 u_sigmas;\nuniform sampler2D u_shade;\nuniform mediump vec2 u_minMaxDistance;\nmediump float estimateDistance() {\n  mediump float sigma = u_sigmas[3];\n  mediump float y = texture2D(u_texture, v_texcoord)[3];\n  const mediump float y0 = 0.5;\n  mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * sigma);\n  mediump float d = (y - y0) / m0;\n  return d;\n}\nmediump vec4 shade(mediump float d) {\n  mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);\n  mappedDistance = clamp(mappedDistance, 0.0, 1.0);\n  return texture2D(u_shade, vec2(mappedDistance, 0.5));\n}\nvoid main(void) {\n  mediump float d = estimateDistance();\n  gl_FragColor = shade(d);\n}",
          "textured.vert": "attribute mediump vec2 a_position;\nattribute mediump vec2 a_texcoord;\nvarying mediump vec2 v_texcoord;\nvoid main(void) {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_texcoord = a_texcoord;\n}"
        },
        magnifier: {
          "magnifier.frag": "uniform lowp vec4 u_background;\nuniform mediump sampler2D u_readbackTexture;\nuniform mediump sampler2D u_maskTexture;\nuniform mediump sampler2D u_overlayTexture;\nuniform bool u_maskEnabled;\nuniform bool u_overlayEnabled;\nvarying mediump vec2 v_texCoord;\nconst lowp float barrelFactor = 1.1;\nlowp vec2 barrel(lowp vec2 uv) {\n  lowp vec2 uvn = uv * 2.0 - 1.0;\n  if (uvn.x == 0.0 && uvn.y == 0.0) {\n    return vec2(0.5, 0.5);\n  }\n  lowp float theta = atan(uvn.y, uvn.x);\n  lowp float r = pow(length(uvn), barrelFactor);\n  return r * vec2(cos(theta), sin(theta)) * 0.5 + 0.5;\n}\nvoid main(void)\n{\n  lowp vec4 color = texture2D(u_readbackTexture, barrel(v_texCoord));\n  color = (color + (1.0 - color.a) * u_background);\n  lowp float mask = u_maskEnabled ? texture2D(u_maskTexture, v_texCoord).a : 1.0;\n  color *= mask;\n  lowp vec4 overlayColor = u_overlayEnabled ? texture2D(u_overlayTexture, v_texCoord) : vec4(0);\n  overlayColor.rgb *= overlayColor.a;\n  gl_FragColor = overlayColor + (1.0 - overlayColor.a) * color;\n}",
          "magnifier.vert": "precision mediump float;\nattribute mediump vec2 a_pos;\nuniform mediump vec4 u_drawPos;\nvarying mediump vec2 v_texCoord;\nvoid main(void)\n{\n  v_texCoord = a_pos;\n  gl_Position = vec4(u_drawPos.xy + vec2(a_pos - 0.5) * u_drawPos.zw, 0.0, 1.0);\n}"
        },
        materials: {
          "attributeData.glsl": "uniform highp sampler2D u_attributeData0;\nuniform highp sampler2D u_attributeData1;\nuniform highp sampler2D u_attributeData2;\nuniform highp sampler2D u_attributeData3;\nuniform highp int u_attributeTextureSize;\nhighp vec2 getAttributeDataCoords(in highp vec4 id) {\n  highp vec4 texel = unpackDisplayIdTexel(id);\n  highp float size = float(u_attributeTextureSize);\n  highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256 + int(texel.a) * 256 * 256 * 256);\n  highp float col = mod(u32, size);\n  highp float row = (u32 - col) / size;\n  highp float u = col / size;\n  highp float v = row / size;\n  return vec2(u, v);\n}\nhighp vec4 getAttributeData0(in highp vec4 id) {\n  vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData0, coords);\n}\nhighp vec4 getAttributeData1(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData1, coords);\n}\nhighp vec4 getAttributeData2(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData2, coords);\n}\nhighp vec4 getAttributeData3(in highp vec4 id) {\n  highp vec2 coords = getAttributeDataCoords(id);\n  return texture2D(u_attributeData3, coords);\n}\nfloat u88VVToFloat(in vec2 v) {\n  bool isMagic = v.x == 255.0 && v.y == 255.0;\n  if (isMagic) {\n    return NAN_MAGIC_NUMBER;\n  }\n  return (v.x + v.y * float(0x100)) - 32768.0;\n}",
          "constants.glsl": "const float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float SIGNED_BYTE_TO_UNSIGNED = 128.0;\nconst float POSITION_PRECISION = 1.0 / 8.0;\nconst float FILL_POSITION_PRECISION = 1.0 / 1.0;\nconst float SOFT_EDGE_RATIO = 1.0;\nconst float THIN_LINE_WIDTH_FACTOR = 1.1;\nconst float THIN_LINE_HALF_WIDTH = 1.0;\nconst float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;\nconst float OFFSET_PRECISION = 1.0 / 8.0;\nconst float OUTLINE_SCALE = 1.0 / 5.0;\nconst float SDF_FONT_SIZE = 24.0;\nconst float MAX_SDF_DISTANCE = 8.0;\nconst float PLACEMENT_PADDING = 8.0;\nconst float EPSILON = 0.0000001;\nconst int MAX_FILTER_COUNT = 2;\nconst int ATTR_VV_SIZE = 0;\nconst int ATTR_VV_COLOR = 1;\nconst int ATTR_VV_OPACITY = 2;\nconst int ATTR_VV_ROTATION = 3;\nconst highp float NAN_MAGIC_NUMBER = 1e-30;",
          fill: {
            "common.glsl": "#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\n#endif\n#ifdef DOT_DENSITY\nuniform lowp vec4 u_isActive[ 2 ];\nuniform highp float u_dotValue;\nuniform highp float u_tileDotsOverArea;\nuniform highp float u_dotTextureDotCount;\nuniform mediump float u_tileZoomFactor;\n#endif\nvarying vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying highp float v_flags;\n#ifdef PATTERN\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef DOT_DENSITY\nvarying highp vec2 v_dotTextureCoords;\nvarying highp vec4 v_dotThresholds[ 2 ];\n#endif",
            "fill.frag": "precision highp float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/fill/common.glsl>\n#ifdef PATTERN\nuniform lowp sampler2D u_texture;\n#endif\n#ifdef DOT_DENSITY\nuniform mediump mat4 u_dotColors[ 2 ];\nuniform sampler2D u_dotTextures[ 2 ];\nuniform vec4 u_dotBackgroundColor;\n#endif\nvoid main() {\n#ifdef ID\n  gl_FragColor = v_id;\n#elif defined(PATTERN)\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_opacity * v_color * color;\n#elif defined(DOT_DENSITY) && !defined(HIGHLIGHT)\n  vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);\n  vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);\n  vec4 difference0 = v_dotThresholds[0] - textureThresholds0;\n  vec4 difference1 = v_dotThresholds[1] - textureThresholds1;\n#ifdef DD_DOT_BLENDING\n  vec4 isPositive0 = step(0.0, difference0);\n  vec4 isPositive1 = step(0.0, difference1);\n  float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);\n  float lessThanEqZero = step(weightSum, 0.0);\n  float greaterThanZero = 1.0 - lessThanEqZero ;\n  float divisor = (weightSum + lessThanEqZero);\n  vec4 weights0 = difference0 * isPositive0 / divisor;\n  vec4 weights1 = difference1 * isPositive1 / divisor;\n  vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;\n  vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;\n#else\n  float diffMax = max(max4(difference0), max4(difference1));\n  float lessThanZero = step(diffMax, 0.0);\n  float greaterOrEqZero = 1.0 - lessThanZero;\n  vec4 isMax0 = step(diffMax, difference0);\n  vec4 isMax1 = step(diffMax, difference1);\n  vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;\n  vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;\n#endif\n  gl_FragColor = preEffectColor;\n#else\n  gl_FragColor = v_opacity * v_color;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = 1.0;\n#endif\n}",
            "fill.vert": "precision highp float;\n#ifdef DOT_DENSITY\nattribute float a_inverseArea;\nvec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);\nvec4 a_aux3 = vec4(0.0);\n#else\nattribute vec4 a_color;\nattribute vec4 a_tlbr;\nattribute vec4 a_aux1;\nattribute vec2 a_aux2;\nattribute vec4 a_aux3;\n#endif\n#include <materials/vcommon.glsl>\n#include <materials/fill/common.glsl>\n#ifdef DOT_DENSITY\nvec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {\n  return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);\n}\n#endif\nvoid main()\n{\n  INIT;\n  float a_bitSet = a_aux3.a;\n  v_color     = getColor(a_color, a_bitSet, 0);\n  v_opacity   = getOpacity();\n  v_id        = norm(a_id);\n  v_pos       = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);\n  v_flags     = getFilterFlags();\n#ifdef PATTERN\n  vec2 aux2 = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_aux2;\n  float width = u_zoomFactor * a_aux1.x * aux2.x;\n  float height = u_zoomFactor * a_aux1.y * aux2.y;\n  float angle = C_256_TO_RAD * a_aux3.z;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,\n                           -sinA / width, cosA / height, 0,\n                            0,            0,             1);\n  vec2 symbolOffset = (a_aux1.zw - SIGNED_BYTE_TO_UNSIGNED) / vec2(width, height);\n  v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;\n  v_tlbr = a_tlbr / u_mosaicSize.xyxy;\n#elif defined(DOT_DENSITY)\n  vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;\n  vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;\n  float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;\n  v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);\n  v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);\n  v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, v_flags), 1.0);\n}"
          },
          icon: {
            "common.glsl": "uniform lowp vec2 u_mosaicSize;\nvarying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying highp vec4 v_sizeTex;\nvarying mediump vec3 v_pos;\nvarying highp float v_filters;\nvarying lowp float v_opacity;\n#ifdef SDF\nvarying lowp vec4 v_outlineColor;\nvarying mediump float v_outlineWidth;\nvarying mediump float v_distRatio;\nvarying mediump float v_overridingOutlineColor;\nvarying mediump float v_isThin;\n#endif",
            "icon.frag": "precision mediump float;\n#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/icon/common.glsl>\nuniform lowp sampler2D u_texture;\nvoid main()\n{\n  vec2 v_size = v_sizeTex.xy;\n  vec2 v_tex  = v_sizeTex.zw;\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n  float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));\n  float size = max(v_size.x, v_size.y);\n  float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n  float outlineWidth = v_outlineWidth;\n  #ifdef HIGHLIGHT\n    outlineWidth = max(outlineWidth, 4.0 * v_isThin);\n  #endif\n  if (outlineWidth > 0.25) {\n    lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;\n    float clampedOutlineSize = min(outlineWidth, size);\n    outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);\n    gl_FragColor = v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_opacity * fillPixelColor;\n  }\n#else\n   lowp vec4 texColor = texture2D(u_texture, v_tex);\n   gl_FragColor = v_opacity * texColor;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
            "icon.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_outlineColor;\nattribute vec4 a_sizeAndOutlineWidth;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nattribute vec4 a_bitSetAndDistRatio;\n#include <materials/vcommon.glsl>\n#include <materials/icon/common.glsl>\nvec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {\n#ifdef VV_SIZE\n  float r = getSize(baseSize.y) / referenceSize;\n  baseSize.xy *= r;\n  offset.xy *= r;\n  float scaleSymbolProportionally = getBit(bitSet, 3);\n  outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;\n#endif\n  return baseSize;\n}\nvec3 getOffset(in vec2 in_offset, float a_bitSet) {\n  float isMapAligned = getBit(a_bitSet, 0);\n  vec3  offset       = getRotation() * vec3(in_offset, 0.0);\n  return getMatrix(isMapAligned) * offset;\n}\nvoid main()\n{\n  INIT;\n  vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;\n  vec2  a_offset = a_vertexOffset / 16.0;\n  float a_outlineSize = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;\n  float a_bitSet = a_bitSetAndDistRatio.z;\n  vec2 v_size = getMarkerSize(a_offset, a_size, a_outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0, a_bitSet);\n  vec2 v_tex      = a_texCoords / u_mosaicSize;\n  v_color    = getColor(a_color, a_bitSet, 1);\n  v_opacity  = getOpacity();\n  v_id       = norm(a_id);\n  v_filters  = getFilterFlags();\n  v_pos      = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + getOffset(a_offset, a_bitSet);\n  v_sizeTex  = vec4(v_size.xy, v_tex.xy);\n#ifdef SDF\n  v_isThin   = getBit(a_bitSet, 2);\n  #ifdef VV_COLOR\n    v_overridingOutlineColor = v_isThin;\n  #else\n    v_overridingOutlineColor = 0.0;\n  #endif\n  v_outlineWidth = min(a_outlineSize, max(max(v_size.x, v_size.y) - 0.99, 0.0));\n  v_outlineColor = a_outlineColor;\n  v_distRatio = a_bitSetAndDistRatio.w / 126.0;\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, v_filters), 1.0);\n}"
          },
          label: {
            "common.glsl": "uniform mediump float u_zoomLevel;\nuniform mediump float u_mapRotation;\nuniform mediump float u_mapAligned;\nuniform mediump vec2 u_mosaicSize;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying mediump vec2 v_tex;\nvarying mediump vec4 v_color;\nvarying lowp vec4 v_animation;",
            "label.frag": "#include <materials/text/text.frag>",
            "label.vert": "precision highp float;\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texAndSize;\nattribute vec4 a_refSymbolAndPlacementOffset;\nattribute vec4 a_glyphData;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nuniform float u_zoomLevel;\nuniform float u_mapRotation;\nuniform float u_mapAligned;\nfloat getZ(in float minZoom, in float maxZoom, in float angle) {\n  float glyphAngle = angle * 360.0 / 254.0;\n  float mapAngle = u_mapRotation * 360.0 / 254.0;\n  float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));\n  float z = 0.0;\n  z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_zoomLevel)));\n  z += u_mapAligned * 2.0 * step(90.0, diffAngle);\n  z += 2.0 * (1.0 - step(u_zoomLevel, maxZoom));\n  return z;\n}\nvoid main()\n{\n  INIT;\n  float groupMinZoom    = getMinZoom();\n  float glyphMinZoom    = a_glyphData.x;\n  float glyphMaxZoom    = a_glyphData.y;\n  float glyphAngle      = a_glyphData.z;\n  float a_minZoom          = max(groupMinZoom, glyphMinZoom);\n  float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;\n  vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);\n  float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;\n  float fontSize           = a_texAndSize.z;\n  float haloSize           = a_texAndSize.w * OUTLINE_SCALE;\n  vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;\n  vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);\n  float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);\n  float fontScale    = fontSize / SDF_FONT_SIZE;\n  float halfSize     = getSize(a_refSymbolSize) / 2.0;\n  float animation    = pow(getAnimationState(), vec4(2.0)).r;\n  v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));\n  v_opacity   = 1.0;\n  v_tex       = a_texCoords / u_mosaicSize;\n  v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;\n  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n  vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);\n  vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);\n  vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);\n  gl_Position = vec4(applyFilterLabels(v_color, v_pos, getFilterFlags()), 1.0);\n#ifdef DEBUG\n  v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);\n#endif\n}"
          },
          line: {
            "common.glsl": "varying lowp vec4 v_color;\nvarying highp vec4 v_id;\nvarying mediump vec2 v_normal;\nvarying mediump float v_lineHalfWidth;\nvarying lowp float v_opacity;\nvarying highp vec3 v_pos;\n#ifdef PATTERN\nuniform mediump vec2 u_mosaicSize;\nvarying mediump vec4 v_tlbr;\nvarying mediump vec2 v_patternSize;\n#endif\n#if defined(PATTERN) || defined(SDF)\nvarying highp float v_accumulatedDistance;\n#endif",
            "line.frag": "precision lowp float;\n#include <util/encoding.glsl>\n#include <materials/constants.glsl>\n#include <materials/line/common.glsl>\nuniform lowp float u_blur;\nuniform mediump float u_zoomFactor;\n#if defined(PATTERN) || defined(SDF)\nuniform sampler2D u_texture;\n#endif\n#ifdef SDF\nconst float sdfPatternHalfWidth = 15.5;\nconst float widthFactor = 2.0;\n#endif\nvoid main()\n{\n  mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(v_lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n  lowp float alpha = clamp(thinLineFactor * (v_lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);\n#if defined(SDF) && !defined(HIGHLIGHT)\n  mediump float lineHalfWidth = widthFactor * v_lineHalfWidth;\n  mediump float lineWidthRatio = lineHalfWidth / sdfPatternHalfWidth;\n  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / (lineWidthRatio * v_patternSize.x), 1.0);\n  mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;\n  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));\n  mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;\n  float dist = d * lineHalfWidth;\n  lowp vec4 fillPixelColor = v_opacity * alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;\n  gl_FragColor = fillPixelColor;\n#elif defined(PATTERN) && !defined(HIGHLIGHT)\n  mediump float lineHalfWidth = v_lineHalfWidth;\n  mediump float adjustedPatternWidth = v_patternSize.x * 2.0 * lineHalfWidth / v_patternSize.y;\n  mediump float relativeTexX = mod((u_zoomFactor * v_accumulatedDistance + v_normal.x * lineHalfWidth) / adjustedPatternWidth, 1.0);\n  mediump float relativeTexY = 0.5 + 0.5 * v_normal.y;\n  mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexY, relativeTexX));\n  lowp vec4 color = texture2D(u_texture, texCoord);\n  gl_FragColor = v_opacity * alpha * v_color * color;\n#else\n  gl_FragColor = v_opacity * alpha * v_color;\n#endif\n#ifdef HIGHLIGHT\n  gl_FragColor.a = step(1.0 / 255.0, gl_FragColor.a);\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
            "line.vert": "precision highp float;\nattribute vec4 a_color;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistanceAndHalfWidth;\nattribute vec4 a_tlbr;\nattribute vec4 a_segmentDirection;\nattribute vec2 a_aux;\n#include <materials/vcommon.glsl>\n#include <materials/line/common.glsl>\nconst float SCALE = 1.0 / 31.0;\nconst float WIDTH_SCALE = 1.0 / 1024.0;\nfloat getBaseLineHalfWidth(in float in_lineHalfWidth) {\n#ifdef VV_SIZE\n  float referenceHalfWidth = a_aux.x * WIDTH_SCALE;\n  float lineWidth = 2.0 * in_lineHalfWidth;\n  return 0.5 * (in_lineHalfWidth / referenceHalfWidth) * getSize(lineWidth);\n#else\n  return in_lineHalfWidth;\n#endif\n}\nfloat getLineHalfWidth(in float baseWidth, in float aa) {\n  float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;\n#ifdef HIGHLIGHT\n  halfWidth = max(halfWidth, 2.0);\n#endif\n  return halfWidth;\n}\nvec2 getDist(in vec2 offset, in float halfWidth) {\n  float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);\n#if defined(SDF) && !defined(HIGHLIGHT)\n  thinLineFactor *= 2.0;\n#endif\n  return thinLineFactor * halfWidth * offset * SCALE;\n}\nvoid main()\n{\n  INIT;\n  float a_bitSet          = a_segmentDirection.w;\n  float a_accumulatedDist = a_accumulatedDistanceAndHalfWidth.x;\n  float a_lineHalfWidth   = a_accumulatedDistanceAndHalfWidth.y * WIDTH_SCALE;\n  float aa                = 0.5 * u_antialiasing;\n  vec2  a_offset          = a_offsetAndNormal.xy;\n  float baseWidth = getBaseLineHalfWidth(a_lineHalfWidth);\n  float halfWidth = getLineHalfWidth(baseWidth, aa);\n  float z         = 2.0 * step(baseWidth, 0.0);\n  vec2  dist      = getDist(a_offset, halfWidth);\n  vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);\n  vec3  pos       = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0) + offset;\n  v_color         = getColor(a_color, a_bitSet, 0);\n  v_opacity       = getOpacity();\n  v_lineHalfWidth = halfWidth;\n  v_id            = norm(a_id);\n  v_normal        = a_offsetAndNormal.zw * SCALE;\n  v_pos           = vec3(pos.xy, z);\n#ifdef PATTERN\n  v_tlbr          = a_tlbr / u_mosaicSize.xyxy;\n  v_patternSize   = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);\n#endif\n#if defined(PATTERN) || defined(SDF)\n  v_accumulatedDistance = a_accumulatedDist + dot(SCALE * a_segmentDirection.xy, dist / u_zoomFactor);\n#endif\n  gl_Position = vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);\n}"
          },
          text: {
            "common.glsl": "uniform highp vec2 u_mosaicSize;\nvarying highp vec4 v_id;\nvarying mediump vec3 v_pos;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying highp vec2 v_tex;\nvarying mediump float v_antialiasingWidth;\nvarying mediump float v_edgeDistanceOffset;\nvarying lowp float v_transparency;",
            "text.frag": "precision mediump float;\n#include <materials/text/common.glsl>\nuniform lowp sampler2D u_texture;\nvoid main()\n{\n  float SDF_CUTOFF = (2.0 / 8.0);\n  float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;\n#ifdef HIGHLIGHT\n  edge /= 2.0;\n#endif\n  lowp float aa = v_antialiasingWidth;\n  lowp float alpha = smoothstep(edge - aa, edge + aa, dist);\n  gl_FragColor = alpha * v_color * v_opacity;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
            "text.vert": "precision highp float;\n#include <materials/utils.glsl>\n#include <materials/vcommon.glsl>\n#include <materials/text/common.glsl>\nattribute vec4 a_color;\nattribute vec4 a_haloColor;\nattribute vec4 a_texFontSize;\nattribute vec4 a_aux;\nattribute vec2 a_vertexOffset;\nattribute vec2 a_texCoords;\nuniform float u_isHalo;\nfloat getTextSize(inout vec2 offset, in float baseSize, in float referenceSize) {\n#ifdef VV_SIZE\n   float ratio = baseSize / referenceSize;\n   baseSize = ratio * getSize(baseSize);\n#endif\n  return baseSize;\n}\nvoid main()\n{\n  INIT;\n  float a_bitSet      = a_aux.w;\n  float a_fontSize    = a_texFontSize.z;\n  vec2  a_offset      = a_vertexOffset * OFFSET_PRECISION;\n  vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);\n  float fontSize      = getTextSize(a_offset, a_fontSize, a_aux.z * a_aux.z / 256.0);\n  float scaleFactor   = fontSize / a_fontSize;\n  float fontScale     = fontSize / SDF_FONT_SIZE;\n  vec3  offset        = getRotation() * vec3(scaleFactor * a_offset, 0.0);\n  mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;\n  v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);\n  v_opacity = getOpacity();\n  v_id      = norm(a_id);\n  v_tex     = a_texCoords / u_mosaicSize;\n  v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;\n  v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;\n  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;\n  gl_Position =  vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);\n}"
          },
          "utils.glsl": "float rshift(in float u32, in int amount) {\n  return floor(u32 / pow(2.0, float(amount)));\n}\nfloat getBit(in float bitset, in int bitIndex) {\n  float offset = pow(2.0, float(bitIndex));\n  return mod(floor(bitset / offset), 2.0);\n}\nfloat getFilterBit(in float bitset, in int bitIndex) {\n  return getBit(bitset, bitIndex + 1);\n}\nfloat getHighlightBit(in float bitset) {\n  return getBit(bitset, 0);\n}\nhighp vec4 unpackDisplayIdTexel(in highp vec4 bitset) {\n  float isAggregate = getBit(bitset.a, 7);\n  return (1.0 - isAggregate) * bitset + isAggregate * (vec4(bitset.rgba) - vec4(0.0, 0.0, 0.0, float(0x80)));\n}\nvec4 unpack(in float u32) {\n  float r = mod(rshift(u32, 0), 255.0);\n  float g = mod(rshift(u32, 8), 255.0);\n  float b = mod(rshift(u32, 16), 255.0);\n  float a = mod(rshift(u32, 24), 255.0);\n  return vec4(r, g, b, a);\n}\nvec4 norm(in vec4 v) {\n  return v /= 255.0;\n}\nfloat max4(vec4 target) {\n  return max(max(max(target.x, target.y), target.z), target.w);\n}\nvec2 unpack_u8_nf32(vec2 bytes) {\n  return (bytes - 127.0) / 127.0;\n}",
          "vcommon.glsl": "#include <materials/constants.glsl>\n#include <materials/utils.glsl>\n#include <materials/attributeData.glsl>\n#include <materials/vv.glsl>\nattribute vec2 a_pos;\nattribute highp vec4 a_id;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform highp float u_pixelRatio;\nuniform mediump float u_zoomFactor;\nuniform mediump float u_antialiasing;\nvec4 VV_ADATA = vec4(0.0);\nvoid loadVisualVariableData(inout vec4 target) {\n#ifdef OES_TEXTURE_FLOAT\n  target.rgba = getAttributeData2(a_id);\n#else\n  vec4 data0 = getAttributeData2(a_id);\n  vec4 data1 = getAttributeData3(a_id);\n  target.r = u88VVToFloat(data0.rg * 255.0);\n  target.g = u88VVToFloat(data0.ba * 255.0);\n  target.b = u88VVToFloat(data1.rg * 255.0);\n  target.a = u88VVToFloat(data1.ba * 255.0);\n#endif\n}\n#ifdef VV\n  #define INIT loadVisualVariableData(VV_ADATA)\n#else\n  #define INIT\n#endif\nvec4 getColor(in vec4 a_color, in float a_bitSet, int index) {\n#ifdef VV_COLOR\n  float isColorLocked   = getBit(a_bitSet, index);\n  return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);\n#else\n  return a_color;\n#endif\n}\nfloat getOpacity() {\n#ifdef VV_OPACITY\n  return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);\n#else\n  return 1.0;\n#endif\n}\nfloat getSize(in float in_size) {\n#ifdef VV_SIZE\n  return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);\n#else\n  return in_size;\n#endif\n}\nmat3 getRotation() {\n#ifdef VV_ROTATION\n  return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));\n#else\n  return mat3(1.0);\n#endif\n}\nfloat getFilterFlags() {\n#ifdef IGNORES_SAMPLER_PRECISION\n  return ceil(getAttributeData0(a_id).x * 255.0);\n#else\n  return getAttributeData0(a_id).x * 255.0;\n#endif\n}\nvec4 getAnimationState() {\n  return getAttributeData1(a_id);\n}\nfloat getMinZoom() {\n  vec4 data0 = getAttributeData0(a_id) * 255.0;\n  return data0.g;\n}\nmat3 getMatrix(float isMapAligned) {\n  return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;\n}\nvec3 applyFilter(inout vec4 color, inout vec3 pos, in float filterFlags) {\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifdef INSIDE\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#elif defined(OUTSIDE)\n  pos.z += 2.0 * getFilterBit(filterFlags, 1);\n#elif defined(HIGHLIGHT)\n  pos.z += 2.0 * (1.0 - getHighlightBit(filterFlags));\n#endif\n  return pos;\n}\nvec3 applyFilterLabels(inout vec4 color, inout vec3 pos, in float filterFlags) {\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));\n#ifndef OUTSIDE_LABELS_VISIBLE\n  pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));\n#endif\n  return pos;\n}",
          "vv.glsl": "#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)\n  #define VV_SIZE\n#endif\n#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)\n  #define VV\n#endif\n#ifdef VV_COLOR\nuniform highp float u_vvColorValues[8];\nuniform vec4 u_vvColors[8];\n#endif\n#ifdef VV_SIZE_MIN_MAX_VALUE\nuniform highp vec4 u_vvSizeMinMaxValue;\n#endif\n#ifdef VV_SIZE_SCALE_STOPS\nuniform highp float u_vvSizeScaleStopsValue;\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nuniform highp float u_vvSizeFieldStopsValues[6];\nuniform float u_vvSizeFieldStopsSizes[6];\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nuniform highp float u_vvSizeUnitValueWorldToPixelsRatio;\n#endif\n#ifdef VV_OPACITY\nuniform highp float u_vvOpacityValues[8];\nuniform float u_vvOpacities[8];\n#endif\n#ifdef VV_ROTATION\nuniform lowp float u_vvRotationType;\n#endif\nbool isNan(float val) {\n  return (val == NAN_MAGIC_NUMBER);\n}\n#ifdef VV_SIZE_MIN_MAX_VALUE\nfloat getVVMinMaxSize(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);\n  interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);\n  return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);\n}\n#endif\n#ifdef VV_SIZE_FIELD_STOPS\nconst int VV_SIZE_N = 6;\nfloat getVVStopsSize(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  if (sizeValue <= u_vvSizeFieldStopsValues[0]) {\n    return u_vvSizeFieldStopsSizes[0];\n  }\n  for (int i = 1; i < VV_SIZE_N; ++i) {\n    if (u_vvSizeFieldStopsValues[i] >= sizeValue) {\n      float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);\n      return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);\n    }\n  }\n  return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];\n}\n#endif\n#ifdef VV_SIZE_UNIT_VALUE\nfloat getVVUnitValue(float sizeValue, float fallback) {\n  if (isNan(sizeValue)) {\n    return fallback;\n  }\n  return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;\n}\n#endif\n#ifdef VV_OPACITY\nconst int VV_OPACITY_N = 8;\nfloat getVVOpacity(float opacityValue) {\n  if (isNan(opacityValue)) {\n    return 1.0;\n  }\n  if (opacityValue <= u_vvOpacityValues[0]) {\n    return u_vvOpacities[0];\n  }\n  for (int i = 1; i < VV_OPACITY_N; ++i) {\n    if (u_vvOpacityValues[i] >= opacityValue) {\n      float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);\n      return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);\n    }\n  }\n  return u_vvOpacities[VV_OPACITY_N - 1];\n}\n#endif\n#ifdef VV_ROTATION\nmat4 getVVRotation(float rotationValue) {\n  if (isNan(rotationValue)) {\n    return mat4(1, 0, 0, 0,\n                0, 1, 0, 0,\n                0, 0, 1, 0,\n                0, 0, 0, 1);\n  }\n  float rotation = rotationValue;\n  if (u_vvRotationType == 1.0) {\n    rotation = 90.0 - rotation;\n  }\n  float angle = C_DEG_TO_RAD * rotation;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  return mat4(cosA, sinA, 0, 0,\n              -sinA,  cosA, 0, 0,\n              0,     0, 1, 0,\n              0,     0, 0, 1);\n}\nmat3 getVVRotationMat3(float rotationValue) {\n  if (isNan(rotationValue)) {\n    return mat3(1, 0, 0,\n                0, 1, 0,\n                0, 0, 1);\n  }\n  float rotation = rotationValue;\n  if (u_vvRotationType == 1.0) {\n    rotation = 90.0 - rotation;\n  }\n  float angle = C_DEG_TO_RAD * -rotation;\n  float sinA = sin(angle);\n  float cosA = cos(angle);\n  return mat3(cosA, -sinA, 0,\n             sinA, cosA, 0,\n              0,    0,    1);\n}\n#endif\n#ifdef VV_COLOR\nconst int VV_COLOR_N = 8;\nvec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {\n  if (isNan(colorValue) || isColorLocked == 1.0) {\n    return fallback;\n  }\n  if (colorValue <= u_vvColorValues[0]) {\n    return u_vvColors[0];\n  }\n  for (int i = 1; i < VV_COLOR_N; ++i) {\n    if (u_vvColorValues[i] >= colorValue) {\n      float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);\n      return mix(u_vvColors[i-1], u_vvColors[i], f);\n    }\n  }\n  return u_vvColors[VV_COLOR_N - 1];\n}\n#endif\nfloat getVVSize(in float size, in float vvSize)  {\n#ifdef VV_SIZE_MIN_MAX_VALUE\n  return getVVMinMaxSize(vvSize, size);\n#elif defined(VV_SIZE_SCALE_STOPS)\n  return u_vvSizeScaleStopsValue;\n#elif defined(VV_SIZE_FIELD_STOPS)\n  float outSize = getVVStopsSize(vvSize, size);\n  return isNan(outSize) ? size : outSize;\n#elif defined(VV_SIZE_UNIT_VALUE)\n  return getVVUnitValue(vvSize, size);\n#else\n  return size;\n#endif\n}"
        },
        "post-processing": {
          blit: {
            "blit.frag": "precision mediump float;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\n  gl_FragColor = texture2D(u_texture, v_uv);\n}"
          },
          bloom: {
            composite: {
              "composite.frag": "precision mediump float;\nvarying vec2 v_uv;\nuniform sampler2D u_blurTexture1;\nuniform sampler2D u_blurTexture2;\nuniform sampler2D u_blurTexture3;\nuniform sampler2D u_blurTexture4;\nuniform sampler2D u_blurTexture5;\nuniform float u_bloomStrength;\nuniform float u_bloomRadius;\nuniform float u_bloomFactors[NUMMIPS];\nuniform vec3 u_bloomTintColors[NUMMIPS];\nfloat lerpBloomFactor(const in float factor) {\n  float mirrorFactor = 1.2 - factor;\n  return mix(factor, mirrorFactor, u_bloomRadius);\n}\nvoid main() {\n  gl_FragColor = u_bloomStrength * (\n    lerpBloomFactor(u_bloomFactors[0]) * vec4(u_bloomTintColors[0], 1.0) * texture2D(u_blurTexture1, v_uv) +\n    lerpBloomFactor(u_bloomFactors[1]) * vec4(u_bloomTintColors[1], 1.0) * texture2D(u_blurTexture2, v_uv) +\n    lerpBloomFactor(u_bloomFactors[2]) * vec4(u_bloomTintColors[2], 1.0) * texture2D(u_blurTexture3, v_uv) +\n    lerpBloomFactor(u_bloomFactors[3]) * vec4(u_bloomTintColors[3], 1.0) * texture2D(u_blurTexture4, v_uv) +\n    lerpBloomFactor(u_bloomFactors[4]) * vec4(u_bloomTintColors[4], 1.0) * texture2D(u_blurTexture5, v_uv)\n  );\n}"
            },
            gaussianBlur: {
              "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\n#define SIGMA RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\n    return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\n  vec2 invSize = 1.0 / u_texSize;\n  float fSigma = float(SIGMA);\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\n  for (int i = 1; i < KERNEL_RADIUS; i ++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * invSize * x;\n    vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\n    vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\n    pixelColorSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  gl_FragColor = pixelColorSum /weightSum;\n}"
            },
            luminosityHighPass: {
              "luminosityHighPass.frag": "precision mediump float;\nuniform sampler2D u_texture;\nuniform vec3 u_defaultColor;\nuniform float u_defaultOpacity;\nuniform float u_luminosityThreshold;\nuniform float u_smoothWidth;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 texel = texture2D(u_texture, v_uv);\n  vec3 luma = vec3(0.299, 0.587, 0.114);\n  float v = dot(texel.xyz, luma);\n  vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);\n  float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);\n  gl_FragColor = mix(outputColor, texel, alpha);\n}"
            }
          },
          blur: {
            gaussianBlur: {
              "gaussianBlur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nuniform vec2 u_direction;\nuniform float u_sigma;\nvarying vec2 v_uv;\n#define KERNEL_RADIUS RADIUS\nfloat gaussianPdf(in float x, in float sigma) {\n    return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;\n}\nvoid main() {\n  vec2 invSize = 1.0 / u_texSize;\n  float fSigma = u_sigma;\n  float weightSum = gaussianPdf(0.0, fSigma);\n  vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;\n  for (int i = 1; i < KERNEL_RADIUS; i ++) {\n    float x = float(i);\n    float w = gaussianPdf(x, fSigma);\n    vec2 uvOffset = u_direction * invSize * x;\n    vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);\n    vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);\n    pixelColorSum += (sample1 + sample2) * w;\n    weightSum += 2.0 * w;\n  }\n  gl_FragColor = pixelColorSum /weightSum;\n}"
            },
            "radial-blur": {
              "radial-blur.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nconst float sampleDist = 1.0;\nconst float sampleStrength = 2.2;\nvoid main(void) {\n    float samples[10];\n    samples[0] = -0.08;\n    samples[1] = -0.05;\n    samples[2] = -0.03;\n    samples[3] = -0.02;\n    samples[4] = -0.01;\n    samples[5] =  0.01;\n    samples[6] =  0.02;\n    samples[7] =  0.03;\n    samples[8] =  0.05;\n    samples[9] =  0.08;\n    vec2 dir = 0.5 - v_uv;\n    float dist = sqrt(dir.x * dir.x + dir.y * dir.y);\n    dir = dir / dist;\n    vec4 color = texture2D(u_colorTexture,v_uv);\n    vec4 sum = color;\n    for (int i = 0; i < 10; i++) {\n      sum += texture2D(u_colorTexture, v_uv + dir * samples[i] * sampleDist);\n    }\n    sum *= 1.0 / 11.0;\n    float t = dist * sampleStrength;\n    t = clamp(t, 0.0, 1.0);\n    gl_FragColor = mix(color, sum, t);\n}"
            }
          },
          dra: {
            "dra.frag": "precision mediump float;\nuniform sampler2D u_minColor;\nuniform sampler2D u_maxColor;\nuniform sampler2D u_texture;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 minColor = texture2D(u_minColor, vec2(0.5));\n  vec4 maxColor = texture2D(u_maxColor, vec2(0.5));\n  vec4 color = texture2D(u_texture, v_uv);\n  vec3 minColorUnpremultiply = minColor.rgb / minColor.a;\n  vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;\n  vec3 colorUnpremultiply = color.rgb / color.a;\n  vec3 range = maxColorUnpremultiply - minColorUnpremultiply;\n  gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);\n}",
            "min-max": {
              "min-max.frag": "#extension GL_EXT_draw_buffers : require\nprecision mediump float;\n#define CELL_SIZE 2\nuniform sampler2D u_minTexture;\nuniform sampler2D u_maxTexture;\nuniform vec2 u_srcResolution;\nuniform vec2 u_dstResolution;\nvarying vec2 v_uv;\nvoid main() {\n  vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);\n  vec2 onePixel = vec2(1.0) / u_srcResolution;\n  vec2 uv = (srcPixel + 0.5) / u_srcResolution;\n  vec4 minColor = vec4(1.0);\n  vec4 maxColor = vec4(0.0);\n  for (int y = 0; y < CELL_SIZE; ++y) {\n    for (int x = 0; x < CELL_SIZE; ++x) {\n      vec2 offset = uv + vec2(x, y) * onePixel;\n      minColor = min(minColor, texture2D(u_minTexture, offset));\n      maxColor = max(maxColor, texture2D(u_maxTexture, offset));\n    }\n  }\n  gl_FragData[0] = minColor;\n  gl_FragData[1] = maxColor;\n}"
            }
          },
          "drop-shadow": {
            composite: {
              "composite.frag": "precision mediump float;\nuniform sampler2D u_layerFBOTexture;\nuniform sampler2D u_blurTexture;\nuniform vec4 u_shadowColor;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);\n  vec4 blurColor = texture2D(u_blurTexture, v_uv);\n  gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);\n}"
            },
            "drop-shadow.vert": "precision mediump float;\nattribute vec2 a_position;\nuniform highp mat3 u_displayViewMat3;\nuniform highp vec2 u_offset;\nvarying vec2 v_uv;\nvoid main() {\n  vec3 offset = u_displayViewMat3 * vec3(u_offset, 0.0);\n  gl_Position = vec4(a_position, 0.0, 1.0) + vec4(offset, 0.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}"
          },
          "edge-detect": {
            "frei-chen": {
              "frei-chen.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform vec2 u_texSize;\nvarying vec2 v_uv;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[9];\nconst mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );\nconst mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );\nconst mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );\nconst mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );\nconst mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );\nconst mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );\nconst mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );\nconst mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );\nconst mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );\nvoid main() {\n  G[0] = g0,\n  G[1] = g1,\n  G[2] = g2,\n  G[3] = g3,\n  G[4] = g4,\n  G[5] = g5,\n  G[6] = g6,\n  G[7] = g7,\n  G[8] = g8;\n  mat3 I;\n  float cnv[9];\n  vec3 sample;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 9; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);\n  float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);\n  gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);\n}"
            },
            sobel: {
              "sobel.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );\nvoid main() {\n  mat3 I;\n  float cnv[2];\n  vec3 sample;\n  G[0] = g0;\n  G[1] = g1;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 2; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);\n}"
            }
          },
          "edge-enhance": {
            "edge-enhance.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nvarying vec2 v_uv;\nuniform vec2 u_texSize;\nvec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);\nmat3 G[2];\nconst mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );\nconst mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );\nvoid main() {\n  mat3 I;\n  float cnv[2];\n  vec3 sample;\n  G[0] = g0;\n  G[1] = g1;\n  for (float i = 0.0; i < 3.0; i++) {\n    for (float j = 0.0; j < 3.0; j++) {\n      sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;\n      I[int(i)][int(j)] = length(sample);\n    }\n  }\n  for (int i = 0; i < 2; i++) {\n    float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);\n    cnv[i] = dp3 * dp3;\n  }\n  vec4 color = texture2D(u_colorTexture, v_uv);\n  gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);\n}"
          },
          filterEffect: {
            "filterEffect.frag": "precision mediump float;\nuniform sampler2D u_colorTexture;\nuniform mat4 u_coefficients;\nvarying vec2 v_uv;\nvoid main() {\n  vec4 color = texture2D(u_colorTexture, v_uv);\n  vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);\n  float a = color.a;\n  gl_FragColor = vec4(a * rgbw.rgb, a);\n}"
          },
          pp: {
            "pp.vert": "precision mediump float;\nattribute vec2 a_position;\nvarying vec2 v_uv;\nvoid main() {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_uv = (a_position + 1.0) / 2.0;\n}"
          }
        },
        raster: {
          bitmap: {
            "bitmap.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\nuniform sampler2D u_texture;\nuniform highp vec2 u_coordScale;\nuniform lowp float u_opacity;\n#include <filtering/bicubic.glsl>\nvoid main() {\n#ifdef BICUBIC\n  vec4 color = sampleBicubicBSpline(u_texture, v_texcoord, u_coordScale);\n#else\n  vec4 color = texture2D(u_texture, v_texcoord);\n#endif\n  float alpha = u_opacity * color.a;\n  gl_FragColor = vec4(alpha * color.rgb, alpha);\n}",
            "bitmap.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
          },
          common: {
            "common.glsl": "uniform sampler2D u_image;\nuniform int u_bandCount;\nuniform bool u_isFloatTexture;\nuniform bool u_flipY;\nuniform float u_opacity;\nuniform int u_resampling;\nuniform vec2 u_srcImageSize;\n#ifdef APPLY_PROJECTION\n#include <raster/common/projection.glsl>\n#endif\n#ifdef BICUBIC\n#include <filtering/bicubic.glsl>\n#endif\n#ifdef BILINEAR\n#include <filtering/bilinear.glsl>\n#endif\nvec2 getPixelLocation(vec2 coords) {\n  vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;\n#ifdef APPLY_PROJECTION\n  targetLocation = projectPixelLocation(targetLocation);\n#endif\n  return targetLocation;\n}\nbool isOutside(vec2 coords){\n   if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {\n     return true;\n   } else {\n     return false;\n   }\n}\nvec4 getPixel(vec2 pixelLocation) {\n#ifdef BICUBIC\n  vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);\n#elif defined(BILINEAR)\n  vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);\n#else\n  vec4 color = texture2D(u_image, pixelLocation);\n#endif\n  return color;\n}",
            "contrastBrightness.glsl": "uniform float u_contrastOffset;\nuniform float u_brightnessOffset;\nvec4 adjustContrastBrightness(vec4 currentPixel, bool isFloat) {\n  vec4 pixelValue = isFloat ? currentPixel * 255.0 : currentPixel;\n  float maxI = 255.0;\n  float mid = 128.0;\n  float c = u_contrastOffset;\n  float b = u_brightnessOffset;\n  vec4 v;\n  if (c > 0.0 && c < 100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) / (2.0 * (100.0 - c)) + mid;\n  } else if (c <= 0.0 && c > -100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + 2.0 * maxI * b) * (100.0 + c) / 20000.0 + mid;\n  } else if (c == 100.0) {\n    v = (200.0 * pixelValue - 100.0 * maxI + (maxI + 1.0) * (100.0 - c) + 2.0 * maxI * b);\n    v = (sign(v) + 1.0) / 2.0;\n  } else if (c == -100.0) {\n    v = vec4(mid, mid, mid, currentPixel.a);\n  }\n  return vec4(v.r / 255.0, v.g / 255.0, v.b / 255.0, currentPixel.a);\n}",
            "projection.glsl": "uniform sampler2D u_transformGrid;\nuniform vec2 u_transformSpacing;\nuniform vec2 u_transformGridSize;\nuniform vec2 u_targetImageSize;\nvec2 projectPixelLocation(vec2 coords) {\n  vec2 index_image = floor(coords * u_targetImageSize);\n  vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);\n  vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;\n  vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);\n  vec2 srcLocation;\n  vec2 transform_location = index_transform + oneTransformPixel * 0.5;\n  if (pos.s <= pos.t) {\n    vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));\n    vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));\n    srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));\n    srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));\n  } else {\n    vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));\n    vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));\n    srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));\n    srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));\n  }\n  return srcLocation;\n}"
          },
          hillshade: {
            "hillshade.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform int u_hillshadeType;\nuniform float u_sinZcosAs[6];\nuniform float u_sinZsinAs[6];\nuniform float u_cosZs[6];\nuniform float u_weights[6];\nuniform vec2 u_factor;\nuniform float u_minValue;\nuniform float u_maxValue;\n#include <raster/lut/colorize.glsl>\nfloat getNeighborHoodAlpha(float a, float b, float c, float d, float e, float f, float g, float h, float i){\n  if (a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0 || a == 0.0 || a == 0.0 || a==0.0) {\n    return 0.0;\n  }\n  else {\n    return e;\n  }\n}\nvec3 rgb2hsv(vec3 c) {\n  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n  vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);\n  vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);\n  float d = q.x - min(q.w, q.y);\n  float e = 1.0e-10;\n  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);\n}\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nvec4 overlay(float val, float minValue, float maxValue, float hillshade) {\n  val = clamp((val - minValue) / (maxValue - minValue), 0.0, 1.0);\n  vec4 rgb = colorize(vec4(val, val, val, 1.0), 255.0);\n  vec3 hsv = rgb2hsv(rgb.xyz);\n  hsv.z = hillshade;\n  return vec4(hsv2rgb(hsv), 1.0) * rgb.a;\n}\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n  if (currentPixel.a == 0.0) {\n    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n  }\n  vec2 axy = vec2(-1.0, -1.0);\n  vec2 bxy = vec2(0.0, -1.0);\n  vec2 cxy = vec2(1.0, -1.0);\n  vec2 dxy = vec2(-1.0, 0.0);\n  vec2 fxy = vec2(1.0, 0.0);\n  vec2 gxy = vec2(-1.0, 1.0);\n  vec2 hxy = vec2(0.0, 1.0);\n  vec2 ixy = vec2(1.0, 1.0);\n  vec2 onePixel = 1.0 / u_srcImageSize;\n  if (pixelLocation.s < onePixel.s) {\n    axy[0] = 1.0;\n    dxy[0] = 1.0;\n    gxy[0] = 1.0;\n  }\n  if (pixelLocation.t < onePixel.t) {\n    axy[1] = 1.0;\n    bxy[1] = 1.0;\n    cxy[1] = 1.0;\n  }\n  if (pixelLocation.s > 1.0 - onePixel.s) {\n    cxy[0] = -1.0;\n    fxy[0] = -1.0;\n    ixy[0] = -1.0;\n  }\n  if (pixelLocation.t > 1.0 - onePixel.t) {\n    gxy[1] = -1.0;\n    hxy[1] = -1.0;\n    ixy[1] = -1.0;\n  }\n  vec4 va = texture2D(u_image, pixelLocation + onePixel * axy);\n  vec4 vb = texture2D(u_image, pixelLocation + onePixel * bxy);\n  vec4 vc = texture2D(u_image, pixelLocation + onePixel * cxy);\n  vec4 vd = texture2D(u_image, pixelLocation + onePixel * dxy);\n  vec4 ve = texture2D(u_image, pixelLocation);\n  vec4 vf = texture2D(u_image, pixelLocation + onePixel * fxy);\n  vec4 vg = texture2D(u_image, pixelLocation + onePixel * gxy);\n  vec4 vh = texture2D(u_image, pixelLocation + onePixel * hxy);\n  vec4 vi = texture2D(u_image, pixelLocation + onePixel * ixy);\n  float dzx = (vc + 2.0 * vf + vi - va - 2.0 * vd - vg).r * u_factor.s;\n  float dzy = (vg + 2.0 * vh + vi - va - 2.0 * vb - vc).r * u_factor.t;\n  float dzd = sqrt(1.0 + dzx * dzx + dzy * dzy);\n  float hillshade = 0.0;\n  if (u_hillshadeType == 0){\n\t   float cosDelta = u_sinZsinAs[0] * dzy - u_sinZcosAs[0] * dzx;\n     float z = (u_cosZs[0] + cosDelta) / dzd;\n     if (z < 0.0)  z = 0.0;\n\t   hillshade = z;\n  } else {\n\t  for (int k = 0; k < 6; k++) {\n\t\t float cosDelta = u_sinZsinAs[k] * dzy - u_sinZcosAs[k] * dzx;\n\t\t float z = (u_cosZs[k] + cosDelta) / dzd;\n\t\t if (z < 0.0) z = 0.0;\n     hillshade = hillshade + z * u_weights[k];\n\t\t if (k == 5) break;\n    }\n  }\n  float alpha = getNeighborHoodAlpha(va.a, vb.a, vc.a, vd.a, ve.a, vf.a, vg.a, vh.a, vi.a);\n#ifdef APPLY_COLORMAP\n  gl_FragColor = overlay(ve.r, u_minValue, u_maxValue, hillshade) * alpha * u_opacity;\n#else\n  gl_FragColor = vec4(hillshade, hillshade, hillshade, 1.0) * alpha * u_opacity;\n#endif\n}",
            "hillshade.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
          },
          lut: {
            "colorize.glsl": "uniform sampler2D u_colormap;\nuniform float u_colormapOffset;\nuniform float u_colormapMaxIndex;\nvec4 colorize(vec4 currentPixel, float scaleFactor) {\n  float clrIndex = clamp(currentPixel.r * scaleFactor - u_colormapOffset, 0.0, u_colormapMaxIndex);\n  vec2 clrPosition = vec2((clrIndex + 0.5) / (u_colormapMaxIndex + 1.0), 0.0);\n  vec4 color = texture2D(u_colormap, clrPosition);\n  vec4 result = vec4(color.rgb, color.a * currentPixel.a);\n  return result;\n}",
            "lut.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\n#include <raster/lut/colorize.glsl>\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n  vec4 result = colorize(currentPixel, 1.0);\n  gl_FragColor = vec4(result.xyz, 1.0) * result.a * u_opacity;\n}",
            "lut.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos * u_scale + u_offset;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
          },
          stretch: {
            "stretch.frag": "precision mediump float;\nvarying highp vec2 v_texcoord;\n#include <raster/common/common.glsl>\nuniform float u_minCutOff[3];\nuniform float u_maxCutOff[3];\nuniform float u_minOutput;\nuniform float u_maxOutput;\nuniform float u_factor[3];\nuniform bool u_useGamma;\nuniform float u_gamma[3];\nuniform float u_gammaCorrection[3];\n#include <raster/lut/colorize.glsl>\nfloat stretchOneValue(float val, float minCutOff, float maxCutOff, float minOutput, float maxOutput, float factor, bool useGamma, float gamma, float gammaCorrection) {\n  if (val >= maxCutOff) {\n    return maxOutput;\n  } else if (val <= minCutOff) {\n    return minOutput;\n  }\n  float stretchedVal;\n  if (useGamma) {\n  \tfloat tempf = 1.0;\n\t  float outRange = maxOutput - minOutput;\n\t  float relativeVal = (val - minCutOff) / (maxCutOff - minCutOff);\n\t  if (gamma > 1.0) {\n      tempf -= pow(1.0 / outRange, relativeVal * gammaCorrection);\n    }\n    stretchedVal = (tempf * outRange * pow(relativeVal, 1.0 / gamma) + minOutput) / 255.0;\n  } else {\n    stretchedVal = minOutput + (val - minCutOff) * factor;\n  }\n  return stretchedVal;\n}\nvoid main() {\n  vec2 pixelLocation = getPixelLocation(v_texcoord);\n  if (isOutside(pixelLocation)) {\n     gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n     return;\n  }\n  vec4 currentPixel = getPixel(pixelLocation);\n#ifdef NOOP\n  gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;\n  return;\n#endif\n  if (u_bandCount == 1) {\n    float grayVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n#ifdef APPLY_COLORMAP\n      vec4 result = colorize(vec4(grayVal, grayVal, grayVal, 1.0), u_useGamma ? 255.0 : 1.0);\n      gl_FragColor = vec4(result.xyz, 1.0) * result.a * currentPixel.a * u_opacity;\n#else\n      gl_FragColor = vec4(grayVal, grayVal, grayVal, 1.0) * currentPixel.a * u_opacity;\n#endif\n  } else {\n    float redVal = stretchOneValue(currentPixel.r, u_minCutOff[0], u_maxCutOff[0], u_minOutput, u_maxOutput, u_factor[0], u_useGamma, u_gamma[0], u_gammaCorrection[0]);\n    float greenVal = stretchOneValue(currentPixel.g, u_minCutOff[1], u_maxCutOff[1], u_minOutput, u_maxOutput, u_factor[1], u_useGamma, u_gamma[1], u_gammaCorrection[1]);\n    float blueVal = stretchOneValue(currentPixel.b, u_minCutOff[2], u_maxCutOff[2], u_minOutput, u_maxOutput, u_factor[2], u_useGamma, u_gamma[2], u_gammaCorrection[2]);\n    gl_FragColor = vec4(redVal, greenVal, blueVal, 1.0) * currentPixel.a * u_opacity;\n  }\n}",
            "stretch.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp vec2 u_coordScale;\nuniform highp float u_scale;\nuniform highp vec2 u_offset;\nvarying highp vec2 v_texcoord;\nvoid main()\n{\n  v_texcoord = a_pos * u_scale + u_offset;\n  gl_Position = vec4(u_dvsMat3 * vec3(a_pos * u_coordScale, 1.0), 1.0);\n}"
          }
        },
        stencil: {
          "stencil.frag": "void main() {\n  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}",
          "stencil.vert": "attribute vec2 a_pos;\nvoid main() {\n  gl_Position = vec4(a_pos, 0.0, 1.0);\n}"
        },
        tileInfo: {
          "tileInfo.frag": "uniform mediump sampler2D u_texture;\nvarying mediump vec2 v_tex;\nvoid main(void) {\n  lowp vec4 color = texture2D(u_texture, v_tex);\n  gl_FragColor = 0.75 * color;\n}",
          "tileInfo.vert": "attribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_coord_ratio;\nuniform mediump vec2 u_delta;\nuniform mediump vec2 u_dimensions;\nvarying mediump vec2 v_tex;\nvoid main() {\n  mediump vec2 offset = u_coord_ratio * vec2(u_delta + a_pos * u_dimensions);\n  vec3 v_pos = u_dvsMat3 * vec3(offset, 1.0);\n  gl_Position = vec4(v_pos.xy, 0.0, 1.0);\n  v_tex = a_pos;\n}"
        },
        util: {
          "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}"
        }
      };
      /***/
    },

    /***/
    "+yyC":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/libs/earcut/earcut.js ***!
      \**************************************************************/

    /*! exports provided: deviation, earcut */

    /***/
    function yyC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deviation", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "earcut", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function e(e, r, i) {
        var u = r && r.length,
            o = u ? r[0] * i : e.length;
        var y = n(e, 0, o, i, !0);
        var p = new Array();
        if (!y || y.next === y.prev) return p;
        var c, v, s, h, d;

        if (u && (y = function (e, x, r, i) {
          var u = new Array();

          for (var _t = 0, _r = x.length; _t < _r; _t++) {
            var _o = n(e, x[_t] * i, _t < _r - 1 ? x[_t + 1] * i : e.length, i, !1);

            _o === _o.next && (_o.steiner = !0), u.push(l(_o));
          }

          u.sort(w);

          for (var _i = 0, _u = u; _i < _u.length; _i++) {
            var _e = _u[_i];
            f(_e, r), r = t(r, r.next);
          }

          return r;
        }(e, r, y, i)), e.length > 80 * i) {
          c = s = e[0], v = h = e[1];

          for (var _n = i; _n < o; _n += i) {
            var _t2 = e[_n],
                _x = e[_n + 1];
            c = Math.min(c, _t2), v = Math.min(v, _x), s = Math.max(s, _t2), h = Math.max(h, _x);
          }

          d = Math.max(s - c, h - v), d = 0 !== d ? 1 / d : 0;
        }

        return x(y, p, i, c, v, d), p;
      }

      function n(e, n, t, x, r) {
        var i;
        if (r === s(e, n, t, x) > 0) for (var _r2 = n; _r2 < t; _r2 += x) {
          i = u(_r2, e[_r2], e[_r2 + 1], i);
        } else for (var _r3 = t - x; _r3 >= n; _r3 -= x) {
          i = u(_r3, e[_r3], e[_r3 + 1], i);
        }
        return i && a(i, i.next) && (o(i), i = i.next), i;
      }

      function t(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : e;
        if (!e) return e;
        var t,
            x = e;

        do {
          if (t = !1, x.steiner || !a(x, x.next) && 0 !== c(x.prev, x, x.next)) x = x.next;else {
            if (o(x), x = n = x.prev, x === x.next) break;
            t = !0;
          }
        } while (t || x !== n);

        return n;
      }

      function x(e, n, u, l, f, p) {
        var c = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
        if (!e) return;
        !c && p && (e = y(e, l, f, p));
        var v = e;

        for (; e.prev !== e.next;) {
          var _y = e.prev,
              _s = e.next;
          if (p ? i(e, l, f, p) : r(e)) n.push(_y.index / u), n.push(e.index / u), n.push(_s.index / u), o(e), e = _s.next, v = _s.next;else if ((e = _s) === v) {
            c ? 1 === c ? x(e = g(e, n, u), n, u, l, f, p, 2) : 2 === c && M(e, n, u, l, f, p) : x(t(e), n, u, l, f, p, 1);
            break;
          }
        }
      }

      function r(e) {
        var n = e.prev,
            t = e,
            x = e.next;
        if (c(n, t, x) >= 0) return !1;
        var r = e.next.next;
        var i = r;
        var u = 0;

        for (; r !== e.prev && (0 === u || r !== i);) {
          if (u++, h(n.x, n.y, t.x, t.y, x.x, x.y, r.x, r.y) && c(r.prev, r, r.next) >= 0) return !1;
          r = r.next;
        }

        return !0;
      }

      function i(e, n, t, x) {
        var r = e.prev,
            i = e,
            u = e.next;
        if (c(r, i, u) >= 0) return !1;
        var o = r.x < i.x ? r.x < u.x ? r.x : u.x : i.x < u.x ? i.x : u.x,
            l = r.y < i.y ? r.y < u.y ? r.y : u.y : i.y < u.y ? i.y : u.y,
            f = r.x > i.x ? r.x > u.x ? r.x : u.x : i.x > u.x ? i.x : u.x,
            y = r.y > i.y ? r.y > u.y ? r.y : u.y : i.y > u.y ? i.y : u.y,
            p = Z(o, l, n, t, x),
            v = Z(f, y, n, t, x);
        var s = e.prevZ,
            d = e.nextZ;

        for (; s && s.z >= p && d && d.z <= v;) {
          if (s !== e.prev && s !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, s.x, s.y) && c(s.prev, s, s.next) >= 0) return !1;
          if (s = s.prevZ, d !== e.prev && d !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, d.x, d.y) && c(d.prev, d, d.next) >= 0) return !1;
          d = d.nextZ;
        }

        for (; s && s.z >= p;) {
          if (s !== e.prev && s !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, s.x, s.y) && c(s.prev, s, s.next) >= 0) return !1;
          s = s.prevZ;
        }

        for (; d && d.z <= v;) {
          if (d !== e.prev && d !== e.next && h(r.x, r.y, i.x, i.y, u.x, u.y, d.x, d.y) && c(d.prev, d, d.next) >= 0) return !1;
          d = d.nextZ;
        }

        return !0;
      }

      function u(e, n, t, x) {
        var r = new m(e, n, t);
        return x ? (r.next = x.next, r.prev = x, x.next.prev = r, x.next = r) : (r.prev = r, r.next = r), r;
      }

      function o(e) {
        e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
      }

      function l(e) {
        var n = e,
            t = e;

        do {
          (n.x < t.x || n.x === t.x && n.y < t.y) && (t = n), n = n.next;
        } while (n !== e);

        return t;
      }

      function f(e, n) {
        if (n = function (e, n) {
          var t = n;
          var x = e.x,
              r = e.y;
          var i,
              u = -1 / 0;

          do {
            if (r <= t.y && r >= t.next.y && t.next.y !== t.y) {
              var _e2 = t.x + (r - t.y) * (t.next.x - t.x) / (t.next.y - t.y);

              if (_e2 <= x && _e2 > u) {
                if (u = _e2, _e2 === x) {
                  if (r === t.y) return t;
                  if (r === t.next.y) return t.next;
                }

                i = t.x < t.next.x ? t : t.next;
              }
            }

            t = t.next;
          } while (t !== n);

          if (!i) return null;
          if (x === u) return i.prev;
          var o = i,
              l = i.x,
              f = i.y;
          var y,
              p = 1 / 0;
          t = i.next;

          for (; t !== o;) {
            x >= t.x && t.x >= l && x !== t.x && h(r < f ? x : u, r, l, f, r < f ? u : x, r, t.x, t.y) && (y = Math.abs(r - t.y) / (x - t.x), (y < p || y === p && t.x > i.x) && d(t, e) && (i = t, p = y)), t = t.next;
          }

          return i;
        }(e, n)) {
          var _x2 = b(n, e);

          t(_x2, _x2.next);
        }
      }

      function y(e, n, t, x) {
        for (var _r4; _r4 !== e; _r4 = _r4.next) {
          if (_r4 = _r4 || e, null === _r4.z && (_r4.z = Z(_r4.x, _r4.y, n, t, x)), _r4.prev.next !== _r4 || _r4.next.prev !== _r4) return _r4.prev.next = _r4, _r4.next.prev = _r4, y(e, n, t, x);
          _r4.prevZ = _r4.prev, _r4.nextZ = _r4.next;
        }

        return e.prevZ.nextZ = null, e.prevZ = null, function (e) {
          var n,
              t = 1;

          for (;;) {
            var _x3 = void 0,
                _r5 = e;

            e = null, n = null;
            var _i2 = 0;

            for (; _r5;) {
              _i2++, _x3 = _r5;
              var _u2 = 0;

              for (; _u2 < t && _x3; _u2++) {
                _x3 = _x3.nextZ;
              }

              var _o2 = t;

              for (; _u2 > 0 || _o2 > 0 && _x3;) {
                var _t3 = void 0;

                0 === _u2 ? (_t3 = _x3, _x3 = _x3.nextZ, _o2--) : 0 !== _o2 && _x3 ? _r5.z <= _x3.z ? (_t3 = _r5, _r5 = _r5.nextZ, _u2--) : (_t3 = _x3, _x3 = _x3.nextZ, _o2--) : (_t3 = _r5, _r5 = _r5.nextZ, _u2--), n ? n.nextZ = _t3 : e = _t3, _t3.prevZ = n, n = _t3;
              }

              _r5 = _x3;
            }

            if (n.nextZ = null, t *= 2, _i2 < 2) return e;
          }
        }(e);
      }

      function p(e, n, t, x) {
        var r = n && n.length,
            i = r ? n[0] * t : e.length;
        var u = Math.abs(s(e, 0, i, t));
        if (r) for (var _x4 = 0, _r6 = n.length; _x4 < _r6; _x4++) {
          var _i3 = n[_x4] * t,
              _o3 = _x4 < _r6 - 1 ? n[_x4 + 1] * t : e.length;

          u -= Math.abs(s(e, _i3, _o3, t));
        }
        var o = 0;

        for (var _n2 = 0; _n2 < x.length; _n2 += 3) {
          var _r7 = x[_n2] * t,
              _i4 = x[_n2 + 1] * t,
              _u3 = x[_n2 + 2] * t;

          o += Math.abs((e[_r7] - e[_u3]) * (e[_i4 + 1] - e[_r7 + 1]) - (e[_r7] - e[_i4]) * (e[_u3 + 1] - e[_r7 + 1]));
        }

        return 0 === u && 0 === o ? 0 : Math.abs((o - u) / u);
      }

      function c(e, n, t) {
        return (n.y - e.y) * (t.x - n.x) - (n.x - e.x) * (t.y - n.y);
      }

      function v(e, n, t, x) {
        return !!(a(e, n) && a(t, x) || a(e, x) && a(t, n)) || c(e, n, t) > 0 != c(e, n, x) > 0 && c(t, x, e) > 0 != c(t, x, n) > 0;
      }

      function s(e, n, t, x) {
        var r = 0;

        for (var _i5 = n, _u4 = t - x; _i5 < t; _i5 += x) {
          r += (e[_u4] - e[_i5]) * (e[_i5 + 1] + e[_u4 + 1]), _u4 = _i5;
        }

        return r;
      }

      function h(e, n, t, x, r, i, u, o) {
        return (r - u) * (n - o) - (e - u) * (i - o) >= 0 && (e - u) * (x - o) - (t - u) * (n - o) >= 0 && (t - u) * (i - o) - (r - u) * (x - o) >= 0;
      }

      function d(e, n) {
        return c(e.prev, e, e.next) < 0 ? c(e, n, e.next) >= 0 && c(e, e.prev, n) >= 0 : c(e, n, e.prev) < 0 || c(e, e.next, n) < 0;
      }

      function Z(e, n, t, x, r) {
        return (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - t) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) | (n = 1431655765 & ((n = 858993459 & ((n = 252645135 & ((n = 16711935 & ((n = 32767 * (n - x) * r) | n << 8)) | n << 4)) | n << 2)) | n << 1)) << 1;
      }

      function a(e, n) {
        return e.x === n.x && e.y === n.y;
      }

      function w(e, n) {
        return e.x - n.x;
      }

      function g(e, n, t) {
        var x = e;

        do {
          var _r8 = x.prev,
              _i6 = x.next.next;
          !a(_r8, _i6) && v(_r8, x, x.next, _i6) && d(_r8, _i6) && d(_i6, _r8) && (n.push(_r8.index / t), n.push(x.index / t), n.push(_i6.index / t), o(x), o(x.next), x = e = _i6), x = x.next;
        } while (x !== e);

        return x;
      }

      function M(e, n, r, i, u, o) {
        var l = e;

        do {
          var _e3 = l.next.next;

          for (; _e3 !== l.prev;) {
            if (l.index !== _e3.index && z(l, _e3)) {
              var _f = b(l, _e3);

              return l = t(l, l.next), _f = t(_f, _f.next), x(l, n, r, i, u, o), void x(_f, n, r, i, u, o);
            }

            _e3 = _e3.next;
          }

          l = l.next;
        } while (l !== e);
      }

      function z(e, n) {
        return e.next.index !== n.index && e.prev.index !== n.index && !function (e, n) {
          var t = e;

          do {
            if (t.index !== e.index && t.next.index !== e.index && t.index !== n.index && t.next.index !== n.index && v(t, t.next, e, n)) return !0;
            t = t.next;
          } while (t !== e);

          return !1;
        }(e, n) && d(e, n) && d(n, e) && function (e, n) {
          var t = e,
              x = !1;
          var r = (e.x + n.x) / 2,
              i = (e.y + n.y) / 2;

          do {
            t.y > i != t.next.y > i && t.next.y !== t.y && r < (t.next.x - t.x) * (i - t.y) / (t.next.y - t.y) + t.x && (x = !x), t = t.next;
          } while (t !== e);

          return x;
        }(e, n);
      }

      function b(e, n) {
        var t = new m(e.index, e.x, e.y),
            x = new m(n.index, n.x, n.y),
            r = e.next,
            i = n.prev;
        return e.next = n, n.prev = e, t.next = r, r.prev = t, x.next = t, t.prev = x, i.next = x, x.prev = i, x;
      }

      var m = function m(e, n, t) {
        _classCallCheck(this, m);

        this.index = e, this.x = n, this.y = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1;
      };
      /***/

    },

    /***/
    "1F90":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/programUtils.js ***!
      \***************************************************************/

    /*! exports provided: createProgram, glslifyDefineMap */

    /***/
    function F90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createProgram", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "glslifyDefineMap", function () {
        return n;
      });
      /* harmony import */


      var _Program_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Program.js */
      "jjdI");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(e) {
        var n = "";

        for (var _t4 in e) {
          var o = e[_t4];
          if ("boolean" == typeof o) o && (n += "#define ".concat(_t4, "\n"));else if ("number" == typeof o) n += "#define ".concat(_t4, " ").concat(o.toFixed(), "\n");else if ("object" == typeof o) {
            var _e4 = o.options;
            var r = 0;

            for (var _t5 in _e4) {
              n += "#define ".concat(_e4[_t5], " ").concat((r++).toFixed(), "\n");
            }

            n += "#define ".concat(_t4, " ").concat(_e4[o.value], "\n");
          }
        }

        return n;
      }

      function t(n, t, o, r) {
        o = o || {}, r = r || "";
        var f = "function" == typeof t.shaders ? t.shaders(o) : t.shaders;
        return new _Program_js__WEBPACK_IMPORTED_MODULE_0__["default"](n, r + f.vertexShader, r + f.fragmentShader, t.attributes);
      }
      /***/

    },

    /***/
    "2LiO":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushBitmap.js ***!
      \********************************************************************************/

    /*! exports provided: default */

    /***/
    function LiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../VertexStream.js */
      "gjrC");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = {
        nearest: {
          defines: [],
          samplingMode: 9728,
          mips: !1
        },
        bilinear: {
          defines: [],
          samplingMode: 9729,
          mips: !1
        },
        bicubic: {
          defines: ["bicubic"],
          samplingMode: 9729,
          mips: !1
        },
        trilinear: {
          defines: [],
          samplingMode: 9987,
          mips: !0
        }
      };
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK) {
        _inherits(_class, _WGLBrush_js__WEBPACK);

        var _super = _createSuper(_class);

        function _class() {
          var _this;

          _classCallCheck(this, _class);

          _this = _super.apply(this, arguments), _this._desc = {
            vsPath: "raster/bitmap",
            fsPath: "raster/bitmap",
            attributes: {
              a_position: 0,
              a_texcoord: 1
            }
          };
          return _this;
        }

        _createClass(_class, [{
          key: "dispose",
          value: function dispose() {
            this._quad && this._quad.dispose();
          }
        }, {
          key: "prepareState",
          value: function prepareState(_ref, t) {
            var e = _ref.context;
            e.setBlendingEnabled(!0), e.setBlendFunctionSeparate(1, 771, 1, 771), e.setColorMask(!0, !0, !0, !0), e.setStencilWriteMask(0), e.setStencilTestEnabled(!0), e.setStencilFunction(514, t.stencilRef, 255);
          }
        }, {
          key: "draw",
          value: function draw(i, n) {
            var r = i.context,
                a = i.renderingOptions,
                o = i.painter;
            if (!n.source) return;
            i.timeline.begin(this.name), this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__["default"](r, [0, 0, 1, 0, 0, 1, 1, 1]));

            var d = function (e, t, i) {
              if ("dynamic" === i.samplingMode) {
                var _i7 = e.state,
                    _n3 = t.resolution / t.pixelRatio / _i7.resolution,
                    _r9 = Math.round(e.pixelRatio) !== e.pixelRatio,
                    _a = _n3 > 1.05 || _n3 < .95;

                return _i7.rotation || _a || _r9 || t.isSourceScaled || t.rotation ? s.bilinear : s.nearest;
              }

              return s[i.samplingMode];
            }(i, n, a),
                m = o.materialManager.getProgram(i, this._desc, d.defines),
                c = n.coordScale,
                l = n.computedOpacity,
                p = n.transforms;

            n.setSamplingProfile(d), n.bind(i, _definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_BITMAP"]), r.bindProgram(m), m.setUniformMatrix3fv("u_dvsMat3", p.dvs), m.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_0__["TEXTURE_BINDING_BITMAP"]), m.setUniform2fv("u_coordScale", c), m.setUniform1f("u_opacity", l), this._quad.draw(), i.timeline.end(this.name);
          }
        }]);

        return _class;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "2yHJ":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/decluttering/config.js ***!
      \**************************************************************************************/

    /*! exports provided: COLLISION_GRID_CELL_SIZE, DECLUTTER_BUDGET, DECLUTTER_TILES, FADE_DURATION */

    /***/
    function yHJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_GRID_CELL_SIZE", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DECLUTTER_BUDGET", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DECLUTTER_TILES", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FADE_DURATION", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = !0,
          t = 32,
          c = 1.5,
          e = 200;
      /***/
    },

    /***/
    "3kh5":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLLine.js ***!
      \************************************************************************************/

    /*! exports provided: C_DEG_TO_RAD, WGLBrushVTLLine */

    /***/
    function kh5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLBrushVTLLine", function () {
        return f;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var o = Math.PI / 180,
          l = [1, 1, 1, 1];

      var f = /*#__PURE__*/function (_WGLBrush_js__WEBPACK2) {
        _inherits(f, _WGLBrush_js__WEBPACK2);

        var _super2 = _createSuper(f);

        function f() {
          var _this2;

          _classCallCheck(this, f);

          _this2 = _super2.apply(this, arguments), _this2._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this2._dashArray = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), _this2._programOptions = {
            id: !1,
            dd: !1,
            pattern: !1
          };
          return _this2;
        }

        _createClass(f, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "drawMany",
          value: function drawMany(i, r) {
            var n = i.context,
                o = i.displayLevel,
                _f2 = i.state,
                c = i.drawPhase,
                m = i.styleLayerUID,
                d = i.styleLayer,
                u = i.painter.getVectorTileProgramCache(),
                h = d.getPaintValue("line-translate", o),
                p = d.getPaintValue("line-translate-anchor", o),
                _ = d.getPaintValue("line-pattern", o),
                y = void 0 !== _,
                g = 1 / i.pixelRatio,
                v = d.getPaintValue("line-blur", o),
                U = d.hasDataDrivenColor ? l : d.getPaintValue("line-color", o),
                P = d.hasDataDrivenOpacity ? 1 : d.getPaintValue("line-opacity", o),
                M = d.hasDataDrivenWidth ? 1 : d.getPaintValue("line-width", o),
                V = P * U[3];

            this._color[0] = V * U[0], this._color[1] = V * U[1], this._color[2] = V * U[2], this._color[3] = V;
            var x = d.hasDataDrivenLine,
                b = c === _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLDrawPhase"].HITTEST;
            var D;
            b && (D = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["u32to4Xu8"])(m + 1));
            var j = (b ? 1 : 0) << 2 | (x ? 1 : 0) << 1 | (y ? 1 : 0),
                w = this._programOptions;
            w.id = b, w.dd = x, w.pattern = y;
            var A = u.getProgram(3, j, w);

            if (n.bindProgram(A), A.setUniformMatrix3fv("u_displayViewMat3", _f2.displayViewMat3), A.setUniformMatrix3fv("u_displayMat3", 1 === p ? _f2.displayMat3 : _f2.displayViewMat3), A.setUniform2fv("u_lineTranslation", h), A.setUniform1f("u_depth", d.z), A.setUniform1f("u_blur", v), A.setUniform1f("u_antialiasing", g), A.setUniform4fv("u_color", this._color), A.setUniform1f("u_width", M), b && A.setUniform4fv("u_id", D), y) {
              var t = i.spriteMosaic,
                  _r10 = t.getMosaicItemPosition(_, !0);

              _r10 && (t.bind(n, 9729, _r10.page, _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]), A.setUniform2f("u_pattern_tl", _r10.tl[0], _r10.br[1]), A.setUniform2f("u_pattern_br", _r10.br[0], _r10.tl[1]), A.setUniform2f("u_spriteSize", 8 * _r10.size[0], _r10.size[1]), A.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]));
            } else {
              var _t6 = d.getPaintValue("line-dasharray", o);

              _t6.length < 2 && (_t6 = [1, -1]);
              var e = 8;
              this._dashArray[0] = e * _t6[0], this._dashArray[1] = e * _t6[1], A.setUniform2fv("u_dasharray", this._dashArray);
            }

            var _iterator = _createForOfIteratorHelper(r),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _e5 = _step.value;
                if (!_e5.layerData.has(m)) continue;

                var _i8 = _e5.layerData.get(m);

                _i8.prepareForRendering(n, u);

                var _r11 = _i8.lineVertexArrayObject;
                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_r11) || (n.bindVAO(_r11), A.setUniformMatrix3fv("u_dvsMat3", _e5.transforms.dvs), n.setStencilFunction(514, _e5.stencilRef, 255), n.drawElements(4, _i8.lineIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * _i8.lineIndexStart), _e5.triangleCount += _i8.lineIndexCount / 3);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }]);

        return f;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
      /***/

    },

    /***/
    "3p2C":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrushMarker.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function p2C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLGeometryBrush.js */
      "Cx4o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLGeometryBrush_js_) {
        _inherits(_class2, _WGLGeometryBrush_js_);

        var _super3 = _createSuper(_class2);

        function _class2() {
          _classCallCheck(this, _class2);

          return _super3.apply(this, arguments);
        }

        _createClass(_class2, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "getGeometryType",
          value: function getGeometryType() {
            return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].MARKER;
          }
        }, {
          key: "drawGeometry",
          value: function drawGeometry(e, o, a, n, r) {
            var s = e.context,
                v = e.painter,
                l = e.rendererInfo,
                u = e.state,
                m = a.indexCount,
                p = a.indexFrom,
                f = a.materialKey,
                c = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["MarkerMaterialKey"].load(f),
                _ref2 = function (e) {
              return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_2__["createProgramDescriptor"])(e.data, {
                geometry: [{
                  location: 0,
                  name: "a_pos",
                  count: 2,
                  type: 5122
                }, {
                  location: 1,
                  name: "a_vertexOffset",
                  count: 2,
                  type: 5122
                }, {
                  location: 2,
                  name: "a_texCoords",
                  count: 2,
                  type: 5123
                }, {
                  location: 3,
                  name: "a_bitSetAndDistRatio",
                  count: 4,
                  type: 5121
                }, {
                  location: 4,
                  name: "a_id",
                  count: 4,
                  type: 5121
                }, {
                  location: 5,
                  name: "a_color",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 6,
                  name: "a_outlineColor",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 7,
                  name: "a_sizeAndOutlineWidth",
                  count: 4,
                  type: 5121
                }]
              });
            }(c),
                d = _ref2.bufferLayouts,
                y = _ref2.attributes,
                S = v.materialManager.getMaterialProgram(e, c, "materials/icon", y, r),
                _ = this._getVAO(s, d, y, n);

            s.bindProgram(S), s.bindVAO(_), c.textureBinding && v.textureManager.bindTextures(s, S, c, !0), this._setSharedUniforms(S, e, o);
            var V = c.vvRotation ? u.displayViewMat3 : u.displayMat3;

            if (S.setUniformMatrix3fv("u_displayMat3", V), c.vvSizeMinMaxValue && S.setUniform4fv("u_vvSizeMinMaxValue", l.vvSizeMinMaxValue), c.vvSizeScaleStops && S.setUniform1f("u_vvSizeScaleStopsValue", l.vvSizeScaleStopsValue), c.vvSizeFieldStops) {
              var _e6 = l.getSizeVVFieldStops(o.key.level);

              S.setUniform1fv("u_vvSizeFieldStopsValues", _e6.values), S.setUniform1fv("u_vvSizeFieldStopsSizes", _e6.sizes);
            }

            c.vvSizeUnitValue && S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", l.vvSizeUnitValueToPixelsRatio), c.vvColor && (S.setUniform1fv("u_vvColorValues", l.vvColorValues), S.setUniform4fv("u_vvColors", l.vvColors)), c.vvOpacity && (S.setUniform1fv("u_vvOpacityValues", l.vvOpacityValues), S.setUniform1fv("u_vvOpacities", l.vvOpacities)), c.vvRotation && S.setUniform1f("u_vvRotationType", "geographic" === l.vvMaterialParameters.vvRotationType ? 0 : 1), s.drawElements(4, m, 5125, Uint32Array.BYTES_PER_ELEMENT * p), s.bindVAO(null);
          }
        }]);

        return _class2;
      }(_WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "6ldq":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/Programs.js ***!
      \***********************************************************************************/

    /*! exports provided: background, circle, fill, icon, line, outline, text */

    /***/
    function ldq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "background", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "circle", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fill", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "icon", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "line", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "outline", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "text", function () {
        return h;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "QSUW");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = function r(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          PATTERN: a.pattern
        });
      },
          t = {
        name: "background",
        shaders: function shaders(e) {
          return {
            vertexShader: r(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("background/background.vert"),
            fragmentShader: r(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("background/background.frag")
          };
        },
        attributes: {
          a_pos: 0
        }
      },
          o = function o(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id
        });
      },
          i = {
        name: "circle",
        shaders: function shaders(e) {
          return {
            vertexShader: o(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("circle/circle.vert"),
            fragmentShader: o(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("circle/circle.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_color: 1,
          a_stroke_color: 2,
          a_data: 3
        }
      },
          n = function n(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          DD: a.dd,
          PATTERN: a.pattern
        });
      },
          s = {
        name: "fill",
        shaders: function shaders(e) {
          return {
            vertexShader: n(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("fill/fill.vert"),
            fragmentShader: n(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("fill/fill.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_color: 1
        }
      },
          d = function d(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          DD: a.dd
        });
      },
          l = {
        name: "outline",
        shaders: function shaders(e) {
          return {
            vertexShader: d(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("outline/outline.vert"),
            fragmentShader: d(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("outline/outline.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_offset: 1,
          a_xnormal: 2,
          a_color: 3
        }
      },
          c = function c(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          DD: a.dd,
          SDF: a.sdf
        });
      },
          f = {
        name: "icon",
        shaders: function shaders(e) {
          return {
            vertexShader: c(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("icon/icon.vert"),
            fragmentShader: c(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("icon/icon.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_vertexOffset: 1,
          a_texAngleRange: 2,
          a_levelInfo: 3,
          a_color: 4,
          a_size: 5,
          a_opacityInfo: 6
        }
      },
          _ = function _(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          DD: a.dd,
          PATTERN: a.pattern
        });
      },
          m = {
        name: "line",
        shaders: function shaders(e) {
          return {
            vertexShader: _(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("line/line.vert"),
            fragmentShader: _(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("line/line.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_offsetAndNormal: 1,
          a_accumulatedDistance: 2,
          a_color: 3,
          a_width: 4
        }
      },
          g = function g(a) {
        return Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_4__["glslifyDefineMap"])({
          ID: a.id,
          DD: a.dd
        });
      },
          h = {
        name: "text",
        shaders: function shaders(e) {
          return {
            vertexShader: g(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("text/text.vert"),
            fragmentShader: g(e) + Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_6__["resolveIncludes"])("text/text.frag")
          };
        },
        attributes: {
          a_pos: 0,
          a_vertexOffset: 1,
          a_texAngleRange: 2,
          a_levelInfo: 3,
          a_color: 4,
          a_size: 5,
          a_opacityInfo: 6
        }
      };
      /***/

    },

    /***/
    "7F7D":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushStencil.js ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function F7D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /* harmony import */


      var _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shaders/BackgroundPrograms.js */
      "IcFU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK3) {
        _inherits(_class3, _WGLBrush_js__WEBPACK3);

        var _super4 = _createSuper(_class3);

        function _class3() {
          var _this3;

          _classCallCheck(this, _class3);

          _this3 = _super4.apply(this, arguments), _this3._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_8__["f"])(1, 0, 0, 1), _this3._initialized = !1;
          return _this3;
        }

        _createClass(_class3, [{
          key: "dispose",
          value: function dispose() {
            this._solidProgram && (this._solidProgram.dispose(), this._solidProgram = null), this._solidVertexArrayObject && (this._solidVertexArrayObject.dispose(), this._solidVertexArrayObject = null);
          }
        }, {
          key: "prepareState",
          value: function prepareState(_ref3, r) {
            var t = _ref3.context;
            t.setDepthWriteEnabled(!1), t.setDepthTestEnabled(!1), t.setStencilTestEnabled(!0), t.setBlendingEnabled(!1), t.setColorMask(!1, !1, !1, !1), t.setStencilOp(7680, 7680, 7681), t.setStencilWriteMask(255), t.setStencilFunctionSeparate(1032, 516, r.stencilRef, 255);
          }
        }, {
          key: "draw",
          value: function draw(t, r) {
            var e = t.context;
            this._initialized || this._initialize(e), e.bindVAO(this._solidVertexArrayObject), e.bindProgram(this._solidProgram), this._solidProgram.setUniformMatrix3fv("u_dvsMat3", r.transforms.dvs), this._solidProgram.setUniform2fv("u_coord_range", r.coordRange), this._solidProgram.setUniform1f("u_depth", 0), this._solidProgram.setUniform4fv("u_color", this._color), e.drawArrays(5, 0, 4), e.bindVAO();
          }
        }, {
          key: "_initialize",
          value: function _initialize(i) {
            if (this._initialized) return !0;
            var s = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(i, _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__["background"]);
            if (!s) return !1;

            var a = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                n = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(i, 35044, a),
                l = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](i, _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__["background"].attributes, {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5120,
                offset: 0,
                stride: 2,
                normalized: !1,
                divisor: 0
              }]
            }, {
              geometry: n
            });

            return this._solidProgram = s, this._solidVertexArrayObject = l, this._initialized = !0, !0;
          }
        }]);

        return _class3;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      /***/

    },

    /***/
    "7P6p":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrushLabel.js ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function P6p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLGeometryBrush.js */
      "Cx4o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLGeometryBrush_js_2) {
        _inherits(_class4, _WGLGeometryBrush_js_2);

        var _super5 = _createSuper(_class4);

        function _class4() {
          _classCallCheck(this, _class4);

          return _super5.apply(this, arguments);
        }

        _createClass(_class4, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "getGeometryType",
          value: function getGeometryType() {
            return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LABEL;
          }
        }, {
          key: "drawGeometry",
          value: function drawGeometry(e, o, i, n, l) {
            var r = e.context,
                s = e.painter,
                m = e.state,
                u = e.rendererInfo,
                f = i.indexCount,
                d = i.indexFrom,
                v = i.materialKey,
                c = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["LabelMaterialKey"].load(v),
                p = c.mapAligned ? 1 : 0;

            if (!p && Math.abs(o.key.level - Math.round(100 * e.displayLevel) / 100) >= 1) return;

            var _ref4 = function (e) {
              return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_2__["createProgramDescriptor"])(e.data, {
                geometry: [{
                  location: 0,
                  name: "a_pos",
                  count: 2,
                  type: 5122
                }, {
                  location: 1,
                  name: "a_id",
                  count: 4,
                  type: 5121
                }, {
                  location: 2,
                  name: "a_color",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 3,
                  name: "a_haloColor",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 4,
                  name: "a_texAndSize",
                  count: 4,
                  type: 5121
                }, {
                  location: 5,
                  name: "a_refSymbolAndPlacementOffset",
                  count: 4,
                  type: 5121
                }, {
                  location: 6,
                  name: "a_glyphData",
                  count: 4,
                  type: 5121
                }, {
                  location: 7,
                  name: "a_vertexOffset",
                  count: 2,
                  type: 5122
                }, {
                  location: 8,
                  name: "a_texCoords",
                  count: 2,
                  type: 5123
                }]
              });
            }(c),
                S = _ref4.bufferLayouts,
                y = _ref4.attributes,
                _ = s.materialManager.getMaterialProgram(e, c, "materials/label", y, l),
                z = this._getVAO(r, S, y, n);

            e.context.setStencilFunction(514, 0, 255), r.bindProgram(_), r.bindVAO(z), this._setSharedUniforms(_, e, o), s.textureManager.bindTextures(r, _, c);
            var M = 1 === p ? m.displayViewMat3 : m.displayMat3;

            if (c.vvSizeMinMaxValue && _.setUniform4fv("u_vvSizeMinMaxValue", u.vvSizeMinMaxValue), c.vvSizeScaleStops && _.setUniform1f("u_vvSizeScaleStopsValue", u.vvSizeScaleStopsValue), c.vvSizeFieldStops) {
              var _e7 = u.getSizeVVFieldStops(o.key.level);

              _.setUniform1fv("u_vvSizeFieldStopsValues", _e7.values), _.setUniform1fv("u_vvSizeFieldStopsSizes", _e7.sizes);
            }

            c.vvSizeUnitValue && _.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", u.vvSizeUnitValueToPixelsRatio), _.setUniform1f("u_mapRotation", Math.floor(m.rotation / 360 * 254)), _.setUniform1f("u_mapAligned", p), _.setUniformMatrix3fv("u_displayMat3", M), _.setUniform1f("u_opacity", 1), _.setUniform1f("u_zoomLevel", Math.round(10 * e.displayLevel)), _.setUniform2fv("u_screenSize", e.state.size), _.setUniform1f("u_isHalo", 1), r.drawElements(4, f, 5125, Uint32Array.BYTES_PER_ELEMENT * d), _.setUniform1f("u_isHalo", 0), r.drawElements(4, f, 5125, Uint32Array.BYTES_PER_ELEMENT * d), r.bindVAO(null), r.setStencilTestEnabled(!0), r.setBlendingEnabled(!0);
          }
        }]);

        return _class4;
      }(_WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "8HmA":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrush.js ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function HmA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class5() {
          _classCallCheck(this, _class5);

          this.name = this.constructor.name || "UnnamedBrush";
        }

        _createClass(_class5, [{
          key: "prepareState",
          value: function prepareState(r, t, a) {}
        }, {
          key: "draw",
          value: function draw(r, t, a) {}
        }, {
          key: "drawMany",
          value: function drawMany(r, t, a) {
            var _iterator2 = _createForOfIteratorHelper(t),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var s = _step2.value;
                this.draw(r, s, a);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return _class5;
      }();
      /***/

    },

    /***/
    "Cx4o":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrush.js ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cx4o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK4) {
        _inherits(_class6, _WGLBrush_js__WEBPACK4);

        var _super6 = _createSuper(_class6);

        function _class6() {
          _classCallCheck(this, _class6);

          return _super6.apply(this, arguments);
        }

        _createClass(_class6, [{
          key: "prepareState",
          value: function prepareState(_ref5, e, i) {
            var t = _ref5.context;
            var r = i && -1 !== i.indexOf("id");
            t.setBlendingEnabled(!r), t.setBlendFunctionSeparate(1, 771, 1, 771), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!0), t.setStencilFunction(514, e.stencilRef, 255);
          }
        }, {
          key: "draw",
          value: function draw(t, e, i) {
            var _this4 = this;

            if (e.commitChanges(t), !e.visible) return;
            var r = this.getGeometryType(),
                s = e.getDisplayList(),
                a = e.getGeometry(r);
            a && s && (t.timeline.begin(this.name), t.attributeView.bindTextures(t.context), s.byType(r, function (r) {
              _this4.drawGeometry(t, e, r, a, i);
            }), t.timeline.end(this.name));
          }
        }, {
          key: "_getVAO",
          value: function _getVAO(t, e, i, r) {
            return r.vao || (r.vao = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](t, i, e, r.vertexBufferMap, r.indexBuffer)), r.vao;
          }
        }, {
          key: "_setSharedUniforms",
          value: function _setSharedUniforms(s, a, n) {
            s.setUniform1f("u_pixelRatio", a.pixelRatio), s.setUniformMatrix3fv("u_dvsMat3", n.transforms.dvs), s.setUniformMatrix3fv("u_displayViewMat3", a.state.displayViewMat3), s.setUniform1i("u_attributeTextureSize", a.attributeView.size), s.setUniform1i("u_attributeData0", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_ATTRIBUTE_DATA_0"]), s.setUniform1i("u_attributeData1", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_ATTRIBUTE_DATA_1"]), s.setUniform1i("u_attributeData2", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_ATTRIBUTE_DATA_2"]), s.setUniform1i("u_attributeData3", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_ATTRIBUTE_DATA_3"]);
          }
        }]);

        return _class6;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
      /***/

    },

    /***/
    "EVXj":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/TileInfoPrograms.js ***!
      \*************************************************************************************/

    /*! exports provided: tileInfo */

    /***/
    function EVXj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "tileInfo", function () {
        return r;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = {
        name: "tileInfo",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("tileInfo/tileInfo.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("tileInfo/tileInfo.frag")
        },
        attributes: {
          a_pos: 0
        }
      };
      /***/
    },

    /***/
    "HQFP":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/GeometryUtils.js ***!
      \**************************************************************************/

    /*! exports provided: C_256_TO_RAD, C_2PI, C_DEG_TO_256, C_DEG_TO_RAD, C_INFINITY, C_PI, C_PI_BY_2, C_RAD_TO_256, C_SQRT2, C_SQRT2_INV, between, degToByte, interpolate, log2, positiveMod, radToByte, sqr */

    /***/
    function HQFP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_256_TO_RAD", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_2PI", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_256", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_DEG_TO_RAD", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_INFINITY", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_PI_BY_2", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_RAD_TO_256", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_SQRT2_INV", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "between", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "degToByte", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "interpolate", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "log2", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "positiveMod", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "radToByte", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sqr", function () {
        return T;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = Number.POSITIVE_INFINITY,
          t = Math.PI,
          r = 2 * t,
          u = t / 2,
          o = 128 / t,
          e = t / 128,
          c = 256 / 360,
          f = t / 180,
          i = 1.414213562,
          I = 1 / 1.414213562,
          N = 1 / Math.LN2;

      function a(n, t) {
        return (n %= t) >= 0 ? n : n + t;
      }

      function h(n) {
        return a(n * o, 256);
      }

      function M(n) {
        return a(.7111111111111111 * n, 256);
      }

      function P(n) {
        return Math.log(n) * N;
      }

      function T(n) {
        return n * n;
      }

      function b(n, t, r) {
        return n * (1 - r) + t * r;
      }

      function g(n, t, r) {
        return n >= t && n <= r || n >= r && n <= t;
      }
      /***/

    },

    /***/
    "I/na":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/ClippingInfo.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function INa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../DisplayObject.js */
      "fEsP");
      /* harmony import */


      var _Mesh2D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Mesh2D.js */
      "k61e");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.ClippingInfo"),
          c = function c(t) {
        return parseFloat(t) / 100;
      };

      var n = /*#__PURE__*/function (_DisplayObject_js__WE) {
        _inherits(n, _DisplayObject_js__WE);

        var _super7 = _createSuper(n);

        function n(t, e) {
          var _this5;

          _classCallCheck(this, n);

          _this5 = _super7.call(this), _this5._clip = e, _this5._cache = {}, _this5.stage = t, _this5._handle = e.watch("version", function () {
            return _this5._invalidate();
          }), _this5.ready();
          return _this5;
        }

        _createClass(n, [{
          key: "_destroyGL",
          value: function _destroyGL() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._cache.mesh) && (this._cache.mesh.destroy(), this._cache.mesh = null), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._cache.vao) && (this._cache.vao.dispose(), this._cache.vao = null);
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._destroyGL(), this._handle.remove();
          }
        }, {
          key: "getVAO",
          value: function getVAO(t, r, s, h) {
            var _r$size = _slicedToArray(r.size, 2),
                o = _r$size[0],
                a = _r$size[1];

            if ("geometry" !== this._clip.type && this._lastWidth === o && this._lastHeight === a || (this._lastWidth = o, this._lastHeight = a, this._destroyGL()), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(this._cache.vao)) {
              var e = this._createMesh(r, this._clip),
                  _o4 = e.getIndexBuffer(t),
                  _a2 = e.getVertexBuffers(t);

              this._cache.mesh = e, this._cache.vao = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](t, s, h, _a2, _o4);
            }

            return this._cache.vao;
          }
        }, {
          key: "_invalidate",
          value: function _invalidate() {
            this._destroyGL(), this.requestRender();
          }
        }, {
          key: "_createScreenRect",
          value: function _createScreenRect(t, e) {
            var _t$size = _slicedToArray(t.size, 2),
                r = _t$size[0],
                s = _t$size[1],
                i = "string" == typeof e.left ? c(e.left) * r : e.left,
                h = "string" == typeof e.right ? c(e.right) * r : e.right,
                o = "string" == typeof e.top ? c(e.top) * s : e.top,
                a = "string" == typeof e.bottom ? c(e.bottom) * s : e.bottom,
                _n4 = i,
                p = o;

            return {
              x: _n4,
              y: p,
              width: Math.max(r - h - _n4, 0),
              height: Math.max(s - a - p, 0)
            };
          }
        }, {
          key: "_createMesh",
          value: function _createMesh(t, e) {
            switch (e.type) {
              case "rect":
                return _Mesh2D_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromRect(this._createScreenRect(t, e));

              case "path":
                return _Mesh2D_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromPath(e);

              case "geometry":
                return _Mesh2D_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromGeometry(t, e);

              default:
                return a.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-bad-type", "Unable to create ClippingInfo mesh from clip of type: ${clip.type}")), _Mesh2D_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromRect({
                  x: 0,
                  y: 0,
                  width: 1,
                  height: 1
                });
            }
          }
        }], [{
          key: "fromClipArea",
          value: function fromClipArea(t, e) {
            return new n(t, e);
          }
        }]);

        return n;
      }(_DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__["DisplayObject"]);
      /* harmony default export */


      __webpack_exports__["default"] = n;
      /***/
    },

    /***/
    "IcFU":
    /*!***************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/BackgroundPrograms.js ***!
      \***************************************************************************************/

    /*! exports provided: background */

    /***/
    function IcFU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "background", function () {
        return a;
      });
      /* harmony import */


      var _sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./sources/resolver.js */
      "vpBa");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = {
        name: "background",
        shaders: {
          vertexShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("background/background.vert"),
          fragmentShader: Object(_sources_resolver_js__WEBPACK_IMPORTED_MODULE_0__["resolveIncludes"])("background/background.frag")
        },
        attributes: {
          a_pos: 0
        }
      };
      /***/
    },

    /***/
    "JB4N":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrushLine.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function JB4N(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLGeometryBrush.js */
      "Cx4o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLGeometryBrush_js_3) {
        _inherits(_class7, _WGLGeometryBrush_js_3);

        var _super8 = _createSuper(_class7);

        function _class7() {
          _classCallCheck(this, _class7);

          return _super8.apply(this, arguments);
        }

        _createClass(_class7, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "getGeometryType",
          value: function getGeometryType() {
            return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].LINE;
          }
        }, {
          key: "drawGeometry",
          value: function drawGeometry(e, i, o, n, l) {
            var r = e.context,
                s = e.painter,
                v = e.rendererInfo,
                u = e.requiredLevel,
                m = o.indexFrom,
                c = o.indexCount,
                f = o.materialKey,
                p = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["LineMaterialKey"].load(f),
                _ref6 = function (e) {
              return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_2__["createProgramDescriptor"])(e.data, {
                geometry: [{
                  location: 0,
                  name: "a_pos",
                  count: 2,
                  type: 5122
                }, {
                  location: 1,
                  name: "a_id",
                  count: 4,
                  type: 5121
                }, {
                  location: 2,
                  name: "a_color",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 3,
                  name: "a_offsetAndNormal",
                  count: 4,
                  type: 5120
                }, {
                  location: 4,
                  name: "a_accumulatedDistanceAndHalfWidth",
                  count: 2,
                  type: 5123
                }, {
                  location: 5,
                  name: "a_tlbr",
                  count: 4,
                  type: 5123
                }, {
                  location: 6,
                  name: "a_segmentDirection",
                  count: 4,
                  type: 5120
                }, {
                  location: 7,
                  name: "a_aux",
                  count: 2,
                  type: 5123
                }]
              });
            }(p),
                d = _ref6.bufferLayouts,
                S = _ref6.attributes,
                _ = s.materialManager.getMaterialProgram(e, p, "materials/line", S, l),
                y = this._getVAO(r, d, S, n),
                U = 1 / e.pixelRatio;

            r.bindProgram(_), r.bindVAO(y), this._setSharedUniforms(_, e, i), p.textureBinding && s.textureManager.bindTextures(r, _, p);
            var V = Math.pow(2, u - i.key.level) / e.pixelRatio;

            if (_.setUniform1f("u_zoomFactor", V), _.setUniform1f("u_blur", 0 + U), _.setUniform1f("u_antialiasing", U), p.vvSizeMinMaxValue && _.setUniform4fv("u_vvSizeMinMaxValue", v.vvSizeMinMaxValue), p.vvSizeScaleStops && _.setUniform1f("u_vvSizeScaleStopsValue", v.vvSizeScaleStopsValue), p.vvSizeFieldStops) {
              var _e8 = v.getSizeVVFieldStops(i.key.level);

              _.setUniform1fv("u_vvSizeFieldStopsValues", _e8.values), _.setUniform1fv("u_vvSizeFieldStopsSizes", _e8.sizes);
            }

            p.vvSizeUnitValue && _.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", v.vvSizeUnitValueToPixelsRatio), p.vvColor && (_.setUniform1fv("u_vvColorValues", v.vvColorValues), _.setUniform4fv("u_vvColors", v.vvColors)), p.vvOpacity && (_.setUniform1fv("u_vvOpacityValues", v.vvOpacityValues), _.setUniform1fv("u_vvOpacities", v.vvOpacities)), r.setFaceCullingEnabled(!0), r.setFrontFace(2305), r.setCullFace(1029), r.drawElements(4, c, 5125, Uint32Array.BYTES_PER_ELEMENT * m), r.setFaceCullingEnabled(!1), r.bindVAO(null);
          }
        }]);

        return _class7;
      }(_WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "Jn3h":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLSymbol.js ***!
      \**************************************************************************************/

    /*! exports provided: WGLBrushVTLSymbol */

    /***/
    function Jn3h(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLBrushVTLSymbol", function () {
        return m;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/vec2f32.js */
      "c46T");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _vectorTiles_decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../vectorTiles/decluttering/config.js */
      "2yHJ");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /* harmony import */


      var _GeometryUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../GeometryUtils.js */
      "HQFP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = [1, 1, 1, 1];

      var m = /*#__PURE__*/function (_WGLBrush_js__WEBPACK5) {
        _inherits(m, _WGLBrush_js__WEBPACK5);

        var _super9 = _createSuper(m);

        function m() {
          var _this6;

          _classCallCheck(this, m);

          _this6 = _super9.apply(this, arguments), _this6._iconProgramOptions = {
            id: !1,
            dd: !1,
            sdf: !1
          }, _this6._sdfProgramOptions = {
            id: !1,
            dd: !1
          }, _this6._spritesTextureSize = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])(), _this6._haloColor = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this6._sdfColor = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this6._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
          return _this6;
        }

        _createClass(m, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "drawMany",
          value: function drawMany(t, e) {
            var i = t.drawPhase,
                o = t.styleLayerUID,
                a = t.styleLayer;
            var r;
            i === _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST && (r = Object(_number_js__WEBPACK_IMPORTED_MODULE_5__["u32to4Xu8"])(o + 1)), this._drawIcons(t, a, e, r), this._drawText(t, a, e, r);
          }
        }, {
          key: "_drawIcons",
          value: function _drawIcons(i, o, a, r) {
            var n = i.context,
                f = i.displayLevel,
                _m = i.drawPhase,
                h = i.painter,
                d = i.state,
                p = i.styleLayerUID;

            var _,
                g = !1;

            var _iterator3 = _createForOfIteratorHelper(a),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _t7 = _step3.value;

                if (_t7.layerData.has(p) && (_ = _t7.layerData.get(p), _.iconPerPageElementsMap.size > 0)) {
                  g = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (!g) return;
            var y = o.hasDataDrivenIconSize ? 1 : o.getLayoutValue("icon-size", f),
                U = o.hasDataDrivenIconColor ? u : o.getPaintValue("icon-color", f),
                x = o.hasDataDrivenIconOpacity ? 1 : o.getPaintValue("icon-opacity", f),
                P = o.getPaintValue("icon-translate", f),
                T = o.getPaintValue("icon-translate-anchor", f),
                v = h.getVectorTileProgramCache(),
                M = U[3] * x;
            this._color[0] = M * U[0], this._color[1] = M * U[1], this._color[2] = M * U[2], this._color[3] = M;
            var V = o.getLayoutValue("icon-rotation-alignment", f);
            2 === V && (V = 0 === o.getLayoutValue("symbol-placement", f) ? 1 : 0);
            var D = 0 === V,
                E = o.getLayoutValue("icon-keep-upright", f) && D,
                S = _.isIconSDF,
                w = o.hasDataDrivenIcon,
                z = _m === _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST,
                C = (z ? 1 : 0) << 2 | (w ? 1 : 0) << 1 | (S ? 1 : 0),
                L = this._iconProgramOptions;
            L.id = z, L.dd = w, L.sdf = S;
            var b = v.getProgram(4, C, L);

            if (n.bindProgram(b), S) {
              var t = o.getPaintValue("icon-halo-color", f),
                  e = o.getPaintValue("icon-halo-width", f);
              b.setUniform4f("u_outlineColor", t[0], t[1], t[2], t[3]), b.setUniform1f("u_outlineSize", e);
            }

            b.setUniformMatrix3fv("u_displayViewMat3", 0 === V ? d.displayViewMat3 : d.displayMat3), b.setUniformMatrix3fv("u_displayMat3", 1 === T ? d.displayMat3 : d.displayViewMat3), b.setUniform2fv("u_iconTranslation", P), b.setUniform1f("u_depth", o.z), b.setUniform1f("u_mapRotation", Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_8__["degToByte"])(d.rotation)), b.setUniform1f("u_keepUpright", E ? 1 : 0), b.setUniform1f("u_level", 10 * f), b.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]), b.setUniform1f("u_size", y), b.setUniform4fv("u_color", this._color), b.setUniform1f("u_opacity", 1), b.setUniform1f("u_fadeDuration", _vectorTiles_decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__["FADE_DURATION"] / 1e3), z && b.setUniform4fv("u_id", r);

            var _iterator4 = _createForOfIteratorHelper(a),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _e9 = _step4.value;
                if (!_e9.layerData.has(p)) continue;
                if (_ = _e9.layerData.get(p), 0 === _.iconPerPageElementsMap.size) continue;
                _.prepareForRendering(n, v), _.updateOpacityInfo();
                var _o5 = _.iconVertexArrayObject;

                if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_o5)) {
                  n.bindVAO(_o5), b.setUniformMatrix3fv("u_dvsMat3", _e9.transforms.dvs), b.setUniform1f("u_time", (performance.now() - _.lastOpacityUpdate) / 1e3);

                  var _iterator5 = _createForOfIteratorHelper(_.iconPerPageElementsMap),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _step5$value = _slicedToArray(_step5.value, 2),
                          _t8 = _step5$value[0],
                          _o6 = _step5$value[1];

                      this._renderIconRange(i, b, _o6, _t8, _e9);
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }, {
          key: "_renderIconRange",
          value: function _renderIconRange(t, i, o, a, r) {
            var s = t.context,
                n = t.spriteMosaic;
            this._spritesTextureSize[0] = n.getWidth(a) / 4, this._spritesTextureSize[1] = n.getHeight(a) / 4, i.setUniform2fv("u_mosaicSize", this._spritesTextureSize), n.bind(s, 9729, a, _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]), s.setStencilTestEnabled(!0), s.setStencilFunction(516, 255, 255), s.setStencilWriteMask(0), s.drawElements(4, o[1], 5125, Uint32Array.BYTES_PER_ELEMENT * o[0]), r.triangleCount += o[1] / 3;
          }
        }, {
          key: "_drawText",
          value: function _drawText(e, o, r, n) {
            var _this7 = this;

            var f = e.context,
                _m2 = e.displayLevel,
                h = e.drawPhase,
                d = e.glyphMosaic,
                p = e.painter,
                _ = e.pixelRatio,
                g = e.state,
                y = e.styleLayerUID;
            var U,
                x = !1;

            var _iterator6 = _createForOfIteratorHelper(r),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var t = _step6.value;

                if (t.layerData.has(y) && (U = t.layerData.get(y), U.glyphPerPageElementsMap.size > 0)) {
                  x = !0;
                  break;
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            if (!x) return;
            var P = o.getLayoutValue("text-rotation-alignment", _m2);
            2 === P && (P = 0 === o.getLayoutValue("symbol-placement", _m2) ? 1 : 0);
            var T = 0 === P,
                v = o.getLayoutValue("text-keep-upright", _m2) && T,
                M = h === _enums_js__WEBPACK_IMPORTED_MODULE_6__["WGLDrawPhase"].HITTEST,
                V = .8 * 3 / _,
                D = o.hasDataDrivenTextSize ? 1 : o.getLayoutValue("text-size", _m2),
                E = o.hasDataDrivenTextColor ? u : o.getPaintValue("text-color", _m2),
                S = o.hasDataDrivenTextOpacity ? 1 : o.getPaintValue("text-opacity", _m2),
                w = o.getPaintValue("text-halo-color", _m2),
                z = o.getPaintValue("text-halo-width", _m2),
                C = 3 * o.getPaintValue("text-halo-blur", _m2),
                L = 3 * z,
                b = p.getVectorTileProgramCache(),
                I = E[3] * S;
            this._sdfColor[0] = I * E[0], this._sdfColor[1] = I * E[1], this._sdfColor[2] = I * E[2], this._sdfColor[3] = I;
            var O = w[3] * S;
            this._haloColor[0] = O * w[0], this._haloColor[1] = O * w[1], this._haloColor[2] = O * w[2], this._haloColor[3] = O, this._glyphTextureSize || (this._glyphTextureSize = Object(_chunks_vec2f32_js__WEBPACK_IMPORTED_MODULE_2__["f"])(d.width / 4, d.height / 4));
            var R = o.getPaintValue("text-translate", _m2),
                j = o.getPaintValue("text-translate-anchor", _m2),
                k = o.hasDataDrivenText,
                A = (M ? 1 : 0) << 1 | (k ? 1 : 0),
                B = this._sdfProgramOptions;
            B.id = M, B.dd = k;
            var F = b.getProgram(6, A, B);
            f.bindProgram(F), F.setUniformMatrix3fv("u_displayViewMat3", 0 === P ? g.displayViewMat3 : g.displayMat3), F.setUniformMatrix3fv("u_displayMat3", 1 === j ? g.displayMat3 : g.displayViewMat3), F.setUniform2fv("u_textTranslation", R), F.setUniform1f("u_depth", o.z + 152587890625e-16), F.setUniform2fv("u_mosaicSize", this._glyphTextureSize), F.setUniform1f("u_mapRotation", Object(_GeometryUtils_js__WEBPACK_IMPORTED_MODULE_8__["degToByte"])(g.rotation)), F.setUniform1f("u_keepUpright", v ? 1 : 0), F.setUniform1f("u_level", 10 * _m2), F.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_GLYPHS"]), F.setUniform1f("u_size", D), F.setUniform1f("u_antialiasingWidth", V), F.setUniform1f("u_opacity", 1), F.setUniform1f("u_fadeDuration", _vectorTiles_decluttering_config_js__WEBPACK_IMPORTED_MODULE_4__["FADE_DURATION"] / 1e3), M && F.setUniform4fv("u_id", n);

            var _iterator7 = _createForOfIteratorHelper(r),
                _step7;

            try {
              var _loop = function _loop() {
                var e = _step7.value;
                if (!e.layerData.has(y)) return "continue";
                if (U = e.layerData.get(y), 0 === U.glyphPerPageElementsMap.size) return "continue";
                U.prepareForRendering(f, b), U.updateOpacityInfo();
                var i = U.textVertexArrayObject;
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(i)) return "continue";
                f.bindVAO(i), F.setUniformMatrix3fv("u_dvsMat3", e.transforms.dvs), f.setStencilTestEnabled(!0), f.setStencilFunction(516, 255, 255), f.setStencilWriteMask(0);
                var o = (performance.now() - U.lastOpacityUpdate) / 1e3;
                F.setUniform1f("u_time", o), U.glyphPerPageElementsMap.forEach(function (t, i) {
                  _this7._renderGlyphRange(f, t, i, d, F, w[3], z, C, L, e);
                });
              };

              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _ret = _loop();

                if (_ret === "continue") continue;
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
        }, {
          key: "_renderGlyphRange",
          value: function _renderGlyphRange(t, e, o, a, r, s, n, l, f, c) {
            a.bind(t, 9729, o, _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_GLYPHS"]), s > 0 && n > 0 && (r.setUniform4fv("u_color", this._haloColor), r.setUniform1f("u_halo", 1), r.setUniform1f("u_edgeDistance", f), r.setUniform1f("u_edgeBlur", l), t.drawElements(4, e[1], 5125, Uint32Array.BYTES_PER_ELEMENT * e[0]), c.triangleCount += e[1] / 3), this._sdfColor[3] > 0 && (r.setUniform4fv("u_color", this._sdfColor), r.setUniform1f("u_halo", 0), r.setUniform1f("u_edgeDistance", 0), r.setUniform1f("u_edgeBlur", 0), t.drawElements(4, e[1], 5125, Uint32Array.BYTES_PER_ELEMENT * e[0]), c.triangleCount += e[1] / 3);
          }
        }]);

        return m;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
      /***/

    },

    /***/
    "Oxob":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/brushes.js ***!
      \**************************************************************/

    /*! exports provided: brushes, vtlBrushes */

    /***/
    function Oxob(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "brushes", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "vtlBrushes", function () {
        return G;
      });
      /* harmony import */


      var _webgl_brushes_BrushBitmap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./webgl/brushes/BrushBitmap.js */
      "2LiO");
      /* harmony import */


      var _webgl_brushes_BrushClip_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./webgl/brushes/BrushClip.js */
      "bGT/");
      /* harmony import */


      var _webgl_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushInfo.js */
      "b3VY");
      /* harmony import */


      var _webgl_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushStencil.js */
      "7F7D");
      /* harmony import */


      var _webgl_brushes_WGLBrushVTLBackground_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushVTLBackground.js */
      "cRHi");
      /* harmony import */


      var _webgl_brushes_WGLBrushVTLCircle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushVTLCircle.js */
      "ip0X");
      /* harmony import */


      var _webgl_brushes_WGLBrushVTLFill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushVTLFill.js */
      "zcBC");
      /* harmony import */


      var _webgl_brushes_WGLBrushVTLLine_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushVTLLine.js */
      "3kh5");
      /* harmony import */


      var _webgl_brushes_WGLBrushVTLSymbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./webgl/brushes/WGLBrushVTLSymbol.js */
      "Jn3h");
      /* harmony import */


      var _webgl_brushes_WGLGeometryBrushFill_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./webgl/brushes/WGLGeometryBrushFill.js */
      "j/wV");
      /* harmony import */


      var _webgl_brushes_WGLGeometryBrushLabel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./webgl/brushes/WGLGeometryBrushLabel.js */
      "7P6p");
      /* harmony import */


      var _webgl_brushes_WGLGeometryBrushLine_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./webgl/brushes/WGLGeometryBrushLine.js */
      "JB4N");
      /* harmony import */


      var _webgl_brushes_WGLGeometryBrushMarker_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./webgl/brushes/WGLGeometryBrushMarker.js */
      "3p2C");
      /* harmony import */


      var _webgl_brushes_WGLGeometryBrushText_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./webgl/brushes/WGLGeometryBrushText.js */
      "eCaw");
      /* harmony import */


      var _webgl_brushes_raster_BrushRasterBitmap_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./webgl/brushes/raster/BrushRasterBitmap.js */
      "aET7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var g = {
        marker: _webgl_brushes_WGLGeometryBrushMarker_js__WEBPACK_IMPORTED_MODULE_12__["default"],
        line: _webgl_brushes_WGLGeometryBrushLine_js__WEBPACK_IMPORTED_MODULE_11__["default"],
        fill: _webgl_brushes_WGLGeometryBrushFill_js__WEBPACK_IMPORTED_MODULE_9__["default"],
        text: _webgl_brushes_WGLGeometryBrushText_js__WEBPACK_IMPORTED_MODULE_13__["default"],
        label: _webgl_brushes_WGLGeometryBrushLabel_js__WEBPACK_IMPORTED_MODULE_10__["default"],
        clip: _webgl_brushes_BrushClip_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        stencil: _webgl_brushes_WGLBrushStencil_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        bitmap: _webgl_brushes_BrushBitmap_js__WEBPACK_IMPORTED_MODULE_0__["default"],
        raster: _webgl_brushes_raster_BrushRasterBitmap_js__WEBPACK_IMPORTED_MODULE_14__["default"],
        tileInfo: _webgl_brushes_WGLBrushInfo_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        vtlBackground: _webgl_brushes_WGLBrushVTLBackground_js__WEBPACK_IMPORTED_MODULE_4__["WGLBrushVTLBackground"],
        vtlFill: _webgl_brushes_WGLBrushVTLFill_js__WEBPACK_IMPORTED_MODULE_6__["WGLBrushVTLFill"],
        vtlLine: _webgl_brushes_WGLBrushVTLLine_js__WEBPACK_IMPORTED_MODULE_7__["WGLBrushVTLLine"],
        vtlCircle: _webgl_brushes_WGLBrushVTLCircle_js__WEBPACK_IMPORTED_MODULE_5__["WGLBrushVTLCircle"],
        vtlSymbol: _webgl_brushes_WGLBrushVTLSymbol_js__WEBPACK_IMPORTED_MODULE_8__["WGLBrushVTLSymbol"]
      },
          G = {
        vtlBackground: _webgl_brushes_WGLBrushVTLBackground_js__WEBPACK_IMPORTED_MODULE_4__["WGLBrushVTLBackground"],
        vtlFill: _webgl_brushes_WGLBrushVTLFill_js__WEBPACK_IMPORTED_MODULE_6__["WGLBrushVTLFill"],
        vtlLine: _webgl_brushes_WGLBrushVTLLine_js__WEBPACK_IMPORTED_MODULE_7__["WGLBrushVTLLine"],
        vtlCircle: _webgl_brushes_WGLBrushVTLCircle_js__WEBPACK_IMPORTED_MODULE_5__["WGLBrushVTLCircle"],
        vtlSymbol: _webgl_brushes_WGLBrushVTLSymbol_js__WEBPACK_IMPORTED_MODULE_8__["WGLBrushVTLSymbol"]
      };
      /***/
    },

    /***/
    "QSUW":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/resolver.js ***!
      \*******************************************************************************************/

    /*! exports provided: resolveIncludes */

    /***/
    function QSUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveIncludes", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../webgl/ShaderCompiler.js */
      "SfCL");
      /* harmony import */


      var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shaderRepository.js */
      "V+Bw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__["default"](function (r) {
        var t = _shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__["default"];
        return r.split("/").forEach(function (r) {
          t && (t = t[r]);
        }), t;
      });

      function o(r) {
        return t.resolveIncludes(r);
      }
      /***/

    },

    /***/
    "SfCL":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/ShaderCompiler.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function SfCL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class8(e) {
          _classCallCheck(this, _class8);

          this.readFile = e;
        }

        _createClass(_class8, [{
          key: "resolveIncludes",
          value: function resolveIncludes(e) {
            return this.resolve(e);
          }
        }, {
          key: "resolve",
          value: function resolve(e) {
            var _this8 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Map();
            if (t.has(e)) return t.get(e);
            var r = this.read(e);
            if (!r) throw new Error("cannot find shader file ".concat(e));
            var s = /^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;
            var n = s.exec(r);
            var l = [];

            for (; null != n;) {
              l.push({
                path: n[1],
                start: n.index,
                length: n[0].length
              }), n = s.exec(r);
            }

            var a = 0,
                h = "";
            return l.forEach(function (e) {
              h += r.slice(a, e.start), h += t.has(e.path) ? "" : _this8.resolve(e.path, t), a = e.start + e.length;
            }), h += r.slice(a), t.set(e, h), h;
          }
        }, {
          key: "read",
          value: function read(e) {
            return this.readFile(e);
          }
        }]);

        return _class8;
      }();
      /***/

    },

    /***/
    "V+Bw":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/sources/shaderRepository.js ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function VBw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = {
        background: {
          "background.frag": "#ifdef PATTERN\nuniform lowp float u_opacity;\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#else\nuniform lowp vec4 u_color;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main() {\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = u_opacity * color;\n#else\n  gl_FragColor = u_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "background.vert": "precision mediump float;\nattribute vec2 a_pos;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform mediump float u_coord_range;\nuniform mediump float u_depth;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\nvoid main() {\n  gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n}"
        },
        circle: {
          "circle.frag": "precision lowp float;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float dist = length(v_offset);\n  mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);\n  lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));\n  gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "circle.vert": "precision mediump float;\nattribute vec2 a_pos;\nattribute vec4 a_color;\nattribute vec4 a_stroke_color;\nattribute vec4 a_data;\nconst float sizePrecision = 0.25;\nconst float blurPrecision = 0.03125;\nvarying lowp vec4 v_color;\nvarying lowp vec4 v_stroke_color;\nvarying mediump float v_blur;\nvarying mediump float v_stroke_width;\nvarying mediump float v_radius;\nvarying mediump vec2 v_offset;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_circleTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_radius;\nuniform lowp vec4 u_color;\nuniform mediump float u_blur;\nuniform mediump float u_stroke_width;\nuniform lowp vec4 u_stroke_color;\nuniform mediump float u_antialiasingWidth;\nvoid main()\n{\n  v_color = a_color * u_color;\n  v_stroke_color = a_stroke_color * u_stroke_color;\n  v_stroke_width = a_data[1] * sizePrecision * u_stroke_width;\n  v_radius = a_data[2] * u_radius;\n  v_blur = max(a_data[0] * blurPrecision + u_blur, u_antialiasingWidth / (v_radius + v_stroke_width));\n  mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);\n  v_offset = offset;\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"
        },
        fill: {
          "fill.frag": "precision lowp float;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform lowp sampler2D u_texture;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef PATTERN\n  mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);\n  mediump vec2 samplePos = mix(u_pattern_tl, u_pattern_br, normalizedTextureCoord);\n  lowp vec4 color = texture2D(u_texture, samplePos);\n  gl_FragColor = v_color[3] * color;\n#else\n  gl_FragColor = v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "fill.vert": "precision mediump float;\nattribute vec2 a_pos;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump float u_depth;\nuniform mediump vec2 u_fillTranslation;\n#ifdef PATTERN\nuniform mediump mat3 u_pattern_matrix;\nvarying mediump vec2 v_tileTextureCoord;\n#endif\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\n#ifdef DD\nattribute vec4 a_color;\n#endif\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\nvoid main()\n{\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n#ifdef PATTERN\n  v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;\n#endif\n  vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"
        },
        icon: {
          "icon.frag": "precision mediump float;\nuniform lowp sampler2D u_texture;\n#ifdef SDF\nuniform lowp vec4 u_color;\nuniform lowp vec4 u_outlineColor;\nuniform mediump float u_outlineSize;\n#endif\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nvarying lowp vec4 v_color;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\n#include <util/encoding.glsl>\nvec4 mixColors(vec4 color1, vec4 color2) {\n  float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);\n  vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);\n  return vec4(compositeColor, compositeAlpha);\n}\nvoid main()\n{\n#ifdef SDF\n  lowp vec4 fillPixelColor = v_color;\n  float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;\n  const float sofetEdgeRatio = 0.248062016;\n  float size = max(v_size.x, v_size.y);\n  float dist = d * sofetEdgeRatio * size;\n  fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);\n  if (u_outlineSize > 0.25) {\n    lowp vec4 outlinePixelColor = u_outlineColor;\n    const float outlineLimitRatio = (16.0 / 86.0);\n    float clampedOutlineSize = sofetEdgeRatio * min(u_outlineSize, outlineLimitRatio * max(v_size.x, v_size.y));\n    outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);\n    gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);\n  }\n  else {\n    gl_FragColor = v_opacity * fillPixelColor;\n  }\n#else\n  lowp vec4 texColor = texture2D(u_texture, v_tex);\n  gl_FragColor = v_opacity * texColor;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "icon.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_size;\n#endif\nuniform lowp vec4 u_color;\nuniform mediump float u_size;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_iconTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_opacity;\nuniform mediump float u_fadeDuration;\nvarying mediump vec2 v_tex;\nvarying lowp float v_opacity;\nvarying mediump vec2 v_size;\nconst float C_OFFSET_PRECISION = 1.0 / 8.0;\nconst float C_256_TO_RAD = 3.14159265359 / 128.0;\nconst float C_DEG_TO_RAD = 3.14159265359 / 180.0;\nconst float tileCoordRatio = 1.0 / 8.0;\nuniform highp float u_time;\nvoid main()\n{\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_opacity = u_opacity * interpolatedOpacity;\n  mediump float a_angle         = a_levelInfo[1];\n  mediump float a_minLevel      = a_levelInfo[2];\n  mediump float a_maxLevel      = a_levelInfo[3];\n  mediump vec2 a_tex            = a_texAngleRange.xy;\n  mediump float delta_z = 0.0;\n  mediump float rotated = mod(a_angle + u_mapRotation, 256.0);\n  delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_opacity, 0.0);\n  vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;\n  v_size = abs(offset);\n#ifdef SDF\n  offset = (120.0 / 86.0) * offset;\n#endif\n#ifdef DD\n  mediump float icon_size = a_size * u_size;\n#else\n  mediump float icon_size = u_size;\n#endif\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(icon_size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_tex = a_tex.xy / u_mosaicSize;\n  v_opacity *= v_color.w;\n}"
        },
        line: {
          "line.frag": "varying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nvarying mediump float v_lineHalfWidth;\nvarying lowp vec4 v_color;\nvarying mediump float v_blur;\n#ifdef PATTERN\nuniform mediump vec2 u_pattern_tl;\nuniform mediump vec2 u_pattern_br;\nuniform mediump vec2 u_spriteSize;\nuniform sampler2D u_texture;\nconst mediump float tileCoordRatio = 8.0;\n#else\nvarying mediump vec2 v_dasharray;\n#endif\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  mediump float fragDist = length(v_normal) * v_lineHalfWidth;\n  lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);\n#ifdef PATTERN\n  mediump float relativeTexX = mod((v_accumulatedDistance + v_normal.x * v_lineHalfWidth * tileCoordRatio) / u_spriteSize.x, 1.0);\n  mediump float relativeTexY = 0.5 + (v_normal.y * v_lineHalfWidth / u_spriteSize.y);\n  mediump vec2 texCoord = mix(u_pattern_tl, u_pattern_br, vec2(relativeTexX, relativeTexY));\n  lowp vec4 color = texture2D(u_texture, texCoord);\n  gl_FragColor = alpha * v_color[3] * color;\n#else\n  lowp float dashPos =  mod(v_accumulatedDistance, v_dasharray.x + v_dasharray.y);\n  lowp float dashAlpha = clamp(min(dashPos, v_dasharray.x - dashPos) + 0.5, 0.0, 1.0);\n  dashAlpha = max(sign(-v_dasharray.y), dashAlpha);\n  alpha *= dashAlpha;\n  gl_FragColor = alpha * v_color;\n#endif\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "line.vert": "attribute vec2 a_pos;\nattribute vec4 a_offsetAndNormal;\nattribute vec2 a_accumulatedDistance;\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_lineTranslation;\nuniform mediump float u_blur;\nuniform mediump float u_antialiasing;\nuniform mediump float u_depth;\nvarying mediump vec2 v_normal;\nvarying highp float v_accumulatedDistance;\nconst float scale = 1.0 / 31.0;\n#ifdef DD\nattribute vec4 a_color;\nattribute mediump float a_width;\n#endif\nuniform lowp vec4 u_color;\nuniform mediump float u_width;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nvarying lowp vec4 v_color;\nvarying mediump float v_lineHalfWidth;\nvarying mediump float v_blur;\n#ifndef PATTERN\nuniform mediump vec2 u_dasharray;\nvarying mediump vec2 v_dasharray;\n#endif\nvoid main()\n{\n  v_normal = a_offsetAndNormal.zw * scale;\n#ifdef DD\n  v_lineHalfWidth = a_width * u_width;\n#else\n  v_lineHalfWidth = u_width;\n#endif\n  v_lineHalfWidth += u_antialiasing;\n  v_lineHalfWidth *= 0.5;\n#ifndef PATTERN\n#ifdef DD\n  v_dasharray = u_dasharray * a_width;\n#else\n  v_dasharray = u_dasharray * u_width;\n#endif\n#endif\n  mediump vec2 dist = v_lineHalfWidth * scale * a_offsetAndNormal.xy;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) +  u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n  v_accumulatedDistance = a_accumulatedDistance.x;\n  v_blur = u_blur + u_antialiasing;\n  #ifdef DD\n    v_color = a_color * u_color;\n  #else\n    v_color = u_color;\n  #endif\n  #ifdef ID\n    v_id = u_id / 255.0;\n  #endif\n}"
        },
        outline: {
          "outline.frag": "varying lowp vec4 v_color;\nvarying mediump vec2 v_normal;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = abs(v_normal.y);\n  lowp float alpha = smoothstep(1.0, 0.0, dist);\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "outline.vert": "attribute vec2 a_pos;\nattribute vec2 a_offset;\nattribute vec2 a_xnormal;\n#ifdef DD\nattribute vec4 a_color;\n#endif\nuniform lowp vec4 u_color;\nvarying lowp vec4 v_color;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform mediump vec2 u_fillTranslation;\nuniform mediump float u_depth;\nuniform mediump float u_outline_width;\nvarying lowp vec2 v_normal;\nconst float scale = 1.0 / 15.0;\nvoid main()\n{\n#ifdef DD\n  v_color = a_color * u_color;\n#else\n  v_color = u_color;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_normal = a_xnormal;\n  mediump vec2 dist = u_outline_width * scale * a_offset;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth, 1.0);\n}"
        },
        text: {
          "text.frag": "uniform lowp sampler2D u_texture;\nuniform mediump float u_edgeDistance;\nvarying lowp vec2 v_tex;\nvarying lowp float v_opacity;\nvarying lowp vec4 v_color;\nvarying mediump float v_edgeWidth;\nvarying mediump float v_edgeDistance;\n#ifdef ID\nvarying mediump vec4 v_id;\n#endif\nvoid main()\n{\n  lowp float dist = texture2D(u_texture, v_tex).a;\n  mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist) * v_opacity;\n  gl_FragColor = alpha * v_color;\n#ifdef ID\n  if (gl_FragColor.a < 1.0 / 255.0) {\n    discard;\n  }\n  gl_FragColor = v_id;\n#endif\n}",
          "text.vert": "attribute vec2 a_pos;\nattribute vec2 a_vertexOffset;\nattribute vec4 a_texAngleRange;\nattribute vec4 a_levelInfo;\nattribute float a_opacityInfo;\nuniform lowp vec4 u_color;\n#ifdef DD\nattribute vec4 a_color;\n#endif\nvarying lowp vec4 v_color;\nuniform mediump float u_size;\n#ifdef DD\nattribute mediump float a_size;\n#endif\nvarying mediump float v_size;\n#ifdef ID\nuniform mediump vec4 u_id;\nvarying mediump vec4 v_id;\n#endif\nuniform highp mat3 u_dvsMat3;\nuniform highp mat3 u_displayMat3;\nuniform highp mat3 u_displayViewMat3;\nuniform mediump vec2 u_textTranslation;\nuniform vec2 u_mosaicSize;\nuniform mediump float u_depth;\nuniform mediump float u_mapRotation;\nuniform mediump float u_level;\nuniform lowp float u_keepUpright;\nuniform mediump float u_opacity;\nuniform mediump float u_fadeDuration;\nvarying lowp vec2 v_tex;\nvarying lowp float v_opacity;\nconst float offsetPrecision = 1.0 / 8.0;\nconst mediump float edgePos = 0.75;\nuniform mediump float u_edgeDistance;\nuniform mediump float u_edgeBlur;\nuniform mediump float u_antialiasingWidth;\nvarying mediump float v_edgeDistance;\nvarying mediump float v_edgeWidth;\nuniform lowp float u_halo;\nconst float sdfFontScale = 1.0 / 24.0;\nuniform highp float u_time;\nvoid main()\n{\n  float modded = mod(a_opacityInfo, 128.0);\n  float targetOpacity = (a_opacityInfo - modded) / 128.0;\n  float startOpacity = modded / 127.0;\n  float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);\n  v_opacity = u_opacity * interpolatedOpacity;\n  mediump float a_angle       = a_levelInfo[1];\n  mediump float a_minLevel    = a_levelInfo[2];\n  mediump float a_maxLevel    = a_levelInfo[3];\n  mediump vec2 a_tex           = a_texAngleRange.xy;\n  mediump float a_visMinAngle    = a_texAngleRange.z;\n  mediump float a_visMaxAngle    = a_texAngleRange.w;\n  mediump float delta_z = 0.0;\n  mediump float angle = mod(a_angle + u_mapRotation, 256.0);\n  if (a_visMinAngle < a_visMaxAngle)\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));\n  }\n  else\n  {\n    delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));\n  }\n  delta_z += 1.0 - step(a_minLevel, u_level);\n  delta_z += step(a_maxLevel, u_level);\n  delta_z += step(v_opacity, 0.0);\n  v_tex = a_tex.xy / u_mosaicSize;\n#ifdef DD\n  if (u_halo > 0.5)\n  {\n    v_color = u_color;\n  }\n  else\n  {\n    v_color = a_color * u_color;\n  }\n#else\n  v_color = u_color;\n#endif\n#ifdef DD\n  v_size = a_size * u_size;\n#else\n  v_size = u_size;\n#endif\n#ifdef ID\n  v_id = u_id / 255.0;\n#endif\n  v_edgeDistance = edgePos - u_edgeDistance / v_size;\n  v_edgeWidth = (u_antialiasingWidth + u_edgeBlur) / v_size;\n  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * v_size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);\n  gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);\n}"
        },
        util: {
          "encoding.glsl": "const vec4 rgba2float_factors = vec4(\n    255.0 / (256.0),\n    255.0 / (256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0),\n    255.0 / (256.0 * 256.0 * 256.0 * 256.0)\n  );\nfloat rgba2float(vec4 rgba) {\n  return dot(rgba, rgba2float_factors);\n}"
        }
      };
      /***/
    },

    /***/
    "XvKw":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec4f32.js ***!
      \*****************************************************/

    /*! exports provided: O, U, Z, a, b, c, d, e, f, g, h, i, j, o, u, v, z */

    /***/
    function XvKw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "O", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "U", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Z", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return e;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n() {
        return new Float32Array(4);
      }

      function r(n) {
        var r = new Float32Array(4);
        return r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3], r;
      }

      function t(n, r, t, a) {
        var e = new Float32Array(4);
        return e[0] = n, e[1] = r, e[2] = t, e[3] = a, e;
      }

      function a(n, r) {
        return new Float32Array(n, r, 4);
      }

      function e() {
        return n();
      }

      function u() {
        return t(1, 1, 1, 1);
      }

      function o() {
        return t(1, 0, 0, 0);
      }

      function s() {
        return t(0, 1, 0, 0);
      }

      function c() {
        return t(0, 0, 1, 0);
      }

      function i() {
        return t(0, 0, 0, 1);
      }

      var f = e(),
          l = u(),
          _ = o(),
          w = s(),
          N = c(),
          U = i();

      var y = Object.freeze({
        __proto__: null,
        create: n,
        clone: r,
        fromValues: t,
        createView: a,
        zeros: e,
        ones: u,
        unitX: o,
        unitY: s,
        unitZ: c,
        unitW: i,
        ZEROS: f,
        ONES: l,
        UNIT_X: _,
        UNIT_Y: w,
        UNIT_Z: N,
        UNIT_W: U
      });
      /***/
    },

    /***/
    "aET7":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/raster/BrushRasterBitmap.js ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function aET7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../webgl/rasterUtils.js */
      "vrr1");
      /* harmony import */


      var _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../VertexStream.js */
      "gjrC");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK6) {
        _inherits(_class9, _WGLBrush_js__WEBPACK6);

        var _super10 = _createSuper(_class9);

        function _class9() {
          var _this9;

          _classCallCheck(this, _class9);

          _this9 = _super10.apply(this, arguments), _this9._desc = {
            lut: {
              vsPath: "raster/lut",
              fsPath: "raster/lut",
              attributes: {
                a_position: 0,
                a_texcoord: 1
              }
            },
            stretch: {
              vsPath: "raster/stretch",
              fsPath: "raster/stretch",
              attributes: {
                a_position: 0,
                a_texcoord: 1
              }
            },
            hillshade: {
              vsPath: "raster/hillshade",
              fsPath: "raster/hillshade",
              attributes: {
                a_position: 0,
                a_texcoord: 1
              }
            }
          }, _this9._rendererUniformInfos = new Map();
          return _this9;
        }

        _createClass(_class9, [{
          key: "dispose",
          value: function dispose() {
            this._quad && this._quad.dispose();
          }
        }, {
          key: "prepareState",
          value: function prepareState(_ref7, e) {
            var t = _ref7.context;
            t.setBlendingEnabled(!0), t.setBlendFunctionSeparate(1, 771, 1, 771), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!0), t.setStencilFunction(514, e.stencilRef, 255);
          }
        }, {
          key: "draw",
          value: function draw(t, e) {
            var r;
            if (!e.source) return;
            if (e.suspended) return;
            t.timeline.begin(this.name);
            var s = !(null != (r = t.context.capabilities.textureFloat) && r.textureFloatLinear);
            e.updateTexture(t);
            var a = this.getShaderVariations(e, s),
                i = t.painter.materialManager.getProgram(t, this._desc[e.symbolizerParameters.type], a);
            this.drawWithProgram(t.context, i, e), t.timeline.end(this.name);
          }
        }, {
          key: "drawWithProgram",
          value: function drawWithProgram(o, c, l) {
            var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
            var u = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0, 0];
            var p = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
            this._quad || (this._quad = new _VertexStream_js__WEBPACK_IMPORTED_MODULE_1__["default"](o, [0, 0, 1, 0, 0, 1, 1, 1]));
            var m = l.symbolizerParameters,
                f = l.transformGrid,
                g = l.width,
                _ = l.height,
                b = l.opacity,
                x = m.type;
            o.bindProgram(c);

            var P = this.getShaderVariations(l),
                S = this.getUniformInfos(x, o, c, P),
                _l$getTextures = l.getTextures(),
                y = _l$getTextures.names,
                w = _l$getTextures.textures;

            Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["setTextures"])(o, c, y, w);
            var U = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getBasicGridUniforms"])(d, u),
                v = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getCommonUniforms"])(f, [g, _], [l.source.width, l.source.height], b, p);

            if (Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["setUniforms"])(c, S, _objectSpread(_objectSpread({
              u_coordScale: l.coordScale,
              u_dvsMat3: l.transforms.dvs
            }, U), v)), m.colormap) {
              var t = m.colormap,
                  e = m.colormapOffset,
                  a = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getColormapUniforms"])(t, e);
              Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["setUniforms"])(c, S, a);
            }

            if ("stretch" === m.type) {
              var _t9 = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getStretchUniforms"])(m);

              Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["setUniforms"])(c, S, _t9);
            } else if ("hillshade" === m.type) {
              var _t10 = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getShadedReliefUniforms"])(m);

              Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["setUniforms"])(c, S, _t10);
            }

            this._quad.draw();
          }
        }, {
          key: "getUniformInfos",
          value: function getUniformInfos(t, e, r, s) {
            var a = s.length > 0 ? t + "-" + s.join("-") : t;
            if (this._rendererUniformInfos.has(a)) return this._rendererUniformInfos.get(a);
            var i = Object(_webgl_rasterUtils_js__WEBPACK_IMPORTED_MODULE_0__["getUniformLocationInfos"])(e, r);
            return this._rendererUniformInfos.set(a, i), i;
          }
        }, {
          key: "getShaderVariations",
          value: function getShaderVariations(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
            var r = [];
            return "cubic" === t.interpolation ? r.push("bicubic") : e && "bilinear" === t.interpolation && r.push("bilinear"), t.isRendereredSource ? r.push("noop") : t.symbolizerParameters.colormap && r.push("applyColormap"), t.transformGrid && r.push("applyProjection"), r;
          }
        }]);

        return _class9;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "b3VY":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushInfo.js ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function b3VY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /* harmony import */


      var _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../shaders/BackgroundPrograms.js */
      "IcFU");
      /* harmony import */


      var _shaders_TileInfoPrograms_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../shaders/TileInfoPrograms.js */
      "EVXj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK7) {
        _inherits(_class10, _WGLBrush_js__WEBPACK7);

        var _super11 = _createSuper(_class10);

        function _class10() {
          var _this10;

          _classCallCheck(this, _class10);

          _this10 = _super11.apply(this, arguments), _this10._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_8__["f"])(1, 0, 0, 1);
          return _this10;
        }

        _createClass(_class10, [{
          key: "dispose",
          value: function dispose() {
            this._outlineProgram && (this._outlineProgram.dispose(), this._outlineProgram = null), this._tileInfoProgram && (this._tileInfoProgram.dispose(), this._tileInfoProgram = null), this._outlineVertexArrayObject && (this._outlineVertexArrayObject.dispose(), this._outlineVertexArrayObject = null), this._tileInfoVertexArrayObject && (this._tileInfoVertexArrayObject.dispose(), this._tileInfoVertexArrayObject = null), this._canvas = null;
          }
        }, {
          key: "prepareState",
          value: function prepareState(_ref8) {
            var t = _ref8.context;
            t.setBlendingEnabled(!0), t.setBlendFunctionSeparate(1, 771, 1, 771), t.setColorMask(!0, !0, !0, !0), t.setStencilWriteMask(0), t.setStencilTestEnabled(!1);
          }
        }, {
          key: "draw",
          value: function draw(t, e) {
            var r = t.context;
            if (!e.isReady) return;
            this._loadWGLResources(r), r.bindVAO(this._outlineVertexArrayObject), r.bindProgram(this._outlineProgram), this._outlineProgram.setUniformMatrix3fv("u_dvsMat3", e.transforms.dvs), this._outlineProgram.setUniform2f("u_coord_range", e.coordRange[0], e.coordRange[1]), this._outlineProgram.setUniform1f("u_depth", 0), this._outlineProgram.setUniform4fv("u_color", this._color), r.drawArrays(3, 0, 4), r.bindVAO();

            var i = this._getTexture(r, e);

            i && (r.bindVAO(this._tileInfoVertexArrayObject), r.bindProgram(this._tileInfoProgram), r.bindTexture(i, 0), this._tileInfoProgram.setUniformMatrix3fv("u_dvsMat3", e.transforms.dvs), this._tileInfoProgram.setUniform1f("u_depth", 0), this._tileInfoProgram.setUniform2f("u_coord_ratio", e.coordRange[0] / e.size[0], e.coordRange[1] / e.size[1]), this._tileInfoProgram.setUniform2f("u_delta", 8, 8), this._tileInfoProgram.setUniform2f("u_dimensions", i.descriptor.width, i.descriptor.height), r.drawArrays(5, 0, 4), r.bindVAO());
          }
        }, {
          key: "_loadWGLResources",
          value: function _loadWGLResources(e) {
            if (this._outlineProgram && this._tileInfoProgram) return;

            var o = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(e, _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__["background"]),
                s = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_6__["createProgram"])(e, _shaders_TileInfoPrograms_js__WEBPACK_IMPORTED_MODULE_11__["tileInfo"]),
                l = {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5120,
                offset: 0,
                stride: 2,
                normalized: !1,
                divisor: 0
              }]
            },
                u = new Int8Array([0, 0, 1, 0, 1, 1, 0, 1]),
                m = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].createVertex(e, 35044, u),
                c = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](e, _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_10__["background"].attributes, l, {
              geometry: m
            }),
                f = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                d = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_2__["default"].createVertex(e, 35044, f),
                g = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](e, _shaders_TileInfoPrograms_js__WEBPACK_IMPORTED_MODULE_11__["tileInfo"].attributes, l, {
              geometry: d
            });

            this._outlineProgram = o, this._tileInfoProgram = s, this._outlineVertexArrayObject = c, this._tileInfoVertexArrayObject = g;
          }
        }, {
          key: "_getTexture",
          value: function _getTexture(t, r) {
            if (r.texture && r.triangleCountReportedInDebug === r.triangleCount) return r.texture;
            r.triangleCountReportedInDebug = r.triangleCount, this._canvas || (this._canvas = document.createElement("canvas"), this._canvas.setAttribute("id", "canvas2d"), this._canvas.setAttribute("width", "300"), this._canvas.setAttribute("height", "32"), this._canvas.setAttribute("style", "display:none"));
            var i = r.triangleCount;
            var o = r.key.id;
            r.triangleCount > 0 && (o += ", ".concat(i));
            var s = this._canvas,
                n = s.getContext("2d");
            return n.font = "24px sans-serif", n.textAlign = "left", n.textBaseline = "top", n.clearRect(0, 0, 300, 32), i > 1e5 ? (n.fillStyle = "red", n.fillRect(0, 0, 300, 32), n.fillStyle = "black") : (n.clearRect(0, 0, 300, 32), n.fillStyle = "blue"), n.fillText(o, 0, 0), r.texture = new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_3__["default"](t, {
              target: 3553,
              pixelFormat: 6408,
              dataType: 5121,
              samplingMode: 9728,
              wrapMode: 33071
            }, s), r.texture;
          }
        }]);

        return _class10;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
      /***/

    },

    /***/
    "bGT/":
    /*!******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/BrushClip.js ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function bGT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shaders/BackgroundPrograms.js */
      "IcFU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLBrush_js__WEBPACK8) {
        _inherits(_class11, _WGLBrush_js__WEBPACK8);

        var _super12 = _createSuper(_class11);

        function _class11() {
          var _this11;

          _classCallCheck(this, _class11);

          _this11 = _super12.apply(this, arguments), _this11._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_1__["f"])(0, 1, 0, 1);
          return _this11;
        }

        _createClass(_class11, [{
          key: "dispose",
          value: function dispose() {
            this._program && this._program.dispose();
          }
        }, {
          key: "prepareState",
          value: function prepareState(_ref9) {
            var t = _ref9.context;
            t.setStencilTestEnabled(!0), t.setBlendingEnabled(!1), t.setFaceCullingEnabled(!1), t.setColorMask(!1, !1, !1, !1), t.setStencilOp(7680, 7680, 7681), t.setStencilWriteMask(255), t.setStencilFunction(519, 0, 255);
          }
        }, {
          key: "draw",
          value: function draw(r, s) {
            var i = r.context,
                a = r.state;
            this._program || (this._program = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_0__["createProgram"])(i, _shaders_BackgroundPrograms_js__WEBPACK_IMPORTED_MODULE_4__["background"]));
            var n = this._program,
                m = Object(_Utils_js__WEBPACK_IMPORTED_MODULE_3__["createProgramDescriptor"])("clip", {
              geometry: [{
                location: 0,
                name: "a_pos",
                count: 2,
                type: 5122
              }]
            }),
                c = s.getVAO(i, a, m.attributes, m.bufferLayouts);
            i.bindProgram(this._program), n.setUniform2fv("u_coord_range", [1, 1]), n.setUniform4fv("u_color", this._color), n.setUniformMatrix3fv("u_dvsMat3", a.displayMat3), i.bindVAO(c), i.drawElements(4, c.indexBuffer.size, 5125, 0), i.bindVAO();
          }
        }]);

        return _class11;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
      /***/

    },

    /***/
    "cRHi":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLBackground.js ***!
      \******************************************************************************************/

    /*! exports provided: WGLBrushVTLBackground */

    /***/
    function cRHi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLBrushVTLBackground", function () {
        return f;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../webgl/programUtils.js */
      "1F90");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /* harmony import */


      var _vectorTiles_shaders_Programs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../vectorTiles/shaders/Programs.js */
      "6ldq");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = /*#__PURE__*/function (_WGLBrush_js__WEBPACK9) {
        _inherits(f, _WGLBrush_js__WEBPACK9);

        var _super13 = _createSuper(f);

        function f() {
          var _this12;

          _classCallCheck(this, f);

          _this12 = _super13.apply(this, arguments), _this12._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_10__["f"])(1, 0, 0, 1), _this12._patternMatrix = Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this12._programOptions = {
            id: !1,
            pattern: !1
          };
          return _this12;
        }

        _createClass(f, [{
          key: "dispose",
          value: function dispose() {
            this._program && (this._program.dispose(), this._program = null), this._vao && (this._vao.dispose(), this._vao = null);
          }
        }, {
          key: "drawMany",
          value: function drawMany(o, e) {
            var s = o.context,
                i = o.styleLayerUID;

            this._loadWGLResources(s);

            var a = o.displayLevel,
                c = o.styleLayer,
                p = o.painter.getVectorTileProgramCache(),
                _f3 = c.getPaintValue("background-color", a),
                l = c.getPaintValue("background-opacity", a),
                _ = c.getPaintValue("background-pattern", a),
                u = void 0 !== _,
                h = _f3[3] * l,
                d = 1 | window.devicePixelRatio,
                g = o.spriteMosaic;

            var b;
            var v = d > _definitions_js__WEBPACK_IMPORTED_MODULE_2__["VTL_HIGH_RES_CUTOFF"] ? 2 : 1,
                j = o.drawPhase === _enums_js__WEBPACK_IMPORTED_MODULE_12__["WGLDrawPhase"].HITTEST,
                x = (j ? 1 : 0) << 1 | (u ? 1 : 0),
                y = this._programOptions;
            y.id = j, y.pattern = u;
            var w = p.getProgram(0, x, y);

            if (s.bindVAO(this._vao), s.bindProgram(w), u) {
              if (b = g.getMosaicItemPosition(_, !0), !b) return;
              w.setUniform1f("u_opacity", l), w.setUniform2f("u_pattern_tl", b.tl[0], b.tl[1]), w.setUniform2f("u_pattern_br", b.br[0], b.br[1]), w.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_2__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]), g.bind(s, 9729, b.page, _definitions_js__WEBPACK_IMPORTED_MODULE_2__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]);
            } else this._color[0] = h * _f3[0], this._color[1] = h * _f3[1], this._color[2] = h * _f3[2], this._color[3] = h, w.setUniform4fv("u_color", this._color);

            if (w.setUniform1f("u_depth", c.z || 0), j) {
              var t = Object(_number_js__WEBPACK_IMPORTED_MODULE_11__["u32to4Xu8"])(i + 1);
              w.setUniform4fv("u_id", t);
            }

            var _iterator8 = _createForOfIteratorHelper(e),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _t11 = _step8.value;

                if (w.setUniform1f("u_coord_range", _t11.coordRange[0]), w.setUniformMatrix3fv("u_dvsMat3", _t11.transforms.dvs), u) {
                  var r = Math.max(Math.pow(2, Math.round(a) - _t11.key.level), 1),
                      _o7 = v * _t11.size[0] * r,
                      _e10 = _o7 / b.size[0],
                      _s2 = _o7 / b.size[1];

                  this._patternMatrix[0] = _e10, this._patternMatrix[4] = _s2, w.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
                }

                s.setStencilFunction(514, _t11.stencilRef, 255), s.drawArrays(5, 0, 4);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }, {
          key: "_loadWGLResources",
          value: function _loadWGLResources(t) {
            if (this._program && this._vao) return;
            var r = Object(_webgl_programUtils_js__WEBPACK_IMPORTED_MODULE_8__["createProgram"])(t, _vectorTiles_shaders_Programs_js__WEBPACK_IMPORTED_MODULE_14__["background"]);
            if (!r) return;

            var o = new Int8Array([0, 0, 1, 0, 0, 1, 1, 1]),
                a = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_5__["default"].createVertex(t, 35044, o),
                n = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_6__["default"](t, _vectorTiles_shaders_Programs_js__WEBPACK_IMPORTED_MODULE_14__["background"].attributes, {
              geometry: [{
                name: "a_pos",
                count: 2,
                type: 5120,
                offset: 0,
                stride: 2,
                normalized: !1,
                divisor: 0
              }]
            }, {
              geometry: a
            });

            this._program = r, this._vao = n;
          }
        }]);

        return f;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
      /***/

    },

    /***/
    "eCaw":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrushText.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function eCaw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./WGLGeometryBrush.js */
      "Cx4o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLGeometryBrush_js_4) {
        _inherits(_class12, _WGLGeometryBrush_js_4);

        var _super14 = _createSuper(_class12);

        function _class12() {
          _classCallCheck(this, _class12);

          return _super14.apply(this, arguments);
        }

        _createClass(_class12, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "getGeometryType",
          value: function getGeometryType() {
            return _enums_js__WEBPACK_IMPORTED_MODULE_0__["WGLGeometryType"].TEXT;
          }
        }, {
          key: "drawGeometry",
          value: function drawGeometry(e, o, i, r, n) {
            var s = e.context,
                l = e.painter,
                v = e.rendererInfo,
                m = e.state,
                u = i.indexCount,
                f = i.indexFrom,
                p = i.materialKey,
                c = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_1__["TextMaterialKey"].load(p),
                _ref10 = function (e) {
              return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_2__["createProgramDescriptor"])(e.data, {
                geometry: [{
                  location: 0,
                  name: "a_pos",
                  count: 2,
                  type: 5122
                }, {
                  location: 1,
                  name: "a_id",
                  count: 4,
                  type: 5121
                }, {
                  location: 2,
                  name: "a_color",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 3,
                  name: "a_haloColor",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 4,
                  name: "a_texFontSize",
                  count: 4,
                  type: 5121
                }, {
                  location: 5,
                  name: "a_aux",
                  count: 4,
                  type: 5120
                }, {
                  location: 6,
                  name: "a_vertexOffset",
                  count: 2,
                  type: 5122
                }, {
                  location: 7,
                  name: "a_texCoords",
                  count: 2,
                  type: 5123
                }]
              });
            }(c),
                d = _ref10.bufferLayouts,
                y = _ref10.attributes,
                S = l.materialManager.getMaterialProgram(e, c, "materials/text", y, n),
                _ = this._getVAO(s, d, y, r);

            if (s.bindProgram(S), s.bindVAO(_), this._setSharedUniforms(S, e, o), l.textureManager.bindTextures(s, S, c), S.setUniformMatrix3fv("u_displayMat3", m.displayMat3), S.setUniformMatrix3fv("u_displayViewMat3", m.displayViewMat3), c.vvSizeMinMaxValue && S.setUniform4fv("u_vvSizeMinMaxValue", v.vvSizeMinMaxValue), c.vvSizeScaleStops && S.setUniform1f("u_vvSizeScaleStopsValue", v.vvSizeScaleStopsValue), c.vvSizeFieldStops) {
              var _e11 = v.getSizeVVFieldStops(o.key.level);

              S.setUniform1fv("u_vvSizeFieldStopsValues", _e11.values), S.setUniform1fv("u_vvSizeFieldStopsSizes", _e11.sizes);
            }

            c.vvSizeUnitValue && S.setUniform1f("u_vvSizeUnitValueWorldToPixelsRatio", v.vvSizeUnitValueToPixelsRatio), c.vvColor && (S.setUniform1fv("u_vvColorValues", v.vvColorValues), S.setUniform4fv("u_vvColors", v.vvColors)), c.vvOpacity && (S.setUniform1fv("u_vvOpacityValues", v.vvOpacityValues), S.setUniform1fv("u_vvOpacities", v.vvOpacities)), c.vvRotation && S.setUniform1f("u_vvRotationType", "geographic" === v.vvMaterialParameters.vvRotationType ? 0 : 1), S.setUniform1f("u_isHalo", 1), s.drawElements(4, u, 5125, Uint32Array.BYTES_PER_ELEMENT * f), S.setUniform1f("u_isHalo", 0), s.drawElements(4, u, 5125, Uint32Array.BYTES_PER_ELEMENT * f), s.bindVAO(null);
          }
        }]);

        return _class12;
      }(_WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      /***/

    },

    /***/
    "gjrC":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function gjrC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../webgl/VertexArrayObject.js */
      "D6bk");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class13(r, i) {
          _classCallCheck(this, _class13);

          this.rctx = r, this._vertexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"].createVertex(r, 35044, new Uint16Array(i)), this._vao = new _webgl_VertexArrayObject_js__WEBPACK_IMPORTED_MODULE_4__["default"](r, {
            a_position: 0
          }, {
            geometry: [{
              name: "a_position",
              count: 2,
              type: 5122,
              offset: 0,
              stride: 4,
              normalized: !1
            }]
          }, {
            geometry: this._vertexBuffer
          });
        }

        _createClass(_class13, [{
          key: "bind",
          value: function bind() {
            this._vao.bind();
          }
        }, {
          key: "unbind",
          value: function unbind() {
            this._vao.unbind();
          }
        }, {
          key: "dispose",
          value: function dispose() {
            this._vao.dispose(!1), this._vertexBuffer.dispose();
          }
        }, {
          key: "draw",
          value: function draw() {
            this.rctx.bindVAO(this._vao), this.rctx.drawArrays(5, 0, 4);
          }
        }]);

        return _class13;
      }();
      /***/

    },

    /***/
    "ip0X":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLCircle.js ***!
      \**************************************************************************************/

    /*! exports provided: WGLBrushVTLCircle */

    /***/
    function ip0X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLBrushVTLCircle", function () {
        return s;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var a = [1, 1, 1, 1];

      var s = /*#__PURE__*/function (_WGLBrush_js__WEBPACK10) {
        _inherits(s, _WGLBrush_js__WEBPACK10);

        var _super15 = _createSuper(s);

        function s() {
          var _this13;

          _classCallCheck(this, s);

          _this13 = _super15.apply(this, arguments), _this13._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), _this13._strokeColor = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_1__["c"])(), _this13._programOptions = {
            id: !1
          };
          return _this13;
        }

        _createClass(s, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "drawMany",
          value: function drawMany(r, i) {
            var _s3 = r.context,
                n = r.state,
                c = r.drawPhase,
                l = r.styleLayerUID,
                u = r.displayLevel,
                f = r.styleLayer,
                h = r.painter.getVectorTileProgramCache(),
                m = f.hasDataDrivenRadius ? 1 : f.getPaintValue("circle-radius", u),
                _ = f.hasDataDrivenColor ? a : f.getPaintValue("circle-color", u),
                d = f.hasDataDrivenOpacity ? 1 : f.getPaintValue("circle-opacity", u),
                p = f.hasDataDrivenStrokeWidth ? 1 : f.getPaintValue("circle-stroke-width", u),
                g = f.hasDataDrivenStrokeColor ? a : f.getPaintValue("circle-stroke-color", u),
                y = f.hasDataDrivenStrokeOpacity ? 1 : f.getPaintValue("circle-stroke-opacity", u),
                v = f.hasDataDrivenBlur ? 0 : f.getPaintValue("circle-blur", u);

            var D = d * _[3];
            this._color[0] = D * _[0], this._color[1] = D * _[1], this._color[2] = D * _[2], this._color[3] = D, D = y * g[3], this._strokeColor[0] = D * g[0], this._strokeColor[1] = D * g[1], this._strokeColor[2] = D * g[2], this._strokeColor[3] = D;
            var k = f.getPaintValue("circle-translate", u),
                P = f.getPaintValue("circle-translate-anchor", u),
                U = c === _enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLDrawPhase"].HITTEST,
                V = U ? 1 : 0,
                C = this._programOptions;
            C.id = U;
            var x = h.getProgram(5, V, C);

            if (_s3.bindProgram(x), x.setUniformMatrix3fv("u_displayMat3", 1 === P ? n.displayMat3 : n.displayViewMat3), x.setUniform2fv("u_circleTranslation", k), x.setUniform1f("u_depth", f.z), x.setUniform1f("u_radius", m), x.setUniform4fv("u_color", this._color), x.setUniform1f("u_blur", v), x.setUniform1f("u_stroke_width", p), x.setUniform4fv("u_stroke_color", this._strokeColor), x.setUniform1f("u_antialiasingWidth", 1.2), U) {
              var t = Object(_number_js__WEBPACK_IMPORTED_MODULE_2__["u32to4Xu8"])(l + 1);
              x.setUniform4fv("u_id", t);
            }

            var _iterator9 = _createForOfIteratorHelper(i),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _r12 = _step9.value;
                if (!_r12.layerData.has(l)) continue;

                var e = _r12.layerData.get(l);

                e.prepareForRendering(_s3, h);
                var o = e.circleVertexArrayObject;
                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(o) || (_s3.bindVAO(o), x.setUniformMatrix3fv("u_dvsMat3", _r12.transforms.dvs), _s3.setStencilFunction(514, _r12.stencilRef, 255), _s3.drawElements(4, e.circleIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * e.circleIndexStart), _r12.triangleCount += e.circleIndexCount / 3);
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }]);

        return s;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_4__["default"]);
      /***/

    },

    /***/
    "j/wV":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLGeometryBrushFill.js ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function jWV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/RandomLCG.js */
      "iA3P");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../materialKey/MaterialKey.js */
      "GMaR");
      /* harmony import */


      var _Utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../Utils.js */
      "yN2G");
      /* harmony import */


      var _WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./WGLGeometryBrush.js */
      "Cx4o");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_WGLGeometryBrush_js_5) {
        _inherits(_class14, _WGLGeometryBrush_js_5);

        var _super16 = _createSuper(_class14);

        function _class14() {
          var _this14;

          _classCallCheck(this, _class14);

          _this14 = _super16.apply(this, arguments), _this14._dotTextureSize = 0, _this14._dotTextures = null, _this14._dotSamplers = new Int32Array([_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_RENDERER_0"], _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TEXTURE_BINDING_RENDERER_1"]]);
          return _this14;
        }

        _createClass(_class14, [{
          key: "dispose",
          value: function dispose() {
            this._disposeTextures();
          }
        }, {
          key: "getGeometryType",
          value: function getGeometryType() {
            return _enums_js__WEBPACK_IMPORTED_MODULE_7__["WGLGeometryType"].FILL;
          }
        }, {
          key: "drawGeometry",
          value: function drawGeometry(e, t, o, r, s) {
            var l = e.context,
                d = e.painter,
                u = e.rendererInfo,
                m = e.requiredLevel,
                c = o.indexCount,
                _ = o.indexFrom,
                f = o.materialKey,
                p = _materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_8__["FillMaterialKey"].load(f),
                _ref11 = function (e) {
              return Object(_Utils_js__WEBPACK_IMPORTED_MODULE_9__["createProgramDescriptor"])(e.data, {
                geometry: [{
                  location: 0,
                  name: "a_pos",
                  count: 2,
                  type: 5122
                }, {
                  location: 1,
                  name: "a_id",
                  count: 4,
                  type: 5121
                }].concat(_toConsumableArray(e.dotDensity ? [] : [{
                  location: 2,
                  name: "a_color",
                  count: 4,
                  type: 5121,
                  normalized: !0
                }, {
                  location: 3,
                  name: "a_tlbr",
                  count: 4,
                  type: 5123
                }, {
                  location: 4,
                  name: "a_aux1",
                  count: 4,
                  type: 5121
                }, {
                  location: 5,
                  name: "a_aux2",
                  count: 2,
                  type: 5123
                }, {
                  location: 6,
                  name: "a_aux3",
                  count: 4,
                  type: 5121
                }]), _toConsumableArray(e.dotDensity ? [{
                  location: 2,
                  name: "a_inverseArea",
                  count: 1,
                  type: 5126
                }] : []))
              });
            }(p),
                x = _ref11.bufferLayouts,
                v = _ref11.attributes,
                h = d.materialManager.getMaterialProgram(e, p, "materials/fill", v, s),
                y = this._getVAO(l, x, v, r);

            if (l.bindProgram(h), l.bindVAO(y), this._setSharedUniforms(h, e, t), p.textureBinding) {
              d.textureManager.bindTextures(l, h, p);

              var _o8 = 1 / Math.pow(2, m - t.key.level) / e.pixelRatio;

              h.setUniform1f("u_zoomFactor", _o8);
            }

            if (p.vvColor && (h.setUniform1fv("u_vvColorValues", u.vvColorValues), h.setUniform4fv("u_vvColors", u.vvColors)), p.vvOpacity && (h.setUniform1fv("u_vvOpacityValues", u.vvOpacityValues), h.setUniform1fv("u_vvOpacities", u.vvOpacities)), p.dotDensity) {
              var _o9 = _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"] / u.ddDotSize,
                  _r13 = _o9 * window.devicePixelRatio * _o9 * window.devicePixelRatio,
                  _s4 = 1 / Math.pow(2, m - t.key.level),
                  a = 1 / _s4 * (1 / _s4),
                  n = u.ddDotScale ? e.state.scale / u.ddDotScale : 1;

              h.setUniform1f("u_tileZoomFactor", _s4), h.setUniform1f("u_tileDotsOverArea", _r13 / (_definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"] * window.devicePixelRatio * _definitions_js__WEBPACK_IMPORTED_MODULE_2__["TILE_SIZE"] * window.devicePixelRatio)), h.setUniformMatrix4fv("u_dotColors", u.ddColors), h.setUniform4fv("u_isActive", u.ddActiveDots), h.setUniform4fv("u_dotBackgroundColor", u.ddBackgroundColor), h.setUniform1f("u_dotValue", Math.max(1, u.ddDotValue * n * a)), this._bindDotDensityTextures(l, h, u, _o9);
            }

            l.drawElements(4, c, 5125, Uint32Array.BYTES_PER_ELEMENT * _), l.bindVAO(null);
          }
        }, {
          key: "_disposeTextures",
          value: function _disposeTextures() {
            if (this._dotTextures) {
              for (var e = 0; e < this._dotTextures.length; e++) {
                this._dotTextures[e].dispose();
              }

              this._dotTextures = null;
            }
          }
        }, {
          key: "_bindDotDensityTextures",
          value: function _bindDotDensityTextures(e, t, o, i) {
            var r = this._createDotDensityTextures(e, i, o.ddSeed);

            t.setUniform1iv("u_dotTextures", this._dotSamplers);

            for (var _t12 = 0; _t12 < r.length; _t12++) {
              e.bindTexture(r[_t12], this._dotSamplers[_t12]);
            }
          }
        }, {
          key: "_createDotDensityTextures",
          value: function _createDotDensityTextures(t, o, i) {
            if (this._dotTextureSize === o && this._seed === i || (this._disposeTextures(), this._dotTextureSize = o, this._seed = i), null === this._dotTextures) {
              var r = new _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_1__["default"](i);
              this._dotTextures = [this._allocDotDensityTexture(t, o, r), this._allocDotDensityTexture(t, o, r)];
            }

            return this._dotTextures;
          }
        }, {
          key: "_allocDotDensityTexture",
          value: function _allocDotDensityTexture(e, t, o) {
            var i = new Float32Array(t * t * 4);

            for (var _e12 = 0; _e12 < i.length; _e12++) {
              i[_e12] = o.getFloat();
            }

            return new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__["default"](e, {
              wrapMode: 10497,
              pixelFormat: 6408,
              dataType: 5126,
              samplingMode: 9728,
              width: t,
              height: t
            }, i);
          }
        }]);

        return _class14;
      }(_WGLGeometryBrush_js__WEBPACK_IMPORTED_MODULE_10__["default"]);
      /***/

    },

    /***/
    "k61e":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Mesh2D.js ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function k61e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/vec2f64.js */
      "AvGH");
      /* harmony import */


      var _core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/libs/earcut/earcut.js */
      "+yyC");
      /* harmony import */


      var _chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../chunks/vec2.js */
      "M0lq");
      /* harmony import */


      var _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../webgl/BufferObject.js */
      "fOQB");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./number.js */
      "0RS7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Mesh2D"),
          u = function u(e, t, r, o) {
        var n = 0;

        for (var _o10 = 1; _o10 < r; _o10++) {
          var _r14 = e[2 * (t + _o10 - 1)],
              s = e[2 * (t + _o10 - 1) + 1];
          n += (e[2 * (t + _o10)] - _r14) * (e[2 * (t + _o10) + 1] + s);
        }

        return o ? n > 0 : n < 0;
      },
          y = function y(_ref12, r) {
        var e = _ref12.coords,
            t = _ref12.lengths;
        var o = [];

        for (var n = 0, s = 0; n < t.length; s += t[n], n += 1) {
          var c = s,
              a = [];

          for (; n < t.length - 1 && u(e, s + t[n], t[n + 1], r); n += 1, s += t[n]) {
            a.push(s + t[n] - c);
          }

          var f = e.slice(2 * c, 2 * (s + t[n])),
              h = Object(_core_libs_earcut_earcut_js__WEBPACK_IMPORTED_MODULE_6__["earcut"])(f, a, 2);

          var _iterator10 = _createForOfIteratorHelper(h),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _e13 = _step10.value;
              o.push(_e13 + c);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }

        return o;
      };

      var x = /*#__PURE__*/function () {
        function x(e, t, r) {
          var o = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;

          _classCallCheck(this, x);

          this._cache = {}, this.vertices = e, this.indices = t, this.primitiveType = r, this.isMapSpace = o;
        }

        _createClass(x, [{
          key: "destroy",
          value: function destroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._cache.indexBuffer) && this._cache.indexBuffer.dispose();

            for (var t in this._cache.vertexBuffers) {
              Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._cache.vertexBuffers[t]) && this._cache.vertexBuffers[t].dispose();
            }
          }
        }, {
          key: "elementType",
          get: function get() {
            return function (e) {
              switch (e.BYTES_PER_ELEMENT) {
                case 1:
                  return 5121;

                case 2:
                  return 5123;

                case 4:
                  return 5125;

                default:
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Cannot get DataType of array");
              }
            }(this.indices);
          }
        }, {
          key: "getIndexBuffer",
          value: function getIndexBuffer(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35044;
            return this._cache.indexBuffer || (this._cache.indexBuffer = _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"].createIndex(e, t, this.indices)), this._cache.indexBuffer;
          }
        }, {
          key: "getVertexBuffers",
          value: function getVertexBuffers(e) {
            var _this15 = this;

            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 35044;
            return this._cache.vertexBuffers || (this._cache.vertexBuffers = Object.keys(this.vertices).reduce(function (r, o) {
              return _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, o, _webgl_BufferObject_js__WEBPACK_IMPORTED_MODULE_8__["default"].createVertex(e, t, _this15.vertices[o])));
            }, {})), this._cache.vertexBuffers;
          }
        }], [{
          key: "fromRect",
          value: function fromRect(_ref13) {
            var e = _ref13.x,
                t = _ref13.y,
                r = _ref13.width,
                o = _ref13.height;
            var n = e,
                s = t,
                c = n + r,
                i = s + o;
            return x.fromScreenExtent({
              xmin: n,
              ymin: s,
              xmax: c,
              ymax: i
            });
          }
        }, {
          key: "fromPath",
          value: function fromPath(e) {
            var t = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertFromNestedArray"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"](), e.path, !1, !1),
                r = t.coords,
                s = new Uint32Array(y(t, !0)),
                c = new Uint32Array(r.length / 2);

            for (var _e14 = 0; _e14 < c.length; _e14++) {
              c[_e14] = Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(Math.floor(r[2 * _e14]), Math.floor(r[2 * _e14 + 1]));
            }

            return new x({
              geometry: c
            }, s, 4);
          }
        }, {
          key: "fromGeometry",
          value: function fromGeometry(e, t) {
            var o = t.geometry.type;

            switch (o) {
              case "polygon":
                return x.fromPolygon(e, t.geometry);

              case "extent":
                return x.fromMapExtent(e, t.geometry);

              default:
                return m.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-bad-type", "Unable to create a mesh from type ".concat(o), t)), x.fromRect({
                  x: 0,
                  y: 0,
                  width: 1,
                  height: 1
                });
            }
          }
        }, {
          key: "fromPolygon",
          value: function fromPolygon(e, t) {
            var r = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertFromPolygon"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"](), t, !1, !1),
                n = r.coords,
                i = new Uint32Array(y(r, !1)),
                f = new Uint32Array(n.length / 2),
                m = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])(),
                u = Object(_chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_5__["a"])();

            for (var _t13 = 0; _t13 < f.length; _t13++) {
              Object(_chunks_vec2_js__WEBPACK_IMPORTED_MODULE_7__["s"])(m, n[2 * _t13], n[2 * _t13 + 1]), e.toScreen(u, m), f[_t13] = Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(Math.floor(u[0]), Math.floor(u[1]));
            }

            return new x({
              geometry: f
            }, i, 4, !0);
          }
        }, {
          key: "fromScreenExtent",
          value: function fromScreenExtent(_ref14) {
            var e = _ref14.xmin,
                t = _ref14.xmax,
                r = _ref14.ymin,
                o = _ref14.ymax;
            var n = {
              geometry: new Uint32Array([Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(e, r), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(t, r), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(e, o), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(e, o), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(t, r), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(t, o)])
            },
                s = new Uint32Array([0, 1, 2, 3, 4, 5]);
            return new x(n, s, 4);
          }
        }, {
          key: "fromMapExtent",
          value: function fromMapExtent(e, t) {
            var _e$toScreen = e.toScreen([0, 0], [t.xmin, t.ymin]),
                _e$toScreen2 = _slicedToArray(_e$toScreen, 2),
                r = _e$toScreen2[0],
                o = _e$toScreen2[1],
                _e$toScreen3 = e.toScreen([0, 0], [t.xmax, t.ymax]),
                _e$toScreen4 = _slicedToArray(_e$toScreen3, 2),
                n = _e$toScreen4[0],
                s = _e$toScreen4[1],
                c = {
              geometry: new Uint32Array([Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(r, o), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(n, o), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(r, s), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(r, s), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(n, o), Object(_number_js__WEBPACK_IMPORTED_MODULE_9__["i1616to32"])(n, s)])
            },
                i = new Uint32Array([0, 1, 2, 3, 4, 5]);

            return new x(c, i, 4);
          }
        }]);

        return x;
      }();
      /* harmony default export */


      __webpack_exports__["default"] = x;
      /***/
    },

    /***/
    "mgI5":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/WGLContainer.js ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function mgI5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _Container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Container.js */
      "AMBt");
      /* harmony import */


      var _brushes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../brushes.js */
      "Oxob");
      /* harmony import */


      var _ClippingInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ClippingInfo.js */
      "I/na");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function (_Container_js__WEBPAC) {
        _inherits(_class15, _Container_js__WEBPAC);

        var _super17 = _createSuper(_class15);

        function _class15() {
          var _this16;

          _classCallCheck(this, _class15);

          _this16 = _super17.apply(this, arguments), _this16.name = _this16.constructor.name;
          return _this16;
        }

        _createClass(_class15, [{
          key: "clips",
          set: function set(e) {
            this._clips = e, this.children.forEach(function (r) {
              return r.clips = e;
            }), this._updateClippingInfo();
          }
        }, {
          key: "doRender",
          value: function doRender(e) {
            var r = this.createRenderParams(e),
                t = r.painter,
                i = r.globalOpacity,
                n = r.profiler,
                o = r.drawPhase,
                a = o === _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].LABEL ? 1 : i * this.computedOpacity;
            n.recordContainerStart(this.name), t.beforeRenderLayer(r, this._clippingInfos ? 255 : 0, a), this.updateTransforms(e.state), this.renderChildren(r), t.compositeLayer(r, a), n.recordContainerEnd();
          }
        }, {
          key: "renderChildren",
          value: function renderChildren(r) {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(this._renderPasses) && (this._renderPasses = this.prepareRenderPasses(r.painter));

            var _iterator11 = _createForOfIteratorHelper(this.children),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var e = _step11.value;
                e.beforeRender(r);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            var _iterator12 = _createForOfIteratorHelper(this._renderPasses),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _e15 = _step12.value;

                try {
                  _e15.render(r);
                } catch (e) {}
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }

            var _iterator13 = _createForOfIteratorHelper(this.children),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _e16 = _step13.value;

                _e16.afterRender(r);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
        }, {
          key: "createRenderParams",
          value: function createRenderParams(e) {
            return e;
          }
        }, {
          key: "prepareRenderPasses",
          value: function prepareRenderPasses(e) {
            var _this17 = this;

            return [e.registerRenderPass({
              name: "clip",
              brushes: [_brushes_js__WEBPACK_IMPORTED_MODULE_4__["brushes"].clip],
              target: function target() {
                return _this17._clippingInfos;
              },
              drawPhase: _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].MAP | _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].LABEL | _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].LABEL_ALPHA | _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].DEBUG | _enums_js__WEBPACK_IMPORTED_MODULE_2__["WGLDrawPhase"].HIGHLIGHT
            })];
          }
        }, {
          key: "updateTransforms",
          value: function updateTransforms(e) {
            var _iterator14 = _createForOfIteratorHelper(this.children),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var r = _step14.value;
                r.setTransform(e);
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }
        }, {
          key: "onAttach",
          value: function onAttach() {
            _get(_getPrototypeOf(_class15.prototype), "onAttach", this).call(this), this._updateClippingInfo();
          }
        }, {
          key: "onDetach",
          value: function onDetach() {
            _get(_getPrototypeOf(_class15.prototype), "onDetach", this).call(this), this._updateClippingInfo();
          }
        }, {
          key: "_updateClippingInfo",
          value: function _updateClippingInfo() {
            var _this18 = this;

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(this._clippingInfos) && (this._clippingInfos.forEach(function (e) {
              return e.destroy();
            }), this._clippingInfos = null), !this.stage) return;
            var e = this._clips;
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(e) && e.length && (this._clippingInfos = e.items.map(function (e) {
              return _ClippingInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"].fromClipArea(_this18.stage, e);
            })), this.requestRender();
          }
        }]);

        return _class15;
      }(_Container_js__WEBPACK_IMPORTED_MODULE_3__["Container"]);
      /***/

    },

    /***/
    "vpBa":
    /*!*************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/shaders/sources/resolver.js ***!
      \*************************************************************************************/

    /*! exports provided: resolveIncludes */

    /***/
    function vpBa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "resolveIncludes", function () {
        return o;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../webgl/ShaderCompiler.js */
      "SfCL");
      /* harmony import */


      var _shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shaderRepository.js */
      "+0fo");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new _webgl_ShaderCompiler_js__WEBPACK_IMPORTED_MODULE_5__["default"](function (r) {
        var t = _shaderRepository_js__WEBPACK_IMPORTED_MODULE_6__["default"];
        return r.split("/").forEach(function (r) {
          t && (t = t[r]);
        }), t;
      });

      function o(r) {
        return t.resolveIncludes(r);
      }
      /***/

    },

    /***/
    "vrr1":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/webgl/rasterUtils.js ***!
      \**************************************************************/

    /*! exports provided: createColormapTexture, createFrameBuffer, createRasterTexture, createTransformTexture, getBasicGridUniforms, getColormapUniforms, getCommonUniforms, getShadedReliefUniforms, getStretchUniforms, getUniformLocationInfos, setTextures, setUniforms */

    /***/
    function vrr1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createColormapTexture", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createFrameBuffer", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createRasterTexture", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTransformTexture", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBasicGridUniforms", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getColormapUniforms", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCommonUniforms", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getShadedReliefUniforms", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStretchUniforms", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUniformLocationInfos", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setTextures", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setUniforms", function () {
        return c;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _Texture_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./Texture.js */
      "of9L");
      /* harmony import */


      var _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _RenderingContext_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./RenderingContext.js */
      "bfJE");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(t, n) {
        var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "nearest";
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !1;
        var r;
        var o = !(i && "u8" === n.pixelType),
            s = o ? 5126 : 5121,
            u = null == n.pixels || 0 === n.pixels.length ? null : o ? n.getAsRGBAFloat() : n.getAsRGBA(),
            f = null == (r = t.capabilities.textureFloat) ? void 0 : r.textureFloatLinear,
            l = {
          width: n.width,
          height: n.height,
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          samplingMode: !f || "bilinear" !== a && "cubic" !== a ? 9728 : 9729,
          dataType: s,
          wrapMode: 33071,
          flipped: !1
        };
        return new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, l, u);
      }

      function a(n, a, i, r) {
        var o = new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](n, {
          width: a,
          height: i,
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          samplingMode: 9728,
          dataType: r ? 5121 : 5126,
          wrapMode: 33071,
          flipped: !1
        });
        return new _FramebufferObject_js__WEBPACK_IMPORTED_MODULE_3__["default"](n, {
          colorTarget: 0,
          depthStencilTarget: 3,
          width: a,
          height: i
        }, o);
      }

      function i(t, n) {
        var a = 4 * n.size[0],
            i = n.size[1],
            r = {
          width: a,
          height: i,
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          dataType: 5126,
          samplingMode: 9728,
          wrapMode: 33071,
          flipped: !1
        },
            o = new Float32Array(a * i * 4);
        var s = 0;

        for (var e = 0; e < n.coefficients.length; e++) {
          o[s++] = n.coefficients[e], e % 3 == 2 && (o[s++] = 1);
        }

        return new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, r, o);
      }

      function r(t, n) {
        var a = {
          width: n.length / 4,
          height: 1,
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          dataType: 5121,
          samplingMode: 9728,
          wrapMode: 33071,
          flipped: !1
        };
        return new _Texture_js__WEBPACK_IMPORTED_MODULE_2__["default"](t, a, n);
      }

      function o(e, t, n) {
        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
        var i = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : !0;
        var r = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
        return {
          u_flipY: i,
          u_isFloatTexture: r,
          u_applyTransform: !!e,
          u_opacity: a,
          u_transformSpacing: e ? e.spacing : null,
          u_transformGridSize: e ? e.size : null,
          u_targetImageSize: t,
          u_srcImageSize: n
        };
      }

      function s(e, t) {
        return {
          u_colormapOffset: t || 0,
          u_colormapMaxIndex: e ? e.length / 4 - 1 : null
        };
      }

      function u(e, t) {
        return {
          u_scale: e,
          u_offset: t
        };
      }

      function f(e) {
        return {
          u_bandCount: e.bandCount,
          u_minOutput: e.outMin,
          u_maxOutput: e.outMax,
          u_minCutOff: e.minCutOff,
          u_maxCutOff: e.maxCutOff,
          u_factor: e.factor,
          u_useGamma: e.useGamma,
          u_gamma: e.gamma,
          u_gammaCorrection: e.gammaCorrection
        };
      }

      function l(e) {
        return {
          u_hillshadeType: e.hillshadeType,
          u_sinZcosAs: e.sinZcosAs,
          u_sinZsinAs: e.sinZsinAs,
          u_cosZs: e.cosZs,
          u_weights: e.weights,
          u_factor: e.factor,
          u_minValue: e.minValue,
          u_maxValue: e.maxValue
        };
      }

      function m(e, t) {
        var n = e.gl,
            a = t.glName,
            i = n.getProgramParameter(a, n.ACTIVE_UNIFORMS),
            r = new Map();
        var o;

        for (var _e17 = 0; _e17 < i; _e17++) {
          o = n.getActiveUniform(a, _e17), o && r.set(o.name, {
            location: n.getUniformLocation(a, o.name),
            info: o
          });
        }

        return r;
      }

      function c(e, t, n) {
        Object.keys(n).forEach(function (a) {
          var i = t.get(a) || t.get(a + "[0]");
          i && function (e, t, n, a) {
            if (null === a || null == n) return !1;
            var i = a.info;

            switch (i.type) {
              case 5126:
                i.size > 1 ? e.setUniform1fv(t, n) : e.setUniform1f(t, n);
                break;

              case 35664:
                e.setUniform2fv(t, n);
                break;

              case 35665:
                e.setUniform3fv(t, n);
                break;

              case 35666:
                e.setUniform4fv(t, n);
                break;

              case 35675:
                e.setUniformMatrix3fv(t, n);
                break;

              case 35676:
                e.setUniformMatrix4fv(t, n);
                break;

              case 5124:
                i.size > 1 ? e.setUniform1iv(t, n) : e.setUniform1i(t, n);
                break;

              case 35670:
                e.setUniform1i(t, n ? 1 : 0);
                break;

              case 35667:
              case 35671:
                e.setUniform2iv(t, n);
                break;

              case 35668:
              case 35672:
                e.setUniform3iv(t, n);
                break;

              case 35669:
              case 35673:
                e.setUniform4iv(t, n);
                break;

              default:
                return !1;
            }
          }(e, a, n[a], i);
        });
      }

      function p(e, t, n, a) {
        n.length === a.length && (a.some(function (e) {
          return null == e;
        }) || n.some(function (e) {
          return null == e;
        }) || n.forEach(function (n, i) {
          t.setUniform1i(n, i), e.bindTexture(a[i], i);
        }));
      }
      /***/

    },

    /***/
    "zcBC":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/brushes/WGLBrushVTLFill.js ***!
      \************************************************************************************/

    /*! exports provided: WGLBrushVTLFill */

    /***/
    function zcBC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLBrushVTLFill", function () {
        return f;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../definitions.js */
      "jIHu");
      /* harmony import */


      var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../chunks/mat3f32.js */
      "jHF5");
      /* harmony import */


      var _chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../chunks/vec4f32.js */
      "XvKw");
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../number.js */
      "0RS7");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../enums.js */
      "yE7X");
      /* harmony import */


      var _WGLBrush_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./WGLBrush.js */
      "8HmA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var l = [1, 1, 1, 1];

      var f = /*#__PURE__*/function (_WGLBrush_js__WEBPACK11) {
        _inherits(f, _WGLBrush_js__WEBPACK11);

        var _super18 = _createSuper(f);

        function f() {
          var _this19;

          _classCallCheck(this, f);

          _this19 = _super18.apply(this, arguments), _this19._color = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this19._outlineColor = Object(_chunks_vec4f32_js__WEBPACK_IMPORTED_MODULE_3__["c"])(), _this19._fillProgramOptions = {
            id: !1,
            dd: !1,
            pattern: !1
          }, _this19._outlineProgramOptions = {
            id: !1,
            dd: !1
          }, _this19._patternMatrix = Object(_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__["c"])();
          return _this19;
        }

        _createClass(f, [{
          key: "dispose",
          value: function dispose() {}
        }, {
          key: "drawMany",
          value: function drawMany(t, i) {
            var e = t.displayLevel,
                r = t.drawPhase,
                o = t.renderPass,
                s = t.styleLayerUID,
                _f4 = t.styleLayer,
                u = _f4.getPaintValue("fill-pattern", e),
                c = _f4.hasDataDrivenColor ? l : _f4.getPaintValue("fill-color", e),
                d = _f4.hasDataDrivenOpacity ? 1 : _f4.getPaintValue("fill-opacity", e),
                _ = d * c[3],
                h = void 0 !== u || _ < 1 || _f4.hasDataDrivenFill;

            if (h && "opaque" === o) return;
            this._color[0] = _ * c[0], this._color[1] = _ * c[1], this._color[2] = _ * c[2], this._color[3] = _;
            var m;
            r === _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLDrawPhase"].HITTEST && (m = Object(_number_js__WEBPACK_IMPORTED_MODULE_4__["u32to4Xu8"])(s + 1));

            var p = _f4.getPaintValue("fill-translate", e),
                g = _f4.getPaintValue("fill-translate-anchor", e);

            this._drawFill(t, s, _f4, i, p, g, u, h, m), this._drawOutline(t, s, _f4, i, p, g, u, m, d);
          }
        }, {
          key: "_drawFill",
          value: function _drawFill(r, o, a, s, l, _f5, u, c, d) {
            var _ = r.context,
                h = r.displayLevel,
                m = r.drawPhase,
                p = r.pixelRatio,
                g = r.renderPass,
                v = r.spriteMosaic,
                P = r.state;
            if (!c && "translucent" === g) return;
            var x = void 0 !== u,
                y = p > _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_HIGH_RES_CUTOFF"] ? 2 : 1,
                M = a.hasDataDrivenFill,
                C = r.painter.getVectorTileProgramCache();
            var U;
            var D = m === _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLDrawPhase"].HITTEST,
                T = (D ? 1 : 0) << 2 | (M ? 1 : 0) << 1 | (x ? 1 : 0),
                E = this._fillProgramOptions;
            E.id = D, E.dd = M, E.pattern = x;
            var V = C.getProgram(1, T, E);

            if (_.bindProgram(V), x) {
              if (U = v.getMosaicItemPosition(u, !0), !U) return void _.bindProgram();
              V.setUniform2f("u_pattern_tl", U.tl[0], U.tl[1]), V.setUniform2f("u_pattern_br", U.br[0], U.br[1]), V.setUniform1i("u_texture", _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]), v.bind(_, 9729, U.page, _definitions_js__WEBPACK_IMPORTED_MODULE_1__["VTL_TEXTURE_BINDING_UNIT_SPRITES"]);
            }

            V.setUniformMatrix3fv("u_displayMat3", 1 === _f5 ? P.displayMat3 : P.displayViewMat3), V.setUniform2fv("u_fillTranslation", l), V.setUniform1f("u_depth", a.z + 152587890625e-16), V.setUniform4fv("u_color", this._color), D && V.setUniform4fv("u_id", d);

            var _iterator15 = _createForOfIteratorHelper(s),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                var i = _step15.value;
                if (!i.layerData.has(o)) continue;
                var e = i.layerData.get(o);
                e.prepareForRendering(_, C);
                var _r15 = e.fillVertexArrayObject;

                if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_r15)) {
                  if (_.bindVAO(_r15), V.setUniformMatrix3fv("u_dvsMat3", i.transforms.dvs), x) {
                    var t = Math.max(Math.pow(2, Math.round(h) - i.key.level), 1),
                        _e18 = i.coordRange[0] / (y * i.size[0] * t),
                        _r16 = 1 / (U.size[0] * _e18),
                        _o11 = 1 / (U.size[1] * _e18);

                    this._patternMatrix[0] = _r16, this._patternMatrix[4] = _o11, V.setUniformMatrix3fv("u_pattern_matrix", this._patternMatrix);
                  }

                  _.setStencilFunction(514, i.stencilRef, 255), _.drawElements(4, e.fillIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * e.fillIndexStart), i.triangleCount += e.fillIndexCount / 3;
                }
              }
            } catch (err) {
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }
          }
        }, {
          key: "_drawOutline",
          value: function _drawOutline(i, e, r, o, a, s, _f6, u, c) {
            var d = i.context,
                _ = i.displayLevel,
                h = i.drawPhase,
                m = i.renderPass,
                p = i.pixelRatio,
                g = i.state;
            if ("opaque" === m) return;
            var v = void 0 !== _f6;
            if (!(r.getPaintValue("fill-antialias", _) && !v || r.hasDataDrivenOutlineColor)) return;
            var P = i.painter.getVectorTileProgramCache(),
                x = r.hasDataDrivenOutline;

            if (r.outlineUsesFillColor) {
              if (1 !== this._color[3]) return;
              this._outlineColor[0] = this._color[0], this._outlineColor[1] = this._color[1], this._outlineColor[2] = this._color[2], this._outlineColor[3] = this._color[3];
            } else {
              var t = r.hasDataDrivenOutlineColor ? l : r.getPaintValue("fill-outline-color", _),
                  _i9 = c * t[3];

              this._outlineColor[0] = _i9 * t[0], this._outlineColor[1] = _i9 * t[1], this._outlineColor[2] = _i9 * t[2], this._outlineColor[3] = _i9;
            }

            var y = .75 / p,
                M = h === _enums_js__WEBPACK_IMPORTED_MODULE_5__["WGLDrawPhase"].HITTEST,
                C = (M ? 1 : 0) << 1 | (x ? 1 : 0),
                U = this._outlineProgramOptions;
            U.id = M, U.dd = x;
            var D = P.getProgram(2, C, U);
            d.bindProgram(D), D.setUniformMatrix3fv("u_displayMat3", 1 === s ? g.displayMat3 : g.displayViewMat3), D.setUniform2fv("u_fillTranslation", a), D.setUniform1f("u_depth", r.z + 152587890625e-16), D.setUniform1f("u_outline_width", y), D.setUniform4fv("u_color", this._outlineColor), M && D.setUniform4fv("u_id", u);

            var _iterator16 = _createForOfIteratorHelper(o),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _i10 = _step16.value;
                if (!_i10.layerData.has(e)) continue;

                var _r17 = _i10.layerData.get(e);

                _r17.prepareForRendering(d, P);

                var _o12 = _r17.outlineVertexArrayObject;
                Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(_o12) || (d.bindVAO(_o12), D.setUniformMatrix3fv("u_dvsMat3", _i10.transforms.dvs), d.setStencilFunction(514, _i10.stencilRef, 255), d.drawElements(4, _r17.outlineIndexCount, 5125, Uint32Array.BYTES_PER_ELEMENT * _r17.outlineIndexStart), _i10.triangleCount += _r17.outlineIndexCount / 3);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        }]);

        return f;
      }(_WGLBrush_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~70af773e-es5.js.map