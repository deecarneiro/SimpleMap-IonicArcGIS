(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["symbolLayerUtils-js"], {
    /***/
    "AF15":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js ***!
      \***********************************************************************/

    /*! exports provided: clearBoundingBoxCache, computeIconLayerResourceSize, computeLayerResourceSize, computeLayerSize, computeObjectLayerResourceSize */

    /***/
    function AF15(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "clearBoundingBoxCache", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeIconLayerResourceSize", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeLayerResourceSize", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeLayerSize", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "computeObjectLayerResourceSize", function () {
        return b;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/ItemCache.js */
      "1/KW");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /* harmony import */


      var _symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./symbolLayerUtils3D.js */
      "rz2d");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var m = y();

      function y() {
        return new _core_ItemCache_js__WEBPACK_IMPORTED_MODULE_4__["default"](50);
      }

      function f() {
        m = y();
      }

      function l(e, o) {
        if ("icon" === e.type) return h(e, o);
        if ("object" === e.type) return b(e, o);
        throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");
      }

      function p(_x, _x2) {
        return _p.apply(this, arguments);
      }

      function _p() {
        _p = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e, o) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!("icon" === e.type)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", function (e, r) {
                    return h(e, r).then(function (r) {
                      if (null == e.size) return r;
                      var o = r[0] / r[1];
                      return o > 1 ? [e.size, e.size / o] : [e.size * o, e.size];
                    });
                  }(e, o));

                case 2:
                  if (!("object" === e.type)) {
                    _context3.next = 4;
                    break;
                  }

                  return _context3.abrupt("return", function () {
                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(e, r) {
                      var o;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return b(e, r);

                            case 2:
                              o = _context2.sent;
                              return _context2.abrupt("return", Object(_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__["objectSymbolLayerSizeWithResourceSize"])(o, e));

                            case 4:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function (_x7, _x8) {
                      return _ref2.apply(this, arguments);
                    };
                  }()(e, o));

                case 4:
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol3d:unsupported-symbol-layer", "computeLayerSize only works with symbol layers of type Icon and Object");

                case 5:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _p.apply(this, arguments);
      }

      function h(_x3, _x4) {
        return _h.apply(this, arguments);
      }

      function _h() {
        _h = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(o, t) {
          var n;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  if (!o.resource.href) {
                    _context4.next = 2;
                    break;
                  }

                  return _context4.abrupt("return", (n = o.resource.href, Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(n, {
                    responseType: "image"
                  }).then(function (e) {
                    return e.data;
                  })).then(function (e) {
                    return [e.width, e.height];
                  }));

                case 2:
                  if (!o.resource.primitive) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt("return", Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(t) ? [t, t] : [256, 256]);

                case 4:
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");

                case 5:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
        return _h.apply(this, arguments);
      }

      function b(i, n) {
        return function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(i, n) {
            var e, r, t, _n, s, _e;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (i.isPrimitive) {
                      _context.next = 11;
                      break;
                    }

                    e = i.resource.href, r = m.get(e);

                    if (!(void 0 !== r)) {
                      _context.next = 4;
                      break;
                    }

                    return _context.abrupt("return", Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(r));

                  case 4:
                    _context.next = 6;
                    return Promise.all(
                    /*! import() | views-3d-layers-graphics-objectResourceUtils-js */
                    [__webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~la~5882bb66"), __webpack_require__.e("default~layers-BaseDynamicLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~l~c2cf70ea"), __webpack_require__.e("default~views-3d-layers-graphics-objectResourceUtils-js~views-3d-webgl-engine-lib-edgeRendering-Edge~6fe4ca85"), __webpack_require__.e("common"), __webpack_require__.e("views-3d-layers-graphics-objectResourceUtils-js")]).then(__webpack_require__.bind(null,
                    /*! ../../views/3d/layers/graphics/objectResourceUtils.js */
                    "lKY1"));

                  case 6:
                    t = _context.sent;
                    _context.next = 9;
                    return t.fetch(e, {
                      disableTextures: !0
                    });

                  case 9:
                    _n = _context.sent;
                    return _context.abrupt("return", (m.put(e, _n.referenceBoundingBox), _n.referenceBoundingBox));

                  case 11:
                    s = null;
                    if (i.resource && i.resource.primitive && (s = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__["create"])(Object(_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_6__["objectSymbolLayerPrimitiveBoundingBox"])(i.resource.primitive)), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n))) for (_e = 0; _e < s.length; _e++) {
                      s[_e] *= n;
                    }
                    return _context.abrupt("return", s ? Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["resolve"])(s) : Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["reject"])(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("symbol:invalid-resource", "The symbol does not have a valid resource")));

                  case 14:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x5, _x6) {
            return _ref.apply(this, arguments);
          };
        }()(i, n).then(function (e) {
          return Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_5__["size"])(e);
        });
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

        for (var _n2 = 0; _n2 < i; _n2++) {
          a = Math.min(a, t[r + 3 * _n2]), u = Math.min(u, t[r + 3 * _n2 + 1]), e = Math.min(e, t[r + 3 * _n2 + 2]), m = Math.max(m, t[r + 3 * _n2]), o = Math.max(o, t[r + 3 * _n2 + 1]), f = Math.max(f, t[r + 3 * _n2 + 2]);
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
        if (r) for (var _n3 = 0; _n3 < i; _n3++) {
          var _r = t[_n3];
          a = Math.min(a, _r[0]), u = Math.min(u, _r[1]), e = Math.min(e, _r[2]), m = Math.max(m, _r[0]), o = Math.max(o, _r[1]), f = Math.max(f, _r[2]);
        } else for (var _n4 = 0; _n4 < i; _n4++) {
          var _r2 = t[_n4];
          a = Math.min(a, _r2[0]), u = Math.min(u, _r2[1]), m = Math.max(m, _r2[0]), o = Math.max(o, _r2[1]);
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
        } else for (var _n5 = 0; _n5 < t.length; _n5++) {
          if (t[_n5] !== r[_n5]) return !1;
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
    "rz2d":
    /*!*************************************************************************!*\
      !*** ./node_modules/@arcgis/core/symbols/support/symbolLayerUtils3D.js ***!
      \*************************************************************************/

    /*! exports provided: OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON, OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE, OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER, objectSymbolLayerPrimitiveBoundingBox, objectSymbolLayerSizeWithResourceSize */

    /***/
    function rz2d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE", function () {
        return n;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "objectSymbolLayerPrimitiveBoundingBox", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "objectSymbolLayerSizeWithResourceSize", function () {
        return t;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/has.js */
      "wSAH");
      /* harmony import */


      var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../chunks/vec3f64.js */
      "Cy1f");
      /* harmony import */


      var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../geometry/support/aaBoundingBox.js */
      "QmHG");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(r, _ref3) {
        var t = _ref3.isPrimitive,
            n = _ref3.width,
            o = _ref3.depth,
            c = _ref3.height;
        var s = t ? 10 : 1;
        if (null == n && null == c && null == o) return [s * r[0], s * r[1], s * r[2]];
        var i = Object(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__["f"])(n, o, c);
        var u;

        for (var e = 0; e < 3; e++) {
          var _t = i[e];

          if (null != _t) {
            u = _t / r[e];
            break;
          }
        }

        for (var _e2 = 0; _e2 < 3; _e2++) {
          null == i[_e2] && (i[_e2] = r[_e2] * u);
        }

        return i;
      }

      var n = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"])(-.5, -.5, -.5, .5, .5, .5),
          o = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"])(-.5, -.5, 0, .5, .5, 1),
          c = Object(_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__["fromValues"])(-.5, -.5, 0, .5, .5, .5);

      function s(e) {
        switch (e) {
          case "sphere":
          case "cube":
          case "diamond":
            return n;

          case "cylinder":
          case "cone":
          case "inverted-cone":
            return o;

          case "tetrahedron":
            return c;

          default:
            return;
        }
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=symbolLayerUtils-js-es5.js.map