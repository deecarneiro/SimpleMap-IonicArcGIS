(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layers-KMLLayerView2D-js"], {
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
          var _r = t[_n2];
          a = Math.min(a, _r[0]), u = Math.min(u, _r[1]), e = Math.min(e, _r[2]), m = Math.max(m, _r[0]), o = Math.max(o, _r[1]), f = Math.max(f, _r[2]);
        } else for (var _n3 = 0; _n3 < i; _n3++) {
          var _r2 = t[_n3];
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
    "oM7z":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/KMLLayerView2D.js ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function oM7z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/scheduling.js */
      "WBXD");
      /* harmony import */


      var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../geometry/support/webMercatorUtils.js */
      "l4ZG");
      /* harmony import */


      var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../geometry/Extent.js */
      "OvF4");
      /* harmony import */


      var _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../core/Collection.js */
      "LE9a");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../request.js */
      "Lqtk");
      /* harmony import */


      var _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../core/Handles.js */
      "r0DZ");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../support/GraphicsCollection.js */
      "9iar");
      /* harmony import */


      var _layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../../../layers/support/kmlUtils.js */
      "BGvB");
      /* harmony import */


      var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../layers/LayerView.js */
      "NloG");
      /* harmony import */


      var _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./graphics/GraphicsView2D.js */
      "Vh9r");
      /* harmony import */


      var _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../engine/Bitmap.js */
      "xzrc");
      /* harmony import */


      var _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../engine/BitmapContainer.js */
      "LTnl");
      /* harmony import */


      var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./LayerView2D.js */
      "Vm2Q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var C = /*#__PURE__*/function (_Object) {
        _inherits(C, _Object);

        var _super = _createSuper(C);

        function C() {
          var _this;

          _classCallCheck(this, C);

          _this = _super.apply(this, arguments), _this._handles = new _core_Handles_js__WEBPACK_IMPORTED_MODULE_15__["default"](), _this._bitmapIndex = new Map(), _this._mapImageContainer = new _engine_BitmapContainer_js__WEBPACK_IMPORTED_MODULE_22__["BitmapContainer"](), _this._featuresMap = new Map(), _this.allVisiblePoints = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__["GraphicsCollection"](), _this.allVisiblePolylines = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__["GraphicsCollection"](), _this.allVisiblePolygons = new _support_GraphicsCollection_js__WEBPACK_IMPORTED_MODULE_17__["GraphicsCollection"](), _this.allVisibleMapImages = new _core_Collection_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
          return _this;
        }

        _createClass(C, [{
          key: "hitTest",
          value: function hitTest(e, i) {
            var _this2 = this;

            if (this.suspended || !this._pointsView && !this._polylinesView && !this._polygonsView) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])(null);
            var s = [this._pointsView.hitTest(e, i), this._polylinesView.hitTest(e, i), this._polygonsView.hitTest(e, i)];
            return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(s).then(function (e) {
              return e.filter(function (e) {
                return e && (e.layer = _this2.layer, e.sourceLayer = _this2.layer), !!e;
              })[0] || null;
            });
          }
        }, {
          key: "update",
          value: function update(e) {
            this._polygonsView && this._polygonsView.processUpdate(e), this._polylinesView && this._polylinesView.processUpdate(e), this._pointsView && this._pointsView.processUpdate(e);
          }
        }, {
          key: "attach",
          value: function attach() {
            var _this3 = this;

            this._handles.add([this.allVisibleMapImages.on("change", function (e) {
              e.added.forEach(function (e) {
                return _this3._addMapImage(e);
              }), e.removed.forEach(function (e) {
                return _this3._removeMapImage(e);
              });
            })]), this.container.addChild(this._mapImageContainer), this._polygonsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              view: this.view,
              graphics: this.allVisiblePolygons,
              requestUpdateCallback: function requestUpdateCallback() {
                return _this3.requestUpdate();
              }
            }), this.container.addChild(this._polygonsView.container), this._polylinesView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              view: this.view,
              graphics: this.allVisiblePolylines,
              requestUpdateCallback: function requestUpdateCallback() {
                return _this3.requestUpdate();
              }
            }), this.container.addChild(this._polylinesView.container), this._pointsView = new _graphics_GraphicsView2D_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              view: this.view,
              graphics: this.allVisiblePoints,
              requestUpdateCallback: function requestUpdateCallback() {
                return _this3.requestUpdate();
              }
            }), this.container.addChild(this._pointsView.container), this.watch("layer.visibleSublayers", function () {
              return _this3._refreshCollections();
            }), this._fetchingPromise = this._fetchService().then(function () {
              _this3._fetchingPromise = null, _this3.notifyChange("updating");
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            this._handles.removeAll(), this._mapImageContainer.removeAllChildren(), this.container.removeAllChildren(), this._bitmapIndex.clear(), this._polygonsView && (this._polygonsView.destroy(), this._polygonsView = null), this._polylinesView && (this._polylinesView.destroy(), this._polylinesView = null), this._pointsView && (this._pointsView.destroy(), this._pointsView = null);
          }
        }, {
          key: "moveStart",
          value: function moveStart() {}
        }, {
          key: "viewChange",
          value: function viewChange() {
            this._polygonsView.viewChange(), this._polylinesView.viewChange(), this._pointsView.viewChange();
          }
        }, {
          key: "moveEnd",
          value: function moveEnd() {}
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return null != this._fetchingPromise || this._pointsView.updating || this._polygonsView.updating || this._polylinesView.updating;
          }
        }, {
          key: "_addMapImage",
          value: function _addMapImage(e) {
            var _this4 = this;

            (this.view.spatialReference.isWGS84 || this.view.spatialReference.isWebMercator) && Object(_request_js__WEBPACK_IMPORTED_MODULE_14__["default"])(e.href, {
              responseType: "image"
            }).then(function (_ref) {
              var i = _ref.data;

              var s = _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(e.extent);

              Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__["canProject"])(s, _this4.view.spatialReference) && (s = Object(_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__["project"])(s, _this4.view.spatialReference));
              var t = new _engine_Bitmap_js__WEBPACK_IMPORTED_MODULE_21__["Bitmap"](i);
              t.x = s.xmin, t.y = s.ymax, t.resolution = s.width / i.naturalWidth, t.rotation = e.rotation, _this4._mapImageContainer.addChild(t), _this4._bitmapIndex.set(e, t);
            });
          }
        }, {
          key: "_fetchService",
          value: function _fetchService() {
            var _this5 = this;

            return this._handles.remove("refresh-collections"), this._getParsedKML().then(function (e) {
              return _this5._fetchSublayerService(_this5.layer, e);
            });
          }
        }, {
          key: "_fetchSublayerService",
          value: function _fetchSublayerService(e, i) {
            var _this6 = this;

            var s = e.sublayers;
            if (!s || 0 === s.length) return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["resolve"])();
            var a = [];
            return s.forEach(function (e) {
              var s = Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_16__["whenTrueOnce"])(e, "visible").then(function () {
                return e.load();
              }).then(function () {
                return _this6._getGraphicsForSublayer(e, i);
              }).then(function (i) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["create"])(function (s) {
                  e.networkLink ? s() : (_this6._featuresMap.set(e, i), _this6._handles.add(Object(_core_scheduling_js__WEBPACK_IMPORTED_MODULE_10__["schedule"])(function () {
                    _this6._refreshCollections(), s();
                  }), "refresh-collections"));
                });
              }).then(function () {
                return _this6._fetchSublayerService(e, e.sourceJSON || i);
              });
              e.visible && a.push(s);
            }), Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])(a).then(function () {});
          }
        }, {
          key: "_getParsedKML",
          value: function _getParsedKML() {
            return Object(_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__["fetchService"])(this.layer.url, this.view.spatialReference, this.layer.refreshInterval).then(function (e) {
              return Object(_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__["parseKML"])(e.data);
            });
          }
        }, {
          key: "_getGraphicsForSublayer",
          value: function () {
            var _getGraphicsForSublayer2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e, i) {
              var s;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      s = null;

                      if (!i.sublayers.some(function (i) {
                        return s = i, i.id === e.id;
                      })) {
                        _context.next = 24;
                        break;
                      }

                      _context.t1 = s.points;

                      if (!_context.t1) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return Object(_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__["getGraphics"])(s.points);

                    case 6:
                      _context.t1 = _context.sent;

                    case 7:
                      _context.t2 = _context.t1;
                      _context.t3 = s.polylines;

                      if (!_context.t3) {
                        _context.next = 13;
                        break;
                      }

                      _context.next = 12;
                      return Object(_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__["getGraphics"])(s.polylines);

                    case 12:
                      _context.t3 = _context.sent;

                    case 13:
                      _context.t4 = _context.t3;
                      _context.t5 = s.polygons;

                      if (!_context.t5) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 18;
                      return Object(_layers_support_kmlUtils_js__WEBPACK_IMPORTED_MODULE_18__["getGraphics"])(s.polygons);

                    case 18:
                      _context.t5 = _context.sent;

                    case 19:
                      _context.t6 = _context.t5;
                      _context.t7 = s.mapImages;
                      _context.t0 = {
                        points: _context.t2,
                        polylines: _context.t4,
                        polygons: _context.t6,
                        mapImages: _context.t7
                      };
                      _context.next = 25;
                      break;

                    case 24:
                      _context.t0 = null;

                    case 25:
                      return _context.abrupt("return", _context.t0);

                    case 26:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function _getGraphicsForSublayer(_x, _x2) {
              return _getGraphicsForSublayer2.apply(this, arguments);
            }

            return _getGraphicsForSublayer;
          }()
        }, {
          key: "_refreshCollections",
          value: function _refreshCollections() {
            var _this7 = this;

            var e = this.get("layer.visibleSublayers");
            this.allVisiblePoints.removeAll(), this.allVisiblePolylines.removeAll(), this.allVisiblePolygons.removeAll(), this.allVisibleMapImages.removeAll(), e && e.length && e.forEach(function (e) {
              var i = _this7._featuresMap.get(e);

              i && (_this7.allVisiblePoints.addMany(i.points), _this7.allVisiblePolylines.addMany(i.polylines), _this7.allVisiblePolygons.addMany(i.polygons), _this7.allVisibleMapImages.addMany(i.mapImages));
            });
          }
        }, {
          key: "_removeMapImage",
          value: function _removeMapImage(e) {
            var i = this._bitmapIndex.get(e);

            i && (this._mapImageContainer.removeChild(i), this._bitmapIndex["delete"](e));
          }
        }]);

        return C;
      }(Object(_LayerView2D_js__WEBPACK_IMPORTED_MODULE_23__["LayerView2DMixin"])(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_19__["default"]));

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], C.prototype, "_pointsView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], C.prototype, "_polylinesView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], C.prototype, "_polygonsView", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], C.prototype, "_fetchingPromise", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["_fetchingPromise", "_pointsView.updating", "_polygonsView.updating", "_polylinesView.updating"]
      })], C.prototype, "updating", void 0), C = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.KMLLayerView2D")], C);
      var j = C;
      /* harmony default export */

      __webpack_exports__["default"] = j;
      /***/
    }
  }]);
})();
//# sourceMappingURL=layers-KMLLayerView2D-js-es5.js.map