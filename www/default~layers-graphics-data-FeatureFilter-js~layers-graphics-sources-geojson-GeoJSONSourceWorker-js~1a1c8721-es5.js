(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layers-graphics-data-FeatureFilter-js~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~1a1c8721"], {
    /***/
    "1Rg/":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/chunks/spatialQuerySupport.js ***!
      \*****************************************************************/

    /*! exports provided: Q, a, b, c, d, e, f, g, h, i, j, n, t */

    /***/
    function Rg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Q", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return te;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return ee;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "f", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "i", function () {
        return L;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "j", function () {
        return X;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "n", function () {
        return W;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "t", function () {
        return Z;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/jsonMap.js */
      "+opI");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../geometry/support/contains.js */
      "IXLn");
      /* harmony import */


      var _geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../geometry/support/intersects.js */
      "PNY3");
      /* harmony import */


      var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../geometry/support/extentUtils.js */
      "+NQI");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../core/unitUtils.js */
      "gEht");
      /* harmony import */


      var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../geometry/support/normalizeUtils.js */
      "qNUd");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../layers/graphics/centroid.js */
      "2X7Z");
      /* harmony import */


      var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../layers/graphics/data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../layers/graphics/contains.js */
      "Uz7T");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var E = new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__["JSONMap"]({
        esriSRUnit_Meter: "meters",
        esriSRUnit_Kilometer: "kilometers",
        esriSRUnit_Foot: "feet",
        esriSRUnit_StatuteMile: "miles",
        esriSRUnit_NauticalMile: "nautical-miles",
        esriSRUnit_USNauticalMile: "us-nautical-miles"
      }),
          N = Object.freeze({}),
          _ = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
          b = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
          x = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](),
          J = {
        esriGeometryPoint: _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"],
        esriGeometryPolyline: _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPolyline"],
        esriGeometryPolygon: _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPolygon"],
        esriGeometryMultipoint: _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToMultipoint"]
      };

      function Z(e, t, r) {
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : e.hasZ;
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : e.hasM;
        var n = e.hasZ && i,
            o = e.hasM && s;

        if (r) {
          var a = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x, t, e.hasZ, e.hasM, "esriGeometryPoint", r, i, s);
          return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"])(a, n, o);
        }

        return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToPoint"])(t, n, o);
      }

      function z(e, t, r) {
        return "esriGeometryPolygon" === e.geometryType && t && (t.centroid || t.geometry) ? (t.centroid || (t.centroid = Object(_layers_graphics_centroid_js__WEBPACK_IMPORTED_MODULE_13__["getCentroidOptimizedGeometry"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](), t.geometry, e.hasZ, e.hasM)), Z(e, t.centroid, r)) : null;
      }

      function B(e, t, r, i, s, n) {
        var o = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : t;
        var a = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : r;
        var l = t && o,
            p = r && a,
            u = i ? "coords" in i ? i : i.geometry : null;
        if (!u) return null;

        if (s) {
          var _i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["generalizeOptimizedGeometry"])(b, u, t, r, e, s, o, a);

          return n && (_i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x, _i, l, p, e, n)), J[e](_i, l, p);
        }

        if (n) {
          var _i2 = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["quantizeOptimizedGeometry"])(x, u, t, r, e, n, o, a);

          return J[e](_i2, l, p);
        }

        return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["removeZMValues"])(_, u, t, r, o, a), J[e](_, l, p);
      }

      function T(_x, _x2, _x3) {
        return _T.apply(this, arguments);
      }

      function _T() {
        _T = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, t, r) {
          var i, s, n, o, _e3, _e4, _e5, _e6;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  i = e.outFields, s = e.orderByFields, n = e.groupByFieldsForStatistics, o = e.outStatistics;
                  if (i) for (_e3 = 0; _e3 < i.length; _e3++) {
                    i[_e3] = i[_e3].trim();
                  }
                  if (s) for (_e4 = 0; _e4 < s.length; _e4++) {
                    s[_e4] = s[_e4].trim();
                  }
                  if (n) for (_e5 = 0; _e5 < n.length; _e5++) {
                    n[_e5] = n[_e5].trim();
                  }
                  if (o) for (_e6 = 0; _e6 < o.length; _e6++) {
                    o[_e6].onStatisticField && (o[_e6].onStatisticField = o[_e6].onStatisticField.trim());
                  }
                  return _context.abrupt("return", (e.geometry && !e.outSR && (e.outSR = e.geometry.spatialReference), W(e, t, r)));

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _T.apply(this, arguments);
      }

      function D(_x4, _x5, _x6) {
        return _D.apply(this, arguments);
      }

      function _D() {
        _D = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, t, r) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", W(e, t, r));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _D.apply(this, arguments);
      }

      function W(_x7, _x8, _x9) {
        return _W.apply(this, arguments);
      }

      function _W() {
        _W = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(t, r, i) {
          var a, l, e, p, u, f;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (t) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", null);

                case 2:
                  a = t.where;

                  if (!(t.where = a = a && a.trim(), (!a || /^1 *= *1$/.test(a) || r && r === a) && (t.where = null), !t.geometry)) {
                    _context4.next = 5;
                    break;
                  }

                  return _context4.abrupt("return", t);

                case 5:
                  _context4.next = 7;
                  return function () {
                    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
                      var t, r, i, a, l, p;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              t = e.geometry, r = e.distance, i = e.units;

                              if (!(null == r || "vertexAttributes" in t)) {
                                _context3.next = 3;
                                break;
                              }

                              return _context3.abrupt("return", t);

                            case 3:
                              a = t.spatialReference;
                              l = i ? E.fromJSON(i) : Object(_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_9__["getUnitString"])(a);

                              if (!(a && (Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isGeographic"])(a) || Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isWebMercator"])(a)))) {
                                _context3.next = 9;
                                break;
                              }

                              _context3.t0 = t;
                              _context3.next = 12;
                              break;

                            case 9:
                              _context3.next = 11;
                              return Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(a, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"]).then(function () {
                                return Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(t, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["WGS84"]);
                              });

                            case 11:
                              _context3.t0 = _context3.sent;

                            case 12:
                              p = _context3.t0;
                              _context3.next = 15;
                              return X();

                            case 15:
                              _context3.t1 = _context3.sent;
                              return _context3.abrupt("return", (0, _context3.t1)(p.spatialReference, p, r, l));

                            case 17:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function (_x13) {
                      return _ref.apply(this, arguments);
                    };
                  }()(t);

                case 7:
                  l = _context4.sent;

                  if (t.distance = 0, t.units = null, "esriSpatialRelEnvelopeIntersects" === t.spatialRel) {
                    e = t.geometry.spatialReference;
                    l = Object(_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_7__["getGeometryExtent"])(l), l.spatialReference = e;
                  }

                  t.geometry = l;
                  _context4.next = 12;
                  return Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(l.spatialReference, i);

                case 12:
                  _context4.next = 14;
                  return Object(_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_10__["normalizeCentralMeridian"])(Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["fromJSON"])(l));

                case 14:
                  p = _context4.sent[0];

                  if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(p)) {
                    _context4.next = 17;
                    break;
                  }

                  throw N;

                case 17:
                  u = p.toJSON();
                  _context4.next = 20;
                  return Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(u, u.spatialReference, i);

                case 20:
                  f = _context4.sent;

                  if (f) {
                    _context4.next = 23;
                    break;
                  }

                  throw N;

                case 23:
                  return _context4.abrupt("return", (f.spatialReference = i, t.geometry = f, t));

                case 24:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _W.apply(this, arguments);
      }

      function k(e) {
        return e && A in e ? JSON.parse(JSON.stringify(e, K)) : e;
      }

      var A = "_geVersion",
          K = function K(e, t) {
        return e !== A ? t : void 0;
      },
          Q = {
        esriSpatialRelIntersects: "intersects",
        esriSpatialRelContains: "contains",
        esriSpatialRelCrosses: "crosses",
        esriSpatialRelDisjoint: "disjoint",
        esriSpatialRelEnvelopeIntersects: "intersects",
        esriSpatialRelIndexIntersects: null,
        esriSpatialRelOverlaps: "overlaps",
        esriSpatialRelTouches: "touches",
        esriSpatialRelWithin: "within",
        esriSpatialRelRelation: null
      },
          V = {
        esriSpatialRelIntersects: !0,
        esriSpatialRelContains: !0,
        esriSpatialRelWithin: !0,
        esriSpatialRelCrosses: !0,
        esriSpatialRelDisjoint: !0,
        esriSpatialRelTouches: !0,
        esriSpatialRelOverlaps: !0,
        esriSpatialRelEnvelopeIntersects: !0,
        esriSpatialRelIndexIntersects: !1,
        esriSpatialRelRelation: !1
      },
          $ = {
        esriGeometryPoint: !0,
        esriGeometryMultipoint: !0,
        esriGeometryPolyline: !0,
        esriGeometryPolygon: !0,
        esriGeometryEnvelope: !0
      },
          H = {
        esriGeometryPoint: !0,
        esriGeometryMultipoint: !0,
        esriGeometryPolyline: !0,
        esriGeometryPolygon: !0,
        esriGeometryEnvelope: !1
      };

      function L() {
        return Promise.all(
        /*! import() | geometry-geometryEngineJSON-js */
        [__webpack_require__.e("default~chunks-geometryEngineBase-js~geometry-geometryEngine-js~geometry-geometryEngineJSON-js~geome~1472b8fb"), __webpack_require__.e("common"), __webpack_require__.e("geometry-geometryEngineJSON-js")]).then(__webpack_require__.bind(null,
        /*! ../geometry/geometryEngineJSON.js */
        "AKzY"));
      }

      function X() {
        return L().then(function (e) {
          return e.geodesicBuffer;
        });
      }

      function Y(e, t, r, s, n) {
        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(t) && "esriGeometryPoint" === r && ("esriSpatialRelIntersects" === e || "esriSpatialRelContains" === e)) {
          var _e = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertFromPolygon"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](), t, !1, !1);

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(function (t) {
            return Object(_layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__["polygonContainsPoint"])(_e, !1, !1, t);
          });
        }

        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(t) && "esriGeometryMultipoint" === r) {
          var _r = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertFromPolygon"])(new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_11__["default"](), t, !1, !1);

          if ("esriSpatialRelContains" === e) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(function (e) {
            return Object(_layers_graphics_contains_js__WEBPACK_IMPORTED_MODULE_15__["polygonContainsMultipoint"])(_r, !1, !1, e, s, n);
          });
        }

        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t) && "esriGeometryPoint" === r && ("esriSpatialRelIntersects" === e || "esriSpatialRelContains" === e)) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(function (e) {
          return Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__["extentContainsPoint"])(t, B(r, s, n, e));
        });
        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t) && "esriGeometryMultipoint" === r && "esriSpatialRelContains" === e) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(function (e) {
          return Object(_geometry_support_contains_js__WEBPACK_IMPORTED_MODULE_5__["extentContainsMultipoint"])(t, B(r, s, n, e));
        });

        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(t) && "esriSpatialRelIntersects" === e) {
          var _e2 = Object(_geometry_support_intersects_js__WEBPACK_IMPORTED_MODULE_6__["getExtentIntersector"])(r);

          return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__["resolve"])(function (i) {
            return _e2(t, B(r, s, n, i));
          });
        }

        return L().then(function (i) {
          var o = i[Q[e]].bind(null, t.spatialReference, t);
          return function (e) {
            return o(B(r, s, n, e));
          };
        });
      }

      function ee(_x10, _x11, _x12) {
        return _ee.apply(this, arguments);
      }

      function _ee() {
        _ee = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, t, i) {
          var s, n;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  s = e.spatialRel, n = e.geometry;

                  if (!n) {
                    _context5.next = 11;
                    break;
                  }

                  if (!(!0 !== V[s])) {
                    _context5.next = 4;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "Unsupported query spatial relationship", {
                    query: e
                  });

                case 4:
                  if (!(Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(n.spatialReference) && Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__["isValid"])(i))) {
                    _context5.next = 11;
                    break;
                  }

                  if (function (e) {
                    return !0 === $[Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["getJsonType"])(e)];
                  }(n)) {
                    _context5.next = 7;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "Unsupported query geometry type", {
                    query: e
                  });

                case 7:
                  if (function (e) {
                    return !0 === H[e];
                  }(t)) {
                    _context5.next = 9;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("feature-store:unsupported-query", "Unsupported layer geometry type", {
                    query: e
                  });

                case 9:
                  if (!e.outSR) {
                    _context5.next = 11;
                    break;
                  }

                  return _context5.abrupt("return", Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(e.geometry && e.geometry.spatialReference, e.outSR));

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));
        return _ee.apply(this, arguments);
      }

      function te(e) {
        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isExtent"])(e)) return !0;

        if (Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_8__["isPolygon"])(e)) {
          var _iterator = _createForOfIteratorHelper(e.rings),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var t = _step.value;
              if (5 !== t.length) return !1;
              if (t[0][0] !== t[1][0] || t[0][0] !== t[4][0] || t[2][0] !== t[3][0] || t[0][1] !== t[3][1] || t[0][1] !== t[4][1] || t[1][1] !== t[2][1]) return !1;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return !0;
        }

        return !1;
      }
      /***/

    },

    /***/
    "QmHG":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js ***!
      \*********************************************************************/

    /*! exports provided: NEGATIVE_INFINITY, POSITIVE_INFINITY, ZERO, allFinite, center, contains, containsPoint, containsPointWithMargin, create, depth, diameter, empty, equals, expandWithAABB, expandWithBuffer, expandWithNestedArray, expandWithOffset, expandWithRect, expandWithVec3, fromExtent, fromMinMax, fromRect, fromValues, getMax, getMin, height, intersects, intersectsClippingArea, is, isPoint, maximumDimension, offset, scale, set, setMax, setMin, size, toExtent, toRect, width, wrap */

    /***/
    function QmHG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NEGATIVE_INFINITY", function () {
        return C;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "POSITIVE_INFINITY", function () {
        return v;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZERO", function () {
        return D;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "allFinite", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "center", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contains", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containsPoint", function () {
        return z;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containsPointWithMargin", function () {
        return E;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "create", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "depth", function () {
        return I;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diameter", function () {
        return N;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "empty", function () {
        return A;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "equals", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithAABB", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithBuffer", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithNestedArray", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithOffset", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithRect", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "expandWithVec3", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromExtent", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromMinMax", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromRect", function () {
        return G;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "fromValues", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMax", function () {
        return _;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getMin", function () {
        return Y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "height", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersects", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "intersectsClippingArea", function () {
        return j;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "is", function () {
        return O;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isPoint", function () {
        return P;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "maximumDimension", function () {
        return F;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "offset", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "scale", function () {
        return V;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "set", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMax", function () {
        return q;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setMin", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "size", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toExtent", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "toRect", function () {
        return B;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "width", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "wrap", function () {
        return k;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _Extent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../Extent.js */
      "OvF4");
      /* harmony import */


      var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aaBoundingRect.js */
      "kYAx");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function i() {
        var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : D;
        return [n[0], n[1], n[2], n[3], n[4], n[5]];
      }

      function a(n, t, r, a, u, e) {
        var m = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : i();
        return m[0] = n, m[1] = t, m[2] = r, m[3] = a, m[4] = u, m[5] = e, m;
      }

      function u(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : i();
        return t[0] = n.xmin, t[1] = n.ymin, t[2] = n.zmin, t[3] = n.xmax, t[4] = n.ymax, t[5] = n.zmax, t;
      }

      function e(n, r) {
        var i = isFinite(n[2]) || isFinite(n[5]);
        return new _Extent_js__WEBPACK_IMPORTED_MODULE_1__["default"](i ? {
          xmin: n[0],
          xmax: n[3],
          ymin: n[1],
          ymax: n[4],
          zmin: n[2],
          zmax: n[5],
          spatialReference: r
        } : {
          xmin: n[0],
          xmax: n[3],
          ymin: n[1],
          ymax: n[4],
          spatialReference: r
        });
      }

      function m(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : i();
        return r[0] = n[0], r[1] = n[1], r[2] = n[2], r[3] = t[0], r[4] = t[1], r[5] = t[2], r;
      }

      function o(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[3]), n[4] = Math.max(n[4], t[4]), n[5] = Math.max(n[5], t[5]);
      }

      function f(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[3] = Math.max(n[3], t[2]), n[4] = Math.max(n[4], t[3]);
      }

      function h(n, t) {
        n[0] = Math.min(n[0], t[0]), n[1] = Math.min(n[1], t[1]), n[2] = Math.min(n[2], t[2]), n[3] = Math.max(n[3], t[0]), n[4] = Math.max(n[4], t[1]), n[5] = Math.max(n[5], t[2]);
      }

      function c(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : t.length / 3;
        var a = n[0],
            u = n[1],
            e = n[2],
            m = n[3],
            o = n[4],
            f = n[5];

        for (var _n = 0; _n < i; _n++) {
          a = Math.min(a, t[r + 3 * _n]), u = Math.min(u, t[r + 3 * _n + 1]), e = Math.min(e, t[r + 3 * _n + 2]), m = Math.max(m, t[r + 3 * _n]), o = Math.max(o, t[r + 3 * _n + 1]), f = Math.max(f, t[r + 3 * _n + 2]);
        }

        n[0] = a, n[1] = u, n[2] = e, n[3] = m, n[4] = o, n[5] = f;
      }

      function M(n, t, r, i) {
        n[0] = Math.min(n[0], n[0] + t), n[3] = Math.max(n[3], n[3] + t), n[1] = Math.min(n[1], n[1] + r), n[4] = Math.max(n[4], n[4] + r), n[2] = Math.min(n[2], n[2] + i), n[5] = Math.max(n[5], n[5] + i);
      }

      function x(n, t, r) {
        var i = t.length;
        var a = n[0],
            u = n[1],
            e = n[2],
            m = n[3],
            o = n[4],
            f = n[5];
        if (r) for (var _n2 = 0; _n2 < i; _n2++) {
          var _r2 = t[_n2];
          a = Math.min(a, _r2[0]), u = Math.min(u, _r2[1]), e = Math.min(e, _r2[2]), m = Math.max(m, _r2[0]), o = Math.max(o, _r2[1]), f = Math.max(f, _r2[2]);
        } else for (var _n3 = 0; _n3 < i; _n3++) {
          var _r3 = t[_n3];
          a = Math.min(a, _r3[0]), u = Math.min(u, _r3[1]), m = Math.max(m, _r3[0]), o = Math.max(o, _r3[1]);
        }
        n[0] = a, n[1] = u, n[2] = e, n[3] = m, n[4] = o, n[5] = f;
      }

      function s(n) {
        for (var t = 0; t < 6; t++) {
          if (!isFinite(n[t])) return !1;
        }

        return !0;
      }

      function l(n) {
        return n[0] >= n[3] ? 0 : n[3] - n[0];
      }

      function I(n) {
        return n[1] >= n[4] ? 0 : n[4] - n[1];
      }

      function y(n) {
        return n[2] >= n[5] ? 0 : n[5] - n[2];
      }

      function N(n) {
        var t = l(n),
            r = y(n),
            i = I(n);
        return Math.sqrt(t * t + r * r + i * i);
      }

      function g(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
        return t[0] = n[0] + l(n) / 2, t[1] = n[1] + I(n) / 2, t[2] = n[2] + y(n) / 2, t;
      }

      function p(n) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
        return t[0] = l(n), t[1] = I(n), t[2] = y(n), t;
      }

      function F(n) {
        return Math.max(l(n), y(n), I(n));
      }

      function z(n, t) {
        return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[0] <= n[3] && t[1] <= n[4] && t[2] <= n[5];
      }

      function E(n, t, r) {
        return t[0] >= n[0] - r && t[1] >= n[1] - r && t[2] >= n[2] - r && t[0] <= n[3] + r && t[1] <= n[4] + r && t[2] <= n[5] + r;
      }

      function T(n, t) {
        return t[0] >= n[0] && t[1] >= n[1] && t[2] >= n[2] && t[3] <= n[3] && t[4] <= n[4] && t[5] <= n[5];
      }

      function b(n, t) {
        return Math.max(t[0], n[0]) <= Math.min(t[3], n[3]) && Math.max(t[1], n[1]) <= Math.min(t[4], n[4]) && Math.max(t[2], n[2]) <= Math.min(t[5], n[5]);
      }

      function j(t, r) {
        return !!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r) || b(t, r);
      }

      function R(n, t, r, i) {
        var a = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : n;
        return a[0] = n[0] + t, a[1] = n[1] + r, a[2] = n[2] + i, a[3] = n[3] + t, a[4] = n[4] + r, a[5] = n[5] + i, a;
      }

      function V(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        var i = n[0] + l(n) / 2,
            a = n[1] + I(n) / 2,
            u = n[2] + y(n) / 2;
        return r[0] = i + (n[0] - i) * t, r[1] = a + (n[1] - a) * t, r[2] = u + (n[2] - u) * t, r[3] = i + (n[3] - i) * t, r[4] = a + (n[4] - a) * t, r[5] = u + (n[5] - u) * t, r;
      }

      function Y(n, t) {
        return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
      }

      function _(n, t) {
        return t[0] = n[3], t[1] = n[4], t[2] = n[5], t;
      }

      function d(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        return r[0] = t[0], r[1] = t[1], r[2] = t[2], r !== n && (r[3] = n[3], r[4] = n[4], r[5] = n[5]), r;
      }

      function q(n, t) {
        var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : n;
        return r[3] = t[0], r[4] = t[1], r[5] = t[2], r !== n && (r[0] = n[0], r[1] = n[1], r[2] = n[2]), n;
      }

      function w(n, t) {
        return n[0] = t[0], n[1] = t[1], n[2] = t[2], n[3] = t[3], n[4] = t[4], n[5] = t[5], n;
      }

      function A(n) {
        return n ? w(n, C) : i(C);
      }

      function B(n, t) {
        return t || (t = Object(_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__["create"])()), t[0] = n[0], t[1] = n[1], t[2] = n[3], t[3] = n[4], t;
      }

      function G(n, t) {
        return n[0] = t[0], n[1] = t[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t[2], n[4] = t[3], n[5] = Number.POSITIVE_INFINITY, n;
      }

      function O(n) {
        return 6 === n.length;
      }

      function P(n) {
        return 0 === l(n) && 0 === I(n) && 0 === y(n);
      }

      function S(t, r, i) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(r)) return t === r;
        if (!O(t) || !O(r)) return !1;

        if (i) {
          for (var n = 0; n < t.length; n++) {
            if (!i(t[n], r[n])) return !1;
          }
        } else for (var _n4 = 0; _n4 < t.length; _n4++) {
          if (t[_n4] !== r[_n4]) return !1;
        }

        return !0;
      }

      function k(n, t, r, i, u, e) {
        return a(n, t, r, i, u, e, H);
      }

      var v = [-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0],
          C = [1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0],
          D = [0, 0, 0, 0, 0, 0],
          H = i();
      /***/
    },

    /***/
    "Uz7T":
    /*!***************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/contains.js ***!
      \***************************************************************/

    /*! exports provided: polygonContainsCoords, polygonContainsMultipoint, polygonContainsPoint */

    /***/
    function Uz7T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygonContainsCoords", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygonContainsMultipoint", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygonContainsPoint", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, t) {
        return n ? t ? 4 : 3 : t ? 3 : 2;
      }

      function t(n, t, r, e) {
        return o(n, t, r, e.coords[0], e.coords[1]);
      }

      function r(t, r, e, c, u, f) {
        var s = n(u, f),
            i = c.coords,
            l = c.lengths;
        if (!l) return !1;

        for (var _n5 = 0, _c = 0; _n5 < l.length; _n5++, _c += s) {
          if (!o(t, r, e, i[_c], i[_c + 1])) return !1;
        }

        return !0;
      }

      function o(t, r, o, c, u) {
        if (!t) return !1;
        var f = n(r, o),
            s = t.coords,
            i = t.lengths;
        var l = !1,
            d = 0;

        var _iterator2 = _createForOfIteratorHelper(i),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _n6 = _step2.value;
            l = e(l, s, f, d, _n6, c, u), d += _n6 * f;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return l;
      }

      function e(n, t, r, o, e, c, u) {
        var f = n,
            s = o;

        for (var _n7 = o, i = o + e * r; _n7 < i; _n7 += r) {
          s = _n7 + r, s === i && (s = o);
          var _e7 = t[_n7],
              l = t[_n7 + 1],
              d = t[s],
              g = t[s + 1];
          (l < u && g >= u || g < u && l >= u) && _e7 + (u - l) / (g - l) * (d - _e7) < c && (f = !f);
        }

        return f;
      }
      /***/

    },

    /***/
    "q7ja":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/timeSupport.js ***!
      \***********************************************************************/

    /*! exports provided: getTimeExtent, getTimeOperator */

    /***/
    function q7ja(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTimeExtent", function () {
        return t;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getTimeOperator", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, n) {
        if (!t) return null;
        var e = n.featureAdapter,
            u = t.startTimeField,
            r = t.endTimeField;
        var l = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
        if (u && r) n.forEach(function (t) {
          var n = e.getAttribute(t, u),
              o = e.getAttribute(t, r);
          null == n || isNaN(n) || (l = Math.min(l, n)), null == o || isNaN(o) || (i = Math.max(i, o));
        });else {
          var _t = u || r;

          n.forEach(function (n) {
            var u = e.getAttribute(n, _t);
            null == u || isNaN(u) || (l = Math.min(l, u), i = Math.max(i, u));
          });
        }
        return {
          start: l,
          end: i
        };
      }

      function n(t, n, e) {
        if (!n || !t) return null;
        var u = t.startTimeField,
            r = t.endTimeField;
        if (!u && !r) return null;
        var l = n.start,
            i = n.end;
        return null === l && null === i ? null : void 0 === l && void 0 === i ? function () {
          return !1;
        } : u && r ? function (t, n, e, u, r) {
          if (null != u && null != r) return function (l) {
            var i = t.getAttribute(l, n),
                o = t.getAttribute(l, e);
            return (null == i || i <= r) && (null == o || o >= u);
          };
          if (null != u) return function (n) {
            var r = t.getAttribute(n, e);
            return null == r || r >= u;
          };
          if (null != r) return function (e) {
            var u = t.getAttribute(e, n);
            return null == u || u <= r;
          };
          return;
        }(e, u, r, l, i) : function (t, n, e, u) {
          if (null != e && null != u && e === u) return function (u) {
            return t.getAttribute(u, n) === e;
          };
          if (null != e && null != u) return function (r) {
            var l = t.getAttribute(r, n);
            return l >= e && l <= u;
          };
          if (null != e) return function (u) {
            return t.getAttribute(u, n) >= e;
          };
          if (null != u) return function (e) {
            return t.getAttribute(e, n) <= u;
          };
          return;
        }(e, u || r, l, i);
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~layers-graphics-data-FeatureFilter-js~layers-graphics-sources-geojson-GeoJSONSourceWorker-js~1a1c8721-es5.js.map