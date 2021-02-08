(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~ImageryTileLayer-js~layers-ImageryTileLayerView2D-js"], {
    /***/
    "IYxN":
    /*!**********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/RawBlockCache.js ***!
      \**********************************************************************************/

    /*! exports provided: decreaseRefCount, deleteBlock, deleteRaster, getBlock, getRasterId, putBlock, register, unregister, update */

    /***/
    function IYxN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decreaseRefCount", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBlock", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteRaster", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBlock", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRasterId", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "putBlock", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "register", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unregister", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "update", function () {
        return y;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./EphemeralBlockCache.js */
      "vbno");
      /* harmony import */


      var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../rasterFunctions/rasterProjectionHelper.js */
      "tODX");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var c = new Map(),
          a = new _EphemeralBlockCache_js__WEBPACK_IMPORTED_MODULE_3__["default"]();

      function i(e, t) {
        return null == t ? e : "".concat(e, "?sliceId=").concat(t);
      }

      function s(e, t) {
        var n = {
          extent: null,
          rasterInfo: t,
          cache: new Map()
        };

        if (c.has(e)) {
          var _t = c.get(e);

          return _t.push(n), _t.length - 1;
        }

        return c.set(e, [n]), 0;
      }

      function u(e, t) {
        if (c.has(e)) {
          c.get(e)[t] = null;
        }
      }

      function f(e) {
        c["delete"](e);
      }

      function h(e, t, n) {
        if (!c.has(e)) return null == t ? a.decreaseRefCount(e, n) : 0;
        var o = c.get(e);
        if (null == o[t]) return a.decreaseRefCount(e, n);
        var r = o[t].cache;

        if (r.has(n)) {
          var _e = r.get(n);

          if (_e.refCount--, 0 === _e.refCount) {
            r["delete"](n);

            for (var _e2 = 0; _e2 < o.length; _e2++) {
              o[_e2] && o[_e2].cache.has(n) && o[_e2].cache["delete"](n);
            }

            _e.controller && _e.controller.abort();
          }

          return _e.refCount;
        }

        return 0;
      }

      function m(e, t, n) {
        if (!c.has(e)) return null == t ? a.getBlock(e, n) : null;
        var o = c.get(e);

        if (null == o[t]) {
          for (var _e3 = 0; _e3 < o.length; _e3++) {
            if (o[_e3] && o[_e3].cache.has(n)) {
              var _t2 = o[_e3].cache.get(n);

              return _t2.refCount++, _t2.block;
            }
          }

          return a.getBlock(e, n);
        }

        var r = o[t].cache;

        if (r.has(n)) {
          var _e4 = r.get(n);

          return _e4.refCount++, _e4.block;
        }

        for (var _e5 = 0; _e5 < o.length; _e5++) {
          if (_e5 !== t && o[_e5] && o[_e5] && o[_e5].cache.has(n)) {
            var _t3 = o[_e5].cache.get(n);

            return _t3.refCount++, r.set(n, _t3), _t3.block;
          }
        }

        return null;
      }

      function x(e, t, n, o) {
        var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        if (!c.has(e)) return void (null == t && a.putBlock(e, n, o, r));
        var l = c.get(e);
        if (null == l[t]) return void a.putBlock(e, n, o, r);
        var i = {
          refCount: 1,
          block: o,
          isResolved: !1,
          isRejected: !1,
          controller: r
        };
        o.then(function () {
          return i.isResolved = !0;
        })["catch"](function () {
          return i.isRejected = !0;
        }), l[t].cache.set(n, i);
      }

      function d(e, t, n) {
        if (!c.has(e)) return void (null == t && a.deleteBlock(e, n));
        var o = c.get(e);
        null != o[t] ? o[t].cache["delete"](n) : a.deleteBlock(e, n);
      }

      function y(n, a, i, s, u, f) {
        var h = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;

        var m = function (e, t) {
          if (!c.has(e)) return null;
          var n = c.get(e);
          return null == n[t] ? null : n[t];
        }(n, a),
            x = m.extent,
            d = m.cache,
            y = m.rasterInfo;

        if (x && x.xmin === i.xmin && x.xmax === i.xmax && x.ymin === i.ymin && x.ymax === i.ymax) return;
        var g = i.clone().normalize(),
            p = y.spatialReference,
            k = y.transform,
            M = new Set();

        for (var _n = 0; _n < g.length; _n++) {
          var _c = g[_n];
          if (_c.xmax - _c.xmin <= s || _c.ymax - _c.ymin <= s) continue;

          var _a = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__["projectExtent"])(_c, p, h);

          Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(k) && (_a = k.inverseTransform(_a));

          var _i = new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            x: s,
            y: s,
            spatialReference: _c.spatialReference
          });

          if (null === u && !(u = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__["projectResolution"])(_i, p, _c, h))) return;

          var _Object = Object(_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_4__["snapPyramid"])(u, y, f || "closest"),
              _m = _Object.pyramidLevel,
              _x = _Object.pyramidResolution,
              _d = _Object.excessiveReading;

          if (_d) return;
          var R = y.storageInfo,
              C = R.origin,
              j = {
            x: Math.max(0, Math.floor((_a.xmin - C.x) / _x.x)),
            y: Math.max(0, Math.floor((C.y - _a.ymax) / _x.y))
          },
              v = Math.ceil((_a.xmax - _a.xmin) / _x.x - .1),
              B = Math.ceil((_a.ymax - _a.ymin) / _x.y - .1),
              b = _m > 0 ? R.pyramidBlockWidth : R.blockWidth,
              w = _m > 0 ? R.pyramidBlockHeight : R.blockHeight,
              $ = 1,
              I = Math.max(0, Math.floor(j.x / b) - $),
              H = Math.max(0, Math.floor(j.y / w) - $),
              E = Math.floor((j.x + v - 1) / b) + $,
              P = Math.floor((j.y + B - 1) / w) + $;

          for (var e = H; e <= P; e++) {
            for (var t = I; t <= E; t++) {
              M.add("".concat(_m, "/").concat(e, "/").concat(t));
            }
          }
        }

        d.forEach(function (e, t) {
          if (!M.has(t)) {
            var _e6 = d.get(t);

            (null == _e6 || _e6.isResolved || _e6.isRejected) && d["delete"](t);
          }
        }), m.extent = {
          xmin: i.xmin,
          ymin: i.ymin,
          xmax: i.xmax,
          ymax: i.ymax
        };
      }
      /***/

    },

    /***/
    "tODX":
    /*!********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js ***!
      \********************************************************************************************/

    /*! exports provided: computeProjectedScales, defaultGridSpacing, getProjectionOffsetGrid, load, projectExtent, projectPoint, projectResolution, snapPyramid */

    /***/
    function tODX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeProjectedScales", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultGridSpacing", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getProjectionOffsetGrid", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "load", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "projectExtent", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "projectPoint", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "projectResolution", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "snapPyramid", function () {
        return w;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../geometry/Point.js */
      "SuVq");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../geometry/projection.js */
      "gYg2");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var x = function x(e, n) {
        var t = (e.isWGS84 || e.isWebMercator) && (n.isWGS84 || n.isWebMercator);
        return !(e.equals(n) || t);
      },
          m = 32;

      function u() {
        return _u.apply(this, arguments);
      }

      function _u() {
        _u = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])() || !Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isSupported"])())) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", null);

                case 2:
                  _context.next = 4;
                  return Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["load"])();

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _u.apply(this, arguments);
      }

      function p(n, o, r) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        if (n.spatialReference.equals(o)) return n;
        var l = x(n.spatialReference, o);
        if (l && !Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
        var m = r.center,
            u = new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
          xmin: m.x - n.x / 2,
          xmax: m.x + n.x / 2,
          ymin: m.y - n.y / 2,
          ymax: m.y + n.y / 2,
          spatialReference: n.spatialReference
        }),
            p = l ? Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["project"])(u, o, s) : Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["project"])(u, o);
        if (null == p) return null;
        return {
          x: p.xmax - p.xmin,
          y: p.ymax - p.ymin
        };
      }

      function f(e) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .01;
        return Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__["getMetersPerUnitForSR"])(e) ? n / Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__["getMetersPerUnitForSR"])(e) : 0;
      }

      function h(o, i) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var l = o.spatialReference;
        if (l.equals(i)) return o;
        var m = x(l, i);
        if (m && !Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
        var u = m ? Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["project"])(o, i, r) : Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["project"])(o, i);

        if (u && s && i.isGeographic) {
          var p, h;

          var _ref = l.isWebMercator ? Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(l).origin : null != (p = null == (h = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(l)) ? void 0 : h.valid) ? p : [],
              _ref2 = _slicedToArray(_ref, 2),
              e = _ref2[0],
              t = _ref2[1],
              _i2 = f(l);

          _i2 && null != e && null != t && (Math.abs(o.x - e) < _i2 && Math.abs(180 - u.x) < 5e-4 ? u.x -= 360 : Math.abs(o.x - t) < _i2 && Math.abs(180 + u.x) < 5e-4 && (u.x += 360));
        }

        return u;
      }

      function y(i, r) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var l = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var m, u, p, y;
        var M = i.spatialReference;
        if (M.equals(r)) return i;
        var w = x(M, r);
        if (w && !Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterprojectionhelper-projectExtent", "projection engine is not loaded");
        var d = w ? Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["project"])(i, r, s) : Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__["project"])(i, r);

        var _ref3 = null != (m = null == (u = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(M)) ? void 0 : u.origin) ? m : [],
            _ref4 = _slicedToArray(_ref3, 2),
            g = _ref4[0],
            j = _ref4[1];

        if (d && l && M.isWebMercator && r.isGeographic && null != g && null != j) {
          var e = .001,
              n = 1e3;

          if (Math.abs(i.xmin - g) < e && Math.abs(j - i.xmax) > n && Math.abs(180 - d.xmax) < 5e-4) {
            d.xmin = -180;
            var _e7 = [];
            _e7.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmax, i.ymin, M)), _e7.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmax, (i.ymin + i.ymax) / 2, M)), _e7.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmax, i.ymax, M));

            var _n2 = _e7.map(function (e) {
              return h(e, r, s);
            }).filter(function (e) {
              return !isNaN(null == e ? void 0 : e.x);
            }).map(function (e) {
              return e.x;
            });

            d.xmax = Math.max.apply(null, _n2);
          }

          if (Math.abs(i.xmax - j) < e && Math.abs(g - i.xmin) > n && Math.abs(180 + d.xmin) < 5e-4) {
            d.xmax = 180;
            var _e8 = [];
            _e8.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmin, i.ymin, M)), _e8.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmin, (i.ymin + i.ymax) / 2, M)), _e8.push(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"](i.xmin, i.ymax, M));

            var _n3 = _e8.map(function (e) {
              return h(e, r, s);
            }).filter(function (e) {
              return !isNaN(null == e ? void 0 : e.x);
            }).map(function (e) {
              return e.x;
            });

            d.xmin = Math.min.apply(null, _n3);
          }
        }

        var _ref5 = r.isWebMercator ? Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(r).origin : null != (p = null == (y = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(r)) ? void 0 : y.valid) ? p : [];

        var _ref6 = _slicedToArray(_ref5, 2);

        g = _ref6[0];
        j = _ref6[1];
        var R = f(r);
        return R && null != g && null != j && (Math.abs(d.xmin - g) < R && (d.xmin = g), Math.abs(d.xmax - j) < R && (d.xmax = j)), d;
      }

      function M(t, i, r) {
        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var l = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var c = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : !1;
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [32, 32];
        var u, p;
        if (x(t.spatialReference, i.spatialReference) && !Object(_geometry_projection_js__WEBPACK_IMPORTED_MODULE_7__["isLoaded"])()) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("rasterprojectionhelper-projectResolution", "projection engine is not loaded");
        if (!(t && i && r)) return null;

        var f = t.xmin,
            y = t.ymin,
            M = t.xmax,
            w = t.ymax,
            d = t.spatialReference,
            g = i.spatialReference,
            _ref7 = null != (u = null == (p = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__["getInfo"])(d)) ? void 0 : p.valid) ? u : [],
            _ref8 = _slicedToArray(_ref7, 2),
            j = _ref8[0],
            R = _ref8[1],
            b = {
          x: m[0] * r.x,
          y: m[1] * r.y
        },
            v = {
          cols: Math.ceil((M - f) / b.x - .1) + 1,
          rows: Math.ceil((w - y) / b.y - .1) + 1
        },
            N = b.x,
            S = b.y,
            z = [];

        var W,
            G = !1;

        for (var e = 0; e < v.cols; e++) {
          var n = [];

          for (var _t4 = 0; _t4 < v.rows; _t4++) {
            var _r = h(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
              x: f + N * e,
              y: w - S * _t4,
              spatialReference: d
            }), g, s);

            l && (_r = l.inverseTransform(_r)), n.push(_r), e > 0 && c && _r && W[_t4] && null != j && _r.x < W[_t4].x && (_r.x += R - j), _r ? (z.push((_r.x - i.xmin) / (i.xmax - i.xmin)), z.push((i.ymax - _r.y) / (i.ymax - i.ymin))) : (z.push(NaN), z.push(NaN), G = !0);
          }

          W = n;
        }

        var P = function (e, n) {
          var t = (e[0] + e[4] + e[4 * n.cols] + e[4 * n.cols + 4]) / 4,
              o = (e[1] + e[5] + e[4 * n.rows + 1] + e[4 * n.rows + 5]) / 4;
          return [Math.abs(t - e[2 * n.rows + 2]), Math.abs(o - e[2 * n.rows + 3])];
        }(z, v),
            L = new Float32Array((v.cols - 1) * (v.rows - 1) * 2 * 6),
            q = new Float32Array([-0, -1, 1, -1, 1, -0, 1, -0, -0]),
            A = new Float32Array([-1, 1, 0, 0, -1, 1, 1, 0, 0]);

        for (var _e9 = 0; _e9 < v.cols - 1; _e9++) {
          for (var _n4 = 0; _n4 < v.rows - 1; _n4++) {
            var _t5 = _e9 * v.rows * 2 + 2 * _n4;

            var o = z[_t5],
                _i3 = z[_t5 + 1],
                _r2 = z[_t5 + 2],
                a = z[_t5 + 3];
            _t5 += 2 * v.rows;
            var _s2 = z[_t5],
                _l = z[_t5 + 1],
                _c2 = z[_t5 + 2],
                _x2 = z[_t5 + 3];

            var _m2 = 0,
                _u2 = 12 * (_n4 * (v.cols - 1) + _e9);

            for (var _e10 = 0; _e10 < 3; _e10++) {
              L[_u2++] = q[_m2++] * o + q[_m2++] * _r2 + q[_m2++] * _c2;
            }

            _m2 = 0;

            for (var _e11 = 0; _e11 < 3; _e11++) {
              L[_u2++] = q[_m2++] * _i3 + q[_m2++] * a + q[_m2++] * _x2;
            }

            _m2 = 0;

            for (var _e12 = 0; _e12 < 3; _e12++) {
              L[_u2++] = A[_m2++] * o + A[_m2++] * _s2 + A[_m2++] * _c2;
            }

            _m2 = 0;

            for (var _e13 = 0; _e13 < 3; _e13++) {
              L[_u2++] = A[_m2++] * _i3 + A[_m2++] * _l + A[_m2++] * _x2;
            }
          }

          if (G) for (var _e14 = 0; _e14 < L.length; _e14++) {
            isNaN(L[_e14]) && (L[_e14] = -1);
          }
        }

        return {
          offsets: z,
          error: P,
          coefficients: L,
          spacing: m,
          size: [v.cols - 1, v.rows - 1]
        };
      }

      function w(e, n, t) {
        var i = Math.log(e.x / n.pixelSize.x) / Math.LN2,
            r = Math.log(e.y / n.pixelSize.y) / Math.LN2,
            a = n.storageInfo.maximumPyramidLevel || 0;
        var s = "down" === t ? Math.floor(Math.min(i, r)) : "up" === t ? Math.ceil(Math.max(i, r)) : Math.round((i + r) / 2),
            l = !1;
        s < 0 ? s = 0 : s > a && (l = s > a + 3, s = a);
        var c = Math.pow(2, s);
        return {
          pyramidLevel: s,
          pyramidResolution: new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            x: c * n.nativePixelSize.x,
            y: c * n.nativePixelSize.y,
            spatialReference: n.spatialReference
          }),
          excessiveReading: l
        };
      }

      function d(e, n) {
        var t = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 512;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : !0;
        var a = e.extent,
            s = e.spatialReference,
            l = e.pixelSize,
            c = p(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
          x: l.x,
          y: l.y,
          spatialReference: s
        }), n, a);
        if (null == c) return {
          projectedPixelSize: null,
          scales: null,
          srcResolutions: null
        };
        var x = (c.x + c.y) / 2,
            m = Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_6__["getMetersPerUnitForSR"])(n),
            u = x * m * 96 * 39.37,
            f = n.isGeographic ? 512 / t * 295828763.7958547 : 512 / t * 591657527.591555;
        var h = !1;

        if (i && (n.isGeographic || n.isWebMercator)) {
          var _e15 = y(a, n);

          h = _e15.xmin * _e15.xmax < 0;
        }

        var M,
            w = u;
        var d = 1.001;

        if (h) {
          w = f;

          var _e16 = w / (96 * m * 39.37);

          M = p(new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
            x: _e16,
            y: _e16,
            spatialReference: n
          }), s, a);
        } else {
          M = {
            x: l.x,
            y: l.y
          };

          var _n5 = Math.ceil(Math.log(Math.min(e.width, e.height) / 32) / Math.LN2);

          var _t6 = 0;

          for (; w < .5005 * f && _t6 < _n5;) {
            _t6++, w *= 2, M.x *= 2, M.y *= 2;
          }

          Math.max(w, f) / Math.min(w, f) <= d && (w = f);
        }

        var g = [],
            j = [],
            R = Math.min(70.5310735, u) / d;

        for (; w >= R;) {
          g.push(w), j.push({
            x: M.x,
            y: M.y
          }), w /= 2, M.x /= 2, M.y /= 2;
        }

        return {
          projectedPixelSize: c,
          scales: g,
          srcResolutions: j
        };
      }
      /***/

    },

    /***/
    "vbno":
    /*!****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/support/rasterDatasets/EphemeralBlockCache.js ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function vbno(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15e3;
          var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5e3;

          _classCallCheck(this, _class);

          this._timer = null, this._cachedBlocks = new Map(), this._size = -1, this._duration = t, this._interval = Math.min(t, e);
        }

        _createClass(_class, [{
          key: "decreaseRefCount",
          value: function decreaseRefCount(t, e) {
            var s = t + "/" + e,
                r = this._cachedBlocks;

            if (r.has(s)) {
              var _t7 = r.get(s);

              return _t7.refCount--, _t7.refCount <= 0 && (r["delete"](s), _t7.controller && _t7.controller.abort()), _t7.refCount;
            }

            return 0;
          }
        }, {
          key: "getBlock",
          value: function getBlock(t, e) {
            var s = t + "/" + e,
                r = this._cachedBlocks;

            if (r.has(s)) {
              var _t8 = r.get(s);

              return _t8.ts = Date.now(), _t8.refCount++, r["delete"](s), r.set(s, _t8), _t8.block;
            }

            return null;
          }
        }, {
          key: "putBlock",
          value: function putBlock(t, e, s) {
            var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
            var i = this._cachedBlocks,
                c = t + "/" + e;

            if (i.has(c)) {
              var _t9 = i.get(c);

              _t9.ts = Date.now(), _t9.refCount++;
            } else i.set(c, {
              block: s,
              ts: Date.now(),
              refCount: 1,
              controller: r
            });

            this.trim(), this.updateTimer();
          }
        }, {
          key: "deleteBlock",
          value: function deleteBlock(t, e) {
            var s = this._cachedBlocks,
                r = t + "/" + e;
            s.has(r) && s["delete"](r);
          }
        }, {
          key: "updateMaxSize",
          value: function updateMaxSize(t) {
            this._size = t, this.trim();
          }
        }, {
          key: "empty",
          value: function empty() {
            this._cachedBlocks.clear(), this.clearTimer();
          }
        }, {
          key: "getCurrentSize",
          value: function getCurrentSize() {
            return this._cachedBlocks.size;
          }
        }, {
          key: "updateTimer",
          value: function updateTimer() {
            var _this = this;

            if (null != this._timer) return;
            var t = this._cachedBlocks;
            this._timer = setInterval(function () {
              var e = Array.from(t),
                  s = Date.now();

              for (var r = 0; r < e.length && e[r][1].ts <= s - _this._duration; r++) {
                t["delete"](e[r][0]);
              }

              0 === t.size && _this.clearTimer();
            }, this._interval);
          }
        }, {
          key: "trim",
          value: function trim() {
            var t = this._cachedBlocks;
            if (-1 === this._size || this._size >= t.size) return;
            var e = Array.from(t);

            for (var s = 0; s < e.length - this._size; s++) {
              t["delete"](e[s][0]);
            }
          }
        }, {
          key: "clearTimer",
          value: function clearTimer() {
            null != this._timer && (clearInterval(this._timer), this._timer = null);
          }
        }]);

        return _class;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~ImageryTileLayer-js~layers-ImageryTileLayerView2D-js-es5.js.map