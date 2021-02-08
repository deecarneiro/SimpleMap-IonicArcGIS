(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e21) { throw _e21; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e22) { didErr = true; err = _e22; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-3d-layers-PointCloudWorker-js"], {
    /***/
    "0gct":
    /*!****************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js ***!
      \****************************************************************/

    /*! exports provided: decodeIntensity, decodeRGB, decodeXYZ */

    /***/
    function gct(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeIntensity", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeRGB", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeXYZ", function () {
        return z;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = 0,
          o = 10,
          r = 10,
          n = 12,
          i = 16;

      function c(e, i, c) {
        return {
          identifier: String.fromCharCode.apply(null, new Uint8Array(e, c + t, o)),
          version: i.getUint16(c + r, true),
          checksum: i.getUint32(c + n, true)
        };
      }

      var s = 0,
          l = 4,
          d = 8,
          a = 16,
          u = 24,
          w = 32,
          h = 40,
          f = 48,
          g = 56,
          p = 64,
          U = 72,
          m = 80,
          M = 84,
          y = 88;

      function z(t) {
        var o = new DataView(t, 0);
        var r = 0;

        var _c = c(t, o, r),
            n = _c.identifier,
            z = _c.version;

        if (r += i, "LEPCC     " !== n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad identifier");
        if (z > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Unknown version");

        var B = function (e, t) {
          return {
            sizeLo: e.getUint32(t + s, !0),
            sizeHi: e.getUint32(t + l, !0),
            minX: e.getFloat64(t + d, !0),
            minY: e.getFloat64(t + a, !0),
            minZ: e.getFloat64(t + u, !0),
            maxX: e.getFloat64(t + w, !0),
            maxY: e.getFloat64(t + h, !0),
            maxZ: e.getFloat64(t + f, !0),
            errorX: e.getFloat64(t + g, !0),
            errorY: e.getFloat64(t + p, !0),
            errorZ: e.getFloat64(t + U, !0),
            count: e.getUint32(t + m, !0),
            reserved: e.getUint32(t + M, !0)
          };
        }(o, r);

        r += y;
        if (B.sizeHi * Math.pow(2, 32) + B.sizeLo !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");
        var F = new Float64Array(3 * B.count),
            b = [],
            C = [],
            A = [],
            k = [];
        if (r = L(t, r, b), r = L(t, r, C), r = L(t, r, A), r = L(t, r, k), r !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad length");
        var v = 0,
            X = 0;

        for (var e = 0; e < b.length; e++) {
          X += b[e];
          var _t = 0;

          for (var _o = 0; _o < C[e]; _o++) {
            _t += A[v];
            var _e = k[v];
            F[3 * v] = Math.min(B.maxX, B.minX + 2 * B.errorX * _t), F[3 * v + 1] = Math.min(B.maxY, B.minY + 2 * B.errorY * X), F[3 * v + 2] = Math.min(B.maxZ, B.minZ + 2 * B.errorZ * _e), v++;
          }
        }

        return {
          errorX: B.errorX,
          errorY: B.errorY,
          errorZ: B.errorZ,
          result: F
        };
      }

      function L(e, t, o) {
        var r = [];
        t = B(e, t, r);
        var n = [];

        for (var _i = 0; _i < r.length; _i++) {
          n.length = 0, t = B(e, t, n);

          for (var _e2 = 0; _e2 < n.length; _e2++) {
            o.push(n[_e2] + r[_i]);
          }
        }

        return t;
      }

      function B(t, o, r) {
        var n = new DataView(t, o),
            i = n.getUint8(0),
            c = 31 & i,
            s = !!(32 & i),
            l = (192 & i) >> 6;
        var d = 0;
        if (0 === l) d = n.getUint32(1, true), o += 5;else if (1 === l) d = n.getUint16(1, true), o += 3;else {
          if (2 !== l) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad count type");
          d = n.getUint8(1), o += 2;
        }
        if (s) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "LUT not implemented");
        var a = Math.ceil(d * c / 8),
            u = new Uint8Array(t, o, a);
        var w = 0,
            h = 0,
            f = 0;
        var g = -1 >>> 32 - c;

        for (var e = 0; e < d; e++) {
          for (; h < c;) {
            w |= u[f] << h, h += 8, f += 1;
          }

          r[e] = w & g, w >>>= c, h -= c, h + c > 32 && (w |= u[f - 1] >> 8 - h);
        }

        return o + f;
      }

      var F = 0,
          b = 4,
          C = 8,
          A = 12,
          k = 14,
          v = 15,
          X = 16;

      function Y(t) {
        var o = new DataView(t, 0);
        var r = 0;

        var _c2 = c(t, o, r),
            n = _c2.identifier,
            s = _c2.version;

        if (r += i, "ClusterRGB" !== n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad identifier");
        if (s > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Unknown version");

        var l = function (e, t) {
          return {
            sizeLo: e.getUint32(t + F, !0),
            sizeHi: e.getUint32(t + b, !0),
            count: e.getUint32(t + C, !0),
            colorMapCount: e.getUint16(t + A, !0),
            lookupMethod: e.getUint8(t + k),
            compressionMethod: e.getUint8(t + v)
          };
        }(o, r);

        r += X;
        if (l.sizeHi * Math.pow(2, 32) + l.sizeLo !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");

        if ((2 === l.lookupMethod || 1 === l.lookupMethod) && 0 === l.compressionMethod) {
          if (3 * l.colorMapCount + l.count + r !== t.byteLength || l.colorMapCount > 256) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad count");

          var _o2 = new Uint8Array(t, r, 3 * l.colorMapCount),
              _n = new Uint8Array(t, r + 3 * l.colorMapCount, l.count),
              _i2 = new Uint8Array(3 * l.count);

          for (var e = 0; e < l.count; e++) {
            var _t2 = _n[e];
            _i2[3 * e] = _o2[3 * _t2], _i2[3 * e + 1] = _o2[3 * _t2 + 1], _i2[3 * e + 2] = _o2[3 * _t2 + 2];
          }

          return _i2;
        }

        if (0 === l.lookupMethod && 0 === l.compressionMethod) {
          if (3 * l.count + r !== t.byteLength || 0 !== l.colorMapCount) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad count");
          return new Uint8Array(t, r).slice();
        }

        if (l.lookupMethod <= 2 && 1 === l.compressionMethod) {
          if (r + 3 !== t.byteLength || 1 !== l.colorMapCount) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad count");

          var _n2 = o.getUint8(r),
              _i3 = o.getUint8(r + 1),
              _c3 = o.getUint8(r + 2),
              _s = new Uint8Array(3 * l.count);

          for (var _e3 = 0; _e3 < l.count; _e3++) {
            _s[3 * _e3] = _n2, _s[3 * _e3 + 1] = _i3, _s[3 * _e3 + 2] = _c3;
          }

          return _s;
        }

        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad method " + l.lookupMethod + "," + l.compressionMethod);
      }

      var Z = 0,
          x = 4,
          P = 8,
          H = 12,
          D = 14,
          V = 15,
          E = 16;

      function j(t) {
        var o = new DataView(t, 0);
        var r = 0;

        var _c4 = c(t, o, r),
            n = _c4.identifier,
            s = _c4.version;

        if (r += i, "Intensity " !== n) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad identifier");
        if (s > 1) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Unknown version");

        var l = function (e, t) {
          return {
            sizeLo: e.getUint32(t + Z, !0),
            sizeHi: e.getUint32(t + x, !0),
            count: e.getUint32(t + P, !0),
            scaleFactor: e.getUint16(t + H, !0),
            bitsPerPoint: e.getUint8(t + D),
            reserved: e.getUint8(t + V)
          };
        }(o, r);

        r += E;
        if (l.sizeHi * Math.pow(2, 32) + l.sizeLo !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");
        var d = new Uint16Array(l.count);

        if (8 === l.bitsPerPoint) {
          if (l.count + r !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");

          var _o3 = new Uint8Array(t, r, l.count);

          for (var e = 0; e < l.count; e++) {
            d[e] = _o3[e] * l.scaleFactor;
          }
        } else if (16 === l.bitsPerPoint) {
          if (2 * l.count + r !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");

          var _o4 = new Uint16Array(t, r, l.count);

          for (var _e4 = 0; _e4 < l.count; _e4++) {
            d[_e4] = _o4[_e4] * l.scaleFactor;
          }
        } else {
          var _o5 = [];
          if (B(t, r, _o5) !== t.byteLength) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("lepcc-decode-error", "Bad size");

          for (var _e5 = 0; _e5 < l.count; _e5++) {
            d[_e5] = _o5[_e5] * l.scaleFactor;
          }
        }

        return d;
      }
      /***/

    },

    /***/
    "52T4":
    /*!*****************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/quatf32.js ***!
      \*****************************************************/

    /*! exports provided: a, b, c, f, q */

    /***/
    function T4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return a;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r() {
        var r = new Float32Array(4);
        return r[3] = 1, r;
      }

      function n(r) {
        var n = new Float32Array(4);
        return n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n;
      }

      function e(r, n, e, t) {
        var a = new Float32Array(4);
        return a[0] = r, a[1] = n, a[2] = e, a[3] = t, a;
      }

      function t(r, n) {
        return new Float32Array(r, n, 4);
      }

      var a = Object.freeze({
        __proto__: null,
        create: r,
        clone: n,
        fromValues: e,
        createView: t
      });
      /***/
    },

    /***/
    "Bf/J":
    /*!*******************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js ***!
      \*******************************************************************************/

    /*! exports provided: elevationFromPositions, evaluateRenderer, filterInPlace, getAttributeValues, readGeometry */

    /***/
    function BfJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "elevationFromPositions", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "evaluateRenderer", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterInPlace", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAttributeValues", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readGeometry", function () {
        return c;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../renderers/PointCloudClassBreaksRenderer.js */
      "Tg0p");
      /* harmony import */


      var _renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../renderers/PointCloudStretchRenderer.js */
      "V4u7");
      /* harmony import */


      var _renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../renderers/PointCloudUniqueValueRenderer.js */
      "ofcG");
      /* harmony import */


      var _LEPCC_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./LEPCC.js */
      "0gct");
      /* harmony import */


      var _I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./I3SBinaryReader.js */
      "rWTd");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function u(e, o, l, i) {
        var s = e.rendererJSON,
            f = e.isRGBRenderer;
        var u = null,
            c = null;
        if (o && f) u = o;else if (o && "pointCloudUniqueValueRenderer" === s.type) {
          c = _renderers_PointCloudUniqueValueRenderer_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(s);
          var _e6 = c.colorUniqueValueInfos;
          u = new Uint8Array(3 * i);
          var r = p(c.fieldTransformType);

          for (var t = 0; t < i; t++) {
            var n = (r ? r(o[t]) : o[t]) + "";

            for (var _o6 = 0; _o6 < _e6.length; _o6++) {
              if (_e6[_o6].values.indexOf(n) >= 0) {
                u[3 * t] = _e6[_o6].color.r, u[3 * t + 1] = _e6[_o6].color.g, u[3 * t + 2] = _e6[_o6].color.b;
                break;
              }
            }
          }
        } else if (o && "pointCloudStretchRenderer" === s.type) {
          c = _renderers_PointCloudStretchRenderer_js__WEBPACK_IMPORTED_MODULE_2__["default"].fromJSON(s);
          var _e7 = c.stops;
          u = new Uint8Array(3 * i);

          var _r = p(c.fieldTransformType);

          for (var _t3 = 0; _t3 < i; _t3++) {
            var _n3 = _r ? _r(o[_t3]) : o[_t3],
                _l = _e7.length - 1;

            if (_n3 < _e7[0].value) u[3 * _t3] = _e7[0].color.r, u[3 * _t3 + 1] = _e7[0].color.g, u[3 * _t3 + 2] = _e7[0].color.b;else if (_n3 >= _e7[_l].value) u[3 * _t3] = _e7[_l].color.r, u[3 * _t3 + 1] = _e7[_l].color.g, u[3 * _t3 + 2] = _e7[_l].color.b;else for (var _o7 = 1; _o7 < _e7.length; _o7++) {
              if (_n3 < _e7[_o7].value) {
                var _r2 = (_n3 - _e7[_o7 - 1].value) / (_e7[_o7].value - _e7[_o7 - 1].value);

                u[3 * _t3] = _e7[_o7].color.r * _r2 + _e7[_o7 - 1].color.r * (1 - _r2), u[3 * _t3 + 1] = _e7[_o7].color.g * _r2 + _e7[_o7 - 1].color.g * (1 - _r2), u[3 * _t3 + 2] = _e7[_o7].color.b * _r2 + _e7[_o7 - 1].color.b * (1 - _r2);
                break;
              }
            }
          }
        } else if (o && "pointCloudClassBreaksRenderer" === s.type) {
          c = _renderers_PointCloudClassBreaksRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"].fromJSON(s);
          var _e8 = c.colorClassBreakInfos;
          u = new Uint8Array(3 * i);

          var _t4 = p(c.fieldTransformType);

          for (var _r3 = 0; _r3 < i; _r3++) {
            var _n4 = _t4 ? _t4(o[_r3]) : o[_r3];

            for (var _o8 = 0; _o8 < _e8.length; _o8++) {
              if (_n4 >= _e8[_o8].minValue && _n4 <= _e8[_o8].maxValue) {
                u[3 * _r3] = _e8[_o8].color.r, u[3 * _r3 + 1] = _e8[_o8].color.g, u[3 * _r3 + 2] = _e8[_o8].color.b;
                break;
              }
            }
          }
        } else {
          u = new Uint8Array(3 * i);

          for (var _e9 = 0; _e9 < u.length; _e9++) {
            u[_e9] = 255;
          }
        }

        if (l && c && c.colorModulation) {
          var _e10 = c.colorModulation.minValue,
              _o9 = c.colorModulation.maxValue,
              _r4 = .3;

          for (var _t5 = 0; _t5 < i; _t5++) {
            var _n5 = l[_t5],
                _i4 = _n5 >= _o9 ? 1 : _n5 <= _e10 ? _r4 : _r4 + (1 - _r4) * (_n5 - _e10) / (_o9 - _e10);

            u[3 * _t5] = _i4 * u[3 * _t5], u[3 * _t5 + 1] = _i4 * u[3 * _t5 + 1], u[3 * _t5 + 2] = _i4 * u[3 * _t5 + 2];
          }
        }

        return u;
      }

      function c(o, r) {
        if (null == o.encoding || "" === o.encoding) {
          var t = Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createGeometryIndexFromSchema"])(r, o);
          if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t.vertexAttributes.position)) return;

          var n = Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["createTypedView"])(r, t.vertexAttributes.position),
              l = t.header.fields,
              f = [l.offsetX, l.offsetY, l.offsetZ],
              _u = [l.scaleX, l.scaleY, l.scaleZ],
              _c5 = n.length / 3,
              _a = new Float64Array(3 * _c5);

          for (var e = 0; e < _c5; e++) {
            _a[3 * e] = n[3 * e] * _u[0] + f[0], _a[3 * e + 1] = n[3 * e + 1] * _u[1] + f[1], _a[3 * e + 2] = n[3 * e + 2] * _u[2] + f[2];
          }

          return _a;
        }

        if ("lepcc-xyz" === o.encoding) return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_4__["decodeXYZ"])(r).result;
      }

      function a(e, r, t) {
        return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) && e.attributeInfo.useElevation ? d(r, t) : Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e) ? Object(_I3SBinaryReader_js__WEBPACK_IMPORTED_MODULE_5__["readBinaryAttribute"])(e.attributeInfo.storageInfo, e.buffer, t) : null;
      }

      function d(e, o) {
        var r = new Float64Array(o);

        for (var t = 0; t < o; t++) {
          r[t] = e[3 * t + 2];
        }

        return r;
      }

      function m(e, o, r, t, n) {
        var l = e.length / 3;
        var i = 0;

        for (var s = 0; s < l; s++) {
          var _l2 = !0;

          for (var _e11 = 0; _e11 < t.length && _l2; _e11++) {
            var _o10 = t[_e11].filterJSON,
                _r5 = n[_e11].values[s];

            switch (_o10.type) {
              case "pointCloudValueFilter":
                {
                  var _e12 = "exclude" === _o10.mode;

                  -1 !== _o10.values.indexOf(_r5) === _e12 && (_l2 = !1);
                  break;
                }

              case "pointCloudBitfieldFilter":
                {
                  var _e13 = b(_o10.requiredSetBits),
                      _t6 = b(_o10.requiredClearBits);

                  (_r5 & _e13) === _e13 && 0 == (_r5 & _t6) || (_l2 = !1);
                  break;
                }

              case "pointCloudReturnFilter":
                {
                  var _e14 = 15 & _r5,
                      _t7 = _r5 >>> 4 & 15,
                      _n6 = _t7 > 1,
                      _i5 = 1 === _e14,
                      _s2 = _e14 === _t7;

                  var f = !1;

                  var _iterator = _createForOfIteratorHelper(_o10.includedReturns),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var _e15 = _step.value;

                      if ("last" === _e15 && _s2 || "firstOfMany" === _e15 && _i5 && _n6 || "lastOfMany" === _e15 && _s2 && _n6 || "single" === _e15 && !_n6) {
                        f = !0;
                        break;
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  f || (_l2 = !1);
                  break;
                }
            }
          }

          _l2 && (r[i] = s, e[3 * i] = e[3 * s], e[3 * i + 1] = e[3 * s + 1], e[3 * i + 2] = e[3 * s + 2], o[3 * i] = o[3 * s], o[3 * i + 1] = o[3 * s + 1], o[3 * i + 2] = o[3 * s + 2], i++);
        }

        return i;
      }

      function p(e) {
        return null == e || "none" === e ? null : "low-four-bit" === e ? function (e) {
          return 15 & e;
        } : "high-four-bit" === e ? function (e) {
          return (240 & e) >> 4;
        } : "absolute-value" === e ? function (e) {
          return Math.abs(e);
        } : "modulo-ten" === e ? function (e) {
          return e % 10;
        } : null;
      }

      function b(e) {
        var o = 0;

        var _iterator2 = _createForOfIteratorHelper(e || []),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var r = _step2.value;
            o |= 1 << r;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return o;
      }
      /***/

    },

    /***/
    "dXfX":
    /*!**************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/vec4.js ***!
      \**************************************************/

    /*! exports provided: A, B, C, D, E, F, G, H, I, J, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z */

    /***/
    function dXfX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "A", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "B", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "C", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "D", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "F", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "G", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "H", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "I", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "J", function () {
        return H;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "k", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "l", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "p", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "u", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "v", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "w", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "x", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "y", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "z", function () {
        return v;
      });
      /* harmony import */


      var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common.js */
      "QhKk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function a(t, n) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
      }

      function r(t, n, a, r, s) {
        return t[0] = n, t[1] = a, t[2] = r, t[3] = s, t;
      }

      function s(t, n, a) {
        return t[0] = n[0] + a[0], t[1] = n[1] + a[1], t[2] = n[2] + a[2], t[3] = n[3] + a[3], t;
      }

      function u(t, n, a) {
        return t[0] = n[0] - a[0], t[1] = n[1] - a[1], t[2] = n[2] - a[2], t[3] = n[3] - a[3], t;
      }

      function o(t, n, a) {
        return t[0] = n[0] * a[0], t[1] = n[1] * a[1], t[2] = n[2] * a[2], t[3] = n[3] * a[3], t;
      }

      function e(t, n, a) {
        return t[0] = n[0] / a[0], t[1] = n[1] / a[1], t[2] = n[2] / a[2], t[3] = n[3] / a[3], t;
      }

      function c(t, n) {
        return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t;
      }

      function i(t, n) {
        return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t;
      }

      function h(t, n, a) {
        return t[0] = Math.min(n[0], a[0]), t[1] = Math.min(n[1], a[1]), t[2] = Math.min(n[2], a[2]), t[3] = Math.min(n[3], a[3]), t;
      }

      function M(t, n, a) {
        return t[0] = Math.max(n[0], a[0]), t[1] = Math.max(n[1], a[1]), t[2] = Math.max(n[2], a[2]), t[3] = Math.max(n[3], a[3]), t;
      }

      function f(t, n) {
        return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t;
      }

      function l(t, n, a) {
        return t[0] = n[0] * a, t[1] = n[1] * a, t[2] = n[2] * a, t[3] = n[3] * a, t;
      }

      function m(t, n, a, r) {
        return t[0] = n[0] + a[0] * r, t[1] = n[1] + a[1] * r, t[2] = n[2] + a[2] * r, t[3] = n[3] + a[3] * r, t;
      }

      function d(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            s = n[2] - t[2],
            u = n[3] - t[3];
        return Math.sqrt(a * a + r * r + s * s + u * u);
      }

      function b(t, n) {
        var a = n[0] - t[0],
            r = n[1] - t[1],
            s = n[2] - t[2],
            u = n[3] - t[3];
        return a * a + r * r + s * s + u * u;
      }

      function x(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            s = t[3];
        return Math.sqrt(n * n + a * a + r * r + s * s);
      }

      function q(t) {
        var n = t[0],
            a = t[1],
            r = t[2],
            s = t[3];
        return n * n + a * a + r * r + s * s;
      }

      function p(t, n) {
        return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
      }

      function v(t, n) {
        return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
      }

      function g(t, n) {
        var a = n[0],
            r = n[1],
            s = n[2],
            u = n[3];
        var o = a * a + r * r + s * s + u * u;
        return o > 0 && (o = 1 / Math.sqrt(o), t[0] = a * o, t[1] = r * o, t[2] = s * o, t[3] = u * o), t;
      }

      function _(t, n) {
        return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
      }

      function j(t, n, a, r) {
        var s = n[0],
            u = n[1],
            o = n[2],
            e = n[3];
        return t[0] = s + r * (a[0] - s), t[1] = u + r * (a[1] - u), t[2] = o + r * (a[2] - o), t[3] = e + r * (a[3] - e), t;
      }

      function w(t, a) {
        var r, s, u, o, e, c;
        a = a || 1;

        do {
          r = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, s = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, e = r * r + s * s;
        } while (e >= 1);

        do {
          u = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, o = 2 * Object(_common_js__WEBPACK_IMPORTED_MODULE_0__["R"])() - 1, c = u * u + o * o;
        } while (c >= 1);

        var i = Math.sqrt((1 - e) / c);
        return t[0] = a * r, t[1] = a * s, t[2] = a * u * i, t[3] = a * o * i, t;
      }

      function y(t, n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = n[3];
        return t[0] = a[0] * r + a[4] * s + a[8] * u + a[12] * o, t[1] = a[1] * r + a[5] * s + a[9] * u + a[13] * o, t[2] = a[2] * r + a[6] * s + a[10] * u + a[14] * o, t[3] = a[3] * r + a[7] * s + a[11] * u + a[15] * o, t;
      }

      function z(t, n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = a[0],
            e = a[1],
            c = a[2],
            i = a[3],
            h = i * r + e * u - c * s,
            M = i * s + c * r - o * u,
            f = i * u + o * s - e * r,
            l = -o * r - e * s - c * u;
        return t[0] = h * i + l * -o + M * -c - f * -e, t[1] = M * i + l * -e + f * -o - h * -c, t[2] = f * i + l * -c + h * -e - M * -o, t[3] = n[3], t;
      }

      function A(t) {
        return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
      }

      function D(t, n) {
        return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
      }

      function E(n, a) {
        var r = n[0],
            s = n[1],
            u = n[2],
            o = n[3],
            e = a[0],
            c = a[1],
            i = a[2],
            h = a[3];
        return Math.abs(r - e) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(r), Math.abs(e)) && Math.abs(s - c) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(s), Math.abs(c)) && Math.abs(u - i) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(u), Math.abs(i)) && Math.abs(o - h) <= _common_js__WEBPACK_IMPORTED_MODULE_0__["E"] * Math.max(1, Math.abs(o), Math.abs(h));
      }

      var L = u,
          k = o,
          B = e,
          C = d,
          F = b,
          G = x,
          H = q;
      var I = Object.freeze({
        __proto__: null,
        copy: a,
        set: r,
        add: s,
        subtract: u,
        multiply: o,
        divide: e,
        ceil: c,
        floor: i,
        min: h,
        max: M,
        round: f,
        scale: l,
        scaleAndAdd: m,
        distance: d,
        squaredDistance: b,
        length: x,
        squaredLength: q,
        negate: p,
        inverse: v,
        normalize: g,
        dot: _,
        lerp: j,
        random: w,
        transformMat4: y,
        transformQuat: z,
        str: A,
        exactEquals: D,
        equals: E,
        sub: L,
        mul: k,
        div: B,
        dist: C,
        sqrDist: F,
        len: G,
        sqrLen: H
      });
      /***/
    },

    /***/
    "rWTd":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js ***!
      \**************************************************************************/

    /*! exports provided: createAttributeDataIndex, createGeometryDescriptor, createGeometryDescriptorForDraco, createGeometryDescriptorFromDefinition, createGeometryDescriptorFromSchema, createGeometryIndexFromSchema, createRawView, createTypedView, getBytesPerValue, isValueType, readBinaryAttribute, readHeader, readStringArray, valueType2ArrayBufferReader, valueType2TypedArrayClassMap */

    /***/
    function rWTd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createAttributeDataIndex", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryDescriptor", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorForDraco", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromDefinition", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryDescriptorFromSchema", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createGeometryIndexFromSchema", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createRawView", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createTypedView", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBytesPerValue", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isValueType", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readBinaryAttribute", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readHeader", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "readStringArray", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "valueType2ArrayBufferReader", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "valueType2TypedArrayClassMap", function () {
        return m;
      });
      /* harmony import */


      var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/lang.js */
      "f/qv");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _LEPCC_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./LEPCC.js */
      "0gct");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var i = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");

      function u(e, t, r) {
        var o = "",
            i = 0;

        for (; i < r;) {
          var _u2 = e[t + i];
          if (_u2 < 128) o += String.fromCharCode(_u2), i++;else if (_u2 >= 192 && _u2 < 224) {
            if (i + 1 >= r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error", "UTF-8 Decode failed. Two byte character was truncated.");

            var _a2 = (31 & _u2) << 6 | 63 & e[t + i + 1];

            o += String.fromCharCode(_a2), i += 2;
          } else if (_u2 >= 224 && _u2 < 240) {
            if (i + 2 >= r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");

            var _a3 = (15 & _u2) << 12 | (63 & e[t + i + 1]) << 6 | 63 & e[t + i + 2];

            o += String.fromCharCode(_a3), i += 3;
          } else {
            if (!(_u2 >= 240 && _u2 < 248)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error", "UTF-8 Decode failed. Invalid multi byte sequence.");
            {
              if (i + 3 >= r) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");

              var _a4 = (7 & _u2) << 18 | (63 & e[t + i + 1]) << 12 | (63 & e[t + i + 2]) << 6 | 63 & e[t + i + 3];

              if (_a4 >= 65536) {
                var _e16 = 55296 + (_a4 - 65536 >> 10),
                    _t8 = 56320 + (1023 & _a4);

                o += String.fromCharCode(_e16, _t8);
              } else o += String.fromCharCode(_a4);

              i += 4;
            }
          }
        }

        return o;
      }

      function a(e, t) {
        var n = {
          byteOffset: 0,
          byteCount: 0,
          fields: Object.create(null)
        };
        var r = 0;

        for (var o = 0; o < t.length; o++) {
          var _i6 = t[o],
              _u3 = _i6.valueType || _i6.type,
              _a5 = I[_u3];

          n.fields[_i6.property] = _a5(e, r), r += m[_u3].BYTES_PER_ELEMENT;
        }

        return n.byteCount = r, n;
      }

      function s(e, t, r) {
        var o = [];
        var i,
            a,
            s = 0;

        for (a = 0; a < e; a += 1) {
          if (i = t[a], i > 0) {
            if (o.push(u(r, s, i - 1)), 0 !== r[s + i - 1]) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("string-array-error", "Invalid string array: missing null termination.");
          } else o.push(null);

          s += i;
        }

        return o;
      }

      function c(e, t) {
        return new (0, m[t.valueType])(e, t.byteOffset, t.count * t.valuesPerElement);
      }

      function f(e, t) {
        return new Uint8Array(e, t.byteOffset, t.byteCount);
      }

      function l(t, r, o) {
        var i = null != r.header ? a(t, r.header) : {
          byteOffset: 0,
          byteCount: 0,
          fields: {
            count: o
          }
        },
            u = {
          header: i,
          byteOffset: i.byteCount,
          byteCount: 0,
          entries: Object.create(null)
        };
        var s = i.byteCount;

        for (var _t9 = 0; _t9 < r.ordering.length; _t9++) {
          var _o11 = r.ordering[_t9],
              _a6 = Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_0__["clone"])(r[_o11]);

          if (_a6.count = i.fields.count, "String" === _a6.valueType) {
            if (_a6.byteOffset = s, _a6.byteCount = i.fields[_o11 + "ByteCount"], "UTF-8" !== _a6.encoding) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-encoding", "Unsupported String encoding.", {
              encoding: _a6.encoding
            });
          } else {
            if (!h(_a6.valueType)) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unsupported-value-type", "Unsupported binary valueType", {
              valueType: _a6.valueType
            });
            {
              var e = A(_a6.valueType);
              s += s % e != 0 ? e - s % e : 0, _a6.byteOffset = s, _a6.byteCount = e * _a6.valuesPerElement * _a6.count;
            }
          }

          s += _a6.byteCount, u.entries[_o11] = _a6;
        }

        return u.byteCount = s - u.byteOffset, u;
      }

      function b(e, t, r) {
        if (t !== e && i.error("Invalid ".concat(r, " buffer size\n expected: ").concat(e, ", actual: ").concat(t, ")")), t < e) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("buffer-too-small", "Binary buffer is too small", {
          expectedSize: e,
          actualSize: t
        });
      }

      function d(e) {
        return {
          isDraco: !1,
          isLegacy: !1,
          color: null != e.color,
          normal: null != e.normal,
          uv0: null != e.uv0,
          uvRegion: null != e.uvRegion,
          featureIndex: null != e.faceRange && null != e.featureId
        };
      }

      function y(e, t) {
        var n = a(e, t && t.header);
        var r = n.byteCount;
        var o = {
          isDraco: !1,
          header: n,
          byteOffset: n.byteCount,
          byteCount: 0,
          vertexAttributes: {}
        },
            i = n.fields,
            u = null != i.vertexCount ? i.vertexCount : i.count;

        var _iterator3 = _createForOfIteratorHelper(t.ordering),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e19 = _step3.value;
            if (!t.vertexAttributes[_e19]) continue;

            var _n9 = _objectSpread(_objectSpread({}, t.vertexAttributes[_e19]), {}, {
              byteOffset: r,
              count: u
            }),
                _i7 = p[_e19] ? p[_e19] : "_" + _e19;

            o.vertexAttributes[_i7] = _n9, r += A(_n9.valueType) * _n9.valuesPerElement * u;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        var s = i.faceCount;

        if (t.faces && s) {
          o.faces = {};

          var _iterator4 = _createForOfIteratorHelper(t.ordering),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _e17 = _step4.value;
              if (!t.faces[_e17]) continue;

              var _n7 = _objectSpread(_objectSpread({}, t.faces[_e17]), {}, {
                byteOffset: r,
                count: s
              });

              o.faces[_e17] = _n7, r += A(_n7.valueType) * _n7.valuesPerElement * s;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        var c = i.featureCount;

        if (t.featureAttributes && t.featureAttributeOrder && c) {
          o.featureAttributes = {};

          var _iterator5 = _createForOfIteratorHelper(t.featureAttributeOrder),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _e18 = _step5.value;
              if (!t.featureAttributes[_e18]) continue;

              var _n8 = _objectSpread(_objectSpread({}, t.featureAttributes[_e18]), {}, {
                byteOffset: r,
                count: c
              });

              o.featureAttributes[_e18] = _n8;
              r += ("UInt64" === _n8.valueType ? 8 : A(_n8.valueType)) * _n8.valuesPerElement * c;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        return b(r, e.byteLength, "geometry"), o.byteCount = r - o.byteOffset, o;
      }

      function g(e, t) {
        return !(!e || !e.compressedAttributes || "draco" !== e.compressedAttributes.encoding) ? v(e.compressedAttributes.attributes) : e ? d(e) : w(t);
      }

      function w(e) {
        var t = {
          isDraco: !1,
          isLegacy: !0,
          color: !1,
          normal: !1,
          uv0: !1,
          uvRegion: !1,
          featureIndex: !1
        };

        var _iterator6 = _createForOfIteratorHelper(e.ordering),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var n = _step6.value;
            if (e.vertexAttributes[n]) switch (n) {
              case "position":
                break;

              case "normal":
                t.normal = !0;
                break;

              case "color":
                t.color = !0;
                break;

              case "uv0":
                t.uv0 = !0;
                break;

              case "region":
                t.uvRegion = !0;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        return e.featureAttributes && e.featureAttributeOrder && (t.featureIndex = !0), t;
      }

      function v(e) {
        var t = {
          isDraco: !0,
          isLegacy: !1,
          color: !1,
          normal: !1,
          uv0: !1,
          uvRegion: !1,
          featureIndex: !1
        };

        var _iterator7 = _createForOfIteratorHelper(e),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var n = _step7.value;

            switch (n) {
              case "position":
                break;

              case "normal":
                t.normal = !0;
                break;

              case "uv0":
                t.uv0 = !0;
                break;

              case "color":
                t.color = !0;
                break;

              case "uv-region":
                t.uvRegion = !0;
                break;

              case "feature-index":
                t.featureIndex = !0;
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }

        return t;
      }

      var p = {
        position: "position",
        normal: "normal",
        color: "color",
        uv0: "uv0",
        region: "uvRegion"
      };

      function C(e, t, u) {
        if ("lepcc-rgb" === e.encoding) return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeRGB"])(t);
        if ("lepcc-intensity" === e.encoding) return Object(_LEPCC_js__WEBPACK_IMPORTED_MODULE_3__["decodeIntensity"])(t);
        if (null != e.encoding && "" !== e.encoding) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("unknown-attribute-storage-info-encoding", "Unknown Attribute Storage Info Encoding");
        e["attributeByteCounts "] && !e.attributeByteCounts && (i.warn("Warning: Trailing space in 'attributeByteCounts '."), e.attributeByteCounts = e["attributeByteCounts "]), "ObjectIds" === e.ordering[0] && e.hasOwnProperty("objectIds") && (i.warn("Warning: Case error in objectIds"), e.ordering[0] = "objectIds");
        var a = l(t, e, u);
        b(a.byteOffset + a.byteCount, t.byteLength, "attribute");
        var d = a.entries.attributeValues || a.entries.objectIds;

        if (d) {
          if ("String" === d.valueType) {
            var _e20 = a.entries.attributeByteCounts,
                n = c(t, _e20),
                r = f(t, d);
            return s(_e20.count, n, r);
          }

          return c(t, d);
        }

        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("bad-attribute-storage-info", "Bad attributeStorageInfo specification.");
      }

      var m = {
        Float32: Float32Array,
        Float64: Float64Array,
        UInt8: Uint8Array,
        Int8: Int8Array,
        UInt16: Uint16Array,
        Int16: Int16Array,
        UInt32: Uint32Array,
        Int32: Int32Array
      },
          I = {
        Float32: function Float32(e, t) {
          return new DataView(e, 0).getFloat32(t, !0);
        },
        Float64: function Float64(e, t) {
          return new DataView(e, 0).getFloat64(t, !0);
        },
        UInt8: function UInt8(e, t) {
          return new DataView(e, 0).getUint8(t);
        },
        Int8: function Int8(e, t) {
          return new DataView(e, 0).getInt8(t);
        },
        UInt16: function UInt16(e, t) {
          return new DataView(e, 0).getUint16(t, !0);
        },
        Int16: function Int16(e, t) {
          return new DataView(e, 0).getInt16(t, !0);
        },
        UInt32: function UInt32(e, t) {
          return new DataView(e, 0).getUint32(t, !0);
        },
        Int32: function Int32(e, t) {
          return new DataView(e, 0).getInt32(t, !0);
        }
      };

      function h(e) {
        return m.hasOwnProperty(e);
      }

      function A(e) {
        return h(e) ? m[e].BYTES_PER_ELEMENT : 0;
      }
      /***/

    },

    /***/
    "rr5J":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function rr5J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/typedArrayUtil.js */
      "ohva");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../chunks/vec3.js */
      "5DEt");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../geometry/projection.js */
      "gYg2");
      /* harmony import */


      var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../chunks/quat.js */
      "BPBZ");
      /* harmony import */


      var _chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../chunks/vec3f32.js */
      "R/jG");
      /* harmony import */


      var _chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../chunks/quatf32.js */
      "52T4");
      /* harmony import */


      var _i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./i3s/PointCloudWorkerUtil.js */
      "Bf/J");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = /*#__PURE__*/function () {
        function c() {
          _classCallCheck(this, c);
        }

        _createClass(c, [{
          key: "transform",
          value: function transform(a) {
            var o = this._transform(a),
                f = [o.points.buffer, o.rgb.buffer];

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o.pointIdFilterMap) && f.push(o.pointIdFilterMap.buffer);

            var _iterator8 = _createForOfIteratorHelper(o.attributes),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var r = _step8.value;
                "buffer" in r.values && Object(_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__["isArrayBuffer"])(r.values.buffer) && r.values.buffer !== o.rgb.buffer && f.push(r.values.buffer);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])({
              result: o,
              transferList: f
            });
          }
        }, {
          key: "_transform",
          value: function _transform(t) {
            var e = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["readGeometry"])(t.schema, t.geometryBuffer);
            var o = e.length / 3,
                f = null;
            var i = [],
                s = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t.primaryAttributeData, e, o);
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.primaryAttributeData) && s && i.push({
              attributeInfo: t.primaryAttributeData.attributeInfo,
              values: s
            });
            var n = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t.modulationAttributeData, e, o);
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.modulationAttributeData) && n && i.push({
              attributeInfo: t.modulationAttributeData.attributeInfo,
              values: n
            });
            var u = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["evaluateRenderer"])(t.rendererInfo, s, n, o);

            if (t.filterInfo && t.filterInfo.length > 0 && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(t.filterAttributesData)) {
              var r = t.filterAttributesData.map(function (t) {
                var r = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(t, e, o),
                    a = {
                  attributeInfo: t.attributeInfo,
                  values: r
                };
                return i.push(a), a;
              });
              f = new Uint32Array(o), o = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["filterInPlace"])(e, u, f, t.filterInfo, r);
            }

            var _iterator9 = _createForOfIteratorHelper(t.userAttributesData),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var _r6 = _step9.value;

                var _t10 = Object(_i3s_PointCloudWorkerUtil_js__WEBPACK_IMPORTED_MODULE_9__["getAttributeValues"])(_r6, e, o);

                i.push({
                  attributeInfo: _r6.attributeInfo,
                  values: _t10
                });
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            3 * o < u.length && (u = new Uint8Array(u.buffer.slice(0, 3 * o))), this._applyElevationOffsetInPlace(e, o, t.elevationOffset);

            var _c6 = this._transformCoordinates(e, o, t.obb, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.inSR), _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(t.outSR));

            return {
              obb: t.obb,
              points: _c6,
              rgb: u,
              attributes: i,
              pointIdFilterMap: f
            };
          }
        }, {
          key: "_transformCoordinates",
          value: function _transformCoordinates(t, r, e, a, u) {
            if (!Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_5__["projectBuffer"])(t, a, 0, t, u, 0, r)) throw Error("Can't reproject");
            var l = Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["f"])(e.center[0], e.center[1], e.center[2]),
                m = Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])(),
                b = Object(_chunks_vec3f32_js__WEBPACK_IMPORTED_MODULE_7__["c"])();
            Object(_chunks_quat_js__WEBPACK_IMPORTED_MODULE_6__["c"])(h, e.quaternion);
            var p = new Float32Array(3 * r);

            for (var _a7 = 0; _a7 < r; _a7++) {
              m[0] = t[3 * _a7] - l[0], m[1] = t[3 * _a7 + 1] - l[1], m[2] = t[3 * _a7 + 2] - l[2], Object(_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__["q"])(b, m, h), e.halfSize[0] = Math.max(e.halfSize[0], Math.abs(b[0])), e.halfSize[1] = Math.max(e.halfSize[1], Math.abs(b[1])), e.halfSize[2] = Math.max(e.halfSize[2], Math.abs(b[2])), p[3 * _a7] = m[0], p[3 * _a7 + 1] = m[1], p[3 * _a7 + 2] = m[2];
            }

            return p;
          }
        }, {
          key: "_applyElevationOffsetInPlace",
          value: function _applyElevationOffsetInPlace(t, r, e) {
            if (0 !== e) for (var a = 0; a < r; a++) {
              t[3 * a + 2] += e;
            }
          }
        }]);

        return c;
      }();

      var h = Object(_chunks_quatf32_js__WEBPACK_IMPORTED_MODULE_8__["b"])();

      function I() {
        return new c();
      }
      /* harmony default export */


      __webpack_exports__["default"] = I;
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-3d-layers-PointCloudWorker-js-es5.js.map