(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e5) { throw _e5; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e6) { didErr = true; err = _e6; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~3d02fa00"], {
    /***/
    "1kEK":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/geometryAdapters/json.js ***!
      \*********************************************************************/

    /*! exports provided: jsonAdapter */

    /***/
    function kEK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "jsonAdapter", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = {
        convertToGEGeometry: function convertToGEGeometry(t, s) {
          if (null == s) return null;
          return t.convertJSONToGeometry(s);
        },
        exportPoint: function exportPoint(t, i, n) {
          var e = new s(t.getPointX(i), t.getPointY(i), n),
              o = t.hasZ(i),
              h = t.hasM(i);
          o && (e.z = t.getPointZ(i));
          h && (e.m = t.getPointM(i));
          return e;
        },
        exportPolygon: function exportPolygon(t, s, n) {
          return new i(t.exportPaths(s), n, t.hasZ(s), t.hasM(s));
        },
        exportPolyline: function exportPolyline(t, s, i) {
          return new n(t.exportPaths(s), i, t.hasZ(s), t.hasM(s));
        },
        exportMultipoint: function exportMultipoint(t, s, i) {
          return new e(t.exportPoints(s), i, t.hasZ(s), t.hasM(s));
        },
        exportExtent: function exportExtent(t, s, i) {
          var n = t.hasZ(s),
              e = t.hasM(s),
              h = new o(t.getXMin(s), t.getYMin(s), t.getXMax(s), t.getYMax(s), i);

          if (n) {
            var _i = t.getZExtent(s);

            h.zmin = _i.vmin, h.zmax = _i.vmax;
          }

          if (e) {
            var _i2 = t.getMExtent(s);

            h.mmin = _i2.vmin, h.mmax = _i2.vmax;
          }

          return h;
        }
      };

      var s = function s(t, _s, i) {
        _classCallCheck(this, s);

        this.x = t, this.y = _s, this.spatialReference = i, this.z = void 0, this.m = void 0;
      };

      var i = function i(t, s, _i3, n) {
        _classCallCheck(this, i);

        this.rings = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, _i3 && (this.hasZ = _i3), n && (this.hasM = n);
      };

      var n = function n(t, s, i, _n) {
        _classCallCheck(this, n);

        this.paths = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, i && (this.hasZ = i), _n && (this.hasM = _n);
      };

      var e = function e(t, s, i, n) {
        _classCallCheck(this, e);

        this.points = t, this.spatialReference = s, this.hasZ = void 0, this.hasM = void 0, i && (this.hasZ = i), n && (this.hasM = n);
      };

      var o = function o(t, s, i, n, e) {
        _classCallCheck(this, o);

        this.xmin = t, this.ymin = s, this.xmax = i, this.ymax = n, this.spatialReference = e, this.zmin = void 0, this.zmax = void 0, this.mmin = void 0, this.mmax = void 0;
      };
      /***/

    },

    /***/
    "2X7Z":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/centroid.js ***!
      \***************************************************************/

    /*! exports provided: getCentroidOptimizedGeometry, lineCentroid */

    /***/
    function X7Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCentroidOptimizedGeometry", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineCentroid", function () {
        return r;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, t) {
        return n ? t ? 4 : 3 : t ? 3 : 2;
      }

      function t(t, I, o, u, l) {
        if (!I || !I.lengths.length) return null;
        var N = "upperLeft" === (null == l ? void 0 : l.originPosition) ? -1 : 1;
        t.lengths.length && (t.lengths.length = 0), t.coords.length && (t.coords.length = 0);
        var s = t.coords,
            c = [],
            f = o ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY],
            i = I.lengths,
            T = I.coords,
            h = n(o, u);
        var g = 0;

        var _iterator = _createForOfIteratorHelper(i),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _n4 = _step.value;

            var _t = e(f, T, g, _n4, o, u, N);

            _t && c.push(_t), g += _n4 * h;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (c.sort(function (n, t) {
          var e = N * n[2] - N * t[2];
          return 0 === e && o && (e = n[4] - t[4]), e;
        }), c.length) {
          var _n2 = 6 * c[0][2];

          s[0] = c[0][0] / _n2, s[1] = c[0][1] / _n2, o && (_n2 = 6 * c[0][4], s[2] = 0 !== _n2 ? c[0][3] / _n2 : 0), (s[0] < f[0] || s[0] > f[1] || s[1] < f[2] || s[1] > f[3] || o && (s[2] < f[4] || s[2] > f[5])) && (s.length = 0);
        }

        if (!s.length) {
          var _n3 = I.lengths[0] ? r(T, 0, i[0], o, u) : null;

          if (!_n3) return null;
          s[0] = _n3[0], s[1] = _n3[1], o && _n3.length > 2 && (s[2] = _n3[2]);
        }

        return t;
      }

      function e(t, e, r, I, o, u) {
        var l = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 1;
        var N = n(o, u);
        var s = r,
            c = r + N,
            f = 0,
            i = 0,
            T = 0,
            h = 0,
            g = 0;

        for (var _n5 = 0, _r = I - 1; _n5 < _r; _n5++, s += N, c += N) {
          var _n6 = e[s],
              _r2 = e[s + 1],
              _I = e[s + 2],
              _u = e[c],
              _l = e[c + 1],
              _N = e[c + 2];

          var _E = _n6 * _l - _u * _r2;

          h += _E, f += (_n6 + _u) * _E, i += (_r2 + _l) * _E, o && (_E = _n6 * _N - _u * _I, T += (_I + _N) * _E, g += _E), _n6 < t[0] && (t[0] = _n6), _n6 > t[1] && (t[1] = _n6), _r2 < t[2] && (t[2] = _r2), _r2 > t[3] && (t[3] = _r2), o && (_I < t[4] && (t[4] = _I), _I > t[5] && (t[5] = _I));
        }

        if (h * l > 0 && (h *= -1), g * l > 0 && (g *= -1), !h) return null;
        var E = [f, i, .5 * h];
        return o && (E[3] = T, E[4] = .5 * g), E;
      }

      function r(t, e, r, N, s) {
        var c = n(N, s);
        var f = e,
            i = e + c,
            T = 0,
            h = 0,
            g = 0,
            E = 0;

        for (var _n7 = 0, _e = r - 1; _n7 < _e; _n7++, f += c, i += c) {
          var _n8 = t[f],
              _e2 = t[f + 1],
              _r3 = t[f + 2],
              _s2 = t[i],
              _c = t[i + 1],
              b = t[i + 2],
              m = N ? o(_n8, _e2, _r3, _s2, _c, b) : I(_n8, _e2, _s2, _c);
          if (m) if (T += m, N) {
            var _t2 = l(_n8, _e2, _r3, _s2, _c, b);

            h += m * _t2[0], g += m * _t2[1], E += m * _t2[2];
          } else {
            var _t3 = u(_n8, _e2, _s2, _c);

            h += m * _t3[0], g += m * _t3[1];
          }
        }

        return T > 0 ? N ? [h / T, g / T, E / T] : [h / T, g / T] : r > 0 ? N ? [t[e], t[e + 1], t[e + 2]] : [t[e], t[e + 1]] : null;
      }

      function I(n, t, e, r) {
        var I = e - n,
            o = r - t;
        return Math.sqrt(I * I + o * o);
      }

      function o(n, t, e, r, I, o) {
        var u = r - n,
            l = I - t,
            N = o - e;
        return Math.sqrt(u * u + l * l + N * N);
      }

      function u(n, t, e, r) {
        return [n + .5 * (e - n), t + .5 * (r - t)];
      }

      function l(n, t, e, r, I, o) {
        return [n + .5 * (r - n), t + .5 * (I - t), e + .5 * (o - e)];
      }
      /***/

    },

    /***/
    "AIxD":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js ***!
      \*************************************************************************/

    /*! exports provided: equals, getQuantizedBoundsCoordsArray, getQuantizedBoundsCoordsArrayArray, getQuantizedBoundsPaths, getQuantizedBoundsPoints, getQuantizedBoundsRings, quantizeBounds, quantizeExtent, quantizeGeometry, quantizeMultipoint, quantizePaths, quantizePoint, quantizePoints, quantizePolygon, quantizePolyline, quantizeRings, quantizeX, quantizeY, toQuantizationTransform, unquantizeBounds, unquantizeCoordsArray, unquantizeCoordsArrayArray, unquantizeExtent, unquantizeMultipoint, unquantizePaths, unquantizePoint, unquantizePoints, unquantizePolygon, unquantizePolyline, unquantizeRings, unquantizeX, unquantizeY */

    /***/
    function AIxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArray", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsCoordsArrayArray", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPaths", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsPoints", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getQuantizedBoundsRings", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeBounds", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeExtent", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeGeometry", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeMultipoint", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePaths", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePoint", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePoints", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePolygon", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizePolyline", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeRings", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeX", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "quantizeY", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toQuantizationTransform", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeBounds", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArray", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeCoordsArrayArray", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeExtent", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeMultipoint", function () {
        return U;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePaths", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePoint", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePoints", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePolygon", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizePolyline", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeRings", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeX", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unquantizeY", function () {
        return y;
      });
      /* harmony import */


      var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./jsonUtils.js */
      "qatw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(n) {
        return n && "upperLeft" === n.originPosition;
      }

      var o = function o(n, t, r) {
        return [t, r];
      },
          l = function l(n, t, r) {
        return [t, r, n[2]];
      },
          a = function a(n, t, r) {
        return [t, r, n[2], n[3]];
      };

      function m(n) {
        if (!n) return null;
        return {
          originPosition: "upper-left" === n.originPosition ? "upperLeft" : "lower-left" === n.originPosition ? "lowerLeft" : n.originPosition,
          scale: [n.tolerance, n.tolerance],
          translate: [n.extent.xmin, n.extent.ymax]
        };
      }

      function c(n, t) {
        if (n === t || null == n && null == t) return !0;
        if (null == n || null == t) return !1;
        var r, e, u, o, l, a;
        return i(n) ? (r = n.translate[0], e = n.translate[1], u = n.scale[0]) : (r = n.extent.xmin, e = n.extent.ymax, u = n.tolerance), i(t) ? (o = t.translate[0], l = t.translate[1], a = t.scale[0]) : (o = t.extent.xmin, l = t.extent.ymax, a = t.tolerance), r === o && e === l && u === a;
      }

      function s(_ref, r) {
        var n = _ref.scale,
            t = _ref.translate;
        return Math.round((r - t[0]) / n[0]);
      }

      function f(_ref2, r) {
        var n = _ref2.scale,
            t = _ref2.translate;
        return Math.round((t[1] - r) / n[1]);
      }

      function x(n, t, r) {
        var e = [];
        var u, i, o, l;

        for (var _a = 0; _a < r.length; _a++) {
          var _m = r[_a];
          _a > 0 ? (o = s(n, _m[0]), l = f(n, _m[1]), o === u && l === i || (e.push(t(_m, o - u, l - i)), u = o, i = l)) : (u = s(n, _m[0]), i = f(n, _m[1]), e.push(t(_m, u, i)));
        }

        return e.length > 0 ? e : null;
      }

      function h(n, t, r) {
        return t[0] = s(n, r[0]), t[3] = f(n, r[1]), t[2] = s(n, r[2]), t[1] = f(n, r[3]), t;
      }

      function I(n, t, r, e) {
        return x(n, r ? e ? a : l : e ? l : o, t);
      }

      function g(n, t, r, e) {
        var u = [],
            i = r ? e ? a : l : e ? l : o;

        for (var _r4 = 0; _r4 < t.length; _r4++) {
          var _e3 = x(n, i, t[_r4]);

          _e3 && _e3.length >= 3 && u.push(_e3);
        }

        return u.length ? u : null;
      }

      function N(n, t, r, e) {
        var u = [],
            i = r ? e ? a : l : e ? l : o;

        for (var _r5 = 0; _r5 < t.length; _r5++) {
          var _e4 = x(n, i, t[_r5]);

          _e4 && _e4.length >= 2 && u.push(_e4);
        }

        return u.length ? u : null;
      }

      function p(_ref3, r) {
        var n = _ref3.scale,
            t = _ref3.translate;
        return r * n[0] + t[0];
      }

      function y(_ref4, r) {
        var n = _ref4.scale,
            t = _ref4.translate;
        return t[1] - r * n[1];
      }

      function z(n, t, r) {
        var e = new Array(r.length);
        if (!r.length) return e;

        var _n$scale = _slicedToArray(n.scale, 2),
            u = _n$scale[0],
            i = _n$scale[1];

        var o = p(n, r[0][0]),
            l = y(n, r[0][1]);
        e[0] = t(r[0], o, l);

        for (var _n9 = 1; _n9 < r.length; _n9++) {
          var _a2 = r[_n9];
          o += _a2[0] * u, l -= _a2[1] * i, e[_n9] = t(_a2, o, l);
        }

        return e;
      }

      function T(n, t, r) {
        var e = new Array(r.length);

        for (var u = 0; u < r.length; u++) {
          e[u] = z(n, t, r[u]);
        }

        return e;
      }

      function M(n, t, r) {
        return r ? (t[0] = p(n, r[0]), t[1] = y(n, r[3]), t[2] = p(n, r[2]), t[3] = y(n, r[1]), t) : [p(n, t[0]), y(n, t[3]), p(n, t[2]), y(n, t[1])];
      }

      function E(n, t, r, e) {
        return z(n, r ? e ? a : l : e ? l : o, t);
      }

      function P(n, t, r, e) {
        return T(n, r ? e ? a : l : e ? l : o, t);
      }

      function b(n, t, r, e) {
        return T(n, r ? e ? a : l : e ? l : o, t);
      }

      function F(n, t, r) {
        var _r$ = _slicedToArray(r[0], 2),
            e = _r$[0],
            u = _r$[1],
            i = Math.min(e, t[0]),
            o = Math.min(u, t[1]),
            l = Math.max(e, t[2]),
            a = Math.max(u, t[3]);

        for (var _n10 = 1; _n10 < r.length; _n10++) {
          var _r$_n = _slicedToArray(r[_n10], 2),
              _t4 = _r$_n[0],
              _m2 = _r$_n[1];

          e += _t4, u += _m2, _t4 < 0 && (i = Math.min(i, e)), _t4 > 0 && (l = Math.max(l, e)), _m2 < 0 ? o = Math.min(o, u) : _m2 > 0 && (a = Math.max(a, u));
        }

        return n[0] = i, n[1] = o, n[2] = l, n[3] = a, n;
      }

      function V(n, t) {
        if (!t.length) return null;
        n[0] = n[1] = Number.POSITIVE_INFINITY, n[2] = n[3] = Number.NEGATIVE_INFINITY;

        for (var r = 0; r < t.length; r++) {
          F(n, n, t[r]);
        }

        return n;
      }

      function Y(n) {
        var t = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
        return F(t, t, n);
      }

      function _(n) {
        return V([0, 0, 0, 0], n);
      }

      function A(n) {
        return V([0, 0, 0, 0], n);
      }

      function w(n, t, r, e, u) {
        return t.xmin = s(n, r.xmin), t.ymin = f(n, r.ymin), t.xmax = s(n, r.xmax), t.ymax = f(n, r.ymax), t !== r && (e && (t.zmin = r.zmin, t.zmax = r.zmax), u && (t.mmin = r.mmin, t.mmax = r.mmax)), t;
      }

      function G(n, t, r, e, u) {
        return t.points = I(n, r.points, e, u), t;
      }

      function L(n, t, r, e, u) {
        return t.x = s(n, r.x), t.y = f(n, r.y), t !== r && (e && (t.z = r.z), u && (t.m = r.m)), t;
      }

      function O(n, t, r, e, u) {
        var i = g(n, r.rings, e, u);
        return i ? (t.rings = i, t) : null;
      }

      function S(n, t, r, e, u) {
        var i = N(n, r.paths, e, u);
        return i ? (t.paths = i, t) : null;
      }

      function d(i, o) {
        return i && o ? Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPoint"])(o) ? L(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolyline"])(o) ? S(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isPolygon"])(o) ? O(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isMultipoint"])(o) ? G(i, {}, o, !1, !1) : Object(_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__["isExtent"])(o) ? w(i, {}, o, !1, !1) : null : null;
      }

      function j(n, t, r, e, u) {
        return t.xmin = p(n, r.xmin), t.ymin = y(n, r.ymin), t.xmax = p(n, r.xmax), t.ymax = y(n, r.ymax), t !== r && (e && (t.zmin = r.zmin, t.zmax = r.zmax), u && (t.mmin = r.mmin, t.mmax = r.mmax)), t;
      }

      function U(n, t, r, e, u) {
        return t.points = E(n, r.points, e, u), t;
      }

      function k(n, t, r, e, u) {
        return t.x = p(n, r.x), t.y = y(n, r.y), t !== r && (e && (t.z = r.z), u && (t.m = r.m)), t;
      }

      function q(n, t, r, e, u) {
        return t.rings = b(n, r.rings, e, u), t;
      }

      function v(n, t, r, e, u) {
        return t.paths = P(n, r.paths, e, u), t;
      }
      /***/

    },

    /***/
    "HsO1":
    /*!*****************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js ***!
      \*****************************************************************************/

    /*! exports provided: checkProjectionSupport, project, projectMany */

    /***/
    function HsO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "checkProjectionSupport", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "project", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "projectMany", function () {
        return j;
      });
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/projection.js */
      "gYg2");
      /* harmony import */


      var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../geometry/geometryAdapters/json.js */
      "1kEK");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = [0, 0];

      function c(s, t) {
        if (!t) return null;

        if ("x" in t) {
          var _s3, _s4;

          var n = {
            x: 0,
            y: 0
          };
          return (_s3 = s(t.x, t.y, u), _s4 = _slicedToArray(_s3, 2), n.x = _s4[0], n.y = _s4[1], _s3), null != t.z && (n.z = t.z), null != t.m && (n.m = t.m), n;
        }

        if ("xmin" in t) {
          var _s5, _s6, _s7, _s8;

          var _n11 = {
            xmin: 0,
            ymin: 0,
            xmax: 0,
            ymax: 0
          };
          return (_s5 = s(t.xmin, t.ymin, u), _s6 = _slicedToArray(_s5, 2), _n11.xmin = _s6[0], _n11.ymin = _s6[1], _s5), (_s7 = s(t.xmax, t.ymax, u), _s8 = _slicedToArray(_s7, 2), _n11.xmax = _s8[0], _n11.ymax = _s8[1], _s7), t.hasZ && (_n11.zmin = t.zmin, _n11.zmax = t.zmax, _n11.hasZ = !0), t.hasM && (_n11.mmin = t.mmin, _n11.mmax = t.mmax, _n11.hasM = !0), _n11;
        }

        return "rings" in t ? {
          rings: p(t.rings, s),
          hasM: t.hasM,
          hasZ: t.hasZ
        } : "paths" in t ? {
          paths: p(t.paths, s),
          hasM: t.hasM,
          hasZ: t.hasZ
        } : "points" in t ? {
          points: l(t.points, s),
          hasM: t.hasM,
          hasZ: t.hasZ
        } : void 0;
      }

      function p(s, t) {
        var n = [];

        var _iterator2 = _createForOfIteratorHelper(s),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var e = _step2.value;
            n.push(l(e, t));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return n;
      }

      function l(s, t) {
        var n = [];

        var _iterator3 = _createForOfIteratorHelper(s),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var e = _step3.value;

            var _s9 = t(e[0], e[1], [0, 0]);

            n.push(_s9), e.length > 2 && _s9.push(e[2]), e.length > 3 && _s9.push(e[3]);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return n;
      }

      function f(_x, _x2) {
        return _f.apply(this, arguments);
      }

      function _f() {
        _f = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(s, t) {
          var n;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (t) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  n = Array.isArray(s) ? s.map(function (s) {
                    var t;
                    return null == (t = s.geometry) ? void 0 : t.spatialReference;
                  }) : [s];
                  _context2.next = 5;
                  return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["initializeProjection"])(n.map(function (s) {
                    return {
                      source: s,
                      dest: t
                    };
                  }));

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _f.apply(this, arguments);
      }

      var x = c.bind(null, _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["lngLatToXY"]),
          y = c.bind(null, _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["xyToLngLat"]);

      function g(s, r, i) {
        return s ? (i || (i = r, r = s.spatialReference), Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isValid"])(r) && Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isValid"])(i) && !Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["equals"])(r, i) ? Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["canProject"])(r, i) ? Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWebMercator"])(i) ? x(s) : y(s) : Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__["jsonAdapter"], [s], r, i, null)[0] : s) : s;
      }

      var _ = new ( /*#__PURE__*/function () {
        function _class() {
          _classCallCheck(this, _class);

          this._jobs = [], this._timer = null, this._process = this._process.bind(this);
        }

        _createClass(_class, [{
          key: "push",
          value: function () {
            var _push = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(t, e, r) {
              var _this = this;

              var i;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      !t || !t.length || !e || !r || Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["equals"])(e, r);
                      i = {
                        geometries: t,
                        inSpatialReference: e,
                        outSpatialReference: r,
                        resolve: null
                      };
                      return _context.abrupt("return", (this._jobs.push(i), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__["create"])(function (s) {
                        i.resolve = s, null === _this._timer && (_this._timer = setTimeout(_this._process, 10));
                      })));

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function push(_x3, _x4, _x5) {
              return _push.apply(this, arguments);
            }

            return push;
          }()
        }, {
          key: "_process",
          value: function _process() {
            this._timer = null;

            var s = this._jobs.shift();

            if (!s) return;
            var t = s.geometries,
                n = s.inSpatialReference,
                r = s.outSpatialReference,
                i = s.resolve;
            Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["canProject"])(n, r) ? Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["isWebMercator"])(r) ? i(t.map(x)) : i(t.map(y)) : i(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_3__["projectMany"])(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_4__["jsonAdapter"], t, n, r, null)), this._jobs.length > 0 && (this._timer = setTimeout(this._process, 10));
          }
        }]);

        return _class;
      }())();

      function j(_x6, _x7, _x8) {
        return _j.apply(this, arguments);
      }
      /***/


      function _j() {
        _j = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(s, t, n) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", _.push(s, t, n));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _j.apply(this, arguments);
      }
    },

    /***/
    "RjdO":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/quickselect.js ***!
      \*********************************************************/

    /*! exports provided: q */

    /***/
    function RjdO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "q", function () {
        return r;
      });
      /* harmony import */


      var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_commonjsHelpers.js */
      "X2wA");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = Object(_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__["c"])(function (o) {
        var r;
        void 0 !== (r = function () {
          function o(o, t, a, f, i) {
            r(o, t, a || 0, f || o.length - 1, i || n);
          }

          function r(o, n, a, f, i) {
            for (; f > a;) {
              if (f - a > 600) {
                var c = f - a + 1,
                    e = n - a + 1,
                    h = Math.log(c),
                    u = .5 * Math.exp(2 * h / 3),
                    s = .5 * Math.sqrt(h * u * (c - u) / c) * (e - c / 2 < 0 ? -1 : 1);
                r(o, n, Math.max(a, Math.floor(n - e * u / c + s)), Math.min(f, Math.floor(n + (c - e) * u / c + s)), i);
              }

              var M = o[n],
                  m = a,
                  v = f;

              for (t(o, a, n), i(o[f], M) > 0 && t(o, a, f); m < v;) {
                for (t(o, m, v), m++, v--; i(o[m], M) < 0;) {
                  m++;
                }

                for (; i(o[v], M) > 0;) {
                  v--;
                }
              }

              0 === i(o[a], M) ? t(o, a, v) : t(o, ++v, f), v <= n && (a = v + 1), n <= v && (f = v - 1);
            }
          }

          function t(o, r, t) {
            var n = o[r];
            o[r] = o[t], o[t] = n;
          }

          function n(o, r) {
            return o < r ? -1 : o > r ? 1 : 0;
          }

          return o;
        }()) && (o.exports = r);
      });
      /***/
    },

    /***/
    "gLc9":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/FieldsIndex.js ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function gLc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t) {
        return "date" === t.type || "esriFieldTypeDate" === t.type;
      }

      function e(t) {
        return t.toLowerCase().trim();
      }
      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2(s) {
          _classCallCheck(this, _class2);

          if (this.fields = s, this._fieldsMap = new Map(), this._dateFieldsSet = new Set(), this.dateFields = [], !s) return;
          var i = [];

          var _iterator4 = _createForOfIteratorHelper(s),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var d = _step4.value;

              var _s10 = d && d.name;

              if (_s10) {
                var a = e(_s10);
                this._fieldsMap.set(_s10, d), this._fieldsMap.set(a, d), i.push(a), t(d) && (this.dateFields.push(d), this._dateFieldsSet.add(d));
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          i.sort(), this.uid = i.join(",");
        }

        _createClass(_class2, [{
          key: "destroy",
          value: function destroy() {
            this._fieldsMap.clear();
          }
        }, {
          key: "has",
          value: function has(t) {
            return null != this.get(t);
          }
        }, {
          key: "get",
          value: function get(t) {
            return null != t ? this._fieldsMap.get(t) || this._fieldsMap.get(e(t)) : void 0;
          }
        }, {
          key: "isDateField",
          value: function isDateField(t) {
            return this._dateFieldsSet.has(this.get(t));
          }
        }, {
          key: "normalizeFieldName",
          value: function normalizeFieldName(t) {
            var e = this.get(t);
            if (e) return e.name;
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "gkbi":
    /*!*******************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/defaultsJSON.js ***!
      \*******************************************************************/

    /*! exports provided: defaultColor, defaultOutlineColor, defaultPointSymbolJSON, defaultPolygonSymbolJSON, defaultPolylineSymbolJSON, defaultTextSymbolJSON, errorPointSymbolJSON, errorPolygonSymbolJSON, errorPolylineSymbolJSON */

    /***/
    function gkbi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultColor", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultOutlineColor", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPointSymbolJSON", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolygonSymbolJSON", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultPolylineSymbolJSON", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultTextSymbolJSON", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPointSymbolJSON", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolygonSymbolJSON", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "errorPolylineSymbolJSON", function () {
        return s;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var e = [252, 146, 31, 255],
          i = [153, 153, 153, 255],
          l = {
        type: "esriSMS",
        style: "esriSMSCircle",
        size: 6,
        color: e,
        outline: {
          type: "esriSLS",
          style: "esriSLSSolid",
          width: .75,
          color: [153, 153, 153, 255]
        }
      },
          o = {
        type: "esriSLS",
        style: "esriSLSSolid",
        width: .75,
        color: e
      },
          S = {
        type: "esriSFS",
        style: "esriSFSSolid",
        color: [252, 146, 31, 196],
        outline: {
          type: "esriSLS",
          style: "esriSLSSolid",
          width: .75,
          color: [255, 255, 255, 191]
        }
      },
          t = {
        type: "esriTS",
        color: [255, 255, 255, 255],
        font: {
          family: "arial-unicode-ms",
          size: 10,
          weight: "bold"
        },
        horizontalAlignment: "center",
        kerning: !0,
        haloColor: [0, 0, 0, 255],
        haloSize: 1,
        rotated: !1,
        text: "",
        xoffset: 0,
        yoffset: 0,
        angle: 0
      },
          r = {
        type: "esriSMS",
        style: "esriSMSCircle",
        color: [0, 0, 0, 255],
        outline: null,
        size: 10.5
      },
          s = {
        type: "esriSLS",
        style: "esriSLSSolid",
        color: [0, 0, 0, 255],
        width: 1.5
      },
          y = {
        type: "esriSFS",
        style: "esriSFSSolid",
        color: [0, 0, 0, 255],
        outline: null
      };
      /***/
    },

    /***/
    "kB+0":
    /*!***************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/rbush.js ***!
      \***************************************************/

    /*! exports provided: r */

    /***/
    function kB0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "r", function () {
        return i;
      });
      /* harmony import */


      var _quickselect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./quickselect.js */
      "RjdO");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i(t, n) {
        if (!(this instanceof i)) return new i(t, n);
        this._maxEntries = Math.max(4, t || 9), this._minEntries = Math.max(2, Math.ceil(.4 * this._maxEntries)), n && ("function" == typeof n ? this.toBBox = n : this._initFormat(n)), this.clear();
      }

      function n(t, i, n) {
        if (!n) return i.indexOf(t);

        for (var h = 0; h < i.length; h++) {
          if (n(t, i[h])) return h;
        }

        return -1;
      }

      function h(t, i) {
        a(t, 0, t.children.length, i, t);
      }

      function a(t, i, n, h, a) {
        a || (a = u(null)), a.minX = 1 / 0, a.minY = 1 / 0, a.maxX = -1 / 0, a.maxY = -1 / 0;

        for (var e, o = i; o < n; o++) {
          e = t.children[o], r(a, t.leaf ? h(e) : e);
        }

        return a;
      }

      function r(t, i) {
        return t.minX = Math.min(t.minX, i.minX), t.minY = Math.min(t.minY, i.minY), t.maxX = Math.max(t.maxX, i.maxX), t.maxY = Math.max(t.maxY, i.maxY), t;
      }

      function e(t, i) {
        return t.minX - i.minX;
      }

      function o(t, i) {
        return t.minY - i.minY;
      }

      function s(t) {
        return (t.maxX - t.minX) * (t.maxY - t.minY);
      }

      function l(t) {
        return t.maxX - t.minX + (t.maxY - t.minY);
      }

      function m(t, i) {
        return t.minX <= i.minX && t.minY <= i.minY && i.maxX <= t.maxX && i.maxY <= t.maxY;
      }

      function c(t, i) {
        return i.minX <= t.maxX && i.minY <= t.maxY && i.maxX >= t.minX && i.maxY >= t.minY;
      }

      function u(t) {
        return {
          children: t,
          height: 1,
          leaf: !0,
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0
        };
      }

      function f(i, n, h, a, r) {
        for (var e, o = [n, h]; o.length;) {
          (h = o.pop()) - (n = o.pop()) <= a || (e = n + Math.ceil((h - n) / a / 2) * a, Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_0__["q"])(i, e, n, h, r), o.push(n, e, e, h));
        }
      }

      i.prototype = {
        all: function all() {
          return this._all(this.data, []);
        },
        search: function search(t) {
          var i = this.data,
              n = [],
              h = this.toBBox;
          if (!c(t, i)) return n;

          for (var a, r, e, o, s = []; i;) {
            for (a = 0, r = i.children.length; a < r; a++) {
              e = i.children[a], c(t, o = i.leaf ? h(e) : e) && (i.leaf ? n.push(e) : m(t, o) ? this._all(e, n) : s.push(e));
            }

            i = s.pop();
          }

          return n;
        },
        collides: function collides(t) {
          var i = this.data,
              n = this.toBBox;
          if (!c(t, i)) return !1;

          for (var h, a, r, e, o = []; i;) {
            for (h = 0, a = i.children.length; h < a; h++) {
              if (r = i.children[h], c(t, e = i.leaf ? n(r) : r)) {
                if (i.leaf || m(t, e)) return !0;
                o.push(r);
              }
            }

            i = o.pop();
          }

          return !1;
        },
        load: function load(t) {
          if (!t || !t.length) return this;

          if (t.length < this._minEntries) {
            for (var i = 0, n = t.length; i < n; i++) {
              this.insert(t[i]);
            }

            return this;
          }

          var h = this._build(t.slice(), 0, t.length - 1, 0);

          if (this.data.children.length) {
            if (this.data.height === h.height) this._splitRoot(this.data, h);else {
              if (this.data.height < h.height) {
                var a = this.data;
                this.data = h, h = a;
              }

              this._insert(h, this.data.height - h.height - 1, !0);
            }
          } else this.data = h;
          return this;
        },
        insert: function insert(t) {
          return t && this._insert(t, this.data.height - 1), this;
        },
        clear: function clear() {
          return this.data = u([]), this;
        },
        remove: function remove(t, i) {
          if (!t) return this;

          for (var h, a, r, e, o = this.data, s = this.toBBox(t), l = [], c = []; o || l.length;) {
            if (o || (o = l.pop(), a = l[l.length - 1], h = c.pop(), e = !0), o.leaf && -1 !== (r = n(t, o.children, i))) return o.children.splice(r, 1), l.push(o), this._condense(l), this;
            e || o.leaf || !m(o, s) ? a ? (h++, o = a.children[h], e = !1) : o = null : (l.push(o), c.push(h), h = 0, a = o, o = o.children[0]);
          }

          return this;
        },
        toBBox: function toBBox(t) {
          return t;
        },
        compareMinX: e,
        compareMinY: o,
        toJSON: function toJSON() {
          return this.data;
        },
        fromJSON: function fromJSON(t) {
          return this.data = t, this;
        },
        _all: function _all(t, i) {
          for (var n = []; t;) {
            t.leaf ? i.push.apply(i, t.children) : n.push.apply(n, t.children), t = n.pop();
          }

          return i;
        },
        _build: function _build(t, i, n, a) {
          var r,
              e = n - i + 1,
              o = this._maxEntries;
          if (e <= o) return h(r = u(t.slice(i, n + 1)), this.toBBox), r;
          a || (a = Math.ceil(Math.log(e) / Math.log(o)), o = Math.ceil(e / Math.pow(o, a - 1))), (r = u([])).leaf = !1, r.height = a;
          var s,
              l,
              m,
              c,
              x = Math.ceil(e / o),
              d = x * Math.ceil(Math.sqrt(o));

          for (f(t, i, n, d, this.compareMinX), s = i; s <= n; s += d) {
            for (f(t, s, m = Math.min(s + d - 1, n), x, this.compareMinY), l = s; l <= m; l += x) {
              c = Math.min(l + x - 1, m), r.children.push(this._build(t, l, c, a - 1));
            }
          }

          return h(r, this.toBBox), r;
        },
        _chooseSubtree: function _chooseSubtree(t, i, n, h) {
          for (var a, r, e, o, l, m, c, u, f, x; h.push(i), !i.leaf && h.length - 1 !== n;) {
            for (c = u = 1 / 0, a = 0, r = i.children.length; a < r; a++) {
              l = s(e = i.children[a]), f = t, x = e, (m = (Math.max(x.maxX, f.maxX) - Math.min(x.minX, f.minX)) * (Math.max(x.maxY, f.maxY) - Math.min(x.minY, f.minY)) - l) < u ? (u = m, c = l < c ? l : c, o = e) : m === u && l < c && (c = l, o = e);
            }

            i = o || i.children[0];
          }

          return i;
        },
        _insert: function _insert(t, i, n) {
          var h = this.toBBox,
              a = n ? t : h(t),
              e = [],
              o = this._chooseSubtree(a, this.data, i, e);

          for (o.children.push(t), r(o, a); i >= 0 && e[i].children.length > this._maxEntries;) {
            this._split(e, i), i--;
          }

          this._adjustParentBBoxes(a, e, i);
        },
        _split: function _split(t, i) {
          var n = t[i],
              a = n.children.length,
              r = this._minEntries;

          this._chooseSplitAxis(n, r, a);

          var e = this._chooseSplitIndex(n, r, a),
              o = u(n.children.splice(e, n.children.length - e));

          o.height = n.height, o.leaf = n.leaf, h(n, this.toBBox), h(o, this.toBBox), i ? t[i - 1].children.push(o) : this._splitRoot(n, o);
        },
        _splitRoot: function _splitRoot(t, i) {
          this.data = u([t, i]), this.data.height = t.height + 1, this.data.leaf = !1, h(this.data, this.toBBox);
        },
        _chooseSplitIndex: function _chooseSplitIndex(t, i, n) {
          var h, r, e, o, l, m, c, u, f, x, d, p, M, X;

          for (m = c = 1 / 0, h = i; h <= n - i; h++) {
            r = a(t, 0, h, this.toBBox), e = a(t, h, n, this.toBBox), f = r, x = e, d = void 0, p = void 0, M = void 0, X = void 0, d = Math.max(f.minX, x.minX), p = Math.max(f.minY, x.minY), M = Math.min(f.maxX, x.maxX), X = Math.min(f.maxY, x.maxY), o = Math.max(0, M - d) * Math.max(0, X - p), l = s(r) + s(e), o < m ? (m = o, u = h, c = l < c ? l : c) : o === m && l < c && (c = l, u = h);
          }

          return u;
        },
        _chooseSplitAxis: function _chooseSplitAxis(t, i, n) {
          var h = t.leaf ? this.compareMinX : e,
              a = t.leaf ? this.compareMinY : o;
          this._allDistMargin(t, i, n, h) < this._allDistMargin(t, i, n, a) && t.children.sort(h);
        },
        _allDistMargin: function _allDistMargin(t, i, n, h) {
          t.children.sort(h);
          var e,
              o,
              s = this.toBBox,
              m = a(t, 0, i, s),
              c = a(t, n - i, n, s),
              u = l(m) + l(c);

          for (e = i; e < n - i; e++) {
            o = t.children[e], r(m, t.leaf ? s(o) : o), u += l(m);
          }

          for (e = n - i - 1; e >= i; e--) {
            o = t.children[e], r(c, t.leaf ? s(o) : o), u += l(c);
          }

          return u;
        },
        _adjustParentBBoxes: function _adjustParentBBoxes(t, i, n) {
          for (var h = n; h >= 0; h--) {
            r(i[h], t);
          }
        },
        _condense: function _condense(t) {
          for (var i, n = t.length - 1; n >= 0; n--) {
            0 === t[n].children.length ? n > 0 ? (i = t[n - 1].children).splice(i.indexOf(t[n]), 1) : this.clear() : h(t[n], this.toBBox);
          }
        },
        _initFormat: function _initFormat(t) {
          var i = ["return a", " - b", ";"];
          this.compareMinX = new Function("a", "b", i.join(t[0])), this.compareMinY = new Function("a", "b", i.join(t[1])), this.toBBox = new Function("a", "return {minX: a" + t[0] + ", minY: a" + t[1] + ", maxX: a" + t[2] + ", maxY: a" + t[3] + "};");
        }
      };
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~3d02fa00-es5.js.map