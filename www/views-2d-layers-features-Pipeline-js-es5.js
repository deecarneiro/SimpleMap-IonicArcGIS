(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e53) { throw _e53; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e54) { didErr = true; err = _e54; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-2d-layers-features-Pipeline-js"], {
    /***/
    "04fk":
    /*!***********************************************************!*\
      !*** ./node_modules/@arcgis/core/geohash/geohashUtils.js ***!
      \***********************************************************/

    /*! exports provided: convertGeohash32ToXY, decodeBase32Char, decodeGeohash, decodeGeohashXY, encodeBase32Char, encodeGeohash, forEachIntersectingGeohash, getIntersectingGeohashes, getRelativeGeohash, latDistPerGeohash, lonDistPerGeohash, setGeohashBuf, setGeohashXY, unpackXBits, unpackYBits */

    /***/
    function fk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertGeohash32ToXY", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeBase32Char", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeGeohash", function () {
        return f;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "decodeGeohashXY", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeBase32Char", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "encodeGeohash", function () {
        return M;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "forEachIntersectingGeohash", function () {
        return d;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getIntersectingGeohashes", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getRelativeGeohash", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "latDistPerGeohash", function () {
        return g;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lonDistPerGeohash", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGeohashBuf", function () {
        return i;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGeohashXY", function () {
        return s;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackXBits", function () {
        return w;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unpackYBits", function () {
        return A;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = new Float64Array(2),
          n = new Float64Array(2);

      function o(t) {
        return t <= 57 ? t - 48 : t <= 104 ? t - 88 : t <= 107 ? t - 89 : t <= 110 ? t - 90 : t - 91;
      }

      function e(t) {
        return "0123456789bcdefghjkmnpqrstuvwxyz"[t];
      }

      function r(t) {
        return (t[0] + t[1]) / 2;
      }

      function c(t, n, o) {
        return t[0] = n, t[1] = o, t;
      }

      function h(t, n) {
        var o = r(t),
            e = n,
            c = !n;
        t[0] = c * t[0] + e * o, t[1] = c * o + e * t[1];
      }

      function a(t, n) {
        var o = n > r(t);
        return h(t, o), o;
      }

      function f(e, a) {
        var f = c(t, -90, 90),
            l = c(n, -180, 180);

        for (var _t = 0; _t < a.length; _t++) {
          var _n = o(a.charCodeAt(_t));

          _t % 2 == 0 ? (h(l, !!(16 & _n)), h(l, !!(4 & _n)), h(l, !!(1 & _n)), h(f, !!(8 & _n)), h(f, !!(2 & _n))) : (h(f, !!(16 & _n)), h(f, !!(4 & _n)), h(f, !!(1 & _n)), h(l, !!(8 & _n)), h(l, !!(2 & _n)));
        }

        return e[0] = r(f), e[1] = r(l), e;
      }

      function l(t, n) {
        var e = 0,
            r = 0,
            c = 30,
            h = 30;

        for (var _t2 = 0; _t2 < n.length; _t2++) {
          var _a = o(n.charCodeAt(_t2)),
              _f = _t2 % 2 == 0;

          c -= _f ? 3 : 2, h -= _f ? 2 : 3, e |= w(_a, _f) << c, r |= A(_a, _f) << h;
        }

        return {
          geohashX: e,
          geohashY: r
        };
      }

      function u(t, n) {
        var o = -90,
            e = 90,
            r = -180,
            c = 180;

        for (var _h = 0; _h < n; _h++) {
          var _n2 = Math.ceil((_h + 1) / 2),
              _a2 = Math.floor((_h + 1) / 2),
              _f2 = 1 - _h % 2,
              _l = 30 - (3 * _n2 + 2 * _a2),
              _u = 30 - (2 * _n2 + 3 * _a2),
              _s = 3 * _f2 + 2 * (1 - _f2),
              _i = 2 * _f2 + 3 * (1 - _f2),
              _M = 3 * _f2 + 7 * (1 - _f2) << _u,
              _g = (7 * _f2 + 3 * (1 - _f2) << _l & t.geohashX) >> _l,
              _b = (_M & t.geohashY) >> _u;

          for (var _t3 = _s - 1; _t3 >= 0; _t3--) {
            var _n3 = (r + c) / 2,
                _o = _g & 1 << _t3 ? 1 : 0;

            r = (1 - _o) * r + _o * _n3, c = (1 - _o) * _n3 + _o * c;
          }

          for (var _t4 = _i - 1; _t4 >= 0; _t4--) {
            var _n4 = (o + e) / 2,
                _r = _b & 1 << _t4 ? 1 : 0;

            o = (1 - _r) * o + _r * _n4, e = (1 - _r) * _n4 + _r * e;
          }
        }

        return [r, o, c, e];
      }

      function s(t, n, o, e) {
        e % 2 && (e += 1);
        var r = 0,
            c = 0,
            h = -90,
            a = 90,
            f = -180,
            l = 180;

        for (var _t5 = 0; _t5 < e / 2; _t5++) {
          for (var _n5 = 0; _n5 < 5; _n5++) {
            var _e = (f + l) / 2,
                _c = o > _e ? 1 : 0;

            r |= _c << 29 - (_n5 + 5 * _t5), f = (1 - _c) * f + _c * _e, l = (1 - _c) * _e + _c * l;
          }

          for (var _o2 = 0; _o2 < 5; _o2++) {
            var _e2 = (h + a) / 2,
                _r2 = n > _e2 ? 1 : 0;

            c |= _r2 << 29 - (_o2 + 5 * _t5), h = (1 - _r2) * h + _r2 * _e2, a = (1 - _r2) * _e2 + _r2 * a;
          }
        }

        t.geohashX = r, t.geohashY = c;
      }

      function i(t, n, o, e, r) {
        r % 2 && (r += 1);
        var c = 0,
            h = 0,
            a = -90,
            f = 90,
            l = -180,
            u = 180;

        for (var _t6 = 0; _t6 < r / 2; _t6++) {
          for (var _n6 = 0; _n6 < 5; _n6++) {
            var _o3 = (l + u) / 2,
                _r3 = e > _o3 ? 1 : 0;

            c |= _r3 << 29 - (_n6 + 5 * _t6), l = (1 - _r3) * l + _r3 * _o3, u = (1 - _r3) * _o3 + _r3 * u;
          }

          for (var _n7 = 0; _n7 < 5; _n7++) {
            var _e3 = (a + f) / 2,
                _r4 = o > _e3 ? 1 : 0;

            h |= _r4 << 29 - (_n7 + 5 * _t6), a = (1 - _r4) * a + _r4 * _e3, f = (1 - _r4) * _e3 + _r4 * f;
          }
        }

        t[2 * n] = c, t[2 * n + 1] = h;
      }

      function M(o, r, h) {
        var f = "";
        var l = c(t, -90, 90),
            u = c(n, -180, 180);

        for (var _t7 = 0; _t7 < h; _t7++) {
          var _n8 = 0;
          !(_t7 % 2) ? (_n8 |= a(u, r) << 4, _n8 |= a(l, o) << 3, _n8 |= a(u, r) << 2, _n8 |= a(l, o) << 1, _n8 |= a(u, r) << 0) : (_n8 |= a(l, o) << 4, _n8 |= a(u, r) << 3, _n8 |= a(l, o) << 2, _n8 |= a(u, r) << 1, _n8 |= a(l, o) << 0), f += e(_n8);
        }

        return f;
      }

      function g(t) {
        var n = Math.floor(5 * t / 2);
        return 180 / Math.pow(2, n);
      }

      function b(t) {
        var n = Math.ceil(5 * t / 2);
        return 360 / Math.pow(2, n);
      }

      function w(t, n) {
        return n ? 1 & t | (4 & t) >> 1 | (16 & t) >> 2 : (2 & t) >> 1 | (8 & t) >> 2;
      }

      function A(t, n) {
        return n ? (2 & t) >> 1 | (8 & t) >> 2 : 1 & t | (4 & t) >> 1 | (16 & t) >> 2;
      }

      function m(t, n, r) {
        var c = !((t.length - 1) % 2),
            h = t.substring(0, t.length - 1),
            a = o(t.charCodeAt(t.length - 1));
        var f = 0,
            l = 0,
            u = 0,
            s = 0;
        c ? (f = 8, l = 4, u = 1 & a | (4 & a) >> 1 | (16 & a) >> 2, s = (2 & a) >> 1 | (8 & a) >> 2) : (f = 4, l = 8, s = 1 & a | (4 & a) >> 1 | (16 & a) >> 2, u = (2 & a) >> 1 | (8 & a) >> 2);
        var i = u + n,
            M = s + r,
            g = Math.floor(i / f),
            b = Math.floor(M / l),
            w = e(function (t, n, o) {
          return o ? 1 & t | (1 & n) << 1 | (2 & t) << 1 | (2 & n) << 2 | (4 & t) << 2 : 1 & n | (1 & t) << 1 | (2 & n) << 1 | (2 & t) << 2 | (4 & n) << 2;
        }(i - g * f, M - b * l, c));
        return t.length > 1 && (g || b) ? m(h, g, b) + w : h + w;
      }

      function p(t, n, o, e, r) {
        var c = Math.abs(o - t),
            h = Math.abs(e - n),
            a = g(r),
            f = b(r),
            l = Math.ceil(h / f),
            u = Math.ceil(c / a),
            s = M(t, n, r),
            i = new Array();

        for (var _t8 = 0; _t8 < l; _t8++) {
          for (var _n9 = 0; _n9 < u; _n9++) {
            i.push(m(s, _t8, _n9));
          }
        }

        return i;
      }

      function d(t, n, o, e, r, c) {
        var h = Math.abs(o - t),
            a = Math.abs(e - n),
            l = g(r),
            u = b(r),
            s = Math.ceil(a / u),
            i = Math.ceil(h / l),
            w = M(t, n, r);

        for (var _r5 = 0; _r5 < s; _r5++) {
          for (var _h2 = 0; _h2 < i; _h2++) {
            var _a3 = m(w, _r5, _h2),
                _f3 = f([0, 0], _a3),
                _f4 = _slicedToArray(_f3, 2),
                _s2 = _f4[0],
                _i2 = _f4[1],
                _M2 = _s2 - l / 2,
                _g2 = _i2 - u / 2,
                _b2 = _s2 + l / 2,
                _A = _i2 + u / 2,
                _p = l * u,
                _d = Math.max(t, _M2),
                x = Math.max(n, _g2),
                y = Math.min(o, _b2) - _d,
                C = Math.min(e, _A) - x;

            c(_a3, Math.abs(y * C) / _p);
          }
        }
      }
      /***/

    },

    /***/
    "A3K4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js ***!
      \**********************************************************************************************/

    /*! exports provided: ReadyState, WebSocketConnection */

    /***/
    function A3K4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReadyState", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebSocketConnection", function () {
        return m;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../tasks/operations/zscale.js */
      "kUx5");
      /* harmony import */


      var _StreamConnection_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./StreamConnection.js */
      "AWZL");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var h = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");

      var u;
      !function (e) {
        e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED";
      }(u || (u = {}));

      var m = /*#__PURE__*/function (_StreamConnection_js_) {
        _inherits(m, _StreamConnection_js_);

        var _super = _createSuper(m);

        function m(e) {
          var _this;

          _classCallCheck(this, m);

          _this = _super.call(this), _this.errorString = null;
          var t = e.geometryType,
              o = e.spatialReference,
              r = e.sourceSpatialReference;
          _this._config = e, _this._featureZScaler = Object(_tasks_operations_zscale_js__WEBPACK_IMPORTED_MODULE_12__["getGeometryZScaler"])(t, r, o), _this._open();
          return _this;
        }

        _createClass(m, [{
          key: "_open",
          value: function () {
            var _open2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._tryCreateWebSocket();

                    case 2:
                      _context.t0 = this.destroyed;

                      if (_context.t0) {
                        _context.next = 6;
                        break;
                      }

                      _context.next = 6;
                      return this._handshake();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _open() {
              return _open2.apply(this, arguments);
            }

            return _open;
          }()
        }, {
          key: "destroy",
          value: function destroy() {
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(this._websocket) && (this._websocket.onopen = null, this._websocket.onclose = null, this._websocket.onerror = null, this._websocket.onmessage = null, this._websocket.close()), this._websocket = null;
          }
        }, {
          key: "connectionStatus",
          get: function get() {
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(this._websocket)) return "disconnected";

            switch (this._websocket.readyState) {
              case u.CONNECTING:
              case u.OPEN:
                return "connected";

              case u.CLOSING:
              case u.CLOSED:
                return "disconnected";
            }
          }
        }, {
          key: "_tryCreateWebSocket",
          value: function () {
            var _tryCreateWebSocket2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var e,
                  t,
                  o,
                  s,
                  _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      e = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : this._config.source.path;
                      t = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 1e3;
                      o = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 0;
                      _context2.prev = 3;

                      if (!this.destroyed) {
                        _context2.next = 6;
                        break;
                      }

                      return _context2.abrupt("return");

                    case 6:
                      _context2.next = 8;
                      return this._createWebSocket(e);

                    case 8:
                      this._websocket = _context2.sent;
                      this.notifyChange("connectionStatus");
                      _context2.next = 24;
                      break;

                    case 12:
                      _context2.prev = 12;
                      _context2.t0 = _context2["catch"](3);
                      s = t / 1e3;

                      if (!(this._config.maxReconnectionAttempts && o >= this._config.maxReconnectionAttempts)) {
                        _context2.next = 19;
                        break;
                      }

                      _context2.t1 = (h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Exceeded maxReconnectionAttempts attempts. No further attempts will be made")), void this.destroy());
                      _context2.next = 23;
                      break;

                    case 19:
                      h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Failed to connect. Attempting to reconnect in ".concat(s, "s"), _context2.t0));
                      _context2.next = 22;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["after"])(t);

                    case 22:
                      _context2.t1 = this._tryCreateWebSocket(e, Math.min(1.5 * t, 1e3 * this._config.maxReconnectionInterval), o + 1);

                    case 23:
                      return _context2.abrupt("return", _context2.t1);

                    case 24:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[3, 12]]);
            }));

            function _tryCreateWebSocket() {
              return _tryCreateWebSocket2.apply(this, arguments);
            }

            return _tryCreateWebSocket;
          }()
        }, {
          key: "_createWebSocket",
          value: function _createWebSocket(e) {
            var _this2 = this;

            var t = new WebSocket(e),
                o = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["create"])(function (e, o) {
              t.onopen = function () {
                return e(t);
              }, t.onclose = function (e) {
                return o(e);
              };
            });
            return o.then(function () {
              if (_this2.destroyed) return t.onclose = function () {}, void t.close();
              t.onclose = function (e) {
                return _this2._onClose(e);
              }, t.onerror = function (e) {
                return _this2._onError(e);
              }, t.onmessage = function (e) {
                return _this2._onMessage(e);
              };
            }), o;
          }
        }, {
          key: "_handshake",
          value: function () {
            var _handshake2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this3 = this;

              var e,
                  t,
                  r,
                  s,
                  _this$_config,
                  n,
                  i,
                  a,
                  _args3 = arguments;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : 1e4;
                      t = this._websocket;

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)) {
                        _context3.next = 4;
                        break;
                      }

                      return _context3.abrupt("return");

                    case 4:
                      r = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createResolver"])(), s = t.onmessage, _this$_config = this._config, n = _this$_config.filter, i = _this$_config.outFields, a = _this$_config.spatialReference;
                      return _context3.abrupt("return", (r.timeout(e), t.onmessage = function (e) {
                        var o;
                        var l = null;

                        try {
                          l = JSON.parse(e.data);
                        } catch (e) {}

                        l && "object" == typeof l || (h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Protocol violation. Handshake failed - malformed message", e.data)), r.reject(), _this3.destroy()), (null == (o = l.spatialReference) ? void 0 : o.wkid) !== (null == a ? void 0 : a.wkid) && (h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Protocol violation. Handshake failed - expected wkid of ".concat(a.wkid), e.data)), r.reject(), _this3.destroy()), "json" !== l.format && (h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Protocol violation. Handshake failed - format is not set", e.data)), r.reject(), _this3.destroy()), n && l.filter !== n && h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Tried to set filter, but server doesn't support it")), i && l.outFields !== i && h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Tried to set outFields, but server doesn't support it")), t.onmessage = s, r.resolve();
                      }, t.send(JSON.stringify({
                        filter: n,
                        outFields: i,
                        format: "json",
                        spatialReference: {
                          wkid: a.wkid
                        }
                      })), r.promise));

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _handshake() {
              return _handshake2.apply(this, arguments);
            }

            return _handshake;
          }()
        }, {
          key: "_onMessage",
          value: function _onMessage(e) {
            try {
              var t = JSON.parse(e.data);
              if ("featureResult" !== t.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Protocol violation - Expected to find message of type 'featureResult'", t);

              var _iterator = _createForOfIteratorHelper(t.features),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _e4 = _step.value;
                  this._featureZScaler && this._featureZScaler(_e4.geometry), this.onFeature(_e4);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } catch (e) {
              return h.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("websocket-connection", "Failed to parse message", e)), void this.destroy();
            }
          }
        }, {
          key: "_onError",
          value: function _onError(e) {
            var t = "Encountered an error over WebSocket connection";
            this._set("errorString", t), h.error("websocket-connection", t);
          }
        }, {
          key: "_onClose",
          value: function _onClose(e) {
            this._websocket = null, this.notifyChange("connectionStatus"), 1e3 !== e.code && h.error("websocket-connection", "WebSocket closed unexpectedly with error code ".concat(e.code)), this.destroyed || this._open();
          }
        }]);

        return m;
      }(_StreamConnection_js__WEBPACK_IMPORTED_MODULE_13__["default"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "connectionStatus", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], m.prototype, "errorString", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.graphics.sources.connections.WebSocketConnection")], m);
      /***/
    },

    /***/
    "AWZL":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/StreamConnection.js ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function AWZL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/HandleOwner.js */
      "kJYu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function (_core_Evented_js__WEB) {
        _inherits(t, _core_Evented_js__WEB);

        var _super2 = _createSuper(t);

        function t() {
          _classCallCheck(this, t);

          return _super2.apply(this, arguments);
        }

        _createClass(t, [{
          key: "onFeature",
          value: function onFeature(r) {
            this.emit("feature", r);
          }
        }]);

        return t;
      }(_core_Evented_js__WEBPACK_IMPORTED_MODULE_9__["default"].EventedMixin(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__["HandleOwner"]));

      t = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.layers.graphics.sources.connections.StreamConnection")], t);
      var c = t;
      /* harmony default export */

      __webpack_exports__["default"] = c;
      /***/
    },

    /***/
    "Cnp3":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderPBF.js ***!
      \*******************************************************************************************/

    /*! exports provided: FeatureSetReaderPBF */

    /***/
    function Cnp3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureSetReaderPBF", function () {
        return c;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedFeature.js */
      "k5I3");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./FeatureSetReader.js */
      "8NDJ");
      /* harmony import */


      var _core_pbf_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/pbf.js */
      "ATu9");
      /* harmony import */


      var _FeatureSetReaderPBFHeader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./FeatureSetReaderPBFHeader.js */
      "CqME");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var d = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.view.2d.layers.features.support.FeatureSetReaderPBF");

      function u(e) {
        for (; e.next();) {
          switch (e.tag()) {
            case 1:
              return e.getMessage();

            default:
              e.skip();
          }
        }

        return null;
      }

      var c = /*#__PURE__*/function (_FeatureSetReader_js_) {
        _inherits(c, _FeatureSetReader_js_);

        var _super3 = _createSuper(c);

        function c(e, t, r, s) {
          var _this4;

          _classCallCheck(this, c);

          _this4 = _super3.call(this, e), _this4._hasNext = !1, _this4._isPoints = !1, _this4._isPolygons = !1, _this4._featureIndex = -1, _this4._featureOffset = 0, _this4._cache = {
            area: 0,
            unquantGeometry: void 0,
            geometry: void 0,
            centroid: void 0,
            legacyFeature: void 0,
            optFeature: void 0
          }, _this4._geometryType = s, _this4._reader = t, _this4._header = r, _this4._hasNext = r.hasFeatures, _this4._isPoints = "esriGeometryPoint" === s, _this4._isPolygons = "esriGeometryPolygon" === s;
          return _this4;
        }

        _createClass(c, [{
          key: "geometryType",
          get: function get() {
            return this._geometryType;
          }
        }, {
          key: "size",
          get: function get() {
            return this._header.featureCount;
          }
        }, {
          key: "hasZ",
          get: function get() {
            return !1;
          }
        }, {
          key: "hasM",
          get: function get() {
            return !1;
          }
        }, {
          key: "stride",
          get: function get() {
            return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
          }
        }, {
          key: "hasFeatures",
          get: function get() {
            return this._header.hasFeatures;
          }
        }, {
          key: "hasNext",
          get: function get() {
            return this._hasNext;
          }
        }, {
          key: "exceededTransferLimit",
          get: function get() {
            return this._header.exceededTransferLimit;
          }
        }, {
          key: "getApproximateSize",
          value: function getApproximateSize() {
            if (this._hasFilter) {
              var e = Math.abs(this._xmax - this._xmin) * Math.abs(this._ymax - this._ymin),
                  t = this.size * e / 262144;
              return Math.max(Math.round(t), 0);
            }

            return this.size;
          }
        }, {
          key: "getQuantizationTransform",
          value: function getQuantizationTransform() {
            return this._header.transform;
          }
        }, {
          key: "getCursor",
          value: function getCursor() {
            return this.copy();
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this._featureIndex;
          }
        }, {
          key: "setIndex",
          value: function setIndex(e) {
            this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, this._featureIndex = e;
          }
        }, {
          key: "getAttributeHash",
          value: function getAttributeHash() {
            var _this5 = this;

            var e = "";
            return this._header.fieldIndexMap.forEach(function (t) {
              e += _this5._readAttributeAtIndex(t) + ".";
            }), e;
          }
        }, {
          key: "getObjectId",
          value: function getObjectId() {
            return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
          }
        }, {
          key: "getDisplayId",
          value: function getDisplayId() {
            return this._header.displayIds[this._featureIndex];
          }
        }, {
          key: "setDisplayId",
          value: function setDisplayId(e) {
            this._header.displayIds[this._featureIndex] = e;
          }
        }, {
          key: "getGroupId",
          value: function getGroupId() {
            return this._header.groupIds[this._featureIndex];
          }
        }, {
          key: "setGroupId",
          value: function setGroupId(e) {
            this._header.groupIds[this._featureIndex] = e;
          }
        }, {
          key: "readLegacyFeature",
          value: function readLegacyFeature() {
            if (void 0 === this._cache.legacyFeature) {
              var e;
              var t = this.readCentroid(),
                  r = {
                attributes: this.readAttributes(),
                geometry: this._isPoints ? this.readLegacyPointGeometry() : this.readLegacyGeometry(),
                centroid: null != (e = t && {
                  x: t.coords[0],
                  y: t.coords[1]
                }) ? e : null
              };
              return this._cache.legacyFeature = r, r;
            }

            return this._cache.legacyFeature;
          }
        }, {
          key: "readOptimizedFeature",
          value: function readOptimizedFeature() {
            if (void 0 === this._cache.optFeature) {
              var e = new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__["default"](this.readGeometry(), this.readAttributes(), this.readCentroid());
              return this._cache.optFeature = e, e;
            }

            return this._cache.optFeature;
          }
        }, {
          key: "getXHydrate",
          value: function getXHydrate() {
            var e = this._header.centroid[2 * this._featureIndex],
                t = this.getQuantizationTransform();
            return e * t.scale[0] + t.translate[0];
          }
        }, {
          key: "getYHydrate",
          value: function getYHydrate() {
            var e = this._header.centroid[2 * this._featureIndex + 1],
                t = this.getQuantizationTransform();
            return t.translate[1] - e * t.scale[1];
          }
        }, {
          key: "readLegacyPointGeometry",
          value: function readLegacyPointGeometry() {
            return {
              x: this._header.centroid[2 * this._featureIndex] + this._tx,
              y: this._header.centroid[2 * this._featureIndex + 1] + this._ty
            };
          }
        }, {
          key: "readLegacyGeometry",
          value: function readLegacyGeometry() {
            var e = this.readGeometry();
            return Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["convertToGeometry"])(e, this.geometryType, !1, !1);
          }
        }, {
          key: "readLegacyCentroid",
          value: function readLegacyCentroid() {
            var e = this.readCentroid();
            if (!e) return null;

            var _e$coords = _slicedToArray(e.coords, 2),
                t = _e$coords[0],
                r = _e$coords[1];

            return {
              x: t,
              y: r
            };
          }
        }, {
          key: "readGeometryArea",
          value: function readGeometryArea() {
            return this._cache.area || this.readGeometry(), this._cache.area;
          }
        }, {
          key: "readUnquantizedGeometry",
          value: function readUnquantizedGeometry() {
            if (void 0 === this._cache.unquantGeometry) {
              var e = this.readGeometry();
              if (!e) return this._cache.unquantGeometry = null, null;
              var t = e.clone(),
                  r = t.lengths,
                  s = t.coords;

              for (var _e5 = 0, _t9 = 2; _e5 < r.length; _e5++, _t9 += 2) {
                var i = r[_e5];

                for (var _e6 = 1; _e6 < i; _e6 += 1, _t9 += 2) {
                  s[_t9] += s[_t9 - 2], s[_t9 + 1] += s[_t9 - 1];
                }
              }

              return this._cache.unquantGeometry = t, t;
            }

            return this._cache.unquantGeometry;
          }
        }, {
          key: "readHydratedGeometry",
          value: function readHydratedGeometry() {
            var e = this.readGeometry();
            if (!e) return null;
            var t = e.clone();
            return this._isPoints && (t.coords[0] -= this._tx, t.coords[1] -= this._ty), Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__["unquantizeOptimizedGeometry"])(t, t, this.hasZ, this.hasM, this.getQuantizationTransform()), t;
          }
        }, {
          key: "readGeometry",
          value: function readGeometry() {
            if (void 0 === this._cache.geometry) {
              var e = null;

              if (this._isPoints) {
                var t = this._header.centroid[2 * this._featureIndex] + this._tx,
                    r = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
                e = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], [t, r]);
              } else {
                var _t10 = this._header.offsets.geometry[this._featureIndex],
                    _r6 = this._reader;
                if (0 === _t10) return null;

                _r6.move(_t10);

                try {
                  e = this._parseGeometry(_r6);
                } catch (e) {
                  return console.error("Failed to parse geometry!", e), null;
                }
              }

              return this._cache.geometry = e, e;
            }

            return this._cache.geometry;
          }
        }, {
          key: "readCentroid",
          value: function readCentroid() {
            if (void 0 === this._cache.centroid) {
              var e = null;
              var t = this._header.centroid[2 * this._featureIndex] + this._tx,
                  r = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
              return 268435455 === t ? (e = this._computeCentroid(), e && (this._header.centroid[2 * this._featureIndex] = e.coords[0] - this._tx, this._header.centroid[2 * this._featureIndex + 1] = e.coords[1] - this._ty)) : e = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"]([], [t, r]), this._cache.centroid = e, e;
            }

            return this._cache.centroid;
          }
        }, {
          key: "copy",
          value: function copy() {
            var e = this._reader.clone(),
                t = new c(this.instance, e, this._header, this.geometryType);

            return this.copyInto(t), t;
          }
        }, {
          key: "next",
          value: function next() {
            if (this._cache.area = 0, this._cache.unquantGeometry = void 0, this._cache.geometry = void 0, this._cache.centroid = void 0, this._cache.legacyFeature = void 0, this._cache.optFeature = void 0, !this._hasFilter) return ++this._featureIndex < this.size;

            for (; ++this._featureIndex < this.size && !this._passesFilter();) {
              ;
            }

            return this._featureIndex < this.size;
          }
        }, {
          key: "_readAttribute",
          value: function _readAttribute(e, t) {
            var r = this._header.hasFieldIndex(e) ? e : function (e) {
              return e.toLowerCase().trim();
            }(e),
                s = this._header.getFieldIndex(r);

            if (null == s) return;

            var i = this._readAttributeAtIndex(s);

            if (!t) return i;
            return this._header.isDateField(r) ? new Date(i) : i;
          }
        }, {
          key: "_readAttributes",
          value: function _readAttributes() {
            var _this6 = this;

            var e = {};
            return this._header.fieldIndexMap.forEach(function (t, r) {
              e[r] = _this6._readAttributeAtIndex(t);
            }), e;
          }
        }, {
          key: "copyInto",
          value: function copyInto(e) {
            _get(_getPrototypeOf(c.prototype), "copyInto", this).call(this, e), e._featureIndex = this._featureIndex, e._featureOffset = this._featureOffset, e._hasNext = this._hasNext;
          }
        }, {
          key: "_passesFilter",
          value: function _passesFilter() {
            if (!this._hasFilter) return !0;
            var e = this._header.centroid[2 * this._featureIndex],
                t = this._header.centroid[2 * this._featureIndex + 1];

            if (268435455 === e) {
              if (this._isPolygons && !this.readCentroid()) return !1;
              e = this._header.centroid[2 * this._featureIndex], t = this._header.centroid[2 * this._featureIndex + 1];
            }

            return e >= this._xmin && e <= this._xmax && t >= this._ymin && t <= this._ymax;
          }
        }, {
          key: "_readAttributeAtIndex",
          value: function _readAttributeAtIndex(e) {
            var t = this._header.offsets.attributes[this._featureIndex * this._header.fieldCount + e],
                r = this._reader;
            return r.move(t), function (e) {
              var t = e.getLength(),
                  r = e.pos() + t;

              for (; e.pos() < r && e.next();) {
                switch (e.tag()) {
                  case 1:
                    {
                      var _t11 = e.getString();

                      return "" === _t11 ? null : _t11;
                    }

                  case 2:
                    return e.getFloat();

                  case 3:
                    return e.getDouble();

                  case 4:
                    return e.getSInt32();

                  case 5:
                    return e.getUInt32();

                  case 6:
                    return e.getInt64();

                  case 7:
                    return e.getUInt64();

                  case 8:
                    return e.getSInt64();

                  case 9:
                    return e.getBool();

                  default:
                    return e.skip(), null;
                }
              }

              return null;
            }(r);
          }
        }, {
          key: "_preprocessPolygon",
          value: function _preprocessPolygon(e, t) {
            var r = 0,
                i = 0,
                a = 0,
                n = !1,
                h = !1,
                o = !1,
                d = -1;
            var u = [];

            var _c2 = 0,
                _ = !1;

            for (var s = 0; s < t.length; s++) {
              var f = t[s];
              var l = e[2 * r],
                  g = e[2 * r + 1],
                  y = 0;

              for (var _t12 = 1; _t12 < f; _t12++) {
                var _s3 = l,
                    _i3 = g,
                    _a4 = l + e[2 * (r + _t12)],
                    _n10 = g + e[2 * (r + _t12) + 1];

                l = _a4, g = _n10, y += .5 * ((_a4 - _s3) * (_n10 + _i3));
              }

              var m = y > 0;
              if (m && _ && (i += f), m || (d++, _ = !1), d >= 1e6) break;
              _c2 += y, n && m && h && (o = !0);
              {
                e[2 * a] = e[2 * i], e[2 * a++ + 1] = e[2 * i++ + 1];
                var _t13 = 1,
                    _r7 = e[2 * i],
                    _s4 = e[2 * i++ + 1];

                for (var _n11 = 2; _n11 < f; _n11++) {
                  var _n12 = e[2 * i],
                      _h3 = e[2 * i++ + 1];
                  _r7 * _h3 - _n12 * _s4 == 0 ? (_r7 += _n12, _s4 += _h3) : (e[2 * a] = _r7, e[2 * a++ + 1] = _s4, _t13++, _r7 = _n12, _s4 = _h3);
                }

                e[2 * a] = _r7, e[2 * a++ + 1] = _s4, _t13++, u.push(_t13);
              }
              n = !1, h = !0, r += f;
            }

            return u.length ? (this._cache.area = Math.abs(_c2), new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"](u, e, o)) : null;
          }
        }, {
          key: "_parseGeometry",
          value: function _parseGeometry(e) {
            var t = e.getLength(),
                r = e.pos() + t,
                i = [],
                a = [];

            for (; e.pos() < r && e.next();) {
              switch (e.tag()) {
                case 2:
                  {
                    var _t14 = e.getUInt32(),
                        _r8 = e.pos() + _t14;

                    for (; e.pos() < _r8;) {
                      a.push(e.getUInt32());
                    }

                    break;
                  }

                case 3:
                  {
                    var _t15 = e.getUInt32(),
                        _r9 = e.pos() + _t15;

                    for (; e.pos() < _r9;) {
                      i.push(e.getSInt32()), i.push(e.getSInt32()), this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
                    }

                    break;
                  }

                case 1:
                default:
                  e.skip();
              }
            }

            var n = 0;

            for (var _i4 = 0, _a5 = a; _i4 < _a5.length; _i4++) {
              var _e7 = _a5[_i4];
              i[2 * n] += this._tx, i[2 * n + 1] += this._ty, n += _e7;
            }

            return this._isPolygons ? this._preprocessPolygon(i, a) : new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__["default"](a, i);
          }
        }], [{
          key: "fromBuffer",
          value: function fromBuffer(e, r) {
            var s = function (e) {
              try {
                var t = 2,
                    _r10 = new _core_pbf_js__WEBPACK_IMPORTED_MODULE_6__["default"](new Uint8Array(e), new DataView(e));

                for (; _r10.next();) {
                  switch (_r10.tag()) {
                    case t:
                      return u(_r10.getMessage());

                    default:
                      _r10.skip();

                  }
                }
              } catch (e) {
                var _r11 = new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("query:parsing-pbf", "Error while parsing FeatureSet PBF payload", {
                  error: e
                });

                d.error(_r11);
              }

              return null;
            }(e),
                i = Object(_FeatureSetReaderPBFHeader_js__WEBPACK_IMPORTED_MODULE_7__["parseHeader"])(s, "esriGeometryPoint" === r),
                a = _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_5__["FeatureSetReader"].createInstance();

            return new c(a, s, i, r);
          }
        }]);

        return c;
      }(_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_5__["FeatureSetReader"]);
      /***/

    },

    /***/
    "CqME":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/FeatureSetReaderPBFHeader.js ***!
      \*************************************************************************************************/

    /*! exports provided: FeatureSetHeader, parseHeader */

    /***/
    function CqME(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatureSetHeader", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "parseHeader", function () {
        return a;
      });
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _tasks_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../tasks/operations/pbfFeatureServiceParser.js */
      "ZMuU");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r() {
          _classCallCheck(this, r);

          this.hasFeatures = !1, this.fieldIndexMap = new Map(), this.fieldCount = 0, this.featureCount = 0, this.objectIdFieldIndex = 0, this.dateFields = new Set(), this.offsets = {
            attributes: new Array(),
            geometry: new Array()
          }, this.centroid = new Array();
        }

        _createClass(r, [{
          key: "hasFieldIndex",
          value: function hasFieldIndex(e) {
            return this.fieldIndexMap.has(e);
          }
        }, {
          key: "isDateField",
          value: function isDateField(e) {
            return this.dateFields.has(e);
          }
        }, {
          key: "getFieldIndex",
          value: function getFieldIndex(e) {
            return this.fieldIndexMap.get(e);
          }
        }]);

        return r;
      }();

      function n(e) {
        var t = e.getLength(),
            r = e.pos() + t,
            n = {
          name: "",
          isDate: !1
        };

        for (; e.pos() < r && e.next();) {
          switch (e.tag()) {
            case 1:
              n.name = e.getString();
              break;

            case 2:
              "esriFieldTypeDate" === Object(_tasks_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__["parseFieldType"])(e.getEnum()) && (n.isDate = !0);
              break;

            default:
              e.skip();
          }
        }

        return n;
      }

      function a(s, a) {
        var i = s.pos(),
            o = new r();
        var d = 0,
            c = 0;
        var f = null,
            g = null,
            l = null,
            u = !1;

        for (; s.next();) {
          switch (s.tag()) {
            case 1:
              f = s.getString();
              break;

            case 3:
              g = s.getString();
              break;

            case 12:
              l = s.processMessage(_tasks_operations_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_1__["parseTransform"]);
              break;

            case 9:
              o.exceededTransferLimit = s.getBool(), o.exceededTransferLimit && (o.offsets.geometry = new Int32Array(8e3), o.centroid = new Int32Array(16e3));
              break;

            case 13:
              {
                var e = n(s),
                    t = e.name.toLowerCase().trim(),
                    _r12 = d++;

                o.fieldIndexMap.set(e.name, _r12), o.fieldIndexMap.set(t, _r12), e.isDate && (o.dateFields.add(e.name), o.dateFields.add(t));
                break;
              }

            case 15:
              {
                var _e8 = s.getLength(),
                    _t16 = s.pos() + _e8;

                if (!o.exceededTransferLimit) {
                  var _e9 = o.offsets.geometry,
                      _t17 = o.centroid;
                  _e9.push(0), _t17.push(268435455), _t17.push(268435455);
                }

                !u && o.exceededTransferLimit && (u = !0, o.offsets.attributes = new Uint32Array(8e3 * d));

                var _r13 = c * d;

                for (; s.pos() < _t16 && s.next();) {
                  switch (s.tag()) {
                    case 1:
                      {
                        if (u) o.offsets.attributes[_r13++] = s.pos();else {
                          o.offsets.attributes.push(s.pos());
                        }

                        var _e10 = s.getLength();

                        s.skipLen(_e10);
                        break;
                      }

                    case 2:
                      if (a) {
                        var _e11 = s.getLength(),
                            _t18 = s.pos() + _e11;

                        for (; s.pos() < _t18 && s.next();) {
                          switch (s.tag()) {
                            case 3:
                              {
                                s.getUInt32();

                                var _e12 = s.getSInt32(),
                                    _t19 = s.getSInt32();

                                o.centroid[2 * c] = _e12, o.centroid[2 * c + 1] = _t19;
                                break;
                              }

                            default:
                              s.skip();
                          }
                        }
                      } else {
                        o.offsets.geometry[c] = s.pos();

                        var _e13 = s.getLength();

                        s.skipLen(_e13);
                      }

                      break;

                    case 4:
                      {
                        var _e14 = s.getLength(),
                            _t20 = s.pos() + _e14;

                        for (; s.pos() < _t20 && s.next();) {
                          switch (s.tag()) {
                            case 3:
                              {
                                s.getUInt32();

                                var _e15 = s.getSInt32(),
                                    _t21 = s.getSInt32();

                                o.centroid[2 * c] = _e15, o.centroid[2 * c + 1] = _t21;
                                break;
                              }

                            default:
                              s.skip();
                          }
                        }

                        break;
                      }

                    default:
                      s.skip();
                  }
                }

                c++, o.hasFeatures = !0;
                break;
              }

            default:
              s.skip();
          }
        }

        var p = f || g;
        if (!p) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__["default"]("FeatureSet has no objectId or globalId field name");
        return o.featureCount = c, o.fieldCount = d, o.objectIdFieldIndex = o.getFieldIndex(p), o.transform = l, o.displayIds = new Uint32Array(o.featureCount), o.groupIds = new Uint16Array(o.featureCount), s.move(i), o;
      }
      /***/

    },

    /***/
    "DEW6":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/Pipeline.js ***!
      \************************************************************************/

    /*! exports provided: default, getInstances */

    /***/
    function DEW6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getInstances", function () {
        return d;
      });
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../layers/support/TileInfo.js */
      "3/ME");
      /* harmony import */


      var _ViewState_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../ViewState.js */
      "7Grl");
      /* harmony import */


      var _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../tiling/TileInfoView.js */
      "AY31");
      /* harmony import */


      var _support_TileStore_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./support/TileStore.js */
      "w5u1");
      /* harmony import */


      var _processors_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./processors.js */
      "amnZ");
      /* harmony import */


      var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./support/UpdateToken.js */
      "W0su");
      /* harmony import */


      var _controllers_FeatureController2D_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./controllers/FeatureController2D.js */
      "F2Bk");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = new Set();

      function d() {
        return u;
      }

      var m = /*#__PURE__*/function (_core_HandleOwner_js_) {
        _inherits(m, _core_HandleOwner_js_);

        var _super4 = _createSuper(m);

        function m() {
          var _this7;

          _classCallCheck(this, m);

          _this7 = _super4.apply(this, arguments), _this7.controller = null, _this7.processor = null, _this7.remoteClient = null, _this7.tileStore = null, _this7.service = null, _this7.viewState = null;
          return _this7;
        }

        _createClass(m, [{
          key: "initialize",
          value: function initialize() {
            var _this8 = this;

            this.handles.add(this.watch("updating", function (t) {
              _this8.remoteClient.invoke("setUpdating", t)["catch"](function (t) {});
            }));
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var t, e, r;
            null == (t = this.controller) || t.destroy(), null == (e = this.processor) || e.destroy(), null == (r = this.tileStore) || r.destroy(), this.controller = this.processor = this.tileStore = this.remoteClient = null;
          }
        }, {
          key: "updating",
          get: function get() {
            return !this.controller || this.controller.updating;
          }
        }, {
          key: "startup",
          value: function () {
            var _startup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref) {
              var t, e, r, _t22;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      t = _ref.service, e = _ref.config, r = _ref.tileInfo;

                      if (this.service = t, !this.tileStore) {
                        _t22 = new _tiling_TileInfoView_js__WEBPACK_IMPORTED_MODULE_13__["default"](_layers_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_11__["default"].fromJSON(r));
                        this.tileStore = new _support_TileStore_js__WEBPACK_IMPORTED_MODULE_14__["default"](_t22);
                      }

                      _context4.next = 4;
                      return this._configure(e);

                    case 4:
                      this.tileStore.clear();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function startup(_x) {
              return _startup.apply(this, arguments);
            }

            return startup;
          }()
        }, {
          key: "updateTiles",
          value: function () {
            var _updateTiles = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(t) {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.tileStore.updateTiles(t);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function updateTiles(_x2) {
              return _updateTiles.apply(this, arguments);
            }

            return updateTiles;
          }()
        }, {
          key: "update",
          value: function () {
            var _update = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref2) {
              var t, e, r;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      t = _ref2.config, e = _ref2.pause;
                      r = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_16__["UpdateToken"].empty();
                      _context6.next = 4;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])([this.processor.update(r, t), this.controller.update(r, t, e)]);

                    case 4:
                      return _context6.abrupt("return", r.toJSON());

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));

            function update(_x3) {
              return _update.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "invalidate",
          value: function () {
            var _invalidate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(t) {
              var e, r;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      e = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_16__["UpdateToken"].create(t), r = this.controller.invalidate(e);
                      _context7.next = 3;
                      return this.remoteClient.invoke("setUpdating", this.updating);

                    case 3:
                      return _context7.abrupt("return", r);

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function invalidate(_x4) {
              return _invalidate.apply(this, arguments);
            }

            return invalidate;
          }()
        }, {
          key: "setViewState",
          value: function setViewState(t) {
            var e = _ViewState_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(t);

            this._set("viewState", e);
          }
        }, {
          key: "_configure",
          value: function () {
            var _configure2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(t) {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["all"])([this._handleControllerConfig(t), this._handleProcessorConfig(t)]);

                    case 2:
                      this.controller.processor = this.processor;
                      _context8.next = 5;
                      return this.update({
                        config: t
                      });

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function _configure(_x5) {
              return _configure2.apply(this, arguments);
            }

            return _configure;
          }()
        }, {
          key: "_handleControllerConfig",
          value: function () {
            var _handleControllerConfig2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(t) {
              var e;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this._createController(this.service, t);

                    case 2:
                      e = _context9.sent;
                      _context9.next = 5;
                      return e.startup();

                    case 5:
                      return _context9.abrupt("return", e);

                    case 6:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));

            function _handleControllerConfig(_x6) {
              return _handleControllerConfig2.apply(this, arguments);
            }

            return _handleControllerConfig;
          }()
        }, {
          key: "_handleProcessorConfig",
          value: function () {
            var _handleProcessorConfig2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(t) {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", this._createProcessor(this.service, t));

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));

            function _handleProcessorConfig(_x7) {
              return _handleProcessorConfig2.apply(this, arguments);
            }

            return _handleProcessorConfig;
          }()
        }, {
          key: "_createController",
          value: function () {
            var _createController2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(t, e) {
              var r, o, s;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      this.controller && this.controller.destroy();
                      r = this.tileStore, o = this.remoteClient, s = new _controllers_FeatureController2D_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
                        service: t,
                        config: e,
                        tileStore: r,
                        remoteClient: o
                      });
                      return _context11.abrupt("return", (this.controller = s, s));

                    case 3:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));

            function _createController(_x8, _x9) {
              return _createController2.apply(this, arguments);
            }

            return _createController;
          }()
        }, {
          key: "_createProcessor",
          value: function () {
            var _createProcessor2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(t, e) {
              var r, o, s, i, n;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      r = e.schema.processors[0].type;
                      _context12.next = 3;
                      return Object(_processors_js__WEBPACK_IMPORTED_MODULE_15__["loadProcessorModule"])(r);

                    case 3:
                      o = _context12.sent["default"];
                      s = this.remoteClient;
                      i = this.tileStore;
                      n = new o({
                        service: t,
                        config: e,
                        tileStore: i,
                        remoteClient: s
                      });
                      return _context12.abrupt("return", (this.processor && this.processor.destroy(), this.processor = n, n));

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));

            function _createProcessor(_x10, _x11) {
              return _createProcessor2.apply(this, arguments);
            }

            return _createProcessor;
          }()
        }]);

        return m;
      }(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_10__["HandleOwner"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "controller", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "processor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])({
        dependsOn: ["controller.updating"]
      })], m.prototype, "updating", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__["property"])()], m.prototype, "viewState", void 0), m = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.views.2d.layers.features.Pipeline")], m);
      var f = m;
      /* harmony default export */

      __webpack_exports__["default"] = f;
      /***/
    },

    /***/
    "DxxZ":
    /*!*********************************************************************!*\
      !*** ./node_modules/@arcgis/core/core/accessorSupport/diffUtils.js ***!
      \*********************************************************************/

    /*! exports provided: diff, hasDiff, hasDiffAny, isEmpty */

    /***/
    function DxxZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "diff", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiff", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "hasDiffAny", function () {
        return a;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isEmpty", function () {
        return m;
      });
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../maybe.js */
      "srIe");
      /* harmony import */


      var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./utils.js */
      "TDcG");
      /* harmony import */


      var _Accessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Accessor.js */
      "/CmD");
      /* harmony import */


      var _Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Collection.js */
      "LE9a");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = ["esri.Color", "esri.portal.Portal", "esri.symbols.support.Symbol3DAnchorPosition2D", "esri.symbols.support.Symbol3DAnchorPosition3D"];

      function i(t) {
        return t instanceof _Accessor_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      }

      function c(t) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? Object.keys(t.items) : i(t) ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getProperties"])(t).keys() : t ? Object.keys(t) : [];
      }

      function u(t, e) {
        return t instanceof _Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? t.items[e] : t[e];
      }

      function l(t) {
        return t ? t.declaredClass : null;
      }

      function s(t, n) {
        var o = t.diff;
        if (o && "function" == typeof o) return o(t, n);
        var r = c(t),
            p = c(n);
        if (0 === r.length && 0 === p.length) return;
        if (!r.length || !p.length || function (t, e) {
          return !(!Array.isArray(t) || !Array.isArray(e)) && t.length !== e.length;
        }(t, n)) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var a = p.filter(function (t) {
          return -1 === r.indexOf(t);
        }),
            y = r.filter(function (t) {
          return -1 === p.indexOf(t);
        }),
            m = r.filter(function (e) {
          return p.indexOf(e) > -1 && u(t, e) !== u(n, e);
        }).concat(a, y).sort(),
            d = l(t);
        if (d && f.indexOf(d) > -1 && m.length) return {
          type: "complete",
          oldValue: t,
          newValue: n
        };
        var b;
        var h = i(t) && i(n);

        var _iterator2 = _createForOfIteratorHelper(m),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _r14 = _step2.value;

            var _f5 = u(t, _r14),
                _i5 = u(n, _r14);

            var _c3 = void 0;

            (h || "function" != typeof _f5 && "function" != typeof _i5) && _f5 !== _i5 && (null == _f5 && null == _i5 || (_c3 = o && o[_r14] && "function" == typeof o[_r14] ? o[_r14](_f5, _i5) : "object" == typeof _f5 && "object" == typeof _i5 && l(_f5) === l(_i5) ? s(_f5, _i5) : {
              type: "complete",
              oldValue: _f5,
              newValue: _i5
            }, Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_c3) && (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(b) ? b.diff[_r14] = _c3 : b = {
              type: "partial",
              diff: _defineProperty({}, _r14, _c3)
            })));
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return b;
      }

      function p(e, n) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !1;
        var o = n.split(".");
        var r = e;

        var _iterator3 = _createForOfIteratorHelper(o),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var t = _step3.value;
            if ("complete" === r.type) return !0;
            if ("partial" !== r.type) return !1;
            {
              var _e16 = r.diff[t];
              if (!_e16) return !1;
              r = _e16;
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return !0;
      }

      function a(t, e) {
        var _iterator4 = _createForOfIteratorHelper(e),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var n = _step4.value;
            if (p(t, n)) return !0;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }

        return !1;
      }

      function y(t, e) {
        if ("function" != typeof t && "function" != typeof e && (t || e)) return !t || !e || "object" == typeof t && "object" == typeof e && l(t) !== l(e) ? {
          type: "complete",
          oldValue: t,
          newValue: e
        } : s(t, e);
      }

      function m(e) {
        if (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return !0;

        switch (e.type) {
          case "complete":
            return !1;

          case "collection":
            {
              var t = e;

              var _iterator5 = _createForOfIteratorHelper(t.added),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _e17 = _step5.value;
                  if (!m(_e17)) return !1;
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              var _iterator6 = _createForOfIteratorHelper(t.removed),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _e18 = _step6.value;
                  if (!m(_e18)) return !1;
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              var _iterator7 = _createForOfIteratorHelper(t.changed),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _e19 = _step7.value;
                  if (!m(_e19)) return !1;
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              return !0;
            }

          case "partial":
            for (var _t23 in e.diff) {
              if (!m(e.diff[_t23])) return !1;
            }

            return !0;
        }
      }
      /***/

    },

    /***/
    "F2Bk":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/controllers/FeatureController2D.js ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function F2Bk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../core/watchUtils.js */
      "N5XI");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../layers/support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../core/HandleOwner.js */
      "kJYu");
      /* harmony import */


      var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../support/FeatureSetReaderJSON.js */
      "Q0oN");
      /* harmony import */


      var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../support/QueueProcessor.js */
      "tUFA");
      /* harmony import */


      var _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../support/AttributeStore.js */
      "2AbE");
      /* harmony import */


      var _support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../support/ComputedAttributeStorage.js */
      "Swtj");
      /* harmony import */


      var _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../FeatureStore2D.js */
      "DJok");
      /* harmony import */


      var _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../../../../layers/graphics/data/QueryEngine.js */
      "ZBG3");
      /* harmony import */


      var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../support/UpdateToken.js */
      "W0su");
      /* harmony import */


      var _Source2D_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../Source2D.js */
      "Wet9");
      /* harmony import */


      var _support_ClusterStore_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../support/ClusterStore.js */
      "HgRP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function C(e) {
        if (!Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAbortError"])(e) && !function (e) {
          return "worker:port-closed" === e.name;
        }(e)) throw e;
      }

      var j = /*#__PURE__*/function (_core_HandleOwner_js_2) {
        _inherits(j, _core_HandleOwner_js_2);

        var _super5 = _createSuper(j);

        function j() {
          var _this9;

          _classCallCheck(this, j);

          _this9 = _super5.apply(this, arguments), _this9._storage = new _support_ComputedAttributeStorage_js__WEBPACK_IMPORTED_MODULE_18__["ComputedAttributeStorage"](), _this9._markedIdsBufId = _this9._storage.createBitset(), _this9._lastCleanup = performance.now(), _this9._cleanupNeeded = !1, _this9._invalidated = !1, _this9._tileToResolver = new Map(), _this9.tileStore = null, _this9.config = null, _this9.processor = null, _this9.remoteClient = null, _this9.service = null, _this9._editing = !1;
          return _this9;
        }

        _createClass(j, [{
          key: "initialize",
          value: function initialize() {
            var _this10 = this;

            this._initAttributeStore(), this._initStores(), this._initQueryEngine(), this._initSource(), this._updateQueue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_16__["QueueProcessor"]({
              concurrency: 4,
              process: function process(e, t) {
                return _this10._onDisplayTilePatch(e, {
                  signal: t
                });
              }
            }), this.handles.add([this.tileStore.on("update", this.onTileUpdate.bind(this)), this.watch("updating", function (e) {
              return !e && _this10.onIdle();
            })]);
          }
        }, {
          key: "startup",
          value: function () {
            var _startup2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      this._initAttributeStore();

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));

            function startup() {
              return _startup2.apply(this, arguments);
            }

            return startup;
          }()
        }, {
          key: "_initSource",
          value: function _initSource() {
            var _this11 = this;

            this._source = new _Source2D_js__WEBPACK_IMPORTED_MODULE_22__["Source2D"](this.service, this.spatialReference, this.tileStore.tileScheme), this._source.onDisplayTilePatch = function (e, t) {
              return _this11._invalidated = !0, _this11._patchTile(e, t);
            }, this._source.canAcceptPatch = function () {
              return _this11._updateQueue.length < 50;
            };
            var e = this._source.sourceEvents;

            if ("geoevent" === e.type) {
              var t = e.events;
              this.handles.add([t.on("connectionStatus", function (e) {
                return _this11.remoteClient.invoke("setProperty", {
                  propertyName: "connectionStatus",
                  value: e
                })["catch"](C);
              }), t.on("errorString", function (e) {
                return _this11.remoteClient.invoke("setProperty", {
                  propertyName: "errorString",
                  value: e
                })["catch"](C);
              }), t.on("feature", function (e) {
                return _this11.remoteClient.invoke("emitEvent", {
                  name: "data-received",
                  event: {
                    attributes: e.attributes,
                    centroid: e.centroid,
                    geometry: e.geometry
                  }
                })["catch"](C);
              }), t.on("updateRate", function (e) {
                return _this11.remoteClient.invoke("emitEvent", {
                  name: "update-rate",
                  event: _objectSpread({}, e)
                })["catch"](C);
              })]);
            }
          }
        }, {
          key: "_initAttributeStore",
          value: function _initAttributeStore() {
            var _this12 = this;

            this.attributeStore ? this.attributeStore.invalidateResources() : this.attributeStore = new _support_AttributeStore_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
              type: "remote",
              initialize: function initialize(e, t) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["ignoreAbortErrors"])(_this12.remoteClient.invoke("tileRenderer.featuresView.attributeView.initialize", e, {
                  signal: t
                })["catch"](C));
              },
              update: function update(e, t) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["ignoreAbortErrors"])(_this12.remoteClient.invoke("tileRenderer.featuresView.attributeView.requestUpdate", e, {
                  signal: t
                })["catch"](C));
              },
              render: function render(e) {
                return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["ignoreAbortErrors"])(_this12.remoteClient.invoke("tileRenderer.featuresView.requestRender", void 0, {
                  signal: e
                })["catch"](C));
              }
            }, this.config);
          }
        }, {
          key: "_initStores",
          value: function _initStores() {
            var _this13 = this;

            var e = {
              geometryInfo: {
                geometryType: this.service.geometryType,
                hasM: !1,
                hasZ: !1
              },
              spatialReference: this.spatialReference,
              fieldsIndex: this.fieldsIndex,
              fields: this.service.fields
            };
            this.featureStore = new _FeatureStore2D_js__WEBPACK_IMPORTED_MODULE_19__["FeatureStore2D"](e, this._storage), this.aggregateStore = new _support_ClusterStore_js__WEBPACK_IMPORTED_MODULE_23__["ClusterStore"](e, this.spatialReference, this._storage), this.handles.add(this.aggregateStore.events.on("valueRangesChanged", function (e) {
              _this13.remoteClient.invoke("emitEvent", {
                name: "valueRangesChanged",
                event: {
                  valueRanges: e.valueRanges
                }
              })["catch"](C);
            }));
          }
        }, {
          key: "_initQueryEngine",
          value: function _initQueryEngine() {
            var e;
            var t = this;
            null == (e = this.queryEngine) || e.destroy(), this.queryEngine = new _layers_graphics_data_QueryEngine_js__WEBPACK_IMPORTED_MODULE_20__["default"]({
              definitionExpression: this.config.definitionExpression,
              fields: this.service.fields,
              geometryType: this.service.geometryType,
              objectIdField: this.service.objectIdField,
              hasM: !1,
              hasZ: !1,
              spatialReference: this.spatialReference.toJSON(),
              cacheSpatialQueries: !0,
              featureStore: this.featureStore,
              aggregateAdapter: {
                getFeatureObjectIds: function getFeatureObjectIds(e) {
                  return t.aggregateStore.getFeatureDisplayIdsForAggregate(e).map(function (e) {
                    return t.getObjectId(e);
                  });
                }
              },
              timeInfo: this.service.timeInfo
            });
          }
        }, {
          key: "destroy",
          value: function destroy() {
            this._updateQueue.destroy(), this._source.destroy(), this.queryEngine.destroy(), this.attributeStore && this.attributeStore.destroy();
          }
        }, {
          key: "fieldsIndex",
          get: function get() {
            return new _layers_support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_13__["default"](this.service.fields);
          }
        }, {
          key: "hasAggregates",
          get: function get() {
            return !!this.config.schema.targets.aggregate;
          }
        }, {
          key: "spatialReference",
          get: function get() {
            return this.tileStore.tileScheme.spatialReference;
          }
        }, {
          key: "updating",
          get: function get() {
            return this.isUpdating();
          }
        }, {
          key: "isUpdating",
          value: function isUpdating() {
            return this._source.updating || !!this._updateQueue.length;
          }
        }, {
          key: "enableEvent",
          value: function enableEvent(e) {
            this._source.enableEvent(e.name, e.value);
          }
        }, {
          key: "invalidate",
          value: function () {
            var _invalidate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(e) {
              var _this14 = this;

              var s, r, _iterator8, _step8, _e20;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      if (e.any()) {
                        _context14.next = 2;
                        break;
                      }

                      return _context14.abrupt("return");

                    case 2:
                      Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-2d-update-debug") && e.describe();
                      s = this.tileStore.tiles.map(function (_ref3) {
                        var e = _ref3.key;
                        var t = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])();
                        return _this14._tileToResolver.set(e.id, t), t.promise;
                      }), r = this._updateQueue.takeAll();

                      this._updateQueue.resume();

                      if (!(this.hasAggregates && e.mesh && e.targets.aggregate && !e.queryFilter)) {
                        _context14.next = 9;
                        break;
                      }

                      this._repushAggregateMeshTiles(e);

                      _context14.next = 15;
                      break;

                    case 9:
                      this._source.resubscribe(e);

                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])(s).then(function () {
                        _this14._source.resume();
                      });
                      _context14.t0 = e.mesh;

                      if (!_context14.t0) {
                        _context14.next = 15;
                        break;
                      }

                      _context14.next = 15;
                      return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["whenFalseOnce"])(this, "updating");

                    case 15:
                      this.notifyChange("updating");
                      _context14.next = 18;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])(s);

                    case 18:
                      this._updateQueue.pause();

                      _iterator8 = _createForOfIteratorHelper(r);

                      try {
                        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                          _e20 = _step8.value;

                          this._patchTile(_e20);
                        }
                      } catch (err) {
                        _iterator8.e(err);
                      } finally {
                        _iterator8.f();
                      }

                      e.source && (this._cleanupNeeded = !0);

                    case 22:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));

            function invalidate(_x12) {
              return _invalidate2.apply(this, arguments);
            }

            return invalidate;
          }()
        }, {
          key: "resume",
          value: function resume() {
            return this._updateQueue.resume(), this._source.resume();
          }
        }, {
          key: "update",
          value: function () {
            var _update2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(e, t) {
              var s,
                  _args15 = arguments;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      s = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : !1;
                      _context15.t0 = this._editing;

                      if (!_context15.t0) {
                        _context15.next = 5;
                        break;
                      }

                      _context15.next = 5;
                      return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["whenFalseOnce"])(this, "updating");

                    case 5:
                      s && (this._source.pause(), this._updateQueue.pause());

                      this._set("config", t);

                      this._schema = t.schema;

                      this._initQueryEngine();

                      _context15.next = 11;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["all"])([this._source.update(e, t.schema.source), this.featureStore.updateSchema(e, t.schema.targets.feature), this.attributeStore.update(e, t), this.attributeStore.updateFilters(e, this)]);

                    case 11:
                      _context15.next = 13;
                      return this.aggregateStore.updateSchema(e, t.schema.targets.aggregate);

                    case 13:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));

            function update(_x13, _x14) {
              return _update2.apply(this, arguments);
            }

            return update;
          }()
        }, {
          key: "refresh",
          value: function () {
            var _refresh = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      this._source.resubscribe(_support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__["UpdateToken"].all(), !0);

                      this._cleanupNeeded = !0;
                      this.notifyChange("updating");
                      _context16.next = 5;
                      return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["whenFalseOnce"])(this, "updating", !0);

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));

            function refresh() {
              return _refresh.apply(this, arguments);
            }

            return refresh;
          }()
        }, {
          key: "onTileUpdate",
          value: function onTileUpdate(e) {
            this.aggregateStore.onTileUpdate(e);

            var _iterator9 = _createForOfIteratorHelper(e.added),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var t = _step9.value;
                this._source.subscribe(t), this._level = t.level;
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            var _iterator10 = _createForOfIteratorHelper(e.removed),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _t24 = _step10.value;
                this._source.unsubscribe(_t24), this._cleanupNeeded = !0, this._tileToResolver.has(_t24.id) && (this._tileToResolver.get(_t24.id).resolve(), this._tileToResolver["delete"](_t24.id));
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            this.notifyChange("updating");
          }
        }, {
          key: "onIdle",
          value: function onIdle() {
            this.hasAggregates && this._invalidated && (this._repushAggregateMeshTiles(), this._invalidated = !1), this._markAndSweep();
          }
        }, {
          key: "onEdits",
          value: function () {
            var _onEdits = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(e) {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      if (!this._editing) {
                        _context17.next = 6;
                        break;
                      }

                      _context17.next = 3;
                      return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["whenFalseOnce"])(this, "updating");

                    case 3:
                      _context17.next = 5;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["after"])(16);

                    case 5:
                      return _context17.abrupt("return", this.onEdits(e));

                    case 6:
                      this._editing = !0;
                      _context17.prev = 7;
                      _context17.next = 10;
                      return this._source.onEdits(e);

                    case 10:
                      _context17.next = 12;
                      return Object(_core_watchUtils_js__WEBPACK_IMPORTED_MODULE_11__["whenFalseOnce"])(this, "updating");

                    case 12:
                      _context17.next = 16;
                      break;

                    case 14:
                      _context17.prev = 14;
                      _context17.t0 = _context17["catch"](7);

                    case 16:
                      this._editing = !1;

                    case 17:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[7, 14]]);
            }));

            function onEdits(_x15) {
              return _onEdits.apply(this, arguments);
            }

            return onEdits;
          }()
        }, {
          key: "queryExtent",
          value: function queryExtent(e) {
            return this.queryEngine.executeQueryForExtent(e);
          }
        }, {
          key: "queryFeatures",
          value: function queryFeatures(e) {
            return this.queryEngine.executeQuery(e);
          }
        }, {
          key: "queryFeatureCount",
          value: function queryFeatureCount(e) {
            return this.queryEngine.executeQueryForCount(e);
          }
        }, {
          key: "queryLatestObservations",
          value: function queryLatestObservations(e) {
            return this.queryEngine.executeQueryForLatestObservations(e);
          }
        }, {
          key: "queryObjectIds",
          value: function queryObjectIds(e) {
            return this.queryEngine.executeQueryForIds(e);
          }
        }, {
          key: "queryStatistics",
          value: function () {
            var _queryStatistics = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", _objectSpread(_objectSpread({}, this.featureStore.storeStatistics), {}, {
                        displayedFeatureCount: 0,
                        displayedVertexCount: 0,
                        displayPreProcessTime: 0
                      }));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));

            function queryStatistics() {
              return _queryStatistics.apply(this, arguments);
            }

            return queryStatistics;
          }()
        }, {
          key: "getObjectId",
          value: function getObjectId(e) {
            return this.featureStore.lookupObjectId(e, this._storage);
          }
        }, {
          key: "getDisplayId",
          value: function getDisplayId(e) {
            if (this._schema.targets.aggregate) {
              var t = this.aggregateStore.getDisplayId(e);

              if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)) {
                var _t25 = this.featureStore.lookupDisplayId(e);

                return this.aggregateStore.getDisplayIdForReferenceId(_t25);
              }

              return t;
            }

            return this.featureStore.lookupDisplayId(e);
          }
        }, {
          key: "getFeature",
          value: function getFeature(e) {
            var t = this.featureStore.lookupFeatureByDisplayId(e, this._storage);
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(t)) return null;
            var r = t.readHydratedGeometry(),
                i = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_12__["convertToGeometry"])(r, t.geometryType, t.hasZ, t.hasM);
            return {
              attributes: t.readAttributes(),
              geometry: i
            };
          }
        }, {
          key: "getAggregate",
          value: function getAggregate(e) {
            return this.aggregateStore.getAggregate(e);
          }
        }, {
          key: "setHighlight",
          value: function () {
            var _setHighlight = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19(e) {
              var _this15 = this;

              var t;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      t = e.map(function (e) {
                        return _this15.getDisplayId(e);
                      });
                      return _context19.abrupt("return", this.attributeStore.setHighlight(e, t));

                    case 2:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));

            function setHighlight(_x16) {
              return _setHighlight.apply(this, arguments);
            }

            return setHighlight;
          }()
        }, {
          key: "_repushAggregateMeshTiles",
          value: function _repushAggregateMeshTiles(e) {
            var _iterator11 = _createForOfIteratorHelper(this.tileStore.tiles),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var t = _step11.value;

                this._patchTile({
                  type: "replace",
                  id: t.key.id,
                  addOrUpdate: _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_15__["FeatureSetReaderJSON"].fromOptimizedFeatures([], this.service.geometryType),
                  remove: [],
                  end: !0,
                  noData: !1,
                  update: e || _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_21__["UpdateToken"].create({
                    mesh: !0,
                    targets: {
                      aggregate: !0
                    }
                  })
                });
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }
          }
        }, {
          key: "_maybeForceCleanup",
          value: function _maybeForceCleanup() {
            performance.now() - this._lastCleanup > 5e3 && this._markAndSweep();
          }
        }, {
          key: "_patchTile",
          value: function _patchTile(e, t) {
            var _this16 = this;

            var s = this._updateQueue.push(e, t).then(function () {
              _this16.notifyChange("updating");
            })["catch"](function (e) {
              _this16.notifyChange("updating");
            });

            return this.notifyChange("updating"), s;
          }
        }, {
          key: "_onDisplayTilePatch",
          value: function () {
            var _onDisplayTilePatch2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(e, t) {
              var r, i, a, _iterator12, _step12, _t26, _a6, o;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["throwIfAborted"])(t);
                      r = this.tileStore.get(e.id);

                      if (r) {
                        _context20.next = 4;
                        break;
                      }

                      return _context20.abrupt("return");

                    case 4:
                      i = e.update;
                      e.remove.length && (this._cleanupNeeded = !0);
                      a = [];
                      _iterator12 = _createForOfIteratorHelper(e.remove);

                      try {
                        for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                          _t26 = _step12.value;
                          a.push(this.featureStore.lookupDisplayId(_t26));
                        }
                      } catch (err) {
                        _iterator12.e(err);
                      } finally {
                        _iterator12.f();
                      }

                      e.remove = a;
                      _context20.prev = 10;

                      if (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e.addOrUpdate)) {
                        _context20.next = 13;
                        break;
                      }

                      return _context20.abrupt("return", (this.processor.onTileData(r, _objectSpread(_objectSpread({}, e), {}, {
                        addOrUpdate: null
                      }), t)["catch"](function (e) {
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["throwIfNotAbortError"])(e);
                      }), void this._finishedPatch(e)));

                    case 13:
                      e.addOrUpdate._storage = this._storage;
                      _a6 = e.addOrUpdate.hasFilter(), o = e.addOrUpdate.instance;
                      e.addOrUpdate._arcadeSpatialReference = this.spatialReference;
                      (!this.featureStore.hasInstance(o) || i.targets.feature && !_a6) && this.featureStore.onTileData(r, e, this._storage);
                      _context20.t0 = !i.storage.data && !i.storage.filters || _a6;

                      if (_context20.t0) {
                        _context20.next = 26;
                        break;
                      }

                      this.attributeStore.onTileData(r, e);

                      if (!this._source.isStream) {
                        _context20.next = 25;
                        break;
                      }

                      _context20.next = 23;
                      return this.attributeStore.sendUpdates();

                    case 23:
                      _context20.next = 26;
                      break;

                    case 25:
                      this.attributeStore.sendUpdates();

                    case 26:
                      _context20.t1 = this.hasAggregates && i.targets.aggregate;

                      if (!_context20.t1) {
                        _context20.next = 34;
                        break;
                      }

                      this.aggregateStore.onTileData(r, e, this._storage, this.attributeStore, i.mesh);
                      _context20.t2 = i.mesh;

                      if (!_context20.t2) {
                        _context20.next = 34;
                        break;
                      }

                      this.attributeStore.onTileData(r, e);
                      _context20.next = 34;
                      return this.attributeStore.sendUpdates();

                    case 34:
                      _context20.t3 = i.mesh;

                      if (!_context20.t3) {
                        _context20.next = 38;
                        break;
                      }

                      _context20.next = 38;
                      return this.processor.onTileData(r, e, t);

                    case 38:
                      this._maybeForceCleanup();

                      this._finishedPatch(e);

                      _context20.next = 45;
                      break;

                    case 42:
                      _context20.prev = 42;
                      _context20.t4 = _context20["catch"](10);
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["throwIfNotAbortError"])(_context20.t4);

                    case 45:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this, [[10, 42]]);
            }));

            function _onDisplayTilePatch(_x17, _x18) {
              return _onDisplayTilePatch2.apply(this, arguments);
            }

            return _onDisplayTilePatch;
          }()
        }, {
          key: "_finishedPatch",
          value: function _finishedPatch(e) {
            if ((e.noData || e.end) && this._tileToResolver.has(e.id)) {
              this._tileToResolver.get(e.id).resolve(), this._tileToResolver["delete"](e.id);
            }
          }
        }, {
          key: "_markAndSweep",
          value: function _markAndSweep() {
            var _this17 = this;

            if (this._lastCleanup = performance.now(), !this._cleanupNeeded && !this._source.isStream) return;
            this._cleanupNeeded = !1;

            var e = this._storage.getBitset(this._markedIdsBufId),
                t = new Set();

            e.clear();

            var r = function r(s) {
              var r = _this17.featureStore.lookupDisplayId(s),
                  i = (4294901760 & _this17._storage.getInstanceId(r)) >>> 16;

              r && (t.add(i), e.set(r));
            };

            var _iterator13 = _createForOfIteratorHelper(this.tileStore.tiles),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _e21 = _step13.value;

                this._source.forEachRequest(_e21.key.id, function (e) {
                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e.features)) return;
                  var t = e.features.getCursor();

                  for (; t.next();) {
                    var _e22 = t.getObjectId();

                    r(_e22);
                  }
                });
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            this._source.forEachPendingEdit(function (e) {
              return r(e);
            }), this._updateQueue.forEach(function (e) {
              var _iterator14 = _createForOfIteratorHelper(e.remove),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _t27 = _step14.value;
                  r(_t27);
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }), this.config.schema.targets.aggregate && (this.aggregateStore.sweepFeatures(e, this.featureStore), this.aggregateStore.sweepClusters(this._storage, this.attributeStore, this._level)), this.featureStore.sweepFeatures(e, this._storage, this.attributeStore), this.featureStore.sweepFeatureSets(t);
          }
        }]);

        return j;
      }(_core_HandleOwner_js__WEBPACK_IMPORTED_MODULE_14__["HandleOwner"]);

      Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], j.prototype, "tileStore", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], j.prototype, "config", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        readOnly: !0,
        dependsOn: ["service"]
      })], j.prototype, "fieldsIndex", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], j.prototype, "processor", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], j.prototype, "remoteClient", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        constructOnly: !0
      })], j.prototype, "service", void 0), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])({
        dependsOn: ["tileStore"]
      })], j.prototype, "spatialReference", null), Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__["property"])()], j.prototype, "updating", null), j = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.views.2d.layers.features.controllers.FeatureController2D")], j);
      var R = j;
      /* harmony default export */

      __webpack_exports__["default"] = R;
      /***/
    },

    /***/
    "HgRP":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/ClusterStore.js ***!
      \************************************************************************************/

    /*! exports provided: ClusterInfo, ClusterStore */

    /***/
    function HgRP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClusterInfo", function () {
        return R;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClusterStore", function () {
        return C;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../geometry/support/Ellipsoid.js */
      "IlWj");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedFeature.js */
      "k5I3");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../../geohash/geohashUtils.js */
      "04fk");
      /* harmony import */


      var _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./FeatureSetReaderJSON.js */
      "Q0oN");
      /* harmony import */


      var _geohash_GeohashTree_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../../geohash/GeohashTree.js */
      "y/iQ");
      /* harmony import */


      var _layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../../layers/graphics/data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _Store2D_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../Store2D.js */
      "hIOP");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var R = /*#__PURE__*/function (_layers_graphics_Opti) {
        _inherits(R, _layers_graphics_Opti);

        var _super6 = _createSuper(R);

        function R(e, t, s, r, a) {
          var _this18;

          _classCallCheck(this, R);

          _this18 = _super6.call(this, new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_9__["default"]([], [t, s]), r, null, e), _this18.geohashBoundsInfo = a;
          return _this18;
        }

        _createClass(R, [{
          key: "count",
          get: function get() {
            return this.attributes.cluster_count;
          }
        }, {
          key: "update",
          value: function update(e, t, s, r, a, i) {
            return this.geometry.coords[0] = e, this.geometry.coords[1] = t, this.tileLevel = s, this.attributes = r, this.geohashBoundsInfo = a, this.referenceId = null, this.referenceId = i, this;
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              objectId: this.objectId,
              referenceId: 1 === this.attributes.cluster_count ? this.referenceId : null,
              attributes: _objectSpread(_objectSpread({}, this.attributes), {}, {
                clusterId: this.objectId
              }),
              geometry: {
                x: this.geometry.coords[0],
                y: this.geometry.coords[1]
              }
            };
          }
        }], [{
          key: "create",
          value: function create(e, t, s, r, a, i, o, h) {
            var l = new R(t, s, r, i, o);
            return l.displayId = e.createDisplayId(!0), l.referenceId = h, l.tileLevel = a, l;
          }
        }]);

        return R;
      }(_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_8__["default"]);

      function M(e) {
        return 57.29577951308232 * e;
      }

      var C = /*#__PURE__*/function (_Store2D_js__WEBPACK_) {
        _inherits(C, _Store2D_js__WEBPACK_);

        var _super7 = _createSuper(C);

        function C(e, t, s) {
          var _this19;

          _classCallCheck(this, C);

          _this19 = _super7.call(this, e, s), _this19.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_6__["default"](), _this19._geohashLevel = 0, _this19._aggregateValueRanges = {}, _this19._aggregateValueRangesChanged = !1, _this19._geohashBuf = [], _this19._clusters = new Map(), _this19._tiles = new Map(), _this19.geometryInfo = e.geometryInfo, _this19._spatialReference = t, _this19._projectionSupportCheck = Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["checkProjectionSupport"])(t, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84), _this19._bitsets.geohash = s.getBitset(s.createBitset()), _this19._bitsets.inserted = s.getBitset(s.createBitset());
          return _this19;
        }

        _createClass(C, [{
          key: "updateSchema",
          value: function () {
            var _updateSchema = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(s, r) {
              var a, i;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      a = this._schema;
                      _context21.prev = 1;
                      _context21.next = 4;
                      return _get(_getPrototypeOf(C.prototype), "updateSchema", this).call(this, s, r);

                    case 4:
                      _context21.next = 6;
                      return this._projectionSupportCheck;

                    case 6:
                      _context21.next = 10;
                      break;

                    case 8:
                      _context21.prev = 8;
                      _context21.t0 = _context21["catch"](1);

                    case 10:
                      i = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__["diff"])(a, r);
                      s.mesh && (s.targets.aggregate = !0), r && (!Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(i) || s.source || s.storage.filters) && ((Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__["hasDiff"])(i, "params.fields") || !this._tree || s.source) && (this._tree = new _geohash_GeohashTree_js__WEBPACK_IMPORTED_MODULE_13__["GeohashTree"](this._statisticFields), this._rebuildTree(), Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Aggregate mesh needs update due to tree changing")), Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Applying Update - ClusterStore:", i), s.mesh = !0, s.targets[r.name] = !0, this._aggregateValueRanges = {});

                    case 12:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this, [[1, 8]]);
            }));

            function updateSchema(_x19, _x20) {
              return _updateSchema.apply(this, arguments);
            }

            return updateSchema;
          }()
        }, {
          key: "sweepFeatures",
          value: function sweepFeatures(e, t) {
            var _this20 = this;

            this._bitsets.inserted.forEachSet(function (s) {
              if (!e.has(s)) {
                var _e23 = t.lookupByDisplayIdUnsafe(s);

                _this20._remove(_e23);
              }
            });
          }
        }, {
          key: "sweepClusters",
          value: function sweepClusters(e, t, s) {
            var _this21 = this;

            this._clusters.forEach(function (r, a) {
              r && r.tileLevel !== s && (e.releaseDisplayId(r.displayId), t.unsetAttributeData(r.displayId), _this21._clusters["delete"](a));
            });
          }
        }, {
          key: "onTileData",
          value: function onTileData(e, s, r, a, i) {
            if (!this._schema || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(s.addOrUpdate)) return s;

            var o = this._tree,
                h = this._getTransforms(e, this._spatialReference);

            {
              var _e24 = s.addOrUpdate.getCursor();

              for (; _e24.next();) {
                this._update(_e24, a, o);
              }
            }
            if (!i) return s;
            var l = new Array(),
                n = this._schema.params.clusterRadius;
            this._getClustersForTile(l, e, n, r, o, h), s.type = "replace" === s.type ? "replace" : "update", s.addOrUpdate = _FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_12__["FeatureSetReaderJSON"].fromOptimizedFeatures(l, "esriGeometryPoint"), s.addOrUpdate._storage = r;
            {
              var t = s.addOrUpdate.getCursor();

              for (; t.next();) {
                var _s5 = t.getDisplayId();

                this._bitsets.computed.unset(_s5), this.setComputedAttributes(r, t, _s5, e.scale);
              }
            }
            return this._aggregateValueRangesChanged && s.end && (this.events.emit("valueRangesChanged", {
              valueRanges: this._aggregateValueRanges
            }), this._aggregateValueRangesChanged = !1), s;
          }
        }, {
          key: "onTileUpdate",
          value: function onTileUpdate(_ref4) {
            var _this22 = this;

            var e = _ref4.added,
                t = _ref4.removed;

            if (e.length) {
              var _t28 = e[0].level;

              this._setGeohashLevel(_t28);
            }

            if (!this._schema) return;
            var s = this._schema.params.clusterRadius;
            t.forEach(function (e) {
              _this22._tiles["delete"](e.key.id), _this22._markTileClustersForDeletion(e, s);
            });
          }
        }, {
          key: "getAggregate",
          value: function getAggregate(e) {
            var t = null;
            return this._clusters.forEach(function (s) {
              s && s.displayId === e && (t = s.toJSON());
            }), t;
          }
        }, {
          key: "getDisplayId",
          value: function getDisplayId(e) {
            var t = this._clusters.get(e);

            return t ? t.displayId : null;
          }
        }, {
          key: "getFeatureDisplayIdsForAggregate",
          value: function getFeatureDisplayIdsForAggregate(e) {
            var t = this._clusters.get(e);

            if (!t) return [];
            var s = t.geohashBoundsInfo;
            return this._tree.getRegionDisplayIds(s.xLL, s.yLL, s.xTR, s.yTR, s.level);
          }
        }, {
          key: "getDisplayIdForReferenceId",
          value: function getDisplayIdForReferenceId(e) {
            var t;
            return this._clusters.forEach(function (s) {
              s && s.referenceId === e && (t = s.displayId);
            }), t;
          }
        }, {
          key: "getAggregateValueRanges",
          value: function getAggregateValueRanges() {
            return this._aggregateValueRanges;
          }
        }, {
          key: "forEach",
          value: function forEach(e) {
            this._clusters.forEach(function (t, s) {
              t && e(t, s);
            });
          }
        }, {
          key: "size",
          value: function size() {
            var e = 0;
            return this.forEach(function (t) {
              return e++;
            }), e;
          }
        }, {
          key: "_rebuildTree",
          value: function _rebuildTree() {
            this._bitsets.computed.clear(), this._bitsets.inserted.clear(), this._bitsets.geohash.clear(), this._tree && this._tree.clear();
          }
        }, {
          key: "_remove",
          value: function _remove(e) {
            var t = e.getDisplayId(),
                s = e.getXHydrate(),
                r = e.getYHydrate(),
                a = this._geohashBuf[2 * t],
                i = this._geohashBuf[2 * t + 1];
            this._bitsets.inserted.has(t) && (this._bitsets.inserted.unset(t), this._tree.removeCursor(e, s, r, a, i, this._geohashLevel));
          }
        }, {
          key: "_update",
          value: function _update(e, t, s) {
            var r = e.getDisplayId(),
                a = this._bitsets.inserted,
                i = t.isVisible(r);
            if (i === a.has(r)) return;
            if (!i) return void this._remove(e);
            var o = e.getXHydrate(),
                h = e.getYHydrate();
            if (!this._setGeohash(r, o, h)) return;
            var l = this._geohashBuf[2 * r],
                n = this._geohashBuf[2 * r + 1];
            s.insertCursor(e, r, o, h, l, n, this._geohashLevel), a.set(r);
          }
        }, {
          key: "_setGeohash",
          value: function _setGeohash(e, t, s) {
            if (this._bitsets.geohash.has(e)) return !0;
            var r = this._geohashBuf;

            if (this._spatialReference.isWebMercator) {
              var a = M(t / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius),
                  i = a - 360 * Math.floor((a + 180) / 360),
                  h = M(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * s / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius)));
              Object(_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_11__["setGeohashBuf"])(r, e, h, i, 12);
            } else {
              var _a7 = Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])({
                x: t,
                y: s
              }, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84);

              if (!_a7) return !1;
              Object(_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_11__["setGeohashBuf"])(r, e, _a7.y, _a7.x, 12);
            }

            return this._bitsets.geohash.set(e), !0;
          }
        }, {
          key: "_getClustersForTile",
          value: function _getClustersForTile(e, a, i, o, h, l) {
            var _this23 = this;

            var n = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : !0;

            var c = this._schema.params.clusterPixelBuffer,
                p = 2 * i,
                f = this._getGeohashLevel(a.key.level),
                _ = Math.ceil(Math.pow(2, a.key.level) * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"] / p),
                m = Math.ceil(c / p) + 0,
                y = Math.ceil(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"] / p),
                _a$key = a.key,
                I = _a$key.row,
                v = _a$key.col,
                R = v * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                M = I * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                _C = Math.floor(R / p) - m,
                x = Math.floor(M / p) - m,
                w = _C + y + 2 * m,
                L = x + y + 2 * m,
                j = a.tileInfoView.getLODInfoAt(a.key.level);

            for (var _i6 = _C; _i6 <= w; _i6++) {
              var _loop = function _loop(_c4) {
                var p = _i6;
                j.wrap && (p = _i6 < 0 ? _i6 + _ : _i6 % _);

                var m = j.wrap && _i6 < 0,
                    y = j.wrap && _i6 % _ !== _i6,
                    I = _this23._lookupCluster(o, j, a.key.level, p, _c4, f, h);

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(I)) {
                  var _a8 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(l, function (e) {
                    return m ? e.left : y ? e.right : e.tile;
                  });

                  if (n && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(_a8)) return "continue";
                  if (!I.count) return "continue";

                  if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(_a8) && n) {
                    var t = I.geometry.clone();
                    var r = I.attributes;
                    t.coords[0] = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__["quantizeX"])(_a8, t.coords[0]), t.coords[1] = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_10__["quantizeY"])(_a8, t.coords[1]), 1 === I.count && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(I.referenceId) && (r = _objectSpread(_objectSpread({}, I.attributes), {}, {
                      referenceId: I.referenceId
                    }));

                    var _i7 = new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_8__["default"](t, r);

                    _i7.displayId = I.displayId, e.push(_i7);
                  }
                }
              };

              for (var _c4 = x; _c4 <= L; _c4++) {
                var _ret = _loop(_c4);

                if (_ret === "continue") continue;
              }
            }
          }
        }, {
          key: "_getGeohashLevel",
          value: function _getGeohashLevel(e) {
            return Math.min(Math.ceil(e / 2 + 2), 12);
          }
        }, {
          key: "_setGeohashLevel",
          value: function _setGeohashLevel(e) {
            var t = this._getGeohashLevel(e),
                s = 1 * (Math.floor(t / 1) + 1) - 1;

            if (this._geohashLevel !== s) return this._geohashLevel = s, void this._rebuildTree();
          }
        }, {
          key: "_getTransforms",
          value: function _getTransforms(e, t) {
            var s = {
              originPosition: "upperLeft",
              scale: [e.resolution, e.resolution],
              translate: [e.bounds[0], e.bounds[3]]
            },
                r = Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__["getInfo"])(t);
            if (!r) return {
              tile: s,
              left: null,
              right: null
            };

            var _r$valid = _slicedToArray(r.valid, 2),
                i = _r$valid[0],
                o = _r$valid[1];

            return {
              tile: s,
              left: _objectSpread(_objectSpread({}, s), {}, {
                translate: [o, e.bounds[3]]
              }),
              right: _objectSpread(_objectSpread({}, s), {}, {
                translate: [i - o + e.bounds[0], e.bounds[3]]
              })
            };
          }
        }, {
          key: "_getClusterId",
          value: function _getClusterId(e, t, s) {
            return (15 & e) << 28 | (16383 & t) << 14 | 16383 & s;
          }
        }, {
          key: "_markForDeletion",
          value: function _markForDeletion(e, t, s) {
            var r = this._getClusterId(e, t, s);

            this._clusters["delete"](r);
          }
        }, {
          key: "_getClusterBounds",
          value: function _getClusterBounds(e, t, s) {
            var r = this._schema.params.clusterRadius,
                a = 2 * r;
            var i = s % 2 ? t * a : t * a - r;
            var o = s * a;
            var h = i + a;

            var l = o - a,
                n = Math.pow(2, e.level) * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"];

            e.wrap && i < 0 && (i = 0), e.wrap && h > n && (h = n);
            var u = i / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                c = o / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                g = h / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                d = l / _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"];
            return [e.getXForColumn(u), e.getYForRow(c), e.getXForColumn(g), e.getYForRow(d)];
          }
        }, {
          key: "_lookupCluster",
          value: function _lookupCluster(e, t, r, a, h, l, n) {
            var u = this._getClusterId(r, a, h),
                c = this._clusters.get(u),
                _this$_getClusterBoun = this._getClusterBounds(t, a, h),
                _this$_getClusterBoun2 = _slicedToArray(_this$_getClusterBoun, 4),
                g = _this$_getClusterBoun2[0],
                d = _this$_getClusterBoun2[1],
                p = _this$_getClusterBoun2[2],
                _ = _this$_getClusterBoun2[3],
                m = {
              x: g,
              y: d
            },
                y = {
              x: p,
              y: _
            };

            var b = 0,
                v = 0,
                _C2 = 0,
                x = 0;

            if (this._spatialReference.isWebMercator) {
              {
                var _e25 = M(m.x / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius);

                b = _e25 - 360 * Math.floor((_e25 + 180) / 360), v = M(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * m.y / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius)));
              }
              {
                var _e26 = M(y.x / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius);

                _C2 = _e26 - 360 * Math.floor((_e26 + 180) / 360), x = M(Math.PI / 2 - 2 * Math.atan(Math.exp(-1 * y.y / _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_4__["earth"].radius)));
              }
            } else {
              var _e27 = Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(m, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84),
                  _t29 = Object(_layers_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_14__["project"])(y, this._spatialReference, _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__["default"].WGS84);

              if (!_e27 || !_t29) return null;
              b = _e27.x, v = _e27.y, _C2 = _t29.x, x = _t29.y;
            }

            var w = {
              geohashX: 0,
              geohashY: 0
            },
                L = {
              geohashX: 0,
              geohashY: 0
            };
            Object(_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_11__["setGeohashXY"])(w, v, b, l), Object(_geohash_geohashUtils_js__WEBPACK_IMPORTED_MODULE_11__["setGeohashXY"])(L, x, _C2, l);
            var j = w.geohashX,
                V = w.geohashY,
                F = L.geohashX,
                S = L.geohashY,
                D = {
              xLL: j,
              yLL: V,
              xTR: F,
              yTR: S,
              level: l
            },
                T = n.getRegionStatistics(j, V, F, S, l),
                k = T.count,
                B = T.xTotal,
                G = T.yTotal,
                O = T.referenceId,
                U = k ? B / k : 0,
                A = k ? G / k : 0;
            if (0 === k) return this._clusters.set(u, null), null;

            var E = _objectSpread({
              cluster_count: k
            }, T.attributes),
                X = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(c) ? c.update(U, A, r, E, D, O) : R.create(e, u, U, A, r, E, D, O);

            return 0 === k && (X.geometry.coords[0] = (g + p) / 2, X.geometry.coords[1] = (d + _) / 2), this._clusters.set(u, X), this._updateAggregateValueRangeForCluster(X, X.tileLevel), X;
          }
        }, {
          key: "_updateAggregateValueRangeForCluster",
          value: function _updateAggregateValueRangeForCluster(e, t) {
            var s = this._aggregateValueRanges[t] || {
              minValue: 1 / 0,
              maxValue: 0
            },
                r = s.minValue,
                a = s.maxValue;
            s.minValue = Math.min(r, e.count), s.maxValue = Math.max(a, e.count), this._aggregateValueRanges[t] = s, r === s.minValue && a === s.maxValue || (this._aggregateValueRangesChanged = !0);
          }
        }, {
          key: "_markTileClustersForDeletion",
          value: function _markTileClustersForDeletion(e, t) {
            var s = 2 * t,
                r = Math.ceil(_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"] / s),
                _e$key = e.key,
                a = _e$key.row,
                i = _e$key.col,
                o = i * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                h = a * _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_15__["TILE_SIZE"],
                l = Math.floor(o / s),
                n = Math.floor(h / s);

            for (var _t30 = l; _t30 < l + r; _t30++) {
              for (var _s6 = n; _s6 < n + r; _s6++) {
                this._markForDeletion(e.key.level, _t30, _s6);
              }
            }
          }
        }]);

        return C;
      }(_Store2D_js__WEBPACK_IMPORTED_MODULE_16__["Store2D"]);
      /***/

    },

    /***/
    "Vj25":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js ***!
      \*******************************************************************************************/

    /*! exports provided: createConnection */

    /***/
    function Vj25(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createConnection", function () {
        return t;
      });
      /* harmony import */


      var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./WebSocketConnection.js */
      "A3K4");
      /* harmony import */


      var _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./GeoEventConnection.js */
      "fKt0");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function t(t, o, r, c, i, s, a) {
        var p = 0 === t.path.indexOf("wss://") || 0 === t.path.indexOf("ws://"),
            f = {
          source: t,
          sourceSpatialReference: o,
          spatialReference: r,
          geometryType: c,
          filter: i,
          maxReconnectionAttempts: s,
          maxReconnectionInterval: a
        };
        return p ? new _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_0__["WebSocketConnection"](f) : new _GeoEventConnection_js__WEBPACK_IMPORTED_MODULE_1__["default"](f);
      }
      /***/

    },

    /***/
    "W0su":
    /*!***********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/UpdateToken.js ***!
      \***********************************************************************************/

    /*! exports provided: UpdateToken */

    /***/
    function W0su(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UpdateToken", function () {
        return t;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.source = !1, this.targets = {
            feature: !1,
            aggregate: !1
          }, this.storage = {
            filters: !1,
            data: !1
          }, this.mesh = !1, this.queryFilter = !1, this.why = {
            mesh: [],
            source: []
          };
        }

        _createClass(t, [{
          key: "any",
          value: function any() {
            return this.source || this.mesh || this.storage.filters || this.storage.data || this.targets.feature || this.targets.aggregate || this.queryFilter;
          }
        }, {
          key: "describe",
          value: function describe() {
            var _t32 = 0,
                e = "";

            if (this.mesh) {
              _t32 += 20, e += "-> (20) Mesh needs update\n";

              var _iterator15 = _createForOfIteratorHelper(this.why.mesh),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _t35 = _step15.value;
                  e += "    + ".concat(_t35, "\n");
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }
            }

            if (this.source) {
              _t32 += 10, e += "-> (10) The source needs update\n";

              var _iterator16 = _createForOfIteratorHelper(this.why.source),
                  _step16;

              try {
                for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                  var _t36 = _step16.value;
                  e += "    + ".concat(_t36, "\n");
                }
              } catch (err) {
                _iterator16.e(err);
              } finally {
                _iterator16.f();
              }
            }

            this.targets.feature && (_t32 += 5, e += "-> (5) Feature target parameters changed\n"), this.storage.filters && (_t32 += 5, e += "-> (5) Feature filter parameters changed\n"), this.targets.aggregate && (_t32 += 4, e += "-> (4) Aggregate target parameters changed\n"), this.storage.data && (_t32 += 1, e += "-> (1) Texture storage parameters changed");
            var s = _t32 < 5 ? "Fastest" : _t32 < 10 ? "Fast" : _t32 < 15 ? "Moderate" : _t32 < 20 ? "Slow" : "Very Slow";
            console.debug("Applying ".concat(s, " update of cost ").concat(_t32, "/45 ")), console.debug(e);
          }
        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              source: this.source,
              targets: this.targets,
              storage: this.storage,
              mesh: this.mesh,
              queryFilter: this.queryFilter
            };
          }
        }], [{
          key: "create",
          value: function create(e) {
            var s = new t();

            for (var _t37 in e) {
              var r = e[_t37];
              if ("object" == typeof r) for (var _e28 in r) {
                var a = r[_e28];
                s[_t37][_e28] = a;
              }
              s[_t37] = r;
            }

            return s;
          }
        }, {
          key: "empty",
          value: function empty() {
            return t.create({});
          }
        }, {
          key: "all",
          value: function all() {
            return t.create({
              source: !0,
              targets: {
                feature: !0,
                aggregate: !0
              },
              storage: {
                filters: !0,
                data: !0
              },
              mesh: !0
            });
          }
        }]);

        return t;
      }();
      /***/

    },

    /***/
    "Wet9":
    /*!************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/Source2D.js ***!
      \************************************************************************/

    /*! exports provided: Source2D */

    /***/
    function Wet9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Source2D", function () {
        return b;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../TimeExtent.js */
      "ZYtI");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _sources_createSource_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./sources/createSource.js */
      "nEO6");
      /* harmony import */


      var _support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./support/tileUtils.js */
      "oBXe");
      /* harmony import */


      var _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./support/UpdateToken.js */
      "W0su");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var f = 0;

      var _ = /*#__PURE__*/function () {
        function _(e, t) {
          _classCallCheck(this, _);

          this.didSend = !1, this.dataTileCount = 0, this.update = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_9__["UpdateToken"].all(), this._abortController = new AbortController(), this.invalid = !1, this.displayTile = e, this._pixelBuffer = t, this.partitions = m(e, t);
        }

        _createClass(_, [{
          key: "setUpdate",
          value: function setUpdate(e, t) {
            this.update = e, this.dataTileCount = 0, t !== this._pixelBuffer && (this._pixelBuffer = t, this.partitions = m(this.displayTile, t)), e.mesh && (this.didSend = !1);
          }
        }, {
          key: "signal",
          get: function get() {
            return this._abortController.signal;
          }
        }, {
          key: "abort",
          value: function abort() {
            this._abortController.abort();
          }
        }]);

        return _;
      }();

      var y = /*#__PURE__*/function () {
        function y(e, t, s) {
          _classCallCheck(this, y);

          this.resolved = !1, this.tile = t, this.offset = e, this.extent = s;
        }

        _createClass(y, [{
          key: "reset",
          value: function reset() {
            this.resolved = !1;
          }
        }]);

        return y;
      }();

      function m(e, t) {
        var s = [];
        if (s.push(new y([0, 0], e, null)), 0 === t) return s;
        var i = Math.min(t, _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_6__["TILE_SIZE"]),
            r = _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_6__["TILE_SIZE"];
        return s.push(new y([-r, -r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, -1, -1), [r - i, r - i, r, r])), s.push(new y([0, -r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, 0, -1), [0, r - i, r, r])), s.push(new y([r, -r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, 1, -1), [0, r - i, i, r])), s.push(new y([-r, 0], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, -1, 0), [r - i, 0, r, r])), s.push(new y([r, 0], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, 1, 0), [0, 0, i, r])), s.push(new y([-r, r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, -1, 1), [r - i, 0, r, i])), s.push(new y([0, r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, 0, 1), [0, 0, r, i])), s.push(new y([r, r], Object(_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_8__["getPow2NeighborTile"])(e, 1, 1), [0, 0, i, i])), s;
      }

      var b = /*#__PURE__*/function () {
        function b(e, t, s) {
          var _this24 = this;

          _classCallCheck(this, b);

          this.type = "remote", this._pendingEdits = new Set(), this._queryInfo = null, this._subscriptions = {
            display: new Map()
          }, this._invalid = {
            outFields: !1,
            queryFilterParameters: !1
          };

          var i = this._onDataTileRequest.bind(this);

          this._source = Object(_sources_createSource_js__WEBPACK_IMPORTED_MODULE_7__["createSource"])(e, t, s, i, function () {
            return _this24.canAcceptPatch();
          }), this._serviceInfo = e, this._geometryType = e.geometryType, this._outSR = t;
        }

        _createClass(b, [{
          key: "destroy",
          value: function destroy() {
            var _this25 = this;

            this._getSubscriptions().map(function (_ref5) {
              var e = _ref5.displayTile;
              return _this25.unsubscribe(e);
            }), this._source.destroy();
          }
        }, {
          key: "updating",
          get: function get() {
            return this._source.updating || this._getSubscriptions().some(function (e) {
              return !e.didSend;
            });
          }
        }, {
          key: "isStream",
          get: function get() {
            return "geoevent" === this._source.type;
          }
        }, {
          key: "sourceEvents",
          get: function get() {
            return "geoevent" === this._source.type ? {
              type: "geoevent",
              events: this._source.events
            } : {
              type: "feature",
              events: this._source.events
            };
          }
        }, {
          key: "enableEvent",
          value: function enableEvent(e, t) {
            this._source.enableEvent(e, t);
          }
        }, {
          key: "setViewState",
          value: function setViewState(e) {
            this._source.setViewState(e);
          }
        }, {
          key: "update",
          value: function update(t, s) {
            var i, r, l, h;

            var d = this._serviceInfo.fields.length,
                c = null != (i = null == (r = this._schema) ? void 0 : r.outFields) ? i : [],
                p = null != (l = null == (h = this._schema) ? void 0 : h.pixelBuffer) ? l : 0,
                f = s.outFields.filter(function (e) {
              return -1 === c.indexOf(e);
            }),
                _ = [].concat(_toConsumableArray(c), _toConsumableArray(f)),
                y = 0 === s.pixelBuffer ? 0 : Math.max(s.pixelBuffer, p);

            s.pixelBuffer = y, s.outFields = _.length >= .75 * d ? ["*"] : _, s.outFields.sort();
            var m = Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["diff"])(this._schema, s);
            if (this._subscriptions.display.forEach(function (e) {
              e.invalid && (t.queryFilter = !0);
            }), !m) return;

            var _b3 = this._schema && Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasDiff"])(m, "outFields"),
                g = this._schema && Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasDiff"])(m, "pixelBuffer"),
                v = this._schema && Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_4__["hasDiffAny"])(m, ["definitionExpression", "gdbVersion", "historicMoment"]);

            Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-2d-update-debug") && console.debug("Applying Update - Source:", m);
            var w = {
              returnCentroid: "esriGeometryPolygon" === this._geometryType,
              returnGeometry: !0,
              outFields: s.outFields,
              outSpatialReference: this._outSR,
              orderByFields: ["".concat(this._serviceInfo.objectIdField, " ASC")],
              where: s.definitionExpression || "1=1",
              gdbVersion: s.gdbVersion,
              historicMoment: s.historicMoment ? new Date(s.historicMoment) : null,
              timeExtent: _TimeExtent_js__WEBPACK_IMPORTED_MODULE_3__["default"].fromJSON(s.timeExtent)
            };
            t.source = !0, g && (t.why.mesh.push("Pixel buffer changed"), t.mesh = !0), v && (t.why.mesh.push("Layer filter changed"), t.why.source.push("Layer filter changed"), t.mesh = !0, t.queryFilter = !0, this._invalid.queryFilterParameters = !0), _b3 && (t.why.source.push("Layer required fields changed"), this._invalid.outFields = !0), this._schema = s, this._source.update(w), this._queryInfo = w;
          }
        }, {
          key: "subscribe",
          value: function subscribe(e) {
            this._subscriptions.display.has(e.id) || this._subscribeDisplayTile(e);
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe(e) {
            if (!this._subscriptions.display.has(e.id)) return;

            var t = this._subscriptions.display.get(e.id);

            this._subscriptions.display["delete"](e.id), this._source.unsubscribe(e), t.abort();
          }
        }, {
          key: "forEachRequest",
          value: function forEachRequest(e, t) {
            this._source.forEachRequest(e, t);
          }
        }, {
          key: "query",
          value: function query(e) {
            return this._source.query(e);
          }
        }, {
          key: "createQuery",
          value: function createQuery() {
            return new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_5__["default"](_objectSpread({}, this._queryInfo));
          }
        }, {
          key: "createTileQuery",
          value: function createTileQuery(e) {
            if ("stream" === this._serviceInfo.type) throw new Error("Service does not support tile  queries");
            var t = this.createQuery();
            return t.quantizationParameters = e.getQuantizationParameters(), t.resultType = "tile", t.geometry = e.extent, "esriGeometryPolyline" === this._serviceInfo.geometryType && (t.maxAllowableOffset = e.resolution), this._serviceInfo.capabilities.query.supportsQuantization || (t.quantizationParameters = null, t.maxAllowableOffset = e.resolution), t;
          }
        }, {
          key: "invalidate",
          value: function invalidate() {
            this._subscriptions.display.forEach(function (e) {
              return e.invalid = !0;
            });
          }
        }, {
          key: "forEachPendingEdit",
          value: function forEachPendingEdit(e) {
            this._getSubscriptions().some(function (_ref6) {
              var e = _ref6.invalid;
              return e;
            }) ? this._pendingEdits.forEach(e) : this._pendingEdits.clear();
          }
        }, {
          key: "onEdits",
          value: function () {
            var _onEdits2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee23(e) {
              var _this26 = this;

              var t, s, i, o, n;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      t = e.addedFeatures.filter(function (e) {
                        return !e.error;
                      }).map(function (e) {
                        return e.objectId;
                      }), s = e.updatedFeatures.filter(function (e) {
                        return !e.error;
                      }).map(function (e) {
                        return e.objectId;
                      }), i = e.deletedFeatures.filter(function (e) {
                        return !e.error;
                      }).map(function (e) {
                        return e.objectId;
                      }), o = [].concat(_toConsumableArray(t), _toConsumableArray(s));
                      i.forEach(function (e) {
                        _this26._pendingEdits.has(e) && _this26._pendingEdits["delete"](e);
                      }), o.forEach(function (e) {
                        return _this26._pendingEdits.add(e);
                      });
                      n = this._getSubscriptions().map(function (_ref7) {
                        var e = _ref7.displayTile;
                        return e;
                      }).map(function (e) {
                        var t = _this26.createTileQuery(e);

                        return t.objectIds = o, {
                          tile: e,
                          query: t
                        };
                      }).map( /*#__PURE__*/function () {
                        var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(_ref8) {
                          var e, t;
                          return regeneratorRuntime.wrap(function _callee22$(_context22) {
                            while (1) {
                              switch (_context22.prev = _context22.next) {
                                case 0:
                                  e = _ref8.tile, t = _ref8.query;
                                  _context22.t0 = e;
                                  _context22.next = 4;
                                  return _this26._source.query(t);

                                case 4:
                                  _context22.t1 = _context22.sent;
                                  return _context22.abrupt("return", {
                                    tile: _context22.t0,
                                    result: _context22.t1
                                  });

                                case 6:
                                case "end":
                                  return _context22.stop();
                              }
                            }
                          }, _callee22);
                        }));

                        return function (_x22) {
                          return _ref9.apply(this, arguments);
                        };
                      }());
                      _context23.next = 5;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["all"])(n);

                    case 5:
                      _context23.sent.forEach(function (_ref10) {
                        var e = _ref10.tile,
                            t = _ref10.result;

                        var r = _this26._subscriptions.display.get(e.key.id);

                        if (!r) return;

                        var o = r.signal,
                            n = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_9__["UpdateToken"].all();

                        _this26.onDisplayTilePatch({
                          type: "update",
                          id: e.key.id,
                          version: f++,
                          update: n,
                          addOrUpdate: t,
                          remove: [].concat(_toConsumableArray(s), _toConsumableArray(i)),
                          end: !0,
                          noData: !1
                        }, {
                          signal: o
                        });
                      });

                      this.invalidate();

                    case 7:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));

            function onEdits(_x21) {
              return _onEdits2.apply(this, arguments);
            }

            return onEdits;
          }()
        }, {
          key: "resubscribe",
          value: function () {
            var _resubscribe = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(e) {
              var _this27 = this;

              var t,
                  s,
                  i,
                  _e29,
                  _args24 = arguments;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      t = _args24.length > 1 && _args24[1] !== undefined ? _args24[1] : !1;
                      s = this._schema.pixelBuffer;

                      this._subscriptions.display.forEach(function (t) {
                        return t.setUpdate(e, s);
                      });

                      i = !1;

                      if (!(this._subscriptions.display.forEach(function (e) {
                        e.invalid && (i = !0);
                      }), this._invalid.outFields && (this._invalid.outFields = !1), t || this._invalid.queryFilterParameters || i)) {
                        _context24.next = 9;
                        break;
                      }

                      _e29 = this._getSubscriptions().map(function (_ref11) {
                        var e = _ref11.displayTile;
                        return e;
                      });
                      _e29.forEach(function (e) {
                        return _this27.unsubscribe(e);
                      }), _e29.forEach(function (e) {
                        return _this27.subscribe(e);
                      }), this._source.resume(), this._invalid.queryFilterParameters = !1;
                      _context24.next = 16;
                      break;

                    case 9:
                      if (!e.mesh) {
                        _context24.next = 14;
                        break;
                      }

                      _context24.next = 12;
                      return this._source.resend({
                        dataTileOnly: !1
                      });

                    case 12:
                      _context24.next = 16;
                      break;

                    case 14:
                      _context24.next = 16;
                      return this._source.resend({
                        dataTileOnly: !0
                      });

                    case 16:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));

            function resubscribe(_x23) {
              return _resubscribe.apply(this, arguments);
            }

            return resubscribe;
          }()
        }, {
          key: "pause",
          value: function pause() {
            this._source.pause();
          }
        }, {
          key: "resume",
          value: function resume() {
            this._source.resume();
          }
        }, {
          key: "_getSubscriptions",
          value: function _getSubscriptions() {
            var e = [];
            return this._subscriptions.display.forEach(function (t) {
              e.push(t);
            }), e;
          }
        }, {
          key: "_subscribeDisplayTile",
          value: function _subscribeDisplayTile(e) {
            var s = new _(e, this._schema.pixelBuffer);
            this._subscriptions.display.set(e.id, s), this._source.subscribe(e);

            var _iterator17 = _createForOfIteratorHelper(s.partitions),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var i = _step17.value;

                var _s7 = i.tile,
                    r = this._source.get(_s7.id);

                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r)) {
                  var _iterator18 = _createForOfIteratorHelper(r.requests.done),
                      _step18;

                  try {
                    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                      var t = _step18.value;

                      this._onPartitionMessage(e.id, i, t.request, "new");
                    }
                  } catch (err) {
                    _iterator18.e(err);
                  } finally {
                    _iterator18.f();
                  }
                }
              }
            } catch (err) {
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }
          }
        }, {
          key: "_onDataTileRequest",
          value: function _onDataTileRequest(e, t, s) {
            var _this28 = this;

            var i = this._subscriptions.display.get(e.id);

            if (s && s.dataTileOnly) {
              var _iterator19 = _createForOfIteratorHelper(i.partitions),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _s8 = _step19.value;

                  if (_s8.tile.id === e.id) {
                    this._onPartitionMessage(e.id, _s8, e, t);

                    break;
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            } else {
              var _iterator20 = _createForOfIteratorHelper(i.partitions),
                  _step20;

              try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                  var _s9 = _step20.value;

                  if (_s9.tile.id === e.id) {
                    this._onPartitionMessage(e.id, _s9, e, t);

                    break;
                  }
                }
              } catch (err) {
                _iterator20.e(err);
              } finally {
                _iterator20.f();
              }

              this._subscriptions.display.forEach(function (s, i) {
                if (i !== e.id) {
                  var _iterator21 = _createForOfIteratorHelper(s.partitions),
                      _step21;

                  try {
                    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                      var r = _step21.value;

                      if (r.tile.id === e.id) {
                        _this28._onPartitionMessage(i, r, e, t);

                        break;
                      }
                    }
                  } catch (err) {
                    _iterator21.e(err);
                  } finally {
                    _iterator21.f();
                  }
                }
              });
            }
          }
        }, {
          key: "_onPartitionMessage",
          value: function _onPartitionMessage(e, r, o, n) {
            var a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(o.features, function (e) {
              return function (e, t) {
                if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(t.extent)) return e;

                var s = t.offset,
                    r = t.extent,
                    _r15 = _slicedToArray(r, 4),
                    o = _r15[0],
                    n = _r15[1],
                    a = _r15[2],
                    u = _r15[3],
                    _s10 = _slicedToArray(s, 2),
                    l = _s10[0],
                    h = _s10[1];

                return e.extent(o, n, a, u).transform(l, h);
              }(e, r);
            }),
                u = this._subscriptions.display.get(e),
                l = u.signal;

            var h = u.update;
            u.didSend || (n = "replace"), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(a) && !a.seen && (h = _support_UpdateToken_js__WEBPACK_IMPORTED_MODULE_9__["UpdateToken"].all(), a.seen = !0);
            var d = !1;
            o.end && (r.resolved = !0, d = e === r.tile.id), u.didSend = !0, this.onDisplayTilePatch({
              type: n,
              id: e,
              version: f++,
              update: h,
              addOrUpdate: a,
              remove: o.remove || [],
              noData: o.noData,
              end: d
            }, {
              signal: l
            });
          }
        }]);

        return b;
      }();
      /***/

    },

    /***/
    "Yi5l":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/controllers/support/sources.js ***!
      \*******************************************************************************************/

    /*! exports provided: SourceAdapter, createSourceAdapter */

    /***/
    function Yi5l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SourceAdapter", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSourceAdapter", function () {
        return l;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../../core/workers/workers.js */
      "36Co");
      /* harmony import */


      var _tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../tasks/operations/query.js */
      "M0H4");
      /* harmony import */


      var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../support/FeatureSetReaderJSON.js */
      "Q0oN");
      /* harmony import */


      var _layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../../layers/ogc/ogcFeatureUtils.js */
      "fl7I");
      /* harmony import */


      var _support_FeatureSetReaderPBF_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../support/FeatureSetReaderPBF.js */
      "Cnp3");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var u = /*#__PURE__*/function () {
        function u(e) {
          _classCallCheck(this, u);

          this.service = e;
        }

        _createClass(u, [{
          key: "destroy",
          value: function destroy() {}
        }]);

        return u;
      }();

      function l(e) {
        var t = e.capabilities;
        return (r = e.source) && r.capabilities && r.collectionId && r.layerDefinition && r.url ? new f(e) : function (e) {
          return Array.isArray(e.source);
        }(e) ? new m(e) : t.query.supportsFormatPBF ? new p(e) : new y(e);
        var r;
      }

      var m = /*#__PURE__*/function (_u2) {
        _inherits(m, _u2);

        var _super8 = _createSuper(m);

        function m(e) {
          var _this29;

          _classCallCheck(this, m);

          _this29 = _super8.call(this, e), _this29._portsOpen = Object(_core_workers_workers_js__WEBPACK_IMPORTED_MODULE_2__["openWithPorts"])(e.source).then(function (e) {
            return _this29.client = e;
          });
          return _this29;
        }

        _createClass(m, [{
          key: "destroy",
          value: function destroy() {
            this.client.close(), this.client = null;
          }
        }, {
          key: "executeQuery",
          value: function () {
            var _executeQuery = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(e, t) {
              var r;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return this._portsOpen;

                    case 2:
                      _context25.next = 4;
                      return this.client.invoke("queryFeatures", e.toJSON(), t);

                    case 4:
                      r = _context25.sent;
                      return _context25.abrupt("return", _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromFeatureSet(r, this.service.objectIdField));

                    case 6:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));

            function executeQuery(_x24, _x25) {
              return _executeQuery.apply(this, arguments);
            }

            return executeQuery;
          }()
        }]);

        return m;
      }(u);

      var p = /*#__PURE__*/function (_u3) {
        _inherits(p, _u3);

        var _super9 = _createSuper(p);

        function p() {
          _classCallCheck(this, p);

          return _super9.apply(this, arguments);
        }

        _createClass(p, [{
          key: "executeQuery",
          value: function () {
            var _executeQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(e, t) {
              var _yield$Object, r;

              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_3__["executeQueryPBFBuffer"])(this.service.source, e, _objectSpread(_objectSpread({}, t), {}, {
                        query: _objectSpread(_objectSpread({}, this.service.customParameters), null == t ? void 0 : t.query)
                      }));

                    case 2:
                      _yield$Object = _context26.sent;
                      r = _yield$Object.data;
                      return _context26.abrupt("return", _support_FeatureSetReaderPBF_js__WEBPACK_IMPORTED_MODULE_6__["FeatureSetReaderPBF"].fromBuffer(r, this.service.geometryType));

                    case 5:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));

            function executeQuery(_x26, _x27) {
              return _executeQuery2.apply(this, arguments);
            }

            return executeQuery;
          }()
        }]);

        return p;
      }(u);

      var y = /*#__PURE__*/function (_u4) {
        _inherits(y, _u4);

        var _super10 = _createSuper(y);

        function y() {
          _classCallCheck(this, y);

          return _super10.apply(this, arguments);
        }

        _createClass(y, [{
          key: "executeQuery",
          value: function () {
            var _executeQuery3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(s, i) {
              var _this$service, c, n, u, l, e, _yield$Object2, _n13, _m, _yield$Object3, m;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _this$service = this.service, c = _this$service.source, n = _this$service.capabilities, u = _this$service.spatialReference, l = _this$service.objectIdField;

                      if (!(s.quantizationParameters && !n.query.supportsQuantization)) {
                        _context27.next = 10;
                        break;
                      }

                      e = s.clone();
                      e.quantizationParameters = null;
                      _context27.next = 6;
                      return Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_3__["executeQuery"])(c, e, u, _objectSpread(_objectSpread({}, i), {}, {
                        query: _objectSpread(_objectSpread({}, this.service.customParameters), null == i ? void 0 : i.query)
                      }));

                    case 6:
                      _yield$Object2 = _context27.sent;
                      _n13 = _yield$Object2.data;
                      _m = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["convertFromFeatureSet"])(_n13, l);
                      return _context27.abrupt("return", (Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["quantizeOptimizedFeatureSet"])(i.transform, _m), _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromOptimizedFeatureSet(_m)));

                    case 10:
                      _context27.next = 12;
                      return Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_3__["executeQuery"])(c, s, this.service.spatialReference, _objectSpread(_objectSpread({}, i), {}, {
                        query: _objectSpread(_objectSpread({}, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(this.service.customParameters)), null == i ? void 0 : i.query)
                      }));

                    case 12:
                      _yield$Object3 = _context27.sent;
                      m = _yield$Object3.data;
                      return _context27.abrupt("return", _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromFeatureSet(m, this.service.objectIdField));

                    case 15:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));

            function executeQuery(_x28, _x29) {
              return _executeQuery3.apply(this, arguments);
            }

            return executeQuery;
          }()
        }]);

        return y;
      }(u);

      var f = /*#__PURE__*/function (_u5) {
        _inherits(f, _u5);

        var _super11 = _createSuper(f);

        function f() {
          _classCallCheck(this, f);

          return _super11.apply(this, arguments);
        }

        _createClass(f, [{
          key: "executeQuery",
          value: function () {
            var _executeQuery4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28(e, t) {
              var s, _s11, i;

              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      s = this.service.capabilities;

                      if (!(e.quantizationParameters && !s.query.supportsQuantization)) {
                        _context28.next = 7;
                        break;
                      }

                      e.clone().quantizationParameters = null;
                      _context28.next = 5;
                      return Object(_layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_5__["queryOptimizedFeatureSet"])(this.service.source, e, t);

                    case 5:
                      _s11 = _context28.sent;
                      return _context28.abrupt("return", (Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__["quantizeOptimizedFeatureSet"])(t.transform, _s11), _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromOptimizedFeatureSet(_s11)));

                    case 7:
                      _context28.next = 9;
                      return Object(_layers_ogc_ogcFeatureUtils_js__WEBPACK_IMPORTED_MODULE_5__["queryOptimizedFeatureSet"])(this.service.source, e, t);

                    case 9:
                      i = _context28.sent;
                      return _context28.abrupt("return", _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromOptimizedFeatureSet(i));

                    case 11:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));

            function executeQuery(_x30, _x31) {
              return _executeQuery4.apply(this, arguments);
            }

            return executeQuery;
          }()
        }]);

        return f;
      }(u);
      /***/

    },

    /***/
    "amnZ":
    /*!**************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/processors.js ***!
      \**************************************************************************/

    /*! exports provided: loadProcessorModule */

    /***/
    function amnZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadProcessorModule", function () {
        return o;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function o(o) {
        return "heatmap" === o ? Promise.all(
        /*! import() | processors-HeatmapProcessor-js */
        [__webpack_require__.e("common"), __webpack_require__.e("processors-HeatmapProcessor-js")]).then(__webpack_require__.bind(null,
        /*! ./processors/HeatmapProcessor.js */
        "Mx58")) : Promise.all(
        /*! import() | processors-SymbolProcessor-js */
        [__webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~arcade-featureSetUtils-js~arcade-functions-featuresetbase-js~layers-FeatureLayerView2D-js~la~310e438a"), __webpack_require__.e("default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~38fa0f09"), __webpack_require__.e("default~layers-FeatureLayerView2D-js~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layer~9fe18dbe"), __webpack_require__.e("default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~b07a11e1"), __webpack_require__.e("default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~795eafd7"), __webpack_require__.e("default~layers-GeoRSSLayerView2D-js~layers-GraphicsLayerView2D-js~layers-ImageryLayerView2D-js~layer~c4613f14"), __webpack_require__.e("common"), __webpack_require__.e("processors-SymbolProcessor-js")]).then(__webpack_require__.bind(null,
        /*! ./processors/SymbolProcessor.js */
        "DsOJ"));
      }
      /***/

    },

    /***/
    "bDVu":
    /*!******************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/PagedFeatureSource.js ***!
      \******************************************************************************************/

    /*! exports provided: PagedFeatureSource */

    /***/
    function bDVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagedFeatureSource", function () {
        return u;
      });
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./BaseFeatureSource.js */
      "uvrw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__["default"].getLogger("esri.views.2d.layers.features.sources.FeatureSource");

      var u = /*#__PURE__*/function (_BaseFeatureSource_js) {
        _inherits(u, _BaseFeatureSource_js);

        var _super12 = _createSuper(u);

        function u(e) {
          _classCallCheck(this, u);

          return _super12.call(this, e);
        }

        _createClass(u, [{
          key: "_fetchDataTile",
          value: function () {
            var _fetchDataTile2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29(e) {
              var _this30 = this;

              var i, o, _u6, a, c, d, h, _h4, _loop2, s;

              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      i = this._subscriptions.get(e.key.id);
                      o = !1, _u6 = 0, a = 0;

                      c = function c(t, r) {
                        a--, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(i);
                        var n = t.reader,
                            _u7 = t.query;

                        if (!n.exceededTransferLimit) {
                          if (o = !0, 0 !== r && !n.hasFeatures) {
                            var _t39 = {
                              tile: e,
                              id: e.id,
                              features: n,
                              end: 0 === a
                            };
                            return i.requests.done.push({
                              request: _t39,
                              query: _u7
                            }), void _this30._onRequest(_t39, "new");
                          }

                          var _t38 = {
                            tile: e,
                            id: e.id,
                            features: n,
                            end: 0 === a
                          };
                          return i.requests.done.push({
                            request: _t38,
                            query: _u7
                          }), void _this30._onRequest(_t38, "new");
                        }

                        var c = {
                          tile: e,
                          id: e.id,
                          features: n,
                          end: o && 0 === a
                        };
                        i.requests.done.push({
                          request: c,
                          query: _u7
                        }), _this30._onRequest(c, "new");
                      };

                      d = 0, h = 0;

                    case 4:
                      if (!(!o && h++ < 20)) {
                        _context29.next = 14;
                        break;
                      }

                      _h4 = void 0;

                      _loop2 = function _loop2(s) {
                        var s = _u6++;
                        a++, _h4 = _this30._fetchDataTilePage(e, s, i).then(function (e) {
                          return e && c(e, s);
                        })["catch"](function (s) {
                          o = !0, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["isAbortError"])(s) || (n.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__["default"]("mapview-query-error", "Encountered error when fetching tile", {
                            tile: e,
                            error: s
                          })), _this30._onRequest({
                            tile: e,
                            id: e.id,
                            features: null,
                            end: o
                          }, "new"));
                        });
                      };

                      for (s = 0; s < d + 1; s++) {
                        _loop2(s);
                      }

                      _context29.next = 10;
                      return _h4;

                    case 10:
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(i);
                      d = Math.min(d + 2, 6);

                    case 12:
                      _context29.next = 4;
                      break;

                    case 14:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));

            function _fetchDataTile(_x32) {
              return _fetchDataTile2.apply(this, arguments);
            }

            return _fetchDataTile;
          }()
        }, {
          key: "_fetchDataTilePage",
          value: function () {
            var _fetchDataTilePage2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30(e, t, r) {
              var o, n, _i8, _u9;

              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      o = this._sourceQueryInfo, n = this._createQuery(e, {
                        start: 8e3 * t,
                        num: 8e3,
                        maxRecordCountFactor: 3,
                        returnExceededLimitFeatures: !0,
                        quantizationParameters: e.getQuantizationParameters()
                      });
                      _context30.prev = 1;
                      _i8 = r.signal;
                      _context30.next = 5;
                      return this._queue.push({
                        tile: e,
                        query: n,
                        signal: _i8,
                        depth: t
                      });

                    case 5:
                      _u9 = _context30.sent;
                      return _context30.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfAborted"])(r), _u9 ? o !== this._sourceQueryInfo ? this._fetchDataTilePage(e, t, r) : {
                        reader: _u9,
                        query: n
                      } : null));

                    case 9:
                      _context30.prev = 9;
                      _context30.t0 = _context30["catch"](1);
                      return _context30.abrupt("return", (Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__["throwIfNotAbortError"])(_context30.t0), null));

                    case 12:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this, [[1, 9]]);
            }));

            function _fetchDataTilePage(_x33, _x34, _x35) {
              return _fetchDataTilePage2.apply(this, arguments);
            }

            return _fetchDataTilePage;
          }()
        }]);

        return u;
      }(_BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__["BaseFeatureSource"]);
      /***/

    },

    /***/
    "blMy":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/DataTileSource.js ***!
      \**************************************************************************************/

    /*! exports provided: DataTileSource, DataTileSubscription */

    /***/
    function blMy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTileSource", function () {
        return o;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTileSubscription", function () {
        return r;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/Evented.js */
      "zm0L");
      /* harmony import */


      var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/accessorSupport/diffUtils.js */
      "DxxZ");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = /*#__PURE__*/function () {
        function r(e) {
          _classCallCheck(this, r);

          this._abortController = new AbortController(), this.requests = {
            pending: new Array(),
            done: new Array()
          }, this.tile = e;
        }

        _createClass(r, [{
          key: "signal",
          get: function get() {
            return this._abortController.signal;
          }
        }, {
          key: "add",
          value: function add(e) {
            this.requests.done.push(e), e.request.end && (this.resolved = !0);
          }
        }, {
          key: "abort",
          value: function abort() {
            this._abortController.abort();
          }
        }]);

        return r;
      }();

      var o = /*#__PURE__*/function () {
        function o(e) {
          _classCallCheck(this, o);

          this.events = new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__["default"](), this._subscriptions = new Map(), this._serviceQueryInfo = {
            outSpatialReference: e.outSR
          }, this._serviceInfo = e.serviceInfo, this._onRequest = e.onRequest;
        }

        _createClass(o, [{
          key: "queryLastEditDate",
          value: function () {
            var _queryLastEditDate = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      throw new Error("Service does not support query type");

                    case 1:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }));

            function queryLastEditDate() {
              return _queryLastEditDate.apply(this, arguments);
            }

            return queryLastEditDate;
          }()
        }, {
          key: "query",
          value: function () {
            var _query = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32(e, t) {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      throw new Error("Service does not support query");

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }));

            function query(_x36, _x37) {
              return _query.apply(this, arguments);
            }

            return query;
          }()
        }, {
          key: "geometryType",
          get: function get() {
            return this._serviceInfo.geometryType;
          }
        }, {
          key: "update",
          value: function update(e) {
            Object(_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_2__["diff"])(e, this._sourceQueryInfo) && (this._sourceQueryInfo = e);
          }
        }, {
          key: "updateSubscriptions",
          value: function updateSubscriptions() {}
        }, {
          key: "setViewState",
          value: function setViewState(e) {}
        }, {
          key: "subscribe",
          value: function subscribe(e) {
            var t = new r(e);

            this._subscriptions.set(e.id, t);
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe(t) {
            var s = this.get(t.id);
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s) && s.abort(), this._subscriptions["delete"](t.id);
          }
        }, {
          key: "pause",
          value: function pause() {}
        }, {
          key: "resume",
          value: function resume() {}
        }, {
          key: "get",
          value: function get(e) {
            return this._subscriptions.has(e) ? this._subscriptions.get(e) : null;
          }
        }, {
          key: "enableEvent",
          value: function enableEvent(e, t) {}
        }]);

        return o;
      }();
      /***/

    },

    /***/
    "erGv":
    /*!********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/data/StreamFeatureManager.js ***!
      \********************************************************************************/

    /*! exports provided: default, DEFAULT_STREAM_ID_FIELD, ESRI_TIMESTAMP */

    /***/
    function erGv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_STREAM_ID_FIELD", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ESRI_TIMESTAMP", function () {
        return o;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/mathUtils.js */
      "OKTS");
      /* harmony import */


      var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../core/CircularArray.js */
      "lx5q");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var r = "__esri_stream_id__",
          o = "__esri_timestamp__";
      /* harmony default export */

      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class(t, e, s, i) {
          var r = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 128;

          _classCallCheck(this, _class);

          this._trackIdToObservations = new Map(), this._idCounter = 0, this._lastPurge = performance.now(), this._addOrUpdated = new Map(), this._removed = [], this._maxAge = 0, this._timeInfo = s, this._purgeOptions = i, this.store = t, this.objectIdField = e, this.purgeInterval = r, this._useGeneratedIds = "__esri_stream_id__" === this.objectIdField;
        }

        _createClass(_class, [{
          key: "add",
          value: function add(e) {
            if (this._useGeneratedIds) {
              var t = this._nextId();

              e.attributes[this.objectIdField] = t, e.objectId = t;
            } else e.objectId = e.attributes[this.objectIdField];

            if (this._addOrUpdated.set(e.objectId, e), this._maxAge = Math.max(this._maxAge, e.attributes[this._timeInfo.startTimeField]), !this._timeInfo.trackIdField) return;
            var r = e.attributes[this._timeInfo.trackIdField];

            if (!this._trackIdToObservations.has(r)) {
              var _e30 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._purgeOptions) && null != this._purgeOptions.maxObservations ? this._purgeOptions.maxObservations : 1e3,
                  _o4 = Object(_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])(_e30, 0, 1e3);

              this._trackIdToObservations.set(r, new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_2__["default"](_o4));
            }

            var o = this._trackIdToObservations.get(r).enqueue(e.objectId);

            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o) && (this._addOrUpdated.has(o) ? this._addOrUpdated["delete"](o) : this._removed.push(o));
          }
        }, {
          key: "checkForUpdates",
          value: function checkForUpdates() {
            var e = this._getToAdd(),
                s = this._getToRemove(),
                i = performance.now();

            i - this._lastPurge >= this.purgeInterval && (this._purge(i), this._lastPurge = i);
            var r = [];

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s)) {
              var _iterator22 = _createForOfIteratorHelper(s),
                  _step22;

              try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                  var _e31 = _step22.value;

                  var _s12 = this.store.removeById(_e31);

                  Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(_s12) && r.push(_s12);
                }
              } catch (err) {
                _iterator22.e(err);
              } finally {
                _iterator22.f();
              }
            }

            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(e)) {
              var _iterator23 = _createForOfIteratorHelper(e),
                  _step23;

              try {
                for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
                  var t = _step23.value;
                  t.attributes.__esri_timestamp__ = i, this.store.add(t);
                }
              } catch (err) {
                _iterator23.e(err);
              } finally {
                _iterator23.f();
              }
            }

            (e || r) && this.store.update(e, r);
          }
        }, {
          key: "_getToAdd",
          value: function _getToAdd() {
            if (!this._addOrUpdated.size) return null;
            var t = new Array(this._addOrUpdated.size);
            var e = 0;
            return this._addOrUpdated.forEach(function (s) {
              return t[e++] = s;
            }), this._addOrUpdated.clear(), t;
          }
        }, {
          key: "_getToRemove",
          value: function _getToRemove() {
            var t = this._removed;
            return this._removed.length ? (this._removed = [], t) : null;
          }
        }, {
          key: "_nextId",
          value: function _nextId() {
            var t = this._idCounter;
            return this._idCounter = (this._idCounter + 1) % 4294967294 + 1, t;
          }
        }, {
          key: "_purge",
          value: function _purge(e) {
            var s = this._purgeOptions;
            Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(s) && (this._purgeSomeByDisplayCount(s), this._purgeByAge(s), this._purgeByAgeReceived(e, s), this._purgeTracks());
          }
        }, {
          key: "_purgeSomeByDisplayCount",
          value: function _purgeSomeByDisplayCount(t) {
            var _this31 = this;

            if (!t.displayCount) return;
            var s = this.store.size;
            s > t.displayCount && this._trackIdToObservations.forEach(function (i) {
              if (s > t.displayCount && i.size) {
                var _t40 = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["unwrap"])(i.dequeue());

                _this31._removed.push(_t40), s--;
              }
            });
          }
        }, {
          key: "_purgeByAge",
          value: function _purgeByAge(t) {
            var _this32 = this;

            var e;
            if (!t.age || null == (e = this._timeInfo) || !e.startTimeField) return;
            var s = 60 * t.age * 1e3,
                i = this._maxAge - s;
            this.store.forEach(function (t) {
              t.attributes[_this32._timeInfo.startTimeField] < i && _this32._removed.push(t.objectId);
            });
          }
        }, {
          key: "_purgeByAgeReceived",
          value: function _purgeByAgeReceived(t, e) {
            var _this33 = this;

            if (!e.ageReceived) return;
            var s = t + 60 * e.ageReceived * 1e3;
            this.store.forEach(function (t) {
              t.attributes.__esri_timestamp__ < s && _this33._removed.push(t.objectId);
            });
          }
        }, {
          key: "_purgeTracks",
          value: function _purgeTracks() {
            var _this34 = this;

            this._trackIdToObservations.forEach(function (t, e) {
              0 === t.size && _this34._trackIdToObservations["delete"](e);
            });
          }
        }]);

        return _class;
      }();
      /***/

    },

    /***/
    "fKt0":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function fKt0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../chunks/tslib.es6.js */
      "pO5D");
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/ensureType.js */
      "zqDF");
      /* harmony import */


      var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/property.js */
      "WbKI");
      /* harmony import */


      var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/accessorSupport/decorators/subclass.js */
      "04ZG");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/urlUtils.js */
      "4EHJ");
      /* harmony import */


      var _core_uuid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/uuid.js */
      "ju1D");
      /* harmony import */


      var _portal_support_resourceExtension_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../portal/support/resourceExtension.js */
      "9AIY");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../geometry/SpatialReference.js */
      "WZb1");
      /* harmony import */


      var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../geometry/support/jsonUtils.js */
      "qatw");
      /* harmony import */


      var _geometry_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../../geometry.js */
      "4GrV");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../../tasks/operations/query.js */
      "M0H4");
      /* harmony import */


      var _WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./WebSocketConnection.js */
      "A3K4");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__["default"].getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),
          m = {
        maxQueryDepth: 5,
        maxRecordCountFactor: 3
      };

      var g = /*#__PURE__*/function (_WebSocketConnection_) {
        _inherits(g, _WebSocketConnection_);

        var _super13 = _createSuper(g);

        function g(e) {
          _classCallCheck(this, g);

          return _super13.call(this, _objectSpread(_objectSpread({}, m), e));
        }

        _createClass(g, [{
          key: "_open",
          value: function () {
            var _open3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var e, t, _this$_config2, r, o;

              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this._fetchServiceDefinition(this._config.source);

                    case 2:
                      e = _context33.sent;
                      e.timeInfo.trackIdField || p.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");
                      _context33.next = 6;
                      return this._fetchWebSocketUrl(e.streamUrls, this._config.spatialReference);

                    case 6:
                      t = _context33.sent;
                      this._buddyServicesQuery || (this._buddyServicesQuery = this._queryBuddyServices());
                      _context33.next = 10;
                      return this._buddyServicesQuery;

                    case 10:
                      _context33.next = 12;
                      return this._tryCreateWebSocket(t);

                    case 12:
                      _this$_config2 = this._config, r = _this$_config2.filter, o = _this$_config2.outFields;
                      this.destroyed || this._setFilter(r, o);

                    case 14:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));

            function _open() {
              return _open3.apply(this, arguments);
            }

            return _open;
          }()
        }, {
          key: "_onMessage",
          value: function _onMessage(e) {
            var t;

            try {
              t = this._enrich(JSON.parse(e.data)), this._featureZScaler && this._featureZScaler(t.geometry);
            } catch (e) {
              return void p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Failed to parse message", e));
            }

            this.onFeature(t);
          }
        }, {
          key: "_fetchServiceDefinition",
          value: function () {
            var _fetchServiceDefinition2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34(e) {
              var t, r;
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      t = Object(_request_js__WEBPACK_IMPORTED_MODULE_15__["default"])(e.path, {
                        query: {
                          f: "json"
                        },
                        responseType: "json"
                      });
                      _context34.next = 3;
                      return t;

                    case 3:
                      r = _context34.sent.data;
                      return _context34.abrupt("return", (this._serviceDefinition = r, r));

                    case 5:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this);
            }));

            function _fetchServiceDefinition(_x38) {
              return _fetchServiceDefinition2.apply(this, arguments);
            }

            return _fetchServiceDefinition;
          }()
        }, {
          key: "_fetchWebSocketUrl",
          value: function () {
            var _fetchWebSocketUrl2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35(e, t) {
              var r, o, s;
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      r = e[0], o = r.urls, s = r.token;
                      return _context35.abrupt("return", "".concat(this._inferWebSocketBaseUrl(o), "/subscribe?outSR=").concat(t.wkid).concat(s ? "&token=" + s : ""));

                    case 2:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));

            function _fetchWebSocketUrl(_x39, _x40) {
              return _fetchWebSocketUrl2.apply(this, arguments);
            }

            return _fetchWebSocketUrl;
          }()
        }, {
          key: "_inferWebSocketBaseUrl",
          value: function _inferWebSocketBaseUrl(e) {
            if (1 === e.length) return e[0];

            var _iterator24 = _createForOfIteratorHelper(e),
                _step24;

            try {
              for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
                var t = _step24.value;
                if (-1 !== t.indexOf("wss")) return t;
              }
            } catch (err) {
              _iterator24.e(err);
            } finally {
              _iterator24.f();
            }

            return p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Unable to infer WebSocket url", e)), null;
          }
        }, {
          key: "_setFilter",
          value: function () {
            var _setFilter2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36(e, r) {
              var _this35 = this;

              var o, s, i, n;
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      o = this._websocket;

                      if (!(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(o) || Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(r))) {
                        _context36.next = 3;
                        break;
                      }

                      return _context36.abrupt("return");

                    case 3:
                      s = JSON.stringify({
                        filter: this._serializeFilter(e, r)
                      });
                      i = !1;
                      n = Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_11__["createResolver"])();
                      return _context36.abrupt("return", (o.onmessage = function (e) {
                        var t = JSON.parse(e.data);
                        t.filter && (t.error && (p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Failed to set service filter", t.error)), _this35._set("errorString", "Could not set service filter - ".concat(t.error)), n.reject(t.error)), o.onmessage = _this35._onMessage.bind(_this35), i = !0, n.resolve());
                      }, o.send(s), setTimeout(function () {
                        i || (_this35.destroyed || _this35._websocket !== o || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Server timed out when setting filter")), n.reject());
                      }, 1e4), n.promise));

                    case 7:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36, this);
            }));

            function _setFilter(_x41, _x42) {
              return _setFilter2.apply(this, arguments);
            }

            return _setFilter;
          }()
        }, {
          key: "_serializeFilter",
          value: function _serializeFilter(e, o) {
            var s = {};
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(e) && Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isNone"])(o)) return s;
            if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) && e.geometry) try {
              var t = Object(_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_13__["fromJSON"])(e.geometry);
              if ("extent" !== t.type) throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("Expected extent but found type ".concat(t.type));
              s.geometry = JSON.stringify(t.shiftCentralMeridian());
            } catch (e) {
              p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Encountered an error when setting connection geometryDefinition", e));
            }
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(e) && e.where && "1 = 1" !== e.where && (s.where = e.where), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(o) && (s.outFields = o.join(",")), s;
          }
        }, {
          key: "_enrich",
          value: function _enrich(e) {
            if (!this._relatedFeatures) return e;
            var t = this._serviceDefinition.relatedFeatures.joinField,
                r = e.attributes[t];
            if (!this._relatedFeatures.has(r)) return p.warn("geoevent-connection", "Feature join failed. Is the join field configured correctly?", e), e;

            var _this$_relatedFeature = this._relatedFeatures.get(r),
                o = _this$_relatedFeature.attributes,
                s = _this$_relatedFeature.geometry;

            for (var _t41 in o) {
              e.attributes[_t41] = o[_t41];
            }

            return s && (e.geometry = s), e.geometry || e.centroid || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Found malformed feature - no geometry found", e)), e;
          }
        }, {
          key: "_queryBuddyServices",
          value: function () {
            var _queryBuddyServices2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              var _this$_serviceDefinit, e, t, r, _o5, s, _iterator25, _step25, _e32;

              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.prev = 0;
                      _this$_serviceDefinit = this._serviceDefinition, e = _this$_serviceDefinit.relatedFeatures, t = _this$_serviceDefinit.keepLatestArchive, r = this._queryRelatedFeatures(e), _o5 = this._queryArchive(t);
                      _context37.next = 4;
                      return r;

                    case 4:
                      _context37.next = 6;
                      return _o5;

                    case 6:
                      s = _context37.sent;

                      if (s) {
                        _context37.next = 9;
                        break;
                      }

                      return _context37.abrupt("return");

                    case 9:
                      _iterator25 = _createForOfIteratorHelper(s.features);

                      try {
                        for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                          _e32 = _step25.value;
                          this.onFeature(this._enrich(_e32));
                        }
                      } catch (err) {
                        _iterator25.e(err);
                      } finally {
                        _iterator25.f();
                      }

                      _context37.next = 16;
                      break;

                    case 13:
                      _context37.prev = 13;
                      _context37.t0 = _context37["catch"](0);
                      p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_7__["default"]("geoevent-connection", "Encountered an error when querying buddy services", {
                        error: _context37.t0
                      }));

                    case 16:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37, this, [[0, 13]]);
            }));

            function _queryBuddyServices() {
              return _queryBuddyServices2.apply(this, arguments);
            }

            return _queryBuddyServices;
          }()
        }, {
          key: "_queryRelatedFeatures",
          value: function () {
            var _queryRelatedFeatures2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38(e) {
              var t;
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      if (e) {
                        _context38.next = 2;
                        break;
                      }

                      return _context38.abrupt("return");

                    case 2:
                      _context38.next = 4;
                      return this._queryBuddy(e.featuresUrl);

                    case 4:
                      t = _context38.sent;

                      this._addRelatedFeatures(t);

                    case 6:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38, this);
            }));

            function _queryRelatedFeatures(_x43) {
              return _queryRelatedFeatures2.apply(this, arguments);
            }

            return _queryRelatedFeatures;
          }()
        }, {
          key: "_queryArchive",
          value: function () {
            var _queryArchive2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39(e) {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      if (!e) {
                        _context39.next = 2;
                        break;
                      }

                      return _context39.abrupt("return", this._queryBuddy(e.featuresUrl));

                    case 2:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39, this);
            }));

            function _queryArchive(_x44) {
              return _queryArchive2.apply(this, arguments);
            }

            return _queryArchive;
          }()
        }, {
          key: "_queryBuddy",
          value: function () {
            var _queryBuddy2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40(e) {
              var t, _yield$t$load, r, i, n, a, c, f, d, y, p;

              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return Promise.all(
                      /*! import() | FeatureLayer-js */
                      [__webpack_require__.e("default~BingMapsLayer-js~BuildingSceneLayer-js~CSVLayer-js~ElevationLayer-js~FeatureLayer-js~GeoRSSL~17f7a7e8"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~c6eed8bf"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~166cc929"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~ImageryTileLayer-js~KMLLay~253c3a50"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~KMLLayer-js~MapImageLayer-js~MapNotesLayer~dc20c115"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~ImageryLayer-js~MapImageLayer-js~MapNotesL~ca7a17ec"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapImageLayer-js~MapNotesLayer-js~RouteLay~17087e09"), __webpack_require__.e("default~BuildingSceneLayer-js~CSVLayer-js~FeatureLayer-js~MapNotesLayer-js~RouteLayer-js~SceneLayer-~7c09c9db"), __webpack_require__.e("FeatureLayer-js")]).then(__webpack_require__.bind(null,
                      /*! ../../../FeatureLayer.js */
                      "W9Wu"));

                    case 2:
                      _context40.t0 = _context40.sent["default"];
                      _context40.t1 = {
                        url: e
                      };
                      t = new _context40.t0(_context40.t1);
                      _context40.next = 7;
                      return t.load();

                    case 7:
                      _yield$t$load = _context40.sent;
                      r = _yield$t$load.capabilities;
                      i = r.query.supportsMaxRecordCountFactor;
                      n = r.query.supportsPagination;
                      a = r.query.supportsCentroid;
                      c = this._config.maxRecordCountFactor;
                      f = t.capabilities.query.maxRecordCount;
                      d = i ? f * c : f;
                      y = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_16__["default"]();

                      if (!(y.outFields = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(this._config.outFields, ["*"]), y.where = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["unwrapOr"])(Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["get"])(this._config.filter, "where"), "1=1"), y.returnGeometry = !0, y.returnExceededLimitFeatures = !0, y.outSpatialReference = _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__["default"].fromJSON(this._config.spatialReference), a && (y.returnCentroid = !0), i && (y.maxRecordCountFactor = c), n)) {
                        _context40.next = 18;
                        break;
                      }

                      return _context40.abrupt("return", (y.num = d, t.destroy(), this._queryPages(e, y)));

                    case 18:
                      _context40.next = 20;
                      return Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_17__["executeQuery"])(e, y, this._config.sourceSpatialReference);

                    case 20:
                      p = _context40.sent;
                      return _context40.abrupt("return", (t.destroy(), p.data));

                    case 22:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40, this);
            }));

            function _queryBuddy(_x45) {
              return _queryBuddy2.apply(this, arguments);
            }

            return _queryBuddy;
          }()
        }, {
          key: "_queryPages",
          value: function () {
            var _queryPages2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41(e, t) {
              var o,
                  s,
                  _yield$Object4,
                  i,
                  _args41 = arguments;

              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      o = _args41.length > 2 && _args41[2] !== undefined ? _args41[2] : [];
                      s = _args41.length > 3 && _args41[3] !== undefined ? _args41[3] : 0;
                      t.start = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_2__["isSome"])(t.num) ? s * t.num : null;
                      _context41.next = 5;
                      return Object(_tasks_operations_query_js__WEBPACK_IMPORTED_MODULE_17__["executeQuery"])(e, t, this._config.sourceSpatialReference);

                    case 5:
                      _yield$Object4 = _context41.sent;
                      i = _yield$Object4.data;
                      return _context41.abrupt("return", i.exceededTransferLimit && s < this._config.maxQueryDepth ? (i.features.forEach(function (e) {
                        return o.push(e);
                      }), this._queryPages(e, t, o, s + 1)) : (o.forEach(function (e) {
                        return i.features.push(e);
                      }), i));

                    case 8:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41, this);
            }));

            function _queryPages(_x46, _x47) {
              return _queryPages2.apply(this, arguments);
            }

            return _queryPages;
          }()
        }, {
          key: "_addRelatedFeatures",
          value: function _addRelatedFeatures(e) {
            var t = new Map(),
                r = e.features,
                o = this._serviceDefinition.relatedFeatures.joinField;

            var _iterator26 = _createForOfIteratorHelper(r),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                var _e33 = _step26.value;
                var _r16 = _e33.attributes[o];
                t.set(_r16, _e33);
              }
            } catch (err) {
              _iterator26.e(err);
            } finally {
              _iterator26.f();
            }

            this._relatedFeatures = t;
          }
        }]);

        return g;
      }(_WebSocketConnection_js__WEBPACK_IMPORTED_MODULE_18__["WebSocketConnection"]);

      g = Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.layers.graphics.sources.connections.GeoEventConnection")], g);
      var _ = g;
      /* harmony default export */

      __webpack_exports__["default"] = _;
      /***/
    },

    /***/
    "fl7I":
    /*!*****************************************************************!*\
      !*** ./node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js ***!
      \*****************************************************************/

    /*! exports provided: getCollectionDefinition, getServerCollection, getServerCollections, getServerConformance, getServerLandingPage, queryFeatureSet, queryFeatureSetJSON, queryOptimizedFeatureSet */

    /***/
    function fl7I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCollectionDefinition", function () {
        return T;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerCollection", function () {
        return b;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerCollections", function () {
        return h;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerConformance", function () {
        return $;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getServerLandingPage", function () {
        return x;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryFeatureSet", function () {
        return k;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryFeatureSetJSON", function () {
        return S;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "queryOptimizedFeatureSet", function () {
        return q;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../geometry/support/spatialReferenceUtils.js */
      "f4Nx");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../request.js */
      "Lqtk");
      /* harmony import */


      var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../support/fieldType.js */
      "Z4F+");
      /* harmony import */


      var _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../graphics/OptimizedFeatureSet.js */
      "7tXg");
      /* harmony import */


      var _graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../support/FieldsIndex.js */
      "gLc9");
      /* harmony import */


      var _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../tasks/support/FeatureSet.js */
      "8prj");
      /* harmony import */


      var _graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../graphics/data/projectionSupport.js */
      "HsO1");
      /* harmony import */


      var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../graphics/sources/geojson/geojson.js */
      "46M0");
      /* harmony import */


      var _graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../graphics/sources/support/clientSideDefaults.js */
      "iNG6");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var w = _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__["default"].getLogger("esri.layers.graphics.sources.ogcfeature");

      function T(_x48, _x49, _x50, _x51) {
        return _T.apply(this, arguments);
      }

      function _T() {
        _T = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42(e, t, i, a) {
          var s,
              d,
              _yield$Object5,
              f,
              c,
              u,
              y,
              j,
              T,
              b,
              h,
              _e34,
              _iterator27,
              _step27,
              _e36,
              _e35,
              _t42,
              _t43,
              _t44,
              _args42 = arguments;

          return regeneratorRuntime.wrap(function _callee42$(_context42) {
            while (1) {
              switch (_context42.prev = _context42.next) {
                case 0:
                  s = _args42.length > 4 && _args42[4] !== undefined ? _args42[4] : 5;
                  _context42.prev = 1;
                  _context42.next = 4;
                  return Object(_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["checkProjectionSupport"])(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"], i.spatialReference);

                case 4:
                  _context42.next = 9;
                  break;

                case 6:
                  _context42.prev = 6;
                  _context42.t0 = _context42["catch"](1);
                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:projection-not-supported", "Projection not supported");

                case 9:
                  d = "".concat(e, "/collections/").concat(t, "/items");
                  _context42.next = 12;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(d, {
                    signal: a,
                    query: {
                      limit: s,
                      f: "json"
                    }
                  });

                case 12:
                  _yield$Object5 = _context42.sent;
                  f = _yield$Object5.data;
                  _context42.next = 16;
                  return Object(_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__["validateGeoJSON"])(f);

                case 16:
                  c = Object(_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__["inferLayerProperties"])(f, {
                    geometryType: i.geometryType
                  }), u = i.fields || c.fields || [], y = null != i.hasZ ? i.hasZ : c.hasZ, j = c.geometryType, T = i.objectIdField || c.objectIdFieldName || "OBJECTID";
                  b = i.timeInfo;
                  h = u.find(function (e) {
                    return e.name === T;
                  });

                  if (h) {
                    _context42.next = 25;
                    break;
                  }

                  if (c.objectIdFieldType) {
                    _context42.next = 22;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");

                case 22:
                  u.unshift({
                    name: T,
                    alias: T,
                    type: "esriFieldTypeOID",
                    editable: !1,
                    nullable: !1
                  });
                  _context42.next = 26;
                  break;

                case 25:
                  h.type = "esriFieldTypeOID", h.editable = !1, h.nullable = !1;

                case 26:
                  if (T !== c.objectIdFieldName) {
                    _e34 = u.find(function (e) {
                      return e.name === c.objectIdFieldName;
                    });
                    _e34 && (_e34.type = "esriFieldTypeInteger");
                  }

                  if (j) {
                    _context42.next = 29;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:missing-property", "geometryType not set and couldn't be inferred from the provided features");

                case 29:
                  u === c.fields && c.unknownFields.length > 0 && w.warn({
                    name: "ogc-feature-layer:unknown-field-types",
                    message: "Some fields types couldn't be inferred from the features and were dropped",
                    details: {
                      unknownFields: c.unknownFields
                    }
                  });
                  _iterator27 = _createForOfIteratorHelper(u);
                  _context42.prev = 31;

                  _iterator27.s();

                case 33:
                  if ((_step27 = _iterator27.n()).done) {
                    _context42.next = 41;
                    break;
                  }

                  _e36 = _step27.value;

                  if (!(null == _e36.name && (_e36.name = _e36.alias), null == _e36.alias && (_e36.alias = _e36.name), "esriFieldTypeOID" !== _e36.type && "esriFieldTypeGlobalID" !== _e36.type && (_e36.editable = null == _e36.editable || !!_e36.editable, _e36.nullable = null == _e36.nullable || !!_e36.nullable), !_e36.name)) {
                    _context42.next = 37;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:invalid-field-name", "field name is missing", {
                    field: _e36
                  });

                case 37:
                  if (!(-1 === _support_fieldType_js__WEBPACK_IMPORTED_MODULE_5__["kebabDict"].jsonValues.indexOf(_e36.type))) {
                    _context42.next = 39;
                    break;
                  }

                  throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__["default"]("ogc-feature-layer:invalid-field-type", "invalid type for field \"".concat(_e36.name, "\""), {
                    field: _e36
                  });

                case 39:
                  _context42.next = 33;
                  break;

                case 41:
                  _context42.next = 46;
                  break;

                case 43:
                  _context42.prev = 43;
                  _context42.t1 = _context42["catch"](31);

                  _iterator27.e(_context42.t1);

                case 46:
                  _context42.prev = 46;

                  _iterator27.f();

                  return _context42.finish(46);

                case 49:
                  if (b) {
                    _e35 = new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_8__["default"](u);

                    if (b.startTimeField) {
                      _t42 = _e35.get(b.startTimeField);
                      _t42 ? (b.startTimeField = _t42.name, _t42.type = "esriFieldTypeDate") : b.startTimeField = null;
                    }

                    if (b.endTimeField) {
                      _t43 = _e35.get(b.endTimeField);
                      _t43 ? (b.endTimeField = _t43.name, _t43.type = "esriFieldTypeDate") : b.endTimeField = null;
                    }

                    if (b.trackIdField) {
                      _t44 = _e35.get(b.trackIdField);
                      _t44 ? b.trackIdField = _t44.name : (b.trackIdField = null, w.warn({
                        name: "ogc-feature-layer:invalid-timeInfo-trackIdField",
                        message: "trackIdField is missing",
                        details: {
                          timeInfo: b
                        }
                      }));
                    }

                    b.startTimeField || b.endTimeField || (w.warn({
                      name: "ogc-feature-layer:invalid-timeInfo",
                      message: "startTimeField and endTimeField are missing",
                      details: {
                        timeInfo: b
                      }
                    }), b = null);
                  }

                  return _context42.abrupt("return", {
                    drawingInfo: Object(_graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_12__["createDrawingInfo"])(j),
                    geometryType: j,
                    fields: u,
                    hasZ: !!y,
                    objectIdField: T,
                    timeInfo: b
                  });

                case 51:
                case "end":
                  return _context42.stop();
              }
            }
          }, _callee42, null, [[1, 6], [31, 43, 46, 49]]);
        }));
        return _T.apply(this, arguments);
      }

      function b(_x52, _x53, _x54) {
        return _b4.apply(this, arguments);
      }

      function _b4() {
        _b4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43(e, t, i) {
          var n, _yield$Object6, r;

          return regeneratorRuntime.wrap(function _callee43$(_context43) {
            while (1) {
              switch (_context43.prev = _context43.next) {
                case 0:
                  n = "".concat(e, "/collections/").concat(t);
                  _context43.next = 3;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(n, {
                    signal: i,
                    query: {
                      f: "json"
                    }
                  });

                case 3:
                  _yield$Object6 = _context43.sent;
                  r = _yield$Object6.data;
                  return _context43.abrupt("return", r);

                case 6:
                case "end":
                  return _context43.stop();
              }
            }
          }, _callee43);
        }));
        return _b4.apply(this, arguments);
      }

      function h(_x55, _x56) {
        return _h5.apply(this, arguments);
      }

      function _h5() {
        _h5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44(e, t) {
          var i, _yield$Object7, n;

          return regeneratorRuntime.wrap(function _callee44$(_context44) {
            while (1) {
              switch (_context44.prev = _context44.next) {
                case 0:
                  i = "".concat(e, "/collections");
                  _context44.next = 3;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(i, {
                    signal: t,
                    query: {
                      f: "json"
                    }
                  });

                case 3:
                  _yield$Object7 = _context44.sent;
                  n = _yield$Object7.data;
                  return _context44.abrupt("return", n);

                case 6:
                case "end":
                  return _context44.stop();
              }
            }
          }, _callee44);
        }));
        return _h5.apply(this, arguments);
      }

      function $(_x57, _x58) {
        return _$.apply(this, arguments);
      }

      function _$() {
        _$ = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45(e, t) {
          var i, _yield$Object8, n;

          return regeneratorRuntime.wrap(function _callee45$(_context45) {
            while (1) {
              switch (_context45.prev = _context45.next) {
                case 0:
                  i = "".concat(e, "/conformance");
                  _context45.next = 3;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(i, {
                    signal: t,
                    query: {
                      f: "json"
                    }
                  });

                case 3:
                  _yield$Object8 = _context45.sent;
                  n = _yield$Object8.data;
                  return _context45.abrupt("return", n);

                case 6:
                case "end":
                  return _context45.stop();
              }
            }
          }, _callee45);
        }));
        return _$.apply(this, arguments);
      }

      function x(_x60, _x61) {
        return _x59.apply(this, arguments);
      }

      function _x59() {
        _x59 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46(e, t) {
          var _yield$Object9, i;

          return regeneratorRuntime.wrap(function _callee46$(_context46) {
            while (1) {
              switch (_context46.prev = _context46.next) {
                case 0:
                  _context46.next = 2;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(e, {
                    signal: t,
                    query: {
                      f: "json"
                    }
                  });

                case 2:
                  _yield$Object9 = _context46.sent;
                  i = _yield$Object9.data;
                  return _context46.abrupt("return", i);

                case 5:
                case "end":
                  return _context46.stop();
              }
            }
          }, _callee46);
        }));
        return _x59.apply(this, arguments);
      }

      function k(_x62, _x63, _x64) {
        return _k.apply(this, arguments);
      }

      function _k() {
        _k = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47(e, t, i) {
          var n;
          return regeneratorRuntime.wrap(function _callee47$(_context47) {
            while (1) {
              switch (_context47.prev = _context47.next) {
                case 0:
                  _context47.next = 2;
                  return S(e, t, i);

                case 2:
                  n = _context47.sent;
                  return _context47.abrupt("return", _tasks_support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_9__["default"].fromJSON(n));

                case 4:
                case "end":
                  return _context47.stop();
              }
            }
          }, _callee47);
        }));
        return _k.apply(this, arguments);
      }

      function S(_x65, _x66, _x67) {
        return _S.apply(this, arguments);
      }

      function _S() {
        _S = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee48(e, t, i) {
          var n;
          return regeneratorRuntime.wrap(function _callee48$(_context48) {
            while (1) {
              switch (_context48.prev = _context48.next) {
                case 0:
                  _context48.next = 2;
                  return q(e, t, i);

                case 2:
                  n = _context48.sent;
                  return _context48.abrupt("return", Object(_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToFeatureSet"])(n));

                case 4:
                case "end":
                  return _context48.stop();
              }
            }
          }, _callee48);
        }));
        return _S.apply(this, arguments);
      }

      function q(_x68, _x69, _x70) {
        return _q.apply(this, arguments);
      }
      /***/


      function _q() {
        _q = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee49(i, n, l) {
          var d, m, u, p, g, F, I, w, T, b, h, $, x, k, S, q, _yield$Object10, v, D, O, N, Z, R, C, E, L, J, _iterator28, _step28, e, _iterator29, _step29, _e37, M;

          return regeneratorRuntime.wrap(function _callee49$(_context49) {
            while (1) {
              switch (_context49.prev = _context49.next) {
                case 0:
                  m = i.capabilities.query.maxRecordCount;
                  u = i.collectionId;
                  p = i.layerDefinition;
                  g = i.url;
                  F = "".concat(g, "/collections/").concat(u, "/items");
                  I = n.geometry;
                  w = n.num;
                  T = n.start;
                  b = n.timeExtent;
                  h = n.where;
                  $ = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(n.outSpatialReference) ? n.outSpatialReference : _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"];

                  x = function (e) {
                    if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return null;
                    var i = e.xmin,
                        n = e.ymin,
                        r = e.xmax,
                        a = e.ymax;
                    return "".concat(i, ",").concat(n, ",").concat(r, ",").concat(a);
                  }(Object(_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(I, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"]));

                  k = function (e) {
                    if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e)) return null;
                    var i = e.start,
                        n = e.end;
                    return "".concat(i ? i.toISOString() : "..", "/").concat(n ? n.toISOString() : "..");
                  }(b);

                  S = function (e) {
                    if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(e) || !e || "1=1" === e) return null;
                    return e;
                  }(h);

                  q = null != w ? w : null != T && void 0 !== T ? 10 : m;
                  _context49.next = 17;
                  return Object(_request_js__WEBPACK_IMPORTED_MODULE_4__["default"])(F, _objectSpread(_objectSpread({}, l), {}, {
                    query: {
                      bbox: x,
                      datetime: k,
                      query: S,
                      limit: q,
                      startindex: T,
                      f: "json"
                    }
                  }));

                case 17:
                  _yield$Object10 = _context49.sent;
                  v = _yield$Object10.data;
                  D = null == (d = v.links) ? void 0 : d.filter(function (e) {
                    return "next" === e.rel;
                  });
                  O = 0 !== (null == D ? void 0 : D.length);
                  N = p.fields;
                  Z = p.globalIdField;
                  R = p.hasM;
                  C = p.hasZ;
                  E = p.objectIdField;
                  L = p.geometryType;
                  J = Object(_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_11__["createOptimizedFeatures"])(v, {
                    geometryType: L,
                    hasZ: C,
                    objectIdFieldName: E
                  });

                  if (!Object(_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["equals"])($, _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"])) {
                    _iterator28 = _createForOfIteratorHelper(J);

                    try {
                      for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        e = _step28.value;
                        e.geometry && (e.geometry = Object(_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertFromGeometry"])(Object(_graphics_data_projectionSupport_js__WEBPACK_IMPORTED_MODULE_10__["project"])(Object(_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__["convertToGeometry"])(e.geometry, L, C, !1), _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"], $)));
                      }
                    } catch (err) {
                      _iterator28.e(err);
                    } finally {
                      _iterator28.f();
                    }
                  }

                  _iterator29 = _createForOfIteratorHelper(J);

                  try {
                    for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                      _e37 = _step29.value;
                      _e37.objectId = _e37.attributes[E];
                    }
                  } catch (err) {
                    _iterator29.e(err);
                  } finally {
                    _iterator29.f();
                  }

                  M = new _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
                  return _context49.abrupt("return", (M.exceededTransferLimit = O, M.features = J, M.fields = N, M.geometryType = L, M.globalIdFieldName = Z, M.hasM = R, M.hasZ = C, M.objectIdFieldName = E, M.spatialReference = $ || _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_3__["WGS84"], M));

                case 33:
                case "end":
                  return _context49.stop();
              }
            }
          }, _callee49);
        }));
        return _q.apply(this, arguments);
      }
    },

    /***/
    "gzK8":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/tileRenderers/support/visualVariablesUtils.js ***!
      \**********************************************************************************************************/

    /*! exports provided: convertColorVariable, convertVisualVariables, getVisualVariableSizeValueRepresentationRatio, getVisualVariablesFields, normalizeSizeElement, normalizeSizeStops, stopToSizeStop */

    /***/
    function gzK8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertColorVariable", function () {
        return y;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertVisualVariables", function () {
        return m;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisualVariableSizeValueRepresentationRatio", function () {
        return r;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getVisualVariablesFields", function () {
        return p;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeSizeElement", function () {
        return c;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "normalizeSizeStops", function () {
        return u;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "stopToSizeStop", function () {
        return a;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../../core/screenUtils.js */
      "qRWG");
      /* harmony import */


      var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../engine/webgl/definitions.js */
      "jIHu");
      /* harmony import */


      var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../engine/webgl/enums.js */
      "yE7X");
      /* harmony import */


      var _engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../engine/webgl/color.js */
      "qaIE");
      /* harmony import */


      var _engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../engine/webgl/visualVariablesUtils.js */
      "NIRN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function r(e, t) {
        if (!e || !t) return e;

        switch (t) {
          case "radius":
          case "distance":
            return 2 * e;

          case "diameter":
          case "width":
            return e;

          case "area":
            return Math.sqrt(e);
        }

        return e;
      }

      function a(e) {
        return {
          value: e.value,
          size: Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e.size)
        };
      }

      function u(e) {
        return e.map(function (e) {
          return a(e);
        });
      }

      function c(e) {
        if ("string" == typeof e || "number" == typeof e) return Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["toPt"])(e);
        var s = e;
        return {
          type: "size",
          expression: s.expression,
          stops: u(s.stops)
        };
      }

      function p(e) {
        var t = e && e.length > 0 ? {} : null;
        return t && e.forEach(function (e) {
          var s = e.type;
          e.field && (t[s] = e.field);
        }), t;
      }

      var f = function f(e) {
        var t = [],
            o = [],
            i = u(e),
            l = i.length;

        for (var _e38 = 0; _e38 < 6; _e38++) {
          var _r17 = i[Math.min(_e38, l - 1)];
          t.push(_r17.value), o.push(null == _r17.size ? _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_2__["NAN_MAGIC_NUMBER"] : Object(_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__["pt2px"])(_r17.size));
        }

        return {
          values: new Float32Array(t),
          sizes: new Float32Array(o)
        };
      };

      function m(e) {
        var t = e && e.length > 0 ? {} : null,
            s = t ? {} : null;
        if (!t) return {
          vvFields: t,
          vvRanges: s
        };

        var _iterator30 = _createForOfIteratorHelper(e),
            _step30;

        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var n = _step30.value;

            if (n.field && (t[n.type] = n.field), "size" === n.type) {
              s.size || (s.size = {});
              var _e39 = n;

              switch (Object(_engine_webgl_visualVariablesUtils_js__WEBPACK_IMPORTED_MODULE_5__["getTypeOfSizeVisualVariable"])(_e39)) {
                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_MINMAX_VALUE:
                  s.size.minMaxValue = {
                    minDataValue: _e39.minDataValue,
                    maxDataValue: _e39.maxDataValue,
                    minSize: c(_e39.minSize),
                    maxSize: c(_e39.maxSize)
                  };
                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_SCALE_STOPS:
                  s.size.scaleStops = {
                    stops: u(_e39.stops)
                  };
                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_FIELD_STOPS:
                  if (_e39.levels) {
                    var _t45 = {};

                    for (var _s13 in _e39.levels) {
                      _t45[_s13] = f(_e39.levels[_s13]);
                    }

                    s.size.fieldStops = {
                      type: "level-dependent",
                      levels: _t45
                    };
                  } else s.size.fieldStops = _objectSpread({
                    type: "static"
                  }, f(_e39.stops));

                  break;

                case _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__["WGLVVFlag"].SIZE_UNIT_VALUE:
                  s.size.unitValue = {
                    unit: _e39.valueUnit,
                    valueRepresentation: _e39.valueRepresentation
                  };
              }
            } else if ("color" === n.type) s.color = y(n);else if ("opacity" === n.type) s.opacity = v(n);else if ("rotation" === n.type) {
              var _e40 = n;
              s.rotation = {
                type: _e40.rotationType
              };
            }
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        return {
          vvFields: t,
          vvRanges: s
        };
      }

      function v(e) {
        var t = {
          values: [0, 0, 0, 0, 0, 0, 0, 0],
          opacities: [0, 0, 0, 0, 0, 0, 0, 0]
        };

        if ("string" == typeof e.field) {
          if (!e.stops) return null;
          {
            if (e.stops.length > 8) return null;
            var s = e.stops;

            for (var _e41 = 0; _e41 < 8; ++_e41) {
              var n = s[Math.min(_e41, s.length - 1)];
              t.values[_e41] = n.value, t.opacities[_e41] = n.opacity;
            }
          }
        } else {
          if (!(e.stops && e.stops.length >= 0)) return null;
          {
            var _s14 = e.stops && e.stops.length >= 0 && e.stops[0].opacity;

            for (var _e42 = 0; _e42 < 8; _e42++) {
              t.values[_e42] = 1 / 0, t.opacities[_e42] = _s14;
            }
          }
        }

        return t;
      }

      function g(e, t, s) {
        e[4 * t + 0] = s.r / 255, e[4 * t + 1] = s.g / 255, e[4 * t + 2] = s.b / 255, e[4 * t + 3] = s.a;
      }

      function y(t) {
        if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isNone"])(t)) return null;
        if (t.normalizationField) return null;
        var s = {
          field: null,
          values: [0, 0, 0, 0, 0, 0, 0, 0],
          colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        };

        if ("string" == typeof t.field) {
          if (!t.stops) return null;
          {
            if (t.stops.length > 8) return null;
            s.field = t.field;
            var e = t.stops;

            for (var _t46 = 0; _t46 < 8; ++_t46) {
              var n = e[Math.min(_t46, e.length - 1)];
              s.values[_t46] = n.value, g(s.colors, _t46, n.color);
            }
          }
        } else {
          if (!(t.stops && t.stops.length >= 0)) return null;
          {
            var _e43 = t.stops && t.stops.length >= 0 && t.stops[0].color;

            for (var _t47 = 0; _t47 < 8; _t47++) {
              s.values[_t47] = 1 / 0, g(s.colors, _t47, _e43);
            }
          }
        }

        for (var _e44 = 0; _e44 < 32; _e44 += 4) {
          Object(_engine_webgl_color_js__WEBPACK_IMPORTED_MODULE_4__["premultiplyAlpha"])(s.colors, _e44, !0);
        }

        return s;
      }
      /***/

    },

    /***/
    "ixbA":
    /*!**************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/GeoEventSource.js ***!
      \**************************************************************************************/

    /*! exports provided: GeoEventSource */

    /***/
    function ixbA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeoEventSource", function () {
        return g;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../layers/graphics/OptimizedGeometry.js */
      "gVKr");
      /* harmony import */


      var _layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../layers/graphics/featureConversionUtils.js */
      "ZlUD");
      /* harmony import */


      var _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../support/FeatureSetReaderJSON.js */
      "Q0oN");
      /* harmony import */


      var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../chunks/rbush.js */
      "kB+0");
      /* harmony import */


      var _layers_graphics_data_StreamFeatureManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../layers/graphics/data/StreamFeatureManager.js */
      "erGv");
      /* harmony import */


      var _layers_graphics_sources_connections_createConnection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../layers/graphics/sources/connections/createConnection.js */
      "Vj25");
      /* harmony import */


      var _DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./DataTileSource.js */
      "blMy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function p(e, t) {
        var s = e.weakClone(),
            o = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["quantizeX"])(t, e.geometry.coords[0]),
            n = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["quantizeY"])(t, e.geometry.coords[1]);
        return s.geometry = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"]([], [o, n]), s;
      }

      function l(e, t) {
        var s = Object(_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_5__["r"])(9, function (e) {
          switch (e) {
            case "esriGeometryPoint":
              return function (e) {
                return {
                  minX: e.geometry.coords[0],
                  minY: e.geometry.coords[1],
                  maxX: e.geometry.coords[0],
                  maxY: e.geometry.coords[1]
                };
              };

            default:
              return function (e) {
                var t = 1 / 0,
                    s = 1 / 0,
                    r = -1 / 0,
                    o = -1 / 0;
                return e.geometry.forEachVertex(function (e, n) {
                  t = Math.min(t, e), s = Math.min(s, n), r = Math.max(r, e), o = Math.max(o, n);
                }), {
                  minX: t,
                  minY: s,
                  maxX: r,
                  maxY: o
                };
              };
          }
        }(t));
        return s.load(e), s;
      }

      function _(e, t) {
        return e.search({
          minX: t.bounds[0],
          minY: t.bounds[1],
          maxX: t.bounds[2],
          maxY: t.bounds[3]
        });
      }

      var f = /*#__PURE__*/function () {
        function f(e, t) {
          _classCallCheck(this, f);

          this.onUpdate = e, this._geometryType = t, this._objectIdToFeature = new Map();
        }

        _createClass(f, [{
          key: "_features",
          get: function get() {
            var e = [];
            return this._objectIdToFeature.forEach(function (t) {
              return e.push(t);
            }), e;
          }
        }, {
          key: "add",
          value: function add(e) {
            this._objectIdToFeature.set(e.objectId, e), this._index = null;
          }
        }, {
          key: "get",
          value: function get(e) {
            return this._objectIdToFeature.has(e) ? this._objectIdToFeature.get(e) : null;
          }
        }, {
          key: "forEach",
          value: function forEach(e) {
            this._objectIdToFeature.forEach(e);
          }
        }, {
          key: "search",
          value: function search(e) {
            return this._index || (this._index = l(this._features, this._geometryType)), _(this._index, e);
          }
        }, {
          key: "removeById",
          value: function removeById(e) {
            var t = this._objectIdToFeature.get(e);

            return t ? (this._objectIdToFeature["delete"](e), this._index = null, t) : null;
          }
        }, {
          key: "update",
          value: function update(e, t) {
            this.onUpdate(e, t);
          }
        }, {
          key: "size",
          get: function get() {
            return this._objectIdToFeature.size;
          }
        }]);

        return f;
      }();

      var g = /*#__PURE__*/function (_DataTileSource_js__W) {
        _inherits(g, _DataTileSource_js__W);

        var _super14 = _createSuper(g);

        function g(e) {
          var _this36;

          _classCallCheck(this, g);

          _this36 = _super14.call(this, e), _this36.type = "geoevent", _this36._dataReceiveEventEnabled = !1, _this36._updateInfo = {
            websocket: 0,
            client: 0
          };
          var t = e.outSR,
              _e$serviceInfo = e.serviceInfo,
              s = _e$serviceInfo.geometryType,
              o = _e$serviceInfo.objectIdField,
              i = _e$serviceInfo.timeInfo,
              a = _e$serviceInfo.purgeOptions,
              c = _e$serviceInfo.source,
              u = _e$serviceInfo.spatialReference,
              m = _e$serviceInfo.serviceFilter,
              l = _e$serviceInfo.maxReconnectionAttempts,
              _ = _e$serviceInfo.maxReconnectionInterval,
              _g3 = _e$serviceInfo.updateInterval,
              y = new f(_this36._onUpdate.bind(_assertThisInitialized(_this36)), s),
              b = new _layers_graphics_data_StreamFeatureManager_js__WEBPACK_IMPORTED_MODULE_6__["default"](y, o, i, a),
              I = Object(_layers_graphics_sources_connections_createConnection_js__WEBPACK_IMPORTED_MODULE_7__["createConnection"])(c, u, t, s, m, l, _);
          _this36._store = y, _this36._manager = b, _this36._connection = I, _this36._quantize = function (e) {
            switch (e) {
              case "esriGeometryPoint":
                return p;

              case "esriGeometryPolygon":
              case "esriGeometryPolyline":
              default:
                return function (t, s) {
                  var o = t.weakClone(),
                      i = new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__["default"](),
                      a = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["quantizeOptimizedGeometry"])(i, t.geometry, !1, !1, e, s, !1, !1);
                  return o.geometry = a, o;
                };
            }
          }(s), _this36._handles = [_this36._connection.on("feature", function (e) {
            return _this36._onFeature(e);
          }), _this36._connection.watch("connectionStatus", function (e) {
            return _this36.events.emit("connectionStatus", e);
          }), _this36._connection.watch("errorString", function (e) {
            return _this36.events.emit("errorString", e);
          })];
          var v = performance.now();
          _this36._updateIntervalId = setInterval(function () {
            var t = performance.now(),
                s = t - v;

            if (s > 2500) {
              v = t;

              var _e45 = Math.round(_this36._updateInfo.client / (s / 1e3)),
                  r = Math.round(_this36._updateInfo.websocket / (s / 1e3));

              _this36._updateInfo.client = 0, _this36._updateInfo.websocket = 0, _this36.events.emit("updateRate", {
                client: _e45,
                websocket: r
              });
            }

            e.canAcceptRequest() && _this36._manager.checkForUpdates();
          }, _g3);
          return _this36;
        }

        _createClass(g, [{
          key: "destroy",
          value: function destroy() {
            clearInterval(this._updateIntervalId), this._handles.forEach(function (e) {
              return e.remove();
            }), this._connection.destroy();
          }
        }, {
          key: "_fetchDataTile",
          value: function _fetchDataTile() {}
        }, {
          key: "enableEvent",
          value: function enableEvent(e, t) {
            "data-received" === e && (this._dataReceiveEventEnabled = t);
          }
        }, {
          key: "updating",
          get: function get() {
            return !1;
          }
        }, {
          key: "subscribe",
          value: function subscribe(e) {
            _get(_getPrototypeOf(g.prototype), "subscribe", this).call(this, e);

            var t = this._getTileFeatures(e);

            this._onRequest({
              tile: e,
              id: e.key.id,
              features: t,
              end: !0
            }, "new");
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe(e) {
            _get(_getPrototypeOf(g.prototype), "unsubscribe", this).call(this, e);
          }
        }, {
          key: "forEachRequest",
          value: function forEachRequest(e, t) {
            var s = this._subscriptions.get(e),
                r = s.tile,
                o = s.signal;

            t({
              tile: r,
              id: e,
              features: this._getTileFeatures(r),
              end: !0
            }, {
              signal: o
            });
          }
        }, {
          key: "resend",
          value: function () {
            var _resend = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee50(e) {
              var _this37 = this;

              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      this._subscriptions.forEach(function (t) {
                        var s = t.tile,
                            r = {
                          tile: s,
                          id: s.id,
                          features: _this37._getTileFeatures(s),
                          end: !0
                        };

                        _this37._onRequest(r, "update", e);
                      });

                    case 1:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));

            function resend(_x71) {
              return _resend.apply(this, arguments);
            }

            return resend;
          }()
        }, {
          key: "_getTileFeatures",
          value: function _getTileFeatures(e) {
            var _this38 = this;

            var t = this._store.search(e).map(function (t) {
              return _this38._quantize(t, e.transform);
            });

            return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromOptimizedFeatures(t, this.geometryType, e.transform);
          }
        }, {
          key: "_onFeature",
          value: function _onFeature(e) {
            this._updateInfo.websocket++;

            try {
              this._dataReceiveEventEnabled && this.events.emit("feature", e);
              var t = Object(_layers_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_3__["convertFromFeature"])(e, this.geometryType, !1, !1, this._serviceInfo.objectIdField);

              this._manager.add(t);
            } catch (e) {}
          }
        }, {
          key: "_onUpdate",
          value: function () {
            var _onUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee51(r, o) {
              var _this39 = this;

              var n, i;
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(r, function (e) {
                        return l(e, _this39.geometryType);
                      }), i = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(o, function (e) {
                        return l(e, _this39.geometryType);
                      });
                      Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(r) && (this._updateInfo.client += r.length), this._subscriptions.forEach(function (t, r) {
                        var o = t.tile,
                            a = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(n, function (e) {
                          return _(e, o);
                        }),
                            u = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(a, function (e) {
                          return e.map(function (e) {
                            return _this39._quantize(e, o.transform);
                          });
                        }),
                            h = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(u, function (e) {
                          return _support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_4__["FeatureSetReaderJSON"].fromOptimizedFeatures(e, _this39.geometryType, o.transform);
                        }),
                            d = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(i, function (e) {
                          return _(e, o);
                        }),
                            m = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["andThen"])(d, function (e) {
                          return e.map(function (e) {
                            return e.objectId;
                          });
                        });

                        _this39._onRequest({
                          tile: o,
                          id: r,
                          features: h,
                          remove: Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["unwrapOr"])(m, []),
                          end: !0
                        }, "update");
                      });

                    case 2:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));

            function _onUpdate(_x72, _x73) {
              return _onUpdate2.apply(this, arguments);
            }

            return _onUpdate;
          }()
        }]);

        return g;
      }(_DataTileSource_js__WEBPACK_IMPORTED_MODULE_8__["DataTileSource"]);
      /***/

    },

    /***/
    "l8tk":
    /*!***********************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/engine/webgl/util/debug.js ***!
      \***********************************************************************/

    /*! exports provided: DEBUG_ATTR_UPDATES, createDebugLogger */

    /***/
    function l8tk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEBUG_ATTR_UPDATES", function () {
        return l;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createDebugLogger", function () {
        return n;
      });
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = function n(_n14, l) {
        return _n14 && function () {
          for (var _len = arguments.length, n = new Array(_len), _key = 0; _key < _len; _key++) {
            n[_key] = arguments[_key];
          }

          return l.warn.apply(l, ["DEBUG:"].concat(n));
        } || function () {
          return null;
        };
      },
          l = !1;
      /***/

    },

    /***/
    "lx5q":
    /*!*********************************************************!*\
      !*** ./node_modules/@arcgis/core/core/CircularArray.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function lx5q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./maybe.js */
      "srIe");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */

      /* harmony default export */


      __webpack_exports__["default"] = /*#__PURE__*/function () {
        function _class2() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Number.POSITIVE_INFINITY;

          _classCallCheck(this, _class2);

          this.size = 0, this._start = 0, this.maxSize = t, this._buffer = isFinite(t) ? new Array(t) : [];
        }

        _createClass(_class2, [{
          key: "entries",
          get: function get() {
            return this._buffer;
          }
        }, {
          key: "enqueue",
          value: function enqueue(t) {
            if (this.size === this.maxSize) {
              var s = this._buffer[this._start];
              return this._buffer[this._start] = t, this._start = (this._start + 1) % this.maxSize, s;
            }

            return isFinite(this.maxSize) ? this._buffer[(this._start + this.size++) % this.maxSize] = t : this._buffer[this._start + this.size++] = t, null;
          }
        }, {
          key: "dequeue",
          value: function dequeue() {
            if (0 === this.size) return null;
            var t = this._buffer[this._start];
            return this._buffer[this._start] = null, this.size--, this._start = (this._start + 1) % this.maxSize, t;
          }
        }, {
          key: "clear",
          value: function clear() {
            for (; Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this.dequeue());) {
              ;
            }
          }
        }]);

        return _class2;
      }();
      /***/

    },

    /***/
    "nEO6":
    /*!************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/createSource.js ***!
      \************************************************************************************/

    /*! exports provided: createSource */

    /***/
    function nEO6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createSource", function () {
        return n;
      });
      /* harmony import */


      var _layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../layers/support/arcgisLayerUrl.js */
      "VLTf");
      /* harmony import */


      var _DrillDownFeatureSource_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./DrillDownFeatureSource.js */
      "wnYc");
      /* harmony import */


      var _GeoEventSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./GeoEventSource.js */
      "ixbA");
      /* harmony import */


      var _PagedFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./PagedFeatureSource.js */
      "bDVu");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function n(n, c, s, a, u) {
        var i = function (r, t, o, n, c) {
          switch (r.type) {
            case "stream":
              return {
                type: "geoevent",
                serviceInfo: r,
                onRequest: n,
                outSR: t,
                canAcceptRequest: c
              };

            case "memory":
            case "on-demand":
              return {
                type: "feature",
                serviceInfo: r,
                onRequest: n,
                outSR: t,
                origin: s(r.source),
                tileInfoView: o,
                canAcceptRequest: c
              };
          }

          function s(r) {
            return Array.isArray(r) ? "local" : "path" in r && Object(_layers_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__["isHostedAgolService"])(r.path) ? "hosted" : "unknown";
          }
        }(n, c, s, a, u);

        switch (i.type) {
          case "feature":
            switch (i.origin) {
              case "hosted":
              case "local":
                return new _PagedFeatureSource_js__WEBPACK_IMPORTED_MODULE_3__["PagedFeatureSource"](i);

              case "unknown":
                return new _DrillDownFeatureSource_js__WEBPACK_IMPORTED_MODULE_1__["DrillDownFeatureSource"](i);
            }

          case "geoevent":
            return new _GeoEventSource_js__WEBPACK_IMPORTED_MODULE_2__["GeoEventSource"](i);
        }
      }
      /***/

    },

    /***/
    "oBXe":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/support/tileUtils.js ***!
      \*********************************************************************************/

    /*! exports provided: getPow2NeighborKey, getPow2NeighborTile */

    /***/
    function oBXe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPow2NeighborKey", function () {
        return e;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getPow2NeighborTile", function () {
        return l;
      });
      /* harmony import */


      var _Tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./Tile.js */
      "7g5W");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      function l(l, n, r) {
        var c = e(l.key, n, r);
        return new _Tile_js__WEBPACK_IMPORTED_MODULE_0__["Tile"](l.tileInfoView, c);
      }

      function e(o, l, e) {
        var n = o.clone(),
            r = 1 << n.level,
            c = n.col + l,
            t = n.row + e;
        return c < 0 && c !== n.col ? (n.col = c + r, n.world -= 1) : c >= r ? (n.col = c - r, n.world += 1) : n.col = c, n.row = t, n;
      }
      /***/

    },

    /***/
    "uvrw":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/BaseFeatureSource.js ***!
      \*****************************************************************************************/

    /*! exports provided: BaseFeatureSource */

    /***/
    function uvrw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseFeatureSource", function () {
        return y;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../../core/Logger.js */
      "6S2I");
      /* harmony import */


      var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../core/Error.js */
      "zlDU");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _request_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../request.js */
      "Lqtk");
      /* harmony import */


      var _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../tasks/support/Query.js */
      "xk++");
      /* harmony import */


      var _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../support/QueueProcessor.js */
      "tUFA");
      /* harmony import */


      var _controllers_support_sources_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../controllers/support/sources.js */
      "Yi5l");
      /* harmony import */


      var _DataTileSource_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./DataTileSource.js */
      "blMy");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var p = _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.views.2d.layers.features.sources.BaseFeatureSource");

      var y = /*#__PURE__*/function (_DataTileSource_js__W2) {
        _inherits(y, _DataTileSource_js__W2);

        var _super15 = _createSuper(y);

        function y(t) {
          var _this40;

          _classCallCheck(this, y);

          _this40 = _super15.call(this, t), _this40.type = "feature", _this40._adapter = Object(_controllers_support_sources_js__WEBPACK_IMPORTED_MODULE_8__["createSourceAdapter"])(t.serviceInfo), _this40._queue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_7__["QueueProcessor"]({
            concurrency: 8,
            process: function () {
              var _process = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee52(t) {
                var s, r, i, n;
                return regeneratorRuntime.wrap(function _callee52$(_context52) {
                  while (1) {
                    switch (_context52.prev = _context52.next) {
                      case 0:
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(t);
                        s = t.tile.key.id, r = t.tile, i = t.signal, n = {
                          query: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug") ? {
                            tile: s.replace(/\//g, "."),
                            depth: t.depth
                          } : void 0,
                          signal: i,
                          transform: r.transform
                        };
                        return _context52.abrupt("return", _this40._adapter.executeQuery(t.query, n));

                      case 3:
                      case "end":
                        return _context52.stop();
                    }
                  }
                }, _callee52);
              }));

              function process(_x74) {
                return _process.apply(this, arguments);
              }

              return process;
            }()
          }), _this40._patchQueue = new _support_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_7__["QueueProcessor"]({
            concurrency: 8,
            process: function () {
              var _process2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee53(t) {
                var s, r, i, n;
                return regeneratorRuntime.wrap(function _callee53$(_context53) {
                  while (1) {
                    switch (_context53.prev = _context53.next) {
                      case 0:
                        Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(t);
                        s = t.tile.key.id, r = t.tile, i = t.signal, n = {
                          query: Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-tiles-debug") ? {
                            tile: s.replace(/\//g, "."),
                            depth: t.depth
                          } : void 0,
                          signal: i,
                          transform: r.transform
                        };
                        return _context53.abrupt("return", _this40._adapter.executeQuery(t.query, n));

                      case 3:
                      case "end":
                        return _context53.stop();
                    }
                  }
                }, _callee53);
              }));

              function process(_x75) {
                return _process2.apply(this, arguments);
              }

              return process;
            }()
          });
          return _this40;
        }

        _createClass(y, [{
          key: "destroy",
          value: function destroy() {
            this._adapter.destroy(), this._queue.destroy(), this._patchQueue.destroy();
          }
        }, {
          key: "setViewState",
          value: function setViewState(e) {}
        }, {
          key: "updating",
          get: function get() {
            return !!this._queue.length;
          }
        }, {
          key: "subscribe",
          value: function subscribe(e) {
            _get(_getPrototypeOf(y.prototype), "subscribe", this).call(this, e), this._fetchDataTile(e)["catch"](function (t) {
              Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["isAbortError"])(t) || p.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__["default"]("mapview-query-error", "Encountered error when fetching tile", {
                tile: e,
                error: t
              }));
            });
          }
        }, {
          key: "unsubscribe",
          value: function unsubscribe(e) {
            _get(_getPrototypeOf(y.prototype), "unsubscribe", this).call(this, e);
          }
        }, {
          key: "pause",
          value: function pause() {
            this._queue.pause();
          }
        }, {
          key: "resume",
          value: function resume() {
            this._queue.resume();
          }
        }, {
          key: "query",
          value: function () {
            var _query2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee54(e, t) {
              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      return _context54.abrupt("return", this._adapter.executeQuery(e, t));

                    case 1:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));

            function query(_x76, _x77) {
              return _query2.apply(this, arguments);
            }

            return query;
          }()
        }, {
          key: "queryLastEditDate",
          value: function () {
            var _queryLastEditDate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              var e, t;
              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      e = this._serviceInfo.source, t = _objectSpread(_objectSpread({}, e.query), {}, {
                        f: "json"
                      });
                      _context55.next = 3;
                      return Object(_request_js__WEBPACK_IMPORTED_MODULE_5__["default"])(e.path, {
                        query: t,
                        responseType: "json"
                      });

                    case 3:
                      return _context55.abrupt("return", _context55.sent.data.editingInfo.lastEditDate);

                    case 4:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));

            function queryLastEditDate() {
              return _queryLastEditDate2.apply(this, arguments);
            }

            return queryLastEditDate;
          }()
        }, {
          key: "forEachRequest",
          value: function forEachRequest(e, t) {
            var s = this._subscriptions.get(e),
                r = s.requests,
                i = s.signal;

            var _iterator31 = _createForOfIteratorHelper(r.done),
                _step31;

            try {
              for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                var _e46 = _step31.value;
                t(_e46.request, {
                  signal: i
                });
              }
            } catch (err) {
              _iterator31.e(err);
            } finally {
              _iterator31.f();
            }
          }
        }, {
          key: "_executePatchQuery",
          value: function () {
            var _executePatchQuery2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee56(e, s, r, i) {
              var o, n, u;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      o = s.clone();
                      o.outFields = [this._serviceInfo.objectIdField].concat(_toConsumableArray(r)), o.returnCentroid = !1, o.returnGeometry = !1;
                      n = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(o.start) ? o.start / 8e3 : 0, u = i.signal;
                      return _context56.abrupt("return", this._patchQueue.push({
                        tile: e,
                        query: o,
                        signal: u,
                        depth: n
                      }));

                    case 4:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));

            function _executePatchQuery(_x78, _x79, _x80, _x81) {
              return _executePatchQuery2.apply(this, arguments);
            }

            return _executePatchQuery;
          }()
        }, {
          key: "_resendRequest",
          value: function () {
            var _resendRequest2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee57(e, r) {
              var i, n, u, a, c, _e47;

              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      i = e.query, n = e.request, u = Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isSome"])(i.outFields) ? i.outFields : [], a = this._sourceQueryInfo.outFields, c = a.filter(function (e) {
                        return -1 === u.indexOf(e);
                      });

                      if (Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_1__["isNone"])(n.features)) {
                        _context57.next = 15;
                        break;
                      }

                      if (!c.length) {
                        _context57.next = 14;
                        break;
                      }

                      _context57.prev = 3;
                      _context57.next = 6;
                      return this._executePatchQuery(n.tile, i, c, r);

                    case 6:
                      _e47 = _context57.sent;
                      Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["throwIfAborted"])(r), i.outFields = a, n.features.joinAttributes(_e47), this._onRequest(_objectSpread(_objectSpread({}, n), {}, {
                        end: n.end || r.end
                      }), "new", r);
                      _context57.next = 12;
                      break;

                    case 10:
                      _context57.prev = 10;
                      _context57.t0 = _context57["catch"](3);

                    case 12:
                      _context57.next = 15;
                      break;

                    case 14:
                      this._onRequest(_objectSpread(_objectSpread({}, n), {}, {
                        end: n.end || r.end
                      }), "new", r);

                    case 15:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this, [[3, 10]]);
            }));

            function _resendRequest(_x82, _x83) {
              return _resendRequest2.apply(this, arguments);
            }

            return _resendRequest;
          }()
        }, {
          key: "resend",
          value: function () {
            var _resend2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee58(_ref12) {
              var _this41 = this;

              var e, t, s, r;
              return regeneratorRuntime.wrap(function _callee58$(_context58) {
                while (1) {
                  switch (_context58.prev = _context58.next) {
                    case 0:
                      e = _ref12.dataTileOnly;
                      t = 0, s = !1;
                      r = [];

                      for (this._subscriptions.forEach(function (e) {
                        if (!e.requests.done.length) {
                          var _t48 = e.tile;

                          _this41._onRequest({
                            tile: _t48,
                            id: _t48.id,
                            features: null,
                            noData: !0,
                            end: !1
                          }, "new", {
                            dataTileOnly: !0
                          });
                        }
                      }); !s;) {
                        s = !0, this._subscriptions.forEach(function (_ref13) {
                          var i = _ref13.requests,
                              o = _ref13.signal;

                          if (i.done.length > t) {
                            s = !1;
                            var n = i.done.length === t + 1;
                            r.push(_this41._resendRequest(i.done[t], {
                              signal: o,
                              dataTileOnly: e,
                              end: n
                            }));
                          }
                        }), t++;
                      }

                      _context58.next = 6;
                      return Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__["all"])(r);

                    case 6:
                    case "end":
                      return _context58.stop();
                  }
                }
              }, _callee58, this);
            }));

            function resend(_x84) {
              return _resend2.apply(this, arguments);
            }

            return resend;
          }()
        }, {
          key: "_createQuery",
          value: function _createQuery(e, t) {
            var s = new _tasks_support_Query_js__WEBPACK_IMPORTED_MODULE_6__["default"](_objectSpread(_objectSpread(_objectSpread({}, this._serviceQueryInfo), this._sourceQueryInfo), t));
            return this._serviceInfo.capabilities.query.supportsQuantization || (t.quantizationParameters = null, s.maxAllowableOffset = e.resolution), t.quantizationParameters && "esriGeometryPolyline" === this.geometryType && (s.maxAllowableOffset = e.resolution), s.resultType = "tile", s.geometry = e.extent, s;
          }
        }]);

        return y;
      }(_DataTileSource_js__WEBPACK_IMPORTED_MODULE_9__["DataTileSource"]);
      /***/

    },

    /***/
    "wnYc":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/@arcgis/core/views/2d/layers/features/sources/DrillDownFeatureSource.js ***!
      \**********************************************************************************************/

    /*! exports provided: DrillDownFeatureSource */

    /***/
    function wnYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DrillDownFeatureSource", function () {
        return n;
      });
      /* harmony import */


      var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../../core/has.js */
      "wSAH");
      /* harmony import */


      var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../../core/promiseUtils.js */
      "9MzC");
      /* harmony import */


      var _BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./BaseFeatureSource.js */
      "uvrw");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var s = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-featurelayer-webgl"),
          i = Object(_core_has_js__WEBPACK_IMPORTED_MODULE_0__["default"])("esri-mobile"),
          a = {
        maxDrillLevel: s && "object" == typeof s && null != s.maxDrillLevel ? s.maxDrillLevel : i ? 1 : 4,
        maxRecordCountFactor: s && "object" == typeof s && null != s.maxRecordCountFactor ? s.maxRecordCountFactor : i ? 1 : 3
      };

      var n = /*#__PURE__*/function (_BaseFeatureSource_js2) {
        _inherits(n, _BaseFeatureSource_js2);

        var _super16 = _createSuper(n);

        function n(e) {
          _classCallCheck(this, n);

          return _super16.call(this, e);
        }

        _createClass(n, [{
          key: "_fetchDataTile",
          value: function () {
            var _fetchDataTile3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee60(e) {
              var _this42 = this;

              var o, s, i, _n15, c, u;

              return regeneratorRuntime.wrap(function _callee60$(_context60) {
                while (1) {
                  switch (_context60.prev = _context60.next) {
                    case 0:
                      o = this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor, s = this._subscriptions.get(e.key.id), i = s.signal, _n15 = e.getQuantizationParameters();
                      c = 0;

                      u = /*#__PURE__*/function () {
                        var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee59(l, d) {
                          var m, f, r, _iterator32, _step32, _e48, _o6;

                          return regeneratorRuntime.wrap(function _callee59$(_context59) {
                            while (1) {
                              switch (_context59.prev = _context59.next) {
                                case 0:
                                  m = _this42._sourceQueryInfo, f = _this42._createQuery(l, {
                                    maxRecordCountFactor: o ? a.maxRecordCountFactor : void 0,
                                    returnExceededLimitFeatures: !1,
                                    quantizationParameters: _n15
                                  });
                                  c++;
                                  _context59.prev = 2;
                                  _context59.next = 5;
                                  return _this42._queue.push({
                                    tile: e,
                                    query: f,
                                    signal: i,
                                    depth: d
                                  });

                                case 5:
                                  r = _context59.sent;

                                  if (!(c--, Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["throwIfAborted"])(i), !r)) {
                                    _context59.next = 8;
                                    break;
                                  }

                                  return _context59.abrupt("return");

                                case 8:
                                  if (!(m !== _this42._sourceQueryInfo)) {
                                    _context59.next = 10;
                                    break;
                                  }

                                  return _context59.abrupt("return", void u(l, d));

                                case 10:
                                  if (!(r.exceededTransferLimit && d < a.maxDrillLevel)) {
                                    _context59.next = 14;
                                    break;
                                  }

                                  _iterator32 = _createForOfIteratorHelper(l.createChildTiles());

                                  try {
                                    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                                      _e48 = _step32.value;
                                      u(_e48, d + 1);
                                    }
                                  } catch (err) {
                                    _iterator32.e(err);
                                  } finally {
                                    _iterator32.f();
                                  }

                                  return _context59.abrupt("return");

                                case 14:
                                  _o6 = {
                                    tile: e,
                                    id: e.id,
                                    features: r,
                                    end: 0 === c
                                  };
                                  s.requests.done.push({
                                    query: f,
                                    request: _o6
                                  }), _this42._onRequest(_o6, "new");
                                  _context59.next = 21;
                                  break;

                                case 18:
                                  _context59.prev = 18;
                                  _context59.t0 = _context59["catch"](2);
                                  Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__["isAbortError"])(_context59.t0) || _this42._onRequest({
                                    tile: e,
                                    id: e.id,
                                    features: null,
                                    end: !0
                                  }, "new");

                                case 21:
                                case "end":
                                  return _context59.stop();
                              }
                            }
                          }, _callee59, null, [[2, 18]]);
                        }));

                        return function u(_x86, _x87) {
                          return _ref14.apply(this, arguments);
                        };
                      }();

                      u(e, 0);

                    case 4:
                    case "end":
                      return _context60.stop();
                  }
                }
              }, _callee60, this);
            }));

            function _fetchDataTile(_x85) {
              return _fetchDataTile3.apply(this, arguments);
            }

            return _fetchDataTile;
          }()
        }]);

        return n;
      }(_BaseFeatureSource_js__WEBPACK_IMPORTED_MODULE_2__["BaseFeatureSource"]);
      /***/

    },

    /***/
    "y/iQ":
    /*!**********************************************************!*\
      !*** ./node_modules/@arcgis/core/geohash/GeohashTree.js ***!
      \**********************************************************/

    /*! exports provided: GeohashTree */

    /***/
    function yIQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeohashTree", function () {
        return n;
      });
      /* harmony import */


      var _core_maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../core/maybe.js */
      "srIe");
      /* harmony import */


      var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/CircularArray.js */
      "lx5q");
      /* harmony import */


      var _geohashUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./geohashUtils.js */
      "04fk");
      /* harmony import */


      var _views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../views/2d/layers/features/support/FeatureSetReaderJSON.js */
      "Q0oN");
      /*
      All material copyright ESRI, All Rights Reserved, unless otherwise specified.
      See https://js.arcgis.com/4.18/esri/copyright.txt for details.
      */


      var n = /*#__PURE__*/function () {
        function n() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8096;

          _classCallCheck(this, n);

          this._nodes = 0, this._root = new a(0, 0, 0), this._statisticFields = t, this._pool = s ? new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_1__["default"](8096) : null;
        }

        _createClass(n, [{
          key: "_acquire",
          value: function _acquire(s, e, i) {
            this._nodes++;
            var o = null;
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._pool) && (o = this._pool.dequeue()), Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(o) ? o.realloc(s, e, i) : new a(s, e, i);
          }
        }, {
          key: "_release",
          value: function _release(s) {
            this._nodes--, Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["isSome"])(this._pool) && this._pool.enqueue(s);
          }
        }, {
          key: "count",
          get: function get() {
            return this._root.count;
          }
        }, {
          key: "size",
          get: function get() {
            return this._nodes;
          }
        }, {
          key: "poolSize",
          get: function get() {
            return Object(_core_maybe_js__WEBPACK_IMPORTED_MODULE_0__["mapOr"])(this._pool, 0, function (t) {
              return t.size;
            });
          }
        }, {
          key: "depth",
          get: function get() {
            var t = 0;
            return this._forEachNode(function (s) {
              return t = Math.max(t, s.depth);
            }), t;
          }
        }, {
          key: "dropLevels",
          value: function dropLevels(t) {
            var _this43 = this;

            this._forEachNode(function (s) {
              if (s.depth >= t) for (var _t49 = 0; _t49 < s.children.length; _t49++) {
                var e = s.children[_t49];
                s.children[_t49] = null, e && _this43._release(e);
              }
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            this.dropLevels(0);
          }
        }, {
          key: "insert",
          value: function insert(t, s) {
            var e = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

            var i = _views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__["FeatureSetReaderJSON"].fromOptimizedFeatures([t], "esriGeometryPoint").getCursor();

            i.next();

            var _n16 = i.readGeometry();

            if (!_n16) return;

            var _n16$coords = _slicedToArray(_n16.coords, 2),
                a = _n16$coords[0],
                l = _n16$coords[1],
                r = t.geohashX,
                h = t.geohashY;

            this.insertCursor(i, t.displayId, a, l, r, h, s, e);
          }
        }, {
          key: "insertCursor",
          value: function insertCursor(t, s, e, i, o, _n17, a) {
            var l = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
            var r = this._root,
                h = 0,
                c = 0,
                d = 0;

            for (; null !== r;) {
              if (r.depth >= l && (r.count += 1, r.xTotal += e, r.yTotal += i, r.xGeohashTotal += o, r.yGeohashTotal += _n17, r.displayId = s, this._updateStatisticsCursor(t, r, 1)), h >= a) return void r.add(s);

              var u = Math.ceil((h + 1) / 2),
                  f = Math.floor((h + 1) / 2),
                  x = 1 - h % 2,
                  m = 30 - (3 * u + 2 * f),
                  p = 30 - (2 * u + 3 * f),
                  y = (o & 7 * x + 3 * (1 - x) << m) >> m,
                  g = (_n17 & 3 * x + 7 * (1 - x) << p) >> p,
                  _ = y + g * (8 * x + 4 * (1 - x));

              c = c << 3 * x + 2 * (1 - x) | y, d = d << 2 * x + 3 * (1 - x) | g, null == r.children[_] && (r.children[_] = this._acquire(c, d, h + 1)), h += 1, r = r.children[_];
            }
          }
        }, {
          key: "remove",
          value: function remove(t, s) {
            var e = _views_2d_layers_features_support_FeatureSetReaderJSON_js__WEBPACK_IMPORTED_MODULE_3__["FeatureSetReaderJSON"].fromOptimizedFeatures([t], "esriGeometryPoint").getCursor();

            e.next();
            var i = e.readGeometry();
            if (!i) return;

            var _i$coords = _slicedToArray(i.coords, 2),
                _n18 = _i$coords[0],
                a = _i$coords[1],
                l = t.geohashX,
                r = t.geohashY;

            this.removeCursor(e, _n18, a, l, r, s);
          }
        }, {
          key: "removeCursor",
          value: function removeCursor(t, s, e, i, o, _n19) {
            var a = this._root,
                l = 0;

            for (; null !== a;) {
              if (a.count -= 1, a.xTotal -= s, a.yTotal -= e, a.xGeohashTotal -= i, a.yGeohashTotal -= o, this._updateStatisticsCursor(t, a, -1), l >= _n19) return void a.remove(t.getDisplayId());

              var r = Math.ceil((l + 1) / 2),
                  h = Math.floor((l + 1) / 2),
                  _c5 = 1 - l % 2,
                  d = 30 - (3 * r + 2 * h),
                  u = 30 - (2 * r + 3 * h),
                  f = ((i & 7 * _c5 + 3 * (1 - _c5) << d) >> d) + ((o & 3 * _c5 + 7 * (1 - _c5) << u) >> u) * (8 * _c5 + 4 * (1 - _c5)),
                  x = a.children[f];

              1 === x.count && (this._release(x), a.children[f] = null), l += 1, a = x;
            }
          }
        }, {
          key: "find",
          value: function find(t, s, e) {
            return this._root.find(t, s, e, 0, 0, 0);
          }
        }, {
          key: "findSingleOccupancyNode",
          value: function findSingleOccupancyNode(t, s, e, i, o) {
            var _n20 = this._root;

            for (; null !== _n20;) {
              var _a9 = _n20.depth,
                  l = _n20.xNode,
                  r = _n20.yNode,
                  h = 1 - _a9 % 2,
                  _c6 = _n20.xGeohashTotal / _n20.count,
                  d = _n20.yGeohashTotal / _n20.count;

              if (1 === _n20.count && t < _c6 && _c6 <= e && s < d && d <= i) return _n20;

              if (_a9 >= o) {
                _n20 = _n20.next;
                continue;
              }

              var u = Math.ceil((_a9 + 1) / 2),
                  f = Math.floor((_a9 + 1) / 2),
                  x = 30 - (3 * u + 2 * f),
                  m = 30 - (2 * u + 3 * f),
                  p = ~((1 << x) - 1),
                  y = ~((1 << m) - 1),
                  g = (t & p) >> x,
                  _ = (s & y) >> m,
                  N = (e & p) >> x,
                  T = (i & y) >> m,
                  M = l << 3 * h + 2 * (1 - h),
                  C = r << 2 * h + 3 * (1 - h),
                  S = M + 8 * h + 4 * (1 - h),
                  b = C + 4 * h + 8 * (1 - h),
                  v = Math.max(M, g),
                  G = Math.max(C, _),
                  k = Math.min(S, N),
                  F = Math.min(b, T);

              var I = null,
                  z = null;

              for (var _t50 = G; _t50 <= F; _t50++) {
                for (var _s15 = v; _s15 <= k; _s15++) {
                  var _e49 = _s15 - M + (_t50 - C) * (8 * h + 4 * (1 - h)),
                      _i9 = _n20.children[_e49];

                  _i9 && (I || (I = _i9, I.next = _n20.next), z && (z.next = _i9), z = _i9, _i9.next = _n20.next);
                }
              }

              _n20 = I || _n20.next;
            }

            return null;
          }
        }, {
          key: "getRegionDisplayIds",
          value: function getRegionDisplayIds(t, s, e, i, o) {
            var _n21 = this._root;
            var a = [];

            for (; null !== _n21;) {
              var l = _n21.depth,
                  r = _n21.xNode,
                  h = _n21.yNode;

              if (l >= o) {
                var _o7 = _n21.xGeohashTotal / _n21.count,
                    _l2 = _n21.yGeohashTotal / _n21.count;

                t <= _o7 && _o7 <= e && s <= _l2 && _l2 <= i && _n21.displayIds.forEach(function (t) {
                  return a.push(t);
                }), _n21 = _n21.next;
                continue;
              }

              var _c7 = Math.ceil((l + 1) / 2),
                  d = Math.floor((l + 1) / 2),
                  u = 1 - l % 2,
                  f = 30 - (3 * _c7 + 2 * d),
                  x = 30 - (2 * _c7 + 3 * d),
                  m = ~((1 << f) - 1),
                  p = ~((1 << x) - 1),
                  y = (t & m) >> f,
                  g = (s & p) >> x,
                  _ = (e & m) >> f,
                  N = (i & p) >> x,
                  T = r << 3 * u + 2 * (1 - u),
                  M = h << 2 * u + 3 * (1 - u),
                  C = T + 8 * u + 4 * (1 - u),
                  S = M + 4 * u + 8 * (1 - u),
                  b = Math.max(T, y),
                  v = Math.max(M, g),
                  G = Math.min(C, _),
                  k = Math.min(S, N);

              var F = null,
                  I = null;

              for (var _t51 = v; _t51 <= k; _t51++) {
                for (var _s16 = b; _s16 <= G; _s16++) {
                  var _e50 = _s16 - T + (_t51 - M) * (8 * u + 4 * (1 - u)),
                      _i10 = _n21.children[_e50];

                  _i10 && (F || (F = _i10, F.next = _n21.next), I && (I.next = _i10), I = _i10, _i10.next = _n21.next);
                }
              }

              _n21 = F || _n21.next;
            }

            return a;
          }
        }, {
          key: "getRegionStatistics",
          value: function getRegionStatistics(t, s, e, i, o) {
            var _n22 = this._root,
                a = 0,
                l = 0,
                r = 0;
            var h = {};
            var c = 0;

            for (; null !== _n22;) {
              var d = _n22.depth,
                  u = _n22.xNode,
                  f = _n22.yNode;

              if (d >= o) {
                var _o8 = _n22.xGeohashTotal / _n22.count,
                    _d2 = _n22.yGeohashTotal / _n22.count;

                t < _o8 && _o8 <= e && s < _d2 && _d2 <= i && (a += _n22.count, l += _n22.xTotal, r += _n22.yTotal, 1 === _n22.count && (c = _n22.displayId), this._aggregateStatistics(h, _n22.statistics)), _n22 = _n22.next;
                continue;
              }

              var x = Math.ceil((d + 1) / 2),
                  m = Math.floor((d + 1) / 2),
                  p = 1 - d % 2,
                  y = 30 - (3 * x + 2 * m),
                  g = 30 - (2 * x + 3 * m),
                  _ = ~((1 << y) - 1),
                  N = ~((1 << g) - 1),
                  T = (t & _) >> y,
                  M = (s & N) >> g,
                  C = (e & _) >> y,
                  S = (i & N) >> g,
                  b = u << 3 * p + 2 * (1 - p),
                  v = f << 2 * p + 3 * (1 - p),
                  G = b + 8 * p + 4 * (1 - p),
                  k = v + 4 * p + 8 * (1 - p),
                  F = Math.max(b, T),
                  I = Math.max(v, M),
                  z = Math.min(G, C),
                  w = Math.min(k, S);

              var A = null,
                  j = null;

              for (var _o9 = I; _o9 <= w; _o9++) {
                for (var _d3 = F; _d3 <= z; _d3++) {
                  var _u10 = _d3 - b + (_o9 - v) * (8 * p + 4 * (1 - p)),
                      _f6 = _n22.children[_u10];

                  if (_f6) {
                    if (_o9 !== I && _o9 !== w && _d3 !== F && _d3 !== z) {
                      var _o10 = _f6.xGeohashTotal / _f6.count,
                          _n29 = _f6.yGeohashTotal / _f6.count;

                      t < _o10 && _o10 <= e && s < _n29 && _n29 <= i && (a += _f6.count, l += _f6.xTotal, r += _f6.yTotal, 1 === _f6.count && (c = _f6.displayId), this._aggregateStatistics(h, _f6.statistics));
                      continue;
                    }

                    A || (A = _f6, A.next = _n22.next), j && (j.next = _f6), j = _f6, _f6.next = _n22.next;
                  }
                }
              }

              _n22 = A || _n22.next;
            }

            return {
              count: a,
              attributes: this._normalizeStatistics(h, a),
              xTotal: l,
              yTotal: r,
              referenceId: c
            };
          }
        }, {
          key: "_forEachNode",
          value: function _forEachNode(t) {
            var s = this._root;

            for (; null !== s;) {
              var e = this._linkChildren(s) || s.next;
              t(s), s = e;
            }
          }
        }, {
          key: "_linkChildren",
          value: function _linkChildren(t) {
            var s = null,
                e = null;

            for (var _i11 = 0; _i11 <= t.children.length; _i11++) {
              var _o11 = t.children[_i11];
              _o11 && (s || (s = _o11, s.next = t.next), e && (e.next = _o11), e = _o11, _o11.next = t.next);
            }

            return s;
          }
        }, {
          key: "_updateStatisticsCursor",
          value: function _updateStatisticsCursor(t, s, e) {
            var _iterator33 = _createForOfIteratorHelper(this._statisticFields),
                _step33;

            try {
              for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                var _i12 = _step33.value;

                var _o12 = _i12.name,
                    _n30 = _i12.inField ? t.readAttribute(_i12.inField) : t.getComputedNumericAtIndex(_i12.inFieldIndex);

                switch (_i12.statisticType) {
                  case "norm":
                    {
                      s.statistics[_o12] || (s.statistics[_o12] = {});
                      var _a10 = _i12.inNormalizationField,
                          l = t.readAttribute(_a10),
                          r = s.statistics[_o12].onStatisticField || 0,
                          h = s.statistics[_o12].onStatisticNormalizationField || 0;
                      null == _n30 || isNaN(_n30) || null == l || 0 === l || isNaN(l) || (s.statistics[_o12].onStatisticField = r + e * _n30, s.statistics[_o12].onStatisticNormalizationField = h + e * l);
                      break;
                    }

                  case "sum":
                  case "avg":
                    {
                      s.statistics[_o12] || (s.statistics[_o12] = {
                        value: 0,
                        nanCount: 0
                      });
                      var _t52 = s.statistics[_o12].value,
                          _i13 = s.statistics[_o12].nanCount;
                      null == _n30 || isNaN(_n30) ? s.statistics[_o12].nanCount = _i13 + e : s.statistics[_o12].value = _t52 + e * _n30;
                      break;
                    }

                  case "avg_angle":
                    {
                      s.statistics[_o12] || (s.statistics[_o12] = {
                        x: 0,
                        y: 0,
                        nanCount: 0
                      });

                      var _t53 = s.statistics[_o12].x,
                          _i14 = s.statistics[_o12].y,
                          _a11 = s.statistics[_o12].nanCount,
                          _l3 = Math.PI / 180;

                      null == _n30 || isNaN(_n30) ? s.statistics[_o12].nanCount = _a11 + e : (s.statistics[_o12].x = _t53 + e * Math.cos(_n30 * _l3), s.statistics[_o12].y = _i14 + e * Math.sin(_n30 * _l3));
                      break;
                    }

                  case "mode":
                    {
                      s.statistics[_o12] || (s.statistics[_o12] = {});

                      var _t54 = s.statistics[_o12][_n30] || 0;

                      s.statistics[_o12][_n30] = _t54 + e;
                      break;
                    }
                }
              }
            } catch (err) {
              _iterator33.e(err);
            } finally {
              _iterator33.f();
            }
          }
        }, {
          key: "_aggregateStatistics",
          value: function _aggregateStatistics(t, s) {
            var _iterator34 = _createForOfIteratorHelper(this._statisticFields),
                _step34;

            try {
              for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                var e = _step34.value;
                var _i15 = e.name;

                switch (e.statisticType) {
                  case "sum":
                  case "avg":
                  case "avg_angle":
                  case "mode":
                  case "norm":
                    t[_i15] || (t[_i15] = {});

                    for (var _e51 in s[_i15]) {
                      var _o13 = t[_i15][_e51] || 0;

                      t[_i15][_e51] = _o13 + s[_i15][_e51];
                    }

                }
              }
            } catch (err) {
              _iterator34.e(err);
            } finally {
              _iterator34.f();
            }
          }
        }, {
          key: "_normalizeStatistics",
          value: function _normalizeStatistics(t, s) {
            var e = {};

            var _iterator35 = _createForOfIteratorHelper(this._statisticFields),
                _step35;

            try {
              for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                var _i16 = _step35.value;
                var _o14 = _i16.name;

                switch (_i16.statisticType) {
                  case "norm":
                    {
                      var _i17 = t[_o14];
                      if (s && null == _i17.onStatisticNormalizationField) break;

                      if (s && _i17.onStatisticNormalizationField) {
                        e[_o14] = _i17.onStatisticField / _i17.onStatisticNormalizationField;
                        break;
                      }

                      e[_o14] = 0;
                      break;
                    }

                  case "sum":
                    {
                      if (!s) break;
                      var _t$_o = t[_o14],
                          _i18 = _t$_o.value,
                          _n31 = _t$_o.nanCount;
                      if (!(s - _n31)) break;
                      e[_o14] = _i18;
                      break;
                    }

                  case "avg":
                    {
                      if (!s) break;
                      var _t$_o2 = t[_o14],
                          _i19 = _t$_o2.value,
                          _n32 = _t$_o2.nanCount;
                      if (!(s - _n32)) break;
                      e[_o14] = _i19 / (s - _n32);
                      break;
                    }

                  case "avg_angle":
                    {
                      if (!s) break;
                      var _t$_o3 = t[_o14],
                          _i20 = _t$_o3.x,
                          _n33 = _t$_o3.y,
                          _a12 = _t$_o3.nanCount;
                      if (!(s - _a12)) break;

                      var l = _i20 / (s - _a12),
                          r = _n33 / (s - _a12),
                          h = 180 / Math.PI,
                          _c8 = Math.atan2(r, l) * h;

                      e[_o14] = _c8;
                      break;
                    }

                  case "mode":
                    {
                      var _s17 = t[_o14];
                      var _i21 = 0,
                          _n34 = null;

                      for (var _t55 in _s17) {
                        var _e52 = _s17[_t55];
                        _e52 > _i21 && (_i21 = _e52, _n34 = _t55);
                      }

                      e[_o14] = "null" === _n34 ? null : _n34;
                      break;
                    }
                }
              }
            } catch (err) {
              _iterator35.e(err);
            } finally {
              _iterator35.f();
            }

            return e;
          }
        }]);

        return n;
      }();

      var a = /*#__PURE__*/function () {
        function a(t, s, e) {
          _classCallCheck(this, a);

          this.count = 0, this.xTotal = 0, this.yTotal = 0, this.statistics = {}, this.displayId = 0, this.displayIds = new Set(), this.next = null, this.depth = 0, this.xNode = 0, this.yNode = 0, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.children = new Array(32);

          for (var _t56 = 0; _t56 < this.children.length; _t56++) {
            this.children[_t56] = null;
          }

          this.xNode = t, this.yNode = s, this.depth = e;
        }

        _createClass(a, [{
          key: "realloc",
          value: function realloc(t, s, e) {
            for (var _t57 = 0; _t57 < this.children.length; _t57++) {
              this.children[_t57] = null;
            }

            return this.xNode = t, this.yNode = s, this.depth = e, this.next = null, this.xGeohashTotal = 0, this.yGeohashTotal = 0, this.xTotal = 0, this.yTotal = 0, this.count = 0, this.statistics = {}, this.displayIds.clear(), this;
          }
        }, {
          key: "add",
          value: function add(t) {
            this.displayIds.add(t);
          }
        }, {
          key: "remove",
          value: function remove(t) {
            this.displayIds["delete"](t);
          }
        }, {
          key: "getLngLatBounds",
          value: function getLngLatBounds() {
            var t = this.depth,
                s = Math.ceil(t / 2),
                e = Math.floor(t / 2),
                o = 30 - (3 * s + 2 * e),
                n = 30 - (2 * s + 3 * e),
                _a13 = this.xNode << o,
                l = this.yNode << n;

            return Object(_geohashUtils_js__WEBPACK_IMPORTED_MODULE_2__["decodeGeohashXY"])({
              geohashX: _a13,
              geohashY: l
            }, this.depth);
          }
        }, {
          key: "find",
          value: function find(t, s, e, i, o, n) {
            if (i >= e) return this;

            var _a14 = 1 - i % 2,
                l = 3 * _a14 + 2 * (1 - _a14),
                r = 2 * _a14 + 3 * (1 - _a14),
                h = 30 - o - l,
                c = 30 - n - r,
                d = ((t & 7 * _a14 + 3 * (1 - _a14) << h) >> h) + ((s & 3 * _a14 + 7 * (1 - _a14) << c) >> c) * (8 * _a14 + 4 * (1 - _a14)),
                u = this.children[d];

            return null == u ? null : u.find(t, s, e, i + 1, o + l, n + r);
          }
        }]);

        return a;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-2d-layers-features-Pipeline-js-es5.js.map