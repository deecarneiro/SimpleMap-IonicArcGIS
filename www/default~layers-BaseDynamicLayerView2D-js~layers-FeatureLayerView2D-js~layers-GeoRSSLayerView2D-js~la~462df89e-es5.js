(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e4) { throw _e4; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e5) { didErr = true; err = _e5; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~462df89e"], {
    /***/
    "0RS7":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/number.js ***!
      \*******************************************************************/

    /*! exports provided: i16, i1616to32, i32, i8, i8816to32, i8888to32, numTo32, toFloat32, toUint32, u16, u32, u32to4Xu8, u8 */

    /***/
    function RS7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i16", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i1616to32", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i32", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i8", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i8816to32", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i8888to32", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "numTo32", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toFloat32", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toUint32", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u16", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u32", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u32to4Xu8", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u8", function () {
        return f;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = new Float32Array(1),
          r = new Uint32Array(n.buffer);

      function t(n, r, t) {
        return Math.round(Math.max(Math.min(n, t), r));
      }

      function u(n) {
        return t(n, -128, 127);
      }

      function e(n) {
        return t(n, -32768, 32767);
      }

      function o(n) {
        return t(n, -2147483648, 2147483647);
      }

      function f(n) {
        return t(n, 0, 255);
      }

      function i(n) {
        return t(n, 0, 65535);
      }

      function c(n) {
        return t(n, 0, 4294967295);
      }

      function a(t) {
        return n[0] = t, r[0];
      }

      function h(t) {
        return r[0] = t, n[0];
      }

      function M(n) {
        return [255 & n, (65280 & n) >>> 8, (16711680 & n) >>> 16, (4278190080 & n) >>> 24];
      }

      function m(n, r) {
        return 65535 & n | r << 16;
      }

      function w(n, r, t, u) {
        return 255 & n | (255 & r) << 8 | (255 & t) << 16 | u << 24;
      }

      function x(n, r, t) {
        return 255 & n | (255 & r) << 8 | t << 16;
      }

      function y(n) {
        return 0 | n;
      }
      /***/

    },

    /***/
    "4SEz":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/SymbolProperties.js ***!
      \*****************************************************************************/

    /*! exports provided: TextProperties */

    /***/
    function SEz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextProperties", function () {
        return h;
      });
      /* harmony import */


      var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/ObjectPool.js */
      "7Nfj");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = /*#__PURE__*/function () {
        function h() {
          _classCallCheck(this, h);

          this.color = [0, 0, 0, 0], this.haloColor = [0, 0, 0, 0], this.haloSize = 0, this.size = 12, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
        }

        _createClass(h, [{
          key: "acquire",
          value: function acquire(o, _h, s, t, i, l, r, e, c) {
            this.color = o, this.haloColor = _h, this.haloSize = s, this.size = t, this.angle = i, this.offsetX = l, this.offsetY = r, this.hAnchor = e, this.vAnchor = c;
          }
        }, {
          key: "release",
          value: function release() {
            this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0, this.haloColor[0] = this.haloColor[1] = this.haloColor[2] = this.haloColor[3] = 0, this.haloSize = 0, this.size = 0, this.angle = 0, this.offsetX = 0, this.offsetY = 0, this.hAnchor = 0, this.vAnchor = 0;
          }
        }]);

        return h;
      }();

      h.pool = new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__["default"](h);
      /***/
    },

    /***/
    "X2wA":
    /*!**************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/_commonjsHelpers.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, g */

    /***/
    function X2wA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

      function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e["default"] : e;
      }

      function o(e, n, o) {
        return e(o = {
          path: n,
          exports: {},
          require: function require(e, n) {
            return r(null == n && o.path);
          }
        }, o.exports), o.exports;
      }

      function r() {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }
      /***/

    },

    /***/
    "jIHu":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/definitions.js ***!
      \************************************************************************/

    /*! exports provided: ANGLE_FACTOR_256, ATTRIBUTE_DATA_ANIMATION, ATTRIBUTE_DATA_DD0, ATTRIBUTE_DATA_DD1, ATTRIBUTE_DATA_FILTER_FLAGS, ATTRIBUTE_DATA_VV, ATTRIBUTE_STORE_TEXTURE_SIZE, AVERAGE_GLYPH_MOSAIC_ITEM, COLLISION_BOX_PADDING, COLLISION_BUCKET_SIZE, COLLISION_EARLY_REJECT_BUCKET_SIZE, COLLISION_MAX_ZOOM_DELTA, COLLISION_PLACEMENT_PADDING, COLLISION_TILE_BOX_SIZE, DEBUG_LABELS, DOT_DENSITY_MAX_FIELDS, EFFECT_FLAG_0, EXTRUDE_SCALE, FILTER_FLAG_0, GLYPH_SIZE, HEURISTIC_GLYPHS_PER_FEATURE, HEURISTIC_GLYPHS_PER_LINE, HIGHLIGHT_FLAG, HITTEST_SEARCH_SIZE, MAGIC_LABEL_LINE_HEIGHT, MAX_FILTERS, MAX_GPU_UPLOADS_PER_FRAME, NAN_MAGIC_NUMBER, PICTURE_FILL_COLOR, RASTER_TILE_SIZE, SPRITE_PADDING, TEXTURE_BINDING_ATTRIBUTE_DATA_0, TEXTURE_BINDING_ATTRIBUTE_DATA_1, TEXTURE_BINDING_ATTRIBUTE_DATA_2, TEXTURE_BINDING_ATTRIBUTE_DATA_3, TEXTURE_BINDING_BITMAP, TEXTURE_BINDING_GLYPH_ATLAS, TEXTURE_BINDING_HIGHLIGHT_0, TEXTURE_BINDING_HIGHLIGHT_1, TEXTURE_BINDING_RENDERER_0, TEXTURE_BINDING_RENDERER_1, TEXTURE_BINDING_SPRITE_ATLAS, TEXT_PLACEMENT_PADDING, THIN_LINE_THRESHOLD, TILE_SIZE, VTL_HIGH_RES_CUTOFF, VTL_TEXTURE_BINDING_UNIT_GLYPHS, VTL_TEXTURE_BINDING_UNIT_SPRITES, WEBGL_MAX_INNER_STOPS, WEBGL_MAX_STOPS */

    /***/
    function jIHu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ANGLE_FACTOR_256", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_ANIMATION", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD0", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_DD1", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_FILTER_FLAGS", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_DATA_VV", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ATTRIBUTE_STORE_TEXTURE_SIZE", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AVERAGE_GLYPH_MOSAIC_ITEM", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BOX_PADDING", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_BUCKET_SIZE", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_EARLY_REJECT_BUCKET_SIZE", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_MAX_ZOOM_DELTA", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_PLACEMENT_PADDING", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "COLLISION_TILE_BOX_SIZE", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEBUG_LABELS", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DOT_DENSITY_MAX_FIELDS", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EFFECT_FLAG_0", function () {
        return Q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EXTRUDE_SCALE", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FILTER_FLAG_0", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GLYPH_SIZE", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_FEATURE", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HEURISTIC_GLYPHS_PER_LINE", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HIGHLIGHT_FLAG", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HITTEST_SEARCH_SIZE", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAGIC_LABEL_LINE_HEIGHT", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_FILTERS", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MAX_GPU_UPLOADS_PER_FRAME", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NAN_MAGIC_NUMBER", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PICTURE_FILL_COLOR", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RASTER_TILE_SIZE", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SPRITE_PADDING", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_0", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_1", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_2", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_ATTRIBUTE_DATA_3", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_BITMAP", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_GLYPH_ATLAS", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_0", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_HIGHLIGHT_1", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_0", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_RENDERER_1", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXTURE_BINDING_SPRITE_ATLAS", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TEXT_PLACEMENT_PADDING", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "THIN_LINE_THRESHOLD", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TILE_SIZE", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_HIGH_RES_CUTOFF", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_GLYPHS", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VTL_TEXTURE_BINDING_UNIT_SPRITES", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_INNER_STOPS", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WEBGL_MAX_STOPS", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 8,
          e = 6,
          c = 1e-30,
          h = 64,
          i = 4294967295,
          o = 512,
          a = 256,
          d = 256 / 360,
          n = !1,
          p = 128,
          r = 8,
          s = 29,
          f = 1,
          g = 16,
          l = 16,
          m = 4,
          v = 8,
          w = 50,
          x = 10,
          b = 24,
          j = 8,
          k = {
        metrics: {
          width: 15,
          height: 17,
          left: 0,
          top: -7,
          advance: 14
        }
      },
          q = 1024,
          u = 0,
          y = 0,
          z = 0,
          A = 1,
          B = 2,
          C = 3,
          D = 4,
          E = 5,
          F = 6,
          G = 5,
          H = 6,
          I = 0,
          J = 1,
          K = 2,
          L = 3,
          M = 3,
          N = 2,
          O = 1,
          P = 2,
          Q = 4,
          R = 2.5,
          S = 6,
          T = 5,
          U = 6,
          V = 1.15,
          W = 2,
          X = 2;
      /***/
    },

    /***/
    "qaIE":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/color.js ***!
      \******************************************************************/

    /*! exports provided: copyAndPremultiply, premultiplyAlpha, premultiplyAlphaRGBA, premultiplyAlphaRGBAArray, premultiplyAlphaUint32, white */

    /***/
    function qaIE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyAndPremultiply", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "premultiplyAlpha", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBA", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "premultiplyAlphaRGBAArray", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "premultiplyAlphaUint32", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "white", function () {
        return n;
      });
      /* harmony import */


      var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./number.js */
      "0RS7");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = [255, 255, 255, 1],
          t = [0, 0, 0, 0];

      function u(r, n) {
        return Array.isArray(n) ? (r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = n[3]) : (r[0] = n.r, r[1] = n.g, r[2] = n.b, r[3] = n.a), r;
      }

      function o(r) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
        var u = r[n + 3];
        return r[n + 0] *= u, r[n + 1] *= u, r[n + 2] *= u, t || (r[n + 3] *= 255), r;
      }

      function c(r) {
        return o(u([], r));
      }

      function e(n) {
        return o(u(t, n)), Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t[0], t[1], t[2], t[3]);
      }

      function i(n) {
        if (!n) return 0;
        var t = n.r,
            u = n.g,
            o = n.b,
            c = n.a;
        return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t * c, u * c, o * c, 255 * c);
      }

      function f(n) {
        if (!n) return 0;

        var _n2 = _slicedToArray(n, 4),
            t = _n2[0],
            u = _n2[1],
            o = _n2[2],
            c = _n2[3];

        return Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["i8888to32"])(t * (c / 255), u * (c / 255), o * (c / 255), c);
      }
      /***/

    },

    /***/
    "yE7X":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js ***!
      \******************************************************************/

    /*! exports provided: MosaicType, VVType, WGLDrawPhase, WGLGeometryTransactionStatus, WGLGeometryType, WGLVVFlag, WGLVVTarget */

    /***/
    function yE7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MosaicType", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VVType", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLDrawPhase", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLGeometryTransactionStatus", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLGeometryType", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLVVFlag", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WGLVVTarget", function () {
        return _;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E, T, I, L, A, _, O;

      !function (E) {
        E[E.FILL = 0] = "FILL", E[E.LINE = 1] = "LINE", E[E.MARKER = 2] = "MARKER", E[E.TEXT = 3] = "TEXT", E[E.LABEL = 4] = "LABEL";
      }(E || (E = {})), function (E) {
        E[E.SUCCEEDED = 0] = "SUCCEEDED", E[E.FAILED_OUT_OF_MEMORY = 1] = "FAILED_OUT_OF_MEMORY";
      }(T || (T = {})), function (E) {
        E[E.NONE = 0] = "NONE", E[E.MAP = 1] = "MAP", E[E.LABEL = 2] = "LABEL", E[E.LABEL_ALPHA = 4] = "LABEL_ALPHA", E[E.HITTEST = 8] = "HITTEST", E[E.HIGHLIGHT = 16] = "HIGHLIGHT", E[E.CLIP = 32] = "CLIP", E[E.DEBUG = 64] = "DEBUG", E[E.NUM_DRAW_PHASES = 9] = "NUM_DRAW_PHASES";
      }(I || (I = {})), function (E) {
        E[E.SIZE = 0] = "SIZE", E[E.COLOR = 1] = "COLOR", E[E.OPACITY = 2] = "OPACITY", E[E.ROTATION = 3] = "ROTATION";
      }(L || (L = {})), function (E) {
        E[E.NONE = 0] = "NONE", E[E.OPACITY = 1] = "OPACITY", E[E.COLOR = 2] = "COLOR", E[E.ROTATION = 4] = "ROTATION", E[E.SIZE_MINMAX_VALUE = 8] = "SIZE_MINMAX_VALUE", E[E.SIZE_SCALE_STOPS = 16] = "SIZE_SCALE_STOPS", E[E.SIZE_FIELD_STOPS = 32] = "SIZE_FIELD_STOPS", E[E.SIZE_UNIT_VALUE = 64] = "SIZE_UNIT_VALUE";
      }(A || (A = {})), function (E) {
        E[E.MINMAX_TARGETS_OUTLINE = 128] = "MINMAX_TARGETS_OUTLINE", E[E.SCALE_TARGETS_OUTLINE = 256] = "SCALE_TARGETS_OUTLINE", E[E.FIELD_TARGETS_OUTLINE = 512] = "FIELD_TARGETS_OUTLINE", E[E.UNIT_TARGETS_OUTLINE = 1024] = "UNIT_TARGETS_OUTLINE";
      }(_ || (_ = {})), function (E) {
        E[E.SPRITE = 0] = "SPRITE", E[E.GLYPH = 1] = "GLYPH";
      }(O || (O = {}));
      /***/
    },

    /***/
    "yN2G":
    /*!******************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js ***!
      \******************************************************************/

    /*! exports provided: C_FILL_STRIDE_SPEC, C_FILL_STRIDE_SPEC_DD, C_FILL_VERTEX_DEF, C_FILL_VERTEX_DEF_DD, C_ICON_STRIDE_SPEC, C_ICON_VERTEX_DEF, C_LABEL_STRIDE_SPEC, C_LABEL_VERTEX_DEF, C_LINE_STRIDE_SPEC, C_LINE_VERTEX_DEF, C_TEXT_STRIDE_SPEC, C_TEXT_VERTEX_DEF, C_VBO_GEOMETRY, C_VBO_INFO, C_VBO_PERINSTANCE, C_VBO_PERINSTANCE_VV, allocateTypedArrayBuffer, allocateTypedArrayBufferwithData, copyMeshData, createGeometryData, createProgramDescriptor, createTextureFromTexelData, geometryToMappedGeometry, getBytes, getCapType, getJoinType, getNamedBuffers, getPixelArrayCtor, getPixelBytes, getStrides, getTextProperties, getTransformParams, getVVType, isDefined, isNumber, strideToPackingFactor */

    /***/
    function yN2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_FILL_STRIDE_SPEC_DD", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_FILL_VERTEX_DEF_DD", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_ICON_STRIDE_SPEC", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_ICON_VERTEX_DEF", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_LABEL_STRIDE_SPEC", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_LABEL_VERTEX_DEF", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_LINE_STRIDE_SPEC", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_LINE_VERTEX_DEF", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_TEXT_STRIDE_SPEC", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_TEXT_VERTEX_DEF", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_VBO_GEOMETRY", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_VBO_INFO", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C_VBO_PERINSTANCE_VV", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBuffer", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "allocateTypedArrayBufferwithData", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "copyMeshData", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryData", function () {
        return K;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createProgramDescriptor", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTextureFromTexelData", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geometryToMappedGeometry", function () {
        return J;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBytes", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCapType", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getJoinType", function () {
        return Z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getNamedBuffers", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPixelArrayCtor", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPixelBytes", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getStrides", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTextProperties", function () {
        return $;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTransformParams", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVVType", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isDefined", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "strideToPackingFactor", function () {
        return C;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _chunks_builtins_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../chunks/builtins.js */
      "n4uK");
      /* harmony import */


      var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../webgl/Texture.js */
      "of9L");
      /* harmony import */


      var _webgl_FramebufferObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../webgl/FramebufferObject.js */
      "0meK");
      /* harmony import */


      var _webgl_RenderingContext_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../webgl/RenderingContext.js */
      "bfJE");
      /* harmony import */


      var _enums_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./enums.js */
      "yE7X");
      /* harmony import */


      var _color_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./color.js */
      "qaIE");
      /* harmony import */


      var _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./SymbolProperties.js */
      "4SEz");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.2d.engine.webgl.Utils"),
          f = "geometry",
          l = "per_instance",
          m = "per_instance_vv",
          d = [{
        name: "geometry",
        strideInBytes: 32,
        divisor: 0
      }],
          p = [{
        name: "geometry",
        strideInBytes: 32,
        divisor: 0
      }],
          y = [{
        name: "geometry",
        strideInBytes: 12,
        divisor: 0
      }],
          g = [{
        name: "geometry",
        strideInBytes: 36,
        divisor: 0
      }],
          h = [{
        name: "geometry",
        strideInBytes: 32,
        divisor: 0
      }],
          w = [{
        name: "geometry",
        strideInBytes: 36,
        divisor: 0
      }];

      function v(e) {
        var r = {};

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var t = _step.value;
            r[t.name] = t.strideInBytes;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return r;
      }

      var b = v(d),
          A = v(p),
          I = v(y),
          L = v(g),
          j = v(h),
          x = v(w);

      function E(e, r) {
        switch (e) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:
            return b;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:
            return r ? I : A;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:
            return L;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:
            return j;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:
            return x;
        }
      }

      var U = ["geometry"],
          F = ["geometry"],
          M = ["geometry"],
          T = ["geometry"],
          z = ["geometry"];

      function B(e) {
        switch (e) {
          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].MARKER:
            return U;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].FILL:
            return F;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LINE:
            return M;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].TEXT:
            return T;

          case _enums_js__WEBPACK_IMPORTED_MODULE_9__["WGLGeometryType"].LABEL:
            return z;
        }
      }

      function C(e) {
        switch (e % 4) {
          case 0:
          case 2:
            return 4;

          case 1:
          case 3:
            return 1;
        }
      }

      function R(e, r) {
        switch (r % 4) {
          case 0:
          case 2:
            return new Uint32Array(Math.floor(e * r / 4));

          case 1:
          case 3:
            return new Uint8Array(e * r);
        }
      }

      function O(e, r) {
        switch (r % 4) {
          case 0:
          case 2:
            return new Uint32Array(e);

          case 1:
          case 3:
            return new Uint8Array(e);
        }
      }

      function $(e) {
        return _SymbolProperties_js__WEBPACK_IMPORTED_MODULE_11__["TextProperties"].pool.acquire(e.color ? Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.color) : [255, 255, 255, 255], e.haloColor ? Object(_color_js__WEBPACK_IMPORTED_MODULE_10__["copyAndPremultiply"])(e.haloColor) : [255, 255, 255, 255], Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.haloSize), Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__["pt2px"])(e.font.size), e.angle * Math.PI / 180, e.xoffset / e.font.size, e.yoffset / e.font.size, "left" === e.horizontalAlignment ? 0 : "right" === e.horizontalAlignment ? 1 : .5, "top" === e.verticalAlignment ? 0 : "bottom" === e.verticalAlignment ? 1 : .5);
      }

      function N(e) {
        return null != e;
      }

      function P(e) {
        return "number" == typeof e;
      }

      function S(e, t) {
        switch (e) {
          case "butt":
            return 0;

          case "round":
            return t ? 2 : 1;

          case "square":
            return 2;

          default:
            return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type", "Cap type ".concat(e, " is not a valid option. Defaulting to round"))), 1;
        }
      }

      function Z(e) {
        switch (e) {
          case "miter":
            return 2;

          case "bevel":
            return 0;

          case "round":
            return 1;

          default:
            return u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("mapview-invalid-type", "Join type ".concat(e, " is not a valid option. Defaulting to round"))), 1;
        }
      }

      function _(e) {
        switch (e) {
          case "opacity":
            return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].OPACITY;

          case "color":
            return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].COLOR;

          case "rotation":
            return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].ROTATION;

          case "size":
            return _enums_js__WEBPACK_IMPORTED_MODULE_9__["VVType"].SIZE;

          default:
            return u.error("Cannot interpret unknown vv: ".concat(e)), null;
        }
      }

      function k(e) {
        var r = e.transform,
            t = e.hasZ,
            n = e.hasM;
        return {
          transform: r,
          hasZ: t,
          hasM: n
        };
      }

      function q(e, r, t, n, o, s, i) {
        for (var _r in s) {
          var _n3 = s[_r].stride,
              _i2 = C(_n3),
              _a = s[_r].data,
              c = t[_r].data,
              _u = _n3 * o.vertexCount / _i2,
              _f = _n3 * e / _i2,
              _l = _n3 * o.vertexFrom / _i2;

          for (var _e2 = 0; _e2 < _u; ++_e2) {
            c[_e2 + _f] = _a[_e2 + _l];
          }
        }

        var a = o.indexCount;

        for (var _t = 0; _t < a; ++_t) {
          n[_t + r] = i[_t + o.indexFrom] - o.vertexFrom + e;
        }
      }

      var D = {
        geometry: 35044
      };

      function K(e, r) {
        var t = [];

        for (var n = 0; n < 5; ++n) {
          var o = B(n),
              s = {};

          var _iterator2 = _createForOfIteratorHelper(o),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e3 = _step2.value;
              s[_e3] = {
                data: r(n, _e3)
              };
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          t.push({
            data: e(n),
            buffers: s
          });
        }

        return t;
      }

      function X(e, r) {
        var n, s;
        return Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.width) && Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__["isPowerOfTwo"])(r.height) ? (n = !0, s = 9987) : (n = !1, s = 9729), new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_6__["default"](e, {
          target: 3553,
          pixelFormat: 6408,
          internalFormat: 6408,
          dataType: 5121,
          hasMipmap: n,
          samplingMode: s,
          wrapMode: 33071,
          flipped: !0
        }, r);
      }

      function J(e) {
        return {
          vertexFrom: void 0,
          vertexTo: void 0,
          geometry: e
        };
      }

      function Y(e) {
        switch (e) {
          case 5120:
          case 5121:
            return 1;

          case 5122:
          case 5123:
            return 2;

          case 5126:
          case 5124:
          case 5125:
            return 4;
        }
      }

      function G(e) {
        switch (e) {
          case 5121:
            return 1;

          case 32819:
            return 2;

          case 5126:
            return 4;

          default:
            return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils", "Unable to handle type ".concat(e)));
        }
      }

      function H(e) {
        switch (e) {
          case 5121:
            return Uint8Array;

          case 32819:
            return Uint16Array;

          case 5126:
            return Float32Array;

          default:
            return void u.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("webgl-utils", "Unable to handle type ".concat(e)));
        }
      }

      var Q = new Map(),
          V = function V(e, r) {
        if (!Q.has(e)) {
          var t = function (e) {
            var r = {};

            var _loop = function _loop(_t2) {
              var n = e[_t2];
              var o = 0;
              r[_t2] = n.map(function (e) {
                var r = _objectSpread(_objectSpread({}, e), {}, {
                  normalized: e.normalized || !1,
                  divisor: e.divisor || 0,
                  offset: o,
                  stride: 0
                });

                return o += e.count * Y(e.type), r;
              }), r[_t2].forEach(function (e) {
                return e.stride = o;
              });
            };

            for (var _t2 in e) {
              _loop(_t2);
            }

            return r;
          }(r),
              n = {
            strides: function (e) {
              var r = {};

              for (var _t3 in e) {
                var _n4 = e[_t3];
                r[_t3] = _n4.length ? _n4[0].stride : 0;
              }

              return r;
            }(t),
            bufferLayouts: t,
            attributes: function (e) {
              var r = {};

              for (var _t4 in e) {
                var _iterator3 = _createForOfIteratorHelper(e[_t4]),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var _n5 = _step3.value;
                    r[_n5.name] = _n5.location;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              return r;
            }(r)
          };

          Q.set(e, n);
        }

        return Q.get(e);
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~462df89e-es5.js.map